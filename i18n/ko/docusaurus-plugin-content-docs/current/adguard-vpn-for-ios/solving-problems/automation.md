---
title: iPhone 및 iPad 앱을 위한 AdGuard VPN 자동화를 설정하는 방법
sidebar_position: 1
sidebar_label: AdGuard VPN 자동화 설정 방법
---

iOS용 AdGuard VPN에는 앱 예외 기능이 없습니다. 하지만 아이폰과 아이패드의 앱에 AdGuard VPN을 자동화할 수 있는 방법이 있습니다.

## AdGuard VPN 자동 활성화 설정하기

하나 이상의 앱에 VPN을 사용하려는 경우, iOS 기기에서 해당 앱에 대한 AdGuard VPN의 자동 활성화 및 비활성화를 설정할 수 있습니다. 예외 탭으로 이동하여 일반 모드를 선택하고 지침을 따르세요. 아래에서는 Twitter의 예를 사용하여 자동화를 만드는 방법을 보여드리겠습니다.

![지침. 제1부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. [App Store에서 *단축어* 앱](https://apps.apple.com/us/app/shortcuts/id915249334)을 다운로드하고 화면 하단의 시계 아이콘을 눌러 *자동화* 섹션으로 이동합니다.
2. *개인용 자동화 생성* 버튼을 누른 후 열리는 목록에서 *앱*을 누릅니다.
3. 다음 창에서 *열릴 때* 옵션이 선택되어 있는지 확인한 후 *선택*을 누릅니다.

![지침. 제2부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the app (in our case it’s Twitter) and select it. *완료*를 누른 후 화면 오른쪽 상단의 *다음*을 누릅니다. 열린 창에서 *동작 추가*를 누릅니다.

![지침. 제3부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. ‘AdGuard VPN’ 입력을 시작하고 AdGuard VPN 앱을 선택합니다. 새 창에서 *VPN 연결 설정*을 탭합니다.

![지침. 제4부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. 변수가 VPN 연결 *켜짐*인지 확인하고 *다음*을 클릭합니다.
7. 다음 창에서 *시작하기 전에 묻기* 옵션이 비활성화되어 있는지 확인합니다. 선택을 확인하고 *완료*를 누릅니다.

이제 Twitter 앱을 시작하면 AdGuard VPN이 자동으로 활성화됩니다. 하지만 Twitter 앱을 닫을 때 AdGuard VPN이 자동으로 꺼지도록 하는 또 다른 명령을 만들어야 합니다.

## AdGuard VPN 자동 종료 설정

![지침. 제1부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. *단축어* 앱에서 새 자동화 만들기를 시작하려면 *자동화* → *개인 자동화 만들기* → *앱*을 누릅니다.
2. *닫힐 때* 옵션이 선택되어 있는지 확인하고 인접한 옵션 아래의 확인란을 선택 취소합니다. 그다음에는 *선택*을 탭합니다.

![지침. 제2부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. *Twitter* 입력을 시작하고 앱을 선택합니다. 그다음에는 화면 오른쪽 상단의 *완료*를 탭한 후 *동작 추가*를 누르고 AdGuard VPN을 선택합니다.

![지침. 제3부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. 새 창에서 *VPN 연결 설정*을 탭합니다.
5. *켬*을 탭하여 *끔*으로 변경하고 화면 오른쪽 상단의 *다음*을 누릅니다.
6. *시작하기 전에 묻기* 옵션이 비활성화되어 있는지 확인합니다. 그다음에는 화면 오른쪽 상단의 *완료*를 누릅니다.

이제 AdGuard VPN은 Twitter 앱을 열 때마다 기기에서 활성화되고 닫을 때 비활성화됩니다. 다른 앱에 대해서도 동일한 단계를 수행할 수 있습니다.
