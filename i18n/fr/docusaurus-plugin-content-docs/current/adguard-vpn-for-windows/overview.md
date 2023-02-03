---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour Windows ?

Un VPN, acronyme anglais de "réseau privé virtuel", est un service qui sécurise votre connexion Internet et vous aide à rester anonyme en ligne. Comment ça marche ? Chaque fois que vous visitez un site web sans utiliser un VPN, votre FAI le voit. Il sait qui vous êtes et ce que vous recherchez, et il peut collecter et vendre ces données. À son tour, le site web que vous avez visité peut également suivre votre activité. Lorsque vous activez une application VPN, elle redirige votre trafic à travers un tunnel chiffré vers un serveur VPN distant, ce qui garantit le respect de votre vie privée : le fournisseur d'accès ne sait pas où vous avez envoyé une demande et le site ne sait pas d'où vous venez.

**Qu’est-ce que fait AdGuard VPN pour Windows**

* Protège contre l'interception du trafic réseau (spoofing). AdGuard VPN crée un tunnel chiffré entre votre appareil et un serveur distant. Tout votre trafic Internet passe par ce tunnel, vos données sont donc protégées en cours de route. Et grâce au protocole unique de [AdGuard](/general/adguard-vpn-protocol.mdx), vous avez la garantie d'une connexion rapide et sécurisée.

* Masque votre adresse IP. Votre véritable adresse IP est la clé à vos données personnelles pour les cybercriminels. Votre nom, adresse e-mail, numéro de téléphone, informations de carte bancaire peuvent tous tomber entre les mains de fraudeurs si vous ne cachez pas votre adresse IP. Avec AdGuard VPN, comme nous l'avons déjà dit, tout votre trafic passe par un tunnel chiffré et arrive sur le serveur VPN. Par conséquent, de l’extérieur, il semble que votre appareil ait l’adresse IP dudit serveur VPN.

* Masque votre emplacement réel. En sélectionnant l'un des serveurs VPN AdGuard, vous êtes instantanément "téléporté" vers son emplacement. Qu'est-ce que cela vous donne ? Par exemple, la possibilité de réserver un hôtel aux tarifs locaux ou de se cacher de la publicité géo-ciblée.

AdGuard VPN pour Windows présente de nombreux avantages, c'est pourquoi nous leur avons dédié [un article séparé](/general/why-adguard-vpn.md). Ici, cependant, nous voulons nous concentrer davantage sur l'application elle-même et son fonctionnement.

## Comment commencer à utiliser AdGuard VPN pour Windows

Pour commencer à utiliser AdGuard VPN pour Windows, téléchargez l'application depuis [notre site web](https://adguard-vpn.com/welcome.html). L'installation ne prend pas plus d'une minute - et vous verrez une fenêtre de dialogue dans laquelle vous devrez cocher au moins une case appliquant les termes de l'accord d'utilisation et de la politique de confidentialité. Et c'est à vous de décider si vous souhaitez qu'AdGuard collecte des données anonymisées sur l'utilisation de votre application. Enfin le programme vous demandera de vous connecter, soit via le compte [AdGuard](https://auth.adguard.com/login.html) soit via les réseaux sociaux (Apple, Google, Facebook). C'est tout, vous pouvez maintenant utiliser AdGuard VPN pour Windows.

## Écran d'accueil

![Page d'accueil de AdGuard VPN pour Windows](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

L’élément le plus visible sur **l’écran d’accueil** est le bouton de connexion/déconnexion de AdGuard VPN. Dessous, vous pouvez voir le [mode](#exclusions) dans lequel l’application s’exécute, et ci-dessous - le serveur sélectionné. Sur le côté droit de l'écran, vous trouverez tous les emplacements disponibles. L'emplacement le plus rapide, c'est-à-dire celui avec le ping le plus court, est affiché en haut de la liste.

En haut de l'écran se trouve un panneau de navigation avec quatre onglets : **Accueil**, **Exclusions**, **Assistance**, **Paramètres**.

## Exclusions

AdGuard VPN pour Windows peut fonctionner en deux modes : **Général** ou **Sélectif**. Qu'est-ce que ça veut dire ? Si vous voulez que l'application fonctionne partout sauf pour certains sites Web, activez le **Mode général** et dressez la liste des sites web que vous voulez exclure du tunnel. Le **Mode sélectif** a l'effet inverse : il active AdGuard VPN uniquement sur les sites web spécifiés dans la liste des exclusions. Veuillez noter que les listes d'exclusions de ces deux modes sont indépendantes l'une de l'autre.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Vous pouvez ajouter des sites web aux exclusions **manuellement** en saisissant leurs noms de domaine. L'application vous offre également la possibilité de choisir des sites web populaires **depuis la liste**.

![Ajouter des exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Ajouter des exclusions de la liste](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Lors de l'ajout manuel de domaines, vous devez tenir compte de certaines nuances. Par exemple, si vous excluez manuellement le domaine `google.com`, tous les sous-domaines `*.google.com` seront également ajoutés à la liste des exclusions. Toutefois, les noms de domaines avec d'autres domaines de premier niveau tels que `google.es` ou `google.it` ne seront pas exclus. Soit vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` ne sera pas inclus dans la liste.

Nous vous recommandons d'utiliser l'option **De la liste**. Les sites web sont regroupés en huit catégories : Réseaux sociaux, Messageries, Services de streaming vidéo et musical, Jeux, Shopping, Moteurs de recherche et Outils de télétravail. Nous y avons placé les services les plus populaires, y compris tous les noms de domaine et sous-domaines liés à chaque plate-forme.

### Importation/exportation des listes des exclusions

Pour exporter la liste des exclusions de AdGuard VPN pour Windows vers votre ordinateur, cliquez sur **Exporter les exclusions**, sélectionnez le dossier dans lequel la liste sera stockée et cliquez sur **Enregistrer**. Une archive `exclusions.zip` avec deux fichiers `.txt` sera téléchargée, une pour chacune des listes — **Générale** et **Sélective**. Vous pouvez les modifier en ajoutant de nouvelles exclusions ou en supprimant les anciennes.

Pour transférer les listes d'exclusions vers un autre appareil, envoyez le fichier `.zip` à sa destination. Ouvrez AdGuard VPN sur l'appareil où vous souhaitez importer l'archive avec les listes d'exclusions, cliquez sur *Exclusions*, puis sur *Importer les exclusions* et sélectionnez l'archive envoyée précédemment.

## Paramètres

![Paramètres](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

Le quatrième onglet de la barre d'onglets de l'application contient des sections qui vous aideront à personnaliser l'application. Examinons de plus près deux d'entre elles : **Paramètres de l'application** et **Applications exclues**.

### Paramètres de l'appliсation

![Paramètres de l'appliсation](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

Dans la section **Paramètres de l'application** , vous pouvez définir la langue de l'application et également activer **Kill Switch**, qui bloquera l'accès à Internet si votre connexion VPN plante. Ceci est nécessaire pour empêcher les intrus d'accéder à vos données si vous vous retrouvez sans protection VPN alors que vous êtes connecté à un réseau Wi-Fi public ou mobile.

Vous pouvez également activer les fonctionnalités suivantes en un seul clic : **Mise à jour automatique**, **Lancer le VPN AdGuard au démarrage de Windows**, **Se connecter automatiquement au lancement de l'application** et autoriser AdGuard à collecter des données d'utilisation anonymes de l'application pour que l'équipe AdGuard puisse obtenir l'info sur des problèmes potentiels d'utilisation. Ici, vous pouvez également changer le thème en **Clair**, **Système** ou **Sombre**.

En bas de la page, il y a deux sections : **Serveurs DNS** et **Paramètres avancés**.

#### Serveurs DNS

L'onglet **Serveurs DNS** vous permet d'ajouter votre serveur DNS personnalisé. Vous pouvez configurer un serveur DNS par n'importe quel fournisseur. Nous recommandons d'ajouter [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), un serveur qui peut protéger contre la publicité, le suivi et l'hameçonnage en plus des fonctions standard.

#### Paramètres avancés

Il est tout à fait possible d'utiliser AdGuard VPN pour Windows sans jamais toucher aux paramètres avancés, mais ils peuvent être utiles si vous êtes prêt à prendre le temps d'apprendre ce qu'ils font.

**Mode de fonctionnement**

Malgré le fait que deux modes de fonctionnement existent — VPN et SOCKS5 — nous vous conseillons d'utiliser uniquement celui choisi par défaut (VPN). Lorsque le mode **VPN** est activé, tout le trafic de votre appareil sera dirigé via AdGuard VPN, tandis qu'en mode **SOCKS5** , AdGuard VPN utilise un serveur proxy local qui peut être utilisé par d'autres applications pour rediriger leur trafic.

**Niveau de journalisation**

Deux niveaux de journalisation sont disponibles au choix : **Enregistrer par défaut** et **Tout enregistrer**. La première option est activée par défaut. L'option **Tout enregistrer** ne doit être activée que si notre équipe d'assistance vous l'a demandé. L'utilisation de l'application dans ce mode pendant une période prolongée entraîne une consommation accrue de la batterie.

Tous les journaux sont stockés localement sur votre appareil et vous pouvez les envoyer à l'équipe d'assistance si nécessaire.

**Utiliser QUIC**

Il s'agit d'une fonctionnalité expérimentale qui permet à AdGuard d'utiliser le protocole de chiffrement avancé QUIC. Il présente de nombreux avantages, mais le plus notable est qu'il peut améliorer la qualité de la connexion dans des conditions non idéales, par exemple lors de l'utilisation de l'Internet mobile ou lors de la connexion à des réseaux Wi-Fi publics.

### Applications exclues

![Ajouter une application aux exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Non seulement AdGuard VPN chiffre le trafic de vos navigateurs, mais également celui des autres applications installées sur votre appareil. Si vous souhaitez exclure certaines applications du tunnel, placez-les dans la liste **Applications exclues**.

## Autres onglets

### À propos

L'onglet **À propos** fournit des informations sur la version actuelle de AdGuard VPN pour Windows, un bouton de mise à jour et des liens vers le site web AdGuard, le forum, la CLUF et politique de confidentialité.

### Compte

Ici vous trouverez des informations sur le statut de votre licence, ainsi qu'un lien vers votre compte personnel AdGuard, où vous pouvez gérer vos abonnements actuels et en acheter de nouveaux.

## Assistance

Cet onglet vise à répondre aux questions des utilisateurs : vous y trouverez un lien vers la page de la FAQ, vous pourrez signaler un bogue ou laisser un commentaire, et exporter les journaux si l'équipe d'assistance vous le demande.
