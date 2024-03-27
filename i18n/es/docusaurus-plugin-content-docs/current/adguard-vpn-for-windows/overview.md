---
title: Resumen de características
sidebar_position: 1
---

## Qué hace AdGuard VPN para Windows

- Protege de la interceptación del tráfico de red (spoofing). AdGuard VPN crea un túnel cifrado entre su dispositivo y un servidor remoto. Todo el tráfico de Internet pasa por este túnel, por lo que tus datos están protegidos en todo momento. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol), you're guaranteed a fast and secure connection.

- Enmascara su dirección IP. Su verdadera dirección IP es la clave de sus datos personales para los ciberdelincuentes. Su nombre, dirección de correo electrónico, número de teléfono, información de tarjeta de crédito pueden caer en manos de estafadores si no oculta su IP. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Oculta su ubicación real. ¿Qué le da esto? Por ejemplo, la capacidad de reservar un hotel a las tarifas de los lugareños u ocultarse de la publicidad geodirigida.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn) to them. Aquí, sin embargo, queremos centrarnos más en la aplicación en sí y en cómo funciona.

## Cómo empezar a usar AdGuard VPN para Windows

Para comenzar a usar AdGuard VPN para Windows, descarga la aplicación desde [nuestro sitio web](https://adguard-vpn.com/welcome.html). La instalación no lleva más de un minuto, y verás una ventana de diálogo en la que tendrás que marcar al menos una casilla para aplicar los términos del Acuerdo de Usuario y la Política de Privacidad. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. Por último, el programa le pedirá que inicie sesión, ya sea a través de la [Cuenta de AdGuard](https://auth.adguard.com/login.html) o a través de las redes sociales (Apple, Google, Facebook). Eso es todo, ahora puede usar AdGuard VPN para Windows.

## Pantalla de inicio

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

The most noticeable item on the **Home screen** is the AdGuard VPN Connect/Disconnect button, below which you can see the selected server. On the right side of the screen you will see a list of available locations. La ubicación más rápida, es decir, la que tiene el ping más bajo, se muestra en la parte superior de la lista. There is also a refresh button that you can click if any locations are offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**, **Support**, and **Settings**.

## Exclusiones

By default, AdGuard VPN for WIndows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Puedes agregar sitios web a exclusiones **manualmente** ingresando sus nombres de dominio. La aplicación también te ofrece la opción de elegir sitios web populares **de la lista**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account certain details. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Importar/exportar listas de exclusión

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Stats

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## Configuración

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### Configuración de la app

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### Servidores DNS

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Configuración avanzada

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Modo de funcionamiento

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Nivel de registro

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Usar QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

#### Use WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Subnet exclusions

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## Otras pestañas

### Acerca de

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Cuenta

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Asistencia técnica

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
