---
title: Özelliklere genel bakış
sidebar_position: 1
---

Mac için AdGuard VPN, bir masaüstü VPN hizmetidir. AdGuard VPN, AdGuard Reklam Engelleyici ile tamamen uyumludur, birlikte kullanılabilirler ve sorunsuz çalışırlar. Hangi özellikleri sunabileceğine bakalım.

**AdGuard hesabınıza giriş yapmadıkça Mac için AdGuard VPN'i kullanamayacağınızı** unutmayın. AdGuard hesabınızla veya harici bir hesapla, yani Apple, Google veya Facebook üzerinden giriş yapabilirsiniz. Harici hesabınızın AdGuard hesabınızla aynı e-posta adresine bağlı olduğundan emin olun. AdGuard hesabınızda uygun bir abonelik varsa, masaüstü uygulamasında otomatik olarak etkinleştirilecektir. Henüz bir AdGuard hesabınız yok mu? [Buradan](https://auth.adguard.com/registration.html) oluşturun.

> Mac için AdGuard VPN, şu anda macOS Sierra'dan (10.12) başlayan macOS sürümlerinde desteklenmektedir.

## Ana ekran

![Ana ekran](https://cdn.adguard.com/public/Adguard/Blog/mac-vpn-main.png)

İlk sekme *Ana* ekranıdır. Burada AdGuard VPN'nin mevcut durumunu ve [çalışma modunu](#exclusions), seçilen konumu (etkinleştirilmişse) ve pingini görebilirsiniz. Ping, bir VPN sunucusunun yanıt süresidir. Sonuç olarak, bu sayı ne kadar düşük olursa, bağlantı o kadar hızlı olur. VPN devre dışıysa, en son bağlandığınız konum aşağıda görüntülenir. En düşük pinge sahip en hızlı konumlar ekranın sağ üst köşesinde görüntülenir. Aşağıda konumların tam listesini görebilirsiniz. Arama fonksiyonu sayesinde, ihtiyaç duyulan konum kolayca bulunabilir.

> Ücretsiz kullanıcılar yalnızca belirli konumlara bağlanabilir, diğerleri ise engellenir. Ayrıca ücretsiz sürümde aylık 3 GB veri sınırı bulunuyor.

## İstisnalar

![İstisnalar](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/exclusions.png)

Sonraki *istisnalar* ekranına gider. AdGuard VPN, onu benzersiz kılan çeşitli özelliklere sahiptir ve bunlardan biri kesinlikle iki çalışma modu arasında geçiş yapmaktır. Normal modda AdGuard VPN, istisnalar listesi dışındaki tüm sitelerde çalışır. Seçici modda tam tersine, AdGuard VPN yalnızca istisnalar listesindeki sitelerde çalışır. VPN'nin nerede çalışmasını istediğinize kendiniz karar verebilirsiniz.

![İstisnalar ekranı](https://cdn.adguard.com/public/Adguard/Blog/services.png)

Ayrıca, İstisnalara site eklemekle kalmaz, aynı zamanda popüler hizmetler listeleri arasından seçim yapabilirsiniz. Listeler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları. Bu hizmetlerden herhangi biri, tek bir tıklamayla İstisnalara eklenebilir! Seçici modu kullanıyorsanız özellikle kullanışlıdır.

İstisna listeleri kolayca yapılandırılabilir. Bir alan adı ve alt alan adlarından bazılarını eklediyseniz, bunlar kök alan içinde gruplandırılır. Bir kök alan adı (`example.com`) eklerken, maskesi de eklenir (`*.example.com`).

Bir hizmet eklediyseniz, bir şeyi değiştirdiyseniz veya kaldırdıysanız ve şimdi başlangıç ayarlarını kurtarmak istiyorsanız, alan adının yanındaki *Varsayılana sıfırla* öğesine basmanız yeterli — bu eylem, eksik alan adlarını geri yükler ve tüm onay kutularını işaretler.

Ayrıca, hazır istisna listeleri, AdGuard VPN'in kurulu olduğu diğer cihazlara aktarılabilir. İstisnaları dışa aktarmak için aşağıdaki dört adımlı talimatı takip edin:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Uygun bölümü bulun ve *Dışa aktar* düğmesine tıklayın. `exclusions.zip` arşivi indirilecektir.
2. Arşivde, her biri Normal ve Seçici listeler için iki `.txt` dosyası vardır. Bunlara daha fazla istisna ekleyin, mevcut olanları silin, dosyaları yeniden adlandırın (ancak daha sonra bu konuda daha fazlası) veya arşivi olduğu gibi bırakın.
3. Farklı cihazlar arasında aktarım yaparken, `.zip` dosyasını içe aktarmak için cihaza göndermeyi unutmayın. Örneğin, istisna listeleri Mac'inizden iPhone'unuza aktarırsanız, `.zip` dosyasını önceden telefonunuza gönderdiğinizden emin olun.
4. Open AdGuard VPN on the device/in the browser where you want to import the archive with the ready lists of exclusions. Uygun bölümü bulun, *İçe aktar* düğmesine tıklayın ve arşivi seçin. Tamamlandı!

> Diğer cihazlardan arşiv dosyaları benzer şekilde Mac için AdGuard VPN'inize aktarılabilir.

## Destek

![Destek ekranı](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/support.png)

Üçüncü sekme *Destek* ekranıdır. Find answers to any questions in the [FAQ](https://adguard-vpn.com/en/welcome.html#faq) or in the [Knowledge base](/intro.md) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/en/discuss.html). Ve [ürünümüz hakkında geri bildirim bırakmaktan](https://surveys.adguard.com/en/vpn_mac/form.html) çekinmeyin, bunu takdir ediyoruz.

## Ayarlar

![Ayarlar](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/settings.png)

Son olarak Ayarlar sekmesine geliyoruz. *Program hakkında* bölümünde, AdGuard VPN'nin güncel sürümünü görebilir, güncellemeleri denetleyebilir, resmi sitemizi ziyaret edebilir ve AdGuard'ın SKLS ve Gizlilik politikası hakkında bilgi sahibi olabilirsiniz. *Lisans hakkında* bölümünde ücretsizden sınırsıza yükseltebilir, aboneliğinizi yönetebilir veya çıkış yapabilirsiniz. Ve en önemlisi, buradan *Genel ayarlara* erişebilirsiniz.

### Genel ayarlar

![Genel ayarlar](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/general-settings.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Autoupdate*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. Ayrıca, açık, koyu ve sistem varsayılan temaları arasında seçim yapabilirsiniz — ikincisi, Mac'inizdeki temayla eşleşir.

Göz ardı edilmemesi gereken bir başka seçenek de, AdGuard VPN'nin uygulamamızı geliştirmemize yardımcı olması için anonimleştirilmiş çökme raporları, teknik ve etkileşim verileri toplamasına ve göndermesine izin verebilmenizdir. Son olarak, sağdaki düğme sayesinde günlükleri Mac'inize aktarabilirsiniz. Destek için mesajınıza günlük eklemek istiyorsanız bu yararlı olabilir.

### DNS sunucuları

![DNS sunucuları](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/dns.png)

Burada, varsayılan olarak İSS'niz tarafından sağlanan bir DNS sunucusuna güvenmemek için özel bir DNS sunucusu (veya sunucuları) ekleyebilirsiniz. Yalnızca DNS trafiğinizi şifrelemekle kalmayıp aynı zamanda kötü amaçlı sitelere yönelik istekleri tespit eden ve bunları bir "kara deliğe" yönlendiren AdGuard DNS'i eklemenizi öneririz.

### Gelişmiş ayarlar

![Gelişmiş ayarlar](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/advanced-settings.png)

Gelişmiş ayarların değiştirilmesi tavsiye edilmez. Teknik desteğimiz tarafından istenmedikçe veya ne yaptığınızdan emin değilseniz bunları değiştirmeyin.

#### Günlük kayıt düzeyi
Yalnızca iki günlük kayıt düzeyi vardır ancak ilki, varsayılan olanı kullanmanızı şiddetle tavsiye ederiz. İkinci seçenek (genişletilmiş günlük kayıt), yalnızca teknik desteğimize danıştıktan sonra garip bir program davranışını kaydetmek için ayarlanmalıdır. İkinci günlük kayıt düzeyini etkinleştirmiş olsanız bile, günlükleri kaydettikten sonra varsayılan düzeye geri döndüğünüzden emin olun.

#### Menü çubuğu simgesini gizle
Bu seçenek *Gelişmiş ayarlarda* yer almasına rağmen tereddüt etmeden etkinleştirilebilir. AdGuard VPN simgesini menü çubuğundan gizleyebilirsiniz, bu uygulamamızın arka planda çalışmasına engel olmaz.

#### QUIC kullan (deneysel)

QUIC iletişim protokolü, HTTP'nin en son, en gelişmiş sürümüdür. Örneğin metroda veya asansörde mobil veri kullanırken, ideal olmayan koşullarda daha iyi bir bağlantı kalitesi elde etmek için anahtarı değiştirin.
