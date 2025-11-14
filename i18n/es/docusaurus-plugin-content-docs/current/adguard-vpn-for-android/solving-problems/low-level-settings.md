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

De forma predeterminada, el Protocolo AdGuard VPN utiliza la selección dinámica de protocolo VPN (opción _Selección automática_). Puedes leer más sobre su implementación en un [artículo dedicado](/general/adguard-vpn-protocol.md). Esto mejora la velocidad y estabilidad del VPN, lo cual es especialmente útil en regiones donde el uso del VPN está restringido o es inestable.

Si sabes lo que estás haciendo, puedes cambiar AdGuard VPN para que use solo el protocolo HTTP2/TLS o HTTP3/QUIC en lugar de _Selección automática_. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) es un protocolo relativamente nuevo, por lo que puede ser menos estable. Sin embargo, si tu conexión a Internet es inestable (por ejemplo, cuando te conectas al wifi público), proporciona mejor seguridad y aumenta la velocidad de conexión gracias a la tecnología de [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking).

Además, aquí tienes un artículo dedicado sobre el protocolo: [Cómo funciona el Protocolo AdGuard VPN](/general/adguard-vpn-protocol.md).

### Incluir la puerta de enlace Wi-Fi en las rutas de VPN

Si esta configuración está habilitada, las direcciones IP de la puerta de enlace se agregarán a las rutas de VPN cuando estés conectado a Wi-Fi.
Si lo desactivas, entonces la configuración de la ruta (rangos de IP que son filtrados) se cambiará. La puerta de enlace wifi de la red a la que está conectado el usuario quedará excluida y, por tanto, no será objeto de filtrado.

La primera opción está habilitada por defecto.

### Captura de paquetes (PCAP)

Si esta configuración está habilitada, AdGuard creará un archivo `.pcap` (por ejemplo, `1682599851461.pcap`) en el directorio de caché de la aplicación. Este archivo enumera todos los paquetes de red transferidos a través del VPN y puede ser analizado por el [programa Wireshark](https://www.wireshark.org/).

### Watchdog

"Watchdog" monitorea el estado del proceso VPN para verificar si hay algún problema con él. Cuando está habilitado, AdGuard VPN se protegerá contra aplicaciones agresivas de ahorro de batería que podrían cerrarlo.

### Versión IP preferida

Aquí puedes configurar las direcciones de los puntos de conexión. Hay tres opciones: IPv4, IPv6 o IPv4 e IPv6 (si tu dispositivo soporta ambos).

### Rangos de IPv4 excluidos de VPN

La tunelización VPN para los rangos de IPv4 enumerados en esta sección será deshabilitada.

### Interfaz IPv6

Después de habilitar esta opción, tendrás una dirección IPv6 mientras enrutas el tráfico a través de la conexión VPN. Puedes configurar las exclusiones en los _rangos de IPv6 excluidos de VPN_.

### Rangos de IPv6 excluidos de VPN

La tunelización VPN para los rangos de IPv6 enumerados en esta sección será deshabilitado.

:::note

Primero debes habilitar la configuración de _interfaz IPv6_ en _Configuraciones de bajo nivel_, de lo contrario, esta configuración no se aplicará.

:::

### MTU (unidad máxima de transmisión)

Aquí puedes establecer el tamaño máximo (en bytes) del paquete de datos utilizado en la VPN local. El rango recomendado es de 1500 a 9000 bytes.

### Aplicaciones excluidas

Puedes enumerar aquí UIDs (identificadores únicos) o nombres de paquetes de las aplicaciones que deseas excluir del enrutamiento VPN.
A diferencia de las aplicaciones agregadas a las _Exclusiones_ regulares, el tráfico de las aplicaciones agregadas a _Aplicaciones excluidas_ no va a la servicio local de VPN en tu dispositivo en absoluto. En cambio, va directamente al destino.

### Puerto del servidor proxy

Aquí puedes configurar el puerto del servidor proxy SOCKS5 interno. La opción predeterminada es 1080.
