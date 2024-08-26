---
title: How to set up AdGuard VPN for Linux on a Keenetic router
sidebar_position: 3
---

:::info System requirements

AdGuard VPN for Linux, also known as AdGuard VPN CLI, requires at least 22 MB of free storage space on your router’s built-in memory or external USB after other necessary packages are installed.

:::

## 1. Make sure that SSH is enabled on your router

The SSH client is used to send commands to your router from your computer.

To run the SSH server, the _SSH server_ system component must be installed in the Keenetic. You can do this on the _General system settings_ page in the _Component options_ section by clicking the _Component options_ button. Search for SSH server and install it. This will update your Keenetic OS.

Once the component is installed, the SSH server will be turned on automatically.

To see how to set up SSH server to have optimal security settings, visit [the Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360000387189-SSH-remote-access-to-the-Keenetic-command-line).

## 2. Determine your router’s IP address

The default IP address for most routers is `192.168.1.1` or `192.168.0.1`. If you’ve changed the IP address or if you’re unsure, you can find it by checking the IP configuration on a connected device.

### On Windows

1. Open Command Prompt:

```bash
ipconfig
```

1. Look for the _Default Gateway_ under your active network connection. This is your router’s IP address.

### On macOS and Linux

1. Open Terminal and run this on Linux:

   ```bash
   ip route | grep default
   ```

   Or this on Mac:

   ```text
   route -n get default
   ```

2. Look for the _default_ entry. The IP address next to it is your router’s IP address.

## 3) Use an SSH client to connect to the router

You’ll need an SSH client. Most Linux and macOS systems come with an SSH client pre-installed. For Windows, you can use PowerShell, the built-in SSH client in Windows 10/11, or a third-party application like PuTTY.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Open Terminal or PowerShell.

2. Run the SSH command:

```bash
ssh admin@192.168.1.1
```

Replace `192.168.1.1` with your router’s IP address.

1. If this is your first time connecting to the router via SSH, you’ll see a message like this:

```bash
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Type `yes` and press Enter.

1. Enter the router’s password when prompted. The default username is `root` and the default password is `keenetic`.

### PuTTY (Windows 8 and earlier)

1. Download and install PuTTY from [the official website](https://www.putty.org/).

2. Open PuTTY.

3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`)

4. Ensure the _Connection type_ is set to SSH.

5. Click _Open_.

6. When the Terminal window opens, log in. The default username is `root` and the default password is `keenetic`.

Once logged in, you can use various commands to interact with your router’s Linux-based operating system.

## 4. Install OPKG Entware

In Keenetic models equipped with a USB port (except Keenetic 4G), you can use the OPKG package manager. It allows you to install third-party software packages to expand routers capabilities.

Starting with version 3.7, for some Keenetic models, it is possible to write OPKG Entware to the [UBIFS](https://en.wikipedia.org/wiki/UBIFS) partition of the router's NAND flash memory, i.e. to the built-in memory of the router. Follow the steps below to install the Entware repository package system on a USB drive or in the router’s internal memory.

### How to install OPKG Entware on a USB drive

It is possible to install OPKG packages on the Keenetic models with USB ports that support USB flash drives. These are: KN-1410, KN-1710/1711, KN-1010/1011, KN-2510, KN-2410, KN-1810, KN-1910, KN-2310, KN-2010, KN-2110, KN-2610, KN-2710.

For detailed instructions, visit [the official Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021214160-Installing-the-Entware-repository-package-system-on-a-USB-drive).

### How to install OPKG Entware in the router’s internal memory

This method will work with the following list of models: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 with the KeeneticOS version 3.7 and later.

For detailed instructions, visit [the official Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory).

If your router doesn’t support installing packages on its internal memory, follow the instructions for installing packages on a USB drive.

## 5. Install AdGuard VPN CLI

In your SSH client, execute the following code to install the packages required for AdGuard VPN CLI:

```bash
opkg install curl sudo ca-certificates
```

Go to `cd/opt` folder and run the AdGuard VPN CLI installation script:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

When asked `Would you like to link the binary to /usr/local/bin?`,  reply `y`. If you fail to link the binary, run this line:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. Set up AdGuard VPN CLI

1. Log in to your account

   To use AdGuard VPN for Linux, you need an AdGuard account. You can sign up or log in on our [website](https://auth.adguard.com/login.html) or in Terminal.

   Before logging in, go to Terminal and make sure you are in the right shell interface. If you can see the following text:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   THIS SOFTWARE IS A SUBJECT OF KEENETIC LIMITED END-USER LICENCE AGREEMENT. BY USING IT YOU AGREE ON TERMS AND CONDITIONS HEREOF. FOR MORE INFORMATION PLEASE CHECK https://keenetic.com/legal
   ```

   Run this command to exit into the shell needed for the next steps:

   ```bash
   exec sh
   ```

   If you see the following text, you can continue the setup:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   To sign up or log in, type:

   ```bash
   adguardvpn-cli login
   ```

2. Connect to VPN

   Import the SSL certificate before connecting by running this command:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   ```

   This must be done before each session.

   Select a VPN server location that best suits your needs.

   In general, the closer the server is to you, the faster the connection.

   To view available locations, type:

   ```bash
   adguardvpn-cli list-locations
   ```

   To connect to a specific location, type:

   ```bash
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Replace `LOCATION_NAME` with the city, country, or ISO code of the location you want to connect to.

   For quick connect, type:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN will choose the fastest available location and remember it for future quick connections.

3. Adjust your settings

   Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

   To view all commands, type:

   ```bash
   adguardvpn-cli --help-all
   ```

4. Enter `yes` when asked “Would you like to set default routes in TUN mode?”

AdGuard VPN CLI will create a tun0 interface for VPN tunneling

## 7. Set up firewall rules

This step is designed to configure firewall rules on a Keenetic router to route traffic through AdGuard VPN.

1. **Install `iptables` by running this command via SSH:**

   ```bash
   opkg install iptables
   ```

   This line installs the `iptables` package, which is a tool for managing network packet filtering rules on Linux systems.

2. **Create a new shell script by running the following command:**

   ```bash

   cat << EOF > /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   #!/opt/bin/sh
   for ipt in iptables ip6tables; do
   \$ipt -D FORWARD -j ADGUARD_FORWARD || true
   \$ipt -F ADGUARD_FORWARD || true
   \$ipt -X ADGUARD_FORWARD || true
   \$ipt -N ADGUARD_FORWARD
   \$ipt -I FORWARD -j ADGUARD_FORWARD
   \$ipt -A ADGUARD_FORWARD -i br0 -o tun0 -j ACCEPT
   done
   EOF
   ```

   And make it executable:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

This will create a new shell script named `001-adguardvpn.sh` in the `/opt/etc/ndm/netfilter.d/` directory, which is where network-related scripts are typically stored on a Keenetic router.

The script creates a custom firewall rule to ensure that traffic from your LAN (`br0`) is routed through the AdGuard VPN interface (`tun0`). It first cleans up any previous rules related to this configuration, then sets up new rules to direct the traffic appropriately.

## 8. Set up automatic launch for AdGuard VPN CLI

The following script is designed to automatically establish a VPN connection using AdGuard VPN on your Keenetic router when the WAN interface becomes available (e.g., after a reboot or reconnecting to the Internet).

Run the following command:

```bash
cat << E0F > /opt/etc/ndm/wan.d/001-adguardvpn.sh
#!/opt/bin/sh
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
/opt/adguardvpn_cli/adguardvpn-cli connect &
exit 0
E0F
```

And make it executable:

```bash
chmod +x /opt/etc/ndm/wan.d/001-adguardvpn.sh
```

The script named`001-adguardvpn.sh` will be saved to `/opt/etc/ndm/wan.d/` .

It will start AdGuard VPN when Internet is connected.

Reboot your router to finish setup.

Congrats! Now you have a router secured with AdGuard VPN.
