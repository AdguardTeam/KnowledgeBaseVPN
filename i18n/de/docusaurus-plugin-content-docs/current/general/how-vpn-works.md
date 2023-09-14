---
title: Wie VPN funktioniert
sidebar_position: 1
---

Um zu verstehen, wie AdGuard VPN funktioniert, sollten Sie zunächst die allgemeinen Prinzipien des VPN-Dienstes verstehen.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VPN-Funktionen

A VPN is a virtual private network that helps hide your location and protect your data on the Web. Ein VPN verbindet einen Computer oder ein Mobilgerät mit einem VPN-Server und verwendet die IP-Adresse dieses Servers. Dies vermittelt den Eindruck, dass Sie sich an einem anderen Ort befinden. Dadurch können Sie sicher auf verschiedene Internetressourcen zugreifen und Ihre persönlichen Daten schützen.

Auf diese Weise erfüllt ein VPN zwei wichtige Funktionen:

1. **Maintaining anonymity**

    Using an Internet connection, the user leaves their digital footprint, which can then be analyzed and used by third parties. For example, one of the online stores that you have visited can save your search history and then offer you their products based on it through targeted advertising. Or the secret services, having learned your location through the IP address of your device and having determined your identity, can secretly monitor your activity on the web. In addition, web browsers and ISPs themselves can use your browsing history for their own purposes, as well as sell it to advertisers and provide it to government institutions. VPN allows you to hide your IP address and replace it with the IP address of the VPN server to which you are connected. This way you will be able to maintain your privacy and anonymously search for information on the web.

1. **Data protection** If you connect to an unreliable or public network, the data on your device may become vulnerable to cybercriminals. Bankkartendaten, Benutzernamen und Passwörter, Passdaten – all diese Informationen können von Online-Betrügern abgefangen werden. Der VPN-Tunnel verschlüsselt die Informationen, die Sie über das Internet senden und empfangen, sodass sie nicht in falsche Hände geraten können.

## VPN-Struktur

Wenn Sie sich mit einem Netzwerk verbinden, wird Ihrem Computer oder Mobilgerät eine eindeutige ID-Nummer oder IP-Adresse zugewiesen. Es besteht normalerweise aus Zahlen von 0 bis 255, die durch Punkte oder Doppelpunkte getrennt sind. Wenn man diese Sequenz kennt, kann man die Geolokalisierung des Geräts bestimmen. Die IP-Adresse wird normalerweise von Ihrem ISP festgelegt und ist bis zur gewünschten Ressource sichtbar. Aus diesem Grund kann der Webserver der Website, die Sie besuchen, Ihre IP-Adresse registrieren und aufzeichnen, was Sie angefordert haben. Dieser Datensatz kann dann hauptsächlich zur Datenerfassung und Verkehrsanalyse verwendet werden.

Ein VPN erstellt einen Tunnel zwischen Ihrem Gerät und dem VPN-Server. Ihre Daten durchlaufen diesen Tunnel, werden verschlüsselt und gelangen dann in gesicherter Form ins offene Internet. Für den Webserver sieht es daher so aus, als hätte Ihr Gerät nicht mehr Ihre echte IP-Adresse, sondern die IP-Adresse des Endpunkts des Tunnels, d. h. des VPN-Servers. Die Website, auf die Sie nach dem Durchqueren des VPN-Tunnels gelangen, wird also die Geolocation des von Ihnen gewählten VPN-Servers als Ihren tatsächlichen Standort betrachten. Und die verschlüsselten Daten fallen nicht in die Hände von Werbetreibenden, Hackern und Sicherheitsdiensten.

![VPN-Struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Arten der VPN-Protokolle

VPN-Sicherheitsprotokolle sind Hilfsmittel, die Daten in einem VPN-Tunnel verschlüsseln und es Ihnen ermöglichen, die Privatsphäre der Benutzer in einem offenen Internet zu wahren. Gegenwärtig verwenden die meisten modernen VPN-Dienste eines der folgenden drei VPN-Protokolle:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Einer der Hauptvorteile besteht darin, dass es auf den meisten Geräten und Betriebssystemen verfügbar ist und ein hohes Maß an Sicherheit bietet. Die Verwendung der doppelten [Verkapselung](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in diesem Protokoll kann jedoch zu einer geringeren Verbindungsgeschwindigkeit führen.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Dieses moderne Protokoll ist Open Source, sodass Dritthersteller die Technologie verbessern und aktualisieren können.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Seine Hauptvorteile sind Benutzerfreundlichkeit, hohe Effizienz und geringe Anfälligkeit für Angriffe.

Neben diesen VPN-Protokollen gibt es noch weitere (z. B. TLS, SSTP, IKEv2), die aber nicht sehr beliebt sind oder nicht den modernen Standards der Datenverschlüsselung entsprechen.

AdGuard VPN also has its own [*protocol*](/general/adguard-vpn-protocol). One of its advantages is that the traffic transmitted using the AdGuard VPN protocol is difficult to distinguish from the regular traffic. The VPN tunnel looks like normal HTTPS traffic, so it is extremely difficult to detect and block it. In addition, it is based on the mechanisms of the modern HTTP/2 protocol, which ensures high connection speed.

## VPN-Nachteile

Despite the obvious advantages, VPN is not perfect and has some disadvantages:

### Geringere Geschwindigkeit

Since your traffic does not go directly to the web server, but first passes through the VPN server, the speed of the VPN connection decreases. Other factors also affect the speed when using a VPN: the load of the VPN server, its bandwidth, the compatibility of the VPN protocol with your operating system. All these factors, as well as the speed of the network itself, can reduce the quality of your VPN connection.

### Zugriffssperre

Some online services make a lot of effort to detect VPN traffic and block access to VPN users. However, not many VPNs can mask their traffic as regular. Therefore, many attempts to go to a particular website without disabling VPN end up in nothing.

### Unterbrechung von VPN-Verbindungen

A weak signal, network overload, VPN incompatibility with a firewall, antivirus and other programs, an outdated VPN protocol — all this can cause a sudden failure in the VPN connection, especially by unreliable VPN providers.

## AdGuard VPN

Our VPN service has several important [advantages](/general/why-adguard-vpn):

- [*Proprietary VPN protocol*](/general/adguard-vpn-protocol), which works stably even with a slow Internet connection and disguises itself as normal traffic, making it more difficult to track and block it

- [*No-logging policy*](https://adguard-vpn.com/privacy.html), which means that AdGuard VPN does not collect your personal data and does not transfer it to third parties

- *Mehr als 50 VPN-Server in Dutzenden von Ländern*

- *Benutzerfreundlichkeit und umfangreiche Anpassungsmöglichkeiten*

Currently, AdGuard VPN is available as:

- [Browser extension](/adguard-vpn-browser-extension/overview) for Chrome, Firefox, and Edge

- Mobile app for [Android](/adguard-vpn-for-android/overview) and [iOS](/adguard-vpn-for-ios/overview)

- Desktop application for [Windows](/adguard-vpn-for-windows/overview) and [Mac](/adguard-vpn-for-mac/overview)

[Learn more about AdGuard VPN features](https://adguard-vpn.com/welcome.html)
