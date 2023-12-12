---
title: Resumen de características
sidebar_position: 1
---

## Que es AdGuard VPN para Andriod?

Un VPN es una herramienta ideal que brinda seguridad y anonimato cada vez que navegas por Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. De esta manera, se preserva la confidencialidad de los datos, así como el anonimato del usuario, porque un observador de un tercer partido ve la dirección IP del servidor VPN y no la dirrecion IP verdadero del usuario.

**Una VPN se usa comúnmente para:**

- Mantener la seguridad de los datos personales incluso al usar Wi-Fi público
- Evitar el seguimiento de la actividad en línea al enmascarar la dirección IP
- Ocultar la geolocalización real para permanecer anónimo

AdGuard VPN para Android puede hacerlo todo por usted, e incluso ofrecer algo único. Para saber por qué AdGuard VPN es la mejor opción - lea [este artículo](/general/why-adguard-vpn).

## Cómo empezar usar AdGuard VPN para Android

Primeramente, descargue AdGuard VPN desde [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e inicie sesión en su cuenta de AdGuard. En caso de que no lo tenga, debe [crearlo](https://auth.adguard.com/login.html). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard. O hágalo a través de Google o Facebook, si su cuenta de AdGuard se registró utilizando la misma dirección de correo electrónico.

## Pantalla principal

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Cada servidor tiene su ubicación y su velocidad de ping, que describe el tiempo de respuesta del servidor. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Exclusiones

Hemos hecho todo lo posible para facilitarte la administración de las listas de exclusión de sitios y aplicaciones. AdGuard VPN solo funcionará donde usted elija.

### Listas de exclusiones

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Para llegar a la sección *Exclusiones*, toque el segundo icono de la izquierda en la parte inferior de la pantalla.

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

Puedes agregar dominios (p. ej., `google.com`) o subdominios (p. ej., `*.google.com`) de sitios web a las *Exclusiones* de tres maneras: ingrésalos manualmente en la aplicación o directamente desde el navegador haciendo clic en el *Comparta el botón* y selecciona AdGuard VPN en la lista abierta a continuación, o en las listas integradas de servicios divididas por categorías.

![Exclusiones](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Hay algunos detalles para la adición manual de dominios. Por ejemplo, si excluyes manualmente el dominio `yahoo.com`, todos los subdominios `*.yahoo.com` también se añadirán a la lista de exclusiones. Sin embargo, no se excluirán los nombres de dominio con otros dominios de nivel superior, como `yahoo.jp` o `yahoo.fr`. O puedes añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista. En este caso, es más seguro usar listas de servicios integradas, porque ponemos todos los subdominios relacionados con cada plataforma.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Buenas noticias: siempre puedes volver a la vista predeterminada de las listas de servicios en caso de que hayas eliminado o deshabilitado algún dominio desde allí.

![Exclusiones *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Otra función útil es *Exclusiones de importación/exportación*. Sólo son necesarios cuatro pasos para hacerlo:

1. Abre AdGuard VPN en el dispositivo/navegador desde donde deseas exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `adguard_vpn_exclusions.zip`.
2. There are two `.txt` files inside the archive, one for each of the lists. Agrega más exclusiones a ellos, elimina las existentes, cambia el nombre de los archivos (más sobre esto adelante), o simplemente deja el fichero con los archivos como está.
3. Al transferir entre diferentes dispositivos, no olvides enviar el fichero `.zip` al dispositivo para importarlo. Por ejemplo, si importas listas de exclusión desde tu dispositivo Windows a tu Android, asegúrate de enviar el fichero `.zip` a tu Android de antemano.
4. Abre AdGuard VPN en el dispositivo donde deseas importar el fichero con las listas listas de exclusiones. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo.

![Importar/Exportar *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Como mencionamos anteriormente, no solo los sitios web se pueden agregar fácilmente a las exclusiones. Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Configuración

Puedess acceder a *Configuración* presionando el ícono de ajustes en la parte inferior derecha de la pantalla. La primera sección es *Configuración de la aplicación*: configura AdGuard VPN para Android según tus necesidades seleccionando diferentes opciones.

![Configuración de aplicación *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Inicio automático de AdGuard VPN

El control deslizante cambiado a la derecha habilita un inicio automático de AdGuard VPN después del inicio del dispositivo.

### Servidores DNS

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. También hay una opción para agregar un servidor DNS personalizado.

### Protección automática

Esta función habilita AdGuard VPN automáticamente cuando tu dispositivo se conecta a una red celular o Wi-Fi.

### Kill Switch

Puedes configurar la función Kill Switch en tu dispositivo Android siguiendo sencillas instrucciones en la pantalla. ¿Por qué deberías hacerlo? Si por algún motivo tu conexión VPN se interrumpe repentinamente mientras estás utilizando una red móvil o Wi-Fi público, Kill Switch terminará automáticamente la conexión a Internet, evitando que hacker se apoderen de tu información.

Tenga en cuenta que si Kill Switch está activado, *Configuración de la app* y *Exclusiones* no funcionarán.

### Tema

Puedes elegir el tema por defecto, oscuro o claro de la aplicación.

![Tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Configuración avanzada

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Las dos secciones siguientes son *Nivel de registro* y *Información de diagnóstico*. En cuanto a la primera opción, no se recomienda activar el nivel de registro Ampliado o Extremo a menos que lo solicite nuestro equipo de soporte. Se nos puede enviar información de diagnóstico y información técnica almacenada localmente sobre el dispositivo y las conexiones (dirección IP, ID, ping, etc.), en caso de cualquier problema técnico.

La última sección de *Configuración avanzada* es *Configuración de bajo nivel*. Le recomendamos que no ingrese a esta sección a menos que esté altamente calificado o nuestro equipo de soporte se lo haya pedido. Aquí es posible habilitar el registro de la interfaz TUN o el protocolo IPv6 en la interfaz VPN, elegir un puerto de servidor proxy o la versión del protocolo de Internet que se debe usar.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Asistencia técnica

En la sección *Soporte* puede dejar comentarios, informar un error o exportar registros e información del sistema para enviarlos al servicio de asistencia.
