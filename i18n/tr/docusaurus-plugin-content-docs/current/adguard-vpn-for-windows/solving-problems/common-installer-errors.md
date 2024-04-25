---
title: Yaygın kurulum programı hataları
sidebar_position: 2
---

Bu makale, Windows için AdGuard VPN kurarken karşılaşabileceğiniz en yaygın hatalardan bazılarını ve bunları çözmenin olası yollarını özetlemektedir.

### Hata 5: Erişim Reddedildi {#error-5}

Gerekli izinler verilmemişse bu hata mesajı görüntülenir. AdGuard VPN kurulum programının, kurma işlemini düzgün bir şekilde tamamlamak için ihtiyaç duyduğu izinlere sahip olmamasının birkaç farklı nedeni olabilir. Aşağıdaki adımları deneyebilirsiniz:

- Antivirüslerinizi geçici olarak devre dışı bırakın. Bazıları, ayarlarının kısıtlayıcılığına bağlı olarak kuruluma müdahale edebilir.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Bilgisayarınızı yeniden başlatın. Bazen izin sorunları geçicidir ve bilgisayarı yeniden başlatarak çözülebilir.

### Hata 112: Disk dolu, Hata 1632: Geçici klasör dolu veya erişilemiyor {#error-112}

Bunlar çok benzer çözümlere sahip iki farklı hatadır. Adlarından da anlaşılacağı gibi, AdGuard VPN kurulum programı, kurulumu tamamlamak için yeterli disk alanı bulamadı. Sorunu çözmek için deneyebileceğiniz birkaç şey var:

- AdGuard VPN'i kurmaya çalıştığınız sürücüden bazı programları kaldırın veya gereksiz dosyaları silin.

- Malwarebytes'in ücretsiz bir yazılımı olan [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/) yazılımını indirin, kurun ve çalıştırın. Diğer şeylerin yanı sıra, sisteminizi yanlış bir şekilde kaldırılan programlar ve benzerlerinden sonra kalan her türlü fazladan "artık" dosyalardan temizler. Biraz disk alanı temizlemeye yardımcı olur.

- Bilgisayarınızı yeniden başlatın. Bazen geçici dosyalar önemli miktarda disk alanı kaplayabilir ve PC'nizi yeniden başlatmak bunlardan kurtulmanın en güvenilir yoludur.

### Hata 1601: Windows Installer Hizmetine Erişilemiyor {#error-1601}

Bunun, Hata 1603'ün belirli bir alt türü olduğunu söyleyebilirsiniz. Olası çözümler benzerdir:

- Microsoft Installer hizmetini başlatın ve yeniden kaydettirin. Bu biraz uğraş gerektirir.

    1. *Win + R* tuşlarına basın ve **services.msc** yazın.
    1. Listeden *Windows Installer* öğesini bulun ve çift tıklayın.
    1. *Hizmet durumu* altındaki *Başlat* düğmesine basın ve *Tamam* öğesine basın. Hizmet durumu **çalışıyor** ise, önce *Durdur* öğesine ve ardından *Başlat* öğesine tıklamalısınız.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- PC'yi yeniden başlatın ve kurulumu baştan başlatın. Bazen sorunu çözmek için bu yeterli olur.

### Hata 1602: Kullanıcı tarafından iptal edildi {#error-1602}

Bu hata kodunu aldıysanız, kurma işlemini bir şekilde elle kesintiye uğratmış olabilirsiniz. Yapabileceğiniz şey:

- Kurulum programı penceresini kapatmayın. Kurulum tamamlandığında otomatik olarak kapanır.

- Kurma sırasında bir diyalog penceresi açılırsa, kurulum programına gerekli izinleri vermek için "Evet" öğesine basın. "Hayır" öğesine tıklandığında kurulum iptal edilir.

- Kurulum devam ederken başka işlemler başlatmayın.

### Hata 1603: Kurulum sırasında kritik hata oluştu {#error-1603}

Bu hata kulağa gerçekte olduğundan daha endişe verici geliyor. Gerçekte bu, birçok farklı nedeni olabilen oldukça genel bir hatadır ve bazıları kolayca düzeltilebilir. Aşağıdaki çözümleri deneyin:

- *Win* tuşuna basın, *Komut İstemi* öğesini arayın ve çalıştırın. Orada, `sfc /scannow` yazın ve *Enter* düğmesine basın.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Özel [kaldırma aracımızı](/adguard-vpn-for-windows/installation#advanced) kullanarak AdGuard VPN'i kaldırın ve ardından kurulumu tekrarlayın.

- Microsoft Installer hizmetini başlatın ve yeniden kaydettirin. Bu biraz uğraş gerektirir.

    1. *Win + R* tuşlarına basın ve **services.msc** yazın.
    1. Listeden *Windows Installer* öğesini bulun ve çift tıklayın.
    1. *Hizmet durumu* altındaki *Başlat* düğmesine basın ve *Tamam* öğesine basın. Hizmet durumu **çalışıyor** ise, önce *Durdur* öğesine ve ardından *Başlat* öğesine tıklamalısınız.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Kurulum için sürücüde tam izinleri alın. Dosya konumunda tam izinlere sahip olmadığınız için 1603 hatasının oluşması olasıdır. Ayrıca diğer bazı çözümler kadar kolay değildir:

    1. *Dosya Gezgini* öğesini açın, kurulum konumunu içeren sürücüye sağ tıklayın ve *Özellikler* öğesini seçin.
    1. *Güvenlik* sekmesine gidin ve *Düzenle* öğesine tıklayın.
    1. *SYSTEM* öğesine tek tıklayın ve *İzin ver* kutusundaki her öğenin *SİSTEM için izinler* işaretli olduğundan emin olun (işaretlenebilirse). Aynı kontrolü *Administrators* için de yapın.
    1. *Özellikler* uyarı kutusuna geri dönmek için *Tamam* öğesine tıklayın. Ardından *Gelişmiş* öğesine tıklayın.
    1. *İzinleri Değiştir* öğesine tıklayın.
    1. *İzinler* sekmesinde, *Yöneticiler* öğesine çift tıklayın.
    1. *Uygulandığı öğe* alanı için *Bu klasör, alt klasörler ve dosyalar* öğesini seçin ve mevcut tüm *Temel izinleri* işaretleyin. Bundan sonra *Tamam* öğesine basın.
    1. *SYSTEM* için yukarıdaki (madde 7'den itibaren) aynı işlemi yapın.
    1. Sonuna kadar *Tamam* öğesine tıklayın. AdGuard'ı yeniden kurmayı deneyin.

### Hata 1618: Başka bir kurulum zaten devam ediyor {#error-1618}

Bu hata, AdGuard VPN kurulum programının birden fazla örneğini aynı anda çalıştırmaya çalışırken görünür. Bu hatayı alırsanız yapmanız gerekenler:

- PC'yi yeniden başlatın ve kurulum programını tekrar başlatın. Bilgisayarı yeniden başlattığınızda, kurulum programının tüm kopyaları dahil devam eden tüm işlemler durur.

- Hemen başlamıyor gibi görünse bile kurulum programına birden fazla kez tıklamayın. Bazen kurulum programı kullanıcı arayüzünün görüntülenmesi birkaç saniye sürebilir.

### Error 1638: Bu ürünün başka bir sürümü zaten kurulu {#error-1638}

Daha önce AdGuard VPN kurmuş olmanız çok olasıdır.

- AdGuard VPN'in bilgisayarınızda kurulu olup olmadığını kontrol edin. Bunu yapmak için *Win* tuşuna basın ve *adguard vpn* yazmaya başlayın.

- Belki önceki bir AdGuard VPN kurulumundan kalan bazı dosyalar vardır. Özel [kaldırma aracımızı](/adguard-vpn-for-windows/installation#advanced) kullanarak AdGuard'ı kaldırın ve ardından kurulumu tekrarlayın.

### Diğer hatalar {#other}

Yukarıda listelenmeyen bir hatayla karşılaştıysanız, bunu kendimiz çözmemiz mümkündür. Ancak bunu yapabilmek için sizden günlük dosyalarına ihtiyacımız var. Lütfen aşağıdaki adımları uygulayın:

- **AdGuard VPN kurulum günlüklerini** [bu makalede](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/) açıklanan şekilde bulun ve arşivleyin.

- **Olay Görüntüleyicisi** günlüklerini bulun ve diske kaydedin. [Bu makale](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) bunun nasıl yapılacağını açıklar.

Lütfen önceki iki adımdaki tüm bu dosyaları **support@adguard.com** adresine e-postayla gönderin ve sorunu mesaj metninde açıklayın. Destek ekibimiz en kısa sürede size cevap verir.
