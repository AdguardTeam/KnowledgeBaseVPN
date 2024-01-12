---
title: 'AdGuard VPN protokolü nasıl çalışır'
sidebar_position: 4
---

Protokolümüz, [tüm AdGuard VPN mobil ve masaüstü uygulamaları](https://adguard-vpn.com/welcome.html) tarafından kullanılmaktadır. Ürünlerimizden herhangi birini indirin ve verilerinizin en güvenli şekilde korunduğunu bilerek kullanın.

## AdGuard VPN protokolünü neden geliştirdik

Yıllardır, reklam engelleme uygulamalarının ve tarayıcı uzantılarının tüm çeşitlerini geliştirmeye odaklandık. Ve 2019'da birdenbire kendi VPN hizmetimizi geliştirmeye karar verdik. Gerçekte, bizi bunu yapmaya iten birkaç neden vardı.

- AdGuard mobil uygulamalarının VPN uygulamalarıyla uyumluluk sorunları vardı. Normalde, iki VPN tabanlı mobil uygulama birlikte çalışamaz: iOS'ta nadir durumlarda ve Android'de asla. As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. Bu nedenle, uyumluluğu garanti edebilecek tek uygun çözüm olarak şirket içi bir VPN geliştirmeyi gördük: biraz sihir uyguladıktan sonra, iki uygulama tek bir VPN hizmeti olarak birlikte çalışabilir.
- İkincisi, VPN bizim felsefemiz ve önceliklerimizle fazlasıyla alakalı görünüyordu. Birincil hedefimiz, kullanıcıların gizliliğini korumaktır ve VPN'ler tam olarak bunun içindir.
- Son olarak, AdGuard yazılımını geliştirdiğimiz yıllar boyunca ağ trafiğini filtreleme konusunda uzmanlaştık. Bu, başka bir dilenci VPN olmak yerine yeni bir şey getirmemize izin verdi.

En başından itibaren, AdGuard VPN'in rakiplerinden önemli bir farkı olacağına karar verdik — kullanıcıları güvenlik ve hız arasında seçim yapmaya zorlamayan bir şirket içi VPN protokolü geliştirip dağıtacağız.

## Popüler VPN protokollerinin dezavantajları

Popüler VPN protokollerinin (OpenVPN, WireGuard, IPSec, vb.) dezavantajlarını görerek AdGuard VPN protokolünü geliştirdik:

- Ağ düzeyinde kolayca tespit edilebilir ve engellenebilirler.
- If you try to "conceal" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it's additionally encrypted to make the traffic appear like normal website communication. Ne yazık ki, bu yaklaşımın bir dezavantajı vardır — TCP kullanımı nedeniyle ek teslimat onayına ihtiyaç vardır.

Herhangi bir popüler VPN protokolünü kullanırken, her zaman bir takasla karşı karşıyayız: hızlı ama algılaması kolay ve yavaş.

## What's great about the AdGuard VPN protocol

- *Normal HTTPS trafiğinden ayırt etmek neredeyse imkansızdır*, yani AdGuard VPN sunucusuna olan bağlantı, normal bir siteye olan bağlantıyla tamamen aynı görünür.
- Şifreleme için, bu görevle mükemmel bir şekilde başa çıkan **HTTPS (TLS)** kullanıyoruz. Dünyadaki en popüler şifreleme yöntemidir ve onu uygulayan kütüphaneler güvenlik açısından sürekli olarak denetlenmektedir.

Bazı mevcut VPN protokolleri de şifreleme görevini yerine getirir ve bunların (ve dolayısıyla bir VPN kullanma gerçeğinin) tespit edilmesi zordur. Ancak bunun bedeli genellikle düşük hızdır. This doesn't happen in our case, thanks to several solutions.

- We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed.
- Unlike others, the AdGuard VPN protocol *operates with data and not with packets*. Bu, AdGuard VPN'in her bağlantı için ayrı bir "tünel" oluşturduğu anlamına gelir, her HTTP/2 akışı bir bağlantıya karşılık gelir. AdGuard VPN, verileri bu tünel üzerinden aktarır. Bu, onay paketlerinden tasarruf ederek işlemi hızlandırmamızı sağlar, çünkü birkaç paketin verilerini VPN sunucusuna (veya sunucudan istemciye) göndermeden önce bir pakette arabelleğe alabiliriz. Ve ne kadar az paket olursa, o kadar az onay gerekir.
