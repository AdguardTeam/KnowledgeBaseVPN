---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad AdGuard VPN til Windows gør

- Beskytter mod aflytning af netværkstrafik (spoofing). AdGuard VPN opretter en krypteret tunnel mellem brugerens enhed og en fjernserver. Al internettrafikken passerer igennem denne tunnel, så data er beskyttet undervejs. Og grundet [AdGuards unikke protokol](/general/adguard-vpn-protocol)er man garanteret en hurtig og sikker forbindelse.

- Maskerer IP-adressen. Den reelle IP-adresse er nøglen til personlige data for cyberkriminelle. Navn, e-mailadresse, telefonnummer, betalingskortoplysninger kan alle falde i hænderne på svindlere, hvis man ikke skjuler sin IP. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Skjuler den reelle placering. Ved at vælge en af AdGuard VPN-serverne bliver man øjeblikkeligt "teleporteret" til dens placering. Hvad giver det dig? Mulighed for eksempelvis hotelbookning til lokale priser eller at undgå geomålrettet annoncering.

AdGuard VPN til Windows har mange fordele, så vi har dedikeret [en separat artikel](/general/why-adguard-vpn) til dem. Her vil vi dog fokusere mere på selve applikationen, og hvorledes den fungerer.

## Komme i gang med at bruge AdGuard VPN til Windows

For at begynde at bruge AdGuard VPN til Windows, download først appen fra [vores websted](https://adguard-vpn.com/welcome.html). Installationen tager et minuts tid. Et dialogvindue vises, hvori mindst ét felt skal markeres, nemlig accept af Vilkår for Brug samt Fortrolighedspolitik. Det er dog valgfrit, hvorvidt AdGuard VPN skal tillades at indsamle anonymiserede data om app-brugen. Til sidst vil programmet anmode om, at der logges ind via enten en [AdGuard-konto](https://auth.adguard.com/login.html) eller sociale netværk (Apple, Google, Facebook). Det er alt, man kan nu begynde at bruge AdGuard VPN til Windows.

## Startskærm

![AdGuard VPN til Windows Startskærm](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Det mest fremtrædende element på **startskærmen** er AdGuard VPN-knappen Tilslut/Afbryd. Over knappen ses den [Tilstand](#exclusions), programmet opererer i, og derunder den server, der pt. er valgt. Til højre på skærmen findes alle tilgængelige placeringer. Den hurtigste serverplacering, dvs. den med laveste ping, vises øverst på listen.

Øverst på skærmen findes et navigationspanel med fire faner: **Hjem**, **Undtagelser**, **Support**, **Indstillinger**.

## Undtagelser

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![Undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Der kan **manuelt** føjes websteder til undtagelser ved at angive deres domænenavne. Appen giver også mulighed for at vælge populære websteder **fra listen**.

![Tilføj undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Tilføj undtagelser fra liste](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note When adding domains manually, you should take into account some nuances. Undtager man f.eks. manuelt domænet `google.com`, føjes alle underdomæner herfra `*.google.com` også til undtagelseslisten. Domænenavne med andre topniveaudomæner, såsom `google.es` eller `google.it`, undtages dog ikke. Man kan også føje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke tilføjes listen.

:::

Vi anbefaler at bruge indstillingen **Fra listen**. Websteder grupperes i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Vi har placeret de mest populære tjenester dér, inkl. alle domænenavne og underdomæner relateret til hver platform.

### Import/eksport af undtagelseslister

For at eksportere undtagelseslisten fra AdGuard VPN til Windows til computeren, klik på **Eksportere undtagelser**, vælg mappen, hvor listen skal gemmes, og klik på **Gem**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. De kan redigeres ved at tilføje nye undtagelser eller slette gamle.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Indstillinger

![Indstillinger](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### App-indstillinger

![App-indstillinger](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

I afsnittet **App-indstillinger** kan der angives app-sprog og aktiveres **Kill Switch**, der blokerer internetadgangen, hvis VPN-forbindelse falder ud. Dette er nødvendigt for at forhindre ubudne gæster i at kunne tilgå private data, hvis VPN-beskyttelsen stopper, mens man er tilsluttet et offentligt Wi-Fi eller mobilnetværk.

Flg. funktioner kan også aktiveres med ét enkelt klik: **Auto-opdatering**, **Start AdGuard VPN ved opstart af Windows**, **Auto-tilslut ved start af app** samt tillade AdGuard at indsamle anonymiserede data om apps-brugen, så AdGuard-teamet får info om potentielle anvendelighedsproblemer. Her kan temaet også ændres til **Lyst**, **System**eller **Mørkt**.

Nederst på siden findes to afsnit: **DNS-servere** og **Avancerede indstillinger**.

#### DNS-servere

Fanen **DNS-servere** muliggør at tilføje en DNS-server efter eget valg. En DNS-server fra enhver udbyder kan opsættes. Vi anbefaler at tilføje [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), en server, der kan beskytte mod annoncering, sporing og phishing, ud over standardfunktionerne.

#### Avancerede indstillinger

Det er fuldt ud muligt at bruge AdGuard VPN til Windows uden nogensinde at røre Avancerede indstillinger, men de kan være nyttige, hvis man er villig til at bruge tid på at lære, hvad de gør.

##### Driftstilstand

På trods af at der er to driftstilstande — VPN og SOCKS5 — anbefaler det kun at bruge den, der er valgt som standard (VPN). Når **VPN-tilstand** er aktiveret, rutes al trafik på enheden igennem AdGuard VPN, mens der i **SOCKS5-tilstand** bruges en lokal proxyserver, der ligeledes kan bruges af andre apps til rutning af deres trafik.

##### Logningsniveau

Der kan vælges mellem to logningsniveauer: **Optag som standard** og **Optag alt**. Den første indstilling er aktiveret som standard. Indstillingen **Optag alt** bør kun aktiveres, såfremt vores supportteam har anmodet herom. Brug af appen i denne tilstand i en længere periode resulterer i øget strømforbrug.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Brug QUIC

Dette er en eksperimentel funktion, via hvilken AdGuard kan anvende den avancerede QUIC-krypteringsprotokol. Den har mange fordele, men den mest fremtrædende er, at den kan forbedre forbindelseskvaliteten under ikke-ideelle forhold, såsom ved brug af mobilt internet eller offentlige Wi-Fi netværk.

### App-undtagelser

![Tilføjelse af en app til undtagelser](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. Ønskes visse apps undtaget fra tunnelen, skal disse placeres på listen **App-undtagelser**.

## Andre faner

### Om

Fanen **Om** indeholder oplysninger om aktuel version af AdGuard VPN til Windows, en opdateringsknap og links til AdGuard VPN-webstedet, EULA og Fortrolighedspolitik.

### Konto

Her findes information om licensstatus, samt et link til den personlige AdGuard-konto, hvorfra aktuelle abonnementer kan håndteres og nye købes.

## Support

Denne fane har til formål at besvare brugernes spørgsmål: Her findes links til FAQ-siden, anmelde fejl eller give feedback og eksportere logfiler, hvis supportteamet anmoder herom.
