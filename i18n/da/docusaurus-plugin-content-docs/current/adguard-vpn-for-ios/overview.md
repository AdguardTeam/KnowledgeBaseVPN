---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til iOS?

Et VPN muliggør at oprette en sikker forbindelse til et andet netværk på internet. Det forbinder en brugers enhed (computer/mobil) til en server og så brugeren kan surfe på nettet vha. en "dæk"-IP-adresse. Er VPN-serveren placeret i et andet land, vil det se ud, som om internetforbindelsen er etableret fra dette land. [Læs mere om](/general/how-vpn-works), hvordan et VPN fungerer i detaljer.

AdGuard VPN har flere funktioner:

- skjuler den reelle færden og hjælper med at forblive anonym
- skifter IP-adresse for at beskytte data mod at blive sporet
- encrypts your traffic and makes contents inaccessible to scammers
- muliggør at opsætte, hvor VPN skal, og ikke skal, bruges (undtagelsesfunktion)

Den næste fordel ved AdGuard VPN til iOS er vores egen VPN-protokol. Den er ekstremt svært at opdage sammenlignet med andre VPN-protokoller, og den er stabil selv med en dårlig internetforbindelse. Her kan [læses mere](/general/adguard-vpn-protocol) om AdGuard VPN-protokollen.

## Sådan anvendes AdGuard VPN til iOS

For at bruge AdGuard VPN til iOS, log forst ind på [AdGuard-kontoen](https://my.adguard.com/). Der kan logges ind direkte med AdGuard-kontooplysningerne eller via Google, Apple-ID eller Facebook (forudsat, at AdGuard-kontoen er registreret med den samme e-mailadresse).

Har man endnu ikke en AdGuard-konto, vil man først skulle oprette én.

Det er ret nemt at bruge AdGuard VPN. På hovedskærmen findes knappen *Tilslut/Afbryd* samt listen over tilgængelige servere. Servere har her deres egen placering (bestemt land og by) og ping-indikator. The ping shows the server's response time (in milliseconds). At vælge serveren med et ping på 22 ms betyder, at en datapakke sendt til denne server returneres (modtages igen) efter 22 ms. I AdGuard VPN kan der vælges mellem flere end 50 placeringer i snesevis af lande.

![Hovedskærm og placeringer *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Lister over undtagelser

Undtagelser tilgås ved at trykke på den midterste knap nedenfor. Dér findes to undtagelseslister for hhv. Generel og Selektiv tilstand. I Generel tilstand fungerer VPN for alle websteder bortset fra de undtagne. Omvendt fungerer VPN i Selektiv tilstand kun for websteder fra listen. Der kan tilføjes domæner (f.eks. `google.com`) eller underdomæner (f.eks. `*.google.com`) på to måder: Angiv dem manuelt i appen eller direkte fra browseren ved at dele de ønskede sider med AdGuard VPN.

![Undtagelser *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

En anden nyttig funktion er import/eksport af undtagelseslister. Følg de næste fire trin for at gøre dette:

1. Åbn AdGuard VPN på/i den enhed/browser, fra hvilken undtagelseslisten skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `exclusions.zip`-arkiv vil blive downloadet.

2. Arkivet indeholder to `.txt`-filer, én for hver af listerne Generel og Selektiv. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.

3. Ved overførsel mellem forskellige enheder, husk at sende `.zip`-filen til enheden til import. Importeres f.eks. undtagelseslister fra en iOS-enhed til en Mac, sørg da for først at sende `.zip`-filen til Mac'en.

4. Åbn AdGuard VPN på enheden, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet.

![Undtagelseslisteimport/-eksport *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## App-indstillinger

Sådan tilgås App-indstillinger:

1. Tryk på knappen Indstillinger (⚙) nederste til højre på AdGuard VPN-appens hovedskærm
2. Tryk på *App-indstillinger*

Her kan AdGuard VPN til iOS opsættes som ønsket via de forskellige muligheder: Driftstilstand, DNS-server, Wi-Fi autobeskyttelse, Farvetema og Avancerede indstillinger.

![App-indstillinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Driftstilstand

AdGuard VPN til iOS kan fungere i to tilstande: **Generel** og **Integreret**.

I tilstanden **General** anvendes [AdGuard VPN-protokollen](/general/adguard-vpn-protocol), der giver den bedste kombination af hastighed og sikkerhed. I denne tilstand vil AdGuard VPN ikke være i stand til at fungere sammen med [AdGuard Ad Blocker til iOS](https://adguard.com/kb/adguard-for-ios/overview/).

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard Ad Blocker for iOS by using the IPSec protocol instead. Denne protokol er også sikker, men lidt langsommere og lettere at opdage. Der er ikke behov for yderligere handlinger for at opsætte integrationen: Installér blot begge apps og skift til denne tilstand.

:::note

Bemærk, at i tilstanden **Integreret** er funktionen Undtagelser og valg af DNS-server utilgængelige.

:::

### DNS-server

DNS-servere oversætter et domænenavn eller værtsnavn (f.eks. eksempel.com eller www.eksempel.com) til noget, browsere kan forstå, dvs. IP-adresser. AdGuard VPN til iOS tilbyder et bredt udvalg af DNS-servere, hver med særlige kvaliteter. F.eks. fjerner AdGuard DNS annoncer og beskytter enheden mod sporing, mens AdGuard DNS Family Protection kombinerer funktionerne i AdGuard DNS med SafeSearch og blokering af voksenindhold. DNS-servere fra forskellige DNS-udbydere kan også være hurtigere eller langsommere afhængigt af placering, internetudbyder og andre faktorer. Vælg dén, med den mest passende funktionalitet. Man kan [få mere at vide om DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) og dets egenskaber.

![DNS-servere skærm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi auto-beskyttelse

VPN auto-aktiveres, når enheden opretter forbindelse til et Wi-Fi netværk.

### Tema

Der kan vælges systemstandard, mørkt eller lyst tema for appen (tilgængelig fra iOS 13-versionen).

### Avancerede indstillinger

I *Avancerede indstillinger* findes to afsnit — Logningsniveau og Diagnostisk info. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostisk info, lokalt gemt teknisk information om enheden og forbindelser (IP-adresse, ID, ping mv.) kan indsendes til os i tilfælde af tekniske problemer.

## Hurtige handlinger (tilgængelige fra iOS 13)

For at tilgå funktionen, tryk og hold på app-ikonet og løft dernæst fingeren. You'll see quick actions: Connect/Disconnect, Select location, Edit Home Screen, and Remove app.

![Hurtige handlinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

Der findes en række hjælpefunktioner i appen (tryk på knappen *Indstillinger* nederst til højre og dernæst *Support*): Her kan man se FAQ-afsnittet ses, anmelde fejl, give feedback, debattere evt. problemer og forslag på sociale netværk eller GitHub, bedømme AdGuard VPN til iOS i App Store samt eksporter logfiler.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Anvendes den gratis version af AdGuard VPN, vil der være den fjerde fane med et pilikon på den nederste fanebjælke. I dette afsnit findes en kort information om de vigtigste fordele i den betalte app-version samt mulighed for at købe et abonnement.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
