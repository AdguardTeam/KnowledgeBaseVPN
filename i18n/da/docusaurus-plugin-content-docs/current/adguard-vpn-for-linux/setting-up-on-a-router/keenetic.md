---
title: Sådan opsættes AdGuard VPN til Linux på en Keenetic-router
sidebar_position: 2
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

1. På Linux, åbn Terminal og eksekvér denne kommando:

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

```text
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

6. Når terminalvinduet åbnes, log ind. Standardbrugernavnet er `root` og standardadgangskoden er `keenetic`.

Efter indlogning, kan forskellige kommandoer bruges til interaktion med routerens Linux-baserede operativsystem.

## 4. Installér OPKG Entware

På Keenetic-modeller udstyret med en USB-port (undtagen Keenetic 4G), kan OPKG-pakkehåndteringen bruges. Den muliggør at installere tredjeparts softwarepakker til udvidelse af routers muligheder.

Fra version 3.7 er det for nogle Keenetic-modeller muligt at skrive OPKG Entware til [UBIFS](https://en.wikipedia.org/wiki/UBIFS) partitionen af routerens NAND-flashhukommelse, dvs. til routerens indbyggede lagerplads. Følg nedenstående trin for at installere Entware-depotpakkesystemet på et USB-drev eller routerens interne lager.

### Sådan installeres OPKG Entware på et USB-drev

Det er muligt at installere OPKG-pakker på Keenetic-modellerne med USB-porte, som understøtter USB-flashdrev. Disse er: KN-1410, KN-1710/1711, KN-1010/1011, KN-2510, KN-2410, KN-1810, KN-1910, KN-2310, KN-2010, KN-2110, KN-2610 og KN-2710.

For detaljeret vejledning, besøg [den officielle Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021214160-Installing-the-Entware-repository-package-system-on-a-USB-drive).

### Sådan installeres OPKG Entware på routerens interne lager

Denne metode fungerer med flg. modeller: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 med minimum KeeneticOS-version 3.7.

For detaljeret vejledning, besøg [den officielle Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory).

Understøtter routeren ikke installation af pakker på dens interne lager, følg vejledningen til installation af pakker på et USB-drev.

## 5. Installér AdGuard VPN CLI

Eksekvér i SSH-klienten flg. kode for at installere de pakker, som kræves til AdGuard VPN CLI:

```bash
opkg install curl sudo ca-certificates
```

Gå til mappen `/opt` ved at skrive `/cd opt`, og eksekvér AdGuard VPN CLI installations-scriptet:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Svar `n` på forespørgslen `Skal den binære linkes til /usr/local/bin?`, og eksekvér denne linje:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. Opsæt AdGuard VPN CLI

1. Log ind på kontoen

   Brug af AdGuard VPN til Linux kræver en AdGuard-konto. Tilmeld eller log ind på vores [websted](https://auth.adguard.com/login.html) eller i Terminal.

   Inden indlogning, gå til Terminal for at tjekke, at den rigtige shell-grænseflade er aktiv. Ses den følgende tekst:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   DENNE SOFTWARE ER UNDERLAGT KEENETIC LIMITED SLUTBRUGERLICENSAFTALE. VED AT BRUGE DEN, ACCEPTERES VILKÅR OG BETINGELSER HERFOR. FOR YDERLIGERE INFORMATION, TJEK VENLIGST https://keenetic.com/legal
   ```

   For at afslutte til den shell, der er nødvendig for de næste trin, eksekvér flg. kommando:

   ```bash
   exec sh
   ```

   Opsætningen kan fortsættes, hvis flg. tekst ses:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   For at tilmelde eller logge ind, skriv:

   ```bash
   adguardvpn-cli login
   ```

2. Opret forbindelse til VPN

   Sørg på Keenetic-routere for at importere SSL-certifikatet og vælge en mappe som brugerbibliotek ved at eksekvere denne kommando, før der oprettes forbindelse:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   ```

   Dette skal gøres før hver session.

   Vælg en VPN-serverlokation efter ønske.

   Det gælder generelt, at jo tættere på serveren er, jo hurtigere er forbindelsen.

   For at se tilgængelige lokationer, skriv:

   ```bash
   adguardvpn-cli list-locations
   ```

   For at oprette forbindelse til en bestemt lokation, skriv:

   ```bash
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Erstat **LOCATION_NAME** med byen, landet eller ISO-koden for den placering, hvortil der skal oprettes forbindelse.

   For hurtig forbindelse, skriv:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN vælger lokationen med lavest ping-tid og husker den til fremtidige hurtige forbindelser.

3. Justér indstillingerne

   Få en liste over alle tilgængelige AdGuard VPN-kommandoer og tilpas VPN-klienten efter behov.

   For at se alle kommandoer, skriv:

   ```bash
   adguardvpn-cli --help-all
   ```

4. Skriv "ja" til spørgsmålet "Opsæt standardruter i TUN-tilstand?"

AdGuard VPN CLI vil oprette en tun0-grænseflade til VPN-tunneling

## 7. Opsæt firewall-regler

Dette trin er designet til at opsætte firewall-regler på en Keenetic-router til rutning af trafik igennem AdGuard VPN.

1. **Installér 'iptables' ved at eksekvere denne kommando via SSH:**

   ```bash
   opkg install iptables
   ```

   Denne linje installerer `iptables`-pakken — et værktøj til regelhåndtering af netværkspakkefiltrering på Linux-systemer.

2. **Opret et nyt shell-script ved at eksekvere flg. kommando:**

   ```bash

   cat << 'EOF' > /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   #!/opt/bin/sh
   for ipt in iptables ip6tables; do
       $ipt -D FORWARD -j ADGUARD_FORWARD || true
       $ipt -F ADGUARD_FORWARD || true
       $ipt -X ADGUARD_FORWARD || true
       $ipt -N ADGUARD_FORWARD
       $ipt -I FORWARD -j ADGUARD_FORWARD
       $ipt -A ADGUARD_FORWARD -i br0 -o tun0 -j ACCEPT
   done
   EOF
   ```

   Og gør det eksekverbart:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

   Eksisterer flere brX-grænseflader, sørg da for at inkludere dem i scriptet for også at rute deres trafik. Alternativt, sørg for at angive en anden rutningsregel for disse grænseflader.

Dette opretter et nyt shell-script ved navn `001-adguardvpn.sh` i mappen `/opt/etc/ndm/netfilter.d/`, hvilket er hvor netværksrelaterede scripts typisk lagres på en Keenetic-router.

Scriptet opretter en tilpasset firewall-regel for at sikre, at trafik fra LAN'et (`br0`) rutes igennem AdGuard VPN-grænsefladen (`tun0`). Det rydder først op i tidligere regler relateret til denne opsætning og opsætter dernæst nye regler til korrekt rutning af trafikken.

## 8. Opsæt automatisk start af AdGuard VPN CLI

Flg. script er designet til automatisk at etablere en VPN-forbindelse vha. AdGuard VPN på Keenetic-routeren, når WAN-grænsefladen bliver tilgængelig (f.eks. efter en genstart eller genoprettet internetforbindelse).

Eksekvér flg. kommando:

```bash
cat << E0F > /opt/etc/ndm/wan.d/001-adguardvpn.sh
#!/opt/bin/sh
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
/opt/adguardvpn_cli/adguardvpn-cli connect &
exit 0
E0F
```

Og gør det eksekverbart:

```bash
chmod +x /opt/etc/ndm/wan.d/001-adguardvpn.sh
```

Scriptet ved navn `001-adguardvpn.sh` gemmes i `/opt/etc/ndm/wan.d/`.

Det starter AdGuard VPN, når internet er forbundet.

Genstart routeren for at færdiggøre opsætningen.

Tillykke! Nu er routeren sikret med AdGuard VPN.
