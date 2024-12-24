---
title: Common installer errors
sidebar_position: 2
---

This article outlines some of the most common errors you may encounter while installing AdGuard VPN for Windows and possible ways to resolve them.

### Error 5: Access Denied {#error-5}

This error message appears if required permissions are not granted. There may be several different reasons why AdGuard VPN installer does not have the permissions it requires to properly finish the installation process. You can try the following steps:

- Temporarily disable your antiviruses. Some of them may interfere with the installation, depending on the restrictiveness of their settings.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don’t select an external drive, a virtual drive, etc.

- Reboot your computer. Sometimes the permission issues are temporary and can be solved by restarting the PC.

### Error 112: Disk is full, Error 1632: Temporary folder full or inaccessible {#error-112}

These are two different errors with very similar solutions. As their names suggest, AdGuard VPN installer didn’t find enough disk space to complete the installation. There are several things you can attempt to fix the problem:

- Uninstall some programs or delete unnecessary files from the drive you were trying to install AdGuard VPN to.

- Download, install, and run [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), a free piece of software by Malwarebytes. It will, among other things, clean your system from all kinds of extra “leftover” files that remain after incorrectly uninstalled programs and such. It will help clean up some disk space.

- Reboot your computer. Sometimes temporary files can take up a considerable amount of disk space, and restarting your PC is the most reliable way to get rid of them.

### Error 1601: Windows Installer is not accessible {#error-1601}

You could say this is a particular subtype of Error 1603. The possible solutions are similar:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Reboot the PC and start the installation all over again. Sometimes that’s enough to fix the problem.

### Error 1602: Canceled by user {#error-1602}

If you got this error code, chances are you have interrupted the installation process manually in one way or another. What you can do is:

- Do not close the installer window. When the installation is complete, it will close automatically.

- If a dialogue window pops up during the installation, hit *Yes* to grant the installer the required permissions. Clicking *No* will cancel the installation.

- Do not start other processes while the installation is in progress.

### Error 1603: Fatal error during installation {#error-1603}

This error sounds more worrying than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:

- Press the *Win* key, search for *Command Prompt*, and run it. There, type in `sfc /scannow` and press *Enter*.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don’t select an external drive, a virtual drive, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type **msiexec /regserver** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It’s also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: Another installation is already in progress {#error-1618}

This error appears when trying to run multiple instances of the AdGuard VPN installer simultaneously. What to do if you get this error:

- Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.

- Don’t click the installer multiple times, even if it doesn’t seem to start right away. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Another version of this product is already installed {#error-1638}

It’s very likely that you’ve already installed AdGuard VPN before.

- Check if AdGuard VPN is already installed on your computer. To do that, press the *Win* key and start typing *adguard vpn*.

- Maybe there are some leftover files from a previous AdGuard VPN installation. Uninstall AdGuard using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

### Other errors {#other}

If you have encountered an error that’s not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:

- Find and archive **AdGuard VPN installation logs** in the same way that is described in [this article](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk the **Event Viewer** logs. [This article](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explains how to do that.

Please email all these files from the two previous steps at **support@adguard.com** and describe the problem in the message body. Our support team will reply to you as soon as possible.
