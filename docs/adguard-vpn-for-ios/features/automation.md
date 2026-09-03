---
title: Automation
sidebar_position: 2
sidebar_label: Automation
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

If you need a VPN for one or more apps, set up AdGuard VPN to automatically turn on and off when you open and close them. Here is how to create an automation for that.

## Turn on AdGuard VPN when you open an app

1. In the Shortcuts app, go to *Automation* and tap *New Automation* or ‘+’ in the top right corner.
2. Choose *App*, select one or several apps, and check *Is Opened*.
3. Turn on *Run Immediately* and turn off *Notify When Run*.
4. Tap *Next*, select AdGuard VPN and pick *Connect*.

![App automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

To turn off AdGuard VPN when you close the same app, repeat the steps above, but select *Is Closed* in step 2 and set the action in step 4 to *Disconnect*.

## Turn AdGuard VPN off when you join home Wi-Fi

If you don’t need to use VPN at home, set it to turn off when you join your home Wi-Fi network and back on when you leave.

1. In the Shortcuts app, go to *Automation* and tap *New Automation* or ‘+’ in the top right corner.
2. Choose *Wi-Fi*, select *Is Joined*, and choose your home network.
3. Turn on *Run Immediately* and *Run After Connection Interruption*.
4. Tap *Next*, select AdGuard VPN, and pick *Disconnect*.

![Wi-Fi automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Turn AdGuard VPN back on when you leave

Repeat the steps above, but choose *Is Disconnected* instead of *Is Joined*, turn on *Run Immediately*, and set the action to *Connect*.
