---
title: Features overview
sidebar_position: 1
---

## What is AdGuard VPN for iOS?

A VPN allows you to create a secure connection to another network on the Internet. It connects a user's computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your internet connection was established from this country. For more details, you can [check this article](/general/how-vpn-works) on how a VPN works.

AdGuard VPN has several functions:

- hides your real whereabouts and helps you stay anonymous
- changes your IP address to protect your data from tracking
- encrypts your traffic and makes contents inaccessible to scammers
- lets you configure where to use VPN and where not to (exclusions feature)

The next advantage of AdGuard VPN for iOS is our own VPN protocol. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more here](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## How to use AdGuard VPN for iOS

To use AdGuard VPN for iOS, first you need to log into your [AdGuard account](https://my.adguard.com/). You can sign in directly with your AdGuard account credentials, or via Google, Apple ID, or Facebook (if your AdGuard account was registered using the same email address).

If you don't have an AdGuard account yet, you will have to create it first.

Using AdGuard VPN is quite easy. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import/export of exclusion lists. This way you can import/share exclusion lists from/to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device (or in the browser in case of AdGuard VPN browser extension) from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `exclusions.zip` archive will be downloaded.

2. There are two `.txt` files inside the archive, one for each of General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.

3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your iOS device to your Mac, make sure to send the `.zip` file to your Mac beforehand.

4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: Operating Mode, DNS server, Wi-Fi auto-protection, Color Theme and Advanced Settings.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS server

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Theme

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Advanced settings

In *Advanced settings*, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Operating mode

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard Ad Blocker for iOS by using the IPSec protocol instead. This protocol is also secure, but a little slower and easier to detect. You don't need to perform any additional actions to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is needed mainly for debug and troubleshooting purposes, due to the fact that Extended and Extreme logging levels record more detailed information which can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs ans system info

This option helps provide infromation to our support, to help identify and fix various problems you might encounter.

#### Dignostic data

Technical information that can be useful in solving technical problems and is sometimes requested by our support and developers.

## Quick actions (available in iOS 13 or later)

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see quick actions: *Connect* or *Disconnect*, *Select location*, *Edit Home Screen*, *Share App*, and *Remove App*.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
