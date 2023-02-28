---
title: AdGuard 广告拦截程序的兼容性
sidebar_position: 3
---

AdGuard VPN 具有两个操作模式，即常规模式和整合模式。 常规模式默认启用并使用 [AdGuard VPN 协议](/general/adguard-vpn-protocol.mdx)。 它提供连接速度和安全性的最佳组合。

不过，常规操作模式不允许 AdGuard VPN 和 AdGuard 广告拦截程序同时工作。

在整合模式下，使用的是 IPsec 协议，因此可以使 AdGuard 系列应用协同工作。 如果您在安装 AdGuard VPN 时已经安装了 AdGuard 广告拦截程序，那么整合模式将会自动开启使得同系列应用程序同时运行。 如果您先安装了 AdGuard VPN，然后才决定试用 AdGuard 广告拦截程序，请按照以下步骤执行操作一起使用两款应用程序。

1. Open AdGuard VPN for iOS and select "Settings" in the lower right corner of the screen.

2. 点击「应用程序设置」，选择「操作模式」。

3. 将模式从*常规*切换到*整合*。 完成！

> 请注意，在**整合**模式下，您不能使用排除项功能或 DNS 服务器功能。