---
title: Sådan opsættes AdGuard VPN til Linux på en Keenetic-router
sidebar_position: 3
---

:::info Systemkrav

AdGuard VPN til Linux, også kaldet AdGuard VPN CLI, kræver mindst 22 MB ledig lagerplads på routerens indbyggede hukommelse eller eksterne USB, efter at andre nødvendige pakker er installeret.

:::

## 1. Sørg for, at routeren har SSH aktiveret

SSH-klienten bruges til at sende kommandoer til routeren fra en computer.

For at køre SSH-serveren skal _SSH-server_-systemkomponenten være installeret i Keenetic. Dette kan gøres fra siden _Generelle systemindstillinger_ i afsnittet _Komponentindstillinger_ ved at klikke på knappen _Komponentindstillinger_. Søg efter SSH-server og installér den. Dette vil opdatere Keenetic-OS'et.

Når komponenten er installeret, vil SSH-serveren automatisk blive slået til.

Besøg [Keenetic Wiki'en](https://help.keenetic.com/hc/en-us/articles/360000387189-SSH-remote-access-to-the-Keenetic-command-line) for at se, hvordan SSH-serveren opsættes for optimale sikkerhedsindstillinger.

## 2. Fastslå routerens IP-adresse

Typiske standard IP-adresser på mange routere er `192.168.1.1` eller `192.168.0.1`. Har man ændret IP-adressen, eller er man usikker på den, kan adressen findes ved at tjekke IP-opsætningen på en tilsluttet enhed.

### Windows

1. Åbn en Kommandoprompt:

```bash
ipconfig
```

1. Kig efter _Standard Gateway_ under den aktive netværksforbindelse. Dette vil være routerens IP-adresse.

### macOS og Linux

1. Åbn Terminal på Linux, og eksekvér denne kommando:

   ```bash
   ip route | grep default
   ```

   Eller på Mac, denne:

   ```text
   route -n get default
   ```

2. Kig efter _standard_-posten. IP-adressen ved siden af den er router IP-adressen.

## 3) Brug en SSH-klient til at oprette forbindelse til routeren

Der skal bruges en SSH-klient. De fleste Linux- og macOS-systemer leveres med en præinstalleret SSH-klient. Til Windows kan man bruge PowerShell, den indbyggede SSH-klient i Windows 10/11 eller en tredjepartsapplikation såsom PuTTY.

### Indbygget SSH-klient (Linux, macOS og Windows 10/11)

1. Åbn Terminal eller PowerShell.

2. Eksekvér SSH-kommandoen:

```bash
ssh admin@192.168.1.1
```

Erstat `192.168.1.1` med routerens aktuelle IP-adresse.

1. Er første gang, der oprettes forbindelse til routeren via SSH, vises en meddelelse i stil med denne:

```bash
   Ægtheden af værten '192.168.1.1 (192.168.1.1)' kan ikke fastslås.
   ECDSA-nøglefingeraftryk er SHA256:...
   Sikker på, at der fortsat skal oprettes forbindelse (ja/nej/[fingeraftryk])?
```

Skriv "ja", og tryk på Retur.

1. Angiv på anmodning routerens adgangskode. Standardbrugernavnet er `root` og standardadgangskoden er `keenetic`.

### PuTTY (Windows 8 og tidligere)

1. Download og installér PuTTY fra [det officielle websted](https://www.putty.org/).

2. Åbn PuTTY.

3. Angiv i feltet _Værtsnavn (eller IP-adresse)_ routerens IP-adresse (f.eks. `192.168.1.1`)

4. Sørg for, at _Forbindelsestype_ er sat til SSH.

5. Klik på Åbn\*.

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

   Erstat **LOCATION_NAME** med byen, landet eller ISO-koden for den placering, hvortil der skal oprettes forbindelse.

   For hurtig forbindelse, skriv:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN vælger den hurtigste lokation tilgængelig og husker den til fremtidige hurtige forbindelser.

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