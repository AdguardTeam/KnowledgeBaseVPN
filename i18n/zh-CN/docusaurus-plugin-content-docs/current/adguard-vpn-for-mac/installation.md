---
title: 安装和卸载
sidebar_position: 2
---

## 系统要求

**Operating system version**: macOS 10.15 (64-bit) or higher

**RAM**： 至少 2GB

**可用磁盘空间**： 120MB


## 如何安装 AdGuard VPN Mac版

1. 要安装 AdGuard VPN Mac版，只需点击[此链接](https://agrd.io/mac_vpn)，或打开浏览器，在地址栏输入 *adguard-vpn.com* ，在打开的页面上点击*「下载」*。

![从官方网站下载 AdGuard VPN](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. 等待 *AdGuardVPN.dmg* 文件下载完成，然后在「下载」文件夹中打开它。

3. 等到安装程序窗口打开。 双击图标。

![程序安装窗口](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. 当您第一次启动 AdGuard VPN 时，操作系统会在屏幕上显示一个警告，即此应用程序已从互联网下载。 点击「*打开*」。

5. 然后单击「*继续*」和「*安装*」。

![点击继续](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![点击安装](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. 请等待安装程序完成安装所需要的文件。

AdGuard VPN Mac 版安装成功！


## 如何卸载 AdGuard VPN Mac版?

### 标准卸载

要卸载 AdGuard VPN Mac版，请执行两个简单的步骤：

1. 打开「Finder」并转到「程序」部分。

2. Select *AdGuard VPN* from the list, right-click it and then click *Move to Trash*.

![标准卸载](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### 进阶卸载

有时，由于删除不正确，或者在其他极少数情况下，标准卸载可能不起作用。 然后，客服支持服务可能会要求您进行进阶卸载，以便从您的 Mac 上彻底删除AdGuard VPN 软件。 要做到这一点，请执行以下操作：

1. 请按照「[标准卸载](#how-to-uninstall-adguard-vpn-for-mac)」部分中描述的步骤执行操作。

2. 打开「Finder」或「Spotlight」，在搜索中输入 `Keychain`。

![进阶卸载 输入 Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. 点击找到的应用程序图标，在搜索中输入 `com.adguard.mac.vpn`。 如果搜索结果中有这样的记录，则将其删除。

4. 返回「Finder」或「Spotlight」并输入 `Terminal`。

![进阶卸载 进入终端](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. 打开程序并输入命令：`defaults delete com.adguard.mac.vpn`。

6. 按*空格键*并输入另一个命令：`rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`。

AdGuard VPN 已从您的 Mac 中删除成功。

您可以在[这篇文章](/adguard-vpn-for-mac/overview.md)中了解有关 AdGuard VPN Mac版的更多信息。
