---
title: Özelliklere genel bakış
sidebar_position: 1
---

AdGuard VPN Tarayıcı uzantısı Chrome, Firefox ve Edge için kullanılabilir. Kullanıcı arayüzü ve işlevselliği tarayıcılar arasında farklılık göstermez, bu nedenle aşağıdaki genel bakış tüm tarayıcılar için AdGuard VPN uzantılarıyla ilgili olacaktır.

> AdGuard VPN Tarayıcı uzantısını yalnızca oturum açtığınızda kullanabileceğinizi unutmayın. AdGuard hesabınızla veya Google, Facebook ya da Apple üzerinden oturum açın. İkinci durumda, hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. [AdGuard VPN aboneliğiniz varsa](/general/subscription.md), AdGuard VPN Tarayıcı uzantısında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan oluşturun](https://auth.adguard.com/registration.html).

AdGuard VPN Tarayıcı uzantınızı yönetmek için

* Tarayıcının panelindeki simgesini tıklayın, sonra üç çizgiyi tıklayın ve Ayarlar **veya
* Tarayıcınızın *Uzantıları yönet* sayfasına gidin ve AdGuard VPN'nin ayarlarını buradan girin.

İşiniz bittiğinde, solda birkaç sekme göreceksiniz:

## Ayarlar

Bu sekmede birkaç önemli ayar toplanmıştır. Burada kullanılacak bir DNS sunucusu seçebilir, tarayıcının içerik menüsüne AdGuard VPN simgesini ekleyebilir veya kaldırabilir, WebRTC'yi engelleyebilir, uzantının temasını değiştirebilir ve AdGuard'ın anonimleştirilmiş çökme raporları ve teknik veriler toplamasına izin verebilirsiniz.

### DNS sunucusu seçme

Varsayılan olarak, ISS'niz tarafından sağlanan [sistem DNS sunucusu](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) seçilidir, ancak gizliliğinizi tehlikeye atabilir. AdGuard VPN Tarayıcı uzantısıyla, daha iyi hız ve güvenlik sağlayan ve hatta reklamları veya potansiyel olarak tehlikeli alan adlarını engelleyen bir DNS sunucusu seçebilirsiniz. DNS sunucularının adları altındaki kısa açıklamalar, gezinmenize ve kararınızı vermenize yardımcı olacaktır.

DNS sunucularını çeşitli sağlayıcılardan [hakkında daha fazla bilgi edinin](https://kb.adguard.com/ru/general/dns-providers).

## İstisnalar

Bir sonraki sekme, AdGuard VPN'in ana ayırt edici özelliklerinden birini içerir - ayrı istisna listelerine sahip iki mod.

**Normal mod**, AdGuard VPN varsayılan olarak istisnalar listesine eklediğiniz web siteleri hariç tüm web sitelerinde çalışır. **Seçici mod**, tam tersi, AdGuard VPN varsayılan olarak hiçbir yerde çalışmaz. Çalışmasını istediğiniz web sitelerini, ** Normal mod** gördüğünüzden ayrı olarak bir dışlamalar listesine ekleyebilirsiniz.

İstisnalar listesine bir web sitesi eklerken, web sitesini manuel olarak girebilir veya **Listeden** seçeneğini belirleyebilirsiniz. İkinci durumda, sekiz kategori görürsünüz (ör. *Alışveriş*, *Messengers*, vb.), Her biri birkaç popüler hizmet öneriyor. Bu hizmetlerden herhangi birini tek bir tıklamayla hariç tutabilirsiniz ve bu işlem, söz konusu hizmetle ilgili tüm alanları hariç tutmalara ekler.

### İçe ve Dışa Aktarma

Yalnızca web siteleri ekleyip kaldırmakla kalmaz, aynı zamanda hazır dışlama listelerini AdGuard VPN'nin yüklü olduğu diğer cihazlara da aktarabilirsiniz. İstisnalar listenizi dışa aktarmak için aşağıdaki 4 adımlı talimatı uygulayın:

1. Open AdGuard VPN Browser extension from where you want to export your lists of exclusions. Find the appropriate section and click the "Export" button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the Regular and Selective lists. Add more exclusions to them, delete the existing ones, rename files, or just leave the archive as it is.
3. When transferring between different devices, send the `.zip` file to the device for import.
4. Open AdGuard VPN on that device. Find the appropriate section, click the "Import" button and select the archive. Done!

## Hesap

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

## Destek

Sık sorulan soruların yanıtlarını SSS bölümünde bulabilir veya geri bildirim bırakabilirsiniz: Bir şey olması gerektiği gibi çalışmıyorsa bir hatayı bildirin, yeni bir özellik eklemeyi önerin veya birçok sosyal medya platformundan herhangi birinde AdGuard'ı tartışın.

## Hakkında

Uzantının sürümünü kontrol edebileceğiniz, resmi web sitesini ziyaret edebileceğiniz ve EULA'yı veya Gizlilik Politikasını görüntüleyebileceğiniz başka bir küçük sekme.