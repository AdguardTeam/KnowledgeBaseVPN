---
title: 機能概要
sidebar_position: 1
---

AdGuard VPN Browser extension is available for Chrome, Firefox, Opera, and Edge. UIや機能はブラウザによって異なることはないので、以下の概要・説明は、全ブラウザのAdGuard VPN拡張機能に当てはまるるものです。

> AdGuard VPN ブラウザ拡張機能を使用するには、ログインする必要があります。 AdGuardアカウントでログインするか、Google、Facebook、Apple経由でログインしてください （外部アカウントの場合、AdGuardアカウントと同じメールアドレスのアカウントを使用してください）。 [AdGuard VPN サブスクリプション](/general/subscription.md)をお持ちの場合、AdGuard VPNブラウザ拡張機能でログインすると自動的にアクティベートされます。 まだAdGuardのアカウントをお持ちでない方は、 [こちら](https://auth.adguard.com/registration.html)からご登録いただけます（ご登録に必要なのはメールアドレスのみです）。

To manage your AdGuard VPN Browser extension:

* Either click its icon on the browser's panel, click the hamburger menu icon, and select *Settings*,
* Or go to the *Manage extensions* page in your browser, click *Details* below *AdGuard VPN* and manage its settings from there.

そうする設定ページが開かれ、左側に以下の項目が表示されます:

## 設定

このタブには、いくつかの重要な設定項目が集められています。 こちらでは、DNSサーバーの選択、ブラウザのコンテキストメニューでのAdGuard VPNアイコンの追加・削除、WebRTCのブロック、拡張機能のテーマ変更、AdGuardによる匿名クラッシュレポートと技術データの収集を許可する、などが可能です。

### DNSサーバー

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. AdGuard VPN ブラウザ拡張機能を使用すると、広告や危険なドメインをブロックし、より優れた速度とセキュリティを提供するDNSサーバーを選択することができます。 DNSサーバーの名称の下に簡単な説明があるので、どれを選択すればいいのかが判断しやすくなります。

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

## VPN対象外リスト

次のタブには、AdGuard VPNの主な特徴の1つである、サイト除外機能があります（2つのモードがあります）。

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you've added to the exclusions list. **指定モード**はその逆で、AdGuard VPNはリストに追加されたサイトのみに対してオンになります。 You can add any websites where you'd like it to work to an exclusions list, separate from the one you saw in the **General mode**.

除外リストにWebサイトを追加する場合、Webサイトを手動で入力するか、**既存リストから** 選択することもできます。 後者の場合、8つのカテゴリ（例： *ショッピング*、*メッセンジャー*、など）が表示され、それぞれに各カテゴリの複数人気サービスが含まれています。 これらのサービスのいずれかをワンクリックで除外しますと、その特定のサービスに関連するすべてのドメインが除外対象に追加されます。

### インポート・エクスポート

Webサイトの追加や削除だけでなく、AdGuard VPNがインストールされている他デバイスに除外リストを移行することも可能です。 対象外項目をエクスポートする方法は以下の4ステップです:

1. 除外リストのエクスポート元となる端末で AdGuard VPN を開きます。 該当するセクションで「対象外リストをエクスポート」ボタンをクリックします。 `exclusions.zip` というアーカイブがダウンロードされます。
2. There are two `.txt` files inside the archive, one for each of the General and Selective lists. アーカイブのファイルに、さらに除外項目を追加したり、既存のものを削除したり、ファイル名を変更したり、そのままにしておいたり、自由にカスタマイズできます。
3. 異なる端末間で除外リストを移行する場合は、インポート先端末に `.zip` ファイルを転送することを忘れずに。
4. インポート先端末でAdGuard VPNを開きます。 該当するセクション（[ブラウザ拡張機能の場合]「VPN対象外リスト」画面右上の「アクション」）で「対象外リストをインポート」ボタンを押して、アーカイブファイルを選びます。 完了です。

## アカウント

AdGuard VPN ブラウザ拡張機能の3番目のタブには、アカウントへのログインに使用したメールアドレス表示と、 「*アカウント管理*」や「*ログアウト*」という2つのボタンがあるだけで、結構ミニマルな画面になっています。 「*アカウント管理*」ボタンをクリックすると、お使いのAdGuardアカウントに移動し、お持ちのライセンスやサブスクリプション、およびそれらに接続されている端末を確認・管理することができます。

## お客様サポート

「よくあるご質問（FAQ）」で解決策を見つけたりし、サポートチームに連絡したり、フィードバック（正常に動作しない場合は不具合を報告し、新しい機能の追加を提案）をお寄せしたりすることができます。また、AdGuardのSNSへのリンクもあります。

## AdGuard VPNについて

Another minor tab, where you can check the extension's version, visit the official website, and view the EULA or Privacy policy.
