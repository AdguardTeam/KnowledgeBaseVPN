---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til iOS?

Et VPN muliggør at oprette en sikker forbindelse til et andet netværk på internet. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Læs mere om](/general/how-vpn-works), hvordan et VPN fungerer i detaljer.

AdGuard VPN has several functions:

- skjuler den reelle færden og hjælper med at forblive anonym
- skifter IP-adresse for at beskytte data mod at blive sporet
- krypterer trafikken, hvilket gør den utilgængelig for svindlere
- muliggør at opsætte, hvor VPN skal, og ikke skal, bruges (undtagelsesfunktion)

Den næste fordel ved AdGuard VPN til iOS er vores egen VPN-protokol. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Sådan anvendes AdGuard VPN til iOS

For at bruge AdGuard VPN til iOS, log forst ind på [AdGuard-kontoen](https://my.adguard.com/). Der kan logges ind direkte med AdGuard-kontooplysningerne eller via Google, Apple-ID eller Facebook (forudsat, at AdGuard-kontoen er registreret med den samme e-mailadresse).

Har man endnu ikke en AdGuard-konto, vil man først skulle oprette én.

Det er ret nemt at bruge AdGuard VPN. På hovedskærmen findes knappen *Tilslut/Afbryd* samt listen over tilgængelige servere. Servere har her deres egen placering (bestemt land og by) og ping-indikator. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. I AdGuard VPN kan der vælges mellem flere end 50 placeringer i snesevis af lande.

![Hovedskærm og placeringer *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Lister over undtagelser

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

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

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNS-server

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi auto-beskyttelse

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Tema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Avancerede indstillinger

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Hurtige handlinger (tilgængelige fra iOS 13)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
