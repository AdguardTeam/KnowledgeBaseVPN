---
title: 機能概要
sidebar_position: 1
---

## AdGuard VPN for iOS とは？

VPNを利用すると、インターネット上の別のネットワークに安全な接続を確立することができます。 It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN has several functions:

- あなたの本当の居場所を隠し、匿名性を保てるようにします。
- changes your IP address to protect your data from tracking
- トラフィック（通信）を暗号化し、詐欺師やハッカーがアクセスできないようにします。
- vPNを使用する・しない場所を設定できます（VPN対象外リスト機能）。

AdGuard VPN for iOS のもう一つの利点は、独自開発のVPNプロトコルです。 It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## AdGuard VPN for iOS の使い方

iOS用AdGuard VPNを使用するには、まず、 [AdGuardアカウント](https://my.adguard.com/)にログインする必要があります。 AdGuardアカウントのログイン・パスワードで直接ログインするか、Google、Apple ID、Facebook（AdGuardアカウントと同じメールアドレスの場合）を介してログインすることも可能です。

AdGuardアカウントをまだお持ちでない場合は、まずアカウントを登録してください（メールアドレスのみが必要になります）。

AdGuard VPN の使い方は非常に簡単です。 メイン画面には、 *接続/切断* ボタンと接続可能なサーバーのリストがあります。 それぞれのサーバーには位置（特定の国と都市）とping値（「〇〇 ms」）があります。 The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. AdGuard VPNでは、数十ヶ国、50ヶ所以上のロケーションから選んで接続することができます。

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## VPN対象外リスト（サイト除外機能）

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

もう一つの便利な機能は、除外リストのインポート・エクスポートです。 以下がその4ステップ手順です:

1. 除外リストのエクスポート元となる端末・ブラウザで AdGuard VPN を開きます。 Find the appropriate section and click the *Export* button. `exclusions.zip` というアーカイブがダウンロードされます。

2. アーカイブ内には、 `.txt` ファイルが2つあります（レギュラーリスト用と指定リスト用のファイルです）。 アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり（これについては下記もご確認ください）、そのままにしておいたり、自由にカスタマイズできます。

3. 異なる端末間で除外リストを移行する場合は、インポート先端末に `.zip` ファイルを送信することを忘れずに。 （例えば、Macからの除外リストをiOS端末にインポートする場合、事前に `.zip` ファイルをiOS端末に送信しておいてください。）

4. 除外リストのアーカイブをインポートしたい端末でAdGuard VPNを開きます。 Find the appropriate section, click the *Import* button and select the archive.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## アプリの設定

「アプリの設定」画面へ移動する方法:

1. AdGuard VPNアプリのメイン画面の右下にある設定ボタン（⚙）をタップします。
2. 「アプリの設定」をタップします。

ここでは、さまざまなオプションを使用して、必要に応じてAdGuard VPN for iOSを設定することができます。動作モード、DNSサーバー、Wi-Fi自動保護、カラーテーマ、詳細設定などといったセクションがあります。

![App Settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### 動作モード

AdGuard VPN for iOS には、「**標準**」と「**併用**」という2つの動作モードがあります。

In **General** mode, the [AdGuard VPN protocol](/general/adguard-vpn-protocol) is employed, which provides the best combination of speed and security. In this mode, AdGuard VPN will not be able to work alongside [AdGuard Ad Blocker for iOS](https://adguard.com/kb/adguard-for-ios/overview/).

**併用**モードでは、AdGuard VPN は、IPSecプロトコルを使用することで、iOS用AdGuard広告ブロッカーと同時に動作することができます。 このプロトコルも安全ですが、少し遅く、若干検出されやすくなっています。 両アプリをインストールし、併用モードに切り替えるだけで両アプリを併用できます。他の追加操作は必要ありません。

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### DNSサーバー

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi接続の自動保護

VPN will automatically turn on when the device connects to a Wi-Fi network.

### カラーテーマ

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### 詳細設定

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## クイックアクション（iOS 13以降で利用可能）

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## お客様サポート

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## サブスクリプション

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
