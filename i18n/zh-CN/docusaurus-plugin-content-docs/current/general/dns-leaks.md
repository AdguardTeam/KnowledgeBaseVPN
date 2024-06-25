---
title: '什么是 DNS 泄漏'
sidebar_position: 9
---

安装 VPN 后，您需要确保不会出现任何泄露导致您去匿名化。 AdGuard VPN 能有效保护您的流量和数据免遭窥探。 不过，在某些情况下，您可能会怀疑我们的 VPN 服务存在 DNS 泄漏。 我们将解释这些担忧从何而来，以及为什么它们是站不住脚的。

## 什么是 DNS 泄漏？

使用 VPN 时，您与 DNS 服务器的连接可能会在加密的 VPN 隧道之外进行，ISP 可能会看到您的流量。

换句话说，每次您打开网站时，您的浏览器都会向 ISP 的 DNS 服务器发送请求，并接收所请求网站的 IP 地址。 这样，您的 ISP 就能看到你所有的在线活动，并能跟踪你。

## 如何检测 DNS 泄漏

有各种匿名检查服务可用于检测 DNS 泄漏，例如 `whoer.net`。 这些网站的算法尚不清楚，但它们的意图是--用假想的泄密事件来吓唬用户，从而有可能使它们能够出售自己的服务。

一些安全扫描网站认为，用户 IP 地址和 DNS 服务器 IP 地址重合是“好事”，表明没有泄漏。 实际上，这样中重合可能是使用了 VPN。 而当 VPN 被禁用并且把请求发送至 ISP 的 DNS 服务器时，DNS 服务器的 IP 地址与您自己的 IP 地址并不一致。

## 为什么 AdGuard VPN 不会出现 DNS 泄露

如果您在设备上启用 AdGuard VPN，并在任意扫描网站上运行检查，您就会发现 DNS 查询都转到了 [AdGuard DNS](https://adguard-dns.io) 服务器。 但是，这不能被视为泄漏。

AdGuard VPN 被设置成默认使用非过滤 AdGuard DNS 服务器。 这可确保您的查询不会发送至 ISP 的 DNS 服务器，这意味着您可以保持隐私和在线匿名。

此外，AdGuard DNS 是一项非常受欢迎的 DNS 服务，拥有超过 5000 万的用户。 这意味着什么呢？ 试想：通常的 VPN 服务使用的是和 VPN 服务器相同 IP 地址的 DNS 服务器。 其用户数量几乎不超过 1000 人。

而在使用 AdGuard DNS 的情况下，您将与 5000 万用户进行“合并”，这样就不会有人仅用您的 DNS 服务器追踪到您。

## 如何在 AdGuard VPN 中设置自定义 DNS 服务器

现在市面上有许多由[知名 DNS 提供商](https://adguard-dns.io/kb/general/dns-providers)提供的公共 DNS 服务器。 其中一些只能履行其直接职责--提供所请求域名的 IP 地址，而另一些则可以做更多。

例如，AdGuard DNS 可删除广告并保护您的设备免遭跟踪；AdGuard DNS 家庭保护可将 AdGuard DNS 功能和安全搜索与家长控制相结合。

您可以选择任意 DNS 服务器，并在 AdGuard VPN 中对其进行配置：

- AdGuard VPN Windows 版：「*设置*」→「*应用设置*」→「*DNS 服务器*」
- AdGuard VPN Mac 版：「*设置*」→「*应用设置*」→「*DNS 服务器*」
- AdGuard VPN 安卓版：「*设置*」（⚙ 图标）→「*应用设置*」→「*DNS 服务器*」
- AdGuard VPN iOS 版：「*设置*」（⚙ 图标）→「*应用设置*」→「*DNS 服务器*」
- AdGuard VPN 浏览器扩展：菜单（☰ 图标）→「*设置*」→「*DNS 服务器*」
