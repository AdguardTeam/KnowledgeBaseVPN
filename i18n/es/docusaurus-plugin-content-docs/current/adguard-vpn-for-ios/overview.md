---
title: Resumen de características
sidebar_position: 1
---

## Qué es AdGuard VPN para iOS?

Una VPN le permite crear una conexión segura a otra red en Internet. It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN tiene varias funciones:

- oculta tu paradero real y te ayuda a permanecer en el anonimato
- cambia tu dirección IP para proteger tus datos del seguimiento
- cifra tu tráfico y hace que los contenidos sean inaccesibles para los estafadores
- le permite configurar dónde usar VPN y dónde no (función de exclusiones)

La siguiente ventaja de AdGuard VPN para iOS es nuestro propio protocolo VPN. Es extremadamente difícil de detectar en comparación con otros protocolos VPN y es estable incluso con una mala conexión a Internet. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## Cómo utilizar AdGuard VPN para iOS

Para utilizar AdGuard VPN para iOS, primero debe iniciar sesión en su cuenta de [AdGuard](https://my.adguard.com/). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard, o a través de Google, Apple ID o Facebook (si su cuenta de AdGuard se registró con la misma dirección de correo electrónico).

If you don’t have an AdGuard account yet, you will have to create it first.

Usar AdGuard VPN es bastante fácil. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![Pantalla principal y ubicaciones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![Exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip`.

2. Hay dos archivos `.txt` dentro del fichero, uno para cada una de las listas, General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto más adelante), o simplemente deje el archivo con los archivos como está.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. Por ejemplo, si importa listas de exclusión desde su dispositivo iOS a su Mac, asegúrese de enviar previamente el archivo `.zip` a su Mac.

4. Abra AdGuard VPN en el dispositivo en el que desea importar el archivo con las listas de exclusiones listas. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![Importar/exportar exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Tap the Settings icon (⚙) in the bottom right corner of the app’s main screen.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Servidor DNS

AdGuard VPN para iOS ofrece la posibilidad de elegir entre varios servidores DNS, cada uno con sus propias cualidades especiales. Por ejemplo, AdGuard DNS elimina anuncios y protege tu dispositivo contra el seguimiento, mientras que AdGuard DNS Family Protection combina las funciones de AdGuard DNS con búsqueda segura y bloqueo de contenido adulto. Los servidores DNS de diferentes proveedores de DNS también pueden funcionar más rápido o más lento dependiendo de tu ubicación, ISP y otros factores. Elige el que mejor se adapte a tus necesidades. Puedes [obtener más información sobre DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) y sus características.

![Pantalla del servidor DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### Configuración avanzada

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Modo de funcionamiento

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Acciones rápidas *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Asistencia técnica

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Soporte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Suscripción *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
