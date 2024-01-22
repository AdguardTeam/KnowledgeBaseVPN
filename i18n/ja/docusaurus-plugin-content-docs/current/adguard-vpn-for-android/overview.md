---
title: 機能概要
sidebar_position: 1
---

## AdGuard VPN for Android とは？

VPNは、インターネットを閲覧するたびに、セキュリティと匿名性を提供してくれるツールです。 [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. これにより、データと個人情報の機密性が保たれるだけでなく、オンライン上の第三者にはユーザーの実際のIPではなく、VPNサーバーのIPアドレスが見えるので、ユーザーの位置情報も隠されます。

**VPNの主な用途:**

- 公衆無線LAN（フリーWi-Fi等）接続時でも個人情報を保護
- IPアドレスのマスキングによりオンライン活動追跡を防止
- 実際の位置情報を隠して匿名性を保持

Android用AdGuard VPNは、これらすべてを行うことがで可能で、さらに、ユニークな機能も提供します。 To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## AdGuard VPN for Android を使い始める方法

まず、[Google PlayからAdGuard VPNをダウンロード](https://play.google.com/store/apps/details?id=com.adguard.vpn)し、AdGuard VPNアプリを開いて、AdGuardアカウントにログインしてください。 AdGuardアカウントをお持ちでない場合は、 [こちらでご登録いただく](https://auth.adguard.com/login.html)ことが可能です（登録に必要なのはメールアドレスだけで、すぐに終わります）。 AdGuardアカウントの認証情報をそのまま使ってAdGuard VPNアプリ内でログインすることができます。 または、AdGuardアカウントと同じメールアドレスのGoogleやFacebookアカウントを使ってログインすることも可能です。

## メイン画面

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

各サーバーには、その所在地（国と都市）と、サーバーの応答時間を表すPingが表示されています。 The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## 除外機能

サイトやアプリの除外リストを簡単に管理できるよう、あらゆる工夫をしています。 AdGuard VPNが動作するとしないころをお好みに合わせて設定することが可能です。

### VPN対象からの除外（サイト除外）

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. メイン画面下部の左から2番目のアイコンをタップすると、「*VPN対象からの除外*」画面に移動します。

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

Webサイトのドメイン (例: `google.com`) またはサブドメイン (例: `*.google.com`) を *対象外リスト* に追加するには、3つの方法があります：　①アプリで手入力する　②ブラウザで *共有* ボタンをクリックして、下の開いたリストで「AdGuard VPN」を選択する　③サービスの既存カテゴリ別リストから選択する

![VPN対象からの除外](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

※手動でドメインを追加する場合、注意しておくべき点があります。 例えば、ドメイン`yahoo.com`を手動で追加すると、サブドメイン `*.yahoo.com` のすべても除外対象になります。 ただし、この場合、`yahoo.jp` や `yahoo.fr`など、他のトップレベルドメインを持つドメイン名は除外対象になりません。 もう一つの例として、例えば `youtube.com` を除外リストに追加しても、同サービスのドメインである `youtu.be` は除外対象になりません。 なので、このような場合（YouTubeの場合など）、各サービスに関連するすべてのサブドメインが把握されている既存サービスリストを使用する方がより確かです。

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 ※ドメインを削除したり無効にしたりした場合でも、サービスリストをデフォルト表示にいつでも戻すことができます。

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

もう一つの便利な機能は、除外リストの*インポート/エクスポート*です。 4ステップでインポート/アクスポートすることができます。

1. 除外リストのエクスポート元となる端末・ブラウザで AdGuard VPN を開きます。 「VPN対象からの除外」画面右上の３点アイコンをタップして、「*除外リストをエクスポート*」ボタンをタップします。 `adguard_vpn_exclusions.zip` というアーカイブがダウンロードされます。
2. There are two `.txt` files inside the archive, one for each of the lists. アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり（これについては下記もご確認ください）、そのままにしておいたり、自由にカスタマイズできます。
3. 異なる端末間で除外リストを移行する場合は、インポート先端末に `.zip` ファイルを送信することを忘れずに。 （例えば、Windows端末からの除外リストをAndroid端末にインポートする場合、事前に `.zip` ファイルをAndroid端末に送信しておいてください。）
4. 除外リストのアーカイブをインポートしたい端末でAdGuard VPNを開きます。 「VPN対象からの除外」画面右上の３点アイコンをタップして、「*除外リストをインポート*」ボタンをタップして、アーカイブファイルを選びます。

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Webサイトだけでなく、端末上のアプリごともVPN対象外にすることができます。 Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 設定

メイン画面右下の歯車アイコン「⚙」を押すと、 「*設定*」にアクセスできます。 一番上には、「 *AdGuard VPNの設定*」があります。そこにはさまざまなオプションを選択してAndroid用AdGuard VPNを設定できます。

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPNの自動始動

スイッチをオンにすると、端末の起動後、AdGuard VPNも自動的に起動するようになります。

### DNSサーバー

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. また、カスタムDNSサーバーを追加することもできます。

### 通信の自動保護

端末がモバイルネットワークまたはWi-Fiネットワークに接続すると、自動的にAdGuard VPNが有効になることを設定できる機能です。

### キルスイッチ

画面に表示される簡単な操作で、キルスイッチ機能を設定することができます。 キルスイッチは何のために必要か？ 何らかの理由でVPN接続が遮断された場合、「キルスイッチ」が自動的にインターネット接続を切断し、攻撃者に情報を傍受されないようにします。

※キルスイッチがオンの場合、 「*アプリに対する設定*」と「*VPN対象からの除外*」は機能しませんので、ご注意ください。

### カラーテーマ

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### 高度な設定

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

次の2つのセクションは、 「*ログのレベル*」と「*診断情報*」です。 ログのレベルですが、当社のサポートチームからの案内がない限り、「デバッグ」や「エクストリーム」にログレベルを変更することはお勧めしません。 診断情報とは、端末や接続に関する、ローカルに保存された技術情報（IPアドレス、ID、pingなど）で、技術的な問題が発生した場合に当社に送信されることがあります。

*高度な設定*の最後のセクションは「*ローレベル設定*」です。 ※高度な専門知識をお持ちの方もしくはサポートチームから依頼された方以外は、このセクションに入らないようお願いします。 こちらでは、VPNインターフェイスでTUNインターフェイスロギングまたはIPv6プロトコルを有効にし、使用するプロキシサーバーポートまたはインターネットプロトコルバージョンを選択できます。

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### お客様サポート

「*お客様サポート*」セクションでは、フィードバックを残したり、バグを報告したり、ログやシステム情報をエクスポートしてサポートチームに送信することができます。（「問題を報告する」からお問い合わせしますと、システム情報を添付することによって、技術的な問題の解決がより早くなることが多くありますので、ぜひご利用ください。）
