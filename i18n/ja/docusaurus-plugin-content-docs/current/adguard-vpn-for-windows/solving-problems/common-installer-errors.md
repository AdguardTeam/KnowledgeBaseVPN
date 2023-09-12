---
title: 一般的なインストーラーエラー
sidebar_position: 2
---

この記事には、AdGuard VPN for Windowsのインストール中に遭遇する可能性のある最も一般的なエラーと、その解決方法が記載されています。

### Error 5: Access Denied {#error-5}

このエラーは、アクセス許可に問題がある場合に発生します。 AdGuard VPNインストーラーがインストールプロセスを適切に完了するために必要な権限を持っていない理由はいくつか考えられます。 以下の手順を試してみてください。

- ウイルス対策ソフトウェアを一時的に無効にする。 その設定の度合いによっては、インストールを妨害するものもあります。

- 別のインストール フォルダーを選択してください。 現在のインストールフォルダに何らかのアクセス制限がある可能性があります。 また、外付けドライブや仮想ドライブなどを選択しないようにしてください。

- コンピュータを再起動する。 場合によっては、アクセス許可の問題は一時的なものであり、PC を再起動することで解決できる場合があります。

### Error 112: Disk is full, Error 1632: Temporary folder full or inaccessible {#error-112}

これらは 2 つの異なるエラーですが、解決策は非常に似ています。 その名前が示すように、AdGuard VPNインストーラーはインストールを完了するのに十分なディスク容量を見つけられませんでした。 問題を解決するにはいくつかの方法があります。

- AdGuard VPNをインストールしようとしているドライブから、いくつかのプログラムをアンインストールするか、不要なファイルを削除してください。

- Malwarebytes による無料ソフトウェア [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/)をダウンロード、インストールし、実行します。 これは、特に、誤ってアンインストールしたプログラムなどの後に残る、あらゆる種類の余分な「残り物」ファイルからシステムをクリーンアップします。 それは、ディスク領域をクリーンアップするのに役立ちます。

- コンピュータを再起動する。 一時ファイルがかなりのディスク容量を占めることがあり、PCを再起動することが、一時ファイルを取り除く最も確実な方法です。

### Error 1601: Windows Installer is not accessible {#error-1601}

You could say this is a particular subtype of Error 1603. The possible solutions are similar:

- Microsoft インストーラー サービスを開始して再登録します。 多少の作業が必要です。

    1. *Win + R* を押して、 **services.msc**と入力します。
    1. リストから *Windows Installer*を探し、ダブルクリックします。
    1. *サービスステータス* の下の *開始* ボタンを押し、 *OK*を押します。 サービスステータスが **実行中**の場合、まず *停止* をクリックし、次に *開始*をクリックします。
    1. *Win + R*を押し、 ***msiexec /unregister*** と入力し、 *Enter*を押す。
    1. *Win + R* をもう一度押し、 ***msiexec /regserver*** と入力し、 *Enter*を押す。

- PC を再起動し、インストールを最初からやり直します。 場合によっては、それだけで問題が解決する場合もあります。

### Error 1602: Canceled by user {#error-1602}

このエラー コードが表示された場合は、何らかの方法でインストール プロセスを手動で中断した可能性があります。 あなたができることは次のとおりです。

- インストーラーウィンドウを閉じないでください。 インストールが完了すると、自動的に閉じます。

- インストール中にダイアログ ウィンドウが表示された場合は、「はい」を押して、インストーラーに必要な権限を付与します。 「いいえ」をクリックすると、インストールがキャンセルされます。

- インストール中は、他のプロセスを起動しないでください。

### Error 1603: Fatal error during installation {#error-1603}

The error sounds scarier than it actually is. In reality, this is a rather generic error that can have many different causes, and some of them are easily fixed. Try the following solutions:

- Press the *Win* key, search for *Command Prompt*, and run it. There, type in `sfc /scannow` and press *Enter*.

- Choose a different installation folder. It is possible that the current installation folder has some access restrictions. Also make sure you don't select an external drive, a virtual drive, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter ***services.msc***.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Error 1618: Another installation is already in progress {#error-1618}

This error occurs when there are several instances of AdGuard VPN installer launched at the same time. What to do if you get this error:

- Reboot your PC and start the installer again. When you restart the computer, all ongoing processes will stop, including all copies of the installer.

- Do not make multiple clicks on the installer even if it doesn't start right away. Sometimes it may take a few seconds to display the installer UI.

### Error 1638: Another version of this product is already installed {#error-1638}

It's very likely that you've already installed AdGuard VPN before.

- Check if AdGuard VPN is already installed on your computer. You can do it by pressing the *Win* key and typing in ***AdGuard VPN***.

- Maybe there are some leftover files from a previous AdGuard VPN installation. Uninstall AdGuard using our special [uninstall tool](../../installation#advanced) and then repeat the installation.

### Other errors {#other}

If you have encountered an error that's not listed above, it is possible that we can solve it by ourselves. But in order to do that, we need log files from you. Please perform the following steps:

- Find and archive **AdGuard VPN installation logs** in the same way that is described in [this article](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk **Event Viewer** logs. [This article](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explains how to do that.

Please email all these files from the two previous steps at **support@adguard.com** and describe the problem in the message body. Our support team will reply to you as soon as possible.
