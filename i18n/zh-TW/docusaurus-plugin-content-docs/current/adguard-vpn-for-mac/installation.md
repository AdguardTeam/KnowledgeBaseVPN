---
title: 安裝和移除
sidebar_position: 2
---

## 系統需求

**作業系統版本**: macOS 10.15（64 位元）或更高版本

**RAM**：至少 2 GB

**可用磁碟空間**: 120 MB

## 如何安裝適用於 Mac 的 AdGuard VPN

1. 要安裝AdGuard VPN for Mac，只需跟著[這個連結](https://agrd.io/mac_vpn)或開啟瀏覽器，在位址欄輸入*adguard-vpn.com*，然後在打開的頁面點擊*下載*。 ![從官方網站下載 AdGuard VPN](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. 等待 *AdGuardVPN.dmg* 檔案下載完成，然後在「下載」資料夾中開啟。
3. 等待安裝程式視窗開啟。 雙擊其中的圖示。 ![程式安裝視窗 *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. 當您首次啟動 AdGuard VPN 時，作業系統會在螢幕上顯示警告，提示該應用程式已從 Internet 下載。 點選 *開啟*。
5. 然後點選 *繼續* 和 *安裝*。

![點擊繼續](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![點擊安裝](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. 等待安裝程式下載必要的檔案。

Mac 版 AdGuard VPN 已安裝！

## 如何解除安裝 AdGuard VPN for Mac

### 標準解除安裝

若要解除安裝 AdGuard VPN for Mac，請執行兩個簡單的步驟：

1. 打開“Finder”並轉到“程式”部分。

2. 從清單中選擇 *AdGuard VPN* ，右鍵單擊它，然後按 *移至垃圾箱*。

![標準解除安裝](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### 進階解除安裝

有時，由於刪除不正確或在其他罕見情況下，標準卸載可能不夠。 在這種情況下，我們的支援人員可能會要求您執行進階卸載，以從您的 Mac 上完全刪除 AdGuard VPN。 為此，請執行以下操作：

1. 請依照 [「標準卸載」](#how-to-uninstall-adguard-vpn-for-mac)部分所述的步驟進行操作。
2. 開啟“Finder”或“Spotlight”，然後在搜尋中輸入 `Keychain` 。 ![進階解除安裝 輸入鑰匙串](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. 點擊找到的程式的圖標，然後在搜尋中輸入 `com.adguard.mac.vpn` 。 如果搜尋結果中有該記錄，則將其刪除。
4. 返回“Finder”或“Spotlight”並輸入 `Terminal`。 ![進階解除安裝 輸入終端](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. 開啟程式並輸入指令 — `預設刪除 com.adguard.mac.vpn`
6. 按下 *空格鍵* 並輸入另一個命令 — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`

AdGuard VPN 已從您的 Mac 中完全刪除。

您可以在 [這篇文章](/adguard-vpn-for-mac/overview)中了解有關 AdGuard VPN for Mac 的更多資訊。
