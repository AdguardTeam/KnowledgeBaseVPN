---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN浏览器扩展可在Chrome 浏览器，火狐浏览器和Edge浏览器中使用。 UI 和功能在浏览器之间并没有区别，因此下面将概述所有与浏览器的 AdGuard VPN 。

> 请注意，您只能在登录 AdGuard VPN 时使用浏览器扩展。 你可以使用 AdGuard 帐户或通过 Google、Facebook 或 Apple 登录。 在后一种情况下，请确保您的账户与AdGuard账户绑定在同一个电子邮件地址上。 如果您有 [AdGuard VPN 订阅](/general/subscription.md)，它将会在 AdGuard VPN 浏览器扩展中自动激活。 如果你没有AdGuard账户， [请点击这里。](https://auth.adguard.com/registration.html)。

要管理您的 AdGuard VPN 浏览器扩展，请：

* 单击浏览器面板上的图标，然后单击三个条纹并选择 *设置*
* 转到浏览器的 *管理扩展* 页面，然后从那里设置你的 AdGuard VPN 。

完成后，您将看到几个在左侧的选项卡：

## 设置

此选项卡中有一些重要设置。 在这里，你可以选择一个DNS服务器来使用，从浏览器的上下文菜单中添加或删除AdGuard VPN图标，拦截WebRTC，改变扩展的主题，并允许AdGuard收集匿名的崩溃报告和技术数据。

### 选择一个DNS服务器

默认情况下选择的是由您的 ISP 提供的[系统 DNS 服务器](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) ，但它可能会损害您的隐私。 凭借AdGuard VPN浏览器扩展，您可以选择一个提供更好的速度和安全性，甚至阻止广告或有潜在危险的域名的DNS服务器。 以下对于 DNS 服务器的简要说明将帮助您导航并做出决定。

了解更多有关 [不同提供商提供的 DNS 服务器](https://kb.adguard.com/ru/general/dns-providers)的信息。

## 排除项

The next tab contains one of the main distinctive features of AdGuard VPN – two modes with separate exclusions lists.

In **Regular mode**, AdGuard VPN by default works on all websites, with the exception of the websites you've added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn't work anywhere. You can add any websites where you'd like it to work to an exclusions list, separate from the one you saw in the **Regular mode**.

When adding a website to the exclusions list, you can enter the website manually or select the **From the list** option. In the latter case, you'll see eight categories (e.g. *Shopping*, *Messengers*, etc.), each suggesting several popular services. You can exclude any of those services in one click, and this action will add to exclusions all domains relevant to that specific service.

### 导入和导出

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. Open AdGuard VPN Browser extension from where you want to export your lists of exclusions. Find the appropriate section and click the "Export" button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the Regular and Selective lists. Add more exclusions to them, delete the existing ones, rename files, or just leave the archive as it is.
3. When transferring between different devices, send the `.zip` file to the device for import.
4. 在该设备上打开 AdGuard VPN。 Find the appropriate section, click the "Import" button and select the archive. 完成！

## 账户

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

## 支持

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn't working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## 关于

Another minor tab, where you can check the extension's version, visit the official website, and view the EULA or Privacy Policy.