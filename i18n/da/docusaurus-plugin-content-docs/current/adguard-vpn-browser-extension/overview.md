---
title: Funktionsoversigt
sidebar_position: 1
---

AdGuard VPN Browser Extension er tilgængelig til Chrome, Firefox, Opera og Edge. Brugergrænsefladen og funktionaliteten adskiller sig ikke mellem browsere, så oversigten nedenfor gælder for AdGuard VPN-udvidelser til alle browsere.

:::note

AdGuard VPN Browser Extension kan kun bruges, når man er logget ind. Log ind med AdGuard-kontoen eller via Google, Facebook eller Apple. I sidstnævnte tilfælde skal man sikre sig, at kontoen er tilknyttet den samme e-mailadresse som AdGuard-kontoen. Har man et [AdGuard VPN-abonnement](/general/subscription), aktiveres det automatisk i AdGuard VPN-browserudvidelsen. Har endnu ingen AdGuard-konto? [Opret en hér](https://auth.adguard.com/registration.html).

:::

Sådan håndteres AdGuard VPN Browser Extension:

- Klik enten på dets ikon på browserens panel, klik på hamburgermenuikonet og vælg *Indstillinger*,
- Eller gå til siden *Håndtere udvidelser* i browseren, klik på *Detaljer* under *AdGuard VPN* og håndtér dens indstillinger derfra.

Når man er færdig, vil man se flere faner til venstre:

## Indstillinger

Et par vigtige indstillinger er samlet under denne fane. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension's theme, and allow AdGuard to gather anonymous crash reports and technical data.

### Valg af DNS-server

Som standard er [systemets DNS-server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) fra internetudbyderen valgt, men den kan muligvis kompromittere fortroligheden. Med AdGuard VPN Browser-udvidelse kan en DNS-server vælges, der giver bedre hastighed og sikkerhed, og endda blokerer annoncer eller potentielt farlige domæner. Korte beskrivelser under DNS-servernavnene hjælper med at finde rundt og træffe en beslutning.

Læs mere om [DNS-servere fra forskellige udbydere](https://adguard-dns.io/kb/general/dns-providers/).

## Undtagelser

Den næste fane indeholder en af hovedfunktionerne i AdGuard VPN – to tilstande med separate undtagelseslister.

I **Generel tilstand** fungerer AdGuard VPN som standard på alle websteder, undtagen på de websteder, som er føjet til undtagelseslisten. I **Selektiv tilstand**, omvendt, fungerer AdGuard VPN som standard ingen steder. Alle websteder, hvor den ønskes at fungere, kan føjes til en undtagelsesliste, adskilt fra den, der findes i **Generel tilstand**.

Når et websted føjes til undtagelseslisten, kan man gå ind på webstedet manuelt eller vælge muligheden **Fra listen**. I sidstnævnte tilfælde ses otte kategorier (f.eks *Shopping*, *Beskedtjenester* mv.), der hver foreslår flere populære tjenester. Hver af disse tjenester kan undtages med ét enkelt klik, og denne handling vil føje alle domæner med relevans for den bestemte tjeneste til udtagelser.

### Import og eksport

Ikke alene kan websteder tilføjes og fjernes, undtagelseslister kan også overføres til andre enheder, hvor AdGuard VPN er installeret. Følg nedenstående 4-trins vejledning for at eksportere undtagelseslisten:

1. Åbn den AdGuard VPN Browserudvidelse, fra hvilken undtagelseslisten skal eksporteres. Find den relevante sektion og klik på knappen "Eksportér". Et `exclusions.zip`-arkiv vil blive downloadet.
1. Arkivet indeholder to `.txt`-filer, én for hver af listerne Generel og Selektiv. Føj flere undtagelser til dem, slet de eksisterende, omdøb filer eller lad blot arkivet forblive uændret.
1. Ved overførsel mellem forskellige enheder, send `.zip`-filen til enheden til import.
1. Åbn AdGuard VPN på den pågældende enhed. Find det relevante afsnit, klik på knappen "Importér" og vælg arkivet. Færdig!

## Konto

Den tredje fane i AdGuard VPN Browserudvidelsen er helt minimalistisk og indeholder kun e-mailadressen brugt til indlogning på kontoen samt to knapper, *Håndtering* og *Log ud*. Ved klik på knappen *Håndtering* kommer man til sin personlige AdGuard-konto, hvor alle aktuelle licenser, abonnementer, samt enhederne tilknyttede hertil, kan ses.

## Support

Man kan finde svar på almindelige spørgsmål i FAQ-afsnittet eller give feedback: Anmelde fejl, hvis noget ikke fungerer, som det skal, foreslå tilføjelse af en ny funktion eller debattere AdGuard på en af de mange sociale medieplatforme.

## Om

Fra en anden mindre fane kan man se versionen på udvidelsen, besøge det officielle websted og se EULA samt Fortrolighedspolitik.
