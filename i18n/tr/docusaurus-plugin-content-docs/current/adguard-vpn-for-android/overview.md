---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Android için AdGuard VPN nedir

VPN, internette her gezindiğinizde güvenlik ve anonimlik sağlayan ideal bir araçtır. [Nasıl çalışır?](/general/how-vpn-works.md) Teknik detaylara girmeden VPN'in kullanıcının bilgisayarı veya mobil cihazı ile uzak bir VPN sunucusu arasında güvenli bir şifreli tünel oluşturduğunu söyleyebiliriz. Bu şekilde, üçüncü taraf bir gözlemci gerçek kullanıcının IP'sini değil VPN sunucusunun IP adresini gördüğünden, kullanıcının anonimliğinin yanı sıra veri gizliliği de korunur.

**VPN sıklıkla şunlar için kullanılır:**

* Herkese açık Wi-Fi kullanırken bile kişisel verileri güvende tutmak
* IP adresini gizleyerek çevrimiçi etkinlik izlemeyi önlemek
* Anonim kalmak için gerçek coğrafi konumu gizlemek

Android için AdGuard VPN sizin için her şeyi yapabilir — ve hatta benzersiz bir şey sunabilir. AdGuard VPN'in neden daha iyi bir seçenek olduğunu öğrenmek için — [bu makaleyi](/general/why-adguard-vpn.md) okuyun.

## Android için AdGuard VPN'i kullanmaya nasıl başlanır

İlk olarak, [Google Play'den](https://play.google.com/store/apps/details?id=com.adguard.vpn) AdGuard VPN'i indirin ve AdGuard hesabınıza giriş yapın. Hesabınız yoksa — hesap [oluşturmalısınız](https://auth.adguard.com/login.html). AdGuard hesap bilgilerinizle doğrudan giriş yapabilirsiniz. Veya AdGuard hesabınız aynı e-posta adresini kullanarak kaydolduysa, bunu Google veya Facebook aracılığıyla yapın.


## Ana Ekran

Ana ekranda uygulamanın durumunu (Bağlandı ve Bağlantı kesildi) ve seçilen İstisnalar modunu ([Genel ve Seçici](#lists-of-exclusions)) yansıtan iki çubuk vardır. Aynı ekranda ayrıca bir *Bağlan ve Bağlantıyı kes* düğmesi ve kullanılabilir sunucuların bir listesi vardır.

Her sunucunun konumu ve sunucunun yanıt süresini tanımlayan ping hızı vardır. Bu değer ne kadar düşükse, bağlantınız o kadar hızlı olur. Onlarca ülkede 50'den fazla lokasyondan oluşan listenin en üstünde her zaman en hızlı seçenekler gösteriliyor. *Bağlan ve Bağlantıyı kes* düğmesine dokunarak veya bir konum seçerek en hızlı sunucuya bağlanabilirsiniz.


## İstisnalar

Sitenizi ve uygulama istisna listelerinizi yönetmenizi kolaylaştırmak için her şeyi yaptık. AdGuard VPN yalnızca seçtiğiniz yerde çalışır.


### İstisnaların listesi

İstisna listeleri, VPN'nin etkinleştirilmesi ve devre dışı bırakılması gereken siteleri seçmenize olanak tanır. *İstisnalar* bölümüne ulaşmak için ekranın alt kısmındaki soldan ikinci simgeye dokunun.

İki mod vardır: *Genel modda*, istisna listesindeki siteler hariç tutulur ve *Seçici modda*, AdGuard VPN'in çalıştığı tek siteler olacaktır.

*Hariç Tutulanlar*'a web sitelerinin alan adlarını (ör. `google.com`) veya alt alan adlarını (ör. `*.google.com`) üç şekilde ekleyebilirsiniz: bunları uygulamaya manuel olarak girin veya *Paylaş* düğmesini tıklayıp aşağıdaki açılan listeden AdGuard VPN'i seçerek doğrudan tarayıcıdan girin. Bunları, kategorilere ayrılmış yerleşik hizmet listelerinden de ekleyebilirsiniz.

![İstisnalar](https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Alan adlarının elle eklenmesinde bazı ince ayrıntılar vardır. Örneğin, `yahoo.com` alan adını elle hariç tutarsanız, tüm `*.yahoo.com` alt alanları da istisnalarda listelenir. Ancak, `yahoo.jp` veya `yahoo.fr` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye girmez. Bu durumda, her platformla ilgili tüm alt alan adlarını oraya koyduğumuz için yerleşik hizmet listelerini kullanmak daha güvenlidir.

Hizmet listelerinde alt alan adlarını etkinleştirebileceğiniz için, her hizmetin durumunu yansıtan kutular ekledik — bunları her hizmet adının solundaki *İstisnalar* ana ekranında görebilirsiniz: **tamamen etkin** durumu yeşil arka plan üzerinde beyaz bir onay işaretiyle, **tamamen devre dışı** — gri kutulu ve **kısmen etkin**, bu bir veya daha fazla parametrenin değiştirildiği anlamına gelir — beyaz arka plan üzerinde yeşil bir kare ile işaretlenmiştir. İyi haber: oradan herhangi bir alan adono sildiyseniz veya devre dışı bıraktıysanız, her zaman hizmet listelerinin varsayılan görünümüne dönebilirsiniz.

![İstisnalar](https://cdn.adguard.com/content/kb/vpn/android/statuses.png)

Bir başka kullanışlı özellik ise, *istisnaları İçe ve Dışa aktarma* özelliğidir. Hedefe ulaşmak için sadece dört adım var:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda veya tarayıcıda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `adguard_vpn_exclusions.zip` arşivi indirilecektir.
2. Arşivde, *Genel* ve *Seçici* listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Windows cihazınızdan Android'inize aktarırsanız, `.zip` dosyasını önceden Android'inize gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin.

![İçe ve Dışa Aktarma](https://cdn.adguard.com/content/kb/vpn/android/imp-exp.png)

### Uygulama Ayarları

Yukarıda bahsettiğimiz gibi, istisnalara sadece siteler kolayca eklenemez. Hangi uygulamalar için AdGuard VPN'e ihtiyacınız olduğunu ve hangi uygulamalar için ihtiyacınız olmadığını seçin. Uygulama ayarlarını açmak için ekranın alt kısmındaki *İstisna listeleri* simgesinin yanındaki simgeye dokunun. AdGuard VPN varsayılan olarak tüm uygulamalarla çalışır, ancak listedeki herhangi bir uygulamanın yanındaki kaydırıcıyı değiştirebilirsiniz — ve bunun için AdGuard VPN'i devre dışı bırakabilirsiniz.

AdGuard ile *Uyumluluk modu* etkinse, uygulamaları yalnızca AdGuard Reklam Engelleyici aracılığıyla yönetebilirsiniz. Bu nedenle, düğmeye dokunduğunuzda AdGuard uygulaması açılır.

![Uygulama ayarları](https://cdn.adguard.com/content/kb/vpn/android/apps_settings.png)


## Ayarlar

Ekranın sağ alt kısmındaki dişli çark simgesine basarak *Ayarlar* öğesine ulaşabilirsiniz. İlk bölüm *Uygulama Ayarları* var: orada farklı seçenekleri seçerek Android için AdGuard VPN'i ihtiyacınıza göre yapılandırın.

![Uygulama ayarları](https://cdn.adguard.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN'i otomatik başlat

Sağa kaydırılan kaydırıcı, cihaz başlatıldıktan sonra AdGuard VPN'nin otomatik olarak başlatılmasını sağlar.


### DNS Sunucusu

[Alan adı sisteminin](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) amacı, site adlarını tarayıcıların anlayabileceği bir şeye, yani IP adreslerine çevirmektir. Bu iş DNS sunucuları tarafından gerçekleştirilir. Android için AdGuard VPN, her biri özel niteliklere sahip birkaç DNS sunucusu seçeneği sunar. Örneğin, [AdGuard DNS](https://kb.adguard.com/en/dns/overview) reklamları kaldırır ve cihazınızı izlemeye karşı korurken AdGuard DNS Family Protection, AdGuard DNS'nin işlevlerini Güvenli Arama ve yetişkinlere yönelik içerik engelleme ile birleştirir. Özel bir DNS sunucusu ekleme seçeneği de vardır.

### Otomatik koruma

Bu özellik, cihazınız bir hücresel veya Wi-Fi ağına bağlandığında AdGuard VPN'i otomatik olarak etkinleştirir.

### Kill Switch

Ekrandaki basit talimatları takip ederek Android cihazınızda Kill Switch işlevini ayarlayabilirsiniz. Bunu neden yapmalısınız? Bir mobil ağ veya genel Wi-Fi kullanırken herhangi bir nedenle VPN bağlantınız aniden kesilirse, Kill Switch internet bağlantısını otomatik olarak sonlandırarak saldırganların bilgilerinizi ele geçirmesini engeller.

Kill Switch açıksa, *Uygulama ayarları* ve *İstisnaların* çalışmayacağını unutmayın.

### Tema

Uygulamanın sistem varsayılanı, koyu veya açık temasını seçebilirsiniz.

![Tema](https://cdn.adguard.com/content/kb/vpn/android/theme-light-dark.png)

### Gelişmiş ayarlar

*Gelişmiş ayarlarda* beş bölüm bulabilirsiniz. Üst bloktaki anahtarı açarak *Daha iyi olmamıza yardımcı* olabilirsiniz. Bu eylem, AdGuard VPN'in çökme raporları, teknik ve etkileşim verileri toplamasına olanak tanır. Bu bilgiler anonim olarak gelir.

*Çalışma modu* bölümü, üç seçenekten birini seçmenize olanak tanır: VPN, Proxy ve Uyumluluk modu. *VPN modunda* tüm trafik otomatik olarak AdGuard VPN üzerinden yönlendirilir. *Proxy modu* (SOCKS5) açıkken, AdGuard VPN, trafiğini yönlendirmek için diğer uygulamalar tarafından kullanılabilen yerel bir proxy sunucusu çalıştırır. Bu seçeneği yalnızca ne yaptığınızı biliyorsanız seçin. Etkinleştirilmiş *Uyumluluk modu*, AdGuard VPN ve AdGuard Reklam Engelleyicinin birlikte çalışmasına olanak tanır.

> Lütfen bazı AdGuard VPN özelliklerinin *Uyumluluk modunda* devre dışı bırakıldığını unutmayın: DNS sunucusu seçimi, Kill Switch ve Otomatik koruma. Ayrıca uygulama tünellemeyi yönetmek için AdGuard Reklam Engelleyici uygulamasını açmalısınız.

Sonraki iki bölüm, *Günlük kayıt düzeyi* ve *Tanılama bilgisidir*. İlk seçenekle ilgili olarak, destek ekibimiz tarafından talep edilmedikçe Genişletilmiş günlük kayıt düzeyinin etkinleştirilmesi tavsiye edilmez. Herhangi bir teknik sorun olması durumunda tanılama bilgileri, cihaz ve bağlantılarla ilgili yerel olarak saklanan teknik bilgiler (IP adresi, ID, ping, vb.) tarafımıza gönderilebilir.

*Gelişmiş ayarların* son bölümü *Alt seviye ayarlardır*. Yüksek nitelikli değilseniz veya destek ekibimiz tarafından istenmedikçe bu bölüme girmemenizi tavsiye ederiz. Orada, AdGuard VPN'i ihtiyaçlarınızı daha da fazla karşılayacak şekilde özelleştirmek için bazı seçenekler bulacaksınız. VPN arabiriminde TUN arabirimi günlüğünü veya IPv6 protokolünü etkinleştirin, kullanılması gereken bir proxy sunucu bağlantı noktası veya İnternet protokolü sürümü seçin — ancak yalnızca gerekli bilgiye sahipseniz.

### Destek

*Destek* bölümünde, yardım masasına daha fazla göndermek için geri bildirimde bulunabilir, bir hata bildirebilir veya günlükleri ve sistem bilgisini dışa aktarabilirsiniz.
 
 

