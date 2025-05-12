---
title: Özelliklere genel bakış
sidebar_position: 1
---

Mac için AdGuard VPN, bir masaüstü VPN hizmetidir. AdGuard VPN, AdGuard Reklam Engelleyici ile tamamen uyumludur, birlikte kullanılabilirler ve sorunsuz çalışırlar. Hangi özellikleri sunabileceğine bakalım.

**AdGuard hesabınıza giriş yapmadıkça Mac için AdGuard VPN'i kullanamayacağınızı** unutmayın. AdGuard hesabınızla veya harici bir hesapla, yani Apple, Google veya Facebook aracılığıyla giriş yapabilirsiniz. Harici hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. AdGuard hesabınızda uygun bir abonelik varsa, masaüstü uygulamasında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan](https://auth.adguardaccount.com/registration.html) oluşturun.

:::note Uyumluluk

Mac için AdGuard VPN, şu anda macOS Catalina'dan (10.15) başlayan macOS sürümlerinde desteklenmektedir.

:::

## Ana ekran

![Ana ekran](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

İlk sekme *Ana* ekranıdır. Burada AdGuard VPN'in mevcut durumunu, seçilen konumu (etkinse) ve pingini görebilirsiniz. Ping, bir VPN sunucusunun yanıt süresidir. Sayı ne kadar düşük olursa bağlantı o kadar hızlı olur. VPN devre dışıysa, en son bağlandığınız konum altta görüntülenir.

En düşük pinge sahip en hızlı konumlar ekranın sağ üst köşesinde görüntülenir. Herhangi bir konum çevrimdışıysa tıklayabileceğiniz bir yenileme düğmesi de vardır. Aşağıda konumların tam listesini görebilirsiniz. Arama alanı, ihtiyacınız olan konumu bulmanızı kolaylaştırır.

:::note

Ücretsiz kullanıcılar yalnızca belirli konumlara bağlanabilir, diğerleri ise engellenir. Ayrıca ücretsiz sürümde aylık 3 GB veri sınırı bulunuyor.

:::

### Kaydedilen konumlar

Aynı sekmede, hızlı bir şekilde erişmek için favori konumlarınızı kaydedebilirsiniz.

Sadece bir konumun üzerine gelin, görünen yer işareti simgesine tıklayın ve kaydedilecektir. İşaretlediğiniz konumlar daha sonra *Kaydedilenler* sekmesinde görünür.

![Kaydedilen konumlar](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## İstisnalar

![İstisnalar](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![İstisnalar ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! Seçici modu kullanıyorsanız özellikle kullanışlıdır.

İstisna listesi kolayca yapılandırılabilir. Bir alan adı ve alt alan adlarından bazılarını eklediyseniz, bunlar kök alan içinde gruplandırılır. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

:::info İstisnalara eklenen tarayıcılar

Sürüm 2.4'ten başlayarak, VPN yalnızca seçilen uygulamalar ve siteler için etkin olduğunda tüm tarayıcılar otomatik olarak istisnalar listesine eklenir. Bu değişiklik, genellikle kafası karışan ve tarayıcılarını uygulama olarak kabul edip etmeyeceklerini bilmeyen kullanıcılar için daha fazla kolaylık sağlıyor. Aşağıdaki koşullar altında uygulanır:

- Kullanıcı AdGuard VPN'i ilk kez yüklediyse
- Kullanıcı sürüm 2.4'ten önce İstisnalar ayarlarını değiştirmediyse

:::

Bir hizmet eklediyseniz, bir şeyi değiştirdiyseniz veya kaldırdıysanız ve şimdi başlangıç ayarlarını kurtarmak istiyorsanız, alan adının yanındaki *Varsayılana sıfırla* öğesine basmanız yeterli — bu eylem, eksik alan adlarını geri yükler ve tüm onay kutularını işaretler.

Ayrıca, hazır istisna listeleri, AdGuard VPN'in kurulu olduğu diğer cihazlara aktarılabilir. To export exclusions, follow the four-step instruction below:

1. İstisnalar listenizi dışa aktarmak istediğiniz cihazda AdGuard VPN'i açın. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
2. Arşivde, her biri Genel ve Seçici listeler için iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Mac'inizden iPhone'unuza aktarırsanız, `.zip` dosyasını önceden telefonunuza gönderdiğinizden emin olun.
4. AdGuard VPN'i, hazır istisnaların listesiyle birlikte arşivi içe aktarmak istediğiniz cihazda veya tarayıcıda açın. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin. Tamamlandı!

:::note

Diğer cihazlardan arşiv dosyaları benzer şekilde Mac için AdGuard VPN'inize aktarılabilir.

:::

## İstatistikler

![İstatistikler ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

İstatistikler ekranı, konum ve uygulamaya göre tüketilen veri, en çok kullanılan konumlar ve uygulamalar hakkında ayrıntılı bilgi sağlar. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Daha da önemlisi, tüm veriler cihazınızda yerel olarak saklanır, bu nedenle sizden başka hiç kimse bunlara erişemez. İstatistikler özelliği, AdGuard VPN aboneliği olan kullanıcılar tarafından kullanılabilir.

## Destek

![Destek ekranı](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

Dördüncü sekme *Destek* ekranıdır. [SSS'de](https://adguard-vpn.com/welcome.html#faq) veya [Bilgi tabanı](/) bölümlerinde tüm soruların yanıtlarını bulun, bir hatayla karşılaşırsanız hata bildirin veya [herhangi bir platformda AdGuard'ı tartışın](https://adguard.com/discuss.html). Ve [ürünümüz hakkında geri bildirim bırakmaktan](https://surveys.adguard.com/vpn_mac/form.html) çekinmeyin, bunu takdir ediyoruz.

## Ayarlar

![Ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Son olarak Ayarlar sekmesine geliyoruz. *Program hakkında* bölümünde, AdGuard VPN'nin güncel sürümünü görebilir, güncellemeleri denetleyebilir, resmi sitemizi ziyaret edebilir ve AdGuard'ın SKLS ve Gizlilik politikası hakkında bilgi sahibi olabilirsiniz. *Lisans hakkında* bölümünde ücretsizden sınırsıza yükseltebilir, aboneliğinizi yönetebilir veya çıkış yapabilirsiniz. Ve en önemlisi, buradan *Genel ayarlara* erişebilirsiniz.

### Uygulama ayarları

![Uygulama ayarları](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

İlk dört temel özellik, uygulamayı daha kullanışlı ve kullanıcı dostu hâle getirir, örneğin *Kill Switch*, *Otomatik güncelle*, *Oturum açılışında AdGuard VPN'i başlat* ve *Uygulama başlatıldığında otomatik bağlan*. Ayrıca, açık, koyu ve sistem varsayılanı temaları arasında seçim yapabilirsiniz — sonuncu olan, Mac'inizdeki temayla eşleşir.

Ayrıca, uygulamamızı geliştirmemize yardımcı olmak için AdGuard VPN'in anonimleştirilmiş çökme raporlarını, teknik ve etkileşim verilerini toplamasına ve göndermesine izin verebilirsiniz. Son olarak, Mac'inizden günlükleri dışa aktarabilirsiniz. Destek için mesajınıza günlük eklemek istiyorsanız bu yararlı olabilir.

### DNS sunucuları

![DNS sunucuları](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Burada bir veya daha fazla DNS sunucusu kurulabilir. Bu, İSS'niz tarafından sağlanan varsayılan DNS sunucusuna güvenmek istemiyorsanız kullanışlıdır. Popüler DNS hizmetleri listesinden birini seçin veya elle özel bir sunucu ekleyin. Yalnızca DNS trafiğinizi şifrelemekle kalmayıp aynı zamanda kötü amaçlı sitelere yönelik istekleri tespit eden ve bunları bir “kara deliğe” yönlendiren AdGuard DNS'i eklemenizi öneririz.

### Gelişmiş ayarlar

![Gelişmiş ayarlar](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Günlük kayıt düzeyi

Yalnızca iki günlük kayıt düzeyi vardır ancak ilki, varsayılan olanı kullanmanızı şiddetle öneririz. İkinci seçenek (genişletilmiş günlük kayıt), yalnızca teknik desteğimize danıştıktan sonra garip bir program davranışını kaydetmek için ayarlanmalıdır. Genişletilmiş günlük kayıt düzeyini etkinleştirdiyseniz, günlükleri kaydettikten sonra varsayılan düzeye geçtiğinizden emin olun.

#### Menü çubuğu simgesini gizle

Bu seçenek *Gelişmiş ayarlar* öğesinde yer almasına rağmen tereddüt etmeden etkinleştirilebilir. AdGuard VPN simgesini menü çubuğundan gizleyebilirsiniz, bu uygulamamızın arka planda çalışmasına engel olmaz.

#### QUIC'i kullan

QUIC iletişim protokolü, HTTP'nin en son, en gelişmiş sürümüdür. Örneğin metroda veya asansörde mobil veri kullanırken, ideal olmayan koşullarda daha iyi bir bağlantı kalitesi elde etmek için anahtarı değiştirin.
