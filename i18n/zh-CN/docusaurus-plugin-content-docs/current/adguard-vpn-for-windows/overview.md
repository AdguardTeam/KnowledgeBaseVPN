---
title: 功能概述
sidebar position: 1
---

## Windows 版 AdGuard VPN 简介

VPN是“虚拟专用网络”的缩写，该服务可保证您的网络连接安全，并可以使您能匿名上网。 它是如何工作的呢？ 当您不使用 VPN 访问网页时，您的 ISP（网络业务提供商）会检测到您。 他们会知道您在哪个页面以及您的搜索内容，还会收集出售这些数据。 不仅如此，您访问的网站也可以跟踪您的活动。 当您启用 VPN 应用程序后，它会通过加密隧道将您的流量重定向到远程 VPN 服务器，从而保护您的隐私。这样 ISP 就不会知道您向何处发送请求，站点也不会知道您来自哪里。

**Windows 版 AdGuard VPN 的功能**

* 防止网络流量拦截（欺骗）。 AdGuard VPN可在您的设备和远程服务器之间创建加密隧道。 您的所有网络流量都会经由此隧道，从而在此过程中保护您的数据。 得益于 [AdGuard 特有协议](/general/adguard-vpn-protocol.mdx)，您可以有快速、安全的连接。

* 隐藏您的 IP 地址。 您的真实IP地址是网络犯罪分子获取您个人数据的关键。 如果您不隐藏IP，那么您的姓名、电子邮件地址、电话号码、信用卡信息都可能落入犯罪分子手中。 正如上文所说，使用AdGuard VPN，您的所有流量都会通过加密隧道到达VPN服务器。 因此，从外部看来，您设备的IP地址就和VPN 服务器的IP地址相同。

* 隐藏您的真实位置。 选择任意一个AdGuard VPN服务器，您可以立即“传送”到其对应位置。 这有什么作用呢？ 举个例子，这样您就能够以当地的价格预订酒店，或者躲避地理目标广告。

Windows版AdGuard VPN有很多优点，为此我们专门[写了一篇文章](/general/why-adguard-vpn.md)来进行阐述。 不过，这里我们希望更多地着眼于程序本身及其工作原理。

## 如何开始使用Windows版AdGuard VPN

要使用Windows版AdGuard VPN，请从[我们的网站](https://adguard-vpn.com/en/welcome.html)下载该应用程序。 安装时间不会超过1分钟，之后您会看到一个对话框，您至少要勾选一个框来实施用户协议和隐私政策的条款。 您可以决定是否允许AdGuard收集您应用使用情况的匿名数据。 最后，安装程序会要求您通过[AdGuard账户](https://auth.adguard.com/login.html)或社交平台（苹果、谷歌、脸书）登录。 就这样，您现在可以使用Windows版AdGuard VPN了。


## 主界面

![AdGuard VPN for Windows Home Page](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Underneath, you can see the [mode](#exclusions) in which the application is running, and below — the selected server. On the right side of the screen you will find all available locations, and the fastest, i.e. with the shortest ping, will be listed at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**. With the first tab done, let's move on.


## Exclusions

AdGuard VPN for Windows can work in two modes: **General** or **Selective**. What does this mean? If you want the application to work on all but a few sites, activate the **General mode** and list the resources you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Please note that these two modes' exclusions lists are independent from one another.

![Exclusions](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

There are two options for creating exclusions lists: **Manually** and **From the list**. Click the **Add a website** line and choose the format you prefer for adding sites to the exclusions.

![Add Exclusions](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

We would recommend to use the option **From the list** to avoid unnecessary hassle. We have already grouped eight different categories of popular services for you: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform. That way you will be certain you haven't forgotten any service or domain you'd like to keep functioning while VPN is on, or vice versa.

### Import/export exclusions lists

In the **Exclusions** tab on the right side of the screen there is a section **Actions**. It may come in handy if you need to export or import ready-made exclusions lists.

To export the list of exclusions from AdGuard for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusions lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the ready-made exclusions lists, click *Exclusions*, then *Import exclusions* and select the previously sent archive.

## Settings

![Settings](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **General** and **Split tunneling**.


### General

The **General** section contains many useful features. Here you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection fails. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that we can make it better. Here you can also change the default **Light Theme** to a **Dark Theme**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

![DNS settings and Advanced settings](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS servers

The **DNS servers** tab allows you to add your own custom DNS server. Why should you do this? For example, not to rely on the default DNS server, which is often controlled by your ISP.

You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking and phishing in addition to the standard functions.

#### Advanced Settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating Mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### Split tunneling

![Split tunnelling](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN encrypts the traffic not only of your browsers, but also of other apps installed on your computer. If you want to exclude certain applications from AdGuard's work, put them to the **Split tunneling** list.

## Other tabs

### About

The **About program** tab provides information about the current version of AdGuard VPN for Windows, an update button, and a few useful links: AdGuard website, forum, EULA and Privacy Policy.

### About license

Here you will find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

In this tab we've collected a lot of useful links: FAQ page, application feedback form, social media pages, and **Knowledge Base**.