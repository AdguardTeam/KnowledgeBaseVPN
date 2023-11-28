---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til iOS?

Et VPN muliggør at oprette en sikker forbindelse til et andet netværk på internet. Det forbinder en brugers enhed (computer/mobil) til en server og så brugeren kan surfe på nettet vha. en IP-adresse tildelt af denne server. Er VPN-serveren placeret i et andet land, vil det se ud som om, at internetforbindelsen er oprettet fra dette land. [Læs mere om](/general/how-vpn-works), hvordan et VPN fungerer i detaljer.

AdGuard VPN har flere funktioner:

- skjuler den reelle færden og hjælper med at forblive anonym
- skifter IP-adresse for at beskytte data mod at blive sporet
- krypterer trafikken, hvilket gør den utilgængelig for svindlere
- muliggør at opsætte, hvor VPN skal, og ikke skal, bruges (undtagelsesfunktion)

Den næste fordel ved AdGuard VPN til iOS er vores egen VPN-protokol. Den har to hovedfordele: Sammenlignet med andre VPN-protokoller er den ekstremt svært at detektere, og den fungerer stabilt selv med en dårlig internetforbindelse. Mere kan læses om AdGuard VPN-protokollen [i denne artikel](/general/adguard-vpn-protocol).

## Sådan anvendes AdGuard VPN til iOS

For at bruge AdGuard VPN til iOS, log forst ind på [AdGuard-kontoen](https://my.adguard.com/). Der kan logges ind direkte med AdGuard-kontooplysningerne eller via Google, Apple-ID eller Facebook (forudsat, at AdGuard-kontoen er registreret med den samme e-mailadresse).

Har man endnu ikke en AdGuard-konto, vil man først skulle oprette én.

Det er ret nemt at bruge AdGuard VPN. På hovedskærmen findes knappen *Tilslut/Afbryd* samt listen over tilgængelige servere. Servere har her deres egen placering (bestemt land og by) og ping-indikator. Ping-indikatoren viser serverens svartid (i millisekunder). Sendes f.eks. en datapakke til en server med et ping på 22 ms, betyder det, at det tager 11 ms for den at nå denne server og yderligere 11 ms at komme tilbage. Jo lavere ping-tiden er, des hurtigere er forbindelsen. I AdGuard VPN kan der vælges mellem flere end 50 placeringer i snesevis af lande.

![Hovedskærm og placeringer *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Lister over undtagelser

Undtagelsesfunktionen tilgås ved at trykke på den midterste knap nedenfor. Her ses to undtagelseslister for hhv. Generel og Selektiv tilstand. I tilstanden Generel virker VPN på alle websteder, undtagen dem på undtagelseslisten. I tilstanden Selektiv virker VPN omvendt kun på webstederne på undtagelseslisten. Der kan tilføjes domæner (f.eks. `google.com`) eller underdomæner (f.eks. `*.google.com`) på to måder: Angiv dem manuelt i appen eller direkte fra browseren ved at klikke på knappen *Del* og vælge AdGuard VPN på listen, der åbnes nedenfor.

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

I tilstanden **Integreret** vil AdGuard VPN kunne fungere samtidigt med AdGuard Ad Blocker til iOS ved brug af IPSec-protokollen i stedet. Denne protokol er også sikker, men lidt langsommere og lettere at opdage. Der er ikke behov for yderligere handlinger for at opsætte integrationen: Installér blot begge apps og skift til denne tilstand.
> Bemærk, at i tilstanden **Integreret** er funktionerne Undtagelser eller DNS-server utilgængelige.

### DNS-server

Formålet med Domain Name System (DNS) er at oversætte websteders host- eller domænenavne til noget, browsere kan forstå, dvs. IP-adresser. Denne opgave udføres af DNS-servere. AdGuard VPN til iOS tilbyder et bredt udvalg af DNS-servere, hver med særlige kvaliteter. F.eks. fjerner AdGuard DNS annoncer og beskytter enheden mod sporing, mens AdGuard DNS Family Protection kombinerer funktionerne i AdGuard DNS med SafeSearch og blokering af voksenindhold. DNS-servere fra forskellige DNS-udbydere kan også være hurtigere eller langsommere afhængigt af placering, internetudbyder og andre faktorer. Vælg den, med den mest passende funktionalitet. Læs mere om DNS og dets karakteristika [i denne artikel](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![DNS-servere skærm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi auto-beskyttelse

VPN auto-aktiveres, når enheden opretter forbindelse til et Wi-Fi netværk.

### Tema

Der kan vælges systemstandard, mørkt eller lyst tema for appen (tilgængelig i iOS 13 og senere versioner).

### Avancerede indstillinger

I *Avancerede indstillinger* kan findes to afsnit — Logningsniveau og Diagnostisk info. Mht. den første mulighed anbefales det ikke at aktivere logningsniveauet Udvidet, medmindre vores supportteam anmoder herom. Diagnostisk info, lokalt gemt teknisk information om enheden og forbindelser (IP-adresse, ID, ping mv.) kan indsendes til os i tilfælde af tekniske problemer.

## Hurtige handlinger (tilgængelige fra iOS 13)

For at tilgå denne funktion, tryk og hold på app-ikonet og løft dernæst fingeren. Listen over Hurtige handlinger vises: Opret/Afbryd forbindelsen til den aktuelt valgte server, Vælg placering for at vælge en ny serverplacering. Alle standardhandlinger kan selvfølgelig også tilgås, såsom at fjerne appen eller flytte rundt på app-ikonet.

![Hurtige handlinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

Der findes en række hjælpefunktioner i appen (tryk på knappen *Indstillinger* nederst til højre og dernæst *Support*): Her kan man se FAQ-afsnittet ses, anmelde fejl, give feedback, debattere evt. problemer og forslag på sociale netværk eller GitHub, bedømme AdGuard VPN til iOS i App Store samt eksporter logfiler.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Anvendes den gratis version af AdGuard VPN, vil der være den fjerde fane med et pilikon på den nederste fanebjælke. I dette afsnit findes en kort information om de vigtigste fordele i den betalte app-version samt mulighed for at købe et abonnement.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
