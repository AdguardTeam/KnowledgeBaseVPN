---
title: Installation und Entfernung
sidebar_position: 2
---

## Systemanforderungen

**Betriebssystemversion**: macOS 10.15 (64-Bit) oder höher

**RAM**: mindestens 2 GB

**Free disk space**: 120 MB

## Wie man AdGuard VPN für Mac installiert

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*. ![Laden Sie AdGuard VPN von der offiziellen Website herunter](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Warten Sie, bis das Herunterladen der Datei *AdGuardVPN.dmg* abgeschlossen ist, und öffnen Sie sie im Ordner „Downloads“.
3. Wait until the installation program window opens. Double-click the icon in it. ![Programm-Installationsfenster *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Wenn Sie AdGuard VPN zum ersten Mal starten, zeigt das Betriebssystem eine Warnung auf dem Bildschirm an, dass diese App aus dem Internet heruntergeladen wurde. Click *Open*.
5. Klicken Sie dann auf *Weiter* und *Installieren*.

![Klicken Sie auf Weiter](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Click Install](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Warten Sie, bis das Installationsprogramm die erforderlichen Dateien heruntergeladen hat.

AdGuard VPN für Mac ist installiert!

## So deinstallieren Sie AdGuard VPN für Mac

### Standard-Deinstallation

Um AdGuard VPN für Mac zu deinstallieren, führen Sie zwei einfache Schritte aus:

1. Öffnen Sie „Finder“ und gehen Sie zum Abschnitt „Programme“.

2. Wählen Sie *AdGuard VPN* aus der Liste aus, klicken Sie mit der rechten Maustaste darauf und klicken Sie dann auf *In den Papierkorb verschieben*.

![Standard uninstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Erweiterte Deinstallation

Manchmal reicht die standardmäßige Deinstallation aufgrund einer fehlerhaften Entfernung oder in anderen seltenen Fällen möglicherweise nicht aus. In diesem Fall kann unser Support Sie bitten, eine erweiterte Deinstallation durchzuführen, um AdGuard VPN vollständig von Ihrem Mac zu entfernen. To do this, do the following:

1. Befolgen Sie die im Abschnitt [„Standard-Deinstallation“](#how-to-uninstall-adguard-vpn-for-mac) beschriebenen Schritte.
2. Öffnen Sie „Finder“ oder „Spotlight“ und geben Sie `Schlüsselbund` in die Suche ein. ![Advanced uninstallation. Enter Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Klicken Sie auf das Symbol des gefundenen Programms und geben Sie `com.adguard.mac.vpn` in die Suche ein. If there is such a record in the search results, delete it.
4. Wechseln Sie zurück zu „Finder“ oder „Spotlight“ und geben Sie `Terminal` ein. ![Advanced uninstallation. Enter Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Öffnen Sie das Programm und geben Sie den Befehl ein — `defaults delete com.adguard.mac.vpn`.
6. Drücken Sie *Leertaste* und geben Sie einen weiteren Befehl ein — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN wurde vollständig von Ihrem Mac entfernt.

You can learn more about AdGuard VPN for Mac in [this article](/adguard-vpn-for-mac/overview).
