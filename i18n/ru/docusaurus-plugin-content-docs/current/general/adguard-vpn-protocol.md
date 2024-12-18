---
title: Как работает протокол AdGuard VPN
sidebar_position: 4
---

[Все мобильные и десктопные приложения AdGuard VPN](https://adguard-vpn.com/welcome.html) используют наш собственный протокол. Скачайте любой из наших продуктов и используйте его, зная, что ваши данные защищены самым надёжным образом.

## Почему мы разработали протокол AdGuard VPN

В течение многих лет мы концентрировались на разработке всевозможных приложений и браузерных расширений для блокировки рекламы. А в 2019 году мы, казалось бы, внезапно решили разработать собственный VPN-сервис. Хотя на самом деле было несколько причин, побудивших нас сделать это.

- Проблемы совместимости. Normally, two VPN-based mobile apps can’t work together: in rare cases on iOS, and never on Android. Поскольку Блокировщик рекламы AdGuard использует локальный VPN для фильтрации сетевого трафика, пользоваться им вместе с любым VPN-приложением невозможно. That’s why we saw the development of an in-house VPN as the only feasible solution that could guarantee compatibility: after we apply some magic, the two apps are able to work together as one VPN service.
- Во-вторых, идея собственного VPN-сервиса прекрасно соотносится с нашей философией и принципами. Our primary goal is to protect users’ privacy, and this is exactly what VPNs are for.
- Наконец, за годы разработки программного обеспечения AdGuard мы стали экспертами в области фильтрации сетевого трафика. Это позволило нам предложить пользователям что-то новое, а не просто стать очередным безликим VPN.

С самого начала мы решили, что у AdGuard VPN будет одно важное отличие от конкурентов — мы будем использовать VPN-протокол собственной разработки, а не просто возьмём одно из готовых решений.

## Недостатки существующих VPN-протоколов

Мы разрабатывали протокол AdGuard VPN, держа в уме недостатки популярных VPN-протоколов (OpenVPN, WireGuard, IPSec и т. д.):

- Их легко обнаружить и заблокировать на сетевом уровне.
- If you try to “conceal” them, the performance will drop.

To “conceal” the use of VPN, the data flow is often “wrapped” in a TCP connection, and sometimes it’s additionally encrypted to make the traffic appear like normal website communication. К сожалению, у такого подхода есть проблема — из-за использования TCP появляется необходимость в дополнительном подтверждении доставки.

Таким образом, используя любой из популярных VPN-протоколов, мы всегда встаём перед выбором: быстро и легко обнаружимо vs. медленно.

## What’s great about the AdGuard VPN protocol

- It’s *nearly impossible to distinguish from normal HTTPS traffic*, that is, the connection to the AdGuard VPN server looks exactly the same as the connection to a normal website.
- Для шифрования мы используем **HTTPS (TLS)**, который идеально справляется с этой задачей. Это самый популярный в мире способ шифрования, а библиотеки, которые его реализуют, постоянно проходят аудит безопасности.

Существующие VPN-протоколы также справляются с задачей шифрования, и их (а значит, и факт использования VPN) тяжело обнаружить. Но обычно за это приходится платить сниженной скоростью. This doesn’t happen in our case, thanks to several solutions.

- Мы используем **транспортный протокол HTTP/2**, который делает так, чтобы протокол AdGuard VPN было практически невозможно обнаружить и чтобы при этом сохранялась высокая скорость.
- Протокол AdGuard VPN, в отличие от остальных, *оперирует не пакетами, а данными*. This means that AdGuard VPN establishes a separate ”tunnel” for each connection, each HTTP/2 stream corresponds to one connection. По этому туннелю AdGuard VPN передаёт данные. Это позволяет нам ускорить работу за счёт экономии на подтверждающих пакетах, ведь мы можем объединить данные нескольких пакетов в один перед отправкой на VPN-сервер (или с сервера на клиент). А чем меньше пакетов, тем меньше подтверждений нужно.
