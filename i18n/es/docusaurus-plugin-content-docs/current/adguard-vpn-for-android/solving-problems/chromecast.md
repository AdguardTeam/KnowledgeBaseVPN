---
title: Compatibilidad de AdGuard VPN con Chromecast
sidebar_position: 5
---

La tecnología Chromecast integrada es incompatible con la ejecución de una VPN porque utiliza el protocolo [DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) que no admite conexiones VPN. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. Esto también impide que Chromecast funcione con una VPN.

Puedes resolver el problema configurando una VPN en un enrutador. Esto permitirá que todos los dispositivos conectados al enrutador usen la conexión VPN, incluido Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
