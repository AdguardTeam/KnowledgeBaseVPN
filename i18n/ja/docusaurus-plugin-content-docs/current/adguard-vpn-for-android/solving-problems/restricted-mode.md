---
title: '制限付きプロファイルが原因の問題'
sidebar_position: 4
---

**制限付きプロファイル**（アカウント）のあるAndroid 7以降デバイスの一部（特にSamsung Galaxy S10系端末）で起こる問題です。 このようなプロファイルがある場合、**AdGuard VPN**は、VPNを使用する他アプリケーションと同様に、VPNトラフィックの選択的な処理に対する制限がかかってしまいます。 また、この状況の理由の1つは、端末で**デュアルアプリ/デュアルメッセンジャー**を使用していることです。 以下に、この問題が発生した場合の対策をまとめました。

## 解決方法

現在対処方法は２つございます（多くの方にとって方法②のほうが便利かと思いますが）。

### 【方法①】ADB経由でAdGuard VPNに権限を与える

1. **開発者モード**をアクティブにし、**USBデバッグ**を有効にします（※端末によって下記メニュー項目の名称が多少違ったりする場合がございます）:

    - 端末で**設定**アプリを開きます。
    - **システム**セクションに移動し（設定メニューの最後の項目）、 サブアイテム「**端末について**」・「端末情報」を見つけます。
    - 「**ビルド番号**」の行を7回タップします（端末によっては「ソフトウェア情報」→「ビルド番号」となります）。 その後、「**開発者になりました！**」のような通知が表示されます（必要に応じて、デバイスのロック解除コードを入力してください）。
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    > If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

1. ADBをインストトールして設定します（方法：[Windows編](https://expnote.com/how-to-install-android-debug-bridge/)、[Mac編](https://child-programmer.com/m-adb/)）

    > Windowsでは、**Samsung** のユーザーは、[こちらのユーティリティ](https://developer.samsung.com/mobile/android-usb-driver.html)をインストールする必要があるかもしれません。

1. **USBケーブル**を使用して**ADB**をインストールしたコンピューターまたはラップトップにAndroidデバイスを接続します。

1. Open **the command line** on your PC:

    - **Windows**を使用している場合は**Cmd.exe**
    - **macOS**を使用している場合は**ターミナル**

1. `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` というコマンドを入力して**Enter**を押します。これで完了です。

### 【方法②】*制限付きアカウント*を削除する

Android端末からユーザーアカウントを管理する方法は[こちら](https://support.google.com/a/answer/6223444?hl=ja) をご覧ください。

> Please note that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Read below how to fix the issue in these cases.

### LGとSamsungデバイスの場合

**LG**または**Samsung**端末には「デュアルアプリ」または「デュアルメッセンジャー」機能を使用することにより、制限付きプロファイルが作成され、VPN起動の問題が発生する可能性があります。 この問題を解決するには、**その機能を無効にする**必要があります。

#### Samsung端末

- 端末**設定**を開く
- **高度な設定**をタップ
- 下にスクロールして**デュアルメッセンジャー**をタップ
- チェックついているアプリをすべて**オフ**にする
- 端末画面オフにして5～10分程度放置する
- 画面のロックを解除し、再度VPNプロファイルの作成を試みてください。

#### LG端末

- **設定**を開く
- 「**便利な機能**」を開く（端末によっては「一般」や他のメニュー名称の場合もあります）
- 下にスクロールして、「**デュアルアプリ**」をタップ
- アプリに対するスイッチをすべてオフにする
- 端末を再起動する
