---
title: AdGuard 광고 차단기와의 호환성
sidebar_position: 3
---

AdGuard VPN에는 두 가지 작동 모드(*VPN* 및 *통합 모드*)가 있습니다.

The *VPN* mode is enabled by default and uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol). 이 프로토콜은 연결 속도와 보안의 최상의 조합을 제공합니다. 그러나 일반 모드에서는 AdGuard VPN과 AdGuard 광고 차단기가 동시에 작동할 수 없습니다.

*Integrated mode*, in turn, uses the IPsec protocol, which makes it possible for the AdGuard apps to work together.

If you already have AdGuard Ad Blocker when installing AdGuard VPN, this mode will turn on automatically and allow you to use both our apps at the same time.

If you have installed AdGuard VPN first and only then decided to try AdGuard Ad Blocker, follow these steps to use two apps together:

1. Open AdGuard VPN for iOS and tap the Settings ⚙ icon in the lower right corner of the screen.

2. Tap *General* → *Operating mode*.

3. *VPN*에서 *통합 모드*로 전환합니다. 끝!

:::note

In *Integrated mode*, *Exclusions* and *DNS server* are not available.

:::
