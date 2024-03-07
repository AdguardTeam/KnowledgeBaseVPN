---
title: 'Compatibilité d''AdGuard VPN avec Chromecast'
sidebar_position: 5
---

La technologie Chromecast intégrée est incompatible avec l'exécution d'un VPN car elle utilise le protocole DLNA [](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) qui ne prend pas en charge les connexions VPN. Cela signifie que si un appareil Chromecast et un smartphone ou une tablette exécutant un VPN se trouvent sur le même réseau Wi-Fi, dans la plupart des cas, Chromecast ne sera pas reconnu par l'appareil mobile.

Google a également bloqué la possibilité de modifier les paramètres réseau du Chromecast en restreignant l'accès à ses paramètres DNS. Cela empêche également Chromecast de fonctionner avec un VPN.

Vous pouvez résoudre le problème en configurant un VPN sur un routeur. Cela permettra à tous les appareils connectés au routeur d'utiliser la connexion VPN, y compris Chromecast. Mais n'oubliez pas : la configuration d'un VPN sur votre routeur peut nécessiter des connaissances supplémentaires, alors lisez le manuel du fabricant.
