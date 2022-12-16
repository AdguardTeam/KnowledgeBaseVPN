---
title: Installation und Entfernung
sidebar_position: 2
---

## Systemanforderungen

**Betriebssystemversion**: macOS 10.12 (64 Bit) oder höher

**RAM**: mindestens 2 GB

**Freier Speicherplatz**: 120 MB


## Wie man AdGuard VPN für Mac installiert?

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*.

![Laden Sie AdGuard VPN von der offiziellen Website herunter](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. Warten Sie, bis das Herunterladen der Datei *AdGuardVPN.dmg* abgeschlossen ist, und öffnen Sie sie im Ordner „Downloads“.

3. Warten Sie, bis sich das Fenster des Installationsprogramms öffnet. Doppelklicken Sie auf das Symbol darin.

![Programminstallationsfenster](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. Wenn Sie AdGuard VPN zum ersten Mal starten, zeigt das Betriebssystem eine Warnung auf dem Bildschirm an, dass diese App aus dem Internet heruntergeladen wurde. Klicken Sie auf *Öffnen*.

5. Klicken Sie dann auf *Weiter* und *Installieren*.

![Klicken Sie auf Weiter](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![Installieren klicken](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Warten Sie, bis das Installationsprogramm die erforderlichen Dateien heruntergeladen hat.

AdGuard VPN für Mac ist installiert!


## Wie man AdGuard VPN für Mac deinstalliert?

### Standard-Deinstallation

Um AdGuard VPN für Mac zu deinstallieren, führen Sie zwei einfache Schritte aus:

1. Öffnen Sie „Finder“ und gehen Sie zum Abschnitt „Programme“.

2. Wählen Sie *AdGuard VPN* aus der Liste aus, klicken Sie mit der rechten Maustaste darauf und klicken Sie dann auf *In den Papierkorb verschieben*.

![Standard-Deinstallation](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Erweiterte Deinstallation

Manchmal reicht die standardmäßige Deinstallation aufgrund einer fehlerhaften Entfernung oder in anderen seltenen Fällen möglicherweise nicht aus. Dann fordert Sie der Support-Service möglicherweise auf, eine erweiterte Deinstallation durchzuführen, um AdGuard VPN vollständig von Ihrem Mac zu entfernen. Gehen Sie dazu wie folgt vor:

1. Befolgen Sie die im Abschnitt [„Standard-Deinstallation“](#how-to-uninstall-adguard-vpn-for-mac) beschriebenen Schritte.

2. Öffnen Sie „Finder“ oder „Spotlight“ und geben Sie `Schlüsselbund` in die Suche ein.

![Erweiterte Deinstallation. Schlüsselbund eingeben](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Klicken Sie auf das Symbol des gefundenen Programms und geben Sie `com.adguard.mac.vpn` in die Suche ein. Wenn es einen solchen Datensatz in den Suchergebnissen gibt, löschen Sie ihn.

4. Gehen Sie zurück zu „Finder“ oder „Spotlight“ und geben Sie `Terminal` ein.

![Erweiterte Deinstallation. Terminal eingeben](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Öffnen Sie das Programm und geben Sie den Befehl ein — `defaults delete com.adguard.mac.vpn`.

6. Drücken Sie *Leertaste* und geben Sie einen weiteren Befehl ein — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN wurde vollständig von Ihrem Mac entfernt.

Weitere Informationen über die AdGuard VPN-App für Mac finden Sie in [diesem Artikel](/adguard-vpn-for-mac/overview.md).