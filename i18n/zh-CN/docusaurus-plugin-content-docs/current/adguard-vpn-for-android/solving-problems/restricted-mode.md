---
title: '限制模式账户问题'
sidebar_position: 4
---

运行 Android 7 及以上操作系统的手机和平板电脑用户可能会因为**限制模式下的账户**而遇到问题。 如果您有这样的账户，**AdGuard VPN** 和其他使用 VPN 的应用在处理 VPN 流量的时候会受到限制。 此外，在您的设备上使用**应用分身/双账户**也可能导致此问题。 下面是发生此问题时的解决建议。

## 解决方案

您有两种方法可以解决此问题：

### 选项1：使用 ADB 授予 AdGuard VPN 权限

1. 激活**开发者模式**并启用**USB 调试**；

    - 打开手机自带的「**设置**」；
    - 点击**系统**部分（一般在设置菜单的最后）。 在此部分中找到子项「**关于手机**」；
    - Click the **Build number** line 7 times. 之后，您会收到通知称**您已处于开发者模式**（有可能会要求您输入设备的解锁密码）；
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    > If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

1. [安装和配置](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB；

    > 在 Windows 平台中，**三星**用户需要安装[此工具](https://developer.samsung.com/mobile/android-usb-driver.html)。

1. 在您的电脑或笔记本上安装 **ADB**，然后用 **USB 数据线**将手机和电脑相连；

1. Open **the command line** on your PC:

    - 在 **Windows** 系统中指的是 **cmd.exe**；
    - 在 **macOS** 中指的是 **终端**；

1. 输入命令 `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS`，然后按下 **Enter** 键。

### 选项2：移除*受限用户账户*

安卓用户可以在[此处](https://support.google.com/a/answer/6223444?hl=en)找到如何管理用户账户。

> Please note that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Read below how to fix the issue in these cases.

### LG 和三星设备

**LG** 或**三星**手机用户可能也会遇到类似的问题。 这可能是由**应用分身/双 Messenger 账户**功能（其本质是隐式创建了受限账户）引起的。 要解决此问题，您需要禁用此功能。

#### 三星

- 打开**设置**；
- 点击「**高级**」；
- 下滑并点击「**双Messenger 账户**」；
- 禁用所有应用的**双账户**；
- 锁定设备5分钟；
- 解锁屏幕并尝试再次创建 VPN 配置文件。

#### LG

- 打开**设置**；
- 选择「**常规**」选项；
- 下滑并点击「**应用分身**」；
- 移除列表中的所有应用；
- 重启设备。
