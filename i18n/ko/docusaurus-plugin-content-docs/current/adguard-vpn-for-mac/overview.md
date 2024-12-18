---
title: 기능 개요
sidebar_position: 1
---

Mac용 AdGuard VPN은 데스크톱 VPN 서비스입니다. AdGuard VPN은 AdGuard 광고 차단기와 호환되며 함께 사용할 수 있습니다. Mac용 VPN 기능을 살펴보겠습니다.

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. AdGuard 계정이나 Apple, Google 또는 Facebook으로 로그인할 수 있습니다. 다른 계정이 AdGuard 계정과 동일한 이메일 주소에 연결되어 있는지 확인하세요. AdGuard 계정에 적합한 구독이 있으면 데스크톱 앱에서 자동으로 활성화됩니다. Still don’t have an AdGuard account? [여기](https://auth.adguard.com/registration.html)에서 만들 수 있습니다.

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## 홈 화면

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

첫 번째 탭은 *홈 *화면입니다. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. 핑은 VPN 서버의 응답 시간입니다. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. 아래에서 전체 위치 목록을 볼 수 있습니다. The search field makes it easy to find the location you need.

:::note

무료 버전의 사용자는 특정 위치에만 연결할 수 있고, 다른 위치가 차단됩니다. 게다가 무료 버전에서는 매월 3GB의 트래픽만 사용할 수 있습니다.

:::

## 예외 목록

![예외 목록](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![예외 화면](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

또한 예외 목록에 웹사이트를 추가할 수 있을 뿐만 아니라 인기 있는 서비스 목록에서도 선택할 수 있습니다. 이 서비스 목록은 소셜 네트워크, 메신저, 비디오 및 음악 스트리밍 서비스, 게임, 쇼핑, 검색 엔진 및 업무용 커뮤니케이션 도구 등 8개의 범주로 나뉩니다. 이 중 어느 서비스든 한 클릭으로 예외 목록에 추가할 수 있습니다. It’s especially convenient if you use Selective mode.

예외 목록들은 손쉽게 설정될 수 있습니다. If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. 메인 도메인(`example.com`)을 추가할 때 해당 마스크(`*.example.com`)도 추가됩니다.

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

예외 목록은 AdGuard VPN이 설치된 다른 기기로 전송할 수 있습니다. 예외 항목을 내보내려면 아래의 4단계 지침을 따르십시오.

1. 예외 목록을 내보내려는 기기에서 AdGuard VPN을 엽니다. Find the appropriate section and click the *Export* button. `exclusions.zip` 파일이 다운로드됩니다.
2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. 예를 들어, Mac 기기에서 아이폰으로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Android로 보내야 합니다.
4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. Find the appropriate section, click the *Import* button and select the archive. 끝!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## 고객 지원

![지원 화면](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## 설정

![설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

마지막으로 설정 탭을 살펴보겠습니다. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. *라이선스 정보* 섹션에서 무료 버전에서 무제한 버전으로 업그레이드하거나 구독을 관리하거나 로그아웃할 수 있습니다. 그리고 가장 중요한 것은 여기에서 *일반 설정*으로 이동할 수 있습니다.

### 앱 설정

![앱 설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. 시스템 기본 테마, 다크 테마 또는 라이트 테마를 적용할 수 있습니다. 시스템 기본 테마는 Mac의 테마와 일치합니다.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. 이는 지원 팀에 보내는 메시지에 로그를 첨부하려는 경우에 유용할 수 있습니다.

### DNS 서버

![DNS 서버](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### 고급 설정

![고급 설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 로깅 수준

로깅 수준은 두 가지뿐이지만 첫 번째 기본 수준을 사용하는 것이 좋습니다. 두 번째 옵션(고급화된 로깅)은 기술 지원 팀과 상담을 받은 후에 이상한 프로그램 동작을 수정하도록 설정해야 합니다. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### 메뉴 아이콘 숨기기

이 옵션은 *고급 설정*에 있지만 손쉽게 활성화할 수 있습니다. 메뉴 표시줄에서 AdGuard VPN 아이콘을 숨길 수 있습니다. 앱이 백그라운드에서 실행되는 것을 막지는 않습니다.

#### Use QUIC

QUIC 통신 프로토콜은 HTTP의 최신 버전입니다. 이상적이지 않은 조건(예: 지하철 또는 엘리베이터에서 모바일 데이터 사용 시)에서 더 나은 연결 품질을 얻기 위해 사용하십시오.
