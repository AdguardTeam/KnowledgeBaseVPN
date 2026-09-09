---
title: Automation
sidebar_position: 2
sidebar_label: Automation
---

_Automation_ is a feature in the Shortcuts app that performs an action for you automatically based on the conditions you choose. For example, it can turn off AdGuard VPN the moment you open an app, and turn it back on when you close that app.

This is useful if you want AdGuard VPN off for some apps but not for others. AdGuard VPN for iOS doesn’t have app exclusions, so automation is the closest way to get the same result without switching the VPN on and off yourself every time.

Here’s how to set up an automation that disconnects from AdGuard VPN when you open an app, and turns it back on when you close it.

## Turn off AdGuard VPN when you open an app

1. In the Shortcuts app, go to _Automation_ and tap _New Automation_ or the plus (+) button in the top right corner.
2. Choose _App_, select one or several apps, and check _Is Opened_.
3. Turn on _Run Immediately_ and turn off _Notify When Run_.
4. Tap _Next_, select AdGuard VPN, and pick _Disconnect_.

![App automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

To turn AdGuard VPN back on when you close the same app, repeat the steps above, but select _Is Closed_ in step 2 and set the action in step 4 to _Connect_.

## Turn AdGuard VPN off when you join home Wi-Fi

If you don’t need to use VPN at home, set it to turn off when you join your home Wi-Fi network and back on when you leave.

1. In the Shortcuts app, go to _Automation_ and tap _New Automation_ or ‘+’ in the top right corner.
2. Choose _Wi-Fi_, select _Is Joined_, and choose your home network.
3. Turn on _Run Immediately_ and _Run After Connection Interruption_.
4. Tap _Next_, select AdGuard VPN, and pick _Disconnect_.

![Wi-Fi automation \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Turn AdGuard VPN back on when you leave

Repeat the steps above, but choose _Is Disconnected_ instead of _Is Joined_, turn on _Run Immediately_, and set the action to _Connect_.
