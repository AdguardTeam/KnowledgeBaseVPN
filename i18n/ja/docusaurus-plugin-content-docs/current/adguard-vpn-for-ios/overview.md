---
title: 機能概要
sidebar_position: 1
---

## AdGuard VPN for iOS とは？

VPNを利用すると、インターネット上の別のネットワークに安全な接続を確立することができます。 It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN には複数の機能があります:

- Hides your real whereabouts and helps you stay anonymous
- Changes your IP address to protect your data from tracking
- Encrypts your traffic, making the content inaccessible to scammers
- Lets you configure where to use VPN and where not to (exclusions feature)

AdGuard VPN for iOS のもう一つの利点は、独自開発のVPNプロトコルです。 他のVPNプロトコルに比べて検出対策がしっかりしていて、インターネット接続が悪くても通信が安定しています。 [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## AdGuard VPN for iOS の使い方

iOS用AdGuard VPNを使用するには、まず、 [AdGuardアカウント](https://my.adguard.com/)にログインする必要があります。 AdGuardアカウントのログイン・パスワードで直接ログインするか、Google、Apple ID、Facebook（AdGuardアカウントと同じメールアドレスの場合）を介してログインすることも可能です。

If you don’t have an AdGuard account yet, you will have to create it first.

AdGuard VPN の使い方は非常に簡単です。 On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![メイン画面とロケーション *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![VPN対象外リスト *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. 「VPN対象外リスト」画面右上の３点アイコンをタップして、「*対象外項目をエクスポート*」ボタンをタップします。 `exclusions.zip` というアーカイブがダウンロードされます。

2. アーカイブ内には、 `.txt` ファイルが2つあります（レギュラーリスト用と指定リスト用のファイルです）。 アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり（これについては下記もご確認ください）、そのままにしておいたり、自由にカスタマイズできます。

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. （例えば、Macからの除外リストをiOS端末にインポートする場合、事前に `.zip` ファイルをiOS端末に送信しておいてください。）

4. 除外リストのアーカイブをインポートしたい端末でAdGuard VPNを開きます。 「VPN対象外リスト」画面右上の３点アイコンをタップして、「*対象外項目をインポート*」ボタンをタップします。

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![VPN対象外項目のインポート・エクスポート *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNSサーバー

iOS用AdGuard VPN では、それぞれの特徴を持つ複数のDNSサーバーの中から選択できます。 例えば、 「AdGuard DNS」サーバーは広告を削除し、トラッキング（個人情報追跡）から端末を保護します。「AdGuard DNS ファミリー保護」サーバーは、AdGuard DNSの機能とセーフサーチおよびアダルトコンテンツブロック機能を兼ね備えています。 それぞれのDNSプロバイダーによるDNSサーバーは、現在いる地域やお使いのインターネットプロバイダ、その他の要因によって動作が速くなったり遅くなったりすることがあります。 ご自身に合ったものをお選びください。 DNSとその特徴について[詳しくはこちら](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns)でご確認いただけます。

![DNSサーバー画面 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### カラーテーマ

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### 詳細設定

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### 動作モード

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![クイックアクション *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## お客様サポート

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![サポート *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![サブスクリプション *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
