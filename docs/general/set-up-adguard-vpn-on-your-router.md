---
title: How to set up AdGuard VPN on your router
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec.

:::

## How to set up AdGuard VPN on your router

1. In your [AdGuard account](https://auth.adguard.com/login.html), select AdGuard VPN.
1. Under *Devices*, click *Add router*.

    ![Add router *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

1. Select the desired VPN server location and generate credentials.

    ![Generate credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

    :::note

    The next steps may vary depending on your router. We have used the Keenetic router as an example.

    :::

1. In your admin page, go to the router settings.
1. Enable *VPN Client* and click *Add VPN server*.
1. Select IPsec-client (it may be called IKE; not L2TP/IPsec).
1. Enter the credentials you created in step 3.

    ![Enter the credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

1. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Why setting up AdGuard VPN on your router may be useful

- With AdGuard VPN on your router, neither your VPN provider nor anyone else has access to your Internet activity
- Installing AdGuard VPN on your router secures your entire network, meaning that all devices connected to it are protected
- You can enhance security and protect your data on devices where it's not possible to install AdGuard VPN apps — smart TVs (currently, AdGuard VPN is only available on Android TV) and game consoles
