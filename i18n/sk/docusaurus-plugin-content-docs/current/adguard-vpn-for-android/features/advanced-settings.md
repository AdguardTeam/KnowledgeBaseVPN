---
title: Advanced settings
sidebar_position: 5
---

To open _Advanced settings_, tap the gear icon in the bottom right corner of the screen and select _Advanced_.

![Advanced \*mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

The _Advanced_ section is a set of settings that are not as commonly used.

_Operating mode_ allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the _VPN_ mode, all traffic is routed through AdGuard VPN. In the _SOCKS5_ mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. _Integrated mode_ allows AdGuard VPN and AdGuard Ad Blocker to work together. Read more about it in [Compatibility with AdGuard Ad Blocker](/adguard-vpn-for-android/compatibility-with-adguard-ad-blocker/).

:::note

Some AdGuard VPN features are disabled in _Integrated mode_: DNS servers, Kill Switch, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

_Post-quantum cryptography_ refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

_Logging level_ specifies how many app events are recorded. We don’t recommend enabling the _Extended_ or _Extreme_ logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

_Diagnostic data_ displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of _Advanced settings_ is [_Low-level settings_](/adguard-vpn-for-android/features/low-level-settings/). There you can enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port, or select the Internet protocol version to use. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team.

## Related articles

- [Low-level settings](/adguard-vpn-for-android/features/low-level-settings/)
- [Compatibility with AdGuard Ad Blocker](/adguard-vpn-for-android/compatibility-with-adguard-ad-blocker/)
