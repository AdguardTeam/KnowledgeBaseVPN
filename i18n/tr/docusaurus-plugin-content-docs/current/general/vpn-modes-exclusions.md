---
title: VPN modları ve İstisna listeleri
sidebar_position: 11
---

Bu bölümde, farklı VPN modlarında site ve uygulama istisnalarının nasıl kullanılacağı açıklanmaktadır.

## VPN modları

AdGuard VPN'in iki modu vardır:

1. Varsayılan olarak AdGuard VPN, site ve uygulama istisna listelerine eklenenler haricindeki tüm siteler ve uygulamalar için etkindir.

2. AdGuard VPN, _seçici olarak_ etkin: yalnızca istisna listelerindeki siteler ve uygulamalar için.

:::note

Uygulamalar ve siteler için farklı VPN modları ayarlayabilirsiniz. For example, you can set AdGuard VPN to be active for all apps except for those added to the app exclusion list, and active only for the websites from the website exclusion list.

:::

## İstisna listeleri

İstisna listesi, AdGuard VPN'in geçerli VPN moduna bağlı olarak tünelinde hariç tuttuğu veya dâhil ettiği uygulamaların veya sitelerin bir listesidir.

:::note

Her VPN modunun iki istisna listesi vardır: biri uygulamalar için ve diğeri siteler için. Toplamda dört istisna listesi bulunmaktadır:

- Uygulama istisna listesi [VPN her yerde etkin]
- Uygulama istisna listesi [VPN seçici olarak etkin]
- Site istisna listesi [VPN her yerde etkin]
- Site istisna listesi [VPN seçici olarak etkin]

:::

## VPN modlarını ve istisna listelerini birleştirme

Dört VPN etkinliği kombinasyonu ayarlayabilirsiniz.

### Setup 1

AdGuard VPN is active everywhere except for apps and websites from the app and website exclusion lists.

VPN modu:

- Uygulama istisnaları dışında tüm uygulamalar için etkin
- Site istisnaları dışında tüm siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN her yerde etkin]
- Site istisna listesi [VPN her yerde etkin]

Bu, maksimum VPN korumasına sahip varsayılan VPN modudur. If you want to exclude a website or an app from AdGuard VPN, add them to the respective exclusion list.

**Boş istisna listeleri:** Uygulama ve site istisna listeleriniz boş olabilir. Bu listelerde hiçbir şey belirtilmemişse, AdGuard VPN tüm uygulamalar ve siteler için etkin olacaktır.

**Neden bu modu kullanmalısınız:** Cihazınızdaki her şey için kapsamlı bir VPN koruması istersiniz. Belirli bir uygulamanın veya sitenin VPN dışında çalışması gerekiyorsa, bunu İstisnalara ekleyin.

:::caution

Bir tarayıcı uygulamasını uygulama istisna listesine eklerseniz, AdGuard VPN o tarayıcıda açılan hiçbir site için etkin olmayacaktır.

:::

### Setup 2

AdGuard VPN is active only for the apps from the app exclusion list and for all websites except those from the website exclusion list.

VPN modu:

- Yalnızca uygulama istisnalarındaki uygulamalar için etkin
- Site istisnaları dışında tüm siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN seçici olarak etkin]
- Site istisna listesi [VPN her yerde etkin]

Bu moda geçmek için, AdGuard VPN'i tüm siteler için etkin bırakın ve yalnızca uygulama istisna listesindeki uygulamalar için açık olacak şekilde ayarlayın. Bu mod, uygulamaların korunduğundan emin olmak için uygulamaları uygulama istisna listesine eklemeniz gerektiğinden daha az VPN koruma kapsamı sağlar.

Bu mod, uygulama istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Boş istisna listeleri:** **Uygulama istisna listesi**, **boşsa**, AdGuard VPN **hem siteler hem de uygulamalar için etkin olmayacaktır**.

**Why use this mode:** You need a VPN for most websites, but only for a few apps.

:::caution

Bir tarayıcı uygulamasını uygulama istisna listesine eklemezseniz, AdGuard VPN bu tarayıcıda site istisna listesindekiler dâhil tüm siteler için etkin olmayacaktır.

:::

### Setup 3

AdGuard VPN is active for all apps except those from the app exclusion list, and only for the websites from the website exclusion list.

VPN modu:

- Uygulama istisnaları dışında tüm uygulamalar için etkin
- Yalnızca site istisnalarındaki siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN her yerde etkin]
- Site istisna listesi [VPN seçici olarak etkin]

Bu moda geçmek için, AdGuard VPN'i tüm uygulamalar için etkin bırakın ve yalnızca site istisna listesindeki siteler için açık olacak şekilde ayarlayın. Bir uygulamayı kullanmak için ilgili alan adını site istisna listesine ekleyin.

This mode provides even less VPN protection coverage because you need to add websites to the website exclusion list to ensure they are protected.

Bu mod, site istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Boş istisna listeleri:** **Site istisna listesi**, **boşsa**, AdGuard VPN **tüm siteler ve uygulamalar için etkin olmayacaktır**.

**Why use this mode:** You need a VPN for most apps, but only for a few websites.

:::caution

Tüm uygulamalar için: ilgili alan adlarını site istisna listesine eklediğinizden emin olun. Örneğin, Facebook için `facebook.com` alan adını site istisna listesine ekleyin.

:::

### Setup 4

AdGuard VPN yalnızca uygulama ve site istisna listelerindeki uygulamalar ve siteler için etkindir.

VPN modu:

- Yalnızca uygulama istisnalarındaki uygulamalar için etkin
- Yalnızca site istisnalarındaki siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN seçici olarak etkin]
- Site istisna listesi [VPN seçici olarak etkin]

You need to switch to this mode both for apps and websites. Bu mod, en düşük VPN koruma kapsamını sağlar. Bu mod, uygulama ve site istisna listelerinizi ayarlamaya son derece dikkat etmenizi gerektirir.

**Empty exclusion lists:** If **any** of the exclusion lists is **empty**, AdGuard VPN will be **inactive for both websites and apps**.

**Bu modu neden kullanmalısınız:** Sadece belirli siteler ve uygulamalar için VPN'e ihtiyacınız vardır.

:::caution

1. Bir tarayıcı uygulamasını uygulama istisna listesine eklemezseniz, AdGuard VPN bu tarayıcıda site istisna listesindekiler dâhil tüm siteler için etkin olmayacaktır.

2. Uygulama istisna listesindeki uygulamalar için: ilgili alan adlarını site istisna listesine eklediğinizden emin olun. Örneğin, uygulama istisna listesine _Facebook_ eklerseniz, site istisna listesine de `facebook.com` alan adını ekleyin.

:::
