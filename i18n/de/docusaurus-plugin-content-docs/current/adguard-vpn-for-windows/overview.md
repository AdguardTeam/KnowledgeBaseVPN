---
title: Funktionsübersicht
sidebar_position: 1
---

## Was AdGuard VPN für Windows leistet

- Schützt vor dem Abfangen des Netzwerkverkehrs (Spoofing). AdGuard VPN erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem Remote-Server. Ihr gesamter Internetverkehr wird durch diesen Tunnel geleitet, sodass Ihre Daten unterwegs geschützt sind. Und dank des [einzigartigen Protokolls von AdGuard](/general/adguard-vpn-protocol) ist Ihnen eine schnelle und sichere Verbindung garantiert.

- Maskiert Ihre IP-Adresse. Ihre wahre IP-Adresse ist für Cyberkriminelle der Schlüssel zu Ihren persönlichen Daten. Ihr Name, Ihre E-Mail-Adresse, Telefonnummer und Kreditkarteninformationen können Betrügern in die Hände fallen, wenn Sie Ihre IP-Adresse nicht verbergen. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Verbirgt Ihren tatsächlichen Standort. Was bedeutet das für Sie? Zum Beispiel die Möglichkeit, ein Hotel zu den Preisen der Einheimischen zu buchen oder sich vor geografisch ausgerichteter Werbung zu verstecken.

AdGuard VPN für Windows hat viele Vorteile, daher haben wir ihnen [separaten Artikel](/general/why-adguard-vpn) gewidmet. Hier wollen wir uns jedoch mehr auf die Anwendung selbst und ihre Funktionsweise konzentrieren.

## So verwenden Sie AdGuard VPN für Windows

Um AdGuard VPN für Windows zu nutzen, laden Sie die App von [unserer Website](https://adguard-vpn.com/welcome.html) herunter. Die Installation dauert nicht länger als eine Minute – und Sie sehen ein Dialogfenster, in dem Sie mindestens ein Kästchen ankreuzen müssen, um die Bedingungen der Benutzervereinbarung und der Datenschutzerklärung anzuwenden. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. Zuletzt fordert Sie das Programm auf, sich anzumelden, entweder über [AdGuard-Konto](https://auth.adguard.com/login.html) oder über soziale Netzwerke (Apple, Google, Facebook). Danach können Sie AdGuard VPN für Windows verwenden.

## Startseite

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Das auffälligste Element auf dem **Startbildschirm** ist die Schaltfläche Verbinden/Trennen von AdGuard VPN. Oberhalb der Schaltfläche sehen Sie den [Modus](#exclusions), in dem die Anwendung läuft, und darunter sehen Sie den ausgewählten Server. Auf der rechten Seite des Bildschirms finden Sie alle verfügbaren Standorte. Der schnellste Standort, d. h. der mit dem niedrigsten Ping, wird am Anfang der Liste angezeigt.

Oben auf dem Bildschirm befindet sich ein Navigationsbereich mit vier Tabs: **Startseite**, **Ausschlüsse**, **Support**, **Einstellungen**.

## Ausschlüsse

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![Ausschlüsse](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Sie können Websites zu Ausschlüssen **manuell** hinzufügen, indem Sie ihre Domains eingeben. Die App bietet Ihnen auch die Möglichkeit, beliebte Websites **aus der Liste** auszuwählen.

![App-Ausschlüsse](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Ausschlüsse aus der Liste hinzufügen](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Ausschlusslisten importieren/exportieren

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Einstellungen

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### App-Einstellungen

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS-Server

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Erweiterte Einstellungen

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Funktionsweise

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Protokollierungstiefe

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### QUIC verwenden

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### App-Ausschlüsse

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Andere Tabs

### Über das Programm

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Konto

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
