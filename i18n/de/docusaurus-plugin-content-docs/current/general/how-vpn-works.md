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

   Über eine Internetverbindung hinterlässt der Nutzer seinen digitalen Fußabdruck, der dann von Dritten analysiert und genutzt werden kann. Beispielsweise kann einer der von Ihnen besuchten Online-Shops Ihren Suchverlauf speichern und Ihnen darauf basierend seine Produkte durch gezielte Werbung anbieten. Oder die Geheimdienste, die Ihren Standort über die IP-Adresse Ihres Geräts erfahren und Ihre Identität festgestellt haben, können Ihre Aktivitäten im Internet heimlich überwachen. Darüber hinaus können Webbrowser und Internetdiensteanbieter Ihren Browserverlauf für ihre eigenen Zwecke nutzen, ihn an Werbetreibende verkaufen und ihn an Regierungsbehörden weitergeben. Mit VPN können Sie Ihre IP-Adresse verbergen und sie durch die IP-Adresse des VPN-Servers ersetzen, mit dem Sie verbunden sind. Auf diese Weise können Sie Ihre Privatsphäre wahren und anonym nach Informationen im Internet suchen.

2. **Datenschutz**

   Wenn Sie eine Verbindung zu einem unzuverlässigen oder öffentlichen Netz herstellen, können die Daten auf Ihrem Gerät für Cyberkriminelle angreifbar werden. Bankkartendaten, Benutzernamen und Passwörter, Passdaten – all diese Informationen können von Online-Betrügern abgefangen werden. Der VPN-Tunnel verschlüsselt die Informationen, die Sie an das Internet senden und aus dem Internet empfangen, so dass sie in den falschen Händen unbrauchbar sind.

## VPN-Struktur

Wenn Sie sich mit einem Netzwerk verbinden, wird Ihrem Computer oder Mobilgerät eine eindeutige ID-Nummer oder IP-Adresse zugewiesen. Es besteht normalerweise aus Zahlen von 0 bis 255, die durch Punkte oder Doppelpunkte getrennt sind. Wenn man diese Sequenz kennt, kann man die Geolokalisierung des Geräts bestimmen. Die IP-Adresse wird in der Regel von Ihrem Internetanbieter zugewiesen und ist bis zur gewünschten Ressource sichtbar. Aus diesem Grund kann der Webserver der Website, die Sie besuchen, Ihre IP-Adresse registrieren und aufzeichnen, was Sie angefordert haben. Dieser Datensatz kann dann hauptsächlich zur Datenerfassung und Verkehrsanalyse verwendet werden.

Ein VPN erstellt einen Tunnel zwischen Ihrem Gerät und dem VPN-Server. Ihre Daten durchlaufen diesen Tunnel, werden verschlüsselt und gelangen dann in gesicherter Form ins offene Internet. Der Webserver registriert also die IP-Adresse des Endpunktes des Tunnels, also des VPN-Servers, und damit nicht die tatsächliche IP-Adresse des Gerätes. Die Website, auf die Sie nach dem Durchqueren des VPN-Tunnels gelangen, wird also die Geolocation des von Ihnen gewählten VPN-Servers als Ihren tatsächlichen Standort betrachten. Und die verschlüsselten Daten fallen nicht in die Hände von Werbetreibenden, Hackern und Sicherheitsdiensten.

![VPN-Struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Arten der VPN-Protokolle

VPN-Sicherheitsprotokolle sind Verfahren, die Daten in einem VPN-Tunnel verschlüsseln und es Ihnen ermöglichen, die Privatsphäre der Benutzer im offenen Internet zu wahren. Gegenwärtig verwenden die meisten modernen VPN-Dienste eines der folgenden drei VPN-Protokolle:

1. [_IPSec_](https://de.wikipedia.org/wiki/IPsec). Einer der Hauptvorteile besteht darin, dass es auf den meisten Geräten und Betriebssystemen verfügbar ist und ein hohes Maß an Sicherheit bietet. Die Verwendung der doppelten [Verkapselung](https://de.wikipedia.org/wiki/Datenkapselung_\(Netzwerktechnik\)) in diesem Protokoll kann jedoch zu einer geringeren Verbindungsgeschwindigkeit führen.

2. [_OpenVPN_](https://de.wikipedia.org/wiki/OpenVPN). Dieses moderne Protokoll ist quelloffen, so dass Hersteller von Drittanbietern die Technologie verbessern und aktualisieren können.

3. [_WireGuard_](https://de.wikipedia.org/wiki/WireGuard). Seine Hauptvorteile sind Benutzerfreundlichkeit, hohe Effizienz und geringe Anfälligkeit für Angriffe.

Neben diesen VPN-Protokollen gibt es noch weitere (z. B. TLS, SSTP, IKEv2), die aber nicht sehr beliebt sind oder nicht den modernen Standards der Datenverschlüsselung entsprechen.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/6.svg?nc=1" alt="protocol 6" /> </object>

AdGuard VPN verfügt auch über ein eigenes [_Protokoll_](/general/adguard-vpn-protocol). Einer der Vorteile besteht darin, dass der über das AdGuard VPN-Protokoll übertragene Datenverkehr nur schwer vom regulären Datenverkehr zu unterscheiden ist. Der VPN-Tunnel sieht aus wie normaler HTTPS-Verkehr und ist daher extrem schwer zu erkennen und zu sperren. Darüber hinaus basiert es auf den Mechanismen des modernen HTTP/2-Protokolls, das eine hohe Verbindungsgeschwindigkeit gewährleistet.

<object data="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" type="image/svg+xml"><img src="https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg?nc=1" alt="protocol 5" /></object>

## VPN-Nachteile

Trotz der offensichtlichen Vorteile ist VPN nicht perfekt und hat einige Nachteile:

### Geringere Geschwindigkeit

Da Ihr Datenverkehr nicht direkt an den Webserver geht, sondern zunächst den VPN-Server durchläuft, verringert sich die Geschwindigkeit der VPN-Verbindung. Auch andere Faktoren beeinflussen die Geschwindigkeit bei der Nutzung eines VPN: die Auslastung des VPN-Servers, seine Bandbreite, die Kompatibilität des VPN-Protokolls mit Ihrem Betriebssystem. All diese Faktoren sowie die Geschwindigkeit des Netzes selbst können sich auf das Gesamterlebnis des Nutzers einer VPN-Verbindung auswirken.

### Zugriffssperre

Einige Online-Dienste unternehmen große Anstrengungen, um VPN-Verkehr zu erkennen und den Zugang für VPN-Nutzer zu sperren. Allerdings können sich nicht viele VPNs so maskieren, dass sie nur als regulärer Verkehr wahrgenommen werden. Daher enden viele Versuche, eine bestimmte Website über eine VPN-Verbindung zu erreichen, im Nichts.

### Unterbrechung von VPN-Verbindungen

Ein schwaches Signal, Netzwerküberlastung, VPN-Inkompatibilität mit einer Firewall, Antivirus- und anderen Programmen, ein veraltetes VPN-Protokoll — all dies kann zu einem plötzlichen Ausfall der VPN-Verbindung führen, insbesondere bei unzuverlässigen VPN-Anbietern.

## AdGuard VPN

Unser VPN-Dienst hat mehrere wichtige [Vorteile](/general/why-adguard-vpn):

- [_Proprietäres VPN-Protokoll_](/general/adguard-vpn-protocol), das auch bei einer langsamen Internetverbindung stabil funktioniert und sich als normaler Datenverkehr tarnt, so dass es schwieriger ist, ihn zu verfolgen und zu sperren

- [_Nichts wird protokolliert-Richtlinie_] (https://adguard-vpn.com/privacy.html), was bedeutet, dass keine persönlichen Daten an Dritte weitergegeben werden können, da AdGuard VPN niemals solche Daten sammelt

- _Mehr als 50 VPN-Server in Dutzenden von Ländern_

- _Benutzerfreundlichkeit und umfangreiche Anpassungsmöglichkeiten_

Derzeit ist AdGuard VPN verfügbar als:

- [Browser-Erweiterung](/adguard-vpn-browser-extension/overview) für Chrome, Edge, Firefox und Opera

- Mobile App für [Android](/adguard-vpn-for-android/overview) und [iOS](/adguard-vpn-for-ios/overview)

- Desktop-Anwendung für [Windows](/adguard-vpn-for-windows/overview) und [Mac](/adguard-vpn-for-mac/overview)

- Befehlszeilenschnittstelle für [Linux, Mac und einige Router](/adguard-vpn-for-linux/)

- Ein VPN-Client für [Router](/general/set-up-adguard-vpn-on-your-router/)

[Erfahren Sie mehr über die Funktionen von AdGuard VPN](https://adguard-vpn.com/welcome.html)
