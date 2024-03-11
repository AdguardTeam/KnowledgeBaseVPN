---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN Mac版是一个桌面 VPN 服务。 AdGuard VPN 与 AdGuard 广告拦截程序兼容，它们可以一起启动并无缝运行。 让我们看看此软件提供什么功能。

请注意：**登录 AdGuard 账号后，您才可以运行 AdGuard VPN Mac版**。 用户可以用 AdGuard 账号登录，也可以通过其他账号登录，即通过 Apple、Google 或 Facebook 登录。 请确保您的其他账号与 AdGuard 账号绑定到同一个电子邮件地址。 如果用户的 AdGuard 账号中有合适的订阅，订阅将在桌面应用程序上自动激活。 还没有 AdGuard 账号？ 请[点击这里](https://auth.adguard.com/registration.html)建立账号。

:::注意兼容性

适用于 Mac 的 AdGuard VPN 支持 macOS Sierra (10.15) 以上的 macOS 版本。

:::

## 主界面

![主屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

第一个标签是*主页*屏幕。 Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping 是指 VPN 服务器的响应时间。 The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. 下面用户可以看到全部服务器位置的列表。 The search field makes it easy to find the location you need.

:::注意

免费用户只可以连接到一些服务器位置，而其他位置则被封锁。 除此之外，免费版有每月 3GB 的流量限制。

:::

## 排除项

![排除项](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN 有几个独特的功能，其中之一就是*排除*。 默认情况下，AdGuard VPN 会在所有网站和应用程序中运行，但白名单内的除外。 但你也可以切换到其他模式，这样 AdGuard VPN 就只能在白名单内的网站和应用程序上运行。

![排除项屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

用户可以将网站手动添加到排除项列表，或者在流行服务的列表里选择特定的网站。 这些名单分为八个类别，包括社交网络、通信、视频和音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 这些服务中的任何一项都可以一键添加到排除项中！ 在用户启用选择模式的情况下，本功能特别好用。

排除项列表可以轻松配置。 如果用户添加了一个域名及其一些子域，它们将在根域中被分组。 添加根域 (`example.com`) 时，其掩码（`*.example.com`）也被添加。

如果您已经添加了服务，改变或删除一些项目后，想要还原设置，只需在域名旁边按*重置回默认值* ，这个操作将恢复任何缺失的域名并勾选所有的复选框。

此外，现成的排除项列表可以传输到被安装 AdGuard VPN 的其他设备。 要导出排除项，请按照以下四步说明进行操作：

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 Mac 设备导入到 iPhone 设备，确保先将 `.zip` 文件发送到手机上。
4. 在要导入存档的设备/浏览器上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。 完成！

:::注意

其他设备上的存档文件同样可以导入到你的 Mac 版 AdGuard VPN 上。

:::

## 统计数据

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## 支持

![支持屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. 在[常见问题](https://adguard-vpn.com/welcome.html#faq)或[知识库](/)部分中查找疑问的答案，如果您遇到问题请报告错误，或[在任意平台上讨论 AdGuard](https://adguard.com/discuss.html)。 请随时[留下有关我们服务](https://surveys.adguard.com/vpn_mac/form.html)的反馈意见，我们将不胜感激。

## 设置

![设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

最后是「设置」标签。 在*关于程序* 部分，用户可以查看 AdGuard VPN 的当前版本，检查更新，访问我们的官网，并熟悉 AdGuard 的 EULA（最终用户许可协议）和隐私政策。 在*关于许可证*部分，用户可以从免费版升级到无限版、管理自己的订阅或登出。 最重要的是，用户可以从这里访问*常规设置*。

### 应用程序设置

![应用程序设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

前四个基本功能提高应用程序的用户友好性，即 *Kill Switch*、 *自动更新*、 *随系统启动自动运行 AdGuard VPN* 和*在应用程序启动时自动连接*。 此外，用户可以在浅色、深色和系统主题之间进行选择。系统主题与您 Mac 上的主题相匹配。

您还可以允许 AdGuard VPN 收集和发送匿名崩溃报告、技术和交互数据，以帮助我们改进应用程序。 最后，您还可以从 Mac 导出日志。 如果您想将日志附加到您的消息以提供客服支持，本功能很有用。

### DNS 服务器

![DNS 服务器](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Here you can set up a DNS server (or servers). This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### 高级设置

![高级设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 日志记录级别

软件只有两个日志记录级别，但我们强烈建议用户使用第一个默认级别。 第二个选项（扩展日志级别）应该在咨询我们的技术支持后，仅在记录一个异常的程序行为时设置。 如果启用了扩展日志记录级别，请确保在记录日志后切换到默认级别。

#### 隐藏菜单栏的图标

虽然这个选项位于*高级设置*，但用户可以毫不犹豫启用它。 用户可以从菜单栏中隐藏 AdGuard VPN 图标。这不会阻止应用程序在后台运行。

#### Use QUIC

QUIC 通信协议是 HTTP 的最新尖端版本。 在不太理想的条件下，例如在地铁或电梯中使用移动数据时，切换开关以获得更好的连接质量。
