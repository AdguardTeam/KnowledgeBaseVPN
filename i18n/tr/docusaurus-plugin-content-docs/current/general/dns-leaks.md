---
title: 'DNS sızıntısı nedir'
sidebar_position: 9
---

Bir VPN kurduktan sonra, anonimleştirilmenize yol açacak herhangi bir sızıntı olmayacağından emin olmak istersiniz. AdGuard VPN, trafiğinizi ve verilerinizi meraklı gözlerden güvenilir bir şekilde korur. Bununla birlikte, bazı durumlarda VPN hizmetimizde DNS sızıntılarının varlığından şüphelenebilirsiniz. Bu endişelerin nereden kaynaklandığını ve neden asılsız olduğunu açıklayacağız.

## DNS sızıntıları nedir?

Bir VPN kullandığınızda, bir DNS sunucusuna bağlantı şifrelenmiş VPN tünelinin dışına çıkabilir ve trafiğiniz İSS tarafından görülebilir hâle gelebilir.

Başka bir deyişle, bir siteyi her açtığınızda, tarayıcınız İSS'nin DNS sunucusuna bir istek gönderir ve karşılığında istenen sitenin IP adresini alır. Bu şekilde, İSS'niz tüm çevrimiçi etkinliğinizi görür ve sizi izleyebilir.

## DNS sızıntıları nasıl tespit edilir

DNS sızıntılarını tespit etmek için `whoer.net` gibi her türlü anonimlik kontrol hizmeti vardır. The algorithms of these websites are not clear, but their intentions are — to scare users with imaginary leaks, potentially enabling them to sell their services.

Bazı güvenlik tarama web siteleri, kullanıcının IP adresi ile DNS sunucusunun IP adresinin çakışmasını "iyi" bir sonuç olarak kabul eder ve bu da herhangi bir sızıntı olmadığını gösterir. Gerçekte, böyle bir eşleşme bir VPN kullanımına işaret edebilir. VPN devre dışı bırakıldığında ve istekler İSS'nizin DNS sunucusuna gittiğinde, DNS sunucusunun IP adresi ile sizinkinin IP adresi çakışmaz.

## AdGuard VPN'de neden DNS sızıntısı yok

Cihazınızda AdGuard VPN'i etkinleştirir ve tarayıcı sitelerinden herhangi birini kontrol ederseniz, DNS sorgularının [AdGuard DNS](https://adguard-dns.io) sunucularına gittiğini tespit eder. Ancak bu bir sızıntı olarak kabul edilemez.

Non-filtering bir AdGuard DNS sunucusu kullanmak, AdGuard VPN'de varsayılan olarak ayarlanır. Bu, sorgularınızın İSS'nizin DNS sunucularına gitmemesini sağlar, bu da çevrimiçi olarak gizli ve anonim kalmanız anlamına gelir.

Dahası, AdGuard DNS, 50 milyondan fazla kişi tarafından kullanılan çok popüler bir DNS hizmetidir. Bu sizin için ne anlama geliyor? Şu durumu hayal edin: normal VPN hizmeti, VPN sunucusuyla aynı IP adresinde bulunan DNS sunucusunu kullanır. Kullanıcı sayısı neredeyse 1.000'i geçmiyor.

Ve AdGuard DNS söz konusu olduğunda, 50 milyon kullanıcıyla "birleşirsiniz", böylece yalnızca o DNS sunucusunu kullandığınız gerçeğiyle kimse sizi izleyemez.

## AdGuard VPN'de özel DNS sunucusu nasıl ayarlanır

[İyi bilinen DNS sağlayıcılarının](https://adguard-dns.io/kb/general/dns-providers) birçok popüler genel DNS sunucusu vardır. Bazıları yalnızca doğrudan görevlerini yerine getirebilir — istenen alan adlarının IP adreslerini verir ve bazıları daha fazlasını yapabilir.

Örneğin, AdGuard DNS reklamları kaldırır ve cihazınızı izlenmeye karşı korur ve AdGuard DNS Family Protection, AdGuard DNS özelliklerini Güvenli arama ve Ebeveyn denetimi ile birleştirir.

Herhangi bir DNS sunucusunu seçebilir ve AdGuard VPN'de yapılandırabilirsiniz:

- Windows için AdGuard VPN'de: *Ayarlar* → *Uygulama ayarları* → *DNS sunucular*
- Mac için AdGuard VPN'de: *Ayarlar* → *Uygulama ayarları* → *DNS sunucular*
- Android için AdGuard VPN'de: *Ayarlar* (Dişli çark simgesi) → *Uygulama ayarları* → *DNS sunucular*
- iOS için AdGuard VPN'de: *Ayarlar* (Dişli çark simgesi) → *Uygulama ayarları* → *DNS sunucular*
- AdGuard VPN Tarayıcı uzantısında: hamburger menü simgesi → *Ayarlar* → *DNS sunucusu*
