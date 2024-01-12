---
title: Come funziona la VPN
sidebar_position: 1
---

Per capire come funziona AdGuard VPN, devi prima comprendere i principi generali del servizio VPN.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmkjgfSsIY" title="Lettore video di YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Funzionalità della VPN

Una VPN è una rete privata virtuale che aiuta a nascondere la tua posizione e a proteggere i tuoi dati sul Web. Una VPN collega un computer o un dispositivo mobile a un server VPN e utilizza l'indirizzo IP di questo server per far sembrare a un osservatore esterno che ti trovi in un altro posto. Ciò ti consente di accedere in modo sicuro a varie risorse Internet e di proteggere i tuoi dati personali.

In questo modo, una VPN svolge due importanti funzioni:

1. **Mantenimento dell'anonimato**

    Utilizzando una connessione a Internet, l'utente lascia la propria impronta digitale, poi analizzabile e utilizzabile da terze parti. Per esempio, uno dei negozi online che hai visitato può salvare la tua cronologia di ricerca e offrirti i propri prodotti basandosi su di essa, tramite le pubblicità mirate. Oppure i servizi segreti, avendo appreso la tua posizione tramite l'indirizzo IP del tuo dispositivo e avendo determinato la tua identità, possono monitorare segretamente la tua attività sul web. Inoltre, i browser web e gli ISP stessi possono utilizzare la tua cronologia di navigazione per i propri scopi, nonché venderla agli inserzionisti e fornirla alle istituzioni governative. La VPN ti consente di nascondere il tuo indirizzo IP e di sostituirlo con l'indirizzo IP del server VPN a cui sei connesso. Così, potrai mantenere la tua privacy e cercare anonimamente le informazioni sul web.

1. **Protezione dei dati**

    Se ti connetti a una rete inaffidabile o pubblica, i dati sul tuo dispositivo potrebbero divenire vulnerabili ai criminali informatici. I dettagli delle carte bancarie, i nomi utente e le password, i dati del passaporto: tutti questi dati possono essere intercettati dai truffatori online. Il tunnel VPN crittografa le informazioni che invii e ricevi dal Web, rendendole inutli nelle mani sbagliate.

## Struttura VPN

Quando ti connetti a una rete, al tuo computer o dispositivo mobile viene assegnato un numero ID univoco, o indirizzo IP. Solitamente, consiste di numeri dallo 0 al 255, separati da punti o due punti. Conoscendo questa sequenza, si può determinare la geolocalizzazione del dispositivo. L'indirizzo IP è solitamente assegnato dal tuo ISP, e sarà visibile fino alla risorsa desiderata. Per questo motivo, il server web del sito che stai visitando può registrare il tuo indirizzo IP e registrare ciò che hai richiesto. Questo registro è quindi utilizzabile principalmente per la raccolta dei dati e l'analisi del traffico.

Una VPN crea un tunnel tra il tuo dispositivo e il server della VPN. I tuoi dati passano per questo tunnel, vengono crittografati e, quindi, entrano nell'Internet aperto in una forma sicura. Dunque, il server web registra l'indirizzo IP dell'endpoint del tunnel, ovvero il server VPN, e non l'indirizzo IP reale del dispositivo. Dunque, il sito cui arrivi dopo essere passato per il tunnel VPN considererà la geolocalizzazione del server VPN che hai selezionato come la tua posizione reale. E i dati crittografati non cadranno nelle mani di inserzionisti, hacker e servizi di sicurezza.

![Struttura VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipi di protocolli VPN

I protocolli di sicurezza della VPN sono strumenti che crittografano i dati in un tunnel VPN e ti consentono di mantenere la privacy dell'utente nell'Internet aperto. Al momento, la vasta maggioranza dei servizi VPN moderni utilizza uno dei seguenti tre protocolli VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Uno dei suoi principali vantaggi è che è disponibile su gran parte dei dsipositivi e sistemi operativi e fornisce un elevato livello di sicurezza. Tuttavia, l'utilizzo dell'[incapsulamento](https://en.wikipedia.org/wiki/Encapsulation_(networking)) doppio in questo protocollo potrebbe risultare in una velocità di connessione inferiore.

1. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Questo protocollo moderno è open source, quindi i produttori di terze parti possono migliorarne e aggiornarne la tecnologia.

1. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). I suoi vantaggi principali sono la facilità d'utilizzo, l'elevata efficienza e la bassa vulnerabilità agli attacchi.

Oltre a questi protocolli VPN, ne esistono altri (ad esempio, TLS, SSTP, IKEv2), ma sono poco popolari o non soddisfano gli standard di crittografia dei dati più moderni.

Anche AdGuard VPN dispone del proprio [*protocollo*](/general/adguard-vpn-protocol). Uno dei suoi vantggi è che il traffico trasmesso utilizzando il protocollo di AdGuard VPN è difficile da distinguere da quello regolare. Il tunnel VPN somiglia al normale traffico HTTPS, quindi è estremamente difficile da rilevare e bloccare. Inoltre, si basa sui meccanismi del protocollo HTTP/2 moderno, che assicura un'elevata velocità di connessione.

## Svantaggi della VPN

Nonostante gli ovvi vantaggi, le VPN non sono perfette e presentano degli svantaggi:

### Velocità inferiore

Poiché il tuo trffico non va direttamente al server web, ma passa prima per il server VPN, la velocità della connessione VPN si riduce. Anche altri fattori influiscono sulla velocità utilizzando una VPN: il carico del server VPN, la sua larghezza di banda, la compatibilità del protocollo VPN con il tuo sistema operativo. Tutti questi fattori, oltre alla velocità della rete stessa, potrebbero influenzare l'esperienza complessiva dell'utente, di una connessione VPN.

### Blocco dell'accesso

Alcuni servizi online si impegnano molto per rilevare il traffico VPN e bloccare l'accesso agli utenti di VPN. Tuttavia, non molte VPN possono mascherarsi in modo tale da esser visti soltanto come traffico regolare. Dunque, molti tentativi di visitare un sito web in particolare senza disabilitare la VPN, si concludono con un nulla di fatto.

### Interruzione delle connessioni VPN

Un segnale debole, sovraccarico di rete, incompatibilità della VPN con un firewall, antivirus e altri programmi, un protocollo VPN obsoleto... tutto questo può causare un improvviso fallimento nella connessione VPN, specialmente con i fornitori di VPN non attendibili.

## AdGuard VPN

Il nostro servizio VPN ha svariati [vantaggi](/general/why-adguard-vpn) importanti:

- [*Protocollo VPN proprietario*](/general/adguard-vpn-protocol), che funziona in maniera stabile anche con una connessione a Internet lenta e si maschera da traffico normale, complicandone il tracciamento e bloccandolo

- [*Politica di non registrazione*](https://adguard-vpn.com/privacy.html), che significa che AdGuard VPN non raccoglie i tuoi dati personali e non li trasferisce a terze parti

- *Più di 50 server VPN in decine di paesi*

- *Facilità d'uso e ampie possibilità di personalizzazione*

Al momento, AdGuard VPN è disponibile come:

- [Estensione del browser](/adguard-vpn-browser-extension/overview) per Chrome, Edge, Firefox e Opera

- App mobile per [Android](/adguard-vpn-for-android/overview) e [iOS](/adguard-vpn-for-ios/overview)

- Applicazione desktop per [Windows](/adguard-vpn-for-windows/overview) e [Mac](/adguard-vpn-for-mac/overview)

[Scopri di più sulle funzionalità di AdGuard VPN](https://adguard-vpn.com/welcome.html)
