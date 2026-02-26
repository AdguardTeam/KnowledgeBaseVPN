---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Ce que fait AdGuard VPN pour Windows

- Protège contre l'interception du trafic réseau (spoofing). AdGuard VPN crée un tunnel chiffré entre votre appareil et un serveur distant. Tout votre trafic Internet passe par ce tunnel, vos données sont donc protégées en cours de route. Et grâce au [protocole unique d'AdGuard](/general/adguard-vpn-protocol), vous avez la garantie d'une connexion rapide et sécurisée.

- Masque votre adresse IP. Votre véritable adresse IP est la clé à vos données personnelles pour les cybercriminels. Votre nom, adresse e-mail, numéro de téléphone, informations de carte bancaire peuvent tous tomber entre les mains de fraudeurs si vous ne cachez pas votre adresse IP. Avec AdGuard VPN, tout votre trafic passe par un tunnel chiffré et arrive sur le serveur VPN. Le serveur Web enregistre l'adresse IP du point de terminaison du tunnel, c'est-à-dire le serveur VPN, et non l'adresse IP réelle de l'appareil.

- Masque votre emplacement réel. Qu'est-ce que cela vous donne ? Par exemple, la possibilité de réserver un hôtel aux tarifs locaux ou de se cacher de la publicité géo-ciblée.

AdGuard VPN pour Windows présente de nombreux avantages, c'est pourquoi nous leur avons dédié [un article séparé](/general/why-adguard-vpn). Ici, cependant, nous voulons nous concentrer davantage sur l'application elle-même et son fonctionnement.

## Comment commencer à utiliser AdGuard VPN pour Windows

Pour commencer à utiliser AdGuard VPN pour Windows, téléchargez l'application depuis [notre site web](https://adguard-vpn.com/welcome.html). L'installation ne prend pas plus d'une minute — et vous verrez une fenêtre de dialogue dans laquelle vous devrez cocher au moins une case appliquant les termes de l'accord d'utilisation et de la politique de confidentialité. Et c'est à vous de décider si vous souhaitez qu'AdGuard collecte des données anonymisées sur l'utilisation de votre application. Finalement, le programme vous demandera de vous connecter, soit via le compte [AdGuard](https://auth.adguardaccount.com/login.html) soit par aide des réseaux sociaux (Apple, Google, Facebook). Ça y est, vous pouvez maintenant utiliser AdGuard VPN pour Windows.

## Écran d'accueil

![Écran d'accueil](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

L’élément le plus visible sur **l’écran d’accueil** est le bouton *Connecter/Déconnecter* d’AdGuard VPN, sous lequel vous pouvez voir le serveur sélectionné. Sur le côté droit de l'écran, vous verrez une liste des emplacements disponibles. L'emplacement le plus rapide, c'est-à-dire celui avec le ping le plus bas, est affiché en haut de la liste. Il y a également un bouton d'actualisation que vous pouvez cliquer si des emplacements sont hors ligne.

Vous pouvez aussi enregistrer vos emplacements favoris pour y accéder rapidement. Il suffit de survoler un emplacement, de cliquer sur l’icône de signet qui apparaît, et il sera enregistré. Vos emplacements marqués s’afficheront alors dans l’onglet *Enregistrés*.

En haut de l'écran se trouve un panneau de navigation avec cinq onglets : **Accueil**, **Exclusions**, **Statistiques**, **Assistance**, et **Paramètres**.

## Exclusions

Par défaut, AdGuard VPN pour Windows fonctionne partout. Vous pouvez ajouter les sites Web et les applications que vous souhaitez exclure du tunnel VPN à la liste des exclusions. Vous pouvez également faire en sorte qu'AdGuard VPN ne fonctionne que sur les sites Web et les applications spécifiés dans la liste des exclusions. Veuillez noter que ces deux listes sont indépendantes l'une de l'autre.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

Vous pouvez ajouter des sites Web aux exclusions **manuellement** en saisissant leurs noms de domaine. L'application vous offre également la possibilité de choisir des sites web populaires **depuis la liste**.

![Ajouter les exclusions de la liste *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Lors de l'ajout manuel de domaines, vous devez tenir compte de certains détails. Par exemple, si vous excluez manuellement le domaine `google.com`, tous les sous-domaines `*.google.com` seront également ajoutés à la liste des exclusions. Toutefois, les noms de domaines avec d'autres domaines de premier niveau tels que `google.es` ou `google.it` ne seront pas exclus. Soit vous pouvez ajouter `youtube.com` aux exclusions, mais le domaine du même service `youtu.be` ne sera pas inclus dans la liste.

:::

Nous vous recommandons d'utiliser l'option **Depuis la liste**. Les sites Web sont regroupés en huit catégories : Réseaux sociaux, Messageries, Services de streaming vidéo et musical, Jeux, Shopping, Moteurs de recherche et Outils de télétravail. Nous y avons placé les services les plus populaires, y compris tous les noms de domaine et sous-domaines liés à chaque plateforme.

:::info Navigateurs ajoutés aux exclusions

À partir de la version 2.4, tous les navigateurs sont automatiquement ajoutés à la liste des exclusions lorsque le VPN est actif uniquement pour certaines apps et sites Web. Ce changement est plus pratique pour les utilisateurs qui étaient souvent désorientés et ne savaient pas s'ils devaient considérer leurs navigateurs comme des applications ou non. Cela s'applique dans les conditions suivantes :

- L'utilisateur a installé AdGuard VPN pour la première fois
- L'utilisateur n'a pas modifié les paramètres d'exclusions avant la version 2.4

:::

### Importation/exportation des listes des exclusions

Pour exporter la liste des exclusions de AdGuard VPN vers votre ordinateur, cliquez sur **Exporter les exclusions**, sélectionnez le dossier dans lequel la liste sera stockée et cliquez sur **Enregistrer**. L'archive `exclusions.zip` avec deux fichiers `.txt` sera téléchargée, une pour chaque liste. Vous pouvez les modifier en ajoutant de nouvelles exclusions ou en supprimant les anciennes.

Sur l'appareil de destination, ouvrez AdGuard VPN, cliquez sur *Exclusions*, puis sélectionnez *Sites Web* ou *Applications*. Cliquez sur *Importer des exclusions* et sélectionnez l'archive reçue.

## Statistiques

![Écran des statistiques *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

L'écran des Statistiques affiche des informations détaillées sur votre utilisation des données, classées par emplacement et par application. Il met en avant vos emplacements et applications les plus fréquemment utilisés. Vous pouvez accéder aux statistiques pour des périodes différentes : quotidiennement, mensuellement ou pour toute la durée pendant laquelle vous avez utilisé AdGuard VPN pour Windows.

Il est essentiel que toutes ces informations soient stockées exclusivement sur votre appareil, ce qui garantit que vous seul pouvez les voir. L’accès à la fonctionnalité de statistiques est uniquement disponible pour les abonnés AdGuard VPN.

## Paramètres

![Paramètres *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

Le cinquième onglet contient des sections qui vous aideront à personnaliser l'app.

### Paramètres de l'appliсation

![Paramètres de l'app *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Dans la section **Paramètres de l'application**, vous pouvez définir la langue de l'application et également activer **Kill Switch**, qui bloquera l'accès à Internet si votre connexion VPN plante. Ceci est nécessaire pour empêcher les intrus d'accéder à vos données si vous vous retrouvez sans protection VPN alors que vous êtes connecté à un réseau Wi-Fi public ou mobile.

Vous pouvez également activer les fonctionnalités suivantes en un seul clic : **Mise à jour automatique**, **Lancer AdGuard VPN au démarrage de Windows**, **Connexion automatique au lancement de l'application** et autoriser AdGuard à collecter des données d'utilisation anonymes de l'application pour que l'équipe AdGuard puisse obtenir l'info sur des problèmes potentiels d'utilisation. Ici, vous pouvez également changer le thème en **Clair**, **Système**, ou **Sombre**.

En bas de la page, il y a deux sections : **Serveurs DNS** et **Paramètres avancés**.

#### Serveurs DNS

L'onglet **Serveurs DNS** vous autorise à ajouter votre propre serveur DNS — manuellement ou à partir de la liste. Vous pouvez configurer un serveur DNS par n'importe quel fournisseur. Nous recommandons d'ajouter [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un serveur qui peut protéger contre la publicité, le suivi et l'hameçonnage en plus des fonctions standard.

#### Paramètres avancés

Il est tout à fait possible d'utiliser AdGuard VPN pour Windows sans jamais toucher aux paramètres avancés, mais ils peuvent être utiles si vous êtes prêt à prendre le temps d'apprendre ce qu'ils font.

##### Mode de fonctionnement

Malgré le fait que deux modes de fonctionnement existent — VPN et SOCKS5 — nous vous conseillons d'utiliser uniquement celui choisi par défaut (VPN). Lorsque le mode **VPN** est activé, tout le trafic de votre appareil sera dirigé via AdGuard VPN, tandis qu'en mode **SOCKS5** , AdGuard VPN utilise un serveur proxy local qui peut être utilisé par d'autres applications pour rediriger leur trafic.

##### Niveau de journalisation

Deux niveaux de journalisation sont disponibles au choix : **Enregistrer par défaut** et **Tout enregistrer**. La première option est activée par défaut. L'option **Tout enregistrer** ne doit être activée que si notre équipe d'assistance vous l'a demandé. L'utilisation de l'application dans ce mode pendant une période prolongée entraîne une consommation accrue de la batterie.

Tous les journaux sont stockés localement sur votre appareil, vous pouvez les envoyer à l'équipe d'assistance si nécessaire.

##### Cryptographie post-quantique

![Cryptographie post-quantique *border](https://cdn.adtidy.org/blog/new/qe7fgimage_3.png)

Cette fonctionnalité chiffre votre trafic de telle manière que même les ordinateurs quantiques ne peuvent pas l'intercepter.

##### Protocole AdGuard VPN

![Sélection du protocole VPN *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.7/auto_en.png)

Par défaut, le Protocole AdGuard VPN utilise la sélection dynamique du protocole VPN (l'option *Sélection automatique*). Cela signifie qu'AdGuard VPN détermine automatiquement quel protocole — HTTP2/TLS ou HTTP3/QUIC — vous offrira les meilleures performances et bascule instantanément vers celui-ci. Cela améliore la vitesse et la stabilité du VPN, ce qui est particulièrement utile dans les régions où l’utilisation du VPN est restreinte ou peu fiable.

Si vous le souhaitez, vous pouvez faire en sorte qu'AdGuard VPN utilise uniquement le protocole HTTP2/TLS ou HTTP3/QUIC au lieu de la *Sélection automatique*. Chaque protocole a ses points forts, mais le meilleur choix peut varier en fonction de votre emplacement, des conditions du réseau et même du serveur auquel vous vous connectez.

##### Utiliser WinTun

WinTun est un pilote d'acheminement du trafic couramment utilisé pour les implémentations VPN sur Windows qui améliore la qualité des connexions VPN en créant un adaptateur réseau virtuel. Par défaut, AdGuard VPN utilise le pilote WFP habituel (et le pilote TDI pour Windows 7).

#### Exclusions du sous-réseau

Cette fonctionnalité vous permet d'ajouter des sous-réseaux pour exclure le trafic provenant de certains appareils connectés à votre réseau. Par exemple, votre aspirateur robot.

## Autres onglets

### À propos

L'onglet **À propos** fournit des informations sur la version actuelle de AdGuard VPN pour Windows, un bouton de mise à jour et des liens vers le site web AdGuard, la CLUF et la Politique de confidentialité.

### Compte

Ici vous trouverez des informations sur le statut de votre licence, ainsi qu'un lien vers votre compte personnel AdGuard, où vous pouvez gérer vos abonnements actuels et en acheter de nouveaux.

## Assistance

Cet onglet vise à répondre aux questions des utilisateurs : vous y trouverez un lien vers la page de la FAQ, vous pourrez signaler un bogue ou laisser un commentaire, et exporter les journaux si l'équipe d'assistance vous le demande.
