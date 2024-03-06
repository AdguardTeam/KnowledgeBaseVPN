---
title: 기능 개요
sidebar_position: 1
---

## Android용 AdGuard VPN이란 무엇인가요?

VPN은 인터넷을 사용할 때 보안과 익명성을 제공하는 도구입니다. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. 따라서 실제 사용자 IP가 아닌 VPN 서버의 IP 주소가 표시되기 때문에 데이터 기밀성과 사용자 익명성이 유지됩니다.

**VPN은 다음과 같은 목적으로 자주 사용됩니다.**

- 공용 Wi-Fi를 사용하는 동안에도 개인 데이터 보호
- IP 주소를 마스킹하여 온라인 활동 추적 방지
- 익명성을 유지하기 위해 실제 위치 숨기기

Android용 AdGuard VPN은 모든 일반 기능뿐만 아니라 여러 고유한 기능도 제공합니다. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Android용 AdGuard VPN 사용을 시작하는 방법

먼저 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)에서 AdGuard VPN을 다운로드하고 AdGuard 계정에 로그인하세요. 계정이 없는 경우 계정을 [만들어야 합니다](https://auth.adguard.com/login.html). AdGuard 계정 자격 증명으로 직접 로그인하거나 AdGuard 계정이 Google 또는 Facebook 계정과 동일한 이메일 주소로 등록된 경우 Google 또는 Facebook을 통해 로그인할 수 있습니다.

## 메인 화면

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

서버의 위치와 핑 속도는 각 서버 옆에 표시됩니다. 핑 속도는 서버의 응답 시간을 나타냅니다. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## 예외

AdGuard VPN이 선택한 곳에서만 작동하도록 사이트 및 앱 예외 목록을 손쉽게 관리할 수 있습니다.

### 예외 목록

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. *예외* 섹션에 도달하려면 화면 하단 왼쪽에서 두 번째 아이콘을 누르세요.

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

세 가지 방법으로 웹사이트의 도메인(예: `google.com`) 또는 하위 도메인(예: `*.google.com`)을 *예외 목록*에 추가할 수 있습니다. 첫 번째 방법은 앱에 수동으로 입력하는 것입니다. 두 번째 방법은 *공유 버튼*을 클릭하고 아래 열린 목록에서 AdGuard VPN을 선택하여 브라우저에서 바로 도메인 또는 하위 도메인을 추가하는 것입니다. 또한 범주별로 구분된 서비스 목록에서 예외 목록에 도메인 및 하위 도메인을 추가할 수 있습니다.

![예외](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

도메인을 수동으로 추가할 때 약간의 뉘앙스가 있습니다. 예를 들어 도메인 `yahoo.com`을 수동으로 제외하면 모든 `*.yahoo.com` 하위 도메인도 예외 목록에 나열되지만 `yahoo.jp` 또는 `yahoo.fr`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다. 또는 `youtube.com`을 예외 목록에 추가할 수 있지만 동일한 서비스 `youtu.be`의 도메인은 목록에 포함되지 않습니다. 이 경우 각 플랫폼과 관련된 모든 하위 도메인을 추가하기 때문에 기본 제공 서비스 목록을 사용하는 것이 더 안전합니다.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 그러나 목록에서 도메인을 삭제하거나 비활성화한 경우, 서비스 목록의 기본 보기로 언제든지 돌아갈 수 있습니다.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

또 다른 유용한 기능은 *예외 목록 가져오기/내보내기*입니다. 이 기능을 사용하려면 4단계만 수행하면 됩니다.

1. 예외 목록을 내보내려는 브라우저/기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `adguard_vpn_exclusions.zip` 파일이 다운로드됩니다.
2. There are two `.txt` files inside the archive, one for each of the lists. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
3. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오. 예를 들어, Windows 기기에서 Android로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Android로 보내야 합니다.
4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

웹 사이트뿐만 아니라 앱도 예외 목록에 추가될 수 있습니다. Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 설정

화면 오른쪽 하단의 톱니바퀴 아이콘을 눌러 *설정*으로 이동할 수 있습니다. 첫 번째 섹션에는 *앱 설정*이 있습니다. 여기에서 다른 옵션을 선택하여 필요에 따라 Android용 AdGuard VPN을 구성하세요.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 자동 시작

슬라이더를 오른쪽으로 전환하면 장치 시작 후 AdGuard VPN 자동 시작이 활성화됩니다.

### DNS 서버

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. 사용자 지정 DNS 서버를 추가하는 옵션도 있습니다.

### 자동 보호

이 기능은 기기가 Wi-Fi 또는 모바일 네트워크에 연결될 때 AdGuard VPN을 자동으로 활성화합니다.

### 킬 스위치

화면의 간단한 지침에 따라 Android 기기에서 킬 스위치 기능을 설정할 수 있습니다. 이 기능을 사용하는 이유는 무엇인가요? 모바일 네트워크 또는 공용 Wi-Fi를 사용하는 동안 VPN 연결이 갑자기 끊어지면 킬 스위치가 자동으로 인터넷 연결을 종료하여 데이터가 유출되지 않도록 합니다.

킬 스위치가 켜져 있으면 *앱 설정* 및 *예외 목록*이 사용할 수 없습니다.

### 테마

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### 고급 설정

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

다음 두 섹션은 *로깅 수준*과 *진단 정보*입니다. 지원 팀에서 분명히 이를 요청하지 않은 경우, 고급화된 로깅 수준 또는 극한의 로깅 수준으로 설정하지 마십시오. 기술적인 문제가 있는 경우, 진단 정보(예: 기기 및 연결(IP 주소, ID, 핑 등)에 대한 로컬로 저장된 기술 정보)를 당사로 보낼 수 있습니다.

*고급 설정*의 마지막 섹션은 *로우 레벨 설정*입니다. 특별한 지식이 있거나 지원 팀에서 요청한 경우가 아니면 이 섹션을 사용하지 않는 것이 좋습니다. 여기에서 VPN 인터페이스에서 TUN 인터페이스 로깅 또는 IPv6 프로토콜을 활성화하고 사용할 프록시 서버 포트 또는 인터넷 프로토콜 버전을 선택할 수 있습니다.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### 고객 지원

*지원* 섹션에서 피드백을 남기거나, 버그를 신고하거나 지원 팀에 보낼 로그 및 시스템 정보를 내보낼 수 있습니다.
