---
title: Come configurare l'automazione VPN AdGuard per le app per iPhone e iPad
sidebar_position: 2
sidebar_label: Come impostare l'automazione di AdGuard VPN
---

Non è presente alcuna esclusione di app su AdGuard VPN per iOS. Tuttavia, è possibile automatizzare AdGuard VPN per le app su iPhone e iPad.

## Configurazione dell'attivazione automatica di AdGuard VPN

Se hai bisogno di una VPN per una o più app, configura AdGuard VPN in modo che si accenda e si spenga automaticamente quando le apri e le chiudi. Accedere alla scheda Esclusioni, selezionare la modalità Generale e seguire le istruzioni. Qui descriviamo come creare l'automazione per Twitter, ma puoi scegliere qualsiasi altra app.

![Istruzioni. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Scaricare [l'applicazione *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) dall'App Store e accedere alla sezione *Automazione* toccando l'icona dell'orologio nella parte inferiore dello schermo.
2. Toccare il pulsante *Crea automazione personale*, quindi trovare *App* nell'elenco che si apre e toccarlo.
3. Nella finestra successiva, assicurarsi che l'opzione *È aperta* sia selezionata, quindi toccare *Scegliere* per scegliere l'applicazione.

![Istruzioni. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the app (in our case it’s Twitter) and select it. Tocca su *Fatto*, quindi su *Avanti* nell'angolo superiore destro della schermata. Nella finestra aperta, tocca su *Aggiungi azione*.

![Istruzioni. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Iniziare a digitare "AdGuard VPN" e selezionare l'applicazione AdGuard VPN. Nella nuova finestra toccare *Impostare una connessione VPN*.

![Istruzioni. Parte 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Assicurarsi che le variabili dicano *Attivare* la connessione VPN *On* e toccare *Avanti*.
7. Nella finestra successiva, spostare il cursore accanto all'opzione *Chiedi prima di eseguire* nella posizione inattiva. Conferma la tua scelta, quindi tocca su *Fatto*.

Ora hai un nuovo scenario: AdGuard VPN verrà abilitato automaticamente quando avvii l'app Twitter. Ora è necessario creare un altro comando per far sì che AdGuard VPN si spenga automaticamente quando si chiude l'applicazione.

## Configurazione dell'arresto automatico di AdGuard VPN

![Istruzioni. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Nella stessa app delle *Scorciatoie*, inizia a creare una nuova automatizzazione: tocca su *Automatizzazione* → *Crea automatizzazione personale* → *App*.
2. Assicurarsi che sia selezionata l'opzione *È chiuso* e deselezionare la casella sotto l'opzione adiacente. Quindi fare clic su *Scegliere*.

![Istruzioni. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Iniziare a inserire *Twitter* e selezionare l'app. Quindi premi *Fatto* nell'angolo superiore destro dello schermo. Toccare *Aggiungi azione* e selezionare AdGuard VPN.

![Istruzioni. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. Nella nuova finestra toccare *Impostare connessione VPN*.
5. Quindi toccare la parola *On* in modo che si trasformi nella parola *Off*, quindi toccare *Next* nell'angolo superiore destro dello schermo.
6. Disattivare l'opzione *Chiedi prima di eseguire* e confermare la selezione. Quindi tocca *Fatto* nell'angolo in alto a destra dello schermo per completare il processo.

Tutto fatto! AdGuard VPN verrà ora attivato sul dispositivo ogni volta che si apre l'app di Twitter e disattivato quando la si chiude. È possibile ripetere la stessa procedura per qualsiasi altra applicazione.
