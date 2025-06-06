---
title: 如何在 iPhone 和 iPad 应用程序设置 AdGuard VPN 自动化
sidebar_position: 2
sidebar_label: 如何设置 AdGuard VPN 自动化
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

## Configuring automatic connection to VPN

如果您需要在一款或多款应用程序里启用 VPN 服务，请将 AdGuard VPN 设置为在您打开和关闭 APP 时自动打开和关闭 VPN 连接。 Here is how to create an automation for that.

1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.

1. Tap *New Automation* or + (if you already have another automation). In the *Personal Automation* list that opens, scroll to find *App* and tap it.

    ![New Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/newautomation.png)

1. Select the *Is Opened* checkbox, select *Run Immediately* (if you don’t want to confirm the VPN launch manually), and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Opened *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isopened.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for, tap *Done* and *Next*.

    ![App *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/app.png)

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection On*, and tap *Done*.

    ![Blank Automation *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/blankautomation.png) ![Set VPN connection *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/setvpnconnection.png) ![Turn VPN connection On *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionon.png)

Now AdGuard VPN will be automatically enabled when you open the app you’ve set up automation for. If you’d like to, you can create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

1. In the same *Shortcuts* app start creating a new automation: tap +, scroll and tap *App* in the list.

    ![Plus *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/plus.png)

1. Select the *Is Closed* checkbox, select *Run Immediately*, and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Closed *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isclosed.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for (in our example, it’s Instagram), tap *Done* and *Next*.

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection Off*, and tap *Done*.

    ![Turn VPN connection Off *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionoff.png)

Done! AdGuard VPN will now be disabled on your device every time you close the app you’ve set up automation for. You can repeat the same steps for any other app.

![Done *mobile](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/done.png)
