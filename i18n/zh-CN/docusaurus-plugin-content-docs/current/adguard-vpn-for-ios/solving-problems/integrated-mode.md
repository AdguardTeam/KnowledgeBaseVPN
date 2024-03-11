---
title: AdGuard 广告拦截程序的兼容性
sidebar_position: 3
---

AdGuard VPN 有两种操作模式：「*常规模式*」和「*整合模式*」。

默认启用常规模式并使用 [AdGuard VPN 协议](/general/adguard-vpn-protocol)。 该模式是连接速度和安全性的最佳组合。 不过，常规模式不支持 AdGuard VPN 和 AdGuard Ad Blocker 同时工作。

而整合模式使用的是 IPsec 协议，可以使 AdGuard 系列应用协同工作。 如果您在安装 AdGuard VPN 时已经安装了 AdGuard Ad Blocker，那么整合模式会自动开启使得同系列应用程序同时运行。 如果您先安装了 AdGuard VPN，然后才决定试用 AdGuard Ad Blocker，请按照以下步骤操作以同时使用两款应用。

1. 打开 AdGuard VPN iOS 版，选择屏幕右下角的「*设置*」。

2. 点击「*应用设置*」，选择「*操作模式*」。

3. 将模式从「*VPN*」切换到「*集成模式*」。 完成！

:::注意

在「*集成模式*」下，「*排除项*」和「*DNS 服务器*」不可用。

:::
