---
title: 與 AdGuard 廣告攔截器的兼容性
sidebar_position: 4
---

AdGuard VPN 有兩種操作模式： *VPN* 和 *整合*。

默認情況下，*VPN* 模式已啟用並使用 [AdGuard VPN 協定](/general/adguard-vpn-protocol)。 它提供了連接速度和安全性的最佳組合。 但是，此操作模式不允許 AdGuard VPN 和 AdGuard Ad Blocker 同時運作。

*整合模式*反過來，使用 IPsec 協議，這使得 AdGuard 應用程式可以協同工作。

如果您在安裝 AdGuard VPN 時已經安裝了 AdGuard 廣告攔截器，此模式將自動開啟並允許您同時使用我們的兩個應用程式。

如果您先安裝了 AdGuard VPN，然後才決定嘗試 AdGuard 廣告攔截器，請按照以下步驟一起使用兩個應用程式：

1. 開啟適用於 iOS 的 AdGuard VPN，然後點選畫面右下角的設定 ⚙ 圖示。

2. 點選 *常規* → *操作模式*。

3. 將模式從 *VPN* 切換到 *整合*。 完成！

:::note

在 *整合模式* 中，*例外* 和 *DNS 伺服器* 不可用。

:::
