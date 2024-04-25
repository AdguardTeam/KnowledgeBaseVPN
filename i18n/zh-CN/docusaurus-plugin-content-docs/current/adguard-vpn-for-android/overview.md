---
title: 功能概述
sidebar_position: 1
---

## 什么是 Android版 AdGuard VPN?

VPN 是一个在用户每次浏览互联网时提供安全性和匿名性的理想工具。 [它是如何工作的？](/general/how-vpn-works)在不涉及技术细节的情况下，我们可以说 VPN 在用户设备和远程 VPN 服务器之间创建了一个安全的加密连接（称为隧道）。 通过这种方式，数据的保密性以及用户的匿名性得以保留，因为第三方观察者看到的是 VPN 服务器的 IP 地址而不是用户的实际 IP。

**VPN 经常用于以下几项：**

- 即使在用户连接公共 Wi-Fi 时也能保证个人数据安全
- 通过掩盖 IP 地址防止用户在线活动追踪
- 隐藏真实的地理位置以保持用户的匿名性

安卓版的 AdGuard VPN 可以为用户做这一切，甚至提供一些独特的功能。 要了解为什么 AdGuard VPN 是用户的不二之选，请阅读[这篇文章](/general/why-adguard-vpn)。

## 如何开始使用安卓版的 AdGuard VPN

首先，从 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) 下载 AdGuard VPN 并登录 AdGuard 账号。 如果用户没有个人账号，请[建立一个](https://auth.adguard.com/login.html)。 用户可以用 AdGuard 账号信息登录应用程序。 如果您注册 AdGuard 账号时使用与 Google 和 Facebook 同一个电子邮件地址，您也可以通过它们登录。

## 主屏幕

主屏幕显示 VPN 状态（连接/断开）。 还有「*连接/断开*」的按钮和可用服务器列表。

每个服务器旁边都有位置和 Ping。Ping 是指服务器的响应时间。 数值越低，连接速度就越快。 最快的服务器会在列表顶部，该列表由数十个国家/地区的 50 多个位置组成。 您可以通过点击「*连接*」按钮或选择一个位置来连接到最快的服务器。

## 排除项

我们已尽一切努力让您轻松管理您的网站和应用排除项列表。 AdGuard VPN 将只在您选择的应用程序或网站上运作。

### 排除项列表

排除列表允许您管理特定网站和应用程序的 VPN 连接。 要转到「*排除项*」部分，请点击屏幕底部左数第二个图标。 要转到*排除项*部分，请点击屏幕底部左侧第二个图标。

默认情况下，AdGuard VPN 适用于除排除项之外的所有网站和应用程序，但您可以轻松切换到其他模式。

#### 对于网站

您可以通过三种方式将域（如`google.com`）或子域（如`*.google.com`）添加到 "*排除列表*"中：

- 在应用中手动输入
- 通过分享网站到 AdGuard VPN，从而直接从浏览器添加
- 从内置服务列表中添加

![排除项](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::注意

在手动添加域名方面有一些细微差别。 例如，如果用户手动排除域名 `yahoo.com`，所有 `*.yahoo.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `yahoo.jp` 或`yahoo.fr`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。 在这种情况下，使用内置的服务列表更安全，因为我们把与每个平台相关的所有子域都放在那里。

:::

由于您可以在服务列表中启用子域，因此我们添加了反映每个服务状态的方框——您可以在*排除项*主屏幕中每个服务名称左侧的选框看出：

- **完全启用**：绿底白色对钩
- **部分启用**（仅启用子域未启用主域）：白底绿色方块
- **完全禁用**：空白方框

 好消息是：用户可以随时返回服务列表的默认视图，以防您从那里删除或禁用任何网域。

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

另一个好用的功能是*导入/导出排除项*。 一共只有四个步骤就能导入/导出排除项：

1. 在您想要导出排除项列表的设备或浏览器里打开 AdGuard VPN。 找到相应的部分并单击「*导出*」按钮。 `adguard_vpn_exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，分别对应两个列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. 在不同设备之间传输时，不要忘记将 `.zip` 文件发送到设备上进行导入。 例如，如果您将排除项列表从自己的 Windows 设备导入到安卓设备，确保先将 `.zip` 文件发送到安卓设备。
4. 在要导入存档的设备上打开 AdGuard VPN，其中包含要应用的排除项列表。 找到相应的部分，单击「*导入*」按钮并选择存档。

![导入/导出 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### 对于应用

正如我们上面提到的，不仅是网站可以很容易地添加到排除项中。 您可以选择哪些应用需要 AdGuard VPN，哪些不需要。

在*集成模式*中，您只能通过 AdGuard Ad Blocker 管理应用程序。

![应用排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 设置

用户可以通过按屏幕右下方的齿轮图标转到*设置*。 第一部分是*应用程序设置*：根据自己的需求选择不同的功能配置 AdGuard VPN 安卓版。

![应用设置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 自动启动

将滑块拖动到右边可以在设备启动后启用 AdGuard VPN 自动启动。

### DNS 服务器

DNS 服务器会将网站名称转换为浏览器可以理解的内容，即 IP 地址。 AdGuard VPN 安卓版提供许多可选的优质 DNS 服务器。 例如，[AdGuard DNS](https://adguard-dns.io/kb/) 可以删除广告并防止您的设备被追踪，而 AdGuard DNS 家庭保护则将 AdGuard DNS 的功能与安全搜索和成人内容拦截相结合。 用户也可以添加一个自定义 DNS 服务器。

### 自动保护

当您的设备连接到蜂窝网络或 Wi-Fi 网络时，这项功能会自动启用AdGuard VPN。

### Kill Switch

用户可以按照屏幕上的简单指示，在自己的安卓设备上设置 Kill Switch 功能。 为什么要开启 Kill Switch？ 如果您在使用移动网络或公共 Wi-Fi 时，由于某种原因，用户的 VPN 连接突然中断，Kill Switch 将自动终止互联网连接，不让别人窃取您的个人信息。

请注意，如果 Kill Switch 处于开启状态，「*应用程序设置*」和 「*排除项*」将不起作用。

### 主题

您可以选择系统默认、跟随系统、深色或浅色应用主题。

![系统动态主题 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![浅色主题 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![深色主题 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### 高级设置

在「*高级设置*」中，用户可以找到四部分内容。

「*操作模式*」允许您指定流量的路由方式。 共有三种模式：VPN、SOCKS5、集成模式。 在「*VPN*」模式下，所有流量都会通过 AdGuard VPN 路由。 在「*SOCKS5*」模式下，AdGuard VPN 会运行本地代理服务器，其他应用程序可以使用该服务器进行流量路由。 「*集成模式*」允许 AdGuard VPN 和 AdGuard Ad Blocker 协同工作。

:::注意

「*集成模式*」禁用了 AdGuard VPN 的某些功能：DNS 服务器、紧急开关、自动保护和应用程序排除。 您可以在 AdGuard Ad Blocker 应用中通过 AdGuard VPN 代理管理 DNS 保护和路由应用。

:::

接下来的两个部分是*记录级别*和*诊断信息*。 关于第一个选项，除非我们的支持团队要求，否则不建议启用扩展或极端记录级别。 诊断信息，本地存储的关于设备和连接的技术信息（IP 地址、ID、Ping等等），在出现任何技术问题时，可以发送给我们。

*高级设置*的最后一个选项是*低级设置*。 我们建议用户不进入这一部分，除非您了解技术方面或被我们的支持团队要求设置它们。 这里可以在 VPN 接口上启用 TUN 接口记录或 IPv6 协议，选择一个代理服务器端口或应该使用的互联网协议版本。

:::兼容性

*启用 IPv6* 选项仅适用于支持 IPv6 的网络。

:::

### 支持

在*支持*部分，您可以留下反馈意见，报告一个错误，或导出日志和系统信息，以便进一步提交给客服支持。
