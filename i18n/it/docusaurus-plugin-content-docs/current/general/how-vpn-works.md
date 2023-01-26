---
title: Come funziona la VPN
sidebar_position: 1
---

Per capire come funziona AdGuard VPN, devi prima comprendere i principi generali del servizio VPN.

## Funzionalità della VPN

Una VPN è una rete privata virtuale che aiuta a nascondere la tua posizione e a proteggere i tuoi dati sul web. Una VPN collega un computer o un dispositivo mobile a un server VPN e utilizza l'indirizzo IP di questo server per far sembrare a un osservatore esterno che ti trovi in un altro posto. Ciò ti consente di accedere in modo sicuro a varie risorse Internet e di proteggere i tuoi dati personali.

In questo modo, una VPN svolge due importanti funzioni:

1. **Mantenere l'anonimato**

Utilizzando una connessione Internet, l'utente lascia la propria impronta digitale, che può essere analizzata e utilizzata da terzi. Ad esempio, uno dei negozi online che hai visitato può salvare la tua cronologia delle ricerche e quindi offrirti i propri prodotti basati su di essa attraverso pubblicità mirata. Oppure i servizi segreti, avendo appreso la tua posizione attraverso l'indirizzo IP del tuo dispositivo e avendo determinato la tua identità, possono monitorare segretamente la tua attività sul web. Inoltre, i browser web e gli stessi ISP possono utilizzare la cronologia di navigazione per i propri scopi, oltre a venderla agli inserzionisti e a fornirla alle istituzioni governative. La VPN consente di nascondere il proprio indirizzo IP e di sostituirlo con l'indirizzo IP del server VPN a cui si è connessi. In questo modo sarai in grado di mantenere la tua privacy e cercare in modo anonimo informazioni sul web.

2. **Protezione dei dati**

Se ti connetti a una rete inaffidabile o pubblica, i dati sul tuo dispositivo potrebbero diventare vulnerabili ai criminali informatici. Dettagli della carta di credito, nomi utente e password, dati del passaporto: tutti questi dati possono essere intercettati dai truffatori online. Il tunnel VPN crittografa le informazioni che invii e ricevi dal web, quindi non possono cadere nelle mani sbagliate.

## Struttura VPN

Quando ti connetti a una rete, al tuo computer o dispositivo mobile viene assegnato un numero ID univoco o un indirizzo IP. Di solito consiste di numeri da 0 a 255, separati da punti o due punti. Conoscendo questa sequenza, si può determinare la geolocalizzazione del dispositivo. L'indirizzo IP viene solitamente impostato dal tuo ISP e sarà visibile fino alla risorsa desiderata. Per questo motivo il web server del sito che stai visitando può registrare il tuo indirizzo IP e registrare quanto da te richiesto. Questo record può quindi essere utilizzato principalmente per la raccolta dei dati e l'analisi del traffico.

Una VPN crea un tunnel tra il tuo dispositivo e il server VPN. I tuoi dati passano attraverso questo tunnel, vengono crittografati e quindi entrano in Internet aperto in una forma sicura. Pertanto, al server web sembrerà che il tuo dispositivo non abbia più il tuo vero indirizzo IP, ma l'indirizzo IP dell'endpoint del tunnel, ovvero il server VPN. Pertanto, il sito a cui arrivi dopo aver attraversato il tunnel VPN considererà la geolocalizzazione del server VPN che hai selezionato come la tua posizione reale. E i dati crittografati non cadranno nelle mani di inserzionisti, hacker e servizi di sicurezza.

![Struttura VPN](https://cdn.adguardvpn.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Tipi di protocolli VPN

I protocolli di sicurezza VPN sono strumenti che crittografano i dati in un tunnel VPN e consentono di mantenere la privacy degli utenti in una rete Internet aperta. Al momento, la stragrande maggioranza dei moderni servizi VPN utilizza uno dei seguenti tre protocolli VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Uno dei suoi principali vantaggi è che è disponibile sulla maggior parte dei dispositivi e dei sistemi operativi e offre un elevato livello di sicurezza. Tuttavia, l'uso del [doppio incapsulamento](https://en.wikipedia.org/wiki/Encapsulation_(networking)) in questo protocollo può comportare una velocità di connessione inferiore.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Questo protocollo moderno è open source, quindi i produttori di terze parti possono migliorare e aggiornare la tecnologia.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). I suoi principali vantaggi sono la facilità d'uso, l'elevata efficienza e la bassa vulnerabilità agli attacchi.

Oltre a questi protocolli VPN, ne esistono altri (ad esempio, TLS, SSTP, IKEv2), ma sono poco diffusi o non soddisfano i moderni standard di crittografia dei dati.

![Come funziona un protocollo VPN](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN dispone anche del proprio [ protocollo**](adguard-vpn-protocol.mdx). Uno dei suoi vantaggi è che il traffico trasmesso utilizzando il protocollo VPN AdGuard è difficile da distinguere dal traffico normale. Il tunnel VPN si presenta come un traffico HTTPS normale,  quindi è estremamente difficile individuarlo e bloccarlo. Inoltre, si basa sui meccanismi del protocollo HTTP/2 moderno, che garantisce un'alta velocità di connessione.

![Come funziona la VPN nascosta](https://cdn.adguardvpn.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Svantaggi della VPN

Nonostante gli ovvi vantaggi, la VPN non è perfetta e presenta alcuni svantaggi:

**Velocità inferiore**

Poiché il tuo traffico non va direttamente al server web, ma passa prima attraverso il server VPN, la velocità della connessione VPN diminuisce. Anche altri fattori influiscono sulla velocità di utilizzo di una VPN: il carico del server VPN, la sua larghezza di banda, la compatibilità del protocollo VPN con il tuo sistema operativo. Tutti questi fattori, oltre alla velocità della rete stessa, possono ridurre la qualità della tua connessione VPN.

**Blocco dell'accesso**

Alcuni servizi online si impegnano molto per rilevare il traffico VPN e bloccare l'accesso agli utenti VPN. Tuttavia, non molte VPN possono mascherare regolarmente il proprio traffico. Pertanto, molti tentativi di accedere a un determinato sito web senza disattivare la VPN si concludono con un nulla di fatto.

**Interruzione delle connessioni VPN**

Un segnale debole, sovraccarico di rete, incompatibilità VPN con un firewall, antivirus e altri programmi, un protocollo VPN obsoleto: tutto ciò può causare un guasto improvviso nella connessione VPN, soprattutto da parte di provider VPN inaffidabili.

## AdGuard VPN

Il nostro servizio VPN ha diversi [vantaggi](why-adguard-vpn.md) importanti:

* [*Protocollo VPN proprietario*](adguard-vpn-protocol.mdx), che funziona in maniera stabile anche con una connessione Internet lenta e si maschera da traffico normale, rendendo più tracciarlo e bloccarlo

* [*Politica Senza registri*](https://adguard-vpn.com/en/privacy.html), che significa che AdGuard VPN non raccoglie i tuoi dati personali e non li trasferisce a terzi

* *Più di 50 server VPN in decine di paesi*

* *Facilità d'uso e ampie possibilità di personalizzazione*

Attualmente, AdGuard VPN è disponibile come:

* [Estensione del browser](../adguard-vpn-browser-extension/overview.md) per Chrome, Firefox e Edge

* Applicazione mobile per [Android](../adguard-vpn-for-android/overview.md) e [iOS](../adguard-vpn-for-ios/overview.md)

* Applicazione desktop per [Windows](../adguard-vpn-for-windows/overview.md) e [Mac](../adguard-vpn-for-mac/overview.md)

Puoi saperne di più sulle funzionalità di AdGuard VPN (inclusa la versione illimitata) [qui](https://adguard-vpn.com/en/welcome.html).
