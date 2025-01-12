---
title: VPN modes and Exclusion lists
sidebar_position: 11
---

## VPN modes and Exclusion lists

This section explains how to use website and app exclusions in different VPN modes.

## VPN modes

AdGuard VPN has two modes:

1. By default, AdGuard VPN is active for all websites and apps, except for those added to the website and app exclusion lists.

2. AdGuard VPN is active *selectively*: only for the websites and apps added to the website and app exclusion lists.

:::note

You can set different VPN modes for apps and websites. For example, you can set AdGuard VPN to be active for all apps except for those added to the app exclusion list, and active only for the websites from the website exclusion list.

:::

## Exclusion lists

An exclusion list is a list of apps or websites that AdGuard VPN excludes or includes in its tunnel based on the current VPN mode.

:::note

Each VPN mode has its own app exclusion list and website exclusion list. 
In total, there are four exclusion lists:

* App exclusion list [VPN active everywhere]
* App exclusion list [VPN active selectively]
* Website exclusion list [VPN active everywhere]
* Website exclusion list [VPN active selectively]

:::

## Combining VPN modes and Exclusion lists

The four VPN activity setups provide different levels of VPN coverage, from maximum to limited.

### AdGuard VPN is active everywhere except for apps and websites from the app and website exclusion lists

VPN mode:
* Active for all apps except app exclusions
* Active for all websites except website exclusions

Applied exclusion lists:
* App exclusion list [VPN active everywhere]
* Website exclusion list [VPN active everywhere]

This is the default VPN mode with maximum VPN protection. If you want to exclude a website or an app from AdGuard VPN, add them to the exclusion list.

**Empty exclusion lists:** Your app exclusion list and website exclusion list can be empty. If nothing is specified in the exclusion lists, AdGuard VPN will be active for all apps and websites.

**Why use this mode:** You want a blanket VPN protection for everything on your device. If a specific app or website needs to work outside the VPN, add it to Exclusions.

:::caution

If you add a browser app to the app exclusion list, AdGuard VPN won't be active for all websites opened in that browser.

:::

### AdGuard VPN is active only for the apps from the the app exclusion list, and for all websites except those from the website exclusion list

VPN mode:
* Active only for apps from app exclusions
* Active for all websites except website exclusions

Applied exclusion lists:
* App exclusion list [VPN active selectively]
* Website exclusion list [VPN active everywhere]

To switch to this mode, leave AdGuard VPN active for all websites and set it to be on only for the apps from the app exclusion list. This mode provides less VPN protection coverage because you need to add apps to the app exclusion list to ensure they are protected.

This mode requires your attention to setting up your app exclusion list. 

**Empty exclusion lists:** If the **app exclusion list** is **empty**, AdGuard VPN will be **inactive for both websites and apps**.

**Why use this mode:** You need a VPN for most websites, but only for a few apps.

:::caution

If you don’t add a browser app to the app exclusion list, AdGuard VPN will be inactive in this browser for all websites, even those from the website exclusion list.

:::

### AdGuard VPN is active for all apps except those from the the app exclusion list, and only for the websites from the website exclusion list

VPN mode:
* Active for all apps except app exclusions
* Active only for websites from website exclusions

Applied exclusion lists:
* App exclusion list [VPN active everywhere]
* Website exclusion list [VPN active selectively]

To switch to this mode, leave AdGuard VPN active for all apps and set it to be on only for the websites from the website exclusion list. This mode provides even less VPN protection coverage because you need to add websites to the website exclusion list to ensure they are protected.

This mode requires your attention to setting up your website exclusion list. 

**Empty exclusion lists:** If the **website exclusion list** is **empty**, AdGuard VPN will be **inactive for all websites**.

**Why use this mode:** You need a VPN for most apps, but only for a few websites.

### AdGuard VPN is active only for the apps and websites from the app and website exclusion lists

VPN mode:
* Active only for apps from app exclusions
* Active only for websites from website exclusions

Applied exclusion lists:
* App exclusion list [VPN active selectively]
* Website exclusion list [VPN active selectively]

You need to switch to this mode both for apps and websites. This mode provides the least VPN protection coverage.
This mode requires your maximum attention to setting up your app and website exclusion lists. 

**Empty exclusion lists:** If **any** of the exclusion lists is **empty**, AdGuard VPN will be **inactive for both websites and apps**.

**Why use this mode:** You only need VPN for specific websites and apps.

:::caution

1. If you don’t add a browser app to the app exclusion list, AdGuard VPN will be inactive in this browser for all websites, even those from the website exclusion list.

2. For apps from the app exclusion list: make sure to add their respective domains to the website exclusion list. For example, if you add *Facebook* to the app exclusion list, add `facebook.com` to the website exclusion list.

:::