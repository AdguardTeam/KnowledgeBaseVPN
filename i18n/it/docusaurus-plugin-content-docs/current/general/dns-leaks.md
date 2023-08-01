---
title: 'Cos''è una fuga di dati DNS?'
sidebar_position: 9
---

Una volta installata una VPN, vuoi esser sicuro che non si verificheranno fughe di dati che condurranno alla tua de-anonimizzazione. AdGuard VPN protegge in modo attendibile il tuo traffico e i tuoi dati da occhi indiscreti. Tuttavia, in certi casi potresti sospettare la presenza di fughe di dati DNS nel tuo servizio VPN. Spiegheremo da dove provengono queste preoccupazioni e perché sono infondate.

## Cosa sono le fughe di dati DNS?

Quando utilizzi una VPN, una connessione a un server DNS potrebbe viaggiare al di fuori del tunnel VPN crittografato e, il tuo traffico, potrebbe diventare visibile all'ISP.

In altre parole, ogni volta che apri un sito web, il tuo browser invia una richiesta al server DNS dell'ISP e, in cambio, riceve l'indirizzo IP del sito web richiesto. Così, il tuo ISP visualizza tutta la tua attività online e può tracciarti.

## Come rilevare le fughe di dati DNS

Esiste ogni tipo di servizio di controllo dell'anonimato per rilevare le fughe di dati DNS, come `whoer.net`. Dovrebbe essere chiaro che, questi stessi siti web, non sono perfetti e i loro algoritmi non sono chiari, a differenza delle loro intenzioni di intimidire gli utenti con fughe di dati immaginarie e, potenzialmente, vendere dei servizi.

Alcuni siti web di scansione di sicurezza, considerano la coincidenza dell'indirizzo IP dell'utente e dell'indirizzo IP del server DNS, come un risultato "buono", indicando che non sono presenti fughe di dati. In realtà, una tale corrispondenza potrebbe indicare l'utilizzo di una VPN. Quando la VPN è disabilitata e le richieste vanno al server DNS del tuo ISP, l'indirizzo IP del server DNS e il tuo, non coincidono.

## Perché non ci sono fughe di dati DNS su AdGuard VPN

Se abiliti AdGuard VPN sul tuo dispositivo ed esegui un controllo su uno qualsiasi dei siti Web di scansione, esso rileva che le richieste DNS vanno ai server di [AdGuard DNS](https://adguard-dns.io). Tuttavia, questo non è considerabile come una fuga di dati.

L'utilizzo di un server non di filtraggio di AdGuard DNS, è impostato di default su AdGuard VPN. Ciò assicura che le tue richieste non vadano ai server DNS del tuo ISP, il che significa che restano private e anonime online.

Inoltre, AdGuard DNS è un servizio DNS molto popolare, utilizzato da oltre 50 milioni di persone. Cosa significa questo per te? Immagina la seguente situazione: il consueto servizio VPN utilizza il server DNS situato allo stesso indirizzo IP del server VPN. Il numero dei suoi utenti supera difficilmente i 1000.

E, nel caso di AdGuard DNS, ti "fonderai" con 50 milioni di utenti, quindi, nessuno potrà tracciarti per il solo fatto che utilizzi quel server DNS.

## Come configurare un server DNS personalizzato su AdGuard VPN

Esistono molti server DNS pubblici popolari, di [fornitori DNS ben noti](https://adguard-dns.io/kb/general/dns-providers). Alcuni di essi possono soltanto svolgere i propri compiti diretti, fornendo gli indirizzi IP dei domini richiesti; altri, possono fare di più.

For example, AdGuard DNS removes ads and protects your device from being tracked, and AdGuard DNS Family Protection combines AdGuard DNS features with Safe search and Parental control.

Puoi selezionare qualsiasi server DNS e configurarlo su AdGuard VPN:

* in AdGuard VPN for Windows: *Settings* → *App settings* → *DNS servers*
* in AdGuard VPN for Mac: *Settings* → *App settings* → *DNS servers*
* su AdGuard VPN per Android: *Impostazioni* (icona dell'ingranaggio) → *Impostazioni app* → *Server DNS*
* in AdGuard VPN for iOS: *Settings* (gear icon) → *App settings* → *DNS server*
* in AdGuard VPN Browser extension: the hamburger menu icon → *Settings* → *DNS server*
