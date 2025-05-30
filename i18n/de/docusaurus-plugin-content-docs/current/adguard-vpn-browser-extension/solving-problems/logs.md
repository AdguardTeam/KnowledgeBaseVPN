---
title: Wie man Protokolle sammelt und versendet
sidebar_position: 1
---

Es gibt mehrere Möglichkeiten zum Sammeln von AdGuard VPN-Browsererweiterungsprotokollen, aber egal, welche Sie wählen — es werden dieselben Daten gesammelt. In der Erweiterung sind die Protokolle nicht in Standard- und Debug-Protokolle unterteilt. Und es werden verschiedene Optionen zum Sammeln von Protokollen für die Fälle bereitgestellt, in denen ein Problem Sie daran hindert, die eine oder andere App zu verwenden.

## Sammeln und Senden von Protokollen über den Abschnitt *Fehler melden*

1. Öffnen Sie die AdGuard VPN Browsererweiterung, wiederholen Sie nach Möglichkeit die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Öffnen Sie *Einstellungen*, indem Sie auf das Hamburger-Menüsymbol (☰) klicken → *Support* → *Fehler melden*.
1. Hinterlassen Sie im geöffneten Formular eine automatisch eingefügte E-Mail-Adresse oder geben Sie eine andere ein und beschreiben Sie den gefundenen Fehler, einschließlich des Zeitpunkts, zu dem dieser Fehler aufgetreten ist. If you can’t reproduce the problem, specify as accurately as possible when it last occurred.
1. Vergewissern Sie sich, dass ein Häkchen neben *Diagnosebericht in die Nachricht aufnehmen* gesetzt ist, und tippen Sie auf *Senden*. Auf diese Weise senden Sie die Protokolle zusammen mit dem Fehlerbericht.

## Sammeln und Senden von Protokollen über die Schaltfläche *Protokolle exportieren*

1. Öffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Klicken Sie mit der rechten Maustaste auf das Symbol der AdGuard VPN Browsererweiterung.
1. Klicken Sie im geöffneten Menü auf *Protokolle exportieren*.
1. Als Ergebnis wird die Protokolldatei im Format `txt` auf Ihrem Gerät gespeichert.

Jetzt, wo Sie die Protokolle gesammelt haben, müssen Sie sie unserem Entwicklungsteam übergeben. Um dies zu tun:

1. Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Problems auf GitHub finden Sie in diesem Artikel.
1. Senden Sie ein Archiv mit Protokollen und Reproduktionszeit an `devteam@adguard.com` und fügen Sie einen Link zu Ihrem GitHub-Problem hinzu. Sie können auch ein Archiv mit den Protokollen und der Reproduktionszeit zu Google Drive hinzufügen und es mit `devteam@adguard.com` teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anhängen.

## Collecting and sending logs via browser developer’s tools

### Chrome

1. Öffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Gehen Sie zu `chrome://extensions`
1. Schalten Sie den Entwicklermodus *ein*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Klicken Sie auf `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Öffnen Sie die Registerkarte *Сonsole*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Öffnen Sie das Kontextmenü und klicken Sie auf *Speichern unter…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Nachdem Sie die Protokolle gesammelt haben, müssen Sie sie unserem Entwicklungsteam übergeben. Um dies zu tun:

1. Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Issues auf GitHub finden Sie in diesem Artikel.
1. Senden Sie ein Archiv mit Protokollen und Wiedergabezeit an `devteam@adguard.com` und hängen Sie einen Link zu Ihrem GitHub-Problem an. Sie können auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzufügen und es mit `devteam@adguard.com` teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anhängen.

### Firefox

1. Öffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Gehen Sie zu `about:addons`
1. Klicken Sie auf *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Klicken Sie auf *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Gehen Sie auf die Registerkarte *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Klicken Sie auf *Alle Nachrichten in Datei speichern*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Nachdem Sie die Protokolle gesammelt haben, müssen Sie sie unserem Entwicklungsteam übergeben. Um dies zu tun:

1. Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Issues auf GitHub finden Sie in diesem Artikel.
1. Senden Sie ein Archiv mit Protokollen und Wiedergabezeit an `devteam@adguard.com` und hängen Sie einen Link zu Ihrem GitHub-Problem an. Sie können auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzufügen und es mit `devteam@adguard.com` teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anhängen.
