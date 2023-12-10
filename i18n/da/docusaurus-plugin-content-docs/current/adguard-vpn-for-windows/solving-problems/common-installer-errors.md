---
title: Almindelige installer-fejl
sidebar_position: 2
---

This article outlines some of the most common errors you may encounter while installing AdGuard VPN for Windows and possible ways to resolve them.

### Fejl 5: Adgang nægtet {#error-5}

This error message appears if required permissions are not granted. Der kan være flere årsager til, at AdGuard VPN-installeren ikke har de nødvendige tilladelser krævet for at afslutte installationsprocessen korrekt. Flg. trin kan prøves:

- Deaktivér midlertidigt antivirusprogrammet. Some of them may interfere with the installation, depending on the restrictiveness of their settings.

- Vælg en anden installationsmappe. Det er muligt, at den aktuelle installationsmappe har adgangsbegrænsninger. Sørg også for ikke at vælge et eksternt/virtuelt drev mv.

- Genstart computeren. Nogle gange er tilladelsesproblemer midlertidige og kan løses ved at genstarte PC'en.

### Fejl 112: Disk er fuld, Fejl 1632: Midlertidig mappe fuld eller utilgængelig {#error-112}

Disse er to forskellige fejl med meget ens løsninger. Som deres beskrivelser indikerer, havde AdGuard VPN-installeren ikke nok diskplads til at fuldføre installationen. Flere ting kan forsøges for at løse problemet:

- Afinstallér nogle programmer, eller slet unødvendige filer fra drevet, hvor AdGuard VPN forsøges installeret.

- Download, installér og kør [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), et gratis værktøj fra Malwarebytes. Det renser systemet for blandt andet alle mulige "filefterladenskaber", som måtte restere efter ufuldstændige programafinstallationer mv. Det kan assistere med rense og frigøre diskplads.

- Genstart computeren. Af og til kan midlertidige filer optage en anseelig mængde diskplads, og genstart af PC'en er den mest pålidelige måde at slippe af med dem på.

### Fejl 1601: Windows-installationsprogram utilgængeligt {#error-1601}

Denne kan betragtes som en særligt undertype af Fejl 1603. De mulige løsninger er ens:

- Start og genregistrér Microsoft Installer-tjenesten. Dette kræver lidt arbejde.

    1. Klik på *Win + R* og skriv **services.msc**.
    1. På listen, find og dobbeltklik på *Windows Installer*.
    1. Klik på knappen *Start* under *Tjenestestatus* og dernæst på *OK*. Er tjenestestatussen **kører**, klik da først på *Stop* og dernæst på *Start*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Genstart PC'en og start installationen forfra. Nogle gange er dette nok til at løse problemet.

### Fejl 1602: Afbrudt af bruger {#error-1602}

Denne fejlkode indikerer, at installationsprocessener på en eller anden måde er blevet afbrudt manuelt. Hvad der kan gøres, er:

- Undlad at lukke installationsvinduet. Det lukker automatisk, når installationen er færdig.

- Vises et dialogvindue under installationen, så tryk på "Ja" for at tildele installationsprogrammet de nødvendige tilladelser. Klikkes på "Nej", afbrydes installationen.

- Undlad at starte andre processer, mens installationsprocessen kører.

### Fejl 1603: Fatal fejl under installationen {#error-1603}

This error sounds more worrying than it actually is. Reelt er der tale om en ret generisk fejl med mange forskellige årsager, hvoraf nogle nemt kan rettes. Prøv flg. løsninger:

- Tryk på *Win*-tasten, søg efter *Kommandoprompt* og kør den. Indtast `sfc /scannow` på kommandolinjen og tryk på *Retur*.

- Vælg en anden installationsmappe. Det er muligt, at den aktuelle installationsmappe har adgangsbegrænsninger. Sørg også for ikke at vælge et eksternt/virtuelt drev mv.

- Afinstallér AdGuard VPN via vores særlige [afinstallationsværktøj](/adguard-vpn-for-windows/installation#advanced) og start derefter installationen forfra.

- Start og genregistrér Microsoft Installer-tjenesten. Dette kræver lidt arbejde.

    1. Press *Win + R* and enter **services.msc**.
    1. På listen, find og dobbeltklik på *Windows Installer*.
    1. Klik på knappen *Start* under *Tjenestestatus* og dernæst på *OK*. Er tjenestestatussen **kører**, klik da først på *Stop* og dernæst på *Start*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Få tildelt fulde tilladelser på installationsdrevet. Det er muligt, at fejl 1603 opstår, fordi ikke alle tilladelser til filplaceringen er tildelt. Den er heller ikke så nem som nogle af de øvrige løsninger:

    1. Åbn *File Explorer*, højreklik på drevet med installationsplaceringen, og vælg *Egenskaber*.
    1. Gå til fanen *Sikkerhed* og klik på *Redigér*.
    1. Klik på *SYSTEM* og sørg for, at feltet *Tillad* er markeret for alle punkter i *Tilladelser for SYSTEM* (hvis muligt). Udfør samme tjek for *Administratorer*.
    1. Klik på *OK* for at gå tilbage til dialogen *Egenskaber*. Klik derefter på *Avanceret*.
    1. Klik på *Skift tilladelser*.
    1. Dobbeltklik fra fanen *Tilladelser* på *Administratorer*.
    1. Vælg *Denne mappe, undermapper og filer* for feltet *Gælder for* og markér alle de tilgængelige *Basistilladelser*. Tryk dernæst på *OK*.
    1. Udfør samme handling, som ovenfor (fra punkt 7), for *SYSTEM*.
    1. Klik på *OK* hele vejen ud. Prøv at installere AdGuard VPN igen.

### Fejl 1618: En anden installation er allerede i gang {#error-1618}

This error appears when trying to run multiple instances of the AdGuard VPN installer simultaneously. Gør dette, hvis denne fejl ses:

- Genstart PC'en og start installationen forfra. Når computeren genstartes, stopper alle igangværende processer, inkl. alle forekomster af installationsprogrammet.

- Don't click multiple times on the installer, even if it doesn't start right away. Af og til tage det nogle sekunder, før installationsprogrammet vises.

### Fejl 1638: En anden version af dette produkt er allerede installeret {#error-1638}

AdGuard VPN er sandsynligvis allerede blevet installeret tidligere.

- Tjek, om AdGuard VPN allerede er installeret på computeren. You can do that by pressing the *Win* key and start typing *adguard vpn*.

- Der findes måske nogle efterladenskaber fra en tidligere AdGuard VPN-installation. Afinstallér AdGuard VPN via vores særlige [afinstallationsværktøj](/adguard-vpn-for-windows/installation#advanced) og start derefter installationen forfra.

### Andre fejl {#other}

Opleves en fejl, der ikke er angivet ovenfor, er det muligt, at vi selv kan løse den. At kunne gøre dette, kræver dog logfiler fra brugeren. Udfør derfor flg. trin:

- Find og arkivér **AdGuard VPN-installationslogfilerne**, som beskrevet i [denne artikel](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk the **Event Viewer** logs. [Denne artikel](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) forklarer, hvordan dette gøres.

E-mail alle disse filer fra de to tidligere trin — inkl. en problembeskrivelse i beskedfeltet — til **support@adguard.com**. Vores supportteam vil svare hurtigst muligt.
