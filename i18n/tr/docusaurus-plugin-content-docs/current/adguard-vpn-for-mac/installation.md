---
title: Kurulum ve kaldırma
sidebar_position: 2
---

## Sistem gereksinimleri

**İşletim sistemi sürümü**: macOS 10.15 (64-bit) veya üstü

**RAM**: en az 2 GB

**Boş disk alanı**: 120 MB

## Mac için AdGuard VPN nasıl kurulur

1. Mac için AdGuard VPN'i kurmak için [bu bağlantıyı](https://agrd.io/mac_vpn) izleyin veya bir tarayıcı açın, adres çubuğuna *adguard-vpn.com* yazın ve açılan sayfada *İndir* öğesine tıklayın. ![AdGuard VPN'i resmi siteden indirin](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. *AdGuardVPN.dmg* dosyasının indirilmesi bitene kadar bekleyin ve dosyayı "İndirilenler" klasöründe açın.
3. Kurulum programı penceresi açılana kadar bekleyin. İçindeki simgeye çift tıklayın. ![Program kurulum penceresi *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. AdGuard VPN'i ilk başlattığınızda, işletim sistemi ekranda bu uygulamanın internetten indirildiğine dair bir uyarı gösterir. *Aç* öğesine tıklayın.
5. Ardından *Devam et* ve *Kur* öğesine tıklayın.

![Devam et öğesine tıklayın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Kur öğesine tıklayın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Kurulum programının gerekli dosyaları indirmesini bekleyin.

Mac için AdGuard VPN kuruldu!

## Mac için AdGuard VPN nasıl kaldırılır

### Standart kaldırma

Mac için AdGuard VPN'i kaldırmak için iki basit adımı izleyin:

1. "Finder" öğesini açın ve "Programlar" bölümüne gidin.

2. Listeden *AdGuard VPN* öğesini seçin, sağ tıklayın ve ardından *Çöp Kutusu'na Taşı* öğesine tıklayın.

![Standart kaldırma](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Gelişmiş kaldırma

Bazen hatalı kaldırma sonucunda veya diğer nadir durumlarda standart kaldırma yeterli olmayabilir. Bu durumda, desteğimiz AdGuard VPN'i Mac'inizden tamamen kaldırmak için gelişmiş bir kaldırma işlemi gerçekleştirmenizi isteyebilir. Bunu yapmak için aşağıdakileri yapın:

1. ["Standart kaldırma"](#how-to-uninstall-adguard-vpn-for-mac) bölümünde açıklanan adımları izleyin.
2. "Finder" veya "Spotlight" öğesini açın ve aramaya `Anahtar Zinciri` yazın. ![Gelişmiş kaldırma. Anahtar Zinciri yazın](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Bulunan programın simgesine tıklayın ve ara kısmına `com.adguard.mac.vpn` yazın. Arama sonuçlarında böyle bir kayıt varsa silin.
4. "Finder" veya "Spotlight" öğesine geri dönün ve `Terminal` öğesine girin. ![Gelişmiş kaldırma. Terminale girin](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Programı açın ve komutu yazın— `defaults delete com.adguard.mac.vpn`.
6. *Boşluk çubuğuna* basın ve başka bir komut yazın — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN, Mac'inizden tamamen kaldırıldı.

[Bu makalede](/adguard-vpn-for-mac/overview) Mac için AdGuard VPN hakkında daha fazla bilgi edinebilirsiniz.
