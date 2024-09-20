---
title: So richten Sie AdGuard VPN für Linux auf einem Keenetic-Router ein
sidebar_position: 2
---

:::info Systemanforderungen

AdGuard VPN für Linux, auch bekannt als AdGuard VPN CLI, benötigt mindestens 22 MB freien Speicherplatz auf dem integrierten Speicher Ihres Routers oder auf einem externen USB-Stick, nachdem andere notwendige Pakete installiert wurden.

:::

## 1. Sicherstellen, dass SSH auf Ihrem Router aktiviert ist

Der SSH-Client wird verwendet, um von Ihrem Computer aus Befehle an Ihren Router zu senden.

Um den SSH-Server zu betreiben, muss die Systemkomponente _SSH-Server_ im Keenetic installiert sein. Sie können dies auf der Seite _Allgemeine Systemeinstellungen_ im Abschnitt _Komponentenoptionen_ tun, indem Sie auf die Schaltfläche _Komponentenoptionen_ klicken. Suchen Sie nach SSH-Server und installieren Sie ihn. Dadurch wird Ihr Keenetic OS aktualisiert.

Sobald die Komponente installiert ist, wird der SSH-Server automatisch aktiviert.

Wie Sie einen SSH-Server mit optimalen Sicherheitseinstellungen einrichten können, erfahren Sie im [Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360000387189-SSH-remote-access-to-the-Keenetic-command-line).

## 2. Ermitteln Sie die IP-Adresse Ihres Routers

Die Standard-IP-Adresse der meisten Router lautet `192.168.1.1` oder `192.168.0.1`. Wenn Sie die IP-Adresse geändert haben oder sich nicht sicher sind, können Sie sie ermitteln, indem Sie die IP-Konfiguration auf einem angeschlossenen Gerät überprüfen.

### Unter Windows

1. Öffnen Sie die Eingabeaufforderung:

   ```bash
   ipconfig
   ```

2. Suchen Sie den _Standardgateway_ unter Ihrer aktiven Netzwerkverbindung. Dies ist die IP-Adresse Ihres Routers.

### Unter macOS und Linux

1. Unter Linux öffnen Sie Terminal und führen Sie diesen Befehl aus:

   ```bash
   ip route | grep default
   ```

   Oder dies auf dem Mac:

   ```text
   route -n get default
   ```

2. Suchen Sie nach dem Eintrag _default_. Die IP-Adresse daneben ist die IP-Adresse Ihres Routers.

## 3) Verwenden Sie einen SSH-Client, um sich mit dem Router zu verbinden

Sie benötigen einen SSH-Client. Auf den meisten Linux- und macOS-Systemen ist ein SSH-Client vorinstalliert. Unter Windows können Sie PowerShell, den integrierten SSH-Client in Windows 10/11 oder eine Anwendung eines Drittanbieters wie PuTTY verwenden.

### Integrierter SSH-Client (Linux, macOS und Windows 10/11)

1. Öffnen Sie die Eingabeaufforderung oder die PowerShell.

2. Führen Sie den folgenden SSH-Befehl aus:

   ```bash
   ssh admin@192.168.1.1
   ```

   Ersetzen Sie `192.168.1.1` durch die IP-Adresse Ihres Routers.

3. Wenn Sie sich zum ersten Mal über SSH mit dem Router verbinden, werden Sie eine Meldung sehen wie diese:

   ```text
   Die Authentizität des Hosts '192.168.1.1 (192.168.1.1)' konnte nicht festgestellt werden.
   Der Fingerabdruck des ECDSA-Schlüssels lautet SHA256:...
   Möchten Sie die Verbindung wirklich fortsetzen (Ja/Nein/[Fingerabdruck])?
   ```

   Geben Sie `Ja` ein und drücken Sie die Eingabetaste.

4. Geben Sie das Passwort des Routers ein, wenn Sie dazu aufgefordert werden. Der Standard-Benutzername ist `root` und das Standard-Passwort ist `keenetic`.

### PuTTY (Windows 8 und älter)

1. Laden Sie PuTTY von [der offiziellen Website](https://www.putty.org/) herunter und installieren Sie es.

2. Öffnen Sie PuTTY.

3. Geben Sie in das Feld _Hostname (oder IP-Adresse)_ die IP-Adresse Ihres Routers ein (z. B. `192.168.1.1`)

4. Stellen Sie sicher, dass der _Verbindungstyp_ auf SSH eingestellt ist.

5. Klicken Sie auf _Öffnen_.

6. Wenn sich das Terminalfenster öffnet, melden Sie sich an. Der Standard-Benutzername ist `root` und das Standard-Passwort ist `keenetic`.

Sobald Sie angemeldet sind, können Sie verschiedene Befehle verwenden, um mit dem Linux-basierten Betriebssystem Ihres Routers zu interagieren.

## 4. „OPKG Entware” installieren

Bei Keenetic-Modellen, die mit einem USB-Anschluss ausgestattet sind (außer Keenetic 4G), können Sie den OPKG-Paketmanager verwenden. Damit können Sie Softwarepakete von Drittanbietern installieren, um die Fähigkeiten des Routers zu erweitern.

Ab Version 3.7 ist es bei einigen Keenetic-Modellen möglich, OPKG Entware in die [UBIFS](https://en.wikipedia.org/wiki/UBIFS)-Partition des NAND-Flash-Speichers des Routers zu schreiben, d.h. in den integrierten Speicher des Routers. Gehen Sie wie folgt vor, um das Entware-Repository-Paketsystem auf einem USB-Laufwerk oder im internen Speicher des Routers zu installieren.

### So installieren Sie OPKG Entware auf einem USB-Laufwerk

Es ist möglich, OPKG-Pakete auf den Keenetic-Modellen mit USB-Anschlüssen zu installieren, die USB-Sticks unterstützen. Diese sind: KN-1410, KN-1710/1711, KN-1010/1011, KN-2510, KN-2410, KN-1810, KN-1910, KN-2310, KN-2010, KN-2110, KN-2610, KN-2710.

Eine ausführliche Anleitung finden Sie im [offiziellen Keenetic-Wiki](https://help.keenetic.com/hc/en-us/articles/360021214160-Installing-the-Entware-repository-package-system-on-a-USB-drive).

### So installieren Sie OPKG Entware im internen Speicher des Routers

Diese Methode funktioniert mit den folgenden Modellen: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 mit der KeeneticOS Version 3.7 und höher.

Eine ausführliche Anleitung finden Sie im [offiziellen Keenetic-Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory).

Wenn Ihr Router die Installation von Paketen auf seinem internen Speicher nicht unterstützt, befolgen Sie die Anweisungen zur Installation von Paketen auf einem USB-Laufwerk.

## 5. AdGuard VPN CLI installieren

Führen Sie in Ihrem SSH-Client den folgenden Code aus, um die für AdGuard VPN CLI erforderlichen Pakete zu installieren:

```bash
opkg install curl sudo ca-certificates
```

Wechseln Sie in den Ordner `/opt` durch Eingabe von `/cd opt` und führen Sie das AdGuard VPN CLI Installationsskript aus:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Auf die Frage „Möchten Sie die Binärdatei nach /usr/local/bin verknüpfen?“ antworten Sie mit „n“ und führen diese Zeile aus:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. AdGuard VPN CLI einrichten

1. Melden Sie sich bei Ihrem Konto an

   Um AdGuard VPN für Linux nutzen zu können, benötigen Sie ein AdGuard-Konto. Sie können sich auf unserer [Website](https://auth.adguard.com/login.html) oder im Terminal registrieren oder anmelden.

   Vergewissern Sie sich, dass Sie sich in der richtigen Shell-Oberfläche befinden, bevor Sie sich anmelden. Wenn der folgende Text angezeigt wird:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   DIESE SOFTWARE IST GEGENSTAND DER EINGESCHRÄNKTEN ENDBENUTZER-LIZENZVEREINBARUNG VON KEENETIC. DURCH DIE NUTZUNG STIMMEN SIE DEN BEDINGUNGEN DIESER VEREINBARUNG ZU. FÜR WEITERE INFORMATIONEN LESEN SIE BITTE https://keenetic.com/de/legal
   ```

   Führen Sie diesen Befehl aus, um in die für die nächsten Schritte benötigte Shell zu gelangen:

   ```bash
   exec sh
   ```

   Wenn der folgende Text angezeigt wird, können Sie die Einrichtung fortsetzen:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   Um sich zu registrieren oder anzumelden, geben Sie Folgendes ein:

   ```bash
   adguardvpn-cli login
   ```

2. Mit VPN verbinden

   Bei Keenetic-Routern müssen Sie vor dem Verbindungsaufbau das SSL-Zertifikat importieren und einen Ordner für das Benutzerverzeichnis auswählen, indem Sie diesen Befehl ausführen:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   ```

   Dies muss vor jeder Sitzung ausgeführt werden.

   Wählen Sie einen VPN-Serverstandort, der Ihren Anforderungen am besten entspricht.

   Im Allgemeinen gilt: Je näher Sie dem Server sind, desto schneller ist die Verbindung.

   Um die verfügbaren Standorte anzuzeigen, geben Sie Folgendes ein:

   ```bash
   adguardvpn-cli list-locations
   ```

   Um eine Verbindung zu einem bestimmten Standort herzustellen, geben Sie ein:

   ```bash
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Ersetzen Sie `LOCATION_NAME` durch die Stadt, das Land oder den ISO-Code des Standorts, zu dem Sie eine Verbindung herstellen möchten.

   Für eine Schnellverbindung, geben Sie ein:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN wählt den Standort mit dem niedrigsten Ping aus und speichert ihn für zukünftige Schnellverbindungen.

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

   And make it executable:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

   If you have more brX interfaces, make sure to include them in the script as well to route their traffic. Alternatively, make sure to specify a different routing rule for those interfaces.

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

The script named `001-adguardvpn.sh` will be saved to `/opt/etc/ndm/wan.d/`.

It will start AdGuard VPN when Internet is connected.

Reboot your router to finish setup.

Congrats! Now you have a router secured with AdGuard VPN.
