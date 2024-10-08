---
title: Funktionsübersicht
sidebar_position: 1
---

AdGuard VPN für Mac ist ein Desktop-VPN-Dienst. AdGuard VPN ist vollständig kompatibel mit AdGuard Werbeblocker, sie können zusammen verwendet werden und funktionieren nahtlos. Erfahren Sie, welche Funktionen die App zu bieten hat.

Beachten Sie, dass **Sie AdGuard VPN für Mac nur verwenden können, wenn Sie sich bei Ihrem AdGuard-Konto angemeldet haben**. Sie können sich entweder mit Ihrem AdGuard-Konto anmelden oder mit einem externen Konto, nämlich über Apple, Google oder Facebook. Stellen Sie sicher, dass Ihr externes Konto an dieselbe E-Mail-Adresse wie Ihr AdGuard-Konto gebunden ist. Wenn in Ihrem AdGuard-Konto ein passendes Abonnement vorhanden ist, wird es automatisch in der Desktop-App aktiviert. Haben Sie noch kein AdGuard-Konto? Erstellen Sie es [hier](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN für Mac wird derzeit von macOS-Versionen ab macOS Catalina (10.15) unterstützt.

:::

## Startbildschirm

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

Die erste Registerkarte ist der Bildschirm *Home*. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping ist die Reaktionszeit eines VPN-Servers. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Unten sehen Sie die vollständige Liste der Standorte. The search field makes it easy to find the location you need.

:::note

Kostenlose Benutzer können sich nur mit bestimmten Standorten verbinden, während andere gesperrt sind. Außerdem gibt es in der kostenlosen Version ein monatliches Traffic-Limit von 3 GB.

:::

## Ausschlüsse

![Ausschlüsse](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Abschnitt: Ausschlüsse](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Außerdem können Sie nicht nur Websites zu Ausschlüssen hinzufügen, sondern auch aus den Listen beliebter Dienste auswählen. Die Listen sind in acht Kategorien unterteilt: Soziale Netzwerke, Messenger, Video- und Musik-Streaming-Dienste, Spiele, Shopping, Suchmaschinen und Tools für die Arbeitskommunikation. Jeder dieser Dienste kann mit einem Klick zu Ausschlüssen hinzugefügt werden. Dies ist besonders praktisch, wenn Sie den Selektiven Modus verwenden.

Ausschlussliste kann einfach konfiguriert werden. Wenn Sie eine Domain und einige ihrer Subdomains hinzugefügt haben, werden diese innerhalb der Root-Domain gruppiert. Beim Hinzufügen einer Root-Domain (`example.com`) wird auch ihre Maske hinzugefügt (`*.example.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

Wenn Sie einen Dienst hinzugefügt, etwas geändert oder entfernt haben und nun die ursprünglichen Einstellungen wiederherstellen möchten, drücken Sie einfach *Auf Standard zurücksetzen* neben der Domain – diese Aktion stellt alle fehlenden Domains wieder her und aktiviert alle Kontrollkästchen.

Außerdem können fertige Ausschlusslisten auf andere Geräte mit installiertem AdGuard VPN übertragen werden. Befolgen Sie zum Exportieren von Ausschlüssen die nachstehende Anleitung:

1. Öffnen Sie AdGuard VPN auf dem Gerät, von dem Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.
2. Im Archiv befinden sich zwei `.txt` Dateien, jeweils für Allgemeine und Selektive Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.
3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem Mac-Gerät auf Ihr iPhone importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr iPhone senden.
4. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, wo Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus. Fertig!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Support

![Support-Bildschirm](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). Und zögern Sie nicht, [Feedback zu unserem Produkt zu hinterlassen](https://surveys.adguard.com/vpn_mac/form.html).

## Einstellungen

![Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Schließlich kommen wir zur Registerkarte Einstellungen. Im Abschnitt *Über das Programm* können Sie die aktuelle Version von AdGuard VPN sehen, nach Updates suchen, unsere offizielle Website besuchen und sich mit der EULA und Datenschutzrichtlinie von AdGuard vertraut machen. Im Abschnitt *Über Lizenz* können Sie von kostenlos auf unbegrenzt upgraden, Ihr Abonnement verwalten oder sich abmelden. Und vor allem können Sie von hier aus auf *Allgemeine Einstellungen* zugreifen.

### App-Einstellungen

![App-Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Die ersten vier Grundfunktionen machen die App bequemer und benutzerfreundlicher, d.h. *Kill Switch*, *Automatisch aktualisieren*, *AdGuard VPN bei der Anmeldung starten* und *Automatisch beim App-Start verbinden*. Darüber hinaus können Sie zwischen hellen, dunklen und Systemthemen wählen – letzteres entspricht dem Thema auf Ihrem Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Dies kann nützlich sein, wenn Sie Protokolle an Ihre Nachricht an den Support anhängen möchten.

### DNS-Server

![DNS-Server](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Erweiterte Einstellungen

![Erweiterte Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Protokollierungsebene

Es gibt nur zwei Protokollierungsebenen, aber wir empfehlen dringend, dass Sie die erste Standardebene verwenden. Die zweite Option (erweiterte Protokollierung) sollte nur nach Rücksprache mit unserem technischen Support eingestellt werden, um ein ungewöhnliches Programmverhalten aufzuzeichnen. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Menüleistensymbol ausblenden

Diese Option befindet sich zwar in *Erweiterten Einstellungen*, kann aber bedenkenlos aktiviert werden. Sie können das AdGuard VPN-Symbol in der Menüleiste ausblenden, es verhindert jedoch nicht, dass unsere App im Hintergrund läuft.

#### Use QUIC

Das QUIC-Kommunikationsprotokoll ist die neueste, hochmoderne Version von HTTP. Schalten Sie den Schalter um, um eine bessere Verbindungsqualität unter nicht idealen Bedingungen zu erhalten, z. B. bei der Verwendung mobiler Daten in der U-Bahn oder im Aufzug.
