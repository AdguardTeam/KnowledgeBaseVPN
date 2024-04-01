---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir?

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN'in çeşitli işlevleri vardır:

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- trafiğinizi şifreler ve içeriği dolandırıcılar için erişilemez hâle getirir
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. Diğer VPN protokollerine kıyasla tespit edilmesi son derece zordur ve zayıf bir internet bağlantısında bile kararlıdır. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

If you don’t have an AdGuard account yet, you will have to create it first.

AdGuard VPN'i kullanmak oldukça kolaydır. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. Bu, o konuma bağlandığınızda VPN bağlantısının ne kadar hızlı olacağını gösterir. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

AdGuard VPN ile onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## İstisnalar

Alt çubuktaki ikinci simgeye dokunarak İstisnalar sekmesini bulabilirsiniz. Burada, *Normal* ve *Seçici* modlar için iki istisna listeleri göreceksiniz.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

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

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

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

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

**Entegre** modda, İstisnalar özelliğini kullanamaz veya bir DNS sunucusu seçemezsiniz.

:::

#### Günlük kayıt düzeyi

Bu ayar öncelikle hata ayıklama ve sorun giderme amacıyla kullanılır. Genişletilmiş ve Son derece günlük kayıt düzeyleri, çeşitli sorunların veya hataların tanımlanmasına ve düzeltilmesine yardımcı olabilecek daha ayrıntılı bilgileri kaydeder.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Günlükleri ve sistem bilgisini dışa aktar

Bu seçenek, uygulamanın günlüklerini ve sistem bilgilerini desteğimize veya başka birine göndermek için kullanılabilir.

#### Teşhis verileri

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Teknik ve etkileşim verilerini gönder

By turning this option on you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Hızlı eylemler

Hızlı eylemler, bir uygulamayı açmadan Ana ekrandan yararlı veya uygulamaya özel eylemler yapmanın kullanışlı yoludur.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Hızlı eylemler *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Destek

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Destek *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Abonelik ekranı

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. Yıllık veya aylık abonelik seçebilirsiniz.

![Abonelik *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
