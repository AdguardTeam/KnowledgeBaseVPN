---
title: 功能概述
sidebar_position: 1
---

## 什么是 Windows版 AdGuard VPN？

A VPN, acronym for "Virtual Private Network", is a service that makes your Internet connection safe and helps you stay anonymous online. 它是如何工作的呢？ 当您不使用 VPN 访问网页时，您的 ISP（网络业务提供商）会检测到您。 他们会知道您在哪个页面以及您的搜索内容，还会收集出售这些数据。 不仅如此，您访问的网站也可以跟踪您的活动。 当您启用 VPN 应用程序后，它会通过加密隧道将您的流量重定向到远程 VPN 服务器，从而保护您的隐私。这样 ISP 就不会知道您向何处发送请求，站点也不会知道您来自哪里。

**Windows版 AdGuard VPN 工作原理**

* 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol.mdx)，您可以有快速、安全的连接。

* 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 正如上文所说，使用 AdGuard VPN，您的所有流量都会通过加密隧道到达 VPN 服务器。 因此，从外部看来，您设备的 IP 地址就和 VPN 服务器的 IP 地址相同。

* 隐藏您的真实位置。 选择任意一个 AdGuard VPN 服务器，您可以立即“传送”到其对应位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

Windows 版 AdGuard VPN 有很多优点，为此我们专门[写了一篇文章](/general/why-adguard-vpn.md)来进行阐述。 不过，这里我们希望更多地着眼于程序本身及其工作原理。

## 如何开始使用 Windows 版 AdGuard VPN

要开始使用 Windows版 AdGuard VPN，请从[我们的网站](https://adguard-vpn.com/welcome.html)下载此应用程序。 The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. 您可以决定是否允许 AdGuard 收集您应用使用情况的匿名数据。 最后，安装程序会要求您通过 [AdGuard 账号](https://auth.adguard.com/login.html)或社交平台（Apple、Google、Facebook）登录。 就这样，您现在可以使用 Windows 版 AdGuard VPN 了。

## 主界面

![AdGuard VPN Windows版主界面](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**主屏幕**上最引人注目的项目是 AdGuard VPN 连接/断开按钮。 按钮上面用户可以看到应用程序正在运行的[模式](#exclusions)，在下面显示连接的服务器。 在屏幕右侧，您可以找到所有可用的服务器位置。 The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

在屏幕顶部有一个带有四个标签的导航面板： 「**主页**」、「**排除项**」、「**支持**」、「**设置**」。

## 排除项

适用于 Windows 的 AdGuard VPN 可以在两种模式下运行：「**常规模式**」和「**选择模式**」。 这是什么意思？ 如果您想让应用程序在除少数站点外的所有站点上运作，请激活「**常规模式**」，并列出您想从隧道中排除的网站。 **选择模式**具有相反的效果：它仅在排除列表中指定的网站上启动 AdGuard VPN。 请注意，这两种模式的排除项列表是相互独立的。

![排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

您可以通过输入网站的域名将网站**手动**添加到排除项。 该应用程序还为您提供了「**从列表**」中选择热门网站的选项。

![添加排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![从列表中添加排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 手动添加域名时，用户应该考虑到一些细微差别。 例如，如果用户手动排除域名 `google.com`，所有 `*.google.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `google.es` 或`google.it`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。

我们建议使用**从列表中**选项。 网站分为八个类别，包括社交网络、通信、视频和音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 我们将最受欢迎的服务放在列表内，包括与每个平台相关的所有域名和子域名。

### 导入/导出排除项列表

要从 AdGuard VPN Windows 版导出排除项列表到您的计算机，请点击「**导出排除项**」，选择将存储列表的文件夹并点击「**保存**」。 将下载一个 `exclusions.zip` 存档和两个 `.txt` 文件，每个列表有一个，包括**常规**和**选择**模式的列表。 您可以通过添加新排除项或删除旧排除项来编辑它们。

要将排除项列表传输到另一台设备，请将 `.zip` 文件发送到相应的目标设备。 在您要导入排除项列表的存档的设备上打开 AdGuard VPN，点击「*排除项*」，然后点击「*导入排除项*」并选择之前发送的存档。

## 设置

![设置](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

应用程序标签栏的第四个标签包含可帮助用户自定义应用程序的部分。 让我们仔细看看其中的两个：「**应用程序设置**」和「**应用程序排除项**」。

### 应用程序设置

![应用程序设置](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

在**应用程序设置**里，用户可以设置应用程序的语言，也可以启用「**Kill Switch**」，如果您的 VPN 连接失败，本功能将阻止对互联网的访问。 如果您发现自己在连接到公共 Wi-Fi 或移动网络时没有 VPN 保护，则需要断开连接防止黑客窃取您的个人数据。

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. 在这里您还可以将主题更改为 「**浅色**」，「**跟随系统**」，或「**深色**」。

页面底部有两个部分：「**DNS 服务器**」和「**高级设置**」。

#### DNS 服务器

「**DNS 服务器**」标签允许用户添加自己的 DNS 服务器。 用户可以设置任何提供商的 DNS 服务器。 We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### 高级设置

在不更改高级设置的情况下，用户完全可以正常使用 AdGuard VPN Windows版 ，但如果您愿意花时间了解设置的作用，高级设置将会很有用。

**操作模式**

尽管有两种运行模式，包括 VPN 和 SOCKS5，我们建议您只使用默认选择的模式，即 VPN。 当用户启用 **VPN 模式**时，您设备的所有流量都将通过 AdGuard VPN 发送，而在 **SOCKS5 模式**下，AdGuard VPN 使用本地代理服务器，其他应用程序可以使用它来重定向它们的流量。

**日志记录级别**

一共有两个记录级别：「**默认记录**」和「**记录全部**」。 默认情况下启用第一个选项。 只有在我们的支持团队要求您这样做时，才应启动「**记录全部**」选项。 在本模式下长时间使用应用程序会导致电池消耗增加。

所有日志记录在设备上本地存储。必要的话，您可以将日志记录发给我们的技术支持团队。

**使用 QUIC 协议**

这是一项实验性功能，使 AdGuard 能够使用高级 QUIC 加密协议。 此功能有许多优点，但最值得注意的是，它可以在非理想的条件下改善连接质量，例如，在用户使用移动互联网或连接到公共 Wi-Fi 网络时。

### 应用程序排除项

![将应用程序添加到排除项中](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN 不仅加密浏览器的流量，还加密您计算机上安装的其他应用程序的流量。 如果用户想从 AdGuard 的隧道中排除某些应用程序，请将它们添加到「**应用程序排除项**」的列表。

## 其他标签

### 关于

「**关于程序**」的标签提供有关当前版本的 Windows版 AdGuard VPN 信息、更新按钮和 AdGuard VPN 官网、论坛、EULA（最终用户许可协议）和隐私政策的链接。

### 账号

在这里您可以查看关于许可证状态的信息，以及您个人 AdGuard 账号的链接。用户可以在账号里管理当前订阅或购买新的订阅。

## 支持

此选项卡旨在解决用户的问题：您可以在此处找到常见问题解答页面的链接、报告错误或留下反馈意见，以及在支持团队要求时导出日志。
