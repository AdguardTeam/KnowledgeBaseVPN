---
title: Kısıtlı Mod profiliyle ilgili sorunlar
sidebar_position: 4
---

Android 7 üstündeki işletim sistemini çalıştıran telefon ve tablet sahipleri, **Kısıtlı Mod'da bir profil** kullanmanın neden olduğu sorunla karşılaşabilir. Böyle bir profiliniz varsa, **AdGuard VPN**, VPN kullanan diğer uygulamalar gibi, VPN trafiğinin seçici olarak kullanımı konusunda kısıtlamalar alır. Ayrıca, bu sorunun nedenlerinden biri cihazınızda **Dual App/Dual Messenger** profilini kullanmak olabilir. Aşağıda bu sorun oluştuğunda uygulayabileceğiniz tavsiyeler açıklanmıştır.

## Çözümler

Sorunu çözmek için iki yolunuz var:

### 1. Seçenek: ADB kullanarak AdGuard VPN'e izinler verme

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklama** öğesini etkinleştirin:

    - Telefonunuzda **Ayarlar** uygulamasını açın;
    - **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
    - **Yapı numarası** satırına 7 kez tıklayın. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
    - **Sistem Ayarları** → **Geliştirici Seçenekleri** öğesini açın → Aşağı kaydırın ve **USB hata ayıklama** öğesini etkinleştirin → Uyarıyı dikkatlice okuduktan sonra **USB hata ayıklamasına izin ver** penceresinde hata ayıklamanın etkinleştirildiğini onaylayın.

    :::note

    Herhangi bir zorluk veya ek sorunuz varsa, tam talimatlar [burada](https://developer.android.com/studio/debug/dev-options) bulunabilir.

    :::

1. ADB'yi [kurun ve yapılandırın](https://www.xda-developers.com/install-adb-windows-macos-linux/);

    :::note

    Windows platformunda, **Samsung** sahiplerinin [bu yardımcı programı](https://developer.samsung.com/mobile/android-usb-driver.html) yüklemeleri gerekebilir.

    :::

1. Cihazınızı bir **USB kablosu** kullanarak **ADB** kurduğunuz bilgisayara veya dizüstü bilgisayara bağlayın;

1. PC'nizde **komut satırını** açın:

    - **Windows** kullanıyorsanız **Cmd.exe**;
    - **macOS** kullanıyorsanız **Terminal**;

1. `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` komutunu yazın ve **Enter** tuşuna basın.

### 2. Seçenek: *Kısıtlanmış kullanıcı hesabını* kaldırma

Bir Android cihazdan kullanıcı hesaplarını nasıl yöneteceğinizi [burada bulabilirsiniz](https://support.google.com/a/answer/6223444?hl=en).

:::note

Bazı durumlarda kısıtlanmış kullanıcı hesapları dolaylı olarak oluşturulur ve kaldırılamaz. Örneğin, **Samsung** veya **LG** cihazlarında Dual Messenger veya Dual App özelliklerini kullandığınızda. Bu durumlarda sorunun nasıl çözüleceğini aşağıda okuyun.

:::

### LG ve Samsung cihazları

**LG** veya **Samsung** telefon sahipleri de benzer bir sorunla karşılaşabilir. **Dual App/Dual Messenger** işlevi (otomatik olarak kısıtlı bir profil oluşturur) kullanılmasından kaynaklanabilir. Bu sorunu çözmek için bu özelliği devre dışı bırakmanız gerekir.

#### Samsung

- **Ayarları** açın;
- **Gelişmiş** öğesine basın;
- Aşağı kaydırın ve ardından **Dual Messenger** öğesine basın;
- Tüm uygulamalar için **Dual Messenger** öğesini devre dışı bırakın;
- Cihazı 5 dakika kilitleyin;
- Ekranın kilidini açın ve VPN profilini yeniden oluşturmayı deneyin.

#### LG

- **Ayarları** açın;
- **Genel** sekmesini seçin;
- Aşağı kaydırın ve ardından **Dual App** öğesine basın;
- Tüm uygulamaları listeden kaldırın;
- Cihazınızı yeniden başlatın.
