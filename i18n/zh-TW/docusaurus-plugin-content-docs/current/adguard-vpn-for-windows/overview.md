---
title: 功能概述
sidebar_position: 1
---

## AdGuard VPN for Windows 的功能

- 防止網路流量攔截（欺騙）。 AdGuard VPN 在您的裝置和遠端伺服器之間建立加密隧道。 您的所有網路流量都經過此隧道，因此您的資料沿途受到保護。 由於 [AdGuard 獨特的協議](/general/adguard-vpn-protocol)，確保您獲得快速、安全的連接。

- 偽裝您的 IP 位址. 您的真實 IP 位址是網路犯罪分子獲取您個人資料的關鍵。 如果您不隱藏您的 IP，您的姓名、電子郵件地址、電話號碼、信用卡資料都可能落入詐騙者手中。 透過 AdGuard VPN，您的所有流量都會透過加密隧道到達 VPN 伺服器。 Web 伺服器會註冊隧道端點（即 VPN 伺服器）的 IP 位址，而不是裝置的真實 IP 位址。

- 隱藏您的真實位置。 這對你來說意味著什麼？ 例如，能夠以當地人的價格預訂飯店或隱藏地理定位廣告。

AdGuard VPN for Windows 有很多優點，所以我們專門致力於 [另一篇文章](/general/why-adguard-vpn) 對他們來說。 然而，在這裡，我們希望更多地關注應用程式本身及其工作原理。

## 如何開始使用 AdGuard VPN for Windows

要開始使用 AdGuard VPN for Windows，請從以下位置下載應用程式 [我們的網站](https://adguard-vpn.com/welcome.html). 安裝過程不會超過一分鐘，您將看到一個對話框窗口，您需要在其中至少選取一個方塊以應用使用者協議和隱私權政策的條款。 您可以決定是否希望 AdGuard 收集有關您的應用程式使用情況的匿名資料。 最後，程式將要求您透過 [AdGuard 帳號](https://auth.adguard.com/login.html) 或社群網路（Apple、Google、Facebook）登入。 就這樣，您現在可以使用 AdGuard VPN for Windows。

## 主頁

![AdGuard VPN for Windows 主頁 *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

**主畫面** 上最引人注目的項目是 AdGuard VPN 連線/中斷按鈕，在其下方您可以看到所選的伺服器。 在螢幕右側，您將看到可用位置的清單。 最快的位置（即 ping 值最低的位置）顯示在清單頂部。 如果任何位置處於離線狀態，您也可以按一下刷新按鈕。

螢幕頂部有一個帶有五個選項卡的導航面板： **主頁**、 **排除**、 **統計**、 **支援**和 **設定**。

## 排除

預設情況下，AdGuard VPN for Windows 可以在任何地方使用。 您可以將要從 VPN 隧道中排除的網站和應用程式新增至排除清單。 或者，您可以使 AdGuard VPN 僅在排除清單中指定的網站和應用程式上執行。 請注意，這兩個清單是相互獨立的。

![排除 *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

您可以通過**手動**輸入其網域名稱來將網站添加到例外。 該應用程式還為您提供了**從清單中**選擇熱門網站的選項。

![從清單中添加排除項 *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

手動新增網域時，您應該考慮某些細節。 例如，如果您手動排除網域 `google.com`，則所有子網域 `*.google.com` 也會加入排除清單。 不過， `google.es` 或 `google.it` 等其他頂級網域的網域名稱不會被排除在外。 或者您可以將 `youtube.com` 新增至排除項，但相同服務的網域 `youtu.be` 將不會包含在清單中。

:::

我們建議使用 **從清單** 選項。 網站分為八類：社群網路、信差、影片和音樂串流服務、遊戲、購物、搜尋引擎和工作通訊工具。 我們在那裡放置了最受歡迎的服務，包括與每個平台相關的所有網域和子網域。

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

### 導入/匯出排除列表

將例外清單從AdGuard VPN for Windows匯出到您的電腦，請按一下**匯出例外**，選擇要存儲清單的文件夾，然後按一下**儲存**。 將下載一個存檔 `排除.zip` ，其中包含兩個 `.txt` 文件，每個列表一個。 您可以透過新增新的排除項或刪除舊的排除項來編輯它們。

在目標裝置上，開啟 AdGuard VPN，點選 *排除*，然後選擇 *網站* 或 *應用程式*。 點選 *匯入排除項* 並選擇收到的檔案。

## 統計數據

![統計畫面 *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

「統計資料」畫面顯示有關您的資料使用情況的詳細信息，按位置和應用程式分類。 它突出顯示您最常用的位置和應用程式。 您可以存取不同時間段的統計資料：每天、每月或您使用 AdGuard VPN for Windows 的整個時間。

至關重要的是，所有這些資訊都專門儲存在您的裝置上，確保只有您可以查看。 僅 AdGuard VPN 訂閱者可以存取統計功能。

## 設定

![設定 *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

第四個選項卡包含可協助您自訂應用程式的部分。

### 應用程式設定

![應用程式設定 *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

在**應用程式設定**部分，您可以設定應用程式語言，並且啟用**終止開關**，如果您的VPN連接中斷，將封鎖對互聯網的訪問。 如果您在連接到公共 Wi-Fi 或行動網路時發現自己沒有 VPN 保護，則需要這樣做以防止入侵者取得您的資料。

您也可以透過點擊啟動以下功能： **自動更新**、 **在 Windows 啟動時啟動 AdGuard VPN**、 **自動在應用程式啟動時連接**，並允許AdGuard 收集匿名應用程式使用數據，以便AdGuard 團隊獲取有關潛在可用性問題的資訊。 在這裡您也可以將主題改為 **Light**、 **System**或 **Dark**。

頁面底部有兩個部分： **DNS 伺服器** 和 **進階設定**。

#### DNS 伺服器

**DNS 伺服器** 標籤可讓您手動或從清單新增自己的 DNS 伺服器。 您可以由任何提供者設定 DNS 伺服器。 我們建議添加 [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns)，這是一個除了標準功能之外還可以防止廣告、追蹤和網路釣魚的伺服器。

#### 進階設定

完全可以在不接觸進階設定的情況下使用適用於 Windows 的 AdGuard VPN，但如果您願意花時間了解它們的用途，它們會很有用。

##### 運作模式

儘管有兩種操作模式 — VPN 和 SOCKS5 — 我們建議您僅使用預設選擇的一種 (VPN)。 當 **VPN 模式** 啟用時，您裝置的所有流量將透過 AdGuard VPN 定向，而在 **SOCKS5 模式** AdGuard VPN 使用本地代理伺服器可以被其他應用程式用來重定向其流量。

##### 日誌等級

有兩種記錄等級可供選擇： **預設記錄** 和 **記錄所有內容**。 預設啟用第一個選項。 只有當我們的支援團隊要求您這樣做時，才應啟動 **記錄一切** 選項。 在此模式下長時間使用應用程式會導致電池消耗增加。

所有日誌都儲存在您的裝置本機，如果需要，您可以將它們傳送給支援團隊。

##### 使用 QUIC

這是一項實驗性功能，使 AdGuard 能夠使用高級 QUIC 加密協定。 它有很多優點，但最值得注意的是，它可以提高非理想條件下的連接質量，例如使用行動互聯網或連接公共 Wi-Fi 網路時。

#### 使用 Wintun

![使用 WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun 是一種流量路由驅動程序，通常用於 Windows 上的 VPN 實現，它透過建立虛擬網路適配器來提高 VPN 連接的品質。 預設情況下，AdGuard VPN 使用常規 WFP 驅動程式（以及 Windows 7 的 TDI 驅動程式）。

#### 子網路排除

此功能可讓您新增子網路以排除來自連接到網路的特定裝置的流量。 例如，您的機器人吸塵器。

## 其它分頁

### 關於

**關於** 標籤提供有關 Windows 版 AdGuard VPN 目前版本的資訊、更新按鈕以及 AdGuard VPN 網站、EULA 和隱私權政策的連結。

### 帳戶

在這裡，您可以找到有關您的許可證狀態的信息，以及您的個人 AdGuard 帳戶的鏈接，您可以在其中管理當前的訂閱併購買新的訂閱。

## 支援

此標籤旨在解決使用者的問題：您可以在其中找到常見問題解答頁面的連結、報告錯誤或留下回饋，以及在支援團隊要求時匯出日誌。
