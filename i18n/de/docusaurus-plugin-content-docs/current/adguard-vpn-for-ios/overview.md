---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für iOS?

Mit einem VPN können Sie eine sichere Verbindung zu einem anderen Netzwerk im Internet herstellen. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Erfahren Sie mehr](/general/how-vpn-works) darüber, wie ein VPN funktioniert.

AdGuard VPN has several functions:

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- encrypts your traffic and makes contents inaccessible to scammers
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Der nächste Vorteil von AdGuard VPN für iOS ist unser eigenes VPN-Protokoll. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Wie man AdGuard VPN für iOS verwendet

Um AdGuard VPN für iOS zu verwenden, müssen Sie sich zunächst bei Ihrem [AdGuard-Konto](https://my.adguard.com/) anmelden. Sie können sich direkt mit Ihren AdGuard-Kontodaten oder über Google, Apple ID oder Facebook anmelden (wenn Ihr AdGuard-Konto mit derselben E-Mail-Adresse registriert wurde).

Wenn Sie noch kein AdGuard-Konto haben, müssen Sie es zuerst erstellen.

AdGuard VPN ist ganz einfach zu verwenden. Auf dem Hauptbildschirm sehen Sie die Schaltfläche *Verbinden/Trennen* und die Liste der verfügbaren Server. Die Server haben ihren eigenen Standort (ein bestimmtes Land und eine Stadt) und eine Ping-Rate. The ping shows the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. In AdGuard VPN können Sie aus über 50 Standorten in Dutzenden von Ländern wählen.

![Hauptbildschirm und Standorte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Ausschlusslisten

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Eine weitere nützliche Funktion ist der Import/Export von Ausschlusslisten. Sie können dies tun, indem Sie die folgenden vier Schritte ausführen:

1. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, von dem aus Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.

2. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.

3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem iOS-Gerät auf Ihr Mac importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Mac senden.

4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

![Import-/Exportausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## App-Einstellungen

Um zu den App-Einstellungen zu gelangen:

1. Tippen Sie auf die Schaltfläche Einstellungen (⚙) in der unteren rechten Ecke des Hauptbildschirms der AdGuard VPN-App
2. Tippen Sie auf *App-Einstellungen*

Hier können Sie AdGuard VPN für iOS mit verschiedenen Optionen nach Bedarf konfigurieren: Betriebsmodus, DNS-Server, automatischer WLAN-Schutz, Thema und Erweiterte Einstellungen.

![App-Einstellungen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Betriebsmodus

AdGuard VPN für iOS kann in zwei Modi betrieben werden: **Allgemein** und **Integriert**.

Im **Allgemeinen** Modus wird das [AdGuard VPN-Protokoll](/general/adguard-vpn-protocol) verwendet, das die beste Kombination aus Geschwindigkeit und Sicherheit bietet. In diesem Modus kann AdGuard VPN nicht mit [AdGuard Werbeblocker für iOS](https://adguard.com/kb/adguard-for-ios/overview/) arbeiten.

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard Ad Blocker for iOS by using the IPSec protocol instead. Dieses Protokoll ist ebenfalls sicher, aber etwas langsamer und leichter zu erkennen. Sie müssen keine zusätzlichen Aktionen ausführen, um die Integration einzurichten: Installieren Sie einfach beide Apps und wechseln Sie in diesen Modus.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNS-Server

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### WLAN-Auto-Schutz

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Thema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Erweiterte Einstellungen

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Quick Actions (verfügbar in iOS 13 oder höher)

To access this feature, touch and hold the app icon, then lift your finger. You'll see quick actions: Connect/Disconnect, Select location, Edit Home Screen, and Remove app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
