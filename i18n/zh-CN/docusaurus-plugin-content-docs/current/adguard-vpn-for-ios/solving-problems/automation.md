---
title: 如何在 iPhone 和 iPad 应用程序设置 AdGuard VPN 自动化
sidebar_position: 2
sidebar_label: 如何设置 AdGuard VPN 自动化
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

## Configuring automatic connection to VPN

如果您需要在一款或多款应用程序里启用 VPN 服务，请将 AdGuard VPN 设置为在您打开和关闭 APP 时自动打开和关闭 VPN 连接。 转到「排除项」标签，选择「常规模式」并按照说明进行操作。 此处我们描述如何为 Twitter 创建自动化，但用户也可以选择任何其他应用程序。

![指示说明 第1部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. 从 App Store 下载 [*快捷方式* APP](https://apps.apple.com/us/app/shortcuts/id915249334) 并通过点击屏幕底部的时钟图标转到*自动化*部分。
1. 点选*创建个人自动化*按钮，然后在打开的列表中点击*应用程序*。
1. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Start entering the name of the app (in our case it’s Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![指示说明 Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
1. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, then tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

![指示说明 Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
1. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. In the new window tap *Set VPN connection*.
1. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
1. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app.
