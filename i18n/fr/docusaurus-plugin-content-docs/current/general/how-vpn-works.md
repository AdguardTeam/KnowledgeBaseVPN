---
title: Comment le VPN fonctionne-t-il
sidebar_position: 1
---

Pour comprendre le fonctionnement d'AdGuard VPN, vous devez d'abord comprendre les principes généraux du service VPN.

## Fonctionnalités VPN

Un VPN est un réseau privé virtuel qui permet de cacher votre emplacement et de protéger vos données sur le web. Un VPN connecte un ordinateur ou un appareil mobile à un serveur VPN et utilise l'adresse IP de ce serveur pour donner l'impression à un observateur extérieur que vous vous trouvez dans un autre endroit. Cela vous permet d'accéder en toute sécurité à des ressources Internet et de protéger vos données personnelles.

De cette façon, un VPN remplit deux fonctions importantes :

1. **Maintien de l’anonymat**

En utilisant une connexion Internet, l'utilisateur laisse son empreinte numérique, qui peut ensuite être analysée et utilisée par des tiers. Par exemple, une boutique en ligne que vous avez visitée peut enregistrer votre historique de recherche et vous proposer ses produits en fonction de celui-ci par le biais de la publicité ciblée. Ou bien les services secrets, ayant appris votre localisation grâce à l'adresse IP de votre appareil et ayant déterminé votre identité, peuvent surveiller secrètement votre activité sur le web. En outre, les navigateurs web et les fournisseurs d'accès à Internet eux-mêmes peuvent utiliser votre historique de navigation à leurs propres fins, ainsi que le vendre aux annonceurs et le fournir aux institutions gouvernementales. VPN vous permet de masquer votre adresse IP et de la remplacer par l'adresse IP du serveur VPN auquel vous êtes connecté. Vous pourrez ainsi préserver votre confidentialité et rechercher anonymement des informations sur le web.

2. **Protection des données**

Si vous vous connectez à un réseau non fiable ou public, des cybercriminels peuvent accéder les données sur votre dispositif. Les détails sur vos cartes bancaires, les noms d'utilisateur et mots de passe, les infos de votre passeport — toutes ces données peuvent être interceptées par des pirates en ligne. Le tunnel VPN chiffre l'information que vous envoyez et recevez sur le web, pour qu'elle ne tombe pas entre de mauvaises mains.

## Structure du VPN

Lorsque vous vous connectez à un réseau, votre ordinateur ou appareil mobile se voit attribuer un numéro d'identification unique ou une adresse IP. Il se compose généralement de nombres de 0 à 255, séparés par des points ou des deux-points. En connaissant cette séquence, on peut déterminer la géolocalisation de l'appareil. L'adresse IP est généralement définie par votre FAI et sera visible jusqu'à la ressource souhaitée. Pour cette raison, le serveur web du site que vous visitez peut enregistrer votre adresse IP et enregistrer ce que vous avez demandé. Cet enregistrement peut ensuite être utilisé principalement pour la collecte de données et l'analyse du trafic.

Un VPN crée un tunnel entre votre appareil et le serveur VPN. Vos données passent par ce tunnel, sont cryptées puis entrent sur Internet sous une forme sécurisée. Par conséquent, le serveur web aura l'impression que votre appareil n'a plus votre véritable adresse IP, mais l'adresse IP de l'extrémité du tunnel, c'est-à-dire le serveur VPN. Ainsi, le site auquel vous accédez après avoir traversé le tunnel VPN considérera la géolocalisation du serveur VPN que vous avez sélectionné comme votre emplacement réel. Et les données chiffrées ne tomberont pas entre les mains des publicitaires, des pirates informatiques et des services de sécurité.

![Structure du VPN](https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Types de protocoles VPN

Les protocoles de sécurité VPN sont des outils qui cryptent les données dans un tunnel VPN et vous permettent de préserver la confidentialité des utilisateurs dans un Internet ouvert. À l'heure actuelle, la grande majorité des services VPN modernes utilisent l'un des trois protocoles VPN suivants :

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). L'un de ses principaux avantages est qu'il est disponible sur la plupart des appareils et systèmes d'exploitation et qu'il offre un haut niveau de sécurité. Toutefois, l'utilisation de la [double encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(networking)) dans ce protocole peut entraîner une baisse de la vitesse de connexion.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Ce protocole moderne est source ouverte, de sorte que les fabricants tiers peuvent améliorer et mettre la technologie à jour.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Ses principaux avantages sont sa facilité d'utilisation, son efficacité élevée et sa faible vulnérabilité aux attaques.

En plus de ces protocoles VPN, il en existe d'autres (par exemple, TLS, SSTP, IKEv2), mais ils sont impopulaires ou ne répondent pas aux normes modernes de chiffrement des données.

![Comment un protocole VPN fonctionne-t-il](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN possède également son propre [protocole**](adguard-vpn-protocol.mdx). Un de ses avantages est que le trafic transmis à l'aide du protocole AdGuard VPN est difficile à distinguer du trafic normal. Le tunnel VPN ressemble au trafic HTTPS normal, il est donc extrêmement difficile de le détecter et de le bloquer. De plus, il est basé sur les mécanismes du protocole HTTP/2 moderne, qui assure une vitesse de connexion élevée.

![Comment fonctionne un VPN caché](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Les inconvénients du VPN

Malgré les avantages évidents, le VPN n'est pas parfait et présente quelques inconvénients :

**Vitesse inférieure**

Comme votre trafic ne va pas directement au serveur web, mais passe d'abord par le serveur VPN, la vitesse de la connexion VPN diminue. D'autres facteurs affectent également la vitesse lors de l'utilisation d'un VPN : la charge du serveur VPN, sa bande passante, la compatibilité du protocole VPN avec votre système d'exploitation. Tous ces facteurs, ainsi que la vitesse du réseau lui-même, peuvent réduire la qualité de votre connexion VPN.

**Blocage d'accès**

Certains services en ligne font beaucoup d'efforts pour détecter le trafic VPN et bloquer l'accès aux utilisateurs VPN. Cependant, pas beaucoup de VPNs peuvent faire passer leur trafic pour du trafic régulier. Par conséquent, de nombreuses tentatives pour accéder à un site web particulier sans désactiver le VPN n'aboutissent à rien.

**Connexions VPN interrompues**

Un signal faible, une surcharge du réseau, une incompatibilité VPN avec un pare-feu, un antivirus et d'autres programmes, un protocole VPN obsolète - tout cela peut provoquer une panne soudaine de la connexion VPN, en particulier par des fournisseurs VPN peu fiables.

## AdGuard VPN

Notre service VPN présente plusieurs [avantages importants](why-adguard-vpn.md) :

* [*Un protocole VPN propriétaire*](adguard-vpn-protocol.mdx), qui fonctionne de manière stable même avec une connexion Internet lente et se déguise en trafic normal, ce qui le rend plus difficile à suivre et à bloquer

* [*Politique "Sans journalisation"*](https://adguard-vpn.com/en/privacy.html), signifiant que AdGuard VPN ne collecte pas vos données personnelles et ne les transfère pas à des tiers

* *Plus de 50 serveurs VPN dans des dizaines de pays*

* *Facilité d'utilisation et nombreuses options de personnalisation*

Actuellement, AdGuard VPN est disponible en tant que :

* [Extension de navigateur](../adguard-vpn-browser-extension/overview.md) pour Chrome, Firefox et Edge

* Application mobile pour [Android](../adguard-vpn-for-android/overview.md) et [iOS](../adguard-vpn-for-ios/overview.md)

* Application de bureau pour [Windows](../adguard-vpn-for-windows/overview.md) et [Mac](../adguard-vpn-for-mac/overview.md)

Vous pouvez en savoir plus sur les fonctionnalités d'AdGuard VPN (y compris la version illimitée) [ici](https://adguard-vpn.com/en/welcome.html).
