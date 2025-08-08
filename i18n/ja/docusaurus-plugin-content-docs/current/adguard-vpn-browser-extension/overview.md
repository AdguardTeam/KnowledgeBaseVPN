---
title: 機能概要
sidebar_position: 1
---

AdGuard VPN ブラウザ拡張機能は、Chrome、Firefox、Opera、Edgeで利用可能です。 UIや機能はどのブラウザでも同じなので、以下の概要や説明は、全ブラウザのAdGuard VPN拡張機能に当てはまるるものです。

:::note

You can only use AdGuard VPN Browser Extension when logged in. Sign in with your AdGuard account or via Google, Facebook, or Apple. In the latter case make sure that your account is bound to the same email address as your AdGuard account. If you have an [AdGuard VPN subscription](/general/subscription), it will be activated automatically in AdGuard VPN Browser extension. Don’t have an AdGuard account yet? [Create it here](https://auth.adguardaccount.com/registration.html).

:::

## Saved locations

You can save your favorite locations for quick access. To do so, just hover over a location and click the bookmark icon that appears:

![Save a location *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Your marked locations will then show up in the *Saved* tab.

![Saved tab *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## Stats

The *Stats* section in the menu is a simple way to keep track of how much data passes through your VPN connection.

![Statistics *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

When stats can come in handy:

- **Check if the VPN is actually working**. A quick look at the stats confirms that your connection is active and data is routed through the VPN.

- **Spot unexpected activity**. If traffic grows while you’re idle, something in the background — a tab or an extension — might be sending data.

- **Troubleshoot slow connection issues**. If your connection feels slow, a spike in traffic might point to something running or downloading in the background.

:::note

All statistics are stored locally on your device. We only calculate how much data is used — we don’t see what websites you visit. You can also disable statistics if you don’t need them.

:::

The *Stats* section is available to users of the paid version.

## Settings

To manage your AdGuard VPN Browser Extension:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Or go to the *Manage extensions* page in your browser, click *Details* below *AdGuard VPN* and manage its settings from there.

Once done, you’ll see several tabs on the left:

### General

A few important settings are gathered inside this tab. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

#### DNS server

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. With AdGuard VPN Browser extension, you can select a DNS server that provides better speed and security, and even blocks ads or potentially dangerous domains. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

### Exclusions

The next tab contains one of the main distinctive features of AdGuard VPN — two modes with separate exclusion lists.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

When adding a website to an exclusion list, you can enter the website manually or select the **From the list** option. In the latter case, you’ll see eight categories (for example, *Shopping* or *Messengers*), each suggesting several popular services. You can exclude any of these services in one click. This will add all domains relevant to that specific service to exclusions.

#### Import and export

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. 除外リストのエクスポート元となる端末で AdGuard VPN を開きます。 Find the appropriate section and click the *Export* button. `exclusions.zip` というアーカイブがダウンロードされます。
1. There are two `.txt` files inside the archive, one for each of the General and Selective lists. アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり、そのままにしておいたり、自由にカスタマイズできます。
1. 異なる端末間で除外リストを移行する場合は、インポート先端末に `.zip` ファイルを転送することを忘れずに。
1. インポート先端末でAdGuard VPNを開きます。 Find the appropriate section, click the *Import* button and select the archive. 完了です。

### Account

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

### Support

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

### About

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
