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

Uygulamalar ve siteler için farklı VPN modları ayarlayabilirsiniz. Örneğin, AdGuard VPN'i uygulama istisna listesine eklenenler dışında tüm uygulamalar için ve yalnızca site istisna listesindeki siteler için etkin olacak şekilde ayarlayabilirsiniz.

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

AdGuard VPN, uygulama ve site istisna listelerindeki uygulamalar ve siteler dışında her yerde etkindir.

VPN modu:

- Uygulama istisnaları dışında tüm uygulamalar için etkin
- Site istisnaları dışında tüm siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN her yerde etkin]
- Site istisna listesi [VPN her yerde etkin]

Bu, maksimum VPN korumasına sahip varsayılan VPN modudur. Bir siteyi veya uygulamayı AdGuard VPN'den hariç tutmak istiyorsanız, bunları ilgili istisna listesine ekleyin.

**Boş istisna listeleri:** Uygulama ve site istisna listeleriniz boş olabilir. Bu listelerde hiçbir şey belirtilmemişse, AdGuard VPN tüm uygulamalar ve siteler için etkin olacaktır.

**Neden bu modu kullanmalısınız:** Cihazınızdaki her şey için kapsamlı bir VPN koruması istersiniz. Belirli bir uygulamanın veya sitenin VPN dışında çalışması gerekiyorsa, bunu İstisnalara ekleyin.

:::caution

Bir tarayıcı uygulamasını uygulama istisna listesine eklerseniz, AdGuard VPN o tarayıcıda açılan hiçbir site için etkin olmayacaktır.

:::

### Setup 2

AdGuard VPN yalnızca uygulama istisna listesindeki uygulamalar için ve site istisna listesindeki siteler dışında tüm siteler için etkindir.

VPN modu:

- Yalnızca uygulama istisnalarındaki uygulamalar için etkin
- Site istisnaları dışında tüm siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN seçici olarak etkin]
- Site istisna listesi [VPN her yerde etkin]

Bu moda geçmek için, AdGuard VPN'i tüm siteler için etkin bırakın ve yalnızca uygulama istisna listesindeki uygulamalar için açık olacak şekilde ayarlayın. Bu mod, uygulamaların korunduğundan emin olmak için uygulamaları uygulama istisna listesine eklemeniz gerektiğinden daha az VPN koruma kapsamı sağlar.

Bu mod, uygulama istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Boş istisna listeleri:** **Uygulama istisna listesi** **boşsa**, AdGuard VPN **hem siteler hem de uygulamalar için etkin olmayacaktır**.

**Neden bu modu kullanmalısınız:** Çoğu site için VPN'e ihtiyacınız var, ancak yalnızca birkaç uygulama için gereklidir.

:::caution

Bir tarayıcı uygulamasını uygulama istisna listesine eklemezseniz, AdGuard VPN bu tarayıcıda site istisna listesindekiler dâhil tüm siteler için etkin olmayacaktır.

:::

### Setup 3

AdGuard VPN, uygulama istisna listesine eklenenler dışında tüm uygulamalar için ve yalnızca site istisna listesindeki siteler için etkindir.

VPN modu:

- Uygulama istisnaları dışında tüm uygulamalar için etkin
- Yalnızca site istisnalarındaki siteler için etkin

Uygulanan istisna listeleri:

- Uygulama istisna listesi [VPN her yerde etkin]
- Site istisna listesi [VPN seçici olarak etkin]

Bu moda geçmek için, AdGuard VPN'i tüm uygulamalar için etkin bırakın ve yalnızca site istisna listesindeki siteler için açık olacak şekilde ayarlayın. Bir uygulamayı kullanmak için ilgili alan adını site istisna listesine ekleyin.

Bu mod daha da az VPN koruma kapsamı sağlar çünkü korunduklarından emin olmak için siteleri site istisna listesine eklemeniz gerekir.

Bu mod, site istisna listenizi ayarlamanıza dikkat etmenizi gerektirir.

**Boş istisna listeleri:** **Site istisna listesi** **boşsa**, AdGuard VPN **tüm siteler ve uygulamalar için etkin olmayacaktır**.

**Neden bu modu kullanmalısınız:** Çoğu uygulama için VPN'e ihtiyacınız var, ancak yalnızca birkaç site için gereklidir.

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

Hem uygulamalar hem de siteler için bu moda geçmeniz gerekiyor. Bu mod, en düşük VPN koruma kapsamını sağlar. Bu mod, uygulama ve site istisna listelerinizi ayarlamaya son derece dikkat etmenizi gerektirir.

**Boş istisna listeleri:** İstisna listelerinden **herhangi biri** **boşsa**, AdGuard VPN **hem siteler hem de uygulamalar için etkin olmayacaktır**.

**Bu modu neden kullanmalısınız:** Sadece belirli siteler ve uygulamalar için VPN'e ihtiyacınız vardır.

:::caution

1. Bir tarayıcı uygulamasını uygulama istisna listesine eklemezseniz, AdGuard VPN bu tarayıcıda site istisna listesindekiler dâhil tüm siteler için etkin olmayacaktır.

2. Uygulama istisna listesindeki uygulamalar için: ilgili alan adlarını site istisna listesine eklediğinizden emin olun. Örneğin, uygulama istisna listesine _Facebook_ eklerseniz, site istisna listesine de `facebook.com` alan adını ekleyin.

:::
