---
title: Installazione e rimozione
sidebar_position: 2
---

## Requisiti di sistema

**Sistema operativo versione**: macOS 10.12 (64 bit) o superiore

**RAM**: almeno 2 GB

**Spazio libero su disco**: 120 Mb


## Come istallare AdGuard VPN per iOS?

1. Per installare AdGuard VPN per Mac, basta seguire [questo link](https://agrd.io/mac_vpn) o aprire un browser, digitare *adguard-vpn.com* nella barra degli indirizzi e nella pagina aperta fare clic su *Scaricare*.

![Scaricare AdGuard VPN dal sito ufficiale](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. Attendere che il download del file *AdGuardVPN.dmg* sia terminato e aprirlo nella cartella "Downloads".

3. Attendere che si apra la finestra del programma di installazione. Fare doppio clic sull'icona all'interno.

![Finestra di installazione del programma](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. Al primo avvio di AdGuard VPN, il sistema operativo mostrerà un avviso sullo schermo che questa applicazione è stata scaricata da Internet. Fare clic su *Apri*.

5. Quindi fare clic su *Continuare* e *Installare*.

![Fare clic su Continua](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![fare clic su Installa](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Attendere che il programma d'installazione scarichi i file necessari.

AdGuard VPN per Mac è installato!


## Come disinstallare AdGuard VPN per Mac?

### Disinstallazione standard

Per disinstallare AdGuard VPN per Mac, segui due semplici passaggi:

1. Apri "Finder" e vai alla sezione "Programmi".

2. Seleziona *AdGuard VPN* dall'elenco, fai clic destro su di esso e quindi fai clic su *Sposta nel cestino*.

![Disinstallazione standard](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Disinstallazione avanzata

A volte, a causa di una rimozione non corretta o in altri rari casi, la disinstallazione standard potrebbe non essere sufficiente. Quindi il servizio di supporto potrebbe chiederti di eseguire una disinstallazione avanzata per rimuovere completamente AdGuard VPN dal tuo Mac. A tal fine, procedere come segue:

1. Seguire i passaggi descritti nella sezione ["Disinstallazione standard"](#how-to-uninstall-adguard-vpn-for-mac).

2. Apri "Finder" o "Spotlight" e inserisci `Keychain` nella ricerca.

![Disinstallazione avanzata. Inserisci Keychain](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Fare clic sull'icona del programma trovato e inserire `com.adguard.mac.vpn` nella ricerca. Se nei risultati della ricerca è presente un record di questo tipo, eliminarlo.

4. Tornare al "Finder" o a "Spotlight" e digitare `Terminal`.

![Disinstallazione avanzata. Entrare nel Terminale](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Aprire il programma e inserire il comando - `defaults delete com.adguard.mac.vpn`.

6. Premere *Barra spaziatrice* e inserire un altro comando: `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN è stato completamente rimosso dal tuo Mac.

Puoi saperne di più su AdGuard VPN per Mac in [questo articolo](/adguard-vpn-for-mac/overview.md).