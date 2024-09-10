---
title: How to set up AdGuard VPN for Linux on an Asuswrt-Merlin router
sidebar_position: 4
---

:::info System requirements

1. AdGuard VPN CLI requires at least 22 MB of free storage space on your router’s disk or external USB after installing necessary packages.
2. **Asuswrt-Merlin firmware**: Make sure your router is running the Asuswrt-Merlin firmware.
3. **USB drive**: A USB drive formatted in a native Linux file system (ext2, ext3, or ext4). We will go through the formatting process in this guide.

:::

## 1. Determine your router’s IP address

The default IP address for most routers is `192.168.1.1` or `192.168.0.1`. If you’ve changed the IP address or if you’re unsure, you can find it by checking the IP configuration on a connected device.

### On Windows

1. Open Command Prompt:

    ```bash
    ipconfig
    ```

1. Look for the *Default Gateway* under your active network connection. This is your router’s IP address.

### On Mac/Linux

1. Open Terminal and run this command for Linux:

    ```bash
    ip route | grep default
    ```

    Or this one for Mac:

    ```bash
    route -n get default
    ```

1. Look for the *default* entry. The IP address next to it is your router’s IP address.

## 2. Make sure SSH and JFFS custom scripts are enabled on the router

First, make sure that SSH access is enabled on your router. This setting is usually found in the router’s web interface. JFFS custom scripts will be used to set routing rules.

1. Log in to the web interface. This is usually accessible via a web browser at [`http://192.168.1.1`](http://192.168.1.1/). Otherwise, replace [`192.168.1.1`](http://192.168.1.1/) with your router’s IP address.

1. Scroll down to *Advanced settings*, *Administration* → *System*.

1. Scroll to *Service*, click *Enable SSH* → *LAN*.

1. Select *22* in *Port* and *Yes* in *Allow Password Login*.

1. Go up to *Persistent JFFS2 partition* and enable *JFFS custom scripts and configs*.

1. Click *Apply* at the bottom of the page.

## 3. Use an SSH client to connect to the router

You’ll need an SSH client. Most Linux and macOS systems come with an SSH client pre-installed. For Windows, you can use PowerShell, the built-in SSH client in Windows 10/11, or a third-party application like PuTTY.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Open Terminal or PowerShell.
1. Run the SSH command:

    ```bash
    ssh admin@192.168.1.1
    ```

    Replace `192.168.1.1` with your router’s IP address and `admin` with your admin username.

1. If this is your first time connecting to the router via SSH, you’ll see a message like this:

    ```text
    The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
    ECDSA key fingerprint is SHA256:...
    Are you sure you want to continue connecting (yes/no/[fingerprint])?
    ```

    Type `yes` and press Enter.

1. Enter the router’s password when prompted. The SSH login username and password are the same as the admin credentials.

### PuTTY (Windows below 10)

1. Download and install PuTTY from [the official website](https://www.putty.org/).
1. Open PuTTY.
1. In the *Host Name (or IP address)* field, enter your router’s IP address (e.g., `192.168.1.1`).
1. Make sure the *Connection type* is set to SSH.
1. Click *Open*.
1. When the Terminal window opens, enter the router’s credentials. The SSH login username and password are the same as the admin credentials.

## 4. Install Entware using SSH

Once logged into your SSH client, you can use various commands to interact with your router’s Linux-based operating system. To proceed, you will need to install Entware OPKG Manager. It allows you to install third-party software packages to expand router capabilities. Skip to the next step if you already have it installed.

Note that you cannot use both Optware (outdated alternative) and Entware at the same time.

The Asus DownloadMaster is based on Optware, and therefore is not compatible with Entware. You will have to uninstall DownloadMaster and look at the alternatives provided by Entware.

After uninstalling, make sure that "asusware.arm" or "asusware.*" dir on the mounted disk partition is deleted. Otherwise, Entware won't work properly. After uninstalling DownloadMaster, make sure the router is rebooted.

You will need to plug a USB disk that's formatted in a native Linux file system (ext2, ext3 or ext4). To format a disk, use amtm. Plug a USB disk into your router, then start amtm with:

```bash
amtm
```

Use this option to format a disk and mount it to router:

```bash
fd
```

Go through the formatting process and select the recommended options. All files from the USB disk will be deleted. For this setup to work, USB disk should always stay connected.

After mounting your USB, the router will reboot. To start the installation process, first reconnect to your router over SSH.

Then launch the amtm application by simply running:

```bash
amtm
```

The menu will offer you the option `ep` to initiate the Entware installation.

If you are running a firmware version older than 384.15 (or 384.13_4 for the RT-AC87U and RT-AC3200), then you start the installation by running the following command instead.

```bash
entware-setup.sh
```

If the entware-setup.sh script is not found, download and run the following script to install Entware:

```bash
wget -O - http://bin.entware.net/armv7sf-k3.2/installer/generic.sh | sh
```

Exit amtm by pressing `e`.

## 5. Install AdGuard VPN CLI

Update the package lists:

```bash
opkg update
```

Install required packages:

```bash
opkg install curl ca-certificates
```

Go to /opt folder by running `cd /opt`  and run the AdGuardVPN CLI installation script:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

When asked “Would you like to link the binary to /usr/local/bin?“, reply `y`. If failed to link the binary, run this line:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

Import the SSL certificate and the tun module and set an alternative folder for the user directory. By default, it will be stored in /tmp and you’ll lose your settings after a reboot. Run this before each new session.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. Set up AdGuard VPN CLI

1. Log in to your account

    To use AdGuard VPN for Linux, you need an AdGuard account.

    You can sign up on our [website](https://auth.adguard.com/login.html) or in the Terminal.

    To sign up or log in, type:

    ```jsx
    adguardvpn-cli login
    ```

1. Connect to VPN

    Select a VPN server location that best suits your needs.

    In general, the closer the server, the faster the connection.

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

    Enter `yes` when asked “Would you like to set default routes in TUN mode?”

    AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

1. Adjust your settings

    Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

    To view all commands, type:

    ```jsx
    adguardvpn-cli --help-all
    ```

## 7. Set up your firewall rules and auto-launch for AdGuard VPN

This step configures firewall rules on an Asuswrt-Merlin router to route traffic through AdGuard VPN.

1. Create a new script by running the following command:

    ```bash
    cat << 'EOF' > /jffs/scripts/wan-event
    #!/bin/sh

    if [ "$2" = "connected" ]; then
    export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
    export HOME=/opt/home/admin
    modprobe tun
    /opt/adguardvpn_cli/adguardvpn-cli connect &
    for ipt in iptables ip6tables; do
        $ipt -D FORWARD -j ADGUARD_FORWARD || true
        $ipt -F ADGUARD_FORWARD || true
        $ipt -X ADGUARD_FORWARD || true
        $ipt -N ADGUARD_FORWARD
        $ipt -I FORWARD -j ADGUARD_FORWARD
        $ipt -A ADGUARD_FORWARD -i br0 -o tun0 -j ACCEPT
    done
    exit 0
    fi
    EOF
    ```

    And make it executable:

    ```bash
    chmod a+rx /jffs/scripts/wan-event
    ```

    If you have more brX interfaces, make sure to include them in the script as well to route their traffic. Alternatively, make sure to specify a different routing rule for those interfaces.

    This script will ensure that all traffic goes through the VPN tunnel. After rebooting or reconnecting to the Internet, AdGuard VPN will connect automatically to your last used location.

1. Reboot your router to finish setup.

    Congrats! Now you have a router secured with AdGuard VPN.

    If you want to SSH into your router again to send any commands to AdGuard VPN, make sure to run this first:

    ```bash
    export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
    export HOME=/opt/home/admin
    modprobe tun
    ```
