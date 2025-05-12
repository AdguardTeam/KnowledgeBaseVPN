---
title: VPN nasıl çalışır
sidebar_position: 1
---

AdGuard VPN'in nasıl çalıştığını anlamak için, öncelikle VPN hizmetinin genel ilkelerini anlamalısınız.

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN özellikleri

VPN, konumunuzu gizlemeye ve Web'deki verilerinizi korumaya yardımcı olan bir sanal özel ağdır. Bir VPN, bir bilgisayarı veya mobil cihazı bir VPN sunucusuna bağlar ve bu sunucunun IP adresini kullanarak dışarıdan bir gözlemciye sizin başka bir yerde olduğunuzu göstermesini sağlar. Bu, çeşitli internet kaynaklarına güvenli bir şekilde erişmenizi ve kişisel verilerinizi korumanızı sağlar.

Bu şekilde, bir VPN iki önemli işlevi yerine getirir:

1. **Anonimliğin korunması**

    Bir internet bağlantısı kullanarak, kullanıcı, daha sonra üçüncü şahıslar tarafından analiz edilebilecek ve kullanılabilecek dijital ayak izini bırakır. Örneğin, ziyaret ettiğiniz çevrimiçi mağazalardan biri arama geçmişinizi kaydedebilir ve ardından hedefli reklamcılık yoluyla size ürünlerini buna göre sunabilir. Veya cihazınızın IP adresi üzerinden konumunuzu öğrenen ve kimliğinizi belirleyen gizli servisler, web üzerindeki hareketlerinizi gizlice izleyebilir. Buna ek olarak, web tarayıcıları ve İSS'lerin kendileri, tarama geçmişinizi kendi amaçları için kullanabilir, ayrıca reklamcılara satabilir ve devlet kurumlarına sağlayabilir. VPN, IP adresinizi gizlemenize ve bağlı olduğunuz VPN sunucusunun IP adresiyle değiştirmenize olanak tanır. Bu şekilde gizliliğinizi koruyabilecek ve web'de anonim olarak bilgi arayabileceksiniz.

2. **Veri koruması**

    Güvenilir olmayan veya herkese açık bir ağa bağlanırsanız cihazınızdaki veriler siber suçlulara karşı savunmasız hâle gelebilir. Banka kartı bilgileri, kullanıcı adları ve şifreler, pasaport verileri — tüm bu veriler çevrimiçi dolandırıcılar tarafından ele geçirilebilir. VPN tüneli, Web'e gönderdiğiniz ve Web'den aldığınız bilgileri şifreleyerek yanlış ellerde işe yaramaz hâle getirir.

## VPN yapısı

Bir ağa bağlandığınızda, bilgisayarınıza veya mobil cihazınıza benzersiz bir kimlik numarası veya IP adresi atanır. Genellikle 0 ile 255 arasında nokta veya iki nokta üst üste ile ayrılmış sayılardan oluşur. Bu sırayı bilerek, cihazın coğrafi konumu belirlenebilir. IP adresi genellikle İSS'niz tarafından atanır ve istediğiniz kaynağa kadar görülebilir. Bu nedenle ziyaret ettiğiniz sitenin web sunucusu IP adresinizi kaydedebilir ve istediklerinizi kaydedebilir. Bu kayıt daha sonra öncelikle veri toplama ve trafik analizi için kullanılabilir.

VPN, cihazınızla VPN sunucusu arasında bir tünel oluşturur. Verileriniz bu tünelden geçer, şifrelenir ve ardından açık internete güvenli bir biçimde girer. Bu nedenle web sunucusu, cihazın gerçek IP adresini değil, tünelin uç noktasının, yani VPN sunucusunun IP adresini kaydeder. Böylece VPN tünelinden geçtikten sonra ulaştığınız site, seçtiğiniz VPN sunucusunun coğrafi konumunu gerçek konumunuz olarak kabul eder. Ve şifrelenmiş veriler reklam verenin, bilgisayar korsanlarının ve güvenlik hizmetlerinin eline geçmez.

![VPN yapısı](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN protokol türleri

VPN güvenlik protokolleri, bir VPN tünelindeki verileri şifreleyen ve açık internette kullanıcı gizliliğini korumanıza olanak tanıyan araçlardır. Şu anda modern VPN hizmetlerinin büyük çoğunluğu aşağıdaki üç VPN protokolünden birini kullanıyor:

1. [_IPSec_](https://en.wikipedia.org/wiki/IPsec). Başlıca avantajlarından biri, çoğu cihazda ve işletim sisteminde bulunması ve yüksek düzeyde güvenlik sağlamasıdır. Ancak, bu protokolde çift [kapsülleme](https://en.wikipedia.org/wiki/Encapsulation_\(networking\)) kullanılması daha düşük bir bağlantı hızına neden olabilir.

2. [_OpenVPN_](https://en.wikipedia.org/wiki/OpenVPN). Bu modern protokol açık kaynaklıdır, bu nedenle üçüncü taraf üreticiler teknolojiyi iyileştirebilir ve güncelleyebilir.

3. [_WireGuard_](https://en.wikipedia.org/wiki/WireGuard). Başlıca avantajları, kullanım kolaylığı, yüksek verimlilik ve saldırılara karşı düşük güvenlik açığıdır.

Bu VPN protokollerine ek olarak başkaları da vardır (örneğin, TLS, SSTP, IKEv2), ancak bunlar popüler değildir veya modern veri şifreleme standartlarını karşılamamaktadır.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

AdGuard VPN'in ayrıca kendi [_protokolü_](/general/adguard-vpn-protocol) vardır. Avantajlarından biri, AdGuard VPN protokolü kullanılarak iletilen trafiğin normal trafikten ayırt edilmesinin zor olmasıdır. VPN tüneli normal HTTPS trafiği gibi görünür, bu da tespit edilmesini ve engellenmesini son derece zorlaştırır. Ayrıca, yüksek bağlantı hızı sağlayan modern HTTP/2 protokolünün mekanizmalarına dayanmaktadır.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## VPN dezavantajları

Bariz avantajlarına rağmen, VPN mükemmel değildir ve bazı dezavantajları vardır:

### Düşük hız

Trafiğiniz doğrudan web sunucusuna gitmeyip önce VPN sunucusundan geçtiği için VPN bağlantısının hızı düşer. Diğer faktörler de VPN kullanırken hızı etkiler: VPN sunucusunun yükü, bant genişliği, VPN protokolünün işletim sisteminizle uyumluluğu. Tüm bu faktörlerin yanı sıra ağın hızı da bir VPN bağlantısının genel kullanıcı deneyimini etkileyebilir.

### Erişim engelleme

Bazı çevrimiçi hizmetler, VPN trafiğini algılamak ve VPN kullanıcılarına erişimi engellemek için çok çaba harcar. Bununla birlikte, pek çok VPN kendilerini yalnızca normal trafik olarak görülecek şekilde maskeleyemez. Bu nedenle, VPN bağlantısı üzerinden belirli bir siteye ulaşmaya yönelik birçok girişim sonuçsuz kalır.

### VPN bağlantıları kesiliyor

Zayıf bir sinyal, ağ aşırı yüklenmesi, güvenlik duvarı, antivirüs ve diğer programlarla VPN uyumsuzluğu, eski bir VPN protokolü — tüm bunlar, özellikle güvenilir olmayan VPN sağlayıcılarında VPN bağlantısında ani bir arızaya neden olabilir.

## AdGuard VPN

VPN hizmetimizin birkaç önemli [avantajı](/general/why-adguard-vpn) vardır:

- [_Tescilli VPN protokolü_](/general/adguard-vpn-protocol), yavaş bir İnternet bağlantısıyla bile kararlı bir şekilde çalışan ve kendisini normal trafik olarak gizleyerek izlemeyi ve engellemeyi daha zor hâle getirir

- [_Günlük tutmama politikası_](https://adguard-vpn.com/privacy.html), AdGuard VPN'in asla bu tür verileri toplamaması nedeniyle hiçbir kişisel verinin üçüncü taraflarla paylaşılamayacağı anlamına gelir

- _Onlarca ülkede 50'den fazla VPN sunucusu_

- _Kullanım kolaylığı ve kapsamlı özelleştirme seçenekleri_

Şu anda AdGuard VPN şu şekilde mevcuttur:

- Chrome, Edge, Firefox ve Opera için [Tarayıcı uzantısı](/adguard-vpn-browser-extension/overview)

- [Android](/adguard-vpn-for-android/overview) ve [iOS](/adguard-vpn-for-ios/overview) için mobil uygulaması

- [Windows](/adguard-vpn-for-windows/overview) ve [Mac](/adguard-vpn-for-mac/overview) için masaüstü uygulaması

- [Linux, Mac ve bazı yönlendiriciler](/adguard-vpn-for-linux/) için komut satırı arayüzü

- [Yönlendiriciler](/general/set-up-adguard-vpn-on-your-router/) için bir VPN istemcisi

[AdGuard VPN özellikleri hakkında daha fazla bilgi edinin](https://adguard-vpn.com/welcome.html)
