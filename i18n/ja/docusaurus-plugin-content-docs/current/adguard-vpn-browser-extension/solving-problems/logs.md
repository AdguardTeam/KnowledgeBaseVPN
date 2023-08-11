---
title: ログの収集・送信方法
sidebar_position: 1
---

AdGuard VPNブラウザ拡張機能のログを集めるやり方はたくさんですけれど、どっちが選ぶしてにもかかわらず、集めるのデータは同じものだ。 拡張機能にあるログは通常とかデバッグなどで分けるはない。 だから、どれでも仕方を妨げる問題があれば、ログを集めるの他の仕方がある。

## *「不具合を報告する」*を使うでログを収集・送信

1. AdGuard VPN ブラウザ拡張機能を開き、可能であれば、エラーに至った操作を繰り返して、問題を再現してください。 ※問題が発生した時刻を記録しておいてください。
1. (☰) のメニューアイコンをクリックすると「*設定*」を開く→ 「*サポート*」 → 「*不具合を報告する*」
1. In the opened form, leave an automatically inserted email address or enter another one and describe the error found, including the time when this error occurred. If you can't reproduce the problem, specify as accurately as possible when it last occurred.
1. Make sure that there is a check mark next to *Include the diagnostic report in the message*, and tap *Submit*. This way, you will send logs along with the bug report.

## Collecting and sending logs via the *Export logs* button

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Right-click the AdGuard VPN Browser extension icon.
1. In the opened menu click *Export logs*.
1. As a result, the logs file will be saved to your device in `txt` format.

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

## Collecting and sending logs via browser developer's tools

### Chrome

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Go to `chrome://extensions`
1. Turn on *developer mode*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Click `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Open the *Console tab*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Open the context menu and click *Save as…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

### Firefox

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Go to `about:addons`
1. Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Go to the *Console* tab

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.
