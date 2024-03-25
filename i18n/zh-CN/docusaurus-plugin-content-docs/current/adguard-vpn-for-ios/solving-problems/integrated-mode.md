---
title: AdGuard 广告拦截程序的兼容性
sidebar_position: 3
---

AdGuard VPN 有两种操作模式：「*常规模式*」和「*整合模式*」。

The *VPN* mode is enabled by default and uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol). 该模式是连接速度和安全性的最佳组合。 不过，常规模式不支持 AdGuard VPN 和 AdGuard Ad Blocker 同时工作。

*Integrated mode*, in turn, uses the IPsec protocol, which makes it possible for the AdGuard apps to work together.

If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use both our apps at the same time.

If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:

1. Open AdGuard VPN for iOS and tap the Settings ⚙ icon in the lower right corner of the screen.

2. Tap *General* → *Operating mode*.

3. 将模式从「*VPN*」切换到「*集成模式*」。 完成！

:::note

In *Integrated mode*, *Exclusions* and *DNS server* are not available.

:::
