---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN Browser Extension is available for Chrome, Firefox, Opera, and Edge. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

You can only use AdGuard VPN Browser Extension when logged in. Sign in with your AdGuard account or via Google, Facebook, or Apple. In the latter case make sure that your account is bound to the same email address as your AdGuard account. If you have an [AdGuard VPN subscription](/general/subscription), it will be activated automatically in AdGuard VPN Browser extension. Don’t have an AdGuard account yet? [Create it here](https://auth.adguardaccount.com/registration.html).

:::

To manage your AdGuard VPN Browser Extension:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Or go to the *Manage extensions* page in your browser, click *Details* below *AdGuard VPN* and manage its settings from there.

Once done, you’ll see several tabs on the left:

## 设置

A few important settings are gathered inside this tab. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

### 选择一个 DNS 服务器

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. With AdGuard VPN Browser extension, you can select a DNS server that provides better speed and security, and even blocks ads or potentially dangerous domains. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

## 排除项

The next tab contains one of the main distinctive features of AdGuard VPN — two modes with separate exclusion lists.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

### 导入和导出

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. 在您想要导出排除项列表的设备上打开 AdGuard VPN 浏览器扩展。 Find the appropriate section and click the *Export* button. `exclusions.zip` 档案将被下载。
1. There are two `.txt` files inside the archive, one for each of the General and Selective lists. 用户可以在其中添加更多的排除项，删除现有的排除项，重命名文件，或者也可以将存档中的文件内容保持不变。
1. 在不同设备之间传输时，将 `.zip` 文件发送到设备上进行导入。
1. 在该设备上打开 AdGuard VPN。 Find the appropriate section, click the *Import* button and select the archive. 完成！

## 账号

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

## 支持

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## 关于

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
