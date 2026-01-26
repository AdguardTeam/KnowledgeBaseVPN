---
title: Panoramica delle funzionalità
sidebar_position: 1
---

## Cosa fa AdGuard VPN per Windows

- Protegge dall'intercettazione del traffico di rete (spoofing). AdGuard VPN crea un tunnel crittografato tra il dispositivo e un server remoto. Tutto il tuo traffico Internet passa attraverso questo tunnel, in modo che i tuoi dati siano protetti lungo il percorso. E grazie all'[esclusivo protocollo di AdGuard](https://trusttunnel.org/), ti è garantita una connessione veloce e sicura.

- Nasconde il tuo indirizzo IP. Il tuo vero indirizzo IP è la chiave per i tuoi dati personali per i criminali informatici. Il tuo nome, indirizzo e-mail, numero di telefono, informazioni sulla carta di credito possono cadere nelle mani di truffatori se non nascondi il tuo IP. Con AdGuard VPN, tutto il tuo traffico passa per un tunnel crittografato e arriva al server VPN. Il server web registra l'indirizzo IP dell'endpoint del tunnel, cioè il server VPN, e non quello reale del dispositivo.

- Nasconde la tua posizione reale. Cosa ti dà questo? Ad esempio, la possibilità di prenotare un hotel alle tariffe locali o di nascondersi dalla pubblicità geolocalizzata.

AdGuard VPN per Windows presenta molti vantaggi, quindi, gli abbiamo dedicato [un articolo separato](/general/why-adguard-vpn). Qui, tuttavia, vogliamo concentrarci di più sull'applicazione stessa e su come funziona.

## Come iniziare a utilizzare AdGuard VPN per Windows

Per iniziare a utilizzare AdGuard VPN per Windows, scarica l'applicazione dal [nostro sito web](https://adguard-vpn.com/welcome.html). L'installazione non richiede più di un minuto, e vedrai una finestra in cui dovrai spuntare almeno una casella, applicando i termini dell'Accordo con gli Utenti e la Politica sulla riservatezza. Sta a te decidere se desideri che AdGuard raccolga dei dati anonimi sul tuo uso dell'applicazione. Infine, il programma ti chiederà di accedere, tramite un [profilo di AdGuard](https://auth.adguardaccount.com/login.html) o tramite reti sociali (Apple, Google, Facebook). È tutto, puoi ora utilizzare AdGuard VPN per Windows.

## Schermata iniziale

![Schermata iniziale](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

L'elemento più evidente nella **schermata Iniziale** è il pulsante *Connetti/Disconnetti di VPN AdGuard*, sotto il quale puoi vedere il server selezionato. Sul lato destro dello schermo viene visualizzato un elenco delle località disponibili. La posizione più veloce, ossia quella con il ping più basso, è mostrata in cima all'elenco. C'è anche un pulsante di aggiornamento su cui puoi cliccare se alcune località sono offline.

Puoi anche salvare le tue località preferite per accedervi rapidamente. Basta passare il cursore su un luogo, cliccare l'icona del segnalibro che appare e sarà salvato. I luoghi che hai contrassegnato appariranno poi nella scheda *Salvati*.

Nella parte superiore dello schermo è presente un pannello di navigazione con cinque schede: **Inizio**, **Esclusioni**, **Statistiche**, **Assistenza**, e **Impostazioni**.

## Esclusioni

Per impostazione predefinita, AdGuard VPN per Windows funziona ovunque. Puoi aggiungere i siti web e le app che desideri escludere dal tunnel VPN all'elenco delle esclusioni. In alternativa, puoi far funzionare AdGuard VPN solo sui siti Web e sulle app specificati nell'elenco delle esclusioni. Ti preghiamo di notare che questi due elenchi sono indipendenti tra loro.

![Esclusioni *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

Puoi aggiungere i siti web alle esclusioni **manualmente**, inserendone i nomi di dominio. L'app, inoltre, ti offre un'opzione per scegliere i siti Web popolari **dall'elenco**.

![Aggiungi esclusioni dall'elenco *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Aggiungendo manualmente i domini, dovresti tenere conto di alcune sfumature. Ad esempio, se escludi manualmente il dominio `google.com`, tutti i sottodomini `*.google.com` saranno anch'essi aggiunti all'elenco delle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure, puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

:::

Consigliamo di utilizzare l'opzione **Dall'elenco**. I siti web sono raggruppati in otto categorie: Social, Messaggistica, Servizi di streaming video e musica, Giochi, Shopping, Motori di ricerca e Strumenti di comunicazione per lavoro. Abbiamo messo lì i servizi più popolar, inclusi tutti i nomi di dominio e sottodomini correlati a ogni piattaforma.

:::info Browser aggiunti alle esclusioni

A partire dalla versione 2,4, tutti i browser sono automaticamente aggiunti alla lista delle esclusioni quando la VPN è attiva solo per app e siti web. Questa modifica offre maggiore comodità per gli utenti che erano spesso confusi e non sapevano se considerare i loro browser come app o meno. Si applica alle seguenti condizioni:

- L'utente ha installato AdGuard VPN per la prima volta
- L'utente non ha modificato le impostazioni delle esclusioni prima della versione 2.4

:::

### Importare/esportare elenchi delle esclusioni

Per esportare l'elenco delle esclusioni da AdGuard VPN per Windows al tuo computer, clicca su **Esporta le esclusioni**, seleziona la cartella in cui sarà archiviato l'elenco, e clicca su **Salva**. Sarà scaricato un archivio `exclusions.zip` con due file `.txt`, uno per ogni lista. Puoi modificarli aggiungendo nuove esclusioni o eliminando quelle vecchie.

Sul dispositivo di destinazione, apri AdGuard VPN, clicca su *Esclusioni* e seleziona *Siti web* o *App*. Clicca su *Importa esclusioni* e seleziona l'archivio ricevuto.

## Statist.

![Schermata statistiche *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

La schermata Statistiche mostra informazioni dettagliate sull'utilizzo dei dati, classificate in base alla posizione e all'app. Evidenzia le posizioni e le applicazioni utilizzate più frequentemente. Puoi accedere alle statistiche per diversi periodi di tempo: giornaliero, mensile o per tutto il tempo in cui hai utilizzato AdGuard VPN per Windows.

La cosa fondamentale è che tutte queste informazioni vengono memorizzate esclusivamente sul tuo dispositivo, garantendo che solo tu possa visualizzarle. L'accesso alla funzione statistiche è disponibile solo per gli abbonati ad AdGuard VPN.

## Impostazioni

![Impostazioni *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

La quinta scheda contiene sezioni che ti aiuteranno a personalizzare l'app.

### Impostazioni dell'app

![Impostazioni app *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Nella sezione delle **Impostazioni dell'app**, puoi impostare la lingua dell'app, nonché abilitare il **Kill Switch**, che bloccherà l'accesso a Internet, se la tua connessione VPN si interrompe. Ciò è necessario per impedire che degli intrusi ottengano i tuoi dati, se ti trovi senza la protezione della VPN, quando si è connessi a una rete Wi-Fi pubblica o mobile.

Inoltre, puoi attivare le seguenti funzonalità in un solo click: **Aggiornamento automatico**, **Avvia AdGuard VPN all'avvio di Windows**, **Connessione automatica al lancio dell'app**, anche puoi consentire ad AdGuard di raccogliere dati anonimi sull'utilizzo dell'app, così che il team di AdGuard riceva le informazioni sui potenziali problemi di utilizzabilità. Qui, inoltre, puoi cambiare il tema in **Chiaro**, **Sistema** o **Scuro**.

In fondo alla pagina ci sono due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

La scheda **Server DNS** ti consente di aggiungere il tuo server DNS, manualmente o dall'elenco. Puoi configurare un server DNS da qualsiasi fornitore. Consigliamo di aggiungere [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un server capace di proteggere da inserzioni, tracciamento e phishing, oltre alle funzionalità standard.

#### Impostazioni avanzate

È interamente possibile utilizzare AdGuard VPN per Windows senza mai toccare le Impostazioni avanzate, ma possono essere utili se desideri prenderti del tempo per imparare cosa fanno.

##### Modalità operativa

Sebbene esistano due modalità operative, VPN e SOCKS5, ti consigliamo di utilizzare soltanto quella scelta di default (VPN). Quando la **Modalità VPN** è abilitata, tutto il traffico del tuo dispositivo sarà indirizzato tramite AdGuard VPN, mentre in **Modalità SOCKS5**, AdGuard VPN utiilzza un server proxy locale, utilizzabile da altre applicazioni per reindirizzare il proprio traffico.

##### Livello di registrazione

Sono disponibili due livelli di registrazione tra cui scegliere: **Registrazione predefinita** e **Registra tutto**. La prima opzione è abilitata per impostazione predefinita. L'opzione **Registra tutto** dovrebbe essere attivata soltanto se il nostro team di supporto ti ha chiesto di farlo. Utilizzare l'app in questa modalità per un periodo di tempo esteso, risulterà in maggiori consumi della batteria.

Tutti i registri sono memorizzati localmente sul tuo dispositivo, e puoi inviarli al team di supporto se necessario.

##### Crittografia post-quantistica

![Crittografia post-quantistica *border](https://cdn.adtidy.org/blog/new/qe7fgimage_3.png)

Questa funzionalità crittografa il traffico in modo tale che nemmeno i computer quantistici possano intercettarlo.

##### Protocollo AdGuard VPN

![Seleziona protocollo VPN *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.7/auto_en.png)

Per impostazione predefinita, il protocollo VPN di AdGuard utilizza la selezione dinamica del protocollo VPN (opzione*Selezione automatica*). Ciò significa che AdGuard VPN individua automaticamente quale protocollo (HTTP2/TLS o HTTP3/QUIC) offre le prestazioni migliori e passa immediatamente a quello. Questo migliora la velocità e la stabilità della VPN, il che è particolarmente utile nelle regioni in cui l'uso della VPN è limitato o inaffidabile.

Se lo desideri, puoi impostare AdGuard VPN in modo che utilizzi solo il protocollo HTTP2/TLS o HTTP3/QUIC anziché *Selezione automatica*. Ogni protocollo ha i suoi punti di forza, ma la scelta migliore può variare a seconda della posizione, delle condizioni della rete e persino del server a cui ci si connette.

##### Utilizzo di WinTun

WinTun è un driver di instradamento del traffico comunemente utilizzato per le implementazioni VPN su Windows che migliora la qualità delle connessioni VPN creando un adattatore di rete virtuale. Per impostazione predefinita, AdGuard VPN utilizza il normale driver WFP (e il driver TDI per Windows 7).

#### Esclusione sottoreti

Questa funzione ti consente di aggiungere sottoreti per escludere il traffico da dispositivi specifici collegati alla tua rete. Ad esempio, il tuo robot aspirapolvere.

## Altre schede

### Informazioni

La scheda **Informazioni** fornisce le informazioni sulla versione corrente di AdGuard VPN per Windows, un pulsante di aggiornamento e i link al sito web di AdGuard VPN, all'EULA e alla Politica sulla Riservatezza.

### Profilo

Qui puoi trovare le informazioni sullo stato della licenza, oltre a un collegamento al tuo profilo personale di AdGuard, dove puoi gestire i tuoi abbonamenti correnti e acquistarne di nuovi.

## Assistenza

Questa scheda ha lo scopo di risolvere i problemi degli utenti: puoi trovarvi un collegamento alla pagina delle Domande Frequenti, segnalare un bug o lasciare un feedback, ed esportare i registri se il team di supporto ti chiede di farlo.
