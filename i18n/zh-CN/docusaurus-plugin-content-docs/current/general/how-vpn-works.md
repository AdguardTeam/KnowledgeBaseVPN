---
title: VPN 如何工作
sidebar_position: 1
---

要了解 AdGuard VPN 的工作原理，用户首先应该了解 VPN 服务的一般原则。

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN 功能

A VPN is a virtual private network that helps hide your location and protect your data on the Web. VPN 将计算机或移动设备连接到 VPN服务器，并使用该服务器的 IP 地址，使外部观察者认为你在另一个地方。 这使你能够安全地访问各种互联网资源并保护你的个人数据。

这样，VPN 就发挥两个重要功能。

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. 银行卡详情、用户名和密码、护照数据，所有这些数据都可能被网络欺诈者截获。 VPN 隧道可以加密你从网上发送和接收的信息，保证重要的隐私数据不会落入不法分子手中。

## VPN 结构

当你连接到网络时，你的电脑或移动设备会被分配一个独特的 ID 号，也就是 IP 地址。 它通常由从 0 到 255 的数字组成，用点或冒号隔开。 知道了这个序列，就可以确定设备的地理位置。 一般情况下，用户的 IP 地址是由用户的网络服务提供商设置的，并且始终可见。 因此，你访问的网站的网络服务器可以注册您的 IP 地址并记录你的请求。 这类记录主要用于数据收集和流量分析。

VPN 在用户设备和 VPN 服务器之间建立了一个隧道。 你的数据通过这个隧道得到加密，然后以安全的形式进入公开网络。 所以，在网络服务器看来，你的设备不再有你的真实 IP 地址，而是隧道端点的 IP 地址，即 VPN 服务器。 于是，你通过 VPN 隧道访问的网站会将你所选的 VPN 服务器位置视为你的真实位置。 并且加密后的数据不会落入广告商、黑客和安全服务机构的手中。

![VPN 结构](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN 协议的类型

VPN 安全协议是对 VPN 隧道中数据进行加密的工具，同时能让你在开放的互联网中保持个人隐私。 目前，绝大多数现代 VPN 服务使用以下三种 VPN 协议之一：

1. [*IPsec 协议*](https://en.wikipedia.org/wiki/IPsec)。 此协议的主要优势之一是它可以在大多数设备和操作系统上使用，并提供高水平的安全性。 不过，该协议使用的双[封装](https://en.wikipedia.org/wiki/Encapsulation_(networking))可能会降低连接速度。

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN)。 这种现代协议是开源的，因此第三方制造商可以改进和更新技术。

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard)。 此协议的主要优点是易于使用，效率高，不容易受到攻击。

除了这些 VPN 协议外，还有其他协议（例如 TLS、SSTP、IKEv2），但它们要么不流行，要么不符合现代数据加密标准。

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## VPN 的缺点

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### 速度缓慢

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### 访问阻止

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### VPN 连接中断

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *位于十几个国家的超过 50 个 VPN 服务器位置*

- *使用便捷，具有广泛的自定义选项*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
