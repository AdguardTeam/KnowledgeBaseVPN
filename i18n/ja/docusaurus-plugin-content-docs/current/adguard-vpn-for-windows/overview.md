---
title: 機能概要
sidebar position: 1
---

## AdGuard VPN for Windows とは？

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. その仕組みは？ VPNを使用せずにウェブサイトを訪問するたびに、ISP（インターネットプロバイダ）はそれを見れます。 あなたが誰で、何を検索しているのか、どこにアクセスしたりしているのはを知り、そのデータを収集し、販売することができるのです。 さらに、アクセスしたWebサイトも、あなたの行動を追跡することができます。 そこでVPNアプリを有効にすると、トラフィック（通信）は暗号化されたトンネルを経由してリモートのVPNサーバーにリダイレクトされ、プライバシーが保証されます。ISPは、あなたがリクエストをどこに送信するかを知らず、サイトもあなたがどこからアクセスしたのかをわかりません。

**AdGuard VPN for Windows の効果**

* ネットワークトラフィックの傍受（スプーフィング）から保護します。 AdGuard VPNは、お使いの端末とVPNサーバーの間に暗号化トンネルを作成します。 すべてのインターネットトラフィックはこのトンネルを通過することによって、データ・個人情報は保護されます。 また、 [AdGuardの独自開発プロトコル](/general/adguard-vpn-protocol.mdx)のおかげで、高速で安全な接続が保証されます。

* IPアドレスを隠します。 サイバー犯罪者にとって、あなたの実際のIPアドレスは、あなたの個人情報を把握するための鍵です。 IPを隠さないと、名前、メールアドレス、電話番号、クレジットカード情報などがすべて詐欺師等の手に渡ってしまう可能性があるのです。 AdGuard VPNを使えば、すべてのトラフィックが暗号化されたトンネルを通過してVPNサーバーにたどり着きます。 そのため、オンライン上ではあなたの端末がそのVPNサーバーのIPアドレスを持っているように見えるのです。

* 現在位置を隠します。 AdGuard VPN サーバーのいずれかを選択することで、その場所に瞬時に「テレポート」します。 その効果は？ 例えば、地元の人の料金でホテルを予約できたり、地域をもとにターゲットしてくる広告から隠れることができたりします。

AdGuard VPN for Windows には多くのメリットがあるので、よければ優れているところを[別記事で詳しく](/general/why-adguard-vpn.md)ご確認いただけます。 本記事では、アプリそのものと、その仕組みに焦点を当てたいと思います。

## AdGuard VPN for Windows を使い始める方法

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). インストールは1分もかかりません。ダイアログウィンドウが表示されますので、EULA（使用許諾書）とプライバシーポリシーの条項に関するチェックボックスに少なくとも1つチェックを入れてください。 AdGuardがアプリの使用状況に関する匿名化されたデータを収集することを許可するかどうかは、お客様次第です。 最後に、[AdGuardアカウント](https://auth.adguard.com/login.html)またはSNS (Apple、Google、Facebook) 経由でログインします。 これで、AdGuard VPN for Windowsの利用が可能になります。


## ホーム画面

![AdGuard VPN for Windows のホーム画面](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

**ホーム画面**で最も目立つ項目は、AdGuard VPNの接続/切断ボタンです。 Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## VPN対象外リスト（除外機能）

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. これは一体どういうことなのか？ If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. **指定モード**は、その逆で、リストにあるWebサイトのみに対して、AdGuard VPNが有効になります。 ※それぞれのモードの除外リストは、別々のリストであることにご注意ください。

![VPN対象外リスト（除外機能）](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![対象外項目を追加する](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![リストから対象外項目を追加する](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> 手動でドメインを追加する場合、いくつかのニュアンスに注意する必要があります。 例えば、ドメイン`google.com`を手動で追加すると、サブドメイン `*.google.com` のすべても除外対象になります。 ただし、この場合、`google.es` や `google.it`など、他のトップレベルドメインを持つドメイン名は除外対象になりません。 もう一つの例として、例えば `youtube.com` を除外リストに追加しても、同サービスのドメインである `youtu.be` は除外対象になりません。

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. リストには最も人気のあるサービスがあり、各サービスの各プラットフォームに関連するドメイン名とサブドメインも全部含まれています。

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## 設定

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

画面の下部には、「**DNS サーバー**」と「**詳細設定**」という2つのセクションがあります。

#### DNSサーバー

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## その他のタブ

### このアプリについて

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## サポート

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.