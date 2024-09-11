---
title: So richten Sie AdGuard VPN für Linux auf einem Asuswrt-Merlin-Router ein
sidebar_position: 4
---

:::info Systemanforderungen

1. AdGuard VPN CLI benötigt nach der Installation der erforderlichen Pakete mindestens 22 MB freien Speicherplatz auf dem Datenträger Ihres Routers oder auf einem externen USB-Stick.
2. **Asuswrt-Merlin-Firmware**: Stellen Sie sicher, dass auf Ihrem Router die Asuswrt-Merlin-Firmware läuft.
3. **USB-Laufwerk**: Ein USB-Laufwerk, das mit einem nativen Linux-Dateisystem (ext2, ext3 oder ext4) formatiert ist. In diesem Leitfaden leiten wir Sie durch den Formatierungsprozess.

:::

## 1. Ermitteln Sie die IP-Adresse Ihres Routers

Die Standard-IP-Adresse der meisten Router lautet `192.168.1.1` oder `192.168.0.1`. Wenn Sie die IP-Adresse geändert haben oder sich nicht sicher sind, können Sie sie ermitteln, indem Sie die IP-Konfiguration auf einem angeschlossenen Gerät überprüfen.

### Unter Windows

1. Öffnen Sie die Eingabeaufforderung:

   ```bash
   ipconfig
   ```

2. Suchen Sie den _Standardgateway_ unter Ihrer aktiven Netzwerkverbindung. Dies ist die IP-Adresse Ihres Routers.

### Unter Mac/Linux

1. Öffnen Sie Terminal und führen Sie diesen Befehl für Linux aus:

   ```bash
   ip route | grep default
   ```

   Oder diese hier für Mac:

   ```bash
   route -n get default
   ```

2. Suchen Sie nach dem Eintrag _default_. Die IP-Adresse daneben ist die IP-Adresse Ihres Routers.

## 2) Make sure SSH and JFFS custom scripts are enabled on the router

Stellen Sie zunächst sicher, dass der SSH-Zugang auf Ihrem Router aktiviert ist. Diese Einstellung finden Sie in der Regel auf der Weboberfläche des Routers. JFFS-Skripte werden zur Festlegung von Routing-Regeln verwendet.

1. Melden Sie sich an der Weboberfläche an. Diese ist in der Regel über einen Webbrowser unter [`http://192.168.1.1`](http://192.168.1.1/) zugänglich. Andernfalls ersetzen Sie [`192.168.1.1`](http://192.168.1.1/) durch die IP-Adresse Ihres Routers.

2. Scroll down to _Advanced settings_, _Administration_ → _System_.

3. Scroll to _Service_, click _Enable SSH_ → _LAN_.

4. Select _22_ in _Port_ and _Yes_ in _Allow Password Login_.

5. Go up to _Persistent JFFS2 partition_ and enable _JFFS custom scripts and configs_.

6. Click _Apply_ at the bottom of the page.

## 3) Verwenden Sie einen SSH-Client, um sich mit dem Router zu verbinden

Sie benötigen einen SSH-Client. Auf den meisten Linux- und macOS-Systemen ist ein SSH-Client vorinstalliert. Unter Windows können Sie PowerShell, den integrierten SSH-Client in Windows 10/11 oder eine Anwendung eines Drittanbieters wie PuTTY verwenden.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Öffnen Sie die Eingabeaufforderung oder die PowerShell.

2. Führen Sie den folgenden SSH-Befehl aus:

   ```bash
   ssh admin@192.168.1.1
   ```

   Ersetzen Sie `192.168.1.1` durch die IP-Adresse Ihres Routers und `admin` durch Ihren Benutzernamen des Administrators.

3. Wenn Sie sich zum ersten Mal über SSH mit dem Router verbinden, werden Sie eine Meldung sehen wie diese:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Geben Sie `Ja` ein und drücken Sie die Eingabetaste.

4. Geben Sie das Passwort des Routers ein, wenn Sie dazu aufgefordert werden. Der SSH-Benutzername und das Passwort sind identisch mit den Admin-Anmeldedaten.

### PuTTY (vor Windows 10)

1. Laden Sie PuTTY von [der offiziellen Website](https://www.putty.org/) herunter und installieren Sie es.
2. Öffnen Sie PuTTY.
3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`).
4. Make sure the _Connection type_ is set to SSH.
5. Click _Open_.
6. When the Terminal window opens, enter the router’s credentials. Der SSH-Benutzername und das Passwort sind identisch mit den Admin-Anmeldedaten.

## 4) Entware über SSH installieren

Sobald Sie sich bei Ihrem SSH-Client angemeldet haben, können Sie verschiedene Befehle verwenden, um mit dem Linux-basierten Betriebssystem Ihres Routers zu interagieren. Um fortzufahren, müssen Sie Entware OPKG Manager installieren. Damit können Sie Softwarepakete von Drittanbietern installieren, um die Fähigkeiten des Routers zu erweitern. Fahren Sie mit dem nächsten Schritt fort, wenn Sie die Software bereits installiert haben.

Beachten Sie, dass Sie Optware (veraltete Alternative) und Entware nicht gleichzeitig verwenden können.

Der Asus DownloadMaster basiert auf Optware und ist daher nicht mit Entware kompatibel. Sie müssen DownloadMaster deinstallieren und sich die von Entware angebotenen Alternativen nutzen.

Stellen Sie nach der Deinstallation sicher, dass der Ordner „asusware.arm“ oder „asusware.\*“ auf der gemounteten Festplattenpartition gelöscht wird. Andernfalls wird Entware nicht richtig funktionieren. Vergewissern Sie sich nach der Deinstallation von DownloadMaster, dass der Router neu gebootet wurde.

Sie müssen einen USB-Datenträger anschließen, der mit einem nativen Linux-Dateisystem (ext2, ext3 oder ext4) formatiert ist. Zum Formatieren einers Datenträgers verwenden Sie amtm. Schließen Sie einen USB-Datenträger an Ihren Router an, und starten Sie amtm mit:

```bash
amtm
```

Mit dieser Option können Sie einen Datenträger formatieren und in den Router einbinden:

```bash
fd
```

Folgen Sie den Formatierungsanweisungen und wählen Sie die empfohlenen Optionen aus. Alle Dateien auf dem USB-Datenträger werden gelöscht. Damit diese Einrichtung funktioniert, sollte der USB-Datenträger immer angeschlossen bleiben.

Nach dem Einstecken des USB-Sticks wird der Router neu gestartet. Um den Installationsvorgang zu starten, verbinden Sie sich zunächst über SSH mit Ihrem Router.

Starten Sie dann die Anwendung amtm, indem Sie sie einfach ausführen:

```bash
amtm
```

Das Menü bietet Ihnen die Option `ep`, um die Entware-Installation zu starten.

Wenn Sie eine ältere Firmware-Version als 384.15 (bzw. 384.13_4 für den RT-AC87U und RT-AC3200) verwenden, starten Sie die Installation stattdessen mit dem folgenden Befehl.

```bash
entware-setup.sh
```

Wenn das Skript entware-setup.sh nicht gefunden wird, laden Sie das folgende Skript herunter und führen Sie es aus, um Entware zu installieren:

```bash
wget -O - http://bin.entware.net/armv7sf-k3.2/installer/generic.sh | sh
```

Beenden Sie amtm durch Drücken von `e`.

## 5. AdGuard VPN CLI installieren

Aktualisieren Sie die Paketlisten:

```bash
opkg update
```

Installieren Sie die erforderlichen Pakete:

```bash
opkg install curl ca-certificates
```

Wechseln Sie in den Ordner /opt mit `cd /opt` und führen Sie das AdGuardVPN CLI-Installationsskript aus:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Auf die Frage „Möchten Sie die Binärdatei nach /usr/local/bin verknüpfen?“, antworten Sie mit `y`. Wenn das Verknüpfen der Binärdatei fehlgeschlagen ist, führen Sie diese Zeile aus:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

Importieren Sie das SSL-Zertifikat und das tun-Modul und legen Sie einen alternativen Ordner für das Benutzerverzeichnis fest. Standardmäßig wird es in /tmp gespeichert, und nach einem Neustart gehen die Einstellungen verloren. Führen Sie dies vor jeder neuen Sitzung durch.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. AdGuard VPN CLI einrichten

1. Melden Sie sich bei Ihrem Konto an

   Um AdGuard VPN für Linux nutzen zu können, benötigen Sie ein AdGuard-Konto.

   You can sign up on our [website](https://auth.adguard.com/login.html) or in the Terminal.

   Um sich zu registrieren oder anzumelden, geben Sie folgendes ein:

   ```jsx
   adguardvpn-cli login
   ```

2. Mit VPN verbinden

   Wählen Sie einen VPN-Serverstandort, der Ihren Anforderungen am besten entspricht.

   Im Allgemeinen gilt: Je näher der Server, desto schneller die Verbindung.

   Um die verfügbaren Standorte anzuzeigen, geben Sie Folgendes ein:

   ```jsx
   adguardvpn-cli list-locations
   ```

   Um eine Verbindung zu einem bestimmten Standort herzustellen, geben Sie ein:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Ersetzen Sie LOCATION_NAME durch die Stadt, das Land oder den ISO-Code des Ortes, zu dem Sie eine Verbindung herstellen möchten.

   Für eine Schnellverbindung, geben Sie ein:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN wählt den Standort, mit der schnellsten verfügbaren Geschwindigkeit aus und speichert ihn für zukünftige schnelle Verbindungen.

   Geben Sie `yes` ein, wenn Sie gefragt werden: „Möchten Sie Standardrouten im TUN-Modus festlegen?“

   AdGuard VPN CLI erstellt eine tun0-Schnittstelle für VPN-Tunneling.

3. Passen Sie Ihre Einstellungen an

   Rufen Sie eine Liste aller verfügbaren AdGuard VPN-Befehle auf und passen Sie den VPN-Client an Ihre Bedürfnisse an.

   Um alle Befehle anzuzeigen, geben Sie ein:

   ```jsx
   adguardvpn-cli --help-all
   ```

## 7) Firewall-Regeln und automatischer Start für AdGuard VPN einrichten

In diesem Schritt werden Firewall-Regeln auf einem Asuswrt-Merlin-Router konfiguriert, um den Datenverkehr durch AdGuard VPN zu leiten.

1. Erstellen Sie ein neues Skript, indem Sie den folgenden Befehl ausführen:

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

   Und machen Sie es ausführbar:

   ```bash
   chmod a+rx /jffs/scripts/wan-event
   ```

   Wenn Sie über weitere brX-Schnittstellen verfügen, sollten Sie diese ebenfalls in das Skript einbeziehen, um deren Datenverkehr umzuleiten. Alternativ können Sie auch eine andere Routing-Regel für diese Schnittstellen angeben.

   Dieses Skript stellt sicher, dass der gesamte Datenverkehr durch den VPN-Tunnel geleitet wird. After rebooting or reconnecting to the Internet, AdGuard VPN will connect automatically to your last used location.

2. Reboot your router to finish setup.

   Das war's! Jetzt haben Sie einen mit AdGuard VPN gesicherten Router.

   Wenn Sie sich wieder per SSH in Ihren Router einwählen möchten, um Befehle an AdGuard VPN zu senden, müssen Sie dies zuerst ausführen:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   modprobe tun
   ```
