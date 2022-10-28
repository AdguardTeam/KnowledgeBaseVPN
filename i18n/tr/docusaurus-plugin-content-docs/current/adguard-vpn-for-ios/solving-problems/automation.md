---
title: How to set up AdGuard VPN automation for iPhone and iPad apps
sidebar_position: 1
sidebar_label: AdGuard VPN otomasyonu nasıl ayarlanır
---

AdGuard VPN'de bir *İstisnalar* bölümü ve iki çalışma modu vardır – *Genel* ve *Seçici*. In *General mode* AdGuard VPN works everywhere except sites added to exclusions. Conversely, in *Selective mode*, VPN doesn't work anywhere except sites listed in the exclusions list. Her mod için ayrı bir liste oluşturmanız gerektiğini unutmayın.

As you may notice, only websites can be added to the *Exclusions* section. AdGuard VPN'i uygulamalara göre ayarlamak için başka bir özellik kullanmanız gerekir. Masaüstü uygulamalarımız *Bölünmüş tünelleme* modülüne ve Android uygulamasında *Uygulama ayarlarına* sahiptir — bu ayarlar AdGuard VPN'nin hangi uygulamalarda çalıştırılacağına karar vermenizi sağlar.

Ancak, çoğu zaman olduğu gibi, bir takım teknik ince ayrıntılar nedeniyle, iOS için bu kadar kullanışlı bir işlevi uygulamak en azından şimdilik imkansızdır. Bu nedenle, iPhone ve iPad'lerdeki uygulamalar için AdGuard VPN'i otomatikleştirmenin alternatif bir yolunu sunuyoruz.

## Setting up AdGuard VPN automatic activation

Bir veya daha fazla uygulama için bir VPN'e ihtiyacınız varsa, AdGuard VPN'i, onları açıp kapattığınızda otomatik olarak açılacak ve kapanacak şekilde ayarlayın. İstisnalar sekmesine gidin, Genel modu seçin ve talimatları takip edin. Burada Twitter için otomasyonun nasıl oluşturulacağını açıklıyoruz, ancak başka herhangi bir uygulamayı seçebilirsiniz.

![Talimat. Part 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
* Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
* Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
* Bir sonraki pencerede, *Açıldı* öğesinin seçili olduğundan emin olun ve ardından uygulamayı seçmek için *Seç* öğesine dokunun.

![Talimat. Part 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
* Uygulamanın adını girmeye başlayın, bizim durumumuzda bu Twitter'dır ve onu seçin. Ardından ekranın sağ üst köşesindeki *Bitti* öğesine dokunun. Ardından ekranın sağ üst köşesindeki *Sonraki* öğesine dokunun. Ve açılan pencerede *İşlem Ekle* öğesine dokunun.

![Talimat. Part 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

* “AdGuard VPN” yazmaya başlayın ve AdGuard VPN uygulamasını seçin. Yeni pencerede *Bir VPN bağlantısı kur* öğesine dokunun.

![Talimat. Part 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
* Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
* Bir sonraki pencerede, *Çalıştırmadan önce sor* seçeneğinin yanındaki kaydırıcıyı etkin olmayan konuma getirin. Seçiminizi onaylayın, *Bitti* öğesine dokunun.

Artık yeni bir senaryonuz var: Twitter uygulamasını başlattığınızda AdGuard VPN otomatik olarak etkinleştirilecektir. Şimdi, uygulamayı kapattığınızda AdGuard VPN'nin otomatik olarak kapanmasını sağlayacak başka bir komut oluşturmanız gerekiyor.

## AdGuard VPN otomatik kapanmasını yapılandırma

![Talimat. Part 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
* Aynı *Kestirmeler* uygulamasında yeni bir otomasyon oluşturmaya başlayın: ekranın sağ üst köşesindeki *+* öğesine ve ardından *Kişisel Otomasyon Yarat* düğmesine tıklayın. Açılan pencerede *Uygulama* öğesini seçin.
* *Kapalı* seçeneğinin seçili olduğundan emin olun ve yandaki seçeneğin altındaki kutunun işaretini kaldırın. Ardından *Seç* öğesine dokunun.

![Talimat. Part 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
* *Twitter* adresine girmeye başlayın ve uygulamayı seçin. Ardından ekranın sağ üst köşesindeki *Bitti* öğesine dokunun. *İşlem Ekle* öğesine dokunun ve AdGuard VPN'i seçin.

![Talimat. Part 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

* Yeni pencerede *VPN bağlantısı kur* öğesine dokunun.
* Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
* *Çalıştırmadan önce sor* seçeneğini devre dışı bırakın ve seçiminizi onaylayın. Ardından işlemi tamamlamak için ekranın sağ üst köşesindeki *Bitti* öğesine dokunun.

Tamamlandı! AdGuard VPN artık Twitter uygulamasını her açtığınızda cihazınızda etkinleştirilecek ve kapattığınızda devre dışı bırakılacaktır. Başka bir uygulama için aynı adımları tekrarlayabilirsiniz. 