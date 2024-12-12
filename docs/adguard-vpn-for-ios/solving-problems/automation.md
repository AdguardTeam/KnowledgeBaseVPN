---
title: How to set up AdGuard VPN automation for iPhone and iPad apps
sidebar_position: 2
sidebar_label: How to set up AdGuard VPN automation
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

## Configuring automatic connection to VPN

If you need a VPN for one or more apps, set up AdGuard VPN to automatically turn on and off when you open and close them. Here is how to create an automation for that.

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
1. Tap *New Automation* or + (if you already have another automation), scroll to find *App* in the *Personal Automation* list that opens, and tap it.
1. Select the *Is Opened* checkbox, tap *Choose* next to the *App*, select the app you’re setting up the VPN for, and tap *Done*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Select *Run Immediately* (if you don’t want to confirm the VPN launch manually), leave the slider next to the *Ask before running* option to the inactive position, and tap *Next*.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection On*, and tap *Done*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

Now AdGuard VPN will be automatically enabled when you open the app you’ve set up automation for. If you’d like to, you can create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap +, scroll to find *App* in the *Personal Automation* list that opens, and tap it.
1. Select the *Is Closed* checkbox, tap *Choose* next to the *App*, select the app you’re setting up the VPN for, and tap *Done*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Select *Run Immediately* (if you don’t want to confirm the VPN launch manually), leave the slider next to the *Ask before running* option to the inactive position, and tap *Next*.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. Tap *New Blank Automation* in *Get Started*, find AdGuard VPN, tap *Set VPN connection*, select *Turn VPN connection Off*, and tap *Done*.

Done! AdGuard VPN will now be disabled on your device every time you close the app you’ve set up automation for. You can repeat the same steps for any other app.
