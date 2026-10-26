---
title: 快捷指令
sidebar_position: 1
sidebar_label: 快捷指令
---

快捷指令是 iOS 内置的工具，无需打开 AdGuard VPN 即可轻松管理连接。您可以将「连接」、「断开」或「切换 VPN」快捷指令放在主屏幕、控制中心或小组件中，也可以设置 Siri 短语，用语音进行连接。

快捷指令还可以包含更复杂的自动化操作。例如，银行应用在开启 VPN 时可能无法使用，但您希望在使用 Instagram 时始终开启 VPN，或者希望 VPN 在家庭 Wi-Fi 下自动关闭。快捷指令可以让您将这些场景自动化。

## 开始之前

请确保：

- 您的 iPhone 或 iPad 上已安装「快捷指令」应用；
- 已安装 AdGuard VPN；
- 您已登录 AdGuard VPN 并安装了 VPN 配置文件。

## 一键连接或断开

AdGuard VPN 提供三个现成的快捷指令：「连接」、「断开」、「开关 VPN」。「连接」会开启 VPN 并连接到您上次使用的位置。「断开」会关闭 VPN。「开关 VPN」会在两者之间切换：VPN 关闭时连接，开启时断开。

您可以在「快捷指令」应用中找到这些快捷指令：在 iOS 16 上，请查看「App 快捷指令」。将它们中的任意一个添加到下面列出的三个位置。

在 iOS 27 上，可在「快捷指令」应用的「图库」中的「App」→「AdGuard VPN」下找到 AdGuard VPN 快捷指令。如果「快捷指令」打开后显示「所有快捷指令」，请点击左上角的返回箭头返回「图库」。

![iOS 27 上的快捷指令](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcuts_library_27.png)

### 主屏幕

要在主屏幕上设置快捷指令，请按照 AdGuard VPN 应用中的快速说明操作。（「设置」→「快捷指令」→「将快捷指令添加到主屏幕」）。

![应用内说明 \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

不同 iOS 版本的说明可能有所不同。以下是 iOS 16 的说明：

1. 前往「快捷指令」应用，点击加号 (+) 按钮。
2. 点击「添加操作」，然后选择「AdGuard VPN」。
3. 选择您需要的快捷指令：「连接到 VPN」、「断开 VPN 连接」、「开关 VPN 连接」或「VPN 状态」。

![添加快捷指令](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut_ios_16.png)

以下是将快捷指令添加到主屏幕的方法。

1. 长按快捷指令，然后点击「分享」→「添加到主屏幕」。
2. 如有需要，可自定义快捷指令的名称和图标，然后点击「添加」。该快捷指令将以 1x1 图标的形式显示在主屏幕上。

![添加到主屏幕](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen_ios_16.png)

### 控制中心

您可以将 AdGuard VPN 快捷指令添加到控制中心，以便在设备上的任何位置快速访问。

1. 打开控制中心。在配备 Face ID 的 iPhone 上，从右上角向下轻扫。在配备主屏幕按钮的 iPhone 上，从底部向上轻扫。
2. 长按空白区域，然后点击「添加控制」。
3. 在列表中找到「快捷指令」，点击「运行快捷指令」，然后点击「选取」并选择您的 AdGuard VPN 快捷指令。该快捷指令现在会显示在您的控制中心中。

注意：具体步骤可能因您的 iOS 版本而异。

![将快捷指令添加到控制中心](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### 小组件

1. 长按主屏幕上的空白区域，直到应用开始抖动，然后点击左上角的「编辑」→「添加小组件」。
2. 在列表中找到「快捷指令」，然后选择小组件尺寸。我们建议您选择至少能显示两个快捷指令的尺寸。
3. 点击「添加小组件」。
4. 在编辑模式下，点击小组件打开配置菜单，将「文件夹」设置为「自定」，然后在一个槽位中指定「连接到 VPN」，在另一个槽位中指定「断开 VPN 连接」。

![将快捷指令添加为小组件](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## 一键打开任何应用并开启 VPN

如果您只需要为某个应用开启 VPN，可以创建一个自定义快捷指令，一键开启 AdGuard VPN 并打开您想要打开的应用。以下是设置方法。

1. 打开「快捷指令」应用，点击加号 (+) 按钮，然后搜索 AdGuard VPN。添加「VPN 状态」操作。
2. 添加「如果」操作。「快捷指令」会为您自动填入条件：它会获取上一步的 VPN 状态，并与「已连接」进行比较。在其中添加「打开 App」，并将其设置为您想要的应用，例如 YouTube。
3. 在「否则」下，按顺序添加三个操作：「AdGuard VPN」→「连接到 VPN」、「等待」（设置为 2 秒）和「打开 App」（与上面相同的应用）。
4. 点击顶部的名称以设置自定义图标和名称，然后使用播放按钮测试该快捷指令。
5. 点击名称并选择「添加到主屏幕」，即可将该快捷指令添加到主屏幕。

![添加自定义快捷指令](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## 使用 Siri 连接或断开

在 AdGuard VPN 应用中，前往「设置」→「快捷指令」→「设置 Siri 短语」。然后您将看到两个选项：「录制用于连接的短语」或「录制用于断开的短语」。

![使用 Siri 连接](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

选择「录制用于连接的短语」或「录制用于断开的短语」，然后说出您想要的短语，例如“嘿 Siri，连接到 AdGuard VPN”。录制完成后，随时对 Siri 说出相同的短语即可运行。

## 为特定应用自动化 AdGuard VPN

某些应用（例如银行应用）在开启 VPN 时无法正常工作。设置两个自动化操作，以便在您使用该应用时关闭 VPN，并在完成后重新开启。正确设置后，自动化操作可能比手动启动快捷指令更方便，您无需点击主屏幕图标来打开快捷指令，只需打开应用即可。此外，您还可以在一个自动化操作中包含多个应用。您可以使用自动化操作，在打开应用、关闭应用以及连接或断开家庭 Wi-Fi 时开启或关闭 AdGuard VPN。

[如何在 iPhone 或 iPad 上设置自动化操作](/adguard-vpn-for-ios/features/automation/)
