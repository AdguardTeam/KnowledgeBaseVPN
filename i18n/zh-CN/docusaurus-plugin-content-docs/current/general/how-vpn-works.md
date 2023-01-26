---
title: VPN 如何工作
sidebar_position: 1
---

要了解 AdGuard VPN 的工作原理，用户首先应该了解 VPN 服务的一般原则。

## VPN 功能

VPN 是一种虚拟专用网络，有助于隐藏用户的位置并保护网络的个人数据。 VPN 将计算机或移动设备连接到 VPN服务器，并使用该服务器的 IP 地址，使外部观察者认为你在另一个地方。 这使你能够安全地访问各种互联网资源并保护你的个人数据。

这样，VPN 就发挥两个重要功能。

1. **保持匿名**

使用互联网连接，用户留下他们的数字足迹，然后第三方可以对其进行分析和使用。 例如，你访问过的某个网店可以保存你的搜索历史，然后通过有针对性的广告向你推下他们的其他产品。 或者，一些别有用心的人在通过你的设备的 IP 地址得知你的位置并确定你的真实身份后，可以秘密监控你在网上的一举一动。 此外，网络浏览器和互联网服务提供商就有可能会出于自己的利益使用你的浏览历史，将其出售给广告商或提供给政府机构。 VPN 允许你隐藏你的真实IP地址，并以你所连接的 VPN 服务器的 IP 地址代替。 这样，你就能保护自己的隐私，并在网上匿名搜索信息。

2. **数据保护**

如果你连接到一个不可靠的或公共的网络，你设备上的数据可能会被网络犯罪分子利用。 银行卡细节、用户名和密码、护照数据，所有这些数据都可能被在线欺诈者截获。 VPN 隧道通过对你从网上发送和接收的信息进行加密，保证重要的隐私数据不会落入不法分子手中。

## VPN 结构

当你连接到一个网络时，你的电脑或移动设备会被分配一个独特的 ID 号，或 IP 地址。 它通常由从 0 到 255 的数字组成，用点或冒号隔开。 知道了这个序列，就可以确定设备的地理位置。 在一般情况下，用户的 IP 地址是由用户的互联网服务提供商设置的，并且它可以被他人检视。 为此，用户正在访问的网站的网络服务器可以注册你的 IP 地址，并记录用户的请求。 然后，该记录可主要用于数据收集和交通分析。

VPN 在用户的设备和 VPN 服务器之间建立一个隧道。 你的数据通过这个隧道，得到加密，然后以安全的形式进入开放的互联网。 因此，在网络服务器看来，你的设备不再有你的真实 IP 地址，而是隧道端点的 IP 地址，即 VPN 服务器。 因此，你通过 VPN 隧道后到达的网站将把你选择的 VPN 服务器的地理位置视为你的真实位置。 而且，加密的数据不会落入广告商、黑客和政府机构的手中。

![VPN 结构](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN 协议的类型

VPN 安全协议是对 VPN 隧道中的数据进行加密的工具，允许你在开放的互联网中保持用户隐私。 目前，绝大多数现代 VPN 服务使用以下三种 VPN 协议：

1. [*IPsec 协议*](https://en.wikipedia.org/wiki/IPsec)。 其主要优势之一是，它可以在大多数设备和操作系统上使用，并提供高水平的安全性。 然而，在该协议中使用双重[封装](https://en.wikipedia.org/wiki/Encapsulation_(networking))可能导致连接速度降低。

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN)。 这种现代协议是开源的，因此第三方制造商可以改进和更新技术。

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard)。 它的主要优点是易于使用，效率高，不容易受到攻击。

除了这些 VPN 协议外，还有其他协议（例如 TLS、SSTP、IKEv2），但它们要么不流行，要么不符合现代数据加密标准。

![VPN 协议的工作原理](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN 也有自己的[*协议*](adguard-vpn-protocol.mdx)。 其最大优点之一是，使用 AdGuard VPN 协议传输的流量极难与普通流量区分。 VPN 隧道可以完全伪装成正常的 HTTPS 流量，因此极难检测和阻止它。 此外，基于现代 HTTP/2 协议的机制确保了高连接速度。

![隐藏式 VPN 的工作原理](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## VPN 的缺点

尽管优点很多，VPN 也不是完美的：

**速度缓慢**

由于你的流量不直接进入网络服务器，而是首先通过 VPN 服务器，因此 VPN 连接的速度会下降。 其他因素也会影响使用 VPN 时的速度：VPN 服务器的负载、带宽、VPN 协议与你的操作系统的兼容性。 所有这些因素，以及网络本身的速度，都会降低你的 VPN 连接质量。

**屏蔽对网站和服务的访问**

一些在线服务做了很多努力来检测 VPN 流量，并阻止 VPN 用户的访问。 然而，没有多少 VPN 能将流量伪装成普通流量。 因此，许多人在用其他 VPN 时会常常被拦截，无法进入一些网站。

**VPN 连接中断**

信号弱、网络过载、VPN 与防火墙、杀毒软件和其他程序不兼容、VPN 协议过时--所有这些都可能导致 VPN 连接突然失败，特别是来自不可靠的供应商的 VPN。

## AdGuard VPN

我们的 VPN 服务有几个独特的[优势](why-adguard-vpn.md)：

* [*专有 VPN 协议*](adguard-vpn-protocol.mdx)，即使在互联网连接速度较慢的情况下也能稳定工作，并伪装成正常流量，使其更难以跟踪和阻止

* [*“无记录”政策*](https://adguard-vpn.com/en/privacy.html)，这意味着 AdGuard VPN 不会收集用户的个人数据，也不会将其传输给第三方

* *位于十几个国家的超过 50 个 VPN 服务器位置*

* *使用便捷，具有广泛的自定义选项*

目前，AdGuard VPN 能够

* 适用于 Chrome、Firefox 和 Edge 的[浏览器扩展](../adguard-vpn-browser-extension/overview.md)

* 适用于[安卓](../adguard-vpn-for-android/overview.md)和 [iOS](../adguard-vpn-for-ios/overview.md) 的移动应用程序

* 适用于 [Windows](../adguard-vpn-for-windows/overview.md) 和 [Mac](../adguard-vpn-for-mac/overview.md) 的桌面应用程序

你可以[在这里](https://adguard-vpn.com/en/welcome.html)了解更多关于 AdGuard VPN 的功能（包括无限版本）。
