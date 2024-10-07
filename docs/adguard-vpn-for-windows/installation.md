---
title: Installation and removal
sidebar_position: 2
---

## System requirements

AdGuard VPN can only be installed on devices with **Microsoft Windows 11/10/8.1/8/7/Vista SP2 (web-based only)**.

## AdGuard VPN for Windows installation

To install AdGuard VPN for Windows, visit [our website](https://adguard-vpn.com/welcome.html) and click the *Download* button. After it, the `adguardVPNInstaller.exe` will be downloaded. Run the installer and follow its instructions. The process will take less than a minute.

Then you will need to check the box to accept the terms of the EULA and the Privacy policy. And in the last step of the installation, you will be prompted to authorize via your AdGuard account or via social networks (Google, Apple, Facebook).

## AdGuard VPN for Windows uninstallation

If you decide to remove AdGuard VPN from your computer, use one of three options listed below:

- Click *Start* and find AdGuard VPN in the opened list. Right-click it and select *Uninstall*.
- Click *Start* → *Settings* → *Apps* → *Apps and features*. Find AdGuard VPN in the list, click it and choose *Uninstall*.
- Open the *Control Panel*, then click *Programs* → *Programs and Features* → *Uninstall or change a program*. Find AdGuard VPN in the list, right-click it and select *Uninstall*.

### Advanced uninstallation {#advanced}

In case regular uninstall doesn't work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://cdn.adtidy.org/distr/windows/Uninstall_Utility.zip) created by our developers. Extract the archive to any folder on your PC, run the **Adguard.UninstallUtility.exe** file, and allow the app to make changes to your device. Then follow the instruction below:

1. Select *AdGuard VPN* and *Standard* uninstall type, then click *Uninstall*:

    ![Standard uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Click *OK* once the warning window pops up:

    ![Standard uninstall warning *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly recommend contacting our support team before using steps 3–4 of the advanced uninstall instructions.

    :::

1. Select *AdGuard VPN* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt:

    ![Extended uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Click *OK* once the warning window pops up:

    ![Extended uninstall warning *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN is successfully uninstalled!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. To do this, follow the instructions below:

1. Open the Command prompt by typing *cmd* on the start menu.
2. On the Command prompt, use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
3. Use `/vpn` to uninstall AdGuard VPN for Windows.
4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.
