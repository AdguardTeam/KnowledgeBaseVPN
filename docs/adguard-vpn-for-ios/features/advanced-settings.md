---
title: Advanced settings
sidebar_position: 5
---

To open *Advanced* settings, tap the Settings icon (⚙) in the bottom right corner of the app’s main screen, then tap *General* → *Advanced*.

In *Advanced* settings, you can find several sections — *Operating mode*, *Logging level*, *Export logs and system info*, *Diagnostic data*, and *AdGuard VPN protocol*.

## Operating mode

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses [TrustTunnel](https://trusttunnel.org/) — a modern, open-source protocol developed by us. It provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

Read more about it in [Compatibility with AdGuard Ad Blocker](/adguard-vpn-for-ios/compatibility-with-adguard-ad-blocker/).

## Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

## Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

## Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

## AdGuard VPN protocol

![Select VPN protocol *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

By default, AdGuard VPN protocol uses dynamic VPN protocol selection (*Auto-select* option). That means that AdGuard VPN automatically figures out which protocol — HTTP2/TLS or HTTP3/QUIC — will give you the best performance and switches to it instantly. This improves VPN speed and stability, which is particularly helpful in regions where VPN usage is restricted or unreliable.

If you wish, you can switch AdGuard VPN to use only HTTP2/TLS or HTTP3/QUIC protocol instead of *Auto-select*. Each protocol has its strengths, but the best choice can vary depending on your location, network conditions, and even the server you connect to.
