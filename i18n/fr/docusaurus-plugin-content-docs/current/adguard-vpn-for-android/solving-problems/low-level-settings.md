---
title: Guide sur les paramètres de bas niveau
sidebar_position: 6
---

## Comment accéder aux paramètres de bas niveau

:::caution

La modification des _Paramètres de bas niveau_ peut entraîner des problèmes de performances d'AdGuard VPN, interrompre la connexion Internet ou compromettre votre sécurité et votre confidentialité. Cette section ne doit être ouverte que si vous savez ce que vous faites ou si notre équipe d'assistance vous a demandé de le faire.

:::

Pour accéder aux _Paramètres de bas niveau_, ouvrez l'application AdGuard VPN et appuyez sur l'icône d'engrenage dans le coin inférieur droit de l'écran. Puis sélectionnez _Mode général_ → _Avancés_ → _Paramètres bas niveau_.

## Paramètres de bas niveau

Vous trouverez ci-dessous la liste de tous les paramètres de bas niveau disponibles dans AdGuard VPN et leur explication. Nous vous exhortons une fois de plus à ne pas modifier ces paramètres à l'aveugle, même si vous avez lu ce guide. Considérez-le comme un aide-mémoire pour les cas où vous savez ce que vous faites, mais où vous voulez vous rafraîchir la mémoire sur des points précis.

### Protocole AdGuard VPN

AdGuard VPN uses TrustTunnel — a modern, open-source VPN protocol developed by us and available for anyone to use, audit, and implement. [Visitez le site Web](https://trusttunnel.org/) pour découvrir comment il fonctionne et pourquoi il est différent des protocoles VPN traditionnels.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6, or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.

Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Port du serveur proxy

Vous pouvez configurer ici le port du serveur proxy SOCKS5 interne. L'option par défaut est 1080.
