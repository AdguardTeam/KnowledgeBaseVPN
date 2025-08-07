---
title: Panoramica delle funzionalità
sidebar_position: 1
---

## Che cos'è AdGuard VPN per iOS?

Una VPN consente di creare una connessione sicura a un'altra rete su Internet. Connette il computer o dispositivo mobile dell'utente a un server e consente di navigare in rete globale usando un indirizzo IP "falso". Se il server VPN si trova in un altro paese, apparirà come se la tua connessione alla rete globale sia stabilita in tale paese. Per ulteriori dettagli, puoi controllare [il nostro articolo su come funziona una VPN](/general/how-vpn-works).

AdGuard VPN dispone di diverse funzioni:

- Nasconde la tua posizione reale e ti aiuta a rimanere anonimo
- Modifica il tuo indirizzo IP per proteggere i tuoi dati dal tracciamento
- Crittografa il tuo traffico, rendendo il contenuto inaccessibile ai truffatori
- Ti consente di configurare dove usare la VPN e dove no (funzione di esclusione)

Il prossimo vantaggio di AdGuard VPN per iOS è il nostro protocollo VPN. È estremamente difficile da rilevare rispetto ad altri protocolli VPN, ed è stabile persino con una connessione a Internet debole. [Scopri di più sul protocollo AdGuard VPN](/general/adguard-vpn-protocol).

## Come utilizzare AdGuard VPN per iOS

Per utilizzare AdGuard VPN per iOS, devi prima accedere al tuo [account AdGuard](https://my.adguard.com/). Puoi accedere direttamente con le credenziali del tuo account AdGuard o tramite Google, ID Apple o Facebook (se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email).

Se non hai ancora un account AdGuard, dovrai prima crearlo.

Usare AdGuard VPN è abbastanza semplice. Nella schermata principale è possibile vedere il pulsante *Connetti* (*Disconnetti*) e la lista dei server disponibili (li chiamiamo *posizioni*). Ogni server ha una propria posizione (un determinato paese e una città) e un indicatore di ritardo.

Il ritardo mostra il tempo di risposta del server in millisecondi. Questo indica quanto sarà veloce la connessione VPN quando ti connetti a quella posizione. Selezionare un server con un ping di 22 ms significa che un pacchetto di dati inviato a questo server sarà restituito in 22 ms.

Con AdGuard VPN, puoi scegliere tra oltre 50 località in dozzine di paesi.

![Schermata principale e posizioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Esclusioni

Puoi trovare la scheda Esclusioni toccando la seconda icona nella barra inferiore.

Per impostazione predefinita, AdGuard VPN è attivo per tutti i siti web tranne quelli aggiunti a Esclusioni. Puoi anche attivarlo selettivamente — la VPN sarà attiva solo per siti web specificati. Per passare a questa modalità, tocca *Cambia modalità*.

:::note

Ogni modalità ha la propria lista esclusioni.

:::

Puoi aggiungere domini (ad esempio, `google.com`) o sottodomini (ad esempio, `news.google.com`) di siti web alle liste in tre modi:

- Inseriscili manualmente nell'app
- [Scegli tra le liste di domini per servizi popolari](#domain-lists-for-popular-services)
- Aggiungili direttamente dal browser condividendo le pagine desiderate con l'app AdGuard VPN

![Esclusioni *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Quando aggiungi manualmente un dominio, tutti i suoi sottodomini sono aggiunti automaticamente (come `*.google.com`). Vuoi mantenere solo google.com o disattivare la VPN per un dominio specifico? Tocca la riga con il sito web — questo aprirà una schermata separata dove puoi gestire i sottodomini. Basta deselezionare le caselle per quelli che non ti servono.

![Sottodomini *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Se aggiungi manualmente un sottodominio, anche il suo dominio principale sarà aggiunto — ma la casella di controllo accanto a esso non sarà selezionata.

### Liste di domini per servizi popolari

I servizi grandi come Google sono intricati. Di solito usano più di un dominio: uno per i file multimediali, un altro per l'API e più domini per diversi paesi. Ad esempio, nel caso di Google, abbiamo 416 domini nella nostra lista — tutti devono essere aggiunti alle Esclusioni per disattivare completamente la VPN (o attivarla) per il servizio.

Ecco come aggiungere tutti i domini necessari per un servizio popolare alla lista esclusioni:

1. Apri *Esclusioni*.
2. Tocca *Aggiungi sito web*.
3. Tocca *Da lista*.
4. Trova il servizio desiderato nella lista e tocca *Aggiungi*.

![Lista di servizi popolari *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Importa/esporta esclusioni

Un'altra caratteristica utile è l'importazione e l'esportazione delle liste di esclusioni. In questo modo puoi condividere liste esclusioni da e ad altri dispositivi.

Puoi farlo in quattro passaggi:

1. Apri AdGuard VPN sul dispositivo da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.

2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi Generale e Selettivo. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.

3. Durante il trasferimento tra dispositivi diversi, non dimenticare d'inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo iOS al tuo Mac, assicurati d'inviare prima il file `.zip` al tuo Mac.

4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio.

**In AdGuard VPN per iOS, è possibile accedere alle funzioni di esportazione e importazione toccando l'icona a tre punti nell'angolo in alto a destra della schermata Esclusioni**.

![Importa/esporta esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Posizioni salvate

Questa funzione ti consente di salvare le posizioni dei tuoi server preferiti in una scheda dedicata, in modo da potervi accedere rapidamente senza dover cercare o scorrere l'intero elenco.

Per aggiungere un luogo a *Salvati*, basta scorrere verso sinistra su di esso. Per rimuoverlo da *Salvati*, fai lo stesso:

![Posizioni salvate aggiungi rimuovi *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Impostazioni generali

Per aprire le impostazioni generali:

1. Toccare il pulsante Impostazioni (⚙) nell'angolo in basso a destra della schermata principale dell'app.
2. Tocca *Generale*.

Qui puoi configurare AdGuard VPN per iOS come necessario usando diverse opzioni: *Server DNS*, *Tema*, *Avanzate*, *Invia dati tecnici e di interazione* e *Kill Switch*.

![Impostazioni generali *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Server DNS

AdGuard VPN per iOS offre una scelta tra svariati server DNS, ognuno con le proprie qualità speciali. Ad esempio, AdGuard DNS rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre AdGuard DNS Protezione Famiglia combina la funzione di AdGuard DNS con Ricerca sicura e il blocco dei contenuti per adulti. I server DNS da fornitori DNS differenti potrebbero anche essere più o meno veloci a seconda della tua posizione, ISP e altri fattori. Scegli quello che funziona meglio per te. Puoi [scoprire di più sul DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) e le sue caratteristiche.

![Schermata del server DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

Puoi impostare il tema della tua app come Sistema, Scuro o Chiaro (disponibile in iOS 13 o versioni successive).

### Impostazioni avanzate

Nelle impostazioni *Avanzate*, puoi trovare 4 sezioni — *Modalità operativa*, *Livello di registrazione*, *Esporta registri e informazioni di sistema*, e *Informazioni di diagnostica*.

#### Modalità operativa

AdGuard VPN per iOS può funzionare in due modalità: **VPN** e **Integrata**.

La modalità *VPN* usa il [protocollo AdGuard VPN](/general/adguard-vpn-protocol), che fornisce la migliore combinazione di velocità e sicurezza. In questa modalità, AdGuard VPN non potrà funzionare con [AdGuard Ad Blocker per iOS](https://adguard.com/adguard-ios/overview.html).

In **Modalità Integrata**, AdGuard VPN potrà funzionare simultaneamente con AdGuard Ad Blocker per iOS usando il protocollo IPSec. Anche questo protocollo è sicuro, ma un po' più lento e più facile da rilevare. Non devi eseguire alcuna azione aggiuntiva per configurare l'integrazione: è sufficiente installare entrambe le app e passare a questa modalità.

:::note

In modalità **Integrata**, non puoi usare la funzione Esclusioni né scegliere un server DNS.

:::

#### Livello di registrazione

Questa impostazione è usata principalmente per debug e risoluzione dei problemi. I livelli di registrazione Esteso ed Estremo registrano informazioni più dettagliate che possono aiutare a identificare e risolvere vari problemi o bug.

:::caution

**Non è consigliabile abilitare il livello di registrazione Esteso o Estremo a meno che non sia richiesto dal nostro gruppo di assistenza**.

:::

#### Esporta registri e informazioni di sistema

Questa opzione può essere usata per inviare i registri e le informazioni di sistema dell'app all'assistenza o a chiunque altro.

#### Dati di diagnostica

Questa opzione consente di esportare informazioni tecniche che possono essere utili nella risoluzione dei problemi e sono talvolta richieste dalla nostra assistenza e dagli sviluppatori.

### Invia dati tecnici e di interazione

Attivando questa opzione ci aiuti a comprendere meglio come gli utenti interagiscono con l'app. Usiamo queste informazioni per migliorare l'esperienza dell'utente.

### Kill Switch

Se per qualche motivo la connessione VPN si interrompe improvvisamente, *Kill Switch* interromperà automaticamente la connessione alla rete globale, garantendo che i tuoi dati non trapelino e la tua identità rimanga nascosta.

## Azioni rapide

Le azioni rapide sono il modo conveniente per eseguire azioni utili o specifiche per qualsiasi app dalla schermata iniziale senza aprire un'app.

Per accedere al menu' delle azioni rapide, tocca e tieni premuta l'icona dell'app AdGuard VPN, quindi solleva il tuo dito. Nel menu' aperto, vedrai le azioni rapide di AdGuard VPN: *Connetti* (*Disconnetti*) e *Seleziona posizione*. Puoi anche accedere a tutte le azioni predefinite come la rimozione dell'app o lo spostamento o la condivisione dell'app.

![Azioni rapide *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Assistenza

La schermata Assistenza (*Impostazioni* → *Assistenza*) ha una serie di funzioni utili: *FAQ*, *Segnala un bug*, *Richiedi una funzione*, e *Valuta l'app*. Quest'ultima ti consente di valutare AdGuard VPN per iOS nell'App Store.

![Assistenza *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Schermata abbonamenti

Se stai usando la versione gratuita di AdGuard VPN, sarà presente un'altra scheda con l'icona di una freccia, sulla barra delle schede inferiore. Questa sezione descrive brevemente i principali vantaggi della versione a pagamento dell'app. Puoi scegliere un abbonamento annuale o mensile.

![Abbonamento *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
