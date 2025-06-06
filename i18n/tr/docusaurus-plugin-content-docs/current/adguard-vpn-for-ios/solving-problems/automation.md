---
title: iPhone ve iPad uygulamaları için AdGuard VPN otomasyonu nasıl ayarlanır
sidebar_position: 2
sidebar_label: AdGuard VPN otomasyonu nasıl ayarlanır
---

iOS için AdGuard VPN'de herhangi bir uygulama istisnası yoktur. Yine de, iPhone ve iPad'lerdeki uygulamalar için AdGuard VPN'i otomatikleştirmenin bir yolu var.

## VPN'e otomatik bağlantıyı yapılandırma

Bir veya daha fazla uygulama için bir VPN'e ihtiyacınız varsa, AdGuard VPN'i, onları açıp kapattığınızda otomatik olarak açılacak ve kapanacak şekilde ayarlayın. İşte bunun için bir otomasyonun nasıl oluşturulacağı aşağıda açıklanmıştır.

1. App Store'dan [*Kestirmeler* uygulamasını](https://apps.apple.com/us/app/shortcuts/id915249334) indirin ve ekranın alt kısmındaki saat simgesine dokunarak *Otomasyon* bölümüne gidin.

1. *Yeni Otomasyon* veya + (başka bir otomasyonunuz varsa) öğesine dokunun. In the *Personal Automation* list that opens, scroll to find *App* and tap it.

    ![New Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/newautomation.png)

1. Select the *Is Opened* checkbox, select *Run Immediately* (if you don’t want to confirm the VPN launch manually), and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Opened *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isopened.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for, tap *Done* and *Next*.

    ![App *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/app.png)

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection On*, and tap *Done*.

    ![Blank Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/blankautomation.png) ![Set VPN connection *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/setvpnconnection.png) ![Turn VPN connection On *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionon.png)

AdGuard VPN artık otomasyonunu ayarladığınız uygulamayı açtığınızda otomatik olarak etkinleştirilecektir. İsterseniz, uygulamayı kapattığınızda AdGuard VPN'in otomatik olarak kapanmasını sağlayacak başka bir komut oluşturabilirsiniz.

## VPN'den otomatik bağlantı kesmeyi yapılandırma

1. Aynı *Kısayollar* uygulamasında yeni bir otomasyon oluşturmaya başlayın: + öğesine dokunun, kaydırın ve listede *Uygulama* öğesine dokunun.

    ![Plus *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/plus.png)

1. Select the *Is Closed* checkbox, select *Run Immediately*, and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Closed *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isclosed.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for (in our example, it’s Instagram), tap *Done* and *Next*.

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection Off*, and tap *Done*.

    ![Turn VPN connection Off *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionoff.png)

Tamamlandı! AdGuard VPN artık otomasyonunu ayarladığınız uygulamayı her kapattığınızda cihazınızda devre dışı bırakılır. Başka bir uygulama için aynı adımları tekrarlayabilirsiniz.

![Done *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/done.png)
