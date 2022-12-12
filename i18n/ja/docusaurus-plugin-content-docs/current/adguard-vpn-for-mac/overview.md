---
title: 機能概要
sidebar_position: 1
---

AdGuard VPN for Macは、デスクトップVPNサービスです。 AdGuard VPNはAdGuard広告ブロッカーと完全な互換性があり、併用することが可能で、シームレスに動作します。 さて、どんな機能があるのかを見てみましょう。

**AdGuard VPN for Macを使用するには、AdGuardアカウントにログインする必要があります。**. AdGuardアカウントでログインするか、外部アカウント（Apple、Google、Facebook経由）でログインすることができます （外部アカウントの場合、AdGuardアカウントと同じメールアドレスのアカウントを使用してください）。 AdGuardアカウントに適切なサブスクリプションがある場合、AdGuard VPN for Macアプリでログインの際にそのサブスクリプションが自動的に有効化されます。 まだAdGuardのアカウントをお持ちでない方は、 [こちら](https://auth.adguard.com/registration.html)からご登録いただけます（アカウント登録に必要なのははメールアドレスのみです）。

> AdGuard VPN for Mac は、現在、macOS Sierra（10.12）以降のmacOSバージョンに対応しています。

## ホーム画面

![ホーム画面](https://cdn.adguard.com/public/Adguard/Blog/mac-vpn-main.png)

最初のタブは、 *ホーム*画面です。 Here you can see AdGuard VPN current status and [exclusions mode](#exclusions), chosen location (if enabled) and its ping. pingとは、VPNサーバーの応答時間です。 つまり、ping数値が小さいほど接続速度は速くなるということになります。 VPNがオフの場合、最後に接続した最終ロケーションが下に表示されます。 画面右上には、pingが最も低く、最速のロケーションが表示されます。 その下には、全ロケーションの一覧が表示されます。 検索機能により、必要なロケーションを簡単に見つけることができます。

> 無料ユーザーは特定のロケーションにしか接続できず、それ以外のロケーションはロックされています。 その上、無料版では月間3GBというデータ通信量制限があります。

## VPN対象外リスト（サイト除外機能）

![VPN対象外リスト](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/exclusions.png)

次に、 *VPN対象外*画面へ。 AdGuard VPN has several features that make it unique, and one of them is certainly switching between two exclusions modes. In the General mode, AdGuard VPN will run on all websites but the ones from the exclusions list. 指定モードはその逆で、VPNはリストにあるサイトのみに対して機能します。 つまり、VPNを有効にしたい・したくないサイトを自分で設定できる機能なのです。

![VPN対象外リスト画面](https://cdn.adguard.com/public/Adguard/Blog/services.png)

Webサイトを手動で対象外リストに追加するだけでなく、人気のあるサービスの既存リストから選択することもできます。 リストは8つのカテゴリーに分けられています（SNS、メッセンジャー、動画・音楽配信サービス、ゲーム、ショッピング、検索エンジン、ワークコミュニケーションツール）。 これらのサービスカテゴリは、ワンクリックで除外リストに追加することができます。 これは特に、指定モードを使用する場合に便利です。

対象外リストの設定も簡単に行えます。 ドメインとそのサブドメインのいくつかを追加した場合、それらはルートドメインをもとにグループ化されます。 ルートドメイン（`example.com`）を追加すると、そのマスクも追加されます（`*.example.com`）。

サービスを追加したり、何かを変更または削除した後に、初期設定を復元したい場合は、ドメインの横にある「*元に戻す*」を押してください。この操作により、見つからないドメインが復元され、すべてのチェックボックスにチェックが入ります。

さらに、既製の対象外リストは、（AdGuard VPNをインストールした）他の端末に以降することができます。 対象外項目をエクスポートする方法は以下の4です:

1. 除外リストのエクスポート元となる端末で AdGuard VPN を開きます。 該当するセクションで「*対象外リストをエクスポート*」ボタンをタップします。 `exclusions.zip` というアーカイブがダウンロードされます。
2. There are two `.txt` files inside the archive, each for General and Selective lists. アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり（これについては下記もご確認ください）、そのままにしておいたり、自由にカスタマイズできます。
3. 異なる端末間で除外リストを移行する場合は、インポート先端末に `.zip` ファイルを送信することを忘れずに。 （例えば、Macからの除外リストをiPhoneにインポートする場合、事前に `.zip` ファイルをiPhoneに送信しておいてください。）
4. 除外リストのアーカイブをインポートしたい端末でAdGuard VPNを開きます。 該当するセクション（VPN対象外リスト画面）で「対象外リストをインポート」ボタンをタップして、アーカイブファイルを選びます。 完了です。

> 他のデバイスからのアーカイブファイルも同様に、AdGuard VPN for Macにインポートすることができます。

## サポート

![サポート画面](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/support.png)

3つ目のタブは、 *サポート*画面です。 お問い合わせしたり、[FAQ](https://adguard-vpn.com/ja/welcome.html#faq) または [ナレッジベース](/intro.md)のセクションで質問の答えを見つけたり、バグ・不具合を報告したり、 [AdGuard についてあらゆるプラットフォームで話し合ったり](https://adguard.com/ja/discuss.html)することができます。 そしてぜひ当社製品に関する[フィードバック](https://surveys.adguard.com/en/vpn_mac/form.html)もお待ちしております。

## 設定

![設定](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/settings.png)

最後に、「設定」タブです。 「*このアプリについて*」セクションでは、AdGuard VPN の現在のバージョンを確認し、アップデートをチェックし、公式ウェブサイトを訪問し、AdGuard の EULA とプライバシーポリシーを確認することができます。 「*ライセンス情報*」では、無料版から無制限版へのアップグレード、サブスクリプション管理、ログアウトを行うことができます。 そして、最も重要なのは、「*一般設定*」です。

### 一般設定

![一般設定](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/general-settings.png)

最初の4つの基本機能は、アプリをより便利でユーザーフレンドリーにします（「*キルスイッチ*」「*自動更新*」「*Mac起動時にAdGuard VPNを起動する*」「*「AdGuard VPN起動時に自動接続する*」） さらに、カラーテーマは「ライト」「ダーク」「システムに合わせる」から選ぶことができ、後者はMacのカラーテーマとAdGuard VPNのテーマを一致します。

もう一つの見逃せないオプションは、「AdGuard VPNの改善に協力する」であり、匿名化されたクラッシュレポート、テクニカルデータ、インタラクションデータを収集し送信することを許可することで、AdGuard VPNの開発の手助けをできる機能です。 最後に、右側の「ログをエクスポートする」ボタンで、ログをMacにエクスポートすることができます。 サポートへのメッセージにログを添付したい場合などに便利です。

### DNSサーバー

![DNSサーバー](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/dns.png)

インターネットプロバイダがデフォルトで提供するDNSサーバーに依存しないように、こちらではカスタムDNSサーバー（一つまたは複数）を追加することができます。 DNSトラフィックを暗号化するだけでなく、悪意のあるサイトへのリクエストを特定し“ブラックホール”にリダイレクトする、AdGuard DNSサーバーをお勧めします。

### 詳細設定

![詳細設定](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/advanced-settings.png)

詳細設定は、調整することをお勧めしません。 サポートからの案内がった場合や、技術的に詳しい方でない限り、これらを変更しないでください。

#### ログのレベル
ログのレベルは2つしかありませんが、最初のデフォルトの「通常記録」を使用することを強くお勧めします。 （※弊社のサポートにご相談いただいた後に、プログラムの異常な動作を記録する場合にのみ、「すべてを記録」オプションを選択してください。） 「すべてを記録」ログレベルを有効にした場合でも、ログを記録した後は必ず「通常記録」ログレベルに戻してください。

#### メニューバーアイコンを非表示にする
このオプションは*詳細設定*にありますが、必要に応じて問題なくオンにすることができます。 メニューバーからAdGuard VPNアイコンを非表示にしても、アプリがバックグラウンドで動作しなくなることはありません。

#### QUIC (実験的) を使用する

QUIC通信プロトコルは、HTTPの最新・最先端版です。 地下鉄やエレベーターの中でモバイルデータを利用するときなど、あまりよくない通信環境の場合でも、QUICをオンに切り替えることで、より良い通信品質を確保することができます。
