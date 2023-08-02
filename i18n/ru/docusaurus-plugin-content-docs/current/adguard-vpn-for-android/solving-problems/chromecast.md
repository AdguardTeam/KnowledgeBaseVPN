---
title: 'Совместимость AdGuard VPN с Chromecast'
sidebar_position: 5
---

Встроенная технология Chromecast несовместима с работой VPN, так как использует протокол [DLNA](https://ru.wikipedia.org/wiki/DLNA), который не поддерживает VPN-соединения. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won't be recognized by the mobile device.

Google также заблокировал возможность изменять сетевые настройки Chromecast, ограничив доступ к его DNS-настройкам. Это также не позволяет Chromecast работать с VPN.

Решить проблему можно, настроив VPN на роутере. Это позволит всем устройствам, подключённым к роутеру, использовать VPN-соединение, включая Chromecast. Но помните: настройка VPN на роутере может потребовать дополнительных знаний, поэтому прочитайте инструкцию производителя.
