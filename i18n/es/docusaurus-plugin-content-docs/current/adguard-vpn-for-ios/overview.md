---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para iOS?

Una VPN le permite crear una conexión segura a otra red en Internet. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN has several functions:

- oculta tu paradero real y te ayuda a permanecer en el anonimato
- cambia su dirección IP para proteger tus datos del seguimiento
- encrypts your traffic and makes contents inaccessible to scammers
- le permite configurar dónde usar VPN y dónde no (función de exclusiones)

La siguiente ventaja de AdGuard VPN para iOS es nuestro propio protocolo VPN. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Cómo utilizar AdGuard VPN para iOS

Para utilizar AdGuard VPN para iOS, primero debe iniciar sesión en su cuenta de [AdGuard](https://my.adguard.com/). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard, o a través de Google, Apple ID o Facebook (si su cuenta de AdGuard se registró con la misma dirección de correo electrónico).

Si todavía no tiene una cuenta de AdGuard, tendrá que crearla primero.

Usar AdGuard VPN es bastante fácil. En la pantalla principal puede ver el botón *Conectar/Desconectar* y la lista de servidores disponibles. Los servidores tienen su propia ubicación (un país y una ciudad determinados) y un indicador de ping. The ping shows the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. En AdGuard VPN es posible elegir entre más de 50 ubicaciones en docenas de países.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusiones

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Otra función útil es la importación/exportación de listas de exclusión. Puede hacerlo siguiendo los siguientes cuatro pasos:

1. Abra AdGuard VPN en el dispositivo/navegador desde el que desea exportar sus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip`.

2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas, General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto más adelante), o simplemente deje el archivo con los archivos como está.

3. Al transferir entre diferentes dispositivos, no olvides enviar el archivo `.zip` al dispositivo para su importación. Por ejemplo, si importa listas de exclusión desde su dispositivo iOS a su Mac, asegúrese de enviar previamente el archivo `.zip` a su Mac.

4. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones listas. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configuración de la aplicación

Para llegar a la configuración de la App:

1. Pulse el botón de Configuración (⚙) en la esquina inferior derecha de la pantalla principal de la aplicación AdGuard VPN
2. Toque *Configuración de la aplicación*

Aquí, puedes configurar AdGuard VPN para iOS como necesites usando diferentes opciones: Modo de funcionamiento, Servidor DNS, Autoprotección Wi-Fi, Tema de color y Ajustes avanzados.

![App Settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modo de funcionamiento

AdGuard VPN para iOS puede funcionar en dos modos: **General** y **Integrado**.

In **General** mode, the [AdGuard VPN protocol](/general/adguard-vpn-protocol) is employed, which provides the best combination of speed and security. En este modo, AdGuard VPN no podrá funcionar junto al [ bloqueador de anuncios AdGuard para iOS](https://adguard.com/kb/adguard-for-ios/overview/).

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard Ad Blocker for iOS by using the IPSec protocol instead. Este protocolo también es seguro, pero un poco más lento y más fácil de detectar. No es necesario realizar ninguna acción adicional para configurar la integración: basta con instalar ambas aplicaciones y cambiar a este modo.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### Servidor DNS

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Autoprotección Wi-Fi

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Tema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Configuración avanzada

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Acciones rápidas (disponibles en iOS 13 o posterior)

To access this feature, touch and hold the app icon, then lift your finger. You'll see quick actions: Connect/Disconnect, Select location, Edit Home Screen, and Remove app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Asistencia técnica

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Suscripción

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
