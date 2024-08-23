---
title: Panoramica delle funzionalità
sidebar_position: 1
---

## Schermata principale

La schermata principale riflette lo stato della VPN (Connessa/Disconnessa). Inoltre, è presente il pulsante *Connetti/Disconnetti* e un elenco dei server disponibili.

Ogni server ha la sua posizione e il suo ping rate, che descrivono il tempo di risposta del server. Più bassa è questa velocità, più veloce è la connessione. I server più veloci appaiono sempre in cima all'elenco, consistente in oltre 50 posizioni, in dozzine di paesi. Puoi connetterti al server più veloce toccando sul pulsante *Connetti*, o selezionando una posizione.

## Esclusioni

Gli elenchi d'esclusione ti consentono di gestire la connessione VPN per siti web e app specifici. Per accedere alle *Esclusioni*, tocca sulla seconda icona da sinistra, in fondo alla schermata.

![Esclusioni *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Ad esempio, se escludi manualmente il dominio `yahoo.com`, anche tutti i `sottodomini *.yahoo.com` verranno elencati nelle esclusioni. Tuttavia, i nomi di dominio con altri domini di primo livello, come `yahoo.jp` o `yahoo.fr`, non saranno esclusi.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Completamente abilitata** è indicato da un segno di spunta bianco su uno sfondo verde
- **Parzialmente abilitata** (sottodomini abilitati senza il dominio principale), è indicato da un quadrato verde su uno sfondo bianco
- **Completamente disabilitata** è segnato da una casella di spunta vuota

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Esclusioni di app *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

In *Modalità integrata*, puoi gestire le app soltanto tramite il Blocco AdGuard.

:::

## Impostazioni

È possibile accedere alle *Impostazioni* premendo l'icona dell'ingranaggio in basso a destra dello schermo.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

La *Modalità operativa* ti consente di specificare come viene instradato il tuo traffico. Esistono tre modalità: VPN, SOCKS5 e Modalità integrata. Nella modalità *VPN*, tutto il traffico passa per AdGuard VPN. In modalità *SOCKS5*, AdGuard VPN esegue un server proxy locale, utilizzabile dalle altre app per l'instradamento del traffico. La *Modalità integrata* consente ad AdGuard VPN e al Blocco AdGuard di funzionare insieme.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Puoi gestire la protezione DNS e instradare le app attraverso il tuo proxy di AdGuard VPN nell'app Blocco degli annunci AdGuard.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

L'ultima sezione di *Impostazioni avanzate* è *Impostazioni di basso livello*. Ti invitiamo a non entrare in questa sezione a meno che tu non sia altamente qualificato o ti sia stato chiesto di farlo dal nostro team di supporto. Qui è possibile abilitare la registrazione dell'interfaccia TUN o il protocollo IPv6 sull'interfaccia VPN, scegliere una porta del server proxy o una versione del protocollo Internet da utilizzare.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you may experience problems connecting to the Internet. And vice versa.

:::

### Supporto

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
