---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour Windows ?

A VPN, acronym for "Virtual Private Network", is a service that makes your Internet connection safe and helps you stay anonymous online. Comment ça marche ? Chaque fois que vous visitez un site web sans utiliser un VPN, votre FAI le voit. Il sait qui vous êtes et ce que vous recherchez, et il peut collecter et vendre ces données. À son tour, le site web que vous avez visité peut également suivre votre activité. Lorsque vous activez une application VPN, elle redirige votre trafic à travers un tunnel chiffré vers un serveur VPN distant, ce qui garantit le respect de votre vie privée : le fournisseur d'accès ne sait pas où vous avez envoyé une demande et le site ne sait pas d'où vous venez.

## What AdGuard VPN for Windows does

- Protège contre l'interception du trafic réseau (spoofing). AdGuard VPN crée un tunnel chiffré entre votre appareil et un serveur distant. Tout votre trafic Internet passe par ce tunnel, vos données sont donc protégées en cours de route. Et grâce au protocole unique de [AdGuard](/general/adguard-vpn-protocol.mdx), vous avez la garantie d'une connexion rapide et sécurisée.

- Masque votre adresse IP. Votre véritable adresse IP est la clé à vos données personnelles pour les cybercriminels. Votre nom, adresse e-mail, numéro de téléphone, informations de carte bancaire peuvent tous tomber entre les mains de fraudeurs si vous ne cachez pas votre adresse IP. Avec AdGuard VPN, comme nous l'avons déjà dit, tout votre trafic passe par un tunnel chiffré et arrive sur le serveur VPN. Par conséquent, de l’extérieur, il semble que votre appareil ait l’adresse IP dudit serveur VPN.

- Masque votre emplacement réel. En sélectionnant l'un des serveurs VPN AdGuard, vous êtes instantanément "téléporté" vers son emplacement. Qu'est-ce que cela vous donne ? Par exemple, la possibilité de réserver un hôtel aux tarifs locaux ou de se cacher de la publicité géo-ciblée.

AdGuard VPN for Windows has many advantages, so we've dedicated [a separate article](/general/why-adguard-vpn.md) to them. Here, however, we want to focus more on the application itself and how it works.

## How to start using AdGuard VPN for Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). The installation takes no more than a minute — and you'll see a dialog window where you'll need to check at least one box applying the terms of the User Agreement and the Privacy policy. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. At last the program will ask you to sign in, either via [AdGuard account](https://auth.adguard.com/login.html) or via social networks (Apple, Google, Facebook). That's all, you can now use AdGuard VPN for Windows.

## Home screen

![AdGuard VPN for Windows Home Page](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

The most noticeable item on the **Home Screen** is the AdGuard VPN connect/disconnect button. Above the button you can see the [mode](#exclusions) in which the application is running, and below it you can see the selected server. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the lowest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.

## Exclusions

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. What does this mean? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. The **Selective mode** has the opposite effect: it activates AdGuard VPN only on the websites specified in the exclusion list. Please note that these two modes' exclusions lists are independent from one another.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Lors de l'ajout manuel de domaines, vous devez tenir compte de certaines nuances. Par exemple, si vous excluez manuellement le domaine `google.com`, tous les sous-domaines `*.google.com` seront également ajoutés à la liste des exclusions. Toutefois, les noms de domaines avec d'autres domaines de premier niveau tels que `google.es` ou `google.it` ne seront pas exclus. Soit vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` ne sera pas inclus dans la liste.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Importation/exportation des listes des exclusions

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Settings

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.

### Paramètres de l'appliсation

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### Serveurs DNS

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Paramètres avancés

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Operating mode

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Logging level

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

##### Use QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### Applications exclues

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Other tabs

### À propos

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy policy.

### Compte

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Support

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
