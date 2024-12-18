---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN Mac版是一个桌面 VPN 服务。 AdGuard VPN 与 AdGuard 广告拦截程序兼容，它们可以一起启动并无缝运行。 让我们看看此软件提供什么功能。

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. 用户可以用 AdGuard 账号登录，也可以通过其他账号登录，即通过 Apple、Google 或 Facebook 登录。 请确保您的其他账号与 AdGuard 账号绑定到同一个电子邮件地址。 如果用户的 AdGuard 账号中有合适的订阅，订阅将在桌面应用程序上自动激活。 Still don’t have an AdGuard account? 请[点击这里](https://auth.adguard.com/registration.html)建立账号。

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## 主界面

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

第一个标签是*主页*屏幕。 Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping 是指 VPN 服务器的响应时间。 The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. 下面用户可以看到全部服务器位置的列表。 The search field makes it easy to find the location you need.

:::note

免费用户只可以连接到一些服务器位置，而其他位置则被封锁。 除此之外，免费版有每月 3GB 的流量限制。

:::

## 排除项

![排除项](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![排除项屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

用户可以将网站手动添加到排除项列表，或者在流行服务的列表里选择特定的网站。 这些名单分为八个类别，包括社交网络、通信、视频和音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 这些服务中的任何一项都可以一键添加到排除项中！ It’s especially convenient if you use Selective mode.

排除项列表可以轻松配置。 If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. 添加根域 (`example.com`) 时，其掩码（`*.example.com`）也被添加。

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

此外，现成的排除项列表可以传输到被安装 AdGuard VPN 的其他设备。 要导出排除项，请按照以下四步说明进行操作：

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN。 Find the appropriate section and click the *Export* button. `exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 例如，如果您将排除项列表从自己的 Mac 设备导入到 iPhone 设备，确保先将 `.zip` 文件发送到手机上。
4. 在要导入存档的设备/浏览器上打开 AdGuard VPN，其中包含要应用的排除项列表。 Find the appropriate section, click the *Import* button and select the archive. 完成！

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## 支持

![支持屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## 设置

![设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

最后是「设置」标签。 In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. 在*关于许可证*部分，用户可以从免费版升级到无限版、管理自己的订阅或登出。 最重要的是，用户可以从这里访问*常规设置*。

### 应用程序设置

![应用程序设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. 此外，用户可以在浅色、深色和系统主题之间进行选择。系统主题与您 Mac 上的主题相匹配。

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. 如果您想将日志附加到您的消息以提供客服支持，本功能很有用。

### DNS 服务器

![DNS 服务器](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### 高级设置

![高级设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 日志记录级别

软件只有两个日志记录级别，但我们强烈建议用户使用第一个默认级别。 第二个选项（扩展日志级别）应该在咨询我们的技术支持后，仅在记录一个异常的程序行为时设置。 If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### 隐藏菜单栏的图标

虽然这个选项位于*高级设置*，但用户可以毫不犹豫启用它。 用户可以从菜单栏中隐藏 AdGuard VPN 图标。这不会阻止应用程序在后台运行。

#### Use QUIC

QUIC 通信协议是 HTTP 的最新尖端版本。 在不太理想的条件下，例如在地铁或电梯中使用移动数据时，切换开关以获得更好的连接质量。
