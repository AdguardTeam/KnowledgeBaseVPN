---
title: 功能概述
sidebar_position: 1
---

## 什么是 Windows版 AdGuard VPN？

VPN 是“虚拟专用网络”的缩写，该服务可保证您的互联网连接安全，并能使您可以匿名上网。 它是如何工作的呢？ 当您不使用 VPN 访问网页时，您的 ISP（网络业务提供商）会检测到您。 他们会知道您在哪个页面以及您的搜索内容，还会收集出售这些数据。 不仅如此，您访问的网站也可以跟踪您的活动。 当您启用 VPN 应用程序后，它会通过加密隧道将您的流量重定向到远程 VPN 服务器，从而保护您的隐私。这样 ISP 就不会知道您向何处发送请求，站点也不会知道您来自哪里。

## AdGuard VPN Windows 版的功能

- 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol)，您可以有快速、安全的连接。

- 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 正如上文所说，使用 AdGuard VPN，您的所有流量都会通过加密隧道到达 VPN 服务器。 因此，从外部看来，您设备的 IP 地址就和 VPN 服务器的 IP 地址相同。

- 隐藏您的真实位置。 选择任意一个 AdGuard VPN 服务器，您可以立即“传送”到其对应位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

AdGuard VPN Windows 版有很多优点，为此我们专门写了一篇[文章](/general/why-adguard-vpn)来进行阐述。 不过，这里我们会着眼于程序本身及其工作原理。

## 如何开始使用 AdGuard VPN Windows 版

要开始使用 Windows 版 AdGuard VPN，请从[我们的网站](https://adguard-vpn.com/welcome.html)下载此应用程序。 安装时间不会超过 1 分钟，然后您会看到一个对话框，此处您至少需要勾选实施用户协议和隐私政策条款的复选框。 您可以决定是否允许 AdGuard 收集您应用使用情况的匿名数据。 最后，安装程序会请求您通过 [AdGuard 账号](https://auth.adguard.com/login.html)或社交平台（Apple、Google、Facebook）进行登录。 就这样，您就可以使用 AdGuard VPN Windows 版了。

## 主界面

![AdGuard VPN Windows 版主界面](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**主屏幕**上最引人注目的内容就是 AdGuard VPN 连接/断开按钮。 按钮上方显示的是正在运行的[模式](#exclusions)，下方显示的是所连接的服务器。 在屏幕右侧，您可以看到所有可用的服务器位置。 最快的服务器位置，也就是延迟最小的位置，会显示在列表的顶部。

在屏幕顶部有一个含有四个标签的导航面板：「**主页**」、「**排除项**」、「**支持**」、「**设置**」。

## 排除项

AdGuard VPN Windows 版可以在两种模式下运行：「**常规模式**」和「**选择模式**」。 这是什么意思呢？ 如果您想让应用程序在除少数网站外的其他所有网站运行，请激活「**常规模式**」，并列出您想从隧道中排除的网站。 **选择模式**有相反的效果：它仅在排除列表里的网站中启动 AdGuard VPN。 请注意，这两种模式的排除列表是相互独立的。

![排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

您可以通过输入网站域名将网站**手动添加**到排除列表中。 本应用程序还可以让您**从列表**中选择热门网站。

![添加排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![在列表中添加排除项](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 手动添加域名时，用户应该考虑到一些细微差别。 例如，如果用户手动排除域名 `google.com`，所有 `*.google.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `google.es` 或`google.it`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。

我们建议使用**从列表**选项。 网站共分为八个类别，包括社交网络、通信、视频、音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 我们将最受欢迎的服务记在列表内，包括与每个平台相关的所有域名和子域名。

### 导入/导出排除项列表

如果您要从 AdGuard VPN Windows 版里导出排除项列表到您的计算机中，请点击「**导出排除项**」，选择用于存储列表文件的文件夹，然后点击「**保存**」。 本程序会下载一个 `exclusions.zip` 文件和两个 `.txt` 文件，后者分别对应**常规模式**和**选择模式**的列表。 您可以通过添加新排除项或删除旧排除项来直接编辑它们。

如要将排除项列表传输到另一台设备，请将 `.zip` 文件发送到目标设备。 在您要导入排除项列表的设备上打开 AdGuard VPN，点击「*排除项*」，然后点击「*导入排除项*」并选择之前发送的文件。

## 设置

![设置](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

在程序标签栏的第四个标签中，您可以对应用程序进行自定义。 具体内容包括：「**应用程序设置**」和「**应用程序排除项**」。

### 应用程序设置

![应用设置](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

在「**应用程序设置**」中，用户可以设置应用程序的语言，以及启用「**Kill Switch**」，后者可以在您的 VPN 连接失败时阻止联网。 如果您发现自己在没有 VPN 保护的情况下连接了公共 Wi-Fi 或移动网络，您则需要断开连接以防黑客窃取您的个人数据。

您还可以一键启动以下功能：「**自动更新**」、「**随 Windows 开机启动 AdGuard VPN**」、「**应用开启时自动连接**」，以及「允许 AdGuard 收集与应用程序使用情况有关的匿名数据」，以便 AdGuard 团队获得潜在可用性问题的信息。 您还可以在这里将主题更改为 「**浅色**」、「**深色**」或「**跟随系统**」。

页面底部还有两部分内容：「**DNS 服务器**」和「**高级设置**」。

#### DNS 服务器

「**DNS 服务器**」标签允许您添加自己的 DNS 服务器。 您可以设置任意提供商的 DNS 服务器。 我们建议您添加 [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns)，因为它除了标准功能外还可以拦截广告、跟踪和网络钓鱼。

#### 高级设置

如果不更改高级设置，您也完全可以正常使用 AdGuard VPN Windows 版 。但如果您愿意花时间了解这些设置的功能，那么高级设置就可以发挥很大的作用。

##### 操作模式

尽管只有 VPN 和 SOCKS5 两种运行模式，我们还是建议您只使用默认的 VPN 模式。 当您启用 **VPN 模式**时，您设备的所有流量都将通过 AdGuard VPN 发送；而在 **SOCKS5 模式**下，AdGuard VPN 会使用本地代理服务器，这时其他应用程序可以借此重定向流量。

##### 日志记录级别

共有两个记录级别：「**默认记录**」和「**记录全部**」。 默认情况下启用第一个选项。 只有在我们的支持团队要求您时，您才用启动「**记录全部**」选项。 长时间使用此模式会增加耗电量。

所有日志都保存在本地设备上。有需要的话，您可以将日志记录发给我们的技术支持团队。

##### 使用 QUIC 协议

这是一项实验性功能，它能让 AdGuard 使用高级 QUIC 加密协议。 此功能有许多优点，但最值得注意的是，它可以在移动互联网或公共 Wi-Fi 网络等非理想条件下改善连接质量。

### 应用程序排除项

![将应用程序添加到排除项中](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN 不仅会加密浏览器的流量，还会加密您计算机上其他应用程序的流量。 如果您想从 AdGuard 的隧道中排除某些程序，请将它们添加到「**应用程序排除项**」的列表。

## 其他标签

### 关于

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### 账号

在这里您可以查看关于许可证状态的信息，以及您个人的 AdGuard 账号链接。用户可以在账号里管理当前的订阅或购买新的订阅。

## 支持

此选项卡旨在解决用户的问题：您可以在此处找到常见问题解答页面的链接、报告错误或留下反馈意见，以及在支持团队要求时导出日志。
