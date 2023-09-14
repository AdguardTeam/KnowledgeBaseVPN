---
title: 機能概要
sidebar_position: 1
---

## AdGuard VPN for iOS とは？

VPNを利用すると、インターネット上の別のネットワークに安全な接続を確立することができます。 ユーザーのパソコンやスマホをVPNサーバーに接続し、他人のIPアドレスを使ってネットを閲覧できるようにするものです。 そのため、VPNサーバーが別の国にある場合、ユーザーがその国からインターネットに接続したように見えます。 [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPNの機能といえば、複数あります:

- あなたの本当の居場所を隠し、匿名性を保てるようにします。
- changes your IP address to protect your data from tracking
- トラフィック（通信）を暗号化し、詐欺師やハッカーがアクセスできないようにします。
- vPNを使用する・しない場所を設定できます（VPN対象外リスト機能）。

AdGuard VPN for iOS のもう一つの利点は、独自開発のVPNプロトコルです。 その主な利点は2つあります。他のVPNプロトコルと比較して、検出が極めて困難であることと、インターネット接続が悪い場合でも安定して動作することです。 You can read more about AdGuard VPN protocol [in this article](/general/adguard-vpn-protocol).

## AdGuard VPN for iOS の使い方

iOS用AdGuard VPNを使用するには、まず、 [AdGuardアカウント](https://my.adguard.com/)にログインする必要があります。 AdGuardアカウントのログイン・パスワードで直接ログインするか、Google、Apple ID、Facebook（AdGuardアカウントと同じメールアドレスの場合）を介してログインすることも可能です。

AdGuardアカウントをまだお持ちでない場合は、まずアカウントを登録してください（メールアドレスのみが必要になります）。

AdGuard VPN の使い方は非常に簡単です。 メイン画面には、 *接続/切断* ボタンと接続可能なサーバーのリストがあります。 それぞれのサーバーには位置（特定の国と都市）とping値（「〇〇 ms」）があります。 pingは、サーバーの応答時間（ミリ秒単位）を表しています。 例えば、pingが「22 ms」のサーバーを選ぶ場合、サーバーにシグナルが到達して戻ってくるのに22ミリ秒かかる、ということを意味します。 つまり、pingの値が小さいほど、速度の速い接続となります。 AdGuard VPNでは、数十ヶ国、50ヶ所以上のロケーションから選んで接続することができます。

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## VPN対象外リスト（サイト除外機能）

下の真ん中のボタンをタップすると「VPN対象外リスト」機能が表示されます。 そこには、レギュラーモード用と指定モード用の、2つの除外リストが表示されます。 レギュラーモードでは、VPNは除外リストにあるサイト以外に対して機能します。 指定モードではその逆で、VPNはリストにあるサイトに対してのみ機能します。 Webサイトのドメイン (例: `google.com`) またはサブドメイン (例: `*.google.com`) を対象外リストに追加するには、2つの方法があります。①アプリで手入力する　②ブラウザで *共有* ボタンをクリックして、下の開いたリストで「AdGuard VPN」を選択する

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
> ※**併用** モードでは、「VPN対象外リスト」機能を使用したり、DNSサーバーを選択することができません。

### DNSサーバー

ドメインネームシステム（DNS）の目的は、Webサイトの名前をブラウザが理解できるもの、つまりIPアドレスに変換することです。 この変換の仕事は、DNSサーバーが行います。 iOS用AdGuard VPNでは、それぞれの特徴を持つ複数のDNSサーバーの中から選択できます。 例えば、 「AdGuard DNS」サーバーは広告を削除し、トラッキング（個人情報追跡）から端末を保護します。「AdGuard DNS ファミリー保護」サーバーは、AdGuard DNSの機能とセーフサーチおよびアダルトコンテンツブロック機能を兼ね備えています。 それぞれのDNSプロバイダーによるDNSサーバーは、現在いる地域やお使いのインターネットプロバイダ、その他の要因によって動作が速くなったり遅くなったりすることがあります。 ご自身に合ったものをお選びください。 You can find out more about DNS and its characteristics [in this article](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Wi-Fi接続の自動保護

端末がWi-Fiネットワークに接続すると、VPNが自動的にオンになります。

### カラーテーマ

アプリのカラーテーマは、システムデフォルト、ダーク、ライトから選べます（iOS 13以降で利用可能）。

### 詳細設定

*詳細設定* には、「ログのレベル」と「診断情報」の2つのセクションがあります。 ログのレベルですが、当社のサポートチームからの案内がない限り、「拡張ログ」にログレベルを変更することはお勧めしません。 診断情報とは、端末や接続に関する、ローカルに保存された技術情報（IPアドレス、ID、pingなど）で、技術的な問題が発生した場合に当社に送信されることがあります。

## クイックアクション（iOS 13以降で利用可能）

この機能を利用するには、AdGuard VPNのアプリアイコンを長タップしてから、指を離します。 そうするとクイックアクションのリストが表示されます。現在選択されているサーバーへの接続・切断や、「ロケーションを選択する」で新しいサーバーロケーションを選択することができます。 もちろん、アプリの削除やアプリアイコンの移動など、システムアクションにアクセスすることも可能です。

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## お客様サポート

ユーザーの満足を最優先しています。 そのため、アプリには様々なヘルプ機能があります（右下の⚙「*設定*」→「*お客様サポート*」）。FAQ、バグの報告、フィードバック、フォーラム・SNS・GitHubで問題や提案について話し合う、App StoreでAdGuard VPN for iOSを評価する、ログをエクスポートすることなどが可能です。

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## サブスクリプション

AdGuard VPNの無料版をご利用中の場合、下のタブバーに矢印アイコンが付いたタブが4番目に表示されます。 このセクションでは、アプリの有料版の主な利点について簡単な情報を確認し、サブスクリプションを購入することができます。

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
