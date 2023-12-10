---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Windows için AdGuard VPN ne yapar

- Ağ trafiğinin kesilmesine (aldatma) karşı korur. AdGuard VPN, cihazınızla uzak sunucu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. [AdGuard'ın benzersiz protokolü](/general/adguard-vpn-protocol) sayesinde hızlı ve güvenli bir bağlantı garanti edilir.

- IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Gerçek konumunuzu gizler. AdGuard VPN sunucularından herhangi birini seçerek, o sunucunun konumuna anında "ışınlanırsınız". Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

Windows için AdGuard VPN'in birçok avantajı vardır, bu yüzden onlara ayrı [bir makale](/general/why-adguard-vpn) ayırdık. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/welcome.html) indirin. Kurulum bir dakikadan fazla sürmez — ve Kullanıcı Sözleşmesi ve Gizlilik politikasının şartlarını uygulayan en az bir kutuyu işaretlemeniz gereken bir uyarı penceresi görürsünüz. AdGuard'ın uygulama kullanımınız hakkında anonimleştirilmiş veriler toplamasını isteyip istemediğinize karar vermek size kalmış. Son olarak program sizden [AdGuard hesabı](https://auth.adguard.com/login.html) veya sosyal ağlar (Apple, Google, Facebook) aracılığıyla giriş yapmanızı ister. Hepsi bu kadar, artık Windows için AdGuard VPN'i kullanabilirsiniz.

## Ana ekran

![Windows Ana Sayfası için AdGuard VPN](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**Ana Ekrandaki** en dikkat çekici öğe, AdGuard VPN bağlan ve bağlantıyı kes düğmesidir. Düğmenin üstünde uygulamanın çalıştığı [modu](#exclusions) ve altında seçilen sunucuyu görebilirsiniz. Ekranın sağ tarafında mevcut tüm konumları bulabilirsiniz. En hızlı konum, yani en düşük ping değerine sahip olan, listenin en üstünde gösterilir.

Ekranın üst kısmında dört sekmeli bir gezinme paneli vardır: **Ana Sayfa**, **İstisnalar**, **Destek**, **Ayarlar**.

## İstisnalar

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![İstisnalar](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Alan adlarını girerek siteleri **el ile** istisnalara ekleyebilirsiniz. Uygulama ayrıca size **listeden** popüler siteleri seçme seçeneği sunar.

![İstisnalar ekle](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Listeden İstisnalar ekle](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note When adding domains manually, you should take into account some nuances. Örneğin, `google.com` alan adını elle hariç tutarsanız, tüm `*.google.com` alt alanları da istisna listesine eklenecektir. Ancak, `google.es` veya `google.it` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye dahil edilmeyecektir.

:::

**Listeden** seçeneğini kullanmanızı tavsiye ederiz. Siteler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Her platformla ilgili tüm alan adları ve alt alan adları dahil olmak üzere en popüler hizmetleri oraya yerleştirdik.

### İstisna listelerini içe ve dışa aktarma

Windows için AdGuard VPN'dan istisnalar listesini bilgisayarınıza aktarmak için **İstisnaları dışa aktar** öğesine tıklayın, listenin depolanacağı klasörü seçin ve **Kaydet** öğesine tıklayın. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. Bunları yeni istisnalar ekleyerek veya eskileri silerek düzenleyebilirsiniz.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Ayarlar

![Ayarlar](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Uygulama ayarları

![Uygulama ayarları](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

**Uygulama ayarları** bölümünde, uygulama dilini ayarlayabilir ve ayrıca VPN bağlantınız kesilirse internete erişimi engelleyen **Kill Switch** öğesini etkinleştirebilirsiniz. Bu, halka açık bir Wi-Fi veya mobil ağa bağlıyken kendinizi VPN koruması olmadan bulursanız, izinsiz girişlerin verilerinize erişmesini önlemek için gereklidir.

Aşağıdaki özellikleri de tek bir tıklamayla etkinleştirebilirsiniz: **Otomatik güncelle**, **AdGuard VPN'i Windows başlangıcında başlat**, **Uygulama başlatıldığında otomatik bağlan** ve AdGuard ekibinin olası kullanılabilirlik sorunları hakkında bilgi alabilmesi için AdGuard'ın anonimleştirilmiş uygulama kullanım verilerini toplamasına izin ver. Burada ayrıca temayı **Açık**, **Sistem** veya **Koyu** olarak değiştirebilirsiniz.

Sayfanın altında iki bölüm vardır: **DNS sunucuları** ve **Gelişmiş ayarlar**.

#### DNS sunucuları

**DNS sunucuları** sekmesi, kendi DNS sunucunuzu eklemenizi sağlar. Herhangi bir sağlayıcı tarafından bir DNS sunucusu ayarlayabilirsiniz. Standart işlevlere ek olarak reklam, izleme ve kimlik avına karşı koruma sağlayabilen bir sunucu olan [AdGuard DNS'i](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns) eklemenizi tavsiye ederiz.

#### Gelişmiş ayarlar

Gelişmiş ayarlara hiç dokunmadan Windows için AdGuard VPN'i kullanmak tamamen mümkündür, ancak ne yaptıklarını öğrenmek için zaman ayırmaya istekliyseniz, bunlar yararlı olabilir.

##### Çalışma modu

İki çalışma modu olmasına rağmen — VPN ve SOCKS5 — yalnızca varsayılan olarak seçileni (VPN) kullanmanızı tavsiye ederiz. **VPN modu** etkinleştirildiğinde, cihazınızın tüm trafiği AdGuard VPN üzerinden yönlendirilirken, **SOCKS5 modunda** AdGuard VPN, trafiğini yeniden yönlendirmek için diğer uygulamalar tarafından kullanılabilecek bir yerel proxy sunucusu kullanır.

##### Günlük kayıt düzeyi

Aralarından seçim yapabileceğiniz iki günlük kayıt düzeyi mevcuttur: **Varsayılan olarak kaydet** ve **Her şeyi kaydet**. İlk seçenek varsayılan olarak etkindir. **Her şeyi kaydet** seçeneği, yalnızca destek ekibimiz sizden bunu yapmanızı isterse etkinleştirilmelidir. Uygulamayı bu modda uzun süre kullanmak, batarya tüketiminin artmasına neden olur.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### QUIC'i kullan

Bu, AdGuard'ın gelişmiş QUIC şifreleme protokolünü kullanmasını sağlayan deneysel bir özelliktir. Birçok avantajı vardır, ancak en dikkate değer olanı, ideal olmayan koşullarda, örneğin mobil internet kullanırken veya halka açık Wi-Fi ağlarına bağlanırken bağlantı kalitesini iyileştirebilmesidir.

### Uygulama istisnaları

![İstisnalara bir uygulama ekleme](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. Belirli uygulamaları tünelden hariç tutmak istiyorsanız, onları **Uygulama istisnaları** listesine koyun.

## Diğer sekmeler

### Hakkında

**Hakkında** sekmesi, Windows için AdGuard VPN'in geçerli sürümü hakkında bilgi, bir güncelleme düğmesi ve AdGuard VPN sitesi, SKLS ve Gizlilik politikası bağlantıları sağlar.

### Hesap

Burada lisans durumunuzla ilgili bilgilerin yanı sıra mevcut aboneliklerinizi yönetebileceğiniz ve yenilerini satın alabileceğiniz kişisel AdGuard hesabınızız bağlantısını bulabilirsiniz.

## Destek

Bu sekme, kullanıcıların sorularını çözmeyi amaçlamaktadır: burada SSS sayfasına bir bağlantı bulabilir, bir hatayı bildirebilir veya geri bildirim bırakabilir ve destek ekibi sizden isterse günlükleri dışa aktarabilirsiniz.
