---
title: Jak nastavit AdGuard VPN na routeru
sidebar_position: 8
---

Setting up AdGuard VPN on your router allows you to protect all devices connected to your network. This includes smart TVs, media players, gaming consoles, and other gadgets that do not support VPN apps directly.

:::note

Tato možnost je k dispozici pouze v případě, že máte předplatné AdGuard VPN a váš router podporuje IPsec v nastavení _VPN Client_ (**ne** _VPN Server_). If IPsec is not listed in the _VPN CLient_ settings, you can try setting up [AdGuard VPN for Linux](/adguard-vpn-for-linux/setting-up-on-a-router). This solution uses AdGuard's proprietary protocol and is compatible with Keenetic, OpenWRT, and Asuswrt-Merlin routers.

:::

## Jak nastavit AdGuard VPN na routeru

1. Ve svém [AdGuard účtu](https://auth.adguard.com/login.html) vyberte AdGuard VPN.

2. V části _Zařízení_ klikněte na _Přidat router_.

   ![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Vyberte požadované umístění serveru VPN a vygenerujte přihlašovací údaje.

   ![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Další kroky se mohou lišit v závislosti na vašem routeru. Jako příklad jsme použili router Keenetic.

   :::

4. Na stránce administrátora přejděte do nastavení routeru.

5. Povolte _klienta VPN_ a klikněte na _Přidat server VPN_.

6. Vyberte možnost IPsec-client (u některých značek routerů se může nazývat IKEv2, nikoli L2TP/IPsec).

7. Zadejte přihlašovací údaje, které jste vytvořili v kroku 3.

   ![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Připojte zařízení k routeru.

:::note

Pokud chcete změnit umístění serveru VPN, musíte aktualizovat nastavení routeru.

:::

## Routery o kterých je známo, že nejsou kompatibilní s AdGuard VPN

- **ASUS**
  - IPsec je pouze v nastavení _VPN serveru_ a ne ve správném nastavení _VPN Fusion_/_VPN Client_
- **FRITZ!Box**
