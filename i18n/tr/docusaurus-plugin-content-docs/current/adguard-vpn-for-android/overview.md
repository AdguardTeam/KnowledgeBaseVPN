---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Android için AdGuard VPN nedir?

VPN, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araçtır. [Nasıl çalışır?](/general/how-vpn-works) Teknik ayrıntılara girmeden, VPN'in bir kullanıcının cihazı ile uzak bir VPN sunucusu arasında güvenli bir şifrelenmiş bağlantı (tünel olarak adlandırılır) oluşturduğunu söyleyebiliriz. Bu şekilde, üçüncü taraf bir gözlemci gerçek kullanıcının IP'sini değil VPN sunucusunun IP adresini gördüğünden, kullanıcının anonimliğinin yanı sıra veri gizliliği de korunur.

**VPN sıklıkla şunlar için kullanılır:**

- Herkese açık Wi-Fi kullanırken bile kişisel verileri güvende tutmak
- IP adresini gizleyerek çevrimiçi etkinlik izlemeyi önlemek
- Anonim kalmak için gerçek coğrafi konumu gizlemek

Android için AdGuard VPN sizin için her şeyi yapabilir — ve hatta benzersiz bir şey sunabilir. AdGuard VPN'in neden daha iyi bir seçenek olduğunu öğrenmek için — [bu makaleyi](/general/why-adguard-vpn) okuyun.

## Android için AdGuard VPN'i kullanmaya nasıl başlanır

İlk olarak, [Google Play'den](https://play.google.com/store/apps/details?id=com.adguard.vpn) AdGuard VPN'i indirin ve AdGuard hesabınıza giriş yapın. Hesabınız yoksa — hesap [oluşturmalısınız](https://auth.adguard.com/login.html). AdGuard hesap bilgilerinizle doğrudan giriş yapabilirsiniz. Veya AdGuard hesabınız aynı e-posta adresini kullanarak kaydolduysa, bunu Google veya Facebook aracılığıyla yapın.

## Ana ekran

Ana ekran VPN durumunu yansıtır (Bağlandı/Bağlantı kesildi). Ayrıca *Bağlan veya Bağlantıyı kes* düğmesi ve mevcut sunucuların bir listesi de bulunmaktadır.

Her sunucunun konumu ve sunucunun yanıt süresini tanımlayan ping hızı vardır. Bu değer ne kadar düşük olursa bağlantı o kadar hızlı olur. Onlarca ülkede 50'den fazla konumdan yer aldığı listede en hızlı sunucular her zaman en üstte yer alıyor. *Bağlan* düğmesine dokunarak veya bir konum seçerek en hızlı sunucuya bağlanabilirsiniz.

## İstisnalar

Sitenizi ve uygulama istisna listelerinizi yönetmenizi kolaylaştırmak için her şeyi yaptık. AdGuard VPN yalnızca seçtiğiniz yerde çalışır.

### İstisnaların listesi

İstisna listeleri, belirli siteler ve uygulamalar için VPN bağlantısını yönetmenize olanak tanır. *İstisnalar* bölümüne erişmek için ekranın alt kısmında soldan ikinci simgeye dokunun. *İstisnalar* bölümüne ulaşmak için ekranın alt kısmındaki soldan ikinci simgeye dokunun.

Varsayılan olarak, AdGuard VPN istisnalara eklenenler hariç tüm siteler ve uygulamalar için çalışır, ancak diğer moda kolayca geçebilirsiniz.

#### Siteler için

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to *Exclusions* in three ways:

- Uygulamaya elle girin
- Siteyi AdGuard VPN ile paylaşarak doğrudan tarayıcıdan ekleyin
- Add it from a built-in list of services

![İstisnalar](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Alan adlarının elle eklenmesinde bazı ince ayrıntılar vardır. Örneğin, `yahoo.com` alan adını elle hariç tutarsanız, tüm `*.yahoo.com` alt alanları da istisnalarda listelenir. Ancak, `yahoo.jp` veya `yahoo.fr` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye girmez. Bu durumda, her platformla ilgili tüm alt alan adlarını oraya koyduğumuz için yerleşik hizmet listelerini kullanmak daha güvenlidir.

:::

Hizmet listelerinde alt alan adlarını etkinleştirebildiğiniz için, her hizmetin durumunu yansıtan kutular ekledik — bunları her hizmet adının solundaki *İstisnalar* öğesini ana ekranında görebilirsiniz:

- **Tamamen etkin** yeşil arka plan üzerinde beyaz bir onay işaretiyle gösterilir
- **Kısmen etkin** (ana alan adı olmayan etkin alt alan adları) beyaz zemin üzerinde yeşil bir kareyle işaretlenmiştir
- **Tamamen devre dışı** boş bir onay kutusuyla işaretlenmiştir

 İyi haber: oradan herhangi bir alan adono sildiyseniz veya devre dışı bıraktıysanız, her zaman hizmet listelerinin varsayılan görünümüne dönebilirsiniz.

![İstisnalar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Bir başka kullanışlı özellik ise, *istisnaları İçe ve Dışa aktarma* özelliğidir. Hedefe ulaşmak için sadece dört adım var:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda veya tarayıcıda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `adguard_vpn_exclusions.zip` arşivi indirilecektir.
2. Arşivin içinde her liste için bir tane olmak üzere iki adet `.txt` dosyası bulunmaktadır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Windows cihazınızdan Android'inize aktarırsanız, `.zip` dosyasını önceden Android'inize gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İçe ve Dışa Aktar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Uygulamalar için

Yukarıda bahsettiğimiz gibi, istisnalara sadece siteler kolayca eklenemez. Hangi uygulamalar için AdGuard VPN'e ihtiyacınız olduğunu ve hangi uygulamalar için ihtiyacınız olmadığını seçin.

*Entegre modda*, uygulamaları yalnızca AdGuard Reklam Engelleyici aracılığıyla yönetebilirsiniz.

![Uygulama istisnaları *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Ayarlar

Ekranın sağ alt kısmındaki dişli çark simgesine basarak *Ayarlar* öğesine ulaşabilirsiniz. İlk bölüm *Uygulama Ayarları* var: orada farklı seçenekleri seçerek Android için AdGuard VPN'i ihtiyacınıza göre yapılandırın.

![Uygulama ayarları *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN'i otomatik başlat

Sağa kaydırılan kaydırıcı, cihaz başlatıldıktan sonra AdGuard VPN'nin otomatik olarak başlatılmasını sağlar.

### DNS sunucuları

DNS sunucuları, sitelerin adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirir. Android için AdGuard VPN, her biri özel niteliklere sahip çok çeşitli DNS sunucuları sunar. Örneğin, [AdGuard DNS](https://adguard-dns.io/kb/) reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Özel bir DNS sunucusu ekleme seçeneği de vardır.

### Otomatik koruma

Bu özellik, cihazınız bir hücresel veya Wi-Fi ağına bağlandığında AdGuard VPN'i otomatik olarak etkinleştirir.

### Kill Switch

Ekrandaki basit talimatları izleyerek Android cihazınızda Kill Switch işlevini ayarlayabilirsiniz. Bunu neden yapmalısınız? Bir mobil ağ veya genel Wi-Fi kullanırken herhangi bir nedenle VPN bağlantınız aniden kesilirse, Kill Switch internet bağlantısını otomatik olarak sonlandırarak saldırganların bilgilerinizi ele geçirmesini engeller.

Kill Switch açıksa, *Uygulama ayarları* ve *İstisnaların* çalışmayacağını unutmayın.

### Tema

Uygulamanın sistem varsayılan, sistem dinamik, koyu veya açık temasını seçebilirsiniz.

![Sistem dinamik teması *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Açık tema *mobil_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Koyu tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Gelişmiş ayarlar

*Gelişmiş ayarlarda* dört bölüm bulabilirsiniz.

*Çalışma modu* trafiğinizin nasıl yönlendirileceğini belirlemenizi sağlar. Üç mod vardır: VPN, SOCKS5 ve Entegre mod. *VPN* modda, tüm trafik AdGuard VPN üzerinden yönlendirilir. *SOCKS5* modunda AdGuard VPN, trafik yönlendirme için diğer uygulamalar tarafından kullanılabilen yerel bir proxy sunucusu çalıştırır. *Entegre mod*, AdGuard VPN ve AdGuard Reklam Engelleyicinin birlikte çalışmasını sağlar.

:::note

Bazı AdGuard VPN özellikleri *Tümleşik modda devre dışı bırakılır*: DNS sunucuları, Kill Switch, Otomatik koruma ve Uygulama istisnaları. AdGuard Reklam Engelleyici uygulamasında DNS korumasını yönetebilir ve uygulamaları AdGuard VPN proxy'niz üzerinden yönlendirebilirsiniz.

:::

Sonraki iki bölüm, *Günlük kayıt düzeyi* ve *Tanılama bilgisidir*. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş veya Son derece günlük kayıt düzeyinin etkinleştirilmesi tavsiye edilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

*Gelişmiş ayarların* son bölümü *Alt seviye ayarlardır*. Yüksek nitelikli değilseniz veya destek ekibimiz tarafından istenmedikçe bu bölüme girmemenizi tavsiye ederiz. Burada, VPN arayüzünde TUN arayüzü günlüğünü veya IPv6 protokolünü etkinleştirmek, kullanılması gereken bir proxy sunucu bağlantı noktası veya internet protokolü sürümünü seçmek mümkündür.

:::note Uyumluluk

*IPv6'yı Etkinleştir* öğesini yalnızca IPv6'yı destekleyen ağlar için kullanılabilir.

:::

### Destek

*Destek* bölümünde, yardım masasına daha fazla göndermek için geri bildirimde bulunabilir, bir hata bildirebilir veya günlükleri ve sistem bilgisini dışa aktarabilirsiniz.
