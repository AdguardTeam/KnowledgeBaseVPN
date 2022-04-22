---
title: How to set up AdGuard VPN automation for iPhone and iPad apps
sidebar_position: 1
sidebar_label: How to set up AdGuard VPN automation
---

AdGuard VPN has an *Exclusions* section and two operation modes – *General* and *Selective*. In *General mode* AdGuard VPN works everywhere except sites added to exclusions. Conversely, in *Selective mode*, VPN doesn't work anywhere except sites listed in the exclusions list. Note, that for each mode you must create a separate list. 

As you may notice, only websites can be added to the *Exclusions* section. To adjust AdGuard VPN for apps you need to use another feature. Our desktop apps have the *Split tunneling* module and the app for Android has *Apps settings* — these settings allow you to decide in which apps AdGuard VPN should run.

But, as it often happens, due to a number of technical nuances, it is impossible to implement such a useful function for iOS, at least for now. Therefore, we offer you an alternative way to automate AdGuard VPN for apps on iPhones and iPads. 

## Setting up AdGuard VPN automatic activation

Let's assume that on your phone or tablet AdGuard VPN works in *Selective mode*, i.e. only on sites listed in *Exclusions*. In this case, apps’ traffic doesn't get into the VPN tunnel. But you want to use, for example, Twitter with VPN enabled. To avoid turning AdGuard VPN on/off manually every time you interact with the social network, we suggest setting up automation on your iOS device. 

* Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen. 
* Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
* In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Instruction. Part 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
* Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Instruction. Part 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

* Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*. Make sure the variables say *Turn* VPN connection *On* and tap *Next*. 

![Instruction. Part 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
* In the next window, move the slider next to the *Confirm before starting* option to the inactive position. Confirm your choice in the new window.

Done! You have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring AdGuard VPN automatic shutdown

* In the same *Shortcuts* app open the *Automation* section, tap *+* in the upper right corner of the screen, then select *App*.
* Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option.

![Instruction. Part 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
* Next, select the Twitter app, tap *Next* → *Add Action*, select AdGuard VPN and tap *Set up VPN connection*.
* In the next window, tap the word *Enable* so that it changes to the word *Disable*, then tap *Next* in the upper right corner of the screen.
* Disable the *Confirm before starting* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

![Instruction. Part 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app. 