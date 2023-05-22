---
title: 'Compatibility of AdGuard VPN with Chromecast'
sidebar_position: 5
---


The built-in Chromecast technology is incompatible with running a VPN because it uses the [DLNA protocol](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) which does not support VPN connections. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won't be recognised by the mobile device.

Google has also blocked the ability to change the Chromecast's network settings by restricting access to its DNS settings. This also prevents Chromecast from working with a VPN.

You can solve the problem by setting up a VPN on a router. This will allow all devices connected to the router to use the VPN connection, including Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer's manual.