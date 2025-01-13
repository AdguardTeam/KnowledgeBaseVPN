---
title: So funktioniert das AdGuard VPN-Protokoll
sidebar_position: 4
---

Unser Protokoll wird von [allen mobilen und Desktop-Apps von AdGuard VPN](https://adguard-vpn.com/welcome.html) verwendet. Sie können eines unserer Produkte heruntergeladen und sicher sein, dass Ihre Daten auf die sicherste Weise geschützt sind.

## Warum wir das AdGuard VPN-Protokoll entwickelt haben

Jahrelang haben wir uns auf die Entwicklung aller Arten von Werbeblocker-Apps und Browsererweiterungen konzentriert. Und 2019 haben wir uns entschlossen, unseren eigenen VPN-Dienst zu entwickeln. In Wirklichkeit gab es aber einige Gründe, die uns dazu veranlassten.

- Erstens hatten die mobilen AdGuard-Apps Kompatibilitätsprobleme mit VPN-Apps. Normally, two VPN-based mobile apps can’t work together: in rare cases on iOS, and never on Android. Da die AdGuard Werbeblocker-Apps lokales VPN verwenden, um den Netzwerkverkehr zu filtern, kommt eine Verwendung zusammen mit einer VPN-App nicht in Frage. That’s why we saw the development of an in-house VPN as the only feasible solution that could guarantee compatibility: after we apply some magic, the two apps are able to work together as one VPN service.
- Zweitens schien VPN für unsere Philosophie und Prioritäten mehr als relevant zu sein. Our primary goal is to protect users’ privacy, and this is exactly what VPNs are for.
- Schließlich sind wir im Laufe der Jahre, in denen wir die AdGuard-Software entwickelt haben, zu Experten im Filtern von Netzwerkverkehr geworden. Dadurch konnten wir etwas Neues einführen, anstatt ein weiteres schlecht funktionierendes VPN zu werden.

Von Anfang an entschieden wir, dass sich AdGuard VPN in einem entscheidenden Punkt von seinen Mitbewerbern unterscheiden wird – wir werden ein eigenes VPN-Protokoll entwickeln. So müssen die Nutzer:innen zwischen Sicherheit und Geschwindigkeit nicht wählen.

## Nachteile der gängigen VPN-Protokolle

Wir haben die Schwächen anderer VPN-Dienste (OpenVPN, WireGuard, IPSec, usw.) sehr gut erkannt:

- Sie können auf Netzwerkebene leicht erkannt und gesperrt werden.
- If you try to “conceal” them, the performance will drop.

To “conceal” the use of VPN, the data flow is often “wrapped” in a TCP connection, and sometimes it’s additionally encrypted to make the traffic appear like normal website communication. Leider hat dieser Ansatz einen Nachteil. Aufgrund der Verwendung von TCP ist eine zusätzliche Bestätigung der Zustellung erforderlich.

Bei allen gängigen VPN-Protokollen müssen wir immer einen Kompromiss eingehen: schnell, aber leicht zu erkennen, oder langsam.

## What’s great about the AdGuard VPN protocol

- It’s *nearly impossible to distinguish from normal HTTPS traffic*, that is, the connection to the AdGuard VPN server looks exactly the same as the connection to a normal website.
- Zur Verschlüsselung verwenden wir **HTTPS (TLS)**, das diese Aufgabe perfekt meistert. Es ist die beliebteste Verschlüsselungsmethode der Welt, und die Bibliotheken, die sie implementieren, werden ständig auf Sicherheit geprüft.

Einige bestehende VPN-Protokolle übernehmen auch die Verschlüsselungsaufgabe, und sie (und damit die Tatsache der Verwendung eines VPN) sind schwer zu erkennen. Dies wird jedoch in der Regel mit einer geringeren Geschwindigkeit erkauft. This doesn’t happen in our case, thanks to several solutions.

- Wir verwenden das **HTTP/2-Transportprotokoll**, welches es praktisch unmöglich macht, das AdGuard VPN-Protokoll zu erkennen und trotzdem eine hohe Geschwindigkeit erreicht.
- Im Gegensatz zu anderen arbeitet das AdGuard VPN-Protokoll *mit Daten und nicht mit Paketen*. This means that AdGuard VPN establishes a separate ”tunnel” for each connection, each HTTP/2 stream corresponds to one connection. AdGuard VPN überträgt Daten durch diesen Tunnel. Auf diese Weise können wir den Vorgang beschleunigen, indem wir Bestätigungspakete einsparen. Wir können die Daten mehrerer Pakete in einem Paket puffern, bevor wir die Daten an den VPN-Server (oder vom Server an den Client) senden. Und je weniger Pakete, desto weniger Bestätigungen sind erforderlich.
