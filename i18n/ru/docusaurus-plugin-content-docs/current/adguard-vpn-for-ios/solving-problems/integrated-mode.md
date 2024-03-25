---
title: Как совместить работу AdGuard VPN и Блокировщика рекламы AdGuard
sidebar_position: 3
---

У AdGuard VPN два режима работы: *VPN* и *Интегрированный*.

The *VPN* mode is enabled by default and uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol). Он обеспечивает лучшую комбинацию скорости и безопасности соединения. Однако этот режим работы не позволяет одновременно работать AdGuard VPN и Блокировщику рекламы AdGuard.

*Integrated mode*, in turn, uses the IPsec protocol, which makes it possible for the AdGuard apps to work together.

If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use both our apps at the same time.

If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:

1. Open AdGuard VPN for iOS and tap the Settings ⚙ icon in the lower right corner of the screen.

2. Tap *General* → *Operating mode*.

3. Переключите режим с *VPN* на *Интегрированный*. Готово!

:::note

In *Integrated mode*, *Exclusions* and *DNS server* are not available.

:::
