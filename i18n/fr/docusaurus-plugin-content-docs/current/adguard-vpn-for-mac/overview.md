---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

AdGuard VPN pour Mac est un service VPN de bureau. AdGuard VPN est entièrement compatible avec le Bloqueur AdGuard, on peut les utiliser en même temps et ils fonctionneront harmonieusement. Voyons les fonctionnalités qu'il propose.

Notez que **vous ne pouvez pas utiliser AdGuard VPN pour Mac si vous ne vous êtes pas connecté à votre compte AdGuard**. Vous pouvez soit vous connecter avec votre compte AdGuard, soit avec un compte externe, par exemple via Apple, Google ou Facebook. Assurez-vous que votre compte externe est lié à la même adresse e-mail que votre compte AdGuard. S'il existe un abonnement approprié dans votre compte AdGuard, il sera automatiquement activé sur l'application de bureau. Vous n'avez toujours pas de compte AdGuard ? Créez-le [ici](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## Écran d'accueil

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

Le premier onglet est l'écran *Accueil*. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Le ping est le temps de réponse d'un serveur VPN. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Vous trouverez ci-dessous la liste complète des sites. The search field makes it easy to find the location you need.

:::note

Les utilisateurs gratuits ne peuvent se connecter qu'à certains endroits, tandis que d'autres sont bloqués. En outre, il existe une limite de trafic mensuel de 3 Go dans la version gratuite.

:::

## Exclusions

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Écran des Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

En outre, vous pouvez non seulement ajouter des sites web aux exclusions, mais aussi choisir parmi les listes de services populaires. Les listes sont divisées en huit catégories : Réseaux sociaux, messageries, services de streaming vidéo et musical, jeux, achats, moteurs de recherche et outils de télétravail. Tous ces services peuvent être ajoutés aux exclusions en un clic ! C'est particulièrement pratique si vous utilisez le Mode sélectif.

La liste d'exclusion peut être facilement configurée. Si vous avez ajouté un domaine et certains de ses sous-domaines, ils seront regroupés dans le domaine racine. Lorsque vous ajoutez un domaine racine (`example.com`), son masque est également ajouté (`*.example.com`).

Si vous avez ajouté un service, modifié ou supprimé quelque chose et souhaitez maintenant récupérer les paramètres initiaux, appuyez simplement sur *Réinitialiser par défaut* à côté du domaine - cette action restaurera tous les domaines manquants et cochera toutes les cases.

De plus, les listes d'exclusions prêtes à l'emploi peuvent être transférées sur d'autres appareils sur lesquels AdGuard VPN est installé. Pour exporter des exclusions, suivez les instructions en quatre étapes ci-dessous :

1. Ouvrez AdGuard VPN sur l'appareil à partir duquel vous souhaitez exporter vos listes d'exclusions. Find the appropriate section and click the *Export* button. L'archive `exclusions.zip` sera téléchargée.
2. Il y a deux fichiers `.txt` dans l'archive, un pour les listes Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.
3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil Mac vers votre iPhone, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre iPhone.
4. Ouvrez AdGuard VPN sur l'appareil/le navigateur où vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Find the appropriate section, click the *Import* button and select the archive. C'est fait !

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Assistance

![Écran d'assistance](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## Paramètres

![Paramètres](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Enfin, nous arrivons à l'onglet Paramètres. Dans la section *À propos du programme* , vous pouvez voir la version actuelle d'AdGuard VPN, vérifier les mises à jour, visiter notre site web officiel et vous familiariser avec le CLUF et la politique de confidentialité d'AdGuard. Dans la section *À propos de la licence* , vous pouvez passer de gratuit à illimité, gérer votre abonnement ou vous déconnecter. Et surtout, à partir de là, vous pouvez accéder aux *Paramètres généraux*.

### Paramètres de l'app

![Paramètres de l'app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. De plus, vous pouvez choisir entre des thèmes clairs, sombres et système - ce dernier correspond au thème de votre Mac.

You can also allow AdGuard VPN to gather and send anonymous crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Cela peut être utile si vous voulez joindre des journaux à votre message au support.

### Serveurs DNS

![Serveurs DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Paramètres avancés

![Paramètres avancés](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Niveau de journalisation

Il n'y a que deux niveaux de journalisation, mais nous vous recommandons fortement d'utiliser le premier, celui par défaut. La deuxième option (journalisation détaillée) doit être définie uniquement pour enregistrer un comportement étrange du programme après avoir consulté notre assistance technique. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Masquer l’icône de la barre de menus

Bien que cette option se trouve dans *Paramètres avancés*, elle peut être activée sans hésitation. Vous pouvez masquer l'icône AdGuard VPN dans la barre de menus, cela n'empêchera pas notre application de s'exécuter en arrière-plan.

#### Use QUIC

Le protocole de communication QUIC est la version de pointe de HTTP. Basculez le commutateur pour obtenir une meilleure qualité de connexion dans des conditions moins qu'idéales, tout en utilisant des données mobiles dans le métro ou l'ascenseur, par exemple.
