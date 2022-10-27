---
title: VPN nasıl çalışır
sidebar_position: 1
---

AdGuard VPN'in nasıl çalıştığını anlamak için, öncelikle VPN hizmetinin genel ilkelerini anlamalısınız.

## VPN özellikleri

VPN, konumunuzu gizlemeye ve web'deki verilerinizi korumaya yardımcı olan bir Sanal Özel Ağdır. Bir VPN, bir bilgisayarı veya mobil cihazı bir VPN sunucusuna bağlar ve bu sunucunun IP adresini kullanarak dışarıdan bir gözlemciye sizin başka bir yerde olduğunuzu göstermesini sağlar. Bu, çeşitli internet kaynaklarına güvenli bir şekilde erişmenizi ve kişisel verilerinizi korumanızı sağlar.

Bu şekilde, bir VPN iki önemli işlevi yerine getirir:

1. **Anonimliği korumak**

Bir internet bağlantısı kullanarak, kullanıcı, daha sonra üçüncü şahıslar tarafından analiz edilebilecek ve kullanılabilecek dijital ayak izini bırakır. Örneğin, ziyaret ettiğiniz çevrimiçi mağazalardan biri arama geçmişinizi kaydedebilir ve ardından hedefli reklamcılık yoluyla size ürünlerini buna göre sunabilir. Veya cihazınızın IP adresi üzerinden konumunuzu öğrenen ve kimliğinizi belirleyen gizli servisler, web üzerindeki hareketlerinizi gizlice izleyebilir. Buna ek olarak, web tarayıcıları ve İSS'lerin kendileri, tarama geçmişinizi kendi amaçları için kullanabilir, ayrıca reklamcılara satabilir ve devlet kurumlarına sağlayabilir. VPN, IP adresinizi gizlemenize ve bağlı olduğunuz VPN sunucusunun IP adresiyle değiştirmenize olanak tanır. Bu şekilde gizliliğinizi koruyabilecek ve web'de anonim olarak bilgi arayabileceksiniz.

2. **Veri koruması**

Güvenilir olmayan veya herkese açık bir ağa bağlanırsanız cihazınızdaki veriler siber suçlulara karşı savunmasız hâle gelebilir. Banka kartı bilgileri, kullanıcı adları ve şifreler, pasaport verileri — tüm bu veriler çevrimiçi dolandırıcılar tarafından ele geçirilebilir. VPN tüneli, web'den gönderdiğiniz ve aldığınız bilgileri şifreler, böylece yanlış ellere düşmez.

## VPN yapısı

Bir ağa bağlandığınızda, bilgisayarınıza veya mobil cihazınıza benzersiz bir kimlik numarası veya IP adresi atanır. Genellikle 0 ile 255 arasında nokta veya iki nokta üst üste ile ayrılmış sayılardan oluşur. Bu sırayı bilerek, cihazın coğrafi konumu belirlenebilir. IP adresi genellikle İSS'niz tarafından belirlenir ve istenen kaynağa kadar görünür olacaktır. Bu nedenle ziyaret ettiğiniz sitenin web sunucusu IP adresinizi kaydedebilir ve istediklerinizi kaydedebilir. Bu kayıt daha sonra öncelikle veri toplama ve trafik analizi için kullanılabilir.

VPN, cihazınızla VPN sunucusu arasında bir tünel oluşturur. Verileriniz bu tünelden geçer, şifrelenir ve ardından açık internete güvenli bir biçimde girer. Bu nedenle, web sunucusuna, cihazınızın artık gerçek IP adresiniz değil, tünelin uç noktasının IP adresi, yani VPN sunucusu gibi görünür. Böylece VPN tünelinden geçtikten sonra ulaştığınız site, seçtiğiniz VPN sunucusunun coğrafi konumunu gerçek konumunuz olarak kabul eder. Ve şifrelenmiş veriler reklamcıların, hackerların ve güvenlik servislerinin eline geçmez.

![VPN yapısı](https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN protokol türleri

VPN güvenlik protokolleri, verileri bir VPN tünelinde şifreleyen ve açık bir internette kullanıcı gizliliğini korumanıza izin veren araçlardır. Şu anda modern VPN hizmetlerinin büyük çoğunluğu aşağıdaki üç VPN protokolünden birini kullanıyor:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Başlıca avantajlarından biri, çoğu cihazda ve işletim sisteminde bulunması ve yüksek düzeyde güvenlik sağlamasıdır. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in this protocol may result in a lower connection speed.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Bu modern protokol açık kaynaklıdır, bu nedenle üçüncü taraf üreticiler teknolojiyi iyileştirebilir ve güncelleyebilir.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Başlıca avantajları, kullanım kolaylığı, yüksek verimlilik ve saldırılara karşı düşük güvenlik açığıdır.

Bu VPN protokollerine ek olarak başkaları da vardır (örneğin, TLS, SSTP, IKEv2), ancak bunlar popüler değildir veya modern veri şifreleme standartlarını karşılamamaktadır.

![VPN protokolü nasıl çalışır](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN'in de kendi [*protokolü*](adguard-vpn-protocol.mdx). Avantajlarından biri, AdGuard VPN protokolü kullanılarak iletilen trafiğin normal trafikten ayırt edilmesinin zor olmasıdır. VPN tüneli normal HTTPS trafiğine benziyor, bu yüzden onu tespit etmek ve engellemek son derece zor. Ayrıca, yüksek bağlantı hızı sağlayan modern HTTP/2 protokolünün mekanizmalarına dayanmaktadır.

![Gizli VPN nasıl çalışır](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg)

## VPN dezavantajları

Bariz avantajlarına rağmen, VPN mükemmel değildir ve bazı dezavantajları vardır:

**Düşük hız**

Trafiğiniz doğrudan web sunucusuna gitmeyip önce VPN sunucusundan geçtiği için VPN bağlantısının hızı düşer. Diğer faktörler de VPN kullanırken hızı etkiler: VPN sunucusunun yükü, bant genişliği, VPN protokolünün işletim sisteminizle uyumluluğu. Tüm bu faktörler ve ağın hızı VPN bağlantınızın kalitesini düşürebilir.

**Erişim engelleme**

Bazı çevrimiçi hizmetler, VPN trafiğini algılamak ve VPN kullanıcılarına erişimi engellemek için çok çaba harcar. Ancak, pek çok VPN trafiğini normal şekilde gizleyemez. Bu nedenle, VPN'i devre dışı bırakmadan belirli bir siteye gitme girişimlerinin çoğu hiçbir şeyle sonuçlanmaz.

**VPN bağlantıları kesiliyor**

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

VPN hizmetimizin birkaç önemli [avantajı](why-adguard-vpn.md) vardır:

* [*Proprietary VPN protocol*](adguard-vpn-protocol.mdx), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

* [*"No-logs" policy*](https://adguard-vpn.com/en/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

* *Onlarca ülkede 50'den fazla VPN sunucusu*

* *Kullanım kolaylığı ve kapsamlı özelleştirme seçenekleri*

Şu anda AdGuard VPN şu şekilde mevcuttur:

* Chrome, Firefox ve Edge için [tarayıcı uzantısı](../adguard-vpn-browser-extension/overview.md)

* [Android](../adguard-vpn-for-android/overview.md) ve [iOS](../adguard-vpn-for-ios/overview.md) için mobil uygulama

* [Windows](../adguard-vpn-for-windows/overview.md) ve [Mac](../adguard-vpn-for-mac/overview.md) için masaüstü uygulaması

AdGuard VPN özellikleri (sınırsız sürüm dahil) hakkında daha fazla bilgiyi [buradan](https://adguard-vpn.com/en/welcome.html) edinebilirsiniz.
