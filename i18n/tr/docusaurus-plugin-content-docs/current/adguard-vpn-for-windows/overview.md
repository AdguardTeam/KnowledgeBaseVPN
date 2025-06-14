---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Windows için AdGuard VPN ne yapar

- Ağ trafiğinin kesilmesine (aldatma) karşı korur. AdGuard VPN, cihazınızla uzak sunucu arasında şifrelenmiş bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. [AdGuard'ın benzersiz protokolü](/general/adguard-vpn-protocol) sayesinde hızlı ve güvenli bir bağlantı garanti edilir.

- IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. AdGuard VPN ile tüm trafiğiniz şifrelenmiş bir tünelden geçer ve VPN sunucusuna gelir. Web sunucusu, cihazın gerçek IP adresini değil, tünelin uç noktasının IP adresini, yani VPN sunucusunu kaydeder.

- Gerçek konumunuzu gizler. Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

Windows için AdGuard VPN'in birçok avantajı vardır, bu yüzden onlara ayrı [bir makale](/general/why-adguard-vpn) ayırdık. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/welcome.html) indirin. Kurulum bir dakikadan fazla sürmez — ve Kullanıcı Sözleşmesi ve Gizlilik politikasının şartlarını uygulayan en az bir kutuyu işaretlemeniz gereken bir uyarı penceresi görürsünüz. AdGuard'ın uygulama kullanımınız hakkında anonimleştirilmiş veriler toplamasını isteyip istemediğinize karar vermek size kalmış. Son olarak program sizden [AdGuard hesabı](https://auth.adguardaccount.com/login.html) veya sosyal ağlar (Apple, Google, Facebook) aracılığıyla giriş yapmanızı ister. Hepsi bu kadar, artık Windows için AdGuard VPN'i kullanabilirsiniz.

## Ana ekran

![Ana ekran](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

**Ana ekranındaki** en dikkat çekici öğe, altında seçilen sunucuyu görebileceğiniz AdGuard VPN *Bağlan veya Bağlantıyı kes* düğmesidir. Ekranın sağ tarafında mevcut konumların bir listesini göreceksiniz. En hızlı konum, yani en düşük ping değerine sahip olan, listenin en üstünde gösterilir. Herhangi bir konum çevrimdışıysa tıklayabileceğiniz bir yenileme düğmesi de vardır.

Ayrıca hızlı bir şekilde erişmek için favori konumlarınızı kaydedebilirsiniz. Sadece bir konumun üzerine gelin, görünen yer işareti simgesine tıklayın ve kaydedilecektir. İşaretlediğiniz konumlar daha sonra *Kaydedilenler* sekmesinde görünür.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**, **Support**, and **Settings**.

## İstisnalar

Varsayılan olarak, Windows için AdGuard VPN her yerde çalışır. VPN tünelinden hariç tutmak istediğiniz siteleri ve uygulamaları istisnalar listesine ekleyebilirsiniz. Veya AdGuard VPN'in yalnızca istisnalar listesinde belirtilen sitelerde ve uygulamalarda çalışmasını sağlayabilirsiniz. Lütfen bu iki listenin birbirinden bağımsız olduğunu unutmayın.

![İstisnalar *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

Alan adlarını girerek siteleri **el ile** istisnalara ekleyebilirsiniz. Uygulama ayrıca size **listeden** popüler siteleri seçme seçeneği sunar.

![Listeden İstisnalar ekle *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Alan adlarını elle eklerken belirli ayrıntıları dikkate almalısınız. Örneğin, `google.com` alan adını elle hariç tutarsanız, tüm `*.google.com` alt alanları da istisna listesine eklenecektir. Ancak, `google.es` veya `google.it` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye dâhil edilmeyecektir.

:::

**Listeden** seçeneğini kullanmanızı öneririz. Siteler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Her platformla ilgili tüm alan adları ve alt alan adları dâhil olmak üzere en popüler hizmetleri oraya yerleştirdik.

:::info İstisnalara eklenen tarayıcılar

Sürüm 2.4'ten başlayarak, VPN yalnızca seçilen uygulamalar ve siteler için etkin olduğunda tüm tarayıcılar otomatik olarak istisnalar listesine eklenir. Bu değişiklik, genellikle kafası karışan ve tarayıcılarını uygulama olarak kabul edip etmeyeceklerini bilmeyen kullanıcılar için daha fazla kolaylık sağlıyor. Aşağıdaki koşullar altında uygulanır:

- Kullanıcı AdGuard VPN'i ilk kez yüklediyse
- Kullanıcı sürüm 2.4'ten önce İstisnalar ayarlarını değiştirmediyse

:::

### İstisna listelerini içe ve dışa aktarma

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. The archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. Bunları yeni istisnalar ekleyerek veya eskileri silerek düzenleyebilirsiniz.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## İstatistikler

![İstatistikler ekranı *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

İstatistikler ekranı, veri kullanımınız hakkında hem konuma hem de uygulamaya göre kategorize edilmiş ayrıntılı bilgiler gösterir. En sık kullandığınız konumları ve uygulamaları vurgular. Farklı zaman dilimleri için istatistiklere erişebilirsiniz: günlük, aylık veya Windows için AdGuard VPN'i kullandığınız tüm süre boyunca.

En önemlisi, tüm bu bilgiler yalnızca cihazınızda saklanır ve yalnızca sizin görüntüleyebilmenizi sağlar. İstatistikler özelliğine erişim yalnızca AdGuard VPN aboneleri tarafından kullanılabilir.

## Ayarlar

![Ayarlar *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

Beşinci sekme, uygulamayı özelleştirmenize yardımcı olacak bölümler içerir.

### Uygulama ayarları

![Uygulama ayarları *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

**Uygulama ayarları** bölümünde, uygulama dilini ayarlayabilir ve ayrıca VPN bağlantınız kesilirse internete erişimi engelleyen **Kill Switch** öğesini etkinleştirebilirsiniz. Bu, halka açık bir Wi-Fi veya mobil ağa bağlıyken kendinizi VPN koruması olmadan bulursanız, izinsiz girişlerin verilerinize erişmesini önlemek için gereklidir.

Aşağıdaki özellikleri de tek bir tıklamayla etkinleştirebilirsiniz: **Otomatik güncelle**, **AdGuard VPN'i Windows başlangıcında başlat**, **Uygulama başlatıldığında otomatik bağlan** ve AdGuard ekibinin olası kullanılabilirlik sorunları hakkında bilgi alabilmesi için AdGuard'ın anonim uygulama kullanım verilerini toplamasına izin ver. Here you can also change the theme to **Light**, **System**, or **Dark**.

Sayfanın altında iki bölüm vardır: **DNS sunucuları** ve **Gelişmiş ayarlar**.

#### DNS sunucuları

**DNS sunucuları** sekmesi, el ile veya listeden kendi DNS sunucunuzu eklemenize olanak tanır. Herhangi bir sağlayıcı tarafından bir DNS sunucusu ayarlayabilirsiniz. Standart işlevlere ek olarak reklam, izleme ve kimlik avına karşı koruma sağlayabilen bir sunucu olan [AdGuard DNS'i](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns) eklemenizi öneririz.

#### Gelişmiş ayarlar

Gelişmiş ayarlara hiç dokunmadan Windows için AdGuard VPN'i kullanmak tamamen mümkündür, ancak ne yaptıklarını öğrenmek için zaman ayırmaya istekliyseniz, bunlar yararlı olabilir.

##### Çalışma modu

İki çalışma modu olmasına rağmen — VPN ve SOCKS5 — yalnızca varsayılan olarak seçileni (VPN) kullanmanızı öneririz. **VPN modu** etkinleştirildiğinde, cihazınızın tüm trafiği AdGuard VPN üzerinden yönlendirilirken, **SOCKS5 modunda** AdGuard VPN, trafiğini yeniden yönlendirmek için diğer uygulamalar tarafından kullanılabilecek bir yerel proxy sunucusu kullanır.

##### Günlük kayıt düzeyi

Aralarından seçim yapabileceğiniz iki günlük kayıt düzeyi mevcuttur: **Varsayılan olarak kaydet** ve **Her şeyi kaydet**. İlk seçenek varsayılan olarak etkindir. **Her şeyi kaydet** seçeneği, yalnızca destek ekibimiz sizden bunu yapmanızı isterse etkinleştirilmelidir. Uygulamayı bu modda uzun süre kullanmak, pil tüketiminin artmasına neden olur.

Tüm günlükler cihazınızda yerel olarak depolanır ve gerekirse bunları destek ekibine gönderebilirsiniz.

##### Kuantum sonrası kriptografi

![Kuantum sonrası kriptografi *border](https://cdn.adtidy.org/blog/new/qe7fgimage_3.png)

This feature encrypts your traffic in a way that even quantum computers can’t intercept it.

##### QUIC'i kullan

Bu, AdGuard'ın gelişmiş QUIC şifreleme protokolünü kullanmasını sağlayan deneysel bir özelliktir. Birçok avantajı vardır, ancak en dikkate değer olanı, ideal olmayan koşullarda, örneğin mobil internet kullanırken veya halka açık Wi-Fi ağlarına bağlanırken bağlantı kalitesini iyileştirebilmesidir.

##### WinTun'u kullan

WinTun, Windows'ta VPN uygulamaları için yaygın olarak kullanılan ve sanal bir ağ bağdaştırıcısı oluşturarak VPN bağlantılarının kalitesini artıran bir trafik yönlendirme sürücüsüdür. Varsayılan olarak AdGuard VPN normal WFP sürücüsünü (ve Windows 7 için TDI sürücüsünü) kullanır.

#### Alt ağ istisnaları

Bu özellik, ağınıza bağlı belirli cihazlardan gelen trafiği hariç tutmak için alt ağlar eklemenize olanak tanır. Örneğin, robot elektrikli süpürgeniz.

## Diğer sekmeler

### Hakkında

**Hakkında** sekmesi, Windows için AdGuard VPN'in mevcut sürümü hakkında bilgi, bir güncelleme düğmesi ve AdGuard VPN sitesi, SKLS ve Gizlilik politikası bağlantıları sağlar.

### Hesap

Burada lisans durumunuzla ilgili bilgilerin yanı sıra mevcut aboneliklerinizi yönetebileceğiniz ve yenilerini satın alabileceğiniz kişisel AdGuard hesabınıza bir bağlantı bulabilirsiniz.

## Destek

Bu sekme, kullanıcıların sorularını çözmeyi amaçlamaktadır: burada SSS sayfasına bir bağlantı bulabilir, bir hatayı bildirebilir veya geri bildirim bırakabilir ve destek ekibi sizden isterse günlükleri dışa aktarabilirsiniz.
