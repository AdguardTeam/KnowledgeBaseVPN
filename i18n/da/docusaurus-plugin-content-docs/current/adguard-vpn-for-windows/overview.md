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

For at begynde at bruge AdGuard VPN til Windows, download først appen fra [vores websted](https://adguard-vpn.com/welcome.html). Installationen tager et minuts tid. Et dialogvindue vises, hvori mindst ét felt skal markeres, nemlig accept af Vilkår for Brug samt Fortrolighedspolitik. Det er dog valgfrit, hvorvidt AdGuard skal tillades at indsamle anonymiserede data om app-brugen. Til sidst vil programmet anmode om, at der logges ind via enten en [AdGuard-konto](https://auth.adguard.com/login.html) eller sociale netværk (Apple, Google, Facebook). Det er alt, man kan nu begynde at bruge AdGuard VPN til Windows.

## Startskærm

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

The most noticeable item on the **Home screen** is the AdGuard VPN Connect/Disconnect button, below which you can see the selected server. On the right side of the screen you will see a list of available locations. Den hurtigste serverplacering, dvs. den med laveste ping, vises øverst på listen. There is also a refresh button that you can click if any locations are offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**. **Support**, and **Settings**.

## Undtagelser

By default, AdGuard VPN for WIndows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Der kan **manuelt** føjes websteder til undtagelser ved at angive deres domænenavne. Appen giver også mulighed for at vælge populære websteder **fra listen**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Når domæner tilføjes manuelt, bør der tages højde for visse detaljer. Undtager man f.eks. manuelt domænet `google.com`, føjes alle underdomænerne `*.google.com` også til undtagelseslisten. Domænenavne med andre topniveaudomæner, såsom `google.es` eller `google.it`, undtages dog ikke. Man kan også føje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke føjes til listen.

:::

Vi anbefaler at bruge indstillingen **Fra listen**. Websteder grupperes i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Vi har placeret de mest populære tjenester dér, inkl. alle domænenavne og underdomæner relateret til hver platform.

### Import/eksport af undtagelseslister

For at eksportere undtagelseslisten fra AdGuard VPN til Windows til computeren, klik på **Eksportere undtagelser**, vælg mappen, hvor listen skal gemmes, og klik på **Gem**. Arkivfilen `exclusions.zip` med to `.txt`-filer downloades, én for hver af listerne. Nye undtagelser tilføjes, eller gamle kan slettes, ved at redigere dem.

Åbn AdGuard VPN på destinationsenheden, klik på *Undtagelser* og vælg *Websteder* eller *Apps*. Klik på *Importér undtagelser* og vælg det modtagne arkiv.

## Stats

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## Indstillinger

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### App-indstillinger

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

I afsnittet **App-indstillinger** kan der angives app-sprog og aktiveres **Kill Switch**, der blokerer internetadgangen, hvis VPN-forbindelsen falder ud. Dette er nødvendigt for at forhindre ubudne gæster i at kunne tilgå private data, hvis VPN-beskyttelsen stopper, mens man er tilsluttet et offentligt Wi-Fi eller mobilnetværk.

Flg. funktioner kan også aktiveres med ét enkelt klik: **Auto-opdatering**, **Start AdGuard VPN ved opstart af Windows**, **Auto-tilslut ved start af app** samt tillade AdGuard at indsamle anonymiserede data om apps-brugen, så AdGuard-teamet får info om potentielle anvendelighedsproblemer. Her kan temaet også ændres til **Lyst**, **System**eller **Mørkt**.

Nederst på siden findes to afsnit: **DNS-servere** og **Avancerede indstillinger**.

#### DNS-servere

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. En DNS-server fra enhver udbyder kan opsættes. Vi anbefaler at tilføje [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), en server, der udover standardfunktionerne kan beskytte mod annoncering, sporing og phishing.

#### Avancerede indstillinger

Det er fuldt ud muligt at bruge AdGuard VPN til Windows uden nogensinde at røre Avancerede indstillinger, men de kan være nyttige, hvis man er villig til at bruge tid på at lære, hvad de gør.

##### Driftstilstand

På trods af, at der er to driftstilstande — VPN og SOCKS5 —, anbefales det kun at bruge den, der er valgt som standard (VPN). Når **VPN-tilstand** er aktiveret, rutes al trafik på enheden igennem AdGuard VPN, mens AdGuard VPN i **SOCKS5-tilstand** bruger en lokal proxyserver, der kan bruges af andre apps til rutning af deres trafik.

##### Logningsniveau

Der kan vælges mellem to logningsniveauer: **Optag som standard** og **Optag alt**. Den første indstilling er aktiveret som standard. Indstillingen **Optag alt** bør kun aktiveres, såfremt vores supportteam har anmodet herom. Brug af appen i denne tilstand i en længere periode resulterer i øget strømforbrug.

Alle logger opbevares lokalt på enheden og kan om nødvendigt indsendes til supportteamet.

##### Brug QUIC

Dette er en eksperimentel funktion, via hvilken AdGuard kan anvende den avancerede QUIC-krypteringsprotokol. Den har mange fordele, men den mest fremtrædende er, at den kan forbedre forbindelseskvaliteten under ikke-ideelle forhold, såsom ved brug af mobilt internet eller offentlige Wi-Fi netværk.

#### Use WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Subnet exclusions

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## Andre faner

### Om

Fanen **Om** indeholder oplysninger om den aktuelle version af AdGuard VPN til Windows, en opdateringsknap og links til AdGuard VPN-webstedet, EULA og Fortrolighedspolitik.

### Konto

Her findes information om licensstatus, samt et link til den personlige AdGuard-konto, hvorfra aktuelle abonnementer kan håndteres og nye købes.

## Support

Denne fane har til formål at besvare brugernes spørgsmål: Her kan findes links til FAQ-siden, anmeldes fejl eller gives feedback samt logfiler eksporteres, hvis supportteamet anmoder herom.
