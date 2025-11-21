---
title: Instalace a odstranění
sidebar_position: 2
---

## Požadavky na systém

**Verze operačního systému**: macOS 11 Big Sur nebo vyšší

**RAM**: alespoň 2 GB

**Volné místo na disku**: 120 MB

## Jak nainstalovat AdGuard VPN pro macOS

1. Pro instalaci AdGuard VPN pro macOS stačí následovat [tento odkaz](https://agrd.io/mac_vpn) nebo otevřít prohlížeč, do adresního řádku zadat *adguard-vpn.com* a na otevřené stránce kliknout na *Stáhnout*. ![Download AdGuard VPN from the official website](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Počkejte, dokud nebude dokončeno stahování souboru *AdGuardVPN.dmg* a otevřete jej ve složce *Stahování*.
3. Počkejte, až se otevře okno instalačního programu. Dvakrát v něm klikněte na ikonu. ![Program installation window *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Při prvním spuštění aplikace AdGuard VPN se na obrazovce zobrazí upozornění, že tato aplikace byla stažena z internetu. Klikněte na *Otevřít*.
5. Poté klikněte na *Pokračovat* a *Nainstalovat*.

![Click Continue](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Click Install](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Počkejte, až instalační program stáhne potřebné soubory.

AdGuard VPN pro macOS je nainstalována!

### Instalace ve starších verzích macOS

Since version 2.6, AdGuard VPN for Mac no longer supports macOS versions older than Big Sur. However, if you’re using macOS 10.15 Catalina, you can still [download and install an older, compatible version](https://agrd.io/adguard_vpn_for_macoscatalina) of the app.

## Jak odinstalovat AdGuard VPN pro macOS

### Běžná odinstalace

To uninstall AdGuard VPN for Mac, follow two simple steps:

1. Otevřete *Finder* a přejděte do sekce *Programy*.

2. V seznamu vyberte *AdGuard VPN*, klikněte na ni pravým tlačítkem myši a poté klikněte na *Přesunout do koše*.

![Standard uninstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Pokročilá odinstalace

Sometimes, as a result of incorrect removal or in other rare cases, the standard uninstallation may not be enough. In that case, our support may ask you to perform an advanced uninstall to completely remove AdGuard VPN from your Mac. To do this, do the following:

1. Postupujte podle kroků popsaných v části [Běžná odinstalace](#how-to-uninstall-adguard-vpn-for-mac).
2. Otevřete Finder nebo Spotlight a do vyhledávání zadejte `Keychain`. ![Advanced uninstallation. Enter Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Klikněte na ikonu nalezeného programu a do vyhledávání zadejte `com.adguard.mac.vpn`. Pokud je takový záznam ve výsledcích vyhledávání, odstraňte jej.
4. Vraťte se do Finderu nebo Spotlightu a zadejte `Terminal`. ![Advanced uninstallation. Enter Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Otevřete program a zadejte příkaz — `defaults delete com.adguard.mac.vpn`.
6. Stiskněte *Mezerník* a zadejte další příkaz — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN has been completely removed from your Mac.

You can learn more about AdGuard VPN for Mac in [this article](/adguard-vpn-for-mac/overview).
