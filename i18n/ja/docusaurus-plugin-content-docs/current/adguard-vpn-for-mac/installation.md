---
title: インストールと削除方法
sidebar_position: 2
---

## 動作環境

**OSバージョン**: macOS 10.12 (64 bit) 以上

**RAM**: 2 GB以上

**空きディスク容量**: 120 MB


## AdGuard VPN for Mac のインストール方法

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*.

![公式サイトからAdGuard VPNをダウンロード](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. *AdGuardVPN.dmg*ファイルのダウンロードが完了したら、「ダウンロード」フォルダーでそのファイルを開きます。

3. インストールプログラムのウィンドウが開きましたら、 その中のアイコンをダブルクリックします。

![プログラムインストール画面](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. AdGuard初インストールの際に、OSから「このアプリはインターネットからダウンロードされましたよ」という警告が表示されます。 「*開く*」をクリックします。

5. 次に、「*続ける*」と「*インストール*」をクリックします。

![「続行」をクリック](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![「インストール」をクリック](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. インストーラが必要なファイルをダウンロード完了するまでお待ちください。

AdGuard VPN for Mac のインストール完了です。


## AdGuard VPN for Mac のアンインストール方法

### 通常のアンインストール

AdGuard VPN for Macをアンインストールするには、2つの簡単なステップを行ってください

1. 「Finder」を開き、「アプリケーション」セクションに移動します。

2. 「*AdGuard VPN*」をリストから選択し、右クリックして、「*ゴミ箱に入れる*」をクリックします。

![通常のアンインストール](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### アドバンスドアンインストール

誤ったアンインストールの結果、またはその他の稀なケースで、通常のアンインストールでは不十分な場合があります。 この場合、当社サポートは、お使いのMacからAdGuard VPNを完全に削除するために、アドバンスドアンインストールを行うように案内することがあります。 その方法は以下の通りです:

1. 「[通常のアンインストール](#how-to-uninstall-adguard-vpn-for-mac)」</a>に記載されている手順を行ってください。

2. 「Finder」または「Spotlight」を開き、検索に`Keychain`と入力してください。

![アドバンスドアンインストール Keychain を入力](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. 見つかったプログラムのアイコンをクリックし、検索に `com.adguard.mac.vpn` と入力してください。 検索結果にそのような記録がある場合は、削除してください。

4. 「Finder」または「Spotlight」に戻り、`Terminal`と入力します。

![アドバンスドアンインストール Terminal を入力](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. プログラムを開き、こちらのコマンドを入力します: `defaults delete com.adguard.mac.vpn`

6. *スペースバー*を押して、別のコマンドを入力します: `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`

これで、AdGuard VPNはMacから完全に削除完了です。

Mac用AdGuard VPNについて、 [こちらの記事](/adguard-vpn-for-mac/overview.md)で詳しく説明しておりますので、よければご確認ください。