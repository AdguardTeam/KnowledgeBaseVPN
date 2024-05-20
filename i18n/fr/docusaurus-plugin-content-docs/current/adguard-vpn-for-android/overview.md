---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Écran principal

L'écran principal reflète l'état du VPN (Connecté/Déconnecté). Il y a aussi un bouton *Connecter/Déconnecter* et une liste des serveurs disponibles.

Chaque serveur a son emplacement et son taux de ping, décrivant le temps de réponse du serveur. Plus ce taux est bas, plus la connexion est rapide. Les serveurs les plus rapides apparaissent toujours en tête de liste qui comprend plus de 50 emplacements dans des dizaines de pays. Vous pouvez vous connecter au serveur le plus rapide en appuyant sur le bouton *Connexion* ou en choisissant un emplacement.

## Exclusions

Les listes d'exclusion vous permettent de gérer la connexion VPN pour des sites web et des applications spécifiques. Pour accéder aux *Exclusions* , appuyez sur la deuxième icône en partant de la gauche en bas de l'écran.

![Exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Par exemple, si vous excluez manuellement le domaine `yahoo.com`, les `sous-domaines *.yahoo.com` seront également répertoriés dans les exclusions. Toutefois, les noms de domaine avec d'autres domaines de premier niveau, tels que `yahoo.jp` ou `yahoo.fr`, ne seront pas exclus.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **L'activation complète** est indiquée par une coche blanche sur fond vert
- **L'activation partielle** (sous-domaines activés sans le domaine principal) est marquée d'un carré vert sur fond blanc
- **Entièrement désactivé** est marqué d'une case à cocher vide

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Applications exclues *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

En *Mode intégré*, vous ne pouvez gérer les applications que via le Bloqueur AdGuard.

:::

## Paramètres

Vous pouvez accéder aux *Paramètres* en appuyant sur l'icône d'engrenage en bas à droite de l'écran.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

*Le mode de fonctionnement* vous permet de spécifier comment votre trafic est acheminé. Il existe trois choix : VPN, SOCKS5 et mode intégré. En mode *VPN* , tout le trafic est acheminé via AdGuard VPN. En mode *SOCKS5* , AdGuard VPN exécute un serveur proxy local qui peut être utilisé par d'autres applications pour le routage du trafic. *Le mode intégré* permet à AdGuard VPN et au Bloqueur AdGuard de fonctionner ensemble.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Vous pouvez gérer la protection DNS et acheminer les applications via votre proxy VPN AdGuard dans l'application du Bloqueur AdGuard.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

La dernière section des *Paramètres avancés* est *Paramètres de bas niveau*. Nous vous conseillons de ne pas accéder à cette section, sauf si vous êtes hautement qualifié ou si notre équipe d'assistance vous l'a demandé. Ici vous pouvez activer la journalisation de l'interface TUN ou le protocole IPv6 sur l'interface VPN, choisir un port de serveur proxy ou une version de protocole Internet à utiliser.

:::note Compatibilité

L'option *Activer IPv6* n'est disponible que pour les réseaux prenant en charge IPv6.

:::

### Assistance

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
