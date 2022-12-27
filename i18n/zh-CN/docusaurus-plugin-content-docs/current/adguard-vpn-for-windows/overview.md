---
title: 功能概述
sidebar position: 1
---

## Windows 版 AdGuard VPN 简介

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. 它是如何工作的呢？ 当您不使用 VPN 访问网页时，您的 ISP（网络业务提供商）会检测到您。 他们会知道您在哪个页面以及您的搜索内容，还会收集出售这些数据。 不仅如此，您访问的网站也可以跟踪您的活动。 当您启用 VPN 应用程序后，它会通过加密隧道将您的流量重定向到远程 VPN 服务器，从而保护您的隐私。这样 ISP 就不会知道您向何处发送请求，站点也不会知道您来自哪里。

**Windows 版 AdGuard VPN 的功能**

* 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol.mdx)，您可以有快速、安全的连接。

* 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 正如上文所说，使用 AdGuard VPN，您的所有流量都会通过加密隧道到达 VPN 服务器。 因此，从外部看来，您设备的 IP 地址就和 VPN 服务器的 IP 地址相同。

* 隐藏您的真实位置。 选择任意一个 AdGuard VPN 服务器，您可以立即“传送”到其对应位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

Windows 版 AdGuard VPN 有很多优点，为此我们专门[写了一篇文章](/general/why-adguard-vpn.md)来进行阐述。 不过，这里我们希望更多地着眼于程序本身及其工作原理。

## 如何开始使用 Windows 版 AdGuard VPN

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). 安装时间不会超过1分钟，之后您会看到一个对话框，您至少要勾选一个框来实施用户协议和隐私政策的条款。 您可以决定是否允许 AdGuard 收集您应用使用情况的匿名数据。 最后，安装程序会要求您通过 [AdGuard 账号](https://auth.adguard.com/login.html)或社交平台（Apple、Google、Facebook）登录。 就这样，您现在可以使用 Windows 版 AdGuard VPN 了。


## 主界面

![AdGuard VPN Windows版主界面](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**主屏幕**上最引人注目的项目是 AdGuard VPN 连接/断开按钮。 Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## 排除项

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. 这是什么意思？ If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. **选择模式**具有相反的效果：它仅在排除列表中指定的网站上启动 AdGuard VPN。 请注意，这两种模式的排除项列表是相互独立的。

![排除项](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![添加排除项](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![从列表中添加排除项](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 手动添加域名时，用户应该考虑到一些细微差别。 例如，如果用户手动排除域名 `google.com`，所有 `*.google.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `google.es` 或`google.it`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. 我们将最受欢迎的服务放在列表内，包括与每个平台相关的所有域名和子域名。

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## 设置

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

页面底部有两个部分：「**DNS 服务器**」和「**高级设置**」。

#### DNS 服务器

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## 其他标签

### 关于

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## 支持

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.