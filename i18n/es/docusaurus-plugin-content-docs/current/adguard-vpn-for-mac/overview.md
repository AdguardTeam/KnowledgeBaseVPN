---
title: Resumen de características
sidebar_position: 1
---

AdGuard VPN para Mac es un servicio de VPN para desktop. AdGuard VPN es totalmente compatible con AdGuard Ad Blocker, se pueden utilizar juntos y funcionarán sin problemas. Veamos qué características ofrece.

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. Puedes iniciar sesión con tu cuenta de AdGuard o con una cuenta externa, es decir, a través de Apple, Google o Facebook. Asegúrese de que tu cuenta externa esté vinculada a la misma dirección de correo electrónico que tu cuenta de AdGuard. Si hay una suscripción adecuada en tu cuenta de AdGuard, ella se activará automáticamente en la aplicación para desktop. Still don’t have an AdGuard account? Créalo [aquí](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN para Mac actualmente es compatible con las versiones de macOS a partir de macOS Catalina (10.15).

:::

## Pantalla de inicio

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

La primera pestaña es la pantalla *de inicio* . Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping es el tiempo de respuesta de un servidor VPN. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. A continuación puedes ver la lista completa de ubicaciones. The search field makes it easy to find the location you need.

:::note

Los usuarios de la versión gratuita sólo pueden conectarse a determinadas ubicaciones, mientras que otras están bloqueadas. Además, hay un límite de tráfico mensual de 3GB en la versión gratuita.

:::

### Saved locations

On the same tab, you can save your favorite locations to access them quickly.

Just hover over a location, click the bookmark icon that appears, and it will be saved. Your marked locations will then show up in the *Saved* tab.

![Saved locations](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## Exclusiones

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Exclusions screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Also you can not only add websites to Exclusions but also choose among the lists of popular services. The lists are divided into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Any of these services can be added to Exclusions in one click! It’s especially convenient if you use Selective mode.

Exclusion list can be easily configured. If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. To export exclusions, follow the four-step instruction below:

1. Abra AdGuard VPN en el dispositivo desde donde desea exportar tus listas de exclusiones. Busca la sección adecuada y haz clic en el botón *Exportar*. Se descargará el archivo `exclusions.zip` .
2. Hay dos archivos `.txt` dentro del fichero, cada uno para listas General y Selectiva. Agregue más exclusiones a ellos, elimine las existentes, cambie el nombre de los archivos (más sobre esto adelante), o simplemente deje el archivo con los ficheros como está.
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. Por ejemplo, si importas listas de exclusión de tu Mac a tu iPhone, asegúrate de enviar previamente el archivo `.zip` a tu teléfono.
4. Abra AdGuard VPN en el dispositivo/navegador donde desea importar el archivo con las listas listas de exclusiones. Busca la sección adecuada, haz clic en el botón *Importar* y selecciona el archivo. ¡Listo!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Soporte

![Support screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## Configuración

![Settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### App settings

![App settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servers](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Advanced settings

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Nivel de registro

There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Ocultar icono de la barra de menú

Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Use QUIC

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.
