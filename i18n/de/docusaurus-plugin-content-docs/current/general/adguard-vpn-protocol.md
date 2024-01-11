---
title: 'How the AdGuard VPN protocol works'
sidebar_position: 4
---

Unser Protokoll wird von [allen mobilen und Desktop-Apps von AdGuard VPN](https://adguard-vpn.com/welcome.html) verwendet. Sie können eines unserer Produkte heruntergeladen und sicher sein, dass Ihre Daten auf die sicherste Weise geschützt sind.

## Warum wir das AdGuard VPN-Protokoll entwickelt haben

Jahrelang haben wir uns auf die Entwicklung aller Arten von Werbeblocker-Apps und Browsererweiterungen konzentriert. Und 2019 haben wir uns entschlossen, unseren eigenen VPN-Dienst zu entwickeln. When, in reality, there were a few reasons that prompted us to do so.

- Die mobilen Anwendungen von AdGuard hatten Kompatibilitätsprobleme mit VPN-Anwendungen. Normalerweise können zwei VPN-basierte mobile Apps nicht zusammenarbeiten: in seltenen Fällen auf iOS und niemals auf Android. As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. Aus diesem Grund sahen wir die Entwicklung eines internen VPN als die einzig praktikable Lösung an, die Kompatibilität garantieren könnte.
- Zweitens schien VPN für unsere Philosophie und Prioritäten mehr als relevant zu sein. Unser Hauptziel ist es, die Privatsphäre der Nutzer zu schützen, und genau dafür sind VPNs da.
- Schließlich sind wir im Laufe der Jahre, in denen wir die AdGuard-Software entwickelt haben, zu Experten im Filtern von Netzwerkverkehr geworden. Dadurch konnten wir etwas Neues einführen, anstatt ein weiteres Wischiwaschi-VPN zu werden.

Von Anfang an haben wir beschlossen, dass sich AdGuard VPN in einem Punkt von seinen Mitbewerbern unterscheidet: Wir werden ein eigenes VPN-Protokoll entwickeln und einsetzen, das die Benutzer nicht zwingt, zwischen Sicherheit und Geschwindigkeit zu wählen.

## Nachteile der gängigen VPN-Protokolle

Wir haben die Schwächen anderer VPN-Dienste (OpenVPN, WireGuard, IPSec, usw.) sehr gut erkannt:

- Diese können auf Netzebene leicht entdeckt und gesperrt werden.
- If you try to "conceal" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it's additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage — due to the use of TCP, there is a need for additional confirmation of delivery.

Bei allen gängigen VPN-Protokollen müssen wir immer einen Kompromiss eingehen: schnell, aber leicht zu erkennen, oder langsam.

## What's great about the AdGuard VPN protocol

- Er ist *fast nicht von normalem HTTPS-Verkehr zu unterscheiden*, d.h. die Verbindung zum AdGuard VPN-Server sieht genauso aus wie die Verbindung zu einer normalen Website.
- Zur Verschlüsselung verwenden wir **HTTPS (TLS)**, das diese Aufgabe perfekt meistert. Es ist die beliebteste Verschlüsselungsmethode der Welt, und die Bibliotheken, die sie implementieren, werden ständig auf Sicherheit geprüft.

Einige bestehende VPN-Protokolle übernehmen auch die Verschlüsselungsaufgabe, und sie (und damit die Tatsache der Verwendung eines VPN) sind schwer zu erkennen. Dies wird jedoch in der Regel mit einer geringeren Geschwindigkeit erkauft. This doesn't happen in our case, thanks to several solutions.

- We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed.
- Unlike others, the AdGuard VPN protocol *operates with data and not with packets*. Das bedeutet, dass AdGuard VPN für jede Verbindung einen eigenen „Tunnel“ aufbaut, jeder HTTP/2-Stream entspricht einer Verbindung. AdGuard VPN überträgt Daten durch diesen Tunnel. Auf diese Weise können wir den Vorgang beschleunigen, indem wir Bestätigungspakete einsparen. Wir können die Daten mehrerer Pakete in einem Paket puffern, bevor wir die Daten an den VPN-Server (oder vom Server an den Client) senden. Und je weniger Pakete, desto weniger Bestätigungen sind erforderlich.
