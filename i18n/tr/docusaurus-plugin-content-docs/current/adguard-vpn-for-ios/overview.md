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

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://adguardaccount.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. Ana ekranda *Bağlan* (*Bağlantıyı kes*) düğmesini ve kullanılabilir sunucuların listesini görebilirsiniz (onları *konumlar* olarak adlandırıyoruz). Her sunucunun kendi konumu (belirli bir ülke ve şehir) ve ping göstergesi vardır.

Ping, sunucunun yanıt süresini milisaniye cinsinden gösterir. Bu, o konuma bağlandığınızda VPN bağlantısının ne kadar hızlı olacağını gösterir. Ping değeri 22 ms olan bir sunucunun seçilmesi, bu sunucuya gönderilen bir veri paketinin 22 ms içinde geri döneceği anlamına gelir.

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Ana sayfa ve konumlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## İstisnalar

Alt çubuktaki ikinci simgeye dokunarak İstisnalar sekmesini bulabilirsiniz.

Varsayılan olarak, AdGuard VPN, İstisnalara eklenenler hariç tüm siteler için etkindir. Seçici olarak da açabilirsiniz — VPN yalnızca belirtilen siteler için etkin olacaktır. Bu moda geçmek için *Modu değiştir* öğesine dokunun.

:::note

Her modun kendine ait istisna listesi vardır.

:::

Sitelerin alan adlarını (örn. `google.com`) veya alt alan adlarını (örn. `news.google`.com) listelere üç şekilde ekleyebilirsiniz:

- Bunları uygulamaya elle girin
- [Popüler hizmetler için alan adı listelerinden seçim yapın](#domain-lists-for-popular-services)
- İstediğiniz sayfaları AdGuard VPN uygulamasıyla paylaşarak bunları doğrudan tarayıcıdan ekleyin

![İstisnalar *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Elle bir alan adı eklediğinizde, tüm alt alan adları otomatik olarak eklenir ( `*.google.com` gibi görünür). Yalnızca google.com'u tutmak veya belirli bir alan adı için VPN'i kapatmak mı istiyorsunuz? Sitelerin bulunduğu satıra dokunun — bu, alt alan adlarını yönetebileceğiniz ayrı bir ekran açar. Sadece ihtiyacınız olmayanların kutularını işareti kaldırın.

![Alt alan adları *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Elle bir alt alan adı eklerseniz, ana alan adı da eklenecektir — ancak yanındaki onay kutusu işaretlenmeyecektir.

### Popüler hizmetler için alan adı listeleri

Google gibi büyük hizmetler aldatıcıdır. Genellikle birden fazla alan adı kullanırlar — biri medya dosyaları için, diğeri API için, artı farklı ülkeler için alan adları. Örneğin, Google söz konusu olduğunda, listemizde 416 alan adı vardır — hizmet için VPN'i tamamen kapatmak (veya açmak) için hepsinin İstisnalara eklenmesi gerekir.

İşte popüler bir hizmet için gerekli tüm alan adlarını istisna listesine nasıl ekleyebileceğiniz:

1. *İstisnalar* öğesini açın.
2. *Site ekle* öğesine dokunun.
3. *Listeden* öğesin dokunun.
4. Listeden istenen hizmeti bulup *Ekle* öğesine dokunun.

![Popüler hizmetlerin listesi *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### İstisnaları içe ve dışa aktarma

Bir başka kullanışlı özellik de istisna listelerinin içe ve dışa aktarılmasıdır. Bu şekilde istisna listelerini diğer cihazlardan ve diğer cihazlara paylaşabilirsiniz.

Bunu dört adımda yapabilirsiniz:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.

2. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.

3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri iOS cihazınızdan Mac'inize aktarırsanız, `.zip` dosyasını önceden Mac'inize gönderdiğinizden emin olun.

4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

**iOS için AdGuard VPN'de, dışa ve içe aktarma özelliklerine İstisnalar ekranının sağ üst köşesindeki üç noktalı simgeye dokunarak erişilebilir**.

![İstisnaları içe ve dışa aktarma *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Kaydedilen konumlar

Bu özellik, favori sunucu konumlarınızı özel bir sekmeye kaydetmenizi sağlar, böylece tüm listeyi aramanıza veya aşağı kaydırmanıza gerek kalmadan bunlara hızlı bir şekilde erişebilirsiniz.

*Kaydedilenler* öğesine bir konum eklemek için üzerinde sola kaydırmanız yeterlidir. To remove it from *Saved*, do the same:

![Kaydedilen konumlar ekle kaldır *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Genel ayarlar

Genel ayarları açmak için:

1. Uygulamanın ana ekranının sağ alt köşesindeki Ayarlar simgesine (⚙) dokunun.
2. *Genel* öğesine dokunun.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![Genel ayarlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS sunucusu

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS sunucusu ekranı *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

Uygulama temanızı Sistem, Koyu veya Açık (iOS 13 veya sonraki sürümlerde kullanılabilir) olarak ayarlayabilirsiniz.

### Gelişmiş ayarlar

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Çalışma modu

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Günlük kayıt düzeyi

Bu ayar öncelikle hata ayıklama ve sorun giderme amacıyla kullanılır. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Günlükleri ve sistem bilgisini dışa aktar

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Teşhis verileri

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

#### AdGuard VPN protokolü

![Select VPN protocol *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

By default, AdGuard VPN protocol uses dynamic VPN protocol selection (*Auto-select* option). That means that AdGuard VPN automatically figures out which protocol — HTTP2/TLS or HTTP3/QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only HTTP2/TLS or HTTP3/QUIC protocol instead of *Auto-select*. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.

### Teknik ve etkileşim verilerini gönder

By turning this option on, you are helping us understand better how users interact with the app. Bu bilgileri kullanıcı deneyimini iyileştirmek için kullanırız.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Hızlı eylemler

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Hızlı eylemler *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Destek

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. İkincisi, App Store'da iOS için AdGuard VPN'i derecelendirmenize olanak tanır.

![Destek *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Abonelik ekranı

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Abonelik *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
