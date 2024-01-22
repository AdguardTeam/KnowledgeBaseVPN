---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour Android ?

Un VPN est l'outil idéal qui offre sécurité et anonymat à chaque fois que vous naviguez sur Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. De cette manière, la confidentialité des données est préservée, ainsi que l'anonymat de l'utilisateur, car un observateur tiers voit l'adresse IP du serveur VPN et non l'adresse IP réelle de l'utilisateur.

**Le VPN est fréquemment utilisé pour :**

- Préserver la sécurité des données personnelles, même sur un réseau Wi-Fi public
- Empêcher le suivi des activités en ligne en masquant l'adresse IP
- Cacher la géolocalisation réelle pour rester anonyme

AdGuard VPN pour Android peut faire tout cela pour vous - et même offrir quelque chose d'unique. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Comment commencer à utiliser AdGuard VPN pour Android

Tout d'abord, téléchargez AdGuard VPN depuis [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) et connectez-vous à votre compte AdGuard. Si vous ne l’avez pas, vous devriez [le créer](https://auth.adguard.com/login.html). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard. Ou faites-le via Google ou Facebook, si votre compte AdGuard a été enregistré avec la même adresse e-mail.

## Écran principal

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Chaque serveur a son emplacement et son taux de ping, décrivant le temps de réponse du serveur. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Exclusions

Nous avons tout fait pour vous faciliter la gestion de vos listes d'exclusion de sites et d'applications. AdGuard VPN ne fonctionnera que là où vous le souhaitez.

### Listes d'exclusions

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Pour accéder à la section *Exclusions* , appuyez sur la deuxième icône en partant de la gauche en bas de l'écran.

By default, AdGuard VPN works for all websites and apps except those added to exclusions, but you can easily switch to the other mode.

#### For websites

Vous pouvez ajouter des domaines (par exemple `google.com`) ou des sous-domaines (par exemple `*.google.com`) de sites web aux *exclusions* de trois manières : saisissez-les manuellement dans l'application ou directement depuis le navigateur en cliquant sur le bouton *Partager* et en sélectionnant AdGuard VPN dans la liste déroulante ci-dessous, soit dans les listes integrées de services triées par catégories.

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Il y a quelques nuances dans le processus d'ajout manuel de domaines. Par exemple, si vous excluez manuellement le domaine `yahoo.com`, les `sous-domaines *.yahoo.com` seront également répertoriés dans les exclusions. Toutefois, les noms de domaine avec d'autres domaines de premier niveau, tels que `yahoo.jp` ou `yahoo.fr`, ne seront pas exclus. Ou vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` n'entrera pas dans la liste. Dans ce cas-là c'est plus sécuritaire d'utiliser les listes de services intégrées, car nous y plaçons tous les sous-domaines liés à chaque plate-forme.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Bonne nouvelle : vous pouvez toujours revenir à la vue par défaut des listes de services au cas où vous auriez supprimé ou désactivé des domaines à partir de là.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Une autre fonctionnalité utile est *L'importation/exportation des exclusions*. Il n'y a que quatre étapes pour atteindre l'objectif :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `adguard_vpn_exclusions.zip` sera téléchargée.
2. There are two `.txt` files inside the archive, one for each of the lists. Ajoutez-leur plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.
3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil Windows vers votre Android, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Android.
4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Comme nous l'avons mentionné ci-dessus, non seulement les sites web peuvent être facilement ajoutés aux exclusions. Choose for which apps you need AdGuard VPN and for which you don't.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Paramètres

Vous pouvez accéder aux *Paramètres* en appuyant sur l'icône d'engrenage en bas à droite de l'écran. La première section contient *Paramètres de l'application* : configurez AdGuard VPN pour Android selon vos besoins en sélectionnant des options différentes ici.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Démarrage automatique d'AdGuard VPN

Le curseur basculé vers la droite permet un démarrage automatique de AdGuard VPN après le démarrage de l'appareil.

### Serveurs DNS

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. Il existe également une option pour ajouter un serveur DNS personnalisé.

### Auto-protection

Cette fonctionnalité active AdGuard VPN automatiquement lorsque votre appareil se connecte à un réseau cellulaire ou Wi-Fi.

### Kill Switch

Vous pouvez configurer la fonction Kill Switch sur votre appareil Android en suivant les instructions simples qui s'affichent à l'écran. Pourquoi feriez-vous ça ? Si, pour une raison quelconque, votre connexion VPN tombe soudainement alors que vous utilisez un réseau mobile ou un Wi-Fi public, Kill Switch mettra automatiquement fin à la connexion Internet, empêchant les attaquants de saisir vos informations.

Notez que si Kill Switch est activé, les *Paramètres des applications* et *Exclusions* ne fonctionneront pas.

### Thème

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Paramètres avancés

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and App exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Les deux sections suivantes sont *Niveau de journalisation* et *Informations diagnostiques*. Concernant la première option, il n'est pas recommandé d'activer le niveau de journalisation étendu ou extrême, sauf par demande de notre équipe de support. Des informations de diagnostic, des informations techniques stockées localement sur l'appareil et les connexions (adresse IP, ID, ping, etc.), peuvent nous être envoyées en cas de problème technique.

La dernière section des *Paramètres avancés* est *Paramètres de bas niveau*. Nous vous conseillons de ne pas accéder à cette section, sauf si vous êtes hautement qualifié ou si notre équipe d'assistance vous l'a demandé. Ici vous pouvez activer la journalisation de l'interface TUN ou le protocole IPv6 sur l'interface VPN, choisir un port de serveur proxy ou une version de protocole Internet à utiliser.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Assistance

Dans la section *Assistance*, vous pouvez laisser des commentaires, signaler un bogue ou exporter des journaux et des informations système pour les soumettre ultérieurement au service d'assistance.
