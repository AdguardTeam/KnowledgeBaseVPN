---
title: VPN nasıl çalışır
sidebar_position: 1
---

AdGuard VPN'in nasıl çalıştığını anlamak için, öncelikle VPN hizmetinin genel ilkelerini anlamalısınız.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN özellikleri

A VPN is a virtual private network that helps hide your location and protect your data on the Web. Bir VPN, bir bilgisayarı veya mobil cihazı bir VPN sunucusuna bağlar ve bu sunucunun IP adresini kullanarak dışarıdan bir gözlemciye sizin başka bir yerde olduğunuzu göstermesini sağlar. Bu, çeşitli internet kaynaklarına güvenli bir şekilde erişmenizi ve kişisel verilerinizi korumanızı sağlar.

Bu şekilde, bir VPN iki önemli işlevi yerine getirir:

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Banka kartı bilgileri, kullanıcı adları ve şifreler, pasaport verileri — tüm bu veriler çevrimiçi dolandırıcılar tarafından ele geçirilebilir. VPN tüneli, web'den gönderdiğiniz ve aldığınız bilgileri şifreler, böylece yanlış ellere düşmez.

## VPN yapısı

Bir ağa bağlandığınızda, bilgisayarınıza veya mobil cihazınıza benzersiz bir kimlik numarası veya IP adresi atanır. Genellikle 0 ile 255 arasında nokta veya iki nokta üst üste ile ayrılmış sayılardan oluşur. Bu sırayı bilerek, cihazın coğrafi konumu belirlenebilir. IP adresi genellikle İSS'niz tarafından belirlenir ve istenen kaynağa kadar görünür olacaktır. Bu nedenle ziyaret ettiğiniz sitenin web sunucusu IP adresinizi kaydedebilir ve istediklerinizi kaydedebilir. Bu kayıt daha sonra öncelikle veri toplama ve trafik analizi için kullanılabilir.

VPN, cihazınızla VPN sunucusu arasında bir tünel oluşturur. Verileriniz bu tünelden geçer, şifrelenir ve ardından açık internete güvenli bir biçimde girer. Bu nedenle, web sunucusuna, cihazınızın artık gerçek IP adresiniz değil, tünelin uç noktasının IP adresi, yani VPN sunucusu gibi görünür. Böylece VPN tünelinden geçtikten sonra ulaştığınız site, seçtiğiniz VPN sunucusunun coğrafi konumunu gerçek konumunuz olarak kabul eder. Ve şifrelenmiş veriler reklamcıların, hackerların ve güvenlik servislerinin eline geçmez.

![VPN yapısı](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN protokol türleri

VPN güvenlik protokolleri, verileri bir VPN tünelinde şifreleyen ve açık bir internette kullanıcı gizliliğini korumanıza izin veren araçlardır. Şu anda modern VPN hizmetlerinin büyük çoğunluğu aşağıdaki üç VPN protokolünden birini kullanıyor:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Başlıca avantajlarından biri, çoğu cihazda ve işletim sisteminde bulunması ve yüksek düzeyde güvenlik sağlamasıdır. Ancak, bu protokolde çift [kapsüllemenin](https://en.wikipedia.org/wiki/Encapsulation_(networking)) kullanılması bağlantı hızının düşmesine neden olabilir.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Bu modern protokol açık kaynaklıdır, bu nedenle üçüncü taraf üreticiler teknolojiyi iyileştirebilir ve güncelleyebilir.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Başlıca avantajları, kullanım kolaylığı, yüksek verimlilik ve saldırılara karşı düşük güvenlik açığıdır.

Bu VPN protokollerine ek olarak başkaları da vardır (örneğin, TLS, SSTP, IKEv2), ancak bunlar popüler değildir veya modern veri şifreleme standartlarını karşılamamaktadır.

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## VPN dezavantajları

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Düşük hız

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### Erişim engelleme

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### VPN bağlantıları kesiliyor

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *Onlarca ülkede 50'den fazla VPN sunucusu*

- *Kullanım kolaylığı ve kapsamlı özelleştirme seçenekleri*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
