---
title: Sådan fungerer VPN
sidebar_position: 1
---

For at forstå, hvordan AdGuard VPN fungerer, bør man først forstå de generelle principper for VPN-tjenesten.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube-videoafspiller" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN-funktioner

Et VPN er et virtuelt privat netværk, hvormed den reelle placering skjules og brugerdata beskyttes på nettet. Et VPN forbinder en computer eller mobilenhed til en VPN-server og bruger IP-adressen på denne server til at få en ekstern iagttager til at tro, at man er et andet sted. Dette muliggør sikker adgang til forskellige internetressourcer samt beskyttelse af personlige data.

På denne vis udfører et VPN to vigtige funktioner:

1. **Opretholdelse af anonymitet**

    På en internetforbindelse efterlader brugeren et digitale fodaftryk, der derefter kan analyseres og bruges af tredjeparter. F.eks. kan en onlinebutik gemme den besøgendes søgehistorik og derefter tilbyde deres produkter baseret herpå via målrettet annoncering. Ligeledes kan efterretningstjenester, som har udledt brugerens placering via enhedens IP-adresse og samt fastslået den reelle identitet, i hemmelighed overvåge brugerens aktivitet på nettet. Derudover kan webbrowsere og internetudbydere bruge browserhistorikken til egne formål, samt sælge den til annoncører og videregive den til offentlige myndigheder. VPN muliggør at skjule de reelle IP-adresse og erstatte den med IP-adressen på den VPN-server, man er forbundet til. På denne måde vil man kunne bevare sin fortrolighed og anonymt søge efter information på nettet.

1. **Databeskyttelse**

    Oprettes forbindelse til et upålideligt eller offentligt netværk, kan dataene på enheden blive sårbare over for cyberkriminelle. Bankkortoplysninger, brugernavne og adgangskoder, pasdata — alle disse data kan opsnappes af onlinesvindlere. VPN-tunnelen krypterer informationen, der sendes og modtages fra nettet, så den er ubrugelig i de forkerte hænder.

## VPN-struktur

Når der oprettes forbindelse til et netværk, tildeles en computer eller mobilenhed et unikt ID-nummer eller IP-adresse. Det består normalt af tal fra 0 til 255, adskilt af prikker eller koloner. Vha. denne sekvens kan enhedens geografiske placering bestemmes. IP-adressen tildeles normalt af internetudbyderen og vil være synlig hele vejen til den ønskede ressource. Webserveren på det besøgte websted kan derfor registrere både IP-adressen, og hvad der er anmodet om. Denne post kan så primært bruges til dataindsamling og trafikanalyse.

Et VPN opretter en krypteret tunnel mellem brugerens enhed og en VPN-server. Dataene passerer igennem denne tunnel, krypteres og kommer derefter ud på det åbne internet i en sikker form. Webserveren registrerer IP-adressen på tunnelens endepunkt, altså VPN-serveren, og ikke enhedens reelle IP-adresse. Efter forespørgslens passage igennem VPN-tunnelen, vil det besøgte websted derfor betragte geolokationen af den valgte VPN-server som den reelle placering. De krypterede data vil derfor heller ikke falde i hænderne på annoncører, hackere og sikkerhedstjenester.

![VPN-struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN-protokoltyper

VPN-sikkerhedsprotokoller er værktøjer, som krypterer data i en VPN-tunnel og muliggør at bevare brugerfortroligheden på det åbne internet. Pt. bruger langt de fleste moderne VPN-tjenester en af flg. tre VPN-protokoller:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). En af dens vigtigste fordele er, at den er tilgængelig på de fleste enheder og operativsystemer samt har et højt sikkerhedsniveau. Brugen af dobbelt [indkapsling](https://en.wikipedia.org/wiki/Encapsulation_(networking)) i denne protokol kan dog resultere i en lavere forbindelseshastighed.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Denne moderne protokol er open-source, så tredjepartsproducenter kan forbedre og opdatere teknologien.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Dens vigtigste fordele er brugervenlighed, høj effektivitet og lav sårbarhed over for angreb.

Ud over disse VPN-protokoller findes der andre (f.eks. TLS, SSTP, IKEv2), men de er upopulære eller lever ikke op til moderne datakrypteringsstandarder.

AdGuard VPN har også sin egen [*protokol*](/general/adguard-vpn-protocol). En af dens fordele er, at trafikken transmitteret vha. AdGuard VPN-protokollen er svær at skelne fra almindelig trafik. VPN-tunnelen ligner normal HTTPS-trafik, så det er ekstremt svært at opdage og blokere den. Derudover er den baseret på mekanismerne i den moderne HTTP/2-protokol, hvilket sikrer høj forbindelseshastighed.

## VPN-ulemper

Trods af de åbenlyse fordele er VPN ikke perfekt, men har visse ulemper:

### Lavere hastighed

Da trafikken ikke går direkte til en webserver, men først passerer igennem VPN-serveren, reduceres hastigheden på VPN-forbindelsen. Andre faktorer påvirker også hastigheden ved VPN-brug: VPN-serverens belastning, båndbredde, VPN-protokollens kompatibilitet med brugerens operativsystem. Alle disse faktorer, såvel som selve netværkets hastighed, kan påvirke brugeroplevelsen af en VPN-forbindelse.

### Adgangsblokering

Nogle onlinetjenester gør en stor indsats for at detektere og blokere VPN-trafik og -brugere. Det er dog ikke mange VPN, som kan maskere sig selv på en sådan måde, at de kun ses som almindelig trafik. Derfor ender mange forsøg på at nå et bestemt websted via en VPN-forbindelse i ingenting.

### VPN-forbindelsesudfald

Et svagt signal, netværksoverbelastning, VPN-inkompatibilitet med en firewall, antivirus og andre programmer, en forældet VPN-protokol — alt dette kan forårsage en pludselig fejl i VPN-forbindelsen, især hos upålidelige VPN-udbydere.

## AdGuard VPN

Vores VPN-tjeneste har flere vigtige [fordele](/general/why-adguard-vpn):

- [*Proprietær VPN-protokol*](/general/adguard-vpn-protocol), der fungerer stabilt selv over en langsom internetforbindelse og camouflerer sig som normal trafik, hvilket gør den sværere at spore og blokere

- [*Nul-logningspolitik*](https://adguard-vpn.com/privacy.html), hvilket betyder, at AdGuard VPN hverken indsamler brugernes personlige data eller overfører dem til tredjeparter

- *Flere end 50 VPN-servere i snesevis af lande*

- *Brugervenlighed og omfattende tilpasningsmuligheder*

Pt. er AdGuard VPN tilgængelig som:

- [Webbrowserudvidelse](/adguard-vpn-browser-extension/overview) til Chrome, Firefox, Edge og Opera

- Mobil-app til [Android](/adguard-vpn-for-android/overview) og [iOS](/adguard-vpn-for-ios/overview)

- Computer-app til [Windows](/adguard-vpn-for-windows/overview) og [Mac](/adguard-vpn-for-mac/overview)

[Læs mere om AdGuard VPN-funktioner](https://adguard-vpn.com/welcome.html)
