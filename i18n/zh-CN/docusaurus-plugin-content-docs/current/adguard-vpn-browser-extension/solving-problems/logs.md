---
title: 如何收集和发送日志记录
sidebar_position: 1
---

收集 AdGuard VPN 浏览器扩展日志的方法有多种，但无论您选择哪一种，最终都会收集相同的数据。 在扩展中，日志不区分标准日志和调试日志。 当您遇到的问题让您无法使用某种方法时，我们会为这些情况提供不同的日志收集方法。

## 通过*「报告错误」*界面收集和发送日志

1. 打开 AdGuard VPN 浏览器扩展，请您尽可能复现导致错误的操作。 请记下发生此错误的确切时间。
1. 单击汉堡菜单图标（☰），打开*「设置」*→*「支持」*→*「报告错误」*。
1. 在打开的表单中，留下自动填充的电子邮件地址或输入另一个电子邮件地址，描述您发现的错误，包括发生此错误的时间。 如果您无法复现问题，请尽可能准确地指出上次发生问题的时间。
1. 确保勾选*「在信息中包含诊断报告」*旁边的复选框，然后点击*「提交」*。 这样，您将随错误报告一起发送日志。

## 通过*「导出日志」*按钮收集和发送日志

1. 打开 AdGuard VPN 浏览器扩展，请您尽可能复现导致错误的操作。 请记下发生此错误的确切时间。
1. 右键单击 AdGuard VPN 浏览器扩展图标。
1. 在打开的菜单中单击*「导出日志」*。
1. 之后，日志文件会以 `.txt` 格式保存到您的设备。

现在您已经收集了日志，您需要将它们交给我们的开发团队。 为此：

1. 在 GitHub 上报告错误。 有关在 GitHub 上创建问题的详细说明，请参阅本文。
1. 将包含日志和重现时间的存档发送至 `devteam@adguard.com` 并附加指向您的 GitHub 问题的链接。 此外，您还可以将包含日志和重现时间的存档添加到 Google Drive，分享至 `devteam@adguard.com`，并将 Google Drive 链接附到您在 GitHub 上的问题中。

## 通过浏览器开发者工具收集和发送日志

### Chrome

1. 打开 AdGuard VPN 浏览器扩展，请您尽可能复现导致错误的操作。 请记下发生此错误的确切时间。
1. 转到 `chrome://extensions`
1. 开启*「开发者模式」*

    ![开发者模式 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. 点击 `background.html`

    ![背景 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. 打开*「控制台」*选项卡

    ![控制台选项卡 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. 打开上下文菜单并单击*「另存为…」*

    ![另存为 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

现在您已经收集了日志，您需要将它们交给我们的开发团队。 为此：

1. 在 GitHub 上报告错误。 有关在 GitHub 上创建问题的详细说明，请参阅本文。
1. 将包含日志和复现时间的存档发送至 `devteam@adguard.com` 并附上指向您的 GitHub 问题的链接。 此外，您还可以将包含日志和重现时间的存档添加到 Google Drive，分享至 `devteam@adguard.com`，并将 Google Drive 链接附到您在 GitHub 上的问题中。

### 火狐浏览器

1. 打开 AdGuard VPN 浏览器扩展，请您尽可能复现导致错误的操作。 请记下发生此错误的确切时间。
1. 转到 `about:addons`
1. 单击*「调试扩展」*

    ![调试扩展 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. 单击*「检查」*

    ![检查 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. 转到*「控制台」*选项卡

    ![控制台 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. 单击 *「将所有信息保存到文件」*

    ![保存 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

现在您已经收集了日志，您需要将它们交给我们的开发团队。 为此：

1. 在 GitHub 上报告错误。 有关在 GitHub 上创建问题的详细说明，请参阅本文。
1. 将包含日志和重现时间的存档发送至 `devteam@adguard.com` 并附加指向您的 GitHub 问题的链接。 此外，您还可以将包含日志和重现时间的存档添加到 Google Drive，分享至 `devteam@adguard.com`，并将 Google Drive 链接附到您在 GitHub 上的问题中。
