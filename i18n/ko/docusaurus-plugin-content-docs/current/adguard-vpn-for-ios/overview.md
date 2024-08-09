---
title: 기능 개요
sidebar_position: 1
---

## iOS용 AdGuard VPN이란 무엇인가요?

VPN을 사용하면 인터넷의 다른 네트워크에 안전하게 연결할 수 있습니다. It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN에는 여러 가지 기능이 있습니다.

- 실제 위치를 숨기고 익명성을 유지합니다.
- 트래커로부터 데이터를 보호하기 위해 IP 주소를 변경합니다.
- 트래픽을 암호화하여 해커가 트래픽 내용에 액세스할 수 없도록 합니다.
- VPN을 사용하는 사이트와 사용하지 않는 사이트를 구성할 수 있습니다 (예외 목록).

iOS용 AdGuard VPN의 다음 장점은 자체 VPN 프로토콜입니다. AdGuard VPN 프로토콜은 다른 VPN 프로토콜에 비해 탐지하기가 매우 어렵고, 인터넷 연결 상태가 좋지 않은 경우에도 안정적입니다. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## iOS용 AdGuard를 사용하는 방법

iOS용 AdGuard VPN을 사용하려면 먼저 [AdGuard 계정](https://my.adguard.com/)에 로그인하세요. AdGuard 계정 자격 증명으로 직접 로그인하거나 Google, Apple ID 또는 Facebook(동일한 이메일 주소를 사용하여 AdGuard 계정을 등록한 경우)을 통해 로그인할 수 있습니다.

If you don’t have an AdGuard account yet, you will have to create it first.

AdGuard VPN을 사용하는 것은 매우 쉽습니다. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![메인 화면 및 위치 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![예외 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `exclusions.zip` 파일이 다운로드됩니다.

2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 예를 들어, iOS 기기에서 Mac으로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Mac으로 보내야 합니다.

4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![가져오기/내보내기 예외 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS 서버

iOS용 AdGuard VPN에서는 각각 고유한 특성이 있는 여러 DNS 서버 중에서 선택할 수 있습니다. 예를 들어, AdGuard DNS는 광고를 제거하고 기기를 추적으로부터 보호하며, AdGuard DNS 자녀 보호는 AdGuard DNS, 세이프 서치 및 성인 콘텐츠 차단 기능을 결합합니다. 다른 DNS 제공자의 DNS 서버는 위치, 인터넷 서비스 제공자 및 기타 요인에 따라 더 빠르게 또는 느리게 작동할 수 있습니다. 가장 적합한 서버를 선택하세요. DNS와 그 특성에 대해 [자세히 알아볼 수 있습니다](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![DNS 서버 화면 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### 테마

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### 고급 설정

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### 운영 모드

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![퀵 액션 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## 고객 지원

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![고객 지원 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![구독 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
