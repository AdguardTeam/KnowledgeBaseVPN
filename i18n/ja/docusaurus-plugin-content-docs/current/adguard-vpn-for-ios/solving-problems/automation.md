---
title: iPhone/iPadでアプリごとにAdGuard VPNを常時オン・オフにする方法（iOSオートメーション）
sidebar_position: 1
sidebar_label: アプリごとにAdGuard VPNを常時オン・オフにする方法
---

AdGuard VPNには、「*VPN対象外リスト*」機能と、「*一般*」と「*指定*」という2つの操作モードがあります。 *一般モード*では、「VPN対象外リスト」に追加されたウェブサイトに対してAdGuard VPNはオフになります。 逆に、*指定モード*では、リストに記載されたサイト以外でVPNはオフになります。 なお、それぞれのモードに対して個別のリストを作成する必要があります。

お気づきのように、*VPN対象外リスト*に追加できるのはWebサイトのみです。 「AdGuard VPNをアプリごとにオン・オフ設定する方法は?」 と思われる方も多いかと思います。 この目的のために、AdGuard VPNのデスクトップアプリには「*Split-tunneling（VPN対象外アプリ）*」機能があり、Android用アプリには「*アプリに対する設定*」機能があります。 これらの設定により、AdGuard VPNがどのアプリに対して機能するかしないかをカスタマイズすることができます。

しかし、よくあることですが、技術的なニュアンスの違いにより、（少なくとも現時点では）このような便利な機能をiOSに実装することは不可能です。 そこで、iPhone・iPadのアプリに対してAdGuard VPNを自動化する代替方法を紹介したく思います。

## AdGuard VPN の自動起動を設定する方法

特定のアプリを開くと自動的にAdGuard VPNがオンになり、そのアプリを閉じるとAdGuard VPNが自動的にオフになる方法のご紹介です。 まず、「VPN対象外リスト」（メイン画面下の真ん中のアイコン）→「レギュラー」モードを選択してください。 ※以下では、例として「Twitter」アプリに対するオートメーション作成方法を説明しておりますが、どのアプリに対しても同じ手順を使うことができます。

![手順 第1部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_on1_ja.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![手順 第2部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_on2_ja.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![手順 第3部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_on3_ja.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![手順 第4部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_on4_ja.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

これで、新しい自動オートメーションが出来上がりました。 Twitterアプリ（対象アプリ）を起動すると、AdGuard VPNが自動的に有効になります。 あとは、対象アプリ（この例では「Twitter」）を閉じたときに AdGuard VPN を自動的にオフにするもう一つのオートメーションを作成する必要があります。

## AdGuard VPN の自動シャットダウンを設定する

![手順 第1部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_off1_ja.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![手順 第2部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_off2_ja.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![手順 第3部](https://cdn.adtidy.org/public/Adguard/Blog/VPNauto/vpn_off3_ja.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

完了です。 これで、対象アプリ（今回の例としてはTwitterアプリ）を開くたびにAdGuard VPNがお使いのiPhone/iPadでオンになり、対象アプリを閉じるとAdGuard VPNはオフになります。 他のどの数のアプリに対してもこのオートメーション作成手順を繰り返すことができます。 