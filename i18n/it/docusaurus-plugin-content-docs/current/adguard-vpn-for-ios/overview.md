---
title: Panoramica delle caratteristiche
sidebar_position: 1
---

## Che cos'è AdGuard VPN per iOS?

Una VPN consente di creare una connessione sicura a un'altra rete su Internet. It connects a user’s computer or mobile device to a server and allows one to browse the internet using a "cover" IP address. If the VPN server is located in another country, it will appear as if your Internet connection was established from this country. For more details, you can check [our article on how a VPN works](/general/how-vpn-works).

AdGuard VPN dispone di diverse funzioni:

- Hides your real whereabouts and helps you stay anonymous
- Changes your IP address to protect your data from tracking
- Encrypts your traffic, making the content inaccessible to scammers
- Lets you configure where to use VPN and where not to (exclusions feature)

Il prossimo vantaggio di AdGuard VPN per iOS è il nostro protocollo VPN. È estremamente difficile da rilevare rispetto ad altri protocolli VPN, ed è stabile persino con una connessione a Internet debole. [Read more about the AdGuard VPN protocol](/general/adguard-vpn-protocol).

## Come utilizzare AdGuard VPN per iOS

Per utilizzare AdGuard VPN per iOS, devi prima accedere al tuo [account AdGuard](https://my.adguard.com/). Puoi accedere direttamente con le credenziali del tuo account AdGuard o tramite Google, ID Apple o Facebook (se il tuo account AdGuard è stato registrato utilizzando lo stesso indirizzo email).

If you don’t have an AdGuard account yet, you will have to create it first.

Usare AdGuard VPN è abbastanza semplice. On the main screen you can see the *Connect* (*Disconnect*) button and the list of available servers (we call them *locations*). Each server has its own location (a certain country and a city) and ping indicator.

The ping shows the server’s response time in milliseconds. This indicates how fast the VPN connection will be when you connect to that location. Selecting a server with a ping of 22 ms means that a data packet sent to this server will be returned in 22 ms.

With AdGuard VPN, you can choose from over 50 locations in dozens of countries.

![Schermata principale e posizioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Exclusions

You can find the Exclusions tab by tapping the second icon in the bottom bar. There you will see two exclusion lists, for *Regular* and *Selective* modes.

In *Regular* mode, the VPN works for all websites except the excluded ones. Conversely, in *Selective* mode, the VPN only works for websites from the list.

You can add domains (e.g., `google.com`) or subdomains (e.g., `*.google.com`) of websites to the lists in two ways:

- Enter them manually in the app
- Add them directly from the browser by sharing the desired pages with AdGuard VPN

![Esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Import/export exclusions

Another useful feature is the import and export of exclusion lists. This way you can share exclusion lists from and to other devices.

You can do it in four steps:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Trovare la sezione appropriata e fare clic sul pulsante *Esporta*. L'archivio `exclusions.zip` verrà scaricato.

2. Ci sono due file `.txt` all'interno dell'archivio, uno per ciascuno dei elenchi Generale e Selettivo. Aggiungi altre esclusioni, elimina quelli esistenti, rinomina i file (ma ne parleremo più avanti) o semplicemente lascia l'archivio con i file così come sono.

3. When transferring between different devices, don’t forget to send the `.zip` file to the device for import. Ad esempio, se importi gli elenchi di esclusione dal tuo dispositivo iOS al tuo Mac, assicurati d'inviare prima il file `.zip` al tuo Mac.

4. Aprire AdGuard VPN sul dispositivo in cui si desidera importare l'archivio con gli elenchi di esclusioni già creati. Trovare la sezione appropriata, clicca sul pulsante *Importa* e seleziona l'archivio.

**In AdGuard VPN for iOS, the export and import features can be accessed by tapping the three-dot icon in the upper right corner of the Exclusions screen**.

![Importazione/esportazione delle esclusioni *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## General settings

To open General settings:

1. Toccare il pulsante Impostazioni (⚙) nell'angolo in basso a destra della schermata principale dell'app.
2. Tap *General*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Server DNS

AdGuard VPN per iOS offre una scelta tra svariati server DNS, ognuno con le proprie qualità speciali. Ad esempio, AdGuard DNS rimuove gli annunci e protegge il tuo dispositivo dal tracciamento, mentre AdGuard DNS Protezione Famiglia combina la funzione di AdGuard DNS con Ricerca sicura e il blocco dei contenuti per adulti. I server DNS da fornitori DNS differenti potrebbero anche essere più o meno veloci a seconda della tua posizione, ISP e altri fattori. Scegli quello che funziona meglio per te. Puoi [scoprire di più sul DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) e le sue caratteristiche.

![Schermata del server DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### Impostazioni avanzate

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Modalità operativa

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Logging level

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Export logs and system info

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Diagnostic data

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Send technical and interaction data

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Azioni rapide *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Supporto

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Supporto *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Abbonamento *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
