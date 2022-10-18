---
title: 'Kısıtlı Mod profiliyle ilgili sorunlar'
sidebar_position: 4
---

The owners of phones and tablets running the Android 7+ operating system might face the problem caused by using **a profile with Restricted Mode**. If you have such a profile, **AdGuard VPN**, like other applications that use VPN, gets restrictions on selective handling of VPN traffic. Also, one of the reasons for this problem may be using **Dual App/Dual Messenger profile** on your device. Aşağıda bu sorun oluştuğunda uygulayabileceğiniz öneriler açıklanmıştır.

## Çözümler

Sorunu çözmek için iki yolunuz var:

### Option 1: Grant permissions to AdGuard VPN using ADB

1. **Geliştirici modunu** etkinleştirin ve **USB hata ayıklamayı** etkinleştirin:
- Telefonunuzda **Ayarlar** uygulamasını açın;
- **Sistem** bölümüne gidin (ayarlar menüsündeki son öğe). Bu bölümde **Telefon hakkında** alt öğesini bulun;
- **Yapı numarası** satırına 7 kez tıklayın. Bundan sonra, artık **Bir geliştirici olduğunuza dair** bir bildirim alırsınız (Gerekirse, cihaz için bir kilit açma kodu girin);
- Open **System Settings** > **Developer Options** > Scroll down and enable **USB debugging** > Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

> If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

2. [Install and configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb;
> On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

3. Connect your device using a **USB cable** to the computer or laptop on which you installed **ADB**;
4. PC'nizde **komut satırını** açın:
- **Windows** kullanıyorsanız **Cmd.exe**;
- **macOS** kullanıyorsanız **Terminal**;
5. Enter the command `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` and press **Enter**.

### Option 2: Remove *Restricted user account*

You can [find here](https://support.google.com/a/answer/6223444?hl=en) how to manage user accounts from an Android device.

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