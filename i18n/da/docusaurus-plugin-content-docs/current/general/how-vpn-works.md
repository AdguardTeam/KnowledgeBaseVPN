---
title: Sådan fungerer VPN
sidebar_position: 1
---

For at forstå, hvordan AdGuard VPN fungerer, skal man først forstå VPN-tjenestens generelle principper.

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN-funktioner

Et VPN er et virtuelt privat netværk, hvormed den reelle placering skjules og brugerdata beskyttes på nettet. Et VPN forbinder en computer eller mobilenhed til en VPN-server og anvender IP-adressen på denne server til at få en ekstern iagttager til at tro, at man befinder sig et andet sted. Dette muliggør sikker adgang til forskellige internetressourcer samt beskyttelse af personlige data.

På denne måde udfører et VPN to vigtige funktioner:

1. **Opretholdelse af anonymitet**

   På en internetforbindelse efterlader brugeren et digitale fodspor, der så kan analyseres og bruges af tredjeparter. F.eks. kan en onlinebutik gemme den besøgendes søgehistorik og dernæst tilbyde deres produkter baseret herpå via målrettet annoncering. Ligeledes kan efterretningstjenester, som har udledt brugerens placering via enhedens IP-adresse samt fastslået den reelle identitet, hemmeligt overvåge brugerens aktivitet på nettet. Derudover kan webbrowsere og internetudbydere bruge browserhistorikken til egne formål, samt sælge den til annoncører og videregive den til statslige institutioner. VPN muliggør at skjule den reelle IP-adresse og erstatte den med IP-adressen på VPN-serveren, der er etableret forbindelse til. På denne måde vil man kunne bevare sin fortrolighed og anonymt søge efter information på nettet.

2. **Databeskyttelse**

   Oprettes forbindelse til et upålideligt eller offentligt netværk, kan dataene på enheden blive sårbare over for cyberkriminelle. Bankkortoplysninger, brugernavne og adgangskoder, pasdata — alle disse data kan opsnappes af onlinesvindlere. VPN-tunnelen krypterer informationen, der sendes og modtages fra nettet, så den er ubrugelig i de forkerte hænder.

## VPN-struktur

Når der oprettes forbindelse til et netværk, tildeles en computer eller mobilenhed et unikt ID-nr. eller IP-adresse. Det består normalt af tal fra 0 til 255, adskilt af punktummer eller koloner. Via denne sekvens kan enhedens geografiske placering bestemmes. IP-adressen tildeles normalt af internetudbyderen og vil være synlig hele vejen til den ønskede ressource. Webserveren på det besøgte websted kan derfor registrere både IP-adressen, og hvad forespørgslen omhandler. Denne registrering kan så primært bruges til dataindsamling og trafikanalyse.

Et VPN opretter en krypteret tunnel mellem brugerens enhed og en VPN-server. Dataene passerer igennem denne tunnel, krypteres og kommer derefter ud på det åbne internet i en sikker form. En webserver registrerer derfor IP-adressen på tunnelens endepunkt, dvs. VPN-serveren, og dermed ikke enhedens reelle IP-adresse. Efter forespørgslens passage igennem VPN-tunnelen, vil det besøgte websted derfor betragte geolokationen på den valgte VPN-server som den reelle placering. De krypterede data falder derfor ikke i hænderne på annoncører, hackere og sikkerhedstjenester.

![VPN-struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN-protokoltyper

VPN-sikkerhedsprotokoller er værktøjer, som krypterer data i en VPN-tunnel og muliggør opretholdelse af brugerfortrolighed på det åbne internet. Pt. bruger hovedparten af moderne VPN-tjenester en af flg. tre VPN-protokoller:

1. [_IPSec_](https://en.wikipedia.org/wiki/IPsec). En af dens vigtigste fordele er, at den er tilgængelig på de fleste enheder og operativsystemer samt har et højt sikkerhedsniveau. Dog kan brugen af dobbelt [indkapsling](https://en.wikipedia.org/wiki/Encapsulation_\(networking\)) i denne protokol resultere i en reduceret forbindelseshastighed.

2. [_OpenVPN_](https://en.wikipedia.org/wiki/OpenVPN). Denne moderne protokol er open-source, så tredjepartsproducenter kan forbedre og opdatere teknologien.

3. [_WireGuard_](https://en.wikipedia.org/wiki/WireGuard). Dens vigtigste fordele er brugervenlighed, høj effektivitet og lav sårbarhed over for angreb.

Ud over disse VPN-protokoller findes der andre (f.eks. TLS, SSTP, IKEv2), men de er ikke populære eller lever ikke op til moderne datakrypteringsstandarder.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

AdGuard VPN har også sin egen [_protokol_](/general/adguard-vpn-protokol). En af dens fordele er, at trafik sendt vha. AdGuard VPN-protokollen er svær at skelne fra almindelig trafik. VPN-tunnelen ligner normal HTTPS-trafik, så den er ekstremt svært at opdage og blokere. Den er desuden baseret på mekanismerne i den moderne HTTP/2-protokol, hvilket sikrer høj forbindelseshastighed.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## VPN-ulemper

På trods af de åbenlyse fordele er VPN dog ikke perfekt, men har visse ulemper:

### Lavere hastighed

Da trafikken først passerer igennem VPN-serveren, inden den når målwebserveren, reduceres den generelle forbindelseshastighed. Andre faktorer påvirker også hastigheden ved VPN-brug: VPN-serverens belastning og båndbredde samt VPN-protokollens kompatibilitet med brugerens operativsystem. Alle disse faktorer, såvel som selve netværkets hastighed, kan påvirke brugeroplevelsen af en VPN-forbindelse.

### Adgangsblokering

Nogle onlinetjenester gør en stor indsats for at detektere og blokere VPN-trafik og -brugere. Ikke mange VPN kan dog maskere sig selv på en sådan måde, at de kun ses som almindelig trafik. Derfor ender mange forsøg på at nå et bestemt websted via en VPN-forbindelse i ingenting.

### VPN-forbindelsesudfald

Et svagt signal, netværksoverbelastning, VPN-inkompatibilitet med en firewall, antivirus og andre programmer, en forældet VPN-protokol — alt dette kan forårsage pludselige udfald i VPN-forbindelsen, især hos upålidelige VPN-udbydere.

## AdGuard VPN

Vores VPN-tjeneste har flere vigtige [fordele](/general/why-adguard-vpn):

- [_Proprietær VPN-protokol_](/general/adguard-vpn-protocol), der fungerer stabilt selv på en langsom internetforbindelse og camouflerer sig som normal trafik, hvilket gør den sværere at spore og blokere

- [_Nul logning-politik_](https://adguard-vpn.com/privacy.html), hvilket betyder, at ingen personlige data kan overføres til tredjeparter, fordi AdGuard VPN aldrig indsamler sådanne data

- _Flere end 50 VPN-servere i snesevis af lande_

- _Brugervenlighed og omfattende tilpasningsmuligheder_

Pt. er AdGuard VPN tilgængelig som:

- [Webbrowserudvidelse](/adguard-vpn-browser-extension/overview) til Chrome, Edge, Firefox og Opera

- Mobil-app til [Android](/adguard-vpn-for-android/overview) og [iOS](/adguard-vpn-for-ios/overview)

- Computerapplikation til [Windows](/adguard-vpn-for-windows/overview) og [Mac](/adguard-vpn-for-mac/overview)

[Læs mere om AdGuard VPN-funktioner](https://adguard-vpn.com/welcome.html)
