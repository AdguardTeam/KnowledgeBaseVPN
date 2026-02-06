---
title: So funktioniert VPN
sidebar_position: 1
---

Um zu verstehen, wie AdGuard VPN funktioniert, sollten Sie zunächst die allgemeinen Prinzipien des VPN-Dienstes verstehen.

<iframe width="560" height="315" class="youtube-video" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN-Funktionen

Ein VPN ist ein virtuelles privates Netzwerk, mit dem Sie Ihren Standort verbergen und Ihre Daten im Internet schützen können. Ein VPN verbindet einen Computer oder ein Mobilgerät mit einem VPN-Server und verwendet die IP-Adresse dieses Servers. Dies vermittelt den Eindruck, dass Sie sich an einem anderen Ort befinden. Dadurch können Sie sicher auf verschiedene Internetressourcen zugreifen und Ihre persönlichen Daten schützen.

Auf diese Weise erfüllt ein VPN zwei wichtige Funktionen:

1. **Wahrung der Anonymität**

   Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. Beispielsweise kann einer der von Ihnen besuchten Online-Shops Ihren Suchverlauf speichern und Ihnen darauf basierend seine Produkte durch gezielte Werbung anbieten. Oder die Geheimdienste, die Ihren Standort über die IP-Adresse Ihres Geräts erfahren und Ihre Identität festgestellt haben, können Ihre Aktivitäten im Internet heimlich überwachen. Darüber hinaus können Webbrowser und Internetdiensteanbieter Ihren Browserverlauf für ihre eigenen Zwecke nutzen, ihn an Werbetreibende verkaufen und ihn an Regierungsbehörden weitergeben. Mit VPN können Sie Ihre IP-Adresse verbergen und sie durch die IP-Adresse des VPN-Servers ersetzen, mit dem Sie verbunden sind. Auf diese Weise können Sie Ihre Privatsphäre wahren und anonym nach Informationen im Internet suchen.

2. **Datenschutz**

   Wenn Sie eine Verbindung zu einem unzuverlässigen oder öffentlichen Netz herstellen, können die Daten auf Ihrem Gerät für Cyberkriminelle angreifbar werden. Bank card details, usernames and passwords, passport data — all this data can be intercepted by online fraudsters. Der VPN-Tunnel verschlüsselt die Informationen, die Sie an das Internet senden und aus dem Internet empfangen, so dass sie in den falschen Händen unbrauchbar sind.

## VPN-Struktur

Wenn Sie sich mit einem Netzwerk verbinden, wird Ihrem Computer oder Mobilgerät eine eindeutige ID-Nummer oder IP-Adresse zugewiesen. Es besteht normalerweise aus Zahlen von 0 bis 255, die durch Punkte oder Doppelpunkte getrennt sind. Wenn man diese Sequenz kennt, kann man die Geolokalisierung des Geräts bestimmen. Die IP-Adresse wird in der Regel von Ihrem Internetanbieter zugewiesen und ist bis zur gewünschten Ressource sichtbar. Aus diesem Grund kann der Webserver der Website, die Sie besuchen, Ihre IP-Adresse registrieren und aufzeichnen, was Sie angefordert haben. Dieser Datensatz kann dann hauptsächlich zur Datenerfassung und Verkehrsanalyse verwendet werden.

Ein VPN erstellt einen Tunnel zwischen Ihrem Gerät und dem VPN-Server. Ihre Daten durchlaufen diesen Tunnel, werden verschlüsselt und gelangen dann in gesicherter Form ins offene Internet. Der Webserver registriert also die IP-Adresse des Endpunktes des Tunnels, also des VPN-Servers, und damit nicht die tatsächliche IP-Adresse des Gerätes. Die Website, auf die Sie nach dem Durchqueren des VPN-Tunnels gelangen, wird also die Geolocation des von Ihnen gewählten VPN-Servers als Ihren tatsächlichen Standort betrachten. Und die verschlüsselten Daten fallen nicht in die Hände von Werbetreibenden, Hackern und Sicherheitsdiensten.

![VPN-Struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Arten der VPN-Protokolle

VPN security protocols are tools that encrypt data in a VPN tunnel and allow you to maintain user privacy in the open Internet. At the moment, the vast majority of modern VPN services use one of the following three VPN protocols:

1. [_IPSec_](https://en.wikipedia.org/wiki/IPsec). One of its main advantages is that it is available on most devices and operating systems and provides a high level of security. However, the use of double [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_\(networking\)) in this protocol may result in a lower connection speed.

2. [_OpenVPN_](https://en.wikipedia.org/wiki/OpenVPN). This modern protocol is open source, so third-party manufacturers can improve and update the technology.

3. [_WireGuard_](https://en.wikipedia.org/wiki/WireGuard). Its main advantages are ease of use, high efficiency and low vulnerability to attacks.

In addition to these VPN protocols, there are others (for example, TLS, SSTP, IKEv2), but they are unpopular or do not meet modern data encryption standards.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

AdGuard VPN uses [TrustTunnel](https://trusttunnel.org/) — a modern, open-source VPN protocol developed by us. One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, making it extremely difficult to detect and block. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## VPN drawbacks

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Lower speed

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, may impact the overall user experience of a VPN connection.

### Access blocking

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask themselves in such a way that they are only seen as regular traffic. Therefore, many attempts to reach a certain website via a VPN connection end in nothing.

### VPN connections breaking

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially with unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [_TrustTunnel_](https://trusttunnel.org/) — a modern, stealthy, and open-source VPN protocol developed by AdGuard VPN. It works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [_No-logging policy_](https://adguard-vpn.com/privacy.html), which means no personal data can be shared with third parties because AdGuard VPN never collects such data

- _More than 85 VPN servers in dozens of countries_

- _Ease of use and extensive customization options_

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Edge, Firefox, and Opera

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

- Command-line interface for [Linux, Mac, and some routers](/adguard-vpn-for-linux/)

- A VPN client for [routers](/general/set-up-adguard-vpn-on-your-router/)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
