---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per Android?

Una VPN è il strumento ideale che fornisce sicurezza e anonimato ogni volta che navighi in Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. In questo modo viene preservata la riservatezza dei dati, così come l'anonimato dell'utente, perché un osservatore terzo vede l'indirizzo IP del server VPN e non l'IP effettivo dell'utente.

**La VPN è spesso utilizzata per:**

- Mantenere i dati personali al sicuro anche durante l'utilizzo del Wi-Fi pubblico
- Impedire il tracciamento delle attività online mascherando l'indirizzo IP
- Nascondere la vera geolocalizzazione per rimanere anonimi

AdGuard VPN per Android può fare tutto questo per te e persino offrire qualcosa di unico. Per scoprire perché AdGuard VPN è l'opzione migliore, leggi [questo articolo](/general/why-adguard-vpn).

## Come iniziare a utilizzare AdGuard VPN per Android

Innanzitutto, scarica AdGuard VPN da [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e accedi al tuo account AdGuard. Nel caso in cui non ce l'hai, dovresti [crearlo](https://auth.adguard.com/login.html). Puoi accedere direttamente con le credenziali del tuo account AdGuard. Oppure fallo tramite Google o Facebook, se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email.

## Schermata principale

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Ogni server ha la sua posizione e il suo ping rate, che descrivono il tempo di risposta del server. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Esclusioni

Abbiamo fatto tutto il possibile per semplificare la gestione degli elenchi di esclusione dei siti e delle app. AdGuard VPN funzionerà solo dove preferisci.

### Elenchi di esclusioni

#### For websites

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Per accedere alla sezione *Esclusioni*, tocca la seconda icona a sinistra nella parte inferiore dello schermo.

There are two modes: in *General mode*, websites from the list of exclusions are excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.

Puoi aggiungere domini (es. `google.com`) o sottodomini (es. `*.google.com`) di siti web alle *Esclusioni* in tre modi: inserirli manualmente nell'app o direttamente dal browser cliccando sul pulsante *Condividi* e selezionando AdGuard VPN nell'elenco aperto di seguito, o dei elenchi integrati divisi per categorie.

![Esclusioni](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Ci sono alcune sfumature nell'aggiunta manuale dei domini. Ad esempio, se escludi manualmente il dominio `yahoo.com`, anche tutti i `sottodomini *.yahoo.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello, come `yahoo.jp` o `yahoo.fr`, non saranno esclusi. Oppure puoi aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non entrerà nell'elenco. In questo caso, è più sicuro utilizzare gli elenchi di servizi integrati, poiché inseriamo tutti i sottodomini relativi a ciascuna piattaforma.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Buone notizie: puoi sempre tornare alla visualizzazione predefinita degli elenchi di servizi nel caso in cui tu abbia eliminato o disabilitato qualsiasi dominio da lì.

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Un'altra caratteristica utile è l'*Importazione/Esportazione di esclusioni*. Ci sono solo quattro passi per raggiungere l'obiettivo:

1. Aprire AdGuard VPN sul dispositivo/nel browser da cui si desidera esportare gli elenchi di esclusioni. Trovare la sezione appropriata e fare clic sul pulsante *Esportare*. L'archivio `adguard_vpn_exclusions.zip` verrà scaricato.
2. There are two `.txt` files inside the archive, one for each of the lists. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.
3. Durante il trasferimento tra dispositivi diversi, non dimenticare di inviare il file `.zip` al dispositivo per l'importazione. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Windows al tuo Android, assicurati d'inviare prima il file `.zip` al tuo Android.
4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trova la sezione appropriata, fai clic sul pulsante *Importa* e seleziona l'archivio.

![Importazione/Esportazione *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Come abbiamo già detto, non solo i siti web possono essere facilmente aggiunti alle esclusioni. Choose for which apps you need AdGuard VPN and for which you don't. By default, AdGuard VPN works for all apps, but you can easily switch to the other mode.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Impostazioni

È possibile accedere alle *Impostazioni* premendo l'icona dell'ingranaggio in basso a destra dello schermo. La prima sezione contiene le *Impostazioni app*: configura AdGuard VPN per Android in base alle tue esigenze selezionando diverse opzioni lì.

![Impostazioni delle app *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Avvio automatico di AdGuard VPN

Il cursore spostato a destra abilita l'avvio automatico di AdGuard VPN dopo l'avvio del dispositivo.

### Server DNS

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. C'è anche un'opzione per aggiungere un server DNS personalizzato.

### Protezione automatica

Questa funzione abilita AdGuard VPN automaticamente quando il tuo dispositivo si connette a una rete cellulare o Wi-Fi.

### Kill Switch

Puoi impostare la funzione Kill Switch sul tuo dispositivo Android seguendo semplici istruzioni sullo schermo. Perché dovresti farlo? Se per qualche motivo la tua connessione VPN si interrompe improvvisamente mentre stai utilizzando una rete mobile o un Wi-Fi pubblico, Kill Switch interromperà automaticamente la connessione Internet, impedendo agli aggressori di sequestrare le tue informazioni.

Si noti che se Kill Switch è attivo, le *Impostazioni Apps* e *Esclusioni* non funzionano.

### Tema

È possibile scegliere il tema dell'app predefinito del sistema, scuro o chiaro.

![Tema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Impostazioni avanzate

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and app exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Le due sezioni successive sono *Livello di registrazione* e *Informazioni diagnostiche*. Per quanto riguarda la prima opzione, non è consigliabile abilitare il livello di registrazione esteso o estremo a meno che non sia richiesto dal nostro team di supporto. Le informazioni diagnostiche, informazioni tecniche memorizzate localmente sul dispositivo e sulle connessioni (indirizzo IP, ID, ping, ecc.), possono essere inviate a noi in caso di problemi tecnici.

L'ultima sezione di *Impostazioni avanzate* è *Impostazioni di basso livello*. Ti invitiamo a non entrare in questa sezione a meno che tu non sia altamente qualificato o ti sia stato chiesto di farlo dal nostro team di supporto. Qui è possibile abilitare la registrazione dell'interfaccia TUN o il protocollo IPv6 sull'interfaccia VPN, scegliere una porta del server proxy o una versione del protocollo Internet da utilizzare.

:::note Compatibilità

L'opzione *Abilita IPv6* è disponibile soltanto per le reti che supportano IPv6.

:::

### Supporto

Nella sezione *Supporto* puoi lasciare un feedback, segnalare un bug o esportare i log e le informazioni di sistema per un ulteriore invio all'helpdesk.
