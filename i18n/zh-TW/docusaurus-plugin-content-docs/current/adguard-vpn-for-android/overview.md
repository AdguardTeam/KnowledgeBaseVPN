---
title: 功能概述
sidebar_position: 1
---

## 什麼是 AdGuard VPN for Android？

VPN 是一種理想的工具，可在您每次瀏覽網路時提供安全性和匿名性。 [它是如何運作的？](/general/how-vpn-works) 在不討論技術細節的情況下，我們可以說 VPN 在用戶設備和遠端 VPN 伺服器之間創建了安全的加密連接（稱為隧道）。 透過這種方式，可以保護資料機密性以及使用者的匿名性，因為第三方觀察者看到的是 VPN 伺服器的 IP 位址，而不是實際使用者的 IP。

**VPN 經常用於：**

- 即使在使用公共 Wi-Fi 時也能確保個人資料的安全
- 透過封鎖 IP 位址防止線上活動追蹤
- 隱藏真實地理位置以保持匿名

適用於 Android 的 AdGuard VPN 可以為您完成這一切 — 甚至提供一些獨特的功能。 要了解為什麼 AdGuard VPN 是更好的選擇 — 請閱讀 [這篇文章](/general/why-adguard-vpn)。

## 如何開始使用 AdGuard VPN for Android

首先，從 [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) 下載 AdGuard VPN 並登入您的 AdGuard 帳戶。 如果您沒有它 - 您應該 [創建它](https://auth.adguard.com/login.html)。 您可以使用 AdGuard 帳戶憑證直接登入。 或者，如果您的 AdGuard 帳戶是使用相同的電子郵件地址註冊的，則可以透過 Google 或 Facebook 進行操作。

## 主畫面

主畫面反映 VPN 狀態（已連線/已中斷連線）。 還有 *連線/斷開* 按鈕和可用伺服器清單。

每個伺服器都有其位置和 ping 速率，描述伺服器的回應時間。 該速率越低，連線速度越快。 最快的伺服器總是出現在清單的頂部，該清單由數十個國家/地區的 50 多個位置組成。 您可以點擊 *連接* 按鈕或選擇一個位置來連接到最快的伺服器。

## 排除

我們已盡一切努力讓您輕鬆管理您的網站和應用程式排除清單。 AdGuard VPN 只能在您選擇的地方運作。

### 排除清單

排除清單可讓您管理特定網站和應用程式的 VPN 連線。 若要存取 *排除*，請點選螢幕底部左側的第二個圖示。 若要存取 *排除* 部分，請點選螢幕底部左側的第二個圖示。

預設情況下，AdGuard VPN 適用於除添加到排除項之外的所有網站和應用程序，但您可以輕鬆切換到其他模式。

#### 對於網站

您可以透過三種方式將網域（例如 `google.com`）或子網域（例如 `*.google.com`）新增至*例外*中：

- 在應用程式中手動輸入
- 透過與 AdGuard VPN 分享網站，直接從瀏覽器添加它
- 從內建服務清單中新增它

![排除](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

手動新增域名有一些細微差別。 例如，如果您手動排除網域 `yahoo.com`，所有 `*.yahoo.com` 子網域名也會在排除項中列出。 不過，網域名稱與其他頂級網域，例如 `yahoo.jp` 或 `yahoo.fr`，將不會被排除在外。 或者您可以將 `youtube.com` 新增至排除項，但同一服務的網域名稱 `youtu.be` 將不會進入清單。 在這種情況下，使用內建服務清單會更安全，因為我們將與每個平台相關的所有子網域都放在其中。

:::

由於您可以在服務清單中啟用子網域，因此我們新增了反映每個服務狀態的方塊- 您可以在每個服務名稱左側的 *排除* 主畫面上看到它們：

- **完全啟用** 由綠色背景上的白色複選標記表示
- **部分啟用** （啟用沒有主域的子域）在白色背景上以綠色方塊標記
- **完全停用** 標有空白複選框

 好消息：如果您刪除或停用了任何域名，您可以隨時返回服務清單的預設視圖。

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

另一個有用的功能是 *導入/匯出排除*。 只需四個步驟即可達到目標：

1. 在要匯出排除清單的裝置/瀏覽器中開啟 AdGuard VPN。 找到適當的部分並點選 *匯出* 按鈕。 將下載 `adguard_vpn_exclusions.zip` 存檔。
2. 存檔內有兩個 `.txt` 文件，每個列表一個。 在其中新增更多排除項、刪除現有排除項、重新命名檔案（稍後會詳細介紹），或僅保留檔案中的檔案。
3. 在不同裝置之間傳輸時，請勿忘記將 `.zip` 檔案傳送至裝置進行匯入。 例如，如果您將排除清單從 Windows 裝置匯入到 Android，請確保事先將 `.zip` 檔案傳送到您的 Android。
4. 在要匯入檔案以及準備好的排除清單的裝置上開啟 AdGuard VPN。 找到適當的部分，點選 *匯入* 按鈕並選擇存檔。

![匯入/匯出 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### 對於應用程式

正如我們上面提到的，不僅網站可以輕鬆添加到排除項中。 選擇哪些應用程式需要 AdGuard VPN，哪些應用程式不需要。

在 *整合模式*下，您只能透過 AdGuard Ad Blocker 管理應用程式。

![應用程式排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## 設定

您可以按下螢幕右下角的齒輪圖示來存取 *設定* 。 第一部分是 *應用程式設定*：根據需要選擇不同的選項來設定適用於 Android 的 AdGuard VPN。

![應用程式設定 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN 自動啟動

滑桿切換到右側可在裝置啟動後啟用 AdGuard VPN 自動啟動。

### DNS 伺服器

DNS 伺服器將網站名稱轉換為瀏覽器可以理解的內容，也就是 IP 位址。 AdGuard VPN for Android 提供多種 DNS 伺服器選擇，每個都具有特殊的品質。 例如， [AdGuard DNS](https://adguard-dns.io/kb/) 可刪除廣告並保護您的裝置免遭跟踪，而 AdGuard DNS Family Protection 將 AdGuard DNS 的功能與安全搜尋和成人內容封鎖相結合。 還有一個選項可以新增自訂 DNS 伺服器。

### 自動防護

當您的裝置連接到蜂窩網路或 Wi-Fi 網路時，此功能會自動啟用 AdGuard VPN。

### 終止開關（Kill Switch）

您可以按照螢幕上的簡單說明在 Android 裝置上設定 Kill Switch 功能。 為什麼要這樣做？ 如果您的 VPN 連線因某種原因在您使用行動網路或公共 Wi-Fi 時突然斷開，Kill Switch 將自動終止網路連接，從而防止攻擊者竊取您的資訊。

請注意，如果關閉開關打開， *應用程式設定* 和 *排除* 將無法運作。

### 主題

您可以選擇應用程式的系統預設、系統動態、深色或淺色主題。

![系統動態主題 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![淺色主題 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![深色主題 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### 進階設定

在 *進階設定*中，您可以找到四個部分。

*操作模式* 允許您指定流量的路由方式。 共有三種模式：VPN、SOCKS5、整合模式。 在 *VPN* 模式下，所有流量都透過 AdGuard VPN 路由。 在 *SOCKS5* 模式下，AdGuard VPN 運行本地代理伺服器，其他應用程式可以使用該伺服器進行流量路由。 *整合模式* 允許 AdGuard VPN 和 AdGuard Ad Blocker 協同工作。

:::note

某些 AdGuard VPN 功能在 *整合模式*中被停用：DNS 伺服器、終止開關、自動保護和應用程式排除。 您可以在 AdGuard Ad Blocker 應用程式中管理 DNS 保護並透過 AdGuard VPN 代理程式路由應用程式。

:::

接下來的兩部分是 *日誌記錄等級* 和 *診斷資訊*。 關於第一個選項，除非我們的支援團隊要求，否則不建議啟用擴充或極端日誌記錄等級。 如果出現任何技術問題，可以將診斷資訊、本地儲存的有關設備和連接的技術資訊（IP 位址、ID、ping 等）發送給我們。

*進階設定* 的最後一部分是 *低階設定*。 我們強烈建議您不要進入此部分，除非您非常合格或我們的支援團隊要求您這樣做。 這裡可以在 VPN 介面上啟用 TUN 介面日誌記錄或 IPv6 協議，選擇應使用的代理伺服器連接埠或 Internet 協定版本。

:::note 兼容性

*啟用 IPv6* 選項僅適用於支援 IPv6 的網路。

:::

### 支援

在 *支援* 部分，您可以留下回饋、報告錯誤或匯出日誌和系統資訊以進一步提交到幫助台。
