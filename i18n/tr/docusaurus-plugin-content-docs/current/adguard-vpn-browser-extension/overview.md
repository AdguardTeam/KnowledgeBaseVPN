---
title: Özelliklere genel bakış
sidebar_position: 1
---

AdGuard VPN Tarayıcı Uzantısı Chrome, Firefox, Opera ve Edge için mevcuttur. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

AdGuard VPN Tarayıcı Uzantısını yalnızca giriş yaptığınızda kullanabilirsiniz. AdGuard hesabınızla veya Google, Facebook ya da Apple aracılığıyla giriş yapın. İkinci durumda, hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. [AdGuard VPN aboneliğiniz](/general/subscription) varsa, AdGuard VPN Tarayıcı uzantısında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan oluşturun](https://auth.adguard.com/registration.html).

:::

AdGuard VPN Tarayıcı Uzantınızı yönetmek için:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Veya tarayıcınızda *Uzantıları yönet* sayfasına gidin, *AdGuard VPN* altındaki *Ayrıntılar* öğesine tıklayın ve ayarlarını buradan yönetin.

Once done, you’ll see several tabs on the left:

## Ayarlar

Bu sekmede birkaç önemli ayar toplanmıştır. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

### DNS sunucusu seçme

Varsayılan olarak, İSS'niz tarafından sağlanan [sistem DNS sunucusu](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) seçilidir, ancak gizliliğinizi tehlikeye atabilir. AdGuard VPN Tarayıcı uzantısıyla, daha iyi hız ve güvenlik sağlayan ve hatta reklamları veya potansiyel olarak tehlikeli alan adlarını engelleyen bir DNS sunucusu seçebilirsiniz. DNS sunucularının adları altındaki kısa açıklamalar, gezinmenize ve kararınızı vermenize yardımcı olur.

DNS sunucularını çeşitli sağlayıcılardan [hakkında daha fazla bilgi edinin](https://adguard-dns.io/kb/general/dns-providers/).

## İstisnalar

Bir sonraki sekme, AdGuard VPN'in ana ayırt edici özelliklerinden birini içerir — ayrı istisna listelerine sahip iki mod.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

İstisna listesine bir site eklerken, siteyi elle yazabilir veya **Listeden** seçeneğini belirleyebilirsiniz. İkinci durumda, her biri birkaç popüler hizmet öneren sekiz kategori (örneğin, *Alışveriş* veya *Mesajlaşma*) göreceksiniz. Bu hizmetlerden herhangi birini tek bir tıklamayla hariç tutabilirsiniz. Bu, söz konusu hizmetle ilgili tüm alan adlarını istisnalara ekler.

### İçe ve dışa aktarma

Yalnızca site ekleyip çıkarmakla kalmaz, ayrıca hazır istisna listelerini AdGuard VPN'nin yüklü olduğu diğer cihazlara da aktarabilirsiniz. İstisna listenizi dışa aktarmak için aşağıdaki 4 adımlı talimatı uygulayın:

1. İstisnaların listesini dışa aktarmak istediğiniz yerden AdGuard VPN Tarayıcı uzantısını açın. Find the appropriate section and click the *Export* button. `exclusions.zip` arşivi indirilecektir.
1. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın veya arşivi olduğu gibi bırakın.
1. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza gönderin.
1. Bu cihazda AdGuard VPN'i açın. Find the appropriate section, click the *Import* button and select the archive. Tamamlandı!

## Hesap

AdGuard VPN Tarayıcı uzantısının üçüncü sekmesi, yalnızca hesabınıza giriş yapmak için kullandığınız e-posta adresini, *Yönet* ve *Çıkış yap* olmak üzere iki düğmeyi içeren tamamen minimalistiktir. *Yönet* düğmesine tıklamak sizi tüm mevcut lisanslarınızı, aboneliklerinizi ve bunlara bağlı cihazları görebileceğiniz kişisel AdGuard hesabınıza götürür.

## Destek

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## Hakkında

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
