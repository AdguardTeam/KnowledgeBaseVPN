---
title: 'Compatibilidad de AdGuard VPN con Chromecast'
sidebar_position: 5
---

La tecnología Chromecast integrada es incompatible con la ejecución de una VPN porque utiliza el protocolo [DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance) que no admite conexiones VPN. Esto significa que si un dispositivo Chromecast y un smartphone o tableta que ejecuta una VPN está en la misma red Wi-Fi, en la mayoría de los casos, Chromecast no será reconocido por el dispositivo móvil.

Google también bloqueó la capacidad de cambiar la configuración de red de Chromecast al restringir el acceso a su configuración de DNS. Esto también impide que Chromecast funcione con una VPN.

Puedes resolver el problema configurando una VPN en un enrutador. Esto permitirá que todos los dispositivos conectados al enrutador usen la conexión VPN, incluido Chromecast. Pero recuerda: configurar una VPN en tu enrutador puede requerir conocimientos adicionales, así que lee el manual del fabricante.
