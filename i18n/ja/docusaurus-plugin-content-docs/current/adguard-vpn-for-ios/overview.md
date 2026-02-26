---
title: 機能概要
sidebar_position: 1
---

## AdGuard VPN for iOS とは？

VPNを利用すると、インターネット上の別のネットワークに安全な接続を確立することができます。 ユーザーのパソコンやスマホをVPNサーバーに接続し、“偽造”IPアドレスを使ったネット閲覧を可能にするものです。 VPNサーバーが別の国にある場合、その国からインターネットに接続しているかのように見えます。 詳細については、[VPN仕組みに関する記事](/general/how-vpn-works)をご覧ください。

AdGuard VPN には複数の機能があります:

- あなたの本当の居場所を隠し、匿名性を維持します。
- IPアドレスを変更することで、データ・個人情報をトラッキング（追跡）から保護します。
- トラフィック（通信）を暗号化し、詐欺師やハッカーが通信内容にアクセスできないようにします。
- VPNを使用するとしない場所を設定できます。（「VPN対象外リスト」機能）

AdGuard VPN for iOS のもう一つの利点は、独自開発のVPNプロトコルです。 他のVPNプロトコルに比べて検出対策がしっかりしていて、インターネット接続が悪くても通信が安定しています。 [本プロトコルの詳細はこちら](https://trusttunnel.org/)。

## AdGuard VPN for iOS の使い方

AdGuard VPN for iOS を使用するには、まず、 [AdGuardアカウント](https://adguardaccount.com/)にログインする必要があります。 AdGuardアカウントのログイン・パスワードで直接ログインするか、Google、Apple ID、Facebook（AdGuardアカウントと同じメールアドレスの場合）を介してログインすることも可能です。

AdGuardアカウントをまだお持ちでない場合は、まずアカウントを登録してください。（アカウント登録に必要なのはメールアドレスのみです。）

AdGuard VPN の使い方は非常に簡単です。 ホーム画面には、*接続する*（*切断する*）ボタンと、利用可能なサーバー（私たちはこれらを「*ロケーション*」と呼んでいます）のリストが表示されます。 それぞれのサーバーにはロケーション（国と都市）とping値（「〇〇 ms」）があります。

pingはサーバーの応答時間をミリ秒（ms）単位で示す値です。 つまり、そのロケーションに接続した際のVPN通信速度を示す数字なのです。 例えば、pingが 22 ms の場合、このサーバーに送信されたデータパケットは22ミリ秒で返ってくることを意味します。

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Home and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios_ja.png)

## VPN対象外リスト（除外機能）

画面下のバーの2番目のアイコンをタップすると、「VPN対象外リスト」画面が開きます。

デフォルトでは、除外に追加されたウェブサイトを除き、AdGuard VPN はすべてのウェブサイトに対して有効になっています。 また、指定したウェブサイトに対してのみ有効になるモードに切り替えることも可能です。 モードに切り替えるには、「*モードを変更する*」をタップしてください。

:::note

Each mode has its own exclusion list.

:::

You can add domains (e.g., `google.com`) or subdomains (e.g., `news.google.com`) of websites to the lists in three ways:

- Enter them manually in the app
- [Choose from domain lists for popular services](#domain-lists-for-popular-services)
- Add them directly from the browser by sharing the desired pages to the AdGuard VPN app

![VPN対象外リスト *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

When you manually add a domain, all subdomains are added automatically (it looks like `*.google.com`). Want to keep only google.com or turn VPN off for a specific domain? Tap the line with the website — this will open a separate screen where you can manage subdomains. Just uncheck the boxes for the ones you don’t need.

![Subdomains *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

If you manually add a subdomain, the main domain will also be added — but the checkbox next to it will not be checked.

### Domain lists for popular services

Large services like Google are tricky. They usually use more than one domain — one for media files, another for the API, plus domains for different countries. For example, in the case of Google, we have 416 domains in our list — all of them need to be added to Exclusions to completely turn VPN off (or on) for the service.

Here’s how to add all necessary domains for a popular service to exclusion list:

1. Open *Exclusions*.
2. Tap *Add website*.
3. Tap *From list*.
4. Find the desired service in the list and tap *Add*.

![List of popular services *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. 「VPN対象外リスト」画面右上の３点アイコンをタップして、「*対象外項目をエクスポート*」ボタンをタップします。 `exclusions.zip` というアーカイブがダウンロードされます。

2. アーカイブ内には、 `.txt` ファイルが2つあります（レギュラーリスト用と指定リスト用のファイルです）。 アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり（これについては下記もご確認ください）、そのままにしておいたり、自由にカスタマイズできます。

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. （例えば、Macからの除外リストをiOS端末にインポートする場合、事前に `.zip` ファイルをiOS端末に送信しておいてください。）

4. 除外リストのアーカイブをインポートしたい端末でAdGuard VPNを開きます。 「VPN対象外リスト」画面右上の３点アイコンをタップして、「*対象外項目をインポート*」ボタンをタップします。

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![VPN対象外項目のインポート・エクスポート *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## お気に入りロケーション

この機能を使うと、お気に入りのサーバーロケーションを専用タブに保存できます。検索やリスト全体をスクロールする手間がなくなり便利です。

ロケーションを「*お気に入り*」に追加するには、そのロケーションを左にスワイプします。 「*お気に入り*」からロケーションを削除する場合も、同じく左にスワイプします。

![Saved locations add remove *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNSサーバー

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### カラーテーマ

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### 詳細設定

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### 動作モード

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

「*VPN*」モードは当社で開発したモダンなオープンソースプロトコル「[TrustTunnel](https://trusttunnel.org/)」を使用しています。 It provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

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

#### AdGuard VPN プロトコル

![Select VPN protocol *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_JA.PNG)

AdGuard VPN プロトコルは初期設定でVPNプロトコルのダイナミック選択（「*自動選択*」オプション）を使用します。 つまり、AdGuard VPN は、現時点で最適なパフォーマンスを提供するプロトコル（HTTP2/TLS または HTTP3/QUIC）を自動的に判断し、即座に切り替えてくれます。 その結果、VPN通信の速度と安定性が向上します。これは特に、VPN使用法による制限がある地域や、通信の安定性が低い地域で役立ちます。

必要に応じて、「*自動選択*」の代わりに HTTP2/TLS のみまたは HTTP3/QUIC プロトコルのみを使用するように切り替えることができます。 それぞれのプロトコルには強みがありますが、ベストな選択肢はその時の居場所、ネットワーク状況、接続するサーバーによって異なります。

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

このクイックアクションのメニューを開くには、AdGuard VPNのアプリアイコンを長タップしてから、指を離します。 In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
