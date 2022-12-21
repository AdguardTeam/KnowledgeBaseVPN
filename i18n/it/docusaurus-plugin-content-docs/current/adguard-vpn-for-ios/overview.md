---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per iOS

Una VPN consente di creare una connessione sicura a un'altra rete su Internet. Collega il computer o il dispositivo mobile di un utente a un server e consente di navigare in rete utilizzando l'indirizzo IP di un'altra persona. Quindi, se il server VPN si trova in un paese diverso, sembrerà che ti sei connesso a Internet da quel paese. [Ulteriori informazioni](/general/how-vpn-works.md) su come funziona una VPN in dettaglio.

Parlando di AdGuard VPN, ha diverse funzioni:
* nasconde la tua vera posizione e ti aiuta a rimanere anonimo
* cambia il tuo indirizzo IP per proteggere i tuoi dati dal tracciamento
* crittografa il tuo traffico per renderlo irraggiungibile ai truffatori
* ti consente di configurare dove utilizzare la VPN e dove no (funzione di esclusione)

Il prossimo vantaggio di AdGuard VPN per iOS è il nostro protocollo VPN. Ha due vantaggi principali: rispetto ad altri protocolli VPN è estremamente difficile da rilevare e funziona in modo stabile anche con una connessione Internet scadente. Puoi saperne di più sul protocollo AdGuard VPN in [questo articolo](../general/adguard-vpn-protocol.mdx).

## Come utilizzare AdGuard VPN per iOS

Per utilizzare AdGuard VPN per iOS, devi prima accedere al tuo [account AdGuard](https://my.adguard.com/). Puoi accedere direttamente con le credenziali del tuo account AdGuard o tramite Google, ID Apple o Facebook (se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email).

Se non hai ancora un account AdGuard, dovrai prima crearlo.

Usare AdGuard VPN è abbastanza semplice. Nella schermata principale è possibile vedere il pulsante *Connetti/Disconnetti* e l'elenco dei server disponibili. I server hanno una propria posizione (un determinato paese e una città) e un indicatore di ping. Il ping descrive il tempo di risposta del server (in millisecondi). Ad esempio, scegliendo il server con il ping di 22 ms significa che il segnale raggiungerà il server e tornerà indietro in 22 millisecondi. Quindi più basso è questo tasso, più veloce è la tua connessione. In AdGuard VPN puoi scegliere tra oltre 50 località in dozzine di paesi.

![Schermata principale e posizioni](https://cdn.adguard.com/content/kb/vpn/ios/1.png?123)

## Elenchi di esclusioni

Puoi trovare la funzione di esclusione toccando il pulsante centrale in basso. Lì vedrai due elenchi di esclusione: per le modalità generale e selettiva. Nella modalità Generale la VPN funziona su tutti i siti web tranne quelli dell'elenco di esclusione. Nella modalità selettiva, invece, la VPN funziona solo sui siti dell'elenco. Puoi aggiungere domini (es. `google.com`) o sottodomini (es. `*.google.com`) di siti web in due modi: puoi inserirli manualmente nell'app o direttamente dal browser cliccando sul pulsante *Condividere* e trovare AdGuard VPN nell'elenco aperto di seguito.

![Esclusioni](https://cdn.adguard.com/content/kb/vpn/ios/2.png?123)

Un'altra caratteristica utile è l'Importazione/Esportazione degli elenchi di esclusione. Puoi farlo seguendo i prossimi quattro passaggi:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esportare*. L'archivio `exclusions.zip` verrà scaricato.

2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi Generale e Selettivo. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.

3. Durante il trasferimento tra dispositivi diversi, non dimenticare d'inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo iOS al tuo Mac, assicurati d'inviare prima il file `.zip` al tuo Mac.

4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trova la sezione appropriata, fai clic sul pulsante *Importa* e seleziona l'archivio.

![Importare/esportare esclusioni](https://cdn.adguard.com/content/kb/vpn/ios/import-export-exclusions.png)

## Impostazioni app

Per accedere alle impostazioni dell'app:

1. Toccare il pulsante Impostazioni (⚙) nell'angolo in basso a destra della schermata principale dell'app AdGuard VPN
2. Clicca su *Impostazioni app*

Qui puoi configurare AdGuard VPN per iOS in base alle tue esigenze utilizzando diverse opzioni: Modalità operativa, server DNS, protezione automatica Wi-Fi, Tema colore e Impostazioni avanzate.

![Impostazioni app](https://cdn.adguard.com/content/kb/vpn/ios/app-settings.png)

### Modalità operativa

AdGuard VPN per iOS può funzionare in due modalità: **Generale** e **Integrata**.

In modalità **Generale**, viene utilizzato il protocollo [AdGuard VPN](../general/adguard-vpn-protocol.mdx), che fornisce la migliore combinazione di velocità e sicurezza. In questa modalità, AdGuard VPN non sarà in grado di funzionare insieme al [Blocco-annunci AdGuard per iOS](https://kb.adguard.com/en/ios).

In modalità **Integrata**, AdGuard VPN sarà in grado di funzionare contemporaneamente con il Blocco AdGuard per iOS utilizzando invece il protocollo IPSec. Anche questo protocollo è sicuro, ma un po' più lento e più facile da rilevare. Non è necessario eseguire alcuna azione aggiuntiva per configurare l'integrazione: è sufficiente installare entrambe le app e passare a questa modalità.
> Si noti che in modalità **Integrata** non è possibile utilizzare la funzione Esclusioni o scegliere il server DNS.

### Server DNS

Lo scopo del Domain Name System (DNS) è quello di tradurre i nomi dei siti web in qualcosa che i browser possono capire, ad esempio gli indirizzi IP. Questo lavoro viene eseguito dai server DNS. AdGuard VPN per iOS offre una scelta tra diversi server DNS, ognuno con le proprie qualità speciali. Ad esempio, AdGuard DNS rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre AdGuard DNS Protezione Familiale combina le funzioni di AdGuard DNS con SafeSearch e il blocco dei contenuti per adulti. I server DNS di diversi provider DNS possono anche funzionare più velocemente o più lentamente a seconda della posizione, dell'ISP e di altri fattori. Scegli quello che funziona meglio per te. Per saperne di più sul DNS e sulle sue caratteristiche è possibile consultare [questo articolo](https://kb.adguard.com/en/general/dns-filtering#what-is-dns).

![Schermata del server DNS](https://cdn.adguard.com/content/kb/vpn/ios/dns-server.png)

### Protezione automatica Wi-Fi

La VPN si attiverà automaticamente quando il dispositivo si connetterà alla rete Wi-Fi.

### Tema

Puoi scegliere il tema predefinito del sistema dell'app, scuro o chiaro (disponibile in iOS 13 e versioni successive).

### Impostazioni avanzate

In *Impostazioni avanzate* puoi trovare due sezioni: Livello di registrazione e Informazioni di diagnostica. Per quanto riguarda la prima opzione, non è consigliabile abilitare il livello di registrazione esteso a meno che non sia richiesto dal nostro team di supporto. Le informazioni diagnostiche, informazioni tecniche memorizzate localmente sul dispositivo e sulle connessioni (indirizzo IP, ID, ping, ecc.), possono essere inviate a noi in caso di problemi tecnici.

## Azioni rapide (disponibile in iOS 13 o versioni successive)

Per accedere a questa funzione, tocca e tieni premuta l'icona dell'app, quindi solleva il dito. Verrà visualizzato un elenco di Azioni rapide: Connetti/disconnetti al server attualmente selezionato, Scegli posizione per selezionare una nuova posizione del server. Puoi anche, ovviamente, accedere a tutte le azioni predefinite come la rimozione dell'app o lo spostamento dell'icona dell'app.

![Azioni rapide](https://cdn.adguard.com/content/kb/vpn/ios/quick-actions.png)


## Supporto

La realizzazione degli utenti è la nostra massima priorità. Quindi c'è una varietà di funzioni di aiuto nell'app (premi il pulsante *Impostazioni* in basso a destra e poi *Assistenza*): puoi vedere la sezione FAQ, segnalare un bug, lasciare feedback, discutere i tuoi problemi e suggerimenti sul nostro forum, nei social network o su GitHub, valuta AdGuard VPN per iOS nell'App Store ed esporta i log.

![Supporto](https://cdn.adguard.com/content/kb/vpn/ios/support.png)

## Abbonamento

Se stai utilizzando la versione gratuita di AdGuard VPN, ci sarà la quarta scheda con un'icona a forma di freccia nella barra delle schede in basso. In questa sezione troverai brevi informazioni sui principali vantaggi della versione a pagamento dell'app e potrai acquistare un abbonamento.

![Abbonamento](https://cdn.adguard.com/content/kb/vpn/ios/subscription_en.png?123)