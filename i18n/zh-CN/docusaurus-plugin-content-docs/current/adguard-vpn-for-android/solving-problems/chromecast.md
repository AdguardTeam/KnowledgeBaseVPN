---
title: 'AdGuard VPN 与 Chromecast 的兼容性'
sidebar_position: 5
---

内置的 Chromecast 技术与 VPN 不兼容，因为它使用的 [DLNA 协议](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance)不支持 VPN 连接。 这意味着，如果 Chromecast 设备和使用 VPN 的智能手机或平板电脑在同一 Wi-Fi 网络下，那么在大多数情况下移动设备会无法识别 Chromecast。

谷歌还通过限制访问 Chromecast 的 DNS 设置来阻止用户更改其网络设置。 这也阻止了 Chromecast 与 VPN 配合使用。

您可以通过在路由器上设置 VPN 来解决该问题。 这将允许包括 Chromecast 在内所有连接到路由器的设备都使用 VPN 连接。 但请记住：在路由器上设置 VPN 可能需要您了解额外的知识，所以请阅读制造商的手册。
