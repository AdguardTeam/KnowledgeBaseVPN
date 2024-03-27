---
title: 功能概述
sidebar_position: 1
---

## 什么是 iOS版 AdGuard VPN？

VPN 可以让用户与互联网上另一处网络创建安全连接。 It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN 具有多种功能：

- 隐藏用户的真实位置帮助保持匿名性
- 更改用户的 IP 地址避免他人跟踪您的个人数据
- 加密用户的流量防止被诈骗者访问数据
- 让用户自己配置在哪里启用或关闭 VPN（排除项功能）

适用于 iOS 的 AdGuard VPN 下一个优势是我们自建的 VPN 协议。 此协议比其他 VPN 协议更难检测，而且即便在网络连接较差时也很稳定。 [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## 如何使用 AdGuard VPN iOS 版

要使用 AdGuard VPN iOS 版，首先用户需要登录个人 [AdGuard 账号](https://my.adguard.com/)。 您可以直接使用您的 AdGuard 账号信息登录，或通过 Google、Apple ID 或 Facebook（仅在您的 AdGuard 账号使用相同的电子邮件地址注册的情况下）登录。

If you don’t have an AdGuard account yet, you will have to create it first.

使用 AdGuard VPN 非常简单。 On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![主界面和位置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. 找到相应的部分并单击「*导出*」按钮。 `exclusions.zip` 档案将被下载。

2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 例如，如果您将排除项列表从自己的 iOS 设备导入到 Mac 设备，确保先将 `.zip` 文件发送到 Mac 设备。

4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![导入/导出排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS 服务器

AdGuard VPN iOS 版提供多个 DNS 服务器，每一个质量都无与伦比。 例如，AdGuard DNS 可以删除广告并防止您的设备被追踪，而 AdGuard DNS 家庭保护则将 AdGuard DNS 的功能与安全搜索和成人内容拦截相结合。 不同 DNS 供应商的 DNS 服务器运行速度有快有慢，主要取决于您的位置、ISP 和其他因素。 选择最适合您的服务器。 您可以[了解有关 DNS 的更多信息](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)及特点。

![DNS 服务器界面 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### 主题

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### 高级设置

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### 操作模式

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::注意

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![快速操作 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## 支持

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![支持 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![订阅 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
