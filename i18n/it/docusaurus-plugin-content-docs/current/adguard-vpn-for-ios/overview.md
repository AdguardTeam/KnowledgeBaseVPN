---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per iOS?

Una VPN consente di creare una connessione sicura a un'altra rete su Internet. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Scopri di più](/general/how-vpn-works) sul funzionamento nel dettaglio di una VPN.

AdGuard VPN has several functions:

- nasconde la tua vera posizione e ti aiuta a rimanere anonimo
- modifica il tuo indirizzo IP per proteggere i tuoi dati dal tracciamento
- crittografa il tuo traffico per renderlo irraggiungibile ai truffatori
- ti consente di configurare dove utilizzare la VPN e dove no (funzione di esclusione)

Il prossimo vantaggio di AdGuard VPN per iOS è il nostro protocollo VPN. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Come utilizzare AdGuard VPN per iOS

Per utilizzare AdGuard VPN per iOS, devi prima accedere al tuo [account AdGuard](https://my.adguard.com/). Puoi accedere direttamente con le credenziali del tuo account AdGuard o tramite Google, ID Apple o Facebook (se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email).

Se non hai ancora un account AdGuard, dovrai prima crearlo.

Usare AdGuard VPN è abbastanza semplice. Nella schermata principale è possibile vedere il pulsante *Connetti/Disconnetti* e l'elenco dei server disponibili. I server hanno una propria posizione (un determinato paese e una città) e un indicatore di ping. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. In AdGuard VPN puoi scegliere tra oltre 50 località in dozzine di paesi.

![Schermata principale e posizioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Elenchi di esclusioni

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Un'altra caratteristica utile è l'Importazione/Esportazione degli elenchi di esclusione. Puoi farlo seguendo i prossimi quattro passaggi:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.

2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi Generale e Selettivo. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.

3. Durante il trasferimento tra dispositivi diversi, non dimenticare d'inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo iOS al tuo Mac, assicurati d'inviare prima il file `.zip` al tuo Mac.

4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio.

![Esclusioni di importazione/esportazione *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Impostazioni app

Per accedere alle impostazioni dell'app:

1. Toccare il pulsante Impostazioni (⚙) nell'angolo in basso a destra della schermata principale dell'app AdGuard VPN
2. Clicca su *Impostazioni app*

Qui puoi configurare AdGuard VPN per iOS in base alle tue esigenze utilizzando diverse opzioni: Modalità operativa, server DNS, protezione automatica Wi-Fi, Tema colore e Impostazioni avanzate.

![Impostazioni dell'App *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modalità operativa

AdGuard VPN per iOS può funzionare in due modalità: **Generale** e **Integrata**.

In modalità **Generale**, viene utilizzato il protocollo [AdGuard VPN](/general/adguard-vpn-protocol), che fornisce la migliore combinazione di velocità e sicurezza. In questa modalità, AdGuard VPN non potrà funzionare insieme ad [AdGuard Ad Blocker per iOS](https://adguard.com/kb/adguard-for-ios/overview/).

In modalità **Integrata**, AdGuard VPN sarà in grado di funzionare contemporaneamente con il Blocco AdGuard per iOS utilizzando invece il protocollo IPSec. Anche questo protocollo è sicuro, ma un po' più lento e più facile da rilevare. Non è necessario eseguire alcuna azione aggiuntiva per configurare l'integrazione: è sufficiente installare entrambe le app e passare a questa modalità.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### Server DNS

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Protezione automatica Wi-Fi

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Tema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Impostazioni avanzate

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Azioni rapide (disponibile in iOS 13 o versioni successive)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Supporto

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abbonamento

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
