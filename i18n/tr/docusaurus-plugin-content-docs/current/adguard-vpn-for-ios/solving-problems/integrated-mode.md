---
title: AdGuard Reklam Engelleyici ile uyumluluk
sidebar_position: 4
---

AdGuard VPN'in iki çalışma modu vardır: *VPN* ve *Entegre*.

*VPN* modu varsayılan olarak etkindir ve [AdGuard VPN protokolünü](https://trusttunnel.org/) kullanır. Bağlantı hızı ve güvenliğin en iyi kombinasyonunu sağlar. Ancak bu çalışma modu, AdGuard VPN ve AdGuard Reklam Engelleyicinin aynı anda çalışmasına izin vermez.

*Entegre mod* ise IPsec protokolünü kullanır ve bu da AdGuard uygulamalarının birlikte çalışmasını mümkün kılar.

AdGuard VPN'i yüklerken zaten AdGuard Reklam Engelleyiciniz varsa, bu mod otomatik olarak açılır ve her iki uygulamamızı aynı anda kullanmanıza izin verir.

Önce AdGuard VPN'i yüklediyseniz ve daha sonra AdGuard Reklam Engelleyiciyi denemeye karar verdiyseniz, iki uygulamayı birlikte kullanmak için aşağıdaki adımları izleyin:

1. iOS için AdGuard VPN'i açın ve ekranın sağ alt köşesindeki Ayarlar ⚙ simgesine dokunun.

2. *Genel* → *Çalışma modu* öğesine dokunun.

3. Modu *VPN* öğesinden *Entegre* öğesine değiştirin. Tamamlandı!

:::note

*Entegre modda*, *İstisnalar* ve *DNS sunucusu* kullanılamaz.

:::
