---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

AdGuard VPN per Mac è un servizio VPN desktop. AdGuard VPN è completamente compatibile con il Blocco AdGuard possono essere utilizzati insieme e funzioneranno senza problemi. Vediamo quali caratteristiche ha da offrire.

Note that **you can’t use AdGuard VPN for Mac unless you have logged into your AdGuard account**. Puoi accedere con il tuo account AdGuard o con un account esterno, ovvero tramite Apple, Google o Facebook. Assicurati che il tuo account esterno sia associato allo stesso indirizzo e-mail del tuo account AdGuard. Se nel suo account AdGuard è presente un abbonamento adeguato, questo verrà attivato automaticamente sull'applicazione desktop. Still don’t have an AdGuard account? Crealo [qui](https://auth.adguard.com/registration.html).

:::note Compatibility

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Catalina (10.15).

:::

## Schermata principale

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

La prima scheda è la *Schermata iniziale*. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Il ping è il tempo di risposta di un server VPN. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Di seguito è possibile visualizzare l'elenco completo delle località. The search field makes it easy to find the location you need.

:::note

Gli utenti gratuiti possono connettersi solo a determinati luoghi, mentre altri sono bloccati. Inoltre, c'è un limite di traffico mensile di 3 GB nella versione gratuita.

:::

## Esclusioni

![Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Schermata Esclusioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Inoltre puoi non solo aggiungere siti web a Esclusioni, ma anche scegliere tra gli elenchi di servizi popolari. Gli elenchi sono suddivisi in otto categorie: Social network, Servizi di messaggistica, Servizi di streaming video e musicale, Videogiochi, Shopping, Motori di ricerca e Strumenti di comunicazione di lavoro. Tutti questi servizi possono essere aggiunti alle Esclusioni con un solo clic! It’s especially convenient if you use Selective mode.

L'elenco di esclusione può essere facilmente configurato. If you’ve added a domain and some of its subdomains, they’ll be grouped inside the root one. Quando si aggiunge un dominio root (`example.com`) viene aggiunta anche la sua maschera (`*.example.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

If you’ve added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

Inoltre, gli elenchi di esclusioni già pronti possono essere trasferiti ad altri dispositivi con AdGuard VPN installato. Per esportare le esclusioni, seguire le istruzioni in 4 passaggi descritte di seguito:

1. Aprire AdGuard VPN sul dispositivo da cui si desidera esportare gli elenchi di esclusioni. Find the appropriate section and click the *Export* button. L'archivio `exclusions.zip` verrà scaricato.
2. Ci sono due file `.txt` all'interno dell'archivio, ciascuno per gli elenchi Generale e Selettivo. Aggiungi loro altre esclusioni, elimina quelle esistenti, rinomina i file (ma ne parleremo più avanti) o lascia semplicemente l'archivio con i file così com'è.
3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo Mac al tuo iPhone, assicurati d'inviare prima il file `.zip` al tuo smartphone.
4. Aprire AdGuard VPN sul dispositivo/nel browser in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Find the appropriate section, click the *Import* button and select the archive. Fatto!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Supporto

![Schermata di supporto](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/vpn_mac/form.html), we’d appreciate it.

## Impostazioni

![Impostazioni](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Finalmente, arriviamo alla scheda Impostazioni. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard’s EULA and Privacy policy. Nella sezione *Informazioni sulla licenza* puoi eseguire l'upgrade da gratuito a illimitato, gestire il tuo abbonamento o disconnetterti. E, soprattutto, da qui puoi accedere alle *Impostazioni generali*.

### Impostazioni app

![Impostazioni app](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Auto-update*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. Inoltre, è possibile scegliere tra il tema chiaro, scuro e di sistema - quest'ultimo si adatta al tema del Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Questo può essere utile se vuoi allegare i registri al tuo messaggio al supporto.

### Server DNS

![Server DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

One or more DNS servers can be set up here. This is useful if you don’t want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Impostazioni avanzate

![Impostazioni avanzate](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Livello di registrazione

Esistono solo due livelli di registrazione, ma ti consigliamo vivamente di utilizzare il primo, quello predefinito. La seconda opzione (registrazione estesa) dovrebbe essere impostata solo per registrare uno strano comportamento del programma dopo aver consultato il nostro supporto tecnico. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Nascondi icona della barra dei menu

Anche se questa opzione si trova in *Impostazioni avanzate*, può essere attivata senza esitazione. Puoi nascondere l'icona AdGuard VPN dalla barra dei menu, non impedirà alla nostra app di funzionare in background.

#### Use QUIC

Il protocollo di comunicazione QUIC è l'ultima versione avanzata di HTTP. Attiva o disattiva l'interruttore per ottenere una migliore qualità di connessione in condizioni non ideali, ad esempio durante l'utilizzo dei dati mobili in metropolitana o in ascensore.
