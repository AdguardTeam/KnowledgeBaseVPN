---
title: Automazione
sidebar_position: 2
sidebar_label: Automazione
---

L'_Automazione_ è una funzionalità nell'app Scorciatoie che esegue automaticamente un'azione per te in base alle condizioni che scegli. Ad esempio, può disattivare AdGuard VPN nel momento in cui apri un'app e riattivarla quando chiudi quell'app.

Questa funzione è utile se desideri disattivare AdGuard VPN per alcune app ma non per altre. AdGuard VPN per iOS non prevede la possibilità di escludere determinate app, quindi l'automazione è il modo più efficace per ottenere lo stesso risultato senza dover attivare e disattivare manualmente la VPN ogni volta.

Ecco come configurare un'automazione che disconnette la VPN di AdGuard quando apri un'app, e la spegne quando la chiudi.

## Disattiva AdGuard VPN quando apri un'app

1. Nell'app Scorciatoie, vai su _Automazione_ e tocca _Nuova automazione_ oppure il pulsante con il segno più (+) nell'angolo in alto a destra.
2. Scegli _App_, seleziona una o più app e spunta la casella _È aperta_.
3. Attiva l'opzione _Esegui immediatamente_ e disattiva l'opzione _Avvisa all'esecuzione_.
4. Tocca _Avanti_, seleziona AdGuard VPN e scegli _Disconnetti_.

![App automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

Per riattivare AdGuard VPN dopo aver chiuso la stessa app, ripeti i passaggi sopra indicati, ma al punto 2 seleziona _È chiusa_ e al punto 4 imposta l'azione su _Connetti_.

## Disattiva AdGuard VPN quando ti connetti alla rete Wi-Fi di casa

Se non hai bisogno di usare la VPN a casa, imposta la disattivazione automatica quando ti connetti alla rete Wi-Fi di casa e la riattivazione quando ti disconnetti.

1. Nell'app Scorciatoie, vai su _Automazione_ e tocca _Nuova automazione_ o il simbolo “+” nell'angolo in alto a destra.
2. Seleziona _Wi-Fi_, scegli _È connesso_ e seleziona la tua rete domestica.
3. Attiva le opzioni _Esegui immediatamente_ e _Esegui dopo l'interruzione della connessione_.
4. Tocca _Avanti_, seleziona AdGuard VPN e scegli _Disconnetti_.

![Wi-Fi automation \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Riattiva AdGuard VPN quando esci

Ripeti i passaggi precedenti, ma seleziona _È disconnesso_ invece di _È connesso_, attiva _Esegui immediatamente_ e imposta l'azione su _Connetti_.
