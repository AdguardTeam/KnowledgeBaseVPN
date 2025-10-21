---
title: Özelliklere genel bakış
sidebar_position: 1
---

AdGuard VPN Tarayıcı Uzantısı Chrome, Firefox, Opera ve Edge için mevcuttur. Kullanıcı arayüzü ve işlevsellik tarayıcılar arasında farklılık göstermez, bu nedenle aşağıdaki genel bakış, tüm tarayıcılar için AdGuard VPN uzantılarıyla alakalı olacaktır.

:::note

AdGuard VPN Tarayıcı Uzantısını yalnızca giriş yaptığınızda kullanabilirsiniz. AdGuard hesabınızla veya Google, Facebook ya da Apple aracılığıyla giriş yapın. İkinci durumda, hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. [AdGuard VPN aboneliğiniz](/general/subscription) varsa, AdGuard VPN Tarayıcı uzantısında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Burada oluşturun](https://auth.adguardaccount.com/registration.html).

:::

## Kaydedilen konumlar

Hızlı erişim için favori konumlarınızı kaydedebilirsiniz. Bunu yapmak için, bir konumun üzerine gelin ve görünen yer işareti simgesine tıklayın:

![Konum kaydet *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Your marked locations will then show up in the *Saved* tab.

![Kaydedilenler sekmesi *mobil](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## İstatistikler

Menüdeki *İstatistikler* bölümü, VPN bağlantınızdan ne kadar veri geçtiğini takip etmenin basit bir yoludur.

![İstatistikler *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

When stats can come in handy:

- **Check if the VPN is actually working**. A quick look at the stats confirms that your connection is active and data is routed through the VPN.

- **Spot unexpected activity**. If traffic grows while you’re idle, something in the background — a tab or an extension — might be sending data.

- **Troubleshoot slow connection issues**. If your connection feels slow, a spike in traffic might point to something running or downloading in the background.

:::note

Tüm istatistikler cihazınızda yerel olarak saklanır. We only calculate how much data is used — we don’t see what websites you visit. You can also disable statistics if you don’t need them.

:::

The *Stats* section is available to users of the paid version.

## Ayarlar

AdGuard VPN Tarayıcı Uzantınızı yönetmek için:

- Tarayıcı panelindeki simgesine tıklayın, hamburger menü simgesine tıklayın ve *Ayarlar* öğesini seçin,
- Veya tarayıcınızda *Uzantıları yönet* sayfasına gidin, *AdGuard VPN* altındaki *Ayrıntılar* öğesine tıklayın ve ayarlarını buradan yönetin.

İşiniz bittiğinde, solda birkaç sekme göreceksiniz:

### Genel

Bu sekmede birkaç önemli ayar toplanmıştır. Burada kullanılacak bir DNS sunucusu seçebilir, tarayıcının içerik menüsüne AdGuard VPN simgesini ekleyebilir veya kaldırabilir, WebRTC'i engelleyebilir, uzantının temasını değiştirebilir ve AdGuard'ın anonim çökme raporları ve teknik veriler toplamasına izin verebilirsiniz.

#### DNS sunucusu

Varsayılan olarak, İSS'niz tarafından sağlanan [sistem DNS sunucusu](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) seçilidir, ancak gizliliğinizi tehlikeye atabilir. AdGuard VPN Tarayıcı uzantısıyla, daha iyi hız ve güvenlik sağlayan ve hatta reklamları veya potansiyel olarak tehlikeli alan adlarını engelleyen bir DNS sunucusu seçebilirsiniz. DNS sunucularının adları altındaki kısa açıklamalar, gezinmenize ve kararınızı vermenize yardımcı olur.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

### İstisnalar

Bir sonraki sekme, AdGuard VPN'in ana ayırt edici özelliklerinden birini içerir — ayrı istisna listelerine sahip iki mod.

**Genel modda**, AdGuard VPN varsayılan olarak istisna listelerine eklediğiniz siteler dışında tüm sitelerde çalışır. **Seçici modda** tam tersi, AdGuard VPN varsayılan olarak hiçbir yerde çalışmaz. **Genel modda** gördüğünüzden ayrı olarak, çalışmasını istediğiniz siteleri bir istisna listesine ekleyebilirsiniz.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

#### İçe ve dışa aktarma

Yalnızca site ekleyip çıkarmakla kalmaz, ayrıca hazır istisna listelerini AdGuard VPN'nin yüklü olduğu diğer cihazlara da aktarabilirsiniz. İstisna listenizi dışa aktarmak için aşağıdaki 4 adımlı talimatı uygulayın:

1. İstisnaların listesini dışa aktarmak istediğiniz yerden AdGuard VPN Tarayıcı uzantısını açın. Uygun bölümü bulun ve "Dışa aktar" düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
1. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın veya arşivi olduğu gibi bırakın.
1. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza gönderin.
1. Bu cihazda AdGuard VPN'i açın. Uygun bölümü bulun, "İçe aktar" düğmesine tıklayın ve arşivi seçin. Tamamlandı!

### Hesap

AdGuard VPN Tarayıcı uzantısının üçüncü sekmesi, yalnızca hesabınıza giriş yapmak için kullandığınız e-posta adresini, *Yönet* ve *Çıkış yap* olmak üzere iki düğmeyi içeren tamamen minimalistiktir. *Yönet* düğmesine tıklamak sizi tüm mevcut lisanslarınızı, aboneliklerinizi ve bunlara bağlı cihazları görebileceğiniz kişisel AdGuard hesabınıza götürür.

### Destek

Sık sorulan soruların yanıtlarını SSS bölümünde bulabilir veya geri bildirim bırakabilirsiniz: Bir şey olması gerektiği gibi çalışmıyorsa bir hatayı bildirin, yeni bir özellik eklemeyi önerin veya birçok sosyal medya platformundan herhangi birinde AdGuard'ı tartışın.

### Hakkında

Uzantının sürümünü kontrol edebileceğiniz, resmi siteyi ziyaret edebileceğiniz ve SKLS veya Gizlilik politikasını görüntüleyebileceğiniz başka bir küçük sekme.
