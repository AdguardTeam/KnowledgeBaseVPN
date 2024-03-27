---
title: Features overview
sidebar_position: 1
---

AdGuard VPN for Mac is a desktop VPN service. AdGuard VPN is fully compatible with AdGuard Ad Blocker, they can be used together and will operate seamlessly. Let’s see what features it has to offer.

Note that **you can't use AdGuard VPN for Mac unless you have logged into your AdGuard account**. You can either sign in with your AdGuard account or with an external account, namely, via Apple, Google or Facebook. Make sure that your external account is bound to the same e-mail address as your AdGuard account. If there is a suitable subscription in your AdGuard account, it will be automatically activated on the desktop app. Still don't have an AdGuard account? Create it [here](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## Home screen

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

The first tab is the *Home* screen. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping is the response time of a VPN server. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Below you can see the full list of locations. The search field makes it easy to find the location you need.

:::note

Free users can connect only to certain locations, while others are blocked. Besides, there is a 3 GB monthly traffic limit in the free version.

:::

## Exclusions

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Exclusions screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! It's especially convenient if you use Selective mode.

Exclusion list can be easily configured. If you've added a domain and some of its subdomains, they'll be grouped inside the root one. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

If you've added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. To export exclusions, follow the four-step instruction below:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, each for General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as it is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Mac to your iPhone, make sure to send the `.zip` file to your phone beforehand.
4. Open AdGuard VPN on the device/in the browser where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive. Done!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Support

![Support screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## Settings

![Settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard's EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

You can also allow AdGuard VPN to gather and send anonymous crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servers](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Advanced settings

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Logging level

There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Hide menu bar icon

Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Use QUIC

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.
