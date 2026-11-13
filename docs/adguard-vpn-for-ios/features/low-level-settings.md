---
title: Low-level settings
sidebar_position: 6
---

:::caution

Changing *Low-level settings* can cause problems with the performance of AdGuard VPN, may break the Internet connection, or compromise your security and privacy. You should only change these settings if you know what you are doing, or if you were asked to do so by our support team.

:::

To access *Low-level settings*, open AdGuard VPN, tap the Settings icon (⚙) in the bottom right corner of the main screen, and go to *General* → *Advanced*. The *Low-level settings* section is at the bottom of the screen, below *Export logs and system info* and *Diagnostic data*.

## AdGuard VPN protocol

By default, the AdGuard VPN protocol uses dynamic protocol selection (*Auto-select*). AdGuard VPN automatically figures out which protocol — TrustTunnel HTTP/2 or TrustTunnel QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only TrustTunnel HTTP/2 or TrustTunnel QUIC instead of *Auto-select*. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.

- **Auto-select**: select protocol based on speed and network conditions.
- **TrustTunnel HTTP/2**: our protocol based on HTTP/2 over TLS.
- **TrustTunnel QUIC**: our protocol based on HTTP/3 over QUIC.

## Strict VPN routing

When enabled, AdGuard VPN prevents apps from bypassing the VPN by forcing their traffic through the VPN tunnel. This setting is disabled by default.

## IPv6 interface

When enabled, your device gets an IPv6 address while routing traffic through the VPN connection. You can configure exceptions in *IPv6 ranges excluded from VPN*.

## IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed here is disabled. Enter one IP range per line in CIDR notation (for example, `192.168.0.0/16`) and use `//` to add comments.

By default, the list includes reserved subnets, the multicast range, and ranges used for Wi-Fi calling by T-Mobile, AT&T, UK EE, and Sprint.

## IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed here is disabled. The format is the same as for IPv4 ranges: one range per line, with `//` for comments.

:::note

To use this setting, enable *IPv6 interface* first. Otherwise, the exclusions will not be applied.

:::

## Preferred IP version

Here you can choose which endpoints AdGuard VPN connects to: *IPv4 and IPv6*, *IPv4*, or *IPv6*. The default option is *IPv4 and IPv6*.

:::caution

Before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you may have problems connecting to the Internet — and vice versa.

:::
