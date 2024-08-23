---
title: 如何在路由器上设置 AdGuard VPN
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs, smart media devices, and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

:::

## 如何在路由器上设置 AdGuard VPN

1. 在您的 [AdGuard 帐户](https://auth.adguard.com/login.html)中，选择 AdGuard VPN。

2. 在「**设备**」下，单击「**添加路由器**」

   ![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. 选择所需的 VPN 服务器位置并生成认证信息.

   ![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::提示

   接下来的步骤可能会根据您的路由器而有所不同。 我们以 Keenetic 路由器为例。

   :::

4. 在管理页面上，转到路由器设置.

5. 启用「**VPN 客户端**」并单击「**添加 VPN 服务器**」

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. 输入在步骤 3 中创建的**认证信息**

   ![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. 将设备连接到路由器.

:::note

如果要更改VPN服务器位置，您需要更新路由器设置。

:::

## 为什么在路由器上设置 AdGuard VPN 可能很有用

- 在路由器上安装 AdGuard VPN 后，VPN 提供商或其他任何人都无法访问您的互联网活动。
- 在路由器上安装 AdGuard VPN 可以保护整个网络，这意味着连接到路由器的所有设备都受到保护
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
