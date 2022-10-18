---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para iOS

Una VPN le permite crear una conexión segura a otra red en Internet. Conecta la computadora o el dispositivo móvil de un usuario a un servidor y le permite navegar por la red utilizando la dirección IP de otra persona. Así, si el servidor VPN está situado en un país diferente, parecerá que se ha conectado a Internet desde ese país. [Obtenga más información](/general/how-vpn-works.md) sobre cómo funciona una VPN en detalle.

Hablando de AdGuard VPN, la app tiene varias funciones:
* oculta tu paradero real y te ayuda a permanecer en el anonimato
* cambia su dirección IP para proteger sus datos del seguimiento
* encripta su tráfico para que sea inalcanzable para los estafadores
* le permite configurar dónde usar VPN y dónde no (función de exclusiones)

La siguiente ventaja de AdGuard VPN para iOS es nuestro propio protocolo VPN. Hay dos ventajas principales: en comparación con otros protocolos VPN, es extremadamente difícil de detectarla y funciona de manera estable incluso con una conexión a Internet deficiente. Usted puede leer más sobre el protocolo de AdGuard VPN [en este artículo](../general/adguard-vpn-protocol.mdx).

## Cómo utilizar AdGuard VPN para iOS

Para utilizar AdGuard VPN para iOS, primero debe iniciar sesión en su cuenta de [AdGuard](https://my.adguard.com/). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard, o a través de Google, Apple ID o Facebook (si su cuenta de AdGuard se registró con la misma dirección de correo electrónico).

Si todavía no tiene una cuenta de AdGuard, tendrá que crearla primero.

Usar AdGuard VPN es bastante fácil. En la pantalla principal puede ver el botón *Conectar/Desconectar* y la lista de servidores disponibles. Los servidores tienen su propia ubicación (un país y una ciudad determinados) y un indicador de ping. El ping describe el tiempo de respuesta del servidor (en milisegundos). Por ejemplo, elegir el servidor con el ping de 22 ms significa que la señal llegará al servidor y volverá en 22 milisegundos. Por lo tanto, cuanto más baja sea esta tasa, más rápida será su conexión. En AdGuard VPN es posible elegir entre más de 50 ubicaciones en docenas de países.

![Pantalla principal y ubicaciones](https://cdn.adguard.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusiones

Usted puede encontrar la función de exclusión pulsando el botón central de abajo. Allí verá dos listas de exclusión - para los modos regular y selectivo. En el modo Regular, la VPN funciona en todos los sitios web excepto en los de la lista de exclusión. En el modo Selectivo, por el contrario, la VPN opera solo en los sitios de la lista. Se puede agregar dominios (p. ej., `google.com`) o subdominios (p. ej., `*.google.com`) de sitios web de dos maneras: puede ingresarlos manualmente en la aplicación o directamente desde el navegador haciendo clic en el botón *Compartir* y encontrando AdGuard VPN en la lista abierta a continuación.

![Exclusiones](https://cdn.adguard.com/content/kb/vpn/ios/2.png?123)

Otra función útil es la importación/exportación de listas de exclusión. Puede hacerlo siguiendo los siguientes cuatro pasos:

1. Abra AdGuard VPN en el dispositivo/navegador desde el que desea exportar sus listas de exclusiones. Busque la sección correspondiente y haga clic en el botón *Exportar* . Se descargará el archivo `exclusions.zip`.

2. Hay dos archivos `.txt` dentro del fichero, uno para cada lista regular y selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto más adelante), o simplemente deje el archivo con los archivos como está.

3. Al transferir entre diferentes dispositivos, no olvides enviar el archivo `.zip` al dispositivo para su importación. Por ejemplo, si importa listas de exclusión desde su dispositivo iOS a su Mac, asegúrese de enviar previamente el archivo `.zip` a su Mac.

4. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones listas. Busque la sección correspondiente, haga clic en el botón *Importar* y seleccione el archivo.

![Exclusiones de importación/exportación](https://cdn.adguard.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configuración de la aplicación

Para llegar a la configuración de la App:

1. Pulse el botón de Configuración (⚙) en la esquina inferior derecha de la pantalla principal de la aplicación AdGuard VPN
2. Toque *Configuración de la aplicación*

Aquí, puedes configurar AdGuard VPN para iOS como necesites usando diferentes opciones: Modo de funcionamiento, Servidor DNS, Autoprotección Wi-Fi, Tema de color y Ajustes avanzados.

![Configuración de la app](https://cdn.adguard.com/content/kb/vpn/ios/app-settings.png)

### Modo de funcionamiento

AdGuard VPN para iOS puede funcionar en dos modos: **General** y **Integrado**.

En el modo **General**, se emplea el protocolo [AdGuard VPN](../general/adguard-vpn-protocol.mdx), que proporciona la mejor combinación de velocidad y seguridad. En este modo, AdGuard VPN no podrá funcionar junto con [AdGuard Ad Blocker para iOS](https://kb.adguard.com/en/ios).

En el modo **Integrado**, AdGuard VPN podrá trabajar al mismo tiempo con el bloqueador de anuncios AdGuard para iOS utilizando el protocolo IPSec en su lugar. Este protocolo también es seguro, pero un poco más lento y más fácil de detectar. No es necesario realizar ninguna acción adicional para configurar la integración: basta con instalar ambas aplicaciones y cambiar a este modo.
> Tenga en cuenta que en el modo **Integrado** no se puede usar la función Exclusiones ni elegir un servidor DNS.

### Servidor DNS

El objetivo del Sistema de Nombres de Dominio (DNS) es traducir los nombres de los sitios web en algo que los navegadores puedan entender, es decir, las direcciones IP. Este trabajo lo realizan los servidores DNS. AdGuard VPN para iOS ofrece la posibilidad de elegir entre varios servidores DNS, cada uno con sus propias cualidades especiales. Por ejemplo, AdGuard DNS elimina los anuncios y protege su dispositivo del rastreo, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con SafeSearch y el bloqueo de contenido para adultos. Los servidores DNS de diferentes proveedores de DNS también pueden funcionar más rápido o más lento dependiendo de su ubicación, ISP y otros factores. Elija el que mejor se adapte a sus necesidades. Puede saber más sobre el DNS y sus características [en este artículo](https://kb.adguard.com/en/general/dns-filtering#what-is-dns).

![Pantalla del servidor DNS](https://cdn.adguard.com/content/kb/vpn/ios/dns-server.png)

### Autoprotección Wi-Fi

La VPN se activará automáticamente cuando el dispositivo se conecte a una red Wi-Fi.

### Tema

Puedes elegir el tema de la aplicación predeterminado como oscuro, claro o del sistema (disponible en iOS 13 y versiones posteriores).

### Configuración avanzada

En la página *Configuración avanzada* encontrará dos secciones: Nivel de registro e Información de diagnóstico. En cuanto a la primera opción, no se recomienda activar el nivel de registro ampliado a menos que lo solicite nuestro equipo de soporte. La información de diagnóstico, información técnica almacenada localmente sobre el dispositivo y las conexiones (dirección IP, ID, ping, etc.) puede ser enviada a nosotros en caso de cualquier problema técnico.

## Acciones rápidas (disponibles en iOS 13 o posterior)

Para acceder a esta función, mantén pulsado el icono de la aplicación y levanta el dedo. Verá una lista de acciones rápidas: Conectar/Desconectar al servidor actualmente seleccionado, Elegir ubicación para seleccionar una nueva ubicación del servidor. Por supuesto, también se puede acceder a todas las acciones predeterminadas, como eliminar la aplicación o mover el ícono de la aplicación.

![Acciones rápidas](https://cdn.adguard.com/content/kb/vpn/ios/quick-actions.png)


## Asistencia técnica

La realización de los usuarios es nuestra máxima prioridad. Por lo tanto, hay una variedad de funciones de ayuda en la aplicación (presione el botón configuración ** en la parte inferior derecha y luego **soporte): se puede ver la sección de preguntas frecuentes, informar un error, dejar comentarios, discutir sus problemas y sugerencias en nuestro foro, redes sociales, o GitHub, calificar AdGuard VPN para iOS en la App Store y exportar los registros.

![Asistencia técnica](https://cdn.adguard.com/content/kb/vpn/ios/support.png)

## Suscripción

Si está utilizando la versión gratuita de AdGuard VPN, habrá una cuarta pestaña con un icono de flecha en la barra de pestañas inferior. En esta sección encontrarás una breve información sobre las principales ventajas de la versión de pago de la aplicación y podrás comprar una suscripción.

![Suscripción](https://cdn.adguard.com/content/kb/vpn/ios/subscription_en.png?123)