---
title: Installation et désinstallation
sidebar_position: 2
---

## Configuration requise

**Version du système d'exploitation** : macOS 10.12 (64 bits) ou supérieur

**RAM** : au moins 2 Go

**Espace disque libre** : 120 Mo


## Comment installer AdGuard VPN pour Mac

1. Pour installer AdGuard VPN pour Mac, suivez simplement [ce lien](https://agrd.io/mac_vpn) ou ouvrez un navigateur, tapez *adguard-vpn.com* dans la barre d'adresse et sur la page ouverte cliquez sur *Télécharger*.

![Téléchargez AdGuard VPN depuis le site officiel](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. Attendez que le téléchargement du fichier *AdGuardVPN.dmg* soit terminé et ouvrez-le dans le dossier "Téléchargements".

3. Attendez que la fenêtre du programme d'installation s'ouvre. Double-cliquez sur l'icône qui s'y trouve.

![Fenêtre d'installation du programme](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. Lorsque vous démarrez AdGuard VPN pour la première fois, le système d'exploitation affichera sur l'écran un avertissement indiquant que cette application a été téléchargée depuis Internet. Cliquez sur *Ouvrir*.

5. Cliquez ensuite sur *Continuer* et *Installer*.

![Cliquez sur Continuer](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![cliquez sur Installer](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Attendez que le programme d'installation télécharge les fichiers nécessaires.

AdGuard VPN pour Mac est installé !


## Comment désinstaller AdGuard VPN pour Mac ?

### Désinstallation standard

Pour désinstaller AdGuard VPN pour Mac, suivez deux étapes simples :

1. Ouvrez "Finder" et allez dans la section "Programmes".

2. Sélectionnez *AdGuard VPN* dans la liste, faites un clic droit dessus puis cliquez sur *Déplacer vers la corbeille*.

![Désinstallation standard](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Désinstallation avancée

Parfois, à la suite d'une suppression incorrecte, ou dans d'autres cas rares, la désinstallation standard peut ne pas suffire. Ensuite, le service d'assistance peut vous demander d'effectuer une désinstallation avancée afin de supprimer complètement AdGuard VPN de votre Mac. Pour faire ça, procédez comme suit :

1. Suivez les étapes décrites dans la section ["Désinstallation standard"](#how-to-uninstall-adguard-vpn-for-mac).

2. Ouvrez "Finder" ou "Spotlight" et saisissez `Keychain` dans la recherche.

![Désinstallation avancée. Saisissez Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Cliquez sur l'icône du programme trouvé et entrez `com.adguard.mac.vpn` dans la recherche. S'il existe un tel enregistrement dans les résultats de la recherche, supprimez-le.

4. Retournez dans "Finder" ou "Spotlight" et saisissez `Terminal`.

![Désinstallation avancée. Entrez dans le Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Ouvrez le programme et saisissez la commande — `defaults delete com.adguard.mac.vpn`.

6. Appuyez sur la *barre d'espace* et saisissez une autre commande — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN a été complètement supprimé de votre Mac.

Vous pouvez en savoir plus sur AdGuard VPN pour Mac dans [cet article](/adguard-vpn-for-mac/overview.md).
