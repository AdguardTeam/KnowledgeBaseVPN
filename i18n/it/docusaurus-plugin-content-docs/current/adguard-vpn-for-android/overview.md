---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per Android?

Una VPN è il strumento ideale che fornisce sicurezza e anonimato ogni volta che navighi in Internet. [Come funziona?](/general/how-vpn-works) Senza entrare nei dettagli tecnici, possiamo dire che la VPN crea un tunnel crittografato sicuro tra il computer o il dispositivo mobile dell'utente e un server VPN remoto. In questo modo viene preservata la riservatezza dei dati, così come l'anonimato dell'utente, perché un osservatore terzo vede l'indirizzo IP del server VPN e non l'IP effettivo dell'utente.

**La VPN è spesso utilizzata per:**

- Mantenere i dati personali al sicuro anche durante l'utilizzo del Wi-Fi pubblico
- Impedire il tracciamento delle attività online mascherando l'indirizzo IP
- Nascondere la vera geolocalizzazione per rimanere anonimi

AdGuard VPN per Android può fare tutto questo per te e persino offrire qualcosa di unico. Per scoprire perché AdGuard VPN è l'opzione migliore, leggi [questo articolo](/general/why-adguard-vpn).

## Come iniziare a utilizzare AdGuard VPN per Android

Innanzitutto, scarica AdGuard VPN da [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e accedi al tuo account AdGuard. Nel caso in cui non ce l'hai, dovresti [crearlo](https://auth.adguard.com/login.html). Puoi accedere direttamente con le credenziali del tuo account AdGuard. Oppure fallo tramite Google o Facebook, se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email.

## Schermata principale

Nella schermata principale sono presenti due barre che riflettono lo stato dell'applicazione (Connesso/Disconnesso) e la modalità di Esclusioni selezionata ([Generale/Selettiva](#lists-of-exclusions)). Nella stessa schermata sono presenti anche un pulsante *Connettere/Disconnettere* e un elenco di server disponibili.

Ogni server ha la sua posizione e il suo ping rate, che descrivono il tempo di risposta del server. Più bassa è questa velocità, più veloce è la connessione. Le opzioni più veloci sono sempre visualizzate in cima all'elenco che comprende più di 50 località in dozzine di paesi. È possibile collegarsi al server più veloce toccando il pulsante *Connettere/Disconnettere* o scegliendo una posizione.

## Esclusioni

Abbiamo fatto tutto il possibile per semplificare la gestione degli elenchi di esclusione dei siti e delle app. AdGuard VPN funzionerà solo dove preferisci.

### Elenchi di esclusioni

Gli elenchi di esclusioni ti aiutano di selezionare i siti per i quali la VPN deve essere abilitata e quelli per i quali deve essere disabilitata. Per accedere alla sezione *Esclusioni*, tocca la seconda icona a sinistra nella parte inferiore dello schermo.

Esistono due modalità: in *Modalità generale* i siti dall'elenco delle esclusioni sono esclusi e in *Modalità selettiva*, saranno gli unici in cui AdGuard VPN funziona.

Puoi aggiungere domini (es. `google.com`) o sottodomini (es. `*.google.com`) di siti web alle *Esclusioni* in tre modi: inserirli manualmente nell'app o direttamente dal browser cliccando sul pulsante *Condividi* e selezionando AdGuard VPN nell'elenco aperto di seguito, o dei elenchi integrati divisi per categorie.

![Esclusioni](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Ci sono alcune sfumature nell'aggiunta manuale dei domini. Ad esempio, se escludi manualmente il dominio `yahoo.com`, anche tutti i `sottodomini *.yahoo.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello, come `yahoo.jp` o `yahoo.fr`, non saranno esclusi. Oppure puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non entrerà nell'elenco. In questo caso, è più sicuro utilizzare gli elenchi di servizi integrati, poiché inseriamo tutti i sottodomini relativi a ciascuna piattaforma.

:::

Poiché puoi abilitare i sottodomini nelle liste di servizi, abbiamo aggiunto caselle che riflettono lo stato di ciascun servizio - puoi vederle nella schermata principale di *Esclusioni* a sinistra di ogni nome di servizio: lo stato **completamente abilitato** è contrassegnato da un segno di spunta bianco su sfondo verde, **completamente disabilitato** — con una casella grigia e **parzialmente abilitato**, il che significa che uno o più parametri sono stati modificati — con un quadrato verde su sfondo bianco. Buone notizie: puoi sempre tornare alla visualizzazione predefinita degli elenchi di servizi nel caso in cui tu abbia eliminato o disabilitato qualsiasi dominio da lì.

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Un'altra caratteristica utile è l'*Importazione/Esportazione di esclusioni*. Ci sono solo quattro passi per raggiungere l'obiettivo:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esportare*. L'archivio `adguard_vpn_exclusions.zip` verrà scaricato.
2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi *Generale* e *Selettivo*. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.
3. Durante il trasferimento tra dispositivi diversi, non dimenticare di inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Windows al tuo Android, assicurati d'inviare prima il file `.zip` al tuo Android.
4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trova la sezione appropriata, fai clic sul pulsante *Importa* e seleziona l'archivio.

![Importazione/Esportazione *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

### Impostazioni app

Come abbiamo già detto, non solo i siti web possono essere facilmente aggiunti alle esclusioni. Scegli per quali applicazioni hai bisogno di AdGuard VPN e per quali no. Tocca l'icona accanto all'icona *Liste esclusioni* nella parte inferiore dello schermo per aprire le impostazioni delle app. Per impostazione predefinita, AdGuard VPN funziona con tutte le app, ma è possibile attivare il cursore accanto a qualsiasi app dell'elenco e disattivare AdGuard VPN per essa.

Se la *Modalità di compatibilità * con AdGuard è abilitata, puoi gestire le app solo tramite il Blocco AdGuard. Pertanto, quando si tocca il pulsante, si apre l'applicazione AdGuard.

![Impostazioni delle app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Impostazioni

È possibile accedere alle *Impostazioni* premendo l'icona dell'ingranaggio in basso a destra dello schermo. La prima sezione contiene le *Impostazioni app*: configura AdGuard VPN per Android in base alle tue esigenze selezionando diverse opzioni lì.

![Impostazoni delle app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Avvio automatico di AdGuard VPN

Il cursore spostato a destra abilita l'avvio automatico di AdGuard VPN dopo l'avvio del dispositivo.

### Server DNS

Lo scopo del [Sistema di nome di dominio](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) (DNS) è tradurre i nomi dei siti web in qualcosa che i browser possano comprendere, come gli indirizzi IP. Questo lavoro viene eseguito dai server DNS. AdGuard VPN per Android offre una scelta di diversi server DNS, ciascuno con qualità speciali. Ad esempio, [AdGuard DNS](https://adguard-dns.io/kb/) rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre Adguard DNS Family Protection combina le funzioni di AdGuard DNS con SafeSearch e il blocco dei contenuti per adulti. C'è anche un'opzione per aggiungere un server DNS personalizzato.

### Protezione automatica

Questa funzione abilita AdGuard VPN automaticamente quando il tuo dispositivo si connette a una rete cellulare o Wi-Fi.

### Kill Switch

Puoi impostare la funzione Kill Switch sul tuo dispositivo Android seguendo semplici istruzioni sullo schermo. Perché dovresti farlo? Se per qualche motivo la tua connessione VPN si interrompe improvvisamente mentre stai utilizzando una rete mobile o un Wi-Fi pubblico, Kill Switch interromperà automaticamente la connessione Internet, impedendo agli aggressori di sequestrare le tue informazioni.

Si noti che se Kill Switch è attivo, le *Impostazioni Apps* e *Esclusioni* non funzionano.

### Tema

È possibile scegliere il tema dell'app predefinito del sistema, scuro o chiaro.

![Tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Impostazioni avanzate

Nelle *Impostazioni avanzate*, puoi trovare cinque sezioni. È possibile *Aiutarci a diventare migliori* selezionando l'interruttore nel blocco superiore. Questa azione consentirà ad AdGuard VPN di raccogliere rapporti sugli arresti anomali, dati tecnici e quelli d'interazione. Queste informazioni arriveranno in forma anonima.

La sezione *Modalità operativa* consente di scegliere una delle tre opzioni: VPN, Proxy e Modalità compatibilità. In modalità *VPN* tutto il traffico viene instradato automaticamente tramite AdGuard VPN. Quando la *Modalità proxy* (SOCKS5) è attiva, AdGuard VPN segue un server proxy locale, utilizzabile da altre app per instradarvi il proprio traffico. Scegli questa opzione solo se sai cosa stai facendo. La *Modalità di compatibilità* abilitata consente AdGuard VPN e il Blocco AdGuard di lavorare insieme.

:::note

Alcune funzionalità dii AdGuard VPN sono disabilitate in *Modalità compatibilità*: la selezione del server DNS, Kill Switch e Protezione automatica. Inoltre, per gestire il tunneling dell'applicazione è necessario aprire l'applicazione Blocco AdGuard.

:::

Le due sezioni successive sono *Livello di registrazione* e *Informazioni diagnostiche*. Per quanto riguarda la prima opzione, non è consigliabile abilitare il livello di registrazione esteso o estremo a meno che non sia richiesto dal nostro team di supporto. Le informazioni diagnostiche, informazioni tecniche memorizzate localmente sul dispositivo e sulle connessioni (indirizzo IP, ID, ping, ecc.), possono essere inviate a noi in caso di problemi tecnici.

L'ultima sezione di *Impostazioni avanzate* è *Impostazioni di basso livello*. Ti invitiamo a non entrare in questa sezione a meno che tu non sia altamente qualificato o ti sia stato chiesto di farlo dal nostro team di supporto. Qui è possibile abilitare la registrazione dell'interfaccia TUN o il protocollo IPv6 sull'interfaccia VPN, scegliere una porta del server proxy o una versione del protocollo Internet da utilizzare.

:::note Compatibilità

L'opzione *Abilita IPv6* è disponibile soltanto per le reti che supportano IPv6.

:::

### Supporto

Nella sezione *Supporto* puoi lasciare un feedback, segnalare un bug o esportare i log e le informazioni di sistema per un ulteriore invio all'helpdesk.
