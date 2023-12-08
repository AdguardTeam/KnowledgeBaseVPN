---
title: How to set up AdGuard VPN automation for iPhone and iPad apps
sidebar_position: 1
sidebar_label: How to set up AdGuard VPN automation
---

There are no app exclusions in AdGuard VPN for iOS. Our desktop apps have the *Split tunneling* module and the app for Android has *Apps settings* — these settings allow you to decide for which apps AdGuard VPN should be enabled. Yet, there is an alternative way to automate AdGuard VPN for apps on iPhones and iPads.

## Setting up AdGuard VPN automatic activation

If you need a VPN for one or more apps, set up AdGuard VPN to automatically turn on and off when you open and close them. Go to the Exclusions tab, select General mode and follow the instructions. Here we describe how to create automation for Twitter, but you can choose any other app.

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. Then tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, then tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring AdGuard VPN automatic shutdown

![Instruction. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app.
