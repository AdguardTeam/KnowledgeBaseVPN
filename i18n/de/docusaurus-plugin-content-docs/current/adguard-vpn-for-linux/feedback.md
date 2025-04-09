---
title: Sending feedback
sidebar_position: 6
---

## Ein Problem melden oder eine Funktion vorschlagen

Wenn Sie einen Fehler in AdGuard VPN für Linux gefunden haben oder eine neue Funktion vorschlagen möchten, können Sie dies hier tun:

- Füllen Sie das [Feedback-Formular](https://surveys.adguard.com/de/vpn_linux/form.html) aus.
- [Create a GitHub issue](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Aber bevor Sie das tun, überprüfen Sie das [Repository](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) auf ähnliche Probleme.

:::note
Wenn Sie die Implementierung einer neuen Funktion oder Fehlerbehebung unterstützen möchten, können Sie auf GitHub dafür abstimmen. Um abzustimmen, reagieren Sie einfach mit einem Emoji.
:::

## Sammeln und Versenden von Protokollen

1. Aktivieren Sie die Debug-Protokollierung durch Eingabe von:

    `adguardvpn-cli config set-debug-logging on`

2. Reproduzieren Sie das Problem und versuchen Sie, sich an den genauen Zeitpunkt des Auftretens zu erinnern.

3. Wait a while, then archive the logs in the _Downloads_ or _Home_ folder by typing:

    `adguardvpn-cli export-logs`

    The logs will be downloaded by default to the application folder, the path to the logs will be written in the console.

4. Senden Sie die Protokolldatei an <devteam@adguard.com>. Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title). Alternativ können Sie die Protokolldatei auf Google Drive hochladen und sie mit <devteam@adguard.com> teilen. Attach the file link to your GitHub issue.

5. Disable debug logging by typing:

    `adguardvpn-cli config set-debug-logging off`
