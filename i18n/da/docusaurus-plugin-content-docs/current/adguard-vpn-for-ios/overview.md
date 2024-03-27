---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til iOS?

Et VPN muliggør at oprette en sikker forbindelse til et andet netværk på internet. Den forbinder en brugers enhed (computer/mobil) til en server og så brugeren kan surfe på nettet vha. en "dæk"-IP-adresse. Er VPN-serveren placeret i et andet land, vil det se ud som om, at internetforbindelsen er etableret fra dette land. For yderligere detaljer, tjek [vores artikel om, hvordan et VPN fungerer](/general/how-vpn-works).

AdGuard VPN har flere funktioner:

- skjuler den reelle færden og hjælper med at forblive anonym
- skifter IP-adresse for at beskytte data mod at blive sporet
- krypterer trafikken, hvilket gør indholdet utilgængeligt for svindlere
- muliggør at opsætte, hvor VPN skal, og ikke skal, bruges (undtagelsesfunktion)

Den næste fordel ved AdGuard VPN til iOS er vores egen VPN-protokol. Den er ekstremt svært at opdage sammenlignet med andre VPN-protokoller, og den er stabil selv med en dårlig internetforbindelse. [Læs mere om AdGuard VPN-protokollen](/general/adguard-vpn-protocol).

## Sådan anvendes AdGuard VPN til iOS

For at bruge AdGuard VPN til iOS, log forst ind på [AdGuard-kontoen](https://my.adguard.com/). Der kan logges ind direkte med AdGuard-kontooplysningerne eller via Google, Apple-ID eller Facebook (forudsat, at AdGuard-kontoen er registreret med den samme e-mailadresse).

Har man endnu ikke en AdGuard-konto, vil man først skulle oprette én.

Det er ret nemt at bruge AdGuard VPN. På hovedskærmen findes knappen *Tilslut/Afbryd* samt listen over tilgængelige servere (betegnet *lokationer*). Hver server har sin egen lokation (bestemt land og by) og ping-indikator.

Ping angiver serverens responstid i millisekunder. Dette indikerer, hvor hurtig VPN-forbindelsen vil være, når der oprettes forbindelse til denne lokation. Valg af serveren med et ping på 22 ms betyder, at en datapakke sendt til denne server returneres (modtages igen) efter 22 ms.

I AdGuard VPN kan der vælges mellem flere end 50 lokationer i snesevis af lande.

![Hovedskærm og placeringer *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Undtagelser

Fanen Undtagelser kan findes ved at trykke på 2. ikon på den nederste bjælke. Dér findes to undtagelseslister for hhv. *Generel* og *Selektiv* tilstand.

I tilstanden *Generel* fungerer VPN for alle websteder bortset fra de undtagne. Omvendt fungerer VPN i tilstanden *Selektiv* kun for websteder fra listen.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Angiv dem manuelt i appen
- Tilføj dem direkte fra webbrowseren ved at dele de ønskede sider med AdGuard VPN

![Undtagelser *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/eksport af undtagelseslister

En anden nyttig funktion er import/eksport af undtagelseslister. På denne måde kan der deles undtagelseslister fra og til andre enheder.

Dette kan gøres i fire trin:

1. Åbn AdGuard VPN på den enhed, fra hvilken en undtagelsesliste skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `exclusions.zip`-arkiv vil blive downloadet.

2. Arkivet indeholder to `.txt`-filer, én for hver af listerne Generel og Selektiv. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.

3. Ved overførsel mellem forskellige enheder, husk at sende `.zip`-filen til enheden for import. Importeres f.eks. undtagelseslister fra en iOS-enhed til en Mac, sørg da for først at sende `.zip`-filen til Mac'en.

4. Åbn AdGuard VPN på enheden, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet.

**I AdGuard VPN til iOS kan eksport- og importfunktionerne tilgås ved at trykke på ikonet med tre prikker øverste til højre på Undtagelser-skærmen**.

![Undtagelseslisteimport/-eksport *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Generelt-indstillinger

Sådan åbnes Generelt-indstillinger:

1. Tryk på knappen Indstillinger (⚙) nederste til højre på appens hovedskærm.
2. Tryk på *Generelt*.

Her kan AdGuard VPN til iOS opsættes efter behov vha. forskellige indstillinger: *DNS-server*, *Tema*, *Avanceret*, *Indsend tekniske data og interaktionsdata* og *Kill Switch*.

![Generelt-indstillinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS-server

AdGuard VPN til iOS tilbyder et bredt udvalg af DNS-servere, hver med særlige kvaliteter. F.eks. fjerner AdGuard DNS annoncer og beskytter enheden mod sporing, mens AdGuard DNS Family Protection kombinerer funktionerne i AdGuard DNS med SafeSearch og blokering af voksenindhold. DNS-servere fra forskellige DNS-udbydere kan også være hurtigere eller langsommere afhængigt af placering, internetudbyder og andre faktorer. Vælg dén, med den mest passende funktionalitet. Man kan [få mere at vide om DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) og dets egenskaber.

![DNS-servere skærm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

App-temaet kan indstilles til System, Mørkt eller Lyst (tilgængelig fra iOS 13).

### Avancerede indstillinger

Under *Avancerede* indstillinger findes 4 afsnit — *Driftstilstand*, *Logningsniveau*, *Eksport af logfiler og systeminfo* og *Diagnostisk info*.

#### Driftstilstand

AdGuard VPN til iOS kan fungere i to tilstande: **VPN** og **Integreret**.

I tilstanden *VPN* anvendes [AdGuard VPN-protokollen](/general/adguard-vpn-protocol), der giver den bedste kombination af hastighed og sikkerhed. I denne tilstand fungerer AdGuard VPN ikke med [AdGuard Ad Blocker til iOS](https://adguard.com/adguard-ios/overview.html).

I tilstanden **Integreret** vil AdGuard VPN kunne fungere samtidigt med AdGuard Ad Blocker til iOS ved brug af IPSec-protokollen. Denne protokol er også sikker, dog lidt langsommere og lettere at detektere. Yderligere handlinger kræves ikke for at opsætte integrationen: Installér blot begge apps og skift til denne tilstand.

:::note

I tilstanden **Integreret** er funktionen Undtagelser samt valg af DNS-server utilgængelige.

:::

#### Logningsniveau

Denne indstilling bruges primært til fejlsøgning og fejlfindingsformål. Logningsniveauerne Udvidet og Ekstrem registrerer mere detaljerede oplysninger, som kan hjælpe med at identificere og rette forskellige problemer eller fejl.

:::caution

**Det anbefales ikke at aktivere logningsniveauerne Udvidet eller Ekstrem, medmindre vores supportteam anmoder herom**.

:::

#### Export logs and system info

Denne mulighed kan bruges til at indsende app-logfiler og systeminfo til vores support mv.

#### Diagnostic data

Denne mulighed tillader eksport af teknisk information, der kan være nyttig ifm. problemløsning, og som nogle gange udbedes af vores support og udviklere.

### Send technical and interaction data

Ved at slå denne mulighed til hjælper du os med bedre at forstå, hvordan brugere interagerer med appen. Vi bruger disse oplysninger til at forbedre brugeroplevelsen.

### Kill Switch

Hvis VPN-forbindelse af en eller anden grund pludselig falder ud, vil *Kill Switch* automatisk afbryde internetforbindelsen, hvilket sikrer, at data ikke lækkes, og brugeridentiteten forbliver skjult.

## Hurtige handlinger

Hurtige handlinger er den bekvemme måde at udføre nyttige eller app-specifikke handlinger på fra startskærmen uden at åbne en app.

Tilgå menuen hurtige handlinger ved at trykke og holde på AdGuard VPN app-ikonet og dernæst løfte fingeren. I den åbnede menu vises AdGuard VPN's hurtige handlinger: *Tilslut* (*Afbryd*) og *Vælg lokation*. Alle standardhandlinger kan også tilgås, såsom at fjerne appen, eller flytte eller dele app-ikonet.

![Hurtige handlinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

Skærmen Support (*Indstillinger* → *Support*) har en række nyttige funktioner: *FAQ*, *Anmeld en fejl*, *Anmod om en funktion* og *Bedøm appen*. Sidstnævnte muliggør at bedømme AdGuard VPN til iOS i App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Abonnementsskærm

Anvendes den gratis version af AdGuard VPN, vil der være endnu en fane med et pilikon på den nederste fanebjælke. Dette afsnit beskriver kort de vigtigste fordele ved den betalte version af appen. Der kan vælges årligt eller månedligt abonnement.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
