---
title: AdGuard VPN과 Chromecast의 호환성
sidebar_position: 5
---

내장된 Chromecast 기술은 VPN 연결을 지원하지 않는 [DLNA 프로토콜](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance)을 사용하기 때문에 VPN과 호환되지 않습니다. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. 이는 Chromecast가 VPN과 함께 작동하지 못하게 합니다.

라우터에 VPN을 설정하여 이 문제를 해결할 수 있습니다. 이렇게 하면 라우터에 연결된 모든 기기에서 Chromecast를 포함한 모든 기기가 VPN 연결을 사용할 수 있습니다. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
