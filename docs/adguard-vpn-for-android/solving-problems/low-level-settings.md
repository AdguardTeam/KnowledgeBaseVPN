---
title: Low-level settings guide
sidebar_position: 6
---

## How to reach Low-level settings

:::caution

Changing *Low-level settings* can cause problems with the performance of AdGuard VPN, may break the Internet connection or compromise your security and privacy. You should only open this section if you know what you are doing, or if you were asked to do so by our support team.

:::

To access *Low-level settings*, open the AdGuard VPN app and tap the gear icon in the lower right corner of the screen. Then choose *General* → *Advanced* → *Low-level settings*.

## Low-level settings

Below we list all low-level settings available in AdGuard VPN for Android and explain what they do. We once again urge you not to mess with these settings blindly even if you’ve read this guide. Treat it as a cheat sheet for when you know what you are doing but want to brush up on specifics.

### AdGuard VPN protocol

By default, AdGuard VPN protocol uses HTTP/2 transport protocol to avoid detection and to maintain high speed. You can read more about its implementation in a [dedicated article](/general/adguard-vpn-protocol.md).

You can switch AdGuard VPN to use QUIC transport protocol instead. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) is a relatively new protocol, hence it can be less stable. However, if your Internet connection is unstable (for example, when you connect to the public Wi-Fi), it provides better security and increases the connection speed thanks to the [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking) technology.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.
If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6 or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the *IPv6 ranges excluded from VPN*.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable *IPv6 interface* setting in *Low-level settings* first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.
Unlike with apps added to regular *Exclusions*, the traffic of apps added to *Excluded apps* doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Proxy server port

Here you can set up the internal SOCKS5 proxy server port. The default option is 1080.
