---
title: 低级设置
sidebar_position: 6
---

## 如何进入低级设置

:::caution

更改「低级设置」可能会导致 AdGuard VPN 的性能出现问题，也可能会断开互联网连接或危及您的安全和隐私。 如果您知道自己在设置什么，或者是我们的客户支持要求您这样做，请打开此部分。

:::

要转到「低级设置」，请打开 AdGuard VPN 应用并点击屏幕右下角的齿轮图标。 然后选择「常规模式」→「高级」→「低级设置」。

## 低级设置

下方列出了 AdGuard VPN 中所有可用的低级设置，并解释了它们的作用。 我们再次强烈建议您不要在未充分了解的情况下随意更改这些设置，即使您已经阅读了本指南。 当您知道自己在做什么，但想要复习具体细节时，可以将它当作速查表来使用。

### AdGuard VPN 协议

AdGuard VPN 采用 TrustTunnel，是一款我们自主开发的现代开源 VPN 协议，并开源共享，供任何人使用、审计与实现。 [访问官网](https://trusttunnel.org/)，深入了解其工作原理，探索它与传统 VPN 协议有何不同。

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6, or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.

Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### 代理服务器端口

这里可以设置内部 SOCKS5 代理服务器端口。 The default option is 1080.
