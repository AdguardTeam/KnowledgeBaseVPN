---
title: 功能概述
sidebar_position: 1
---

## 什么是 iOS版 AdGuard VPN？

VPN 可以让用户与互联网上另一处网络创建安全连接。 它将用户的电脑或移动设备连接到服务器，并让用户可以使用“掩护”IP 地址浏览网络。 如果 VPN 服务器位于另一个国家/地区，那么用户就像是从该国家/地区建立的网络连接。 [详细了解](/general/how-vpn-works) VPN 的工作原理。

AdGuard VPN 具有多种功能：

- 隐藏用户的真实位置帮助保持匿名性
- 更改用户的 IP 地址避免他人跟踪您的个人数据
- 加密用户的流量防止被诈骗者访问数据
- 让用户自己配置在哪里启用或关闭 VPN（排除项功能）

适用于 iOS 的 AdGuard VPN 下一个优势是我们自建的 VPN 协议。 此协议比其他 VPN 协议更难检测，而且即便在网络连接较差时也很稳定。 [点此访问](/general/adguard-vpn-protocol)有关 AdGuard VPN 协议的更多信息。

## 如何使用 AdGuard VPN iOS 版

要使用 AdGuard VPN iOS 版，首先用户需要登录个人 [AdGuard 账号](https://my.adguard.com/)。 您可以直接使用您的 AdGuard 账号信息登录，或通过 Google、Apple ID 或 Facebook（仅在您的 AdGuard 账号使用相同的电子邮件地址注册的情况下）登录。

如果您还没有 AdGuard 账号，请您先创建一个。

使用 AdGuard VPN 非常简单。 在首页上，有一个*连接/断开连接*的按钮和一个可用的服务器列表。 每一台服务器旁边显示地理位置（某个国家和城市）和 Ping 值。 Ping 值表示服务器的响应时间（毫秒）。 选择 ping 值为 22 ms 的服务器表示发送到该服务器的数据包会在 22 ms 后返回（再次收到）。 在 AdGuard VPN 里，用户可以在数十个国家的 50 多个地点中选择服务器位置。

![主界面和位置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## 排除项列表

您可以点击下面中间的按钮找到排除项。 此处您可以看到两个排除项列表，即常规模式和选择模式的列表。 在常规模式下，VPN 适用于排除网站以外的所有网站。 在选择性模式下则相反，VPN 仅适用于列表中的网站。 您可以通过两种方式将网站的域名（如 `google.com`）或子域名（如 `*.google.com`）添加到排除项中：在应用程序中手动输入，或直接从浏览器中点击分享按钮并在打开的列表中选择 AdGuard VPN。

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

另一个好用的功能是导入/导出排除项列表。 用户可以按照以下四个步骤进行操作：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `exclusions.zip` 档案将被下载。

2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。

3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 iOS 设备导入到 Mac 设备，确保先将 `.zip` 文件发送到 Mac 设备。

4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

![导入/导出排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## 应用程序设置

要访问应用程序设置，请您：

1. 点击 AdGuard VPN 应用程序主屏幕右下角的设置按钮 (⚙)
2. 点击「*应用程序设置*」。

在设置中，用户可以使用不同的选项按自己的需求配置 AdGuard VPN iOS 版。操作模式、DNS 服务器、Wi-Fi 自动保护、颜色主题和高级设置等选项。

![应用设置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### 操作模式

适用于 iOS 的 AdGuard VPN 可以在两种模式下运行：**常规**和**整合**。

在**常规**模式下使用 [AdGuard VPN 协议](/general/adguard-vpn-protocol)。本协议提供速度和安全性的最佳组合。 在此模式下，AdGuard VPN 无法与 [AdGuard 广告拦截程序 iOS 版](https://adguard.com/kb/adguard-for-ios/overview/)同时运行。

在**整合**模式下，AdGuard VPN 能够通过 IPSec 协议与 AdGuard Ad Blocker iOS 版同时运作。 该协议也是安全的，但速度稍慢且更容易检测。 您不需要执行任何其他操作设置整合：只需安装这两个应用程序并切换到此模式即可。

:::注意

在**整合**模式下，您不能使用排除项功能或选择 DNS 服务器。

:::

### DNS 服务器

DNS 服务器可将域名或主机名（例如 example.com 或 www.example.com）转换为浏览器可以理解的 IP 地址。 AdGuard VPN iOS 版提供多个 DNS 服务器，每一个质量都无与伦比。 例如，AdGuard DNS 可以删除广告并防止您的设备被追踪，而 AdGuard DNS 家庭保护则将 AdGuard DNS 的功能与安全搜索和成人内容拦截相结合。 不同 DNS 供应商的 DNS 服务器运行速度有快有慢，主要取决于您的位置、ISP 和其他因素。 选择最适合您的服务器。 您可以[了解有关 DNS 的更多信息](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)及特点。

![DNS 服务器界面 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi 自动保护

当设备连接 Wi-Fi 网络时，VPN 将自动启用。

### 主题

您可以选择应用程序的系统默认、深色或浅色主题（iOS 13 及更高版本中可用）。

### 高级设置

您可以在「*高级设置*」中找到日志记录级别和诊断信息这两部分内容。 关于第一个选项，除非我们的支持团队要求，否则不建议启用扩展记录级别。 诊断信息是指存储在本地的关于设备和连接的技术信息（IP 地址、ID、Ping值等等），您可以在出现任何技术问题时发送给我们。

## 快速操作（适用于 iOS 13 或更高版本）

要访问此功能，请点击并长按应用图标，然后松开手指。 您会看到如下快速操作：连接/断开、选择位置、编辑主屏幕和删除应用。

![快速操作 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## 支持

应用程序中有各种帮助功能（按右下角的「*设置*」可找到「*支持*」）：您可以找到「常见问题」、「报告错误」、「反馈意见」、在社交网络或 GitHub 上「讨论您的问题和建议」、在 App Store 为 AdGuard VPN iOS 版「评分」，以及「导出日志」。

![支持 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## 订阅

如果您使用的是免费版的 AdGuard VPN，在底部的标签栏上会出现第四个箭头标签。 在此部分中，您可以简要了解付费版的主要优势，并可以购买订阅。

![订阅 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
