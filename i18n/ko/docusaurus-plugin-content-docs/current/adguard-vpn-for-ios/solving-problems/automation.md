---
title: iPhone 및 iPad 앱을 위한 AdGuard VPN 자동화를 설정하는 방법
sidebar_position: 1
sidebar_label: AdGuard VPN 자동화 설정 방법
---

AdGuard VPN에는 *예외 목록*과 두 가지 작동 모드(*일반* 및 *선별* 모드)가 있습니다. *일반 모드*에서 AdGuard VPN은 예외 목록에 추가된 사이트를 제외한 모든 웹사이트에서 작동합니다. *선별 모드*에서 VPN은 예외 목록의 사이트에서만 작동합니다. 각 모드에 대해 별도의 목록을 만들어야 합니다.

보시다시피 *예외 목록*에는 웹사이트만 추가할 수 있습니다. AdGuard VPN이 작동할 앱과 작동하지 않을 앱을 설정하려면 다른 기능을 사용해야 합니다. 데스크탑 앱에는 *분할 터널링* 모듈이 있고 Android용 앱에는 *앱 설정*이 있습니다. 이 설정을 통해 AdGuard VPN을 실행할 앱을 결정할 수 있습니다.

기술적 제안으로 인해 현재로서는 iOS에서 이 기능을 구현하는 것이 불가능합니다. 따라서 iPhone 및 iPad의 앱용 AdGuard VPN을 자동화하는 다른 방법을 제공합니다.

## AdGuard VPN 자동 활성화 설정하기

하나 이상의 앱에 VPN을 사용하려는 경우, iOS 기기에서 해당 앱에 대한 AdGuard VPN의 자동 활성화 및 비활성화를 설정할 수 있습니다. 예외 탭으로 이동하여 일반 모드를 선택하고 지침을 따르세요. 아래에서는 Twitter의 예를 사용하여 자동화를 만드는 방법을 보여드리겠습니다.

![지침. 제1부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![지침. 제2부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![지침. 제3부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![지침. 제4부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

이제 Twitter 앱을 시작하면 AdGuard VPN이 자동으로 활성화됩니다. 하지만 Twitter 앱을 닫을 때 AdGuard VPN이 자동으로 꺼지도록 하는 또 다른 명령을 만들어야 합니다.

## AdGuard VPN 자동 종료 설정

![지침. 제1부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![지침. 제2부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![지침. 제3부](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

이제 AdGuard VPN은 Twitter 앱을 열 때마다 기기에서 활성화되고 닫을 때 비활성화됩니다. 다른 앱에 대해서도 동일한 단계를 수행할 수 있습니다. 