---
title: 'Kısıtlı Mod profiliyle ilgili sorunlar'
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
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note

    If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

    :::

1. ADB'yi [kurun ve yapılandırın](https://www.xda-developers.com/install-adb-windows-macos-linux/);

    :::note

    On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

    :::

1. Cihazınızı bir **USB kablosu** kullanarak **ADB** kurduğunuz bilgisayara veya dizüstü bilgisayara bağlayın;

1. PC'nizde **komut satırını** açın:

    - **Windows** kullanıyorsanız **Cmd.exe**;
    - **macOS** kullanıyorsanız **Terminal**;

1. `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` komutunu yazın ve **Enter** tuşuna basın.

### 2. Seçenek: *Kısıtlanmış kullanıcı hesabını* kaldırma

Bir Android cihazdan kullanıcı hesaplarını nasıl yöneteceğinizi [burada bulabilirsiniz](https://support.google.com/a/answer/6223444?hl=en).

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. Örneğin, **Samsung** veya **LG** cihazlarında Dual Messenger veya Dual App özelliklerini kullandığınızda. Bu durumlarda sorunun nasıl çözüleceğini aşağıda okuyun.

:::

### LG ve Samsung cihazları

**LG** veya **Samsung** telefon sahipleri de benzer bir sorunla karşılaşabilir. **Dual App/Dual Messenger** işlevi (otomatik olarak kısıtlı bir profil oluşturur) kullanılmasından kaynaklanabilir. Bu sorunu çözmek için bu özelliği devre dışı bırakmanız gerekir.

#### Samsung

- **Ayarları** açın;
- **Gelişmiş** öğesine basın;
- Aşağı kaydırın ve ardından **Dual Messenger** öğesine basın;
- Disable the **Dual Messenger** for all apps;
- Cihazı 5 dakika kilitleyin;
- Ekranın kilidini açın ve VPN profilini yeniden oluşturmayı deneyin.

#### LG

- **Ayarları** açın;
- **Genel** sekmesini seçin;
- Aşağı kaydırın ve ardından **Dual App** öğesine basın;
- Remove all apps from the list;
- Cihazınızı yeniden başlatın.
