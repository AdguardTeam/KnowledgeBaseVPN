---
title: Raccourcis
sidebar_position: 1
sidebar_label: Raccourcis
---

Raccourcis, un outil intégré à iOS, permet de gérer facilement vos connexions sans ouvrir AdGuard VPN. Vous pouvez placer un raccourci _Connecter_, _Déconnecter_ ou _Basculer le VPN_ sur votre écran d’accueil, dans le Centre de contrôle ou dans un widget, ou configurer une phrase Siri pour vous connecter avec votre voix.

Les raccourcis peuvent également inclure des automatisations plus complexes. Par exemple, votre application bancaire pourrait ne pas fonctionner avec un VPN activé, mais vous souhaitez qu'il soit toujours activé pour Instagram, ou vous souhaitez que votre VPN se désactive automatiquement sur le Wi-Fi domestique. Raccourcis vous permet d'automatiser ces scénarios.

## Avant de commencer

Assurez-vous que :

- Vous avez l’application Raccourcis installée sur votre iPhone ou iPad ;
- AdGuard VPN est installé ;
- Vous êtes connecté à AdGuard VPN et un profil VPN est installé.

## Connecter ou déconnecter en un seul geste

AdGuard VPN fournit trois raccourcis prêts à l'emploi : _Connecter_, _Déconnecter_, _Basculer le VPN_. _Connecter_ active le VPN et se connecte à votre dernier emplacement utilisé. _Déconnecter_ désactive le VPN. _Basculer le VPN_ alterne entre les deux : il se connecte lorsque le VPN est désactivé et se déconnecte lorsqu'il est activé.

Vous trouverez ces raccourcis dans l'application Raccourcis : sous iOS 16, regardez sous _Raccourcis d'app_. Ajoutez n'importe lequel d'entre eux aux trois emplacements listés ci-dessous.

Sur iOS 27, trouvez les raccourcis AdGuard VPN dans la _Bibliothèque_ de l'application Raccourcis sous _Applications_ → _AdGuard VPN_. Si Raccourcis s’ouvre sur _Tous les raccourcis_, touchez la flèche de retour dans le coin supérieur gauche pour revenir à _Bibliothèque_.

![Raccourcis sur iOS 27](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcuts_library_27.png)

### Écran d'accueil

Pour configurer un raccourci sur votre écran d'accueil, suivez les instructions rapides dans l'application AdGuard VPN. (_Paramètres_ → _Raccourcis_ → _Ajouter des raccourcis à l'écran d'accueil_).

![Instructions dans l'application \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

Les instructions varient selon les versions d'iOS. Voici les instructions pour iOS 16 :

1. Accédez à l'application Raccourcis et appuyez sur le bouton plus (+).
2. Appuyez sur _Ajouter une action_ et sélectionnez _AdGuard VPN_.
3. Choisissez le raccourci dont vous avez besoin : _Connecter au VPN_, _Déconnecter du VPN_, _Basculer la connexion VPN_ ou _État du VPN_.

![Ajouter un raccourci](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut_ios_16.png)

Voici comment ajouter le raccourci à votre écran d’accueil.

1. Appuyez longuement sur le raccourci et appuyez sur _Partager_ → _Ajouter à l'écran d'accueil_.
2. Personnalisez le nom et l'icône du raccourci si nécessaire, puis appuyez sur _Ajouter_. Le raccourci apparaîtra sur votre écran d'accueil sous la forme d'une icône 1x1.

![Ajouter à l'écran d'accueil](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen_ios_16.png)

### Centre de contrôle

Vous pouvez ajouter un raccourci AdGuard VPN au Centre de contrôle pour un accès rapide depuis n'importe où sur l'appareil.

1. Ouvrez le Centre de contrôle. Sur un iPhone avec Face ID, balayez vers le bas depuis le coin supérieur droit. Sur un iPhone doté d'un bouton principal, balayez vers le haut depuis le bas.
2. Appuyez longuement sur une zone vide et touchez _Ajouter un contrôle_.
3. Trouvez _Raccourcis_ dans la liste et appuyez sur _Exécuter le raccourci_, puis appuyez sur _Choisir_ et sélectionnez votre raccourci AdGuard VPN. Le raccourci apparaîtra désormais dans votre Centre de contrôle.

Remarque : les étapes exactes peuvent varier en fonction de votre version d'iOS.

![Ajouter un raccourci au Centre de contrôle](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Appuyez longuement sur une zone vide de votre écran d'accueil jusqu'à ce que les applications s'animent, puis touchez _Éditer_ dans le coin supérieur gauche → _Ajouter un widget_.
2. Trouvez _Raccourcis_ dans la liste et choisissez une taille de widget. Nous vous recommandons de choisir une option qui peut afficher au moins deux raccourcis.
3. Touchez _Ajouter le widget_.
4. En mode édition, appuyez sur le widget pour ouvrir le menu de configuration, définissez _Dossier_ sur _Personnalisé_ et assignez _Connecter au VPN_ à un emplacement et _Déconnecter du VPN_ à l'autre.

![Ajouter un raccourci en tant que widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## Ouvrir n'importe quelle app avec VPN activé en un seul clic

Si vous avez besoin d'activer le VPN pour une certaine application et rien d'autre, vous pouvez créer un raccourci personnalisé qui activera AdGuard VPN et ouvrira l'application que vous souhaitez ouvrir — le tout d'un simple toucher. Voici comment faire.

1. Ouvrez l'application Raccourcis, appuyez sur le bouton plus (+) et recherchez AdGuard VPN. Ajoutez l'action _État du VPN_.
2. Ajouter une action _Si_. Raccourcis remplit la condition pour vous : il récupère l'état du VPN de l'étape précédente et le compare à _Connecté_. À l'intérieur, ajoutez _Ouvrir l'application_ et définissez-la sur l'application de votre choix — par exemple, YouTube.
3. Sous _Sinon_, ajoutez trois actions dans l'ordre : _AdGuard VPN_ → _Connecter au VPN_, _Attendre_ (réglé sur 2 secondes) et _Ouvrir l'application_ (la même application que ci-dessus).
4. Touchez le nom en haut pour définir une icône et un nom personnalisés, puis testez le raccourci avec le bouton de lecture.
5. Ajoutez le raccourci à l'écran d'accueil en appuyant sur le nom et en sélectionnant _Sur l'écran d'accueil_.

![Ajouter un raccourci personnalisé](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Connecter ou déconnecter avec Siri

Dans l'application AdGuard VPN, accédez à _Paramètres_ → _Raccourcis_ → _Configurer les phrases Siri_. Vous aurez ensuite deux options : _Enregistrer une phrase pour vous connecter_ ou _Enregistrer une phrase pour vous déconnecter_.

![Connecter avec Siri](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Choisissez _Enregistrer une phrase pour se connecter_ ou _Enregistrer une phrase pour se déconnecter_, puis prononcez la phrase souhaitée, par exemple « Dis Siri, connecte-toi à AdGuard VPN ». Une fois enregistrée, dites la même phrase à Siri à tout moment pour l'exécuter.

## Automatiser AdGuard VPN pour des applications spécifiques

Certaines applications, comme les applications bancaires, ne fonctionnent pas avec un VPN activé. Configurez deux automatisations pour que le VPN se désactive pendant que vous utilisez l'application et se réactive une fois que vous avez terminé. Correctement configurée, l'automatisation peut s'avérer plus pratique que le lancement manuel d'un raccourci : il n'est plus nécessaire d'appuyer sur une icône de l'écran d'accueil pour ouvrir le raccourci, l'ouverture de l'application suffit. De plus, vous pouvez inclure plusieurs applications dans une seule automatisation. Vous pouvez utiliser des automatisations pour activer ou désactiver AdGuard VPN lorsque vous ouvrez une application, lorsque vous fermez une application et lorsque vous vous connectez ou vous déconnectez de votre Wi-Fi domestique.

[Comment configurer des automatisations sur votre iPhone ou iPad](/adguard-vpn-for-ios/features/automation/)
