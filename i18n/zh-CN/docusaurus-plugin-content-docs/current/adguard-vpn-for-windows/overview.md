---
title: 功能概述
sidebar_position: 1
---

## AdGuard VPN Windows 版的功能

- 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol)，您可以有快速、安全的连接。

- 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 使用 AdGuard VPN，您的所有流量都会通过加密隧道到达 VPN 服务器。 Web服务器注册的是隧道端点的 IP 地址，即 VPN 服务器的 IP 地址，而不是设备的真实 IP 地址。

- 隐藏您的真实位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

AdGuard VPN Windows 版有很多优点，为此我们专门写了一篇[文章](/general/why-adguard-vpn)来进行阐述。 不过，这里我们会着眼于程序本身及其工作原理。

## 如何开始使用 AdGuard VPN Windows 版

要开始使用 Windows 版 AdGuard VPN，请从[我们的网站](https://adguard-vpn.com/welcome.html)下载此应用程序。 安装时间不会超过 1 分钟，然后您会看到一个对话框，此处您至少需要勾选实施用户协议和隐私政策条款的复选框。 您可以自行决定是否希望 AdGuard 收集有关您的应用程序使用情况的匿名数据。 最后，安装程序会请求您通过 [AdGuard 账号](https://auth.adguard.com/login.html)或社交平台（Apple、Google、Facebook）进行登录。 就这样，您就可以使用 AdGuard VPN Windows 版了。

## 主界面

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

**主屏幕** 上最引人注目的项目是 AdGuard VPN 连接/断开连接按钮，您可以在该按钮下方看到所选的服务器。 在屏幕右侧，您可以看到所有可用的服务器位置。 最快的服务器位置，也就是延迟最小的位置，会显示在列表的顶部。 还有一个刷新按钮，如果有任何位置离线，你可以点击它。

屏幕顶部有一个导航面板，上面有五个选项卡：**主页**、**排除**、**统计**、**支持**和**设置**。

## 排除项

默认情况下，适用于 Windows 的 AdGuard VPN 可在任何地方运行。 您可以将想要从 VPN 隧道中排除的网站和应用程序添加到排除列表中。 或者，您可以让 AdGuard VPN 仅在排除列表中指定的网站和应用程序上工作。 请注意，这两个列表彼此独立。

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

您可以通过输入网站域名将网站**手动添加**到排除列表中。 本应用程序还可以让您**从列表**中选择热门网站。

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::提示

手动添加域时，您应该考虑某些细节。 例如，如果用户手动排除域名 `google.com`，所有 `*.google.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `google.es` 或`google.it`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。

:::

我们建议使用**从列表**选项。 网站被分为八个类别，包括社交网络、通信、视频和音乐流媒体服务、游戏、购物、搜索引擎和工作通信工具。 我们将最受欢迎的服务放在列表内，包括与每个平台相关的所有域名和子域名。

### 导入/导出排除项列表

如果您要从 AdGuard VPN Windows 版里导出排除项列表到您的计算机中，请点击「**导出排除项**」，选择用于存储列表文件的文件夹，然后点击「**保存**」。 将下载一个包含两个`.txt`文件的`exclusions.zip 压缩包`，每个列表一个。 您可以通过添加新排除项或删除旧排除项来直接编辑它们。

在目标设备上，打开 AdGuard VPN，单击 *排除*，然后选择 *网站* 或 *应用*。 单击 *导入排除项*，选择接收到的存档。

## 统计数据

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

统计屏幕显示有关您的数据使用情况的详细信息，按位置和应用程序分类。 它突出显示您最常用的位置和应用程序。 您可以访问不同时间段的统计数据：每日、每月或您使用 AdGuard VPN for Windows 的整个时间段。

最重要的是，所有这些信息都只存储在您的设备上，确保只有您才能查看。 只有AdGuard VPN订阅用户才能访问统计数字功能。

## 设置

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

第四个选项卡包含可帮助您自定义应用程序的部分。

### 应用程序设置

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

在**"应用程序设置**"部分，您可以设置应用程序语言，还可以启用 "**Kill Switch**"，如果 VPN 连接中断，它将阻止访问互联网。紧急开关 如果你在连接到公共 Wi-Fi 或移动网络时发现自己没有 VPN 保护，就需要这样做来防止入侵者获取你的数据。

您还可以一键启动以下功能：「**自动更新**」、「**随 Windows 开机启动 AdGuard VPN**」、「**应用开启时自动连接**」，以及「允许 AdGuard 收集与应用程序使用情况有关的匿名数据」，以便 AdGuard 团队获得潜在可用性问题的信息。 在这里，您还可以将主题更改为 **浅色**，**系统**，或 **深色**。

页面底部还有两部分内容：「**DNS 服务器**」和「**高级设置**」。

#### DNS 服务器

**DNS 服务器** 选项卡允许您添加自己的 DNS 服务器 — 手动或从列表中添加。 用户可以设置任何提供商的 DNS 服务器。 我们建议您添加 [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns)，因为它除了标准功能外还可以拦截广告、跟踪和网络钓鱼。

#### 高级设置

如果不更改高级设置，您也完全可以正常使用 AdGuard VPN Windows 版 。但如果您愿意花时间了解这些设置的功能，那么高级设置就可以发挥很大的作用。

##### 操作模式

尽管有两种运行模式，包括 VPN 和 SOCKS5，我们建议用户只使用默认选择的模式，即 VPN。 当用户启用 **VPN 模式**时，您设备的所有流量都将通过 AdGuard VPN 定向，而在 **SOCKS5 模式**下，AdGuard VPN 使用本地代理服务器，其他应用程序可以使用它来重定向它们的流量。

##### 日志记录级别

共有两个记录级别：「**默认记录**」和「**记录全部**」。 默认情况下启用第一个选项。 只有在我们的支持团队要求您这样做时，才应启动「**记录全部**」选项。 长时间在此模式下使用该应用程序会导致电池消耗增加。

所有日志都保存在本地设备上。有需要的话，您可以将日志记录发给我们的技术支持团队。

##### 使用 QUIC 协议

这是一项实验性功能，使 AdGuard 能够使用高级 QUIC 加密协议。 此功能有许多优点，但最值得注意的是，它可以在非理想的条件下改善连接质量，例如，在用户使用移动互联网或连接到公共 Wi-Fi 网络时。

#### 使用 Wintun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

Wintrun是一种流量路由驱动程序，通常用于Windows上的VPN实现，通过创建虚拟网络适配器来改善VPN连接的质量。 默认情况下，AdGuard VPN 使用常规的 WFP 驱动程序（Windows 7 使用 TDI 驱动程序）。

#### 子网排除项

此功能允许您添加子网以排除连接到您的网络的特定设备的流量。 例如，您的机器人吸尘器。

## 其他标签

### 关于

「**关于**」标签中有当前版本 AdGuard VPN Windows 版的信息，更新按钮，以及 AdGuard VPN 官网、EULA（最终用户许可协议）、隐私政策的链接。

### 账号

在这里您可以查看关于许可证状态的信息，以及您个人的 AdGuard 账号链接。用户可以在账号里管理当前的订阅或购买新的订阅。

## 支持

此选项卡旨在解决用户的问题：您可以在此处找到常见问题解答页面的链接、报告错误或留下反馈意见，以及在支持团队要求时导出日志。
