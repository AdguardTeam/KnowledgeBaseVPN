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

![AdGuard VPN til Windows-startskærm *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

Det mest iøjnefaldende element på **Startskærmen** er AdGuard VPN Forbind/Frakobl-knappen, under hvilken den valgte server fremgår. Til højre på skærmen fremgår en liste over tilgængelige lokationer. Den hurtigste serverplacering, dvs. den med laveste ping, vises øverst på listen. Der er også en opdateringsknap, man kan klikke på, hvis nogen lokationer er offline.

Øverst på skærmen findes et navigeringspanel med fem faner: **Hjem**, **Undtagelser**, **Statistik**, **Support** og **Indstillinger**.

## Undtagelser

Som standard fungerer AdGuard VPN til Windows overalt. Websteder og apps, som skal undtages fra VPN-tunnelen, kan føjes til undtagelseslisten. AdGuard VPN kan også opsættes til kun at fungere på de websteder og apps, som fremgår på undtagelseslisten. Bemærk, at disse to lister er uafhængige af hinanden.

![Undtagelser *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Der kan **manuelt** føjes websteder til undtagelser ved at angive deres domænenavne. Appen giver også mulighed for at vælge populære websteder **fra listen**.

![Tilføj undtagelser fra liste *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Når domæner tilføjes manuelt, bør der tages højde for visse detaljer. Undtager man f.eks. manuelt domænet `google.com`, føjes alle underdomænerne `*.google.com` også til undtagelseslisten. Domænenavne med andre topniveaudomæner, såsom `google.es` eller `google.it`, undtages dog ikke. Man kan også føje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke føjes til listen.

:::

Vi anbefaler at bruge indstillingen **Fra listen**. Websteder grupperes i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Vi har placeret de mest populære tjenester dér, inkl. alle domænenavne og underdomæner relateret til hver platform.

### Import/eksport af undtagelseslister

For at eksportere undtagelseslisten fra AdGuard VPN til Windows til computeren, klik på **Eksportere undtagelser**, vælg mappen, hvor listen skal gemmes, og klik på **Gem**. Arkivfilen `exclusions.zip` med to `.txt`-filer downloades, én for hver af listerne. Nye undtagelser tilføjes, eller gamle kan slettes, ved at redigere dem.

Åbn AdGuard VPN på destinationsenheden, klik på *Undtagelser* og vælg *Websteder* eller *Apps*. Klik på *Importér undtagelser* og vælg det modtagne arkiv.

## Statistik

![Statistikskærm *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

Skærmen Statistik viser detaljerede oplysninger om dataforbruget, kategoriseret efter både lokation og app. Den fremhæver de hyppigst anvendte lokationer og apps. Der er adgang til statistikker for forskellige tidsperioder: Daglig, månedlig eller for hele den tidsperiode, AdGuard VPN til Windows har været anvendt.

Afgørende er, at alle disse oplysninger udelukkende gemmes på enheden, hvilket sikrer, at ingen andre kan se dem. Adgang til statistikfunktionen er kun tilgængelig for AdGuard VPN-abonnenter.

## Indstillinger

![Indstillinger *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

Den fjerde fane indeholder afsnit til tilpasning af appen.

### App-indstillinger

![App-indstillinger *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

I afsnittet **App-indstillinger** kan der angives app-sprog og aktiveres **Kill Switch**, der blokerer internetadgangen, hvis VPN-forbindelsen falder ud. Dette er nødvendigt for at forhindre ubudne gæster i at kunne tilgå private data, hvis VPN-beskyttelsen stopper, mens man er tilsluttet et offentligt Wi-Fi eller mobilnetværk.

Flg. funktioner kan også aktiveres med ét enkelt klik: **Auto-opdatering**, **Start AdGuard VPN ved opstart af Windows**, **Auto-tilslut ved start af app** samt tillade AdGuard at indsamle anonymiserede data om apps-brugen, så AdGuard-teamet får info om potentielle anvendelighedsproblemer. Her kan temaet også ændres til **Lyst**, **System**eller **Mørkt**.

Nederst på siden findes to afsnit: **DNS-servere** og **Avancerede indstillinger**.

#### DNS-servere

Fanen **DNS-servere** muliggør at tilføje en egen DNS-server — manuelt eller fra listen. En DNS-server fra enhver udbyder kan opsættes. Vi anbefaler at tilføje [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), en server, der udover standardfunktionerne kan beskytte mod annoncering, sporing og phishing.

#### Avancerede indstillinger

Det er fuldt ud muligt at bruge AdGuard VPN til Windows uden nogensinde at røre Avancerede indstillinger, men de kan være nyttige, hvis man er villig til at bruge tid på at lære, hvad de gør.

##### Driftstilstand

På trods af, at der er to driftstilstande — VPN og SOCKS5 —, anbefales det kun at bruge den, der er valgt som standard (VPN). Når **VPN-tilstand** er aktiveret, rutes al trafik på enheden igennem AdGuard VPN, mens AdGuard VPN i **SOCKS5-tilstand** bruger en lokal proxyserver, der kan bruges af andre apps til rutning af deres trafik.

##### Logningsniveau

Der kan vælges mellem to logningsniveauer: **Optag som standard** og **Optag alt**. Den første indstilling er aktiveret som standard. Indstillingen **Optag alt** bør kun aktiveres, såfremt vores supportteam har anmodet herom. Brug af appen i denne tilstand i en længere periode resulterer i øget strømforbrug.

Alle logger opbevares lokalt på enheden og kan om nødvendigt indsendes til supportteamet.

##### Brug QUIC

Dette er en eksperimentel funktion, via hvilken AdGuard kan anvende den avancerede QUIC-krypteringsprotokol. Den har mange fordele, men den mest fremtrædende er, at den kan forbedre forbindelseskvaliteten under ikke-ideelle forhold, såsom ved brug af mobilt internet eller offentlige Wi-Fi netværk.

#### Brug WinTun

![Brug WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun er en trafikrutningsdriver typisk brugt til VPN-implementeringer på Windows, der forbedrer kvaliteten af VPN-forbindelser ved at oprette en virtuel netværksadapter. Som standard bruger AdGuard VPN den almindelige WFP-driver (og TDI-driver til Windows 7).

#### Undernetundtagelser

Denne funktion muliggør at tilføje undernet til undtagelse af trafik fra bestemte enheder tilsluttet netværket. Eksempelvis en robotstøvsuger.

## Andre faner

### Om

Fanen **Om** indeholder oplysninger om den aktuelle version af AdGuard VPN til Windows, en opdateringsknap og links til AdGuard VPN-webstedet, EULA og Fortrolighedspolitik.

### Konto

Her findes information om licensstatus, samt et link til den personlige AdGuard-konto, hvorfra aktuelle abonnementer kan håndteres og nye købes.

## Support

Denne fane har til formål at besvare brugernes spørgsmål: Her kan findes links til FAQ-siden, anmeldes fejl eller gives feedback samt logfiler eksporteres, hvis supportteamet anmoder herom.
