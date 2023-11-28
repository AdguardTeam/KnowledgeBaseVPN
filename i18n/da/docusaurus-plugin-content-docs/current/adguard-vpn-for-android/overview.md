---
title: Funktionsoversigt
sidebar_position: 1
---

## Hvad er AdGuard VPN til Android?

Et VPN er et ideelt værktøj, der giver sikkerhed og anonymitet, mens der surfes på internet. [Hvordan fungere det?](/general/how-vpn-works)Uden at gå i tekniske detaljer, så opretter VPN en sikker krypteret forbindelse (betegnet tunnel) mellem en brugers enhed og en ekstern VPN-server. På denne måde bevares datafortroligheden, samt brugerens anonymitet, da en tredjepartsobservatør ser IP-adr. på VPN-serveren og ikke brugerens reelle IP-adr.

**VPN bruges ofte til:**

- Bevare personlige data sikre, selv mens offentligt Wi-Fi anvendes
- Forhindre online aktivitetssporing ved at maskere IP-adressen
- Skjule den reelle geolokation for at forblive anonym

AdGuard VPN til Android kan gøre det hele — og endda tilbyde noget unikt. For at finde ud af, hvorfor AdGuard VPN er den bedre mulighed — læs [denne artikel](/general/why-adguard-vpn).

## Sådan kommer man i gang med at bruge AdGuard VPN til Android

Download først AdGuard VPN fra [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) og log ind på AdGuard-kontoen. Har man ingen konto, bør man[oprette én](https://auth.adguard.com/login.html). Der kan logges ind direkte med AdGuard-kontolegitimationsoplysningerne. Eller det kan gøres via Google eller Facebook, hvis AdGuard-kontoer er registreret til samme e-mailadresse.

## Hovedskærm

Der er to bjælker på hovedskærmen, som afspejler appens status (Tilsluttet/Afbrudt) og den valgte Undtagelsestilstand ([Generel/Selektiv](#lists-of-exclusions)). På samme skærm findes også knappen *Tilslut/Afbryd* samt listen over tilgængelige servere.

Ved hver server ses placering og ping-tid, dvs. hvor hurtigt serveren svarer. Jo lavere ping-tid er, des hurtigere en forbindelse. De hurtigste servere vises altid øverst på listen bestående af flere end 50 placeringer i snesevis af lande. Der kan oprettes forbindelse til den hurtigste server ved at trykke på knappen *Tilslut/Afbryd* eller ved at vælge en placering.

## Undtagelser

Vi har gjort alt for at gøre det nemt at håndtere websteds- og app-undtagelseslister. AdGuard VPN vil kun fungerer på de steder, som er valgt.

### Lister over undtagelser

Undtagelseslisterne muliggør at vælge websteder, for hvilke VPN skal aktiveres, og omvendt. Tryk på det andet ikon fra venstre nederst på skærmen for at gå til afsnittet *Undtagelser*.

Der findes to tilstande: I *Generel tilstand* er websteder fra undtagelseslisten udelukket, og i *Selektiv tilstand* vil de være de eneste, hvor AdGuard VPN fungerer.

Der kan føjes domæner (f.eks. `google.com`) eller underdomæner (f.eks. `*.google.com`) for websteder til *Undtagelser* på tre måder: Angiv dem manuelt i appen, direkte fra browseren ved at klikke på knappen *Del* og vælge AdGuard VPN på den liste, der åbnes nedenfor eller fra de indbyggede lister over tjenester opdelt efter kategorier.

![Undtagelser](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Der er nogle nuancer i manuel tilføjelse af domæner. Undtager man f.eks. manuelt domænet `yahoo.com`, vil alle `*.yahoo.com` underdomæner også blive opført i Undtagelser. Domænenavne med andre topniveaudomæner, såsom `yahoo.jp` eller `yahoo.fr`, undtages dog ikke. Eller man kan tilføje `youtube.com` til Undtagelser, mens domænet for samme tjeneste, `youtu.be`, ikke opføres på listen. I så tilfælde er det mere sikkert at bruge indbyggede lister over tjenester, fordi vi her placerer alle underdomæner relateret til hver platform.

:::

Da underdomæner kan aktiveres i tjenestelisterne, har vi tilføjet felter, som afspejler status for hver tjeneste — disse kan ses på hovedskærmen for *Undtagelser* til venstre for hvert tjenestenavn: Status **Fuldt aktiveret** er markeret med et hvidt flueben på grøn baggrund, **Fuldt deativeret** med et gråt felt, og **Delvist aktiveret**, hvilket betyder, at en eller flere parametre blev ændret, med en grøn firkant på hvid baggrund. Gode nyheder: Man kan altid vende tilbage til standardvisningen for tjenestelister, hvis man har slettet eller deaktiveret domæner derfra.

![Undtagelser *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

En anden nyttig funktion er *Import/eksport af undtagelser*. Det kræver kun fire trin at gøre dette:

1. Åbn AdGuard VPN på/i den enhed/browser, fra hvilken undtagelser skal eksporteres. Find det relevante afsnit og klik på knappen *Eksportér*. Et `adguard_vpn_exclusions.zip`-arkiv vil blive downloadet.
2. Der er to `.txt` filer i arkivet, én for hver af listerne *General* og *Selektiv*. Føj flere undtagelser til dem, slet eksisterende, omdøb filer (mere om dette senere) eller lad blot arkivet forblive uændret.
3. Ved overførsel mellem forskellige enheder, så husk at sende `.zip`-filen til enheden til import. Hvis man f.eks. importerer undtagelseslister fra en Windows- til en Android-enhed, så sørg for først at sende `.zip`-filen til Android-enheden.
4. Åbn AdGuard VPN på enheden, hvor arkivet med undtagelseslisterne skal importeres. Find det relevante afsnit, klik på knappen *Importér* og vælg arkivet.

![Import/Eksport *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Apps-indstillinger

Som nævnt ovenfor, kan ikke blot websteder nemt føjes til undtagelserne. Vælg for hvilke apps AdGuard VPN skal bruges, og omvendt. Tryk på ikonet ved siden af ikonet *Undtagelseslister* nederst på skærmen for at åbne Apps-indstillinger. Som standard fungerer AdGuard VPN for alle apps, men skyderen kan skiftes – og dermed slå AdGuard VPN fra – for enhver app på listen.

Hvis *Kompatibilitetstilstand* med AdGuard er aktiveret, kan apps kun håndteres via AdGuard Ad Blocker. AdGuard-appen åbnes derfor ved tryk på knappen.

![App-indstillinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Indstillinger

Man kan gå til *Indstillinger* ved at trykke på tandhjulsikonet nederst til højre på skærmen. Det første afsnit er *App-indstillinger*: Opsæt AdGuard VPN til Android som ønsket ved at vælge forskellige muligheder der.

![App-indstillinger *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN-autostart

Skyderen, der er skiftet til højre, aktiverer autostart af AdGuard VPN efter enhedens opstart.

### DNS-servere

Formålet med [Domain Name System](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) er at oversætte websteders host- eller domænenavne til noget, browsere kan forstå, dvs. IP-adresser. Denne opgave udføres af DNS-servere. AdGuard VPN til Android tilbyder et bredt udvalg af DNS-servere, hver med særlige kvaliteter. F.eks. fjerner [AdGuard DNS](https://adguard-dns.io/kb/) annoncer og beskytter enheden mod sporing, mens AdGuard DNS Family Protection kombinerer funktionerne i AdGuard DNS med SafeSearch og blokering af voksenindhold. Der er også mulighed for at tilføje en tilpasset DNS-server.

### Auto-beskyttelse

Denne funktion aktiverer automatisk AdGuard VPN, når enheden opretter forbindelse til et Wi-Fi eller mobilnetværk.

### Kill Switch

Kill Switch-funktionen kan opsættes på Android-enheden ved at følge en simpel skærmvejledning. Hvorfor skulle man gøre dette? Ophører VPN-forbindelse af en eller anden grund pludselig med at virke under brug af et mobilnetværk eller offentligt Wi-Fi, afslutter Kill Switch automatisk internetforbindelsen, hvilket hindrer angribere i at kunne tilgå oplysninger på enheden.

Bemærk, at hvis Kill Switch er slået til, vil *Apps-indstillinger* og *Undtagelser* ikke fungere.

### Tema

Der kan vælges mellem systemstandard, mørkt eller lyst app-tema.

![Tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Avancerede indstillinger

I *Avancerede indstillinger* findes fem afsnit. Du kan *Hjælpe os med at blive bedre* ved at omskifte kontakten øverst oppe. Denne indstilling vil tillade AdGuard VPN at indsamle nedbrudsrapporter, tekniske data og interaktionsdata. Indsendelse vil ske i form af anonym information.

Afsnittet *Driftstilstand* muliggør at vælge en af tre muligheder: VPN, Proxy og Kompatibilitetstilstand. I *VPN-tilstand* rutes al trafik automatisk igennem AdGuard VPN. Når *Proxytilstand* (SOCKS5) er aktiv, kører AdGuard VPN en lokal proxyserver, igennem hvilken trafik fra andre apps kan rutes. Man bør kun vælge denne indstilling, såfremt man ved, hvad man foretager sig. Aktiv *Kompatibilitetstilstand* lader AdGuard VPN og AdGuard Ad Blocker samarbejde.

:::note

Some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. For at håndtere app-tunneling, skal AdGuard Ad Blocker-appen åbnes.

:::

De næste to afsnit er *Logningsniveau* og *Diagnostisk info*. Mht. den første mulighed anbefales det ikke at aktivere logningsniveauerne Udvidet eller Ekstrem, medmindre vores supportteam anmoder herom. Diagnostisk info, lokalt gemt teknisk information om enheden og forbindelser (IP-adresse, ID, ping mv.) kan indsendes til os i tilfælde af tekniske problemer.

Det sidste afsnit under *Avancerede indstillinger* er *Lavniveauindstillinger*. Vi opfordrer til ikke at tilgå dette afsnit, medmindre man er højt kvalificeret eller er blevet anmodet herom af vores supportteam. Her er det muligt at aktivere TUN-grænsefladelogning eller IPv6-protokol på VPN-grænsefladen, vælge proxyserverporten eller internetprotokolversionen, der skal bruges.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Support

I afsnittet *Support* kan man give feedback, anmelde fejl eller eksportere logfiler og systemoplysninger til yderligere indsendelse til helpdesk.
