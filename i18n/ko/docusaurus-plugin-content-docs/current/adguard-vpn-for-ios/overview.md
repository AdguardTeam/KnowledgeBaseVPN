---
title: 기능 개요
sidebar_position: 1
---

## iOS용 AdGuard VPN이란 무엇인가요?

VPN을 사용하면 인터넷의 다른 네트워크에 안전하게 연결할 수 있습니다. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN has several functions:

- 실제 위치를 숨기고 익명성을 유지합니다.
- changes your IP address to protect your data from tracking
- 사기꾼이나 해커가 액세스할 수 없도록 트래픽을 암호화합니다.
- VPN을 사용하는 사이트와 사용하지 않는 사이트를 구성할 수 있습니다 (예외 목록).

iOS용 AdGuard VPN의 다음 장점은 자체 VPN 프로토콜입니다. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## iOS용 AdGuard를 사용하는 방법

iOS용 AdGuard VPN을 사용하려면 먼저 [AdGuard 계정](https://my.adguard.com/)에 로그인하세요. AdGuard 계정 자격 증명으로 직접 로그인하거나 Google, Apple ID 또는 Facebook(동일한 이메일 주소를 사용하여 AdGuard 계정을 등록한 경우)을 통해 로그인할 수 있습니다.

아직 AdGuard 계정이 없다면 먼저 계정을 만드세요.

AdGuard VPN을 사용하는 것은 매우 쉽습니다. 메인 화면에는 *연결/연결 해제* 버튼과 사용 가능한 서버 목록도 있습니다. 서버에는 자체 위치(특정 국가 및 도시)와 핑 표시기가 있습니다. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. AdGuard VPN을 사용하면 수십 개 국가의 50개 이상의 위치에서 서버를 선택할 수 있습니다.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## 예외 목록

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

또 다른 유용한 기능은 예외 목록 가져오기/내보내기입니다. 이 기능을 사용하려면 다음 네 단계를 따르세요.

1. 예외 목록을 내보내려는 브라우저/기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `exclusions.zip` 파일이 다운로드됩니다.

2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.

3. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오. 예를 들어, iOS 기기에서 Mac으로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Mac으로 보내야 합니다.

4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## 앱 설정

설정을 찾으려면 다음 단계를 따르세요.

1. AdGuard VPN 앱 메인 화면의 오른쪽 하단에 있는 설정 버튼(⚙)을 누릅니다.
2. *앱 설정*을 누릅니다

작동 모드, DNS 서버, Wi-Fi 자동 보호, 색상 테마 및 고급 설정과 같은 다양한 옵션을 사용하여 필요에 따라 iOS용 AdGuard VPN을 설정할 수 있습니다.

![App Settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### 운영 모드

iOS용 AdGuard VPN은 두 가지 모드(일반 및 통합)에서 작동할 수 있습니다.

In **General** mode, the [AdGuard VPN protocol](/general/adguard-vpn-protocol) is employed, which provides the best combination of speed and security. 이 모드에서 AdGuard VPN은 [iOS용 AdGuard 광고 차단기](https://adguard.com/kb/adguard-for-ios/overview/)와 함께 작동할 수 없습니다.

**통합 모드**에서 AdGuard VPN은 IPSec 프로토콜을 사용하여 iOS 광고 차단기용 AdGuard와 동시에 작동할 수 있습니다. IPSec 프로토콜도 안전하지만 조금 더 느리고 감지하기 쉽습니다. 통합 모드를 사용하려면 두 앱을 모두 설치하고 통합 모드로 전환하기만 하면 됩니다.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNS 서버

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi 자동 보호

VPN will automatically turn on when the device connects to a Wi-Fi network.

### 테마

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### 고급 설정

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## 퀵액션(iOS 13 이상 버전에서 사용 가능)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## 고객 지원

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## 구독

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
