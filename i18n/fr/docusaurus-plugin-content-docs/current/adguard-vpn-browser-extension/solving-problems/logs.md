---
title: Comment collecter et envoyer les journaux (logs)
sidebar_position: 1
---

Il existe plusieurs façons de collecter les journaux (logs) de l'extension de navigateur AdGuard VPN, mais quelle que soit celle que vous choisissez, les mêmes données seront collectées. Dans l'extension, les journaux ne sont pas séparés entre journaux standards et journaux de déboggage. Ainsi, plusieurs options vous permettent de collecter les journaux pour les cas où un problème vous empêcherait d'utiliser l'une ou l'autre des instructions.

## Collecter et envoyer des journaux via la section *Signaler un bug*

1. Ouvrez l'extension AdGuard VPN, si possible, et répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.
1. Ouvrez *Paramètres* en cliquant sur l'icône du menu hamburger (☰)→ *Support* → *Signaler un bug*.
1. Dans le formulaire ouvert, laissez une adresse e-mail insérée automatiquement ou saisissez-en une autre et décrivez l'erreur trouvée, y compris l'heure à laquelle cette erreur s'est produite. Si vous ne pouvez pas reproduire le problème, indiquez aussi précisément que possible quand il s'est produit pour la dernière fois.
1. Vérifiez que la case *Inclure le rapport de diagnostic dans les messages* soit cochée et cliquez sur *Soumettre*. De cette façon, vous enverrez les journaux avec le rapport de bug.

## Collecter et envoyer des logs via le bouton *Exporter les logs*

1. Ouvrez l'extension du navigateur AdGuard VPN et, si possible, répétez les actions qui ont provoqué cette erreur. Notez l'heure exacte à laquelle l'erreur est survenue.
1. Faites un clic droit sur l'icône de l'extension du navigateur AdGuard VPN.
1. Dans le menu ouvert, cliquez sur *Exporter les journaux*.
1. De cette manière, les fichiers de journaux seront enregistrés au format `txt` sur votre appareil.

Une fois que vous avez collecté les journaux, envoyez-les à notre équipe de développement. Pour cela :

1. Signaler un bug sur GitHub. Vous trouverez les instructions détaillées sur la saisie d'un problème dans cet article.
1. Envoyez un fichier compressé de vos journaux ainsi que la date où s'est produit l'incident à `devteam@adguard.com` et joignez le lien du problème rapporté sur GitHub. Vous pouvez aussi ajouter un fichier compressé ainsi que la date à laquelle cela s'est produit dans Google Drive et l'adresser à `devteam@adguard.com` en joignant le lien de votre rapport d'erreur sur GitHub.

## Récupération et envoi des journaux depuis l'outil de développement du navigateur

### Chrome

1. Ouvrez l'extension du navigateur AdGuard VPN et répétez les actions qui ont conduit à l'erreur si vous le pouvez. Notez l'heure exacte à laquelle l'erreur est survenue.
1. Accédez à `chrome://extensions`
1. Activez *le mode développeur*

    ![Le mode développeur *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Cliquez sur `background.html`

    ![Arrière-plan *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Ouvrez l'*onglet Console*

    ![L'onglet Console *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Ouvrez le menu contextuel et cliquez sur *Enregistrer sous…*

    ![Enregistrer sous *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Une fois que vous avez collecté les journaux, envoyez-les à notre équipe de développement. Pour cela :

1. Signaler un bug sur GitHub. Vous trouverez les instructions détaillées sur la création d'un rapport d'erreur dans GitHub dans cet article.
1. Envoyez un fichier compressé de vos journaux ainsi que la date où s'est produit l'incident à `devteam@adguard.com` et joignez le lien du problème rapporté sur GitHub. Vous pouvez aussi ajouter un fichier compressé ainsi que la date à laquelle cela s'est produit dans Google Drive et l'adresser à `devteam@adguard.com` en joignant le lien de votre rapport d'erreur sur GitHub.

### Firefox

1. Ouvrez l'extension du navigateur AdGuard VPN et répétez les actions qui ont conduit à l'erreur si vous le pouvez. Notez l'heure exacte à laquelle l'erreur est survenue.
1. Sélectionnez `à propos de : modules complémentaires`
1. Cliquez sur *Déboguer les modules complémentaires*

    ![Modules complémentaires de débogage *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Cliquez sur *Inspecter*

    ![Inspecter *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Allez sur l'onglet *Console*

    ![Console *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Cliquez sur *Enregistrer tous les messages dans un fichier*

    ![Enregistrer *bordure](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Une fois que vous avez collecté les journaux, envoyez-les à notre équipe de développement. Pour cela :

1. Signaler un bug sur GitHub. Vous trouverez les instructions détaillées sur la création d'un rapport d'erreur dans GitHub dans cet article.
1. Envoyez un fichier compressé de vos journaux ainsi que la date où s'est produit l'incident à `devteam@adguard.com` et joignez le lien du problème rapporté sur GitHub. Vous pouvez aussi ajouter un fichier compressé ainsi que la date à laquelle cela s'est produit dans Google Drive et l'adresser à `devteam@adguard.com` en joignant le lien de votre rapport d'erreur sur GitHub.
