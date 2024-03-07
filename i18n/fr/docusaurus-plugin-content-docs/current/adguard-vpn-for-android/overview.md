---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour Android ?

Un VPN est l'outil idéal qui offre sécurité et anonymat à chaque fois que vous naviguez sur Internet. [Comment ça marche ?](/general/how-vpn-works) Sans entrer dans les détails techniques, on peut dire que le VPN crée une connexion cryptée sécurisée (appelée tunnel) entre l'appareil d'un utilisateur et un serveur VPN distant. De cette manière, la confidentialité des données est préservée, ainsi que l'anonymat de l'utilisateur, car un observateur tiers voit l'adresse IP du serveur VPN et non l'adresse IP réelle de l'utilisateur.

**Le VPN est fréquemment utilisé pour :**

- Préserver la sécurité des données personnelles, même sur un réseau Wi-Fi public
- Empêcher le suivi des activités en ligne en masquant l'adresse IP
- Cacher la géolocalisation réelle pour rester anonyme

AdGuard VPN pour Android peut faire tout cela pour vous - et même offrir quelque chose d'unique. Pour savoir pourquoi AdGuard VPN est la meilleure option — lisez [cet article](/general/why-adguard-vpn).

## Comment commencer à utiliser AdGuard VPN pour Android

Tout d'abord, téléchargez AdGuard VPN depuis [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) et connectez-vous à votre compte AdGuard. Si vous ne l’avez pas, vous devriez [le créer](https://auth.adguard.com/login.html). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard. Ou faites-le via Google ou Facebook, si votre compte AdGuard a été enregistré avec la même adresse e-mail.

## Écran principal

L'écran principal reflète l'état du VPN (Connecté/Déconnecté). Il y a aussi un bouton *Connecter/Déconnecter* et une liste des serveurs disponibles.

Chaque serveur a son emplacement et son taux de ping, décrivant le temps de réponse du serveur. Plus ce taux est bas, plus la connexion est rapide. Les serveurs les plus rapides apparaissent toujours en tête de liste qui comprend plus de 50 emplacements dans des dizaines de pays. Vous pouvez vous connecter au serveur le plus rapide en appuyant sur le bouton *Connexion* ou en choisissant un emplacement.

## Exclusions

Nous avons tout fait pour vous faciliter la gestion de vos listes d'exclusion de sites et d'applications. AdGuard VPN ne fonctionnera que là où vous le souhaitez.

### Listes d'exclusions

Les listes d'exclusion vous permettent de gérer la connexion VPN pour des sites web et des applications spécifiques. Pour accéder aux *Exclusions* , appuyez sur la deuxième icône en partant de la gauche en bas de l'écran. Pour accéder à la section *Exclusions* , appuyez sur la deuxième icône en partant de la gauche en bas de l'écran.

Par défaut, AdGuard VPN fonctionne pour tous les sites web et applications sauf ceux ajoutés aux exclusions, mais vous pouvez facilement passer à l'autre mode.

#### Pour les sites web

Vous pouvez ajouter des domaines (par exemple `google.com`) ou des sous-domaines (par exemple `*.google.com`) de sites web aux *exclusions* de trois manières : saisissez-les manuellement dans l'application ou directement depuis le navigateur en cliquant sur le bouton *Partager* et en sélectionnant AdGuard VPN dans la liste déroulante ci-dessous, soit dans les listes integrées de services triées par catégories.

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Il y a quelques nuances dans le processus d'ajout manuel de domaines. Par exemple, si vous excluez manuellement le domaine `yahoo.com`, les `sous-domaines *.yahoo.com` seront également répertoriés dans les exclusions. Toutefois, les noms de domaine avec d'autres domaines de premier niveau, tels que `yahoo.jp` ou `yahoo.fr`, ne seront pas exclus. Ou vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` n'entrera pas dans la liste. Dans ce cas-là c'est plus sécuritaire d'utiliser les listes de services intégrées, car nous y plaçons tous les sous-domaines liés à chaque plate-forme.

:::

Comme vous pouvez activer les sous-domaines dans les listes de services, nous avons ajouté des cases qui reflètent l'état de chaque service — vous pouvez les voir sur l'écran principal des *Exclusions* à gauche de chaque nom de service :

- **L'activation complète** est indiquée par une coche blanche sur fond vert
- **L'activation partielle** (sous-domaines activés sans le domaine principal) est marquée d'un carré vert sur fond blanc
- **Entièrement désactivé** est marqué d'une case à cocher vide

 Bonne nouvelle : vous pouvez toujours revenir à la vue par défaut des listes de services au cas où vous auriez supprimé ou désactivé des domaines à partir de là.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Une autre fonctionnalité utile est *L'importation/exportation des exclusions*. Il n'y a que quatre étapes pour atteindre l'objectif :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `adguard_vpn_exclusions.zip` sera téléchargée.
2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes. Ajoutez-leur plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.
3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil Windows vers votre Android, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Android.
4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive.

![Importation/Exportation *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Pour les applications

Comme nous l'avons mentionné ci-dessus, non seulement les sites web peuvent être facilement ajoutés aux exclusions. Choisissez pour quelles apps vous avez besoin d'AdGuard VPN et celles où vous n'en avez pas besoin.

En *Mode intégré*, vous ne pouvez gérer les applications que via le Bloqueur AdGuard.

![Applications exclues *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Paramètres

Vous pouvez accéder aux *Paramètres* en appuyant sur l'icône d'engrenage en bas à droite de l'écran. La première section contient *Paramètres de l'application* : configurez AdGuard VPN pour Android selon vos besoins en sélectionnant des options différentes ici.

![Paramètres des apps *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Démarrage automatique d'AdGuard VPN

Le curseur basculé vers la droite permet un démarrage automatique de AdGuard VPN après le démarrage de l'appareil.

### Serveurs DNS

Les serveurs DNS traduisent les noms des sites web en quelque chose que les navigateurs peuvent comprendre, à savoir des adresses IP. AdGuard VPN pour Android offre une large sélection de serveurs DNS, chacun avec des qualités particulières. Par exemple, [AdGuard DNS](https://adguard-dns.io/kb/) supprime les publicités et protège votre appareil contre le suivi, tandis qu'AdGuard DNS Protection Familiale combine les fonctions d'AdGuard DNS avec la recherche sécurisée et le blocage du contenu pour adultes. Il existe également une option pour ajouter un serveur DNS personnalisé.

### Auto-protection

Cette fonctionnalité active AdGuard VPN automatiquement lorsque votre appareil se connecte à un réseau cellulaire ou Wi-Fi.

### Kill Switch

Vous pouvez configurer la fonction Kill Switch sur votre appareil Android en suivant les instructions simples qui s'affichent à l'écran. Pourquoi feriez-vous ça ? Si, pour une raison quelconque, votre connexion VPN tombe soudainement alors que vous utilisez un réseau mobile ou un Wi-Fi public, Kill Switch mettra automatiquement fin à la connexion Internet, empêchant les attaquants de saisir vos informations.

Notez que si Kill Switch est activé, les *Paramètres des applications* et *Exclusions* ne fonctionneront pas.

### Thème

Vous pouvez choisir le thème par défaut du système, thème dynamique système, soit le thème sombre ou clair de l'application.

![Thème dynamique du système *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Thème clair *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Thème sombre *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Paramètres avancés

Dans les *Paramètres avancés*, vous trouverez quatre sections.

*Le mode de fonctionnement* vous permet de spécifier comment votre trafic est acheminé. Il existe trois choix : VPN, SOCKS5 et mode intégré. En mode *VPN* , tout le trafic est acheminé via AdGuard VPN. En mode *SOCKS5* , AdGuard VPN exécute un serveur proxy local qui peut être utilisé par d'autres applications pour le routage du trafic. *Le mode intégré* permet à AdGuard VPN et au Bloqueur AdGuard de fonctionner ensemble.

:::note

Certaines fonctionnalités du VPN AdGuard sont désactivées en *Mode intégré* : serveurs DNS, Kill Switch, protection automatique et exclusions d'applications. Vous pouvez gérer la protection DNS et acheminer les applications via votre proxy VPN AdGuard dans l'application du Bloqueur AdGuard.

:::

Les deux sections suivantes sont *Niveau de journalisation* et *Informations diagnostiques*. Concernant la première option, il n'est pas recommandé d'activer le niveau de journalisation étendu ou extrême, sauf par demande de notre équipe de support. Des informations de diagnostic, des informations techniques stockées localement sur l'appareil et les connexions (adresse IP, ID, ping, etc.), peuvent nous être envoyées en cas de problème technique.

La dernière section des *Paramètres avancés* est *Paramètres de bas niveau*. Nous vous conseillons de ne pas accéder à cette section, sauf si vous êtes hautement qualifié ou si notre équipe d'assistance vous l'a demandé. Ici vous pouvez activer la journalisation de l'interface TUN ou le protocole IPv6 sur l'interface VPN, choisir un port de serveur proxy ou une version de protocole Internet à utiliser.

:::note Compatibilité

L'option *Activer IPv6* n'est disponible que pour les réseaux prenant en charge IPv6.

:::

### Assistance

Dans la section *Assistance*, vous pouvez laisser des commentaires, signaler un bogue ou exporter des journaux et des informations système pour les soumettre ultérieurement au service d'assistance.
