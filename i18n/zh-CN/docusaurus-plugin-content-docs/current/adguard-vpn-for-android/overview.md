---
title: 功能概述
sidebar_position: 1
---

## 什么是 Android版 AdGuard VPN?

VPN 是一个在用户每次浏览互联网时提供安全性和匿名性的理想工具。 [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. 通过这种方式，数据的保密性以及用户的匿名性得以保留，因为第三方观察者看到的是 VPN 服务器的 IP 地址而不是用户的实际 IP。

**VPN 经常用于以下几项：**

- 即使在用户连接公共 Wi-Fi 时也能保证个人数据安全
- 通过掩盖 IP 地址防止用户在线活动追踪
- 隐藏真实的地理位置以保持用户的匿名性

安卓版的 AdGuard VPN 可以为用户做这一切，甚至提供一些独特的功能。 要了解为什么 AdGuard VPN 是用户的不二之选，请阅读[这篇文章](/general/why-adguard-vpn)。

## 如何开始使用安卓版的 AdGuard VPN

首先，从 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) 下载 AdGuard VPN 并登录 AdGuard 账号。 如果用户没有个人账号，请[建立一个](https://auth.adguard.com/login.html)。 用户可以用 AdGuard 账号信息登录应用程序。 如果您注册 AdGuard 账号时使用与 Google 和 Facebook 同一个电子邮件地址，您也可以通过它们登录。

## 主屏幕

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

每个服务器旁边都有位置和 Ping。Ping 是指服务器的响应时间。 The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## 排除项

我们已尽一切努力让您轻松管理您的网站和应用排除项列表。 AdGuard VPN 将只在您选择的应用程序或网站上运作。

### 排除项列表

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. 要转到*排除项*部分，请点击屏幕底部左侧第二个图标。

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

用户可以通过三种方式将网站的域名（如 `google.com`）或子域名（如 `*.google.com`）添加到*排除项*中：在应用程序中手动输入，直接从浏览器中点击*共享*按钮，在下面打开的列表中选择 AdGuard VPN，或者从按类别划分的内置服务列表中。

![排除项](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::注意

在手动添加域名方面有一些细微差别。 例如，如果用户手动排除域名 `yahoo.com`，所有 `*.yahoo.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `yahoo.jp` 或`yahoo.fr`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。 在这种情况下，使用内置的服务列表更安全，因为我们把与每个平台相关的所有子域都放在那里。

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 好消息是：用户可以随时返回服务列表的默认视图，以防您从那里删除或禁用任何网域。

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

另一个好用的功能是*导入/导出排除项*。 一共只有四个步骤就能导入/导出排除项：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `adguard_vpn_exclusions.zip` 档案将被下载。
2. There are two `.txt` files inside the archive, one for each of the lists. 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 Windows 设备导入到安卓设备，确保先将 `.zip` 文件发送到安卓设备。
4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

![导入/导出 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

正如我们上面提到的，不仅是网站可以很容易地添加到排除项中。 Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 设置

用户可以通过按屏幕右下方的齿轮图标转到*设置*。 第一部分是*应用程序设置*：根据自己的需求选择不同的功能配置 AdGuard VPN 安卓版。

![应用设置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 自动启动

将滑块拖动到右边可以在设备启动后启用 AdGuard VPN 自动启动。

### DNS 服务器

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. 用户也可以添加一个自定义 DNS 服务器。

### 自动保护

当您的设备连接到蜂窝网络或 Wi-Fi 网络时，这项功能会自动启用AdGuard VPN。

### Kill Switch

用户可以按照屏幕上的简单指示，在自己的安卓设备上设置 Kill Switch 功能。 为什么要开启 Kill Switch？ 如果您在使用移动网络或公共 Wi-Fi 时，由于某种原因，用户的 VPN 连接突然中断，Kill Switch 将自动终止互联网连接，不让别人窃取您的个人信息。

请注意，如果 Kill Switch 处于开启状态，「*应用程序设置*」和 「*排除项*」将不起作用。

### 主题

您可以选择系统默认、黑暗或浅色的应用程序模式。

![主题 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### 高级设置

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::注意

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

接下来的两个部分是*记录级别*和*诊断信息*。 关于第一个选项，除非我们的支持团队要求，否则不建议启用扩展或极端记录级别。 诊断信息，本地存储的关于设备和连接的技术信息（IP 地址、ID、Ping等等），在出现任何技术问题时，可以发送给我们。

*高级设置*的最后一个选项是*低级设置*。 我们建议用户不进入这一部分，除非您了解技术方面或被我们的支持团队要求设置它们。 这里可以在 VPN 接口上启用 TUN 接口记录或 IPv6 协议，选择一个代理服务器端口或应该使用的互联网协议版本。

:::兼容性

*启用 IPv6* 选项仅适用于支持 IPv6 的网络。

:::

### 支持

在*支持*部分，您可以留下反馈意见，报告一个错误，或导出日志和系统信息，以便进一步提交给客服支持。
