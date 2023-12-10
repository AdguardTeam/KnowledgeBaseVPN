---
title: 'Probleme mit dem Profil mit „Eingeschränktem Modus“'
sidebar_position: 4
---

Die Besitzer von Handys und Tablets mit dem Betriebssystem Android 7+ könnten mit dem Problem konfrontiert werden, das durch die Verwendung von **einem Profil mit eingeschränktem Modus** verursacht wird. Wenn Sie über ein solches Profil verfügen, erhält **AdGuard VPN** wie andere Apps, die VPN verwenden, Einschränkungen für die selektive Behandlung von VPN-Datenverkehr. Einer der Gründe für dieses Problem kann auch die Verwendung von **Dual App/Dual Messenger-Profil** auf Ihrem Gerät sein. Unten finden Sie die Empfehlungen, die Sie anwenden können, wenn dieses Problem auftritt.

## Lösungen

Sie haben zwei Möglichkeiten, das Problem zu lösen:

### Option 1: Erteilen von Berechtigungen für AdGuard VPN mit ADB

1. Aktivieren Sie den **Entwicklermodus** und **USB-Debugging**:

    - Öffnen Sie die App **Einstellungen** auf Ihrem Gerät;
    - Gehen Sie zum Abschnitt **System** (letzter Punkt im Einstellungsmenü). In diesem Abschnitt finden Sie den Unterpunkt **Über das Telefon**;
    - Klicken Sie 7 Mal auf die Zeile **Build-Nummer** . Danach erhalten Sie eine Benachrichtigung: **Sie sind jetzt ein Entwickler** (Geben Sie ggf. einen Entsperrcode für das Gerät ein);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    :::note If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

    :::

1. [Installieren und konfigurieren Sie](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;

    :::note On the Windows platform, **Samsung** owners may need to install [this utility](https://developer.samsung.com/mobile/android-usb-driver.html).

    :::

1. Verbinden Sie Ihr Gerät mit einem **USB-Kabel** mit dem Computer oder Laptop, auf dem Sie **ADB** installiert haben;

1. Öffnen Sie **die Kommandozeile** auf Ihrem PC:

    - **Cmd.exe**, wenn Sie **Windows** verwenden;
    - **Terminal**, wenn Sie **macOS** verwenden;

1. Geben Sie den Befehl `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` ein und drücken Sie **Enter**.

### Option 2: Entfernen vom *eingeschränkten Benutzerkonto*

Hier finden Sie [Informationen zum Verwalten von Benutzerkonten](https://support.google.com/a/answer/6223444?hl=en) von einem Android-Gerät aus.

:::note

In some cases restricted user accounts are created implicitly and cannot be removed. Zum Beispiel, wenn Sie Dual Messenger oder Dual App Funktionen auf **Samsung** oder **LG** Geräten verwenden. Lesen Sie unten, wie Sie das Problem in diesen Fällen beheben können.

:::

### LG- und Samsung-Geräte

Besitzer von **LG** oder **Samsung** Handys können ebenfalls auf ein ähnliches Problem stoßen. Dies kann durch die Verwendung der Funktion **Dual App/Dual Messenger** verursacht werden (die automatisch ein eingeschränktes Profil erstellt). Um dieses Problem zu lösen, müssen Sie diese Funktion deaktivieren.

#### Samsung

- Öffnen Sie die **Einstellungen**;
- Drücken Sie **Erweitert**;
- Scrollen Sie nach unten und drücken Sie dann **Dual Messenger**;
- Disable the **Dual Messenger** for all apps;
- Sperren Sie das Gerät für 5 Minuten;
- Entsperren Sie den Bildschirm und versuchen Sie erneut, das VPN-Profil zu erstellen.

#### LG

- Öffnen Sie die **Einstellungen**;
- Wählen Sie die Registerkarte **Allgemein**;
- Scrollen Sie nach unten und drücken Sie dann **Dual App**;
- Remove all apps from the list;
- Starten Sie Ihr Gerät neu.
