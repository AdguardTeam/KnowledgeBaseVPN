---
title: Jak nastavit AdGuard VPN na routeru
sidebar_position: 8
---

Nastavením AdGuard VPN na routeru můžete chránit svá data na zařízeních, kam nelze instalovat aplikace VPN, jako jsou chytré TV a herní konzole.

:::note

Tato možnost je k dispozici pouze v případě, že máte předplatné AdGuard VPN a váš router podporuje IPsec.

:::

## Jak nastavit AdGuard VPN na routeru

- Ve svém [AdGuard účtu](https://auth.adguard.com/login.html) vyberte AdGuard VPN
- V části _Zařízení_ klikněte na _Přidat router_

![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

- Vyberte požadované umístění serveru VPN a vygenerujte přihlašovací údaje

![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

Upozorňujeme, že další kroky se mohou lišit v závislosti na vašem routeru. Jako příklad jsme použili router Keenetic.

- Na stránce administrátora přejděte do nastavení routeru
- Povolte _klienta VPN_ a klikněte na _Přidat server VPN_
- Vyberte možnost IPsec-client (může se nazývat IKE, nikoli L2TP/IPsec)
- Zadejte přihlašovací údaje, které jste vytvořili v kroku 3

![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

- Připojte zařízení k routeru

:::note

Pokud chcete změnit umístění serveru VPN, musíte aktualizovat nastavení routeru.

:::

## Proč může být nastavení AdGuard VPN na vašem routeru užitečné

- S AdGuard VPN na vašem routeru nemá poskytovatel VPN ani nikdo jiný přístup k vaší internetové aktivitě
- Instalace AdGuard VPN na váš router zabezpečí celou vaši síť, což znamená, že všechna zařízení k ní připojená jsou chráněná
- Můžete zvýšit zabezpečení a chránit svá data na zařízeních, na která není možné nainstalovat aplikace AdGuard VPN — chytré TV (_v současné době je AdGuard VPN k dispozici pouze pro Android TV_) a herní konzole
