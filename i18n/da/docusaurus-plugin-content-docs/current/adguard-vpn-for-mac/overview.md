---
title: Funktionsoversigt
sidebar_position: 1
---

AdGuard VPN til Mac er en computer VPN-tjeneste. AdGuard VPN er fuldt ud kompatibel med AdGuard Ad Blocker, de kan bruges sammen og vil fungere problemfrit. Her er de funktioner, den har at tilbyde.

Bemærk, at **AdGuard VPN til Mac ikke kan bruges, medmindre man er logget ind på en AdGuard-konto**. Man kan enten logge ind med AdGuard-kontoen eller med en ekstern konto via Apple, Google eller Facebook. Sørg for, at den eksterne konto er tilknyttet den samme e-mailadresse som AdGuard-kontoen. Er der et passende abonnement i AdGuard-kontoen, aktiveres det automatisk i computer-appen. Har stadig ingen AdGuard-konto? [Opret en hér](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN til Mac understøttes pt. på macOS-versioner startende med macOS Catalina (10.15).

:::

## Startskærm

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

Den første fane er skærmen *Start*. Her kan man se AdGuard VPNs aktuelle status, [undtagelsestilstand](#exclusions) og valgte placering (hvis aktiveret) samt dens ping. Ping er en VPN-servers svartid. Consequently, the lower this number, the faster the connection. Hvis VPN er deaktiveret, vises den sidste placering, der har været oprettet forbindelse til, nedenfor. De hurtigste placeringer med de laveste ping vises i øverste til højre på skærmen. Nedenfor kan ses den fulde liste over placeringer. Via søgefunktionen kan den ønskede placering let findes.

:::note

Gratis-brugere kan kun oprette forbindelse til bestemte placeringer, mens andre er blokeret. Desuden er der en månedlig trafikkvote på 3 GB i den gratis version.

:::

## Undtagelser

![Undtagelser](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Skærmen Undtagelser](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Man kan ikke blot føje websteder til Undtagelser, men også vælge blandt listerne over populære tjenester. Listerne er opdelt i otte kategorier: Sociale netværk, Messengers, Video- og musikstreamingtjenester, Spil, Shopping, Søgemaskiner og Arbejdskommunikationsværktøjer. Enhver af disse tjenester kan føjes til Undtagelser med ét enkelt klik! Det er især praktisk, hvis tilstanden Selektiv anvendes.

Undtagelser-listen kan nemt opsættes. Har man tilføjet et domæne og nogle af dets underdomæner, grupperes disse under roddomænet. Ved tilføjelse af et roddomæne (`eksempel.com`), tilføjes også dets maske (`*.eksempel.com`).

Har man tilføjet en tjeneste, ændret eller fjernet noget og nu ønsker at gendanne de oprindelige indstillinger, trykkes blot på *Nulstil til standard* ved siden af domænet — denne handling gendanner evt. manglende domæner og markere alle afkrydsningsfelter.

Endvidere kan færdiglavede undtagelseslister overføres til andre enheder, hvor AdGuard VPN er installeret. Følg nedenstående 4-trins vejledning for at eksportere undtagelser:

1. Åbn AdGuard VPN på den enhed, fra hvilken undtagelseslisten skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `exclusions.zip`-arkiv vil blive downloadet.
2. Arkivet indeholder to `.txt`-filer, én for hver af listerne Generel og Selektiv. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.
3. Ved overførsel mellem forskellige enheder, så husk at sende `.zip`-filen til enheden til import. Importeres f.eks. undtagelseslister fra Mac til iPhone, sørg da for først at sende `.zip`-filen til mobilen.
4. Åbn AdGuard VPN på/i enheden/browseren, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet. Færdig!

:::note Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Support

![Supportskærm](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

Den tredje fane er skærmen *Support*. Find svar på alle spørgsmål i [FAQ'en](https://adguard-vpn.com/welcome.html#faq) eller i [Vidensbase](/)- afsnittene, anmeld en fejl, hvis der stødes på én eller [debattér AdGuard på en af platformene](https://adguard.com/discuss.html). Man er ligeledes meget velkommen til at [give feedback om vores produkt](https://surveys.adguard.com/vpn_mac/form.html), hvilket vi ville sætte pris på.

## Indstillinger

![Indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Til sidst er der fanen Indstillinger. I afsnittet *Om program* kan man se det aktuelle AdGuard VPN-versionsnummer, tjekke for opdateringer, besøge vores officielle websted og gøre sig bekendt med AdGuards EULA (Slutbrugerlicensaftale) samt Fortrolighedspolitik. I afsnittet *Om licens* kan man opgraderes fra gratis til ubegrænset, håndtere abonnement eller logge ud. Og vigtigst af alt, herfra kan *Generelle indstillinger* tilgås.

### App-indstillinger

![App-indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

De første fire basisfunktioner gør applikationen mere bekvem og brugervenlig, dvs. *Kill Switch*, *Auto-opdatering*, *Start AdGuard VPN ved login*og *Auto-tilslut ved app-start*. Derudover kan der vælges mellem lyse, mørke og systemtemaer – sidstnævnte matcher temaet på Mac'en.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Dette kan være nyttigt, hvis disse ønskes vedhæftet en besked til supporten.

### DNS-servere

![DNS-servere](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Her kan tilføjes en tilpasset DNS-server (eller flere) for ikke at være afhængig af den af internetudbyderen leverede standard DNS-server. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious websites and redirects them to a “blackhole”.

### Avancerede indstillinger

![Avancerede indstillinger](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

#### Logningsniveau

Der er kun to logningsniveauer, men brug af det første, standardniveauet, anbefaler kraftigt. Det anden niveau (udvidet logning) bør kun vælges til registrering af unormal programadfærd i samråd med vores tekniske support. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Skjul menubjælkeikon

Selvom denne mulighed er findes under *Avancerede indstillinger*, kan den aktiveres uden tøven. Man kan skjule AdGuard VPN-ikonet fra menubjælken, da dette ikke påvirker appens baggrundsdrift.

#### Anvend QUIC (eksperimentel)

QUIC-kommunikationsprotokollen er den seneste, avancerede version af HTTP. Skift kontakten for at opnå bedre forbindelseskvalitet under mindre end ideelle forhold, f.eks. når man bruger mobildata i metroen eller elevatoren.
