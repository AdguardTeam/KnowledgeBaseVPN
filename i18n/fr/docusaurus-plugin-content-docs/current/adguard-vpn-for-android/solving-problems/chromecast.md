---
title: Compatibilité d'AdGuard VPN avec Chromecast
sidebar_position: 5
---

La technologie Chromecast intégrée est incompatible avec l'exécution d'un VPN car elle utilise le protocole DLNA [](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) qui ne prend pas en charge les connexions VPN. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. Cela empêche également Chromecast de fonctionner avec un VPN.

Vous pouvez résoudre le problème en configurant un VPN sur un routeur. Cela permettra à tous les appareils connectés au routeur d'utiliser la connexion VPN, y compris Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
