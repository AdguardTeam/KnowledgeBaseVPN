---
title: 功能概述
sidebar_position: 1
---

AdGuard VPN for Mac 是桌面 VPN 服務。 AdGuard VPN 與 AdGuard Ad Blocker 完全相容，它們可以一起使用並無縫運行。 讓我們看看它有哪些功能。

請注意， **除非您已登錄 AdGuard 帳戶，否則您無法使用 AdGuard VPN for Mac**. 您可以使用 AdGuard 帳戶或外部帳戶（即透過 Apple、Google 或 Facebook）登入。 確保您的外部帳戶綁定到與您的 AdGuard 帳戶相同的電子郵件地址。 如果您的 AdGuard 帳戶中有合適的訂閱，它將在桌面應用程式上自動啟動。 還沒有 AdGuard 帳號？ [在這裡](https://auth.adguard.com/registration.html)創建。

:::note 兼容性

AdGuard VPN for Mac 目前在從 macOS Catalina (10.15) 開始的 macOS 版本上支援。

:::

## 主頁

![主頁](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

第一個選項卡是 *首頁* 螢幕。 您可以在此處查看 AdGuard VPN 的當前狀態、所選位置（如果已啟用）及其 ping。 Ping 是 VPN 伺服器的回應時間。 數字越低，連線速度越快。 如果停用 VPN，您最後連線的位置將顯示在底部。

ping 值最低的最快位置顯示在螢幕的右上角。 如果任何位置處於離線狀態，您也可以按一下刷新按鈕。 您可以在下面看到完整的地點清單。 搜尋欄位可以輕鬆找到您需要的位置。

:::note

免費用戶只能連接到某些位置，而其他位置則被封鎖。 此外，免費版本還有每月3GB的流量限制。

:::

## 排除

![排除](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN 具有多項使其獨一無二的功能，其中之一絕對是 *排除*。 預設情況下，AdGuard VPN 將在除排除清單之外的所有網站和所有應用程式上執行。 但您可以切換到其他模式，因此 AdGuard VPN 將僅在排除清單中的網站和應用程式中執行。

![排除畫面](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

此外，您不僅可以將網站新增至排除項，還可以在熱門服務清單中進行選擇。 此列表分為八類：社交網路、Messenger、視訊和音樂串流服務、遊戲、購物、搜尋引擎和工作通訊工具。 這些服務中的任何一項都可以一鍵新增到排除項中！ 如果您使用選擇性模式，這會特別方便。

可以輕鬆配置排除列表。 如果您新增了一個網域及其一些子網域，它們將被分組到根域中。 當添加根域 (`example.com`) 時，也會加上其遮罩 (`*.example.com`)。

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

如果您新增了服務、更改或刪除了某些內容，現在想要恢復初始設置，只需按網域旁邊的 *重置為預設值* — 此操作將恢復任何遺失的網域並勾選所有複選框。

此外，現成的排除清單可以傳輸到安裝了 AdGuard VPN 的其他裝置。 若要匯出排除項，請依照以下四步驟說明操作：

1. 在要從中匯出排除清單的裝置上開啟 AdGuard VPN。 找到適當的部分並點選 *匯出* 按鈕。 將下載 `exclusions.zip` 存檔。
2. 存檔內有兩個 `.txt` 文件，每個文件用於常規清單和選擇性清單。 在其中新增更多排除項、刪除現有排除項、重新命名檔案（稍後會詳細介紹），或僅保留存檔檔案原樣。
3. 在不同裝置之間傳輸時，請勿忘記將 `.zip` 檔案傳送至裝置進行匯入。 例如，如果您將排除清單從 Mac 匯入到 iPhone，請確保事先將 `.zip` 檔案傳送到您的手機。
4. 在您想要匯入具有準備好的排除清單的存檔的裝置/瀏覽器中開啟 AdGuard VPN。 找到適當的部分，點選 *匯入* 按鈕並選擇存檔。 完成！

:::note

其他裝置的存檔檔案可以類似地匯入到您的 AdGuard VPN for Mac。

:::

## 統計數據

![統計畫面](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

統計畫面提供有關位置和應用程式、最常用的位置和應用程式消耗的流量的詳細資訊。 查看 AdGuard VPN for Mac 使用日、月或整個時間的資料。

重要的是，所有資料都儲存在您的本機裝置上，因此除了您之外沒有人可以存取它。 訂閱 AdGuard VPN 的使用者可以使用統計功能。

## 支援

![支援畫面](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

第四個選項卡是 *支援* 螢幕。 在[常見問答集](https://adguard-vpn.com/welcome.html#faq)或[知識庫](/)部分找到任何問題的答案，如果遇到問題，請報告錯誤，或在任何平台上[討論AdGuard](https://adguard.com/discuss.html)。 請隨時 [留下有關我們產品的回饋](https://surveys.adguard.com/vpn_mac/form.html)，我們將不勝感激。

## 設定

![設定](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

最後，我們來到「設定」標籤。 在 *關於程式* 部分，您可以查看 AdGuard VPN 的當前版本、檢查更新、造訪我們的官方網站，並了解 AdGuard 的 EULA 和隱私權政策。 在 *關於許可證* 部分，您可以從免費升級到無限、管理您的訂閱或登出。 最重要的是，從這裡您可以訪問 *常規設定*。

### 應用程式設定

![應用程式設定](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

第一個四個基本功能使應用程序更加方便和用戶友好，即*終止開關*，*自動更新*，*啟動AdGuard VPN時登錄*，以及*應用程序啟動時自動連接*。 此外，您可以在淺色、深色和系統主題之間進行選擇 - 後者與您 Mac 上的主題相匹配。

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. 最後但並非最不重要的一點是，您可以從 Mac 匯出日誌。 如果您想將日誌附加到訊息中以獲取支持，這會很有用。

### DNS 伺服器

![DNS 伺服器](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

此處可以設定一台或多台 DNS 伺服器。 如果您不想依賴 ISP 提供的預設 DNS 伺服器，這非常有用。 從流行的 DNS 服務清單中選擇一項或手動新增自訂伺服器。 我們建議新增 AdGuard DNS，它不僅可以加密您的 DNS 流量，還可以識別對惡意網站的請求並將其重定向到「黑洞」。

### 進階設定

![進階設定](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### 日誌等級

只有兩個日誌記錄級別，但我們強烈建議您使用第一個預設級別。 在諮詢我們的技術支援後，第二個選項（擴展日誌記錄）應僅設定為記錄奇怪的程序行為。 如果您啟用了擴充日誌記錄級別，請確保在記錄日誌後切換到預設等級。

#### 隱藏選單列圖標

雖然這個選項位於 *進階設定*中，但可以毫不猶豫地啟用它。 您可以從功能表列中隱藏 AdGuard VPN 圖標，它不會阻止我們的應用程式在背景運行。

#### 使用 QUIC

QUIC 通訊協定是 HTTP 的最新、前沿版本。 例如，在地鐵或電梯中使用行動數據時，切換開關即可在不太理想的條件下獲得更好的連接品質。
