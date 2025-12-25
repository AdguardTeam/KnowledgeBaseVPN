---
title: Obecné nastavení většiny routerů
sidebar_position: 1
---

Instalace AdGuard VPN přímo na váš router umožňuje všem zařízením ve vaší síti využívat soukromý a bezpečný přístup k internetu — není potřeba žádná samostatná aplikace. Postupujte podle tohoto návodu a přidejte svůj router do AdGuard VPN, vygenerujte přihlašovací údaje a připojte svá zařízení v několika jednoduchých krocích.

:::note

Pokud používáte router MikroTik nebo Keenetic, podívejte se na speciální návody k nastavení níže:

- [Jak nastavit AdGuard VPN na routerech MikroTik](/adguard-vpn-for-routers/installation/mikrotik.md)

- [Jak nastavit AdGuard VPN na routerech Keenetic](/adguard-vpn-for-routers/installation/keenetic.md)

:::

## Možnosti instalace

Existují dva hlavní způsoby, jak spustit AdGuard VPN na routeru:

1. Profil IPSec

   - Snadné nastavení, podporováno mnoha routery
   - Omezení: není k dispozici v Rusku, pouze omezený počet umístění VPN (USA, Německo, Velká Británie, Nizozemsko, Finsko) a žádná podpora pro výjimky

2. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

   - Pokročilé nastavení, které odemkne všechny funkce AdGuard VPN, včetně přístupu ke všem umístěním a výjimkám webových stránek (výjimky aplikací nejsou k dispozici)
   - Vyžaduje více technických znalostí
   - U routerů s méně výkonnými procesory může být rychlost připojení omezena na 30-100 Mb/s

## Získání přihlašovacích údajů AdGuard VPN

Než budete moci připojit svůj router k AdGuard VPN, musíte si v účtu AdGuard vygenerovat jedinečné přihlašovací údaje. Tyto přihlašovací údaje zahrnují adresu serveru, uživatelské jméno a heslo, které budete později používat při konfiguraci routeru.

1. Ve svém [AdGuard účtu](https://auth.adguardaccount.com/login.html) vyberte AdGuard VPN.

2. V části _Zařízení_ klikněte na _Přidat router_.

   ![Add router \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Vyberte požadované umístění serveru VPN a vygenerujte přihlašovací údaje.

   ![Generate credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

## Obecné nastavení většiny routerů

Většinu moderních routerů, které podporují IKEv2/IPSec, lze nakonfigurovat s AdGuard VPN v několika málo krocích. Jakmile budete mít připravené přihlašovací údaje, postupujte podle těchto obecných pokynů k vytvoření připojení VPN na vašem routeru.

:::note

Další kroky se mohou lišit v závislosti na vašem routeru. Jako příklad jsme použili router Keenetic.

:::

1. Otevřete stránku pro správu routeru

2. Přejděte do nastavení routeru

3. Povolte _klienta VPN_ a klikněte na _Přidat server VPN_

4. Vyberte možnost IPsec-client (u některých značek routerů se může nazývat IKEv2, nikoli L2TP/IPsec)

5. Zadejte přihlašovací údaje, které jste vytvořili.

   ![Enter the credentials \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

   :::note

   Do pole _adresa serveru_ zadejte _IP adresu_ ze svého účtu AdGuard.

   :::

6. Připojte zařízení k routeru.

:::note

Pokud chcete změnit umístění serveru VPN, musíte aktualizovat nastavení routeru.

:::

## Routery, o kterých je známo, že nejsou kompatibilní s AdGuard VPN

Níže jsou uvedeny routery, u kterých jsou v současné době známy problémy s kompatibilitou:

### ASUS

Routery ASUS nepodporují protokol IKEv2/IPsec, takže je nelze nastavit pomocí výše uvedené obecné metody. Routery s vlastním firmware Asuswrt-Merlin však mohou nainstalovat **AdGuard VPN CLI**, což plně podporuje metodu instalace s CLI.

### FRITZ!Box

Routery FRITZ!Box nepodporují IKEv2/IPsec a kvůli uzavřenému firmwaru na nich není možné nainstalovat nebo spustit AdGuard VPN CLI.
