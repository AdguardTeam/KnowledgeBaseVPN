---
title: Come raccogliere e inviare i registri
sidebar_position: 1
---

Esistono svariati metodi per raccogliere i registri dell'estensione AdGuard VPN Browser, ma qualunque sia la tua scelta, gli stessi dati saranno raccolti. Nell'estensione, i registri non sono divisi in standard e di debug. E sono fornite diverse opzioni per raccogliere i registri, per quei casi in cui un problema che riscontri ti impedisce di utilizzare l'una o l'altra istruzione.

## Raccogliere e inviare registri tramite la sezione *Segnala un bug*

1. Apri l'estensione AdGuard VPN Browser, se possibile, ripeti le azioni che hanno portato all'errore. Nota l'orario esatto in cui si è verificato tale errore.
1. Apri le *Impostazioni* cliccando sull'icona del menu hamburger (☰) → *Supporto* → *Segnala un bug*.
1. Nel modulo aperto, inserisci automaticamente il tuo indirizzo email o inseriscine un altro e descrivi l'errore riscontrato, includendo l'orario in cui si è verificato. Se non riesci a riprodurre il problema, specifica il più accuratamente possibile l'ultima volta in cui si è verificato.
1. Assicurati che sia presente una spunta affianco a *includere il rapporto diagnostico nel messaggio* e tocca su *Invia*. Così, invierai i registri insieme alla segnalazione del bug.

## Raccogliere e inviare i registri tramite il pulsante *Esporta registri*

1. Apri l'estensione AdGuard VPN Browser, se possibile, ripeti le azioni che hanno portato all'errore. Nota l'orario esatto in cui si è verificato tale errore.
1. Clicca con il destro sull'icona dell'estensione AdGuard VPN Browser.
1. Nel menu aperto, clicca su *Esporta registri*.
1. Di conseguenza, il file di registro sarà salvato sul tuo dispositivo, nel formato `txt`.

Ora che hai raccolto i registri, devi consegnarli al nostro team di sviluppo. Per farlo:

1. Segnala un bug su GitHub. Le istruzioni dettagliate sulla creazione di un ticket su GitHub si possono trovare in questo articolo.
1. Invia un archivio con i registri e l'orario di riproduzione a `devteam@adguard.com` e allega un collegamento al tuo ticket di GitHub. Inoltre, puoi aggiungere un archivio con i registri e l'orario di riproduzione su Google Drive e condividerlo con `devteam@adguard.com`, allegando il collegamento di Google Drive al tuo ticket su GitHub.

## Raccogliere e inviare i registri tramite gli strumenti per sviluppatori del browser

### Chrome

1. Apri l'estensione AdGuard VPN Browser, se possibile, ripeti le azioni che hanno portato all'errore. Nota l'orario esatto in cui si è verificato tale errore.
1. Vai a `chrome://extensions`
1. Attiva la *modalità sviluppatore*

    ![La modalità sviluppatore *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Clicca su `background.html`

    ![Sfondo *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Apri la *scheda Console*

    ![La scheda Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Apri il menu contestuale e clicca su *Salva come…*

    ![Salva come *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Ora che hai raccolto i registri, devi consegnarli al nostro team di sviluppo. Per farlo:

1. Segnala un bug su GitHub. Le istruzioni dettagliate sulla creazione di un ticket su GitHub si possono trovare in questo articolo.
1. Invia un archivio con i registri e l'orario di riproduzione a `devteam@adguard.com` e allega un collegamento al tuo ticket di GitHub. Inoltre, puoi aggiungere un archivio con i registri e l'orario di riproduzione su Google Drive e condividerlo con `devteam@adguard.com`, allegando il collegamento di Google Drive al tuo ticket su GitHub.

### Firefox

1. Apri l'estensione AdGuard VPN Browser, se possibile, ripeti le azioni che hanno portato all'errore. Nota l'orario esatto in cui si è verificato tale errore.
1. Vai ad `about:addons`
1. Clicca su *Addon di debug*

    ![Addon di debug *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Clicca su *Ispeziona*

    ![Ispeziona *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Vai alla scheda *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Clicca su *Salva tutti i Messaggi nel File*

    ![Salva *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Ora che hai raccolto i registri, devi consegnarli al nostro team di sviluppo. Per farlo:

1. Segnala un bug su GitHub. Le istruzioni dettagliate sulla creazione di un ticket su GitHub si possono trovare in questo articolo.
1. Invia un archivio con i registri e l'orario di riproduzione a `devteam@adguard.com` e allega un collegamento al tuo ticket di GitHub. Inoltre, puoi aggiungere un archivio con i registri e l'orario di riproduzione su Google Drive e condividerlo con `devteam@adguard.com`, allegando il collegamento di Google Drive al tuo ticket su GitHub.
