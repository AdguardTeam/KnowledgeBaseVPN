---
title: Jak nastavit automatizaci AdGuard VPN pro aplikace v iPhonech a iPadech
sidebar_position: 2
sidebar_label: Jak nastavit automatizaci AdGuard VPN
---

V AdGuard VPN pro iOS nejsou žádné výjimky aplikací. Přesto existuje způsob, jak automatizovat AdGuard VPN pro aplikace v iPhonech a iPadech.

## Konfigurace automatického připojení k VPN

Pokud potřebujete VPN pro jednu nebo více aplikací, nastavte AdGuard VPN tak, aby se automaticky zapínala a vypínala při jejich otevření a zavření. Zde je návod, jak vytvořit automatizaci pro tento účel.

1. Stáhněte si [aplikaci *Zkratky*](https://apps.apple.com/us/app/shortcuts/id915249334) z App Store a přejděte do sekce *Automatizace* klepnutím na ikonu hodin ve spodní části obrazovky.

1. Klepněte na *Nová automatizace* nebo na tlačítko + (pokud již máte jinou automatizaci). V otevřeném seznamu *Osobní automatizace* přejděte na položku *Aplikace* a klepněte na ni.

    ![New Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/newautomation.png)

1. Zaškrtněte políčko *Je otevřeno*, vyberte možnost *Okamžitě spustit* (pokud nechcete spuštění VPN potvrzovat ručně) a posuvník vedle možnosti *Před spuštěním se zeptat* ponechte v neaktivní poloze.

    ![Is Opened *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isopened.png)

1. Klepněte na *Vybrat* vedle položky *Aplikace*, vyberte aplikaci, pro kterou chcete VPN nastavit, klepněte na *Hotovo* a na *Další*.

    ![App *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/app.png)

1. V části *Začínáme* klepněte na položku *Nová prázdná automatizace*, vyhledejte AdGuard VPN, klepněte na *Nastavit připojení VPN*, vyberte možnost *Zapnout připojení VPN* a klepněte na *Hotovo*.

    ![Blank Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/blankautomation.png) ![Set VPN connection *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/setvpnconnection.png) ![Turn VPN connection On *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionon.png)

Nyní bude AdGuard VPN automaticky povolena při otevření aplikace, pro kterou jste nastavili automatizaci. Pokud chcete, můžete vytvořit další příkaz, který zajistí automatické vypnutí AdGuard VPN při ukončení aplikace.

## Konfigurace automatického odpojení od VPN

1. Ve stejné aplikaci *Zkratky* začněte vytvářet novou automatizaci: klepněte na tlačítko +, přejděte na položku a klepněte na *Aplikace* v seznamu.

    ![Plus *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/plus.png)

1. Vyberte políčko *Je otevřeno*, vyberte možnost *Okamžitě spustit* a posuvník vedle možnosti *Před spuštěním se zeptat* ponechte v neaktivní poloze.

    ![Is Closed *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isclosed.png)

1. Klepněte na *Vybrat* vedle položky *Aplikace*, vyberte aplikaci, pro kterou chcete VPN nastavit (v našem případě Instagram), klepněte na *Hotovo* a na *Další*.

1. V části *Začínáme* klepněte na položku *Nová prázdná automatizace*, vyhledejte AdGuard VPN, klepněte na *Nastavit připojení VPN*, vyberte možnost *Vypnout připojení VPN* a klepněte na *Hotovo*.

    ![Turn VPN connection Off *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionoff.png)

Hotovo! AdGuard VPN se nyní ve vašem zařízení vypne pokaždé, když ukončíte aplikaci, pro kterou jste nastavili automatizaci. Stejný postup můžete zopakovat pro jakoukoli jinou aplikaci.

![Done *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/done.png)
