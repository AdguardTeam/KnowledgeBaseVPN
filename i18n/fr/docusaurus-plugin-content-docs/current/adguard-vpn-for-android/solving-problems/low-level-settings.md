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

Par défaut, le Protocole AdGuard VPN utilise la sélection dynamique du protocole VPN (l'option _Sélection automatique_). Cela signifie qu'AdGuard VPN détermine automatiquement quel protocole — HTTP2/TLS ou HTTP3/QUIC — vous offrira les meilleures performances et bascule instantanément vers celui-ci. Cela améliore la vitesse et la stabilité du VPN, ce qui est particulièrement utile dans les régions où l’utilisation du VPN est restreinte ou peu fiable.

Si vous savez ce que vous faites, vous pouvez faire en sorte qu'AdGuard VPN utilise uniquement le protocole HTTP2/TLS ou HTTP3/QUIC au lieu de la _Sélection automatique_. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) est un protocole relativement nouveau, il peut donc être moins stable. Cependant, si votre connexion à Internet est instable (par exemple, lorsque vous vous connectez au Wi-Fi public), il offre une meilleure sécurité et augmente la vitesse de connexion grâce à la technologie [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking).

Voici également un article dédié au protocole : [Comment fonctionne le protocole VPN AdGuard](https://trusttunnel.org/).

### Inclure la passerelle Wi-Fi aux routes VPN

Si ce paramètre est activé, les adresses IP de la passerelle seront ajoutées aux routes VPN lorsque vous êtes sur le Wi-Fi.
Si vous le désactivez, alors la configuration de routage (plages IP qui sont filtrées) sera modifiée. La passerelle Wi-Fi du réseau auquel l'utilisateur est connecté sera exclue et, par conséquent, elle ne sera pas soumise au filtrage.

Ce paramètre est activé par défaut.

### Capture de paquets (PCAP)

Si ce paramètre est activé, AdGuard VPN créera un fichier `.pcap` avec un horodatage pour nom (par exemple, `1682599851461.pcap`) dans le répertoire de cache de l'application. Ce fichier répertorie tous les paquets réseau transférés via le VPN et peut être analysé avec le [programme Wireshark](https://www.wireshark.org/).

### Chien de garde

Le chien de garde (watchdog) surveille l'état du processus VPN pour vérifier s'il y a des problèmes. Lorsqu'il est activé, AdGuard VPN se protégera contre les applications d'économie de batterie agressives qui pourraient autrement l'arrêter.

### Version IP préférée

Ici, vous pouvez configurer les adresses des points de terminaison. Il existe trois options : IPv4, IPv6 ou IPv4 et IPv6 (si votre appareil prend en charge les deux).

### Plages IPv4 exclues du VPN

La tunnellisation VPN pour les plages IPv4 répertoriées dans cette section sera désactivée.

### Interface IPv6

Après avoir activé cette option, vous aurez une adresse IPv6 lors du routage du trafic via la connexion VPN. Vous pouvez configurer les exclusions dans la section _Plages IPv6 exclues du VPN_.

### Plages IPv6 exclues du VPN

La tunnellisation VPN pour les plages IPv6 répertoriées dans cette section sera désactivée.

:::note

Vous devez d'abord activer le paramètre _Interface IPv6_ dans les _Paramètres de bas niveau_, sinon ce paramètre ne sera pas appliqué.

:::

### MTU (unité maximale de transmission)

Ici, vous pouvez définir la taille maximale (en octets) du paquet de données utilisé par le VPN local. La plage recommandée est de 1 500 à 9 000 octets.

### Applications exclues

Vous pouvez lister ici les UIDs (identifiants uniques) ou les noms de paquet des applications que vous souhaitez exclure du routage VPN.
Contrairement aux apps ajoutées aux _Exclusions_ normales, le trafic des apps ajoutées à _Apps exclues_ ne passe pas du tout par le service VPN local sur votre appareil. Il va directement à la destination.

### Port du serveur proxy

Vous pouvez configurer ici le port du serveur proxy SOCKS5 interne. L'option par défaut est 1080.
