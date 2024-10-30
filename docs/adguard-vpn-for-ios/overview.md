---
title: Features overview
sidebar_position: 1
---

## What is AdGuard VPN for iOS?

A VPN allows you to create a secure connection to another network on the Internet. It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN has several functions:

- Hides your real whereabouts and helps you stay anonymous
- Changes your IP address to protect your data from tracking
- Encrypts your traffic, making the content inaccessible to scammers
- Lets you configure where to use VPN and where not to (exclusions feature)

The next advantage of AdGuard VPN for iOS is our own VPN protocol. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## How to use AdGuard VPN for iOS

To use AdGuard VPN for iOS, first you need to log into your [AdGuard account](https://my.adguard.com/). You can sign in directly with your AdGuard account credentials, or via Google, Apple ID, or Facebook (if your AdGuard account was registered using the same email address).

If you don’t have an AdGuard account yet, you will have to create it first.

Using AdGuard VPN is quite easy. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar.

By default, AdGuard VPN is active for all websites except those added to Exclusions. You can also turn it on selectively — VPN will be active only for specified websites. To switch to this mode, tap *Change mode*.

:::note

Each mode has its own exclusion list.

:::

You can add domains (e.g., `google.com`) or subdomains (e.g., `news.google.com`) of websites to the lists in three ways:

- Enter them manually in the app
- [Choose from domain lists for popular services](#domain-lists-for-popular-services)
- Add them directly from the browser by sharing the desired pages to AdGuard VPN app

![Exclusions *mobile_border](https://cdn.adtidy.org/blog/new/lpjs7iexclusions-as-of-v2-4.png)

When you manually add a domain, all subdomains are added automatically (it looks like `*.google.com`). Want to keep only google.com or turn VPN off for a specific domain? Tap the line with the website — this will open a separate screen where you can manage subdomains. Just uncheck the boxes for the ones you don't need.

![Subdomains *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.4/domains_en.png)

If you manually add a subdomain, the main domain will also added — but the checkbox next to it will not be checked.

### Domain lists for popular services

Large services like Google are tricky. They usually use more than one domain — one for media files, another for the API, plus domains for different countries. For example, in the case of Google, we have 416 domains in our list — all of them need to be added to Exclusions to completely turn VPN off (or on) for the service.

Here's how to add all necessary domains for a popular service to exclusion list:

1. Open *Exclusions*.
2. Tap *Add website*.
3. Tap *From list*.
4. Find the desired service in the list and tap *Add*.

![List of popular services *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `exclusions.zip` archive will be downloaded.

2. There are two `.txt` files inside the archive, one for each of General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your iOS device to your Mac, make sure to send the `.zip` file to your Mac beforehand.

4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS server

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Theme

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### Advanced settings

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Operating mode

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
