---
title: Installation and removal
sidebar_position: 2
---

## System requirements

**Operating system version**: macOS 10.15 (64-bit) or higher

**RAM**: at least 2 GB

**Free disk space**: 120 MB

## How to install AdGuard VPN for Mac

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*.
![Download AdGuard VPN from the official website](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Wait until the download of the *AdGuardVPN.dmg* file is finished and open it in the "Downloads" folder.
3. Wait until the installation program window opens. Double-click the icon in it.
![Program installation window *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. When you first start AdGuard VPN, the operating system will show a warning on the screen that this application has been downloaded from the Internet. Click *Open*.
5. Then click *Continue* and *Install*.

![Click Continue](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Click Install](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Wait for the installer to download the necessary files.

AdGuard VPN for Mac is installed!

## How to uninstall AdGuard VPN for Mac

### Standard uninstallation

To uninstall AdGuard VPN for Mac, follow two simple steps:

1. Open "Finder" and go to the "Programs" section.

2. Select *AdGuard VPN* from the list, right-click it and then click *Move to Trash*.

![Standard uninstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Advanced uninstallation

Sometimes, as a result of incorrect removal or in other rare cases, the standard uninstallation may not be enough. In that case, our support may ask you to perform an advanced uninstall to completely remove AdGuard VPN from your Mac. To do this, do the following:

1. Follow the steps described in the section ["Standard uninstallation"](#how-to-uninstall-adguard-vpn-for-mac).
2. Open "Finder" or "Spotlight" and enter `Keychain` in the search.
![Advanced uninstallation. Enter Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Click the icon of the found program and enter `com.adguard.mac.vpn` in the search. If there is such a record in the search results, delete it.
4. Go back to "Finder" or "Spotlight" and enter `Terminal`.
![Advanced uninstallation. Enter Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Open the program and enter the command — `defaults delete com.adguard.mac.vpn`.
6. Press *Space bar* and enter another command — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN has been completely removed from your Mac.

You can learn more about AdGuard VPN for Mac in [this article](/adguard-vpn-for-mac/overview).
