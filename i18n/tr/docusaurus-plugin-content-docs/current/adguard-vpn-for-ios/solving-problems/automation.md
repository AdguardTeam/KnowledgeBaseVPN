---
title: iPhone ve iPad uygulamaları için AdGuard VPN otomasyonu nasıl ayarlanır
sidebar_position: 2
sidebar_label: AdGuard VPN otomasyonu nasıl ayarlanır
---

iOS için AdGuard VPN'de herhangi bir uygulama istisnası yoktur. Yine de, iPhone ve iPad'lerdeki uygulamalar için AdGuard VPN'i otomatikleştirmenin bir yolu var.

## VPN'e otomatik bağlantıyı yapılandırma

Bir veya daha fazla uygulama için bir VPN'e ihtiyacınız varsa, AdGuard VPN'i, onları açıp kapattığınızda otomatik olarak açılacak ve kapanacak şekilde ayarlayın. İstisnalar sekmesine gidin, Genel modu seçin ve talimatları izleyin. Burada Twitter için otomasyonun nasıl oluşturulacağını açıklıyoruz, ancak başka herhangi bir uygulamayı seçebilirsiniz.

![Talimat. Bölüm 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. App Store'dan [*Kestirmeler* uygulamasını](https://apps.apple.com/us/app/shortcuts/id915249334) indirin ve ekranın alt kısmındaki saat simgesine dokunarak *Otomasyon* bölümüne gidin.
1. *Kişisel Otomasyon Yarat* düğmesine dokunun, ardından açılan listede *Uygulama* öğesini bulun ve ona dokunun.
1. Bir sonraki pencerede, *Açıldı* öğesinin seçili olduğundan emin olun ve ardından uygulamayı seçmek için *Seç* öğesine dokunun.

    ![Talimat. Bölüm 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Uygulamanın adını girmeye başlayın (bizim durumumuzda Twitter) ve onu seçin. *Bitti* öğesine, ardından ekranın sağ üst köşesindeki *Sonraki* öğesine dokunun. Açılan pencerede *İşlem Ekle* öğesine dokunun.

![Talimat. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. “AdGuard VPN” yazmaya başlayın ve AdGuard VPN uygulamasını seçin. Yeni pencerede *VPN bağlantısı kur* öğesine dokunun.

    ![Talimat. Bölüm 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
1. Bir sonraki pencerede, *Çalıştırmadan önce sor* seçeneğinin yanındaki kaydırıcıyı etkin olmayan konuma getirin. Seçiminizi onaylayın, ardından *Bitti* öğesine dokunun.

Artık yeni bir senaryonuz var: Twitter uygulamasını başlattığınızda AdGuard VPN otomatik olarak etkinleştirilecektir. Şimdi, uygulamayı kapattığınızda AdGuard VPN'nin otomatik olarak kapanmasını sağlayacak başka bir komut oluşturmanız gerekiyor.

## VPN'den otomatik bağlantı kesmeyi yapılandırma

![Talimat. Bölüm 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Aynı *Kısayollar* uygulamasında yeni bir otomasyon oluşturmaya başlayın: *Otomasyon* → *Kişisel Otomasyon Oluştur* → *Uygulama* öğesine dokunun.
1. *Kapalı* seçeneğinin seçili olduğundan emin olun ve yandaki seçeneğin altındaki kutunun işaretini kaldırın. Ardından *Seç* öğesine dokunun.

    ![Talimat. Bölüm 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. *Twitter* yazmaya başlayın ve uygulamayı seçin. Ardından ekranın sağ üst köşesindeki *Bitti* öğesine dokunun. *İşlem Ekle* öğesine dokunun ve AdGuard VPN'i seçin.

    ![Talimat. Bölüm 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. Yeni pencerede *VPN bağlantısı kur* öğesine dokunun.
1. Ardından, *Kapalı* kelimesine dönüşmesi için *Açık* kelimesine dokunun, ardından ekranın sağ üst köşesindeki *Sonraki* öğesine dokunun.
1. *Çalıştırmadan önce sor* seçeneğini devre dışı bırakın ve seçiminizi onaylayın. Ardından işlemi tamamlamak için ekranın sağ üst köşesindeki *Bitti* öğesine dokunun.

Tamamlandı! AdGuard VPN artık Twitter uygulamasını her açtığınızda cihazınızda etkinleştirilecek ve kapattığınızda devre dışı bırakılacaktır. Başka bir uygulama için aynı adımları tekrarlayabilirsiniz.
