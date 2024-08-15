---
title: Setting up on a router
sidebar_position: 2
---

:::info System requirements

AdGuard VPN CLI requires at least 22 MB of free storage space on your router’s disk or external USB after installing necessary packages.

:::

## 1. Ensure SSH is enabled on the router

This setting is usually found in the router’s web interface.

For OpenWrt:

1. Log into the web interface. Typically, this is accessible via a web browser at [`http://192.168.1.1`](http://192.168.1.1/).

1. Navigate to ***System*** → ***Administration***.

1. Make sure that ***SSH Access*** is enabled.

By default, OpenWrt allows SSH access to the router.

## 2. Determine your router’s IP address

The default IP address for most routers is `192.168.1.1` or `192.168.0.1`. If you’ve changed the IP address or if you’re unsure, you can find it by checking the IP configuration on a connected device.

On Windows:

1. Open command prompt:

```text
ipconfig
```

1. Look for the ***Default Gateway*** under your active network connection. This is your router’s IP address.

On Mac/Linux:

1. Open Terminal:

```text
ip route | grep default
```

1. Look for the ***default*** entry. The IP address next to it is your router’s IP address.

## 3. Use an SSH client to connect to the router

Most Linux and macOS systems come with an SSH client pre-installed. For Windows, you can use PowerShell, the built-in SSH client in Windows 10/11, or a third-party application like PuTTY.

Using built-in SSH client (for Linux, macOS, and Windows 10/11):

1. Open Terminal or PowerShell.

1. Run the SSH command:

```text
ssh root@192.168.1.1
```

Replace `192.168.1.1` with your router’s IP address.

1. If this is your first time connecting to the router via SSH, you’ll see a message like:

```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256: ...
   Are you sure you want to continue connecting? (Yes/No/[Fingerprint])
```

Type `Yes` and press Enter.

1. Enter the router’s password when prompted. The default password for OpenWrt is typically empty (just press Enter), but you should have set a password during the initial setup.

Using PuTTY (Windows):

1. Download and install PuTTY from [the official website](https://www.putty.org/).

1. Open PuTTY.

1. In the ***Host Name (or IP address)*** field, enter your router’s IP address (e.g., `192.168.1.1`).

1. Ensure the ***Connection type*** is set to SSH.

1. Click ***Open***.

1. When the Terminal window opens, log in with the username `root` and the router’s password.

## 4. Basic SSH commands

Once logged in, you can use various commands to interact with your router’s Linux-based operating system.

Update package lists (OpenWrt):

```text
opkg update
```

Install required packages:

```text
opkg install curl kmod-tun ca-certificates
```

Run the AdGuardVPN CLI installation script:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Set up AdGuard VPN CLI

1. Log in to your account

    To use AdGuard VPN for Linux, you need an AdGuard account.

    You can sign up on our [website](https://auth.adguard.info/login.html) or in the Terminal.

    To log in or create an account, type:

    ```jsx
    adguardvpn-cli login
    ```

    Note: If failed to link the binary to '/usr/local/bin’, use full file path to run all commands. For example, `/opt/adguardvpn_cli/adguardvpn-cli login`

1. Connect to VPN

    Select a VPN server location that best suits your needs.

    In general, the closer the server is to you, the faster the connection.

    To view available locations, type:

    ```jsx
    adguardvpn-cli list-locations
    ```

    To connect to a specific location, type:

    ```jsx
    adguardvpn-cli connect -l LOCATION_NAME
    ```

    Replace LOCATION_NAME with the city, country, or ISO code of the location you want to connect to.

    For quick connect, type:

    ```jsx
    adguardvpn-cli connect
    ```

    AdGuard VPN will choose the fastest available location and remember it for future quick connections.

1. Adjust your settings

    Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

    To view all commands, type:

    ```jsx
    adguardvpn-cli --help-all
    ```

    AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

## 6. Set up firewall rules

You can do it in the web interface or in the command line. Steps below describe setup via SSH command line.

1. Add a new unmanaged-interface via SSH

```shell
ssh admin@router_ip
uci set network.tun0='interface'
uci set network.tun0.proto='none'
uci set network.tun0.device='tun0'
uci commit network
/etc/init.d/network reload
```

1. Add tun0 to WAN-zone

For traffic to go through VPN, add tun0 to WAN-zone.
The WAN interface which connects to the Internet will typically be in a zone named `wan` or something similar. Check your router's configuration files or firewall settings to find out which zone is associated with the WAN interface.

To do so, list the existing firewall zones:

```shell
uci show firewall
```

This will show a config file with all zones listed. Look for a section like `firewall.@zone[1]` or similar where `option name 'wan'` is defined. The number `[1]` could be different depending on your configuration.

Run this SSH command, replace `zone[1]` with correct  ‘wan’ zone identified before:

```shell
uci show firewall | grep "=zone"
uci add_list firewall.@zone[1].network='tun0'
uci commit firewall
/etc/init.d/firewall reload
```

If you want to disable all traffic that is not protected by VPN, run the following command. This way you won’t have an Internet connection at all if VPN disconnects. If you choose not to do this step, your real IP will be exposed if the VPN disconnects.

```shell
uci del_list firewall.@zone[1].network='wan'
uci del_list firewall.@zone[1].network='wan6'
uci commit firewall
/etc/init.d/firewall reload
```

If you’ve changed your mind and want to allow direct traffic, run the following command:

```shell
uci add_list firewall.@zone[1].network='wan'
uci add_list firewall.@zone[1].network='wan6'
uci commit firewall
/etc/init.d/firewall reload
```

## 7.  Set up automatic launch for AdGuard VPN CLI

To automatically launch AdGuard VPN CLI after rebooting the router, create a file at `…/etc/init.d/adguardvpn`.

Paste this into the file:

```text
#!/bin/sh /etc/rc.common
# Example script
# Copyright (C) 2007 OpenWrt.org
START=99
STOP=99
HOME=/root
start() {
        /opt/adguardvpn_cli/adguardvpn-cli connect
}

stop() {
        /opt/adguardvpn_cli/adguardvpn-cli disconnect

}
```

Run this to grant access for auto-launch and enable it:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```