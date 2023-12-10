---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til Android?

Et VPN er et ideelt værktøj, der giver sikkerhed og anonymitet, mens der surfes på internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. På denne måde bevares datafortroligheden, samt brugerens anonymitet, da en tredjepartsobservatør ser IP-adr. på VPN-serveren og ikke brugerens reelle IP-adr.

**VPN bruges ofte til:**

- Bevare personlige data sikre, selv mens offentligt Wi-Fi anvendes
- Forhindre online aktivitetssporing ved at maskere IP-adressen
- Skjule den reelle geolokation for at forblive anonym

AdGuard VPN til Android kan gøre det hele — og endda tilbyde noget unikt. For at finde ud af, hvorfor AdGuard VPN er den bedre mulighed — læs [denne artikel](/general/why-adguard-vpn).

## Sådan kommer man i gang med at bruge AdGuard VPN til Android

Download først AdGuard VPN fra [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) og log ind på AdGuard-kontoen. Har man ingen konto, bør man[oprette én](https://auth.adguard.com/login.html). Der kan logges ind direkte med AdGuard-kontolegitimationsoplysningerne. Eller det kan gøres via Google eller Facebook, hvis AdGuard-kontoer er registreret til samme e-mailadresse.

## Hovedskærm

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Ved hver server ses placering og ping-tid, dvs. hvor hurtigt serveren svarer. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Undtagelser

Vi har gjort alt for at gøre det nemt at håndtere websteds- og app-undtagelseslister. AdGuard VPN vil kun fungerer på de steder, som er valgt.

### Lister over undtagelser

#### For websites

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Tryk på det andet ikon fra venstre nederst på skærmen for at gå til afsnittet *Undtagelser*.

There are two modes: in *General mode*, websites from the list of exclusions are excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.

Der kan føjes domæner (f.eks. `google.com`) eller underdomæner (f.eks. `*.google.com`) for websteder til *Undtagelser* på tre måder: Angiv dem manuelt i appen, direkte fra browseren ved at klikke på knappen *Del* og vælge AdGuard VPN på den liste, der åbnes nedenfor eller fra de indbyggede lister over tjenester opdelt efter kategorier.

![Undtagelser](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Der er nogle nuancer i manuel tilføjelse af domæner. Undtager man f.eks. manuelt domænet `yahoo.com`, vil alle `*.yahoo.com` underdomæner også blive opført i Undtagelser. Domænenavne med andre topniveaudomæner, såsom `yahoo.jp` eller `yahoo.fr`, undtages dog ikke. Eller man kan tilføje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke opføres på listen. I så tilfælde er det mere sikkert at bruge indbyggede lister over tjenester, fordi vi her placerer alle underdomæner relateret til hver platform.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Gode nyheder: Man kan altid vende tilbage til standardvisningen for tjenestelister, hvis man har slettet eller deaktiveret domæner derfra.

![Undtagelser *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

En anden nyttig funktion er *Import/eksport af undtagelser*. Det kræver kun fire trin at gøre dette:

1. Åbn AdGuard VPN på/i den enhed/browser, fra hvilken undtagelser skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `adguard_vpn_exclusions.zip`-arkiv vil blive downloadet.
2. There are two `.txt` files inside the archive, one for each of the lists. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.
3. Ved overførsel mellem forskellige enheder, så husk at sende `.zip`-filen til enheden til import. Hvis man f.eks. importerer undtagelseslister fra en Windows- til en Android-enhed, så sørg for først at sende `.zip`-filen til Android-enheden.
4. Åbn AdGuard VPN på enheden, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet.

![Import/Eksport *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Som nævnt ovenfor, kan ikke blot websteder nemt føjes til undtagelserne. Choose for which apps you need AdGuard VPN and for which you don't. By default, AdGuard VPN works for all apps, but you can easily switch to the other mode.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Indstillinger

Man kan gå til *Indstillinger* ved at trykke på tandhjulsikonet nederst til højre på skærmen. Det første afsnit er *App-indstillinger*: Opsæt AdGuard VPN til Android som ønsket ved at vælge forskellige muligheder der.

![App-indstillinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN-autostart

Skyderen, der er skiftet til højre, aktiverer autostart af AdGuard VPN efter enhedens opstart.

### DNS-servere

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. Der er også mulighed for at tilføje en tilpasset DNS-server.

### Auto-beskyttelse

Denne funktion aktiverer automatisk AdGuard VPN, når enheden opretter forbindelse til et Wi-Fi eller mobilnetværk.

### Kill Switch

Kill Switch-funktionen kan opsættes på Android-enheden ved at følge en simpel skærmvejledning. Hvorfor skulle man gøre dette? Ophører VPN-forbindelse af en eller anden grund pludselig med at virke under brug af et mobilnetværk eller offentligt Wi-Fi, afslutter Kill Switch automatisk internetforbindelsen, hvilket hindrer angribere i at kunne tilgå oplysninger på enheden.

Bemærk, at hvis Kill Switch er slået til, vil *Apps-indstillinger* og *Undtagelser* ikke fungere.

### Tema

Der kan vælges mellem systemstandard, mørkt eller lyst app-tema.

![Tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Avancerede indstillinger

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and app exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

De næste to afsnit er *Logningsniveau* og *Diagnostisk info*. Mht. den første mulighed anbefales det ikke at aktivere logningsniveauerne Udvidet eller Ekstrem, medmindre vores supportteam anmoder herom. Diagnostisk info, lokalt gemt teknisk information om enheden og forbindelser (IP-adresse, ID, ping mv.) kan indsendes til os i tilfælde af tekniske problemer.

Det sidste afsnit under *Avancerede indstillinger* er *Lavniveauindstillinger*. Vi opfordrer til ikke at tilgå dette afsnit, medmindre man er højt kvalificeret eller er blevet anmodet herom af vores supportteam. Her er det muligt at aktivere TUN-grænsefladelogning eller IPv6-protokol på VPN-grænsefladen, vælge proxyserverporten eller internetprotokolversionen, der skal bruges.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Support

I afsnittet *Support* kan man give feedback, anmelde fejl eller eksportere logfiler og systemoplysninger til yderligere indsendelse til helpdesk.
