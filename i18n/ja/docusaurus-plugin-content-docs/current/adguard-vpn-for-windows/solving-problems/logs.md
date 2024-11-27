---
title: ログの収集・送信方法
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

ほとんどの場合、潜在的なバグ・不具合を突き止めるのに「通常記録」ログレベルが十分です。 しかし、端末や接続に関するより詳細な技術情報が必要な場合もあり、その場合は、AdGuardのサポートチームが、「 すべてを記録」というログレベルを有効にするようお願いすることがあります。 「すべてを記録」ログを送信する方法は以下の通りです:

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. **ログのレベル** セクションで、 「**すべてを記録**」を選択します。

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. 問題の発生に至った動作を繰り返して問題を再現して、発生時刻を記録します。

1. 【重要】ログレベルを「**通常記録**」に戻します。

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

1. 「**詳細なシステム情報を送信する**」チェックボックスにチェックを入れます。これがご報告にログを添付するための項目です。

> もし、別の方法でログをお送りいただく方が便利な場合は、手動でログをエクスポートすることができます。 その方法はこちら: 設定 → **サポート** → **ログとシステム情報のエクスポート**

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
