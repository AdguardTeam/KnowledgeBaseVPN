---
title: Exclusions
sidebar_position: 2
---

You can find the Exclusions tab by tapping the second icon in the bottom bar.

By default, AdGuard VPN is active for all websites except those added to Exclusions. You can also turn it on selectively — VPN will be active only for specified websites. To switch to this mode, tap *Change mode*.

:::note

Each mode has its own exclusion list.

:::

You can add domains (e.g., `google.com`) or subdomains (e.g., `news.google.com`) of websites to the lists in three ways:

- Enter them manually in the app
- [Choose from domain lists for popular services](#domain-lists-for-popular-services)
- Add them directly from the browser by sharing the desired pages to the AdGuard VPN app

![Exclusions *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

When you manually add a domain, all subdomains are added automatically (it looks like `*.google.com`). Want to keep only `google.com` or turn VPN off for a specific domain? Tap the line with the website — this will open a separate screen where you can manage subdomains. Just uncheck the boxes for the ones you don’t need.

![Subdomains *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

If you manually add a subdomain, the main domain will also be added — but the checkbox next to it will not be checked.

## Domain lists for popular services

Large services like Google are tricky. They usually use more than one domain — one for media files, another for the API, plus domains for different countries. For example, in the case of Google, we have 416 domains in our list — all of them need to be added to Exclusions to completely turn VPN off (or on) for the service.

Here’s how to add all necessary domains for a popular service to exclusion list:

1. Open *Exclusions*.
2. Tap *Add website*.
3. Tap *From list*.
4. Find the desired service in the list and tap *Add*.

![List of popular services *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

## Pre-made exclusions for Russian services

If your app language is Russian, you can add a list of popular Russian websites and services — banks, government services, and marketplaces — to exclusions.

After two successful VPN connections in *General* mode, a dialog appears on the main screen, offering to add the list with one tap.

:::note

Availability depends on the app’s language, not your location.

:::

The list won’t overwrite your own rules or create duplicates. Once it is added, the app takes you to the *Exclusions* screen and shows an *Undo* option so you can revert the change.

## Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `exclusions.zip` archive will be downloaded.

2. There are two `.txt` files inside the archive, one for each of General and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your iOS device to your Mac, make sure to send the `.zip` file to your Mac beforehand.

4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

To learn more about how VPN modes and exclusion lists work together, see [VPN modes and Exclusion lists](/general/vpn-modes-exclusions).
