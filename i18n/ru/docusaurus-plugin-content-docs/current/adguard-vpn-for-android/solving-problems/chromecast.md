---
title: Совместимость AdGuard VPN с Chromecast
sidebar_position: 5
---

Встроенная технология Chromecast несовместима с работой VPN, так как использует протокол [DLNA](https://ru.wikipedia.org/wiki/DLNA), который не поддерживает VPN-соединения. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. Это также не позволяет Chromecast работать с VPN.

Решить проблему можно, настроив VPN на роутере. Это позволит всем устройствам, подключённым к роутеру, использовать VPN-соединение, включая Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
