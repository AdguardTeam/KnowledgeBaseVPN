---
title: Yaygın kurulum programı hataları
sidebar_position: 2
---

Bu makale, Windows için AdGuard VPN kurulumu sırasında karşılaşabileceğiniz en yaygın hatalardan bazılarını ve bunları çözmenin olası yollarını içerir.

### Hata 5: Erişim Reddedildi {#error-5}

Bu hata, izinlerle ilgili bir sorun olduğunda ortaya çıkar. AdGuard VPN kurulum programının, yükleme işlemini düzgün bir şekilde tamamlamak için ihtiyaç duyduğu izinlere sahip olmamasının birkaç farklı nedeni olabilir. Aşağıdaki adımları deneyebilirsiniz:

- Antivirüslerinizi geçici olarak devre dışı bırakın. Bazıları, ayarlarının ciddiyetine bağlı olarak kuruluma müdahale edebilir.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Bilgisayarınızı yeniden başlatın. Bazen izin sorunları geçicidir ve bilgisayarı yeniden başlatarak çözülebilir.

### Hata 112: Disk dolu, Hata 1632: Geçici klasör dolu veya erişilemiyor {#error-112}

Bunlar çok benzer çözümlere sahip iki farklı hatadır. Adlarından da anlaşılacağı gibi, AdGuard VPN Kurulum Programı, kurulumu tamamlamak için yeterli disk alanı bulamadı. Sorunu çözmek için deneyebileceğiniz birkaç şey var:

- AdGuard VPN'i kurmaya çalıştığınız sürücüden bazı programları kaldırın veya gereksiz dosyaları silin.

- Malwarebytes'in ücretsiz bir yazılımı olan [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/) yazılımını indirin, kurun ve çalıştırın. Diğer şeylerin yanı sıra, sisteminizi yanlış bir şekilde kaldırılan programlardan sonra kalan her türlü fazladan "artık" dosyalardan temizler. Biraz disk alanı temizlemeye yardımcı olur.

- Bilgisayarınızı yeniden başlatın. Bazen geçici dosyalar önemli miktarda disk alanı kaplayabilir ve bilgisayarınızı yeniden başlatmak bunlardan kurtulmanın en güvenilir yoludur.

### Hata 1601: Windows Installer Hizmetine Erişilemiyor {#error-1601}

Bunun, Hata 1603'ün belirli bir alt türü olduğunu söyleyebilirsiniz. Olası çözümler benzerdir:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- PC'yi yeniden başlatın ve kurulumu baştan başlatın. Bazen sorunu çözmek için bu yeterli olur.

### Hata 1602: Kullanıcı tarafından iptal edildi {#error-1602}

Bu hata kodunu aldıysanız, yükleme işlemini bir şekilde elle kesintiye uğratmış olabilirsiniz. Yapabileceğiniz şey:

- Kurulum programı penceresini kapatmayın. Kurulum tamamlandığında otomatik olarak kapanır.

- Yükleme sırasında bir diyalog penceresi açılırsa, kurulum programına gerekli izinleri vermek için "Evet" öğesine basın. "Hayır" öğesine tıklandığında kurulum iptal edilir.

- Kurulum devam ederken başka işlemler başlatmayın.

### Hata 1603: Kurulum sırasında kritik hata oluştu {#error-1603}

Hata kulağa gerçekte olduğundan daha korkutucu geliyor. Gerçekte bu, birçok farklı nedeni olabilen oldukça genel bir hatadır ve bazıları kolayca düzeltilebilir. Aşağıdaki çözümleri deneyin:

- *Win* tuşuna basın, *Komut İstemi* öğesini arayın ve çalıştırın. Orada, `sfc /scannow` yazın ve *Enter* öğesine basın.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Ayrıca harici sürücü, sanal sürücü, vb. seçmediğinizden emin olun.

- Özel [kaldırma aracımızı](../../installation#advanced) kullanarak AdGuard VPN'i kaldırın ve ardından kurulumu tekrarlayın.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter ***services.msc***.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Hata 1618: Başka bir kurulum zaten devam ediyor {#error-1618}

Bu hata, aynı anda başlatılan birkaç AdGuard VPN kurulum programı olduğunda ortaya çıkar. Bu hatayı alırsanız yapmanız gerekenler:

- Bilgisayarınızı yeniden başlatın ve kurulum programını tekrar başlatın. Bilgisayarı yeniden başlattığınızda, kurulum programının tüm kopyaları dahil devam eden tüm işlemler durur.

- Hemen başlamasa bile kurulum programına birden çok tıklama yapmayın. Bazen kurulum programı kullanıcı arayüzünün görüntülenmesi birkaç saniye sürebilir.

### Error 1638: Bu ürünün başka bir sürümü zaten kurulu {#error-1638}

Daha önce AdGuard VPN kurmuş olmanız çok olasıdır.

- AdGuard VPN'in bilgisayarınızda kurulu olup olmadığını kontrol edin. Bunu *Win* tuşuna basarak ve ***AdGuard VPN*** yazarak yapabilirsiniz.

- Belki önceki bir AdGuard VPN kurulumundan kalan bazı dosyalar vardır. Özel [kaldırma aracımızı](../../installation#advanced) kullanarak AdGuard'ı kaldırın ve ardından kurulumu tekrarlayın.

### Diğer hatalar {#other}

Yukarıda listelenmeyen bir hatayla karşılaştıysanız, bunu kendimiz çözmemiz mümkündür. Ancak bunu yapabilmek için sizden günlük dosyalarına ihtiyacımız var. Lütfen aşağıdaki adımları uygulayın:

- **AdGuard VPN kurulum günlüklerini** [bu makalede](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/) açıklanan şekilde bulun ve arşivleyin.

- **Olay Görüntüleyicisi** günlüklerini bulun ve diske kaydedin. [Bu makale](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) bunun nasıl yapılacağını açıklar.

Lütfen önceki iki adımdaki tüm bu dosyaları **support@adguard.com** adresine e-postayla gönderin ve sorunu mesaj metninde açıklayın. Destek ekibimiz en kısa sürede size cevap verir.
