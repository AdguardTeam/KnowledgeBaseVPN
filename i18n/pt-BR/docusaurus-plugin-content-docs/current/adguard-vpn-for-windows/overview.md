---
title: Resumo de recursos
sidebar_position: 1
---

## What AdGuard VPN for Windows does

- Protege contra a interceptação de tráfego de rede (spoofing). O AdGuard VPN cria um túnel criptografado entre seu dispositivo e um servidor remoto. Todo o tráfego da Internet passa por esse túnel, portanto, seus dados são protegidos ao longo do caminho. And thanks to [AdGuard's unique protocol](/general/adguard-vpn-protocol), you're guaranteed a fast and secure connection.

- Mascara seu endereço IP. Seu endereço IP real é a chave de acesso para seus dados pessoais por parte dos cibercriminosos. Seu nome, endereço de e-mail, número de telefone e informações de cartão de crédito podem cair nas mãos de golpistas se você não ocultar seu IP. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Oculta sua localização real. O que isso te proporciona? Por exemplo, a capacidade de reservar um hotel com tarifas locais ou ocultar a publicidade baseada na localização geográfica.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn) to them. Here, however, we want to focus more on the application itself and how it works.

## How to start using AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). That's all, you can now use AdGuard VPN for Windows.

## Home screen

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Above the button you can see the [mode](#exclusions) in which the application is running, and below it you can see the selected server. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.

## Exclusions

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Importar/exportar listas de exclusões

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Settings

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Configurações de aplicativo

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### Servidores DNS

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Configurações avançadas

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Operating mode

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logging level

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Use QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### Exclusões de aplicativos

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Other tabs

### Sobre

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Conta

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
