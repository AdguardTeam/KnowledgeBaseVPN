---
title: Jak nastavit automatizaci AdGuard VPN pro aplikace v iPhonech a iPadech
sidebar_position: 1
sidebar_label: Jak nastavit automatizaci AdGuard VPN
---

AdGuard VPN má sekci *Výjimky* a dva provozní režimy. – *Obecný* a *Selektivní*. V *Obecném režimu* funguje AdGuard VPN všude kromě webů přidaných do výjimek. Naopak v *Selektivním režimu* nefunguje VPN nikde kromě webů uvedených v seznamu výjimek. Všimněte si, že pro každý režim musíte vytvořit samostatný seznam.

Jak jste si mohli všimnout, do sekce *Výjimky* lze přidat pouze webové stránky. Pro nastavení AdGuard VPN pro aplikace je třeba použít jinou funkci. Naše desktopové aplikace mají modul *Dělený tunel* a aplikace pro Android má *Nastavení aplikací*. — tato nastavení umožňují rozhodnout, ve kterých aplikacích má AdGuard VPN běžet.

Jak se však často stává, kvůli řadě technických nuancí není možné takovou užitečnou funkci pro iOS implementovat, alespoň prozatím. Proto vám nabízíme alternativní způsob automatizace AdGuard VPN pro aplikace v iPhonech a iPadech.

## Nastavení automatické aktivace AdGuard VPN

Pokud potřebujete VPN pro jednu nebo více aplikací, nastavte AdGuard VPN tak, aby se automaticky zapínala a vypínala při jejich otevření a zavření. Přejděte na kartu Výjimky, vyberte možnost Obecný režim a postupujte podle pokynů. Zde popisujeme, jak vytvořit automatizaci pro Twitter, ale můžete si vybrat jakoukoli jinou aplikaci.

![Instrukce. Část 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Stáhněte si [aplikaci *Zkratky*](https://apps.apple.com/us/app/shortcuts/id915249334) z App Store a přejděte do sekce *Automatizace* klepnutím na ikonu hodin ve spodní části obrazovky.
2. Klepněte na tlačítko *Vytvořit osobní automatizaci*, poté vyhledejte *aplikaci* v otevřeném seznamu a klepněte na ni.
3. V dalším okně se ujistěte, že je vybrána možnost *Je otevřeno*, a poté klepnutím na *Vybrat* vyberte aplikaci.

![Instrukce. Část 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Začněte zadávat název aplikace, v našem případě je to Twitter a vyberte ji. Poté klepněte na *Hotovo* v pravém horním rohu obrazovky. Poté klepněte na *Další* v pravém horním rohu obrazovky. A v otevřeném okně klepněte na *Přidat akci*.

![Instrukce. Část 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Začněte zadávat “AdGuard VPN” a vyberte aplikaci AdGuard VPN. V novém okně klepněte na *Nastavit připojení VPN*.

![Instrukce. Část 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Ujistěte se, že v proměnných je uvedeno *Zapnout* Připojení VPN *Zapnuto* a klepněte na *Další*.
7. V dalším okně přesuňte posuvník vedle možnosti *Zeptat se před spuštěním* do neaktivní polohy. Potvrďte svou volbu a klepněte na *Hotovo*.

Nyní máte nový scénář: AdGuard VPN se automaticky zapne při spuštění aplikace Twitter. Nyní je třeba vytvořit další příkaz, který zajistí automatické vypnutí AdGuard VPN při zavření aplikace.

## Nastavení automatické deaktivace AdGuard VPN

![Instrukce. Část 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Ve stejné aplikaci *Zkratky* začněte vytvářet novou automatizaci: klikněte na *+* v pravém horním rohu obrazovky a poté na tlačítko *Vytvořit osobní automatizaci*. V otevřeném okně vyberte *Aplikaci*.
2. Ujistěte se, že je vybrána možnost *Je zavřeno*, a zrušte zaškrtnutí políčka pod sousední možností. Poté klepněte na *Vybrat*.

![Instrukce. Část 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Začněte zadávat *Twitter* a vyberte aplikaci. Poté klepněte na *Hotovo* v pravém horním rohu obrazovky. Klepněte na *Přidat akci* a vyberte AdGuard VPN.

![Instrukce. Část 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. V novém okně klepněte na *Nastavit připojení VPN*.
5. Poté klepněte na slovo *Zapnout*, aby se změnilo na slovo *Vypnout*, poté klepněte na *Další* v pravém horním rohu obrazovky.
6. Vypněte možnost *Zeptat se před spuštěním* a potvrďte svůj výběr. Poté klepněte na *Hotovo* v pravém horním rohu obrazovky a proces dokončete.

Hotovo! AdGuard VPN bude nyní na vašem zařízení aktivována pokaždé, když otevřete aplikaci Twitter, a deaktivována, když ji zavřete. Stejný postup můžete zopakovat pro jakoukoli jinou aplikaci.
