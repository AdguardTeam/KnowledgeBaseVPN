---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für iOS?

Mit einem VPN können Sie eine sichere Verbindung zu einem anderen Netzwerk im Internet herstellen. It connects a user’s computer or mobile device to a server and allows one to browse the Internet using a “cover” IP address. Wenn sich der VPN-Server in einem anderen Land befindet, sieht es so aus, als ob Ihre Internetverbindung von diesem Land aus hergestellt wurde. Weitere Details finden Sie in [unserem Artikel über die Funktionsweise eines VPN](/general/how-vpn-works).

AdGuard VPN verfügt über mehrere Funktionen:

- Verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- Ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- Verschlüsselt Ihren Datenverkehr und macht den Inhalt für Betrüger unzugänglich
- Ermöglicht die Konfiguration, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Der nächste Vorteil von AdGuard VPN für iOS ist unser eigenes VPN-Protokoll. Im Vergleich zu anderen VPN-Protokollen ist es extrem schwer zu erkennen und selbst bei einer schlechten Internetverbindung stabil. [Erfahren Sie mehr über das AdGuard VPN-Protokoll](/general/adguard-vpn-protocol).

## Wie man AdGuard VPN für iOS verwendet

To use AdGuard VPN for iOS, first you need to log into your [AdGuard account](https://adguardaccount.com/). Sie können sich direkt mit Ihren AdGuard-Kontodaten oder über Google, Apple ID oder Facebook anmelden (wenn Ihr AdGuard-Konto mit derselben E-Mail-Adresse registriert wurde).

Wenn Sie noch kein AdGuard-Konto haben, müssen Sie es zuerst erstellen.

AdGuard VPN ist ganz einfach zu verwenden. Auf dem Hauptbildschirm sehen Sie die Schaltfläche *Verbinden* (*Deaktivieren*) und die Liste der verfügbaren Server (wir nennen sie *Standorte*). Jeder Server hat seinen eigenen Standort (ein bestimmtes Land und eine Stadt) und seine eigene Ping-Anzeige.

Der Ping zeigt die Antwortzeit des Servers in Millisekunden an. Dies gibt an, wie schnell die VPN-Verbindung sein wird, wenn Sie sich mit diesem Standort verbinden. Die Auswahl eines Servers mit einem Ping von 22 ms bedeutet, dass ein Datenpaket, das an diesen Server gesendet wird, in 22 ms zurückgegeben wird.

Mit AdGuard VPN können Sie aus über 50 Standorten in Dutzenden von Ländern wählen.

![Home and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Ausschlüsse

Den Tab „Ausschlüsse“ finden Sie, indem Sie auf das zweite Symbol in der unteren Leiste tippen.

Standardmäßig ist AdGuard VPN für alle Websites aktiv, mit Ausnahme derer, die zu den Ausschlüssen hinzugefügt wurden. Sie können es auch selektiv aktivieren — VPN ist dann nur für bestimmte Websites aktiv. Um in diesen Modus zu wechseln, tippen Sie auf *Modus ändern*.

:::note

Jeder Modus hat seine eigene Ausschlussliste.

:::

Sie können Domains (z. B. `google.com`) oder Subdomains (z. B. `news.google.com`) von Websites auf drei Arten zu den Listen hinzufügen:

- Geben Sie sie manuell in der App ein
- [Wählen Sie aus Domainlisten für beliebte Dienste](#domain-lists-for-popular-services)
- Fügen Sie sie direkt im Browser hinzu, indem Sie die gewünschten Seiten an die AdGuard VPN-App übergeben

![Ausschlüsse *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Wenn Sie eine Domain manuell hinzufügen, werden alle Subdomains automatisch hinzugefügt (sieht dann aus wie `*.google.com`). Möchten Sie nur google.com behalten oder VPN für eine bestimmte Domain deaktivieren? Tippen Sie auf die Zeile mit der Website. Dies öffnet ein separates Fenster, in dem Sie Subdomains verwalten können. Just uncheck the boxes for the ones you don’t need.

![Subdomains *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

If you manually add a subdomain, the main domain will also be added — but the checkbox next to it will not be checked.

### Domainlisten für beliebte Dienste

Große Dienste wie Google sind problematisch. In der Regel verwenden sie mehr als eine Domain: eine für Mediendateien, eine weitere für die API sowie Domains für verschiedene Länder. Im Fall von Google haben wir zum Beispiel 416 Domains in unserer Liste — alle müssen zu den Ausschlüssen hinzugefügt werden, um VPN für den Dienst vollständig zu deaktivieren (oder zu aktivieren).

Here’s how to add all necessary domains for a popular service to exclusion list:

1. Öffnen Sie *Ausschlüsse*.
2. Tippen Sie auf *Website hinzufügen*.
3. Tippen Sie auf *Aus der Liste*.
4. Suchen Sie den gewünschten Dienst in der Liste und tippen Sie auf *Hinzufügen*.

![Liste beliebter Dienste *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Ausschlüsse importieren und exportieren

Eine weitere nützliche Funktion ist der Import und Export von Ausschlusslisten. Auf diese Weise können Sie Ausschlusslisten von und zu anderen Geräten freigeben.

Sie können dies in vier Schritten tun:

1. Öffnen Sie AdGuard VPN auf dem Gerät, von dem Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.

2. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.

3. Vergessen Sie bei der Übertragung zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Import an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem iOS-Gerät auf Ihr Mac importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Mac senden.

4. Öffnen Sie AdGuard VPN auf dem Gerät, auf dem Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

**In AdGuard VPN für iOS können Sie auf die Export- und Importfunktionen zugreifen, indem Sie auf das Symbol mit den drei Punkten in der oberen rechten Ecke des Ausschlussbildschirms tippen**.

![Import und Export von Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Saved locations

This feature lets you save your favorite server locations to a dedicated tab so that you can quickly access them without the need to search or scroll through the whole list.

To add a location to *Saved*, just swipe left on it. To remove it from *Saved*, do the same:

![Saved locations add remove *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## General settings

To open General settings:

1. Tippen Sie auf das Symbol „Einstellungen“ (⚙) in der unteren rechten Ecke des Hauptbildschirms der App.
2. Tippen Sie auf *Allgemein*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS-Server

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Design

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### Erweiterte Einstellungen

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Betriebsmodus

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Protokollierungsebene

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Protokolle und Systeminformationen exportieren

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostische Informationen

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Technische Daten und Interaktionsdaten senden

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch (Not‐Trennung)

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
