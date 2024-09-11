---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir?

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. Bir kullanıcının bilgisayarını veya mobil cihazını bir sunucuya bağlar ve kişinin "gizli" bir IP adresi kullanarak internette gezinmesine olanak tanır. VPN sunucusu başka bir ülkede bulunuyorsa, internet bağlantısı bu ülkeden kurulmuş gibi görünür. Daha fazla ayrıntı için [VPN'in nasıl çalıştığına dair makalemize](/general/how-vpn-works) göz atabilirsiniz.

AdGuard VPN'in çeşitli işlevleri vardır:

- Gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- Verilerinizi izlemekten korumak için IP adresinizi değiştirir
- Trafiğinizi şifreleyerek içeriği dolandırıcılar için erişilemez hâle getirir
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. Diğer VPN protokollerine kıyasla tespit edilmesi son derece zordur ve zayıf bir internet bağlantısında bile kararlıdır. [AdGuard VPN protokolü hakkında daha fazla bilgi edinin](/general/adguard-vpn-protocol).

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. Ana ekranda *Bağlan* (*Bağlantıyı kes*) düğmesini ve kullanılabilir sunucuların listesini görebilirsiniz (onları *konumlar* olarak adlandırıyoruz). Her sunucunun kendi konumu (belirli bir ülke ve şehir) ve ping göstergesi vardır.

Ping, sunucunun yanıt süresini milisaniye cinsinden gösterir. Bu, o konuma bağlandığınızda VPN bağlantısının ne kadar hızlı olacağını gösterir. Ping değeri 22 ms olan bir sunucunun seçilmesi, bu sunucuya gönderilen bir veri paketinin 22 ms içinde geri döneceği anlamına gelir.

AdGuard VPN ile onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## İstisnalar

Alt çubuktaki ikinci simgeye dokunarak İstisnalar sekmesini bulabilirsiniz. Burada, *Normal* ve *Seçici* modlar için iki istisna listeleri göreceksiniz.

*Normal* modda VPN, hariç tutulanlar dışındaki tüm siteler için çalışır. Tam tersine, *Seçici* modda VPN yalnızca listedeki siteler için çalışır.

Sitelerin alan adlarını (örn. `google.com`) veya alt alan adlarını (örn. `*.google`.com) listelere iki şekilde ekleyebilirsiniz:

- Bunları uygulamaya elle girin
- İstediğiniz sayfaları AdGuard VPN ile paylaşarak bunları doğrudan tarayıcıdan ekleyin

![İstisnalar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### İstisnaları içe ve dışa aktarma

Bir başka kullanışlı özellik de istisna listelerinin içe ve dışa aktarılmasıdır. Bu şekilde istisna listelerini diğer cihazlardan ve diğer cihazlara paylaşabilirsiniz.

Bunu dört adımda yapabilirsiniz:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.

2. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.

3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri iOS cihazınızdan Mac'inize aktarırsanız, `.zip` dosyasını önceden Mac'inize gönderdiğinizden emin olun.

4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

**iOS için AdGuard VPN'de, dışa ve içe aktarma özelliklerine İstisnalar ekranının sağ üst köşesindeki üç noktalı simgeye dokunarak erişilebilir**.

![İstisnaları içe ve dışa aktarma *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Genel ayarlar

Genel ayarları açmak için:

1. Uygulamanın ana ekranının sağ alt köşesindeki Ayarlar simgesine (⚙) dokunun.
2. *Genel* öğesine dokunun.

Burada, farklı seçenekleri kullanarak ihtiyacınıza göre AdGuard VPN için iOS'u yapılandırabilirsiniz: *DNS sunucusu*, *Tema*, *Gelişmiş*, *Teknik ve etkileşim verilerini gönder* ve *Kill Switch*.

![Genel ayarlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS sunucusu

iOS için AdGuard VPN, her biri kendi özel niteliklerine sahip birkaç DNS sunucusu arasında bir seçim sunar. Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Farklı DNS sağlayıcılarının DNS sunucuları da konumunuza, İSS'nize ve diğer faktörlere bağlı olarak daha hızlı veya daha yavaş çalışabilir. Sizin için en uygun olanı seçin. [DNS hakkında daha fazla bilgi edinebilirsiniz](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) ve özelliklerini bulabilirsiniz.

![DNS sunucusu ekranı *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

Uygulama temanızı Sistem, Koyu veya Açık (iOS 13 veya sonraki sürümlerde kullanılabilir) olarak ayarlayabilirsiniz.

### Gelişmiş ayarlar

*Gelişmiş* ayarlarda 4 bölüm bulabilirsiniz - *Çalışma modu*, *günlük kayıt düzeyi*, *Günlükleri ve sistem bilgilerini dışa aktar* ve *Tanılama bilgisii*.

#### Çalışma modu

iOS için AdGuard VPN iki modda çalışabilir: **VPN** ve **Entegre**.

*VPN* modu, hız ve güvenliğin en iyi kombinasyonunu sağlayan [AdGuard VPN protokolünü](/general/adguard-vpn-protocol) kullanır. Bu modda, AdGuard VPN [iOS için AdGuard Reklam Engelleyici](https://adguard.com/adguard-ios/overview.html) ile çalışmaz.

**Entegre modda**, AdGuard VPN, IPSec protokolünü kullanarak iOS için AdGuard Reklam Engelleyici ile aynı anda olarak çalışabilecektir. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. Entegrasyonu ayarlamak için hiçbir şey yapmanıza gerek yok: sadece her iki uygulamayı da yükleyin ve bu moda geçin.

:::note

**Entegre** modda, İstisnalar özelliğini kullanamaz veya bir DNS sunucusu seçemezsiniz.

:::

#### Günlük kayıt düzeyi

Bu ayar öncelikle hata ayıklama ve sorun giderme amacıyla kullanılır. Genişletilmiş ve Son derece günlük kayıt düzeyleri, çeşitli sorunların veya hataların tanımlanmasına ve düzeltilmesine yardımcı olabilecek daha ayrıntılı bilgileri kaydeder.

:::caution

**Destek ekibimiz tarafından talep edilmedikçe Genişletilmiş veya Son derece günlük kayıt düzeyinin etkinleştirilmesi önerilmez**.

:::

#### Günlükleri ve sistem bilgisini dışa aktar

Bu seçenek, uygulamanın günlüklerini ve sistem bilgilerini desteğimize veya başka birine göndermek için kullanılabilir.

#### Teşhis verileri

Bu seçenek, sorunların çözümünde faydalı olabilecek ve bazen destek ekibimiz ve geliştiricilerimiz tarafından talep edilen teknik bilgileri dışa aktarmanızı sağlar.

### Teknik ve etkileşim verilerini gönder

Bu seçeneği açarak kullanıcıların uygulamayla nasıl etkileşimde bulunduğunu daha iyi anlamamıza yardımcı olursunuz. Bu bilgileri kullanıcı deneyimini iyileştirmek için kullanırız.

### Kill Switch

Herhangi bir nedenle VPN bağlantınız aniden kesilirse, *Kill Switch* internet bağlantısını otomatik olarak sonlandırarak verilerinizin sızmamasını ve kimliğinizin gizli kalmasını sağlar.

## Hızlı eylemler

Hızlı eylemler, bir uygulamayı açmadan Ana ekrandan yararlı veya uygulamaya özel eylemler yapmanın kullanışlı yoludur.

Hızlı eylemler menüsüne erişmek için AdGuard VPN uygulama simgesine dokunup basılı tutun ve ardından parmağınızı kaldırın. Açılan menüde AdGuard VPN'in hızlı eylemlerini göreceksiniz: *Bağlan**(Bağlantıyı kes*) ve *Konum seç*. Ayrıca uygulamayı kaldırma veya uygulamayı taşıma ya da paylaşma gibi tüm varsayılan eylemlere de erişebilirsiniz.

![Hızlı eylemler *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Destek

Destek ekranı (*Ayarlar* → *Destek*) bir dizi yararlı özelliğe sahiptir: *SSS*, *Hata bildir*, *Özellik talep et* ve *Uygulamayı derecelendir*. İkincisi, App Store'da iOS için AdGuard VPN'i derecelendirmenize olanak tanır.

![Destek *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Abonelik ekranı

AdGuard VPN'in ücretsiz sürümünü kullanıyorsanız, alt sekme çubuğunda bir ok simgesi olan başka bir sekme olacaktır. Bu bölümde, uygulamanın ücretli sürümünün temel avantajları kısaca açıklanmaktadır. Yıllık veya aylık abonelik seçebilirsiniz.

![Abonelik *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
