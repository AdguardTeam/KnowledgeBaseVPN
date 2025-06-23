---
title: 로그 수집 및 전송 방법
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. To send these logs, follow the next steps:

1. Open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

1. Click **Support** (in the menu above) → **Report a bug**.

1. In the opened form, enter your email address for feedback and describe the error found, including the time when this error occurred. If you can’t reproduce the problem, specify as accurately as possible when it last occurred.

1. There is a check mark next to the **Send detailed system info**, which means that when you send a report, you also send logs.

:::note

If for some reason it is more convenient for you to send us logs in another way, you can export them yourself. To do this, select **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

:::

## Extended logs

In most cases, the default logging level is sufficient to trace down possible bugs. But there are cases when more detailed technical information about the device and connections is required, and then our support team will ask you to enable the extended logging level. To send this type of logs, follow these steps:

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level** → **Extended**.

1. Repeat the actions that led to the error, and note the time when it occurred.

1. Switch the logging level back to **Default**.

1. Select **Support** (in the menu above) → **Report a bug**.

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can’t reproduce the problem, be as specific as possible about when it last occurred.

1. Make sure that there is a check mark next to **Send detailed system info** and click **Send**.

:::note

If for some reason it is more convenient for you to send us logs in another way, you can export them yourself. To do this, select **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

:::

## Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Settings** → **App settings** → **Advanced settings** → **Export logs and system info**.

Don’t worry if your log file is large. We need to know as many details as possible in order to fix your problem.

:::note

If you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team

:::
