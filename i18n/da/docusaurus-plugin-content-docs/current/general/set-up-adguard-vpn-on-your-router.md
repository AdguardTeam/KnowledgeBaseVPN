---
title: Sådan opsættes AdGuard VPN på en router
sidebar_position: 8
---

Man kan ved at opsætte AdGuard VPN på routeren beskytte sine data på enheder, hvor VPN-apps ikke kan installeres, såsom medieenheder og spillekonsoller.

:::note

Denne mulighed er kun tilgængelig med et AdGuard VPN-abonnement og en router, hvis indstillinger understøtter IPsec for _VPN-klient_ (**ikke** _VPN-server_).

:::

## Sådan opsættes AdGuard VPN på en router

1. Vælg i [AdGuard-kontoen](https://auth.adguard.com/login.html) AdGuard VPN.

2. Klik på _Tilføj router_ under _Enheder_.

   ![Tilføj router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Vælg den ønskede VPN-serverlokation og generér legitimationsoplysninger.

   ![Generér legitimationsoplysninger \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   De næste trin kan variere afhængigt af routermærke og -model. Vi har brugt Keenetic-routeren som eksempel.

   :::

4. Gå til routerindstillingerne på admin-siden.

5. Aktivér _VPN-klient_ og klik på _Tilføj VPN-server_.

6. Vælg IPsec-klient (den kan på visse routermærker hedde IKEv2; ikke L2TP/IPsec).

7. Angiv legitimationsoplysningerne oprettet på trin 3.

   ![Angiv legitimationsoplysningerne \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Tilslut enheder til routeren.

:::note

Routerindstillingerne vil skulle opdateres, hvis der ændres VPN-serverlokation.

:::

## Hvorfor det kan være nyttigt at opsætte AdGuard VPN på routeren

- Med AdGuard VPN på routeren har hverken VPN-udbyderen eller nogen andre adgang til internetaktiviteten
- Installation af AdGuard VPN på routeren sikrer hele netværket, hvilket betyder, at alle enheder, som er tilsluttet det, er beskyttet
- Man kan forbedre sikkerheden og beskytte sine data på enheder, hvor det ikke er muligt at installere AdGuard VPN-apps — medieenheder og spillekonsoller

## Enheder, som kan tilsluttes en router med AdGuard VPN

- **PlayStation, Xbox og Nintendo Switch**: For problemfri onlinespil og forbedret sikkerhed på PS4, PS5, Xbox One, Xbox Series og Nintendo Switch, [opsæt AdGuard VPN på routeren](#how-to-set-up-adguard-vpn-on-your-router) og forbind konsollen til den

- **Apple TV**: Følg vejledningen for at [opsætte AdGuard VPN på routeren](#how-to-set-up-adguard-vpn-on-your-router) og dernæst tilslutte Apple TV'et

- **Chromecast**:

  **For Gen 4:** Download og installér blot [AdGuard VPN fra Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **For Gen 3:** Følg vores guide til [opsætning af AdGuard VPN på routeren](#how-to-set-up-adguard-vpn-on-your-router). Sørg for, at TV, smartphone, tablet eller computer er tilsluttet det samme netværk

  Til **Android TV** behøver man ikke opsætte AdGuard VPN på routeren – vi har en særlig Android TV-version. Følg blot disse trin:

  1. Installér [AdGuard VPN fra Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) på Android TV'et
  2. Hvis man allerede har en AdGuard-konto, log ind på kontoen. Er man ny AdGuard-bruger, angiv en e-mailadresse og følg skærmvejledningen
  3. Åbn appen, vælg den ønskede lokation, og opret forbindelse

## Routere kendt for at være inkompatible med AdGuard VPN

- **ASUS**
  - Har kun IPsec i _VPN Server_-indstillingerne og ikke i de korrekte _VPN Fusion_/_VPN Client_-indstillinger
- **FRITZ!Box**
