---
title: 功能概述
sidebar_position: 1
---

## 什么是 iOS版 AdGuard VPN？

VPN 可以让用户与互联网上另一处网络创建安全连接。 它将用户的电脑或移动设备连接到服务器，并允许用户使用其他 IP 地址浏览网络。 因此，如果 VPN 服务器位于某一个其他国家，那么您本身也看起来从那个国家连接到互联网。 [详细了解](/general/how-vpn-works.md) VPN 的工作原理。

AdGuard VPN 有以下的功能：

- 隐藏用户的真实位置帮助保持匿名性
- changes your IP address to protect your data from tracking
- 加密用户的流量不让诈骗者访问您的数据
- 让用户自己配置在哪里启用或关闭 VPN（排除项功能）

适用于 iOS 的 AdGuard VPN 下一个优势是我们自建的 VPN 协议。 我们的协议有两个主要优点：与其他 VPN 协议相比，它难以检测，并且即使在互联网连接不佳的情况下也能稳定运行。 用户可以在[这篇文章](../general/adguard-vpn-protocol.mdx)中了解有关 AdGuard VPN 协议的更多信息。

## 如何使用 AdGuard VPN iOS 版

要使用 AdGuard VPN iOS 版，首先用户需要登录个人 [AdGuard 账号](https://my.adguard.com/)。 您可以直接使用您的 AdGuard 账号信息登录，或通过 Google、Apple ID 或 Facebook（仅在您的 AdGuard 账号使用相同的电子邮件地址注册的情况下）登录。

如果您还没有 AdGuard 账号，请您先创建一个。

使用 AdGuard VPN 非常简单。 在首页上，有一个*连接/断开连接*的按钮和一个可用的服务器列表。 每一台服务器旁边显示地理位置（某个国家和城市）和 Ping 值。 Ping 是指服务器的响应时间（以毫秒为单位）。 例如，选择 Ping 值为 22 毫秒的服务器，意味着信号将在 22 毫秒内到达服务器并返回。 因此，数值越低，用户的连接速度就越快。 在 AdGuard VPN 里，用户可以在数十个国家的 50 多个地点中选择服务器位置。

![主屏幕和位置](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## 排除项列表

用户可以点击下方的中间按钮查看排除项功能。 在排除项部分里用户可以看到两个排除项列表，即常规模式和选择模式的列表。 在常规模式下，除了添加到列表的网站外 VPN 在所有网站上运行。 在选择模式下，VPN 只在列表内的网站上运行。 用户可以通过三种方式将网站的域名（如 `google.com`）或子域名（如 `*.google.com`）添加到排除项中：在应用程序中手动输入，或直接从浏览器中点击*共享*按钮，在下面打开的列表中选择 AdGuard VPN。

![排除项](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

另一个好用的功能是导入/导出排除项列表。 用户可以按照以下四个步骤进行操作：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并点击*导出*按钮。 `exclusions.zip` 档案将被下载。

2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。

3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 iOS 设备导入到 Mac 设备，确保先将 `.zip` 文件发送到 Mac 设备。

4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，点击*导入*按钮并选择存档。

![导入/导出排除项](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## 应用程序设置

要访问应用程序设置，请您：

1. 点击 AdGuard VPN 应用程序主屏幕右下角的设置按钮 (⚙)
2. 点击「*应用程序设置*」。

在设置中，用户可以使用不同的选项按自己的需求配置 AdGuard VPN iOS 版。操作模式、DNS 服务器、Wi-Fi 自动保护、颜色主题和高级设置等选项。

![应用程序设置](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### 操作模式

适用于 iOS 的 AdGuard VPN 可以在两种模式下运行：**常规**和**整合**。

在**常规**模式下，使用 [AdGuard VPN 协议](../general/adguard-vpn-protocol.mdx)。本协议提供速度和安全性的最佳组合。 启用常规模式时，AdGuard VPN 无法与 [AdGuard 广告拦截程序 iOS 版](https://adguard.com/kb/adguard-for-ios/overview/)同时运行。

在**选择**模式下，AdGuard VPN 能够通过使用 IPSec 协议与 AdGuard 广告拦截程序 iOS 版同时运作。 该协议也是安全的，但速度稍慢且更容易检测。 您不需要执行任何其他操作设置整合：只需安装这两个应用程序并切换到此模式即可。
> 请注意，在**整合**模式下，您不能使用排除项功能或 DNS 服务器功能。

### DNS 服务器

域名系统（DNS）的主要目的是，将网站名称转换成浏览器能识别的 IP 地址。 DNS 服务器执行此操作。 iOS 版 AdGuard VPN 提供几个 DNS 服务器，每个都有无与伦比的质量。 例如，AdGuard DNS 可以删除广告并防止用户的设备被追踪，而 AdGuard DNS 家庭保护则将 AdGuard DNS 的功能与安全搜索和成人内容拦截相结合。 不同 DNS 供应商的 DNS 服务器也可能工作得更快或更慢，这取决于用户的位置、ISP 和其他因素。 选择最适合您的服务器。 用户可以在[本文](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)中找到有关 DNS 及其特征的更多信息。

![DNS 服务器屏幕](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi 自动保护

当设备连接 Wi-Fi 网络时，VPN 将自动启用。

### 主题

用户可以选择应用程序的系统默认、深色或浅色主题（适用于 iOS 13 及更高版本）。

### 高级设置

在*高级设置*中，用户可以找到两个部分，即日志记录级别和诊断信息。 关于第一个选项，除非我们的支持团队要求，否则不建议启用扩展记录级别。 诊断信息，本地存储的关于设备和连接的技术信息（IP 地址、ID、Ping等等），在出现任何技术问题时，可以发送给我们。

## 快速操作（适用于 iOS 13 或更高版本）

要访问此功能，请触摸并按住应用程序图标，然后松开手指。 您将会看到一个快速操作的列表。连接/断开与当前所选服务器的连接，选择位置以选择新的服务器位置。 当然，用户也可以访问所有的默认操作，如删除应用程序或移动应用程序的图标。

![快速操作](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## 支持

用户的成就感是我们的重中之重。 因此，应用程序中有各种“帮助”功能（按右下角的「*设置*」按钮，然后按「*支持*」）：您可以看到「常见问题」部分、「报告错误」、「留下反馈意见」、在我们的论坛、社交网络或 GitHub 上「讨论」您的问题和建议，在 App Store 为 AdGuard VPN iOS 版「评分」，以及「导出日志」。

![支持](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## 订阅

如果您使用的是免费版的 AdGuard VPN，在底部的标签栏上会有第四个带箭头图标的标签。 在本部分中，您将找到有关付费版主要优势的简要信息，并可以购买订阅。

![订阅](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
