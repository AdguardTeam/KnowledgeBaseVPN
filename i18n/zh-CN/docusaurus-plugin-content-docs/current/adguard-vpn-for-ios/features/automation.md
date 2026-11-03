---
title: 自动化
sidebar_position: 2
sidebar_label: 自动化
---

「自动化」是「快捷指令」应用中的一项功能，它会根据您选择的条件自动为您执行操作。例如，它可以在您打开某个应用时关闭 AdGuard VPN，并在您关闭该应用时重新开启。

如果您希望对某些应用关闭 AdGuard VPN，而对其他应用保持开启，这项功能会很有用。 AdGuard VPN iOS 版没有应用排除功能，因此自动化是获得相同效果最接近的方式，无需每次手动开启和关闭 VPN。

以下是如何设置自动化：在您打开应用时断开 AdGuard VPN，并在您关闭应用时重新开启。

## 在打开应用时关闭 AdGuard VPN

1. 在「快捷指令」应用中，前往「自动化」，然后点击「新建自动化」或右上角的加号 (+) 按钮。
2. 选择「App」，选择一个或多个应用，然后勾选「已打开」。
3. 开启「立即运行」，并关闭「运行时通知」。
4. 点击「下一步」，选择 AdGuard VPN，然后选取「断开」。

![应用自动化](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

要在关闭同一应用时重新开启 AdGuard VPN，请重复上述步骤，但在第 2 步中选择「已关闭」，并将第 4 步中的操作设置为「连接」。

## 加入家庭 Wi-Fi 时关闭 AdGuard VPN

如果您在家不需要使用 VPN，可以设置它在您加入家庭 Wi-Fi 网络时关闭，并在您离开时重新开启。

1. 在「快捷指令」应用中，前往「自动化」，然后点击「新建自动化」或右上角的 “+”。
2. 选择「Wi-Fi」，选择「已加入」，然后选择您的家庭网络。
3. 开启「立即运行」和「连接中断后运行」。
4. 点击「下一步」，选择 AdGuard VPN，然后选取「断开」。

![Wi-Fi 自动化 \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## 离开时重新开启 AdGuard VPN

重复上述步骤，但选择「未连接」而不是「已加入」，开启「立即运行」，并将操作设置为「连接」。
