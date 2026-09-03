---
title: Shortcuts
sidebar_position: 1
sidebar_label: Shortcuts
---
You may want AdGuard VPN on for some apps and off for others. For example, your banking app might not work with a VPN on, but you always want it on for Instagram, or you want your VPN to turn off automatically on home Wi-Fi.

Shortcuts, a tool built into iOS, lets you automate these scenarios and more. They can be used as an alternative to regular widgets and include more complex automations.

## Before you start

Make sure that:

- You have the Shortcuts app installed on your iPhone or iPad;
- AdGuard VPN is installed;
- You’re signed in to AdGuard VPN and have a VPN profile installed.

## Connect or disconnect in one tap

AdGuard VPN provides two ready-made shortcuts: *Connect* and *Disconnect*. *Connect* turns on the VPN and connects to your last used location. *Disconnect* turns off the VPN. You’ll find both under *App Shortcuts* in the Shortcuts app. Add either one to any of the three places listed below.

### Home Screen

On iOS 16:

1. Go to the Shortcuts app and tap “+”.
2. Tap *Add Action*, go to *Apps* and select *AdGuard VPN*.
3. Choose *Set VPN connection* and on the following screen, tap *Add to Shortcut* and *Turn VPN connection On*.

![Add shortcut](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcut-combined.png)

Here’s how to add the shortcut to your Home Screen.

1. Long press the shortcut and tap *Share* → *Add to Home Screen*.
2. Customize the shortcut name and icon if you need to, then tap *Add*. The shortcut will appear on your Home Screen as a 1x1 icon.
![Add to Home Screen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/homescreen-combined.png)

On newer versions:

Follow the quick instructions that you can find in the AdGuard VPN app. (*Settings* → *Shortcuts* → *Add shortcuts to the Home Screen*)

![In-app instructions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in-app-home-screen.png)

### Control Сenter

You can add an AdGuard VPN shortcut as a tile in the Control Center for quick access from anywhere on the device.

1. Open Control Сenter. On an iPhone with Face ID, swipe down from the top right. On an iPhone with a Home button, swipe up from the bottom.
2. Long-press an empty area and tap *Add a Control*.
3. Find *Shortcuts* in the list and tap *Run Shortcut*, then tap *Choose*, and select your AdGuard VPN shortcut. The shortcut will now appear in your Control Center.

Note: The exact steps may vary depending on your iOS version.

![Add shortcut to Control Center](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/control-center-combined.png)

### Widget

1. Long-press an empty area on your Home Screen until the apps jiggle, then tap *Edit* in the top-left corner → *Add Widget*.
2. Find *Shortcuts* in the list and choose a widget size that can display at least two shortcuts.
3. Tap *Add Widget*.
4. While in edit mode, tap the widget to open the configuration menu, set *Folder* to *Custom*, and assign *Connect* to one slot and *Disconnect* to the other.

![Add shortcut as widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widgets-combined.png)

## Open an app with AdGuard VPN enabled in one tap

If you need the VPN on for a certain app and nothing else, you can create a custom shortcut that will turn on AdGuard VPN and open the app you want to open — all in one tap. Here’s how to set it up.

1. Open the Shortcuts app, tap the plus (+) button, and search for AdGuard VPN. Add the *VPN status* action.
2. Add an If action. Inside it, add *Open App* and set it to the app you want — for example, YouTube.
3. Under *Otherwise*, add three actions in order: *AdGuard VPN* → *Turn VPN Connection On*, *Wait* (set to 2 seconds), and *Open App* (same app as above).
4. Tap the name at the top to set a custom icon and name, then test the shortcut with the play button.
5. Add the shortcut to the Home Screen by tapping the name and selecting *Add to Home Screen*.

![Add custom shortcut](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/custom-shortcut-combined.png)

## Connect or disconnect with Siri

In the AdGuard VPN app, go to *General* → *Shortcuts* → *Set up Siri phrases*. You will then have two options: *Record a phrase to connect* or *Record a phrase to disconnect*.

![Connect with Siri](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/siri-combined.png)

Choose *Record a phrase to connect* or *Record a phrase to disconnect*, then say the phrase you want, for example “Hey Siri, connect to AdGuard VPN.” Once recorded, say the same phrase to Siri any time to run it.

## Automating AdGuard VPN for specific apps

Some apps, like banking apps, don’t work with a VPN on. Set up two automations so the VPN turns off while you use the app and turns back on once you’re done. When set up correctly, automation can be more convenient than manually launching a shortcut — you don’t have to tap on a Home Screen icon to open the shortcut, simply opening the app is enough. Besides, you can include several apps in one automation. You can use automations to turn AdGuard VPN on or off when you open an app, when you close an app, and when you join or disconnect from your home Wi-Fi.

[How to set up automations on your iPhone or iPad](https://adguard-vpn.com/kb/adguard-vpn-for-ios/features/automation/)
