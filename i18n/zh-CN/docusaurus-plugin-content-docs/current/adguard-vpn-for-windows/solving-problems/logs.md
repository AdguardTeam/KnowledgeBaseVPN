---
title: 如何收集和发送日志记录
sidebar position: 1
---

如果您在使用 Windows 版 AdGuard VPN 时遇到任何问题，请告知我们。 如果您也能把应用日志发送过来，我们将不胜感激。因为日志可以帮助我们更快地解决问题。

## 收集日志

### 标准日志

默认情况下，AdGuard VPN for Windows 使用标准日志级别，即收集有关应用程序运行进程的基本数据。 在发送日志之前，请打开 AdGuard VPN for Windows，并尽可能重复导致错误的操作。 记下此错误发生的确切时间。

### 扩展日志

在大多数情况下， 默认日志记录级别足以追踪发生的错误。 但在某些情况下，需要有关设备和连接的更详细技术信息，然后我们的支持团队会要求您启用进阶日志记录级别。 要发送进阶日志，请执行以下步骤：

1. 打开适用于 Windows 的 AdGuard VPN 并在上面的菜单中选择 **设置** → **应用程序设置** → **高级设置** → **日志记录级别**。

1. 在「**记录级别**」部分，选择「**记录全部**」。

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. 重复导致错误的操作，并记下错误发生的时间。

1. 将日志记录级别切换回「**默认记录**」。

### 跟踪日志

有时我们的支持团队可能会要求您向他们发送跟踪日志。 为此，您需要遵循以下步骤：

1. 右键单击托盘菜单中的 AdGuard VPN 图标，然后选择 **退出 AdGuard VPN**。

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    如果看到警告信息，请同意停止服务。

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. 打开控制台（在开始面板中键入 `cmd`）。

1. 如果使用的是 64 位 Windows，则使用`C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace`命令运行应用程序；如果使用的是 32 位 Windows，则使用`C:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace`命令运行应用程序。

1. 重现问题。 我们强烈建议您记下问题重现的确切时间：这将帮助我们的支持团队找到相关的日志条目并更快地解决问题。

1. 导出记录的日志：**支持**→**导出日志和系统信息**。

如果您的日志文件很大，请不要担心。 因为我们需要了解尽可能多的细节以修复您的问题。

## 发送日志

要向我们的支持团队发送日志，请按照以下步骤操作：

1. 点击上面菜单中的 **支持** → **报告错误**。

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. 在打开的表单中输入您的电子邮件地址，并描述您发现的错误，包括发生的时间。 如果无法重现问题，请尽可能具体地说明问题上次发生的时间。

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. 勾选「**发送详细的系统信息**」旁边的复选框，这意味着当您发送报告时，您也会发送日志。

> 如果出于某种原因，您以其他方式向我们发送日志更方便，您可以自己导出它们。 要做到这一点，请进入「**支持**」→「**导出日志和系统信息**」。

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**注意**：如果您在尝试导出日志时遇到任何问题，还有一种替代方法。 请按照以下步骤操作：

1. 打开资源管理器应用程序

1. 在搜索框中粘贴`%programdata%/adguardvpn`

1. 找到名为**日志的**文件夹

1. 存档文件夹

1. 将其发送给我们的客户支持团队
