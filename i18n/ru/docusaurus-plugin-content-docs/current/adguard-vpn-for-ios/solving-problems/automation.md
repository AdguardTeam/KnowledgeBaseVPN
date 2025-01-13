---
title: Как автоматизировать работу AdGuard VPN для приложений на iPhone и iPad
sidebar_position: 2
sidebar_label: Как автоматизировать работу AdGuard VPN
---

В AdGuard VPN для iOS нет исключений приложений. Но есть способ автоматизировать работу AdGuard VPN для приложений на iPhone и iPad.

## Настройка автоматического подключения к VPN

Если вам нужен VPN для одного или нескольких приложений, настройте автоматическое включение и выключение AdGuard VPN при их открытии и закрытии. Here is how to create an automation for that.

1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.

1. Tap *New Automation* or + (if you already have another automation). In the *Personal Automation* list that opens, scroll to find *App* and tap it.

    ![New Automation](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/newautomation.png)

1. Select the *Is Opened* checkbox, select *Run Immediately* (if you don’t want to confirm the VPN launch manually), and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Opened](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isopened.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for, tap *Done* and *Next*.

    ![App](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/app.png)

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection On*, and tap *Done*.

    ![Blank Automation](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/blankautomation.png) ![Set VPN connection](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/setvpnconnection.png) ![Turn VPN connection On](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionon.png)

Now AdGuard VPN will be automatically enabled when you open the app you’ve set up automation for. If you’d like to, you can create another command that will make AdGuard VPN automatically turn off when you close the app.

## Настройка автоматического отключения от VPN

1. In the same *Shortcuts* app start creating a new automation: tap +, scroll and tap *App* in the list.

    ![Plus](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/plus.png)

1. Select the *Is Closed* checkbox, select *Run Immediately*, and leave the slider next to the *Ask before running* option to the inactive position.

    ![Is Closed](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/isclosed.png)

1. Tap *Choose* next to the *App*, select the app you’re setting up the VPN for (in our example, it’s Instagram), tap *Done* and *Next*.

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection Off*, and tap *Done*.

    ![Turn VPN connection Off](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/turnvpnconnectionoff.png)

Done! AdGuard VPN will now be disabled on your device every time you close the app you’ve set up automation for. You can repeat the same steps for any other app.

![Done](https://cdn.adguardvpn.com/content/kb/vpn/ios/automation/done.png)
