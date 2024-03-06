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

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

The most noticeable item on the **Home screen** is the AdGuard VPN Connect/Disconnect button, below which you can see the selected server. On the right side of the screen you will see a list of available locations. La posizione più veloce, ossia quella con il ping più basso, è mostrata in cima all'elenco. There is also a refresh button that you can click if any locations are offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**. **Support**, and **Settings**.

## Esclusioni

By default, AdGuard VPN for WIndows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Puoi aggiungere i siti web alle esclusioni **manualmente**, inserendone i nomi di dominio. L'app, inoltre, ti offre un'opzione per scegliere i siti web popolari **dall'elenco**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Aggiungendo manualmente i domini, dovresti tenere conto di alcune sfumature. Ad esempo, se escludi manualmente il dominio `google.com`, tutti i sottodomini `*.google.com` saranno anch'essi aggiunti all'elenco delle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure, puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

:::

Consigliamo di utilizzare l'opzione **Dall'elenco**. I siti web sono raggruppati in otto categorie: Social, Messaggistica, Servizi di streaming video e musica, Giochi, Shopping, Motori di ricerca e Strumenti di comunicazione per lavoro. Abbiamo messo lì i servizi più popolar, inclusi tutti i nomi di dominio e sottodomini correlati a ogni piattaforma.

### Importare/esportare elenchi delle esclusioni

Per esportare l'elenco delle esclusioni da AdGuard VPN per Windows al tuo computer, clicca su **Esporta le esclusioni**, selezona la cartella in cui sarà archiviato l'elenco, e clicca su **Salva**. Sarà scaricato un archivio `exclusions.zip` con due file `.txt`, uno per ogni elenco. Puoi modificarli aggiungendo nuove esclusioni o eliminando quelle vecchie.

Sul dispositivo di destinazione, apri AdGuard VPN, clicca su *Esclusioni* e seleziona *Siti web* o *App*. Clicca su *Importa esclusioni* e seleziona l'archivio ricevuto.

## Stats

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## Impostazioni

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### Impostazioni app

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Nella sezione delle **Impostazioni dell'app**, puoi impostare la lingua dell'app, nonché abilitare il **Kill Switch**, che bloccherà l'accesso a Internet, se la tua connessione VPN si disconnette. Ciò è necessario per impedire che degli intrusi ottengano i tuoi dati, se ti trovi senza la protezione della VPN, quando si è connessi a una rete Wi-Fi pubblica o mobile.

Inoltre, puoi attivare le seguenti funzonalità in un solo click: **Aggiornamento automatico**, **Avvia AdGuard VPN all'avvio di Windows**, **Connessione automatica al lancio dell'app** e consentire ad AdGuard di raccogliere dati anonimi sull'utilizzo dell'app, così che il team di AdGuard riceva le informazioni sui potenziali problemi di utilizzabilità. Qui, inoltre, puoi cambiare il tema in **Chiaro**, **Sistema** o **Scuro**.

In fondo alla pagina ci sono due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. Puoi configurare un server DNS da qualsiasi fornitore. Consigliamo di aggiungere [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), un server capace di proteggere da inserzioni, tracciamento e phishing, oltre alle funzionalità standard.

#### Impostazioni avanzate

È interamente possibile utilizzare AdGuard VPN per Windows senza mai toccare le Impostazioni avanzate, ma possono essere utili se desideri prenderti del tempo per imparare cosa fanno.

##### Modalità operativa

Sebbene esistano due modalità operative, VPN e SOCKS5, ti consigliamo di utilizzare soltanto quella scelta di default (VPN). Quando la **Modalità VPN** è abilitata, tutto il traffico del tuo dispositivo sarà indirizzato tramite AdGuard VPN, mentre in **Modalità SOCKS5**, AdGuard VPN utiilzza un server proxy locale, utilizzabile da altre applicazioni per reindirizzare il proprio traffico.

##### Livello di registrazione

Sono disponibili due livelli di registrazione tra cui scegliere: **Registrazione predefinita** e **Registra tutto**. La prima opzione è abilitata di default. L'opzione **Registra tutto** dovrebbe essere attivata soltanto se il nostro team di supporto ti ha chiesto di farlo. Utilizzare l'app in questa modalità per un periodo di tempo esteso, risulterà in maggiori consumi della batteria.

Tutti i registri sono memorizzati localmente sul tuo dispositivo, e puoi inviarli al team di supporto se necessario.

##### Utilizza QUIC

Questa è una funzionalità sperimentale che consente ad AdGuard di utilizzare il protocollo di crittografia QUIC avanzato. Presenta molti vantaggi, ma il più notevole è che può migliorare la qualità di connessione in condizioni non ideali, ad esempio, utilizzando Internet mobile o connettendosi a reti Wi-Fi pubbliche.

#### Use WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Subnet exclusions

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## Altre schede

### Informazioni

La scheda **Informazioni** fornisce le informazioni sulla versione corrente di AdGuard VPN per Windows, un pulsante di aggiornamento e i link al sito web di AdGuard VPN, all'EULA e alla Politica sulla Privacy.

### Account

Qui puoi trovare le informazioni sullo stato della licenza, oltre a un collegamento al tuo profilo personale di AdGuard, dove puoi gestire i tuoi abbonamenti correnti e acquistarne di nuovi.

## Supporto

Questa scheda ha lo scopo di risolvere i problemi degli utenti: puoi trovarvi un collegamento alla pagina delle Domande Frequenti, segnalare un bug o lasciare un feedback, ed esportare i registri se il team di supporto ti chiede di farlo.
