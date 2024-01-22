---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per Android?

Una VPN è il strumento ideale che fornisce sicurezza e anonimato ogni volta che navighi in Internet. [Come funziona?](/general/how-vpn-works) Senza approfondire, possiamo dire che la VPN crea una connessione sicura e crittografata (detta tunnel), tra il dispositivo di un utente e un server VPN remoto. In questo modo viene preservata la riservatezza dei dati, così come l'anonimato dell'utente, perché un osservatore terzo vede l'indirizzo IP del server VPN e non l'IP effettivo dell'utente.

**La VPN è spesso utilizzata per:**

- Mantenere i dati personali al sicuro anche durante l'utilizzo del Wi-Fi pubblico
- Impedire il tracciamento delle attività online mascherando l'indirizzo IP
- Nascondere la vera geolocalizzazione per rimanere anonimi

AdGuard VPN per Android può fare tutto questo per te e persino offrire qualcosa di unico. Per scoprire perché AdGuard VPN è l'opzione migliore, leggi [questo articolo](/general/why-adguard-vpn).

## Come iniziare a utilizzare AdGuard VPN per Android

Innanzitutto, scarica AdGuard VPN da [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e accedi al tuo account AdGuard. Nel caso in cui non ce l'hai, dovresti [crearlo](https://auth.adguard.com/login.html). Puoi accedere direttamente con le credenziali del tuo account AdGuard. Oppure fallo tramite Google o Facebook, se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email.

## Schermata principale

La schermata principale riflette lo stato della VPN (Connessa/Disconnessa). Inoltre, è presente il pulsante *Connetti/Disconnetti* e un elenco dei server disponibili.

Ogni server ha la sua posizione e il suo ping rate, che descrivono il tempo di risposta del server. Minore è questo rapporto, più è veloce la connessione. I server più veloci appaiono sempre in cima all'elenco, consistente in oltre 50 posizioni, in dozzine di paesi. Puoi connetterti al server più veloce toccando sul pulsante *Connetti*, o selezionando una posizione.

## Esclusioni

Abbiamo fatto tutto il possibile per semplificare la gestione degli elenchi di esclusione dei siti e delle app. AdGuard VPN funzionerà solo dove preferisci.

### Elenchi di esclusioni

Gli elenchi d'esclusione ti consentono di gestire la connessione VPN per siti web e app specifici. Per accedere alle *Esclusioni*, tocca sulla seconda icona da sinistra, in fondo alla schermata. Per accedere alla sezione *Esclusioni*, tocca la seconda icona a sinistra nella parte inferiore dello schermo.

Di default, AdGuard VPN funziona per tutti i siti web e app, tranne quelli aggiunti alle esclusioni, ma puoi facilmente passare all'altra modalità.

#### Per i siti web

Puoi aggiungere domini (es. `google.com`) o sottodomini (es. `*.google.com`) di siti web alle *Esclusioni* in tre modi: inserirli manualmente nell'app o direttamente dal browser cliccando sul pulsante *Condividi* e selezionando AdGuard VPN nell'elenco aperto di seguito, o dei elenchi integrati divisi per categorie.

![Esclusioni](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Ci sono alcune sfumature nell'aggiunta manuale dei domini. Ad esempio, se escludi manualmente il dominio `yahoo.com`, anche tutti i `sottodomini *.yahoo.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello, come `yahoo.jp` o `yahoo.fr`, non saranno esclusi. Oppure puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non entrerà nell'elenco. In questo caso, è più sicuro utilizzare gli elenchi di servizi integrati, poiché inseriamo tutti i sottodomini relativi a ciascuna piattaforma.

:::

Poiché puoi abilitare i sottodomini negli elenchi dei servizi, abbiamo aggiunto delle caselle che riflettono lo stato di ogni servizio: puoi vederle nella schermata principale di *Esclusioni*, alla sinistra del nome di ogni servizio:

- **Completamente abilitata** è indicato da un segno di spunta bianco su uno sfondo verde
- **Parzialmente abilitata** (sottodomini abilitati senza il dominio principale), è segnato da un quadrato verde su uno sfondo bianco
- **Completamente disabilitata** è segnato da una casella di spunta vuota

 Buone notizie: puoi sempre tornare alla visualizzazione predefinita degli elenchi di servizi nel caso in cui tu abbia eliminato o disabilitato qualsiasi dominio da lì.

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Un'altra caratteristica utile è l'*Importazione/Esportazione di esclusioni*. Ci sono solo quattro passi per raggiungere l'obiettivo:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esportare*. L'archivio `adguard_vpn_exclusions.zip` verrà scaricato.
2. Nell'archivio, sono presenti due file `.txt`, uno per ognuno di questi elenchi. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.
3. Durante il trasferimento tra dispositivi diversi, non dimenticare di inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Windows al tuo Android, assicurati d'inviare prima il file `.zip` al tuo Android.
4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trova la sezione appropriata, fai clic sul pulsante *Importa* e seleziona l'archivio.

![Importazione/Esportazione *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Per le app

Come abbiamo già detto, non solo i siti web possono essere facilmente aggiunti alle esclusioni. Scegli per quali app necessiti di AdGuard VPN, e per quali no.

In *Modalità integrata*, puoi gestire le app soltanto tramite AdGuard Ad Blocker.

![Esclusioni di app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Impostazioni

È possibile accedere alle *Impostazioni* premendo l'icona dell'ingranaggio in basso a destra dello schermo. La prima sezione contiene le *Impostazioni app*: configura AdGuard VPN per Android in base alle tue esigenze selezionando diverse opzioni lì.

![Impostazioni delle app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Avvio automatico di AdGuard VPN

Il cursore spostato a destra abilita l'avvio automatico di AdGuard VPN dopo l'avvio del dispositivo.

### Server DNS

I server DNS traducono i nomi dei siti web in qualcosa di comprensibile dai browser, cioè, gli indirizzi IP. AdGuard VPN per Android offre un'ampia selezione di server DNS, ognuno con qualità speciali. Ad esempio, [AdGuard DNS](https://adguard-dns.io/kb/) rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre AdGuard DNS Protezione Famiglia combina le funzioni di AdGuard DNS con Ricerca sicura e con il blocco dei contenuti per adulti. C'è anche un'opzione per aggiungere un server DNS personalizzato.

### Protezione automatica

Questa funzione abilita AdGuard VPN automaticamente quando il tuo dispositivo si connette a una rete cellulare o Wi-Fi.

### Kill Switch

Puoi impostare la funzione Kill Switch sul tuo dispositivo Android seguendo semplici istruzioni sullo schermo. Perché dovresti farlo? Se per qualche motivo la tua connessione VPN si interrompe improvvisamente mentre stai utilizzando una rete mobile o un Wi-Fi pubblico, Kill Switch interromperà automaticamente la connessione Internet, impedendo agli aggressori di sequestrare le tue informazioni.

Si noti che se Kill Switch è attivo, le *Impostazioni Apps* e *Esclusioni* non funzionano.

### Tema

You can choose the system default, system dynamic, dark or light theme of the app.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Impostazioni avanzate

Nelle *Impostazioni avanzate*, puoi trovare quattro sezioni.

La *Modalità operativa* ti consente di specificarre come viene instradato il tuo traffico. Esistono tre modalità: VPN, SOCKS5 e Modalità integrata. Nella modalità *VPN*, tutto il traffico passa per AdGuard VPN. In modalità *SOCKS5*, AdGuard VPN esegue un server proxy locale, utilzzabile dalle altre app per l'instradamento del traffico. La *Modalità integrata* consente ad AdGuard VPN e ad AdGuard Ad Blocker di funzionare insieme.

:::note

Alcune funzionalità di AdGuard VPN sono disabilitate in *Modalità integrata*: i server DNS, il Kill Switch, la Protezione automatica e le Esclusioni app. Puoi gestire la protezione DNS e instradare le app attraverso il tuo proxy di AdGuard VPN nell'app AdGuard Ad Blocker.

:::

Le due sezioni successive sono *Livello di registrazione* e *Informazioni diagnostiche*. Per quanto riguarda la prima opzione, non è consigliabile abilitare il livello di registrazione esteso o estremo a meno che non sia richiesto dal nostro team di supporto. Le informazioni diagnostiche, informazioni tecniche memorizzate localmente sul dispositivo e sulle connessioni (indirizzo IP, ID, ping, ecc.), possono essere inviate a noi in caso di problemi tecnici.

L'ultima sezione di *Impostazioni avanzate* è *Impostazioni di basso livello*. Ti invitiamo a non entrare in questa sezione a meno che tu non sia altamente qualificato o ti sia stato chiesto di farlo dal nostro team di supporto. Qui è possibile abilitare la registrazione dell'interfaccia TUN o il protocollo IPv6 sull'interfaccia VPN, scegliere una porta del server proxy o una versione del protocollo Internet da utilizzare.

:::note Compatibilità

L'opzione *Abilita IPv6* è disponibile soltanto per le reti che supportano IPv6.

:::

### Supporto

Nella sezione *Supporto* puoi lasciare un feedback, segnalare un bug o esportare i log e le informazioni di sistema per un ulteriore invio all'helpdesk.
