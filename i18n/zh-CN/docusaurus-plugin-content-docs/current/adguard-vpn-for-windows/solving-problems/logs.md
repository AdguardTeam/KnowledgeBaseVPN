---
title: 如何收集和发送日志记录
sidebar position: 1
---

If you encounter any problems while using AdGuard VPN for Windows, you can inform us about it. We would appreciate it if you also send application logs, as they help us resolve issues much quicker.

## Collecting logs

### Standard logs

By default, AdGuard VPN for Windows uses the standard logging level, which is the basic collection of data about running processes of the app. Before sending the logs, please open AdGuard VPN for Windows and, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.

### Extended logs

在大多数情况下， 默认日志记录级别足以追踪发生的错误。 但在某些情况下，需要有关设备和连接的更详细技术信息，然后我们的支持团队会要求您启用进阶日志记录级别。 要发送进阶日志，请执行以下步骤：

1. Open AdGuard VPN for Windows and select **Settings** in the menu above → **App settings** → **Advanced settings** → **Logging level**.

1. 在「**记录级别**」部分，选择「**记录全部**」。

    ![Logging level *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/logging.jpeg)

1. 重复导致错误的操作，并记下错误发生的时间。

1. 将日志记录级别切换回「**默认记录**」。

### Trace logs

Sometimes our support team might ask you to send them trace logs. To do this, you need to follow these steps:

1. Right-click the AdGuard VPN icon in the tray menu and choose **Exit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/exit.png)

    If you see the warning message, agree to stop the service.

    ![Attention *mobile](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/attention.png)

1. Open the console (type `cmd` in the start panel).

1. Run the application with the command `C:\"Program Files (x86)"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 64-bit Windows, and `C:\"Program Files"\AdGuardVpn\AdguardVpn.exe /trace` if you are using 32-bit.

1. Reproduce the issue. We strongly recommend that you note the exact time when you reproduce the problem: this will help our support team to find relevant log entries and resolve the problem faster.

1. Export the recorded logs: **Support** → **Export logs and system info**.

Don’t worry if your log file is large. We need to know as many details as possible in order to fix your problem.

## Sending logs

To send logs to our support team, please follow the next steps:

1. Click **Support** in the menu above → **Report a bug**.

    ![Report a bug *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/support_report.jpeg)

1. In the form that opens, enter your email address and describe the error you found, including the time it occurred. If you can’t reproduce the problem, be as specific as possible about when it last occurred.

    ![Report *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/report_bug.png)

1. 勾选「**发送详细的系统信息**」旁边的复选框，这意味着当您发送报告时，您也会发送日志。

> 如果出于某种原因，您以其他方式向我们发送日志更方便，您可以自己导出它们。 要做到这一点，请进入「**支持**」→「**导出日志和系统信息**」。

![Export *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/logs/export.jpeg)

**Note**: if you encounter any problems while trying to export logs, there is an alternative way. Please follow these steps:

1. Open the Explorer app

1. Paste `%programdata%/adguardvpn` in the search box

1. Find the folder called **Logs**

1. Archive the folder

1. Send it to our support team
