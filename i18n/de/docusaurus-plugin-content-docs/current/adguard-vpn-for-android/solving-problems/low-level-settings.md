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

AdGuard VPN uses TrustTunnel — a modern, open-source VPN protocol developed by us and available for anyone to use, audit, and implement. [Visit the website](https://trusttunnel.org/) to learn how it works and why it’s different from traditional VPN protocols.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6, or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.

Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Proxy-Server-Port

Hier können Sie den internen SOCKS5-Proxyserver-Port festlegen. Die Standardoption ist 1080.
