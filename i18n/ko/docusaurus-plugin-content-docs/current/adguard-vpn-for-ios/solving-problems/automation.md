---
title: iPhone 및 iPad 앱을 위한 AdGuard VPN 자동화를 설정하는 방법
sidebar_position: 2
sidebar_label: AdGuard VPN 자동화 설정 방법
---

iOS용 AdGuard VPN에는 앱 예외 기능이 없습니다. 하지만 아이폰과 아이패드의 앱에 AdGuard VPN을 자동화할 수 있는 방법이 있습니다.

## Configuring automatic connection to VPN

하나 이상의 앱에 VPN을 사용하려는 경우, iOS 기기에서 해당 앱에 대한 AdGuard VPN의 자동 활성화 및 비활성화를 설정할 수 있습니다. 예외 탭으로 이동하여 일반 모드를 선택하고 지침을 따르세요. 아래에서는 Twitter의 예를 사용하여 자동화를 만드는 방법을 보여드리겠습니다.

![지침. 제1부](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. [App Store에서 *단축어* 앱](https://apps.apple.com/us/app/shortcuts/id915249334)을 다운로드하고 화면 하단의 시계 아이콘을 눌러 *자동화* 섹션으로 이동합니다.
1. *개인용 자동화 생성* 버튼을 누른 후 열리는 목록에서 *앱*을 누릅니다.
1. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Start entering the name of the app (in our case it’s Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![지침. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
1. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, then tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

![지침. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
1. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. In the new window tap *Set VPN connection*.
1. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
1. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app.
