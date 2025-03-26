---
title: VPN modları ve İstisna listeleri
sidebar_position: 11
---

This section explains how to use website and app exclusions in different VPN modes.

## VPN modları

AdGuard VPN'in iki modu vardır:

1. By default, AdGuard VPN is active for all websites and apps, except for those added to the website and app exclusion lists.

2. AdGuard VPN is active _selectively_: only for the websites and apps from the exclusion lists.

:::note

Uygulamalar ve siteler için farklı VPN modları ayarlayabilirsiniz. For example, you can set AdGuard VPN to be active for all apps except for those added to the app exclusion list, and active only for the websites from the website exclusion list.

:::

## İstisna listeleri

An exclusion list is a list of apps or websites that AdGuard VPN excludes or includes in its tunnel based on the current VPN mode.

:::note

Her VPN modunun iki istisna listesi vardır: biri uygulamalar için ve diğeri siteler için. Toplamda dört istisna listesi bulunmaktadır:

- App exclusion list [VPN active everywhere]
- App exclusion list [VPN active selectively]
- Website exclusion list [VPN active everywhere]
- Website exclusion list [VPN active selectively]

:::

## Combining VPN modes and exclusion lists

You can set up four combinations of VPN activity.

### Setup 1

AdGuard VPN is active everywhere except for apps and websites from the app and website exclusion lists.

VPN modu:

- Active for all apps except app exclusions
- Active for all websites except website exclusions

Uygulanan istisna listeleri:

- App exclusion list [VPN active everywhere]
- Website exclusion list [VPN active everywhere]

Bu, maksimum VPN korumasına sahip varsayılan VPN modudur. If you want to exclude a website or an app from AdGuard VPN, add them to the respective exclusion list.

**Empty exclusion lists:** Your app and website exclusion lists can be empty. If nothing is specified in them, AdGuard VPN will be active for all apps and websites.

**Why use this mode:** You want a blanket VPN protection for everything on your device. If a specific app or website needs to work outside the VPN, add it to Exclusions.

:::caution

Bir tarayıcı uygulamasını uygulama istisna listesine eklerseniz, AdGuard VPN o tarayıcıda açılan tüm siteler için etkin olmayacaktır.

:::

### Setup 2

AdGuard VPN is active only for the apps from the the app exclusion list and for all websites except those from the website exclusion list.

VPN modu:

- Active only for apps from app exclusions
- Active for all websites except website exclusions

Uygulanan istisna listeleri:

- App exclusion list [VPN active selectively]
- Website exclusion list [VPN active everywhere]

To switch to this mode, leave AdGuard VPN active for all websites and set it to be on only for the apps from the app exclusion list. This mode provides less VPN protection coverage because you need to add apps to the app exclusion list to ensure they are protected.

Bu mod, uygulama istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Empty exclusion lists:** If the **app exclusion list** is **empty**, AdGuard VPN will be **inactive for both websites and apps**.

**Why use this mode:** You need a VPN for most websites, but only for a few apps.

:::caution

If you don’t add a browser app to the app exclusion list, AdGuard VPN will be inactive in this browser for all websites, even those from the website exclusion list.

:::

### Setup 3

AdGuard VPN is active for all apps except those from the the app exclusion list, and only for the websites from the website exclusion list.

VPN modu:

- Active for all apps except app exclusions
- Active only for websites from website exclusions

Uygulanan istisna listeleri:

- App exclusion list [VPN active everywhere]
- Website exclusion list [VPN active selectively]

Bu moda geçmek için, AdGuard VPN'i tüm uygulamalar için etkin bırakın ve yalnızca site istisna listesindeki siteler için açık olacak şekilde ayarlayın. Bir uygulamayı kullanmak için ilgili alan adını site istisna listesine ekleyin.

This mode provides even less VPN protection coverage because you need to add websites to the website exclusion list to ensure they are protected.

Bu mod, site istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Empty exclusion lists:** If the **website exclusion list** is **empty**, AdGuard VPN will be **inactive for all websites and apps**.

**Why use this mode:** You need a VPN for most apps, but only for a few websites.

:::caution

For all apps: make sure to add their respective domains to the website exclusion list. For example, for Facebook, add `facebook.com` to the website exclusion list.

:::

### Setup 4

AdGuard VPN is active only for the apps and websites from the app and website exclusion lists.

VPN mode:

- Active only for apps from app exclusions
- Active only for websites from website exclusions

Applied exclusion lists:

- App exclusion list [VPN active selectively]
- Website exclusion list [VPN active selectively]

You need to switch to this mode both for apps and websites. This mode provides the least VPN protection coverage. This mode requires your maximum attention to setting up your app and website exclusion lists.

**Empty exclusion lists:** If **any** of the exclusion lists is **empty**, AdGuard VPN will be **inactive for both websites and apps**.

**Bu modu neden kullanmalısınız:** Sadece belirli siteler ve uygulamalar için VPN'e ihtiyacınız vardır.

:::caution

1. If you don’t add a browser app to the app exclusion list, AdGuard VPN will be inactive in this browser for all websites, even those from the website exclusion list.

2. For apps from the app exclusion list: make sure to add their respective domains to the website exclusion list. For example, if you add _Facebook_ to the app exclusion list, add `facebook.com` to the website exclusion list.

:::
