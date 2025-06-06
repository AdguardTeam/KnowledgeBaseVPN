---
title: Günlükler nasıl toplanır ve gönderilir
sidebar position: 1
---

Windows için AdGuard VPN kullanırken herhangi bir sorunla karşılaşırsanız, bizi bu konuda bilgilendirebilirsiniz. Sorunları daha hızlı çözmemize yardımcı oldukları için uygulama günlüklerini de gönderirseniz çok memnun oluruz.

## Günlüklerin toplanması

### Standart günlükler

Varsayılan olarak, Windows için AdGuard VPN, uygulamanın çalışan işlemleri hakkında temel veri toplama olan standart günlük kayıt düzeyini kullanır. Günlükleri göndermeden önce, lütfen Windows için AdGuard VPN'i açın ve mümkünse hataya neden olan eylemleri tekrarlayın. Bu hatanın oluştuğu tam zamana dikkat edin.

### Genişletilmiş günlükler

Çoğu durumda, olası hataların izini sürmek için varsayılan günlük kayıt düzeyi yeterlidir. Ancak, cihaz ve bağlantılar hakkında daha ayrıntılı teknik bilgilerin gerekli olduğu durumlar vardır ve bu durumda destek ekibimiz, genişletilmiş günlük kayıt düzeyini etkinleştirmenizi ister. Bu tür günlükleri göndermek için şu adımları izleyin:

1. Windows için AdGuard VPN'i açın ve yukarıdaki menüden **Ayarlar** → **Uygulama ayarları** → **Gelişmiş ayarlar** → **Günlük kayıt düzeyi** öğesini seçin.

1. **Günlük kayıt düzeyi** bölümünde, **Her şeyi kaydet** öğesini seçin.

    ![Günlük kayıt düzeyi *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/logging.jpeg)

1. Hataya neden olan işlemleri tekrarlayın ve meydana geldiği zamana dikkat edin.

1. Kayıt düzeyini **Varsayılan olarak tekrar kaydet** olarak değiştirin.

### İzleme günlükleri

Bazen destek ekibimiz sizden izleme günlüklerini göndermenizi isteyebilir. Bunu yapmak için aşağıdaki adımları izlemeniz gerekir:

1. Tepsi menüsündeki AdGuard VPN simgesine sağ tıklayın ve **AdGuard VPN'den çık** öğesini seçin.

    ![Çıkış *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/exit.png)

    Uyarı mesajını görürseniz, hizmeti durdurmayı kabul edin.

    ![Dikkat *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/attention.png)

1. Konsolu açın (başlat paneline `cmd` yazın).

1. Uygulmayı 64 bit Windows kullanıyorsanız `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` komutuyla ve 32 bit kullanıyorsanız `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` komutuyla çalıştırın.

1. Sorunu yeniden oluşturun. Sorunu yeniden oluşturduğunuz zamanı tam olarak not etmenizi önemle tavsiye ederiz: bu, destek ekibimizin ilgili günlük girdilerini bulmasına ve sorunu daha hızlı çözmesine yardımcı olur.

1. Kaydedilen günlükleri dışa aktarın: **Destek** → **Günlükleri ve sistem bilgisini dışa aktar**.

Günlük dosyanız büyükse endişelenmeyin. Sorununuzu çözebilmek için mümkün olduğunca çok ayrıntı bilmemiz gerekiyor.

## Günlükleri gönderme

Günlükleri destek ekibimize göndermek için lütfen sonraki adımları izleyin:

1. Yukarıdaki menüden **Destek** → **Hata bildir** öğesine tıklayın.

    ![Hata bildir *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/support_report.jpeg)

1. Açılan forma e-posta adresinizi girin ve bulduğunuz hatayı, meydana geldiği zaman da dahil olmak üzere açıklayın. Sorunu yeniden oluşturamıyorsanız, en son ne zaman oluştuğuna dair olabildiğince açık olun.

    ![Bildir *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/report_bug.png)

1. **Detaylı sistem bilgisi gönder** öğesinin yanında bir onay işareti vardır; bu, bir rapor gönderdiğinizde günlükleri de göndereceğiniz anlamına gelir.

> Herhangi bir nedenle bize günlükleri başka bir şekilde göndermeniz daha uygunsa, bunları kendiniz dışa aktarabilirsiniz. Bunu yapmak için **Destek** → **Günlükleri ve sistem bilgisini dışa aktar** öğesine gidin.

![Dışa aktar *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/export.jpeg)

**Not**: Günlükleri dışa aktarmaya çalışırken herhangi bir sorunla karşılaşırsanız alternatif bir yol vardır. Lütfen aşağıdaki adımları izleyin:

1. Explorer uygulamasını açın

1. Arama kutusuna `%programdata%/adguardvpn` adresini yapıştırın

1. **Günlükler** adlı klasörü bulun

1. Klasörü arşivleyin

1. Bunu destek ekibimize gönderin
