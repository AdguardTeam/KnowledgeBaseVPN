---
title: General setup on most routers
sidebar_position: 1
---

Installing AdGuard VPN directly on your router allows every device in your network to benefit from private and secure Internet access — no separate app required. Follow this guide to add your router to AdGuard VPN, generate credentials, and connect your devices in just a few simple steps.

:::note

If you use a MikroTik or Keenetic router, please check the dedicated setup guides below:

- [How to set up AdGuard VPN on MikroTik routers](/docs/adguard-vpn-for-routers/installation/mikrotik.md)

- [How to set up AdGuard VPN on Keenetic routers](/docs/adguard-vpn-for-routers/installation/keenetic.md)

:::

## Installation options

There are two main ways to run AdGuard VPN on a router:

1. IPSec profile

    - Easy to set up, supported by many routers
    - Limitations: not available in Russia, only a limited number of VPN locations, and no support for exclusions

1. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

    - Advanced setup that unlocks all AdGuard VPN features, including access to all locations and website exclusions (app exclusions are not available)
    - Requires more technical knowledge
    - On routers with low-performance processors, connection speed may be limited to 30-100 Mbps

## Obtain your AdGuard VPN credentials

Before you can connect your router to AdGuard VPN, you need to generate unique credentials for it in your AdGuard account. These credentials include the server address, username, and password, and you’ll use them later when configuring your router.

1. In your [AdGuard account](https://auth.adguardaccount.com/login.html), select AdGuard VPN.
1. Under *Devices*, click *Add router*.

    ![Add router *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

1. Select the desired VPN server location and generate credentials.

    ![Generate credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

## General setup on most routers

Most modern routers that support IKEv2/IPSec can be configured with AdGuard VPN in just a few steps. Once you have your credentials ready, follow this general instruction to create a VPN connection on your router.

:::note

The next steps may vary depending on your router. We have used the Keenetic router as an example.

:::

1. Open your router’s admin page
1. Go to the router settings
1. Enable *VPN Client* and click *Add VPN server*
1. Select IPsec-client (for some router brands, it may be called IKEv2; not L2TP/IPsec)
1. Enter the credentials you’ve created

    ![Enter the credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

1. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
    - Only has IPsec in the *VPN Server* settings, and not in the correct *VPN Fusion*/*VPN Client* settings
- **FRITZ!Box**
