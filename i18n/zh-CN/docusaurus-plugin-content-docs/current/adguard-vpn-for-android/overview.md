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

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- 在应用中手动输入
- 通过分享网站到 AdGuard VPN，从而直接从浏览器添加
- 从内置服务列表中添加

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::注意

There are some nuances to manually adding domains. 例如，如果用户手动排除域名 `yahoo.com`，所有 `*.yahoo.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `yahoo.jp` 或`yahoo.fr`，将不会被排除。

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **完全启用**：绿底白色对钩
- **部分启用**（仅启用子域未启用主域）：白底绿色方块
- **完全禁用**：空白方框

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

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
