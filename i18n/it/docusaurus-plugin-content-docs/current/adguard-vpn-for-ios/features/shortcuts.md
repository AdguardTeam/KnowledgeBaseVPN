---
title: Comandi Rapidi
sidebar_position: 1
sidebar_label: Comandi Rapidi
---

Comandi Rapidi, uno strumento integrato in iOS, semplifica la gestione delle connessioni senza dover aprire AdGuard VPN. Puoi aggiungere un comando rapido _Connetti_ o _Disconnetti_ sulla schermata Home, nel Centro di controllo o in un widget, oppure impostare una frase per Siri per effettuare la connessione con la voce.

Comandi Rapidi può includere anche automazioni più complesse. Ad esempio, potrebbe capitare che la tua app bancaria non funzioni con la VPN attiva, ma tu voglia tenerla sempre attiva per Instagram, oppure che desideri che la VPN si disattivi automaticamente quando ti connetti al Wi-Fi di casa. I Comandi Rapidi ti consentono di automatizzare queste situazioni.

## Prima di iniziare

Assicurati che:

- Hai installato l'app "Comandi Rapidi" sul tuo iPhone o iPad;
- AdGuard VPN è installato;
- Hai effettuato l'accesso ad AdGuard VPN e hai installato un profilo VPN.

## Connettiti o disconnettiti con un solo tocco

AdGuard VPN mette a disposizione due comandi rapidi rapidi predefiniti: _Connetti_ e _Disconnetti_. _Connetti_ attiva la VPN e si connette all'ultima posizione utilizzata. _Disconnetti_ disattiva la VPN. Li troverai entrambe nella sezione _Comandi Rapidi App_ dell'app Comandi Rapidi.

Troverai questi comandi rapidi nell’app Comandi Rapidi: su iOS 16, cerca sotto _Comandi rapidi delle app_. Aggiungi uno qualunque di essi nei tre posti elencati nella lista sottostante.

Su iOS 27, trova i comandi rapidi di AdGuard VPN nella _Libreria_ dell'app Comandi in _App_ → _AdGuard VPN_. Se l'app Comandi Rapidi si apre su _Tutti i comandi rapidi_, tocca la freccia indietro nell'angolo in alto a sinistra per tornare alla _Libreria_.

![Comandi rapidi su iOS 27](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcuts_library_27.png)

### Schermata iniziale

Per creare un comando rapido sulla schermata iniziale, segui le brevi istruzioni riportate nell'app AdGuard VPN. (_Impostazioni_ → _Comandi Rapidi_ → _Aggiungi comandi rapidi alla schermata Home_).

![Istruzioni nell'app \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in-app-home-screen.png)

Le istruzioni variano nelle versioni precedenti di iOS. Ecco le istruzioni per iOS 16:

1. Apri l'app "Comandi Rapidi" e tocca il pulsante con il segno più (+).
2. Toccare _Aggiungi azione_ e selezionare _AdGuard VPN_.
3. Seleziona _Gestisci connessione VPN_ e, nella schermata successiva, tocca _Aggiungi comando rapido_ e _Attiva connessione VPN_.

![Aggiungi comando rapido](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut_ios_16.png)

Ecco come aggiungere il collegamento alla schermata iniziale.

1. Tieni premuto il comando rapido e tocca _Condividi_ → _Aggiungi alla schermata Home_.
2. Se necessario, personalizza il nome e l'icona del comando rapido, quindi tocca _Aggiungi_. Il comando rapido apparirà sulla schermata iniziale come un'icona 1x1.

![Aggiungi alla schermata Home](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen_ios_16.png)

### Centro di controllo

È possibile aggiungere un comando rapido ad AdGuard VPN al Centro di controllo per accedervi rapidamente da qualsiasi punto del dispositivo.

1. Apri il Centro di controllo. Su un iPhone con Face ID, scorri verso il basso dalla parte in alto a destra. Su un iPhone dotato di tasto Home, scorri verso l'alto partendo dal bordo inferiore.
2. Tieni premuto su un'area vuota e tocca _Aggiungi un controllo_.
3. Trova _Comandi Rapidi_ nell'elenco e tocca _Esegui comando rapido_, quindi tocca _Scegli_ e seleziona la scorciatoia di AdGuard VPN. Il comando rapido apparirà ora nel tuo Centro di controllo.

Nota: i passaggi esatti potrebbero variare a seconda della versione di iOS in uso.

![Aggiungi un comando rapido al Centro di controllo](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Tieni premuta a lungo su un'area vuota della schermata Home finché le app non iniziano a tremolare, quindi tocca _Modifica_ nell'angolo in alto a sinistra → _Aggiungi widget_.
2. Cerca _Comandi Rapidi_ nell'elenco e scegli una dimensione per il widget. Ti consigliamo di sceglierne uno in grado di visualizzare almeno due comandi rapidi.
3. Tocca _Aggiungi widget_.
4. In modalità modifica, tocca il widget per aprire il menu di configurazione, imposta _Cartella_ su _Personalizzata_ e assegna _Connetti a VPN_ a uno slot e _Disconnetti da VPN_ all'altro.

![Aggiungi il collegamento come widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## Basta un tocco per aprire qualsiasi app con la VPN attiva

Se hai bisogno che la VPN sia attiva solo per una determinata app e nient’altro, puoi creare un comando rapido personalizzato che attiverà AdGuard VPN e aprirà l’app che desideri, il tutto con un solo tocco. Ecco come configurarlo.

1. Apri l'app "Comandi Rapidi", tocca il pulsante con il segno più (+) e cerca "AdGuard VPN". Aggiungi l'azione _Stato VPN_.
2. Aggiungi un'azione _Se_. Comandi Rapidi compilano la condizione per te: prende lo stato della VPN dalla fase precedente e lo confronta con _Connesso_. All'interno, aggiungi _Apri app_ e imposta l'app che desideri, ad esempio YouTube.
3. Sotto _Altrimenti_, aggiungi tre azioni in ordine: _AdGuard VPN_ → _Connetti a VPN_, _Attendi_ (impostato su 2 secondi) e _Apri app_ (la stessa app di cui sopra).
4. Tocca il nome in alto per impostare un'icona e un nome personalizzati, quindi prova il comando rapido con il pulsante di riproduzione.
5. Aggiungi il comando rapido alla schermata iniziale toccando il nome e selezionando _Aggiungi alla schermata iniziale_.

![Aggiungi comando rapido personalizzato](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Connettiti o disconnettiti con Siri

Nell'app AdGuard VPN, vai su _Impostazioni_ → _Comandi rapidi_ → _Configura frasi Siri_. A questo punto avrai due opzioni: _Registra una frase per collegarti_ oppure _Registra una frase per disconnetterti_.

![Connettiti con Siri](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Scegli _Registra una frase per connetterti_ o _Registra una frase per disconnetterti_, quindi pronuncia la frase che desideri, ad esempio “Ehi Siri, connettiti ad AdGuard VPN”. Una volta registrata, ripeti la stessa frase a Siri in qualsiasi momento per riprodurla.

## Automatizzazione di AdGuard VPN per app specifiche

Alcune app, come quelle bancarie, non funzionano se la VPN è attiva. Imposta due automazioni in modo che la VPN si disattivi mentre utilizzi l'app e si riattivi una volta terminato. Se configurata correttamente, l'automazione può risultare più comoda rispetto all'avvio manuale di un collegamento: non è necessario toccare un'icona sulla schermata Home per aprire il comando rapido, basta semplicemente aprire l'app. Inoltre, è possibile includere diverse app in un’unica automazione. Puoi utilizzare le automazioni per attivare o disattivare AdGuard VPN quando apri un'app, quando chiudi un'app e quando ti connetti o ti disconnetti dalla rete Wi-Fi di casa.

[Come configurare le automazioni sul tuo iPhone o iPad](/adguard-vpn-for-ios/features/automation/)
