---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad AdGuard VPN til Windows gør

- Beskytter mod aflytning af netværkstrafik (spoofing). AdGuard VPN opretter en krypteret tunnel mellem brugerens enhed og en fjernserver. Al internettrafikken passerer igennem denne tunnel, så data er beskyttet undervejs. Og grundet [AdGuards unikke protokol](/general/adguard-vpn-protocol)er man garanteret en hurtig og sikker forbindelse.

- Maskerer IP-adressen. Den reelle IP-adresse er nøglen til personlige data for cyberkriminelle. Navn, e-mailadresse, telefonnummer, betalingskortoplysninger kan alle falde i hænderne på svindlere, hvis man ikke skjuler sin IP. Med AdGuard VPN passerer al trafik igennem en krypteret tunnel videre til VPN-serveren. Webserveren registrerer IP-adressen på tunnelens endepunkt, altså VPN-serveren, og ikke enhedens reelle IP-adresse.

- Skjuler den reelle placering. Hvad giver det dig? Mulighed for eksempelvis hotelbookning til lokale priser eller at undgå geomålrettet annoncering.

AdGuard VPN til Windows har mange fordele, så vi har dedikeret [en separat artikel](/general/why-adguard-vpn) til dem. Her vil vi dog fokusere mere på selve applikationen, og hvorledes den fungerer.

## Komme i gang med at bruge AdGuard VPN til Windows

For at begynde at bruge AdGuard VPN til Windows, download først appen fra [vores websted](https://adguard-vpn.com/welcome.html). Installationen tager et minuts tid. Et dialogvindue vises, hvori mindst ét felt skal markeres, nemlig accept af Vilkår for Brug samt Fortrolighedspolitik. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. Til sidst vil programmet anmode om, at der logges ind via enten en [AdGuard-konto](https://auth.adguard.com/login.html) eller sociale netværk (Apple, Google, Facebook). Det er alt, man kan nu begynde at bruge AdGuard VPN til Windows.

## Startskærm

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Det mest fremtrædende element på **startskærmen** er AdGuard VPN-knappen Tilslut/Afbryd. Over knappen ses den [Tilstand](#exclusions), programmet opererer i, og derunder den server, der pt. er valgt. Til højre på skærmen findes alle tilgængelige placeringer. Den hurtigste serverplacering, dvs. den med laveste ping, vises øverst på listen.

Øverst på skærmen findes et navigationspanel med fire faner: **Hjem**, **Undtagelser**, **Support**, **Indstillinger**.

## Undtagelser

AdGuard VPN til Windows kan fungere i to tilstande. Som standard fungerer applikationen overalt, og man kan opliste de websteder og apps, man vil undtage fra tunnelen. Man kan også skifte til den modsatte tilstand: AdGuard VPN kører kun på de websteder og i de apps, som er angivet på undtagelseslisten. Bemærk, at disse to tilstandes undtagelseslister er uafhængige af hinanden.

![Undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Der kan **manuelt** føjes websteder til undtagelser ved at angive deres domænenavne. Appen giver også mulighed for at vælge populære websteder **fra listen**.

![Tilføj undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Tilføj undtagelser fra liste](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Import/eksport af undtagelseslister

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Indstillinger

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### App-indstillinger

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS-servere

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Avancerede indstillinger

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Driftstilstand

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logningsniveau

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Brug QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### App-undtagelser

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Andre faner

### Om

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Konto

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
