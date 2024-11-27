---
title: So sammeln und versenden Sie Protokolle
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

In den meisten Fällen reicht die Standardprotokollierungsebene aus, um mögliche Fehler aufzuspüren. Es gibt jedoch Fälle, in denen detailliertere technische Informationen über das Gerät und die Verbindungen erforderlich sind und unser Support-Team Sie dann auffordert, die Erweiterte Protokollierungsebene zu aktivieren. Um diese Protokolle zu senden, machen Sie Folgendes:

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. Im Abschnitt **Protokollierungsebene** wählen Sie **Vollständige Aufzeichnung**.

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Wiederholen Sie die Aktionen, die zu dem Fehler geführt haben, und notieren Sie den Zeitpunkt, zu dem er aufgetreten ist.

1. Schalten Sie die Protokollierungsebene zurück auf **Standard-Aufzeichnung**.

### Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Support** → **Export logs and system info**.

Don't worry if your log file is large. We need to know as many details as possible in order to fix your problem.

## Sending logs

To send logs to our support team, please follow the next steps:

1. Click **Support** in the menu above → **Report a bug**.

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can't reproduce the problem, be as specific as possible about when it last occurred.

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Neben **Detaillierte Systeminformationen senden** ist ein Häkchen gesetzt, d. h., wenn Sie einen Bericht senden, senden Sie auch Protokolle.

> Wenn es für Sie aus irgendeinem Grund bequemer ist, uns Protokolle auf andere Weise zu senden, können Sie sie selbst exportieren. Gehen Sie dazu auf **Support** → **Protokolle und Systeminformationen exportieren**.

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
