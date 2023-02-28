---
title: 功能概述
sidebar_position: 1
---

## 什么是 Android版 AdGuard VPN?

VPN 是一个在用户每次浏览互联网时提供安全性和匿名性的理想工具。 [它的工作原理是什么？](/general/how-vpn-works.md)不谈技术细节，我们可以说，VPN 在用户的电脑或移动设备和远程 VPN 服务器之间建立一个安全的加密隧道。 通过这种方式，数据的保密性以及用户的匿名性得以保留，因为第三方观察者看到的是 VPN 服务器的 IP 地址而不是用户的实际 IP。

**VPN 经常用于以下几项：**

* 即使在用户连接公共 Wi-Fi 时也能保证个人数据安全
* 通过掩盖 IP 地址防止用户在线活动追踪
* 隐藏真实的地理位置以保持用户的匿名性

安卓版的 AdGuard VPN 可以为用户做这一切，甚至提供一些独特的功能。 要了解为什么 AdGuard VPN 是用户的不二之选，请阅读[这篇文章](/general/why-adguard-vpn.md)。

## 如何开始使用安卓版的 AdGuard VPN

首先，从 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) 下载 AdGuard VPN 并登录 AdGuard 账号。 如果用户没有个人账号，请[建立一个](https://auth.adguard.com/login.html)。 用户可以用 AdGuard 账号信息登录应用程序。 如果您注册 AdGuard 账号时使用与 Google 和 Facebook 同一个电子邮件地址，您也可以通过它们登录。

## 主屏幕

主屏幕上有两个栏，反映应用程序的状态（连接/断开连接）和选择的排除模式（[常规/选择](#lists-of-exclusions)）。 在同一个屏幕上，还有一个*连接/断开连接*的按钮和一个可用的服务器列表。

每个服务器旁边都有位置和 Ping。Ping 是指服务器的响应时间。 数值越低，用户的连接就越快。 最快的响应时间总是显示在列表的顶部，包括位于几十个国家的五十多个服务器位置。 用户可以通过点击*连接/断开连接*按钮或选择一个节点连接到最快的服务器。

## 排除项

我们已尽一切努力让您轻松管理您的网站和应用排除项列表。 AdGuard VPN 将只在您选择的应用程序或网站上运作。

### 排除项列表

排除项列表允许用户选择应启用 VPN 和禁用 VPN 的网站。 要转到*排除项*部分，请点击屏幕底部左侧第二个图标。

有两种模式：*在常规模式下*，排除项列表内的网站被排除，而*在选择性模式下*，AdGuard VPN 仅在列表内的网站上运作。

用户可以通过三种方式将网站的域名（如 `google.com`）或子域名（如 `*.google.com`）添加到*排除项*中：在应用程序中手动输入，直接从浏览器中点击*共享*按钮，在下面打开的列表中选择 AdGuard VPN，或者从按类别划分的内置服务列表中。

![排除项](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> 在手动添加域名方面有一些细微差别。 例如，如果用户手动排除域名 `yahoo.com`，所有 `*.yahoo.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `yahoo.jp` 或`yahoo.fr`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。 在这种情况下，使用内置的服务列表更安全，因为我们把与每个平台相关的所有子域都放在那里。

由于用户可以在服务列表中启用子域，我们增加了显示每个服务状态的方框，您可以在*排除项*的主屏幕上每个服务名称左边看到它们：**完全启用**状态用绿色背景上的白色复选标记，**完全禁用**则用灰色方框，以及**部分启用**，是指一个或多个参数被改变，用白色背景上的绿色方框。 好消息是：用户可以随时返回服务列表的默认视图，以防您从那里删除或禁用任何网域。

![排除项](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

另一个好用的功能是*导入/导出排除项*。 一共只有四个步骤就能导入/导出排除项：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `adguard_vpn_exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，*常规模式*的列表和*选择模式*的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 Windows 设备导入到安卓设备，确保先将 `.zip` 文件发送到安卓设备。
4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

![导入/导出](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### 应用程序设置

正如我们上面提到的，不仅是网站可以很容易地添加到排除项中。 用户可以选择哪些应用程序需要通过 AdGuard VPN 发送流量，哪些不需要。 点击屏幕底部的*排除项列表*图标旁边的图标，前往应用程序设置。 AdGuard VPN 默认适用于所有应用程序，但用户可以在列表中的任何应用程序旁边点击关闭，并为其禁用 AdGuard VPN。

如果启用与 AdGuard 的*兼容模式*，您只能通过 AdGuard 广告拦截程序管理应用程序。 因此，当您点击按钮后，AdGuard 应用程序将被启用。

![应用设置](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 设置

用户可以通过按屏幕右下方的齿轮图标转到*设置*。 第一部分是*应用程序设置*：根据自己的需求选择不同的功能配置 AdGuard VPN 安卓版。

![应用设置](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 自动启动

将滑块拖动到右边可以在设备启动后启用 AdGuard VPN 自动启动。

### DNS 服务器

The purpose of the [Domain name system](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. DNS 服务器执行此操作。 安卓版 AdGuard VPN 提供几个 DNS 服务器，每个都有无与伦比的质量。 For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. 用户也可以添加一个自定义 DNS 服务器。

### 自动保护

当您的设备连接到蜂窝网络或 Wi-Fi 网络时，这项功能会自动启用AdGuard VPN。

### Kill Switch

用户可以按照屏幕上的简单指示，在自己的安卓设备上设置 Kill Switch 功能。 为什么要开启 Kill Switch？ 如果您在使用移动网络或公共 Wi-Fi 时，由于某种原因，用户的 VPN 连接突然中断，Kill Switch 将自动终止互联网连接，不让别人窃取您的个人信息。

请注意，如果 Kill Switch 处于开启状态，「*应用程序设置*」和 「*排除项*」将不起作用。

### 主题

您可以选择系统默认、黑暗或浅色的应用程序模式。

![主题](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### 高级设置

在「*高级设置*」中，用户可以找到五个部分。 您可以切换上部方块中的开关*帮助我们变得更好*。 这样您允许 AdGuard VPN 收集崩溃报告、技术和互动数据。 这些信息将以匿名方式传送。

*操作模式*部分允许用户在三个选项中选择一个，即 VPN、代理和兼容模式。 在 *VPN 模式*下，所有流量都会自动通过 AdGuard VPN 路由。 When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy server which can be used by other apps to route their traffic through it. 只要您了解如何操作，才能选择该选项。 启用的*兼容模式*允许 AdGuard VPN 和 AdGuard 广告拦截程序一起工作。

> 请注意，AdGuard VPN 的一些功能在*兼容模式*下被禁用，比如 DNS 服务器选择、Kill Switch 和自动保护。 此外，要管理应用程序的隧道，您应该打开 AdGuard 广告拦截程序。

接下来的两个部分是*记录级别*和*诊断信息*。 关于第一个选项，除非我们的支持团队要求，否则不建议启用扩展或极端记录级别。 诊断信息，本地存储的关于设备和连接的技术信息（IP 地址、ID、Ping等等），在出现任何技术问题时，可以发送给我们。

*高级设置*的最后一个选项是*低级设置*。 我们建议用户不进入这一部分，除非您了解技术方面或被我们的支持团队要求设置它们。 这里可以在 VPN 接口上启用 TUN 接口记录或 IPv6 协议，选择一个代理服务器端口或应该使用的互联网协议版本。

### 支持

在*支持*部分，您可以留下反馈意见，报告一个错误，或导出日志和系统信息，以便进一步提交给客服支持。
