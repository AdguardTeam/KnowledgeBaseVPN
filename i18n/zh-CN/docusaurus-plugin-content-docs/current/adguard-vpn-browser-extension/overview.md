---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN 浏览器扩展可在 Chrome 浏览器、火狐浏览器、Opera 浏览器和 Edge 浏览器中使用。 UI 和功能在浏览器之间并没有区别，因此下面将概述所有用于浏览器的 AdGuard VPN 。

:::注意

您只能在登录 AdGuard VPN 后使用浏览器扩展。 您可以登录 AdGuard 账号，或者通过 Google、Facebook 或 Apple 账号登录。 除第一种情况以外，请确保您的账户与 AdGuard 账户绑定的电子邮件地址相同。 如果您有 [AdGuard VPN 订阅](/general/subscription)，它将会在 AdGuard VPN 浏览器扩展中自动激活。 还没有 AdGuard 账户？ [点此创建账户](https://auth.adguard.com/registration.html)。

:::

管理您的 AdGuard VPN 浏览器扩展：

- 单击浏览器面板上的图标，然后单击汉堡菜单图标（☰）并选择*「设置」*
- 或者到浏览器中的*「管理扩展」*页面中，单击*「AdGuard VPN」*下面的*「详细信息」*并在其中管理设置。

完成后，您将在左侧看到几个选项卡：

## 设置

该选项卡包含一些重要设置。 Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension's theme, and allow AdGuard to gather anonymous crash reports and technical data.

### 选择一个 DNS 服务器

默认情况下选择的是由您的 ISP 提供的[系统 DNS 服务器](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) ，但这样可能会损害您的隐私。 借助 AdGuard VPN 浏览器扩展，您可以选择提供更好速度和安全性的 DNS 服务器，甚至可以阻止广告或潜在危险的域名。 DNS 服务器名称下的简短描述将帮助您导航并做出决定。

了解有关[来自不同提供商的 DNS 服务器的更多信息](https://adguard-dns.io/kb/general/dns-providers/)。

## 排除项

The next tab contains one of the main distinctive features of AdGuard VPN — two modes with separate exclusion lists.

在**常规模式**中，AdGuard VPN 默认对所有网站都有效，但您添加到排除列表的网站除外。 在**选择模式**中正好相反，AdGuard VPN 默认不工作。 您可以在排除列表中添加希望启用 AdGuard VPN 的网站，该列表与**常规模式**中的列表相独立。

将网站添加到排除列表时，您可以手动输入网站或选择「**从列表**」选项。 在后一种情况下，您会看到八个类别（例如：*购物*、*通信*等），每个类别会包含几个流行服务。 您只需单击一下，即可排除其中任何一项服务，而且该操作会将与该特定服务相关的所有域名添加到排除项中。

### 导入和导出

您不仅可以添加和删除网站，还可以将现有排除列表导入到其他安装有 AdGuard VPN 的设备上。 要导出排除列表，请按照以下 4 步说明操作：

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN 浏览器扩展。 找到相应的部分并单击「导出」按钮。 `exclusions.zip` 档案将被下载。
1. 档案中有两个 `.txt` 文件，分别是常规模式列表和选择模式列表。 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件，或者也可以将存档中的文件内容保持不变。
1. 在不同设备之间传输时，将 `.zip` 文件发送到设备上进行导入。
1. 在该设备上打开 AdGuard VPN。 找到相应的部分，单击「导入」按钮并选择存档。 完成！

## 账号

AdGuard VPN 浏览器扩展的第三个选项卡非常简约，只包含登录账户时使用的电子邮件地址和两个按钮：「*管理*」和「*退出*」。 单击「*管理*」按钮可进入个人 AdGuard 账户，查看当前的所有许可证和订阅以及与之相连的设备。

## 支持

您可以在「常见问题」部分找到常见问题的答案，也可以留下反馈意见：出错时报告错误，添加新功能建议，或者在众多社交媒体平台上讨论 AdGuard。

## 关于

在另一个小标签中，用户可以查看扩展的版本，访问官网，查看最终用户许可协议或隐私政策。
