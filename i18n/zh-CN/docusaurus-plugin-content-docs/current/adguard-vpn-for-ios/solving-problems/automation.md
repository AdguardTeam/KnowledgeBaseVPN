---
title: 如何在 iPhone 和 iPad 应用程序设置 AdGuard VPN 自动化
sidebar_position: 1
sidebar_label: 如何设置 AdGuard VPN 自动化
---

AdGuard VPN 有*排除项*部分和两个操作模式，即*常规*和*选择*模式。 *在常规模式下，*AdGuard VPN 除了添加到排除项列表里的网站外在所有网站上工作。 相反的，在*选择模式*下，VPN 仅在排除项列表内的网站上运行。 请注意，每一个操作模式具有单独的列表。

可能有用户已注意到，只有网站可以添加到*排除项*部分。 要调整 AdGuard VPN 在应用程序运作，用户需要使用另一个功能。 我们的桌面应用程序具有*分离隧道*模块，安卓版的应用程序具有*应用程序设置*。这些设置允许用户决定 AdGuard VPN 应在哪些应用程序里运行。

但是，像往常一样，由于一些技术上的细微差别，我们无法 iOS 上应用该好用的功能，至少目前是这样。 因此，我们为用户提供了另一种方法来在 iPhone 和 iPad 上的应用程序里自动化 AdGuard VPN。

## 设置 AdGuard VPN 自动启动

如果您需要在一款或多款应用程序里启用 VPN 服务，请将 AdGuard VPN 设置为在您打开和关闭 APP 时自动打开和关闭 VPN 连接。 转到「排除项」标签，选择「常规模式」并按照说明进行操作。 此处我们描述如何为 Twitter 创建自动化，但用户也可以选择任何其他应用程序。

![指示说明 第1部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![指示说明 第2部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![指示说明 第3部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![指示说明 第4部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

现在您有一个新的“场景”。当您启动 Twitter 应用程序时，AdGuard VPN 将自动启用。 现在您需要创建另一个命令，使 AdGuard VPN 在您关闭应用程序时自动关闭。

## 配置 AdGuard VPN 自动关闭

![指示说明 第1部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![指示说明 第2部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![指示说明 第3部分](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

完成! AdGuard VPN 现在将在您每次打开 Twitter 应用程序时在您的设备上启用，并在您关闭应用程序时自动禁用。 您可以对任何其他应用程序重复相同的步骤。 