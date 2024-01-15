---
title: Özelliklere genel bakış
sidebar_position: 1
---

Mac için AdGuard VPN, bir masaüstü VPN hizmetidir. AdGuard VPN, AdGuard Reklam Engelleyici ile tamamen uyumludur, birlikte kullanılabilirler ve sorunsuz çalışırlar. Hangi özellikleri sunabileceğine bakalım.

**AdGuard hesabınıza giriş yapmadıkça Mac için AdGuard VPN'i kullanamayacağınızı** unutmayın. AdGuard hesabınızla veya harici bir hesapla, yani Apple, Google veya Facebook aracılığıyla giriş yapabilirsiniz. Harici hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. AdGuard hesabınızda uygun bir abonelik varsa, masaüstü uygulamasında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan](https://auth.adguard.com/registration.html) oluşturun.

:::note Uyumluluk

Mac için AdGuard VPN, şu anda macOS Catalina'dan (10.15) başlayan macOS sürümlerinde desteklenmektedir.

:::

## Ana ekran

![Ana ekran](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

İlk sekme *Ana* ekranıdır. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping, bir VPN sunucusunun yanıt süresidir. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Aşağıda konumların tam listesini görebilirsiniz. The search field makes it easy to find the location you need.

:::note

Ücretsiz kullanıcılar yalnızca belirli konumlara bağlanabilir, diğerleri ise engellenir. Ayrıca ücretsiz sürümde aylık 3 GB veri sınırı bulunuyor.

:::

## İstisnalar

![İstisnalar](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN'i benzersiz kılan birkaç özelliği vardır ve bunlardan biri kesinlikle *İstisnalardır*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![İstisnalar ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Ayrıca, İstisnalara site eklemekle kalmaz, aynı zamanda popüler hizmetler listeleri arasından seçim yapabilirsiniz. Listeler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Bu hizmetlerden herhangi biri, tek bir tıklamayla İstisnalara eklenebilir! Seçici modu kullanıyorsanız özellikle kullanışlıdır.

İstisna listesi kolayca yapılandırılabilir. Bir alan adı ve alt alan adlarından bazılarını eklediyseniz, bunlar kök alan içinde gruplandırılır. Bir kök alan adı (`example.com`) eklerken, maskesi de eklenir (`*.example.com`).

Bir hizmet eklediyseniz, bir şeyi değiştirdiyseniz veya kaldırdıysanız ve şimdi başlangıç ayarlarını kurtarmak istiyorsanız, alan adının yanındaki *Varsayılana sıfırla* öğesine basmanız yeterli — bu eylem, eksik alan adlarını geri yükler ve tüm onay kutularını işaretler.

Ayrıca, hazır istisna listeleri, AdGuard VPN'in kurulu olduğu diğer cihazlara aktarılabilir. İstisnaları dışa aktarmak için aşağıdaki dört adımlı talimatı takip edin:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
2. Arşivde, her biri Genel ve Seçici listeler için iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Mac'inizden iPhone'unuza aktarırsanız, `.zip` dosyasını önceden telefonunuza gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda veya tarayıcıda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin. Tamamlandı!

:::note

Diğer cihazlardan arşiv dosyaları benzer şekilde Mac için AdGuard VPN'inize aktarılabilir.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Destek

![Destek ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. [SSS'de](https://adguard-vpn.com/welcome.html#faq) veya [Bilgi tabanı](/) bölümlerinde tüm soruların yanıtlarını bulun, bir hatayla karşılaşırsanız hata bildirin veya [herhangi bir platformda AdGuard'ı tartışın](https://adguard.com/discuss.html). Ve [ürünümüz hakkında geri bildirim bırakmaktan](https://surveys.adguard.com/vpn_mac/form.html) çekinmeyin, bunu takdir ediyoruz.

## Ayarlar

![Ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Son olarak Ayarlar sekmesine geliyoruz. *Program hakkında* bölümünde, AdGuard VPN'nin güncel sürümünü görebilir, güncellemeleri denetleyebilir, resmi sitemizi ziyaret edebilir ve AdGuard'ın SKLS ve Gizlilik politikası hakkında bilgi sahibi olabilirsiniz. *Lisans hakkında* bölümünde ücretsizden sınırsıza yükseltebilir, aboneliğinizi yönetebilir veya çıkış yapabilirsiniz. Ve en önemlisi, buradan *Genel ayarlara* erişebilirsiniz.

### Uygulama ayarları

![Uygulama ayarları](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

İlk dört temel özellik, uygulamayı daha kullanışlı ve kullanıcı dostu hâle getirir, örneğin *Kill Switch*, *Otomatik güncelle*, *Oturum açılışında AdGuard VPN'i başlat* ve *Uygulama başlatıldığında otomatik bağlan*. Ayrıca, açık, koyu ve sistem varsayılanı temaları arasında seçim yapabilirsiniz — sonuncu olan, Mac'inizdeki temayla eşleşir.

You can also allow AdGuard VPN to gather and send anonymous crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Destek için mesajınıza günlük eklemek istiyorsanız bu yararlı olabilir.

### DNS sunucuları

![DNS sunucuları](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Here you can set up a DNS server (or servers). This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Gelişmiş ayarlar

![Gelişmiş ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Günlük kayıt düzeyi

Yalnızca iki günlük kayıt düzeyi vardır ancak ilki, varsayılan olanı kullanmanızı şiddetle tavsiye ederiz. İkinci seçenek (genişletilmiş günlük kayıt), yalnızca teknik desteğimize danıştıktan sonra garip bir program davranışını kaydetmek için ayarlanmalıdır. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Menü çubuğu simgesini gizle

Bu seçenek *Gelişmiş ayarlarda* yer almasına rağmen tereddüt etmeden etkinleştirilebilir. AdGuard VPN simgesini menü çubuğundan gizleyebilirsiniz, bu uygulamamızın arka planda çalışmasına engel olmaz.

#### Use QUIC

QUIC iletişim protokolü, HTTP'nin en son, en gelişmiş sürümüdür. Örneğin metroda veya asansörde mobil veri kullanırken, ideal olmayan koşullarda daha iyi bir bağlantı kalitesi elde etmek için anahtarı değiştirin.
