---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per iOS?

Una VPN consente di creare una connessione sicura a un'altra rete su Internet. Connette il computer o dispositivo mobile dell'utente a un server e consente di navigare in rete utilizzando un indirizzo IP "coperto". Se il server VPN si trova in un altro paese, apparirà come se la connessione a Internet sia stata stabilita da tale paese. [Scopri di più](/general/how-vpn-works) sul funzionamento nel dettaglio di una VPN.

AdGuard VPN dispone di diverse funzioni:

- nasconde la tua vera posizione e ti aiuta a rimanere anonimo
- modifica il tuo indirizzo IP per proteggere i tuoi dati dal tracciamento
- crittografa il tuo traffico e rende i contenuti inaccessibili ai truffatori
- ti consente di configurare dove utilizzare la VPN e dove no (funzione di esclusione)

Il prossimo vantaggio di AdGuard VPN per iOS è il nostro protocollo VPN. È estremamente difficile da rilevare rispetto ad altri protocolli VPN, ed è stabile persino con una connessione a Internet debole. Puoi [leggere di più](/general/adguard-vpn-protocol) sul protocollo di AdGuard VPN.

## Come utilizzare AdGuard VPN per iOS

Per utilizzare AdGuard VPN per iOS, devi prima accedere al tuo [account AdGuard](https://my.adguard.com/). Puoi accedere direttamente con le credenziali del tuo account AdGuard o tramite Google, ID Apple o Facebook (se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email).

Se non hai ancora un account AdGuard, dovrai prima crearlo.

Usare AdGuard VPN è abbastanza semplice. Nella schermata principale è possibile vedere il pulsante *Connetti/Disconnetti* e l'elenco dei server disponibili. I server hanno una propria posizione (un determinato paese e una città) e un indicatore di ping. Il ping mostra il tempo di risposta del server (in millisecondi). Scegliere il server con un ping di 22 ms significa che un pacchetto di dati inviato a questo server è restituito (ricevuto nuovamente), dopo 22 ms. In AdGuard VPN puoi scegliere tra oltre 50 località in dozzine di paesi.

![Schermata principale e posizioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Elenchi di esclusioni

Puoi trovare le Esclusioni toccando sul pulsante centrale di seguito. Lì, vedrai due elenchi di esclusione, per le modalità Generale e Selettiva. In modalità Generale, la VPN funziona per tutti i siti web tranne quelli esclusi. Altrimenti, in modalità Selettiva, la VPN funziona soltanto per i siti web dall'elenco. Puoi aggiungere i domini (es. `google.com`) o i sottodomini (es. `*.google.com`) dei siti web in due modi: puoi inserirli manualmente nell'app o direttamente dal browser, condividendo le pagine desiderate con AdGuard VPN.

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Un'altra caratteristica utile è l'Importazione/Esportazione degli elenchi di esclusione. Puoi farlo seguendo i prossimi quattro passaggi:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.

2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi Generale e Selettivo. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.

3. Durante il trasferimento tra dispositivi diversi, non dimenticare d'inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo iOS al tuo Mac, assicurati d'inviare prima il file `.zip` al tuo Mac.

4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio.

![Importazione/esportazione delle esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Impostazioni app

Per accedere alle impostazioni dell'app:

1. Toccare il pulsante Impostazioni (⚙) nell'angolo in basso a destra della schermata principale dell'app AdGuard VPN
2. Clicca su *Impostazioni app*

Qui puoi configurare AdGuard VPN per iOS in base alle tue esigenze utilizzando diverse opzioni: Modalità operativa, server DNS, protezione automatica Wi-Fi, Tema colore e Impostazioni avanzate.

![Impostazioni dell'app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modalità operativa

AdGuard VPN per iOS può funzionare in due modalità: **Generale** e **Integrata**.

In modalità **Generale**, viene utilizzato il [protocollo AdGuard VPN](/general/adguard-vpn-protocol), che fornisce la migliore combinazione di velocità e sicurezza. In questa modalità, AdGuard VPN non potrà funzionare insieme ad [AdGuard Ad Blocker per iOS](https://adguard.com/kb/adguard-for-ios/overview/).

In modalità **Integrata**, AdGuard VPN potrà funzionare contemporaneamente con il Blocco AdGuard per iOS, utilizzando invece il protocollo IPSec. Anche questo protocollo è sicuro, ma un po' più lento e più facile da rilevare. Non è necessario eseguire alcuna azione aggiuntiva per configurare l'integrazione: è sufficiente installare entrambe le app e passare a questa modalità.

:::note

In modalità **Integrata**, non puoi utilizzare la funzionalità Esclusioni, o scegliere un server DNS.

:::

### Server DNS

I server DNS traducono un nome di dominio o del host (es., example.com o www.example.com), in qualcosa che i browser possano comprendere, cioè, gli indirizzi IP. AdGuard VPN per iOS offre una scelta tra svariati server DNS, ognuno con le proprie qualità speciali. Ad esempio, AdGuard DNS rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre AdGuard DNS Protezione Famiglia combina la funzione di AdGuard DNS con Ricerca sicura e il blocco dei contenuti per adulti. I server DNS da fornitori DNS differenti potrebbero anche essere più o meno veloci a seconda della tua posizione, ISP e altri fattori. Scegli quello che funziona meglio per te. Puoi [scoprire di più sul DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) e le sue caratteristiche.

![Schermata del server DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Protezione automatica Wi-Fi

La VPN si attiverà automaticamente quando il dispositivo si connette a una rete Wi-Fi.

### Tema

Puoi scegliere il tema predefinito di sistema dell'app, scuro o chiaro (disponibile su iOS 13 e versioni successive).

### Impostazioni avanzate

In *Impostazioni avanzate*, puoi trovare due sezioni: Livello di registrazione e Informazioni diagnostiche. Per quanto riguarda la prima opzione, è sconsigliato abilitare il Livello di registrazione esteso, a meno che non sia richiesto dal nostro team di supporto. Le informazioni diagnostiche, informazioni tecniche memorizzate localmente sul dispositivo e le connessioni (indirizzo IP, ID, ping, etc.), possono essere inviate a noi in caso di qualsiasi problema tecnico.

## Azioni rapide (disponibile in iOS 13 o versioni successive)

Per accedere a questa funzionalità, tocca e tieni premuta l'icona dell'app, quindi solleva il tuo dito. Visualizzerai le azioni rapide: Connetti/Disconnetti, Seleziona posizione, Modifica Schermata Home e Rimuovi app.

![Azioni rapide *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Supporto

Esistono svariate funzionalità nell'app (premi il pulsante *Impostazioni* in basso a destra, quindi *Supporto*): potrai visualizzare la sezione delle Domande Frequenti, segnalare un bug, lasciare un feedback, discutere dei tuoi problemi e suggerimenti sui social o su GitHub, valutare AdGuard VPN per iOS nell'App Store ed esportare i registri.

![Supporto *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abbonamento

Se stai utilizzando la versione gratuita di AdGuard VPN, sarà presente una quarta scheda con l'icona di una freccia, sulla barra delle schede inferiore. In questa sezione troverai brevi informazioni sui vantaggi principali della versione a pagamento dell'app, e potrai acquistare un abbonamento.

![Abbonamento *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
