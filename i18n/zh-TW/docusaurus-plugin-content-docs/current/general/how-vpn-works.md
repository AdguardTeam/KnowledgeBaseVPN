---
title: VPN 如何運作
sidebar_position: 1
---

要了解 AdGuard VPN 的工作原理，您應該先了解一般 VPN 服務的工作原理。

## VPN 的功用

VPN 是一種虛擬私人網路，它可隱藏您的的位置並在網上保護您的資料。 VPN 將電腦或行動裝置連接到 VPN 伺服器，並使用該伺服器的 IP 位址使外部觀察者覺得您在另一個地方。 這允許您可以安全地訪問各種網絡資源並保護您的的個人資料。

而這樣，VPN 發揮了兩個重要的功用：

1. **保持用户匿名**

透過存取互聯網，使用者留下了他們的數碼腳印，它們可供第三方分析和利用。 例如，您瀏覽過的網上商店可以儲存您的搜尋記錄，然後透過它們用目標式廣告向您提供產品。 或者某些神秘的服務，透過您裝置的 IP 位址了解您的位置並確認您的身份後，可以秘密監視您的網上活動。 此外，網頁瀏覽器和互聯網服務供應商亦可以為了自己的目的而使用您的瀏覽記錄，或將其出售予廣告公司並交給政府機構。 VPN 允許您隱藏您的 IP 位址，並將其替換為您所連接的 VPN 伺服器的 IP 地址。 通過這種方式，您能夠保護您的隱私並在網絡匿名搜尋信息。

2. **保護資料**

如果您連接到不可靠或公共網路，您的裝置上的資料可能容易受到網絡罪犯的攻擊。 銀行卡詳細資料、使用者名稱和密碼、護照資料——這些資料都可能被網上騙徒截獲。 VPN 隧道加密您在網上發放和接收的信息，因此它們不會落入壞人手中。

## VPN 的結構

當您連接到網路時，您的電腦或行動裝置會被分配一個獨特的 ID 號碼或 IP 位址。 它通常由 0 到 255 之間的數字組成，用點或冒號分隔。 知道這個序列，就可以確定到裝置的地理位置。 IP 位址通常由您的互聯網服務供應商設置，並且它對於所需要被存取的資源一直可見。 For this reason, the web server of the site you are visiting can register your IP address and record what you have requested. This record can then be used primarily for data collection and traffic analysis.

A VPN creates a tunnel between your device and the VPN server. Your data goes through this tunnel, gets encrypted and then enters the open Internet in a secure form. Therefore, it will seem to the web server that your device has no longer your real IP address, but the IP address of the endpoint of the tunnel, that is, the VPN server. Thus, the site that you get to after passing through the VPN tunnel will consider the geolocation of the VPN server you selected as your real location. And the encrypted data will not fall into the hands of advertisers, hackers and security services.

![VPN structure](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Types of VPN protocols

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in an open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in this protocol may result in a lower connection speed.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). This modern protocol is open source, so third-party manufacturers can improve and update the technology.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Its main advantages are ease of use, high efficiency and low vulnerability to attacks.

In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards.

![How a VPN protocol works](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN also has its own [*protocol*](adguard-vpn-protocol.mdx). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

![How concealed VPN works](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## VPN 的缺點

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

**Lower speed**

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

**Access blocking**

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

**VPN connections breaking**

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](why-adguard-vpn.md):

* [*Proprietary VPN protocol*](adguard-vpn-protocol.mdx), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

* [*"No-logs" policy*](https://adguard-vpn.com/en/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

* *More than 50 VPN servers in dozens of countries*

* *Ease of use and extensive customization options*

Currently, AdGuard VPN is available as:

* [Browser extension](../adguard-vpn-browser-extension/overview.md) for Chrome, Firefox, and Edge

* Mobile app for [Android](../adguard-vpn-for-android/overview.md) and [iOS](../adguard-vpn-for-ios/overview.md)

* Desktop application for [Windows](../adguard-vpn-for-windows/overview.md) and [Mac](../adguard-vpn-for-mac/overview.md)

You can learn more about AdGuard VPN features (including the unlimited version) [here](https://adguard-vpn.com/en/welcome.html).
