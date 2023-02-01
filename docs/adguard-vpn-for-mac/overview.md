---
title: Features overview
sidebar_position: 1
---

AdGuard VPN for Mac is a desktop VPN service. AdGuard VPN is fully compatible with AdGuard Ad Blocker, they can be used together and will operate seamlessly. Let’s see what features it has to offer.

Note that **you can't use AdGuard VPN for Mac unless you have logged into your AdGuard account**. You can either sign in with your AdGuard account or with an external account, namely, via Apple, Google or Facebook. Make sure that your external account is bound to the same e-mail address as your AdGuard account. If there is a suitable subscription in your AdGuard account, it will be automatically activated on the desktop app. 
Still don't have an AdGuard account? Create it [here](https://auth.adguard.com/registration.html).
 
> AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

## Home screen

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

The first tab is the *Home* screen. Here you can see AdGuard VPN current status and [exclusions mode](#exclusions), chosen location (if enabled) and its ping. Ping is the response time of a VPN server. Consequently, the lower this number is, the faster the connection. If VPN is disabled, the last location you connected to is displayed below. The fastest locations with the lowest pings are displayed in the upper right corner of the screen. Below you can see the full list of locations. Through the search function, the needed location can be easily found. 

> Free users can connect only to certain locations, while others are blocked. Besides, there is a 3 GB monthly traffic limit in the free version.

## Exclusions

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

Next goes the *Exclusions* screen. AdGuard VPN has several features that make it unique, and one of them is certainly switching between two exclusions modes. In the General mode, AdGuard VPN will run on all websites but the ones from the exclusions list. In the Selective mode, conversely, AdGuard VPN will run only on websites from the exclusions list. You yourself can decide where you want VPN to work.

![Exclusions screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! It's especially convenient if you use Selective mode.

Exclusion list can be easily configured. If you've added a domain and some of its subdomains, they'll be grouped inside the root one. When adding a root domain (`example.com`) its mask is added too (`*.example.com`). 

If you've added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. To export exclusions, follow the four-step instruction below:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Find the appropriate section and click on the *Export* button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, each for General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as it is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Mac to your iPhone, make sure to send the `.zip` file to your phone beforehand.
4. Open AdGuard VPN on the device/in the browser where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click on the *Import* button and select the archive. Done!

> Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

## Support

![Support screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

The third tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/en/welcome.html#faq) or in the [Knowledge base](/intro.md) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/en/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/en/vpn_mac/form.html), we’d appreciate it. 

## Settings

![Settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard's EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Autoupdate*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac. 

Another option that shouldn't be overlooked is that you can allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, thanks to the button on the right, you can export logs to your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servers](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Here you can add a custom DNS server (or servers) in order not to rely on a DNS server provided by your ISP by default. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious sites and redirects them to a “blackhole”.

### Advanced settings

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

Advanced settings are not recommended to be adjusted. Don't change them unless asked by our technical support or unless you're sure what you're doing.

#### Logging level
There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. Even if you enabled the second logging level, make sure to go back to the default one after recording logs.

#### Hide menu bar icon 
Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Use QUIC (experimental)

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.
