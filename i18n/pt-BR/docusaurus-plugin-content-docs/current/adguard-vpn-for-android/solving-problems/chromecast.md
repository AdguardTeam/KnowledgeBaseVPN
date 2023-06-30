---
title: 'Compatibilidade do AdGuard VPN com Chromecast'
sidebar_position: 5
---

A tecnologia integrada do Chromecast é incompatível com a execução de uma VPN porque usa o protocolo [DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance), que não oferece suporte a conexões VPN. Isso significa que, se um dispositivo Chromecast e um smartphone ou tablet executando uma VPN estiverem na mesma rede Wi-Fi, na maioria dos casos, o Chromecast não será reconhecido pelo dispositivo móvel.

O Google também bloqueou a capacidade de alterar as configurações de rede do Chromecast, restringindo o acesso às suas configurações de DNS. Isso também impede que o Chromecast funcione com uma VPN.

Você pode resolver o problema configurando uma VPN em um roteador. Isso permitirá que todos os dispositivos conectados ao roteador usem a conexão VPN, incluindo o Chromecast. Mas lembre-se: configurar uma VPN no seu roteador pode exigir conhecimento adicional, então leia o manual do fabricante.