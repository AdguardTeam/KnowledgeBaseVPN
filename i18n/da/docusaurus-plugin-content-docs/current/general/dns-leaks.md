---
title: 'Hvad er DNS-lækage'
sidebar_position: 9
---

Efter installation af et VPN, bør det sikres, at der ikke vil være nogen lækager, som kan føre til afanonymisering. AdGuard VPN beskytter pålideligt trafikken og dataene mod nysgerrige øjne. I nogle tilfælde kan der måske opstå mistanke om mulige DNS-lækager i vores VPN-tjeneste. Vi vil forklare, hvordan disse bekymringer opstår, og hvorfor de er ubegrundede.

## Hvad er DNS-lækage?

Når der bruges VPN, kan en forbindelse til en DNS-server bevæge uden for den krypterede VPN-tunnel, og trafikken kan blive synlig for internetudbyderen.

Med andre ord, hver gang et websted tilgås, sender browseren en forespørgsel til internetudbyderens DNS-server og modtager derefter IP-adressen på dette websted. Internetudbyderen ser dermed al online-aktivitet og kan spore brugeren.

## Sådan opdages DNS-lækager

Der er alle mulige former for anonymitetstjektjenester til detektering af DNS-lækager, såsom `whoer.net`. Det bør forstås, at disse websteder i sig selv ikke er perfekte, og deres algoritmer er ikke klare, i modsætning til deres intentioner om at skræmme brugere med imaginære lækager for potentielt at sælge kunne ydelser.

Visse websteder med sikkerhedsskanning anser sammenfaldet af brugerens IP-adresse og DNS-serverens IP-adresse for at være et "godt" resultat, hvilket indikerer fravær af lækager. Reelt kan et sådant match indikere brugen af et VPN. Når VPN er deaktiveret, og forespørgsler sendes til internetudbyderens DNS-server, har brugeren og DNS-serveren ikke sammenfaldende IP-adresser.

## Derfor er der ingen DNS-lækager i AdGuard VPN

Aktiverer man AdGuard VPN på enheden og kører et tjek på en af skannerwebstederne, finder det ud af, at DNS-forespørgsler går til [AdGuard DNS](https://adguard-dns.io)-serverne. Dette kan dog ikke betragtes som en lækage.

Brug af en ikke-filtrerende AdGuard DNS-server er opsat som standard i AdGuard VPN. Dette sikrer, at forespørgsler ikke går til internetudbyders DNS-servere, hvilket betyder, at fortrolighed og anonymitet bevares online.

Derudover er AdGuard DNS en meget populær DNS-tjeneste, med flere end 50 millioner brugere. Hvad betyder så det? Forestiller man sig flg. situation: Den vanlige VPN-tjeneste bruger en DNS-server placeret på samme IP-adresse som VPN-serveren. Antallet af brugere overstiger næppe 1.000.

I tilfælde af AdGuard DNS "smelter" man sammen med 50 millioner brugere, så man vil ikke kunne spores af nogen blot ved brug af denne DNS-server.

## Sådan opsættes en tilpasset DNS-server i AdGuard VPN

Der er mange populære offentlige DNS-servere fra [velkendte DNS-udbydere](https://adguard-dns.io/kb/general/dns-providers). Nogle heraf kan kun udføre deres direkte opgaver – at levere IP-adresserne på de forespurgte domæner – mens nogle kan gøre mere.

F.eks. fjerner AdGuard DNS annoncer og beskytter enheden mod sporing, mens AdGuard DNS Family Protection kombinerer funktionerne i AdGuard DNS med SafeSearch og Forældrekontrol.

En hvilken som helst DNS-server kan vælges og opsættes i AdGuard VPN:

- i AdGuard VPN til Windows: *Indstillinger* → *App-indstillinger* → *DNS-servere*
- i AdGuard VPN til Mac: *Indstillinger* → *App-indstillinger* → *DNS-servere*
- i AdGuard VPN til Android: *Indstillinger* (tandhjulsikon) → *App-indstillinger* → *DNS-server*
- i AdGuard VPN til iOS: *Indstillinger* (tandhjulsikon) → *App-indstillinger* → *DNS-server*
- i AdGuard VPN Browser Extension: Hamburgermenuikon → *Indstillinger* → *DNS-server*
