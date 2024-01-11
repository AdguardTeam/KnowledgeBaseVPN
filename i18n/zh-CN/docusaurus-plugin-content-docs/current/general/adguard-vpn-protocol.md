---
title: 'How the AdGuard VPN protocol works'
sidebar_position: 4
---

我们的协议适用于[所有 AdGuard VPN 移动应用和桌面应用](https://adguard-vpn.com/zh_cn/welcome.html)。 下载并使用我们的任何产品，您的数据都将受到最安全的保护。

## 我们为什么开发 AdGuard VPN 协议

多年来，我们一直致力于开发各种类型的广告拦截应用和浏览器扩展。 2019 年，我们决定几乎是从零开始开发自己的 VPN 服务。 When, in reality, there were a few reasons that prompted us to do so.

- AdGuard 移动应用程序与 VPN 应用程序有兼容性问题。 通常情况下，两个基于 VPN 的移动应用程序无法同时运行：在 iOS 上偶尔能，而在 Android 上从未实现。 As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. 因此，我们认为开发内部 VPN 是确保兼容性的唯一可行方案：经过我们的潜心研发，两个应用程序终于能够作为一个 VPN 服务一起运行了。
- 其次，VPN 似乎与我们的理念和优先事项更为相关。 我们的首要目标是保护用户的隐私，而这正是 VPN 的作用所在。
- 最后，在多年开发 AdGuard 软件的过程中，我们已经成为了过滤网络流量的专家。 这让我们能够带来新东西，而不是成为另一个平平无奇的 VPN。

从一开始，我们就认为 AdGuard VPN 与其竞争对手有一个关键区别——我们会开发部署一种内部 VPN 协议，该协议不会强迫用户在安全性和速度之间做出选择。

## 流行 VPN 协议的缺点

我们在开发 AdGuard VPN 协议时考虑到了流行 VPN 协议（OpenVPN、WireGuard、IPSec 等）的缺陷：

- 这些协议容易在网络层面上被检测和阻止。
- If you try to "conceal" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it's additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage — due to the use of TCP, there is a need for additional confirmation of delivery.

使用任何流行的 VPN 协议，我们总是面临一个权衡：要么快但易于检测，要么很慢。

## What's great about the AdGuard VPN protocol

- *几乎不可能与正常的 HTTPS 流量区分开来*，也就是说，与 AdGuard VPN 服务器的连接看起来和与正常网站的连接完全相同。
- 我们使用 **HTTPS（TLS）**进行加密，它可以完美地应对完成任务。 这是世界上最流行的加密方法，实现它的程序库经常受到安全审计。

一些现有的 VPN 协议也会进行加密，而且它们的 VPN 痕迹也很难被检测。 但这通常是以速度降低为代价的。 This doesn't happen in our case, thanks to several solutions.

- We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed.
- Unlike others, the AdGuard VPN protocol *operates with data and not with packets*. 这意味着 AdGuard VPN 会为每个连接建立单独的“隧道”，每个 HTTP/2 数据流对应一个连接。 AdGuard VPN 通过此隧道传输数据。 这使我们能够通过节省数据包的确认来加快操作速度，因为我们可以把多个数据包的数据缓冲到一个数据包中，然后再发送到 VPN 服务器（或从服务器发送到客户端）。 而数据包越少，需要的确认就越少。
