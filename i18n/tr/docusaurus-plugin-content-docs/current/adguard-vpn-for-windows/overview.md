---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Windows için AdGuard VPN nedir?

"Sanal Özel Ağ" kısaltması olan VPN, internet bağlantınızı güvenli hâle getiren ve çevrimiçi anonim kalmanıza yardımcı olan bir hizmettir. Nasıl çalışır? VPN kullanmadan bir siteyi her ziyaret ettiğinizde, İSS'niz onu görür. Kim olduğunuzu, ne aradığınızı bilir ve bu verileri toplayıp satabilir. Sırasıyla, geldiğiniz site de etkinliğinizi izleyebilir. Bir VPN uygulamasını etkinleştirdiğinizde, trafiğinizi şifreli bir tünel üzerinden uzak bir VPN sunucusuna yönlendirerek gizliliğinizi sağlar: İSS nereye istek gönderdiğinizi bilmez ve site nereden geldiğinizi bilmez.

## Windows için AdGuard VPN ne yapar

- Ağ trafiğinin kesilmesine (aldatma) karşı korur. AdGuard VPN, cihazınızla uzak sunucu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. [AdGuard'ın benzersiz protokolü](/general/adguard-vpn-protocol.mdx) sayesinde hızlı ve güvenli bir bağlantı garanti edilir.

- IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. AdGuard VPN ile daha önce de söylediğimiz gibi tüm trafiğiniz şifreli bir tünelden geçer ve VPN sunucusuna gelir. Bu nedenle, dışarıdan bakıldığında, cihazınızın söz konusu VPN sunucusunun IP adresine sahip olduğu görülmektedir.

- Gerçek konumunuzu gizler. AdGuard VPN sunucularından herhangi birini seçerek, o sunucunun konumuna anında "ışınlanırsınız". Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

Windows için AdGuard VPN'in birçok avantajı vardır, bu yüzden onlara ayrı [bir makale](/general/why-adguard-vpn.md) ayırdık. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

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

Windows için AdGuard VPN'dan istisnalar listesini bilgisayarınıza aktarmak için **İstisnaları dışa aktar** öğesine tıklayın, listenin depolanacağı klasörü seçin ve **Kaydet** öğesine tıklayın. Listelerin her biri için bir tane olmak üzere iki `.txt` dosyası içeren bir `exclusions.zip` arşivi indirilecektir — **Genel** ve **Seçici**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Settings

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.

### Uygulama ayarları

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS sunucuları

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Gelişmiş ayarlar

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Operating mode

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logging level

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

##### Use QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### Uygulama istisnaları

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Other tabs

### Hakkında

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy policy.

### Hesap

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
