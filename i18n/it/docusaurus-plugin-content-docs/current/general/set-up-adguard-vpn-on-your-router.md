---
title: Come configurare AdGuard VPN sul tuo router
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs, smart media devices, and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

:::

## Come configurare AdGuard VPN sul tuo router

1. Nel tuo [profilo di AdGuard](https://auth.adguard.com/login.html), seleziona AdGuard VPN.

2. In _Dispositivi_, clicca su _Aggiungi router_.

   ![Aggiungi router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Seleziona la posizione desiderata del server VPN e genera le credenziali.

   ![Genera le credenziali \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   I passaggi successivi potrebbero variare secondo il tuo router. Come esempio, abbiamo utilizzato il router di Keenetic.

   :::

4. Nella tua pagina da amministratore, vai alle impostazioni del router.

5. Abilita _Client VPN_ e clicca su _Aggiungi server VPN_.

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. Inserisci le credenziali che hai creato nel passaggio 3.

   ![Inserisci le credenziali \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Connetti i dispositivi al tuo router.

:::note

Dovrai aggiornare le impostazioni del tuo router, se desideri modificare la posizione del server VPN.

:::

## Perché configurare AdGuard VPN sul tuo router può essere utile

- Con AdGuard VPN sul tuo router, né il tuo fornitore VPN né chiunque altro ha accesso alla tua attività su Internet
- Installare AdGuard VPN sul tuo router protegge la tua intera rete, a significare che tutti i dispositivi a essi connessi sono protetti
- You can enhance security and protect your data on devices where it’s not possible to install AdGuard VPN apps — smart TVs, smart media devices, and game consoles

## Devices that can be connected to a router with AdGuard VPN

- **PlayStation, Xbox, and Nintendo Switch**: To enjoy seamless online gaming and enhanced security on PS4, PS5, Xbox One, Xbox Series, and Nintendo Switch, [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router) and connect your console to it

- **Apple TV**: Follow the instructions to [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router), then connect your Apple TV

- **Chromecast**:

  **For Gen 4:** Simply download and install [AdGuard VPN from Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **For Gen 3:** Follow our guide to [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router). Make sure your TV and smartphone, tablet or computer are connected to the same network

  For **Android TV**, you don’t need to set up AdGuard VPN on a router — we have a special version for Android TV. Just follow these steps:

  1. Install [AdGuard VPN from Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) on your Android TV
  2. If you already have an AdGuard account, log in with your credentials. If you’re new to AdGuard, enter your email address and follow the on-screen instructions
  3. Open the app, select the location you want, and connect

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
