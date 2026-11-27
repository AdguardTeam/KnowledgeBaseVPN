---
title: Kurulum ve kaldırma
sidebar_position: 4
---

## Sistem gereksinimleri

**Operating system version**: macOS 12 Monterey or higher

**RAM**: en az 2 GB

**Boş disk alanı**: 120 MB

## Mac için AdGuard VPN nasıl kurulur

1. Mac için AdGuard VPN'i kurmak için [bu bağlantıyı](https://agrd.io/mac_vpn) izleyin veya bir tarayıcı açın, adres çubuğuna *adguard-vpn.com* yazın ve açılan sayfada *İndir* öğesine tıklayın. ![AdGuard VPN'i resmi siteden indirin](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. *AdGuardVPN.dmg* dosyasının indirilmesi bitene kadar bekleyin ve dosyayı *İndirilenler* klasöründe açın.
3. Kurulum programı penceresi açılana kadar bekleyin. İçindeki simgeye çift tıklayın. ![Program kurulum penceresi *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. AdGuard VPN'i ilk başlattığınızda, işletim sistemi ekranda bu uygulamanın internetten indirildiğine dair bir uyarı gösterir. *Aç* öğesine tıklayın.
5. Ardından *Devam et* ve *Kur* öğesine tıklayın.

![Devam et öğesine tıklayın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Kur öğesine tıklayın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Kurulum programının gerekli dosyaları indirmesini bekleyin.

Mac için AdGuard VPN kuruldu!

## How to install AdGuard VPN for Mac from the Mac App Store

1. Open the Mac App Store and search for AdGuard VPN for Mac.
1. Click *Get* → *Install*.

:::note

There are some differences between the Mac App Store version and the standalone version of AdGuard VPN for Mac. [Learn more](https://adguard-vpn.com/kb/adguard-vpn-for-mac/versions/).

:::

### Installation on older versions of macOS

AdGuard VPN for Mac requires macOS 12 Monterey or later. If you’re using macOS 10.15 Catalina, you can still [download and install an older, compatible version](https://agrd.io/adguard_vpn_for_macoscatalina) of the app.

## Sign in to AdGuard VPN for Mac

To use AdGuard VPN for Mac, you need to log into your [AdGuard account](https://adguardaccount.com/). You can sign in with your AdGuard account credentials or with an external account: Apple, Google, or Facebook. If you use an external account, make sure it is bound to the same email address as your AdGuard account. If there is a suitable subscription in your AdGuard account, it will be activated automatically in the desktop app.

Still don’t have an AdGuard account? Create it [here](https://auth.adguardaccount.com/registration.html).

## How to uninstall AdGuard VPN for Mac

### Standart kaldırma

To uninstall AdGuard VPN for Mac, follow two simple steps:

1. *Finder* öğesini açın ve *Programlar* bölümüne gidin.

2. Listeden *AdGuard VPN* öğesini seçin, sağ tıklayın ve ardından *Çöp Kutusu'na Taşı* öğesine tıklayın.

![Standard uninstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

:::note

Even if you delete AdGuard VPN, macOS remembers your sign-in details. If you reinstall the app, you will automatically stay logged in.

If you are selling or giving away your Mac, or simply want to remove your account completely, log out of the app before moving it to *Trash*, or follow the [advanced uninstallation](#advanced-uninstallation) steps below.

:::

### Gelişmiş kaldırma

Sometimes, as a result of incorrect removal or in other rare cases, the standard uninstallation may not be enough. In that case, our support may ask you to perform an advanced uninstall to completely remove AdGuard VPN from your Mac. To do this, do the following:

1. [Standart kaldırma](#how-to-uninstall-adguard-vpn-for-mac) bölümünde açıklanan adımları izleyin.
2. Finder veya Spotlight öğesini açın ve aramaya `Anahtar Zinciri` yazın. ![Gelişmiş kaldırma. Anahtar Zinciri yazın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Bulunan programın simgesine tıklayın ve ara kısmına `com.adguard.mac.vpn` yazın. Arama sonuçlarında böyle bir kayıt varsa silin.
4. Finder veya Spotlight öğesine geri dönün ve `Terminal` öğesine girin. ![Gelişmiş kaldırma. Terminale girin](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Programı açın ve komutu yazın— `defaults delete com.adguard.mac.vpn`.
6. *Boşluk çubuğuna* basın ve başka bir komut yazın — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN has been completely removed from your Mac.

You can learn more about AdGuard VPN for Mac in [this article](/adguard-vpn-for-mac/).

## Related articles

- [Mac App Store vs standalone version](/adguard-vpn-for-mac/versions/)
- [How to install AdGuard VPN on older OS versions](/general/older_os/)
