---
title: VPN nasıl çalışır
sidebar_position: 1
---

AdGuard VPN'in nasıl çalıştığını anlamak için, öncelikle VPN hizmetinin genel ilkelerini anlamalısınız.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video oynatıcı" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN özellikleri

VPN, konumunuzu gizlemeye ve Web'deki verilerinizi korumaya yardımcı olan bir sanal özel ağdır. Bir VPN, bir bilgisayarı veya mobil cihazı bir VPN sunucusuna bağlar ve bu sunucunun IP adresini kullanarak dışarıdan bir gözlemciye sizin başka bir yerde olduğunuzu göstermesini sağlar. Bu, çeşitli internet kaynaklarına güvenli bir şekilde erişmenizi ve kişisel verilerinizi korumanızı sağlar.

Bu şekilde, bir VPN iki önemli işlevi yerine getirir:

1. **Anonimliğin korunması**

    Bir internet bağlantısı kullanarak, kullanıcı, daha sonra üçüncü şahıslar tarafından analiz edilebilecek ve kullanılabilecek dijital ayak izini bırakır. Örneğin, ziyaret ettiğiniz çevrimiçi mağazalardan biri arama geçmişinizi kaydedebilir ve ardından hedefli reklamcılık yoluyla size ürünlerini buna göre sunabilir. Veya cihazınızın IP adresi üzerinden konumunuzu öğrenen ve kimliğinizi belirleyen gizli servisler, web üzerindeki hareketlerinizi gizlice izleyebilir. Buna ek olarak, web tarayıcıları ve İSS'lerin kendileri, tarama geçmişinizi kendi amaçları için kullanabilir, ayrıca reklamcılara satabilir ve devlet kurumlarına sağlayabilir. VPN, IP adresinizi gizlemenize ve bağlı olduğunuz VPN sunucusunun IP adresiyle değiştirmenize olanak tanır. Bu şekilde gizliliğinizi koruyabilecek ve web'de anonim olarak bilgi arayabileceksiniz.

1. **Data protection**

    If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Banka kartı bilgileri, kullanıcı adları ve şifreler, pasaport verileri — tüm bu veriler çevrimiçi dolandırıcılar tarafından ele geçirilebilir. The VPN tunnel encrypts the information you send to and receive from the Web, making it useless in the wrong hands.

## VPN yapısı

Bir ağa bağlandığınızda, bilgisayarınıza veya mobil cihazınıza benzersiz bir kimlik numarası veya IP adresi atanır. Genellikle 0 ile 255 arasında nokta veya iki nokta üst üste ile ayrılmış sayılardan oluşur. Bu sırayı bilerek, cihazın coğrafi konumu belirlenebilir. The IP address is usually assigned by your ISP, and it will be visible all the way to the desired resource. Bu nedenle ziyaret ettiğiniz sitenin web sunucusu IP adresinizi kaydedebilir ve istediklerinizi kaydedebilir. Bu kayıt daha sonra öncelikle veri toplama ve trafik analizi için kullanılabilir.

VPN, cihazınızla VPN sunucusu arasında bir tünel oluşturur. Verileriniz bu tünelden geçer, şifrelenir ve ardından açık internete güvenli bir biçimde girer. The web server therefore registers the IP address of the endpoint of the tunnel, meaning the VPN server, and thus not the device's real IP address. Böylece VPN tünelinden geçtikten sonra ulaştığınız site, seçtiğiniz VPN sunucusunun coğrafi konumunu gerçek konumunuz olarak kabul eder. Ve şifrelenmiş veriler reklamcıların, hackerların ve güvenlik servislerinin eline geçmez.

![VPN yapısı](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN protokol türleri

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. Şu anda modern VPN hizmetlerinin büyük çoğunluğu aşağıdaki üç VPN protokolünden birini kullanıyor:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Başlıca avantajlarından biri, çoğu cihazda ve işletim sisteminde bulunması ve yüksek düzeyde güvenlik sağlamasıdır. Ancak, bu protokolde çift [kapsüllemenin](https://en.wikipedia.org/wiki/Encapsulation_(networking)) kullanılması bağlantı hızının düşmesine neden olabilir.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Bu modern protokol açık kaynaklıdır, bu nedenle üçüncü taraf üreticiler teknolojiyi iyileştirebilir ve güncelleyebilir.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Başlıca avantajları, kullanım kolaylığı, yüksek verimlilik ve saldırılara karşı düşük güvenlik açığıdır.

Bu VPN protokollerine ek olarak başkaları da vardır (örneğin, TLS, SSTP, IKEv2), ancak bunlar popüler değildir veya modern veri şifreleme standartlarını karşılamamaktadır.

AdGuard VPN'in de kendi [*protokolü*](/general/adguard-vpn-protocol). Avantajlarından biri, AdGuard VPN protokolü kullanılarak iletilen trafiğin normal trafikten ayırt edilmesinin zor olmasıdır. VPN tüneli normal HTTPS trafiğine benziyor, bu yüzden onu tespit etmek ve engellemek son derece zor. Ayrıca, yüksek bağlantı hızı sağlayan modern HTTP/2 protokolünün mekanizmalarına dayanmaktadır.

## VPN dezavantajları

Bariz avantajlarına rağmen, VPN mükemmel değildir ve bazı dezavantajları vardır:

### Düşük hız

Trafiğiniz doğrudan web sunucusuna gitmeyip önce VPN sunucusundan geçtiği için VPN bağlantısının hızı düşer. Diğer faktörler de VPN kullanırken hızı etkiler: VPN sunucusunun yükü, bant genişliği, VPN protokolünün işletim sisteminizle uyumluluğu. All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection.

### Erişim engelleme

Bazı çevrimiçi hizmetler, VPN trafiğini algılamak ve VPN kullanıcılarına erişimi engellemek için çok çaba harcar. However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. Bu nedenle, VPN'i devre dışı bırakmadan belirli bir siteye gitme girişimlerinin çoğu hiçbir şeyle sonuçlanmaz.

### VPN bağlantıları kesiliyor

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers.

## AdGuard VPN

VPN hizmetimizin birkaç önemli [avantajı](/general/why-adguard-vpn) vardır:

- [*Tescilli VPN protokolü*](/general/adguard-vpn-protocol), yavaş bir İnternet bağlantısıyla bile kararlı bir şekilde çalışan ve kendisini normal trafik olarak gizleyerek izlemeyi ve engellemeyi daha zor hâle getirir

- [*Günlük tutmama politikası*](https://adguard-vpn.com/privacy.html), bu da AdGuard VPN'in kişisel verilerinizi toplamadığı ve üçüncü taraflara aktarmadığı anlamına gelir

- *Onlarca ülkede 50'den fazla VPN sunucusu*

- *Kullanım kolaylığı ve kapsamlı özelleştirme seçenekleri*

Şu anda AdGuard VPN şu şekilde mevcuttur:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Edge, Firefox, and Opera

- [Android](/adguard-vpn-for-android/overview) ve [iOS](/adguard-vpn-for-ios/overview) için mobil uygulama

- [Windows](/adguard-vpn-for-windows/overview) ve [Mac](/adguard-vpn-for-mac/overview) için masaüstü uygulaması

[AdGuard VPN özellikleri hakkında daha fazla bilgi edinin](https://adguard-vpn.com/welcome.html)
