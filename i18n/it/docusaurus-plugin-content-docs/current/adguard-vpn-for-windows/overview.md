---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Cosa fa AdGuard VPN per Windows

- Protegge dall'intercettazione del traffico di rete (spoofing). AdGuard VPN crea un tunnel crittografato tra il dispositivo e un server remoto. Tutto il vostro traffico Internet passa attraverso questo tunnel, in modo che i vostri dati siano protetti lungo il percorso. E grazie all'[esclusivo protocollo di AdGuard](/general/adguard-vpn-protocol), ti è garantita una connessione veloce e sicura.

- Nasconde il tuo indirizzo IP. Il tuo vero indirizzo IP è la chiave per i tuoi dati personali per i criminali informatici. Il tuo nome, indirizzo e-mail, numero di telefono, informazioni sulla carta di credito possono cadere nelle mani di truffatori se non nascondi il tuo IP. Con AdGuard VPN, tutto il tuo traffico passa per un tunnel crittografato e arriva al server VPN. Il server web registra l'indirizzo IP dell'endpoint del tunnel, cioè il server VPN, e non quello reale del dispositivo.

- Nasconde la tua posizione reale. Cosa ti dà questo? Ad esempio, la possibilità di prenotare un hotel a tariffe locali o di nascondersi dalla pubblicità con geotargeting.

AdGuard VPN per Windows presenta molti vantaggi, quindi, gli abbiamo dedicato [un articolo separato](/general/why-adguard-vpn). Qui, tuttavia, vogliamo concentrarci di più sull'applicazione stessa e su come funziona.

## Come iniziare a utilizzare AdGuard VPN per Windows

Per iniziare a utilizzare AdGuard VPN per Windows, scarica l'applicazione dal [nostro sito web](https://adguard-vpn.com/welcome.html). L'installazione non richiede più di un minuto, e vedrai una finestra in cui dovrai spuntare almeno una casella, applicando i termini dell'Accordo con gli Utenti e la Politica sulla privacy. E dipende da te decidere se desideri che AdGuard raccolga dati anonimi sul tuo utilizzo dell'app. Infine, il programma ti chiederà di accedere, tramite un [profilo di AdGuard](https://auth.adguard.com/login.html) o tramite social (Apple, Google, Facebook). È tutto, puoi ora utilizzare AdGuard VPN per Windows.

## Schermata Home

![Pagina iniziale di AdGuard VPN per Windows](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

L'elemento più evidente nella **schermata Home** è il pulsante Connetti/Disconnetti di VPN AdGuard, sotto il quale puoi vedere il server selezionato. Sul lato destro dello schermo viene visualizzato un elenco delle località disponibili. La posizione più veloce, ossia quella con il ping più basso, è mostrata in cima all'elenco. C'è anche un pulsante di aggiornamento su cui puoi cliccare se alcune località sono offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**, **Support**, and **Settings**.

## Esclusioni

By default, AdGuard VPN for Windows works everywhere. Puoi aggiungere i siti web e le app che desideri escludere dal tunnel VPN all'elenco delle esclusioni. In alternativa, puoi far funzionare AdGuard VPN solo sui siti Web e sulle app specificati nell'elenco delle esclusioni. Ti preghiamo di notare che questi due elenchi sono indipendenti tra loro.

![Esclusioni *confine](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Puoi aggiungere i siti web alle esclusioni **manualmente**, inserendone i nomi di dominio. L'app, inoltre, ti offre un'opzione per scegliere i siti web popolari **dall'elenco**.

![Aggiungi Esclusioni dall'elenco](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account certain details. Ad esempo, se escludi manualmente il dominio `google.com`, tutti i sottodomini `*.google.com` saranno anch'essi aggiunti all'elenco delle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure, puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

:::

Consigliamo di utilizzare l'opzione **Dall'elenco**. I siti web sono raggruppati in otto categorie: Social, Messaggistica, Servizi di streaming video e musica, Giochi, Shopping, Motori di ricerca e Strumenti di comunicazione per lavoro. Abbiamo messo lì i servizi più popolar, inclusi tutti i nomi di dominio e sottodomini correlati a ogni piattaforma.

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

### Importare/esportare elenchi delle esclusioni

Per esportare l'elenco delle esclusioni da AdGuard VPN per Windows al tuo computer, clicca su **Esporta le esclusioni**, selezona la cartella in cui sarà archiviato l'elenco, e clicca su **Salva**. Sarà scaricato un archivio `exclusions.zip` con due file `.txt`, uno per ogni elenco. Puoi modificarli aggiungendo nuove esclusioni o eliminando quelle vecchie.

Sul dispositivo di destinazione, apri AdGuard VPN, clicca su *Esclusioni* e seleziona *Siti web* o *App*. Clicca su *Importa esclusioni* e seleziona l'archivio ricevuto.

## Stats

![Schermata statistiche *bordo](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

La schermata Statistiche mostra informazioni dettagliate sull'utilizzo dei dati, classificate in base alla posizione e all'app. Evidenzia le posizioni e le applicazioni utilizzate più di frequente. Puoi accedere alle statistiche per diversi periodi di tempo: giornaliero, mensile o per tutto il tempo in cui hai utilizzato AdGuard VPN per Windows.

Tutte queste informazioni vengono memorizzate esclusivamente sul vostro dispositivo, in modo che solo voi possiate visualizzarle. L'accesso alla funzione statistiche è disponibile solo per gli abbonati ad AdGuard VPN.

## Impostazioni

![Impostazioni *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

La quarta scheda contiene sezioni che ti aiuteranno a personalizzare l'applicazione.

### Impostazioni app

![Impostazioni *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Nella sezione delle **Impostazioni dell'app**, puoi impostare la lingua dell'app, nonché abilitare il **Kill Switch**, che bloccherà l'accesso a Internet, se la tua connessione VPN si disconnette. Ciò è necessario per impedire che degli intrusi ottengano i tuoi dati, se ti trovi senza la protezione della VPN, quando si è connessi a una rete Wi-Fi pubblica o mobile.

Inoltre, puoi attivare le seguenti funzonalità in un solo click: **Aggiornamento automatico**, **Avvia AdGuard VPN all'avvio di Windows**, **Connessione automatica al lancio dell'app** e consentire ad AdGuard di raccogliere dati anonimi sull'utilizzo dell'app, così che il team di AdGuard riceva le informazioni sui potenziali problemi di utilizzabilità. Qui, inoltre, puoi cambiare il tema in **Chiaro**, **Sistema** o **Scuro**.

In fondo alla pagina ci sono due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

La scheda **Server DNS** ti consente di aggiungere il tuo server DNS, manualmente o dall'elenco. Puoi configurare un server DNS da qualsiasi fornitore. Consigliamo di aggiungere [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un server capace di proteggere da inserzioni, tracciamento e phishing, oltre alle funzionalità standard.

#### Impostazioni avanzate

È interamente possibile utilizzare AdGuard VPN per Windows senza mai toccare le Impostazioni avanzate, ma possono essere utili se desideri prenderti del tempo per imparare cosa fanno.

##### Modalità operativa

Sebbene esistano due modalità operative, VPN e SOCKS5, ti consigliamo di utilizzare soltanto quella scelta di default (VPN). Quando la **Modalità VPN** è abilitata, tutto il traffico del tuo dispositivo sarà indirizzato tramite AdGuard VPN, mentre in **Modalità SOCKS5**, AdGuard VPN utiilzza un server proxy locale, utilizzabile da altre applicazioni per reindirizzare il proprio traffico.

##### Livello di registrazione

Sono disponibili due livelli di registrazione tra cui scegliere: **Registrazione predefinita** e **Registra tutto**. La prima opzione è abilitata di default. L'opzione **Registra tutto** dovrebbe essere attivata soltanto se il nostro team di supporto ti ha chiesto di farlo. Utilizzare l'app in questa modalità per un periodo di tempo esteso, risulterà in maggiori consumi della batteria.

Tutti i registri sono memorizzati localmente sul tuo dispositivo, e puoi inviarli al team di supporto se necessario.

##### Utilizza QUIC

Questa è una funzionalità sperimentale che consente ad AdGuard di utilizzare il protocollo di crittografia QUIC avanzato. Presenta molti vantaggi, ma il più notevole è che può migliorare la qualità di connessione in condizioni non ideali, ad esempio, utilizzando Internet mobile o connettendosi a reti Wi-Fi pubbliche.

#### Utilizzo di WinTun

![Usa WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun è un driver di instradamento del traffico comunemente utilizzato per le implementazioni VPN su Windows che migliora la qualità delle connessioni VPN creando un adattatore di rete virtuale. Per impostazione predefinita, AdGuard VPN utilizza il normale driver WFP (e il driver TDI per Windows 7).

#### Esclusione subnet

Questa funzione ti consente di aggiungere sottoreti per escludere il traffico da dispositivi specifici collegati alla tua rete. Ad esempio, il tuo robot aspirapolvere.

## Altre schede

### Informazioni

La scheda **Informazioni** fornisce le informazioni sulla versione corrente di AdGuard VPN per Windows, un pulsante di aggiornamento e i link al sito web di AdGuard VPN, all'EULA e alla Politica sulla Privacy.

### Account

Qui puoi trovare le informazioni sullo stato della licenza, oltre a un collegamento al tuo profilo personale di AdGuard, dove puoi gestire i tuoi abbonamenti correnti e acquistarne di nuovi.

## Supporto

Questa scheda ha lo scopo di risolvere i problemi degli utenti: puoi trovarvi un collegamento alla pagina delle Domande Frequenti, segnalare un bug o lasciare un feedback, ed esportare i registri se il team di supporto ti chiede di farlo.
