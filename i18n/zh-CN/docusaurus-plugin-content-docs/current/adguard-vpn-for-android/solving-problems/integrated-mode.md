---
title: AdGuard 广告拦截程序的兼容性
sidebar_position: 3
---


AdGuard VPN has the VPN operating mode enabled by default, which uses its own [AdGuard VPN protocol](/general/adguard-vpn-protocol.mdx). 它提供连接速度和安全性的最佳组合。 不过，本操作模式不允许 AdGuard VPN 和 AdGuard 广告拦截程序同时工作。 相应的，使用 IPsec 协议的兼容模式可以使 AdGuard 系列应用协同工作。 如果您在安装 AdGuard VPN 时已经安装了 AdGuard 广告拦截程序，那么兼容模式将会自动开启使得同系列应用程序可同时运行。 如果您先安装了 AdGuard VPN，然后再决定安装 AdGuard广告拦截程序，那么您需要按照以下步骤操作以保证它们的同时运行。

1. 打开 AdGuard VPN 安卓版，点击屏幕右上角的齿轮图标。

2. 点击「高级设置」，选择「操作模式」。

3. 将模式切换为 *AdGuard 兼容模式*。 完成！