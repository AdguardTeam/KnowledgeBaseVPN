---
title: Kurulum ve kaldırma
sidebar_position: 2
---

## Sistem gereksinimleri

AdGuard VPN can only be installed on devices with **Microsoft Windows 11, 10, 8.1, 8, and Vista SP2 (web-based only)**.

## Windows için AdGuard VPN kurulumu

Windows için AdGuard VPN'i kurmak için [sitemizi](https://adguard-vpn.com/welcome.html) ziyaret edin ve *İndir* düğmesine tıklayın. Ardından `adguardVPNInstaller.exe` indirilecektir. Kurulum programını çalıştırın ve talimatlarını izleyin. İşlem bir dakikadan az sürer.

Ardından, SKLS ve Gizlilik politikasının şartlarını kabul etmek için kutuyu işaretlemeniz gerekir. Ve kurulumun son adımında AdGuard hesabınız veya sosyal ağlar (Google, Apple, Facebook) aracılığıyla yetkilendirme yapmanız istenecektir.

## Windows için AdGuard VPN kaldırma

AdGuard VPN'i bilgisayarınızdan kaldırmaya karar verirseniz, aşağıda listelenen üç seçenekten birini kullanın:

- *Başlat* öğesine tıklayın ve açılan listede AdGuard VPN'i bulun. Sağ tıklayın ve *Kaldır* öğesini seçin.
- *Başlat* → *Ayarlar* → *Uygulamalar* → *Uygulamalar ve özellikler* öğesine tıklayın. Listede AdGuard VPN'i bulun, tıklayın ve *Kaldır* öğesini seçin.
- *Denetim Masası'nı açın*, ardından *Programlar* → *Programlar ve Özellikler* → *Programı kaldır veya değiştir* öğesine tıklayın. Listede AdGuard VPN'i bulun, sağ tıklayın ve *Kaldır* öğesini seçin.

### Gelişmiş kaldırma {#advanced}

In case regular uninstall doesn’t work for any reason, you can try to use an advanced method. Her şeyden önce, geliştiricilerimiz tarafından oluşturulan [kaldırma aracını indirmeniz](https://cdn.adtidy.org/distr/windows/Uninstall_Utility.zip) gerekir. Arşivi bilgisayarınızdaki herhangi bir klasöre çıkarın, **Adguard.UninstallUtility.exe** dosyasını çalıştırın ve uygulamanın cihazınızda değişiklik yapmasına izin verin. Ardından aşağıdaki talimatı izleyin:

1. *AdGuard VPN* ve *Standart* kaldırma türünü seçin, ardından *Kaldır* öğesine tıklayın:

    ![Standart kaldırma *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Uyarı penceresi açıldığında *Tamam* öğesine tıklayın:

    ![Standart kaldırma uyarısı *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Kaldırma işlemi bitene kadar bekleyin — **Kaldırma işlemi tamamlandı** ifadesi görünecek ve bilgisayarınızı yeniden başlatmanız istenecektir:

    ![Kaldırma işlemi tamamlandı *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Sonraki adımları yalnızca ilk iki adımı gerçekleştirmek herhangi bir nedenle yeterli olmadıysa izleyin. Gelişmiş kaldırma talimatlarının 3-4. adımlarını kullanmadan önce destek ekibimizle iletişime geçmenizi şiddetle öneririz.

    :::

1. *AdGuard VPN* ve *Genişletilmiş* kaldırma türünü seçin, ardından *Kaldır* öğesine tıklayın. Pencere isteminde *Evet, devam et* öğesine tıklayın:

    ![Genişletilmiş kaldırma *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Uyarı penceresi açıldığında *Tamam* öğesine tıklayın:

    ![Genişletilmiş kaldırma uyarısı *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Kaldırma işlemi bitene kadar bekleyin — **Kaldırma işlemi tamamlandı** ifadesi görünecek ve bilgisayarınızı yeniden başlatmanız istenecektir:

    ![Kaldırma işlemi tamamlandı *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN başarıyla kaldırıldı!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. Bunu yapmak için, aşağıdaki talimatları izleyin:

1. Başlat menüsünden *cmd* yazarak Komut İstemi'ni açın.
2. Use `/console` to run the uninstaller in console mode, without the interactive UI. Eğer `/console` modu aktif değilse aşağıdaki tüm komut satırı parametreleri göz ardı edilecektir.
3. Windows için AdGuard'ı kaldırmak için `/vpn` parametresini kullanın. Bu şöyle görünmelidir:

   `Adguard.UninstallUtility.exe /console /vpn`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

Başarılı bir kaldırma işlemi için `/console` ve `/vpn` parametrelerinin kullanılması gereklidir. `/advanced` ve `/settings` parametreleri isteğe bağlıdır.

:::
