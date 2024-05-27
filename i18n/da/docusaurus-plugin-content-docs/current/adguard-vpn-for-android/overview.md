---
title: Funktionsoversigt
sidebar_position: 1
---

## Hovedskærm

Hovedskærmen afspejler VPN-status (Forbundet/Afbrudt). På samme skærm findes også knappen *Tilslut/Afbryd* samt listen over tilgængelige servere.

Ved hver server ses placering og ping-tid, dvs. hvor hurtigt serveren svarer. Jo lavere ping-tid er, des hurtigere en forbindelse. De hurtigste servere vises altid øverst på listen, der udgøres af flere end 50 lokationer i snesevis af lande. Der kan oprettes forbindelse til den hurtigste server ved at trykke på knappen *Tilslut* eller ved at vælge en lokation.

## Undtagelser

Undtagelseslister muliggør at håndtere VPN-forbindelsen for bestemte websteder og apps. Tryk på det andet ikon fra venstre nederst på skærmen for at gå til afsnittet *Undtagelser*.

![Undtagelser *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

Som standard fungerer AdGuard VPN for alle websteder og apps undtagen dem, som er føjet til undtagelser: Er intet angivet i undtagelser, vil VPN være aktivt for alle apps og websteder. VPN kan også aktivere **selektivt**, dvs. kun for bestemte apps eller websteder. For at skifte til denne tilstand, tryk på *Skift tilstand*.

![Skift tilstand *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Vær forsigtig, når VPN anvendes **selektivt**.

Undtages en webbrowser fra VPN-tunnelen, vil webstedsundtagelser ikke fungere for den.

Skiftes til denne tilstand for websteder, så husk at tilføje domænerne for de apps, som ønskes brugt — f. eks. `facebook.com` til Facebook.

:::

### Websteder

Et domæne (f.eks. `google.com`) eller underdomæne (f.eks. `*.google.com`) kan føjes til Undtagelser på tre måder:

- Angiv det manuelt i appen
- Tilføj det direkte via webbrowseren ved at dele webstedet med AdGuard VPN
- Tilføj det fra en indbygget liste over tjenester

![Tilføj manuelt *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Tilføj fra listen *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

Der er nogle nuancer i manuel tilføjelse af domæner. Undtager man f.eks. manuelt domænet `yahoo.com`, vil alle `*.yahoo.com` underdomæner også blive opført i Undtagelser. Domænenavne med andre topniveaudomæner, såsom `yahoo.jp` eller `yahoo.fr`, undtages dog ikke.

Føjes `youtube.com` til Undtagelser, vil domænet for samme tjeneste, `youtu.be`, ikke blive tilføjet. I så tilfælde er det mere sikkert at bruge de indbyggede lister over tjenester. De indeholder alle underdomænerne associeret med hver platform.

:::

Da underdomæner kan aktiveres i tjenestelister, har vi tilføjet bokse, som afspejler status for hver tjeneste:

- **Fuldt aktiveret** indikeres med et hvidt flueben på en grøn baggrund
- **Delvist aktiveret** (aktiverede underdomæner uden hoveddomænet) indikeres med en grøn firkant på en hvid baggrund
- **Fuldt deaktiveret** indikeres med et tomt afkrydsningsfelt

![Webstedsundtagelser *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

Slettes et domæne eller underdomæne ved et uheld, så tryk blot på *Nulstil til standard*.

![Nulstil til standard *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

VPN kan også håndteres for apps. For at undtage en app fra VPN-tunnelen, tryk på *Tilføj app*. For at bruge VPN **selektivt**, tryk på *Skift tilstand*.

![App-undtagelser *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

I *Integreret tilstand*kan apps kun håndtres via AdGuard Ad Blocker.

:::

## Indstillinger

Man kan gå til *Indstillinger* ved at trykke på tandhjulsikonet nederst til højre på skærmen.

![Indstillinger *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### Generelt

![Generalt *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

I *Generelt*kan basis AdGuard VPN-indstillinger håndteres:

- Start AdGuard VPN ved systemopstart
- Vælg en DNS-server til at kryptere trafik og blokere annoncer, når man er tilsluttet VPN (vi anbefaler at bruge AdGuard DNS)
- Aktivér Kill Switch for at beskytte fortroligheden og afbryde forbindelsen til internet, hvis VPN-forbindelsen falder ud
- Vælg et farvetema
- Aktivér anonyme nedbrudsrapporter for at underrette udviklere om app-problemer

### Avanceret

![Avanceret *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

Afsnittet *Avanceret* er et sæt ikke så almindeligt anvendte indstillinger.

*Driftstilstand* muliggør at angive, hvordan trafikken skal rutes. Der findes de tre tilstande: VPN, SOCKS5 og integreret. I tilstanden *VPN* rutes al trafik igennem AdGuard VPN. I tilstanden *SOCKS5* kører AdGuard VPN en lokal proxyserver, der kan bruges af andre apps til trafikrutning. *Integreret tilstand* tillader AdGuard VPN og AdGuard Ad Blocker at samarbejde.

:::note

Visse AdGuard VPN-funktioner er deaktiveret i *Integreret tilstand*: DNS-servere, Kill Switch og App-undtagelser. Håndtering af DNS-beskyttelse og rutning af apps igennem AdGuard VPN-proxyen kan ske via AdGuard Ad Blocker-appen.

:::

*Logningsniveau* angiver, hvor mange app-hændelser, som registreres. Vi anbefaler ikke at aktivere logningsniveauerne *Udvidet* eller *Ekstrem*, medmindre vores supportteam anmoder om det.

I dette afsnit kan der også eksporteres logfiler og systemoplysninger for at dele dem med supporten.

*Diagnostiske data* viser de lokalt lagrede tekniske oplysninger om appen, enheden og forbindelserne. De kan kopieres og indsendes til vores supportteam, hvis nødvendigt.

Det sidste afsnit under *Avancerede indstillinger* er *Lavniveauindstillinger*. Vi opfordrer til ikke at tilgå dette afsnit, medmindre man er højt kvalificeret eller er blevet anmodet herom af vores supportteam. Her er det muligt at aktivere TUN-grænsefladelogning eller IPv6-protokol på VPN-grænsefladen, vælge proxyserverporten eller internetprotokolversionen, der skal bruges.

:::note Kompatibilitet

Indstillingen *Aktivér IPv6* er kun tilgængelig for IPv6-kapable netværk.

:::

### Support

Man kan via afsnittet *Support* tjekke vores FAQ for at få hurtige svar på sine spørgsmål, anmelde fejl og foreslå nye funktioner.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
