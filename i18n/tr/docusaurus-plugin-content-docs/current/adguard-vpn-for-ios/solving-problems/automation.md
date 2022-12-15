---
title: iPhone ve iPad uygulamaları için AdGuard VPN otomasyonu nasıl ayarlanır
sidebar_position: 1
sidebar_label: AdGuard VPN otomasyonu nasıl ayarlanır
---

AdGuard VPN'de bir *İstisnalar* bölümü ve iki çalışma modu vardır – *Genel* ve *Seçici*. *Genel modda* AdGuard VPN, istisnalara eklenen siteler dışında her yerde çalışır. Tam tersine olan, *Seçici modda* VPN, istisna listesinde listelenen siteler dışında hiçbir yerde çalışmaz. Her mod için ayrı bir liste oluşturmanız gerektiğini unutmayın.

Fark edebileceğiniz gibi, *İstisnalar* bölümüne yalnızca siteler eklenebilir. AdGuard VPN'i uygulamalara göre ayarlamak için başka bir özellik kullanmanız gerekir. Masaüstü uygulamalarımız *Bölünmüş tünelleme* modülüne ve Android uygulamasında *Uygulama ayarlarına* sahiptir — bu ayarlar AdGuard VPN'nin hangi uygulamalarda çalıştırılacağına karar vermenizi sağlar.

Ancak, çoğu zaman olduğu gibi, bir takım teknik ince ayrıntılar nedeniyle, iOS için bu kadar kullanışlı bir işlevi uygulamak en azından şimdilik imkansızdır. Bu nedenle, iPhone ve iPad'lerdeki uygulamalar için AdGuard VPN'i otomatikleştirmenin alternatif bir yolunu sunuyoruz.

## AdGuard VPN otomatik etkinleştirmeyi ayarlama

Bir veya daha fazla uygulama için bir VPN'e ihtiyacınız varsa, AdGuard VPN'i, onları açıp kapattığınızda otomatik olarak açılacak ve kapanacak şekilde ayarlayın. İstisnalar sekmesine gidin, Genel modu seçin ve talimatları takip edin. Burada Twitter için otomasyonun nasıl oluşturulacağını açıklıyoruz, ancak başka herhangi bir uygulamayı seçebilirsiniz.

![Talimat. Bölüm 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Talimat. Bölüm 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Talimat. Bölüm 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Talimat. Bölüm 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

Artık yeni bir senaryonuz var: Twitter uygulamasını başlattığınızda AdGuard VPN otomatik olarak etkinleştirilecektir. Şimdi, uygulamayı kapattığınızda AdGuard VPN'nin otomatik olarak kapanmasını sağlayacak başka bir komut oluşturmanız gerekiyor.

## AdGuard VPN otomatik kapanmasını yapılandırma

![Talimat. Bölüm 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Talimat. Bölüm 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Talimat. Bölüm 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Tamamlandı! AdGuard VPN artık Twitter uygulamasını her açtığınızda cihazınızda etkinleştirilecek ve kapattığınızda devre dışı bırakılacaktır. Başka bir uygulama için aynı adımları tekrarlayabilirsiniz. 