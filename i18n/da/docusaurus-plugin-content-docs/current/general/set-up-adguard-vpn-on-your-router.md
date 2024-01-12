---
title: Sådan opsættes AdGuard VPN på en router
sidebar_position: 8
---

Ved at opsætte AdGuard VPN på routeren kan man beskytte sine data på enheder, hvor VPN-apps ikke kan installeres, såsom smart-TV'er og spillekonsoller.

:::note

Denne mulighed er kun tilgængelig med et AdGuard VPN-abonnement, samt med router, som understøtter IPsec.

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

6. Vælg IPsec-klient (den kan hedde IKE; ikke L2TP/IPsec).

7. Angiv legitimationsoplysningerne oprettet på trin 3.

   ![Angiv legitimationsoplysningerne \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Tilslut enheder til routeren.

:::note

Routerindstillingerne vil skulle opdateres, hvis der ændres VPN-serverlokation.

:::

## Hvorfor det kan være nyttigt at opsætte AdGuard VPN på routeren

- Med AdGuard VPN på routeren har hverken VPN-udbyderen eller nogen andre adgang til internetaktiviteten
- Installation af AdGuard VPN på routeren sikrer hele netværket, hvilket betyder, at alle enheder, som er tilsluttet det, er beskyttet
- Man kan forbedre sikkerheden og beskytte sine data på enheder, hvor det ikke er muligt at installere AdGuard VPN-apps — smart-TV'er (pt. er AdGuard VPN kun tilgængelig på Android TV) og spillekonsoller
