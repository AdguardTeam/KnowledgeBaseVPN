---
title: Sådan opsættes AdGuard VPN til Linux på en OpenWRT-router
sidebar_position: 2
---

:::info Systemkrav

AdGuard VPN til Linux, også kaldet AdGuard VPN CLI, kræver mindst 22 MB ledig lagerplads på routerens indbyggede lager/hukommelse eller eksterne USB, efter at andre nødvendige pakker er installeret.

:::

## 1. Sørg for, at routeren har SSH aktiveret

Denne indstilling findes normalt i routerens webgrænseflade.

Til OpenWrt:

1. Log ind på webgrænsefladen. Denne er typisk tilgængelig via en webbrowser på [`http://192.168.1.1`](http://192.168.1.1/).

2. Gå til _System_ → _Håndtering_.

3. Sørg for, at _SSH-adgang_ er aktiveret.

Som standard tillader OpenWrt SSH-adgang til routeren.

## 2. Fastslå routerens IP-adresse

Typiske standard IP-adresser på mange routere er `192.168.1.1` eller `192.168.0.1`. Har man ændret IP-adressen, eller er man usikker på den, kan adressen findes ved at tjekke IP-opsætningen på en tilsluttet enhed.

### Windows

1. Åbn en Kommandoprompt:

   ```text
   ipconfig
   ```

2. Kig efter _Standard Gateway_ under den aktive netværksforbindelse. Dette vil være routerens IP-adresse.

### macOS og Linux

1. Åbn Terminal på Linux, og eksekvér denne kommando:

   ```text
   ip route | grep default
   ```

   Eller på Mac, denne:

   ```text
   route -n get default
   ```

2. Kig efter _standard_-posten. IP-adressen ved siden af den er router IP-adressen.

## 3) Brug en SSH-klient til at oprette forbindelse til routeren

De fleste Linux- og macOS-systemer leveres med en præinstalleret SSH-klient. Til Windows kan man bruge PowerShell, den indbyggede SSH-klient i Windows 10/11 eller en tredjepartsapplikation såsom PuTTY.

### Indbygget SSH-klient (Linux, macOS og Windows 10/11)

1. Åbn Terminal eller PowerShell.

2. Eksekvér SSH-kommandoen:

   ```text
   ssh root@192.168.1.1
   ```

   Erstat `192.168.1.1` med routerens aktuelle IP-adresse.

3. Er første gang, der oprettes forbindelse til routeren via SSH, vises en meddelelse i stil med denne:

   ```text
   Ægtheden af værten '192.168.1.1 (192.168.1.1)' kan ikke fastslås.
    ECDSA-nøglefingeraftryk er SHA256:...
    Sikker på, at der fortsat skal oprettes forbindelse (Ja/Nej/[Fingeraftryk])
   ```

   Skriv "Ja", og tryk på Retur.

4. Angiv på anmodning routerens adgangskode. Standardadgangskoden til OpenWrt er typisk tom (tryk blot på Retur), men man bør have angivet en adgangskode under den indledende opsætning.

### PuTTY (Windows)

1. Download og installér PuTTY fra [det officielle websted](https://www.putty.org/).

2. Åbn PuTTY.

3. Angiv i feltet _Værtsnavn (eller IP-adresse)_ routerens IP-adresse (f.eks. `192.168.1.1`).

4. Sørg for, at _Forbindelsestype_ er sat til SSH.

5. Klik på _Åbn_.

6. Når terminalvinduet åbnes, log ind. Standardbrugernavnet er `root` og standardadgangskoden er `keenetic`.

## 4) Basis SSH-kommandoer

Efter indlogning, kan forskellige kommandoer bruges til interaktion med routerens Linux-baserede operativsystem.

Opdatér pakkelister (OpenWrt):

```text
opkg update
```

Installér de nødvendige pakker:

```text
opkg install curl kmod-tun ca-certificates
```

Eksekvér AdGuard VPN CLI installations-scriptet:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Opsæt AdGuard VPN CLI

1. Log ind på kontoen

   Brug af AdGuard VPN til Linux kræver en AdGuard-konto.

   Tilmeld eller log ind på vores [websted](https://auth.adguard.com/login.html) eller i Terminal.

   For at tilmelde eller logge ind, skriv:

   ```jsx
   adguardvpn-cli login
   ```

   Bemærk: Mislykkes det at linke den binære til '/usr/local/bin', brug da den fulde filsti til at eksekvere alle kommandoer. F.eks. `/opt/adguardvpn_cli/adguardvpn-cli login`

2. Opret forbindelse til VPN

   Vælg en VPN-serverlokation efter ønske.

   Det gælder generelt, at jo tættere på serveren er, jo hurtigere er forbindelsen.

   For at se tilgængelige lokationer, skriv:

   ```jsx
   adguardvpn-cli list-locations
   ```

   For at oprette forbindelse til en bestemt lokation, skriv:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Erstat LOCATION_NAME med byen, landet eller ISO-koden for den placering, hvortil der skal oprettes forbindelse.

   For hurtig forbindelse, skriv:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN will choose the fastest available location and remember it for future quick connections.

3. Adjust your settings

   Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

   To view all commands, type:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

## 6) Set up firewall rules

You can do it in the web interface or in the command line. Steps below describe setup via SSH command line.

1. Add a new unmanaged interface via SSH

   ```shell
   ssh admin@router_ip
   uci set network.tun0='interface'
   uci set network.tun0.proto='none'
   uci set network.tun0.device='tun0'
   uci commit network
   /etc/init.d/network reload
   ```

2. Add tun0 to WAN zone

   For traffic to go through VPN, add tun0 to WAN zone.
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

## 7) Set up automatic launch for AdGuard VPN CLI

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
