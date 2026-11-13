---
title: Automatisation
sidebar_position: 2
sidebar_label: Automatisation
---

_L'automatisation_ est une fonctionnalité de l'application Raccourcis qui exécute automatiquement une action pour vous en fonction des conditions que vous choisissez. Par exemple, elle peut désactiver AdGuard VPN dès que vous ouvrez une application et le réactiver lorsque vous fermez cette application.

C’est utile si vous souhaitez désactiver le VPN AdGuard pour certaines applications mais pas pour d’autres. AdGuard VPN pour iOS ne dispose pas d’exclusions d’applications, donc l’automatisation est la façon la plus proche d’obtenir le même résultat sans avoir à activer ou désactiver le VPN vous-même à chaque fois.

Voici comment configurer une automatisation qui se déconnecte du VPN AdGuard lorsque vous ouvrez une application, puis la réactive à la fermeture.

## Désactiver AdGuard VPN lorsque vous ouvrez une application

1. Dans l’application Raccourcis, allez dans _Automatisation_ et appuyez sur _Nouvelle automatisation_ ou sur le bouton plus (+) en haut à droite.
2. Choisissez _App_, sélectionnez une ou plusieurs applications et cochez _Est ouverte_.
3. Activez _Exécuter immédiatement_ et désactivez _Avertir lors de l’exécution_.
4. Appuyez sur _Suivant_, sélectionnez AdGuard VPN et choisissez _Déconnecter_.

![App automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

Pour réactiver le VPN AdGuard lorsque vous fermez la même application, répétez les étapes ci-dessus, mais sélectionnez _Est fermé_ à l’étape 2 et réglez l’action de l’étape 4 sur _Connecter_.

## Désactiver AdGuard VPN lorsque vous vous connectez au Wi-Fi domestique

Si vous n’avez pas besoin d’utiliser un VPN à la maison, réglez-le pour qu’il s’éteigne lorsque vous connectez votre réseau Wi-Fi domestique et le réactive quand vous partez.

1. Dans l’application Raccourcis, allez dans _Automatisation_ et appuyez sur _Nouvelle automatisation_ ou '+' en haut à droite.
2. Choisissez _Wi-Fi_, sélectionnez _Est connecté_, puis choisissez votre réseau domestique.
3. Activez _Exécuter immédiatement_ et _Exécuter après une interruption de connexion_.
4. Appuyez sur _Suivant_, sélectionnez AdGuard VPN et choisissez _Déconnecter_.

![Wi-Fi automation \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Réactiver AdGuard VPN lorsque vous partez

Répétez les étapes ci-dessus, mais choisissez _Est Déconnecté_ au lieu de _Est joint_, activez _Exécuter immédiatement_, et réglez l’action sur _Connecter_.
