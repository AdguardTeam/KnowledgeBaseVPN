---
title: 如何收集和發送日誌
sidebar position: 1
---

如果您在使用 AdGuard VPN for Windows 時遇到任何問題，您可以告知我們。 如果您還發送應用程式日誌，我們將不勝感激，因為它們可以幫助我們更快地解決問題。

## 收集日誌

### 標準日誌

預設情況下，AdGuard VPN for Windows 使用標準日誌記錄級別，這是有關應用程式運行進程的資料的基本集合。 在傳送日誌之前，請開啟 AdGuard VPN for Windows，如果可能，請重複導致錯誤的操作。 請記下此錯誤發生的確切時間。

### 擴展日誌

在大多數情況下，預設日誌記錄等級足以追蹤可能的錯誤。 但在某些情況下，需要有關設備和連接的更詳細的技術信息，然後我們的支援團隊會要求您啟用擴展日誌記錄等級。 若要傳送此類日誌，請按照下列步驟操作：

1. 開啟 AdGuard VPN 並在上方選單中選擇**設定** → **應用程式設定** → **進階設定** → **記錄等級**。

1. 在 **日誌等級** 部分中，選擇 **記錄所有內容**。

    ![日誌記錄等級 *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. 重複導致錯誤的操作，並記下錯誤發生的時間。

1. 將日誌記錄等級切換回 **預設記錄**。

### 追蹤日誌

有時我們的支援團隊可能會要求您向他們發送追蹤日誌。 為此，您需要執行以下步驟：

1. 右鍵單擊托盤選單中的 AdGuard VPN 圖標，然後選擇 **退出 AdGuard VPN**。

    ![退出 *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    如果您看到警告訊息，請同意停止服務。

    ![注意 *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. 開啟控制台（在開始面板中鍵入 `cmd` ）。

1. 使用指令 `C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace` （如果您使用的是 64 位元 Windows）和 `C 執行應用程式:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace` 如果您使用的是32 位元。

1. 重現問題。 我們強烈建議您記下重現問題的確切時間：這將有助於我們的支援團隊找到相關日誌條目並更快地解決問題。

1. 匯出記錄的日誌： **支援** → **匯出日誌和系統資訊**。

如果您的日誌檔案很大，請不要擔心。 我們需要了解盡可能多的詳細資訊才能解決您的問題。

## 傳送日誌

若要將日誌傳送給我們的支援團隊，請按照以下步驟操作：

1. 點擊上方選單中的 **支援** → **報告錯誤**。

    ![報告錯誤 *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. 在開啟的表單中，輸入您的電子郵件地址並描述您發現的錯誤，包括發生的時間。 如果您無法重現問題，請盡可能具體地說明問題上次發生的時間。

    ![報告 *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. **傳送詳細系統資訊**旁邊有一個複選標記，這表示當您傳送報告時，您也會傳送日誌。

> 如果出於某種原因您以其他方式向我們發送日誌會更方便，您可以自行匯出它們。 為此，請前往 **支援** → **匯出日誌和系統資訊**。

![匯出 *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**注意**：如果您在嘗試匯出日誌時遇到任何問題，還有另一種方法。 請依照以下步驟操作：

1. 開啟資源管理器應用程式

1. 將 `%programdata%/adguardvpn` 貼到搜尋框中

1. 找到名為 **Logs**的資料夾

1. 存檔資料夾

1. 將其發送給我們的支援團隊
