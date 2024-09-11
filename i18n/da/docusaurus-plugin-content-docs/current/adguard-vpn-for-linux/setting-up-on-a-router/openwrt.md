---
title: Sådan opsættes AdGuard VPN til Linux på en OpenWRT-router
sidebar_position: 3
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

   AdGuard VPN vælger den hurtigste lokation tilgængelig og husker den til fremtidige hurtige forbindelser.

3. Justér indstillingerne

   Få en liste over alle tilgængelige AdGuard VPN-kommandoer og tilpas VPN-klienten efter behov.

   For at se alle kommandoer, skriv:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI opretter en tun0-grænseflade til VPN-tunneling.

## 6) Opsæt firewall-regler

Det kan gøres via webgrænsefladen eller på kommandolinjen. Trinene nedenfor beskriver opsætning via en SSH-kommandolinje.

1. Tilføj en ny ikke-håndteret grænseflade via SSH

   ```shell
   ssh admin@router_ip
   uci set network.tun0='interface'
   uci set network.tun0.proto='none'
   uci set network.tun0.device='tun0'
   uci commit network
   /etc/init.d/network reload
   ```

2. Tilføj tun0 til WAN-zonen

   For at trafikken skal rutes igennem VPN, tilføj tun0 til WAN-zonen.
   WAN-grænsefladen, der forbinder til internet, vil typisk være i en zone ved navn 'wan' eller noget tilsvarende. Tjek routerens opsætningsfiler eller firewall-indstillinger for at finde ud af, hvilken zone der tilknyttet WAN-grænsefladen.

   For at gøre dette, oplist de eksisterende firewall-zoner:

   ```shell
   uci show firewall
   ```

   Dette vil vise en opsætningsfil med alle zoner oplistet. Se efter en sektion såsom `firewall.@zone[1]` el.lign., hvor `indstillingsnavn 'wan'` er defineret. Tallet "[1]" kan være anderledes afhængigt af opsætningen.

   Eksekvér denne SSH-kommando, erstat 'zone[1]' med den korrekte 'wan'-zone identificeret tidligere:

   ```shell
   uci show firewall | grep "=zone"
   uci add_list firewall.@zone[1].network='tun0'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   Vil man deaktivere al trafik, som ikke er beskyttes af VPN, eksekvér flg. kommando. På denne måde vil der slet ikke være internetforbindelse, hvis VPN afbrydes. Vælger man ikke at udføre dette trin, vil den reelle IP blive afsløret, hvis VPN afbrydes.

   ```shell
   uci del_list firewall.@zone[1].network='wan'
   uci del_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   Ombestemmer man sig og vil tillade direkte trafik, eksevér da flg. kommando:

   ```shell
   uci add_list firewall.@zone[1].network='wan'
   uci add_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

## 7) Opsæt automatisk start af AdGuard VPN CLI

For automatisk at starte AdGuard VPN CLI efter genstart af routeren, opret en fil på `…/etc/init.d/adguardvpn`.

Indsæt følgende i filen:

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

Eksekvér dette for at give adgang til og aktivere autostart:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
