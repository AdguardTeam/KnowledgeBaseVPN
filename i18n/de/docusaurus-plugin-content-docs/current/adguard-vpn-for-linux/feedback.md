---
title: Senden von Rückmeldungen
sidebar_position: 6
---

## Ein Problem melden oder eine Funktion vorschlagen

Wenn Sie einen Fehler in AdGuard VPN für Linux gefunden haben oder eine neue Funktion vorschlagen möchten, können Sie dies hier tun:

- Füllen Sie das [Feedback-Formular](https://surveys.adguard.com/de/vpn_linux/form.html) aus.
- [Erstellen Sie ein GitHub-Issue](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Aber bevor Sie das tun, überprüfen Sie das [Repository](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) auf ähnliche Probleme.

:::note
Wenn Sie die Implementierung einer neuen Funktion oder Fehlerbehebung unterstützen möchten, können Sie auf GitHub dafür abstimmen. Um abzustimmen, reagieren Sie einfach mit einem Emoji.
:::

## Sammeln und Versenden von Protokollen

1. Aktivieren Sie die Debug-Protokollierung durch Eingabe von:

   `adguardvpn-cli config set-debug-logging on`

2. Reproduzieren Sie das Problem und versuchen Sie, sich an den genauen Zeitpunkt des Auftretens zu erinnern.

3. Warten Sie eine Weile und archivieren Sie dann die Protokolle im Ordner _Downloads_ oder _Home_, indem Sie sie Folgendes eingeben:

   Für Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Für MacOS

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Senden Sie die Protokolldatei an devteam@adguard.com. Geben Sie den Zeitpunkt des Fehlers an und fügen Sie einen Link zu Ihrem GitHub-Problem oder dessen Nummer hinzu (sie erscheint als #Nummer neben dem Titel). Alternativ können Sie die Protokolldatei auf Google Drive hochladen und sie mit devteam@adguard.com teilen. Hängen Sie den Dateilink an Ihr GitHub-Problem an.

5. Deaktivieren Sie die Debug-Protokollierung durch Eingabe von:

   `adguardvpn-cli config set-debug-logging off`
