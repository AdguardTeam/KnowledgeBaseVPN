---
title: 기능 개요
sidebar_position: 1
---

## iOS용 AdGuard VPN이란 무엇인가요?

VPN을 사용하면 인터넷의 다른 네트워크에 안전하게 연결할 수 있습니다. VPN은 컴퓨터 또는 모바일 기기를 서버에 연결하고, 실제 IP 주소를 사용하지 않고 인터넷을 탐색할 수 있도록 합니다. 따라서 VPN 서버가 다른 국가에 있는 경우 해당 국가에서 인터넷에 연결한 것으로 나타납니다. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN 기능은 다음과 같습니다.

- 실제 위치를 숨기고 익명성을 유지합니다.
- changes your IP address to protect your data from tracking
- 사기꾼이나 해커가 액세스할 수 없도록 트래픽을 암호화합니다.
- VPN을 사용하는 사이트와 사용하지 않는 사이트를 구성할 수 있습니다 (예외 목록).

iOS용 AdGuard VPN의 다음 장점은 자체 VPN 프로토콜입니다. 두 가지 주요 이점이 있습니다. 다른 VPN 프로토콜에 비해 당사의 프로토콜은 감지하기가 매우 어렵고 인터넷 연결 상태가 좋지 않은 경우에도 안정적으로 작동합니다. You can read more about AdGuard VPN protocol [in this article](/general/adguard-vpn-protocol).

## iOS용 AdGuard를 사용하는 방법

iOS용 AdGuard VPN을 사용하려면 먼저 [AdGuard 계정](https://my.adguard.com/)에 로그인하세요. AdGuard 계정 자격 증명으로 직접 로그인하거나 Google, Apple ID 또는 Facebook(동일한 이메일 주소를 사용하여 AdGuard 계정을 등록한 경우)을 통해 로그인할 수 있습니다.

아직 AdGuard 계정이 없다면 먼저 계정을 만드세요.

AdGuard VPN을 사용하는 것은 매우 쉽습니다. 메인 화면에는 *연결/연결 해제* 버튼과 사용 가능한 서버 목록도 있습니다. 서버에는 자체 위치(특정 국가 및 도시)와 핑 표시기가 있습니다. 핑은 서버의 응답 시간(밀리초)을 표시합니다. 예를 들어, 핑이 22ms인 서버를 선택하면 신호가 22밀리초 내에 서버에 도달하고 다시 반환된다는 의미입니다. 핑이 낮을수록 연결 속도가 빨라집니다. AdGuard VPN을 사용하면 수십 개 국가의 50개 이상의 위치에서 서버를 선택할 수 있습니다.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## 예외 목록

화면 하단의 가운데 버튼을 클릭하면 예외 목록을 찾을 수 있습니다. 일반 모드 및 선별 모드에 대한 두 가지 예외 목록이 표시됩니다. 일반 모드에서 AdGuard VPN은 예외 목록에 있는 웹사이트를 제외한 모든 웹사이트에서 실행됩니다. 반대로 선별 모드에서는 AdGuard VPN이 예외 목록의 웹사이트에서만 실행됩니다. 두 가지 방법으로 도메인(예: `google.com`) 또는 하위 도메인(예: `*.google.com`)을 예외 목록에 추가할 수 있습니다. 앱에 수동으로 입력하거나 *공유* 버튼을 클릭하고 아래 열린 목록에서 AdGuard VPN을 선택하여 브라우저에서 바로 입력하세요.

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
> **통합 모드**에서는 제외 기능이나 DNS 서버를 사용할 수 없습니다.

### DNS 서버

DNS(Domain name system, 도메인 이름 시스템)의 목적은 DNS 서버를 통해 웹사이트 이름을 IP 주소로 변환하는 것입니다. iOS용 AdGuard VPN은 각각 특별한 품질을 가진 여러 DNS 서버를 제공합니다. 예를 들어, AdGuard DNS는 광고를 제거하고 기기가 추적되지 않도록 보호하며 AdGuard DNS 자녀 보호는 AdGuard DNS, 세이프 서치 및 성인 콘텐츠 차단 기능을 결합합니다. 다른 DNS 공급자의 DNS 서버는 위치, ISP 및 기타 요인에 따라 더 빠르게 또는 느리게 작동할 수 있습니다. 당신에게 딱 맞는 DNS를 선택하세요. [이 글](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)에서 DNS 및 해당 특성에 대해 자세히 알아볼 수 있습니다.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi 자동 보호

기기가 다음 Wi-Fi 네트워크에 연결되면 VPN이 자동으로 활성화됩니다.

### 테마

앱의 시스템 기본, 다크 및 라이트 테마를 적용할 수 있습니다(iOS 13 이상 버전에서 사용 가능).

### 고급 설정

*고급 설정*에서 로깅 수준 및 진단 정보를 찾을 수 있습니다. 지원 팀에서 분명히 이를 요청하지 않은 경우, 고급화된 로깅 수준으로 설정하지 마십시오. 기술적인 문제가 있는 경우, 진단 정보(예: 기기 및 연결(IP 주소, ID, 핑 등)에 대한 로컬로 저장된 기술 정보)를 당사로 보낼 수 있습니다.

## 퀵액션(iOS 13 이상 버전에서 사용 가능)

이 기능을 이용하려면 AdGuard VPN의 앱 아이콘을 길게 터치한 다음 손가락을 뗍니다. 현재 서버에서 연결/연결 해제 및 위치 선택과 같은 퀵액션 목록이 표시됩니다. 물론 앱 제거 또는 앱 아이콘 이동과 같은 기본 액션에 액세스할 수도 있습니다.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## 고객 지원

저희는 사용자 만족도를 최우선으로 생각합니다 따라서 앱에는 다양한 도움말 기능이 있습니다(오른쪽 하단의 ⚙ *설정* → *고객 지원*). FAQ 섹션을 확인하고, 버그를 신고하고, 피드백을 남길 수 있습니다. 그리고 포럼, SNS 또는 GitHub에서 문제와 제안에 대해 논의하고, App Store에서 iOS용 AdGuard VPN을 평가하고, 로그를 내보낼 수 있습니다.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## 구독

AdGuard VPN 무료 버전을 사용하는 경우 하단 탭 표시줄에 화살표 아이콘이 있는 네 번째 탭이 있습니다. 이 섹션에서는 앱 유료 버전의 주요 이점에 대한 정보를 확인하고 구독을 구매할 수 있습니다.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
