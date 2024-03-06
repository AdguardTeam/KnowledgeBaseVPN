---
title: Funktionsoversigt
sidebar_position: 1
---

AdGuard VPN til Mac er en computer VPN-tjeneste. AdGuard VPN er fuldt ud kompatibel med AdGuard Ad Blocker, de kan bruges sammen og vil fungere problemfrit. Her er de funktioner, den har at tilbyde.

Bemærk, at **AdGuard VPN til Mac ikke kan bruges, medmindre man er logget ind på en AdGuard-konto**. Man kan enten logge ind med AdGuard-kontoen eller med en ekstern konto via Apple, Google eller Facebook. Sørg for, at den eksterne konto er tilknyttet den samme e-mailadresse som AdGuard-kontoen. Er der et passende abonnement i AdGuard-kontoen, aktiveres det automatisk i computer-appen. Har stadig ingen AdGuard-konto? [Opret en hér](https://auth.adguard.com/registration.html).

:::note Kompatibilitet

AdGuard VPN til Mac understøttes pt. på macOS-versioner startende med macOS Catalina (10.15).

:::

## Startskærm

![Startskærm](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

Den første fane er skærmen *Start*. Her vises den aktuelle status for AdGuard VPN, den valgte lokation (hvis aktiveret) og dens ping. Ping er en VPN-servers svartid. Jo lavere et tal er, des hurtigere en forbindelse. Er VPN deaktiveret, vises nederst den seneste lokation, der har været oprettet forbindelse til.

De hurtigste lokationer med de laveste ping vises i øverste til højre på skærmen. Der er også en opdateringsknap, man kan klikke på, hvis nogen lokationer er offline. Nedenfor kan ses den fulde liste over placeringer. Søgefeltet gør det nemt at finde den ønskede lokation.

:::note

Gratis-brugere kan kun oprette forbindelse til bestemte placeringer, mens andre er blokeret. Desuden er der en månedlig trafikkvote på 3 GB i den gratis version.

:::

## Undtagelser

![Undtagelser](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN har flere funktioner, som gør den unik, og én af dem er afgjort *Undtagelser*. Som standard vil AdGuard VPN køre på alle websteder og i alle apps, undtagen dem på undtagelseslisten. Man kan dog skifte til den anden tilstand, så AdGuard kun VPN kører på websteder og i apps på undtagelseslisten.

![Skærmen Undtagelser](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Man kan ikke blot føje websteder til Undtagelser, men også vælge blandt listerne over populære tjenester. Listerne er opdelt i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Enhver af disse tjenester kan føjes til Undtagelser med ét enkelt klik! Det er især praktisk, hvis tilstanden Selektiv anvendes.

Undtagelser-listen kan nemt opsættes. Har man tilføjet et domæne og nogle af dets underdomæner, grupperes disse under roddomænet. Ved tilføjelse af et roddomæne (`eksempel.com`), tilføjes også dets maske (`*.eksempel.com`).

Har man tilføjet en tjeneste, ændret eller fjernet noget og nu ønsker at gendanne de oprindelige indstillinger, trykkes blot på *Nulstil til standard* ved siden af domænet — denne handling gendanner evt. manglende domæner og markere alle afkrydsningsfelter.

Endvidere kan færdiglavede undtagelseslister overføres til andre enheder, hvor AdGuard VPN er installeret. Følg nedenstående 4-trins vejledning for at eksportere undtagelser:

1. Åbn AdGuard VPN på den enhed, fra hvilken undtagelseslisten skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `exclusions.zip`-arkiv vil blive downloadet.
2. Arkivet indeholder to `.txt`-filer, én for hver af listerne Generel og Selektiv. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.
3. Ved overførsel mellem forskellige enheder, så husk at sende `.zip`-filen til enheden til import. Importeres f.eks. undtagelseslister fra Mac til iPhone, sørg da for først at sende `.zip`-filen til mobilen.
4. Åbn AdGuard VPN på/i enheden/browseren, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet. Færdig!

:::note

Arkivfiler fra andre enheder kan på samme vis importeres i AdGuard VPN til Mac.

:::

## Statistik

![Statistikskærm](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

Skærmen Statistik giver detaljerede oplysninger om trafikforbrug pr. lokation og app, hyppigste brugte lokationer og apps. Se data for dagen, måneden eller al den tid, AdGuard VPN til Mac har været i brug.

Og vigtigst, alle data gemmes lokalt på enheden, så ingen andre har adgang til dem. Statistikfunktionen er tilgængelig for brugere med et AdGuard VPN-abonnement.

## Support

![Supportskærm](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

Den tredje fane er skærmen *Support*. Find svar på alle spørgsmål i [FAQ'en](https://adguard-vpn.com/welcome.html#faq) eller i [Vidensbase](/)- afsnittene, anmeld en fejl, hvis der stødes på én eller [debattér AdGuard på en af platformene](https://adguard.com/discuss.html). Man er ligeledes meget velkommen til at [give feedback om vores produkt](https://surveys.adguard.com/vpn_mac/form.html), hvilket vi ville sætte pris på.

## Indstillinger

![Indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Til sidst er der fanen Indstillinger. I afsnittet *Om program* kan man se det aktuelle AdGuard VPN-versionsnummer, tjekke for opdateringer, besøge vores officielle websted og gøre sig bekendt med AdGuards EULA (Slutbrugerlicensaftale) samt Fortrolighedspolitik. I afsnittet *Om licens* kan man opgraderes fra gratis til ubegrænset, håndtere abonnement eller logge ud. Og vigtigst af alt, herfra kan *Generelle indstillinger* tilgås.

### App-indstillinger

![App-indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

De første fire basisfunktioner gør applikationen mere bekvem og brugervenlig, dvs. *Kill Switch*, *Auto-opdatering*, *Start AdGuard VPN ved login*og *Auto-tilslut ved app-start*. Derudover kan der vælges mellem lyse, mørke og systemtemaer – sidstnævnte matcher temaet på Mac'en.

Man kan også tillade AdGuard VPN at indsamle og indsende anonymiserede nedbrudsrapporter, tekniske data samt interaktionsdata for at hjælpe os med at forbedre appen. Sidst, men ikke mindst, kan man eksportere logfiler fra Mac'en. Dette kan være nyttigt, hvis disse ønskes vedhæftet en besked til supporten.

### DNS-servere

![DNS-servere](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Her kan en eller flere DNS-servere opsættes. Dette er nyttigt, hvis uafhængighed af internetudbyderens standard DNS-server er ønsket. Vælg en fra listen over populære DNS-tjenester, eller tilføj en tilpasset server manuelt. Vi anbefaler at tilføje AdGuard DNS, der ikke alene krypterer DNS-trafikken, men også identificerer forespørgsler til ondsindede websteder og omdirigerer dem til et "black hole".

### Avancerede indstillinger

![Avancerede indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Logningsniveau

Der er kun to logningsniveauer, men brug af det første, standardniveauet, anbefaler kraftigt. Det anden niveau (udvidet logning) bør kun vælges til registrering af unormal programadfærd i samråd med vores tekniske support. Har man aktiveret udvidet logningsniveau, sørg da for at skifte til standardniveauet efter generering af logfiler.

#### Skjul menubjælkeikon

Selvom denne mulighed er findes under *Avancerede indstillinger*, kan den aktiveres uden tøven. Man kan skjule AdGuard VPN-ikonet fra menubjælken, da dette ikke påvirker appens baggrundsdrift.

#### Brug QUIC

QUIC-kommunikationsprotokollen er den seneste, avancerede version af HTTP. Skift kontakten for at opnå bedre forbindelseskvalitet under mindre end ideelle forhold, f.eks. når man bruger mobildata i metroen eller elevatoren.
