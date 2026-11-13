---
title: Exclusions
sidebar_position: 2
---

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen.

![Exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

## Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. For example, if you manually exclude the domain `yahoo.com`, all `*.yahoo.com` subdomains will also be listed in exclusions. However, domain names with other top-level domains, such as `yahoo.jp` or `yahoo.fr`, will not be excluded.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

![Website exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

## Pre-made exclusions for Russian services

If your app language is Russian, you can add a list of popular Russian websites and services — banks, government services, and marketplaces — to exclusions.

After two successful VPN connections in *General* mode, a dialog appears on the main screen, offering to add the list with one tap.

:::note

Availability depends on the app’s language, not your location.

:::

The list won’t overwrite your own rules or create duplicates. Once it is added, the app takes you to the *Exclusions* screen and shows an *Undo* option so you can revert the change.

## Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![App exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

:::

To learn more about how VPN modes and exclusion lists work together, see [VPN modes and Exclusion lists](/general/vpn-modes-exclusions).
