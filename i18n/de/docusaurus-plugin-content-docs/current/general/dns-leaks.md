---
title: Was ist ein DNS-Leck?
sidebar_position: 9
---

Once you install a VPN, you want to be sure that there won’t be any leaks that will lead to your de-anonymization. AdGuard VPN schützt Ihren Datenverkehr und Ihre Daten zuverlässig vor neugierigen Blicken. In manchen Fällen kann es jedoch vorkommen, dass Sie DNS-Lecks in unserem VPN-Dienst vermuten. We’ll explain where these concerns come from and why they are unfounded.

## Was sind DNS-Lecks?

Wenn Sie ein VPN verwenden, kann eine Verbindung zu einem DNS-Server außerhalb des verschlüsselten VPN-Tunnels verlaufen und Ihr Datenverkehr kann für den ISP sichtbar werden.

In other words, every time you open a website, your browser sends a request to the ISP’s DNS server and in return receives the IP address of the requested website. Auf diese Weise sieht Ihr ISP alle Ihre Online-Aktivitäten und kann Sie verfolgen.

## Wie man DNS-Lecks entdeckt

Es gibt alle möglichen Anonymitätsprüfungsdienste zum Aufspüren von DNS-Lecks, wie `whoer.net`. Die Algorithmen dieser Websites sind nicht klar, aber ihr Ziel ist es, Sie mit imaginären Lecks zu erschrecken, um ihre Dienste zu verkaufen.

Some security scanning websites consider the coincidence of the user’s IP address and the DNS server’s IP address to be a “good” result, indicating that there are no leaks. In Wirklichkeit kann eine solche Übereinstimmung auf die Verwendung eines VPN hinweisen. When VPN is disabled and the requests go to your ISP’s DNS server, the IP address of the DNS server and your own one do not coincide.

## Warum es bei AdGuard VPN keine DNS-Lecks gibt

Wenn Sie AdGuard VPN auf Ihrem Gerät aktivieren und eine Überprüfung auf einer der Scanner-Websites durchführen, stellt es fest, dass DNS-Anfragen an die [AdGuard DNS](https://adguard-dns.io)-Server gehen. Dies kann jedoch nicht als Leck angesehen werden.

Die Verwendung eines nicht filternden AdGuard-DNS-Servers ist standardmäßig in AdGuard VPN eingestellt. Dadurch wird sichergestellt, dass Ihre Anfragen nicht an die DNS-Server Ihres ISP gehen, was bedeutet, dass Sie online privat und anonym bleiben.

What’s more, AdGuard DNS is a very popular DNS service, used by over 50 million people. Was bedeutet das für Sie? Stellen Sie sich folgende Situation vor: Der übliche VPN-Dienst verwendet den DNS-Server, der sich unter derselben IP-Adresse wie der VPN-Server befindet. Die Zahl seiner Benutzer überschreitet kaum 1.000.

And in the case of AdGuard DNS you will “merge” with 50 million users so nobody will be able to track you by the mere fact of using that DNS server.

## Wie man einen benutzerdefinierten DNS-Server in AdGuard VPN einrichtet

Es gibt viele beliebte öffentliche DNS-Server von [bekannten DNS-Anbietern](https://adguard-dns.io/kb/general/dns-providers). Einige von ihnen können nur ihre direkten Aufgaben erfüllen — die IP-Adressen der angefragten Domains angeben, andere können mehr tun.

Beispielsweise entfernt AdGuard DNS Werbung und schützt Ihr Gerät vor Verfolgung, und AdGuard DNS Family Protection kombiniert AdGuard DNS-Funktionen mit Sicherer Suche und Kindersicherung.

Sie können einen beliebigen DNS-Server auswählen und in AdGuard VPN konfigurieren:

- in AdGuard VPN für Windows: *Einstellungen* → *App-Einstellungen* → *DNS-Server*
- in AdGuard VPN für Mac: *Einstellungen* → *App-Einstellungen* → *DNS-Server*
- in AdGuard VPN für Android: *Einstellungen* (Zahnradsymbol) → *App-Einstellungen* → *DNS-Server*
- in AdGuard VPN für iOS: *Einstellungen* (Zahnradsymbol) → *App-Einstellungen* → *DNS-Server*
- in der AdGuard VPN-Browsererweiterung: das Hamburger-Menüsymbol → *Einstellungen* → *DNS-Server*
