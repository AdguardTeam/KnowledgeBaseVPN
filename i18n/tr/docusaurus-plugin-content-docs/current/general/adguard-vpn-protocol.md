---
title: 'AdGuard VPN protokolü nasıl çalışır'
sidebar_position: 4
---

Protokolümüz, [tüm AdGuard VPN mobil ve masaüstü uygulamaları](https://adguard-vpn.com/welcome.html) tarafından kullanılmaktadır. Ürünlerimizden herhangi birini indirin ve verilerinizin en güvenli şekilde korunduğunu bilerek kullanın.

## AdGuard VPN protokolünü neden geliştirdik

Yıllardır, reklam engelleme uygulamalarının ve tarayıcı uzantılarının tüm çeşitlerini geliştirmeye odaklandık. Ve 2019'da birdenbire kendi VPN hizmetimizi geliştirmeye karar verdik. Gerçekte, bizi bunu yapmaya iten birkaç neden vardı.

- AdGuard mobil uygulamalarının VPN uygulamalarıyla uyumluluk sorunları vardı. Normalde, iki VPN tabanlı mobil uygulama birlikte çalışamaz: iOS'ta nadir durumlarda ve Android'de asla. AdGuard Reklam Engelleyici uygulamaları ağ trafiğini filtrelemek için yerel VPN kullandığından, bunları herhangi bir VPN uygulamasıyla birlikte kullanmak söz konusu olamaz. Bu nedenle, uyumluluğu garanti edebilecek tek uygun çözüm olarak şirket içi bir VPN geliştirmeyi gördük: biraz sihir uyguladıktan sonra, iki uygulama tek bir VPN hizmeti olarak birlikte çalışabilir.
- İkincisi, VPN bizim felsefemiz ve önceliklerimizle fazlasıyla alakalı görünüyordu. Birincil hedefimiz, kullanıcıların gizliliğini korumaktır ve VPN'ler tam olarak bunun içindir.
- Son olarak, AdGuard yazılımını geliştirdiğimiz yıllar boyunca ağ trafiğini filtreleme konusunda uzmanlaştık. Bu, başka bir dilenci VPN olmak yerine yeni bir şey getirmemize izin verdi.

En başından itibaren, AdGuard VPN'in rakiplerinden önemli bir farkı olacağına karar verdik — kullanıcıları güvenlik ve hız arasında seçim yapmaya zorlamayan bir şirket içi VPN protokolü geliştirip dağıtacağız.

## Popüler VPN protokollerinin dezavantajları

Popüler VPN protokollerinin (OpenVPN, WireGuard, IPSec, vb.) dezavantajlarını görerek AdGuard VPN protokolünü geliştirdik:

- Ağ düzeyinde kolayca tespit edilebilir ve engellenebilirler.
- Eğer onları "gizlemeye" çalışırsanız, performans düşer.

VPN kullanımını "gizlemek" için, veri akışı genellikle bir TCP bağlantısına "sarılır" ve bazen trafiğin normal site iletişimi gibi görünmesini sağlamak için ek olarak şifrelenir. Ne yazık ki, bu yaklaşımın bir dezavantajı vardır — TCP kullanımı nedeniyle ek teslimat onayına ihtiyaç vardır.

Herhangi bir popüler VPN protokolünü kullanırken, her zaman bir takasla karşı karşıyayız: hızlı ama algılaması kolay ve yavaş.

## AdGuard VPN protokolünün harika yanı

- *Normal HTTPS trafiğinden ayırt etmek neredeyse imkansızdır*, yani AdGuard VPN sunucusuna olan bağlantı, normal bir siteye olan bağlantıyla tamamen aynı görünür.
- Şifreleme için, bu görevle mükemmel bir şekilde başa çıkan **HTTPS (TLS)** kullanıyoruz. Dünyadaki en popüler şifreleme yöntemidir ve onu uygulayan kütüphaneler güvenlik açısından sürekli olarak denetlenmektedir.

Bazı mevcut VPN protokolleri de şifreleme görevini yerine getirir ve bunların (ve dolayısıyla bir VPN kullanma gerçeğinin) tespit edilmesi zordur. Ancak bunun bedeli genellikle düşük hızdır. Birkaç çözüm sayesinde bizim durumumuzda bu gerçekleşmiyor.

- Yüksek hızı korurken AdGuard VPN protokolünü tespit etmeyi neredeyse imkansız hâle getiren **HTTP/2 aktarım protokolünü** kullanıyoruz.
- Diğerlerinden farklı olarak, AdGuard VPN protokolü *paketlerle değil verilerle çalışır*. Bu, AdGuard VPN'in her bağlantı için ayrı bir "tünel" oluşturduğu anlamına gelir, her HTTP/2 akışı bir bağlantıya karşılık gelir. AdGuard VPN, verileri bu tünel üzerinden aktarır. Bu, onay paketlerinden tasarruf ederek işlemi hızlandırmamızı sağlar, çünkü birkaç paketin verilerini VPN sunucusuna (veya sunucudan istemciye) göndermeden önce bir pakette arabelleğe alabiliriz. Ve ne kadar az paket olursa, o kadar az onay gerekir.
