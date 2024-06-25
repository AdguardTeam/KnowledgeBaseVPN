---
title: Funktionsübersicht
sidebar_position: 1
---

## Hauptseite

Der Hauptbildschirm zeigt den VPN-Status an (Verbunden/Getrennt). Außerdem gibt es die Schaltfläche *Verbinden/Trennen* und eine Liste der verfügbaren Server.

Jeder Server hat seinen Standort und seine Ping-Rate, die die Antwortzeit des Servers beschreibt. Je niedriger diese Rate ist, desto schneller ist die Verbindung. Die schnellsten Server stehen immer an der Spitze der Liste, die aus mehr als 50 Standorten in Dutzenden von Ländern besteht. Sie können sich mit dem schnellsten Server verbinden, indem Sie auf die Schaltfläche „*Verbinden*“ tippen oder einen Standort auswählen.

## Ausschlüsse

Mit Ausschlusslisten können Sie die VPN-Verbindung für bestimmte Websites und Anwendungen verwalten. Um auf die *Ausschlüsse* zuzugreifen, tippen Sie auf das zweite Symbol von links unten auf dem Bildschirm.

![Ausschlüsse *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

Standardmäßig funktioniert AdGuard VPN auf allen Websites und Apps, mit Ausnahme derer, die zu den Ausnahmen hinzugefügt wurden: Wenn Sie keine App oder Website angeben, ist VPN für diese aktiv. Sie können sie auch **selektiv** aktivieren — also nur für bestimmte Anwendungen oder Websites. Um in diesen Modus zu wechseln, tippen Sie auf *Modus ändern*.

![Modus ändern *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Seien Sie vorsichtig, wenn Sie Ihr VPN **selektiv** nutzen.

Wenn Sie einen Browser vom VPN-Tunnel ausschließen, funktionieren die Website-Ausschlüsse für diesen Browser nicht.

Wenn Sie für Websites in diesen Modus wechseln, vergessen Sie nicht, die Domains der Apps hinzuzufügen, die Sie verwenden möchten — zum Beispiel `facebook.com` für Facebook.

:::

### Websites

Sie können eine Domain (z. B. `google.com`) oder Subdomain (z. B. `*.google.com`) auf drei Arten zu den Ausnahmen hinzufügen:

- Geben Sie sie manuell in der App ein
- Fügen Sie sie direkt über den Browser hinzu, indem Sie die Website mit AdGuard VPN teilen
- Fügen Sie ihn aus einer integrierten Liste von Diensten hinzu

![Manuell hinzufügen *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Aus Liste hinzufügen *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

Beim manuellen Hinzufügen von Domains gibt es einige Feinheiten. Wenn Sie beispielsweise die Domains `yahoo.com` manuell ausschließen, werden alle `*.yahoo.com` Subdomains ebenfalls in den Ausschlüssen aufgeführt. Domainnamen mit anderen Top-Level-Domains wie `yahoo.jp` oder `yahoo.fr` werden jedoch nicht ausgeschlossen.

Wenn Sie `youtube.com` zu den Ausnahmen hinzufügen, wird die Domain des gleichen Dienstes `youtu.be` nicht hinzugefügt. In diesem Fall ist es sicherer, die integrierten Listen der Dienste zu verwenden. Sie enthalten alle mit der jeweiligen Plattform verbundenen Subdomains.

:::

Da Sie Subdomains in Dienstlisten aktivieren können, wurden Felder hinzugefügt, die den Status der einzelnen Dienste anzeigen:

- **Vollständig aktiviert** wird durch ein weißes Häkchen auf grünem Hintergrund angezeigt
- **Teilweise aktiviert** (aktivierte Subdomains ohne die Hauptdomain) sind mit einem grünen Quadrat auf weißem Hintergrund gekennzeichnet
- **Vollständig deaktiviert** ist mit einem leeren Kästchen gekennzeichnet

![Website-Ausschlüsse *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

Wenn Sie versehentlich eine Domain oder Subdomain gelöscht haben, tippen Sie einfach auf *Auf Standard zurücksetzen*.

![Auf Standardwerte zurücksetzen *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

Sie können auch VPN für Apps verwalten. Um eine Anwendung vom VPN-Tunnel auszuschließen, tippen Sie auf *App hinzufügen*. Um VPN **selektiv** zu verwenden, tippen Sie auf *Modus ändern*.

![App-Ausschlüsse *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

Im *Integrierten Modus* können Sie Apps nur über den AdGuard Ad Blocker verwalten.

:::

## Einstellungen

Sie können *Einstellungen* erreichen, indem Sie auf das Zahnradsymbol unten rechts auf dem Bildschirm drücken.

![Einstellungen *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### Allgemein

![Allgemein *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

Unter *Allgemein* können Sie grundlegende AdGuard VPN-Einstellungen verwalten:

- AdGuard VPN beim Systemstart starten
- Einen DNS-Server auswählen, um den Datenverkehr zu verschlüsseln und Werbung zu sperren, wenn eine VPN-Verbindung besteht (wir empfehlen die Verwendung von AdGuard DNS)
- Kill Switch aktivieren, um Ihre Privatsphäre zu schützen und die Verbindung zum Internet zu trennen, wenn die VPN-Verbindung abbricht
- Ein Farbschema auswählen
- Anonyme Absturzberichte aktivieren, um Entwickler über App-Probleme zu informieren

### Erweitert

![Erweitert *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

Der Abschnitt *Erweitert* enthält eine Reihe von Einstellungen, die nicht so häufig verwendet werden.

Der *Betriebsmodus* ermöglicht es Ihnen, festzulegen, wie Ihr Datenverkehr weitergeleitet werden soll. Es gibt drei Modi: VPN, SOCKS5 und Integrierter Modus. Im Modus *VPN* wird der gesamte Datenverkehr über AdGuard VPN geleitet. Im *SOCKS5*-Modus betreibt AdGuard VPN einen lokalen Proxy-Server, der von anderen Anwendungen für das Traffic-Routing genutzt werden kann. Der *Integrierte Modus* ermöglicht das Zusammenwirken von AdGuard VPN und AdGuard Ad Blocker.

:::note

Einige AdGuard VPN-Funktionen sind im *Integrierten Modus* deaktiviert: DNS-Server, Kill Switch und App-Ausschlüsse. In der AdGuard Ad Blocker App können Sie den DNS-Schutz verwalten und Apps über Ihren AdGuard VPN-Proxy leiten.

:::

*Protokollierungstiefe* gibt an, wie viele App-Ereignisse aufgezeichnet werden. Wir empfehlen nicht, die Protokollierungsstufen *Erweitert* oder *Extrem* zu aktivieren, es sei denn, unser Support-Team fordert sie dazu auf.

In diesem Bereich können Sie auch Protokolle und Systeminformationen exportieren, um sie mit dem Support zu teilen.

*Diagnosedaten* zeigt die lokal gespeicherten technischen Informationen über die App, das Gerät und die Verbindungen an. Sie können diese kopieren und bei Bedarf an unser Support-Team senden.

Der letzte Abschnitt von *Erweiterten Einstellungen* ist *Low-Level-Einstellungen*. Wir bitten Sie dringend, die Einstellungen in diesem Abschnitt nicht zu ändern, es sei denn, Sie sind hochqualifiziert oder wurden von unserem Support-Team dazu aufgefordert. Hier ist es möglich, die TUN-Schnittstellenprotokollierung oder das IPv6-Protokoll auf der VPN-Schnittstelle zu aktivieren, einen Proxy-Server-Port oder eine zu verwendende Internetprotokollversion auszuwählen.

:::caution

Bevor Sie bei der Option **Bevorzugte IP-Version** zwischen IPv6 und IPv4 wählen, stellen Sie sicher, dass Ihr Netzwerk dieses Protokoll unterstützt. Wenn Sie z. B. IPv6 auswählen und Ihr Netzwerk nur IPv4 unterstützt, treten Probleme bei der Verbindung mit dem Internet auf. Und umgekehrt.

:::

### Support

Im Bereich *Support* können Sie unsere FAQ einsehen, um schnelle Antworten auf Ihre Fragen zu erhalten, Fehler zu melden und neue Funktionen vorzuschlagen.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
