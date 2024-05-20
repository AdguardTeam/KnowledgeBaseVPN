---
title: Funktionsoversigt
sidebar_position: 1
---

## Hovedskærm

Hovedskærmen afspejler VPN-status (Forbundet/Afbrudt). På samme skærm findes også knappen *Tilslut/Afbryd* samt listen over tilgængelige servere.

Ved hver server ses placering og ping-tid, dvs. hvor hurtigt serveren svarer. Jo lavere ping-tid er, des hurtigere en forbindelse. De hurtigste servere vises altid øverst på listen, der udgøres af flere end 50 lokationer i snesevis af lande. Der kan oprettes forbindelse til den hurtigste server ved at trykke på knappen *Tilslut* eller ved at vælge en lokation.

## Undtagelser

Undtagelseslister muliggør at håndtere VPN-forbindelsen for bestemte websteder og apps. Tryk på det andet ikon fra venstre nederst på skærmen for at gå til afsnittet *Undtagelser*.

![Undtagelser *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Angiv det manuelt i appen
- Tilføj det direkte via webbrowseren ved at dele webstedet med AdGuard VPN
- Tilføj det fra en indbygget liste over tjenester

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Undtager man f.eks. manuelt domænet `yahoo.com`, vil alle `*.yahoo.com` underdomæner også blive opført i Undtagelser. Domænenavne med andre topniveaudomæner, såsom `yahoo.jp` eller `yahoo.fr`, undtages dog ikke.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Fuldt aktiveret** indikeres med et hvidt flueben på en grøn baggrund
- **Delvist aktiveret** (aktiverede underdomæner uden hoveddomænet) indikeres med en grøn firkant på en hvid baggrund
- **Fuldt deaktiveret** indikeres med et tomt afkrydsningsfelt

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![App-undtagelser *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

I *Integreret tilstand*kan apps kun håndtres via AdGuard Ad Blocker.

:::

## Indstillinger

Man kan gå til *Indstillinger* ved at trykke på tandhjulsikonet nederst til højre på skærmen.

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

*Driftstilstand* muliggør at angive, hvordan trafikken skal rutes. Der findes de tre tilstande: VPN, SOCKS5 og integreret. I tilstanden *VPN* rutes al trafik igennem AdGuard VPN. I tilstanden *SOCKS5* kører AdGuard VPN en lokal proxyserver, der kan bruges af andre apps til trafikrutning. *Integreret tilstand* tillader AdGuard VPN og AdGuard Ad Blocker at samarbejde.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Håndtering af DNS-beskyttelse og rutning af apps igennem AdGuard VPN-proxyen kan ske via AdGuard Ad Blocker-appen.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

Det sidste afsnit under *Avancerede indstillinger* er *Lavniveauindstillinger*. Vi opfordrer til ikke at tilgå dette afsnit, medmindre man er højt kvalificeret eller er blevet anmodet herom af vores supportteam. Her er det muligt at aktivere TUN-grænsefladelogning eller IPv6-protokol på VPN-grænsefladen, vælge proxyserverporten eller internetprotokolversionen, der skal bruges.

:::note Kompatibilitet

Indstillingen *Aktivér IPv6* er kun tilgængelig for IPv6-kapable netværk.

:::

### Support

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
