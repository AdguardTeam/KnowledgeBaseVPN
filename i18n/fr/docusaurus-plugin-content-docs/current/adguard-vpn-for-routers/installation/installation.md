---
title: General setup on most routers
sidebar_position: 1
---

Installing AdGuard VPN directly on your router allows every device in your network to benefit from private and secure Internet access — no separate app required. Follow this guide to add your router to AdGuard VPN, generate credentials, and connect your devices in just a few simple steps.

:::note

If you use a MikroTik or Keenetic router, please check the dedicated setup guides below:

- [How to set up AdGuard VPN on MikroTik routers](/adguard-vpn-for-routers/installation/mikrotik.md)

- [How to set up AdGuard VPN on Keenetic routers](/adguard-vpn-for-routers/installation/keenetic.md)

:::

## Installation options

There are two main ways to run AdGuard VPN on a router:

1. IPSec profile

   - Easy to set up, supported by many routers
   - Limitations: not available in Russia, only a limited number of VPN locations (USA, Germany, UK, Netherlands, Finland), and no support for exclusions

2. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

   - Advanced setup that unlocks all AdGuard VPN features, including access to all locations and website exclusions (app exclusions are not available)
   - Requires more technical knowledge
   - On routers with low-performance processors, connection speed may be limited to 30-100 Mbps

## Obtain your AdGuard VPN credentials

Before you can connect your router to AdGuard VPN, you need to generate unique credentials for it in your AdGuard account. These credentials include the server address, username, and password, and you’ll use them later when configuring your router.

1. In your [AdGuard account](https://auth.adguardaccount.com/login.html), select AdGuard VPN.

2. Under _Devices_, click _Add router_.

   ![Add router \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Select the desired VPN server location and generate credentials.

   ![Generate credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

## General setup on most routers

Most modern routers that support IKEv2/IPSec can be configured with AdGuard VPN in just a few steps. Once you have your credentials ready, follow this general instruction to create a VPN connection on your router.

:::note

The next steps may vary depending on your router. We have used the Keenetic router as an example.

:::

1. Open your router’s admin page

2. Go to the router settings

3. Enable _VPN Client_ and click _Add VPN server_

4. Select IPsec-client (for some router brands, it may be called IKEv2; not L2TP/IPsec)

5. Enter the credentials you’ve created.

   ![Enter the credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

   :::note

   In the _server address_ field, enter the _IP address_ from your AdGuard account.

   :::

6. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Routers known to be incompatible with AdGuard VPN

Below are the routers that are currently known to have compatibility issues:

### ASUS

ASUS routers do not support IKEv2/IPsec, so you cannot set them up using the general method mentioned above. However, routers running the Asuswrt-Merlin custom firmware can install **AdGuard VPN CLI**, which makes the CLI installation method fully supported.

### FRITZ!Box

FRITZ!Box routers do not support IKEv2/IPsec, and due to their closed firmware, it is not possible to install or run AdGuard VPN CLI on them.
