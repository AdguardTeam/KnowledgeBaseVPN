---
title: Wie VPN funktioniert
sidebar_position: 1
---

Um zu verstehen, wie AdGuard VPN funktioniert, sollten Sie zunächst die allgemeinen Prinzipien des VPN-Dienstes verstehen.

## VPN-Funktionen

VPN ist ein virtuelles privates Netzwerk, mit dem Sie Ihren Standort verbergen und Ihre Daten im Internet schützen können. Ein VPN verbindet einen Computer oder ein Mobilgerät mit einem VPN-Server und verwendet die IP-Adresse dieses Servers. Dies vermittelt den Eindruck, dass Sie sich an einem anderen Ort befinden. Dadurch können Sie sicher auf verschiedene Internetressourcen zugreifen und Ihre persönlichen Daten schützen.

Auf diese Weise erfüllt ein VPN zwei wichtige Funktionen:

1. **Aufrechterhaltung der Anonymität** Bei der Nutzung einer Internetverbindung hinterlässt der Nutzer seinen digitalen Fußabdruck, der dann von Dritten analysiert und genutzt werden kann. Beispielsweise kann einer der von Ihnen besuchten Online-Shops Ihren Suchverlauf speichern und Ihnen darauf basierend seine Produkte durch gezielte Werbung anbieten. Oder die Geheimdienste, die Ihren Standort über die IP-Adresse Ihres Geräts erfahren und Ihre Identität festgestellt haben, können Ihre Aktivitäten im Internet heimlich überwachen. Darüber hinaus können Webbrowser und Internetdiensteanbieter Ihren Browserverlauf für ihre eigenen Zwecke nutzen, ihn an Werbetreibende verkaufen und ihn an Regierungsbehörden weitergeben. Mit VPN können Sie Ihre IP-Adresse verbergen und sie durch die IP-Adresse des VPN-Servers ersetzen, mit dem Sie verbunden sind. Auf diese Weise können Sie Ihre Privatsphäre wahren und anonym nach Informationen im Internet suchen.

2. **Datenschutz** Wenn Sie sich mit einem unzuverlässigen oder öffentlichen Netzwerk verbinden, können die Daten auf Ihrem Gerät für Cyberkriminelle anfällig werden. Bankkartendaten, Benutzernamen und Passwörter, Passdaten – all diese Informationen können von Online-Betrügern abgefangen werden. Der VPN-Tunnel verschlüsselt die Informationen, die Sie über das Internet senden und empfangen, sodass sie nicht in falsche Hände geraten können.

## VPN-Struktur

Wenn Sie sich mit einem Netzwerk verbinden, wird Ihrem Computer oder Mobilgerät eine eindeutige ID-Nummer oder IP-Adresse zugewiesen. Es besteht normalerweise aus Zahlen von 0 bis 255, die durch Punkte oder Doppelpunkte getrennt sind. Wenn man diese Sequenz kennt, kann man die Geolokalisierung des Geräts bestimmen. Die IP-Adresse wird normalerweise von Ihrem ISP festgelegt und ist bis zur gewünschten Ressource sichtbar. Aus diesem Grund kann der Webserver der Website, die Sie besuchen, Ihre IP-Adresse registrieren und aufzeichnen, was Sie angefordert haben. Dieser Datensatz kann dann hauptsächlich zur Datenerfassung und Verkehrsanalyse verwendet werden.

Ein VPN erstellt einen Tunnel zwischen Ihrem Gerät und dem VPN-Server. Ihre Daten durchlaufen diesen Tunnel, werden verschlüsselt und gelangen dann in gesicherter Form ins offene Internet. Für den Webserver sieht es daher so aus, als hätte Ihr Gerät nicht mehr Ihre echte IP-Adresse, sondern die IP-Adresse des Endpunkts des Tunnels, d. h. des VPN-Servers. Die Website, auf die Sie nach dem Durchqueren des VPN-Tunnels gelangen, wird also die Geolocation des von Ihnen gewählten VPN-Servers als Ihren tatsächlichen Standort betrachten. Und die verschlüsselten Daten fallen nicht in die Hände von Werbetreibenden, Hackern und Sicherheitsdiensten.

![VPN-Struktur](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Arten der VPN-Protokolle

VPN-Sicherheitsprotokolle sind Hilfsmittel, die Daten in einem VPN-Tunnel verschlüsseln und es Ihnen ermöglichen, die Privatsphäre der Benutzer in einem offenen Internet zu wahren. Gegenwärtig verwenden die meisten modernen VPN-Dienste eines der folgenden drei VPN-Protokolle:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Einer der Hauptvorteile besteht darin, dass es auf den meisten Geräten und Betriebssystemen verfügbar ist und ein hohes Maß an Sicherheit bietet. Die Verwendung der doppelten [Verkapselung](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in diesem Protokoll kann jedoch zu einer geringeren Verbindungsgeschwindigkeit führen.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Dieses moderne Protokoll ist Open Source, sodass Dritthersteller die Technologie verbessern und aktualisieren können.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Seine Hauptvorteile sind Benutzerfreundlichkeit, hohe Effizienz und geringe Anfälligkeit für Angriffe.

Neben diesen VPN-Protokollen gibt es noch weitere (z. B. TLS, SSTP, IKEv2), die aber nicht sehr beliebt sind oder nicht den modernen Standards der Datenverschlüsselung entsprechen.

![So funktioniert ein VPN-Protokoll](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN hat auch ein eigenes [*Protokoll*](adguard-vpn-protocol.mdx). Einer der Vorteile besteht darin, dass der über das AdGuard VPN-Protokoll übertragene Datenverkehr nur schwer vom regulären Datenverkehr zu unterscheiden ist. Der VPN-Tunnel sieht wie normaler HTTPS-Verkehr aus, daher ist es äußerst schwierig, ihn zu erkennen und zu sperren. Darüber hinaus basiert es auf den Mechanismen des modernen HTTP/2-Protokolls, das eine hohe Verbindungsgeschwindigkeit gewährleistet.

![So funktioniert das verdeckte VPN](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## VPN-Nachteile

Trotz der offensichtlichen Vorteile ist VPN nicht perfekt und hat einige Nachteile:

### Geringere Geschwindigkeit

Da Ihr Datenverkehr nicht direkt an den Webserver geht, sondern zunächst den VPN-Server durchläuft, verringert sich die Geschwindigkeit der VPN-Verbindung. Auch andere Faktoren beeinflussen die Geschwindigkeit bei der Nutzung eines VPN: die Auslastung des VPN-Servers, seine Bandbreite, die Kompatibilität des VPN-Protokolls mit Ihrem Betriebssystem. All diese Faktoren sowie die Geschwindigkeit des Netzwerks selbst können die Qualität Ihrer VPN-Verbindung beeinträchtigen.

### Zugriffssperre

Einige Online-Dienste unternehmen große Anstrengungen, um VPN-Verkehr zu erkennen und den Zugang für VPN-Nutzer zu sperren. Allerdings können nicht viele VPNs ihren Datenverkehr als normal maskieren. Daher enden viele Versuche, auf eine bestimmte Website zu gehen, ohne VPN zu deaktivieren, im Nichts.

### Unterbrechung von VPN-Verbindungen

Ein schwaches Signal, Netzwerküberlastung, VPN-Inkompatibilität mit einer Firewall, Antiviren- und anderen Programmen, ein veraltetes VPN-Protokoll – all dies kann insbesondere bei unzuverlässigen VPN-Anbietern zu einem plötzlichen Ausfall der VPN-Verbindung führen.

## AdGuard VPN

Unser VPN-Dienst hat mehrere wichtige [Vorteile](why-adguard-vpn.md):

- [*Proprietäres VPN-Protokoll*](adguard-vpn-protocol.mdx), das auch bei einer langsamen Internetverbindung stabil funktioniert und sich als normaler Datenverkehr tarnt, wodurch es schwieriger wird, ihn zu verfolgen und zu sperren

- [*No-Logs-Politik*](https://adguard-vpn.com/en/privacy.html), was bedeutet, dass AdGuard VPN Ihre personenbezogenen Daten nicht sammelt und nicht an Dritte weitergibt

- *Mehr als 50 VPN-Server in Dutzenden von Ländern*

- *Benutzerfreundlichkeit und umfangreiche Anpassungsmöglichkeiten*

Derzeit ist AdGuard VPN verfügbar als:

- [Browsererweiterung](../adguard-vpn-browser-extension/overview.md) für Chrome, Firefox und Edge

- Mobile App für [Android](../adguard-vpn-for-android/overview.md) und [iOS](../adguard-vpn-for-ios/overview.md)

- Desktop-App für [Windows](../adguard-vpn-for-windows/overview.md) und [Mac](../adguard-vpn-for-mac/overview.md)

Sie können mehr über die Funktionen von AdGuard VPN (einschließlich der unbegrenzten Version) [hier](https://adguard-vpn.com/en/welcome.html) erfahren.
