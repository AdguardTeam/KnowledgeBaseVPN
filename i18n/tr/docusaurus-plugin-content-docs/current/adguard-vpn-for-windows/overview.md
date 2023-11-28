---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Windows için AdGuard VPN nedir?

"Sanal Özel Ağ" kısaltması olan VPN, internet bağlantınızı güvenli hâle getiren ve çevrimiçi anonim kalmanıza yardımcı olan bir hizmettir. Nasıl çalışır? VPN kullanmadan bir siteyi her ziyaret ettiğinizde, İSS'niz onu görür. Kim olduğunuzu, ne aradığınızı bilir ve bu verileri toplayıp satabilir. Sırasıyla, geldiğiniz site de etkinliğinizi izleyebilir. Bir VPN uygulamasını etkinleştirdiğinizde, trafiğinizi şifreli bir tünel üzerinden uzak bir VPN sunucusuna yönlendirerek gizliliğinizi sağlar: İSS nereye istek gönderdiğinizi bilmez ve site nereden geldiğinizi bilmez.

## Windows için AdGuard VPN ne yapar

- Ağ trafiğinin kesilmesine (aldatma) karşı korur. AdGuard VPN, cihazınızla uzak sunucu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. [AdGuard'ın benzersiz protokolü](/general/adguard-vpn-protocol) sayesinde hızlı ve güvenli bir bağlantı garanti edilir.

- IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. AdGuard VPN ile daha önce de söylediğimiz gibi tüm trafiğiniz şifreli bir tünelden geçer ve VPN sunucusuna gelir. Bu nedenle, dışarıdan bakıldığında, cihazınızın söz konusu VPN sunucusunun IP adresine sahip olduğu görülmektedir.

- Gerçek konumunuzu gizler. AdGuard VPN sunucularından herhangi birini seçerek, o sunucunun konumuna anında "ışınlanırsınız". Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

Windows için AdGuard VPN'in birçok avantajı vardır, bu yüzden onlara ayrı [bir makale](/general/why-adguard-vpn) ayırdık. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/welcome.html) indirin. Kurulum bir dakikadan fazla sürmez — ve Kullanıcı Sözleşmesi ve Gizlilik politikasının şartlarını uygulayan en az bir kutuyu işaretlemeniz gereken bir uyarı penceresi görürsünüz. AdGuard'ın uygulama kullanımınız hakkında anonimleştirilmiş veriler toplamasını isteyip istemediğinize karar vermek size kalmış. Son olarak program sizden [AdGuard hesabı](https://auth.adguard.com/login.html) veya sosyal ağlar (Apple, Google, Facebook) aracılığıyla giriş yapmanızı ister. Hepsi bu kadar, artık Windows için AdGuard VPN'i kullanabilirsiniz.

## Ana ekran

![Windows Ana Sayfası için AdGuard VPN](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**Ana Ekrandaki** en dikkat çekici öğe, AdGuard VPN bağlan ve bağlantıyı kes düğmesidir. Düğmenin üstünde uygulamanın çalıştığı [modu](#exclusions) ve altında seçilen sunucuyu görebilirsiniz. Ekranın sağ tarafında mevcut tüm konumları bulabilirsiniz. En hızlı konum, yani en düşük ping değerine sahip olan, listenin en üstünde gösterilir.

Ekranın üst kısmında dört sekmeli bir gezinme paneli vardır: **Ana Sayfa**, **İstisnalar**, **Destek**, **Ayarlar**.

## İstisnalar

Windows için AdGuard VPN iki modda çalışabilir: **Genel** veya **Seçici**. Bu ne anlama geliyor? Uygulamanın bazı siteler dışında her yerde çalışmasını istiyorsanız **Genel modu** etkinleştirin ve tünelden hariç tutmak istediğiniz siteleri listeleyin. **Seçici modun** tam tersi bir etkisi vardır: AdGuard VPN'i yalnızca dışlama listesinde belirtilen sitelerde etkinleştirir. Lütfen bu iki modun istisna listelerinin birbirinden bağımsız olduğunu unutmayın.

![İstisnalar](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Alan adlarını girerek siteleri **el ile** istisnalara ekleyebilirsiniz. Uygulama ayrıca size **listeden** popüler siteleri seçme seçeneği sunar.

![İstisnalar ekle](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Listeden İstisnalar ekle](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Alan adlarını elle eklerken bazı ince ayrıntıları göz önünde bulundurmalısınız. Örneğin, `google.com` alan adını elle hariç tutarsanız, tüm `*.google.com` alt alanları da istisna listesine eklenecektir. Ancak, `google.es` veya `google.it` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye dahil edilmeyecektir.

**Listeden** seçeneğini kullanmanızı tavsiye ederiz. Siteler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Her platformla ilgili tüm alan adları ve alt alan adları dahil olmak üzere en popüler hizmetleri oraya yerleştirdik.

### İstisna listelerini içe ve dışa aktarma

Windows için AdGuard VPN'dan istisnalar listesini bilgisayarınıza aktarmak için **İstisnaları dışa aktar** öğesine tıklayın, listenin depolanacağı klasörü seçin ve **Kaydet** öğesine tıklayın. Listelerin her biri için bir tane olmak üzere iki `.txt` dosyası içeren bir `exclusions.zip` arşivi indirilecektir — **Genel** ve **Seçici**. Bunları yeni istisnalar ekleyerek veya eskileri silerek düzenleyebilirsiniz.

İstisna listelerini başka bir cihaza aktarmak için `.zip` dosyasını hedefine gönderin. İstisna listeleriyle arşivi içe aktarmak istediğiniz cihazda AdGuard VPN'i açın, *İstisnalar* ve ardından *İstisnaları içe aktar* öğesine tıklayın ve daha önce gönderilen arşivi seçin.

## Ayarlar

![Ayarlar](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

Uygulamanın sekme çubuğunun dördüncü sekmesi, uygulamayı özelleştirmenize yardımcı olacak bölümler içerir. İkisine daha yakından bakalım: **Uygulama ayarları** ve **Uygulama istisnaları**.

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

Tüm günlükler cihazınızda yerel olarak depolanır ve gerekirse bunları destek ekibine gönderebilirsiniz.

##### QUIC'i kullan

Bu, AdGuard'ın gelişmiş QUIC şifreleme protokolünü kullanmasını sağlayan deneysel bir özelliktir. Birçok avantajı vardır, ancak en dikkate değer olanı, ideal olmayan koşullarda, örneğin mobil internet kullanırken veya halka açık Wi-Fi ağlarına bağlanırken bağlantı kalitesini iyileştirebilmesidir.

### Uygulama istisnaları

![İstisnalara bir uygulama ekleme](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN yalnızca tarayıcılarınızın değil, cihazınızda yüklü diğer uygulamaların trafiğini de şifreler. Belirli uygulamaları tünelden hariç tutmak istiyorsanız, onları **Uygulama istisnaları** listesine koyun.

## Diğer sekmeler

### Hakkında

**Hakkında** sekmesi, Windows için AdGuard VPN'in geçerli sürümü hakkında bilgi, bir güncelleme düğmesi ve AdGuard VPN sitesi, SKLS ve Gizlilik politikası bağlantıları sağlar.

### Hesap

Burada lisans durumunuzla ilgili bilgilerin yanı sıra mevcut aboneliklerinizi yönetebileceğiniz ve yenilerini satın alabileceğiniz kişisel AdGuard hesabınızız bağlantısını bulabilirsiniz.

## Destek

Bu sekme, kullanıcıların sorularını çözmeyi amaçlamaktadır: burada SSS sayfasına bir bağlantı bulabilir, bir hatayı bildirebilir veya geri bildirim bırakabilir ve destek ekibi sizden isterse günlükleri dışa aktarabilirsiniz.
