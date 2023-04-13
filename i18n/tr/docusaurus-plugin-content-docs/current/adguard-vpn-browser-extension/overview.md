---
title: Özelliklere genel bakış
sidebar_position: 1
---

AdGuard VPN Tarayıcı uzantısı Chrome, Firefox, Opera ve Edge için mevcuttur. Kullanıcı arayüzü ve işlevsellik tarayıcılar arasında farklılık göstermez, bu nedenle aşağıdaki genel bakış, tüm tarayıcılar için AdGuard VPN uzantılarıyla alakalı olacaktır.

> AdGuard VPN Tarayıcı uzantısını yalnızca giriş yaptığınızda kullanabileceğinizi unutmayın. AdGuard hesabınızla veya Google, Facebook ya da Apple aracılığıyla giriş yapın. İkinci durumda, hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. [AdGuard VPN aboneliğiniz](/general/subscription.md) varsa, AdGuard VPN Tarayıcı uzantısında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan oluşturun](https://auth.adguard.com/registration.html).

AdGuard VPN Tarayıcı uzantınızı yönetmek için:

* Tarayıcı panelindeki simgesine tıklayın, hamburger menü simgesine tıklayın ve *Ayarlar* öğesini seçin,
* Veya tarayıcınızda *Uzantıları yönet* sayfasına gidin, *AdGuard VPN* altındaki *Ayrıntılar* öğesine tıklayın ve ayarlarını buradan yönetin.

İşiniz bittiğinde, solda birkaç sekme göreceksiniz:

## Ayarlar

Bu sekmede birkaç önemli ayar toplanmıştır. Burada kullanılacak bir DNS sunucusu seçebilir, tarayıcının içerik menüsüne AdGuard VPN simgesini ekleyebilir veya kaldırabilir, WebRTC'i engelleyebilir, uzantının temasını değiştirebilir ve AdGuard'ın anonimleştirilmiş çökme raporları ve teknik veriler toplamasına izin verebilirsiniz.

### DNS sunucusu seçme

Varsayılan olarak, İSS'niz tarafından sağlanan [sistem DNS sunucusu](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) seçilidir, ancak gizliliğinizi tehlikeye atabilir. AdGuard VPN Tarayıcı uzantısıyla, daha iyi hız ve güvenlik sağlayan ve hatta reklamları veya potansiyel olarak tehlikeli alan adlarını engelleyen bir DNS sunucusu seçebilirsiniz. DNS sunucularının adları altındaki kısa açıklamalar, gezinmenize ve kararınızı vermenize yardımcı olur.

DNS sunucularını çeşitli sağlayıcılardan [hakkında daha fazla bilgi edinin](https://adguard-dns.io/kb/general/dns-providers/).

## İstisnalar

Bir sonraki sekme, AdGuard VPN'in ana ayırt edici özelliklerinden birini içerir – ayrı istisna listelerine sahip iki mod.

**Genel modda**, AdGuard VPN varsayılan olarak istisna listelerine eklediğiniz siteler dışında tüm sitelerde çalışır. **Seçici modda** tam tersi, AdGuard VPN varsayılan olarak hiçbir yerde çalışmaz. **Genel modda** gördüğünüzden ayrı olarak, çalışmasını istediğiniz siteleri bir istisna listesine ekleyebilirsiniz.

İstisna listesine bir site eklerken, siteyi elle yazabilir veya **Listeden** seçeneğini seçebilirsiniz. İkinci durumda, sekiz kategori görürsünüz (ör. *Alışveriş*, *Messengers*, vb.), Her biri birkaç popüler hizmet öneriyor. Bu hizmetlerden herhangi birini tek bir tıklamayla hariç tutabilirsiniz ve bu işlem, söz konusu hizmetle ilgili tüm alanları istisnalara ekler.

### İçe ve dışa aktarma

Yalnızca site ekleyip çıkarmakla kalmaz, ayrıca hazır istisna listelerini AdGuard VPN'nin yüklü olduğu diğer cihazlara da aktarabilirsiniz. İstisna listenizi dışa aktarmak için aşağıdaki 4 adımlı talimatı uygulayın:

1. İstisnaların listesini dışa aktarmak istediğiniz yerden AdGuard VPN Tarayıcı uzantısını açın. Uygun bölümü bulun ve "Dışa aktar" düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
2. Arşivde, Genel ve Seçici listelerin her biri için birer tane olmak üzere iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza gönderin.
4. Bu cihazda AdGuard VPN'i açın. Uygun bölümü bulun, "İçe aktar" düğmesine tıklayın ve arşivi seçin. Tamamlandı!

## Hesap

AdGuard VPN Tarayıcı uzantısının üçüncü sekmesi, yalnızca hesabınıza giriş yapmak için kullandığınız e-posta adresini, *Yönet* ve *Çıkış yap* olmak üzere iki düğmeyi içeren tamamen minimalistiktir. *Yönet* düğmesine tıklamak sizi tüm mevcut lisanslarınızı, aboneliklerinizi ve bunlara bağlı cihazları görebileceğiniz kişisel AdGuard hesabınıza götürür.

## Destek

Sık sorulan soruların yanıtlarını SSS bölümünde bulabilir veya geri bildirim bırakabilirsiniz: Bir şey olması gerektiği gibi çalışmıyorsa bir hatayı bildirin, yeni bir özellik eklemeyi önerin veya birçok sosyal medya platformundan herhangi birinde AdGuard'ı tartışın.

## Hakkında

Uzantının sürümünü kontrol edebileceğiniz, resmi siteyi ziyaret edebileceğiniz ve SKLS veya Gizlilik politikasını görüntüleyebileceğiniz başka bir küçük sekme.
