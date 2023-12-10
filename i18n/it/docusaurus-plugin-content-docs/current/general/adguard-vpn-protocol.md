---
title: 'How the AdGuard VPN protocol works'
sidebar_position: 4
---

Il nostro protocollo è utilizzato da [tutte le applicazioni mobili e desktop di AdGuard VPN](https://adguard-vpn.com/welcome.html). Scarica uno qualsiasi dei nostri prodotti e utilizzalo sapendo che i tuoi dati sono protetti nel modo più sicuro.

## Perché abbiamo sviluppato il protocollo di AdGuard VPN

Per anni, ci siamo concentrati sullo sviluppo di tutti i tipi di app di blocco degli annunci ed estensioni per browser. E, nel 2019, abbiamo deciso di sviluppare il nostro servizio VPN, apparentemente all'improvviso. When, in reality, there were a few reasons that prompted us to do so.

- Le app mobili di AdGuard avevano problemi di compatibilità con le app VPN. Normalmente, due app mobili basate sulla VPN non possono funzionare contemporaneamente: in casi rari su iOS, e mai su Android. Poiché le app di blocco degli annunci di AdGuard utilizzano la VPN locale per filtrare il traffico di rete, utilizzarle insieme a qualsiasi app VPN sarebbe fuori discussione. Ecco perché abbiamo ritenuto lo sviluppo di una VPN interna come l'unica soluzione fattibile che potesse garantire la compatibilità: dopo aver applicato un po' di magia, le due app riescono a funzionare in contemporanea, come un unico servizio VPN.
- Secondo, la VPN sembrava più che rilevante per la nostra filosofia e le nostre priorità. Il nostro obiettivo principale è proteggere la privacy degli utenti e, questo, è esattamente ciò a cui servono le VPN.
- Infine, negli anni di sviluppo del software di AdGuard, siamo diventati esperti nel filtraggio del traffico di rete. Ciò ci ha consentito di introdurre qualcosa di nuovo, invece di diventare l'ennesima VPN ambigua.

Dall'inizio, abbiamo deciso che AdGuard VPN avrebbe presentato una differenza fondamentale dai suoi concorrenti: avremmo sviluppato e distribuito un protocollo VPN interno che non avrebbe forzato gli utenti a scegliere tra sicurezza e velocità.

## Svantaggi dei protocolli VPN popolari

Abbiamo sviluppato il protocollo di AdGuard VPN vedendo gli svantaggi dei protocolli VPN popolari (OpenVPN, WireGuard, IPSec, etc.):

- Sono fcilmente rilevabili e bloccabili al livello della rete.
- If you try to "conceal" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it's additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage — due to the use of TCP, there is a need for additional confirmation of delivery.

Utilizzando qualsiasi protocollo VPN popolare, ci troviamo sempre di fronte a un compromesso: veloce ma facile da rilevare, rispetto che lento.

## What's great about the AdGuard VPN protocol

- È *quasi impossibile distinguerlo dal traffico HTTPS norrmale*, ossia, la connessione al server di AdGuard VPN ha lo stesso aspetto della connessione a un normale sito web.
- Per la crittografia utilizziamo **HTTPS (TLS)**, che assolve perfettamente questa mansione. È il metodo crittografico più popolare al mondo e le librerie che lo implementano sono controllate costantemente per la sicurezza.

Alcuni protocolli VPN esistenti, inoltre, gestiscono l'attività crittografica ed essi (e quindi, l'utilizzo di una VPN) sono difficili da rilevare. Ma, ciò, solitamente avviene al prezzo di una velocità ridotta. This doesn't happen in our case, thanks to several solutions.

- We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed.
- Unlike others, the AdGuard VPN protocol *operates with data and not with packets*. Ciò significa che AdGuard VPN stabilisce un "tunnel" separato per ogni connessione, ogni flusso HTTP/2 corrisponde a una singola connessione. AdGuard VPN trasferisce i dati attraverso questo tunnel. Ciò ci consente di velocizzare l'operazione risparmiando sui pacchetti di conferma, perché possiamo bufferizzare i dati di svariati pacchetti in un singolo pacchetto, prima di inviarlo al server VPN (o dal server al client). Meno pacchetti ci sono, minori conferme sono necessarie.
