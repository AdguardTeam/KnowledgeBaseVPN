---
title: 功能概述
sidebar_position: 1
---

## 主畫面

主畫面反映 VPN 狀態（已連線/已中斷連線）。 還有 *連線/斷開* 按鈕和可用伺服器清單。

每個伺服器都有其位置和 ping 速率，描述伺服器的回應時間。 該速率越低，連線速度越快。 最快的伺服器總是出現在清單的頂部，該清單由數十個國家/地區的 50 多個位置組成。 您可以點擊 *連接* 按鈕或選擇一個位置來連接到最快的伺服器。

## 排除

排除清單可讓您管理特定網站和應用程式的 VPN 連線。 若要存取 *排除*，請點選螢幕底部左側的第二個圖示。

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

- 在應用程式中手動輸入
- 透過與 AdGuard VPN 分享網站，直接從瀏覽器添加它
- 從內建服務清單中新增它

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. 例如，如果您手動排除網域 `yahoo.com`，所有 `*.yahoo.com` 子網域名也會在排除項中列出。 不過，網域名稱與其他頂級網域，例如 `yahoo.jp` 或 `yahoo.fr`，將不會被排除在外。

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **完全啟用** 由綠色背景上的白色複選標記表示
- **部分啟用** （啟用沒有主域的子域）在白色背景上以綠色方塊標記
- **完全停用** 標有空白複選框

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![應用程式排除 *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

在 *整合模式*下，您只能透過 AdGuard Ad Blocker 管理應用程式。

:::

## 設定

您可以按下螢幕右下角的齒輪圖示來存取 *設定* 。

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

*操作模式* 允許您指定流量的路由方式。 共有三種模式：VPN、SOCKS5、整合模式。 在 *VPN* 模式下，所有流量都透過 AdGuard VPN 路由。 在 *SOCKS5* 模式下，AdGuard VPN 運行本地代理伺服器，其他應用程式可以使用該伺服器進行流量路由。 *整合模式* 允許 AdGuard VPN 和 AdGuard Ad Blocker 協同工作。

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. 您可以在 AdGuard Ad Blocker 應用程式中管理 DNS 保護並透過 AdGuard VPN 代理程式路由應用程式。

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

*進階設定* 的最後一部分是 *低階設定*。 我們強烈建議您不要進入此部分，除非您非常合格或我們的支援團隊要求您這樣做。 這裡可以在 VPN 介面上啟用 TUN 介面日誌記錄或 IPv6 協議，選擇應使用的代理伺服器連接埠或 Internet 協定版本。

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### 支援

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
