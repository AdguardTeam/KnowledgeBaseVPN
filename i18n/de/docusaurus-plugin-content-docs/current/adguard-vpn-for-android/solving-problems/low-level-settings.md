---
title: Leitfaden für Low-Level-Einstellungen
sidebar_position: 6
---

## So öffnen Sie die Low-Level-Einstellungen

:::caution

Das Ändern von _Low-Level-Einstellungen_ kann zu Problemen mit der Leistung von AdGuard VPN führen, die Internetverbindung unterbrechen oder Ihre Sicherheit und Privatsphäre gefährden. Sie sollten diesen Bereich nur öffnen, wenn Sie wissen, was Sie tun, oder wenn Sie von unserem Support-Team dazu aufgefordert wurden.

:::

Um auf die _Low-Level-Einstellungen_ zuzugreifen, öffnen Sie die AdGuard VPN-App und tippen Sie auf das Zahnradsymbol in der unteren rechten Ecke des Bildschirms. Wählen Sie dann _Allgemein_ → _Erweitert_ → _Low-Level-Einstellungen_.

## Low-Level-Einstellungen

Im Folgenden listen wir alle Einstellungen auf, die in AdGuard VPN für Android verfügbar sind, und erklären, was sie bewirken. Wir bitten Sie noch einmal, nicht an diesen Einstellungen herumzuspielen, auch wenn Sie diese Anleitung gelesen haben. Betrachten Sie es als Spickzettel für den Fall, dass Sie wissen, was Sie tun, aber bestimmte Dinge auffrischen wollen.

### AdGuard VPN-Protokoll

Standardmäßig verwendet das AdGuard VPN-Protokoll die dynamische VPN-Protokollauswahl (Option _Automatisch auswählen_). Das bedeutet, dass AdGuard VPN automatisch ermittelt, welches Protokoll — HTTP2/TLS oder HTTP3/QUIC — Ihnen die beste Leistung bietet, und sofort darauf umschaltet. Dies verbessert die Geschwindigkeit und Stabilität des VPN, was besonders in Regionen hilfreich ist, in denen die Nutzung von VPN eingeschränkt oder unzuverlässig ist.

Wenn Sie wissen, was Sie tun, können Sie AdGuard VPN so einstellen, dass nur das HTTP2/TLS- oder HTTP3/QUIC-Protokoll verwendet wird, anstelle der Option _Automatisch auswählen_. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) ist ein relativ neues Protokoll und kann daher weniger stabil sein. Wenn Ihre Internetverbindung jedoch instabil ist (z. B. wenn Sie eine Verbindung zum öffentlichen WLAN herstellen), bietet sie dank der [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking)-Technologie mehr Sicherheit und erhöht die Verbindungsgeschwindigkeit.

Hier finden Sie außerdem einen speziellen Artikel über das Protokoll: [So funktioniert das AdGuard VPN-Protokoll](https://trusttunnel.org/).

### WLAN-Gateway in VPN-Routen einbeziehen

Wenn diese Einstellung aktiviert ist, werden die IP-Adressen des Gateways zu den VPN-Routen hinzugefügt, wenn WLAN verwendet wird.
Wenn Sie diese Funktion deaktivieren, wird die Routenkonfiguration (gefilterte IP-Bereiche) geändert. Das WLAN-Gateway des Netzes, mit dem der Benutzer verbunden ist, wird ausgeschlossen und unterliegt daher nicht der Filterung.

Diese Einstellung ist standardmäßig aktiviert.

### Paket-Erfassung (PCAP)

Wenn diese Einstellung aktiviert ist, erstellt AdGuard VPN eine `.pcap`-Datei mit einem Zeitstempel als Namen (z.B. `1682599851461.pcap`) im App-Cache-Verzeichnis. Diese Datei listet alle durch das VPN übertragenen Netzwerkpakete auf und kann mit dem Programm [Wireshark](https://www.wireshark.org/) analysiert werden.

### Watchdog

„Watchdog“ überwacht den Zustand des VPN-Prozesses, um zu prüfen, inwieweit es Probleme damit gibt. Wenn diese Funktion aktiviert ist, schützt sich AdGuard VPN selbst vor aggressiven Akkuspar-Apps, die es sonst ausschalten könnten.

### Bevorzugte IP-Version

Hier können Sie die Endpunktadressen einrichten. Es gibt drei Optionen: IPv4, IPv6 oder IPv4 und IPv6 (wenn Ihr Gerät beides unterstützt).

### Von VPN ausgeschlossene IPv4-Bereiche

Das VPN-Tunneling für die in diesem Abschnitt aufgeführten IPv4-Bereiche wird deaktiviert.

### IPv6-Schnittstelle

Nach dem Aktivieren dieser Option verfügen Sie beim Weiterleiten des Datenverkehrs durch die VPN-Verbindung über eine IPv6-Adresse. Sie können die Ausschlüsse in den _IPv6-Bereichen, die von VPN ausgeschlossen sind_, einrichten.

### Von VPN ausgeschlossene IPv6-Bereiche

Das VPN-Tunneling für die in diesem Abschnitt aufgeführten IPv6-Bereiche wird deaktiviert.

:::note

Sie müssen zuerst die Einstellung _IPv6-Schnittstelle_ in den _Low-Level-Einstellungen_ aktivieren, sonst wird diese Einstellung nicht übernommen.

:::

### MTU (Maximum Transmission Unit)

Hier können Sie die maximale Größe (in Bytes) des im lokalen VPN verwendeten Datenpakets festlegen. Der empfohlene Bereich liegt zwischen 1500 und 9000 Bytes.

### Ausgeschlossene Apps

Hier können Sie UIDs (eindeutige Bezeichner) oder Paketnamen der Anwendungen auflisten, die Sie vom VPN-Routing ausschließen möchten.
Anders als bei Apps, die zu regulären _Ausschlüssen_ hinzugefügt wurden, geht der Datenverkehr von Apps, die zu _Ausgeschlossene Apps_ hinzugefügt wurden, nicht zum lokalen VPN-Dienst auf Ihrem Gerät. Stattdessen geht es direkt zur Zieladresse.

### Proxy-Server-Port

Hier können Sie den internen SOCKS5-Proxyserver-Port festlegen. Die Standardoption ist 1080.
