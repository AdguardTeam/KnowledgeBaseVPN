---
title: 기능 개요
sidebar_position: 1
---

Mac용 AdGuard VPN은 데스크톱 VPN 서비스입니다. AdGuard VPN은 AdGuard 광고 차단기와 호환되며 함께 사용할 수 있습니다. Mac용 VPN 기능을 살펴보겠습니다.

**AdGuard 계정에 로그인하지 않으면 Mac용 AdGuard VPN을 사용할 수 없습니다**. AdGuard 계정이나 Apple, Google 또는 Facebook으로 로그인할 수 있습니다. 다른 계정이 AdGuard 계정과 동일한 이메일 주소에 연결되어 있는지 확인하세요. AdGuard 계정에 적합한 구독이 있으면 데스크톱 앱에서 자동으로 활성화됩니다. 아직도 AdGuard 계정이 없다면 [여기](https://auth.adguard.com/registration.html)에서 만들 수 있습니다.

> 현재 Mac용 AdGuard VPN은 macOS Catalina(10.15) 이상 버전에서 지원됩니다.

## 홈 화면

![홈 화면](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

첫 번째 탭은 *홈 *화면입니다. 여기에서 AdGuard VPN 현재 상태와 [예외 모드](#exclusions), 선택한 위치(활성화된 경우) 및 해당 핑을 볼 수 있습니다. 핑은 VPN 서버의 응답 시간입니다. 핑이 낮을수록 연결 속도가 빠릅니다. VPN이 비활성화된 경우 마지막으로 연결한 위치가 아래에 표시됩니다. 핑이 가장 낮은 가장 빠른 위치가 화면 오른쪽 상단에 표시됩니다. 아래에서 전체 위치 목록을 볼 수 있습니다. 검색 기능을 통해 필요한 위치를 손쉽게 찾을 수 있습니다.

> 무료 버전의 사용자는 특정 위치에만 연결할 수 있고, 다른 위치가 차단됩니다. 게다가 무료 버전에서는 매월 3GB의 트래픽만 사용할 수 있습니다.

## 예외 목록

![예외 목록](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

다음 탭은 *예외 목록*입니다. AdGuard VPN에는 고유한 몇 가지 기능이 있으며 그 중 하나는 두 가지 예외 모드 사이를 전환하는 것입니다. 일반 모드에서 AdGuard VPN은 예외 목록에 있는 웹사이트를 제외한 모든 웹사이트에서 실행됩니다. 반대로 선별 모드에서는 AdGuard VPN이 예외 목록의 웹사이트에서만 실행됩니다. VPN이 작동할 웹사이트를 직접 결정할 수 있습니다.

![예외 화면](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

또한 예외 목록에 웹사이트를 추가할 수 있을 뿐만 아니라 인기 있는 서비스 목록에서도 선택할 수 있습니다. 이 서비스 목록은 소셜 네트워크, 메신저, 비디오 및 음악 스트리밍 서비스, 게임, 쇼핑, 검색 엔진 및 업무용 커뮤니케이션 도구 등 8개의 범주로 나뉩니다. 이 중 어느 서비스든 한 클릭으로 예외 목록에 추가할 수 있습니다. 예외 목록에 추가된 도메인에서만 작동하는 AdGuard VPN 선택 모드를 사용할 경우, 아주 편리합니다.

예외 목록들은 손쉽게 설정될 수 있습니다. 도메인과 여러 하위 도메인을 추가하는 경우, 메인 도메인 내에서 그룹화됩니다. 메인 도메인(`example.com`)을 추가할 때 해당 마스크(`*.example.com`)도 추가됩니다.

설정을 변경하거나 몇 부분을 제거했지만 초기 설정으로 복구하고 싶다면 필요한 도메인 옆에 있는 *기본값으로 초기화*를 누르기만 하면 됩니다. 이 것으로 인해 누락된 도메인이 복원되고 모든 확인란이 선택될 것 입니다.

예외 목록은 AdGuard VPN이 설치된 다른 기기로 전송할 수 있습니다. 예외 항목을 내보내려면 아래의 4단계 지침을 따르십시오.

1. 예외 목록을 내보내려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *내보내기* 버튼을 클릭합니다. `exclusions.zip` 파일이 다운로드됩니다.
2. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 제외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
3. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오. 예를 들어, Mac 기기에서 아이폰으로 예외 목록을 가져오는 경우, 미리 `.zip` 파일을 Android로 보내야 합니다.
4. 예외 목록이 있는 ZIP 파일을 가져오려는 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 *가져오기* 버튼을 클릭하고 ZIP 파일을 선택합니다. 끝!

> 다른 기기의 ZIP 파일은 동일한 방식으로 Mac용 AdGuard VPN으로 가져올 수 있습니다.

## 고객 지원

![지원 화면](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

세 번째 탭은 *고객 지원* 화면입니다. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/intro.md) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## 설정

![설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

마지막으로 설정 탭을 살펴보겠습니다. 프로그램 *정보* 섹션에서 AdGuard VPN의 현재 버전 및 업데이트를 확인하고, 공식 웹사이트를 방문하고, AdGuard의 EULA 및 개인정보취급방침에 대해 알아볼 수 있습니다. *라이선스 정보* 섹션에서 무료 버전에서 무제한 버전으로 업그레이드하거나 구독을 관리하거나 로그아웃할 수 있습니다. 그리고 가장 중요한 것은 여기에서 *일반 설정*으로 이동할 수 있습니다.

### 앱 설정

![앱 설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

*킬 스위치*, *자동 업데이트*, *로그인 시 AdGuard VPN 실행* 및 *앱 실행 시 자동 연결*과 같은 네 가지 기본 기능은 애플리케이션을 더욱 편리하고 사용자 친화적으로 만듭니다. 시스템 기본 테마, 다크 테마 또는 라이트 테마를 적용할 수 있습니다. 시스템 기본 테마는 Mac의 테마와 일치합니다.

또 다른 옵션은 AdGuard VPN이 앱을 개선하는 데 도움이 되도록 익명화된 충돌 보고서, 기술 및 상호 작용 데이터를 수집하고 전송하도록 허용할 수 있다는 것입니다. 마지막으로 오른쪽에 있는 버튼 덕분에 로그를 Mac으로 내보낼 수 있습니다. 이는 지원 팀에 보내는 메시지에 로그를 첨부하려는 경우에 유용할 수 있습니다.

### DNS 서버

![DNS 서버](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

여기에서 기본적으로 ISP에서 제공하는 DNS 서버를 사용하지 않도록 사용자 지정 DNS 서버를 추가할 수 있습니다. DNS 트래픽을 암호화할 뿐만 아니라 악성 사이트에 대한 요청을 식별하고 '블랙홀'로 리디렉션하는 AdGuard DNS를 추가하는 것이 좋습니다.

### 고급 설정

![고급 설정](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

고급 설정은 변경하지 않는 것이 좋습니다. 특별한 지식이 있거나 지원 팀에서 요청한 경우가 아니면 이 기능을 변경하지 않는 것이 좋습니다.

#### 로깅 수준
로깅 수준은 두 가지뿐이지만 첫 번째 기본 수준을 사용하는 것이 좋습니다. 두 번째 옵션(고급화된 로깅)은 기술 지원 팀과 상담을 받은 후에 이상한 프로그램 동작을 수정하도록 설정해야 합니다. 두 번째 로깅 수준을 활성화하더라도 로그를 기록한 후에는 기본 수준으로 돌아가세요.

#### 메뉴 아이콘 숨기기
이 옵션은 *고급 설정*에 있지만 손쉽게 활성화할 수 있습니다. 메뉴 표시줄에서 AdGuard VPN 아이콘을 숨길 수 있습니다. 앱이 백그라운드에서 실행되는 것을 막지는 않습니다.

#### QUIC 사용(실험적)

QUIC 통신 프로토콜은 HTTP의 최신 버전입니다. 이상적이지 않은 조건(예: 지하철 또는 엘리베이터에서 모바일 데이터 사용 시)에서 더 나은 연결 품질을 얻기 위해 사용하십시오.
