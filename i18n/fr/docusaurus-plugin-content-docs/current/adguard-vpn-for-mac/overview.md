---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

AdGuard VPN pour Mac est un service VPN de bureau. AdGuard VPN est entièrement compatible avec le Bloqueur AdGuard, on peut les utiliser en même temps et ils fonctionneront harmonieusement. Voyons les fonctionnalités qu'il propose.

Notez que **vous ne pouvez pas utiliser AdGuard VPN pour Mac si vous n'êtes pas connecté à votre compte AdGuard**. Vous pouvez soit vous connecter avec votre compte AdGuard, soit avec un compte externe, par exemple via Apple, Google ou Facebook. Assurez-vous que votre compte externe est lié à la même adresse e-mail que votre compte AdGuard. S'il existe un abonnement approprié dans votre compte AdGuard, il sera automatiquement activé sur l'application de bureau. Vous n'avez pas encore de compte AdGuard ? Créez-le [ici](https://auth.adguardaccount.com/registration.html).

:::note Compatibilité

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Big Sur (version 11).

:::

## Écran d'accueil

![Écran d'accueil](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

Le premier onglet est l'écran *Accueil*. Ici, vous pouvez voir l'état actuel d'AdGuard VPN, l'emplacement sélectionné (s'il est activé) et son ping. Le ping est le temps de réponse d'un serveur VPN. Plus le nombre est bas, plus la connexion est rapide. Si le VPN est désactivé, le dernier emplacement auquel vous vous êtes connecté est affiché en bas.

Les emplacements les plus rapides avec les pings les plus faibles sont affichés dans le coin supérieur droit de l'écran. Il y a également un bouton d'actualisation que vous pouvez cliquer si des emplacements sont hors ligne. Vous trouverez ci-dessous la liste complète des sites. Le champ de recherche facilite la recherche de l'emplacement dont vous avez besoin.

:::note

Les utilisateurs gratuits ne peuvent se connecter qu'à certains endroits, tandis que d'autres sont bloqués. En outre, il existe une limite de trafic mensuel de 3 Go dans la version gratuite.

:::

### Emplacements enregistrés

Sur le même onglet, vous pouvez aussi enregistrer vos emplacements favoris pour y accéder rapidement.

Il suffit de survoler un emplacement, de cliquer sur l’icône de signet qui apparaît, et il sera enregistré. Vos emplacements marqués s’afficheront alors dans l’onglet *Enregistrés*.

![Emplacements enregistrés](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## Exclusions

![Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN possède plusieurs fonctionnalités qui le rendent unique, et l'une d'entre elles est certainement la fonctionnalité des *Exclusions*. Par défaut, AdGuard VPN fonctionnera sur tous les sites Web et dans toutes les applications sauf celles de la liste des exclusions. Mais vous pouvez passer à l'autre mode, ainsi AdGuard VPN fonctionnera uniquement sur les sites Web et dans les applications de la liste des exclusions.

![Écran des Exclusions](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

En outre, vous pouvez non seulement ajouter des sites web aux Exclusions, mais aussi choisir parmi les listes de services populaires. Les listes sont divisées en huit catégories : Réseaux sociaux, messageries, services de streaming vidéo et musical, jeux, achats, moteurs de recherche et outils de télétravail. Tous ces services peuvent être ajoutés aux exclusions en un clic ! C'est particulièrement pratique si vous utilisez le Mode sélectif.

La liste des Exclusions est facile à configurer. Si vous avez ajouté un domaine et certains de ses sous-domaines, ils seront regroupés dans le domaine racine. Lorsque vous ajoutez un domaine racine (`example.com`), son masque est également ajouté (`*.example.com`).

:::info Navigateurs ajoutés aux Exclusions

À partir de la version 2.4, tous les navigateurs sont automatiquement ajoutés à la liste des exclusions lorsque le VPN est actif uniquement pour certaines apps et sites Web. Ce changement est plus pratique pour les utilisateurs qui étaient souvent désorientés et ne savaient pas s'ils devaient considérer leurs navigateurs comme des applications ou non. Cela s'applique dans les conditions suivantes :

- L'utilisateur a installé AdGuard VPN pour la première fois
- L'utilisateur n'a pas modifié les paramètres d'exclusions avant la version 2.4

:::

Si vous avez ajouté un service, modifié ou supprimé quelque chose et souhaitez maintenant récupérer les paramètres initiaux, appuyez simplement sur *Réinitialiser par défaut* à côté du domaine — cette action restaurera tous les domaines manquants et cochera toutes les cases.

De plus, les listes d'exclusions prêtes à l'emploi peuvent être transférées sur d'autres appareils sur lesquels AdGuard VPN est installé. Pour exporter des exclusions, suivez les instructions en quatre étapes ci-dessous :

1. Ouvrez AdGuard VPN sur l'appareil à partir duquel vous souhaitez exporter vos listes d'exclusions. Trouvez la section appropriée et cliquez sur le bouton *Exporter*. L'archive `exclusions.zip` sera téléchargée.
2. Il y a deux fichiers `.txt` dans l'archive, un pour les listes Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.
3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil Mac vers votre iPhone, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre iPhone.
4. Ouvrez AdGuard VPN sur l'appareil/le navigateur où vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Trouvez la section appropriée, cliquez sur le bouton *Importer* et sélectionnez l'archive. C'est fait !

:::note

Les fichiers d'archives d'autres appareils peuvent être importés de la même manière dans votre AdGuard VPN pour Mac.

:::

## Statistiques

![Écran des Statistiques](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

L'écran Statistiques fournit des informations détaillées sur le trafic consommé par emplacement et application, ainsi que sur les emplacements et applications les plus utilisés. Affichez les données pour le jour, le mois ou la durée totale d'utilisation d'AdGuard VPN pour Mac.

Il est important de noter que toutes les données sont stockées localement sur votre appareil, donc personne d’autre que vous n’y a accès. La fonctionnalité Statistiques est disponible pour les utilisateurs ayant un abonnement à AdGuard VPN.

## Assistance

![Écran d'assistance](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

Le quatrième onglet est l'écran d'*Assistance*. Trouvez des réponses à toutes vos questions dans la section [FAQ](https://adguard-vpn.com/welcome.html#faq) ou dans les [sections de la Base de connaissances](/) , signalez un bogue si vous en rencontrez un, ou [discutez d'AdGuard sur l'une des plates-formes](https://adguard.com/discuss.html). Et n'hésitez pas à [laisser des commentaires sur notre produit](https://surveys.adguard.com/vpn_mac/form.html), nous vous en serions reconnaissants.

## Paramètres

![Paramètres](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Enfin, nous arrivons à l'onglet Paramètres. Dans la section *À propos du programme* , vous pouvez voir la version actuelle d'AdGuard VPN, vérifier les mises à jour, visiter notre site web officiel et vous familiariser avec le CLUF et la politique de confidentialité d'AdGuard. Dans la section *À propos de la licence* , vous pouvez passer de gratuit à illimité, gérer votre abonnement ou vous déconnecter. Et surtout, à partir de là, vous pouvez accéder aux *Paramètres généraux*.

### Paramètres de l'app

![Paramètres de l'app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Les quatre premières fonctionnalités de base rendent l'application plus pratique et conviviale, à savoir *Kill Switch*, *Mise à jour automatique*, *Lancer AdGuard VPN après connexion* et *Auto-connexion après démarrage*. De plus, vous pouvez choisir entre des thèmes clairs, sombres et système — ce dernier correspond au thème de votre Mac.

Vous pouvez également autoriser AdGuard VPN à collecter et envoyer des rapports de crash anonymisés, des données techniques et d'interaction afin de nous aider à améliorer notre application. Enfin et surtout, vous pouvez exporter les journaux depuis votre Mac. Cela peut être utile si vous voulez joindre des journaux à votre message au support.

### Serveurs DNS

![Serveurs DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Un ou plusieurs serveurs DNS peuvent être configurés ici. Ceci est utile si vous ne souhaitez pas dépendre du serveur DNS par défaut fourni par votre FAI. Sélectionnez-en un dans la liste des services DNS populaires ou ajoutez un serveur personnalisé manuellement. Nous vous recommandons d'ajouter AdGuard DNS, qui non seulement chiffre votre trafic DNS, mais identifie également les requêtes vers des sites Web malveillants et les redirige vers un « trou noir ».

### Paramètres avancés

![Paramètres avancés](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Niveau de journalisation

Il n'y a que deux niveaux de journalisation, mais nous vous recommandons fortement d'utiliser le premier, celui par défaut. La deuxième option (journalisation détaillée) doit être définie uniquement pour enregistrer un comportement étrange du programme après avoir consulté notre assistance technique. Si vous avez activé le niveau de journalisation détaillée, assurez-vous de revenir à celui par défaut après avoir enregistré les journaux.

#### Masquer l’icône de la barre de menus

Bien que cette option se trouve dans *Paramètres avancés*, elle peut être activée sans hésitation. Vous pouvez masquer l'icône AdGuard VPN dans la barre de menus, cela n'empêchera pas notre application de s'exécuter en arrière-plan.

##### Protocole AdGuard VPN

![Sélection du protocole VPN](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.7/protocol_en.png)

Par défaut, le Protocole AdGuard VPN utilise la sélection dynamique du protocole VPN (l'option *Sélection automatique*). Cela signifie qu'AdGuard VPN détermine automatiquement quel protocole — HTTP2/TLS ou HTTP3/QUIC — vous offrira les meilleures performances et bascule instantanément vers celui-ci. Cela améliore la vitesse et la stabilité du VPN, ce qui est particulièrement utile dans les régions où l’utilisation du VPN est restreinte ou peu fiable.

Si vous le souhaitez, vous pouvez faire en sorte qu'AdGuard VPN utilise uniquement le protocole HTTP2/TLS ou HTTP3/QUIC au lieu de la *Sélection automatique*. Chaque protocole a ses points forts, mais le meilleur choix peut varier en fonction de votre emplacement, des conditions du réseau et même du serveur auquel vous vous connectez.
