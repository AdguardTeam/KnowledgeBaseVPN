---
title: 功能概述
sidebar_position: 1
---

## 什么是 iOS版 AdGuard VPN？

VPN 可以让用户与互联网上另一处网络创建安全连接。 它将用户的电脑或移动设备连接到服务器，并允许用户使用“覆盖” IP 地址上网。 如果 VPN 服务器位于另一个国家/地区，那么用户就像是从该国家/地区建立的网络连接。 更多详情，请查阅[我们的文章：VPN 的工作原理](/general/how-vpn-works)。

AdGuard VPN 具有多种功能：

- 隐藏用户的真实位置帮助保持匿名性
- 更改用户的 IP 地址避免他人跟踪个人数据
- 加密您的网络流量，使诈骗者无法获取内容
- 让用户自己配置在哪里启用或停用 VPN（排除项功能）

AdGuard VPN iOS 版下一个优势是我们自建的 VPN 协议。 与其他 VPN 协议相比，该协议极难被侦测，即使在网络连接状况不佳时也能保持稳定运行。 [点此访问有关 AdGuard VPN 协议的更多信息](/general/adguard-vpn-protocol)。

## 如何使用 AdGuard VPN iOS 版

要使用 AdGuard VPN iOS 版，首先用户需要登录个人 [AdGuard 账号](https://adguardaccount.com/)。 您可以直接使用您的 AdGuard 账号信息登录，或通过 Google、Apple ID 或 Facebook（仅在您的 AdGuard 账号使用相同的电子邮件地址注册的情况下）登录。

如果您还没有 AdGuard 账号，请您先创建一个。

使用 AdGuard VPN 非常简单。 在首页上，有一个「*连接*」，或者「*断开连接*」的按钮和一个可用的服务器列表（也称「*位置*」）。 每一台服务器旁边显示地理位置（某个国家/地区和城市），以及 Ping 值（延迟时间）。

Ping 值表示服务器的响应时间（毫秒）。 这表明当用户连接到该位置时 VPN 连接的速度有多快。 选择 Ping 为22毫秒的服务器，意味着发送至该服务器的数据包将在22毫秒内完成往返。

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![主界面和位置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios_zh_cn.png)

## 排除项

您可以通过点击底部栏中的第二个图标找到「排除项」选项卡。

默认情况下，AdGuard VPN 会对所有网站生效，排除列表中的网站除外。 用户也可以选择性地启用服务，VPN 将仅对指定网站生效。 要切换到此模式，请点击「*更改模式*」。

:::note

每种模式都有自己的排除列表。

:::

用户可以通过三种方式将网站的域名（例如，`google.com`）或子域名（例如，`news.google.com`）添加到列表中：

- 在应用中手动输入
- [从热门服务的域名列表中进行选择](#domain-lists-for-popular-services)
- 通过浏览器直接分享目标网页至 AdGuard VPN 应用即可添加。

![排除项 *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

当您手动添加域名时，所有子域都会自动添加（比如，`*.google.com`）。 只想保留 google.com 或关闭特定域名的 VPN？ 点击网站所在行，这将打开单独的管理页面，您可以在其中配置子域名。 只需取消选中您不需要的复选框即可。

![子域名 *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

如果您手动添加子域，主域也将被添加，但旁边的复选框将不会被选中。

### 热门服务的域名列表

像 Google 这样的大型服务比较复杂。 他们通常使用多个域名，一个用于媒体文件，另一个用于 API，还有一些用于不同国家的域名。 以 Google 为例，我们的列表中包含 416 个域名，必须全部添加至排除列表，才能彻底关闭（或开启）该服务的 VPN 连接。

以下是将热门服务所需域名批量加入排除项列表的操作方法：

1. 打开「*排除项*」
2. 点击「*添加过滤器*」
3. 点击「*从列表中*」
4. 在列表中找到所需的服务，然后点击「*添加*」。

![热门服务列表 *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### 导入/导出排除项

另一个好用的功能是导入/导出排除项列表。 这样，用户就可以与其他设备共享排除项列表。

您可以按照以下四个步骤完成：

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `exclusions.zip` 档案将被下载。

2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。

3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 iOS 设备导入到 Mac 设备，确保先将 `.zip` 文件发送到 Mac 设备。

4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

**在 iOS 版 AdGuard VPN 中，可以通过点击排除屏幕右上角的三个点图标来访问导出和导入功能**。

![导入/导出排除项 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## 保存的位置

此功能让用户将常用服务器位置保存至专属标签页，无需搜索或滚动完整列表即可快速访问。

要添加位置到*保存*，只需左滑目标位置。 再次左滑即可将其从*保存*中移除。

![已保存位置，添加，删除 *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## 常规设置

要打开常规设置：

1. 点击 AdGuard VPN 应用程序主屏幕右下角的设置按钮 (⚙)
2. 点击*常规*

在此，用户可以根据需求通过不同选项配置 AdGuard VPN iOS 版：*DNS 服务器*、 *主题*、 *高级*、 *发送技术和交互数据* 和 *Kill Switch*。

![常规设置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS 服务器

AdGuard VPN iOS 版提供多款 DNS 服务器选择，每款皆具备独特特性。 例如，AdGuard DNS 可以删除广告并防止设备被追踪，而 AdGuard DNS 家庭保护则将 AdGuard DNS 的功能与安全搜索和成人内容拦截相结合。 不同 DNS 供应商的 DNS 服务器运行速度有快有慢，主要取决于用户的位置、ISP 和其他因素。 选择最适合您的服务器。 您可以[了解有关 DNS 的更多信息](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)及特点。

![DNS 服务器界面 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### 主题

用户可以将应用主题设置为系统、深色或浅色（iOS 13 或更高版本中可用）。

### 高级设置

「*高级*」设置包括四个部分 ：*操作模式*、 *日志记录级别*、 *导出日志和系统信息*和 *诊断信息*。

#### 操作模式

适用于 iOS 的 AdGuard VPN 可以在两种模式下运行：**VPN** 和**整合**。

在 *VPN* 模式下使用 [AdGuard VPN 协议](/general/adguard-vpn-protocol)。本协议提供高速和安全性的最佳组合。 在此模式下，AdGuard VPN 将无法与 [AdGuard 广告拦截程序 iOS 版](https://adguard.com/adguard-ios/overview.html)一起使用。

在**集成模式**下，AdGuard VPN 将能够使用 IPSec 协议与适用于 iOS 的 AdGuard 广告拦截程序同时工作。 这种协议也很安全，但速度稍慢，也更容易被检测到。 用户无需执行任何操作来设置集成：只需安装两个应用程序并切换到此模式即可。

:::note

在**整合**模式下，无法使用排除项功能或选择 DNS 服务器。

:::

#### 日志记录级别

此设置主要用于调试和故障排查。 进阶和强日志记录级别会记录更详细的信息，有助于识别和修复各种问题或错误。

:::caution

**除非客户支持要求，否则不建议启用进阶或强日志记录级别**。

:::

#### 导出日志和系统信息

此选项可用于发送应用程序的日志和系统信息到我们的支持团队或其他任何人。

#### 诊断数据

此选项允许用户导出技术信息，这些信息对于解决问题很有用，有时会被我们的支持和开发人员请求。

#### AdGuard VPN 协议

![Select VPN protocol *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

AdGuard VPN 协议默认使用动态 VPN 协议选择（「*自动选择*」选项）。 这意味着 AdGuard VPN 能自动判断 HTTP2/TLS 或 HTTP3/QUIC 哪种协议可提供最佳性能，并立即切换至该协议。 这样可以提升 VPN 的连接速度和稳定性，在 VPN 用法受限或不稳定的地区尤其有帮助。

如果您愿意，可以将 AdGuard VPN 切换为仅使用 HTTP2/TLS 或 HTTP3/QUIC 协议，而不是「*自动选择*」。 每种协议都有其优点，但最佳选择可能会因您的所在地、网络状况，甚至所连接的服务器而有所不同。

### 发送技术和交互数据

启用此选项将协助我们更好地了解用户与应用的交互情况。 我们使用这些信息来提升用户体验。

### Kill Switch

如果由于某种原因，VPN 连接突然断开，*Kill Switch*（紧急开关）将会自动关闭互联网连接，确保个人数据不会泄漏，用户的身份保持隐藏。

## 快捷操作

快捷操作是在主屏幕上无需打开应用程序即可执行有用或特定于某应用程序的操作的便捷方式。

要访问快捷操作菜单，请长按 AdGuard VPN 应用程序图标，然后松开手指。 在打开的菜单中，将看到 AdGuard VPN 的快捷操作：*连接*（*断开连接*）和*选择位置*。 当然，用户也可以访问所有的默认操作，如删除应用程序、移动或分享应用程序。

![快捷操作 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## 支持

支持页面（*设置* → *支持*）包含多个实用功能：*常见问题*、*报告错误*、*请求功能*和*应用程序评分*。 后者允许您在 App Store 上为 AdGuard VPN 评分。

![支持 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## 订阅

如果您使用 AdGuard VPN 免费版，在底部的标签栏上会出现另一个带有箭头图标的标签。 本页简要介绍应用程序付费版的主要优势。 您可以选择按年或按月订阅。

![订阅 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
