---
title: 'AdGuard VPN 與 Chromecast 的兼容性'
sidebar_position: 5
---

內建 Chromecast 技術與執行 VPN 不相容，因為它使用 [DLNA 協定](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) 不支援 VPN 連線。 這意味著，如果 Chromecast 裝置和運行 VPN 的智慧型手機或平板電腦位於同一 Wi-Fi 網路上，在大多數情況下，行動裝置將無法識別 Chromecast。

谷歌還通過限制訪問其DNS設置來阻止更改Chromecast的網路設置。 這也阻止了Chromecast與VPN一起使用。

您可以通過在路由器上設置 VPN 來解決問題。 這將允許連接到路由器的所有裝置使用 VPN 連接，包括 Chromecast。 但請記住：在路由器上設定 VPN 可能需要額外的知識，因此請閱讀製造商的手冊。
