---
title: 앱 설치 및 제거
sidebar_position: 2
---

## 시스템 요구 사항

**운영 체제 버전**: macOS 10.15 (64 비트) 이상

**RAM**: 2 GB 이상

**디스크 여유 공간**: 120 MB


## Mac용 AdGuard를 설치하는 방법

1. Mac용 AdGuard VPN을 설치하려면 [이 링크](https://agrd.io/mac_vpn)를 클릭하거나 브라우저를 열고 주소 표시줄에 *adguard-vpn.com*을 입력한 다음 열린 페이지에서 *다운로드*를 클릭하세요.

![공식 웹사이트에서 AdGuard VPN을 다운로드하세요.](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. *AdGuardVPN.dmg* 파일이 다운로드되면 다운로드 폴더에 나타납니다..

3. 설치 프로그램 창이 열릴 때까지 기다렸다가 아이콘을 두 번 클릭합니다.

![프로그램 설치 창](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. AdGuard VPN을 처음 시작하면 운영 체제는 이 응용 프로그램이 인터넷에서 다운로드되었다는 경고를 화면에 표시합니다. *열기*를 클릭합니다.

5. 그런 다음 *계속* 및 *설치* 클릭합니다.

![계속을 클릭합니다.](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![설치를 클릭하세요](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. 설치 프로그램이 필요한 파일을 다운로드할 때까지 기다리세요.

Mac용 AdGuard VPN이 설치되었습니다!


## Mac용 AdGuard VPN을 제거하는 방법

### 일반 제거 방법

Mac용 AdGuard VPN을 제거하려면 두 가지 간단한 단계를 따르세요.

1. 'Finder'를 열고 '프로그램' 섹션으로 이동합니다.

2. 목록에서 *AdGuard VPN*을 선택하고 우클릭한 다음 *휴지통으로 이동*을 클릭합니다.

![일반 제거 방법](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### 고급 제거 방법

때때로 프로그램의 부적절한 제거 또는 기타 이유로 인해 프로그램이 일반적인 방법으로 제거되지 않을 수 있습니다. 그런 경우, 당사 지원 팀은 고급 제거 방법을 수행하여 Mac에서 AdGuard VPN을 완전히 제거하도록 요청할 수 있습니다. 고급 제거 방법으로 Mac에서 AdGuard VPN을 제거하려면 다음 단계를 따르세요.

1. [일반 제거 방법](#how-to-uninstall-adguard-vpn-for-mac)의 단계를 따릅니다.

2. 'Finder' 또는 'Spotlight'를 열고 검색에 `키체인`을 입력합니다.

![고급 제거 방법 키체인 입력](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. 찾은 프로그램의 아이콘을 클릭하고 검색에 `com.adguard.mac.vpn`을 입력합니다. 검색 결과에 그러한 항목이 있으면 삭제합니다.

4. 'Finder' 또는 'Spotlight'로 돌아가서 `터미널`을 입력합니다.

![고급 제거 방법. 터미널 입력](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. 프로그램을 열고 `defaults delete com.adguard.mac.vpn` 명령을 입력합니다.

6. *스페이스 바*를 누르고 `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist` 명령을 입력합니다.

AdGuard VPN이 Mac에서 완전히 제거되었습니다.

[이 글](/adguard-vpn-for-mac/overview.md)에서 Mac용 VPN에 대해 자세히 알아볼 수 있습니다.
