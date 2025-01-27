---
title: How to set up AdGuard VPN on your router
sidebar_position: 8
---

Setting up AdGuard VPN on your router allows you to protect all devices connected to your network, including those that do not support VPN apps directly, such as smart TVs, media players, and gaming consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its *VPN Client* (**Not** *VPN Server*) settings. If your router does not support IPsec, you can set up [AdGuard VPN for Linux](/adguard-vpn-for-linux/setting-up-on-a-router). This setup uses AdGuard's proprietary protocol and is compatible with Keenetic, OpenWRT, and Asuswrt-Merlin routers.

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
1. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).
1. Enter the credentials you created in step 3.

    ![Enter the credentials *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

1. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
    - Only has IPsec in the *VPN Server* settings, and not in the correct *VPN Fusion*/*VPN Client* settings
- **FRITZ!Box**
