---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour iOS ?

Un VPN vous permet de créer une connexion sécurisée à un autre réseau sur Internet. Il connecte l'ordinateur ou l'appareil mobile d'un utilisateur à un serveur et permet de naviguer sur le net en utilisant une adresse IP de camouflage. Si le serveur VPN est situé dans un autre pays, la connexion Internet semblera avoir été établie à partir de ce pays. [Apprenez plus](/general/how-vpn-works) sur les détails du fonctionnement d'un VPN.

AdGuard VPN a plusieurs fonctions :

- dissimule votre localisation réelle et vous aide à rester anonyme
- il modifie votre adresse IP pour protéger vos données contre le suivi
- il crypte votre trafic et rend le contenu inaccessible aux escrocs
- vous permet de configurer où utiliser le VPN et où ne pas le faire (fonction d'exclusions)

L'avantage suivant d'AdGuard VPN pour iOS est notre propre protocole VPN. Il est extrêmement difficile à détecter par rapport aux autres protocoles VPN et reste stable même avec une mauvaise connexion Internet. Vous pouvez [apprendre plus](/general/adguard-vpn-protocol) sur le protocole AdGuard VPN.

## Comment utiliser AdGuard VPN pour iOS

Pour utiliser AdGuard VPN pour iOS, vous devez d'abord vous connecter à votre [compte AdGuard](https://my.adguard.com/). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard, ou via Google, Apple ID ou Facebook (si votre compte AdGuard a été enregistré avec la même adresse e-mail).

Si vous n'avez pas encore de compte AdGuard, vous devrez d'abord le créer.

L'utilisation d'AdGuard VPN est assez simple. Sur l'écran principal, vous pouvez voir le bouton *Connecter/Déconnecter* et la liste des serveurs disponibles. Ces serveurs ont leur propre emplacement (un certain pays et une ville) et un indicateur de ping. Le ping indique le temps de réponse du serveur (en millisecondes). Choisir le serveur avec un ping de 22 ms signifie qu'un paquet de données envoyé à ce serveur est renvoyé (reçu) après 22 ms. Dans AdGuard VPN, vous pouvez choisir parmi plus de 50 emplacements dans des dizaines de pays.

![Écran principal et emplacements *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listes d'exclusions

Vous pouvez trouver les Exclusions en appuyant sur le bouton au milieu ci-dessous. Vous y verrez deux listes d'exclusion, pour les Modes Général et Sélectif. En mode général, le VPN fonctionne pour tous les sites web à l'exception de ceux qui sont exclus. A l’inverse, en mode Sélectif, le VPN ne fonctionne que pour les sites Internet de la liste. Vous pouvez ajouter des domaines (par exemple `google.com`) ou des sous-domaines (par exemple `*.google.com`) de sites web de deux façons : vous pouvez les saisir manuellement dans l'application ou directement à partir du navigateur en partageant les pages souhaitées avec AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Une autre fonctionnalité utile est l'importation/exportation des listes d'exclusions. Vous pouvez le faire en suivant les quatre étapes suivantes :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `exclusions.zip` sera téléchargée.

2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes : Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.

3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil iOS vers votre Mac, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Mac.

4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive.

![Import/export des exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Paramètres de l'app

Pour accéder aux paramètres de l'application :

1. Appuyez sur le bouton Paramètres (⚙) dans le coin inférieur droit de l'écran principal de l'application AdGuard VPN
2. Appuyez sur *Paramètres de l'application*

Ici, vous pouvez configurer AdGuard VPN pour iOS selon vos besoins à l'aide de différentes options : mode de fonctionnement, serveur DNS, protection automatique Wi-Fi, thème de couleur et paramètres avancés.

![Paramètres de l'app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Mode de fonctionnement

AdGuard VPN pour iOS peut fonctionner en deux modes : **Général** et **Intégré**.

En mode **Général** , le protocole [AdGuard VPN](/general/adguard-vpn-protocol) est utilisé, ce qui offre la meilleure combinaison de vitesse et de sécurité. Dans ce mode, AdGuard VPN ne pourra pas fonctionner avec le [Bloqueur AdGuard pour iOS](https://adguard.com/kb/adguard-for-ios/overview/).

En mode **intégré** , AdGuard VPN pourra fonctionner en même temps avec le Bloqueur AdGuard pour iOS en utilisant à sa place le protocole IPSec. Ce protocole est également sécurisé, mais un peu plus lent et plus facile à détecter. Vous n'avez pas besoin d'effectuer d'actions supplémentaires pour configurer l'intégration : installez simplement les deux applications et passez à ce mode.

:::note

En mode **Intégré** , vous ne pouvez pas utiliser la fonctionnalité Exclusions ni choisir un serveur DNS.

:::

### Serveur DNS

Les serveurs DNS traduisent un nom de domaine ou un nom d'hôte (comme exemple.com ou www.exemple.com) en quelque chose que les navigateurs peuvent comprendre, c'est-à-dire des adresses IP. AdGuard VPN pour iOS offre un choix entre plusieurs serveurs DNS, chacun ayant ses propres qualités. Par exemple, AdGuard DNS supprime les publicités et protège votre appareil contre le suivi tandis qu'AdGuard DNS Protection Familiale combine les fonctions d'AdGuard DNS avec la Recherche Sécurisée et le blocage de contenu pour adultes. Les serveurs DNS de différents fournisseurs DNS peuvent également fonctionner plus ou moins rapidement en fonction de votre emplacement, de votre fournisseur d'accès Internet et d'autres facteurs. Choisissez celui qui vous convient le mieux. Vous pouvez [apprendre plus sur le DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) et ses caractéristiques.

![Écran du serveur DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Protection automatique Wi-Fi

VPN s'active automatiquement quand le dispositif se connecte à un réseau Wi-Fi.

### Thème

Vous pouvez choisir le thème par défaut du système, sombre ou clair de l'application (disponible dans les versions iOS 13 et ultérieures).

### Paramètres avancés

Dans les *Paramètres avancés* , vous pouvez trouver deux sections - Niveau de journalisation et Informations de diagnostic. Concernant la première option, il n'est pas recommandé d'activer le niveau de journalisation amplifié, sauf sur demande de notre équipe d'assistance. Des informations de diagnostic, des informations techniques stockées localement sur l'appareil et les connexions (adresse IP, ID, ping, etc.), peuvent nous être envoyées en cas de problème technique.

## Actions rapides (disponibles dans iOS 13 ou version ultérieure)

Pour accéder à cette fonction, touchez et maintenez l'icône de l'application, puis levez votre doigt. Vous verrez des actions rapides : Connexion/Déconnexion, Sélectionner un emplacement, Modifier l'écran d'accueil et Supprimer l'application.

![Actions rapides *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Assistance

Il existe une variété de fonctionnalités d'aide dans l'application (appuyez sur le bouton *Paramètres* en bas à droite, puis sur *Assistance*): vous pouvez voir la section FAQ, signaler un bogue, laisser des commentaires, discuter de vos problèmes et suggestions sur les réseaux sociaux ou sur GitHub, évaluez AdGuard VPN pour iOS dans l'App Store et exportez les journaux.

![Assistance *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Si vous utilisez la version gratuite d'AdGuard VPN, il y aura le quatrième onglet avec une icône de flèche dans la barre d'onglets inférieure. Dans cette section, vous trouverez de brèves informations sur les principaux avantages de la version payante de l'application et pourrez acheter un abonnement.

![Abonnements *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
