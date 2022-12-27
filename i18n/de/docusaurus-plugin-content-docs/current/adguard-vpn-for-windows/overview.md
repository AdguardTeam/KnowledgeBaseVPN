---
title: Funktionsübersicht
sidebar position: 1
---

## Was ist AdGuard VPN für Windows

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. Wie funktioniert VPN? Jedes Mal, wenn Sie eine Website besuchen, ohne ein VPN zu verwenden, kann Ihr ISP dies sehen. Er weiß, wer Sie sind und wonach Sie suchen, und kann diese Daten sammeln und verkaufen. Auch die Website, die Sie besucht haben, kann Ihre Aktivitäten verfolgen. Wenn Sie eine VPN-App aktivieren, leitet sie Ihren Datenverkehr durch einen verschlüsselten Tunnel zu einem Remote-VPN-Server um, wodurch Ihre Privatsphäre geschützt wird — Der ISP weiß nicht, wohin Sie eine Anfrage gesendet haben, und die Website weiß nicht, woher Sie gekommen sind.

**Was macht AdGuard VPN für Windows?**

* Schützt vor dem Abfangen des Netzwerkverkehrs (Spoofing). AdGuard VPN erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem Remote-Server. Ihr gesamter Internetverkehr wird durch diesen Tunnel geleitet, sodass Ihre Daten unterwegs geschützt sind. Und dank des [einzigartigen Protokolls von AdGuard](/general/adguard-vpn-protocol.mdx) ist Ihnen eine schnelle und sichere Verbindung garantiert.

* Maskiert Ihre IP-Adresse. Ihre wahre IP-Adresse ist für Cyberkriminelle der Schlüssel zu Ihren persönlichen Daten. Ihr Name, Ihre E-Mail-Adresse, Telefonnummer und Kreditkarteninformationen können Betrügern in die Hände fallen, wenn Sie Ihre IP-Adresse nicht verbergen. Mit AdGuard VPN wird, wie bereits erwähnt, Ihr gesamter Datenverkehr durch einen verschlüsselten Tunnel geleitet und gelangt zum VPN-Server. Daher scheint es von außen, dass Ihr Gerät die IP-Adresse dieses VPN-Servers hat.

* Verbirgt Ihren tatsächlichen Standort. Wenn Sie einen der AdGuard VPN-Server auswählen, werden Sie sofort zu dessen Standort „teleportiert“. Was bedeutet das für Sie? Zum Beispiel die Möglichkeit, ein Hotel zu den Preisen der Einheimischen zu buchen oder sich vor geografisch ausgerichteter Werbung zu verstecken.

AdGuard VPN für Windows hat viele Vorteile, daher haben wir ihnen [separaten Artikel](/general/why-adguard-vpn.md) gewidmet. Unten konzentrieren wir uns mehr auf die App selbst und ihre Funktionsweise.

## Wie Sie AdGuard VPN für Windows verwenden können

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). Die Installation dauert nicht länger als eine Minute – und Sie sehen ein Dialogfenster, in dem Sie mindestens ein Kästchen ankreuzen müssen, um die Bedingungen der Benutzervereinbarung und der Datenschutzerklärung anzuwenden. Es liegt an Ihnen zu entscheiden, ob AdGuard anonymisierte Daten über Ihre App-Nutzung sammeln wird. Zuletzt fordert Sie das Programm auf, sich anzumelden, entweder über [AdGuard-Konto](https://auth.adguard.com/login.html) oder über soziale Netzwerke (Apple, Google, Facebook). Danach können Sie AdGuard VPN für Windows verwenden.


## Startbildschirm

![AdGuard VPN für Windows Startseite](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Das auffälligste Element auf dem **Startbildschirm** ist die Verbindungs-/Trennschaltfläche von AdGuard VPN. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## Ausschlüsse

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. Was bedeuten sie? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. Der **Selektive Modus** hat den gegenteiligen Effekt: Er aktiviert AdGuard VPN nur auf den in der Ausschlussliste angegebenen Websites. Bitte beachten Sie, dass die Ausschlusslisten dieser beiden Modi unabhängig voneinander sind.

![Ausschlüsse](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![App-Ausschlüsse](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Ausschlüsse aus der Liste hinzufügen](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Beim manuellen Hinzufügen von Domains sollten Sie einige Nuancen berücksichtigen. Wenn Sie beispielsweise die Domain `google.com` manuell ausschließen, werden alle Subdomains `*.google.com` ebenfalls zur Ausschlussliste hinzugefügt. Domainnamen mit anderen Top-Level-Domains wie `google.es` oder `google.it` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Wir haben dort alle Domainnamen und Subdomains platziert, die sich auf jede Plattform beziehen.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Einstellungen

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

Unten auf der Seite befinden sich zwei Bereiche: **DNS-Server** und **Erweiterte Einstellungen**.

#### DNS-Server

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Andere Registerkarten

### Über das Programm

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.