---
title: Wie man Protokolle sammelt und versendet
sidebar_position: 1
---

Es gibt mehrere Möglichkeiten zum Sammeln von AdGuard VPN-Browsererweiterungsprotokollen, aber egal, welche Sie wählen — es werden dieselben Daten gesammelt. In der Erweiterung sind die Protokolle nicht in Standard- und Debug-Protokolle unterteilt. Und es werden verschiedene Optionen zum Sammeln von Protokollen für die Fälle bereitgestellt, in denen ein Problem Sie daran hindert, die eine oder andere App zu verwenden.

## Sammeln und Senden von Protokollen über den Abschnitt *Fehler melden*

1. Öffnen Sie die AdGuard VPN Browsererweiterung, wiederholen Sie nach Möglichkeit die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Öffnen Sie *Einstellungen*, indem Sie auf das Hamburger-Menüsymbol (☰) klicken → *Support* → *Fehler melden*.
1. Hinterlassen Sie im geöffneten Formular eine automatisch eingefügte E-Mail-Adresse oder geben Sie eine andere ein und beschreiben Sie den gefundenen Fehler, einschließlich des Zeitpunkts, zu dem dieser Fehler aufgetreten ist. Wenn Sie das Problem nicht reproduzieren können, geben Sie so genau wie möglich an, wann es zuletzt aufgetreten ist.
1. Vergewissern Sie sich, dass ein Häkchen neben *Diagnosebericht zur Nachricht hinzufügen* gesetzt ist, und tippen Sie auf *Senden*. Auf diese Weise senden Sie die Protokolle zusammen mit dem Fehlerbericht.

## Sammeln und Senden von Protokollen über die Schaltfläche *Protokolle exportieren*

1. Öffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Klicken Sie mit der rechten Maustaste auf das Symbol der AdGuard VPN Browsererweiterung.
1. Klicken Sie im geöffneten Menü auf *Protokolle exportieren*.
1. Als Ergebnis wird die Protokolldatei im Format `txt` auf Ihrem Gerät gespeichert.

Jetzt, wo Sie die Protokolle gesammelt haben, müssen Sie sie unserem Entwicklungsteam übergeben. Um dies zu tun:

1. Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Problems auf GitHub finden Sie in diesem Artikel.
1. Senden Sie ein Archiv mit Protokollen und Abspielzeit an `devteam@adguard.com` und fügen Sie einen Link zu Ihrem GitHub-Problem hinzu. Sie können auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzufügen und es mit `devteam@adguard.com` teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anhängen.

## Sammeln und Senden von Protokollen über die Tools des Browser-Entwicklers

### Chrome

1. Öffnen Sie die AdGuard VPN Browsererweiterung und wiederholen Sie, wenn möglich, die Aktionen, die zum Fehler geführt haben. Notieren Sie den genauen Zeitpunkt, zu dem dieser Fehler aufgetreten ist.
1. Gehen Sie zu `chrome://extensions`
1. Schalten Sie den Entwicklermodus *ein*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Klicken Sie auf `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Öffnen Sie die Registerkarte *Сonsole*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Öffnen Sie das Kontextmenü und klicken Sie auf *Save as…*

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

1. Klicken Sie auf *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Nachdem Sie die Protokolle gesammelt haben, müssen Sie sie unserem Entwicklungsteam übergeben. Um dies zu tun:

1. Melden Sie einen Fehler auf GitHub. Detaillierte Anweisungen zum Erstellen eines Issues auf GitHub finden Sie in diesem Artikel.
1. Senden Sie ein Archiv mit Protokollen und Wiedergabezeit an `devteam@adguard.com` und hängen Sie einen Link zu Ihrem GitHub-Problem an. Sie können auch ein Archiv mit Protokollen und Wiedergabezeit zu Google Drive hinzufügen und es mit `devteam@adguard.com` teilen, indem Sie den Google Drive-Link an Ihr Problem auf GitHub anhängen.
