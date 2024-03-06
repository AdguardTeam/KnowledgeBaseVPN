---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Android için AdGuard VPN nedir?

VPN, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araçtır. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. Bu şekilde, üçüncü taraf bir gözlemci gerçek kullanıcının IP'sini değil VPN sunucusunun IP adresini gördüğünden, kullanıcının anonimliğinin yanı sıra veri gizliliği de korunur.

**VPN sıklıkla şunlar için kullanılır:**

- Herkese açık Wi-Fi kullanırken bile kişisel verileri güvende tutmak
- IP adresini gizleyerek çevrimiçi etkinlik izlemeyi önlemek
- Anonim kalmak için gerçek coğrafi konumu gizlemek

Android için AdGuard VPN sizin için her şeyi yapabilir — ve hatta benzersiz bir şey sunabilir. AdGuard VPN'in neden daha iyi bir seçenek olduğunu öğrenmek için — [bu makaleyi](/general/why-adguard-vpn) okuyun.

## Android için AdGuard VPN'i kullanmaya nasıl başlanır

İlk olarak, [Google Play'den](https://play.google.com/store/apps/details?id=com.adguard.vpn) AdGuard VPN'i indirin ve AdGuard hesabınıza giriş yapın. Hesabınız yoksa — hesap [oluşturmalısınız](https://auth.adguard.com/login.html). AdGuard hesap bilgilerinizle doğrudan giriş yapabilirsiniz. Veya AdGuard hesabınız aynı e-posta adresini kullanarak kaydolduysa, bunu Google veya Facebook aracılığıyla yapın.

## Ana ekran

Ana ekran VPN durumunu yansıtır (Bağlandı/Bağlantı kesildi). There are also the *Connect/Disconnect* button and a list of available servers.

Her sunucunun konumu ve sunucunun yanıt süresini tanımlayan ping hızı vardır. Bu değer ne kadar düşük olursa bağlantı o kadar hızlı olur. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. *Bağlan* düğmesine dokunarak veya bir konum seçerek en hızlı sunucuya bağlanabilirsiniz.

## İstisnalar

Sitenizi ve uygulama istisna listelerinizi yönetmenizi kolaylaştırmak için her şeyi yaptık. AdGuard VPN yalnızca seçtiğiniz yerde çalışır.

### İstisnaların listesi

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. *İstisnalar* bölümüne ulaşmak için ekranın alt kısmındaki soldan ikinci simgeye dokunun.

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### Siteler için

Sitelerin alan adlarını (ör. `google.com`) veya alt alan adlarını (ör. `*.google.com`) *İstisnalara* üç şekilde ekleyebilirsiniz: bunları uygulamaya elle veya doğrudan tarayıcıdan *Paylaş* düğmesine tıklayıp aşağıdaki açılan listeden AdGuard VPN'i seçerek veya kategorilere ayrılmış yerleşik hizmet listelerinden girin.

![İstisnalar](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Alan adlarının elle eklenmesinde bazı ince ayrıntılar vardır. Örneğin, `yahoo.com` alan adını elle hariç tutarsanız, tüm `*.yahoo.com` alt alanları da istisnalarda listelenir. Ancak, `yahoo.jp` veya `yahoo.fr` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye girmez. Bu durumda, her platformla ilgili tüm alt alan adlarını oraya koyduğumuz için yerleşik hizmet listelerini kullanmak daha güvenlidir.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 İyi haber: oradan herhangi bir alan adono sildiyseniz veya devre dışı bıraktıysanız, her zaman hizmet listelerinin varsayılan görünümüne dönebilirsiniz.

![İstisnalar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Bir başka kullanışlı özellik ise, *istisnaları İçe ve Dışa aktarma* özelliğidir. Hedefe ulaşmak için sadece dört adım var:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda veya tarayıcıda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `adguard_vpn_exclusions.zip` arşivi indirilecektir.
2. There are two `.txt` files inside the archive, one for each of the lists. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Windows cihazınızdan Android'inize aktarırsanız, `.zip` dosyasını önceden Android'inize gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İçe ve Dışa Aktar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Uygulamalar için

Yukarıda bahsettiğimiz gibi, istisnalara sadece siteler kolayca eklenemez. Hangi uygulamalar için AdGuard VPN'e ihtiyacınız olduğunu ve hangi uygulamalar için ihtiyacınız olmadığını seçin.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![Uygulama istisnaları *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Ayarlar

Ekranın sağ alt kısmındaki dişli çark simgesine basarak *Ayarlar* öğesine ulaşabilirsiniz. İlk bölüm *Uygulama Ayarları* var: orada farklı seçenekleri seçerek Android için AdGuard VPN'i ihtiyacınıza göre yapılandırın.

![Uygulama ayarları *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN'i otomatik başlat

Sağa kaydırılan kaydırıcı, cihaz başlatıldıktan sonra AdGuard VPN'nin otomatik olarak başlatılmasını sağlar.

### DNS sunucuları

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. Örneğin, [AdGuard DNS](https://adguard-dns.io/kb/) reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Özel bir DNS sunucusu ekleme seçeneği de vardır.

### Otomatik koruma

Bu özellik, cihazınız bir hücresel veya Wi-Fi ağına bağlandığında AdGuard VPN'i otomatik olarak etkinleştirir.

### Kill Switch

Ekrandaki basit talimatları izleyerek Android cihazınızda Kill Switch işlevini ayarlayabilirsiniz. Bunu neden yapmalısınız? Bir mobil ağ veya genel Wi-Fi kullanırken herhangi bir nedenle VPN bağlantınız aniden kesilirse, Kill Switch internet bağlantısını otomatik olarak sonlandırarak saldırganların bilgilerinizi ele geçirmesini engeller.

Kill Switch açıksa, *Uygulama ayarları* ve *İstisnaların* çalışmayacağını unutmayın.

### Tema

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Gelişmiş ayarlar

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. Üç mod vardır: VPN, SOCKS5 ve Entegre mod. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Sonraki iki bölüm, *Günlük kayıt düzeyi* ve *Tanılama bilgisidir*. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş veya Son derece günlük kayıt düzeyinin etkinleştirilmesi tavsiye edilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

*Gelişmiş ayarların* son bölümü *Alt seviye ayarlardır*. Yüksek nitelikli değilseniz veya destek ekibimiz tarafından istenmedikçe bu bölüme girmemenizi tavsiye ederiz. Burada, VPN arayüzünde TUN arayüzü günlüğünü veya IPv6 protokolünü etkinleştirmek, kullanılması gereken bir proxy sunucu bağlantı noktası veya internet protokolü sürümünü seçmek mümkündür.

:::note Uyumluluk

*IPv6'yı Etkinleştir* öğesini yalnızca IPv6'yı destekleyen ağlar için kullanılabilir.

:::

### Destek

*Destek* bölümünde, yardım masasına daha fazla göndermek için geri bildirimde bulunabilir, bir hata bildirebilir veya günlükleri ve sistem bilgisini dışa aktarabilirsiniz.
