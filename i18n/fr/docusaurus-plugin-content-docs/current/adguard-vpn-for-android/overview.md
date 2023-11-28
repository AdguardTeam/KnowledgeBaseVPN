---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour Android ?

Un VPN est l'outil idéal qui offre sécurité et anonymat à chaque fois que vous naviguez sur Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted tunnel between the user's computer or mobile device and a remote VPN server. De cette manière, la confidentialité des données est préservée, ainsi que l'anonymat de l'utilisateur, car un observateur tiers voit l'adresse IP du serveur VPN et non l'adresse IP réelle de l'utilisateur.

**Le VPN est fréquemment utilisé pour :**

- Préserver la sécurité des données personnelles, même sur un réseau Wi-Fi public
- Empêcher le suivi des activités en ligne en masquant l'adresse IP
- Cacher la géolocalisation réelle pour rester anonyme

AdGuard VPN pour Android peut faire tout cela pour vous - et même offrir quelque chose d'unique. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Comment commencer à utiliser AdGuard VPN pour Android

Tout d'abord, téléchargez AdGuard VPN depuis [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) et connectez-vous à votre compte AdGuard. Si vous ne l’avez pas, vous devriez [le créer](https://auth.adguard.com/login.html). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard. Ou faites-le via Google ou Facebook, si votre compte AdGuard a été enregistré avec la même adresse e-mail.

## Écran principal

L'écran principal comporte deux barres qui reflètent l'état de l'application (Connecté/Déconnecté) et le mode d'Exclusions sélectionné ([General/Sélectif](#lists-of-exclusions)). Sur le même écran, il y a aussi un bouton *Connecter/Déconnecter* et une liste des serveurs disponibles.

Chaque serveur a son emplacement et son taux de ping, décrivant le temps de réponse du serveur. Plus ce taux est bas, plus votre connexion est rapide. Les options les plus rapides sont toujours affichées en haut de la liste qui comprend plus de 50 sites dans des dizaines de pays. Vous pouvez vous connecter au serveur le plus rapide en appuyant sur le bouton *Connecter/Déconnecter* ou en choisissant un emplacement.

## Exclusions

Nous avons tout fait pour vous faciliter la gestion de vos listes d'exclusion de sites et d'applications. AdGuard VPN ne fonctionnera que là où vous le souhaitez.

### Listes d'exclusions

Les listes d'exclusions vous permettent de sélectionner les sites pour lesquels le VPN doit être activé et pour lesquels — désactivé. Pour accéder à la section *Exclusions* , appuyez sur la deuxième icône en partant de la gauche en bas de l'écran.

Il existe deux modes : en *Mode général* les sites de la liste des exclusions sont exclus, et en *Mode sélectif*, ils seront les seuls où AdGuard VPN fonctionnera.

Vous pouvez ajouter des domaines (par exemple `google.com`) ou des sous-domaines (par exemple `*.google.com`) de sites web aux *exclusions* de trois manières : saisissez-les manuellement dans l'application ou directement depuis le navigateur en cliquant sur le bouton *Partager* et en sélectionnant AdGuard VPN dans la liste déroulante ci-dessous, soit dans les listes integrées de services triées par catégories.

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Il y a quelques nuances dans le processus d'ajout manuel de domaines. Par exemple, si vous excluez manuellement le domaine `yahoo.com`, les `sous-domaines *.yahoo.com` seront également répertoriés dans les exclusions. Toutefois, les noms de domaine avec d'autres domaines de premier niveau, tels que `yahoo.jp` ou `yahoo.fr`, ne seront pas exclus. Ou vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` n'entrera pas dans la liste. Dans ce cas-là c'est plus sécuritaire d'utiliser les listes de services intégrées, car nous y plaçons tous les sous-domaines liés à chaque plate-forme.

:::

Puisque vous pouvez activer les sous-domaines dans les listes de services, nous avons ajouté des cases qui reflètent le statut de chaque service - vous pouvez les voir sur l'écran principal des *Exclusions* à gauche du nom de chaque service : le statut **entièrement activé** est marqué par une coche blanche sur fond vert, **entièrement désactivé** - avec une case grise, et **partiellement activé**, ce qui signifie qu'un ou plusieurs paramètres ont été modifiés - avec un carré vert sur fond blanc. Bonne nouvelle : vous pouvez toujours revenir à la vue par défaut des listes de services au cas où vous auriez supprimé ou désactivé des domaines à partir de là.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Une autre fonctionnalité utile est *L'importation/exportation des exclusions*. Il n'y a que quatre étapes pour atteindre l'objectif :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `adguard_vpn_exclusions.zip` sera téléchargée.
2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes * Générales* et *Sélectives*. Ajoutez-leur plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.
3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil Windows vers votre Android, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Android.
4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Paramètres des apps

Comme nous l'avons mentionné ci-dessus, non seulement les sites web peuvent être facilement ajoutés aux exclusions. Choisissez pour quelles applications vous avez besoin d'AdGuard VPN et pour lesquelles vous n'en avez pas besoin. Appuyez sur l'icône à côté de l'icône *Listes d'exclusions* en bas de l'écran pour ouvrir les Paramètres des applications. Par défaut, AdGuard VPN fonctionne avec toutes les applications, mais vous pouvez basculer le curseur à côté de n'importe quelle application de la liste et désactiver AdGuard VPN pour celle-ci.

Si le *Mode de compatibilité* avec AdGuard est activé, vous ne pouvez gérer les applications que dans le Bloqueur AdGuard. Par conséquent, lorsque vous appuyez sur le bouton, l'application AdGuard s'ouvre.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Paramètres

Vous pouvez accéder aux *Paramètres* en appuyant sur l'icône d'engrenage en bas à droite de l'écran. La première section contient *Paramètres de l'application* : configurez AdGuard VPN pour Android selon vos besoins en sélectionnant des options différentes ici.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Démarrage automatique d'AdGuard VPN

Le curseur basculé vers la droite permet un démarrage automatique de AdGuard VPN après le démarrage de l'appareil.

### Serveurs DNS

The purpose of the [Domain name system](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. Cette tâche est effectuée par les serveurs DNS. AdGuard VPN pour Android offre un choix de plusieurs serveurs DNS, chacun avec des qualités particulières. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. Il existe également une option pour ajouter un serveur DNS personnalisé.

### Auto-protection

Cette fonctionnalité active AdGuard VPN automatiquement lorsque votre appareil se connecte à un réseau cellulaire ou Wi-Fi.

### Kill Switch

Vous pouvez configurer la fonction Kill Switch sur votre appareil Android en suivant les instructions simples qui s'affichent à l'écran. Pourquoi feriez-vous ça ? Si, pour une raison quelconque, votre connexion VPN tombe soudainement alors que vous utilisez un réseau mobile ou un Wi-Fi public, Kill Switch mettra automatiquement fin à la connexion Internet, empêchant les attaquants de saisir vos informations.

Notez que si Kill Switch est activé, les *Paramètres des applications* et *Exclusions* ne fonctionneront pas.

### Thème

Vous pouvez choisir le thème par défaut du système, sombre ou clair de l'application.

![Theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Paramètres avancés

Dans les *Paramètres avancés*, vous trouverez cinq sections. Vous pouvez *nous aider à devenir meilleurs* en basculant l'interrupteur dans le bloc supérieur. Cette action permettra à AdGuard VPN de collecter des rapports de plantage, des données techniques et d'interaction. Cette information arrivera de manière anonyme.

La section *Mode de fonctionnement* vous permet de choisir l'une des trois options suivantes : VPN, Proxy, et mode Compatibilité. En *mode VPN* tout le trafic est automatiquement acheminé via AdGuard VPN. When the *Proxy mode* (SOCKS5) is on, AdGuard VPN runs a local proxy server which can be used by other apps to route their traffic through it. Choisissez cette option uniquement si vous savez ce que vous faites. *Le mode de compatibilité* actif permet à AdGuard VPN et au Bloqueur AdGuard de fonctionner ensemble.

:::note

Some AdGuard VPN features are disabled in *Compatibility mode*: DNS server selection, Kill Switch and Auto-protection. En outre, pour gérer le tunnelage des applications, vous devez ouvrir l'application Bloqueur de AdGuard.

:::

Les deux sections suivantes sont *Niveau de journalisation* et *Informations diagnostiques*. Concernant la première option, il n'est pas recommandé d'activer le niveau de journalisation étendu ou extrême, sauf par demande de notre équipe de support. Des informations de diagnostic, des informations techniques stockées localement sur l'appareil et les connexions (adresse IP, ID, ping, etc.), peuvent nous être envoyées en cas de problème technique.

La dernière section des *Paramètres avancés* est *Paramètres de bas niveau*. Nous vous conseillons de ne pas accéder à cette section, sauf si vous êtes hautement qualifié ou si notre équipe d'assistance vous l'a demandé. Ici vous pouvez activer la journalisation de l'interface TUN ou le protocole IPv6 sur l'interface VPN, choisir un port de serveur proxy ou une version de protocole Internet à utiliser.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Assistance

Dans la section *Assistance*, vous pouvez laisser des commentaires, signaler un bogue ou exporter des journaux et des informations système pour les soumettre ultérieurement au service d'assistance.
