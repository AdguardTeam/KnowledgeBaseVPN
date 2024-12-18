---
title: AdGuard VPN protokolü nasıl çalışır
sidebar_position: 4
---

Protokolümüz, [tüm AdGuard VPN mobil ve masaüstü uygulamaları](https://adguard-vpn.com/welcome.html) tarafından kullanılmaktadır. Ürünlerimizden herhangi birini indirin ve verilerinizin en güvenli şekilde korunduğunu bilerek kullanın.

## AdGuard VPN protokolünü neden geliştirdik

Yıllardır, reklam engelleme uygulamalarının ve tarayıcı uzantılarının tüm çeşitlerini geliştirmeye odaklandık. Ve 2019'da birdenbire kendi VPN hizmetimizi geliştirmeye karar verdik. Gerçekte, bizi bunu yapmaya iten birkaç neden vardı.

- AdGuard mobil uygulamalarının VPN uygulamalarıyla uyumluluk sorunları vardı. Normally, two VPN-based mobile apps can’t work together: in rare cases on iOS, and never on Android. AdGuard Reklam Engelleyici uygulamaları ağ trafiğini filtrelemek için yerel VPN kullandığından, bunları herhangi bir VPN uygulamasıyla birlikte kullanmak söz konusu olamaz. That’s why we saw the development of an in-house VPN as the only feasible solution that could guarantee compatibility: after we apply some magic, the two apps are able to work together as one VPN service.
- İkincisi, VPN bizim felsefemiz ve önceliklerimizle fazlasıyla alakalı görünüyordu. Our primary goal is to protect users’ privacy, and this is exactly what VPNs are for.
- Son olarak, AdGuard yazılımını geliştirdiğimiz yıllar boyunca ağ trafiğini filtreleme konusunda uzmanlaştık. Bu, başka bir dilenci VPN olmak yerine yeni bir şey getirmemize izin verdi.

En başından itibaren, AdGuard VPN'in rakiplerinden önemli bir farkı olacağına karar verdik — kullanıcıları güvenlik ve hız arasında seçim yapmaya zorlamayan bir şirket içi VPN protokolü geliştirip dağıtacağız.

## Popüler VPN protokollerinin dezavantajları

Popüler VPN protokollerinin (OpenVPN, WireGuard, IPSec, vb.) dezavantajlarını görerek AdGuard VPN protokolünü geliştirdik:

- Ağ düzeyinde kolayca tespit edilebilir ve engellenebilirler.
- If you try to “conceal” them, the performance will drop.

To “conceal” the use of VPN, the data flow is often “wrapped” in a TCP connection, and sometimes it’s additionally encrypted to make the traffic appear like normal website communication. Ne yazık ki, bu yaklaşımın bir dezavantajı vardır — TCP kullanımı nedeniyle ek teslimat onayına ihtiyaç vardır.

Herhangi bir popüler VPN protokolünü kullanırken, her zaman bir takasla karşı karşıyayız: hızlı ama algılaması kolay ve yavaş.

## What’s great about the AdGuard VPN protocol

- It’s *nearly impossible to distinguish from normal HTTPS traffic*, that is, the connection to the AdGuard VPN server looks exactly the same as the connection to a normal website.
- Şifreleme için, bu görevle mükemmel bir şekilde başa çıkan **HTTPS (TLS)** kullanıyoruz. Dünyadaki en popüler şifreleme yöntemidir ve onu uygulayan kütüphaneler güvenlik açısından sürekli olarak denetlenmektedir.

Bazı mevcut VPN protokolleri de şifreleme görevini yerine getirir ve bunların (ve dolayısıyla bir VPN kullanma gerçeğinin) tespit edilmesi zordur. Ancak bunun bedeli genellikle düşük hızdır. This doesn’t happen in our case, thanks to several solutions.

- Yüksek hızı korurken AdGuard VPN protokolünü tespit etmeyi neredeyse imkansız hâle getiren **HTTP/2 aktarım protokolünü** kullanıyoruz.
- Diğerlerinden farklı olarak, AdGuard VPN protokolü *paketlerle değil verilerle çalışır*. This means that AdGuard VPN establishes a separate ”tunnel” for each connection, each HTTP/2 stream corresponds to one connection. AdGuard VPN, verileri bu tünel üzerinden aktarır. Bu, onay paketlerinden tasarruf ederek işlemi hızlandırmamızı sağlar, çünkü birkaç paketin verilerini VPN sunucusuna (veya sunucudan istemciye) göndermeden önce bir pakette arabelleğe alabiliriz. Ve ne kadar az paket olursa, o kadar az onay gerekir.
