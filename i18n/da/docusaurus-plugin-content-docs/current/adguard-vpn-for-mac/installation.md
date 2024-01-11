---
title: Installation og fjernelse
sidebar_position: 2
---

## Systemkrav

**Operativsystemversion:** Minimum macOS 10.15 (64 bit)

**RAM:** Minimum 2 GB

**Ledig diskplads:**: 120 MB

## Sådan installeres AdGuard VPN til Mac

1. For at installere AdGuard VPN til Mac, følg blot [dette link](https://agrd.io/mac_vpn) eller åbn en browser, skriv *adguard-vpn.com* på adressebjælken og klik på den åbnede side på *Download*. ![Download AdGuard VPN fra det officielle websted](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Afvent, at download af filen *AdGuardVPN.dmg* færdiggøres, og åbn den i mappen "Downloads".
3. Afvent, at installationsprogrammets vindue åbnes. Dobbeltklik på ikonet heri. ![Programinstallationsvindue *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Første gang AdGuard VPN startes, vil operativsystemet vise en advarsel på skærmen om, at denne applikation er downloadet fra internet. Klik på *Åbn*.
5. Klik dernæst på *Fortsæt* og *Installér*.

![Klik på Fortsæt](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Klik på Installér](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Afvent at installeren downloader de nødvendige filer.

AdGuard VPN til Mac er installeret!

## Sådan afinstalleres AdGuard VPN til Mac

### Standardafinstallation

Følg to enkle trin for at afinstallere AdGuard VPN til Mac:

1. Åbn "Finder" og gå til afsnittet "Programmer".

2. Vælg *AdGuard VPN* fra listen, højreklik på den, og klik dernæst på *Flyt til Papirkurv*.

![Standardafinstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Avanceret afinstallation

Som følge af forkert fjernelse, eller i andre sjældne tilfælde, kan standardafinstallationen muligvis være utilstrækkelig. I så fald kan vores support bede om, at der udføres en avanceret afinstallation for fuldstændigt at fjerne AdGuard VPN fra Mac'en. Dette gøres på flg. måde:

1. Følg trinene beskrevet i afsnittet ["Standardafinstallation"](#how-to-uninstall-adguard-vpn-for-mac).
2. Åbn "Finder" eller "Spotlight", og skriv `Nøglering` i søgefeltet. ![Avanceret afinstallation. Angiv Nøglering](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Klik på ikonet for det fundne program og skriv `com.adguard.mac.vpn` i søgningen. Findes en sådan post blandt søgeresultaterne, slet den.
4. Gå tilbage til "Finder" eller "Spotlight" og skriv `Terminal`. ![Avanceret afinstallation Start Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Åbn programmet og angiv kommandoen — `defaults delete com.adguard.mac.vpn`.
6. Tryk på *mellemrumstasten* og angiv en ny kommando — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN er hermed fuldstændig fjernet fra Mac'en.

Man kan læse mere om AdGuard VPN til Mac i [denne artikel](/adguard-vpn-for-mac/overview).
