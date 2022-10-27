---
title: Kurulum ve kaldırma
sidebar_position: 2
---

## Sistem gereksinimleri

**İşletim sistemi sürümü**: macOS 10.12 (64 bit) veya üstü

**RAM**: en az 2 GB

**Boş disk alanı**: 120 Mb


## Mac için AdGuard VPN nasıl yüklenir?

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click "Try for free".

![AdGuard VPN'i resmi siteden indirin](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. *AdGuardVPN.dmg* dosyasının indirilmesi bitene kadar bekleyin ve dosyayı "İndirilenler" klasöründe açın.

3. Kurulum programı penceresi açılana kadar bekleyin. İçindeki simgeye çift tıklayın.

![Program yükleme penceresi](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. AdGuard VPN'i ilk başlattığınızda, işletim sistemi ekranda bu uygulamanın internetten indirildiğine dair bir uyarı gösterir. *Aç* öğesine tıklayın.

5. Ardından *Devam et* ve *Kur* öğesine tıklayın.

![Devam et öğesine tıklayın](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![Yükle öğesine tıklayın](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Kurulum programının gerekli dosyaları indirmesini bekleyin.

Mac için AdGuard VPN kuruldu!


## Mac için AdGuard VPN nasıl kaldırılır?

### Standart kaldırma

Mac için AdGuard VPN'i kaldırmak için iki basit adımı takip edin:

1. Open "Finder" and go to the "Programs" section.

2. Select *AdGuard VPN* from the list, right-click on it and then click *Move to Trash*.

![Standart kaldırma](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Gelişmiş kaldırma

Sometimes, as a result of incorrect removal, or in other rare cases, the standard uninstallation may not be enough. Ardından destek hizmeti, AdGuard VPN'i Mac'inizden tamamen kaldırmak için gelişmiş bir kaldırma işlemi yapmanızı isteyebilir. Bunu yapmak için aşağıdakileri yapın:

1. Follow the steps described in the section ["Standard uninstallation"](#how-to-uninstall-adguard-vpn-for-mac).

2. Open "Finder" or "Spotlight" and enter `Keychain` in the search.

![Gelişmiş kaldırma. Enter Keychain](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Bulunan programın simgesine tıklayın ve ara kısmına `com.adguard.mac.vpn` yazın. Arama sonuçlarında böyle bir kayıt varsa silin.

4. "Finder" veya "Spotlight" öğesine geri dönün ve `Terminal` girin.

![Gelişmiş kaldırma. Terminale girin](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Programı açın ve komutu girin — `defaults delete com.adguard.mac.vpn`.

6. Press *Space bar* and enter another command — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN, Mac'inizden tamamen kaldırıldı.

[Bu makalede](/adguard-vpn-for-mac/overview.md) Mac için AdGuard VPN hakkında daha fazla bilgi edinebilirsiniz.