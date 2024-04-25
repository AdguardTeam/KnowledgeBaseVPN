---
title: 如何收集和發送日誌
sidebar_position: 1
---

收集 AdGuard VPN 瀏覽器擴充日誌的方法有很多種，但無論您選擇哪一種，都會收集相同的資料。 在擴充中，日誌不分為標準日誌和偵錯日誌。 當您遇到的問題阻止您使用一條或另一條指令時，我們會為這些情況提供不同的日誌收集選項。

## 透過*報告錯誤*部分收集和發送日誌

1. 開啟 AdGuard VPN 瀏覽器擴展，如果可能，請重複導致錯誤的操作。 請記下此錯誤發生的確切時間。
1. 點選選單圖示 (☰) 開啟*設定* → *支援* → *報告錯誤*
1. 在開啟的表單中，留下自動插入的電子郵件地址或輸入另一個電子郵件地址並描述發現的錯誤，包括發生此錯誤的時間。 如果您無法重現問題，請盡可能準確地指定上次發生問題的時間。
1. 確保 *旁邊有複選標記，將診斷報告包含在訊息* 中，然後點擊 *提交*。 這樣，您將隨錯誤報告一起發送日誌。

## 透過*匯出日誌*按鈕收集和發送日誌

1. 開啟 AdGuard VPN 瀏覽器擴展，如果可能，請重複導致錯誤的操作。 請記下此錯誤發生的確切時間。
1. 右鍵點選 AdGuard VPN 瀏覽器擴充圖示。
1. 在開啟的選單中點選*匯出日誌*。
1. 因此，日誌檔案將以 `txt` 格式儲存到您的裝置。

現在您已經收集了日誌，您需要將它們交給我們的開發團隊。 為此，請執行以下操作：

1. 於 GitHub 上報告程式錯誤。 有關在 GitHub 上建立問題的詳細說明，請參閱本文。
1. 將包含日誌和重現時間的檔案傳送至 `devteam@adguard.com` 並附上指向您的 GitHub 問題的連結。 您也可以將包含日誌和重現時間的檔案新增至 Google Drive，並與 `devteam@adguard.com` 共享，並將 Google Drive 連結附加到您在 GitHub 上的問題。

## 透過瀏覽器開發者工具收集和發送日誌

### Chrome

1. 開啟 AdGuard VPN 瀏覽器擴展，如果可能，請重複導致錯誤的操作。 請記下此錯誤發生的確切時間。
1. 前往 `chrome://extensions`
1. 開啟 *開發者模式*

    ![開發者模式 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. 點選 `background.html`

    ![背景 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. 開啟 *控制台*

    ![控制台 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. 開啟上下文選單並點選 *儲存為…*

    ![儲存為 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

現在您已經收集了日誌，您需要將它們交給我們的開發團隊。 為此，請執行以下操作：

1. 於 GitHub 上報告程式錯誤。 有關在 GitHub 上建立問題的詳細說明，請參閱本文。
1. 將包含日誌和播放時間的檔案傳送至 `devteam@adguard.com` 並附上指向您的 GitHub 問題的連結。 您也可以將包含日誌和播放時間的檔案新增至 Google Drive，並與 `devteam@adguard.com` 分享，並將 Google Drive 連結附加到您在 GitHub 上的問題。

### Firefox

1. 開啟 AdGuard VPN 瀏覽器擴展，如果可能，請重複導致錯誤的操作。 請記下此錯誤發生的確切時間。
1. 前往 `about:addons`
1. 點選 *調試Add-ons*

    ![除錯 Add-ons *邊框](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. 點選 *檢查*

    ![檢查 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. 前往 *控制台* 選項卡

    ![控制台 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. 點選*將所有訊息儲存到檔案*

    ![儲存 *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

現在您已經收集了日誌，您需要將它們交給我們的開發團隊。 為此，請執行以下操作：

1. 於 GitHub 上報告程式錯誤。 有關在 GitHub 上建立問題的詳細說明，請參閱本文。
1. 將包含日誌和播放時間的檔案傳送至 `devteam@adguard.com` 並附上指向您的 GitHub 問題的連結。 您也可以將包含日誌和播放時間的檔案新增至 Google Drive，並與 `devteam@adguard.com` 分享，並將 Google Drive 連結附加到您在 GitHub 上的問題。
