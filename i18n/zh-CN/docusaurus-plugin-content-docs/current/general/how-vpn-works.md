---
title: VPN 如何工作
sidebar_position: 1
---

要了解 AdGuard VPN 的工作原理，用户首先应该了解 VPN 服务的一般原则。

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube 视频播放器" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN 功能

VPN 是一种虚拟专用网络，有助于隐藏用户的位置并保护的个人网络数据。 VPN 将计算机或移动设备连接到 VPN服务器，并使用该服务器的 IP 地址，使外部观察者认为你在另一个地方。 这使你能够安全地访问各种互联网资源并保护你的个人数据。

这样，VPN 就发挥两个重要功能。

1. **保持匿名**

    在使用互联网连接时，用户会留下数字足迹，这些足迹会被第三方分析和使用。 例如，你访问过的某个网店可以保存你的搜索历史，这样他们就可以有针对性地向你推送产品。 或者，一些别有用心的人通过你设备的 IP 地址得知你的位置并确定你的真实身份，然后就可以秘密监控你在网上的一举一动。 不仅如此，浏览器和网络服务提供商都有可能会为了自己的利益去利用你的浏览记录，并且将其出售给广告商或提供给政府机构。 VPN 可以让你隐藏实际 IP 地址，转而用你所连接的 VPN 服务器的 IP 地址进行代替。 这样你就能保护自己的隐私，并在网上匿名搜索信息。

1. **Data protection**

    If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. 银行卡详情、用户名和密码、护照数据，所有这些数据都可能被网络欺诈者截获。 The VPN tunnel encrypts the information you send to and receive from the Web, making it useless in the wrong hands.

## VPN 结构

当你连接到网络时，你的电脑或移动设备会被分配一个独特的 ID 号，也就是 IP 地址。 它通常由从 0 到 255 的数字组成，用点或冒号隔开。 知道了这个序列，就可以确定设备的地理位置。 The IP address is usually assigned by your ISP, and it will be visible all the way to the desired resource. 因此，你访问的网站的网络服务器可以注册您的 IP 地址并记录你的请求。 这类记录主要用于数据收集和流量分析。

VPN 在用户设备和 VPN 服务器之间建立了一个隧道。 你的数据通过这个隧道得到加密，然后以安全的形式进入公开网络。 The web server therefore registers the IP address of the endpoint of the tunnel, meaning the VPN server, and thus not the device's real IP address. 于是，你通过 VPN 隧道访问的网站会将你所选的 VPN 服务器位置视为你的真实位置。 并且加密后的数据不会落入广告商、黑客和安全服务机构的手中。

![VPN 结构](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN 协议的类型

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. 目前，绝大多数现代 VPN 服务使用以下三种 VPN 协议之一：

1. [*IPsec 协议*](https://en.wikipedia.org/wiki/IPsec)。 此协议的主要优势之一是它可以在大多数设备和操作系统上使用，并提供高水平的安全性。 不过，该协议使用的双[封装](https://en.wikipedia.org/wiki/Encapsulation_(networking))可能会降低连接速度。

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN)。 这种现代协议是开源的，因此第三方制造商可以改进和更新技术。

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard)。 此协议的主要优点是易于使用，效率高，不容易受到攻击。

除了这些 VPN 协议外，还有其他协议（例如 TLS、SSTP、IKEv2），但它们要么不流行，要么不符合现代数据加密标准。

AdGuard VPN 也有自己的[*协议*](/general/adguard-vpn-protocol)。 其最大的优点之一，就是使用 AdGuard VPN 协议传输的流量与普通流量极难区分。 因为 VPN 隧道可以完全伪装成正常的 HTTPS 流量，所以极难检测和阻止。 不仅如此，基于现代 HTTP/2 协议的机制确保了高连接速度。

## VPN 的缺点

尽管优点很多，但 VPN 也不是完美的：

### 速度缓慢

由于你的网络流量不直接进入网络服务器，而是首先经过 VPN 服务器，因此 VPN 连接的速度会下降。 其他因素也会影响使用 VPN 时的速度：VPN 服务器的负载、带宽、VPN 协议与你操作系统的兼容性。 All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection.

### 访问阻止

有些在线服务会费尽心思去检测 VPN 流量，并阻止 VPN 用户的访问。 However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. 所以许多人在用其他 VPN 时会常常被拦截，无法进入网站。

### VPN 连接中断

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers.

## AdGuard VPN

我们的 VPN 服务有几个独特的[优势](/general/why-adguard-vpn)：

- [*专有 VPN 协议*](/general/adguard-vpn-protocol)，即使在互联网连接速度较慢的情况下也能稳定工作，并将自身伪装成正常流量以防被跟踪和阻止

- [*无日志政策*](https://adguard-vpn.com/privacy.html)，这意味着 AdGuard VPN 不会收集您的个人数据，也不会将其传输给第三方

- *位于十几个国家的超过 50 个 VPN 服务器位置*

- *使用便捷，具有广泛的自定义选项*

目前，AdGuard VPN 有以下版本：

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Edge, Firefox, and Opera

- 适用于[安卓](/adguard-vpn-for-android/overview)和 [iOS](/adguard-vpn-for-ios/overview) 的移动应用程序

- 适用于 [Windows](/adguard-vpn-for-windows/overview) 和 [Mac](/adguard-vpn-for-mac/overview) 的桌面应用程序

[了解有关 AdGuard VPN 功能的更多信息](https://adguard-vpn.com/welcome.html)
