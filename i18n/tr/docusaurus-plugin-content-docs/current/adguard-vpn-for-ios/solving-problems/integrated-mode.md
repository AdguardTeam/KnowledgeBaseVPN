---
title: AdGuard Reklam Engelleyici ile uyumluluk
sidebar_position: 3
---

AdGuard VPN'in iki çalışma modu vardır: *VPN* ve *Entegre*.

The *VPN* mode is enabled by default and uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol). Bağlantı hızı ve güvenliğin en iyi kombinasyonunu sağlar. Ancak bu çalışma modu, AdGuard VPN ve AdGuard Reklam Engelleyicinin aynı anda çalışmasına izin vermez.

*Integrated mode*, in turn, uses the IPsec protocol, which makes it possible for the AdGuard apps to work together.

If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use both our apps at the same time.

If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:

1. Open AdGuard VPN for iOS and tap the Settings ⚙ icon in the lower right corner of the screen.

2. Tap *General* → *Operating mode*.

3. Modu *VPN* öğesinden *Entegre* öğesine değiştirin. Tamamlandı!

:::note

In *Integrated mode*, *Exclusions* and *DNS server* are not available.

:::
