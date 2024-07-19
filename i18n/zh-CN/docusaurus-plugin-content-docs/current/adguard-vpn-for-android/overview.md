---
title: 功能概述
sidebar_position: 1
---

## 主屏幕

主屏幕显示 VPN 状态（连接/断开）。 还有「*连接/断开*」的按钮和可用服务器列表。

每个服务器旁边都有位置和 Ping。Ping 是指服务器的响应时间。 数值越低，连接速度就越快。 最快的服务器会在列表顶部，该列表由数十个国家/地区的 50 多个位置组成。 您可以通过点击「*连接*」按钮或选择一个位置来连接到最快的服务器。

## 排除项

排除列表允许您管理特定网站和应用程序的 VPN 连接。 要转到「*排除项*」部分，请点击屏幕底部左数第二个图标。

![排除 *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

默认情况下，AdGuard VPN 适用于所有网站和应用程序，但添加到排除项的网站和应用程序除外：如果您没有指定应用程序或网站，VPN 将对其激活。 您可以根据自己的需要打开它 **** — 仅针对指定的应用程序或网站。 要切换到此模式，请点击 *更改模式*。

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

在使用您的VPN时要小心**选择性地**使用。

如果您将浏览器排除在 VPN 通道之外，网站排除功能对其不起作用。

如果您将网站切换到此模式，请不要忘记添加您想使用的应用程序的域名 — 例如，`facebook.com` 用于Facebook。

:::

### 网站：

您可以通过三种方式将域（例如， `google.com`）或子域（例如， `*.google.com`）添加到排除项：

- 在应用中手动输入
- 通过分享网站到 AdGuard VPN，从而直接从浏览器添加
- 从内置服务列表中添加

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::注意

在手动添加域名方面有一些细微差别。 例如，如果用户手动排除域名 `yahoo.com`，所有 `*.yahoo.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `yahoo.jp` 或`yahoo.fr`，将不会被排除。

如果您将 `youtube.com` 添加到排除项，则同一服务的域 `youtu.be` 将不会被添加。 在这种情况下，使用内置的服务列表更安全。在这种情况下，最好使用内置的服务列表。 它们包含与每个平台相关的所有子域名。

:::

由于您可以在服务列表中启用子域，因此我们添加了反映每个服务状态的框：

- **完全启用**：绿底白色对钩
- **部分启用**（仅启用子域未启用主域）：白底绿色方块
- **完全禁用**：空白方框

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

如果不小心删除了域名或子域，只需轻点*重置为默认值*即可。

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### 应用程序

您还可以管理应用程序的 VPN。 要将应用程序排除在 VPN 通道之外，请点击*添加应用程序*。 如果要**选择性地**使用 VPN，请点按*更改模式*。

![应用排除 *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

在*集成模式*中，您只能通过 AdGuard Ad Blocker 管理应用程序。

:::

## 设置

用户可以通过按屏幕右下方的齿轮图标转到*设置*。

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

「*操作模式*」允许您指定流量的路由方式。 共有三种模式：VPN、SOCKS5、集成模式。 在「*VPN*」模式下，所有流量都会通过 AdGuard VPN 路由。 在「*SOCKS5*」模式下，AdGuard VPN 会运行本地代理服务器，其他应用程序可以使用该服务器进行流量路由。 「*集成模式*」允许 AdGuard VPN 和 AdGuard Ad Blocker 协同工作。

:::注意

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. 您可以在 AdGuard Ad Blocker 应用中通过 AdGuard VPN 代理管理 DNS 保护和路由应用。

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

*高级设置*的最后一个选项是*低级设置*。 我们建议用户不进入这一部分，除非您了解技术方面或被我们的支持团队要求设置它们。 这里可以在 VPN 接口上启用 TUN 接口记录或 IPv6 协议，选择一个代理服务器端口或应该使用的互联网协议版本。

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### 支持

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
