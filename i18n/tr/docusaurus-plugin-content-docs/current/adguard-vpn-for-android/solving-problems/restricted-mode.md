---
title: 'Kısıtlı Mod profiliyle ilgili sorunlar'
sidebar_position: 4
---

Android 7+ işletim sistemini çalıştıran telefon ve tablet sahipleri, **Kısıtlı Mod ile bir profilin kullanılmasından** kaynaklanan sorunla karşılaşabilir. Böyle bir profiliniz varsa, **AdGuard VPN** de VPN kullanan diğer uygulamalar gibi, VPN trafiğinin seçici kullanımı konusunda kısıtlamalar alır. Ayrıca, bu sorunun nedenlerinden biri, cihazınızda **Dual App / Dual Messenger profil** kullanmak olabilir. Aşağıda bu sorun oluştuğunda uygulayabileceğiniz öneriler açıklanmıştır.

## Çözümler

Sorunu çözmek için iki yolunuz var:

### 1. Seçenek: ADB kullanarak AdGuard VPN'ye izinler verme

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklamayı** etkinleştirin:
- Telefonunuzda **Ayarlar** uygulamasını açın;
- **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
- **Yapı numarası** satırına 7 kez tıklayın. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

> Herhangi bir zorluk veya ek sorunuz varsa, tam talimatlar [burada](https://developer.android.com/studio/debug/dev-options) bulunabilir.

2. [Yükleyin ve yapılandırın](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> Windows platformunda, **Samsung** sahiplerinin [bu yardımcı programı](https://developer.samsung.com/mobile/android-usb-driver.html) yüklemeleri gerekebilir.

3. Cihazınızı **USB kablosu** kullanarak **ADB**kurduğunuz bilgisayara veya dizüstü bilgisayara bağlayın;
4. PC'nizde **komut satırını** açın:
- **Windows** kullanıyorsanız **Cmd.exe**;
- **macOS** kullanıyorsanız **Terminal**;
5. `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` komutunu girin ve **Enter** tuşuna basın.

### 2. Seçenek: *Kısıtlanmış kullanıcı hesabını* kaldırma

[Burada](https://support.google.com/a/answer/6223444?hl=en) Android cihazdan kullanıcı hesaplarının nasıl yönetileceğini bulabilirsiniz.

> Lütfen bazı durumlarda kısıtlanmış kullanıcı hesaplarının dolaylı olarak oluşturulduğunu ve kaldırılamayacağını unutmayın. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Bu durumlarda sorunun nasıl çözüleceğini aşağıda okuyun.

### LG ve Samsung cihazları

**LG** veya **Samsung** telefon sahipleri de benzer bir sorunla karşılaşabilir. It can be caused by using **Dual App/Dual Messenger** function (which automatically creates a restricted profile). Bu sorunu çözmek için bu özelliği devre dışı bırakmanız gerekir.

#### Samsung

- **Ayarları** açın;
- **Gelişmiş** öğesine basın;
- Scroll down and then press **Dual Messenger**;
- Disable the **Dual Messenger** for all applications;
- Cihazı 5 dakika kilitleyin;
- Ekranın kilidini açın ve VPN profilini yeniden oluşturmayı deneyin.

#### LG

- **Ayarları** açın;
- **Genel** sekmesini seçin;
- Scroll down and then press **Dual App**;
- Tüm uygulamaları listeden kaldırın;
- Cihazınızı yeniden başlatın.