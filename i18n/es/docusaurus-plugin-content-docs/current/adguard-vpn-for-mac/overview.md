---
title: Resumen de características
sidebar_position: 1
---

AdGuard VPN para Mac es un servicio de VPN para desktop. AdGuard VPN es totalmente compatible con AdGuard Ad Blocker, se pueden utilizar juntos y funcionarán sin problemas. Veamos qué características ofrece.

Ten en cuenta que **no puedes utilizar AdGuard VPN para Mac a menos que hayas iniciado sesión en tu cuenta de AdGuard**. Puedes iniciar sesión con tu cuenta de AdGuard o con una cuenta externa, es decir, a través de Apple, Google o Facebook. Asegúrese de que tu cuenta externa esté vinculada a la misma dirección de correo electrónico que tu cuenta de AdGuard. Si hay una suscripción adecuada en tu cuenta de AdGuard, ella se activará automáticamente en la aplicación para desktop. ¿Aún no tiene una cuenta de AdGuard? Créalo [aquí](https://auth.adguard.com/registration.html).

:::note Compatibilidad

AdGuard VPN para Mac actualmente es compatible con las versiones de macOS a partir de macOS Catalina (10.15).

:::

## Pantalla de inicio

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

La primera pestaña es la pantalla *de inicio* . Aquí puedes ver el estado actual de AdGuard VPN, la localidad elegida (si se ha habilitado) y su `ping`. Ping es el tiempo de respuesta de un servidor VPN. Cuanto menor sea el número, más rápida es la conexión. Si la VPN es deshabilitada, la última localidad a la cual uno se ha conectado es mostrada en la parte inferior.

Las localidades más rápidas con los tiempos de respuesta más bajos son mostradas en la parte superior derecha de la pantalla. There is also a refresh button that you can click if any locations are offline. A continuación puedes ver la lista completa de ubicaciones. The search field makes it easy to find the location you need.

:::note

Los usuarios de la versión gratuita sólo pueden conectarse a determinadas ubicaciones, mientras que otras están bloqueadas. Además, hay un límite de tráfico mensual de 3GB en la versión gratuita.

:::

## Exclusiones

![Exclusiones](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Pantalla de exclusiones](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Además, no sólo puede añadir sitios web a las exclusiones, sino también elegir entre las listas de servicios populares. Las listas se dividen en ocho categorías: Redes sociales, Mensajeros, Servicios de streaming de video y música, Juegos, Compras, Motores de búsqueda y Herramientas de comunicación laboral. ¡Cualquiera de estos servicios se puede agregar a Exclusiones con un solo clic! Eso es especialmente conveniente si se utiliza el modo selectivo.

La lista de exclusión se puede configurar fácilmente. Si has añadido un dominio y algunos de sus subdominios, se agruparán dentro del dominio root. Al agregar un dominio root (`ejemplo.com`) también se agrega su máscara (`*.ejemplo.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

Si agregó un servicio, cambió o eliminó algo y ahora desea recuperar la configuración inicial, simplemente presione *Restablecer al predeterminado * junto al dominio: esta acción restaurará los dominios faltantes y marcará todas las casillas de verificación.

Además, las listas de exclusiones ya definidas se pueden transferir a otros dispositivos con AdGuard VPN instalado. Para exportar las exclusiones, siga los cuatro pasos que se indican a continuación:

1. Abra AdGuard VPN en el dispositivo desde donde desea exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip` .
2. Hay dos archivos `.txt` dentro del fichero, cada uno para listas General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto adelante), o simplemente deje el archivo con los ficheros como está.
3. Al transferir entre diferentes dispositivos, no olvide enviar el archivo `.zip` al dispositivo para importarlo. Por ejemplo, si importas listas de exclusión de tu Mac a tu iPhone, asegúrate de enviar previamente el archivo `.zip` a tu teléfono.
4. Abra AdGuard VPN en el dispositivo/navegador donde desea importar el archivo con las listas listas de exclusiones. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo. ¡Listo!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Soporte

![Pantalla de Centro de Asistencia](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). Y no dudes en [dejar tu opinión sobre nuestro producto](https://surveys.adguard.com/vpn_mac/form.html), te lo agradeceremos.

## Configuración

![Configuración](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finalmente, llegamos a la pestaña Configuración. En la sección *Acerca del programa* , puedes ver la versión actual de AdGuard VPN, buscar actualizaciones, visitar nuestro sitio web oficial y familiarizarte con el EULA y la política de privacidad de AdGuard. En la sección *Acerca de la licencia*, puedes actualizarla de gratuita a ilimitada, administrar tu suscripción o cerrar sesión. Y lo más importante, desde aquí puedes acceder a *Configuración general*.

### Configuración de la app

![Configuración de la app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Las primeras cuatro características básicas hacen que la aplicación sea más conveniente y fácil de usar, es decir *Kill Switch*, *Actualización automática*, *Iniciar AdGuard VPN al iniciar sesión*y *Conexión automática al iniciar la aplicación*. Además, puedes elegir entre temas claros, oscuros y del sistema; el último coincide con el tema de tu Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Esto puede ser útil si quieres adjuntar registros a tu mensaje para el soporte.

### Servidores DNS

![Servidores DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Configuración avanzada

![Configuración avanzada](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Nivel de registro

Solo hay dos niveles de registro, pero te recomendamos encarecidamente que utilices el primero, el predeterminado. La segunda opción (registro extendido) debe configurarse solo para registrar un comportamiento extraño del programa después de consultar con nuestro soporte técnico. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Ocultar icono de la barra de menú

Aunque esta opción se encuentra en *Configuración avanzada*, se puede habilitar sin dudarlo. Puedes ocultar el ícono de AdGuard VPN de la barra de menú, esto no impedirá que nuestra aplicación se ejecute en segundo plano.

#### Use QUIC

El protocolo de comunicación QUIC es la última y más avanzada versión de HTTP. Activa el interruptor para obtener una mejor calidad de conexión en condiciones no ideales, mientras utilizas los datos móviles en el metro o el ascensor, por ejemplo.
