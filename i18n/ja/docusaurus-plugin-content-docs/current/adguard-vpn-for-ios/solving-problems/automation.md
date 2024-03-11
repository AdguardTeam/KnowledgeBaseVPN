---
title: iPhone/iPadでアプリごとにAdGuard VPNを常時オン・オフにする方法（iOSオートメーション）
sidebar_position: 1
sidebar_label: アプリごとにAdGuard VPNを常時オン・オフにする方法
---

iOS用AdGuard VPN にはアプリをVPN対象から外しておく機能はありません。 しかし、iPhone・iPadのアプリごとに対して AdGuard VPN のオン・オフを自動化する代替方法があります。

## AdGuard VPN の自動起動を設定する方法

特定のアプリを開くと自動的にAdGuard VPNがオンになり、そのアプリを閉じるとAdGuard VPNが自動的にオフになる方法のご紹介です。 まず、「VPN対象外リスト」（メイン画面下の真ん中のアイコン）→「レギュラー」モードを選択してください。 ※以下では、例として「Twitter」アプリに対するオートメーション作成方法を説明しておりますが、どのアプリに対しても同じ手順を使うことができます。

![手順 第1部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_on1_ja.jpg)

1. 「[*ショートカット*」アプリ](https://apps.apple.com/us/app/shortcuts/id915249334)をApp Storeからダウンロードして開いて、下の🕐アイコン「*オートメーション*」をタップ
2. 「*個人用オートメーションを作成*」をタップ→リストで「*App*」を選択する
3. 「*開いている*」のみが選択された状態で、「*選択*」をタップ

![手順 第2部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_ja.jpg)
4. 対象アプリの名前を入力し始めて（この場合は「Twitter」）、対象アプリが現れたらタップ →右上の「*次へ*」をタップ →「*アクションを追加*」をタップ

![手順 第3部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_ja.jpg)
5. 「AdGuard VPN」と入力して、表示されたAdGuard VPN下の 「*VPNに接続*」をタップ

![手順 第4部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_ja.jpg)
6. 「VPN接続を*オン**にする*」となっていることを確認して、右上の「*次へ*」をタップ
7. 「*実行の前に尋ねる*」をオフにする →「尋ねる」 をタップ → 右上の「*完了*」をタップ

これで、新しい自動オートメーションが出来上がりました。 Twitterアプリ（対象アプリ）を起動すると、AdGuard VPNが自動的に有効になります。 あとは、対象アプリ（この例では「Twitter」）を閉じたときに AdGuard VPN を自動的にオフにするもう一つのオートメーションを作成する必要があります。

## AdGuard VPN の自動シャットダウンを設定する

![手順 第1部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_ja.jpg)

1. 同じ「ショートカット」アプリで下の🕐アイコン「オートメーション」をタップ →右上の「＋」をタップ→「個人用オートメーションを作成」をタップ→リストで「App」を選択する
2. 「*閉じている*」のみが選択されている状態で、 「*選択*」をタップ

![手順 第2部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_ja.jpg)
3. 対象アプリの名前を入力し始めて（この場合は「*Twitter*」）、対象アプリが現れたらタップ →右上の「*完了*」をタップ →「*アクションを追加*」をタップ

![手順 第3部](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_ja.jpg)
4. 「AdGuard VPN」と入力して、表示されたAdGuard VPN項目の「*VPNに接続*」をタップ
5. 「オン」をタップして「*オフ*」に変え、「VPN接続を*オフにする*」となっていることを確認 → 右上の「*次へ*」をタップ
6. 「*実行の前に尋ねる*」をオフにする → 「尋ねない」をタップ → 右上の「*完了*」をタップ

完了です。 これで、対象アプリ（今回の例としてはTwitterアプリ）を開くたびにAdGuard VPNがお使いのiPhone/iPadでオンになり、対象アプリを閉じるとAdGuard VPNはオフになります。 他のどの数のアプリに対してもこのオートメーション作成手順を繰り返すことができます。
