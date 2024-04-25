---
title: '什麼是 DNS 洩漏'
sidebar_position: 9
---

安裝 VPN 後，您需要確保不會出現任何導致您去匿名化的洩漏。 AdGuard VPN 可靠地保護您的流量和資料免遭窺探。 然而，在某些情況下，您可能會懷疑我們的 VPN 服務中存在 DNS 洩漏。 我們將解釋這些擔憂從何而來以及為什麼它們是沒有根據的。

## 什麼是 DNS 洩漏？

當您使用 VPN 時，與 DNS 伺服器的連線可能會超出加密的 VPN 隧道，而 ISP 可能會看到您的流量。

換句話說，每次您開啟網站時，您的瀏覽器都會向 ISP 的 DNS 伺服器發送請求，並傳回所請求網站的 IP 位址。 透過這種方式，您的 ISP 可以看到您的所有線上活動並可以追蹤您。

## 如何偵測 DNS 洩漏

有各種匿名檢查服務可用於偵測 DNS 洩漏，例如 `whoer.net`。 這些網站的演算法尚不清楚，但他們的目的是——用想像中的洩密來嚇唬用戶，有可能讓他們出售他們的服務。

一些安全掃描網站認為用戶的IP位址與DNS伺服器的IP位址一致即為「良好」結果，顯示不存在洩漏。 實際上，這樣的匹配可能表明使用了 VPN。 當 VPN 被停用且要求傳送至 ISP 的 DNS 伺服器時，DNS 伺服器的 IP 位址與您自己的 IP 位址不一致。

## 為什麼 AdGuard VPN 沒有 DNS 洩漏

如果您在裝置上啟用 AdGuard VPN 並在任何掃描器網站上執行檢查，它會發現 DNS 查詢會前往 [AdGuard DNS](https://adguard-dns.io) 伺服器。 然而，這不能被視為洩漏。

AdGuard VPN 預設為使用非過濾 AdGuard DNS 伺服器。 這可確保您的查詢不會傳送至 ISP 的 DNS 伺服器，這表示您可以保持線上隱私和匿名。

此外，AdGuard DNS 是一項非常受歡迎的 DNS 服務，擁有超過 5,000 萬人使用。 這對你來說意味著什麼？ 想像以下情況：通常的 VPN 服務使用與 VPN 伺服器位於相同 IP 位址的 DNS 伺服器。 其用戶數勉強超過 1,000 人。

就 AdGuard DNS 而言，您將與 5000 萬用戶“合併”，因此沒有人能夠僅透過使用該 DNS 伺服器來追蹤您。

## 如何在 AdGuard VPN 中設定自訂 DNS 伺服器

有許多來自[知名 DNS 供應商](https://adguard-dns.io/kb/general/dns-providers)的熱門公共 DNS 伺服器。 其中一些只能履行其直接職責——提供所請求網域的 IP 位址，而另一些則可以做更多的事情。

例如，AdGuard DNS 可刪除廣告並保護您的裝置免遭跟踪，而 AdGuard DNS Family Protection 將 AdGuard DNS 功能與安全搜尋和家長監護結合在一起。

您可以選擇任何 DNS 伺服器並在 AdGuard VPN 中設定它：

- 在 AdGuard VPN for Windows 中：*設定* → *套用設定* → *DNS 伺服器*
- 在 AdGuard VPN for Mac 中：*設定* → *套用設定* → *DNS 伺服器*
- 在 Android 版 AdGuard VPN 中：*設定*（齒輪圖示）→ *應用程式設定* → *DNS 伺服器*
- 在 AdGuard VPN for iOS 中：*設定*（齒輪圖示）→ *應用程式設定* → *DNS 伺服器*
- 在 AdGuard VPN 瀏覽器擴充功能：漢堡選單圖示 → *設定* → *DNS 伺服器*
