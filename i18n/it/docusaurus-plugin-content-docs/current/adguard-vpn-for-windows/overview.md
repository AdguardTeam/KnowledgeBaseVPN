---
title: Panoramica delle caratteristiche
sidebar position: 1
---

## Che cos'è AdGuard VPN per Windows

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. Come funziona? Ogni volta che visiti un sito web senza utilizzare una VPN, il tuo ISP lo vede. Sa chi sei e cosa stai cercando e può raccogliere e vendere questi dati. A sua volta, il sito web a cui sei arrivato può anche tracciare la tua attività. Quando abiliti un'applicazione VPN, reindirizza il tuo traffico attraverso un tunnel crittografato a un server VPN remoto, garantendo la tua privacy: l'ISP non sa da dove hai inviato una richiesta e il sito non sa da dove provieni.

**Cosa fa AdGuard VPN per Windows**

* Protegge dall'intercettazione del traffico di rete (spoofing). AdGuard VPN crea un tunnel crittografato tra il dispositivo e un server remoto. Tutto il vostro traffico Internet passa attraverso questo tunnel, in modo che i vostri dati siano protetti lungo il percorso. E grazie all'esclusivo [protocollo di AdGuard](/general/adguard-vpn-protocol.mdx), è garantita una connessione veloce e sicura.

* Nasconde il tuo indirizzo IP. Il tuo vero indirizzo IP è la chiave per i tuoi dati personali per i criminali informatici. Il tuo nome, indirizzo e-mail, numero di telefono, informazioni sulla carta di credito possono cadere nelle mani di truffatori se non nascondi il tuo IP. Con AdGuard VPN, come abbiamo già detto, tutto il traffico passa attraverso un tunnel crittografato e arriva al server VPN. Pertanto, dall'esterno sembra che il tuo dispositivo abbia l'indirizzo IP di detto server VPN.

* Nasconde la tua posizione reale. Selezionando uno dei server VPN di AdGuard, verrai immediatamente "teletrasportato" nella sua posizione. Cosa ti dà questo? Ad esempio, la possibilità di prenotare un hotel a tariffe locali o di nascondersi dalla pubblicità con geotargeting.

AdGuard VPN per Windows ha molti vantaggi, quindi abbiamo dedicato [un articolo a parte](/general/why-adguard-vpn.md) a loro. Qui, tuttavia, vogliamo concentrarci maggiormente sull'applicazione stessa e su come funziona.

## Come iniziare a utilizzare AdGuard VPN per Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). L'installazione non richiede più di un minuto e vedrai una finestra di dialogo in cui dovrai selezionare almeno una casella applicando i termini dell'Accordo per gli utenti e l'Informativa sulla privacy. E sta a te decidere se vuoi che AdGuard raccolga dati anonimi sull'utilizzo della tua app. Alla fine il programma ti chiederà di accedere, tramite il [account AdGuard](https://auth.adguard.com/login.html) o tramite social network (Apple, Google, Facebook). È tutto, ora puoi utilizzare AdGuard VPN per Windows.


## Schermata principale

![Pagina iniziale di AdGuard VPN per Windows](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

L'elemento più evidente nella **Schermata iniziale** è il pulsante di connessione/disconnessione di AdGuard VPN. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## Esclusioni

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. Cosa significa questo? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. La **Modalità selettiva** ha l'effetto opposto: attiva AdGuard VPN solo sui siti web specificati nell'elenco di esclusione. Si noti che gli elenchi di esclusioni di queste due modalità sono indipendenti l'uno dall'altro.

![Esclusioni](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Aggiungere esclusione](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Aggiungere esclusioni dall'elenco](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Quando si aggiungono domini manualmente, è necessario tenere conto di alcune sfumature. Ad esempio, se escludi manualmente il dominio `google.com`, anche tutti i sottodomini `*.google.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello come `google.es` o `google.it` non saranno esclusi. Oppure si può aggiungere `youtube.com` alle esclusioni, ma il dominio dello stesso servizio `youtu.be` non sarà incluso nell'elenco.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. Abbiamo posizionato i servizi più popolari lì, inclusi tutti i nomi di dominio e sottodomini relativi a ciascuna piattaforma.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Impostazioni

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

Nella parte inferiore della pagina sono presenti due sezioni: **Server DNS** e **Impostazioni avanzate**.

#### Server DNS

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Altre schede

### Informazioni

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Supporto

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.