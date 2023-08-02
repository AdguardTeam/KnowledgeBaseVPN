---
title: 功能概述
sidebar_position: 1
---

## 什么是 Windows版 AdGuard VPN？

A VPN, acronym for "Virtual Private Network", is a service that makes your Internet connection safe and helps you stay anonymous online. 它是如何工作的呢？ 当您不使用 VPN 访问网页时，您的 ISP（网络业务提供商）会检测到您。 他们会知道您在哪个页面以及您的搜索内容，还会收集出售这些数据。 不仅如此，您访问的网站也可以跟踪您的活动。 当您启用 VPN 应用程序后，它会通过加密隧道将您的流量重定向到远程 VPN 服务器，从而保护您的隐私。这样 ISP 就不会知道您向何处发送请求，站点也不会知道您来自哪里。

## What AdGuard VPN for Windows does

- 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol.mdx)，您可以有快速、安全的连接。

- 隐藏您的 IP 地址。 您的真实 IP 地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏 IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 正如上文所说，使用 AdGuard VPN，您的所有流量都会通过加密隧道到达 VPN 服务器。 因此，从外部看来，您设备的 IP 地址就和 VPN 服务器的 IP 地址相同。

- 隐藏您的真实位置。 选择任意一个 AdGuard VPN 服务器，您可以立即“传送”到其对应位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn.md) to them. Here, however, we want to focus more on the application itself and how it works.

## How to start using AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). That's all, you can now use AdGuard VPN for Windows.

## Home screen

![AdGuard VPN for Windows Home Page](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Above the button you can see the [mode](#exclusions) in which the application is running, and below it you can see the selected server. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.

## Exclusions

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. What does this mean? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Please note that these two modes' exclusions lists are independent from one another.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 手动添加域名时，用户应该考虑到一些细微差别。 例如，如果用户手动排除域名 `google.com`，所有 `*.google.com` 的子域名也将被列在排除项中。 然而，具有其他顶级域名的域名，如 `google.es` 或`google.it`，将不会被排除。 或者您可以把 `youtube.com` 添加到排除项中，但同一服务的域名 `youtu.be` 将不会进入列表中。

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### 导入/导出排除项列表

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Settings

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.

### 应用程序设置

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS 服务器

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### 高级设置

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Operating mode

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logging level

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

##### Use QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### 应用程序排除项

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Other tabs

### 关于

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy policy.

### 账号

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
