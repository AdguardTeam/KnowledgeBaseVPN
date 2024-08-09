---
title: 功能概述
sidebar_position: 1
---

## 什麼是 iOS 版 AdGuard VPN？

VPN 可讓您建立與 Internet 上另一個網路的安全連線。 它將使用者的電腦或行動裝置連接到伺服器，並允許使用者使用「隱藏」IP 位址瀏覽網際網路。 如果 VPN 伺服器位於另一個國家/地區，則您的網路連線將顯示為是從該國家/地區建立的。 有關更多詳細信息，您可以查看[我們有關 VPN 工作原理的文章](/general/how-vpn-works)。

AdGuard VPN 有以下幾個功能：

- 隱藏您的真實行踪並幫助您保持匿名
- 更改您的 IP 位址以保護您的資料免遭追蹤
- 加密您的流量並使詐騙者無法存取內容
- 允許您設定在何處使用 VPN 以及在何處不使用（排除功能）

AdGuard VPN for iOS的下一個優勢是我們自己的VPN協定。 與其他 VPN 協定相比，它極難檢測，並且即使在網路連線較差的情況下也很穩定。 [以了解更多有關 AdGuard VPN 協定的資訊](/general/adguard-vpn-protocol)。

## 如何使用 AdGuard VPN for iOS

若要使用 iOS 版 AdGuard VPN，首先您需要登入 [AdGuard 帳號](https://my.adguard.com/)。 您可以直接使用您的 AdGuard 帳戶憑證登錄，也可以透過 Google、Apple ID 或 Facebook（如果您的 AdGuard 帳戶是使用相同電子郵件地址註冊的）登入。

如果您還沒有 AdGuard 帳戶，則必須先建立它。

使用 AdGuard VPN 非常簡單。 在主畫面上，您可以看到*連線*（*中斷連線*）按鈕和可用伺服器清單（我們稱之為*位置*）。 每個伺服器都有自己的位置（某個國家和城市）和 ping 指示器。

Ping 顯示伺服器的回應時間（以毫秒為單位）。 這表示當您連接到該位置時 VPN 連線的速度。 選擇 ping 為 22 ms 的伺服器表示傳送到該伺服器的封包將在 22 ms 內傳回。

透過 AdGuard VPN，您可以從數十個國家的 50 多個地點進行選擇。

![主螢幕和位置 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## 排除

您可以通過點擊底部欄中的第二個圖示找到“排除項”選項卡。 在那裡您將看到兩個排除列表，分別用於 *常規* 和 *選擇性* 模式。

在*常規模式*下，VPN對所有網站均有效，排除例外。 相反，在 *選擇性* 模式下，VPN 僅適用於清單中的網站。

您可以透過兩種方式將網站的網域（例如 `google.com`）或子網域（例如 `*.google.com`）新增至列表中:

- 在應用程式中手動輸入它們
- 透過與 AdGuard VPN 分享所需頁面，直接從瀏覽器新增它們

![排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### 導入/匯出排除

另一個有用的功能是排除清單的導入和匯出。 這樣您就可以與其他裝置共用排除清單。

您可以透過四個步驟來完成：

1. 在要從中匯出排除清單的裝置上開啟 AdGuard VPN。 找到適當的部分並點選 *匯出* 按鈕。 `exclusions.zip` 存檔將被下載。

2. 存檔內有兩個 `.txt` 文件，每個常規清單和選擇性清單各一個。 在其中新增更多排除項、刪除現有排除項、重新命名檔案（稍後會詳細介紹），或僅保留檔案中的檔案。

3. 在不同裝置之間傳輸時，請勿忘記將 `.zip` 檔案傳送至裝置進行匯入。 例如，如果您將排除清單從 iOS 裝置匯入到 Mac，請確保事先將 `.zip` 檔案傳送到您的 Mac。

4. 在要匯入檔案以及準備好的排除清單的裝置上開啟 AdGuard VPN。 找到適當的部分，點選 *匯入* 按鈕並選擇存檔。

**在 AdGuard VPN for iOS 中，可以點選排除畫面右上角的三點圖示**來存取匯出和匯入功能。

![導入/匯出排除 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## 一般設定

開啟一般設定:

1. 點選應用程式主畫面右下角的設定圖示 (⚙)。
2. 點選 *一般*。

在這裡，您可以使用不同選項配置 AdGuard VPN，以符合 iOS 的需求: *DNS 伺服器*、*主題*、*進階*、*傳送技術和互動資料*和*終止開關*。

![一般設定 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS 伺服器

AdGuard VPN for iOS 提供多個 DNS 伺服器之間的選擇，每個伺服器都有自己的特殊品質。 例如，AdGuard DNS 可刪除廣告並保護您的裝置免遭跟踪，而 AdGuard DNS Family Protection 將 AdGuard DNS 的功能與安全搜尋和成人內容封鎖相結合。 不同 DNS 提供者提供的 DNS 伺服器的工作速度也可能更快或更慢，這取決於您的位置、ISP 和其他因素。 選擇最適合您的一種。 您可以 [了解更多關於DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) 及其特性。

![DNS 伺服器頁面 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### 主題

您可以將應用程式主題設定為「系統」、「深色」或「淺色」（在 iOS 13 或更高版本中可用）。

### 進階設定

在*進階*設定中，您可以找到4個部分 — *運作模式*、 *日誌等級*、*匯出日誌和系統資訊*，以及*診斷資訊*。

#### 運作模式

適用於 iOS 的 AdGuard VPN 可以以兩種模式運作： **VPN** 和 **整合**。

*VPN* 模式使用 [AdGuard VPN 協定](/general/adguard-vpn-protocol)，提供速度和安全性的最佳組合。 在此模式下，AdGuard VPN 無法與 [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html)搭配使用。

在 **整合模式**中，AdGuard VPN 將能夠使用 IPSec 協定與 AdGuard Ad Blocker for iOS 同時運作。 該協議也很安全，但速度較慢且更容易檢測。 您無需執行任何操作即可設定整合：只需安裝兩個應用程式並切換到此模式即可。

:::note

在 **整合** 模式下，您無法使用排除功能或選擇 DNS 伺服器。

:::

#### 日誌等級

此設定主要用於調試和故障排除目的。 擴展和極端日誌記錄層級記錄更詳細的信息，可以幫助識別和修復各種問題或錯誤。

:::caution

**除非我們的支援團隊要求**，否則不建議啟用擴展或極端日誌記錄等級。

:::

#### 匯出記錄和系統資訊

此選項可用於將應用程式的日誌和系統資訊傳送給我們的支援人員或其他任何人。

#### 診斷資料

此選項可讓您匯出有助於解決問題的技術訊息，有時我們的支援人員和開發人員會要求這些資訊。

### 傳送技術資料和相互作用資訊

By turning this option on, you are helping us understand better how users interact with the app. 我們使用這些資訊來改善用戶體驗。

### 終止開關（Kill Switch）

如果您的 VPN 連線因某種原因而突然斷開， *Kill Switch* 將自動終止網路連接，確保您的資料不會洩露並且您的身分保持隱藏。

## 快速操作

快速操作是一種無需打開應用程式即可從主螢幕執行有用操作或任何特定於應用程式的操作的便捷方法。

若要存取快速操作選單，請點擊並按住 AdGuard VPN 應用程式圖標，然後鬆開手指。 在開啟的選單中，您將看到AdGuard VPN 的快速操作： *連線* （*斷開連接*）和 *選擇位置*。 您還可以存取所有預設操作，例如刪除應用程式或移動或共用應用程式。

![快速操作 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## 支援

支援畫面（*設定* → *支援*）具有許多有用的功能： *常見問答集*、*回報問題*、*請求功能*和*評分應用程式*。 後者可讓您在 App Store 上對 iOS 版 AdGuard VPN 進行評分。

![支援 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## 訂閱頁面

如果您使用免費版本的 AdGuard VPN，底部選項卡欄上會出現另一個帶有箭頭圖示的選項卡。 本節簡要介紹該應用程式付費版本的主要優點。 您可以選擇按年或按月訂閱。

![訂閱 *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
