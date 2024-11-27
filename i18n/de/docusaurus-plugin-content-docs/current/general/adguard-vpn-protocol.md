---
title: 'So funktioniert das AdGuard VPN-Protokoll'
sidebar_position: 4
---

Unser Protokoll wird von [allen mobilen und Desktop-Apps von AdGuard VPN](https://adguard-vpn.com/welcome.html) verwendet. Sie können eines unserer Produkte heruntergeladen und sicher sein, dass Ihre Daten auf die sicherste Weise geschützt sind.

## Warum wir das AdGuard VPN-Protokoll entwickelt haben

Jahrelang haben wir uns auf die Entwicklung aller Arten von Werbeblocker-Apps und Browsererweiterungen konzentriert. Und 2019 haben wir uns entschlossen, unseren eigenen VPN-Dienst zu entwickeln. In Wirklichkeit gab es aber einige Gründe, die uns dazu veranlassten.

- Erstens hatten die mobilen AdGuard-Apps Kompatibilitätsprobleme mit VPN-Apps. Normalerweise können zwei VPN-basierte mobile Apps nicht zusammenarbeiten: in seltenen Fällen auf iOS und niemals auf Android. Da die AdGuard Werbeblocker-Apps lokales VPN verwenden, um den Netzwerkverkehr zu filtern, kommt eine Verwendung zusammen mit einer VPN-App nicht in Frage. Aus diesem Grund sahen wir die Entwicklung eines internen VPN als die einzig praktikable Lösung an, die Kompatibilität garantieren könnte.
- Zweitens schien VPN für unsere Philosophie und Prioritäten mehr als relevant zu sein. Unser Hauptziel ist es, die Privatsphäre der Benutzer:innen zu schützen, und genau dafür sind VPNs da.
- Schließlich sind wir im Laufe der Jahre, in denen wir die AdGuard-Software entwickelt haben, zu Experten im Filtern von Netzwerkverkehr geworden. Dadurch konnten wir etwas Neues einführen, anstatt ein weiteres schlecht funktionierendes VPN zu werden.

Von Anfang an entschieden wir, dass sich AdGuard VPN in einem entscheidenden Punkt von seinen Mitbewerbern unterscheiden wird – wir werden ein eigenes VPN-Protokoll entwickeln. So müssen die Nutzer:innen zwischen Sicherheit und Geschwindigkeit nicht wählen.

## Nachteile der gängigen VPN-Protokolle

Wir haben die Schwächen anderer VPN-Dienste (OpenVPN, WireGuard, IPSec, usw.) sehr gut erkannt:

- Sie können auf Netzwerkebene leicht erkannt und gesperrt werden.
- Wenn Sie versuchen, sie zu „verschleiern“, wird die Leistung sinken.

Um die Verwendung von VPN zu „verschleiern“, wird der Datenfluss oft in eine TCP-Verbindung „eingehüllt“ und manchmal zusätzlich verschlüsselt, um den Datenverkehr wie eine normale Website-Kommunikation erscheinen zu lassen. Leider hat dieser Ansatz einen Nachteil. Aufgrund der Verwendung von TCP ist eine zusätzliche Bestätigung der Zustellung erforderlich.

Bei allen gängigen VPN-Protokollen müssen wir immer einen Kompromiss eingehen: schnell, aber leicht zu erkennen, oder langsam.

## Das Besondere am AdGuard VPN-Protokoll

- Er ist *fast nicht von normalem HTTPS-Verkehr zu unterscheiden*, d.h. die Verbindung zum AdGuard VPN-Server sieht genauso aus wie die Verbindung zu einer normalen Website.
- Zur Verschlüsselung verwenden wir **HTTPS (TLS)**, das diese Aufgabe perfekt meistert. Es ist die beliebteste Verschlüsselungsmethode der Welt, und die Bibliotheken, die sie implementieren, werden ständig auf Sicherheit geprüft.

Einige bestehende VPN-Protokolle übernehmen auch die Verschlüsselungsaufgabe, und sie (und damit die Tatsache der Verwendung eines VPN) sind schwer zu erkennen. Dies wird jedoch in der Regel mit einer geringeren Geschwindigkeit erkauft. Dank mehrerer Lösungen passiert dies in unserem Fall nicht.

- Wir verwenden das **HTTP/2-Transportprotokoll**, welches es praktisch unmöglich macht, das AdGuard VPN-Protokoll zu erkennen und trotzdem eine hohe Geschwindigkeit erreicht.
- Im Gegensatz zu anderen arbeitet das AdGuard VPN-Protokoll *mit Daten und nicht mit Paketen*. Das bedeutet, dass AdGuard VPN für jede Verbindung einen eigenen „Tunnel“ aufbaut, jeder HTTP/2-Stream entspricht einer Verbindung. AdGuard VPN überträgt Daten durch diesen Tunnel. Auf diese Weise können wir den Vorgang beschleunigen, indem wir Bestätigungspakete einsparen. Wir können die Daten mehrerer Pakete in einem Paket puffern, bevor wir die Daten an den VPN-Server (oder vom Server an den Client) senden. Und je weniger Pakete, desto weniger Bestätigungen sind erforderlich.
