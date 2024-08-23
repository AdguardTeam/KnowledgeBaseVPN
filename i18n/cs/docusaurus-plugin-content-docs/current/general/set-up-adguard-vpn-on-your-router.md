---
title: Jak nastavit AdGuard VPN na routeru
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs, smart media devices, and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

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

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. Zadejte přihlašovací údaje, které jste vytvořili v kroku 3.

   ![Enter the credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Připojte zařízení k routeru.

:::note

Pokud chcete změnit umístění serveru VPN, musíte aktualizovat nastavení routeru.

:::

## Proč může být nastavení AdGuard VPN na vašem routeru užitečné

- S AdGuard VPN na vašem routeru nemá poskytovatel VPN ani nikdo jiný přístup k vaší internetové aktivitě
- Instalace AdGuard VPN na váš router zabezpečí celou vaši síť, což znamená, že všechna zařízení k ní připojená jsou chráněná
- You can enhance security and protect your data on devices where it’s not possible to install AdGuard VPN apps — smart TVs, smart media devices, and game consoles

## Zařízení, která lze připojit k routeru s AdGuard VPN

- **PlayStation, Xbox, and Nintendo Switch**: To enjoy seamless online gaming and enhanced security on PS4, PS5, Xbox One, Xbox Series, and Nintendo Switch, [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router) and connect your console to it

- **Apple TV**: Postupujte podle pokynů [nastavení AdGuard VPN na vašem routeru](#how-to-set-up-adguard-vpn-on-your-router) a poté připojte Apple TV

- **Chromecast**:

  **Pro Gen 4:** Jednoduše si stáhněte a nainstalujte [AdGuard VPN z Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Pro Gen 3:** Postupujte podle našeho průvodce [nastavení AdGuard VPN na vašem routeru](#how-to-set-up-adguard-vpn-on-your-router). Zkontrolujte, zda je TV a chytrý telefon, tablet nebo počítač připojeny ke stejné síti

  Pro **Android TV** nemusíte nastavovat AdGuard VPN na routeru — máme speciální verzi pro Android TV. Postupujte podle následujících kroků:

  1. Nainstalujte si [AdGuard VPN z Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) do své Android TV
  2. Pokud již máte AdGuard účet, přihlaste se pomocí svých přihlašovacích údajů. Pokud jste v AdGuardu noví, zadejte svou e-mailovou adresu a postupujte podle pokynů na obrazovce
  3. Otevřete aplikaci, vyberte požadované umístění a připojte se

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
