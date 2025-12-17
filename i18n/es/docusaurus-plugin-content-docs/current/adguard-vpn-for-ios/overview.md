---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para iOS?

Una VPN le permite crear una conexión segura a otra red en Internet. Conecta la computadora o dispositivo móvil de un usuario a un servidor y te permite navegar por Internet utilizando una dirección IP "cubierta". Si el servidor VPN está ubicado en otro país, parecerá que la conexión a Internet se estableció desde ese país. Para más detalles, puedes consultar [nuestro artículo sobre cómo funciona una VPN](/general/how-vpn-works).

AdGuard VPN tiene varias funciones:

- Oculta tu paradero real y te ayuda a permanecer en el anonimato
- Cambia tu dirección IP para proteger tus datos del seguimiento
- Cifra tu tráfico y hace que los contenidos sean inaccesibles para los estafadores
- Te permite configurar dónde utilizar la VPN y dónde no (característica de exclusiones)

La siguiente ventaja de AdGuard VPN para iOS es nuestro propio protocolo VPN. Es extremadamente difícil de detectar en comparación con otros protocolos VPN y es estable incluso con una mala conexión a Internet. [Leer más sobre el Protocolo AdGuard VPN](/general/adguard-vpn-protocol).

## Cómo utilizar AdGuard VPN para iOS

Para utilizar AdGuard VPN para iOS, primero debe iniciar sesión en su [cuenta de AdGuard](https://adguardaccount.com/). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard, o a través de Google, Apple ID o Facebook (si su cuenta de AdGuard se registró con la misma dirección de correo electrónico).

Si todavía no tienes una cuenta de AdGuard, tendrás que crearla primero.

Usar AdGuard VPN es bastante fácil. En la pantalla principal puedes ver el botón *Conectar* (*Desconectar*) y la lista de servidores disponibles (*ubicaciones*). Los servidores tienen su propia ubicación (un país y una ciudad determinados) y un indicador de ping.

El ping muestra el tiempo de respuesta del servidor en milisegundos. Esto indica qué tan rápida será la conexión VPN cuando te conectes a esa ubicación. Elegir un servidor con un ping de 22 ms significa que un paquete de datos enviado a este servidor será devuelto en 22 ms.

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Pantalla principal y ubicaciones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Exclusiones

Puedes encontrar la pestaña de Exclusiones tocando el segundo icono en la barra inferior.

De forma predeterminada, AdGuard VPN está activo para todos los sitios web, excepto para aquellos añadidos a las Exclusiones. También puedes activarlo de forma selectiva: la VPN estará activa solo para los sitios web especificados. Para cambiar a este modo, toque *Cambiar modo*.

:::note

Cada modo tiene su propia lista de exclusiones.

:::

Puedes agregar dominios (por ejemplo, `google.com`) o subdominios (por ejemplo, `news.google.com`) de sitios web a las listas de tres maneras:

- Ingresa los datos manualmente en la app
- [Elige entre las listas de dominios para servicios populares](#domain-lists-for-popular-services)
- Agrégalos directamente desde el navegador compartiendo las páginas deseadas a la aplicación AdGuard VPN

![Exclusiones *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Cuando agregas un dominio manualmente, todos los subdominios se agregan automáticamente (aparece como `*.google.com`). ¿Deseas mantener solo google.com o desactivar la VPN para un dominio específico? Toca la línea con el sitio web; esto abrirá una pantalla separada donde puedes administrar subdominios. Simplemente desmarca las casillas de las que no necesites.

![Subdominios *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Si agregas manualmente un subdominio, el dominio principal también se agregará, pero la casilla de verificación junto a él no estará seleccionada.

### Listas de dominios para servicios populares

Los servicios grandes como Google son complicados. Normalmente utilizan más de un dominio: uno para archivos multimedia, otro para la API y otros dominios para diferentes países. Por ejemplo, en el caso de Google, tenemos 416 dominios en nuestra lista: todos deben ser añadidos a las exclusiones para desactivar (o activar) completamente la VPN para el servicio.

Así es como puedes añadir todos los dominios necesarios de un servicio popular a la lista de exclusiones:

1. Abre *Exclusiones*.
2. Toca *Agregar sitio web*.
3. Presiona *De la lista*.
4. Busca el servicio deseado en la lista y toca *Agregar*.

![Lista de servicios populares *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Exclusiones de importación/exportación

Otra función útil es la importación y exportación de lista de exclusiones. De esta manera puedes compartir la lista de exclusiones desde y hacia otros dispositivos.

Puedes hacerlo en cuatro pasos:

1. Abre AdGuard VPN en el dispositivo desde donde deseas exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip`.

2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas, General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto más adelante), o simplemente deje el archivo con los archivos como está.

3. Al transferir entre diferentes dispositivos, no olvides enviar el archivo `.zip` al dispositivo para su importación. Por ejemplo, si importa listas de exclusión desde su dispositivo iOS a su Mac, asegúrese de enviar previamente el archivo `.zip` a su Mac.

4. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones listas. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

**En AdGuard VPN para iOS, las funciones de exportar e importar se pueden acceder tocando el icono de tres puntos en la esquina superior derecha de la pantalla Exclusiones**.

![Importar/exportar exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Ubicaciones guardadas

Esta función te permite guardar tus ubicaciones de servidor favoritas en una pestaña dedicada para que puedas acceder rápidamente a ellas sin necesidad de buscarlas o desplazarte por toda la lista.

Para agregar una ubicación a *Guardado*, simplemente desliza hacia la izquierda sobre ella. Para quitarlo de *Guardado*, haz lo mismo:

![Ubicaciones guardadas añadir quitar *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Configuración general

Para abrir la configuración general:

1. Pulsa el icono de Configuración (⚙) en la esquina inferior derecha de la pantalla principal de la aplicación.
2. Presiona *General*.

Aquí puedes configurar AdGuard VPN para iOS según tus necesidades utilizando diferentes opciones: *servidor DNS*, *Tema*, *Avanzado*, *enviar datos técnicos e de interacción* y *Kill Switch*.

![Configuración general *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Servidor DNS

AdGuard VPN para iOS ofrece la posibilidad de elegir entre varios servidores DNS, cada uno con sus propias cualidades especiales. Por ejemplo, AdGuard DNS elimina anuncios y protege tu dispositivo contra el seguimiento, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con búsqueda segura y bloqueo de contenido adulto. Los servidores DNS de diferentes proveedores de DNS también pueden funcionar más rápido o más lento dependiendo de tu ubicación, ISP y otros factores. Elige el que mejor se adapte a tus necesidades. Puedes [obtener más información sobre DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) y sus características.

![Pantalla del servidor DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

Puedes configurar el tema de tu app en Sistema, Oscuro o Claro (disponible en iOS 13 o posterior).

### Configuración avanzada

En la configuración de *Avanzado*, puedes encontrar 4 secciones: *Modo de funcionamiento*, *Nivel de registro*, *Exportar registros e información del sistema* e *Información de diagnóstico*.

#### Modo de funcionamiento

AdGuard VPN para iOS puede funcionar en dos modos: **VPN** e **Integrado**.

El modo *VPN* utiliza el [Protocolo AdGuard VPN](/general/adguard-vpn-protocol), que proporciona la mejor combinación de velocidad y seguridad. En este modo, AdGuard VPN no funcionará con el [bloqueador de anuncios AdGuard para iOS](https://adguard.com/adguard-ios/overview.html).

En el modo **Integrado**, AdGuard VPN podrá funcionar al mismo tiempo con el bloqueador de anuncios AdGuard para iOS utilizando el protocolo IPSec. Este protocolo también es seguro, pero un poco más lento y fácil de detectar. No es necesario realizar ninguna acción adicional para la configuración de la integración: solo tienes que instalar ambas apps y cambiar a este modo.

:::note

En el modo **Integrado**, no puedes usar la función de Exclusiones ni elegir un servidor DNS.

:::

#### Nivel de registro

Esta configuración se utiliza principalmente para fines de depuración y resolución de problemas. Los niveles de registro Extendido y Extremo registran información más detallada que puede ayudar a identificar y solucionar varios problemas o errores.

:::caution

**No se recomienda habilitar el nivel de registro Extendido o Extremo a menos que lo solicite nuestro equipo de atención al cliente**.

:::

#### Exportar registros e información del sistema

Esta opción se puede utilizar para enviar los registros de la app y la información del sistema a nuestro soporte o a cualquier otra persona.

#### Datos de diagnóstico

Esta opción te permite exportar información técnica que puede ser útil para resolver problemas y, a veces, es solicitada por nuestro soporte y desarrolladores.

#### Protocolo AdGuard VPN

![Selecciona el protocolo de VPN *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

De forma predeterminada, el Protocolo AdGuard VPN utiliza la selección dinámica de protocolo VPN (opción *Selección automática*). Eso significa que AdGuard VPN determina automáticamente qué protocolo — HTTP2/TLS o HTTP3/QUIC — te ofrecerá el mejor rendimiento y cambia a él al instante. Esto mejora la velocidad y estabilidad del VPN, lo cual es especialmente útil en regiones donde el uso del VPN está restringido o es inestable.

Si lo deseas, puedes cambiar AdGuard VPN para que use solo el protocolo HTTP2/TLS o HTTP3/QUIC en lugar de la *Selección automática*. Cada protocolo tiene sus puntos fuertes, pero la mejor opción puede variar según tu ubicación, las condiciones de la red e incluso el servidor al que te conectes.

### Enviar datos técnicos y de interacción

Al activar esta opción, nos ayudas a comprender mejor cómo los usuarios interactúan con la app. Utilizamos esa información para mejorar la experiencia del usuario.

### Kill Switch

Si por algún motivo tu conexión VPN se interrumpe repentinamente, *Interruptor de apagado* finalizará automáticamente la conexión a Internet, asegurando que tus datos no se filtren y que tu identidad permanezca oculta.

## Acciones rápidas

Las Acciones rápidas son la forma conveniente de realizar acciones útiles o cualquier acción específica de una app desde la pantalla de inicio sin abrir una app.

Para acceder al menú de Acciones rápidas, mantén pulsado el icono de la aplicación AdGuard VPN y luego levanta el dedo. En el menú abierto, verás las acciones rápidas de AdGuard VPN: *Conectar* (*Desconectar*) y *Seleccionar ubicación*. Por supuesto, también se puede acceder a todas las acciones predeterminadas, como quitar la app o mover o compartir la app.

![Acciones rápidas *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Asistencia técnica

La pantalla de soporte (*Configuración* → *Soporte*) tiene varias funciones útiles: *Preguntas frecuentes*, *Reportar un error*, *Solicitar una función* y *Calificar la app*. La última opción te permite calificar AdGuard VPN en App Store.

![Soporte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Pantalla de suscripción

Si estás utilizando la versión gratis de AdGuard VPN, habrá otra pestaña con un icono de flecha en la barra de pestañas inferior. Esta sección describe brevemente los principales beneficios de la versión de pago de la app. Puedes elegir una suscripción anual o mensual.

![Suscripción *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
