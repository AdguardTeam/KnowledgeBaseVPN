---
title: Installazione e rimozione
sidebar_position: 2
---

## Requisiti di sistema

**Versione del sistema operativo**: macOS 10.15 (64-bit) o superiore

**RAM**: almeno 2 GB

**Spazio libero su disco**: 120 Mb

## Come istallare AdGuard VPN per Mac

1. Per installare AdGuard VPN per Mac, basta seguire [questo collegamento](https://agrd.io/mac_vpn) o aprire un browser, digitare *adguard-vpn.com* nella barra degli indirizzi e nella pagina aperta cliccare su *Scarica*. ![Scarica AdGuard VPN dal sito web ufficiale](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Attendi il termine del download del file *AdGuardVPN.dmg* e aprilo nella cartella "Download".
3. Attendi l'apertura della finestra del programma d'installazione. Fai doppio click sull'icona al suo interno. ![Finestra d'installazione del programma *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Quando avvii per la prima volta AdGuard VPN, il sistema operativo mostrerà un avviso sulla schermata che quest'applicazione è stata scaricata da Internet. Clicca su *Apri*.
5. Quindi, clicca su *Continua* e su *Installa*.

![Clicca su Continua](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Clicca su Installa](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Attendi che il programma d'installazione scarichi i file necessari.

AdGuard VPN per Mac è installato!

## Come disinstallare AdGuard VPN per Mac

### Disinstallazione standard

Per disinstallare AdGuard VPN per Mac, segui due semplici passaggi:

1. Apri "Finder" e vai alla sezione "Programmi".

2. Seleziona *AdGuard VPN* dall'elenco, cliccala con il destro, quindi clicca su *Sposta nel Cestino*.

![Disinstallazione standard](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Disinstallazione avanzata

Talvolta, a causa di una rimozione errata, o in altri rari casci, la disinstallazione standard potrebbe non essere sufficiente. Quindi, il servizio di supporto potrebbe chiederti di eseguire una disinstallazione avanzata per rimuovere completamente AdGuard VPN dal tuo Mac. Per farlo, fai quanto segue:

1. Segui i passaggi descritti nella sezione ["Disinstallazione standard"](#how-to-uninstall-adguard-vpn-for-mac).
2. Apri "Finder" o "Spotlight" e inserisci `Keychain` nella ricerca. ![Disinstallazione avanzata. Inserisci Keychain](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Clicca sull'icona del programma trovato e inserisci `com.adguard.mac.vpn` nella ricerca. Se nei risultati della ricerca è presente una simile voce, eliminala.
4. Torna a "Finder" o "Spotlight" e inserisci `Terminale`. ![Disinstallazione avanzata. Inserisci Terminale](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Apri il programma e inserisci il comando: `defaults delete com.adguard.mac.vpn`.
6. Premi la *barra spaziatrice* e inserisci un altro comando: `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN è stata completamente rimossa dal tuo Mac.

Puoi saperne di più su AdGuard VPN per Mac in [questo articolo](/adguard-vpn-for-mac/overview).
