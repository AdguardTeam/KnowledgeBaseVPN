---
title: Comment configurer l'automatisation AdGuard VPN pour les applications iPhone et iPad
sidebar_position: 2
sidebar_label: Comment configurer l'automatisation AdGuard VPN
---

Il n'y a pas d'exclusions d'applications dans AdGuard VPN pour iOS. Pourtant, il existe un moyen d'automatiser AdGuard VPN pour les applications sur iPhone et iPad.

## Configuring automatic connection to VPN

Si vous avez besoin d'un VPN pour une ou plusieurs applications, configurez AdGuard VPN pour qu'il s'active et se désactive automatiquement lorsque vous les ouvrez et les fermez. Accédez à l'onglet Exclusions, sélectionnez le mode Général et suivez les instructions. Nous décrivons ici comment créer une automatisation pour Twitter, mais vous pouvez choisir toute autre application.

![Manuel. Partie 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Téléchargez [l'application *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) depuis l'App Store et allez dans la section *Automation* en appuyant sur l'icône de l'horloge en bas de l'écran.
1. Appuyez sur le bouton *Créer une automatisation personnelle* , puis trouvez *App* dans la liste qui s'ouvre et appuyez dessus.
1. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Start entering the name of the app (in our case it’s Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![Manuel. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
1. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, then tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

![Manuel. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
1. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. In the new window tap *Set VPN connection*.
1. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
1. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app.
