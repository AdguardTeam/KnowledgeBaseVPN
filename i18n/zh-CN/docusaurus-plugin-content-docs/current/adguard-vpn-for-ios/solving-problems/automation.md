---
title: 如何在 iPhone 和 iPad 应用程序设置 AdGuard VPN 自动化
sidebar_position: 1
sidebar_label: 如何设置 AdGuard VPN 自动化
---

AdGuard VPN iOS 版中没有应用排除项。 不过，有一种方法可以让 AdGuard VPN 自动适用 iPhone 和 iPad 上的应用程序。

## 设置 AdGuard VPN 自动启动

如果您需要在一款或多款应用程序里启用 VPN 服务，请将 AdGuard VPN 设置为在您打开和关闭 APP 时自动打开和关闭 VPN 连接。 转到「排除项」标签，选择「常规模式」并按照说明进行操作。 此处我们描述如何为 Twitter 创建自动化，但用户也可以选择任何其他应用程序。

![指示说明 第1部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. 从 App Store 下载 [*快捷方式* APP](https://apps.apple.com/us/app/shortcuts/id915249334) 并通过点击屏幕底部的时钟图标转到*自动化*部分。
2. 点选*创建个人自动化*按钮，然后在打开的列表中点击*应用程序*。
3. 在下一个窗口中，确保选择*被打开*选项，然后点击*选择*来选择应用程序。

![指示说明 第2部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. 开始输入应用程序的名称（此处以 Twitter 为例），并选择它。 点击「*完成*」，然后点击屏幕右上角的「*下一步*」。 在打开的窗口中，点击「*添加操作*」。

![指示说明 第3部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. 输入「AdGuard VPN」并选择 「AdGuard VPN 应用程序」。 在新窗口里点击*设置 VPN 连接*。

![指示说明 第4部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. 确保数值显示*启用* VPN 连接，并点击*下一步*。
7. 在下一个窗口中，将「*运行前询问*」选项旁边的滑块移动到非活动。 确认您的选择，然后点击「*完成*」。

现在您有一个新的“场景”。当您启动 Twitter 应用程序时，AdGuard VPN 将自动启用。 现在您需要创建另一个命令，使 AdGuard VPN 在您关闭应用程序时自动关闭。

## 配置 AdGuard VPN 自动关闭

![指示说明 第1部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. 仍在「*快捷方式*」应用中新建自动化：点击「*自动化*」→「*创建个人自动化*」→「*应用程序*」。
2. 确保选中*已关闭*选项并取消选中相邻选项下的复选框。 然后点击*选择*。

![指示说明 第2部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. 输入 *Twitter* 并选择该应用程序。 然后点击屏幕右上角的*完成*。 点击*添加操作*并选择 AdGuard VPN。

![指示说明 第3部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. 在新窗口里点击*设置 VPN 连接*。
5. 然后点击「*开*」使其变为「*关*」，然后点击屏幕右上角的「*下一个*」。
6. 禁用「*运行前询问*」选项并确认您的选择。 然后点击屏幕右上角的「*完成*」以完成该过程。

完成! AdGuard VPN 现在将在您每次打开 Twitter 应用程序时在您的设备上启用，并在您关闭应用程序时自动禁用。 您可以对任何其他应用程序重复相同的步骤。
