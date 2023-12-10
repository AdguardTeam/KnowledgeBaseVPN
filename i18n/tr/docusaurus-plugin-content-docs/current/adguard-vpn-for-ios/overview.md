---
title: Özelliklere genel bakış
sidebar_position: 1
---

## iOS için AdGuard VPN nedir?

VPN, İnternet üzerindeki başka bir ağa güvenli bir bağlantı oluşturmanızı sağlar. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. Bir VPN'nin nasıl çalıştığı hakkında [daha fazla bilgi edinin](/general/how-vpn-works).

AdGuard VPN has several functions:

- gerçek yerinizi gizler ve anonim kalmanıza yardımcı olur
- verilerinizi izlemekten korumak için IP adresinizi değiştirir
- trafiğinizi dolandırıcıların erişemeyeceği şekilde şifreler
- VPN'nin nerede kullanılacağını ve nerede kullanılmayacağını yapılandırmanıza olanak tanır (istisnalar özelliği)

iOS için AdGuard VPN'in bir sonraki avantajı, kendi VPN protokolümüzdür. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## iOS için AdGuard VPN nasıl kullanılır

iOS için AdGuard VPN'i kullanmak için önce [AdGuard hesabınıza](https://my.adguard.com/) giriş yapmanız gerekir. Doğrudan AdGuard hesap bilgilerinizle veya Google, Apple ID veya Facebook aracılığıyla (AdGuard hesabınız aynı e-posta adresi kullanılarak kaydolunduysa) giriş yapabilirsiniz.

Henüz bir AdGuard hesabınız yoksa, önce hesap oluşturmanız gerekir.

AdGuard VPN'i kullanmak oldukça kolaydır. Ana ekranda *Bağlan ve Bağlantıyı kes* düğmesini ve kullanılabilir sunucuların listesini görebilirsiniz. Sunucuların kendi konumları (belirli bir ülke ve şehir) ve ping göstergesi vardır. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. AdGuard VPN'de onlarca ülkede 50'den fazla konum arasından seçim yapabilirsiniz.

![Ana ekran ve konumlar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## İstisnaların listesi

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

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

**Entegre** modda, AdGuard VPN, bunun yerine IPSec protokolünü kullanarak iOS için AdGuard reklam engelleyici ile aynı anda çalışabilecektir. Bu protokol de güvenlidir, ancak biraz daha yavaş ve tespit edilmesi daha kolaydır. Entegrasyonu ayarlamak için herhangi bir ek işlem gerçekleştirmeniz gerekmez: her iki uygulamayı da yüklemeniz ve bu moda geçmeniz yeterlidir.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNS sunucusu

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi otomatik koruma

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Tema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Gelişmiş ayarlar

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Hızlı Eylemler (iOS 13 veya sonraki sürümlerde mevcuttur)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Destek

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonelik

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
