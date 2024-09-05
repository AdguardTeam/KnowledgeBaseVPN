---
title: 如何為 iPhone 和 iPad 應用程式設定 AdGuard VPN 自動化
sidebar_position: 2
sidebar_label: 如何設定 AdGuard VPN 自動化
---

適用於 iOS 的 AdGuard VPN 中沒有應用程式排除項。 然而，有一種方法可以為 iPhone 和 iPad 上的應用程式實現 AdGuard VPN 的自動化。

## Configuring automatic connection to VPN

如果您需要為一個或多個應用程式使用 VPN，請將 AdGuard VPN 設定為在您開啟和關閉它們時自動開啟和關閉。 前往排除選項卡，選擇常規模式並依照指示進行操作。 在這裡，我們描述瞭如何為 Twitter 建立自動化，但您可以選擇任何其他應用程式。

![操作說明。 第1部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. 從 App Store 下載 [ *捷徑* 應用程式](https://apps.apple.com/us/app/shortcuts/id915249334) 並透過點擊時鐘圖示前往 *自動化* 部分螢幕底部。
2. 點擊 *建立個人自動化* 按鈕，然後在開啟的清單中找到 *應用程式* 並點擊它。
3. 在下一個視窗中，請確保選擇 *已開啟* 選項，然後點擊 *選擇* 選擇應用程式。

![操作說明。 第2部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. 開始輸入應用程式的名稱（在我們的例子中是 Twitter）並選擇它。 點選畫面右上角的 *完成*，然後點選 *下一步* 。 在開啟的視窗中，點選 *新增操作*。

![操作說明。 第3部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. 開始輸入“AdGuard VPN”並選擇 AdGuard VPN 應用程式。 在新視窗中點選 *設定 VPN 連線*。

![操作說明。 第4部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. 確保變數顯示 *開啟* VPN 連線 *開啟* 並點選 *下一步*。
7. 在下一個視窗中，將 *運行前詢問* 選項旁邊的滑桿移動到非活動位置。 確認您的選擇，然後點選 *完成*。

現在您有一個新場景：當您啟動 Twitter 應用程式時，AdGuard VPN 將自動啟用。 現在您需要建立另一個命令，使 AdGuard VPN 在您關閉應用程式時自動關閉。

## Configuring automatic disconnection from VPN

![操作說明。 第1部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. 在相同的*捷徑*應用程式中開始創建一個新的自動化：點擊*自動化* → *建立個人自動化* → *應用程式*。
2. 確保選擇 *已關閉* 選項，並取消選取相鄰選項下方的方塊。 然後點選 *選擇*。

![操作說明。 第2部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. 開始輸入 *Twitter* 並選擇應用程式。 然後點選畫面右上角的 *完成* 。 點選 *新增操作* 並選擇 AdGuard VPN。

![操作說明。 第3部分](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. 在新視窗中點選 *設定 VPN 連線*。
5. 然後點選單字 *On* 使其改為單字 *Off*，然後點選上方的 *Next* 螢幕右上角。
6. 停用 *運行前詢問* 選項並確認您的選擇。 然後點選畫面右上角的 *完成* 。

完成！ 現在，每次開啟 Twitter 應用程式時，AdGuard VPN 都會在您的裝置上啟用，並在您關閉應用程式時停用。 您可以對任何其他應用程式重複相同的步驟。
