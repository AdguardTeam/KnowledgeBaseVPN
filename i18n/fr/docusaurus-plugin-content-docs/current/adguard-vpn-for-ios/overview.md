---
title: Aperçu des fonctionnalités
sidebar_position: 1
---

## Qu’est-ce que AdGuard VPN pour iOS ?

Un VPN vous permet de créer une connexion sécurisée à un autre réseau sur Internet. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN has several functions:

- dissimule votre localisation réelle et vous aide à rester anonyme
- changes your IP address to protect your data from tracking
- chiffre votre trafic pour le rendre inaccessible aux escrocs
- vous permet de configurer où utiliser le VPN et où ne pas le faire (fonction d'exclusions)

L'avantage suivant d'AdGuard VPN pour iOS est notre propre protocole VPN. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Comment utiliser AdGuard VPN pour iOS

Pour utiliser AdGuard VPN pour iOS, vous devez d'abord vous connecter à votre [compte AdGuard](https://my.adguard.com/). Vous pouvez vous connecter directement avec les informations d'identification de votre compte AdGuard, ou via Google, Apple ID ou Facebook (si votre compte AdGuard a été enregistré avec la même adresse e-mail).

Si vous n'avez pas encore de compte AdGuard, vous devrez d'abord le créer.

L'utilisation d'AdGuard VPN est assez simple. Sur l'écran principal, vous pouvez voir le bouton *Connecter/Déconnecter* et la liste des serveurs disponibles. Ces serveurs ont leur propre emplacement (un certain pays et une ville) et un indicateur de ping. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. Dans AdGuard VPN, vous pouvez choisir parmi plus de 50 emplacements dans des dizaines de pays.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listes d'exclusions

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Une autre fonctionnalité utile est l'importation/exportation des listes d'exclusions. Vous pouvez le faire en suivant les quatre étapes suivantes :

1. Ouvrez AdGuard VPN sur l'appareil/dans le navigateur à partir duquel vous souhaitez exporter vos listes d'exclusions. Find the appropriate section and click the *Export* button. L'archive `exclusions.zip` sera téléchargée.

2. Il y a deux fichiers `.txt` dans l'archive, un pour chacune des listes : Générale et Sélective. Ajoutez-y plus d'exclusions, supprimez celles qui existent, renommez les fichiers (mais nous en parlerons plus tard) ou laissez simplement l'archive avec les fichiers tels quels.

3. Lors du transfert entre différents appareils, n'oubliez pas d'envoyer le fichier `.zip` à l'appareil pour importation. Par exemple, si vous importez des listes d'exclusion de votre appareil iOS vers votre Mac, assurez-vous d'envoyer au préalable le fichier `.zip` vers votre Mac.

4. Ouvrez AdGuard VPN sur l'appareil sur lequel vous souhaitez importer l'archive avec les listes d'exclusions prêtes. Find the appropriate section, click the *Import* button and select the archive.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Paramètres de l'app

Pour accéder aux paramètres de l'application :

1. Appuyez sur le bouton Paramètres (⚙) dans le coin inférieur droit de l'écran principal de l'application AdGuard VPN
2. Appuyez sur *Paramètres de l'application*

Ici, vous pouvez configurer AdGuard VPN pour iOS selon vos besoins à l'aide de différentes options : mode de fonctionnement, serveur DNS, protection automatique Wi-Fi, thème de couleur et paramètres avancés.

![App Settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Mode de fonctionnement

AdGuard VPN pour iOS peut fonctionner en deux modes : **Général** et **Intégré**.

In **General** mode, the [AdGuard VPN protocol](/general/adguard-vpn-protocol) is employed, which provides the best combination of speed and security. In this mode, AdGuard VPN will not be able to work alongside [AdGuard Ad Blocker for iOS](https://adguard.com/kb/adguard-for-ios/overview/).

En mode **intégré** , AdGuard VPN pourra fonctionner en même temps avec le Bloqueur AdGuard pour iOS en utilisant à sa place le protocole IPSec. Ce protocole est également sécurisé, mais un peu plus lent et plus facile à détecter. Vous n'avez pas besoin d'effectuer d'actions supplémentaires pour configurer l'intégration : installez simplement les deux applications et passez à ce mode.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### Serveur DNS

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Protection automatique Wi-Fi

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Thème

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Paramètres avancés

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Actions rapides (disponibles dans iOS 13 ou version ultérieure)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Assistance

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
