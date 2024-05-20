---
title: Özelliklere genel bakış
sidebar_position: 1
---

## Ana ekran

Ana ekran VPN durumunu yansıtır (Bağlandı/Bağlantı kesildi). Ayrıca *Bağlan veya Bağlantıyı kes* düğmesi ve mevcut sunucuların bir listesi de bulunmaktadır.

Her sunucunun konumu ve sunucunun yanıt süresini tanımlayan ping hızı vardır. Bu değer ne kadar düşük olursa bağlantı o kadar hızlı olur. Onlarca ülkede 50'den fazla konumdan yer aldığı listede en hızlı sunucular her zaman en üstte yer alıyor. *Bağlan* düğmesine dokunarak veya bir konum seçerek en hızlı sunucuya bağlanabilirsiniz.

## İstisnalar

İstisna listeleri, belirli siteler ve uygulamalar için VPN bağlantısını yönetmenize olanak tanır. *İstisnalar* bölümüne erişmek için ekranın alt kısmında soldan ikinci simgeye dokunun.

![İstisnalar *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Uygulamaya elle girin
- Siteyi AdGuard VPN ile paylaşarak doğrudan tarayıcıdan ekleyin
- Yerleşik hizmetler listesinden ekleyin

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Örneğin, `yahoo.com` alan adını elle hariç tutarsanız, tüm `*.yahoo.com` alt alanları da istisnalarda listelenir. Ancak, `yahoo.jp` veya `yahoo.fr` gibi diğer üst düzey alan adlarına sahip alan adları hariç tutulmayacaktır.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Tamamen etkin** yeşil arka plan üzerinde beyaz bir onay işaretiyle gösterilir
- **Kısmen etkin** (ana alan adı olmayan etkin alt alan adları) beyaz zemin üzerinde yeşil bir kareyle işaretlenmiştir
- **Tamamen devre dışı** boş bir onay kutusuyla işaretlenmiştir

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Uygulama istisnaları *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

*Entegre modda*, uygulamaları yalnızca AdGuard Reklam Engelleyici aracılığıyla yönetebilirsiniz.

:::

## Ayarlar

Ekranın sağ alt kısmındaki dişli çark simgesine basarak *Ayarlar* öğesine ulaşabilirsiniz.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

*Çalışma modu* trafiğinizin nasıl yönlendirileceğini belirlemenizi sağlar. Üç mod vardır: VPN, SOCKS5 ve Entegre mod. *VPN* modda, tüm trafik AdGuard VPN üzerinden yönlendirilir. *SOCKS5* modunda AdGuard VPN, trafik yönlendirme için diğer uygulamalar tarafından kullanılabilen yerel bir proxy sunucusu çalıştırır. *Entegre mod*, AdGuard VPN ve AdGuard Reklam Engelleyicinin birlikte çalışmasını sağlar.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. AdGuard Reklam Engelleyici uygulamasında DNS korumasını yönetebilir ve uygulamaları AdGuard VPN proxy'niz üzerinden yönlendirebilirsiniz.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

*Gelişmiş ayarların* son bölümü *Alt seviye ayarlardır*. Yüksek nitelikli değilseniz veya destek ekibimiz tarafından istenmedikçe bu bölüme girmemenizi tavsiye ederiz. Burada, VPN arayüzünde TUN arayüzü günlüğünü veya IPv6 protokolünü etkinleştirmek, kullanılması gereken bir proxy sunucu bağlantı noktası veya internet protokolü sürümünü seçmek mümkündür.

:::note Uyumluluk

*IPv6'yı Etkinleştir* öğesini yalnızca IPv6'yı destekleyen ağlar için kullanılabilir.

:::

### Destek

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
