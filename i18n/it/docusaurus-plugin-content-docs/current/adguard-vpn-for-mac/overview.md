---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

AdGuard VPN per Mac è un servizio VPN desktop. AdGuard VPN è completamente compatibile con il Blocco AdGuard possono essere utilizzati insieme e funzioneranno senza problemi. Vediamo quali caratteristiche ha da offrire.

Tieni presente che **non puoi utilizzare AdGuard VPN per Mac senza avere effettuato l'accesso al tuo account AdGuard**. Puoi accedere con il tuo account AdGuard o con un account esterno, ovvero tramite Apple, Google o Facebook. Assicurati che il tuo account esterno sia associato allo stesso indirizzo e-mail del tuo account AdGuard. Se nel suo account AdGuard è presente un abbonamento adeguato, questo verrà attivato automaticamente sull'applicazione desktop. Non hai ancora un profilo AdGuard? Crealo [qui](https://auth.adguardaccount.com/registration.html).

:::note Compatibilità

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Big Sur (version 11).

:::

## Schermata iniziale

![Schermata iniziale](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

La prima scheda è la *Schermata iniziale*. Qui puoi vedere lo stato corrente di AdGuard VPN, la località selezionata (se abilitata) e il suo ping. Il ping è il tempo di risposta di un server VPN. Più basso è il numero, più veloce è la connessione. Se la VPN è disabilitata, l'ultima posizione da cui ti sei connesso è mostrata in fondo.

Le località più veloci con i ping più bassi sono mostrate nell'angolo dello schermo in alto a destra. C'è anche un pulsante di aggiorna su cui puoi cliccare se alcune posizioni sono non connesse. Di seguito è possibile visualizzare l'elenco completo delle posizioni. Il campo di ricerca semplifica la ricerca della posizione di cui hai bisogno.

:::note

Gli utenti gratuiti possono connettersi solo a determinati luoghi, mentre altri sono bloccati. Inoltre, c'è un limite di traffico mensile di 3 GB nella versione gratuita.

:::

### Posizioni salvate

Nella stessa scheda, puoi salvare le tue località preferite per accedervi rapidamente.

Basta passare il cursore su una posizione, fare clic sull'icona del segnalibro che appare e verrà salvata. Le posizioni che hai contrassegnato appariranno poi nella scheda *Salvate*.

![Posizioni salvate](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## Esclusioni

![Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN presenta svariate funzionalità che lo rendono unico e, una di esse, è decisamente *Esclusioni*. Di default, AdGuard VPN opererà su tutti i siti web e in tutte le app, tranne quelle dall'elenco delle esclusioni. Ma puoi passare all'altra modalità, quindi AdGuard VPN funzionerà soltanto sui siti web e nelle app dall'elenco delle esclusioni.

![Schermata Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Inoltre puoi non solo aggiungere siti web a Esclusioni, ma anche scegliere tra gli elenchi di servizi popolari. Gli elenchi sono suddivisi in otto categorie: Social network, Servizi di messaggistica, Servizi di streaming video e musicale, Videogiochi, Shopping, Motori di ricerca e Strumenti di comunicazione di lavoro. Tutti questi servizi possono essere aggiunti alle Esclusioni con un solo clic! È particolarmente comodo se si utilizza la modalità Selettiva.

L'elenco delle Esclusioni può essere configurato facilmente. Se hai aggiunto un dominio e alcuni dei suoi sottodomini, questi verranno raggruppati all'interno del dominio radice. Quando si aggiunge un dominio root (`example.com`) viene aggiunta anche la sua maschera (`*.example.com`).

:::info Browser aggiunti alle esclusioni

A partire dalla versione 2,4, tutti i browser vengono automaticamente aggiunti alla lista delle esclusioni quando la VPN è attiva solo per app e siti web selezionati. Questa modifica offre maggiore comodità per gli utenti che erano spesso confusi e non sapevano se considerare i loro browser come app o meno. Si applica alle seguenti condizioni:

- L'utente ha installato AdGuard VPN per la prima volta
- L'utente non ha modificato le impostazioni delle esclusioni prima della versione 2.4

:::

Se hai aggiunto un servizio, modificato o rimosso qualcosa e ora desideri ripristinare le impostazioni iniziali, premi semplicemente *Ripristina impostazioni predefinite* accanto al dominio: questa azione ripristinerà eventuali domini mancanti e selezionerà tutte le caselle di controllo.

Inoltre, gli elenchi di esclusioni già pronti possono essere trasferiti ad altri dispositivi con AdGuard VPN installato. Per esportare le esclusioni, seguire le istruzioni in 4 passaggi descritte di seguito:

1. Aprire AdGuard VPN sul dispositivo da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.
2. Ci sono due file `.txt` all'interno dell'archivio, ciascuno per gli elenchi Generale e Selettivo. Aggiungere altre esclusioni, eliminare quelle esistenti, rinominare i file (ma ne parleremo più avanti) o semplicemente lasciare l'archivio con i file così com'è.
3. Durante il trasferimento tra dispositivi diversi, non dimenticare di inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Mac al tuo iPhone, assicurati d'inviare prima il file `.zip` al tuo smartphone.
4. Aprire AdGuard VPN sul dispositivo/nel browser in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio. Tutto fatto!

:::note

I file d'archivio da altri dispositivi sono similmente importabili sul tuo AdGuard VPN per Mac.

:::

## Statistiche

![Schermata Statistiche](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

La schermata Statistiche fornisce informazioni dettagliate sul traffico consumato per posizione e app, posizioni e app più utilizzate. Visualizza i dati per il giorno, il mese o per l'intero periodo di utilizzo di AdGuard VPN per Mac.

È importante sottolineare che tutti i dati vengono archiviati localmente sul tuo dispositivo, quindi nessuno tranne te può accedervi. La funzione Statistiche è disponibile per gli utenti con un abbonamento VPN AdGuard.

## Assistenza

![Schermata Assistenza](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

La quarta scheda è la schermata *Assistenza*. Trova le risposte a qualsiasi domanda nelle [Domande Frequenti](https://adguard-vpn.com/welcome.html#faq) o nella [Base di conoscenza](/), segnala un bug se ne riscontri uno o [discuti di AdGuard su una qualsiasi delle piattaforme](https://adguard.com/discuss.html). E sentiti liber* di [lasciare un feedback sul nostro prodotto](https://surveys.adguard.com/vpn_mac/form.html), lo apprezzeremmo.

## Impostazioni

![Impostazioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finalmente, arriviamo alla scheda Impostazioni. Nella sezione *Informazioni sul programma* puoi vedere la versione corrente di AdGuard VPN, controllare gli aggiornamenti, visitare il nostro sito web ufficiale e conoscere l'EULA e l'informativa sulla privacy di AdGuard. Nella sezione *Informazioni sulla licenza* puoi eseguire l'upgrade da gratuito a illimitato, gestire il tuo abbonamento o disconnetterti. E, soprattutto, da qui puoi accedere alle *Impostazioni generali*.

### Impostazioni app

![Impostazioni app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Le prime quattro funzionalità di base rendono l'applicazione più comoda e intuitiva, ovvero *Kill Switch*, *Aggiornamento automatico*, *Avvia AdGuard VPN all'accesso* e *Connessione automatica all'avvio dell'app*. Inoltre, è possibile scegliere tra il tema chiaro, scuro e sistema — quest'ultimo si adatta al tema del tuo Mac.

Puoi anche consentire ad AdGuard VPN di raccogliere e inviare rapporti anonimi sugli arresti anomali, dati tecnici e d'interazione, per poterci aiutare a migliorare la nostra app. Infine, ma non per importanza, puoi esportare i registri dal tuo Mac. Questo può essere utile se vuoi allegare i registri al tuo messaggio al supporto.

### Server DNS

![Server DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Uno o più server DNS possono essere impostati qui. Ciò è utile se non vuoi fare affidamento sul server DNS predefinito fornito dal tuo ISP. Selezionane uno dall'elenco dei servizi DNS più diffusi o aggiungi manualmente un server personalizzato. Consigliamo di aggiungere AdGuard DNS, che non soltanto crittografa il tuo traffico DNS, ma identifica inoltre le richieste ai siti web dannosi e le reindirizza a un "buco nero".

### Impostazioni avanzate

![Impostazioni avanzate](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Livello di registrazione

Esistono solo due livelli di registrazione, ma ti consigliamo vivamente di utilizzare il primo, quello predefinito. La seconda opzione (registrazione estesa) dovrebbe essere impostata solo per registrare uno strano comportamento del programma dopo aver consultato il nostro supporto tecnico. Se hai abilitato il livello di registrazione esteso, assicurati di tornare a quello predefinito dopo aver registrato i registri.

#### Nascondi icona della barra dei menu

Anche se questa opzione si trova in *Impostazioni avanzate*, può essere attivata senza esitazione. Puoi nascondere l'icona AdGuard VPN dalla barra dei menu, non impedirà alla nostra app di funzionare in background.

##### Protocollo AdGuard VPN

![Seleziona protocollo VPN](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.7/protocol_en.png)

Per impostazione predefinita, il protocollo VPN di AdGuard utilizza la selezione dinamica del protocollo VPN (opzione*Selezione automatica*). Ciò significa che AdGuard VPN individua automaticamente quale protocollo (HTTP2/TLS o HTTP3/QUIC) offre le prestazioni migliori e passa immediatamente a quello. Questo migliora la velocità e la stabilità della VPN, il che è particolarmente utile nelle regioni in cui l'uso della VPN è limitato o inaffidabile.

Se lo desideri, puoi impostare AdGuard VPN in modo che utilizzi solo il protocollo HTTP2/TLS o HTTP3/QUIC anziché *Selezione automatica*. Ogni protocollo ha i suoi punti di forza, ma la scelta migliore può variare a seconda della posizione, delle condizioni della rete e persino del server a cui ci si connette.
