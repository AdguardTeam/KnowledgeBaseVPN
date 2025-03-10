---
title: Installation and removal
sidebar_position: 2
---

## Systemanforderungen

AdGuard VPN can only be installed on devices with **Microsoft Windows 11, 10, 8.1, 8, and Vista SP2 (web-based only)**.

## Installation von AdGuard VPN für Windows

Um AdGuard VPN für Windows zu installieren, besuchen Sie [unsere Website](https://adguard-vpn.com/welcome.html) und klicken Sie auf die Schaltfläche *Herunterladen* . Danach wird die `adguardVPNInstaller.exe` heruntergeladen. Führen Sie das Installationsprogramm aus und folgen Sie den Anweisungen. Der Vorgang dauert weniger als eine Minute.

Dann müssen Sie das Kontrollkästchen aktivieren, um die Bedingungen der EULA und der Datenschutzrichtlinie zu akzeptieren. Und im letzten Schritt der Installation werden Sie aufgefordert, sich über Ihr AdGuard-Konto oder über soziale Netzwerke (Google, Apple, Facebook) zu autorisieren.

## Deinstallation von AdGuard VPN für Windows

Wenn Sie sich entscheiden, AdGuard VPN von Ihrem Computer zu entfernen, verwenden Sie eine der drei unten aufgeführten Optionen:

- Klicken Sie auf *Start* und suchen Sie AdGuard VPN in der geöffneten Liste. Klicken Sie mit der rechten Maustaste darauf und wählen Sie *Deinstallieren*.
- Klicken Sie auf *Start* → *Einstellungen* → *Programme* → *Programme und Funktionen*. Suchen Sie AdGuard VPN in der Liste, klicken Sie darauf und wählen Sie *Deinstallieren*.
- Öffnen Sie die *Systemsteuerung* und klicken Sie dann auf *Programme* → *Programme und Funktionen* → *Programm deinstallieren/ändern*. Suchen Sie AdGuard VPN in der Liste, klicken Sie mit der rechten Maustaste darauf und wählen Sie *Deinstallieren*.

### Erweiterte Deinstallation {#advanced}

In case regular uninstall doesn’t work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://static.adtidy.org/windows/uninstaller/uninstal_utility.zip) created by our developers. Entpacken Sie das Archiv in einen beliebigen Ordner auf Ihrem PC, führen Sie die Datei **Adguard.UninstallUtility.exe** aus und erlauben Sie der Anwendung, Änderungen an Ihrem Gerät vorzunehmen. Befolgen Sie dann die nachstehenden Anweisungen:

1. Wählen Sie *AdGuard VPN* und *Standard* als Deinstallationstyp und klicken Sie dann auf *Deinstallieren*:

    ![Standard-Deinstallation *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Klicken Sie auf *OK*, sobald das Hinweisfenster angezeigt wird:

    ![Standard-Deinstallationshinweis *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Warten Sie, bis die Deinstallation abgeschlossen ist — es wird eine Meldung **Installation abgeschlossen** und eine Aufforderung zum Neustart des Computers angezeigt:

    ![Deinstallation abgeschlossen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Befolgen Sie die nächsten Schritte nur, wenn die Ausführung der ersten beiden Schritte aus irgendeinem Grund nicht ausreichte. Wir empfehlen dringend, unser Support-Team zu kontaktieren, bevor Sie die Schritte 3–4 der erweiterten Deinstallationsanweisungen ausführen.

    :::

1. Wählen Sie *AdGuard VPN* und *Erweitert* als Deinstallationstyp und klicken Sie dann auf *Deinstallieren*. Click *Yes, continue* in the window prompt:

    ![Erweiterte Deinstallation *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Klicken Sie auf *OK*, sobald das Hinweisfenster angezeigt wird:

    ![Extended uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Warten Sie, bis die Deinstallation abgeschlossen ist — es wird eine Meldung **Deinstallation abgeschlossen** und eine Aufforderung zum Neustart des Computers angezeigt:

    ![Deinstallation abgeschlossen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN wurde erfolgreich deinstalliert!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. To do this, follow the instructions below:

1. Open Command Prompt by typing *cmd* from the Start menu.
2. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
3. Use `/vpn` to uninstall AdGuard for Windows. Es sollte wie folgt aussehen:

   `Adguard.UninstallUtility.exe /console /vpn`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/vpn` is necessary for a successful uninstall. Die Parameter `/advanced` und `/settings` sind optional.

:::
