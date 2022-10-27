---
title: 'AdGuard VPN neden daha iyi bir seçenek'
sidebar_position: 2
---

[Uzun vadeli bir VPN aboneliğine](subscription.md) hazırlanırken, kullanıcılar en sık hızını, güvenliğini ve fiyatını değerlendirir. Bunlar çok önemli noktalar ama çok daha fazlası var! AdGuard VPN, onu 'daha iyi seçenek' yapan bir onlarca önemli varlığa sahiptir.

*Başlangıç olarak, AdGuard VPN'in başka hiçbir VPN'de bulamayacağınız eşsiz özelliklerini gözden geçirelim.*

## 1. Tescilli protokol
En başından beri, hazır bir çözüm seçmek yerine şirket içi bir VPN protokolü geliştirmeye ve dağıtmaya karar verdik — bu çok kolay olurdu, ayrıca mevcut protokollerden memnun değildik. Sonuç, [AdGuard VPN protokolü](adguard-vpn-protocol.mdx) haline geldi.

Bir VPN hizmeti seçerken, insanlar genellikle hızlı ve güvenli arasında bir denge ile karşı karşıya kalırlar. AdGuard VPN protokolü, hız ve güvenliğin mükemmel bir karışımıdır, bu nedenle yavaş internet bağlantısına katlanmak veya gizlilikten ödün vermek zorunda kalmazsınız. Diğer şeylerin yanı sıra, kendisini normal trafik olarak gizler, onu tespit etmek ve engellemek çok daha zordur.

## 2. İstisnalar
*İstisna listeleri*, VPN'nin etkinleştirilmesi ve devre dışı bırakılması gereken siteleri seçmenize olanak tanır. AdGuard VPN'de iki çalışma modu vardır: *Genel* ve *Seçici*. *Genel modda* VPN, istisnalara eklenen siteler dışında her yerde çalışır. Ve tam tersi olan *Seçici modda*, VPN istisnalara eklenen sitelerden başka hiçbir yerde çalışmaz. Ayrıca istisna listelerini kolayca içe ve dışa aktarabilirsiniz. İlgilendiğiniz ürün için *Özelliklere genel bakış* bölümünde bu özellik hakkında bilgi edinin.

![Seçici mod için bir istisna listeleri örneği](https://cdn.adguard.com/public/Adguard/Blog/vpn_export_exclusions.png)

İstisnalara elle siteler ekleyebilir veya popüler hizmetler listelerinden seçebilirsiniz. Listeler sekiz kategoriye ayrılmıştır: Sosyal ağlar, Mesajlaşma, Video ve Müzik yayın akışı hizmetleri, Oyunlar, Alışveriş, Arama motorları ve İş iletişim araçları.

> Bu özellik iOS hariç tüm platformlarda kullanılabilir.

## 3. DNS sunucusu seçme
Artık varsayılan olarak İSS'niz tarafından sağlanan DNS sunucusuna güvenmek yok! Birincisi, güvenli değil: İSS'nizin büyük olasılıkla tarama geçmişinize erişimi vardır. İkincisi, insanlar genellikle DNS'i hafife alır, ancak reklamları ve izleyicileri kaldırabilir, cihazınızı kötü amaçlı yazılımlardan koruyabilir veya örneğin güvenli aramayı etkinleştirebilir ve yetişkinlere yönelik içeriği engelleyebilir.

AdGuard, Cisco, Cloudflare, Google veya Quad9 gibi [bilinen DNS sağlayıcılarından](https://kb.adguard.com/en/general/dns-providers) DNS sunucuları seçebilir veya hatta kendi DNS sunucunuzu kullanacak şekilde yapılandırabilirsiniz.

## 4. En hızlı konumlar

AdGuard VPN'i diğerlerinden farklı kılan bir başka özellik de, pingine göre bir konum seçebilmenizdir. Kısaca ping, cihazınızdan gönderilen veri paketinin sunucuya ulaşması ve geri dönmesi için geçen süredir. Şüphe duyduğunuzda, basit bir kural kullanın: ping ne kadar düşükse, sunucu ne kadar yakınsa, hızı da o kadar yüksek olur. Çeşitlilik arasından seçim yapabilmeniz için konum sayısını sürekli artırıyoruz.

> Tüm VPN sunucu konumlarına erişmek için bir AdGuard VPN aboneliği satın almanız gerektiğini unutmayın.

## 5. AdGuard Reklam Engelleyici ile uyumluluk

Masaüstü uygulamaları ve tarayıcı uzantıları ile bunu söylemeye gerek yok — uygulamalar arasında nadiren herhangi bir çakışma var, antivirüsler ve diğer benzer odaklı yazılımlar hariç.

Mobil cihazlarda ise durum o kadar basit değil. Durumların büyük çoğunluğunda, iki VPN tabanlı uygulama birlikte çalışmaz, çünkü hem Android hem de iOS'ta bunun olmasını engelleyen işletim sistemi kaynaklı bazı kısıtlamalar vardır.

Ancak AdGuard VPN ve AdGuard Reklam Engelleyici ile arkadaş olmak için bir çözüm bulmayı başardık. Her iki AdGuard uygulamasını aynı anda bir cihaza yüklediğinizde, sizden herhangi bir giriş gerektirmeden otomatik olarak uyumlu hâle gelirler. Bu, normalde aralarından seçim yapmanız gereken iki özellik grubundan yararlanmak için eşsiz bir fırsattır.

## 6. QUIC desteği
[QUIC](https://adguard.com/en/blog/dns-over-quic.html), birçok avantajı olan son teknoloji bir protokoldür. Başlıca avantajı, ideal olmayan koşullarda bağlantı kalitesini iyileştirebilmesidir –örneğin mobil cihazlarda veya halka açık Wi-Fi'ye bağlanırken. Yeni protokol, bağlantı iyi ve kararlı olduğunda hızı etkilemese de, yavaş internete sahip kullanıcılar için durumu kesinlikle daha iyi hâle getirir.

*Şimdi herhangi bir düzgün VPN'nin onsuz yapamayacağı öğe setine geçelim.*

## 7. Kill Switch
Örneğin, sık sık bir mobil ağ kullanıyorsanız veya alışveriş merkezlerinde, kafelerde, metroda veya havalimanı herkese Wi-Fi ağlarına bağlanıyorsanız, Kill Switch çok önemlidir. For the simple reason — if VPN will suddenly drop and the connection will become insecure, chances are that your sensitive information will be exposed to fraudsters or cyber criminals.

Herhangi bir nedenle VPN bağlantınız kesilirse, Kill Switch otomatik olarak internet bağlantısını keserek saldırganların bilgilerinizi ele geçirmesini engeller. Kill Switch ile emin ellerde olduğunuzdan emin olun. Gizlilik konusunda endişeleriniz varsa veya en azından kişisel verilerinize değer veriyorsanız, bu kurşun geçirmez yöntemi gözden kaçırmayın.

## 8. Bölünmüş tünelleme
Bu özellik, yukarıda bahsedilen istisna listelerine benzer. Tek farkı, burada siteler yerine uygulamaları hariç tutabilmenizdir.

## 9. Otomatik Koruma
Bu özellik, özellikle güvenli olmayan ağlar için geliştirilmiştir. Kullanıcıların rahatlığı için, herkese açık yerleri ziyaret ederken VPN'i etkinleştirmeyi unutmayı imkansız hâle getirdik. Bir kafeye girer ve yerel bir Wi-Fi ağına bağlanırsanız, otomatik olarak AdGuard VPN'e bağlanacaksınız.

## 10. Aynı anda bağlı beş cihaza kadar
AdGuard VPN, ücretli kullanıcılarına aynı anda beş bağlantı sunar. *Eşzamanlı* kelimesine özel önem veriyoruz ve işte nedeni. Bazı VPN sağlayıcıları, hizmetlerinde *en fazla beş cihazda* giriş yapılmasına izin verir. AdGuard VPN ile hesabınızda giriş yapabilecek cihaz sayısında bir *sınırlama yoktur*, ancak aynı anda beş VPN bağlantınızı etkinleştirebilirsiniz. Aboneliği olmayanlar, AdGuard VPN'i *iki cihazda* kullanabilir, bu da bize rakiplere karşı oynamak için başka bir koz verir - çoğu VPN hizmetinin ücretsiz sürümlerinde yalnızca *bir cihaz* bulunur.

## 11. Güvenli canlı yayın akışı
Canlı yayın akışı hizmetleri, bariz nedenlerle VPN'leri sevmiyor: istatistiklere göre, kullanıcıların yaklaşık %20'si, coğrafi engellemeyi atlayarak esas olarak programları, TV programları ve filmleri izlemek için bir VPN kuruyor. Bu nedenle canlı yayın akışı platformları, VPN trafiğini izlemek ve engellemek için ellerinden gelen her şeyi yapma eğilimindedir.

Peki ya bölgenize özel içerikler izlerken kendinizi güvende hissetmek istiyorsanız? Veya başka bir ülkeye seyahat ederken bile heyecan verici dizileri izlemeyi bırakmak istemiyor musunuz? Cevap basit — AdGuard VPN, benzersiz protokolü sayesinde hizmetler için görünmez kalabilir.

> Telif hakkı düzenlemelerini atlamak için AdGuard VPN kullanımını onaylamıyoruz.

## 12. Karanlık mod

![Karanlık mod](https://cdn.adguard.com/public/Adguard/Blog/vpn/main_en_black.png)

Bu küçük özellik özel olarak anılmayı hak ediyor. Aslında, pek çok kullanıcı karanlık modu çok istiyor, bu yüzden onu görmezden gelemedik ve tüm AdGuard VPN ürünleri için bir tema anahtarı ekledik. Choose the one you like more — light, dark or system default. Umarız karanlık tarafa katılırsın.
