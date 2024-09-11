---
title: Sådan opsættes AdGuard VPN til Linux på en Asuswrt-Merlin router
sidebar_position: 4
---

:::info Systemkrav

1. AdGuard VPN CLI kræver minimum 22 MB ledig lagerplads på routerens disk eller ekstern USB efter installation af nødvendige pakker.
2. **Asuswrt-Merlin firmware**: Sørg for, at routeren kører Asuswrt-Merlin firmwaren.
3. **USB-drev**: Et USB-drev formateret med et Linux-filsystem (ext2, ext3 eller ext4). Vi vil gennemgå formateringsprocessen i denne vejledning.

:::

## 1. Fastslå routerens IP-adresse

Typiske standard IP-adresser på mange routere er `192.168.1.1` eller `192.168.0.1`. Har man ændret IP-adressen, eller er man usikker på den, kan adressen findes ved at tjekke IP-opsætningen på en tilsluttet enhed.

### Windows

1. Åbn en Kommandoprompt:

   ```bash
   ipconfig
   ```

2. Kig efter _Standard Gateway_ under den aktive netværksforbindelse. Dette vil være routerens IP-adresse.

### Mac/Linux

1. Åbn Terminal på Linux, og eksekvér denne kommando:

   ```bash
   ip route | grep default
   ```

   Eller denne på Mac:

   ```bash
   route -n get default
   ```

2. Kig efter _standard_-posten. IP-adressen ved siden af den er router IP-adressen.

## 2) Make sure SSH and JFFS custom scripts are enabled on the router

Sørg først for, at routeren har SSH aktiveret. Denne indstilling findes normalt i routerens webgrænseflade. JFFS-tilpassede scripts vil blive brugt til at angive routingregler.

1. Log ind på webgrænsefladen. Denne er typisk tilgængelig via en webbrowser på [`http://192.168.1.1`](http://192.168.1.1/). Ellers erstat [`192.168.1.1`](http://192.168.1.1/) med routerens reelle IP-adresse.

2. Scroll down to _Advanced settings_, _Administration_ → _System_.

3. Scroll to _Service_, click _Enable SSH_ → _LAN_.

4. Select _22_ in _Port_ and _Yes_ in _Allow Password Login_.

5. Go up to _Persistent JFFS2 partition_ and enable _JFFS custom scripts and configs_.

6. Click _Apply_ at the bottom of the page.

## 3) Brug en SSH-klient til at oprette forbindelse til routeren

Der skal bruges en SSH-klient. De fleste Linux- og macOS-systemer leveres med en præinstalleret SSH-klient. I Windows kan man bruge PowerShell, den indbyggede SSH-klient i Windows 10/11 eller en tredjepartsapplikation såsom PuTTY.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Åbn Terminal eller PowerShell.

2. Eksekvér SSH-kommandoen:

   ```bash
   ssh admin@192.168.1.1
   ```

   Erstat `192.168.1.1` med routerens IP-adresse og `admin` med det relevante admin-brugernavn.

3. Er første gang, der oprettes forbindelse til routeren via SSH, vises en meddelelse i stil med denne:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Skriv "ja", og tryk på Retur.

4. Angiv på anmodning routerens adgangskode. SSH login-brugernavnet og -adgangskoden er de samme som admin-legimationsoplysningerne.

### PuTTY (før Windows 10)

1. Download og installér PuTTY fra [det officielle websted](https://www.putty.org/).
2. Åbn PuTTY.
3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`).
4. Make sure the _Connection type_ is set to SSH.
5. Click _Open_.
6. When the Terminal window opens, enter the router’s credentials. SSH login-brugernavnet og -adgangskoden er de samme som admin-legimationsoplysningerne.

## 4) Installér Entware vha. SSH

Efter indlogning i SSH-klienten, kan diverse kommandoer bruges til interaktion med routerens Linux-baseret operativsystem. For at fortsætte, skal Entware OPKG Manager installeres. Den muliggør at installere tredjeparts softwarepakker til udvidelse af routers muligheder. Overspring til næste trin, hvis den allerede er installeret.

Bemærk, at der ikke kan bruges både Optware (forældet alternativ) og Entware samtidig.

Asus DownloadMaster er baseret på Optware og er derfor ikke kompatibel med Entware. Det vil være nødvendigt at afinstallere DownloadMaster og se på alternativerne fra Entware.

Efter afinstallation, sørg for, at "asusware.arm" eller "asusware.\*" dir på den indlæste diskpartition er slettet. Entware vil ellers ikke fungere korrekt. Efter afinstallation af DownloadMaster, sørg for genstarte routeren.

Der skal tilsluttes en USB-disk formateret med et Linux-filsystem (ext2, ext3 eller ext4). Til diskformatering bruges amtm. Sæt en USB-disk i routeren og start dernæst amtm med:

```bash
amtm
```

Brug denne mulighed til at formatere en disk og indlæse den på routeren:

```bash
fd
```

Gå gennem formateringsprocessen og vælg de anbefalede indstillinger. Alle filer på USB-disken slettes. For at denne opsætning skal fungere, skal USB-disken altid forblive tilsluttet.

Når USB'en er indlæst, genstarter routeren. For at starte installationsprocessen, opret først forbindelse til router igen via SSH.

Start dernæst amtm-applikationen ved blot at eksekvere:

```bash
amtm
```

Menuen vil tilbyde muligheden "ep" for at starte Entware-installationen.

Køres en firmwareversion ældre end 384.15 (eller 384.13_4 for RT-AC87U og RT-AC3200), så startes installationen ved i stedet at eksekvere flg. kommando.

```bash
entware-setup.sh
```

Findes scriptet entware-setup.sh ikke, download og eksekvér da flg. script for at installere Entware:

```bash
wget -O - http://bin.entware.net/armv7sf-k3.2/installer/generic.sh | sh
```

Afslut amtm ved at trykke på `e`.

## 5. Installér AdGuard VPN CLI

Opdatér pakkelisterne:

```bash
opkg update
```

Installér de nødvendige pakker:

```bash
opkg install curl ca-certificates
```

Gå til /opt-mappen ved at eksekvere `cd /opt` og eksekvere AdGuardVPN CLI installations-scriptet:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Svar `y` på forespørgslen `Skal den binære linkes til /usr/local/bin?`. Mislykkes det at linke den binære, eksekvér denne linje:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

Importér SSL-certifikatet og tun-modulet og indstil en alternativ mappe som brugermappen. Som standard gemmes det i /tmp, og man mister sine indstillinger efter en genstart. Eksekvér dette før hver ny session.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. Opsæt AdGuard VPN CLI

1. Log ind på kontoen

   Brug af AdGuard VPN til Linux kræver en AdGuard-konto.

   You can sign up on our [website](https://auth.adguard.com/login.html) or in the Terminal.

   For at tilmelde eller logge ind, skriv:

   ```jsx
   adguardvpn-cli login
   ```

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

   Erstat LOCATION_NAME med byen, landet eller ISO-koden på lokationen, der skal oprettes forbindelse til.

   For hurtig forbindelse, skriv:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN vælger den hurtigste lokation tilgængelig og husker den til fremtidige hurtige forbindelser.

   Skriv "ja" til spørgsmålet "Opsæt standardruter i TUN-tilstand?"

   AdGuard VPN CLI opretter en tun0-grænseflade til VPN-tunneling.

3. Justering af indstillingerne

   Få en liste over alle tilgængelige AdGuard VPN-kommandoer og tilpas VPN-klienten efter behov.

   For at se alle kommandoer, skriv:

   ```jsx
   adguardvpn-cli --help-all
   ```

## 7) Opsæt firewall-regler og autostart for AdGuard VPN

Dette trin opsætter firewall-regler på en Asuswrt-Merlin router til rutning af trafik igennem AdGuard VPN.

1. Opret et nyt script ved at eksekvere flg. kommando:

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

   Og gør det eksekverbart:

   ```bash
   chmod a+rx /jffs/scripts/wan-event
   ```

   Eksisterer flere brX-grænseflader, sørg da for at inkludere dem i scriptet for også at rute deres trafik. Alternativt, sørg for at angive en anden rutningsregel for disse grænseflader.

   Dette script vil sikre, at al trafik passerer igennem VPN-tunnelen. After rebooting or reconnecting to the Internet, AdGuard VPN will connect automatically to your last used location.

2. Reboot your router to finish setup.

   Tillykke! Nu er routeren sikret med AdGuard VPN.

   Vil man tilgå sin router igen via SSH for at sende kommandoer til AdGuard VPN, sørg for at eksekvere dette først:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   modprobe tun
   ```
