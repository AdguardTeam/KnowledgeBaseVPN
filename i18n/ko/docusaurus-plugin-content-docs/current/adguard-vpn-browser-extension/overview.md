---
title: 기능 개요
sidebar_position: 1
---

AdGuard VPN 브라우저 확장 프로그램은 Chrome, Firefox, Opera, 그리고 Edge에서 사용할 수 있습니다. 사용자 인터페이스와 기능은 브라우저마다 다르지 않으므로 아래의 기능 개요는 모든 브라우저의 AdGuard VPN 확장과 관련이 있습니다.

:::참고

AdGuard VPN 브라우저 확장 프로그램은 로그인 했을 경우에만 사용할 수 있습니다. AdGuard 계정에 로그인하거나, Google, Facebook, 또는 Apple 계정을 통해 로그인할 수 있습니다. 후자의 경우, 계정이 AdGuard 계정과 같은 이메일 주소에 연결되어 있는지 확인하세요. 만약 [AdGuard VPN을 구독](/general/subscription) 중인 경우, AdGuard VPN 브라우저 확장 프로그램에서 자동으로 활성화됩니다. 아직 AdGuard 계정이 없으신가요? [여기서 생성할 수 있습니다.](https://auth.adguard.com/registration.html)

:::

AdGuard VPN 브라우저 확장 프로그램을 관리하는 방법은 다음과 같습니다.

- 브라우저 패널의 아이콘을 누른 후, 햄버거 메뉴 아이콘을 클릭하고, *설정*을 선택하거나,
- 또는 브라우저에서 *확장 프로그램 관리* 페이지로 이동한 후, *AdGuard VPN* 아래에 있는 *세부 사항*을 클릭하고 설정을 관리합니다.

완료되면, 여러 탭이 왼쪽에 표시됩니다.

## 설정

이 탭에는 몇 가지 중요한 설정이 포함되어 있습니다. 여기에서 사용할 DNS 서버를 선택하고, 브라우저의 컨텍스트 메뉴에서 AdGuard VPN 아이콘을 추가하고 제거하거나, WebRTC를 차단하고, 확장 프로그램의 테마를 변경하고, AdGuard가 익명의 충돌 보고서 및 기술 데이터를 수집하도록 허용할 수 있습니다.

### DNS 서버 선택

기본적으로 ISP에서 제공된 [시스템 DNS 서버](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)가 선택되지만, 당신의 프라이버시를 침해할 수도 있습니다. AdGuard VPN 브라우저 확장 프로그램과 함께, 더 나은 속도와 보안을 제공하고, 심지어 광고나 잠재적 위험 도메인을 차단하는 DNS 서버를 선택할 수 있습니다. DNS 서버 이름 아래에 있는 간단한 설명은 사용할 서버를 결정하는 데 도움이 됩니다.

다양한 공급자의 [DNS 서버에 대하여 자세히 알아보기](https://adguard-dns.io/kb/general/dns-providers/).

## 예외 목록

다음 탭에는 AdGuard VPN의 주요 특수 기능 중 하나인 별도의 예외 목록이 있는 두 가지 모드가 포함되어 있습니다.

**일반 모드**에서 AdGuard VPN은 기본적으로 예외 목록에 추가한 웹 사이트를 제외한 모든 웹 사이트에서 작동합니다. **선택 모드**에서는 그 반대로, AdGuard VPN이 기본적으로 어느 곳에서도 작동하지 않습니다. You can add any websites where you'd like it to work to an exclusions list, separate from the one you saw in the **General mode**.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

### 가져오기 및 내보내기

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. 예외 목록을 내보내려는 기기에서 AdGuard VPN 확장 프로그램을 엽니다. 해당 섹션을 찾아 '내보내기' 버튼을 클릭합니다. `exclusions.zip` 파일이 다운로드됩니다.
1. ZIP 파일 내부에는 일반 및 선별 목록 각각에 대해 하나씩 두 개의 `.txt` 파일이 있습니다. 예외 항목을 더 추가하거나, 기존 항목을 삭제하거나, 파일 이름을 바꾸거나, ZIP 파일을 그대로 둡니다.
1. 다른 기기 간에 전송할 때 가져오기를 위해 `.zip` 파일을 기기로 보내는 것을 잊지 마십시오.
1. 해당 기기에서 AdGuard VPN을 엽니다. 해당 섹션을 찾아 '가져오기' 버튼을 클릭하고 ZIP 파일을 선택합니다. 끝!

## 계정

AdGuard VPN 브라우저 확장 프로그램의 세 번째 탭은 계정에 로그인할 때 사용한 이메일 주소와, *관리* 및 *로그아웃*두 개의 버튼으로만 구성되어 있어 매우 미니멀합니다. *관리* 버튼을 클릭하여 모든 라이선스 및 구독, 연결된 디바이스 역시 볼 수 있는 개인 AdGuard 계정으로 이동합니다.

## 고객 지원

FAQ 섹션에서 자주 묻는 질문에 대한 답변을 찾거나 피드백을 남길 수 있습니다: 어떤 것이 정상적으로 작동하지 않는 경우 버그를 신고하거나, 새로운 기능 추가를 제안하거나, 다양한 소셜 미디어 플랫폼에서 AdGuard에 대해 토론할 수 있습니다.

## 정보

다른 작은 탭에서는 확장 프로그램의 버전을 확인하고, 공식 웹사이트를 방문하고, EULA 또는 개인정보 보호정책을 확인할 수 있습니다.
