---
title: 傳送回饋意見
sidebar_position: 5
---

## 回報問題或建議功能

如果您發現適用於 Linux 的 AdGuard VPN 中的錯誤或想要建議新功能，請依照下列步驟操作：

- 填寫[回饋表](https://surveys.adguard.com/en/vpn_linux/form.html)。
- [建立 GitHub 問題](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose)。 但在此之前，請先檢查[儲存庫](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3A問題)是否有類似問題。

:::note
如果您想支援新功能或錯誤修復的實現，可以在 GitHub 上投票。 要投票，只需用一些表情符號做出反應即可。
:::

## 收集並發送日誌

1. 透過鍵入以下內容啟用調試日誌記錄：

   `adguardvpn-cli config set-debug-logging on`

2. 重現問題並嘗試記住問題發生的確切時間。

3. 稍等片刻，然後透過鍵入以下內容將日誌存檔到 _Downloads_ 或 _Home_ 資料夾中：

   對於 Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   對於 Mac

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. 將日誌檔案傳送到 devteam@adguard.com 指定錯誤發生的時間並附加指向您的 GitHub 問題或其編號的連結（在標題旁邊顯示為 #number）。 或者，您可以將日誌檔案上傳至Google Drive並與devteam@adguard.com分享。 將文件連結附加到您的 GitHub 問題。

5. 輸入以下內容以停用偵錯日誌記錄：

   `adguardvpn-cli config set-debug-logging off`
