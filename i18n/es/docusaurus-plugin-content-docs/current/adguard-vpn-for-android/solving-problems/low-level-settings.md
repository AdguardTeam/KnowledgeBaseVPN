---
title: Guía de configuración de bajo Nivel
sidebar_position: 6
---

## Cómo acceder a la configuración de bajo nivel

:::caution

Cambiar la _configuración de bajo nivel_ puede causar problemas con el rendimiento de AdGuard VPN, puede interrumpir la conexión a Internet o comprometer tu seguridad y privacidad. Solo debe abrir esta sección si sabe lo que está haciendo o si se lo pidió nuestro equipo de soporte.

:::

Para acceder a la _Configuración de bajo nivel_, abra la app AdGuard VPN y toque el ícono de engranaje en la esquina inferior derecha de la pantalla. Luego elige _General_ → _Avanzado_ → _Configuración de bajo nivel_.

## Configuración de bajo nivel

A continuación, enumeramos todas las configuraciones de bajo nivel disponibles en AdGuard VPN para Android y explicamos qué hacen. Una vez más, te instamos a que no manipules estas configuraciones a ciegas, incluso si has leído esta guía. Trátalo como un recurso al que puedes recurrir cuando sabes lo que estás haciendo, pero quieres repasar los detalles.

### Protocolo de AdGuard VPN

AdGuard VPN utiliza TrustTunnel, un protocolo VPN moderno y de código abierto desarrollado por nosotros y disponible para que cualquiera lo use, audite e implemente. [Visita el sitio web](https://trusttunnel.org/) para aprender cómo funciona y por qué es diferente de los protocolos VPN tradicionales.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6, or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.

Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Puerto del servidor proxy

Aquí puedes configurar el puerto del servidor proxy SOCKS5 interno. La opción predeterminada es 1080.
