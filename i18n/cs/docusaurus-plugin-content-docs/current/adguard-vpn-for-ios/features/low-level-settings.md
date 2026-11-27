---
title: Low-level settings
sidebar_position: 6
---

:::caution

Changing _Low-level settings_ can cause problems with the performance of AdGuard VPN, may break the Internet connection, or compromise your security and privacy. You should only change these settings if you know what you are doing, or if you were asked to do so by our support team.

:::

To access _Low-level settings_, open AdGuard VPN, tap the Settings icon (⚙) in the bottom right corner of the main screen, and go to _General_ → _Advanced_. The _Low-level settings_ section is at the bottom of the screen, below _Export logs and system info_ and _Diagnostic data_.

## AdGuard VPN protocol

By default, the AdGuard VPN protocol uses dynamic protocol selection (_Auto-select_). AdGuard VPN automatically figures out which protocol — TrustTunnel HTTP/2 or TrustTunnel QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only TrustTunnel HTTP/2 or TrustTunnel QUIC instead of _Auto-select_. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.

- **Auto-select**: select protocol based on speed and network conditions.
- **TrustTunnel HTTP/2**: our protocol based on HTTP/2-over-TLS.
- **TrustTunnel QUIC**: our protocol based on HTTP/3 over QUIC.

## Strict VPN routing

When enabled, AdGuard VPN prevents apps from bypassing the VPN by forcing their traffic through the VPN tunnel. This setting is disabled by default.

## IPv6 interface

When enabled, your device gets an IPv6 address while routing traffic through the VPN connection. You can configure exceptions in _IPv6 ranges excluded from VPN_.

## IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed here is disabled. Enter one IP range per line in CIDR notation (for example, `192.168.0.0/16`) and use `//` to add comments.

## IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed here is disabled. The format is the same as for IPv4 ranges: one range per line, with `//` for comments.

:::note

To use this setting, enable _IPv6 interface_ first. Otherwise, the exclusions will not be applied.

:::

## Preferred IP version

Here you can choose which endpoints AdGuard VPN connects to: _IPv4 and IPv6_, _IPv4_, or _IPv6_. The default option is _IPv4 and IPv6_.

:::caution

Before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you may have problems connecting to the Internet — and vice versa.

:::

## Related articles

- [Advanced settings](/adguard-vpn-for-ios/features/advanced-settings/)
- [What type of encryption is used in AdGuard VPN](/general/adguard-vpn-encryption/)
