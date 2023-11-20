---
title: Sådan opsættes AdGuard VPN-automatisering til iPhone- og iPad-apps
sidebar_position: 1
sidebar_label: Sådan opsættes AdGuard VPN-automatisering
---

AdGuard VPN har et afsnit kaldet *Undtagelser* samt to driftstilstande kaldet *General* og *Selektiv*. I tilstanden *Generel* er AdGuard VPN er aktiv overalt, undtagen på websteder føjet til Undtagelser. Omvendt, i tilstanden *Selektiv* virker VPN ikke nogen steder, undtagen for websteder anført på Undtagelseslisten. Bemærk, at der for hver tilstand skal oprettes separate lister.

Som man måske har bemærket, kan kun websteder føjes til afsnittet *Undtagelser*. For at justere AdGuard VPN til apps, skal en anden funktion bruges. Vores computer-appikationer har modulet *Split tunneling*, og appen til Android har *Apps-indstillinger* — disse indstillinger muliggør at bestemme, for hvilke apps AdGuard VPN skal være aktiveret.

Som det dog ofte er tilfældet, grundet en række tekniske nuancer, er det umuligt at implementere en så nyttig funktion til iOS, i det mindste pt. Derfor tilbyder vi en alternativ måde at automatisere AdGuard VPN til apps på iPhones og iPads.

## Opsætning af AdGuard VPN automatisk aktivering

Ved behov for et VPN til en eller flere apps, skal AdGuard VPN opsættes til automatisk at slå til og fra, når disse åbnes og lukkes. Gå til fanen Undtagelser, vælg tilstanden Generel og følg vejledningen. Her beskrives, hvordan automatisering opsættes til Twitter, men en hvilken som helst app kan vælges.

![Vejledning. Del 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Download [ *Shortcuts*-appen](https://apps.apple.com/us/app/shortcuts/id915249334) fra App Store, og gå til afsnittet *Automatisering* ved at trykke på ur-ikonet nederst på skærmen.
2. Tryk på knappen *Opret personlig automatisering*, find dernæst *App* på den åbnede liste og tryk på den.
3. Sørg i næste vindue for, at indstillingen *Er åbnet* er valgt, og tryk dernæst på *Vælg* for at vælge appen.

![Vejledning. Del 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start med at angive app-navnet, i dette tilfælde Twitter, og vælge det. Tryk dernæst på *Udført* øverste til højre på skærmen. Tryk dernæst på *Næste* øverste til højre på skærmen. Tryk i det nye vindue på *Tilføj handling*.

![Vejledning. Del 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Begynd at skrive "AdGuard VPN", og vælg AdGuard VPN-appen. Tryk i det nye vindue på *Opsæt en VPN-forbindelse*.

![Vejledning. Del 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Sørg for, at variablerne angiver *Slå* VPN-forbindelse *Til*, og tryk på *Næste*.
7. Flyt i næste vindue skyderen for *Spørg før kørsel* til den inaktive position. Bekræft valget, og tryk på *Udført*.

Nu er der et nyt scenarie: AdGuard VPN aktiveres automatisk, når Twitter-appen startes. Der skal nu oprettes en kommando mere, der automatisk deaktiverer AdGuard VPN, når Twitter-appen lukkes.

## Opsætning af AdGuard VPN til automatisk deaktivering

![Vejledning. Del 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Begynd i den samme *Shortcuts*-app at oprette en ny automatisering: Tryk på *+* øverste til højre hjørne på skærmen og dernæst på knappen *Opret personlig automatisering*. Vælg *App* i det nye vindue.
2. Sørg for, at indstillingen *Er lukket* er valgt, og afmarkér feltet under den tilstødende indstilling. Tryk dernæst på *Vælg*.

![Vejledning. Del 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Begynd at skrive *Twitter* og vælg appen. Tryk dernæst på *Udført* øverste til højre på skærmen. Tryk på *Tilføj handling*, og vælg AdGuard VPN.

![Vejledning. Del 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. Tryk i det nye vindue på *Indstil VPN-forbindelse*.
5. Tryk dernæst på ordet *Til*, så det ændres til *Fra*, og tryk dernæst på *Næste* øverste til højre på skærmen.
6. Deaktivér indstillingen *Spørg før kørsel*, og bekræft valget. Tryk dernæst på *Færdig* øverste til højre på skærmen for at fuldføre processen.

Færdig! AdGuard VPN aktiveres nu på enheden, hver gang Twitter-appen åbnes og deaktiveres, når den lukkes. Samme trin kan benyttes for enhver anden app.
