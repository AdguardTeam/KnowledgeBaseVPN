---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN Mac版是一个桌面 VPN 服务。 AdGuard VPN 与 AdGuard 广告拦截程序兼容，它们可以一起启动并无缝运行。 让我们看看此软件提供什么功能。

请注意：**登录 AdGuard 账号后，您才可以运行 AdGuard VPN Mac版**。 用户可以用 AdGuard 账号登录，也可以通过其他账号登录，即通过 Apple、Google 或 Facebook 登录。 请确保您的其他账号与 AdGuard 账号绑定到同一个电子邮件地址。 如果用户的 AdGuard 账号中有合适的订阅，订阅将在桌面应用程序上自动激活。 还没有 AdGuard 账号？ 请[点击这里](https://auth.adguardaccount.com/registration.html)建立账号。

:::note 兼容性

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Big Sur (version 11).

:::

## 主界面

![主屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

第一个标签是*主页*屏幕。 在这里用户可以看到 AdGuard VPN 的当前状态、所选位置（如果启用）及其 Ping。 Ping 是指 VPN 服务器的响应时间。 数值越低，连接速度就越快。 如果 VPN 已关闭，最后已连接的位置将显示在底部。

具有最低 Ping 值的最快位置将显示在屏幕的右上角。 还有一个刷新按钮，如果有任何位置离线，可以点击它。 下面用户可以看到全部服务器位置的列表。 搜索字段使您轻松找到所需的位置。

:::note

免费用户只可以连接到一些服务器位置，而其他位置则被封锁。 除此之外，免费版有每月 3GB 的流量限制。

:::

### 保存的位置

在同一个标签页上，您可以保存自己喜欢的位置，以便快速访问。

只需将鼠标悬停在位置上，点击出现的书签图标，即可将其保存。 您标记的位置将会显示在*已保存*标签中。

![保存的位置](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## 排除项

![排除项](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN 有几个独特的功能，其中之一就是*排除项*。 默认情况下，AdGuard VPN 会在所有网站和应用程序中运行，但排除列表中的除外。 用户也可以切换到其他模式，这样 AdGuard VPN 就只能在排除列表中的网站和应用程序上运行。

![排除项屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

用户可以将网站手动添加到排除项列表，或者在流行服务的列表里选择特定的网站。 这些名单分为八个类别，包括社交网络、通信、视频和音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 这些服务中的任何一项都可以一键添加到排除项中！ 在用户启用选择模式的情况下，本功能特别好用。

排除项列表可以轻松配置。 如果用户添加了一个域名及其一些子域，它们将在根域中被分组。 添加根域名时（`example.com`），其掩码也会被添加（`*.example.com`）。

:::info 已添加到排除项的浏览器

从 2.4 版本开始，当 VPN 仅针对选定的应用程序和网站激活时，所有浏览器都会自动添加到排除项列表中。 这一变化为那些经常感到困惑、不知道是否应将浏览器视为应用程序的用户带来了更多便利。 它适用于下列条件：

- 用户首次安装 AdGuard VPN
- 用户未修改 v2.4 之前的排除设置

:::

如果您已经添加了服务，改变或删除一些项目后，想要还原设置，只需在域名旁边按*重置回默认值* ，这个操作将恢复任何缺失的域名并勾选所有的复选框。

此外，现成的排除项列表可以传输到被安装 AdGuard VPN 的其他设备。 要导出排除项，请按照以下四步说明进行操作：

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 Mac 设备导入到 iPhone 设备，确保先将 `.zip` 文件发送到手机上。
4. 在要导入存档的设备/浏览器上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。 完成！

:::note

其他设备上的存档文件同样可以导入到 Mac 版 AdGuard VPN 上。

:::

## 统计数据

![统计数字界面](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

统计信息屏幕提供有关位置和应用程序所消耗的流量、最常用的位置和应用程序的详细信息。 查看 AdGuard VPN Mac 版的每日、每月或整个使用时间的数据。

重要的是，所有数据都存储在设备上，因此除了您之外没有其他人可以访问这些数据。 统计功能仅供 AdGuard VPN 的订阅用户使用。

## 支持

![支持屏幕](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

第四个标签是「*支持*」。 在[常见问题](https://adguard-vpn.com/welcome.html#faq)或[知识库](/)部分中查找疑问的答案，如果您遇到问题请报告错误，或[在任意平台上讨论 AdGuard](https://adguard.com/discuss.html)。 请随时[留下有关我们服务](https://surveys.adguard.com/vpn_mac/form.html)的反馈意见，我们将不胜感激。

## 设置

![设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

最后是「设置」标签。 在「*关于程序*」部分，用户可以查看 AdGuard VPN 的当前版本，检查更新，访问我们的官网，并熟悉 AdGuard 的 EULA（最终用户许可协议）和隐私政策。 在「*关于许可证*」部分，可以从免费升级到无限制，管理订阅，或注销。 最重要的是，用户可以从这里访问「*常规设置*」。

### 应用程序设置

![应用程序设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

前四个基本功能提高应用程序的用户友好性，即 *Kill Switch*、 *自动更新*、 *随系统启动自动运行 AdGuard VPN* 和*在应用程序启动时自动连接*。 此外，用户可以在浅色、深色和系统主题之间进行选择。系统主题与您 Mac 上的主题相匹配。

您还可以允许 AdGuard VPN 收集和发送匿名崩溃报告、技术和交互数据，以帮助我们改进应用程序。 最后，用户还可以从 Mac 导出日志。 如果您想将日志附加到您的消息以提供客服支持，本功能很有用。

### DNS 服务器

![DNS 服务器](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

可以在此设置一个或多个 DNS 服务器。 如果您不想依赖 ISP 提供的默认 DNS 服务器，这将非常有用。 从流行的 DNS 服务列表中选择一个或手动添加自定义服务器。 我们建议用户添加 AdGuard DNS。它不仅可以加密用户的 DNS 流量，还可以识别对恶意网站的请求并将它们重定向到“黑洞”。

### 高级设置

![高级设置](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 日志记录级别

软件只有两个日志记录级别，但我们强烈建议用户使用第一个默认级别。 仅在咨询我们的技术支持后才应设置第二个选项（扩展日志记录）来记录奇怪的程序行为。 如果启用了扩展日志记录级别，请确保在记录日志后切换到默认级别。

#### 隐藏菜单栏的图标

虽然这个选项位于「*高级设置*」，但用户可以毫不犹豫启用它。 用户可以从菜单栏中隐藏 AdGuard VPN 图标。这不会阻止应用程序在后台运行。

##### AdGuard VPN 协议

![选择 VPN 协议](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.7/protocol_en.png)

AdGuard VPN 协议默认使用动态 VPN 协议选择（「*自动选择*」选项）。 这意味着 AdGuard VPN 能自动判断 HTTP2/TLS 或 HTTP3/QUIC 哪种协议可提供最佳性能，并立即切换至该协议。 这样可以提升 VPN 的连接速度和稳定性，在 VPN 用法受限或不稳定的地区尤其有帮助。

如果您愿意，可以将 AdGuard VPN 切换为仅使用 HTTP2/TLS 或 HTTP3/QUIC 协议，而不是「*自动选择*」。 每种协议都有其优点，但最佳选择可能会因您的所在地、网络状况，甚至所连接的服务器而有所不同。
