---
title: VPN 작동 방식
sidebar_position: 1
---

AdGuard VPN의 작동 방식을 이해하려면 먼저 VPN 서비스의 기본적인 원칙을 이해해야 합니다.

## VPN 기능

VPN은 위치를 숨기고 웹에서 데이터를 보호하는 데 도움이 되는 가상 사설망입니다. VPN은 컴퓨터나 모바일 기기를 VPN 서버에 연결하고 이 서버의 IP 주소를 사용하여 외부 관찰자에게 사용자가 다른 장소에 있는 것처럼 보이게 합니다. 이를 통해 다양한 인터넷 리소스에 안전하게 액세스하고 개인 데이터를 보호할 수 있습니다.

그런 식으로 VPN은 두 가지 중요한 기능을 수행합니다.

1. **익명성 유지**

인터넷 연결을 사용하여 사용자는 디지털 발자국을 남기고 이를 제3자가 분석하고 사용할 수 있습니다. 예를 들어, 당신이 방문한 온라인 상점 중 하나는 귀하의 검색 기록을 저장한 다음 타겟 광고를 통해 이를 기반으로 제품을 제공할 수 있습니다. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN을 사용하면 IP 주소를 숨기고 연결된 VPN 서버의 IP 주소로 바꿀 수 있습니다. 이렇게 하면 개인정보를 보호하고 웹에서 익명으로 정보를 검색할 수 있습니다.

2. **데이터 보호**

신뢰할 수 없거나 공용 네트워크에 연결하면 기기의 데이터가 사이버 범죄자에게 취약해질 수 있습니다. 은행 카드 세부 정보, 사용자 이름 및 비밀번호, 여권 데이터와 같은 모든 데이터는 온라인 사기범이 가로챌 수 있습니다. VPN 터널을 통해 웹으로 송수신되는 정보는 암호화되어 유출될 수 없습니다.

## VPN 구조

네트워크에 연결하면 컴퓨터나 모바일 장치에 고유한 ID 번호 또는 IP 주소가 할당됩니다. 일반적으로 0에서 255까지의 숫자로 구성되며 점이나 콜론으로 구분됩니다. Knowing this sequence, one can determine the geolocation of the device. The IP address is usually set by your ISP, and it will be visible all the way to the desired resource. For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. 이 기록은 주로 데이터 수집 및 트래픽 분석에 사용할 수 있습니다.

VPN은 기기와 VPN 서버 사이에 터널을 생성합니다. 고객님의 데이터는 이 터널을 통과하고 암호화된 다음 안전한 형태로 개방된 인터넷에 들어갑니다. 따라서 웹 서버에는 장치에 더 이상 실제 IP 주소가 없는 것처럼 보이지만 터널의 끝점, 즉 VPN 서버의 IP 주소가 있습니다. 따라서 VPN 터널을 통과한 후 도달하는 사이트는 선택한 VPN 서버의 지리적 위치를 실제 위치로 간주합니다. 그리고 암호화된 데이터는 광고주, 해커 및 보안 서비스의 손에 들어가지 않습니다.

![VPN 구조](https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## VPN 프로토콜의 종류

VPN 보안 프로토콜은 데이터를 VPN 터널에 암호화하고 사용자가 개방된 인터넷에서 개인 정보 보호를 유지할 수 있게 해주는 도구입니다. 현재 대다수의 최신 VPN 서비스는 다음 세 가지 VPN 프로토콜 중 하나를 사용합니다.

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in this protocol may result in a lower connection speed.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). This modern protocol is open source, so third-party manufacturers can improve and update the technology.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Its main advantages are ease of use, high efficiency and low vulnerability to attacks.

In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards.

![How a VPN protocol works](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN also has its own [*protocol*](adguard-vpn-protocol.mdx). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

![How concealed VPN works](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg)

## VPN의 단점

명백한 장점에도 불구하고 VPN은 완벽하지 않으며 몇 가지 단점이 있습니다.

**더 낮은 속도**

트래픽이 웹 서버로 직접 가지 않고 먼저 VPN 서버를 통과하기 때문에 VPN을 사용할 때 연결 속도가 느려집니다. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

**액세스 차단**

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

**VPN 연결 끊김**

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

우리의 VPN 서비스에는 몇 가지 중요한 [장점](why-adguard-vpn.md)이 있습니다.

* [*Proprietary VPN protocol*](adguard-vpn-protocol.mdx), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

* [*"No-logs" policy*](https://adguard-vpn.com/en/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

* *수십 개국에 있는 50개 이상의 VPN 서버*

* *사용하기 쉽고 확장성이 좋은 사용자 정의 옵션*

현재 AdGuard VPN은 다음과 같이 제공됩니다.

* Chrome, Firefox 및 Edge용 [확장 프로그램](../adguard-vpn-browser-extension/overview.md)

* [Android](../adguard-vpn-for-android/overview.md) 및 [iOS](../adguard-vpn-for-ios/overview.md)용 모바일 앱

* [Windows](../adguard-vpn-for-windows/overview.md) 및 [Mac](../adguard-vpn-for-mac/overview.md)용 데스크탑 애플리케이션

[여기](https://adguard-vpn.com/en/welcome.html)에서 AdGuard VPN 기능(무제한 버전 포함)에 대해 자세히 알아볼 수 있습니다.
