---
title: Özelliklere genel bakış
sidebar position: 1
---

## Windows için AdGuard VPN nedir

"Sanal özel ağ" kısaltması olan VPN, internet bağlantınızı güvenli hâle getiren ve çevrimiçi anonim kalmanıza yardımcı olan bir hizmettir. Nasıl çalışır? VPN kullanmadan bir siteyi her ziyaret ettiğinizde, İSS'niz onu görür. Kim olduğunuzu, ne aradığınızı bilir ve bu verileri toplayıp satabilir. Sırasıyla, geldiğiniz site de etkinliğinizi izleyebilir. Bir VPN uygulamasını etkinleştirdiğinizde, trafiğinizi şifreli bir tünel üzerinden uzak bir VPN sunucusuna yönlendirerek gizliliğinizi sağlar: İSS nereye istek gönderdiğinizi bilmez ve site nereden geldiğinizi bilmez.

**Windows için AdGuard VPN ne yapar**

* Protects from network traffic interception (spoofing). AdGuard VPN, cihazınızla uzak sunucu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. [AdGuard'ın benzersiz protokolü](/general/adguard-vpn-protocol.mdx) sayesinde hızlı ve güvenli bir bağlantı garanti edilir.

* IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. AdGuard VPN ile daha önce de söylediğimiz gibi tüm trafiğiniz şifreli bir tünelden geçer ve VPN sunucusuna gelir. Bu nedenle, dışarıdan bakıldığında, cihazınızın söz konusu VPN sunucusunun IP adresine sahip olduğu görülmektedir.

* Gerçek konumunuzu gizler. AdGuard VPN sunucularından herhangi birini seçerek, o sunucunun konumuna anında "ışınlanırsınız". Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

Windows için AdGuard VPN'in birçok avantajı vardır, bu yüzden onlara ayrı [bir makale](/general/why-adguard-vpn.md) ayırdık. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/en/welcome.html) indirin. Kurulum bir dakikadan fazla sürmez — ve Kullanıcı Sözleşmesi ve Gizlilik Politikasının şartlarını uygulayan en az bir kutuyu işaretlemeniz gereken bir uyarı penceresi görürsünüz. AdGuard'ın uygulama kullanımınız hakkında anonimleştirilmiş veriler toplamasını isteyip istemediğinize karar vermek size kalmış. Son olarak program sizden [AdGuard hesabı](https://auth.adguard.com/login.html) veya sosyal ağlar (Apple, Google, Facebook) aracılığıyla giriş yapmanızı ister. Hepsi bu kadar, artık Windows için AdGuard VPN'i kullanabilirsiniz.


## Ana Ekran

![Windows Ana Sayfası için AdGuard VPN](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

**Ana Ekrandaki** en dikkat çekici öğe, AdGuard VPN bağlan ve bağlantıyı kes düğmesidir. Altında, uygulamanın çalıştığı [modu](#exclusions) ve aşağıda seçilen sunucuyu görebilirsiniz. Ekranın sağ tarafında mevcut tüm konumları bulursunuz ve en hızlı, yani en kısa ping ile listenin başında listelenecektir.

Ekranın üst kısmında dört sekmeli bir gezinme paneli vardır: **Ana Sayfa**, **İstisnalar**, **Destek**, **Ayarlar**. İlk sekme yapıldıktan sonra devam edelim.


## İstisnalar

Windows için AdGuard VPN iki modda çalışabilir: **Genel** veya **Seçici**. Ne anlama geliyor? Uygulamanın birkaç site dışında tüm sitelerde çalışmasını istiyorsanız, **Genel modunu** etkinleştirin ve tünelden çıkarmak istediğiniz kaynakları listeleyin. **Seçici modun** tam tersi bir etkisi vardır: AdGuard VPN'i yalnızca dışlama listesinde belirtilen sitelerde etkinleştirir. Lütfen bu iki modun istisna listelerinin birbirinden bağımsız olduğunu unutmayın.

![İstisnalar](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

İstisna listeleri oluşturmak için iki seçenek vardır: **El ile** ve **Listeden**. **Site ekle** satırına tıklayın ve istisnalara site eklemek için tercih ettiğiniz biçimi seçin.

![İstisnalar ekle](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Listeden İstisnalar ekle](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Alan adlarını elle eklerken bazı ince ayrıntıları göz önünde bulundurmalısınız. Örneğin, `google.com` alan adını elle hariç tutarsanız, tüm `*.google.com` alt alanları da istisna listesine eklenecektir. Ancak, `google.es` veya `google.it` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır. Veya `youtube.com` alan adını istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` alan adı listeye dahil edilmeyecektir.

Gereksiz güçlüklerden kaçınmak için **Listeden** seçeneğini kullanmanızı tavsiye ederiz. Zaten sizin için sekiz farklı popüler hizmet kategorisini grupladık: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Her platformla ilgili tüm alan adları ve alt alan adları dahil olmak üzere en popüler hizmetleri oraya yerleştirdik. Bu şekilde, VPN açıkken veya tam tersi durumda çalışmaya devam etmesini istediğiniz herhangi bir hizmeti veya alan adınını unutmadığınızdan emin olacaksınız.

### İstisna listelerini içe ve dışa aktarma

Ekranın sağ tarafında **İstisnalar** sekmesinde **Eylemler** bölümü vardır. Hazır istisna listelerini dışa veya içe aktarmanız gerekiyorsa kullanışlı olabilir.

Windows için AdGuard'dan istisnalar listesini bilgisayarınıza aktarmak için **İstisnaları dışa aktar** öğesine tıklayın, listenin depolanacağı klasörü seçin ve **Kaydet** öğesine tıklayın. Listelerin her biri için bir tane olmak üzere iki `.txt` dosyası içeren bir `exclusions.zip` arşivi indirilecektir — **Genel** ve **Seçici**. Bunları yeni istisnalar ekleyerek veya eskileri silerek düzenleyebilirsiniz.

İstisna listelerini başka bir cihaza aktarmak için `.zip` dosyasını hedefine gönderin. Hazır istisna listeleri ile arşivi içe aktarmak istediğiniz cihazda AdGuard VPN'i açın, *İstisnalar* ve ardından *İstisnaları içe aktar* öğesine tıklayın ve daha önce gönderilen arşivi seçin.

## Ayarlar

![Ayarlar](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

Uygulamanın sekme çubuğunun dördüncü sekmesi, uygulamayı özelleştirmenize yardımcı olacak bölümler içerir. İkisine daha yakından bakalım: **Genel** ve **Bölünmüş tünelleme**.


### Genel

**Genel** bölümü birçok kullanışlı özellik içerir. Burada uygulama dilini ayarlayabilir ve ayrıca VPN bağlantınız başarısız olursa internet erişimini engelleyen **Kill Switch** ayarını etkinleştirebilirsiniz. Bu, halka açık bir Wi-Fi veya mobil ağa bağlıyken kendinizi VPN koruması olmadan bulursanız, izinsiz girişlerin verilerinize erişmesini önlemek için gereklidir.

Aşağıdaki özellikleri de tek bir tıklamayla etkinleştirebilirsiniz: **Otomatik güncelle**, **AdGuard VPN'i Windows başlangıcında başlat**, **Uygulama başlatıldığında otomatik bağlan** ve AdGuard'ın daha iyi hâle getirebilmemiz için anonim uygulama kullanım verilerini toplamasına izin ver. Burada ayrıca varsayılan **Açık Temayı** **Koyu Tema** olarak değiştirebilirsiniz.

Sayfanın altında iki bölüm vardır: **DNS sunucuları** ve **Gelişmiş ayarlar**.

![DNS ayarları ve Gelişmiş ayarlar](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS sunucuları

**DNS sunucuları** sekmesi, kendi özel DNS sunucunuzu eklemenizi sağlar. Bunu neden yapmalısınız? Örneğin, genellikle İSS'niz tarafından kontrol edilen varsayılan DNS sunucusuna güvenmemek.

Herhangi bir sağlayıcı tarafından bir DNS sunucusu ayarlayabilirsiniz. Standart işlevlere ek olarak reklam, izleme ve kimlik avına karşı koruma sağlayabilen bir sunucu olan [AdGuard DNS'i](https://kb.adguard.com/en/general/dns-providers#adguard-dns) eklemenizi tavsiye ederiz.

#### Gelişmiş Ayarlar

Gelişmiş ayarlara hiç dokunmadan Windows için AdGuard VPN'i kullanmak tamamen mümkündür, ancak ne yaptıklarını öğrenmek için zaman ayırmaya istekliyseniz, bunlar yararlı olabilir.

**Çalışma Modu**

İki çalışma modu olmasına rağmen — VPN ve SOCKS5 — yalnızca varsayılan olarak seçileni (VPN) kullanmanızı tavsiye ederiz. **VPN modu** etkinleştirildiğinde, cihazınızın tüm trafiği AdGuard VPN üzerinden yönlendirilirken, **SOCKS5 modunda** AdGuard VPN, trafiğini yeniden yönlendirmek için diğer uygulamalar tarafından kullanılabilecek bir yerel proxy sunucusu kullanır.

**Günlük kayıt düzeyi**

Aralarından seçim yapabileceğiniz iki günlük kayıt düzeyi mevcuttur: **Varsayılan olarak kaydet** ve **Her şeyi kaydet**. İlk seçenek varsayılan olarak etkindir. **Her şeyi kaydet** seçeneği, yalnızca destek ekibimiz sizden bunu yapmanızı isterse etkinleştirilmelidir. Uygulamayı bu modda uzun süre kullanmak, batarya tüketiminin artmasına neden olur.

Tüm günlükler cihazınızda yerel olarak depolanır ve gerekirse bunları destek ekibine gönderebilirsiniz.

**QUIC'i kullan**

Bu, AdGuard'ın gelişmiş QUIC şifreleme protokolünü kullanmasını sağlayan deneysel bir özelliktir. Birçok avantajı vardır, ancak en dikkate değer olanı, ideal olmayan koşullarda, örneğin mobil internet kullanırken veya halka açık Wi-Fi ağlarına bağlanırken bağlantı kalitesini iyileştirebilmesidir.


### Bölünmüş tünelleme

![Bölünmüş tünelleme](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN, yalnızca tarayıcılarınızın değil, bilgisayarınızda kurulu olan diğer uygulamaların da trafiğini şifreler. Belirli uygulamaları AdGuard'ın çalışmasından çıkarmak istiyorsanız, bunları **Bölünmüş tünelleme** listesine koyun.

## Diğer sekmeler

### Hakkında

**Program hakkında** sekmesi, Windows için AdGuard VPN'in mevcut sürümü hakkında bilgi, bir güncelleme düğmesi ve birkaç faydalı bağlantı sağlar: AdGuard sitesi, forum, SKLS ve Gizlilik Politikası.

### Lisans hakkında

Burada lisans durumunuzla ilgili bilgilerin yanı sıra mevcut aboneliklerinizi yönetebileceğiniz ve yenilerini satın alabileceğiniz kişisel AdGuard hesabınıza bir bağlantı bulacaksınız.

## Destek

Bu sekmede birçok faydalı bağlantı topladık: SSS sayfası, uygulama geri bildirim formu, sosyal medya sayfaları ve **Bilgi Tabanı**.