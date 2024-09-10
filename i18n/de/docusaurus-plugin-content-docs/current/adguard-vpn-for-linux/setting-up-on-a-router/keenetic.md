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

1. Suchen Sie den _Standardgateway_ unter Ihrer aktiven Netzwerkverbindung. Dies ist die IP-Adresse Ihres Routers.

### Unter macOS und Linux

1. On Linux, open Terminal and run this command:

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

1. Wenn Sie sich zum ersten Mal über SSH mit dem Router verbinden, werden Sie eine Meldung sehen wie diese:

```text
   Die Authentizität des Hosts '192.168.1.1 (192.168.1.1)' konnte nicht festgestellt werden.
   Der Fingerabdruck des ECDSA-Schlüssels lautet SHA256:...
   Möchten Sie die Verbindung wirklich fortsetzen (Ja/Nein/[Fingerabdruck])?
```

Geben Sie `Ja` ein und drücken Sie die Eingabetaste.

1. Geben Sie das Passwort des Routers ein, wenn Sie dazu aufgefordert werden. Der Standard-Benutzername ist `root` und das Standard-Passwort ist `keenetic`.

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

This method will work with the following models: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 with the KeeneticOS version 3.7 and later.

Eine ausführliche Anleitung finden Sie im [offiziellen Keenetic-Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory).

Wenn Ihr Router die Installation von Paketen auf seinem internen Speicher nicht unterstützt, befolgen Sie die Anweisungen zur Installation von Paketen auf einem USB-Laufwerk.

## 5. AdGuard VPN CLI installieren

Führen Sie in Ihrem SSH-Client den folgenden Code aus, um die für AdGuard VPN CLI erforderlichen Pakete zu installieren:

```bash
opkg install curl sudo ca-certificates
```

Go to the `/opt` folder by typing `/cd opt` and run the AdGuard VPN CLI installation script:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

When asked “Would you like to link the binary to /usr/local/bin?“, reply `n` and run this line:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. AdGuard VPN CLI einrichten

1. Melden Sie sich bei Ihrem Konto an

   Um AdGuard VPN für Linux nutzen zu können, benötigen Sie ein AdGuard-Konto. Sie können sich auf unserer [Website](https://auth.adguard.com/login.html) oder im Terminal registrieren oder anmelden.

   Vergewissern Sie sich, dass Sie sich in der richtigen Shell-Oberfläche befinden, bevor Sie sich anmelden. Wenn der folgende Text angezeigt wird:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   THIS SOFTWARE IS A SUBJECT OF KEENETIC LIMITED END-USER LICENCE AGREEMENT. BY USING IT YOU AGREE ON TERMS AND CONDITIONS HEREOF. FOR MORE INFORMATION PLEASE CHECK https://keenetic.com/legal
   ```

   Führen Sie diesen Befehl aus, um in die für die nächsten Schritte benötigte Shell zu gelangen:

   ```bash
   exec sh
   ```

   Wenn dieser Text angezeigt wird, können Sie mit der Einrichtung fortfahren:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   Um sich zu registrieren oder anzumelden, geben Sie folgendes ein:

   ```bash
   adguardvpn-cli login
   ```

2. Mit VPN verbinden

   For Keenetic routers, be sure to import the SSL certificate and select a folder for the user directory by running this command before connecting:

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

   AdGuard VPN will choose the location with the lowest ping and remember it for future quick connections.

3. Passen Sie Ihre Einstellungen an.

   Rufen Sie eine Liste aller verfügbaren AdGuard VPN-Befehle auf und passen Sie den VPN-Client an Ihre Bedürfnisse an.

   Um alle Befehle anzuzeigen, geben Sie ein:

   ```bash
   adguardvpn-cli --help-all
   ```

4. Geben Sie `yes` ein, wenn Sie gefragt werden: „Möchten Sie Standardrouten im TUN-Modus festlegen?“

AdGuard VPN CLI erstellt eine tun0-Schnittstelle für VPN-Tunneling

## 7. Firewall-Regeln einrichten

Dieser Schritt dient dazu, Firewall-Regeln auf einem Keenetic-Router zu konfigurieren, um den Datenverkehr durch AdGuard VPN führen zu können.

1. **Installieren Sie `iptables`, indem Sie diesen Befehl über SSH ausführen:**

   ```bash
   opkg install iptables
   ```

   Dieser Befehl installiert das `iptables`-Paket, ein Werkzeug zur Verwaltung von Netzwerk-Paketfilterregeln auf Linux-Systemen.

2. **Erstellen Sie ein neues Shell-Skript, indem Sie den folgenden Befehl ausführen:**

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

   Und machen Sie es ausführbar:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

   If you have more brX interfaces, make sure to include them in the script as well to route their traffic. Alternatively, make sure to specify a different routing rule for those interfaces.

Dadurch wird ein neues Shell-Skript mit dem Namen `001-adguardvpn.sh` im Ordner `/opt/etc/ndm/netfilter.d/` erstellt, in dem netzwerkbezogene Skripte normalerweise auf einem Keenetic-Router gespeichert werden.

Das Skript erstellt eine benutzerdefinierte Firewall-Regel, um sicherzustellen, dass der Datenverkehr aus Ihrem LAN (`br0`) über die AdGuard VPN-Schnittstelle (`tun0`) geleitet wird. Er bereinigt zunächst alle früheren Regeln, die sich auf diese Konfiguration beziehen, und erstellt anschließend neue Regeln, um den Datenverkehr entsprechend zu leiten.

## 8. Automatischen Start für AdGuard VPN CLI einrichten

Das folgende Skript baut automatisch eine VPN-Verbindung mit AdGuard VPN auf Ihrem Keenetic-Router auf, sobald die WAN-Schnittstelle verfügbar ist (z.B. nach einem Neustart oder einer erneuten Verbindung zum Internet).

Führen Sie den folgenden Befehl aus:

```bash
cat << E0F > /opt/etc/ndm/wan.d/001-adguardvpn.sh
#!/opt/bin/sh
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
/opt/adguardvpn_cli/adguardvpn-cli connect &
exit 0
E0F
```

Und machen Sie es ausführbar:

```bash
chmod +x /opt/etc/ndm/wan.d/001-adguardvpn.sh
```

The script named `001-adguardvpn.sh` will be saved to `/opt/etc/ndm/wan.d/`.

AdGuard VPN wird gestartet, sobald eine Internetverbindung besteht.

Starten Sie Ihren Router neu, um die Einrichtung abzuschließen.

Das war's! Jetzt haben Sie einen mit AdGuard VPN gesicherten Router.
