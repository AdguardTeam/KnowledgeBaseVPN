---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para iOS?

Una VPN le permite crear una conexión segura a otra red en Internet. Conecta la computadora o dispositivo móvil de un usuario a un servidor y te permite navegar por la red utilizando una dirección IP "encubierta". Si el servidor VPN está ubicado en otro país, parecerá que la conexión a Internet se estableció desde allá. [Obtén más información](/general/how-vpn-works) sobre cómo funciona una VPN en detalle.

AdGuard VPN tiene varias funciones:

- oculta tu paradero real y te ayuda a permanecer en el anonimato
- cambia tu dirección IP para proteger tus datos del seguimiento
- cifra tu tráfico y hace que los contenidos sean inaccesibles para los estafadores
- le permite configurar dónde usar VPN y dónde no (función de exclusiones)

La siguiente ventaja de AdGuard VPN para iOS es nuestro propio protocolo VPN. Es extremadamente difícil de detectar en comparación con otros protocolos VPN y es estable incluso con una mala conexión a Internet. Puedes [leer más](/general/adguard-vpn-protocol) sobre el protocolo AdGuard VPN.

## Cómo utilizar AdGuard VPN para iOS

Para utilizar AdGuard VPN para iOS, primero debe iniciar sesión en su cuenta de [AdGuard](https://my.adguard.com/). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard, o a través de Google, Apple ID o Facebook (si su cuenta de AdGuard se registró con la misma dirección de correo electrónico).

Si todavía no tiene una cuenta de AdGuard, tendrá que crearla primero.

Usar AdGuard VPN es bastante fácil. En la pantalla principal puede ver el botón *Conectar/Desconectar* y la lista de servidores disponibles. Los servidores tienen su propia ubicación (un país y una ciudad determinados) y un indicador de ping. El ping muestra el tiempo de respuesta del servidor (en milisegundos). Elegir el servidor con un ping de 22 ms significa que un paquete de datos enviado a este servidor se devuelve (se vuelve a recibir) después de 22 ms. En AdGuard VPN es posible elegir entre más de 50 ubicaciones en docenas de países.

![Pantalla principal y ubicaciones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusiones

Puedes encontrar las Exclusiones tocando el botón central a continuación. Allí verá dos listas de exclusión, para los modos General y Selectivo. En el modo General, la VPN funciona para todos los sitios web excepto los excluidos. Por el contrario, en el modo Selectivo, la VPN sólo funciona para los sitios web de la lista. Puedes añadir dominios (por ejemplo, `google.com`) o subdominios (por ejemplo, `*.google.com`) de sitios web de dos maneras: puedes ingresarlos manualmente en la aplicación o directamente desde el navegador compartiendo las páginas deseadas con AdGuard VPN.

![Exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Otra función útil es la importación/exportación de listas de exclusión. Puede hacerlo siguiendo los siguientes cuatro pasos:

1. Abra AdGuard VPN en el dispositivo/navegador desde el que desea exportar sus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip`.

2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas, General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto más adelante), o simplemente deje el archivo con los archivos como está.

3. Al transferir entre diferentes dispositivos, no olvides enviar el archivo `.zip` al dispositivo para su importación. Por ejemplo, si importa listas de exclusión desde su dispositivo iOS a su Mac, asegúrese de enviar previamente el archivo `.zip` a su Mac.

4. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones listas. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

![Importar/exportar exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configuración de la aplicación

Para llegar a la configuración de la App:

1. Pulse el botón de Configuración (⚙) en la esquina inferior derecha de la pantalla principal de la aplicación AdGuard VPN
2. Toque *Configuración de la aplicación*

Aquí, puedes configurar AdGuard VPN para iOS como necesites usando diferentes opciones: Modo de funcionamiento, Servidor DNS, Autoprotección Wi-Fi, Tema de color y Ajustes avanzados.

![Configuración de la aplicación *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modo de funcionamiento

AdGuard VPN para iOS puede funcionar en dos modos: **General** y **Integrado**.

En el modo **General**, se emplea el [protocolo AdGuard VPN](/general/adguard-vpn-protocol), que proporciona la mejor combinación de velocidad y seguridad. En este modo, AdGuard VPN no podrá funcionar junto al [ bloqueador de anuncios AdGuard para iOS](https://adguard.com/kb/adguard-for-ios/overview/).

En el modo **Integrado**, AdGuard VPN podrá funcionar al mismo tiempo con el bloqueador de anuncios AdGuard para iOS utilizando el protocolo IPSec. Este protocolo también es seguro, pero un poco más lento y más fácil de detectar. No es necesario realizar ninguna acción adicional para configurar la integración: basta con instalar ambas aplicaciones y cambiar a este modo.

:::note

En el modo **Integrado**, no puedes usar la función Exclusiones ni elegir un servidor DNS.

:::

### Servidor DNS

Los servidores DNS traducen un nombre de dominio o de host (por ejemplo, example.com o www.example.com) en algo que los navegadores puedan entender, es decir, direcciones IP. AdGuard VPN para iOS ofrece la posibilidad de elegir entre varios servidores DNS, cada uno con sus propias cualidades especiales. Por ejemplo, AdGuard DNS elimina anuncios y protege tu dispositivo contra el seguimiento, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con búsqueda segura y bloqueo de contenido adulto. Los servidores DNS de diferentes proveedores de DNS también pueden funcionar más rápido o más lento dependiendo de tu ubicación, ISP y otros factores. Elige el que mejor se adapte a tus necesidades. Puedes [obtener más información sobre DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) y sus características.

![Pantalla del servidor DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Autoprotección Wi-Fi

La VPN se activa automáticamente cuando el dispositivo se conecta a una red Wi-Fi.

### Tema

Puedes elegir el tema de la aplicación predeterminado como oscuro, claro o del sistema (disponible en iOS 13 y versiones posteriores).

### Configuración avanzada

En *Configuración avanzada*, puedes encontrar dos secciones: Nivel de registro e Información de diagnóstico. En cuanto a la primera opción, no se recomienda activar el nivel de registro ampliado a menos que lo solicite nuestro equipo de soporte. La información de diagnóstico, información técnica almacenada localmente sobre el dispositivo y las conexiones (dirección IP, ID, ping, etc.) puede ser enviada a nosotros en caso de cualquier problema técnico.

## Acciones rápidas (disponibles en iOS 13 o posterior)

Para acceder a esta función, mantén pulsado el icono de la aplicación y levanta el dedo. Verás acciones rápidas: Conectar/Desconectar, Seleccionar ubicación, Editar pantalla de inicio y Eliminar app.

![Acciones rápidas *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Asistencia técnica

Hay una variedad de funciones de ayuda en la aplicación (toca el botón *Configuración* en la parte inferior derecha y luego *Soporte*): puedes ver la sección de preguntas frecuentes, informar de un error, dejar comentarios, discutir tus problemas y sugerencias en las redes sociales o en GitHub, calificar AdGuard VPN para iOS en la App Store y exportar registros.

![Soporte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Suscripción

Si estás utilizando la versión gratuita de AdGuard VPN, habrá una cuarta pestaña con un icono de flecha en la barra de pestañas inferior. En esta sección, encontrarás una breve información sobre las principales ventajas de la versión de pago de la aplicación y podrás comprar una suscripción.

![Suscripción *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
