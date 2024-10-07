---
title: How to set up AdGuard VPN on your router
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as media devices and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

:::

## How to set up AdGuard VPN on your router

1. In your [AdGuard account](https://auth.adguard.com/login.html), select AdGuard VPN.

2. Under _Devices_, click _Add router_.

   ![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Select the desired VPN server location and generate credentials.

   ![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   The next steps may vary depending on your router. We have used the Keenetic router as an example.

   :::

4. In your admin page, go to the router settings.

5. Enable _VPN Client_ and click _Add VPN server_.

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. Enter the credentials you created in step 3.

   ![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Why setting up AdGuard VPN on your router may be useful

- With AdGuard VPN on your router, neither your VPN provider nor anyone else has access to your Internet activity
- Installing AdGuard VPN on your router secures your entire network, meaning that all devices connected to it are protected
- You can enhance security and protect your data on devices where it’s not possible to install AdGuard VPN apps — media devices and game consoles

## Geräte, die mit einem Router mit AdGuard VPN verbunden werden können

- **PlayStation, Xbox, and Nintendo Switch**: To enjoy seamless online gaming and enhanced security on PS4, PS5, Xbox One, Xbox Series, and Nintendo Switch, [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router) and connect your console to it

- **Apple TV**: Folgen Sie den Anweisungen zum [Einrichten von AdGuard VPN auf Ihrem Router](#how-to-set-up-adguard-vpn-on-your-router), und schließen Sie dann Ihr Apple TV an

- **Chromecast**:

  **Für Gen 4:** Einfach herunterladen und installieren [AdGuard VPN von Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Für Gen 3:** Folgen Sie unserer Anleitung zur [Einrichtung von AdGuard VPN auf Ihrem Router](#how-to-set-up-adguard-vpn-on-your-router). Stellen Sie sicher, dass Ihr Fernseher und Ihr Smartphone, Tablet oder Computer mit demselben Netzwerk verbunden sind.

  Für **Android TV** müssen Sie AdGuard VPN nicht auf einem Router einrichten. Es gibt eine spezielle Version für Android TV. Befolgen Sie einfach diese Schritte:

  1. Installieren Sie [AdGuard VPN von Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) auf Ihrem Android TV
  2. Wenn Sie bereits über ein AdGuard-Konto verfügen, melden Sie sich mit Ihren Zugangsdaten an. Wenn Sie neu bei AdGuard sind, geben Sie Ihre E-Mail-Adresse ein und folgen Sie den Anweisungen auf dem Bildschirm
  3. Öffnen Sie die App, wählen Sie den gewünschten Standort und stellen Sie eine Verbindung her

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
