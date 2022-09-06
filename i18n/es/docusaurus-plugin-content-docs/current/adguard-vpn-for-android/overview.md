---
title: Features overview
sidebar_position: 1
---

## Que es AdGuard VPN para Andriod

Un VPN es una herramienta ideal que brinda seguridad y anonimato cada vez que navegas por Internet. [¿Cómo funciona?](/general/how-vpn-works.md) Sin entrar en detalles técnicos, podemos decir que un VPN crea un túnel encriptado seguro entre la computadora o dispositivo móvil del usuario y un servidor VPN remoto. De esta manera, se preserva la confidencialidad de los datos, así como el anonimato del usuario, porque un observador de un tercer partido ve la dirección IP del servidor VPN y no la dirrecion IP verdadero del usuario.

**Una VPN se usa comúnmente para:**

* Mantener la seguridad de los datos personales incluso al usar Wi-Fi público
* Evitar el seguimiento de la actividad en línea al enmascarar la dirección IP
* Ocultar la geolocalización real para permanecer anónimo

AdGuard VPN para Android puede hacerlo todo por usted, e incluso ofrecer algo único. Para averiguar por qué AdGuard VPN es la mejor opción, lea [este artículo](/general/why-adguard-vpn.md).

## Cómo empezar usar AdGuard VPN para Android

Primeramente, descargue AdGuard VPN desde [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e inicie sesión en su cuenta de AdGuard. En caso de que no lo tenga, debe [crearlo](https://auth.adguard.com/login.html). Puede iniciar sesión directamente con las credenciales de su cuenta de AdGuard. O hágalo a través de Google o Facebook, si su cuenta de AdGuard se registró utilizando la misma dirección de correo electrónico.


## Pantalla principal

Hay dos barras en la pantalla principal, que reflejan el estado de la aplicación (Conectado/Desconectado) y el modo de Exclusiones seleccionado ([General/Selectivo](#lists-of-exclusions)). En la misma pantalla, también hay un botón *Conectar/Desconectar* y una lista de servidores disponibles.

Cada servidor tiene su ubicación y su velocidad de ping, que describe el tiempo de respuesta del servidor. The lower this rate, the faster is your connection. Las opciones más rápidas siempre se muestran en la parte superior de la lista, que consta de más de 50 ubicaciones en docenas de países. Puede conectarse al servidor más rápido tocando el botón *Conectar/Desconectar* o eligiendo una ubicación.


## Exclusiones

We've done everything to make it easy for you to manage your site and app exclusion lists. AdGuard VPN solo funcionará donde usted elija.


### Listas de exclusiones

Las listas de exclusiones te permiten seleccionar sitios para los cuales la VPN debe estar habilitada y para los cuales, deshabilitada. Para llegar a la sección *Exclusiones*, toque el segundo icono de la izquierda en la parte inferior de la pantalla.

Hay dos modos: en el modo *General* se excluyen los sitios de la lista de exclusiones, y en el modo *Selectivo*, serán los únicos donde funcione AdGuard VPN.

Puede agregar dominios (p. ej., `google.com`) o subdominios (p. ej., `*.google.com`) de sitios web a las *Exclusiones* de tres maneras: ingréselos manualmente en la aplicación o directamente desde el navegador haciendo clic en el *Comparta el botón* y seleccione AdGuard VPN en la lista abierta a continuación. También puede agregarlos desde listas integradas de servicios divididos por categorías.

![Exclusions](https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> There are some nuances in manual adding domains. For example, if you manually exclude the domain `yahoo.com`, all `*.yahoo.com` subdomains will also be listed in exclusions. However, domain names with other top-level domains, such as `yahoo.jp` or `yahoo.fr`, will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not get into the list. In this case, it’s more safe to use built-in lists of services, because we put there all subdomains related to each platform.

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name: **fully-enabled** status is marked with a white check mark on green background, **fully-disabled** — with a gray box, and **partly-enabled**, which means that one or more parameters were changed — with a green square on white background. Good news: you can always return to the default view of service lists in case you’ve deleted or disabled any domains from there.

![Exclusions](https://cdn.adguard.com/content/kb/vpn/android/statuses.png)

Another useful feature is *Import/Export exclusions*. There are only four steps to reach the goal:

1. Open AdGuard VPN on the device/in the browser from where you want to export your lists of exclusions. Find the appropriate section and click the *Export* button. The `adguard_vpn_exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, one for each of the *General* and *Selective* lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Windows device to your Android, make sure to send the `.zip` file to your Android beforehand.
4. Open AdGuard VPN on the device where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click the *Import* button and select the archive.

![Import/Export](https://cdn.adguard.com/content/kb/vpn/android/imp-exp.png)

### Apps Settings

As we mentioned above, not only websites can be easily added to the exclusions. Choose for which applications you need AdGuard VPN and for which you don't. Tap the icon next to the *Exclusions lists* icon at the bottom of the screen, to open Apps settings. By default, AdGuard VPN works with all apps, but you can toggle the slider next to any app in the list — and disable AdGuard VPN for it.

If the *Compatibility mode* with AdGuard is enabled, you can only manage apps through the AdGuard Ad Blocker. Therefore, when you tap the button, the AdGuard app opens.

![Apps settings](https://cdn.adguard.com/content/kb/vpn/android/apps_settings.png)


## Settings

You can reach *Settings* by pressing the gear icon at the bottom right of the screen. The first section there is *App Settings*: configure AdGuard VPN for Android as you need by selecting different options there.

![Apps settings](https://cdn.adguard.com/content/kb/vpn/android/app_settings.png)

### AdGuard VPN autostart

The slider switched to the right enables an AdGuard VPN autostart after the device's startup.


### DNS Server

The purpose of the [Domain name system](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. This job is performed by DNS servers. AdGuard VPN for Android offers a choice of several DNS servers, each with special qualities. For example, [AdGuard DNS](https://kb.adguard.com/en/dns/overview) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. There is also an option to add a custom DNS server.

### Auto-protection

This feature enables AdGuard VPN automatically when your device connects to a cellular or Wi-Fi network.

### Kill Switch

You can set up the Kill Switch function on your Android device by following simple instructions on the screen. Why would you do this? If for some reason your VPN connection suddenly drops while you are using a mobile network or public Wi-Fi, Kill Switch will automatically terminate the internet connection, keeping attackers away from seizing your information.

Note that if Kill Switch is on, *Apps settings* and *Exclusions* won’t work.

### Theme

You can choose the system default, dark or light theme of the app.

![Theme](https://cdn.adguard.com/content/kb/vpn/android/theme-light-dark.png)

### Advanced settings

In the *Advanced settings*, you can find five sections. You can *Help us to become better* by toggling the switch in the upper block. This action will allow AdGuard VPN to gather crash reports, technical and interaction data. This information will come in anonymously.

*Operating mode* section allows you to choose one of three options: VPN, Proxy, and Compatibility mode. In *VPN mode* all traffic is routed through AdGuard VPN automatically. When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy sever which can be used by other apps to route their traffic through it. Choose this option only if you know what you are doing. Enabled *Compatibility mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

> Please note that some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. Also, to manage application tunneling you should open AdGuard Ad Blocker application.

The next two sections are *Logging level* and *Diagnostic info*. Concerning the first option, it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. There you will find some options to customize the AdGuard VPN to meet your needs even more. Enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used — but only if you have the necessary knowledge.

### Support

At the *Support* section you can leave feedback, report a bug, or export logs and system info for further submission to the helpdesk.
 
 

