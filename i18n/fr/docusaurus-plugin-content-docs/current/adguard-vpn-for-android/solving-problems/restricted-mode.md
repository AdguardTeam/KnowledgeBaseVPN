---
title: 'Problèmes avec le profil en Mode restreint'
sidebar_position: 4
---

Les propriétaires de téléphones et de tablettes sous le système d'exploitation Android 7+ peuvent être confrontés au problème causé par l'utilisation d'**un profil en mode restreint**. Si vous avez un tel profil, **AdGuard VPN**, comme les autres applications qui utilisent le VPN, obtient des restrictions sur la gestion sélective du trafic VPN. En outre, l'une des raisons de ce problème peut être l'utilisation du profil **Dual App/Dual Messenger** sur votre appareil. Vous trouverez ci-dessous les recommandations que vous pouvez appliquer lorsque ce problème se produit.

## Solutions

Vous avez deux façons de résoudre le problème :

### Option 1 : Accorder des permissions à AdGuard VPN en utilisant ADB

1. Activez le **mode développeur** et activez **le débogage USB** :
- Ouvrez l'application **Paramètres** sur votre téléphone ;
- Accédez à la section **Système** (dernier élément du menu des paramètres). Dans cette section, trouvez le sous-élément **À propos du téléphone** ;
- Cliquez 7 fois sur la ligne **Numéro de version**. Ensuite, vous recevrez une notification indiquant **Vous êtes maintenant un développeur** (Si nécessaire, saisissez un code de déverrouillage pour l'appareil) ;
- Ouvrez **Paramètres système** → **Options du développeur** → Faites défiler vers le bas et activez **Débogage USB** → Confirmez que le débogage est activé dans la fenêtre **Autoriser le débogage USB** après avoir lu attentivement l'avertissement.

> Si vous avez des difficultés ou des questions supplémentaires, vous trouverez des instructions complètes [ici](https://developer.android.com/studio/debug/dev-options).

2. [Installer et configurer](https://www.xda-developers.com/install-adb-windows-macos-linux/) adb ;
> Sur la plate-forme Windows, les propriétaires de **Samsung** peuvent avoir besoin d'installer [cet utilitaire](https://developer.samsung.com/mobile/android-usb-driver.html).

3. Connectez votre appareil à l'aide d'un **câble USB** à l'ordinateur ou au portable sur lequel vous avez installé **ADB**;
4. Ouvrez **la ligne de commande** sur votre PC :
- **Cmd.exe** si vous utilisez **Windows** ;
- **Terminal** si vous utilisez **macOS** ;
5. Saisissez la commande `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` et appuyez sur **Enter**.

### Option 2 : Supprimer le *Compte utilisateur restreint*

Vous pouvez [trouver ici](https://support.google.com/a/answer/6223444?hl=en) comment gérer les comptes d'utilisateurs à partir d'un appareil Android.

> Veuillez noter que, dans certains cas, les comptes d'utilisateurs restreints sont créés implicitement et ne peuvent pas être supprimés. Par exemple, lorsque vous utilisez les fonctionnalités Dual Messenger ou Dual App sur **appareils Samsung** ou **LG**. Lisez ci-dessous comment résoudre le problème dans ces cas.

### Appareils LG et Samsung

Les propriétaires de téléphones **LG** ou **Samsung** peuvent également rencontrer un problème similaire. Cela peut être dû à l'utilisation de la fonction **Dual App/Dual Messenger** (qui crée automatiquement un profil restreint). Pour résoudre ce problème, vous devez désactiver cette fonctionnalité.

#### Samsung

- Ouvrez les **Paramètres** ;
- Appuyez sur **Paramètres avancés** ;
- Faites défiler vers le bas, puis appuyez sur **Dual Messenger** ;
- Désactivez le **Dual Messenger** pour toutes les applications ;
- Verrouillez l'appareil pendant 5 minutes ;
- Déverrouillez l'écran et réessayez de créer le profil VPN.

#### LG

- Ouvrez les **Paramètres** ;
- Choisissez l'onglet **Général** ;
- Faites défiler vers le bas, puis appuyez sur **Dual App** ;
- Supprimez toutes les applications de la liste ;
- Redémarrez votre appareil.