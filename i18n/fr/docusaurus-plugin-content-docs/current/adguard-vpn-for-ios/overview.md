---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour iOS ?

Un VPN vous permet de créer une connexion sécurisée à un autre réseau sur Internet. Il connecte l'ordinateur ou l'appareil mobile d'un utilisateur à un serveur et permet de naviguer sur Internet en utilisant une adresse IP de camouflage. Si le serveur VPN est situé dans un autre pays, la connexion Internet semblera avoir été établie à partir de ce pays. Pour plus de détails, vous pouvez consulter [notre article sur le fonctionnement d'un VPN](/general/how-vpn-works).

AdGuard VPN a plusieurs fonctions :

- Cache votre localisation réelle et vous aide à rester anonyme
- Change votre adresse IP pour protéger vos données contre le suivi
- Crypte votre trafic et rend le contenu inaccessible aux escrocs
- Vous permet de configurer où utiliser le VPN et où ne pas l'utiliser (fonctionnalité d'exclusions)

L'avantage suivant d'AdGuard VPN pour iOS est notre propre protocole VPN. Il est extrêmement difficile à détecter par rapport aux autres protocoles VPN et reste stable même avec une mauvaise connexion Internet. [Apprenez-en plus sur le protocole AdGuard VPN](https://trusttunnel.org/).

## Comment utiliser AdGuard VPN pour iOS

Pour utiliser AdGuard VPN pour iOS, vous devez d'abord vous connecter à votre [compte AdGuard](https://my.adguard.com/). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard, ou via Google, Apple ID ou Facebook (si votre compte AdGuard a été enregistré avec la même adresse e-mail).

Si vous n'avez pas encore de compte AdGuard, vous devrez d'abord le créer.

L'utilisation d'AdGuard VPN est assez simple. Sur l'écran principal, vous pouvez voir le bouton *Connecter* (*Déconnecter*) et la liste des serveurs disponibles (nous les appelons *emplacements*). Ces serveurs ont leur propre emplacement (un certain pays et une ville) et un indicateur de ping.

Le ping indique le temps de réponse du serveur en millisecondes. Cela indique la rapidité de la connexion VPN lorsque vous vous connectez à cet emplacement. La sélection d'un serveur avec un ping de 22 ms signifie qu'un paquet de données envoyé à ce serveur sera renvoyé en 22 ms.

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Écran principal et emplacements *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Exclusions

Vous pouvez trouver l’onglet Exclusions en appuyant sur la deuxième icône dans la barre inférieure.

Par défaut, AdGuard VPN est actif pour tous les sites Web sauf ceux ajoutés aux exclusions. Vous pouvez également l'activer de manière sélective — le VPN ne sera actif que pour les sites Web spécifiés. Pour passer à ce mode, touchez *Changer de mode*.

:::note

Chaque mode possède sa propre liste d'exclusions.

:::

Vous pouvez ajouter des domaines (par exemple, `google.com`) ou des sous-domaines (par exemple, `news.google.com`) de sites Web aux listes de trois manières :

- Saisissez-les manuellement dans l'application
- [Choisissez parmi des listes de domaines pour les services populaires](#domain-lists-for-popular-services)
- Ajoutez-les directement depuis le navigateur en partageant les pages souhaitées vers l'application AdGuard VPN

![Exclusions *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Lorsque vous ajoutez un domaine manuellement, tous les sous-domaines sont ajoutés automatiquement (cela ressemble à `*.google.com`). Vous souhaitez conserver uniquement google.com ou désactiver le VPN pour un domaine spécifique ? Appuyez sur la ligne avec le site Web : cela ouvrira un écran séparé où vous pourrez gérer les sous-domaines. Il suffit de décocher les cases pour celles dont vous n’avez pas besoin.

![Sous-domaines *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Si vous ajoutez manuellement un sous-domaine, le domaine principal sera également ajouté — mais la case à cocher à côté ne sera pas cochée.

### Listes de domaines pour les services populaires

Les grands services comme Google sont compliqués. Ils utilisent généralement plusieurs domaines : un pour les fichiers multimédias, un autre pour l'API, ainsi que des domaines pour différents pays. Par exemple, dans le cas de Google, nous avons 416 domaines dans notre liste. Ils doivent tous être ajoutés aux exclusions pour désactiver (ou activer) complètement le VPN pour le service.

Voici comment ajouter tous les domaines nécessaires pour un service populaire à la liste d’exclusion :

1. Ouvrez les *Exclusions*.
2. Appuyez sur *Ajouter un site Web*.
3. Appuyez sur *Depuis la liste*.
4. Recherchez le service souhaité dans la liste et appuyez sur *Ajouter*.

![Liste des services populaires *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Importation/exportation des exclusions

Une autre fonctionnalité utile est l'importation et l'exportation des listes des exclusions. De cette façon, vous pouvez partager des listes d’exclusion depuis et vers d’autres appareils.

Vous pouvez le faire en quatre étapes :

1. Ouvrez AdGuard VPN sur l'appareil à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `exclusions.zip` sera téléchargée.

2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes : Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.

3. Lors du transfert entre des appareils différents, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil iOS vers votre Mac, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Mac.

4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive.

**Dans AdGuard VPN pour iOS, les fonctionnalités d'exportation et d'importation sont accessibles en appuyant sur l'icône à trois points dans le coin supérieur droit de l'écran Exclusions**.

![Import/export des exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Emplacements enregistrés

Cette fonctionnalité vous permet d'enregistrer vos emplacements de serveur favoris dans un onglet dédié afin que vous puissiez y accéder rapidement sans avoir besoin de rechercher ou de faire défiler toute la liste.

Pour ajouter un emplacement à *Enregistrés*, il suffit de le faire glisser vers la gauche. Pour le supprimer des *Enregistrés*, faites de même :

![Emplacements enregistrés ajouter retirer *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Paramètres généraux

Pour ouvrir les Paramètres généraux :

1. Appuyez sur l’icône Paramètres (⚙) dans le coin inférieur droit de l’écran principal de l’application.
2. Appuyez sur *Général*.

Ici, vous pouvez configurer AdGuard VPN pour iOS selon vos besoins en utilisant différentes options : *Serveur DNS*, *Thème*, *Avancés*, *Envoyer des données techniques et d'interaction* et *Kill Switch*.

![Paramètres généraux *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Serveur DNS

AdGuard VPN pour iOS offre un choix entre plusieurs serveurs DNS, chacun ayant ses propres qualités. Par exemple, AdGuard DNS supprime les publicités et protège votre appareil contre le suivi tandis qu'AdGuard DNS Protection Familiale combine les fonctions d'AdGuard DNS avec la Recherche Sécurisée et le blocage de contenu pour adultes. Les serveurs DNS de différents fournisseurs DNS peuvent également fonctionner plus ou moins rapidement en fonction de votre emplacement, de votre fournisseur d'accès Internet et d'autres facteurs. Choisissez celui qui vous convient le mieux. Vous pouvez [apprendre plus sur le DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) et ses caractéristiques.

![Écran du serveur DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Thème

Vous pouvez définir le thème de votre application sur Système, Sombre ou Clair (disponible dans iOS 13 ou version ultérieure).

### Paramètres avancés

Dans *Paramètres avancés* , vous pouvez trouver 4 sections — *Mode de fonctionnement*, *Niveau de journalisation*, *Exporter les journaux et les informations système*, et *Informations de diagnostic*.

#### Mode de fonctionnement

AdGuard VPN pour iOS peut fonctionner en deux modes : **VPN** et **Intégré**.

Le mode *VPN* utilise le [Protocole AdGuard VPN](https://trusttunnel.org/), qui offre la meilleure combinaison de vitesse et de sécurité. Dans ce mode, AdGuard VPN ne fonctionnera pas avec le [Bloqueur AdGuard pour iOS](https://adguard.com/adguard-ios/overview.html).

En mode **intégré**, AdGuard VPN pourra fonctionner simultanément avec le Bloqueur AdGuard pour iOS en utilisant le protocole IPSec. Ce protocole est également sécuritaire, mais un peu plus lent et plus facile à détecter. Vous n'avez pas besoin d'effectuer d'actions supplémentaires pour configurer l'intégration : installez simplement les deux applications et passez à ce mode.

:::note

En mode **Intégré**, vous ne pouvez pas utiliser la fonctionnalité Exclusions ni choisir un serveur DNS.

:::

#### Niveau de journalisation

Ce paramètre est principalement utilisé à des fins de débogage et de résolution de problèmes. Les niveaux de journalisation Étendu et Extrême enregistrent des informations plus détaillées qui peuvent aider à identifier et à résoudre divers problèmes ou bogues.

:::caution

**Il n'est pas recommandé d'activer le niveau de journalisation Étendu ou Extrême, sauf par demande de notre équipe d'assistance**.

:::

#### Exporter les journaux et les informations système

Cette option peut être utilisée pour envoyer les journaux de l’application et les informations système à notre assistance ou à toute autre personne.

#### Données diagnostiques

Cette option vous permet d’exporter des informations techniques qui peuvent être utiles pour résoudre des problèmes et sont parfois demandées par notre assistance et nos développeurs.

#### Protocole AdGuard VPN

![Sélection du protocole VPN *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

Par défaut, le protocole AdGuard VPN utilise la sélection dynamique du protocole VPN (l'option *Sélection automatique*). Cela signifie qu'AdGuard VPN détermine automatiquement quel protocole — HTTP2/TLS ou HTTP3/QUIC — vous offrira les meilleures performances et bascule instantanément vers celui-ci. Cela améliore la vitesse et la stabilité du VPN, ce qui est particulièrement utile dans les régions où l’utilisation du VPN est restreinte ou peu fiable.

Si vous le souhaitez, vous pouvez faire en sorte qu'AdGuard VPN utilise uniquement le protocole HTTP2/TLS ou HTTP3/QUIC au lieu de la *Sélection automatique*. Chaque protocole a ses points forts, mais le meilleur choix peut varier en fonction de votre emplacement, des conditions du réseau et même du serveur auquel vous vous connectez.

### Envoyer des données techniques et d’interaction

En activant cette option, vous nous aidez à mieux comprendre comment les utilisateurs interagissent avec l'application. Nous utilisons ces informations pour améliorer l'expérience utilisateur.

### Kill Switch

Si, pour une raison ou une autre, votre connexion VPN est soudainement interrompue, *Kill Switch* mettra automatiquement fin à la connexion Internet, garantissant ainsi que vos données ne fuient pas et que votre identité reste cachée.

## Actions rapides

Les actions rapides sont un moyen pratique d'effectuer des actions utiles ou spécifiques à une application depuis l'écran d'accueil sans ouvrir d'application.

Pour accéder au menu des actions rapides, appuyez longuement sur l'icône de l'application AdGuard VPN, puis soulevez votre doigt. Dans le menu qui s'ouvre, vous verrez les actions rapides d'AdGuard VPN : *Connecter* (*Déconnecter*) et *Sélectionner l'emplacement*. Vous pouvez également accéder à toutes les actions par défaut comme supprimer l'app, déplacer ou partager l'app.

![Actions rapides *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Assistance

L'écran d'assistance (*Paramètres* → *Assistance*) dispose d'un certain nombre de fonctionnalités utiles : *FAQ*, *Signaler un bug*, *Demander une fonctionnalité*, et *Évaluer l'application*. Cette dernière vous permet d'évaluer AdGuard VPN pour iOS sur l'App Store.

![Assistance *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Écran d’abonnement

Si vous utilisez la version gratuite d'AdGuard VPN, il y aura un autre onglet avec une icône de flèche dans la barre d'onglets inférieure. Cette section décrit brièvement les principaux avantages de la version payante de l'application. Vous pouvez choisir un abonnement annuel ou mensuel.

![Abonnements *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
