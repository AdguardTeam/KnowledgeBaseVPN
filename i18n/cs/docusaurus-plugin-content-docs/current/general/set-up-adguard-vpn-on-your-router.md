---
title: Jak nastavit AdGuard VPN na routeru
sidebar_position: 8
---

Nastavení AdGuard VPN na vašem routeru vám umožní chránit všechna zařízení připojená k síti. Patří sem chytré televizory, přehrávače médií, herní konzole a další zařízení, která přímo nepodporují aplikace VPN.

:::note

Tato možnost je k dispozici pouze v případě, že máte předplatné AdGuard VPN a váš router podporuje IPsec v nastavení _VPN Client_ (**ne** _VPN Server_). Pokud IPsec není uveden v nastavení _VPN CLient_, můžete zkusit nastavit [AdGuard VPN pro Linux](/adguard-vpn-for-linux/setting-up-on-a-router). Toto řešení využívá vlastní protokol AdGuardu a je kompatibilní s routery Keenetic, OpenWRT a Asuswrt-Merlin.

:::

## Jak nastavit AdGuard VPN na routeru

1. Ve svém [AdGuard účtu](https://auth.adguardaccount.com/login.html) vyberte AdGuard VPN.

2. V části _Zařízení_ klikněte na _Přidat router_.

   ![Add router \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Vyberte požadované umístění serveru VPN a vygenerujte přihlašovací údaje.

   ![Generate credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Další kroky se mohou lišit v závislosti na vašem routeru. Jako příklad jsme použili router Keenetic.

   :::

4. Na stránce administrátora přejděte do nastavení routeru.

5. Povolte _klienta VPN_ a klikněte na _Přidat server VPN_.

6. Vyberte možnost IPsec-client (u některých značek routerů se může nazývat IKEv2, nikoli L2TP/IPsec).

7. Zadejte přihlašovací údaje, které jste vytvořili v kroku 3.

   ![Enter the credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Připojte zařízení k routeru.

:::note

Pokud chcete změnit umístění serveru VPN, musíte aktualizovat nastavení routeru.

:::

## Routery o kterých je známo, že nejsou kompatibilní s AdGuard VPN

- **ASUS**
  - IPsec je pouze v nastavení _VPN serveru_ a ne ve správném nastavení _VPN Fusion_/_VPN Client_
- **FRITZ!Box**
