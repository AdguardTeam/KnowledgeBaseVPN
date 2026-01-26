---
title: AdGuard広告ブロッカーとの併用モード
sidebar_position: 4
---

AdGuard VPNには、*「VPN」*と*「併用モード」*という2つの動作モードがあります。

The *VPN* mode is enabled by default and uses the [AdGuard VPN protocol](https://trusttunnel.org/). このプロトコルは、接続速度とセキュリティのベストなコンビネーションを提供します。 しかし、「VPN」動作モードでは、AdGuard VPN と AdGuard 広告ブロッカーを同時に動作させることはできません。

*Integrated mode*, in turn, uses the IPsec protocol, which makes it possible for the AdGuard apps to work together.

If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use both our apps at the same time.

If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:

1. Open AdGuard VPN for iOS and tap the Settings ⚙ icon in the lower right corner of the screen.

2. Tap *General* → *Operating mode*.

3. 動作モードを「*VPN*」から「*併用モード*」に切り替えてください。 これで完了です。

:::note

In *Integrated mode*, *Exclusions* and *DNS server* are not available.

:::
