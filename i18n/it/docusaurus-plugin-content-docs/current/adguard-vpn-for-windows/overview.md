---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per Windows?

Una VPN, acronimo di "virtual private network", è un servizio che rende sicura la tua connessione Internet e ti aiuta a rimanere anonimo online. Come funziona? Ogni volta che visiti un sito web senza utilizzare una VPN, il tuo ISP lo vede. Sa chi sei e cosa stai cercando e può raccogliere e vendere questi dati. A sua volta, il sito web a cui sei arrivato può anche tracciare la tua attività. Quando abiliti un'applicazione VPN, reindirizza il tuo traffico attraverso un tunnel crittografato a un server VPN remoto, garantendo la tua privacy: l'ISP non sa da dove hai inviato una richiesta e il sito non sa da dove provieni.

**Cosa fa AdGuard VPN per Windows**

* Protegge dall'intercettazione del traffico di rete (spoofing). AdGuard VPN crea un tunnel crittografato tra il dispositivo e un server remoto. Tutto il vostro traffico Internet passa attraverso questo tunnel, in modo che i vostri dati siano protetti lungo il percorso. E grazie all'esclusivo [protocollo di AdGuard](/general/adguard-vpn-protocol.mdx), è garantita una connessione veloce e sicura.

* Nasconde il tuo indirizzo IP. Il tuo vero indirizzo IP è la chiave per i tuoi dati personali per i criminali informatici. Il tuo nome, indirizzo e-mail, numero di telefono, informazioni sulla carta di credito possono cadere nelle mani di truffatori se non nascondi il tuo IP. Con AdGuard VPN, come abbiamo già detto, tutto il traffico passa attraverso un tunnel crittografato e arriva al server VPN. Pertanto, dall'esterno sembra che il tuo dispositivo abbia l'indirizzo IP di detto server VPN.

* Nasconde la tua posizione reale. Selezionando uno dei server VPN di AdGuard, verrai immediatamente "teletrasportato" nella sua posizione. Cosa ti dà questo? Ad esempio, la possibilità di prenotare un hotel a tariffe locali o di nascondersi dalla pubblicità con geotargeting.

AdGuard VPN per Windows ha molti vantaggi, quindi abbiamo dedicato [un articolo a parte](/general/why-adguard-vpn.md) a loro. Qui, tuttavia, vogliamo concentrarci maggiormente sull'applicazione stessa e su come funziona.

## Come iniziare a utilizzare AdGuard VPN per Windows

Per iniziare a utilizzare AdGuard VPN per Windows, scaricare l'applicazione dal [nostro sito web](https://adguard-vpn.com/welcome.html). L'installazione non richiede più di un minuto e vedrai una finestra di dialogo in cui dovrai selezionare almeno una casella applicando i termini dell'Accordo per gli utenti e l'Informativa sulla privacy. E sta a te decidere se vuoi che AdGuard raccolga dati anonimi sull'utilizzo della tua app. Alla fine il programma ti chiederà di accedere, tramite il [account AdGuard](https://auth.adguard.com/login.html) o tramite social network (Apple, Google, Facebook). È tutto, ora puoi utilizzare AdGuard VPN per Windows.

## Schermata principale

![Pagina iniziale di AdGuard VPN per Windows](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

L'elemento più evidente nella **Schermata iniziale** è il pulsante di connessione/disconnessione di AdGuard VPN. Qui è possibile vedere la [modalità](#exclusions) in cui l'applicazione è in esecuzione e, sotto, il server selezionato. Sul lato destro dello schermo troverai tutte le posizioni disponibili. La posizione più veloce, cioè quella con il ping più breve, viene mostrata in cima all'elenco.

Nella parte superiore dello schermo è presente un pannello di navigazione con quattro schede: **Pagina iniziale**, **Esclusioni**, **Supporto**, **Impostazioni**.

## Esclusioni

AdGuard VPN per Windows può funzionare in due modalità: **Generale** o **Selettiva**. Cosa significa questo? Se si desidera che l'applicazione funzioni ovunque tranne che per alcuni siti web, attivare la **Modalità generale** ed elencare i siti web che si desidera escludere dal tunnel. La **Modalità selettiva** ha l'effetto opposto: attiva AdGuard VPN solo sui siti web specificati nell'elenco di esclusione. Si noti che gli elenchi di esclusioni di queste due modalità sono indipendenti l'uno dall'altro.

![Esclusioni](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

È possibile aggiungere manualmente i siti web alle esclusioni **manuali** inserendo i loro nomi di dominio. L'applicazione offre anche la possibilità di scegliere i siti web popolari **dall'elenco**.

![Aggiungere esclusione](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Aggiungere esclusioni dall'elenco](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Quando si aggiungono domini manualmente, è necessario tenere conto di alcune sfumature. Ad esempio, se escludi manualmente il dominio `google.com`, anche tutti i sottodomini `*.google.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure si può aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

Si consiglia di utilizzare l'opzione **Dall'elenco**. Gli siti web sono divisi in otto categorie: Social network, Servizi di messaggistica, Servizi di streaming video e musicale, Videogiochi, Shopping, Motori di ricerca e Strumenti di comunicazione di lavoro. Abbiamo posizionato i servizi più popolari lì, inclusi tutti i nomi di dominio e sottodomini relativi a ciascuna piattaforma.

### Importare/esportare elenchi delle esclusioni

Per esportare l'elenco delle esclusioni da AdGuard VPN per Windows al computer, fare clic su **Esportare esclusioni**, selezionare la cartella in cui verrà memorizzato l'elenco e fare clic su **Salva**. Verrà scaricato un archivio `exclusions.zip` con due file `.txt`, uno per ciascuna delle liste - **Generale** e **Selettivo**. Puoi modificarli aggiungendo nuove esclusioni o eliminando quelle vecchie.

Per trasferire gli elenchi di esclusioni su un altro dispositivo, inviare il file `.zip` alla sua destinazione. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni, fare clic su *Esclusioni*, quindi su *Importa esclusioni* e selezionare l'archivio precedentemente inviato.

## Impostazioni

![Impostazioni](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

La quarta scheda della barra delle schede dell'applicazione contiene sezioni che consentono di personalizzare l'applicazione. Vediamo più da vicino due di essi: **Impostazioni app** e **Split tunneling**.

### Impostazioni app

![Impostazioni app](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

Nella sezione **Impostazioni app** è possibile impostare la lingua dell'app e attivare **Kill Switch**, che blocca l'accesso a Internet se la connessione VPN cade. Questo è necessario per evitare che gli intrusi possano accedere ai vostri dati se vi trovate senza protezione VPN mentre siete connessi a una rete Wi-Fi o mobile pubblica.

È inoltre possibile attivare le seguenti funzioni con un solo clic: **Aggiornamento automatico**, **Avvio di AdGuard VPN all'avvio di Windows**, **Connessione automatica all'avvio dell'app**, e consentire ad AdGuard di raccogliere dati anonimi sull'utilizzo dell'app in modo che la team AdGuard riceve l'informazione sugli problemi potenziali dell'utilizzo. Qui puoi anche cambiare il tema in **Chiaro**, **Sistema** o **Scuro**.

Nella parte inferiore della pagina sono presenti due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

La scheda **Server DNS** consente di aggiungere il tuo proprio server DNS. Puoi impostare un server DNS da qualsiasi provider. Consigliamo di aggiungere [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), un server in grado di proteggere da pubblicità, tracciamento e phishing oltre alle funzioni standard.

#### Impostazioni avanzate

È assolutamente possibile utilizzare AdGuard VPN per Windows senza toccare le impostazioni avanzate, ma queste possono essere utili se si è disposti a dedicare un po' di tempo per imparare cosa fanno.

**Modalità operativa**

Nonostante esistano due modalità operative - VPN e SOCKS5 - ti consigliamo di utilizzare solo quella scelta di default (VPN). Quando la modalità **VPN** è attivata, tutto il traffico del dispositivo verrà indirizzato attraverso AdGuard VPN, mentre in modalità **SOCKS5** AdGuard VPN utilizza un server proxy locale che può essere utilizzato da altre applicazioni per reindirizzare il proprio traffico.

**Livello di registrazione**

È possibile scegliere tra due livelli di registrazione: **Registrazione di default** e **Registra tutto**. La prima opzione è abilitata per impostazione predefinita. L'opzione **Registra tutto** dovrebbe essere attivata solo se il nostro team di supporto ti ha chiesto di farlo. L'utilizzo dell'applicazione in questa modalità per un periodo di tempo prolungato comporta un aumento del consumo della batteria.

Tutti i registri vengono memorizzati localmente sul dispositivo e, se necessario, possono essere inviati al team di assistenza.

**Usa QUIC**

Si tratta di una funzione sperimentale che consente ad AdGuard di utilizzare il protocollo di crittografia avanzato QUIC. Ha molti vantaggi, ma il più notevole è che può migliorare la qualità della connessione in condizioni non ideali, ad esempio quando si utilizza Internet mobile o quando ci si connette a reti Wi-Fi pubbliche.

### Esclusioni app

![Aggiunta di un'applicazione alle esclusioni](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN non solo cripta il traffico dei propri browser, ma anche quello delle altre applicazioni installate sul suo dispositivo. Se desideri escludere alcuni applicazioni dal tunnel, inseriscile nell'elenco **Esclusioni app**.

## Altre schede

### Informazioni

La scheda **Informazioni** fornisce informazioni sulla versione corrente di AdGuard VPN per Windows, un pulsante di aggiornamento e url utili: sito web AdGuard VPN, forum, EULA e Informativa sulla privacy.

### Account

Qui sono informazioni sullo stato della tua licenza, nonché un collegamento al tuo account AdGuard personale, dove puoi gestire i tuoi abbonamenti attuali e acquistarne di nuovi.

## Supporto

Questa scheda ha lo scopo di risolvere le domande degli utenti: lì puoi trovare un link alla pagina delle FAQ, segnalare un bug o lasciare un feedback ed esportare i log se il team di supporto ti chiede di farlo.
