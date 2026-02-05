---
title: Guida alle impostazioni di basso livello
sidebar_position: 6
---

## Come trovare le impostazioni di basso livello

:::caution

Modificare le _Impostazioni di basso livello_ può causare problemi con le prestazioni di AdGuard VPN, interrompere la connessione alla rete globale o compromettere sicurezza e riservatezza. Questa sezione dovrebbe essere aperta soltanto se sai cosa stai facendo, o se ti è stato richiesto di farlo dal nostro gruppo di assistenza.

:::

Per accedere alle _Impostazioni di Basso Livello_, apri l'app di AdGuard VPN e tocca sull'icona dell'ingranaggio nell'angolo inferiore destro dello schermo. Quindi, scegli _Generale_ → _Avanzate_ → _Impostazioni di Basso Livello_.

## Impostazioni di basso livello

Di seguito elenchiamo tutte le impostazioni di basso livello disponibili in AdGuard VPN per Android e spieghiamo cosa fanno. Ti esortiamo ancora una volta a non manomettere queste impostazioni alla cieca, anche se hai letto questa guida. Trattala come un promemoria per quando sai cosa stai facendo ma vuoi ripassare le specifiche.

### Protocollo AdGuard VPN

Per impostazione predefinita, il protocollo AdGuard VPN usa il protocollo di trasporto HTTP/2 per evitare il rilevamento e mantenere alta velocità. Ciò significa che AdGuard VPN individua automaticamente quale protocollo (HTTP2/TLS o HTTP3/QUIC) offre le prestazioni migliori e passa immediatamente a quello. Questo migliora la velocità e la stabilità della VPN, il che è particolarmente utile nelle regioni in cui l'uso della VPN è limitato o inaffidabile.

Se sai cosa stai facendo, puoi impostare AdGuard VPN in modo che utilizzi solo il protocollo HTTP2/TLS o HTTP3/QUIC anziché _Selezione automatica_. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) è un protocollo relativamente nuovo, pertanto può essere meno stabile. Tuttavia, se la tua connessione a Internet è instabile (ad esempio, quando ti connetti al Wi-Fi pubblico), fornisce una migliore sicurezza e aumenta la velocità di connessione grazie alla tecnologia [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking).

Inoltre, qui trovi un articolo dedicato al protocollo: [Come funziona il Protocollo AdGuard VPN](https://trusttunnel.org/).

### Includere il gateway Wi-Fi nei percorsi VPN

Se quest'impostazione è abilitata, gli indirizzi IP del gateway saranno aggiunti ai percorsi della VPN, quando si è connessi alla Wi-Fi.
Se la disabiliti, allora la configurazione del percorso (intervalli IP che sono filtrati) sarà modificata. Il gateway Wi-Fi della rete a cui l'utente è collegato sarà escluso e quindi non sarà soggetto al filtraggio.

Questa impostazione è abilitata per impostazione predefinita.

### Cattura pacchetti (PCAP)

Se quest'impostazione è abilitata, AdGuard VPN creerà un file `.pcap` con un timestamp per il suo nome (ad esempio, `1682599851461.pcap`) nella cartella della cache dell'app. Questo file elenca tutti i pacchetti di rete trasferiti tramite la VPN ed è analizzabile con il [programma Wireshark](https://www.wireshark.org/).

### Watchdog

Watchdog monitora lo stato del processo VPN per controllare se ci sono qualunque problemi a esso correlati. Quando abilitato, AdGuard VPN si proteggerà da app aggressive di risparmio batteria che altrimenti potrebbero interromperlo.

### Versione IP preferita

Qui puoi impostare gli indirizzi del punto finale. Ci sono tre opzioni: IPv4, IPv6 o IPv4 e IPv6 (se il tuo dispositivo supporta entrambi).

### Intervalli di rete IPv4 esclusi dalla VPN

L'instradamento VPN per gli intervalli IPv4 elencati in questa sezione sarà disabilitato.

### Interfaccia IPv6

Dopo aver abilitato questa opzione, avrai un indirizzo IPv6 mentre instradi il traffico attraverso la connessione VPN. Puoi impostare le esclusioni negli _intervalli IPv6 esclusi dalla VPN_.

### Intervalli IPv6 esclusi dalla VPN

L'instradamento VPN per gli intervalli IPv6 elencati in questa sezione sarà disabilitato.

:::note

Devi prima abilitare l'impostazione _interfaccia IPv6_ in _Impostazioni avanzate_, altrimenti questa impostazione non sarà applicata.

:::

### MTU (unità massima di trasmissione)

Qui puoi impostare la dimensione massima (in byte) dei pacchetti dati usati nella VPN locale. L'intervallo consigliato è di 1500-9000 byte.

### App escluse

Puoi elencare qui gli UID (identificatori unici) o i nomi dei pacchetti delle app che desideri escludere dall'instradamento VPN.
A differenza delle app aggiunte alle _Esclusioni_ regolari, il traffico delle app aggiunte a _App escluse_ non va al servizio VPN locale sul tuo dispositivo. Invece, va direttamente alla destinazione.

### Porta del Server Proxy

Qui puoi impostare la porta del server proxy SOCKS5 interno. L'opzione predefinita è 1080.
