---
title: How to set up AdGuard VPN for Linux on an OpenWRT router
sidebar_position: 2
---

:::info Systemanforderungen

AdGuard VPN for Linux, also known as AdGuard VPN CLI, requires at least 22 MB of free storage space on your router’s built-in memory or external USB after installing necessary packages.

:::

## 1. Make sure that SSH is enabled on your router

Diese Einstellung finden Sie in der Regel auf der Weboberfläche des Routers.

Für OpenWrt:

1. Melden Sie sich auf der Weboberfläche an. In der Regel ist dies über einen Webbrowser unter [`http://192.168.1.1`](http://192.168.1.1/) zugänglich.

2. Navigate to _System_ → _Administration_.

3. Make sure that _SSH Access_ is enabled.

OpenWrt erlaubt standardmäßig den SSH-Zugriff auf den Router.

## 2. Ermitteln Sie die IP-Adresse Ihres Routers

Die Standard-IP-Adresse der meisten Router lautet „192.168.1.1“ oder „192.168.0.1“. Wenn die IP-Adresse geändert wurde oder Sie sich nicht sicher sind, können Sie sie ermitteln, indem Sie die IP-Konfiguration auf einem angeschlossenen Gerät überprüfen.

### On Windows

1. Öffnen Sie die Eingabeaufforderung:

```text
ipconfig
```

1. Look for the _Default Gateway_ under your active network connection. Dies ist die IP-Adresse Ihres Routers.

### On macOS and Linux

1. Öffnen Sie das Terminal:

```text
ip route | grep default
```

1. Look for the _default_ entry. Die IP-Adresse daneben ist die IP-Adresse Ihres Routers.

## 3) Verwenden Sie einen SSH-Client, um sich mit dem Router zu verbinden

Auf den meisten Linux- und macOS-Systemen ist ein SSH-Client vorinstalliert. Unter Windows können Sie PowerShell, den integrierten SSH-Client in Windows 10/11 oder eine Anwendung eines Drittanbieters wie PuTTY verwenden.

Verwenden Sie den integrierten SSH-Client (für Linux, macOS und Windows 10/11):

1. Öffnen Sie das Terminal oder die PowerShell.

2. Führen Sie den folgenden SSH-Befehl aus:

```text
ssh root@192.168.1.1
```

Ersetzen Sie `192.168.1.1` durch die IP-Adresse Ihres Routers.

1. Wenn Sie sich zum ersten Mal über SSH mit dem Router verbinden, werden Sie eine Meldung sehen wie diese:

```text
   Die Authentizität des Hosts '192.168.1.1 (192.168.1.1)' konnte nicht ermittelt werden.
   Der Fingerabdruck des ECDSA-Schlüssels lautet SHA256: ...
   Möchten Sie die Verbindung wirklich fortsetzen? (Ja/Nein/[Fingerabdruck])
```

Geben Sie `Ja` ein und drücken Sie die Eingabetaste.

1. Geben Sie das Passwort des Routers ein, wenn Sie dazu aufgefordert werden. Ein Standardpasswort für OpenWrt ist normalerweise nicht vergeben (drücken Sie einfach die Eingabetaste), aber Sie sollten bei der Ersteinrichtung ein Passwort festgelegt haben.

Verwendung von PuTTY (Windows):

1. Laden Sie PuTTY von [der offiziellen Website](https://www.putty.org/) herunter und installieren Sie es.

2. Öffnen Sie PuTTY.

3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`).

4. Ensure the _Connection type_ is set to SSH.

5. Click _Open_.

6. When the Terminal window opens, log in. The default username is `root` and the default password is `keenetic`.

## 4) Grundlegende SSH-Befehle

Sobald Sie angemeldet sind, können Sie verschiedene Befehle verwenden, um mit dem Linux-basierten Betriebssystem Ihres Routers zu interagieren.

Aktualisieren Sie die Paketlisten (OpenWrt):

```text
opkg update
```

Installieren Sie die erforderlichen Pakete:

```text
opkg install curl kmod-tun ca-certificates
```

Führen Sie das AdGuard VPN CLI-Installationsskript aus:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. AdGuard VPN CLI einrichten

1. Melden Sie sich bei Ihrem Konto an

   Um AdGuard VPN für Linux nutzen zu können, benötigen Sie ein AdGuard-Konto.

   You can sign up or log in on our [website](https://auth.adguard.com/login.html) or in the Terminal.

   To sign up or log in, type:

   ```jsx
   adguardvpn-cli login
   ```

   Hinweis: Wenn es nicht gelungen ist, die Binärdatei mit '/usr/local/bin' zu verknüpfen, verwenden Sie den vollständigen Dateipfad, um alle Befehle auszuführen. Zum Beispiel: `/opt/adguardvpn_cli/adguardvpn-cli login`

2. Mit VPN verbinden

   Wählen Sie einen VPN-Serverstandort, der Ihren Anforderungen am besten entspricht.

   Im Allgemeinen gilt: Je näher Sie dem Server sind, desto schneller ist die Verbindung.

   Um die verfügbaren Standorte anzuzeigen, geben Sie Folgendes ein:

   ```jsx
   adguardvpn-cli list-locations
   ```

   Um eine Verbindung zu einem bestimmten Standort herzustellen, geben Sie Folgendes ein:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Ersetzen Sie LOCATION_NAME durch die Stadt, das Land oder den ISO-Code des Ortes, zu dem Sie eine Verbindung herstellen möchten.

   Für eine Schnellverbindung, geben Sie ein:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN wählt den schnellsten verfügbaren Standort und merkt sich diesen für zukünftige schnelle Verbindungen.

3. Passen Sie Ihre Einstellungen an

   Rufen Sie eine Liste aller verfügbaren AdGuard VPN-Befehle auf und passen Sie den VPN-Client an Ihre Bedürfnisse an.

   Um alle Befehle anzuzeigen, geben Sie ein:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI erstellt eine tun0-Schnittstelle für VPN-Tunneling.

## 6) Firewall-Regeln einrichten

Sie können dies über die Weboberfläche oder über die Befehlszeile tun. Die folgenden Schritte beschreiben die Einrichtung über die SSH-Befehlszeile.

1. Add a new unmanaged interface via SSH

```shell
ssh admin@router_ip
uci set network.tun0='interface'
uci set network.tun0.proto='none'
uci set network.tun0.device='tun0'
uci commit network
/etc/init.d/network reload
```

1. Add tun0 to WAN zone

For traffic to go through VPN, add tun0 to WAN zone.
Die WAN-Schnittstelle, die eine Verbindung zum Internet herstellt, befindet sich in der Regel in einer Zone mit dem Namen `wan` oder einer ähnlichen Bezeichnung. Überprüfen Sie die Konfigurationsdateien Ihres Routers oder die Firewall-Einstellungen, um herauszufinden, welche Zone mit der WAN-Schnittstelle verbunden ist.

Um dies zu tun, lassen Sie sich die vorhandenen Firewall-Zonen auflisten:

```shell
uci show firewall
```

Dadurch wird eine Konfigurationsdatei mit allen Zonen angezeigt. Suchen Sie nach einem Abschnitt wie `firewall.@zone[1]` oder ähnlich, in dem `Optionsname 'wan'` definiert ist. Die Zahl `[1]` kann je nach Ihrer Konfiguration unterschiedlich sein.

Führen Sie diesen SSH-Befehl aus und ersetzen Sie `zone[1]` durch die richtige, zuvor identifizierte ‘wan’-Zone:

```shell
uci show firewall | grep "=zone"
uci add_list firewall.@zone[1].network='tun0'
uci commit firewall
/etc/init.d/firewall reload
```

Wenn Sie den gesamten Datenverkehr, der nicht durch VPN geschützt ist, deaktivieren möchten, führen Sie den folgenden Befehl aus. Auf diese Weise wird die Internetverbindung getrennt, sobald die VPN-Verbindung unterbrochen wird. Wenn Sie diesen Schritt nicht ausführen, wird Ihre echte IP-Adresse offengelegt, sobald die VPN-Verbindung unterbrochen wird.

```shell
uci del_list firewall.@zone[1].network='wan'
uci del_list firewall.@zone[1].network='wan6'
uci commit firewall
/etc/init.d/firewall reload
```

Wenn Sie Ihre Meinung geändert haben und direkten Datenverkehr zulassen möchten, führen Sie folgenden Befehl aus:

```shell
uci add_list firewall.@zone[1].network='wan'
uci add_list firewall.@zone[1].network='wan6'
uci commit firewall
/etc/init.d/firewall reload
```

## 7. Automatischen Start für AdGuard VPN CLI einrichten

Um AdGuard VPN CLI automatisch nach dem Neustart des Routers zu starten, erstellen Sie eine Datei unter `.../etc/init.d/adguardvpn`.

Fügen Sie dies in die Datei ein:

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

Führen Sie dies aus, um den Zugriff für den automatischen Start zu gewähren und ihn zu aktivieren:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
