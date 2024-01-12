---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

AdGuard VPN per Mac è un servizio VPN desktop. AdGuard VPN è completamente compatibile con il Blocco AdGuard possono essere utilizzati insieme e funzioneranno senza problemi. Vediamo quali caratteristiche ha da offrire.

Tieni presente che **non puoi utilizzare AdGuard VPN per Mac a meno che tu non abbia effettuato l'accesso al tuo account AdGuard**. Puoi accedere con il tuo account AdGuard o con un account esterno, ovvero tramite Apple, Google o Facebook. Assicurati che il tuo account esterno sia associato allo stesso indirizzo e-mail del tuo account AdGuard. Se nel suo account AdGuard è presente un abbonamento adeguato, questo verrà attivato automaticamente sull'applicazione desktop. Non hai ancora un account AdGuard? Crealo [qui](https://auth.adguard.com/registration.html).

:::note Compatibilità

AdGuard VPN per Mac è correntemente supportato sulle versioni di macOS a partire da macOS Sierra (10.15).

:::

## Schermata principale

![Schermata Home](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

La prima scheda è la *Schermata iniziale*. Qui puoi vedere lo stato corrente di AdGuard VPN e la [modalità esclusioni](#exclusions), la posizione scelta (se abilitata) e il suo ping. Il ping è il tempo di risposta di un server VPN. Di conseguenza, minore è questo numero, più è veloce la connessione. Se la VPN è disattivata, l'ultima posizione a cui ti sei connesso viene visualizzata di seguito. Le posizioni più veloci con i ping più bassi vengono visualizzate nell'angolo in alto a destra dello schermo. Di seguito è possibile visualizzare l'elenco completo delle località. È possibile trovare la posizione desiderata facilmente attraverso la funzione di ricerca.

:::note

Gli utenti gratuiti possono connettersi solo a determinati luoghi, mentre altri sono bloccati. Inoltre, c'è un limite di traffico mensile di 3 GB nella versione gratuita.

:::

## Esclusioni

![Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

AdGuard VPN presenta svariate funzionalità che lo rendono unico e, una di esse, è decisamente *Esclusioni*. Di default, AdGuard VPN opererà su tutti i siti web e in tutte le app, tranne quelle dall'elenco delle esclusioni. Ma puoi passare all'altra modalità, quindi AdGuard VPN funzionerà soltanto sui siti web e nelle app dall'elenco delle esclusioni.

![Schermata Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Inoltre puoi non solo aggiungere siti web a Esclusioni, ma anche scegliere tra gli elenchi di servizi popolari. Gli elenchi sono suddivisi in otto categorie: Social network, Servizi di messaggistica, Servizi di streaming video e musicale, Videogiochi, Shopping, Motori di ricerca e Strumenti di comunicazione di lavoro. Tutti questi servizi possono essere aggiunti alle Esclusioni con un solo clic! È particolarmente comodo se si utilizza la modalità selettiva.

L'elenco di esclusione può essere facilmente configurato. Se avete aggiunto un dominio e alcuni dei suoi sottodomini, questi saranno raggruppati all'interno di quello principale. Quando si aggiunge un dominio root (`example.com`) viene aggiunta anche la sua maschera (`*.example.com`).

Se hai aggiunto un servizio, modificato o rimosso qualcosa e ora desideri ripristinare le impostazioni iniziali, premi semplicemente *Ripristina impostazioni predefinite* accanto al dominio: questa azione ripristinerà eventuali domini mancanti e selezionerà tutte le caselle di controllo.

Inoltre, gli elenchi di esclusioni già pronti possono essere trasferiti ad altri dispositivi con AdGuard VPN installato. Per esportare le esclusioni, seguire le istruzioni in 4 passaggi descritte di seguito:

1. Aprire AdGuard VPN sul dispositivo da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.
2. Ci sono due file `.txt` all'interno dell'archivio, ciascuno per gli elenchi Generale e Selettivo. Aggiungi loro altre esclusioni, elimina quelle esistenti, rinomina i file (ma ne parleremo più avanti) o lascia semplicemente l'archivio con i file così com'è.
3. Durante il trasferimento tra dispositivi diversi, non dimenticare di inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Mac al tuo iPhone, assicurati d'inviare prima il file `.zip` al tuo smartphone.
4. Aprire AdGuard VPN sul dispositivo/nel browser in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio. Fatto!

:::note

I file d'archivio da altri dispositivi sono similmente importabili sul tuo AdGuard VPN per Mac.

:::

## Supporto

![Schermata di supporto](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

La terza scheda è la schermata *Supporto*. Trova le risposte a qualsiasi domanda nelle [Domande Frequenti](https://adguard-vpn.com/welcome.html#faq) o nella [Base di conoscenza](/), segnala un bug se ne riscontri uno o [discuti di AdGuard su una qualsiasi delle piattaforme](https://adguard.com/discuss.html). E sentiti liber* di [lasciare un feedback sul nostro prodotto](https://surveys.adguard.com/vpn_mac/form.html), lo apprezzeremmo.

## Impostazioni

![Impostazioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Finalmente, arriviamo alla scheda Impostazioni. Nella sezione *Informazioni sul programma* puoi vedere la versione corrente di AdGuard VPN, controllare gli aggiornamenti, visitare il nostro sito web ufficiale e conoscere l'EULA e l'informativa sulla privacy di AdGuard. Nella sezione *Informazioni sulla licenza* puoi eseguire l'upgrade da gratuito a illimitato, gestire il tuo abbonamento o disconnetterti. E, soprattutto, da qui puoi accedere alle *Impostazioni generali*.

### Impostazioni app

![Impostazioni app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

Le prime quattro funzionalità di base rendono l'applicazione più comoda e intuitiva, ovvero *Kill Switch*, *Aggiornamento automatico*, *Avvia AdGuard VPN all'accesso* e *Connessione automatica all'avvio dell'app*. Inoltre, è possibile scegliere tra il tema chiaro, scuro e di sistema - quest'ultimo si adatta al tema del Mac.

Inoltre, puoi consentire ad AdGuard VPN di raccogliere e inviare rapporti anonimi sugli arresti anomali, dati tecnici e d'interazione, per poterci aiutare a migliorare l'app. Infine, ma non per importanza, puoi esportare i registri dal tuo Mac. Questo può essere utile se vuoi allegare i registri al tuo messaggio al supporto.

### Server DNS

![Server DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Qui puoi aggiungere uno (o più) server DNS personalizzati per non fare affidamento su un server DNS fornito dal tuo ISP per impostazione predefinita. Consigliamo di aggiungere AdGuard DNS, che non soltanto crittografa il tuo traffico DNS, ma identifica inoltre le richieste ai siti web dannosi e le reindirizza a un "buco nero".

### Impostazioni avanzate

![Impostazioni avanzate](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

#### Livello di registrazione

Esistono solo due livelli di registrazione, ma ti consigliamo vivamente di utilizzare il primo, quello predefinito. La seconda opzione (registrazione estesa) dovrebbe essere impostata solo per registrare uno strano comportamento del programma dopo aver consultato il nostro supporto tecnico. Se hai abilitato il livello di registrazione esteso, assicurati di tornare a quello predefinito dopo aver registrato i registri.

#### Nascondi icona della barra dei menu

Anche se questa opzione si trova in *Impostazioni avanzate*, può essere attivata senza esitazione. Puoi nascondere l'icona AdGuard VPN dalla barra dei menu, non impedirà alla nostra app di funzionare in background.

#### Utilizza QUIC (sperimentale)

Il protocollo di comunicazione QUIC è l'ultima versione avanzata di HTTP. Attiva o disattiva l'interruttore per ottenere una migliore qualità di connessione in condizioni non ideali, ad esempio durante l'utilizzo dei dati mobili in metropolitana o in ascensore.
