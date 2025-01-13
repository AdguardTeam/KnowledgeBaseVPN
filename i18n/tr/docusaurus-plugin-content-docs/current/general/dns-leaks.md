---
title: DNS sızıntısı nedir
sidebar_position: 9
---

Once you install a VPN, you want to be sure that there won’t be any leaks that will lead to your de-anonymization. AdGuard VPN, trafiğinizi ve verilerinizi meraklı gözlerden güvenilir bir şekilde korur. Bununla birlikte, bazı durumlarda VPN hizmetimizde DNS sızıntılarının varlığından şüphelenebilirsiniz. We’ll explain where these concerns come from and why they are unfounded.

## DNS sızıntıları nedir?

Bir VPN kullandığınızda, bir DNS sunucusuna bağlantı şifrelenmiş VPN tünelinin dışına çıkabilir ve trafiğiniz İSS tarafından görülebilir hâle gelebilir.

In other words, every time you open a website, your browser sends a request to the ISP’s DNS server and in return receives the IP address of the requested website. Bu şekilde, İSS'niz tüm çevrimiçi etkinliğinizi görür ve sizi izleyebilir.

## DNS sızıntıları nasıl tespit edilir

DNS sızıntılarını tespit etmek için `whoer.net` gibi her türlü anonimlik kontrol hizmeti vardır. Bu sitelerin algoritmaları net değil, ancak niyetleri kullanıcıları hayali sızıntılarla korkutmak ve potansiyel olarak hizmetlerini satmalarını sağlamak.

Some security scanning websites consider the coincidence of the user’s IP address and the DNS server’s IP address to be a “good” result, indicating that there are no leaks. Gerçekte, böyle bir eşleşme bir VPN kullanımına işaret edebilir. When VPN is disabled and the requests go to your ISP’s DNS server, the IP address of the DNS server and your own one do not coincide.

## AdGuard VPN'de neden DNS sızıntısı yok

Cihazınızda AdGuard VPN'i etkinleştirir ve tarayıcı sitelerinden herhangi birini kontrol ederseniz, DNS sorgularının [AdGuard DNS](https://adguard-dns.io) sunucularına gittiğini tespit eder. Ancak bu bir sızıntı olarak kabul edilemez.

Non-filtering bir AdGuard DNS sunucusu kullanmak, AdGuard VPN'de varsayılan olarak ayarlanır. Bu, sorgularınızın İSS'nizin DNS sunucularına gitmemesini sağlar, bu da çevrimiçi olarak gizli ve anonim kalmanız anlamına gelir.

What’s more, AdGuard DNS is a very popular DNS service, used by over 50 million people. Bu sizin için ne anlama geliyor? Şu durumu hayal edin: normal VPN hizmeti, VPN sunucusuyla aynı IP adresinde bulunan DNS sunucusunu kullanır. Kullanıcı sayısı neredeyse 1.000'i geçmiyor.

And in the case of AdGuard DNS you will “merge” with 50 million users so nobody will be able to track you by the mere fact of using that DNS server.

## AdGuard VPN'de özel DNS sunucusu nasıl ayarlanır

[İyi bilinen DNS sağlayıcılarının](https://adguard-dns.io/kb/general/dns-providers) birçok popüler genel DNS sunucusu vardır. Bazıları yalnızca doğrudan görevlerini yerine getirebilir — istenen alan adlarının IP adreslerini verir ve bazıları daha fazlasını yapabilir.

Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlenmeye karşı korur ve AdGuard DNS Family Protection, AdGuard DNS özelliklerini Güvenli arama ve Ebeveyn denetimi ile birleştirir.

Herhangi bir DNS sunucusunu seçebilir ve AdGuard VPN'de yapılandırabilirsiniz:

- Windows için AdGuard VPN'de: *Ayarlar* → *Uygulama ayarları* → *DNS sunucular*
- Mac için AdGuard VPN'de: *Ayarlar* → *Uygulama ayarları* → *DNS sunucular*
- Android için AdGuard VPN'de: *Ayarlar* (Dişli çark simgesi) → *Uygulama ayarları* → *DNS sunucular*
- iOS için AdGuard VPN'de: *Ayarlar* (Dişli çark simgesi) → *Uygulama ayarları* → *DNS sunucular*
- AdGuard VPN Tarayıcı uzantısında: hamburger menü simgesi → *Ayarlar* → *DNS sunucusu*
