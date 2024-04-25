---
title: 如何在路由器上設定 AdGuard VPN
sidebar_position: 8
---

透過在路由器上設定 AdGuard VPN，您可以保護無法安裝 VPN 應用程式的裝置（例如智慧電視和遊戲機）上的資料。

:::note

只有當您訂閱了 AdGuard VPN 並且您的路由器支援 IPsec 時，此選項才可用。

:::

## 如何在路由器上設定 AdGuard VPN

1. 在您的 [AdGuard 帳號](https://auth.adguard.com/login.html) 中，選擇 AdGuard VPN。

2. 在_裝置_下，按一下_新增路由器_。

   ![新增路由器\*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. 選擇所需的 VPN 伺服器位置並產生憑證。

   ![產生憑證 \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::筆記

   接下來的步驟可能會有所不同，具體取決於您的路由器。 我們以 Keenetic 路由器為例。

   :::

4. 在您的管理頁面中，前往路由器設定

5. 啟用 _VPN 用戶端_ 並點擊 _新增 VPN 伺服器_

6. 選擇 IPsec-client（可能稱為 IKE；而不是 L2TP/IPsec）。

7. 輸入您在步驟 3 中建立的憑證

   ![輸入憑證 \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. 將設備連接到路由器

:::note

如果您想變更 VPN 伺服器位置，則需要更新路由器設定。

:::

## 為什麼在路由器上設定 AdGuard VPN 可能有用

- 透過路由器上的 AdGuard VPN，您的 VPN 提供者或其他任何人都無法存取您的網路活動
- 在路由器上安裝 AdGuard VPN 可保護您的整個網絡，這表示連接到該網路的所有裝置都受到保護
- 您可以在無法安裝 AdGuard VPN 應用程式的裝置上增強安全性並保護您的資料 - 智慧型電視（目前，AdGuard VPN 僅在 Android TV 上可用）和遊戲機
