---
title: How to set up AdGuard VPN on your router
sidebar_position: 8
---

Setting up AdGuard VPN on your router allows you to protect all devices connected to your network. This includes smart TVs, media players, gaming consoles, and other gadgets that do not support VPN apps directly.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings. If IPsec is not listed in the _VPN CLient_ settings, you can try setting up [AdGuard VPN for Linux](/adguard-vpn-for-linux/setting-up-on-a-router). 此方案基于 [TrustTunnel](https://trusttunnel.org/)，是一款由 AdGuard VPN 开发的开源协议，兼容 Keenetic、OpenWRT 及 Asuswrt-Merlin 路由器。

:::

## How to set up AdGuard VPN on your router

1. In your [AdGuard account](https://auth.adguardaccount.com/login.html), select AdGuard VPN.

2. Under _Devices_, click _Add router_.

   ![Add router \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Select the desired VPN server location and generate credentials.

   ![Generate credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   The next steps may vary depending on your router. We have used the Keenetic router as an example.

   :::

4. In your admin page, go to the router settings.

5. Enable _VPN Client_ and click _Add VPN server_.

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. Enter the credentials you created in step 3.

   ![Enter the credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Connect devices to your router.

:::note

You’ll need to update your router settings if you want to change the VPN server location.

:::

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
