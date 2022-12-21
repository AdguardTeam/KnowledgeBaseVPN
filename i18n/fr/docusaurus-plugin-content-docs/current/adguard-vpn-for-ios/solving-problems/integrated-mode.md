---
title: Compatibilité avec le Bloqueur AdGuard
sidebar_position: 3
---

AdGuard VPN a deux modes de fonctionnement - le mode Général et le mode Intégré. Le mode général est activé par défaut et utilise [le protocole VPN AdGuard](/general/adguard-vpn-protocol.mdx). Il offre la meilleure combinaison de vitesse de connexion et de sécurité.

Cependant, ce mode de fonctionnement ne permet pas à AdGuard VPN et au Bloqueur AdGuard de fonctionner simultanément.

En Mode intégré, c'est le protocole IPsec qui est utilisé, ce qui permet aux applications AdGuard de travailler ensemble. Si vous avez déjà le Bloqueur AdGuard lors de l'installation d'AdGuard VPN, ce mode s'activera automatiquement et vous permettra d'utiliser nos applications en même temps. Si vous avez d'abord installé AdGuard VPN et ensuite seulement décidé d'essayer le Bloqueur AdGuard, suivez ces étapes pour utiliser deux applications ensemble :

1. Ouvrez AdGuard VPN pour iOS et sélectionnez "Paramètres" dans le coin inférieur droit de l'écran.

2. Allez dans "Paramètres de l'application" et sélectionnez "Mode de fonctionnement".

3. Passez du mode *Général* au mode *Intégré*. C'est fait !

> Veuillez noter qu'en mode **Intégré** , vous ne pouvez pas utiliser la fonction Exclusions ou la fonction Serveur DNS.