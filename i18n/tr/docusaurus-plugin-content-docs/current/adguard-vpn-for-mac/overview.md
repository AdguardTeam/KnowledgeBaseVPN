---
title: Özelliklere genel bakış
sidebar_position: 1
---

Mac için AdGuard VPN, bir masaüstü VPN hizmetidir. AdGuard VPN, AdGuard Reklam Engelleyici ile tamamen uyumludur, birlikte kullanılabilirler ve sorunsuz çalışırlar. Hangi özellikleri sunabileceğine bakalım.

**AdGuard hesabınıza giriş yapmadıkça Mac için AdGuard VPN'i kullanamayacağınızı** unutmayın. AdGuard hesabınızla veya harici bir hesapla, yani Apple, Google veya Facebook aracılığıyla giriş yapabilirsiniz. Harici hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. AdGuard hesabınızda uygun bir abonelik varsa, masaüstü uygulamasında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan](https://auth.adguard.com/registration.html) oluşturun.

:::note Compatibility

Mac için AdGuard VPN, şu anda macOS Catalina'dan (10.15) başlayan macOS sürümlerinde desteklenmektedir.

:::

## Ana ekran

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

İlk sekme *Ana* ekranıdır. Burada AdGuard VPN'nin mevcut durumunu ve [istisna modunu](#exclusions), seçilen konumu (etkinleştirilmişse) ve pingini görebilirsiniz. Ping, bir VPN sunucusunun yanıt süresidir. Consequently, the lower this number, the faster the connection. VPN devre dışıysa, en son bağlandığınız konum aşağıda görüntülenir. En düşük pinge sahip en hızlı konumlar ekranın sağ üst köşesinde görüntülenir. Aşağıda konumların tam listesini görebilirsiniz. Arama fonksiyonu sayesinde, ihtiyaç duyulan konum kolayca bulunabilir.

:::note

Ücretsiz kullanıcılar yalnızca belirli konumlara bağlanabilir, diğerleri ise engellenir. Ayrıca ücretsiz sürümde aylık 3 GB veri sınırı bulunuyor.

:::

## İstisnalar

![İstisnalar](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![İstisnalar ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Ayrıca, İstisnalara site eklemekle kalmaz, aynı zamanda popüler hizmetler listeleri arasından seçim yapabilirsiniz. Listeler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Bu hizmetlerden herhangi biri, tek bir tıklamayla İstisnalara eklenebilir! Seçici modu kullanıyorsanız özellikle kullanışlıdır.

İstisna listesi kolayca yapılandırılabilir. Bir alan adı ve alt alan adlarından bazılarını eklediyseniz, bunlar kök alan içinde gruplandırılır. Bir kök alan adı (`example.com`) eklerken, maskesi de eklenir (`*.example.com`).

Bir hizmet eklediyseniz, bir şeyi değiştirdiyseniz veya kaldırdıysanız ve şimdi başlangıç ayarlarını kurtarmak istiyorsanız, alan adının yanındaki *Varsayılana sıfırla* öğesine basmanız yeterli — bu eylem, eksik alan adlarını geri yükler ve tüm onay kutularını işaretler.

Ayrıca, hazır istisna listeleri, AdGuard VPN'in kurulu olduğu diğer cihazlara aktarılabilir. İstisnaları dışa aktarmak için aşağıdaki dört adımlı talimatı takip edin:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
2. Arşivde, her biri Genel ve Seçici listeler için iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Mac'inizden iPhone'unuza aktarırsanız, `.zip` dosyasını önceden telefonunuza gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda veya tarayıcıda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin. Tamamlandı!

:::note Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Destek

![Destek ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

Üçüncü sekme *Destek* ekranıdır. [SSS'de](https://adguard-vpn.com/welcome.html#faq) veya [Bilgi tabanı](/) bölümlerinde tüm soruların yanıtlarını bulun, bir hatayla karşılaşırsanız hata bildirin veya [herhangi bir platformda AdGuard'ı tartışın](https://adguard.com/discuss.html). Ve [ürünümüz hakkında geri bildirim bırakmaktan](https://surveys.adguard.com/vpn_mac/form.html) çekinmeyin, bunu takdir ediyoruz.

## Ayarlar

![Ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Son olarak Ayarlar sekmesine geliyoruz. *Program hakkında* bölümünde, AdGuard VPN'nin güncel sürümünü görebilir, güncellemeleri denetleyebilir, resmi sitemizi ziyaret edebilir ve AdGuard'ın SKLS ve Gizlilik politikası hakkında bilgi sahibi olabilirsiniz. *Lisans hakkında* bölümünde ücretsizden sınırsıza yükseltebilir, aboneliğinizi yönetebilir veya çıkış yapabilirsiniz. Ve en önemlisi, buradan *Genel ayarlara* erişebilirsiniz.

### Uygulama ayarları

![Uygulama ayarları](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

İlk dört temel özellik, uygulamayı daha kullanışlı ve kullanıcı dostu hâle getirir, örneğin *Kill Switch*, *Otomatik güncelle*, *Oturum açılışında AdGuard VPN'i başlat* ve *Uygulama başlatıldığında otomatik bağlan*. Ayrıca, açık, koyu ve sistem varsayılanı temaları arasında seçim yapabilirsiniz — sonuncu olan, Mac'inizdeki temayla eşleşir.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Destek için mesajınıza günlük eklemek istiyorsanız bu yararlı olabilir.

### DNS sunucuları

![DNS sunucuları](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Burada, varsayılan olarak İSS'niz tarafından sağlanan bir DNS sunucusuna güvenmemek için özel bir DNS sunucusu (veya sunucuları) ekleyebilirsiniz. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious websites and redirects them to a “blackhole”.

### Gelişmiş ayarlar

![Gelişmiş ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

#### Günlük kayıt düzeyi

Yalnızca iki günlük kayıt düzeyi vardır ancak ilki, varsayılan olanı kullanmanızı şiddetle tavsiye ederiz. İkinci seçenek (genişletilmiş günlük kayıt), yalnızca teknik desteğimize danıştıktan sonra garip bir program davranışını kaydetmek için ayarlanmalıdır. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Menü çubuğu simgesini gizle

Bu seçenek *Gelişmiş ayarlarda* yer almasına rağmen tereddüt etmeden etkinleştirilebilir. AdGuard VPN simgesini menü çubuğundan gizleyebilirsiniz, bu uygulamamızın arka planda çalışmasına engel olmaz.

#### QUIC kullan (deneysel)

QUIC iletişim protokolü, HTTP'nin en son, en gelişmiş sürümüdür. Örneğin metroda veya asansörde mobil veri kullanırken, ideal olmayan koşullarda daha iyi bir bağlantı kalitesi elde etmek için anahtarı değiştirin.
