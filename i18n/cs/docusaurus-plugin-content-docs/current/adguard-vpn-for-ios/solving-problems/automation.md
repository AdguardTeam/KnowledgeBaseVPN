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

![Instrukce. Část 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Instrukce. Část 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Instrukce. Část 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Instrukce. Část 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

Nyní máte nový scénář: AdGuard VPN se automaticky zapne při spuštění aplikace Twitter. Nyní je třeba vytvořit další příkaz, který zajistí automatické vypnutí AdGuard VPN při zavření aplikace.

## Nastavení automatické deaktivace AdGuard VPN

![Instrukce. Část 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Instrukce. Část 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Instrukce. Část 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Hotovo! AdGuard VPN bude nyní na vašem zařízení aktivována pokaždé, když otevřete aplikaci Twitter, a deaktivována, když ji zavřete. Stejný postup můžete zopakovat pro jakoukoli jinou aplikaci. 