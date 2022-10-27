---
title: AdGuard Reklam Engelleyici ile uyumluluk
sidebar_position: 3
---

AdGuard VPN has two operating modes — General and Integrated one. Genel mod varsayılan olarak etkindir ve [AdGuard VPN protokolünü](/general/adguard-vpn-protocol.mdx) kullanır. Bağlantı hızı ve güvenliğin en iyi kombinasyonunu sağlar.

Ancak bu çalışma modu, AdGuard VPN ve AdGuard Reklam Engelleyicinin aynı anda çalışmasına izin vermez.

Tümleşik modda ise IPsec protokolü kullanılır, bu da AdGuard uygulamalarının birlikte çalışmasını mümkün kılar. AdGuard VPN'i yüklerken zaten AdGuard Reklam Engelleyiciniz varsa, bu mod otomatik olarak açılır ve uygulamalarımızı aynı anda kullanmanıza izin verir. Önce AdGuard VPN'i yüklediyseniz ve ardından AdGuard AdGuard Reklam Engelleyiciyi denemeye karar verdiyseniz, iki uygulamayı birlikte kullanmak için şu adımları takip edin:

1. iOS için AdGuard VPN'i açın ve ekranın sağ alt köşesindeki "Ayarlar" öğesini seçin.

2. "Uygulama ayarları" öğesine gidin ve "Çalışma modu" öğesini seçin.

3. Switch the mode from *General* to *Integrated*. Tamamlandı!

> Note that in **Integrated** mode you can't use the Exclusions feature or the DNS server feature.