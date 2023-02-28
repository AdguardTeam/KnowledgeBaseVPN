---
title: 'Was ist ein DNS-Leck?'
sidebar_position: 9
---

Sobald Sie ein VPN installiert haben, möchten Sie sicher sein, dass es keine Lecks gibt, die zu Ihrer De-Anonymisierung führen. AdGuard VPN schützt Ihren Datenverkehr und Ihre Daten zuverlässig vor neugierigen Blicken. In manchen Fällen kann es jedoch vorkommen, dass Sie DNS-Lecks in unserem VPN-Dienst vermuten. Wir erklären, woher diese Bedenken kommen und warum sie unbegründet sind.

## Was sind DNS-Lecks?

Wenn Sie ein VPN verwenden, kann eine Verbindung zu einem DNS-Server außerhalb des verschlüsselten VPN-Tunnels verlaufen und Ihr Datenverkehr kann für den ISP sichtbar werden.

Mit anderen Worten, bei jedem Aufruf einer Website sendet Ihr Browser eine Anfrage an den DNS-Server des ISP und erhält im Gegenzug die IP-Adresse der angeforderten Website. Auf diese Weise sieht Ihr ISP alle Ihre Online-Aktivitäten und kann Sie verfolgen.

## Wie man DNS-Lecks entdeckt

Es gibt alle möglichen Anonymitätsprüfungsdienste zum Aufspüren von DNS-Lecks, wie `whoer.net`. Es sollte klar sein, dass diese Websites selbst nicht perfekt sind und ihre Algorithmen nicht klar sind, im Gegensatz zu ihren Absichten, die Nutzer:innen mit imaginären Lecks einzuschüchtern und möglicherweise einen Dienst zu verkaufen.

Einige Websites für Sicherheitsscans betrachten die Übereinstimmung der IP-Adresse des Benutzers und der IP-Adresse des DNS-Servers als „gutes“ Ergebnis, was darauf hinweist, dass es keine Lecks gibt. In Wirklichkeit kann eine solche Übereinstimmung auf die Verwendung eines VPN hinweisen. Wenn VPN deaktiviert ist und die Anfragen an den DNS-Server Ihres Internetanbieters gehen, stimmen die IP-Adresse des DNS-Servers und Ihre eigene nicht überein.

## Warum es bei AdGuard VPN keine DNS-Lecks gibt

Wenn Sie AdGuard VPN auf Ihrem Gerät aktivieren und eine Überprüfung auf einer der Scanner-Websites durchführen, stellt es fest, dass DNS-Anfragen an die [AdGuard DNS](https://adguard-dns.io)-Server gehen. Dies kann jedoch nicht als Leck angesehen werden.

Die Verwendung eines nicht filternden AdGuard-DNS-Servers ist standardmäßig in AdGuard VPN eingestellt. Dadurch wird sichergestellt, dass Ihre Anfragen nicht an die DNS-Server Ihres ISP gehen, was bedeutet, dass Sie online privat und anonym bleiben.

Darüber hinaus ist AdGuard DNS ein sehr beliebter DNS-Dienst, der von über 50 Millionen Menschen genutzt wird. Was bedeutet das für Sie? Stellen Sie sich folgende Situation vor: Der übliche VPN-Dienst verwendet den DNS-Server, der sich unter derselben IP-Adresse wie der VPN-Server befindet. Die Zahl seiner Benutzer überschreitet kaum 1.000.

Und im Fall von AdGuard DNS „verschmelzen“ Sie mit 50 Millionen Benutzern, sodass niemand Sie allein durch die Verwendung dieses DNS-Servers verfolgen kann.

## Wie man einen benutzerdefinierten DNS-Server in AdGuard VPN einrichtet

Es gibt viele beliebte öffentliche DNS-Server von [bekannten DNS-Anbietern](https://adguard-dns.io/kb/general/dns-providers). Einige von ihnen können nur ihre direkten Aufgaben erfüllen – die IP-Adressen der angeforderten Domains angeben, und einige können mehr tun.

Beispielsweise entfernt AdGuard DNS Werbung und schützt Ihr Gerät vor Verfolgung, und AdGuard DNS Family Protection kombiniert AdGuard DNS-Funktionen mit Sicherer Suche und Kindersicherung.

Sie können einen beliebigen DNS-Server auswählen und in AdGuard VPN konfigurieren:

* in AdGuard VPN für Windows: *Einstellungen* → *App-Einstellungen* → *DNS-Server*
* in AdGuard VPN für Mac: *Einstellungen* → *App-Einstellungen* → *DNS-Server*
* in AdGuard VPN für Android: *Einstellungen* (Zahnradsymbol) → *App-Einstellungen* → *DNS-Server*
* in AdGuard VPN für iOS: *Einstellungen* (Zahnradsymbol) → *App-Einstellungen* → *DNS-Server*
* in der AdGuard VPN-Browsererweiterung: das Hamburger-Menüsymbol → *Einstellungen* → *DNS-Server*
