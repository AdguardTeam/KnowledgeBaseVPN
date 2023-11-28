---
title: 기능 개요
sidebar_position: 1
---

## Android용 AdGuard VPN이란 무엇인가요?

VPN은 인터넷을 사용할 때 보안과 익명성을 제공하는 도구입니다. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. 따라서 실제 사용자 IP가 아닌 VPN 서버의 IP 주소가 표시되기 때문에 데이터 기밀성과 사용자 익명성이 유지됩니다.

**VPN은 다음과 같은 목적으로 자주 사용됩니다.**

- 공용 Wi-Fi를 사용하는 동안에도 개인 데이터 보호
- IP 주소를 마스킹하여 온라인 활동 추적 방지
- 익명성을 유지하기 위해 실제 위치 숨기기

Android용 AdGuard VPN은 모든 일반 기능뿐만 아니라 여러 고유한 기능도 제공합니다. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Android용 AdGuard VPN 사용을 시작하는 방법

먼저 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)에서 AdGuard VPN을 다운로드하고 AdGuard 계정에 로그인하세요. 계정이 없는 경우 계정을 [만들어야 합니다](https://auth.adguard.com/login.html). AdGuard 계정 자격 증명으로 직접 로그인하거나 AdGuard 계정이 Google 또는 Facebook 계정과 동일한 이메일 주소로 등록된 경우 Google 또는 Facebook을 통해 로그인할 수 있습니다.

## 메인 화면

기본 화면에는 애플리케이션 상태(연결됨/연결 해제됨)와 선택한 예외 목록 작동 모드([일반/선별 모드](#lists-of-exclusions))를 반영하는 두 줄이 있습니다. 같은 화면에는 *연결/연결 해제* 버튼과 사용 가능한 서버 목록도 있습니다.

서버의 위치와 핑 속도는 각 서버 옆에 표시됩니다. 핑 속도는 서버의 응답 시간을 나타냅니다. 이 속도가 낮을수록 연결 속도가 빨라집니다. 가장 빠른 서버는 항상 목록 맨 위에 표시됩니다. *연결/연결 해제* 버튼을 누르거나 위치를 선택하여 가장 빠른 서버에 연결할 수 있습니다.

## 예외

AdGuard VPN이 선택한 곳에서만 작동하도록 사이트 및 앱 예외 목록을 손쉽게 관리할 수 있습니다.

### 예외 목록

예외 목록을 사용하면 VPN이 작동할 사이트와 작동하지 않을 사이트를 선택할 수 있습니다. *예외* 섹션에 도달하려면 화면 하단 왼쪽에서 두 번째 아이콘을 누르세요.

AdGuard VPN에는 두 가지 모드가 있습니다. *일반 모드*에서는 VPN이 예외 목록의 사이트에서 작동하지 않으며 *선별 모드*에서는 AdGuard VPN이 예외 목록의 사이트에서만 작동합니다.

세 가지 방법으로 웹사이트의 도메인(예: `google.com`) 또는 하위 도메인(예: `*.google.com`)을 *예외 목록*에 추가할 수 있습니다. 첫 번째 방법은 앱에 수동으로 입력하는 것입니다. 두 번째 방법은 *공유 버튼*을 클릭하고 아래 열린 목록에서 AdGuard VPN을 선택하여 브라우저에서 바로 도메인 또는 하위 도메인을 추가하는 것입니다. 또한 범주별로 구분된 서비스 목록에서 예외 목록에 도메인 및 하위 도메인을 추가할 수 있습니다.

![예외](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

도메인을 수동으로 추가할 때 약간의 뉘앙스가 있습니다. 예를 들어 도메인 `yahoo.com`을 수동으로 제외하면 모든 `*.yahoo.com` 하위 도메인도 예외 목록에 나열되지만 `yahoo.jp` 또는 `yahoo.fr`과 같은 최상위 도메인이 있는 도메인 이름은 제외되지 않습니다. 또는 `youtube.com`을 예외 목록에 추가할 수 있지만 동일한 서비스 `youtu.be`의 도메인은 목록에 포함되지 않습니다. 이 경우 각 플랫폼과 관련된 모든 하위 도메인을 추가하기 때문에 기본 제공 서비스 목록을 사용하는 것이 더 안전합니다.

:::

서비스 목록에서 하위 도메인을 비활성화할 수 있으므로 각 서비스의 상태를 표시하는 아이콘을 추가했습니다. 아이콘은 각 서비스 이름 왼쪽의 기본 *예외* 화면에서 볼 수 있습니다. **완전히 활성화됨**은 녹색 배경에 흰색 확인 표시로, **완전히 비활성화됨**은 회색 사각형으로, **부분적으로 활성화됨**(하나 이상의 설정이 변경되었음을 나타냄)은 흰색 배경에 녹색 사각형으로 표시됩니다. 그러나 목록에서 도메인을 삭제하거나 비활성화한 경우, 서비스 목록의 기본 보기로 언제든지 돌아갈 수 있습니다.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

또 다른 유용한 기능은 *예외 목록 가져오기/내보내기*입니다. 이 기능을 사용하려면 4단계만 수행하면 됩니다.

1. 예외 목록을 내보내려는 브라우저/기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `adguard_vpn_exclusions.zip` 파일이 다운로드됩니다.
2. ZIP 파일 내부에는 *일반* 및 *선별* 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
3. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오. 예를 들어, Windows 기기에서 Android로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Android로 보내야 합니다.
4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### 앱 설정

웹 사이트뿐만 아니라 앱도 예외 목록에 추가될 수 있습니다. AdGuard VPN이 작동할 애플리케이션과 작동하지 않을 애플리케이션을 선택합니다. 화면 하단의 *예외 목록* 아이콘 옆에 있는 아이콘을 탭하여 앱 설정을 엽니다. 기본적으로 AdGuard VPN은 모든 앱에서 작동하지만 목록의 모든 앱 옆에 있는 슬라이더를 전환하고 AdGuard VPN을 비활성화할 수 있습니다.

AdGuard와의 *호환성 모드*가 활성화된 경우, AdGuard 광고 차단기를 통해서만 앱을 관리할 수 있습니다. 그래서 버튼을 탭하면 AdGuard 앱이 열립니다.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 설정

화면 오른쪽 하단의 톱니바퀴 아이콘을 눌러 *설정*으로 이동할 수 있습니다. 첫 번째 섹션에는 *앱 설정*이 있습니다. 여기에서 다른 옵션을 선택하여 필요에 따라 Android용 AdGuard VPN을 구성하세요.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 자동 시작

슬라이더를 오른쪽으로 전환하면 장치 시작 후 AdGuard VPN 자동 시작이 활성화됩니다.

### DNS 서버

DNS(Domain name system, [도메인 이름 시스템](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns))의 목적은 DNS 서버를 통해 웹 사이트 이름을 IP 주소로 변환하는 것입니다. IP 주소로 변환하는 것입니다. Android용 AdGuard VPN은 각각 특별한 품질을 가진 여러 DNS 서버를 제공합니다. 예를 들어, [AdGuard DNS](https://adguard-dns.io/kb/)는 광고를 제거하고 기기가 추적되지 않도록 보호하며 AdGuard DNS 자녀 보호는 AdGuard DNS, 세이프 서치 및 성인 콘텐츠 차단 기능을 결합합니다. 사용자 지정 DNS 서버를 추가하는 옵션도 있습니다.

### 자동 보호

이 기능은 기기가 Wi-Fi 또는 모바일 네트워크에 연결될 때 AdGuard VPN을 자동으로 활성화합니다.

### 킬 스위치

화면의 간단한 지침에 따라 Android 기기에서 킬 스위치 기능을 설정할 수 있습니다. 이 기능을 사용하는 이유는 무엇인가요? 모바일 네트워크 또는 공용 Wi-Fi를 사용하는 동안 VPN 연결이 갑자기 끊어지면 킬 스위치가 자동으로 인터넷 연결을 종료하여 데이터가 유출되지 않도록 합니다.

킬 스위치가 켜져 있으면 *앱 설정* 및 *예외 목록*이 사용할 수 없습니다.

### 테마

앱의 시스템 기본, 다크 및 라이트 테마를 적용할 수 있습니다.

![Theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### 고급 설정

*고급 설정*에서 5개의 섹션을 찾을 수 있습니다. 상단의 스위치를 켜면 *프로그램을 개선*하는 데 도움이 됩니다. 이렇게 하면 AdGuard VPN이 충돌 보고서, 기술 및 상호 작용 데이터를 수집할 수 있기 때문입니다. 이 정보는 익명으로 처리됩니다.

*작동 모드* 섹션에서는 VPN, 프록시 및 호환성 모드의 세 가지 옵션 중 하나를 선택할 수 있습니다. *VPN 모드*에서 모든 트래픽은 AdGuard VPN을 통해 자동으로 라우팅됩니다. When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy server which can be used by other apps to route their traffic through it. 하고자 하시는 것을 확실히 알 때 이 옵션을 선택하세요. *호환성 모드*를 활성화하면 AdGuard VPN과 AdGuard 광고 차단기가 함께 작동할 수 있습니다.

:::note

Some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. 또한 애플리케이션 터널링을 관리하려면 AdGuard 광고 차단기 애플리케이션을 열어야 합니다.

:::

다음 두 섹션은 *로깅 수준*과 *진단 정보*입니다. 지원 팀에서 분명히 이를 요청하지 않은 경우, 고급화된 로깅 수준 또는 극한의 로깅 수준으로 설정하지 마십시오. 기술적인 문제가 있는 경우, 진단 정보(예: 기기 및 연결(IP 주소, ID, 핑 등)에 대한 로컬로 저장된 기술 정보)를 당사로 보낼 수 있습니다.

*고급 설정*의 마지막 섹션은 *로우 레벨 설정*입니다. 특별한 지식이 있거나 지원 팀에서 요청한 경우가 아니면 이 섹션을 사용하지 않는 것이 좋습니다. 여기에서 VPN 인터페이스에서 TUN 인터페이스 로깅 또는 IPv6 프로토콜을 활성화하고 사용할 프록시 서버 포트 또는 인터넷 프로토콜 버전을 선택할 수 있습니다.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### 고객 지원

*지원* 섹션에서 피드백을 남기거나, 버그를 신고하거나 지원 팀에 보낼 로그 및 시스템 정보를 내보낼 수 있습니다.
