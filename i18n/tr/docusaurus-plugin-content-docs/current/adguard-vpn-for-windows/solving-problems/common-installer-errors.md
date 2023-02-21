---
title: Common installer errors
sidebar_position: 2
---

Bu makale, Windows için AdGuard VPN kurulumu sırasında karşılaşabileceğiniz en yaygın hatalardan bazılarını ve bunları çözmenin olası yollarını içerir.

### Hata 5: Erişim Reddedildi {#error-5}

Bu hata, izinlerle ilgili bir sorun olduğunda ortaya çıkar. There may be several different reasons why AdGuard VPN installer does not have the permissions it requires to properly finish the installation process. Aşağıdaki adımları deneyebilirsiniz:

- Antivirüslerinizi geçici olarak devre dışı bırakın. Bazıları, ayarlarının ciddiyetine bağlı olarak kuruluma müdahale edebilir.

- Farklı bir kurulum klasörü seçin. Mevcut kurulum klasörünün bazı erişim kısıtlamaları olabilir. Also make sure you don't select an external drive, a virtual drive, etc.

- Bilgisayarınızı yeniden başlatın. Bazen izin sorunları geçicidir ve bilgisayarı yeniden başlatarak çözülebilir.

### Hata 112: Disk dolu, Hata 1632: Geçici klasör dolu veya erişilemiyor {#error-112}

Bunlar çok benzer çözümlere sahip iki farklı hatadır. Adlarından da anlaşılacağı gibi, AdGuard VPN Kurulum Programı, kurulumu tamamlamak için yeterli disk alanı bulamadı. Sorunu çözmek için deneyebileceğiniz birkaç şey var:

- AdGuard VPN'i kurmaya çalıştığınız sürücüden bazı programları kaldırın veya gereksiz dosyaları silin.

- Download, install, and run [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), a free piece of software by Malwarebytes. It will, among other things, clean your system from all kinds of extra "leftover" files that remain after incorrectly uninstalled programs and such. Biraz disk alanı temizlemeye yardımcı olur.

- Bilgisayarınızı yeniden başlatın. Bazen geçici dosyalar önemli miktarda disk alanı kaplayabilir ve bilgisayarınızı yeniden başlatmak bunlardan kurtulmanın en güvenilir yoludur.

### Hata 1601: Windows Installer'a erişilemiyor {#error-1601}

Bunun, Hata 1603'ün belirli bir alt türü olduğunu söyleyebilirsiniz. Olası çözümler benzerdir:

- Start and re-register Microsoft Installer service. It requires some work.

    1) Press *Win + R* and enter **services.msc**. 2) Find in the list and double click *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- PC'yi yeniden başlatın ve kurulumu baştan başlatın. Bazen sorunu çözmek için bu yeterli olur.

### Error 1602: Canceled by user {#error-1602}

If you got this error code, chances are you have interrupted the installation process manually in one way or another. What you can do is:

- Do not close the installer window. When the installation is complete, it will close automatically.

- If a dialogue window pops up during the installation, hit "Yes" to grant the installer the required permissions. Clicking "No" will cancel the installation.

- Do not start other processes while the installation is in progress.

### Error 1603: Fatal error during installation {#error-1603}

The error sounds scarier than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:

- Press the *Win* key, search for *Command Prompt*, and run it. There, type in `sfc /scannow` and press *Enter*.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1) Press *Win + R* and enter ***services.msc***. 2) Find in the list and double click *Windows Installer*. 3) Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*. 4) Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*. 5) Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1) Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*. 2) Go to *Security* tab and click *Edit*. 3) Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*. 4) Click *OK* to go back to *Properties* dialog. Then click *Advanced*. 5) Click *Change Permissions*. 6) In *Permissions* tab, double-click *Administrators*. 7) Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. Bundan sonra *Tamam* öğesine basın. 8) Do the same operation above (from item 7) for *SYSTEM*. 9) Click *OK* all the way out. AdGuard'ı yeniden kurmayı deneyin.

### Hata 1618: Başka bir kurulum zaten devam ediyor {#error-1618}

Bu hata, aynı anda başlatılan birkaç AdGuard VPN kurulum programı olduğunda ortaya çıkar. What to do if you get this error:

- Reboot your PC and start the installer again. Bilgisayarı yeniden başlattığınızda, kurulum programının tüm kopyaları dahil devam eden tüm işlemler durur.

- Hemen başlamasa bile kurulum programına birden çok tıklama yapmayın. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Bu ürünün başka bir sürümü zaten kurulu {#error-1638}

Daha önce AdGuard VPN kurmuş olmanız çok olasıdır.

- AdGuard VPN'in bilgisayarınızda kurulu olup olmadığını kontrol edin. You can do it by pressing the *Win* key and typing in ***AdGuard VPN***.

- Belki önceki bir AdGuard VPN kurulumundan kalan bazı dosyalar vardır. Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

### Diğer hatalar {#other}

Yukarıda listelenmeyen bir hatayla karşılaştıysanız, bunu kendimiz çözmemiz mümkündür. Ancak bunu yapabilmek için sizden günlük dosyalarına ihtiyacımız var. Lütfen aşağıdaki adımları uygulayın:

- Find and archive **AdGuard VPN installation logs** in the same way that is described in [this article](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk **Event Viewer** logs. [This article](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explains how to do that.

Please email all these files from the two previous steps at **support@adguard.com** and describe the problem in the message body. Destek ekibimiz en kısa sürede size cevap verir.
