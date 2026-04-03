---
title: How to install AdGuard VPN CLI on MikroTik RouterOS
sidebar_position: 5
---

:::info System requirements

- RouterOS 7.6+ with Container feature and start-on-boot support
- SSH access to the router

:::info

This guide explains how to install and run the AdGuard VPN CLI Docker container on MikroTik routers running RouterOS.

These settings have been tested on RouterOS 7.22. It is recommended to use the latest stable version of RouterOS for better compatibility.

## RouterOS Configuration

### 1. Connect to the router via SSH

```bash
ssh admin@192.168.1.1
```

:::note

Replace the IP with your router's address

:::

### 2. Check if the container package is installed

```bash
/system/package/print
```

Find the `container` package in the list. If it's not there, install it:

#### Installing container package

1. Download the `.npk` file for your architecture and OS version from [the official website](https://mikrotik.com/download)

1. Upload the `.npk` file to the router:

    ```bash
    scp container-7.X-platform.npk admin@192.168.1.1:
    ```

    Replace the IP with your router's address.

1. Verify the file is uploaded:

    ```bash
    /file/print
    ```

    You should see the `container-X.XX.npk` file.

1. Reboot the router:

    ```bash
    /system/reboot
    ```

    After reboot, the `.npk` file will disappear. This is expected, it means the package was succesfully installed.

1. Verify:

    ```bash
    /system/package/print
    ```

    The `container` package should appear in the list.

### 3. Enable Container mode

Enable Container mode and follow the instructions the command gives you. You will need to confirm the device-mode change by performing a cold reboot (physically unplugging and replugging the power).

```bash
/system/device-mode/update container=yes
```

:::warning

Do not close the terminal or interrupt the command before unplugging the power — this will cancel the operation.

:::

### 4. Verify that container mode is active

```bash
/system/device-mode/print
```

Should show `container: yes`

### 5. Set up networking for the container

#### How it works

In this setup:

- The container acts as a VPN gateway
- RouterOS routes selected traffic through a separate routing table (`via_vpn`)
- Traffic is forwarded to the container and then tunneled via AdGuard VPN

Flow:

LAN → RouterOS → Routing rule → Container → VPN → Internet

:::warning

This setup routes all LAN traffic through the VPN container.
If misconfigured, it may disrupt network connectivity or cause loss of internet access.

:::

Create a veth interface:

```bash
/interface/veth/add name=veth1 address=172.17.0.2/24 gateway=172.17.0.1
```

Create a bridge:

```bash
/interface/bridge/add name=docker
```

Add veth to bridge:

```bash
/interface/bridge/port/add bridge=docker interface=veth1
```

Assign an IP address to the bridge:

```bash
/ip/address/add address=172.17.0.1/24 interface=docker
```

Configure NAT for container internet access:

```bash
/ip/firewall/nat/add chain=srcnat src-address=172.17.0.0/24 out-interface=ether1 action=masquerade
```

:::note

Replace `ether1` with the name of your WAN interface (e.g. `ether3`, `ether5`). To find it:

1. Run `/ip/route/print` and find the default route (`0.0.0.0/0`, routing-table=main) — note its gateway IP
2. In the same output, find the connected route (`DAc`) that covers that gateway IP — the interface listed there is your WAN interface

:::

Create routing table for VPN

```bash
/routing/table/add name=via_vpn fib
```

Add a default route via the container

```bash
/ip/route/add dst-address=0.0.0.0/0 gateway=172.17.0.2@main routing-table=via_vpn distance=1 check-gateway=ping
```

Add a routing rule

```bash
/routing/rule/add src-address=192.168.88.0/24 action=lookup table=via_vpn
```

:::note

Replace the IP with your LAN network address

:::

Set DNS servers for LAN clients to a public DNS

```bash
/ip/dhcp-server/network/set [find address="192.168.88.0/24"] dns-server=1.1.1.1,8.8.8.8
```

## Running the Container

### Pull image directly from Docker Hub

#### 1. Configure Container registry

Set Docker Hub URL and temporary directory for image extraction

```bash
/container/config/set registry-url=https://registry-1.docker.io tmpdir=disk1/tmp
```

#### 2. Add the container and pull the image

```bash
/container/add name=adguardvpn-cli remote-image=adguard/adguardvpn-cli:latest interface=veth1 root-dir=disk1/adguardvpn-cli start-on-boot=yes logging=yes
```

**Available tags:**

- `adguard/adguardvpn-cli:latest` - latest stable version
- `adguard/adguardvpn-cli:nightly` - latest nightly build
- `adguard/adguardvpn-cli:beta` - latest beta version
- `adguard/adguardvpn-cli:1.7.6-nightly` - specific version

**Parameters:**

- `name=adguardvpn-cli` - container name
- `remote-image` - Docker Hub image name
- `interface=veth1` - network interface for the container
- `root-dir=disk1/adguardvpn-cli` - directory for container files
- `start-on-boot=yes` - auto-start on router reboot
- `logging=yes` - enable logging

#### 3. Check download status

```bash
/container/print
```

The image will be automatically downloaded and extracted. Wait for the download to complete (status will change to `stopped`).

#### 4. Start the container

```bash
/container/start adguardvpn-cli
```

Check the container status

```bash
/container/print
```

The container should have the `R` (RUNNING) flag in the first column.

## Initial Setup and AdGuard VPN CLI Authorization

On first launch, the container will not be able to connect to VPN as authentication is required.

### 1. Open a shell inside the container

```bash
/container/shell adguardvpn-cli
```

### 2. Set up AdGuard VPN CLI

1. Log in to your account

    To use AdGuard VPN for Linux, you need an AdGuard account.

    You can sign up or log in on our [website](https://auth.adguardaccount.com/login.html) or in the Terminal.

    To sign up or log in, type:

    ```bash
    adguardvpn-cli login
    ```

    Note: If failed to link the binary to `/usr/local/bin`, use full file path to run all commands. For example, `/opt/adguardvpn_cli/adguardvpn-cli login`

1. Connect to VPN

    Select a VPN server location that best suits your needs.

    In general, the closer the server is to you, the faster the connection.

    To view available locations, type:

    ```bash
    adguardvpn-cli list-locations
    ```

    To connect to a specific location, type:

    ```bash
    adguardvpn-cli connect -l LOCATION_NAME
    ```

    Replace LOCATION_NAME with the city, country, or ISO code of the location you want to connect to.

    For quick connect, type:

    ```bash
    adguardvpn-cli connect
    ```

    AdGuard VPN will choose the fastest location available and remember it for future quick connections.

1. Adjust your settings

    Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

    To view all commands, type:

    ```bash
    adguardvpn-cli --help-all
    ```

    AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

### 3. Exit the shell

```bash
exit
```

### 4. Restart the container

```bash
/container/stop adguardvpn-cli
/container/start adguardvpn-cli
```

After restart, the container will automatically connect to the VPN.

## Check that the VPN is working

### 1. Enter the container shell

```bash
/container/shell adguardvpn-cli
```

### 2. Check VPN status

```bash
adguardvpn-cli status
```

:::note

For additional information on container configuration, networking, and alternative installation methods, see the [official MikroTik Container documentation](https://help.mikrotik.com/docs/spaces/ROS/pages/84901929/Container)

:::
