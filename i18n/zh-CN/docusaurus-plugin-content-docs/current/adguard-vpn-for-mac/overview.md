---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN Mac版是一个桌面 VPN 服务。 AdGuard VPN 与 AdGuard 广告拦截程序兼容，它们可以一起启动并无缝运行。 让我们看看此软件提供什么功能。

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. 用户可以用 AdGuard 账号登录，也可以通过其他账号登录，即通过 Apple、Google 或 Facebook 登录。 请确保您的其他账号与 AdGuard 账号绑定到同一个电子邮件地址。 如果用户的 AdGuard 账号中有合适的订阅，订阅将在桌面应用程序上自动激活。 Still don’t have an AdGuard account? 请[点击这里](https://auth.adguard.com/registration.html)建立账号。

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## 主界面

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

第一个标签是*主页*屏幕。 Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping 是指 VPN 服务器的响应时间。 The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. 下面用户可以看到全部服务器位置的列表。 The search field makes it easy to find the location you need.

:::note

免费用户只可以连接到一些服务器位置，而其他位置则被封锁。 除此之外，免费版有每月 3GB 的流量限制。

:::

### Saved locations

On the same tab, you can save your favorite locations to access them quickly.

Just hover over a location, click the bookmark icon that appears, and it will be saved. Your marked locations will then show up in the *Saved* tab.

![Saved locations](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## 排除项

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Exclusions screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! It’s especially convenient if you use Selective mode.

Exclusion list can be easily configured. If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. To export exclusions, follow the four-step instruction below:

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN。 Find the appropriate section and click the *Export* button. `exclusions.zip` 档案将被下载。
2. 档案中有两个 `.txt` 文件，常规模式的列表和选择模式的列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件（下面还有更多详情），或者也可以将存档中的文件内容保持不变。
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 例如，如果您将排除项列表从自己的 Mac 设备导入到 iPhone 设备，确保先将 `.zip` 文件发送到手机上。
4. 在要导入存档的设备/浏览器上打开 AdGuard VPN，其中包含要应用的排除项列表。 Find the appropriate section, click the *Import* button and select the archive. 完成！

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## 支持

![Support screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## 设置

![Settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servers](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Advanced settings

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 日志记录级别

There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### 隐藏菜单栏的图标

Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Use QUIC

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.
