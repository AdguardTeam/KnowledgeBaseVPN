---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Cosa fa AdGuard VPN per Windows

- Protegge dall'intercettazione del traffico di rete (spoofing). AdGuard VPN crea un tunnel crittografato tra il dispositivo e un server remoto. Tutto il vostro traffico Internet passa attraverso questo tunnel, in modo che i vostri dati siano protetti lungo il percorso. E grazie all'[esclusivo protocollo di AdGuard](/general/adguard-vpn-protocol), ti è garantita una connessione veloce e sicura.

- Nasconde il tuo indirizzo IP. Il tuo vero indirizzo IP è la chiave per i tuoi dati personali per i criminali informatici. Il tuo nome, indirizzo e-mail, numero di telefono, informazioni sulla carta di credito possono cadere nelle mani di truffatori se non nascondi il tuo IP. With AdGuard VPN, all your traffic goes through an encrypted tunnel and comes to the VPN server. The web server registers the IP address of the endpoint of the tunnel, i.e. the VPN server, and not the device's real IP address.

- Nasconde la tua posizione reale. Selezionando uno dei server VPN di AdGuard, verrai immediatamente "teletrasportato" nella sua posizione. Cosa ti dà questo? Ad esempio, la possibilità di prenotare un hotel a tariffe locali o di nascondersi dalla pubblicità con geotargeting.

AdGuard VPN per Windows presenta molti vantaggi, quindi, gli abbiamo dedicato [un articolo separato](/general/why-adguard-vpn). Qui, tuttavia, vogliamo concentrarci di più sull'applicazione stessa e su come funziona.

## Come iniziare a utilizzare AdGuard VPN per Windows

Per iniziare a utilizzare AdGuard VPN per Windows, scarica l'applicazione dal [nostro sito web](https://adguard-vpn.com/welcome.html). L'installazione non richiede più di un minuto, e vedrai una finestra in cui dovrai spuntare almeno una casella, applicando i termini dell'Accordo con gli Utenti e la Politica sulla privacy. Sta a te decidere se desideri che AdGuard raccolga dei dati anonimi sul tuo utilizzo dell'applicazione. Infine, il programma ti chiederà di accedere, tramite un [profilo di AdGuard](https://auth.adguard.com/login.html) o tramite social (Apple, Google, Facebook). È tutto, puoi ora utilizzare AdGuard VPN per Windows.

## Schermata Home

![Schermata Home di AdGuard VPN per Windows](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

L'elemento più evidente sulla **Schermata Home** è il pulsante di connessione/disconnessione di AdGuard VPN. Sopra al pulsante puoi visualizzare la [modalità](#exclusions) di esecuzione dell'applicazione e, sotto di esso, puoi visualizzare il server selezionato. Sul lato destro della schermata trovrai tutte le posizioni disponibili. La posizione più veloce, ossia quella con il ping più basso, è mostrata in cima all'elenco.

In cima alla schermata è presente un pannello di navigazione con quattro schede: **Home**, **Esclusioni**, **Supporto**, **Impostazioni**.

## Esclusioni

AdGuard VPN for Windows can operate in two modes. By default, the application works everywhere, and you can list the websites and apps you want to exclude from the tunnel. But you can switch to the opposite mode: AdGuard VPN will only run on the websites and in the apps specified in the list of exclusions. Please note that these two lists are independent from one another.

![Esclusioni](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Puoi aggiungere i siti web alle esclusioni **manualmente**, inserendone i nomi di dominio. L'app, inoltre, ti offre un'opzione per scegliere i siti web popolari **dall'elenco**.

![Aggiungi Esclusioni](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Aggiungi Esclusioni dall'elenco](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note When adding domains manually, you should take into account some nuances. Ad esempio, se escludi manualmente il dominio `google.com`, anche tutti i sottodomini `*.google.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure si può aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

:::

Consigliamo di utilizzare l'opzione **Dall'elenco**. I siti web sono raggruppati in otto categorie: Social, Messaggistica, servizi di streaming Video e Musica, Giochi, Shopping, Motori di ricerca e Strumenti di comunicazione per lavoro. Abbiamo posizionato lì i servizi più popolari, inclusi tutti i nomi di dominio e sottodomini correlati a ogni piattaforma.

### Importare/esportare elenchi delle esclusioni

Per esportare l'elenco delle esclusioni da AdGuard VPN per Windows al tuo computer, clicca su **Esporta esclusioni**, seleziona la cartella in cui l'elenco sarà archiviato e clicca su **Salva**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. Puoi modificarli aggiungendo nuove esclusoni o eliminando quelle esistenti.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Impostazioni

![Impostazioni](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Impostazioni app

![Impostazioni dell'app](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

Nella sezione **Impostazioni dell'app**, puoi impostare la lingua dell'app, nonché abilitare il **Kill Switch**, che bloccherà l'accesso a Internet se la connessone alla tua VPN cade. Ciò è necessario per impedire che degli intrusi ottengano ii tuoi dati se ti trovi senza la protezione della VPN, quando si è connessi a una Wi-Fi pubblica o a una rete mobile.

Inoltre, puoi attivare le seguenti funzionalità con un solo click: **Aggiornamento automatico**, **Avvia AdGuard VPN all'avvio di Windows**, **Connessione automatica al lancio dell'app** e consentire ad AdGuard di raccogliere i dati di utilizzo anonimi dell'app, così che il team di AdGuard ottenga le informazioni sui potenziali problemi di utilizzabilità. Qui, inoltre, puoi modificare il tema in **Chiaro**, di **Sistema** o **Scuro**.

In fondo alla pagina sono presenti due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

La scheda **Server DNS** ti consente di aggiungere il tuo server DNS. Puoi configurare un server DNS da qualsiasi fornitore. Consigliamo di aggiungere [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un server capace di proteggere da inserzioni, tracciamento e phishing, oltre alle funzionalità standard.

#### Impostazioni avanzate

È totalmente possibile utilizzare AdGuard VPN per Windows senza mai toccare le Impostazioni avanzate, ma possono essere utiili se si è disposti a dedicare del tempo a imparare cosa fanno.

##### Modalità operativa

Sebbene esistano due modalità operative: VPN e SOCKS5, ti consigliamo di utilizzare soltanto quella scelta di default (VPN). Quando la **Modalità VPN** è abilitata, tutto il traffico del tuo dispositivo sarà diretto attraverso AdGuard VPN, mentre in **Modalità SOCKS5**, AdGuard VPN utilizza un server proxy locale, utilizzabile da altre applicazioni per reindirizzare il proprio traffico.

##### Livello di registrazione

Sono disponibili due livelli di registrazione tra cui scegliere: **Registrazione predefinita** e **Registra tutto**. La prima opzione è abilitata di default. L'opzione **Registra tutto** dovrebbe essere attivata soltanto se il nostro team di supporto ti ha chiesto di farlo. Utilizzare l'app in questa modalità per un periodo di tempo prolungato, risulta in un maggiore consumo della batteria.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Utilizza QUIC

Questa è una funzionalità sperimentale che consente ad AdGuard di utilizzare il protocollo crittografico avanzato QUIC. Presenta molti vantaggi, ma il più notevole è che può migliorare la qualità di connessione in condizioni non ideali, ad esempio, utilizzando Internet mobile o connettendosi a reti Wi-Fi pubbliche.

### Esclusioni app

![Aggiungere un'app alle esclusioni](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. Se desideri escludere certe applicazioni dal tunnel, inseriscile nell'elenco delle **Esclusioni dell'app**.

## Altre schede

### Informazioni

La scheda **Informazioni** fornisce le informazioni sulla versione corrente di AdGuard VPN per Windows, un pulsante di aggiornamento e i collegamenti al sito web, l'EULA e la Politica sulla privacy di AdGuard VPN.

### Account

Qui puoi trovare le informazioni sullo stato della tua licenza, nonché un collegamento al tuo profilo personale di AdGuard, dove puoi gestire i tuoi abbonamenti correnti e acquistarne di nuovi.

## Supporto

Questa scheda ha lo scopo di risolvere i problemi degli utenti: puoi trovarvi un collegamento alla pagina delle Domande Frequenti, segnalare un bug o lasciare un feedback ed esportare i registri se il team di supporto te li richiede.
