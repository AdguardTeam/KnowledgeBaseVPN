---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir?

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. Bir kullanıcının bilgisayarını veya mobil cihazını bir sunucuya bağlar ve kişinin "gizli" bir IP adresi kullanarak internette gezinmesine olanak tanır. VPN sunucusu başka bir ülkede bulunuyorsa, internet bağlantısı bu ülkeden kurulmuş gibi görünür. Bir VPN'nin nasıl çalıştığı hakkında [daha fazla bilgi edinin](/general/how-vpn-works).

AdGuard VPN'in çeşitli işlevleri vardır:

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- trafiğinizi şifreler ve içeriği dolandırıcılar için erişilemez hâle getirir
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. Diğer VPN protokollerine kıyasla tespit edilmesi son derece zordur ve zayıf bir internet bağlantısında bile kararlıdır. AdGuard VPN protokolü hakkında daha fazlasını [](/general/adguard-vpn-protocol) adresinden okuyabilirsiniz.

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. Ana ekranda *Bağlan veya Bağlantıyı kes* düğmesini ve kullanılabilir sunucuların listesini görebilirsiniz. Sunucuların kendi konumları (belirli bir ülke ve şehir) ve ping göstergesi vardır. Ping, sunucunun yanıt süresini (milisaniye cinsinden) gösterir. Ping süresi 22 ms olan sunucunun seçilmesi, bu sunucuya gönderilen bir veri paketinin 22 ms sonra geri döneceği (tekrar alınacağı) anlamına gelir. AdGuard VPN'de onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## İstisnaların listesi

Aşağıdaki orta düğmeye dokunarak İstisnaları bulabilirsiniz. Burada Genel ve Seçici modlar için iki istisna listeleri göreceksiniz. Genel modda VPN, hariç tutulanlar hariç tüm siteler için çalışır. Tam tersine, Seçici modda VPN yalnızca listedeki siteler için çalışır. Sitelerinin alan adlarını (örn. `google.com`) veya alt alan adlarını (örn. `*.google.com`) iki şekilde ekleyebilirsiniz: bunları uygulamaya elle veya istenen sayfaları AdGuard VPN ile paylaşarak doğrudan tarayıcıdan girebilirsiniz.

![İstisnalar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Bir başka kullanışlı özellik, istisna listelerinin içe ve dışa aktarılmasıdır. Sonraki dört adımı takip ederek bunu yapabilirsiniz:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda veya tarayıcıda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.

2. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.

3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri iOS cihazınızdan Mac'inize aktarırsanız, `.zip` dosyasını önceden Mac'inize gönderdiğinizden emin olun.

4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İstisnaları içe ve dışa aktarma *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Uygulama ayarları

Uygulama ayarlarına ulaşmak için:

1. AdGuard VPN uygulamasının ana ekranının sağ alt köşesindeki Ayarlar düğmesine (⚙) dokunun
2. *Uygulama ayarları* öğesine dokunun

Burada, farklı seçenekleri kullanarak iOS için AdGuard VPN'i yapılandırabilirsiniz: Çalışma Modu, DNS sunucusu, Wi-Fi otomatik koruması, Renk Teması ve Gelişmiş Ayarlar.

![Uygulama Ayarları *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Çalışma modu

iOS için AdGuard VPN iki modda çalışabilir: **Genel** ve **Entegre**.

**Genel** modda, hız ve güvenliğin en iyi kombinasyonunu sağlayan [AdGuard VPN protokolü](/general/adguard-vpn-protocol) kullanılır. Bu modda, AdGuard VPN, [iOS için AdGuard Reklam Engelleyici](https://adguard.com/kb/adguard-for-ios/overview/) ile birlikte çalışamaz.

**Entegre** modda, AdGuard VPN, bunun yerine IPSec protokolünü kullanarak iOS için AdGuard Reklam Engelleyici ile aynı anda çalışabilecektir. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. Entegrasyonu ayarlamak için herhangi bir ek işlem gerçekleştirmeniz gerekmez: her iki uygulamayı da yüklemeniz ve bu moda geçmeniz yeterlidir.

:::note

**Entegre** modda, İstisnalar özelliğini kullanamaz veya bir DNS sunucusu seçemezsiniz.

:::

### DNS sunucusu

DNS sunucuları bir alan adını veya ana makine adını (örn. example.com veya www.example.com) tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirir. iOS için AdGuard VPN, her biri kendi özel niteliklerine sahip birkaç DNS sunucusu arasında bir seçim sunar. Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Farklı DNS sağlayıcılarının DNS sunucuları da konumunuza, İSS'nize ve diğer faktörlere bağlı olarak daha hızlı veya daha yavaş çalışabilir. Sizin için en uygun olanı seçin. [DNS hakkında daha fazla bilgi edinebilirsiniz](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) ve özelliklerini bulabilirsiniz.

![DNS sunucusu ekranı *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi otomatik koruma

Cihaz bir Wi-Fi ağına bağlandığında VPN otomatik olarak etkinleştirilir.

### Tema

Uygulamanın sistem varsayılanı, koyu veya açık temasını seçebilirsiniz (iOS 13 ve sonraki sürümlerde mevcuttur).

### Gelişmiş ayarlar

*Gelişmiş ayarlarda* iki bölüm bulabilirsiniz — Günlük kayıt düzeyi ve Tanılama bilgileri. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş günlük kayıt düzeyinin etkinleştirilmesi tavsiye edilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

## Hızlı Eylemler (iOS 13 veya sonraki sürümlerde mevcuttur)

Bu özelliğe erişmek için uygulama simgesine dokunup basılı tutun, ardından parmağınızı kaldırın. Hızlı eylemleri göreceksiniz: Bağlan veya Bağlantıyı kes, Konum seç, Ana Ekranı Düzenle ve Uygulamayı kaldır.

![Hızlı eylemler *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Destek

Uygulamada çeşitli yardım özellikleri bulunmaktadır (sağ alttaki *Ayarlar* ve ardından *Destek* düğmesine basın): SSS bölümünü görebilir, hata bildirebilir, geri bildirim bırakabilir, sorunlarınızı ve önerilerinizi sosyal ağlarda tartışabilirsiniz. veya GitHub'da, App Store'da iOS için AdGuard VPN'i derecelendirin ve günlükleri dışa aktarın.

![Destek *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonelik

AdGuard VPN'in ücretsiz sürümünü kullanıyorsanız, alt sekme çubuğunda ok simgesi olan dördüncü sekme olacaktır. Bu bölümde, uygulamanın ücretli sürümünün temel avantajları hakkında kısa bilgiler bulur ve bir abonelik satın alabilirsiniz.

![Abonelik *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
