---
title: 功能概述
sidebar_position: 1
---

## 什么是 iOS版 AdGuard VPN？

VPN 可以让用户与互联网上另一处网络创建安全连接。 It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [详细了解](/general/how-vpn-works) VPN 的工作原理。

AdGuard VPN has several functions:

- 隐藏用户的真实位置帮助保持匿名性
- 更改用户的 IP 地址避免他人跟踪您的个人数据
- encrypts your traffic and makes contents inaccessible to scammers
- 让用户自己配置在哪里启用或关闭 VPN（排除项功能）

适用于 iOS 的 AdGuard VPN 下一个优势是我们自建的 VPN 协议。 It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## 如何使用 AdGuard VPN iOS 版

要使用 AdGuard VPN iOS 版，首先用户需要登录个人 [AdGuard 账号](https://my.adguard.com/)。 您可以直接使用您的 AdGuard 账号信息登录，或通过 Google、Apple ID 或 Facebook（仅在您的 AdGuard 账号使用相同的电子邮件地址注册的情况下）登录。

如果您还没有 AdGuard 账号，请您先创建一个。

使用 AdGuard VPN 非常简单。 在首页上，有一个*连接/断开连接*的按钮和一个可用的服务器列表。 每一台服务器旁边显示地理位置（某个国家和城市）和 Ping 值。 The ping shows the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. 在 AdGuard VPN 里，用户可以在数十个国家的 50 多个地点中选择服务器位置。

![主界面和位置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## 排除项列表

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

另一个好用的功能是导入/导出排除项列表。 用户可以按照以下四个步骤进行操作：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并点击*「导出」*按钮。 `exclusions.zip` 档案将被下载。

2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。

3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 iOS 设备导入到 Mac 设备，确保先将 `.zip` 文件发送到 Mac 设备。

4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，点击*「导入」*按钮并选择存档。

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

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard Ad Blocker for iOS by using the IPSec protocol instead. 该协议也是安全的，但速度稍慢且更容易检测。 您不需要执行任何其他操作设置整合：只需安装这两个应用程序并切换到此模式即可。

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNS 服务器

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi 自动保护

VPN will automatically turn on when the device connects to a Wi-Fi network.

### 主题

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### 高级设置

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## 快速操作（适用于 iOS 13 或更高版本）

To access this feature, touch and hold the app icon, then lift your finger. You'll see quick actions: Connect/Disconnect, Select location, Edit Home Screen, and Remove app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## 支持

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## 订阅

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
