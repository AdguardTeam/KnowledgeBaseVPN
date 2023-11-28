---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til Windows?

Et VPN, akronym for "Virtual Private Network", er en tjeneste, der gør internetforbindelsen sikker og hjælper brugeren med at forblive anonym online. Hvordan fungerer VPN? Internetudbyderen vil kunne se, hvilket websted, en bruger besøger uden brug af et VPN. Internetudbyderen ved, hvem man er, og hvad man leder efter, og kan indsamle og sælge disse data. Derudover kan webstedet, der besøges, også spore brugerens aktivitet. Når en VPN-applikation aktiveres, ruter den trafikken via en krypteret tunnel til en fjern VPN-server, hvilket sikrer fortrolighed: Internetudbyderen ved ikke, hvortil en forespørgsel er sendt, og webstedet ved ikke, hvorfra man kommer.

## Hvad AdGuard VPN til Windows gør

- Beskytter mod aflytning af netværkstrafik (spoofing). AdGuard VPN opretter en krypteret tunnel mellem brugerens enhed og en fjernserver. Al internettrafikken passerer igennem denne tunnel, så data er beskyttet undervejs. Og grundet [AdGuards unikke protokol](/general/adguard-vpn-protocol)er man garanteret en hurtig og sikker forbindelse.

- Maskerer IP-adressen. Den reelle IP-adresse er nøglen til personlige data for cyberkriminelle. Navn, e-mailadresse, telefonnummer, betalingskortoplysninger kan alle falde i hænderne på svindlere, hvis man ikke skjuler sin IP. Med AdGuard VPN rutes al trafik igennem en krypteret tunnel og til en VPN-server, som tidligere nævnt. Udefra ser det derfor ud som om, at enheden har den nævnte VPN-servers IP-adresse.

- Skjuler den reelle placering. Ved at vælge en af AdGuard VPN-serverne bliver man øjeblikkeligt "teleporteret" til dens placering. Hvad giver det dig? Mulighed for eksempelvis hotelbookning til lokale priser eller at undgå geomålrettet annoncering.

AdGuard VPN til Windows har mange fordele, så vi har dedikeret [en separat artikel](/general/why-adguard-vpn) til dem. Her vil vi dog fokusere mere på selve applikationen, og hvorledes den fungerer.

## Komme i gang med at bruge AdGuard VPN til Windows

For at begynde at bruge AdGuard VPN til Windows, download først appen fra [vores websted](https://adguard-vpn.com/welcome.html). Installationen tager et minuts tid. Et dialogvindue vises, hvori mindst ét felt skal markeres, nemlig accept af Vilkår for Brug samt Fortrolighedspolitik. Det er dog valgfrit, hvorvidt AdGuard VPN skal tillades at indsamle anonymiserede data om app-brugen. Til sidst vil programmet anmode om, at der logges ind via enten en [AdGuard-konto](https://auth.adguard.com/login.html) eller sociale netværk (Apple, Google, Facebook). Det er alt, man kan nu begynde at bruge AdGuard VPN til Windows.

## Startskærm

![AdGuard VPN til Windows Startskærm](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Det mest fremtrædende element på **startskærmen** er AdGuard VPN-knappen Tilslut/Afbryd. Over knappen ses den [Tilstand](#exclusions), programmet opererer i, og derunder den server, der pt. er valgt. Til højre på skærmen findes alle tilgængelige placeringer. Den hurtigste serverplacering, dvs. den med laveste ping, vises øverst på listen.

Øverst på skærmen findes et navigationspanel med fire faner: **Hjem**, **Undtagelser**, **Support**, **Indstillinger**.

## Undtagelser

AdGuard VPN til Windows kan operere i to tilstande: **Generel** og **Selektiv**. Hvad betyder det? Skal et program kunne fungere overalt undtagen på visse websteder, aktivér da **Generel tilstand** og angiv de websteder, som skal undtages fra tunnelen. **Selektiv tilstand** virker modsat: Den aktiverer kun AdGuard VPN på websteder angivet på undtagelseslisten. Bemærk, at disse to tilstandes undtagelseslister er uafhængige af hinanden.

![Undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Der kan **manuelt** føjes websteder til undtagelser ved at angive deres domænenavne. Appen giver også mulighed for at vælge populære websteder **fra listen**.

![Tilføj undtagelser](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Tilføj undtagelser fra liste](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Når domæner tilføjes manuelt, bør der tages højde for visse nuancer. Undtager man f.eks. manuelt domænet `google.com`, føjes alle underdomæner herfra `*.google.com` også til undtagelseslisten. Domænenavne med andre topniveaudomæner, såsom `google.es` eller `google.it`, undtages dog ikke. Man kan også føje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke tilføjes listen.

Vi anbefaler at bruge indstillingen **Fra listen**. Websteder grupperes i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Vi har placeret de mest populære tjenester dér, inkl. alle domænenavne og underdomæner relateret til hver platform.

### Import/eksport af undtagelseslister

For at eksportere undtagelseslisten fra AdGuard VPN til Windows til computeren, klik på **Eksportere undtagelser**, vælg mappen, hvor listen skal gemmes, og klik på **Gem**. Et arkiv `exclusions.zip` med to `.txt`-filer gemmes, en for hver af listerne — **Generel** og **Selektiv**. De kan redigeres ved at tilføje nye undtagelser eller slette gamle.

For at overføre undtagelseslisterne til en anden enhed, send `.zip`-filen til den. Åbn AdGuard VPN på enheden, hvor undtagelseslisterne skal importeres, klik på *Undtagelser*, og dernæst *Importere undtagelser*, og vælg den tilsendte zip-fil.

## Indstillinger

![Indstillinger](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

Den fjerde fane programfanebjælke indeholder afsnit til tilpasning af programmet. Lad os se nærmere på to af dem: **App-indstillinger** og **App-undtagelser**.

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

Alle logger opbevares lokalt på enheden, og de kan om nødvendigt indsendes til supportteamet.

##### Brug QUIC

Dette er en eksperimentel funktion, via hvilken AdGuard kan anvende den avancerede QUIC-krypteringsprotokol. Den har mange fordele, men den mest fremtrædende er, at den kan forbedre forbindelseskvaliteten under ikke-ideelle forhold, såsom ved brug af mobilt internet eller offentlige Wi-Fi netværk.

### App-undtagelser

![Tilføjelse af en app til undtagelser](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Ikke alene krypterer AdGuard VPN internetbrowseres trafik, men også trafik fra andre apps installeret på enheden. Ønskes visse apps undtaget fra tunnelen, skal disse placeres på listen **App-undtagelser**.

## Andre faner

### Om

Fanen **Om** indeholder oplysninger om aktuel version af AdGuard VPN til Windows, en opdateringsknap og links til AdGuard VPN-webstedet, EULA og Fortrolighedspolitik.

### Konto

Her findes information om licensstatus, samt et link til den personlige AdGuard-konto, hvorfra aktuelle abonnementer kan håndteres og nye købes.

## Support

Denne fane har til formål at besvare brugernes spørgsmål: Her findes links til FAQ-siden, anmelde fejl eller give feedback og eksportere logfiler, hvis supportteamet anmoder herom.
