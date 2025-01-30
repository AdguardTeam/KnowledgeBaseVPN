---
title: Installation and removal
sidebar_position: 2
---

## 시스템 요구 사항

AdGuard VPN can only be installed on devices with **Microsoft Windows 11, 10, 8.1, 8, and Vista SP2 (web-based only)**.

## Windows용 AdGuard VPN 설치 방법

To install AdGuard VPN for Windows, visit [our website](https://adguard-vpn.com/welcome.html) and click the *Download* button. `adguardVPNInstaller.exe` 가 다운로드 될 것입니다. 설치 프로그램을 실행하고 설명을 따릅니다. 이 과정은 1분보다 적게 걸립니다.

Then you will need to check the box to accept the terms of the EULA and the Privacy policy. 설치 마지막 단계에서 AdGuard 계정이나 소셜 네트워크(Google, Apple, Facebook)를 통해 인증하라는 메시지가 표시됩니다.

## Windows용 AdGuard VPN 삭제 방법

If you decide to remove AdGuard VPN from your computer, use one of three options listed below:

- Click *Start* and find AdGuard VPN in the opened list. Right-click it and select *Uninstall*.
- Click *Start* → *Settings* → *Apps* → *Apps and features*. Find AdGuard VPN in the list, click it and choose *Uninstall*.
- Open the *Control Panel*, then click *Programs* → *Programs and Features* → *Uninstall or change a program*. Find AdGuard VPN in the list, right-click it and select *Uninstall*.

### Advanced uninstallation {#advanced}

In case regular uninstall doesn’t work for any reason, you can try to use an advanced method. First of all, you need to [download the uninstaller tool](https://cdn.adguard-vpn.com/distr/windows/Uninstall_Utility.zip) created by our developers. Extract the archive to any folder on your PC, run the **Adguard.UninstallUtility.exe** file, and allow the app to make changes to your device. Then follow the instruction below:

1. Select *AdGuard VPN* and *Standard* uninstall type, then click *Uninstall*:

    ![Standard uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Click *OK* once the warning window pops up:

    ![Standard uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Follow the next steps only if performing the first two steps wasn’t enough for some reason. We strongly recommend contacting our support team before using steps 3–4 of the advanced uninstall instructions.

    :::

1. Select *AdGuard VPN* and *Extended* uninstall type, then click *Uninstall*. Click *Yes, continue* in the window prompt:

    ![Extended uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Click *OK* once the warning window pops up:

    ![Extended uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Wait until uninstall is finished — there will be a phrase **Uninstall complete** and a prompt to restart your computer:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN is successfully uninstalled!

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. To do this, follow the instructions below:

1. Open Command Prompt by typing *cmd* from the Start menu.
2. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
3. Use `/vpn` to uninstall AdGuard for Windows. It should look like this:

   `Adguard.UninstallUtility.exe /console /vpn`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/vpn` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
