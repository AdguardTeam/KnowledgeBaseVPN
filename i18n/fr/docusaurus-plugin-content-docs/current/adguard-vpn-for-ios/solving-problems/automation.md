---
title: Comment configurer l'automatisation AdGuard VPN pour les applications iPhone et iPad
sidebar_position: 1
sidebar_label: Comment configurer l'automatisation AdGuard VPN
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

## Configuration de l'activation automatique de AdGuard VPN

Si vous avez besoin d'un VPN pour une ou plusieurs applications, configurez AdGuard VPN pour qu'il s'active et se désactive automatiquement lorsque vous les ouvrez et les fermez. Accédez à l'onglet Exclusions, sélectionnez le mode Général et suivez les instructions. Nous décrivons ici comment créer une automatisation pour Twitter, mais vous pouvez choisir toute autre application.

![Manuel. Partie 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Téléchargez [l'application *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) depuis l'App Store et allez dans la section *Automation* en appuyant sur l'icône de l'horloge en bas de l'écran.
2. Appuyez sur le bouton *Créer une automatisation personnelle* , puis trouvez *App* dans la liste qui s'ouvre et appuyez dessus.
3. Dans la fenêtre suivante, assurez-vous que l'option *Est ouverte* est sélectionnée, puis appuyez sur *Choisir* pour choisir l'application.

![Manuel. Partie 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the app (in our case it's Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![Manuel. Partie 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Commencez à saisir "AdGuard VPN" et sélectionnez l'application AdGuard VPN. Dans la nouvelle fenêtre, appuyez sur *Définir une connexion VPN*.

![Manuel. Partie 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Assurez-vous que les variables indiquent *Activer* Connexion VPN *Activé* et appuyez sur *Suivant*.
7. Dans la fenêtre suivante, déplacez le curseur à côté de l'option *Demander avant d'exécuter* sur la position inactive. Confirm your choice, then tap *Done*.

Vous avez maintenant un nouveau scénario : AdGuard VPN sera automatiquement activé lorsque vous démarrerez l'application Twitter. Vous devez maintenant créer une autre commande qui désactivera automatiquement AdGuard VPN lorsque vous fermerez l'application.

## Configuration de l'arrêt automatique de AdGuard VPN

![Manuel. Partie 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
2. Assurez-vous que l'option *Est fermée* est sélectionnée et décochez la case sous l'option adjacente. Appuyez ensuite sur *Choisissez*.

![Manuel. Partie 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Commencez à saisir *Twitter* et sélectionnez l'application. Appuyez ensuite sur *Terminé* dans le coin supérieur droit de l'écran. Appuyez sur *Ajouter une action* et sélectionnez AdGuard VPN.

![Manuel. Partie 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. Dans la nouvelle fenêtre, appuyez sur *Définir connexion VPN*.
5. Appuyez ensuite sur le mot *On* pour qu'il devienne le mot *Off*, puis appuyez sur *Suivant* dans le coin supérieur droit de l'écran.
6. Désactivez l'option *Demander avant d'exécuter* et confirmez votre sélection. Appuyez ensuite sur *Terminé* dans le coin supérieur droit de l'écran pour terminer le processus.

C'est fait ! AdGuard VPN sera désormais activé sur votre appareil chaque fois que vous ouvrez l'application Twitter et désactivé lorsque vous la fermez. Vous pouvez répéter les mêmes étapes pour n'importe quelle autre application.
