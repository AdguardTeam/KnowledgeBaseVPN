---
title: Compatibilidade do AdGuard VPN com Chromecast
sidebar_position: 5
---

A tecnologia integrada do Chromecast é incompatível com a execução de uma VPN porque usa o protocolo [DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance), que não oferece suporte a conexões VPN. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. Isso também impede que o Chromecast funcione com uma VPN.

Você pode resolver o problema configurando uma VPN em um roteador. Isso permitirá que todos os dispositivos conectados ao roteador usem a conexão VPN, incluindo o Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
