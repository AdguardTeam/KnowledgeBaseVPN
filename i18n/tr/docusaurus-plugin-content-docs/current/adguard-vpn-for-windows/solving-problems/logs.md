---
title: Günlükler nasıl toplanır ve gönderilir
sidebar position: 1
---

Windows için AdGuard VPN kullanırken herhangi bir sorunla karşılaşırsanız, bizi bu konuda bilgilendirebilirsiniz. Sorunları daha hızlı çözmemize yardımcı oldukları için uygulama günlüklerini de gönderirseniz çok memnun oluruz.

## Standart günlükler

Varsayılan olarak, Windows için AdGuard VPN, uygulamanın çalışan işlemleri hakkında temel veri toplama olan standart günlük kayıt düzeyini kullanır. Bu günlükleri göndermek için sonraki adımları izleyin:

1. Windows için AdGuard VPN'i açın ve mümkünse hataya neden olan işlemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.

1. **Destek** (yukarıdaki menüde) → **Hata bildir** öğesine tıklayın.

1. Açılan formda, geri bildirim için e-posta adresinizi girin ve bulunan hatayı, bu hatanın oluştuğu zaman da dahil olmak üzere açıklayın. Sorunu yeniden oluşturamıyorsanız, en son ne zaman oluştuğunu olabildiğince doğru bir şekilde belirtin.

1. **Detaylı sistem bilgisi gönder** öğesinin yanında bir onay işareti vardır; bu, bir rapor gönderdiğinizde günlükleri de göndereceğiniz anlamına gelir.

:::note

Herhangi bir nedenle bize günlükleri başka bir şekilde göndermeniz daha uygunsa, bunları kendiniz dışa aktarabilirsiniz. To do this, select **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

:::

## Genişletilmiş günlükler

Çoğu durumda, olası hataların izini sürmek için varsayılan günlük kayıt düzeyi yeterlidir. Ancak, cihaz ve bağlantılar hakkında daha ayrıntılı teknik bilgilerin gerekli olduğu durumlar vardır ve bu durumda destek ekibimiz, genişletilmiş günlük kayıt düzeyini etkinleştirmenizi ister. Bu tür günlükleri göndermek için şu adımları izleyin:

1. Windows için AdGuard VPN'i açın ve yukarıdaki menüden **Ayarlar** → **Uygulama ayarları** → **Gelişmiş ayarlar** → **Günlük kayıt düzeyi** → **Genişletilmiş** öğesini seçin.

1. Hataya neden olan işlemleri tekrarlayın ve meydana geldiği zamana dikkat edin.

1. Switch the logging level back to **Default**.

1. **Destek** (yukarıdaki menüde) → **Hata bildir** öğesini seçin.

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. Sorunu yeniden oluşturamıyorsanız, en son ne zaman oluştuğuna dair olabildiğince açık olun.

1. **Detaylı sistem bilgisi gönder** öğesinin yanında bir onay işareti olduğundan emin olun ve **Gönder** öğesine tıklayın.

:::note

If for some reason it is more convenient for you to send us logs in another way, you can export them yourself. To do this, select **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

:::

## İzleme günlükleri

Bazen destek ekibimiz sizden izleme günlüklerini göndermenizi isteyebilir. Bunu yapmak için aşağıdaki adımları izlemeniz gerekir:

1. Tepsi menüsündeki AdGuard VPN simgesine sağ tıklayın ve **AdGuard VPN'den çık** öğesini seçin.

    ![Çıkış *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/exit.png)

    Uyarı mesajını görürseniz, hizmeti durdurmayı kabul edin.

    ![Dikkat *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/attention.png)

1. Konsolu açın (başlat paneline `cmd` yazın).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Sorunu yeniden oluşturun. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

Don’t worry if your log file is large. We need to know as many details as possible in order to fix your problem.

:::note

Günlükleri dışa aktarmaya çalışırken herhangi bir sorunla karşılaşırsanız alternatif bir yol vardır. Lütfen aşağıdaki adımları izleyin:

1. Explorer uygulamasını açın

1. Arama kutusuna `%programdata%/adguardvpn` adresini yapıştırın

1. **Günlükler** adlı klasörü bulun

1. Klasörü arşivleyin

1. Bunu destek ekibimize gönderin

:::
