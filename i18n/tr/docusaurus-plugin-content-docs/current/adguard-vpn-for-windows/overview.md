---
title: Özelliklere genel bakış
sidebar position: 1
---

## Windows için AdGuard VPN nedir

"Sanal özel ağ" kısaltması olan VPN, internet bağlantınızı güvenli hâle getiren ve çevrimiçi anonim kalmanıza yardımcı olan bir hizmettir. Nasıl çalışır? VPN kullanmadan bir siteyi her ziyaret ettiğinizde, İSS'niz onu görür. Kim olduğunuzu, ne aradığınızı bilir ve bu verileri toplayıp satabilir. In it's turn, the website you came to can also track your activity. When you enable a VPN application, it redirects your traffic through an encrypted tunnel to a remote VPN server, ensuring your privacy: the ISP doesn't know where to you sent a request, and the site doesn't know where you came from.

**Windows için AdGuard VPN ne yapar**

* Protects from network traffic interception (spoofing). AdGuard VPN, cihazınızla uzak sunucu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer, böylece verileriniz yol boyunca korunur. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol.mdx), you're guaranteed a fast and secure connection.

* IP adresinizi gizler. Gerçek IP adresiniz, siber suçlular için kişisel verilerinizin anahtarıdır. IP'nizi gizlemezseniz adınız, e-posta adresiniz, telefon numaranız, kredi kartı bilgileriniz dolandırıcıların eline geçebilir. AdGuard VPN ile daha önce de söylediğimiz gibi tüm trafiğiniz şifreli bir tünelden geçer ve VPN sunucusuna gelir. Bu nedenle, dışarıdan bakıldığında, cihazınızın söz konusu VPN sunucusunun IP adresine sahip olduğu görülmektedir.

* Gerçek konumunuzu gizler. By selecting any of the AdGuard VPN servers, you are instantly "teleported" to its location. Bu size ne kazandırıyor? Örneğin, yerel fiyatlarla otel rezervasyonu yapma veya coğrafi hedefli reklamlardan saklanma yeteneği.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn.md) to them. Ancak burada, uygulamanın kendisine ve nasıl çalıştığına daha fazla odaklanmak istiyoruz.

## Windows için AdGuard VPN'i kullanmaya nasıl başlanır

Windows için AdGuard VPN'i kullanmaya başlamak için uygulamayı [sitemizden](https://adguard-vpn.com/en/welcome.html) indirin. The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy Policy. AdGuard'ın uygulama kullanımınız hakkında anonimleştirilmiş veriler toplamasını isteyip istemediğinize karar vermek size kalmış. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). Hepsi bu kadar, artık Windows için AdGuard VPN'i kullanabilirsiniz.


## Ana Ekran

![Windows Ana Sayfası için AdGuard VPN](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Underneath, you can see the [mode](#exclusions) in which the application is running, and below — the selected server. Ekranın sağ tarafında mevcut tüm konumları bulursunuz ve en hızlı, yani en kısa ping ile listenin başında listelenecektir.

Ekranın üst kısmında dört sekmeli bir gezinme paneli vardır: **Ana Sayfa**, **İstisnalar**, **Destek**, **Ayarlar**. İlk sekme yapıldıktan sonra devam edelim.


## İstisnalar

Windows için AdGuard VPN iki modda çalışabilir: **Genel** veya **Seçici**. Ne anlama geliyor? If you want the application to work on all but a few sites, activate the **General mode** and list the resources you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Lütfen bu iki modun istisna listelerinin birbirinden bağımsız olduğunu unutmayın.

![İstisnalar](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

İstisna listeleri oluşturmak için iki seçenek vardır: **El ile** ve **Listeden**. **Site ekle** satırına tıklayın ve istisnalara site eklemek için tercih ettiğiniz biçimi seçin.

![İstisnalar ekle](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Listeden İstisnalar ekle](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Alan adlarını el olarak eklerken bazı ince ayrıntıları göz önünde bulundurmalısınız. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Veya `youtube.com` sitesini istisnalara ekleyebilirsiniz, ancak aynı hizmet `youtu.be` sitesinin etki alanı listeye dahil edilmeyecektir.

We would recommend to use the option **From the list** to avoid unnecessary hassle. We have already grouped eight different categories of popular services for you: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Her platformla ilgili tüm alan adları ve alt alan adları dahil olmak üzere en popüler hizmetleri oraya yerleştirdik. Bu şekilde, VPN açıkken veya tam tersi durumda çalışmaya devam etmesini istediğiniz herhangi bir hizmeti veya alan adınını unutmadığınızdan emin olacaksınız.

### İstisna listelerini içe ve dışa aktarma

In the **Exclusions** tab on the right side of the screen there is a section **Actions**. Hazır istisna listelerini dışa veya içe aktarmanız gerekiyorsa kullanışlı olabilir.

To export the list of exclusions from AdGuard for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. Bunları yeni istisnalar ekleyerek veya eskileri silerek düzenleyebilirsiniz.

İstisna listelerini başka bir cihaza aktarmak için `.zip` dosyasını hedefine gönderin. Hazır istisna listeleri ile arşivi içe aktarmak istediğiniz cihazda AdGuard VPN'i açın, *İstisnalar* ve ardından *İstisnaları içe aktar* öğesine tıklayın ve daha önce gönderilen arşivi seçin.

## Ayarlar

![Ayarlar](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

Uygulamanın sekme çubuğunun dördüncü sekmesi, uygulamayı özelleştirmenize yardımcı olacak bölümler içerir. Let's look closer at two of them: **General** and **Split tunneling**.


### Genel

**Genel** bölümü birçok kullanışlı özellik içerir. Burada uygulama dilini ayarlayabilir ve ayrıca VPN bağlantınız başarısız olursa internet erişimini engelleyen **Kill Switch** ayarını etkinleştirebilirsiniz. Bu, halka açık bir Wi-Fi veya mobil ağa bağlıyken kendinizi VPN koruması olmadan bulursanız, izinsiz girişlerin verilerinize erişmesini önlemek için gereklidir.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that we can make it better. Here you can also change the default **Light Theme** to a **Dark Theme**.

Sayfanın altında iki bölüm vardır: **DNS sunucuları** ve **Gelişmiş ayarlar**.

![DNS ayarları ve Gelişmiş ayarlar](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS sunucuları

**DNS sunucuları** sekmesi, kendi özel DNS sunucunuzu eklemenizi sağlar. Bunu neden yapmalısınız? Örneğin, genellikle İSS'niz tarafından kontrol edilen varsayılan DNS sunucusuna güvenmemek.

Herhangi bir sağlayıcı tarafından bir DNS sunucusu ayarlayabilirsiniz. Standart işlevlere ek olarak reklam, izleme ve kimlik avına karşı koruma sağlayabilen bir sunucu olan [AdGuard DNS'i](https://kb.adguard.com/en/general/dns-providers#adguard-dns) eklemenizi öneririz.

#### Gelişmiş Ayarlar

Gelişmiş ayarlara hiç dokunmadan Windows için AdGuard VPN'i kullanmak tamamen mümkündür, ancak ne yaptıklarını öğrenmek için zaman ayırmaya istekliyseniz, bunlar yararlı olabilir.

**Çalışma Modu**

İki çalışma modu olmasına rağmen — VPN ve SOCKS5 — yalnızca varsayılan olarak seçileni (VPN) kullanmanızı tavsiye ederiz. When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Günlük kayıt düzeyi**

Aralarından seçim yapabileceğiniz iki günlük kayıt düzeyi mevcuttur: **Varsayılan olarak kaydet** ve **Her şeyi kaydet**. İlk seçenek varsayılan olarak etkindir. **Her şeyi kaydet** seçeneği, yalnızca destek ekibimiz sizden bunu yapmanızı isterse etkinleştirilmelidir. Uygulamayı bu modda uzun süre kullanmak, pil tüketiminin artmasına neden olur.

Tüm günlükler cihazınızda yerel olarak depolanır ve gerekirse bunları destek ekibine gönderebilirsiniz.

**QUIC'i kullanın**

Bu, AdGuard'ın gelişmiş QUIC şifreleme protokolünü kullanmasını sağlayan deneysel bir özelliktir. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### Bölünmüş tünelleme

![Bölünmüş tünelleme](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN, yalnızca tarayıcılarınızın değil, bilgisayarınızda kurulu olan diğer uygulamaların da trafiğini şifreler. Belirli uygulamaları AdGuard'ın çalışmasından çıkarmak istiyorsanız, bunları **Bölünmüş tünelleme** listesine koyun.

## Diğer sekmeler

### Hakkında

**Program hakkında** sekmesi, Windows için AdGuard VPN'in mevcut sürümü hakkında bilgi, bir güncelleme düğmesi ve birkaç faydalı bağlantı sağlar: AdGuard sitesi, forum, SKLS ve Gizlilik Politikası.

### Lisans hakkında

Burada lisans durumunuzla ilgili bilgilerin yanı sıra mevcut aboneliklerinizi yönetebileceğiniz ve yenilerini satın alabileceğiniz kişisel AdGuard hesabınıza bir bağlantı bulacaksınız.

## Destek

In this tab we've collected a lot of useful links: FAQ page, application feedback form, social media pages, and **Knowledge Base**.