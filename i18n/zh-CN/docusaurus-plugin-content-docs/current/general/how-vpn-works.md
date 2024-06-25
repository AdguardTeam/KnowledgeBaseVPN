---
title: VPN 如何工作
sidebar_position: 1
---

要了解 AdGuard VPN 的工作原理，您首先应该了解 VPN 服务的一般原理。

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN 功能

VPN 是一种虚拟专用网络，有助于隐藏用户的位置并保护的个人网络数据。 VPN 将计算机或移动设备连接到 VPN服务器，并使用该服务器的 IP 地址，使外部观察者认为你在另一个地方。 这使你能够安全地访问各种互联网资源并保护你的个人数据。

这样，VPN 就发挥两个重要功能。

1. **保持匿名**

   在使用互联网连接时，用户会留下数字足迹，这些足迹会被第三方分析和使用。 例如，您访问过的某个在线商店可以保存您的搜索历史记录，然后通过有针对性的广告向您提供他们的产品。 或者，一些别有用心的人通过你设备的 IP 地址得知你的位置并确定你的真实身份，然后就可以秘密监控你在网上的一举一动。 此外，网络浏览器和互联网服务提供商有可能会出于自己的利益使用你的浏览历史，将其出售给广告商或提供给政府机构。 VPN 可以让你隐藏实际 IP 地址，转而用你所连接的 VPN 服务器的 IP 地址进行代替。 这样，你就能保护自己的隐私，并在网上匿名搜索信息。

2. **数据保护**

   如果你连接到一个不可靠的或公共的网络，你设备上的数据会更容易被网络犯罪分子利用。 银行卡详情、用户名和密码、护照数据，所有这些数据都可能被网络欺诈者截获。 VPN 隧道会对你从网上发送和接收的信息进行加密，使其在不法分子手中毫无用处。

## VPN 架构

当你连接到一个网络时，你的电脑或移动设备会被分配一个独特的 ID 号，或 IP 地址。 它通常由 0 到 255 之间的数字组成，以点或冒号分隔。 知道了这个序列，就可以确定设备的地理位置。 一般情况下，用户的 IP 地址是由用户的网络服务提供商设置的，并且始终可见。 因此，您访问的网站服务器可以注册您的 IP 地址，并记录您的请求。 然后，该记录可主要用于数据收集和**流量**分析。

VPN 在用户设备和 VPN 服务器之间建立了一个隧道。 你的数据通过这个隧道得到加密，然后以安全的形式进入公开网络。 Web服务器注册的是隧道端点的 IP 地址，即 VPN 服务器的 IP 地址，而不是设备的真实 IP 地址。 因此，您通过 VPN 隧道后访问的网站会将您选择的 VPN 服务器的地理位置视为您的真实位置。 而且，加密的数据不会落入广告商、黑客和安全服务机构的手中。

![VPN structure](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN 协议的类型

VPN 安全协议是对 VPN 隧道中数据进行加密的工具，同时能让你在开放的互联网中保持个人隐私。 目前，绝大多数现代VPN服务使用以下三种VPN协议之一：

1. [_IPSec_](https://en.wikipedia.org/wiki/IPsec)。 它的主要优势之一是可用于大多数设备和操作系统，并提供高度的安全性。 然而，在该协议中使用双重[封装](https://en.wikipedia.org/wiki/Encapsulation_\(networking\))可能导致连接速度降低。

2. [_OpenVPN_](https://en.wikipedia.org/wiki/OpenVPN)。 这种现代协议是开源的，因此第三方制造商可以改进和更新技术。

3. [_WireGuard_](https://en.wikipedia.org/wiki/WireGuard)。 其主要优点是易于使用、高效、不易受到攻击。

除了这些 VPN 协议外，还有其他协议（例如 TLS、SSTP、IKEv2），但它们要么不流行，要么不符合现代数据加密标准。

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

AdGuard VPN 也有自己的 [_协议_](/general/adguard-vpn-protocol)。 其最大的优点之一，就是使用 AdGuard VPN 协议传输的流量与普通流量极难区分。 因为 VPN 隧道可以完全伪装成正常的 HTTPS 流量，所以极难检测和阻止。 此外，它基于现代 HTTP/2 协议的机制，可确保较高的连接速度。

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## VPN 的缺点

尽管优点很多，但 VPN 也不是完美的：

### 速度缓慢

由于你的网络流量不直接进入网络服务器，而是首先经过 VPN 服务器，因此 VPN 连接的速度会下降。 其他因素也会影响使用 VPN 时的速度：VPN 服务器的负载、带宽、VPN 协议与你的操作系统的兼容性。 所有这些因素以及网络本身的速度都可能影响 VPN 连接的整体用户体验。

### 访问阻断

一些在线服务做了很多努力来检测 VPN 流量，并阻止 VPN 用户的访问。 然而，并不是很多 VPN 都可以伪装自己，让它们仅被视为常规流量。 因此，许多通过VPN连接访问某个网站的尝试都以失败告终。

### VPN 连接中断

信号弱、网络过载、VPN 与防火墙、杀毒软件和其他程序不兼容、VPN 协议过时--所有这些都可能导致 VPN 连接突然失败，特别是来自不可靠的供应商的 VPN。

## AdGuard VPN

我们的 VPN 服务有几个重要的 [优势](/general/why-adguard-vpn)：

- [_专有 VPN 协议_](/general/adguard-vpn-protocol)，即使在较慢的互联网连接下也能稳定运行，并伪装成正常流量，使其更难以跟踪和阻止

- [_无记录政策_](https://adguard-vpn.com/privacy.html)，这意味着 AdGuard VPN 不会收集您的个人数据，也不会将其传输给第三方

- _分布在数十个国家的 50 多个 VPN 服务器_。

- _易用性和广泛的定制选项_

目前，AdGuard VPN 有以下版本：

- 适用于 Chrome、Edge、Firefox 和 Opera 的[浏览器扩展](/adguard-vpn-browser-extension/overview)

- 适用于 [Android]（/adguard-vpn-for-android/overview） 和 [iOS]（/adguard-vpn-for-ios/overview） 的移动应用程序

- 适用于 [Windows](/adguard-vpn-for-windows/overview) 和 [Mac](/adguard-vpn-for-mac/overview) 的桌面应用程序

[了解有关 AdGuard VPN 功能的更多信息]（https://adguard-vpn.com/welcome.html）
