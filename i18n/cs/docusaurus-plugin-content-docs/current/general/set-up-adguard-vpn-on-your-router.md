---
title: Jak nastavit AdGuard VPN na routeru
sidebar_position: 8
---

Nastavením AdGuard VPN na routeru můžete chránit svá data na zařízeních, kam nelze instalovat aplikace VPN, jako jsou mediální zaříiení a herní konzole.

:::note

Tato možnost je k dispozici pouze v případě, že máte předplatné AdGuard VPN a váš router podporuje IPsec v nastavení _VPN Client_ (**ne** _VPN Server_).

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

## Proč může být nastavení AdGuard VPN na vašem routeru užitečné

- S AdGuard VPN na vašem routeru nemá poskytovatel VPN ani nikdo jiný přístup k vaší internetové aktivitě
- Instalace AdGuard VPN na váš router zabezpečí celou vaši síť, což znamená, že všechna zařízení k ní připojená jsou chráněná
- Můžete zvýšit zabezpečení a chránit svá data na zařízeních, na která není možné nainstalovat aplikace AdGuard VPN — mediální zařízení a herní konzole

## Zařízení, která lze připojit k routeru s AdGuard VPN

- **PlayStation, Xbox a Nintendo Switch**: Chcete-li si užívat bezproblémové online hraní a lepší zabezpečení na konzolích PS4, PS5, Xbox One, Xbox Series a Nintendo Switch, [nastavte AdGuard VPN na svém routeru](#how-to-set-up-adguard-vpn-on-your-router) a připojte k němu svou konzoli

- **Apple TV**: Postupujte podle pokynů [nastavení AdGuard VPN na vašem routeru](#how-to-set-up-adguard-vpn-on-your-router) a poté připojte Apple TV

- **Chromecast**:

  **Pro Gen 4:** Jednoduše si stáhněte a nainstalujte [AdGuard VPN z Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Pro Gen 3:** Postupujte podle našeho průvodce [nastavení AdGuard VPN na vašem routeru](#how-to-set-up-adguard-vpn-on-your-router). Zkontrolujte, zda je TV a chytrý telefon, tablet nebo počítač připojeny ke stejné síti

  Pro **Android TV** nemusíte nastavovat AdGuard VPN na routeru — máme speciální verzi pro Android TV. Postupujte podle následujících kroků:

  1. Nainstalujte si [AdGuard VPN z Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) do své Android TV
  2. Pokud již máte AdGuard účet, přihlaste se pomocí svých přihlašovacích údajů. Pokud jste v AdGuardu noví, zadejte svou e-mailovou adresu a postupujte podle pokynů na obrazovce
  3. Otevřete aplikaci, vyberte požadované umístění a připojte se

## Routery o kterých je známo, že nejsou kompatibilní s AdGuard VPN

- **ASUS**
  - IPsec je pouze v nastavení _VPN serveru_ a ne ve správném nastavení _VPN Fusion_/_VPN Client_
- **FRITZ!Box**
