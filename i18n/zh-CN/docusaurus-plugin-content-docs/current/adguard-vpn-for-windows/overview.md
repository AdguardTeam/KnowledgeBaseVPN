---
title: 功能概述
sidebar_position: 1
---

## AdGuard VPN Windows 版的功能

- 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol)，您可以有快速、安全的连接。

- 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- 隐藏您的真实位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

AdGuard VPN Windows 版有很多优点，为此我们专门写了一篇[文章](/general/why-adguard-vpn)来进行阐述。 不过，这里我们会着眼于程序本身及其工作原理。

## 如何开始使用 AdGuard VPN Windows 版

要开始使用 Windows 版 AdGuard VPN，请从[我们的网站](https://adguard-vpn.com/welcome.html)下载此应用程序。 安装时间不会超过 1 分钟，然后您会看到一个对话框，此处您至少需要勾选实施用户协议和隐私政策条款的复选框。 And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. 最后，安装程序会请求您通过 [AdGuard 账号](https://auth.adguard.com/login.html)或社交平台（Apple、Google、Facebook）进行登录。 就这样，您就可以使用 AdGuard VPN Windows 版了。

## 主界面

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

The most noticeable item on the **Home screen** is the AdGuard VPN Connect/Disconnect button, below which you can see the selected server. On the right side of the screen you will see a list of available locations. 最快的服务器位置，也就是延迟最小的位置，会显示在列表的顶部。 There is also a refresh button that you can click if any locations are offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**, **Support**, and **Settings**.

## 排除项

By default, AdGuard VPN for WIndows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

您可以通过输入网站域名将网站**手动添加**到排除列表中。 本应用程序还可以让您**从列表**中选择热门网站。

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account certain details. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### 导入/导出排除项列表

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Stats

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## 设置

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### 应用程序设置

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS 服务器

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### 高级设置

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### 操作模式

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### 日志记录级别

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### 使用 QUIC 协议

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

#### Use WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Subnet exclusions

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## 其他标签

### 关于

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### 账号

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## 支持

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
