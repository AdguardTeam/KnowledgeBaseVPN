---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour iOS ?

Un VPN vous permet de créer une connexion sécurisée à un autre réseau sur Internet. Il connecte l'ordinateur ou l'appareil mobile d'un utilisateur à un serveur et permet de naviguer sur le net en utilisant l'adresse IP de quelqu'un d'autre. Donc, si le serveur VPN est situé dans un autre pays, il semblera que vous vous êtes connecté à Internet depuis ce pays. [En savoir plus](/general/how-vpn-works.md) sur le fonctionnement détaillé d'un VPN.

Si on parle de AdGuard VPN, il a plusieurs fonctions :

- dissimule votre localisation réelle et vous aide à rester anonyme
- changes your IP address to protect your data from tracking
- chiffre votre trafic pour le rendre inaccessible aux escrocs
- vous permet de configurer où utiliser le VPN et où ne pas le faire (fonction d'exclusions)

L'avantage suivant d'AdGuard VPN pour iOS est notre propre protocole VPN. Il présente deux avantages principaux : par rapport aux autres protocoles VPN, il est extrêmement difficile à détecter et il fonctionne de manière stable même avec une mauvaise connexion Internet. Vous pouvez apprendre plus sur le protocole VPN de AdGuard dans [cet article](../general/adguard-vpn-protocol.mdx).

## Comment utiliser AdGuard VPN pour iOS

Pour utiliser AdGuard VPN pour iOS, vous devez d'abord vous connecter à votre [compte AdGuard](https://my.adguard.com/). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard, ou via Google, Apple ID ou Facebook (si votre compte AdGuard a été enregistré avec la même adresse e-mail).

Si vous n'avez pas encore de compte AdGuard, vous devrez d'abord le créer.

L'utilisation d'AdGuard VPN est assez simple. Sur l'écran principal, vous pouvez voir le bouton *Connecter/Déconnecter* et la liste des serveurs disponibles. Ces serveurs ont leur propre emplacement (un certain pays et une ville) et un indicateur de ping. Le ping montre le temps de réponse du serveur (en millisecondes). Par exemple, choisir le serveur avec le ping de 22 ms signifie que le signal atteindra le serveur et reviendra en 22 millisecondes. Donc plus ce taux est bas, plus votre connexion est rapide. Dans AdGuard VPN, vous pouvez choisir parmi plus de 50 emplacements dans des dizaines de pays.

![Écran principal et emplacements](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listes d'exclusions

Vous pouvez trouver la fonction d'exclusion en appuyant sur le bouton du milieu ci-dessous. Vous y verrez deux listes d'exclusion - pour les modes général et sélectif. En mode Général, le VPN fonctionne sur tous les sites web à l'exception de ceux de la liste d'exclusion. En mode Sélectif, à l'inverse, le VPN n'opère que sur les sites de la liste. Vous pouvez ajouter des domaines (par exemple `google.com`) ou des sous-domaines (par exemple `*.google.com`) de sites web de deux façons : vous pouvez les saisir manuellement dans l'application ou directement depuis le navigateur en cliquant sur le bouton *Partager* et en trouvant AdGuard VPN dans la liste ouverte ci-dessous.

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Une autre fonctionnalité utile est l'importation/exportation des listes d'exclusions. Vous pouvez le faire en suivant les quatre étapes suivantes :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Find the appropriate section and click the *Export* button. L'archive `exclusions.zip` sera téléchargée.

2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes : Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.

3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil iOS vers votre Mac, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Mac.

4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Find the appropriate section, click the *Import* button and select the archive.

![Importer/exporter les exclusions](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Paramètres de l'app

Pour accéder aux paramètres de l'application :

1. Appuyez sur le bouton Paramètres (⚙) dans le coin inférieur droit de l'écran principal de l'application AdGuard VPN
2. Appuyez sur *Paramètres de l'application*

Ici, vous pouvez configurer AdGuard VPN pour iOS selon vos besoins à l'aide de différentes options : mode de fonctionnement, serveur DNS, protection automatique Wi-Fi, thème de couleur et paramètres avancés.

![Paramètres de l'app](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Mode de fonctionnement

AdGuard VPN pour iOS peut fonctionner en deux modes : **Général** et **Intégré**.

En mode **Général** , le protocole [AdGuard VPN](../general/adguard-vpn-protocol.mdx) est utilisé, ce qui offre la meilleure combinaison de vitesse et de sécurité. In this mode, AdGuard VPN will not be able to work alongside [AdGuard Ad Blocker for iOS](https://adguard.com/kb/adguard-for-ios/overview/).

En mode **intégré** , AdGuard VPN pourra fonctionner en même temps avec le Bloqueur AdGuard pour iOS en utilisant à sa place le protocole IPSec. Ce protocole est également sécurisé, mais un peu plus lent et plus facile à détecter. Vous n'avez pas besoin d'effectuer d'actions supplémentaires pour configurer l'intégration : installez simplement les deux applications et passez à ce mode.
> Veuillez noter qu'en mode **Intégré** , vous ne pouvez pas utiliser la fonction Exclusions ou choisir un serveur DNS.

### Serveur DNS

L'objectif du système de noms de domaine (DNS) est de traduire les noms de sites web en quelque chose que les navigateurs peuvent comprendre, à savoir des adresses IP. Cette tâche est effectuée par les serveurs DNS. AdGuard VPN pour iOS offre un choix entre plusieurs serveurs DNS, chacun ayant ses propres qualités. Par exemple, AdGuard DNS supprime les publicités et protège votre appareil contre le suivi tandis qu'AdGuard DNS Famille Protection combine les fonctions d'AdGuard DNS avec la Recherche Sécurisée et le blocage de contenu pour adultes. Les serveurs DNS de différents fournisseurs DNS peuvent également fonctionner plus ou moins rapidement en fonction de votre emplacement, de votre fournisseur d'accès Internet et d'autres facteurs. Choisissez celui qui vous convient le mieux. You can find out more about DNS and its characteristics [in this article](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![Écran du serveur DNS](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Protection automatique Wi-Fi

VPN s'active automatiquement quand le dispositif se connecte à un réseau Wi-Fi.

### Thème

Vous pouvez choisir le thème par défaut du système, sombre ou clair de l'application (disponible dans les versions iOS 13 et ultérieures).

### Paramètres avancés

Dans les *Paramètres avancés* , vous pouvez trouver deux sections - Niveau de journalisation et Informations de diagnostic. Concernant la première option, il n'est pas recommandé d'activer le niveau de journalisation étendu, sauf demande de notre équipe de support. Des informations de diagnostic, des informations techniques stockées localement sur l'appareil et les connexions (adresse IP, ID, ping, etc.), peuvent nous être envoyées en cas de problème technique.

## Actions rapides (disponibles dans iOS 13 ou version ultérieure)

Pour accéder à cette fonction, touchez et maintenez l'icône de l'application, puis levez votre doigt. Vous verrez une liste d'actions rapides : Se connecter/déconnecter au serveur actuellement sélectionné, Choisir un emplacement pour sélectionner un nouvel emplacement de serveur. Vous pouvez également, bien sûr, accéder à toutes les actions par défaut comme la suppression de l'application ou le déplacement de l'icône de l'application.

![Actions rapides](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Assistance

L'accomplissement des utilisateurs est notre priorité absolue. Il existe donc une variété de fonctionnalités d'aide dans l'application (appuyez sur le bouton *Paramètres* en bas à droite, puis sur *Assistance*): vous pouvez voir la section FAQ, signaler un bogue, laisser des commentaires, discuter de vos problèmes et suggestions sur notre forum, sur les réseaux sociaux ou sur GitHub, évaluez AdGuard VPN pour iOS dans l'App Store et exportez les journaux.

![Assistance](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Si vous utilisez la version gratuite d'AdGuard VPN, il y aura le quatrième onglet avec une icône de flèche dans la barre d'onglets inférieure. Dans cette section, vous trouverez de brèves informations sur les principaux avantages de la version payante de l'application et pourrez acheter un abonnement.

![Abonnement](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
