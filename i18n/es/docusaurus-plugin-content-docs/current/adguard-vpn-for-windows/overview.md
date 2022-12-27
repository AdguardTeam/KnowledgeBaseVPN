---
title: Resumen de características
sidebar position: 1
---

## Qué es AdGuard VPN para Windows

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. ¿Cómo funciona? Cada vez que visita un sitio web sin usar una VPN, su ISP lo ve. Sabe quién eres y qué buscas, y puede recopilar y vender estos datos. A su vez, el sitio web al que has llegado también puede hacer un seguimiento de tu actividad. Cuando activas una aplicación VPN, ésta redirige tu tráfico a través de un túnel encriptado a un servidor VPN remoto, lo que garantiza tu privacidad: el ISP no sabe a dónde has enviado una solicitud, y el sitio no sabe de dónde vienes.

**Qué hace AdGuard VPN para Windows**

* Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. Y gracias al protocolo único de [AdGuard](/general/adguard-vpn-protocol.mdx), se garantiza una conexión rápida y segura.

* Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Su nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. Con AdGuard VPN, como hemos dicho antes, todo su tráfico pasa por un túnel cifrado y llega al servidor VPN. Por lo tanto, desde el exterior parece que su dispositivo tiene la dirección IP de dicho servidor VPN.

* Oculta su ubicación real. Al seleccionar cualquiera de los servidores VPN de AdGuard, se le "teletransporta" instantáneamente a su ubicación. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN para Windows tiene muchas ventajas, por lo que hemos dedicado [un artículo separado](/general/why-adguard-vpn.md) a ellas. Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). La instalación no lleva más de un minuto, y verás una ventana de diálogo en la que tendrás que marcar al menos una casilla para aplicar los términos del Acuerdo de Usuario y la Política de Privacidad. Y depende de usted decidir si desea que AdGuard recopile datos anónimos sobre el uso de su aplicación. Por último, el programa le pedirá que inicie sesión, ya sea a través de [cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.


## Pantalla de inicio

![Página de inicio de AdGuard VPN para Windows](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

El elemento más notable en la pantalla de inicio de **** es el botón de conexión/desconexión de AdGuard VPN. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## Exclusiones

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. ¿Qué significa esto? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. El **Modo selectivo** tiene el efecto contrario: activa AdGuard VPN sólo en los sitios web especificados en la lista de exclusión. Tenga en cuenta que las listas de exclusión de estos dos modos son independientes entre sí.

![Exclusiones](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Añadir exclusiones](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Añadir exclusiones desde la lista](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Al añadir dominios manualmente, debe tener en cuenta algunos matices. Por ejemplo, si excluye manualmente el dominio `google.com`, todos los subdominios `*.google.com` también se añadirán a la lista de exclusiones. Sin embargo, los nombres de dominio con otros dominios de nivel superior como `google.es` o `google.it` no serán excluidos. O puede añadir `youtube.com` a las exclusiones, pero el dominio del mismo servicio `youtu.be` no se incluirá en la lista.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Hemos colocado allí los servicios más populares, incluyendo todos los nombres de dominio y subdominios relacionados con cada plataforma.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Configuración

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

En la parte inferior de la página hay dos secciones: **Servidores DNS** y **Configuración avanzada**.

#### Servidores DNS

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Otras pestañas

### Acerca de

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Asistencia técnica

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.