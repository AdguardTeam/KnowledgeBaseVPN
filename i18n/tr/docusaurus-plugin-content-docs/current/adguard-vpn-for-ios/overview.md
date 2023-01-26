---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir?

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. Bir kullanıcının bilgisayarını veya mobil cihazını bir sunucuya bağlar ve birinin başka birinin IP adresini kullanarak internette gezinmesini sağlar. Yani VPN sunucusu farklı bir ülkede bulunuyorsa o ülkeden internete bağlandığınız görülür. Bir VPN'nin nasıl çalıştığı hakkında [daha fazla bilgi edinin](/general/how-vpn-works.md).

AdGuard VPN'den bahsetmişken, birkaç işlevi vardır:
* gerçek nerede olduğunuzu gizler ve anonim kalmanıza yardımcı olur
* verilerinizi izlemekten korumak için IP adresinizi değiştirir
* trafiğinizi dolandırıcıların erişemeyeceği şekilde şifreler
* VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. İki ana avantajı vardır: diğer VPN protokolleriyle karşılaştırıldığında, tespit edilmesi son derece zordur ve zayıf bir internet bağlantısıyla bile kararlı bir şekilde çalışır. [Bu makalede](../general/adguard-vpn-protocol.mdx) AdGuard VPN protokolü hakkında daha fazla bilgi edinebilirsiniz.

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. Ana ekranda *Bağlan ve Bağlantıyı kes* düğmesini ve kullanılabilir sunucuların listesini görebilirsiniz. Sunucuların kendi konumları (belirli bir ülke ve şehir) ve ping göstergesi vardır. Ping, sunucunun yanıt süresini (milisaniye olarak) tanımlar. Örneğin, 22 ms ping ile sunucuyu seçmek, sinyalin sunucuya ulaşacağı ve 22 milisaniyede geri döneceği anlamına gelir. Yani bu değer ne kadar düşükse, bağlantınız o kadar hızlı olur. AdGuard VPN'de onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## İstisnaların listesi

Aşağıdaki orta düğmeye dokunarak istisna özelliğini bulabilirsiniz. Orada, Genel ve Seçici Modlar için iki istisna listesi göreceksiniz. Genel modda VPN, istisna listesi dışındaki tüm sitelerde çalışır. Seçici modda tam tersine, VPN yalnızca listedeki sitelerde çalışır. Sitelerin etki alanlarını (ör. `google.com`) veya alt alt alan adlarını (ör. `*.google.com`) iki şekilde ekleyebilirsiniz: bunları uygulamaya elle veya doğrudan tarayıcıdan, *Paylaş* düğmesine tıklayıp aşağıdaki açılan listede AdGuard VPN'i bularak girebilirsiniz.

![İstisnalar](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Bir başka kullanışlı özellik, istisna listelerinin içe ve dışa aktarılmasıdır. Sonraki dört adımı takip ederek bunu yapabilirsiniz:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda veya tarayıcıda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.

2. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.

3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri iOS cihazınızdan Mac'inize aktarırsanız, `.zip` dosyasını önceden Mac'inize gönderdiğinizden emin olun.

4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İstisnaları içe ve dışa aktarma](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Uygulama ayarları

Uygulama ayarlarına ulaşmak için:

1. AdGuard VPN uygulamasının ana ekranının sağ alt köşesindeki Ayarlar düğmesine (⚙) dokunun
2. *Uygulama ayarları* öğesine dokunun

Burada, farklı seçenekleri kullanarak iOS için AdGuard VPN'i yapılandırabilirsiniz: Çalışma Modu, DNS sunucusu, Wi-Fi otomatik koruması, Renk Teması ve Gelişmiş Ayarlar.

![Uygulama Ayarları](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Çalışma modu

iOS için AdGuard VPN iki modda çalışabilir: **Genel** ve **Entegre**.

**Genel** modda, hız ve güvenliğin en iyi kombinasyonunu sağlayan [AdGuard VPN protokolü](../general/adguard-vpn-protocol.mdx) kullanılır. Bu modda, AdGuard VPN, [iOS için AdGuard Reklam Engelleyici](https://kb.adguard.com/en/ios) ile birlikte çalışamaz.

**Entegre** modda, AdGuard VPN, bunun yerine IPSec protokolünü kullanarak iOS için AdGuard reklam engelleyici ile aynı anda çalışabilecektir. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. Entegrasyonu ayarlamak için herhangi bir ek işlem gerçekleştirmeniz gerekmez: her iki uygulamayı da yüklemeniz ve bu moda geçmeniz yeterlidir.
> **Entegre** modda, İstisnalar özelliğini kullanamayacağınızı veya bir DNS sunucusu seçemeyeceğinizi unutmayın.

### DNS sunucusu

Alan adı sisteminin (DNS) amacı, site adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Bu iş DNS sunucuları tarafından gerçekleştirilir. iOS için AdGuard VPN, her biri kendi özel niteliklerine sahip birkaç DNS sunucusu arasında bir seçim sunar. Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Farklı DNS sağlayıcılarının DNS sunucuları da konumunuza, İSS'nize ve diğer faktörlere bağlı olarak daha hızlı veya daha yavaş çalışabilir. Sizin için en uygun olanı seçin. [Bu makalede](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) DNS ve özellikleri hakkında daha fazla bilgi edinebilirsiniz.

![DNS sunucusu ekranı](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi otomatik koruma

Cihaz bir Wi-Fi ağına bağlandığında VPN otomatik olarak etkinleştirilir.

### Tema

Uygulamanın sistem varsayılanı, koyu veya açık temasını seçebilirsiniz (iOS 13 ve sonraki sürümlerde mevcuttur).

### Gelişmiş ayarlar

*Gelişmiş ayarlarda* iki bölüm bulabilirsiniz — Günlük kayıt düzeyi ve Tanılama bilgileri. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş günlük kayıt düzeyinin etkinleştirilmesi tavsiye edilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

## Hızlı İşlemler (iOS 13 veya sonraki sürümlerde mevcuttur)

Bu özelliğe erişmek için uygulama simgesine dokunup basılı tutun, ardından parmağınızı kaldırın. Hızlı Eylemlerin bir listesini göreceksiniz: şu anda seçili sunucuya Bağlan ve Bağlantıyı kes, Yeni bir sunucu konumu seçmek için konum seç. Elbette, uygulamayı kaldırmak veya uygulama simgesini hareket ettirmek gibi tüm varsayılan işlemlere de erişebilirsiniz.

![Hızlı eylemler](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Destek

Kullanıcıların başarısı bizim için yüksek önceliktir. Bu nedenle uygulamada çeşitli yardım özellikleri vardır (sağ alttaki *Ayarlar* düğmesine ve ardından *Destek* öğesine basın): SSS bölümünü görebilir, hata bildirebilir, geri bildirim bırakabilir, sorunlarınızı ve önerilerinizi forumumuzda, sosyal ağlarda veya GitHub'da tartışabilir, App Store'da iOS için AdGuard VPN'i derecelendirebilir ve günlükleri dışa aktarabilirsiniz.

![Destek](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonelik

AdGuard VPN'in ücretsiz sürümünü kullanıyorsanız, alt sekme çubuğunda ok simgesi olan dördüncü sekme olacaktır. Bu bölümde, uygulamanın ücretli sürümünün temel avantajları hakkında kısa bilgiler bulur ve bir abonelik satın alabilirsiniz.

![Abonelik](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)