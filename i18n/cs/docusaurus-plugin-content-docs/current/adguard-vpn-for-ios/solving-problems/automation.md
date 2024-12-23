---
title: Jak nastavit automatizaci AdGuard VPN pro aplikace v iPhonech a iPadech
sidebar_position: 2
sidebar_label: Jak nastavit automatizaci AdGuard VPN
---

V AdGuard VPN pro iOS nejsou žádné výjimky aplikací. Přesto existuje způsob, jak automatizovat AdGuard VPN pro aplikace v iPhonech a iPadech.

## Konfigurace automatického připojení k VPN

Pokud potřebujete VPN pro jednu nebo více aplikací, nastavte AdGuard VPN tak, aby se automaticky zapínala a vypínala při jejich otevření a zavření. Přejděte na kartu Výjimky, vyberte možnost Obecný režim a postupujte podle pokynů. Zde popisujeme, jak vytvořit automatizaci pro Twitter, ale můžete si vybrat jakoukoli jinou aplikaci.

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Stáhněte si [aplikaci *Zkratky*](https://apps.apple.com/us/app/shortcuts/id915249334) z App Store a přejděte do sekce *Automatizace* klepnutím na ikonu hodin ve spodní části obrazovky.
1. Klepněte na tlačítko *Vytvořit osobní automatizaci*, poté vyhledejte *aplikaci* v otevřeném seznamu a klepněte na ni.
1. V dalším okně se ujistěte, že je vybrána možnost *Je otevřeno*, a poté klepnutím na *Vybrat* vyberte aplikaci.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Začněte zadávat název aplikace, (v našem případě je to Twitter) a vyberte ji. Klepněte na *Hotovo* a poté klepněte na *Další* v pravém horním rohu obrazovky. V otevřeném okně klepněte na *Přidat akci*.

![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Začněte zadávat “AdGuard VPN” a vyberte aplikaci AdGuard VPN. V novém okně klepněte na *Nastavit připojení VPN*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Ujistěte se, že je v proměnných uvedeno *Zapnout* připojení VPN *Zapnuto*, a klepněte na *Další*.
1. V dalším okně přesuňte posuvník vedle možnosti *Zeptat se před spuštěním* do neaktivní polohy. Potvrďte svou volbu a klepněte na *Hotovo*.

Nyní máte nový scénář: AdGuard VPN se automaticky zapne při spuštění aplikace Twitter. Nyní je třeba vytvořit další příkaz, který zajistí automatické vypnutí AdGuard VPN při zavření aplikace.

## Konfigurace automatického odpojení od VPN

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Ve stejné aplikaci *Zkratky* začněte vytvářet novou automatizaci: klepněte na *Automatizace* → *Vytvořit osobní automatizaci* → *Aplikace*.
1. Ujistěte se, že je vybráno *Je zavřeno*, a zrušte zaškrtnutí políčka u sousední možnosti. Poté klepněte na *Vybrat*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Začněte zadávat *Twitter* a vyberte aplikaci. Poté klepněte na *Done* v pravém horním rohu obrazovky. Klepněte na *Přidat akci* a vyberte možnost AdGuard VPN.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. V novém okně klepněte na *Nastavit připojení VPN*.
1. Poté klepněte na slovo *Zapnout*, aby se změnilo na slovo *Vypnout*, poté klepněte na *Další* v pravém horním rohu obrazovky.
1. Vypněte možnost *Zeptat se před spuštěním* a potvrďte svůj výběr. Poté klepněte na *Hotovo* v pravém horním rohu obrazovky a proces dokončete.

Hotovo! AdGuard VPN bude nyní na vašem zařízení aktivována pokaždé, když otevřete aplikaci Twitter, a deaktivována, když ji zavřete. Stejný postup můžete zopakovat pro jakoukoli jinou aplikaci.
