---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Ana ekran

Ana ekran VPN durumunu yansıtır (Bağlandı/Bağlantı kesildi). Ayrıca *Bağlan veya Bağlantıyı kes* düğmesi ve mevcut sunucuların bir listesi de bulunmaktadır.

Her sunucunun konumu ve sunucunun yanıt süresini tanımlayan ping hızı vardır. Bu değer ne kadar düşük olursa bağlantı o kadar hızlı olur. Onlarca ülkede 50'den fazla konumdan yer aldığı listede en hızlı sunucular her zaman en üstte yer alıyor. *Bağlan* düğmesine dokunarak veya bir konum seçerek en hızlı sunucuya bağlanabilirsiniz.

## İstisnalar

İstisna listeleri, belirli siteler ve uygulamalar için VPN bağlantısını yönetmenize olanak tanır. *İstisnalar* bölümüne erişmek için ekranın alt kısmında soldan ikinci simgeye dokunun.

![İstisnalar *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

Varsayılan olarak, AdGuard VPN istisnalara eklenenler dışında tüm siteler ve uygulamalar için çalışır: bir uygulama veya site belirtmezseniz, VPN bunlar için etkin olacaktır. Ayrıca **seçici olarak** da etkinleştirebilirsiniz — yalnızca belirli uygulamalar veya siteler için. Bu moda geçmek için *Modu değiştir* öğesine dokunun.

![Modu değiştir *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

VPN'inizi **seçici olarak** kullanırken dikkatli olun.

VPN tünelinden bir tarayıcıyı hariç tutarsanız, site istisnaları bu tarayıcı için çalışmaz.

Siteler için bu moda geçerseniz, kullanmak istediğiniz uygulamaların alan adlarını eklemeyi unutmayın — örneğin, Facebook için `facebook.com`.

:::

### Siteler

Alan adını (örn. `google.com`) veya alt alan adını (örn. `*.google.com`) istisnalara üç şekilde ekleyebilirsiniz:

- Uygulamaya elle girin
- Siteyi AdGuard VPN ile paylaşarak doğrudan tarayıcıdan ekleyin
- Yerleşik hizmetler listesinden ekleyin

![El ile ekle *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Listeden ekle *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

Alan adlarını elle eklemenin bazı ince ayrıntıları vardır. Örneğin, `yahoo.com` alan adını elle hariç tutarsanız, tüm `*.yahoo.com` alt alanları da istisnalarda listelenir. Ancak, `yahoo.jp` veya `yahoo.fr` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır.

`youtube.com` alan adını istisnalara eklerseniz, aynı hizmetin `youtu.be` alan adı eklenmeyecektir. Bu durumda, dahili hizmet listelerini kullanmak daha güvenlidir. Her platformla ilişkili tüm alt alan adlarını içerirler.

:::

Hizmet listelerinde alt alan adlarını etkinleştirebildiğiniz için, her hizmetin durumunu yansıtan kutular ekledik:

- **Tamamen etkin** yeşil arka plan üzerinde beyaz bir onay işaretiyle gösterilir
- **Kısmen etkin** (ana alan adı olmayan etkin alt alan adları) beyaz zemin üzerinde yeşil bir kareyle işaretlenmiştir
- **Tamamen devre dışı** boş bir onay kutusuyla işaretlenmiştir

![Site istisnaları *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

Bir alan adını veya alt alan adını yanlışlıkla sildiyseniz, *Varsayılana sıfırla* öğesine dokunmanız yeterlidir.

![Varsayılana sıfırla *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Uygulamalar

Uygulamalar için VPN'i de yönetebilirsiniz. VPN tünelinden bir uygulamayı hariç tutmak için, *Uygulama ekle* öğesine dokunun. VPN'i **seçici olarak** kullanmak için *Modu değiştir* öğesine dokunun.

![Uygulama istisnaları *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

*Entegre modda*, uygulamaları yalnızca AdGuard Reklam Engelleyici aracılığıyla yönetebilirsiniz.

:::

## Ayarlar

Ekranın sağ alt kısmındaki dişli çark simgesine basarak *Ayarlar* öğesine ulaşabilirsiniz.

![Ayarlar *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### Genel

![Genel *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

*Genel* bölümünde, temel AdGuard VPN ayarlarını yönetebilirsiniz:

- AdGuard VPN'i sistem başlangıcında başlatın
- VPN'e bağlıyken trafiği şifrelemek ve reklamları engellemek için bir DNS sunucusu seçin (AdGuard DNS kullanmanızı öneririz)
- Gizliliğinizi korumak ve VPN bağlantısı koparsa internet bağlantısını kesmek için Kill Switch'i etkinleştirin
- Bir renk teması seçin
- Geliştiricileri uygulama sorunları hakkında bilgilendirmek için anonim çökme raporlarını etkinleştirin

### Gelişmiş

![Gelişmiş *mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

*Gelişmiş* bölümü, yaygın olarak kullanılmayan bir dizi ayardır.

*Çalışma modu* trafiğinizin nasıl yönlendirileceğini belirlemenizi sağlar. Üç mod vardır: VPN, SOCKS5 ve Entegre mod. *VPN* modda, tüm trafik AdGuard VPN üzerinden yönlendirilir. *SOCKS5* modunda AdGuard VPN, trafik yönlendirme için diğer uygulamalar tarafından kullanılabilen yerel bir proxy sunucusu çalıştırır. *Entegre mod*, AdGuard VPN ve AdGuard Reklam Engelleyicinin birlikte çalışmasını sağlar.

:::note

Bazı AdGuard VPN özellikleri *Tümleşik modda devre dışı bırakılır*: DNS sunucuları, Kill Switch ve Uygulama istisnaları. AdGuard Reklam Engelleyici uygulamasında DNS korumasını yönetebilir ve uygulamaları AdGuard VPN proxy'niz üzerinden yönlendirebilirsiniz.

:::

*Post-quantum cryptography* refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### Destek

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
