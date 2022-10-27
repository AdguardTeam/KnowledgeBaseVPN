---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. Bir kullanıcının bilgisayarını veya mobil cihazını bir sunucuya bağlar ve birinin başka birinin IP adresini kullanarak internette gezinmesini sağlar. Yani VPN sunucusu farklı bir ülkede bulunuyorsa o ülkeden internete bağlandığınız görülür. Bir VPN'nin nasıl çalıştığı hakkında [daha fazla bilgi edinin](/general/how-vpn-works.md).

AdGuard VPN'den bahsetmişken, birkaç işlevi vardır:
* gerçek nerede olduğunuzu gizler ve anonim kalmanıza yardımcı olur
* verilerinizi izlemekten korumak için IP adresinizi değiştirir
* trafiğinizi dolandırıcıların erişemeyeceği şekilde şifreler
* VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. İki ana avantajı vardır: diğer VPN protokolleriyle karşılaştırıldığında, tespit edilmesi son derece zordur ve zayıf bir internet bağlantısıyla bile kararlı bir şekilde çalışır. [Bu makalede](../general/adguard-vpn-protocol.mdx) AdGuard VPN protokolü hakkında daha fazla bilgi edinebilirsiniz.

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. You can sign in directly with your AdGuard account credentials, or via Google, Apple ID, or Facebook (if your AdGuard account was registered using the same email address).

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. On the main screen you can see the *Connect/Disconnect* button and the list of available servers. Sunucuların kendi konumları (belirli bir ülke ve şehir) ve ping göstergesi vardır. Ping, sunucunun yanıt süresini (milisaniye olarak) tanımlar. Örneğin, 22 ms ping ile sunucuyu seçmek, sinyalin sunucuya ulaşacağı ve 22 milisaniyede geri döneceği anlamına gelir. Yani bu değer ne kadar düşükse, bağlantınız o kadar hızlı olur. AdGuard VPN'de onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar](https://cdn.adguard.com/content/kb/vpn/ios/1.png?123)

## Lists of exclusions

Aşağıdaki orta düğmeye dokunarak istisna özelliğini bulabilirsiniz. Orada, Normal ve Seçici Modlar için iki istisna listesi göreceksiniz. Normal modda VPN, istisna listesi dışındaki tüm sitelerde çalışır. Seçici modda tam tersine, VPN yalnızca listedeki sitelerde çalışır. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or right from the browser by clicking the *Share* button and finding AdGuard VPN in the opened list below.

![İstisnalar](https://cdn.adguard.com/content/kb/vpn/ios/2.png?123)

Bir başka kullanışlı özellik, istisna listelerinin içe ve dışa aktarılmasıdır. Sonraki dört adımı takip ederek bunu yapabilirsiniz:

1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.

2. Arşivde, Normal ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.

3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri iOS cihazınızdan Mac'inize aktarırsanız, `.zip` dosyasını önceden Mac'inize gönderdiğinizden emin olun.

4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İstisnaları içe ve dışa aktarma](https://cdn.adguard.com/content/kb/vpn/ios/import-export-exclusions.png)

## Uygulama ayarları

Uygulama ayarlarına ulaşmak için:

1. AdGuard VPN uygulamasının ana ekranının sağ alt köşesindeki Ayarlar düğmesine (⚙) dokunun
2. *Uygulama ayarları* öğesine dokunun

Burada, farklı seçenekleri kullanarak iOS için AdGuard VPN'i yapılandırabilirsiniz: Çalışma Modu, DNS sunucusu, Wi-Fi otomatik koruması, Renk Teması ve Gelişmiş Ayarlar.

![Uygulama Ayarları](https://cdn.adguard.com/content/kb/vpn/ios/app-settings.png)

### Çalışma modu

iOS için AdGuard VPN iki modda çalışabilir: **Genel** ve **Tümleşik**.

In **General** mode, the [AdGuard VPN protocol](../general/adguard-vpn-protocol.mdx) is employed, which provides the best combination of speed and security. Bu modda, AdGuard VPN, [iOS için AdGuard Reklam Engelleyici](https://kb.adguard.com/en/ios) ile birlikte çalışamaz.

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard for iOS ad blocker by using the IPSec protocol instead. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. Tümleşiği ayarlamak için herhangi bir ek işlem gerçekleştirmeniz gerekmez: her iki uygulamayı da yüklemeniz ve bu moda geçmeniz yeterlidir.
> Note that in **Integrated** mode you can't use the Exclusions feature or choose a DNS server.

### DNS sunucusu

Alan adı sisteminin (DNS) amacı, site adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Bu iş DNS sunucuları tarafından gerçekleştirilir. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Farklı DNS sağlayıcılarının DNS sunucuları da konumunuza, İSS'nize ve diğer faktörlere bağlı olarak daha hızlı veya daha yavaş çalışabilir. Sizin için en uygun olanı seçin. You can find out more about DNS and its characteristics [in this article](https://kb.adguard.com/en/general/dns-filtering#what-is-dns).

![DNS sunucusu ekranı](https://cdn.adguard.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi otomatik koruma

Cihaz bir Wi-Fi ağına bağlandığında VPN otomatik olarak etkinleştirilir.

### Tema

Uygulamanın sistem varsayılanı, koyu veya açık temasını seçebilirsiniz (iOS 13 ve sonraki sürümlerde mevcuttur).

### Gelişmiş ayarlar

In the *Advanced settings* you can find two sections — Logging level and Diagnostic info. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş günlük kayıt düzeyinin etkinleştirilmesi önerilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

## Quick Actions (available in iOS 13 or later)

Bu özelliğe erişmek için uygulama simgesine dokunup basılı tutun, ardından parmağınızı kaldırın. Hızlı Eylemlerin bir listesini göreceksiniz: şu anda seçili sunucuya Bağlan/Bağlantıyı Kes, Yeni bir sunucu konumu seçmek için Konum seç. Elbette, uygulamayı kaldırmak veya uygulama simgesini hareket ettirmek gibi tüm varsayılan işlemlere de erişebilirsiniz.

![Hızlı eylemler](https://cdn.adguard.com/content/kb/vpn/ios/quick-actions.png)


## Destek

Kullanıcıların başarısı bizim için yüksek önceliktir. So there is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions on our forum, in social networks, or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Destek](https://cdn.adguard.com/content/kb/vpn/ios/support.png)

## Abonelik

AdGuard VPN'in ücretsiz sürümünü kullanıyorsanız, alt sekme çubuğunda ok simgesi olan dördüncü sekme olacaktır. Bu bölümde, uygulamanın ücretli sürümünün temel avantajları hakkında kısa bilgiler bulur ve bir abonelik satın alabilirsiniz.

![Abonelik](https://cdn.adguard.com/content/kb/vpn/ios/subscription_en.png?123)