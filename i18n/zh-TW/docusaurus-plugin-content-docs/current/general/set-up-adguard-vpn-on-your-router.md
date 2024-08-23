---
title: 如何在路由器上設定 AdGuard VPN
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs, smart media devices, and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

:::

## 如何在路由器上設定 AdGuard VPN

1. 在您的 [AdGuard 帳號](https://auth.adguard.com/login.html) 中，選擇 AdGuard VPN。

2. 在_裝置_下，按一下_新增路由器_。

   ![新增路由器\*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. 選擇所需的 VPN 伺服器位置並產生憑證。

   ![產生憑證 \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::筆記

   接下來的步驟可能會有所不同，具體取決於您的路由器。 我們以 Keenetic 路由器為例。

   :::

4. 在您的管理頁面中，前往路由器設定

5. 啟用 _VPN 用戶端_ 並點擊 _新增 VPN 伺服器_

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. 輸入您在步驟 3 中建立的憑證

   ![輸入憑證 \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. 將設備連接到路由器

:::note

如果您想變更 VPN 伺服器位置，則需要更新路由器設定。

:::

## 為什麼在路由器上設定 AdGuard VPN 可能有用

- 透過路由器上的 AdGuard VPN，您的 VPN 提供者或其他任何人都無法存取您的網路活動
- 在路由器上安裝 AdGuard VPN 可保護您的整個網絡，這表示連接到該網路的所有裝置都受到保護
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
