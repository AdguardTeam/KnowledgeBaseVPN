---
title: Comment collecter et envoyer les journaux (logs)
sidebar_position: 1
---

Il existe plusieurs façons de collecter les journaux (logs) de l'extension de navigateur AdGuard VPN, mais quelle que soit celle que vous choisissez, les mêmes données seront collectées. In the extension, logs are not divided into standard and debug ones. And different options for collecting logs are provided for those cases when a problem you encounter prevents you from using one or another instruction.

## Collecter et envoyer des logs via la section *Signaler un bug*

1. Ouvrez l'extension AdGuard VPN, si possible, et répétez les actions qui ont conduit à l'erreur. Notez le moment exacte auquel cette erreur s'est produite.
1. Ouvrez *Paramètres* en cliquant sur l'icône du menu hamburger (☰)→ *Support* → *Signaler un bug*.
1. Dans le formulaire ouvert, laissez une adresse e-mail insérée automatiquement ou saisissez-en une autre et décrivez l'erreur trouvée, y compris l'heure à laquelle cette erreur s'est produite. Si vous ne pouvez pas reproduire le problème, indiquez aussi précisément que possible quand il s'est produit pour la dernière fois.
1. Make sure that there is a check mark next to *Include the diagnostic report in the message* and tap *Submit*. De cette façon, vous enverrez les journaux avec le rapport de bug.

## Collecter et envoyer des logs via le bouton *Exporter les logs*

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Right-click the AdGuard VPN Browser extension icon.
1. In the opened menu click *Export logs*.
1. As a result, the logs file will be saved to your device in `txt` format.

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and reproduce time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and reproduce time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

## Collecting and sending logs via browser developer's tools

### Chrome

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Go to `chrome://extensions`
1. Turn on *developer mode*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Cliquez sur `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Ouvrez l'*onglet Console*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Ouvrez le menu contextuel et cliquez sur *Enregistrer sous…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

### Firefox

1. Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
1. Go to `about:addons`
1. Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Go to the *Console* tab

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Now that you have collected the logs, you need to hand them over to our development team. To do this:

1. Report a bug on GitHub. Detailed instructions on creating an issue on GitHub can be found in this article.
1. Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.
