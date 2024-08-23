---
title: Resumen de características
sidebar_position: 1
---

## Pantalla principal

La pantalla principal refleja el estado de la VPN (Conectado/Desconectado). También hay el botón *Conectar/Desconectar* y una lista de servidores disponibles.

Cada servidor tiene su ubicación y su velocidad de ping, que describe el tiempo de respuesta del servidor. Cuanto menor sea esta velocidad de ping, más rápida será la conexión. Los servidores más rápidos siempre aparecen en la parte superior de la lista, la cual cuenta con más de 50 ubicaciones en decenas de países. Puedes conectarte al servidor más rápido tocando el botón *Conectar* o eligiendo una ubicación.

## Exclusiones

Las listas de exclusiones te permiten administrar la conexión VPN para sitios web y aplicaciones específicas. Para acceder a *Exclusiones*, toca el segundo ícono de la izquierda en la parte inferior de la pantalla.

![Exclusiones *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Por ejemplo, si excluyes manualmente el dominio `yahoo.com`, todos los subdominios `*.yahoo.com` también se añadirán a la lista de exclusiones. Sin embargo, no se excluirán los nombres de dominio con otros dominios de nivel superior, como `yahoo.jp` o `yahoo.fr`.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Totalmente habilitado** se indica con una marca de verificación blanca sobre un fondo verde
- **Parcialmente habilitado** (subdominios habilitados sin el dominio principal) está marcado con un cuadrado verde sobre fondo blanco
- **Totalmente deshabilitado** está marcado con una casilla de verificación en blanco

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Exclusiones de aplicaciones *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

En *Modo integrado*, solo puedes administrar aplicaciones a través del bloqueador de anuncios AdGuard.

:::

## Configuración

Puedess acceder a *Configuración* presionando el ícono de ajustes en la parte inferior derecha de la pantalla.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

*El modo de funcionamiento* te permite especificar cómo se enruta tu tráfico. Hay tres modos: VPN, SOCKS5 y modo integrado. En el modo *VPN*, todo el tráfico se enruta a través de AdGuard VPN. En el modo *SOCKS5*, AdGuard VPN ejecuta un servidor proxy local que otras aplicaciones pueden utilizar para enrutar el tráfico. *El modo integrado* permite que AdGuard VPN y el bloqueador de anuncios AdGuard funcionen juntos.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Puedes administrar la protección DNS y enrutar aplicaciones a través de tu proxy AdGuard VPN en la app bloqueador de anuncios AdGuard.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

La última sección de *Configuración avanzada* es *Configuración de bajo nivel*. Le recomendamos que no ingrese a esta sección a menos que esté altamente calificado o nuestro equipo de soporte se lo haya pedido. Aquí es posible habilitar el registro de la interfaz TUN o el protocolo IPv6 en la interfaz VPN, elegir un puerto de servidor proxy o la versión del protocolo de Internet que se debe usar.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you may experience problems connecting to the Internet. And vice versa.

:::

### Asistencia técnica

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
