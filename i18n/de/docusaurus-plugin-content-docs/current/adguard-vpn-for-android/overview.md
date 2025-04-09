---
title: Funktionsübersicht
sidebar_position: 1
---

## Hauptseite

Der Hauptbildschirm zeigt den VPN-Status an (Verbunden/Getrennt). Außerdem gibt es die Schaltfläche *Verbinden/Trennen* und eine Liste der verfügbaren Server.

Jeder Server hat seinen Standort und seine Ping-Rate, die die Antwortzeit des Servers beschreibt. Je niedriger diese Rate ist, desto schneller ist die Verbindung. Die schnellsten Server stehen immer an der Spitze der Liste, die aus mehr als 50 Standorten in Dutzenden von Ländern besteht. Sie können sich mit dem schnellsten Server verbinden, indem Sie auf die Schaltfläche „*Verbinden*“ tippen oder einen Standort auswählen.

## Ausschlüsse

Mit Ausschlusslisten können Sie die VPN-Verbindung für bestimmte Websites und Anwendungen verwalten. Um auf die *Ausschlüsse* zuzugreifen, tippen Sie auf das zweite Symbol von links unten auf dem Bildschirm.

![Ausschlüsse *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

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

![Add manually *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Wenn Sie beispielsweise die Domains `yahoo.com` manuell ausschließen, werden alle `*.yahoo.com` Subdomains ebenfalls in den Ausschlüssen aufgeführt. Domainnamen mit anderen Top-Level-Domains wie `yahoo.jp` oder `yahoo.fr` werden jedoch nicht ausgeschlossen.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Vollständig aktiviert** wird durch ein weißes Häkchen auf grünem Hintergrund angezeigt
- **Teilweise aktiviert** (aktivierte Subdomains ohne die Hauptdomain) sind mit einem grünen Quadrat auf weißem Hintergrund gekennzeichnet
- **Vollständig deaktiviert** ist mit einem leeren Kästchen gekennzeichnet

![Website exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![App-Ausschlüsse *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

Im *Integrierten Modus* können Sie Apps nur über den AdGuard Ad Blocker verwalten.

:::

## Einstellungen

Sie können *Einstellungen* erreichen, indem Sie auf das Zahnradsymbol unten rechts auf dem Bildschirm drücken.

![Settings *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

The *Advanced* section is a set of settings that are not as commonly used.

Der *Betriebsmodus* ermöglicht es Ihnen, festzulegen, wie Ihr Datenverkehr weitergeleitet werden soll. Es gibt drei Modi: VPN, SOCKS5 und Integrierter Modus. Im Modus *VPN* wird der gesamte Datenverkehr über AdGuard VPN geleitet. Im *SOCKS5*-Modus betreibt AdGuard VPN einen lokalen Proxy-Server, der von anderen Anwendungen für das Traffic-Routing genutzt werden kann. Der *Integrierte Modus* ermöglicht das Zusammenwirken von AdGuard VPN und AdGuard Ad Blocker.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. In der AdGuard Ad Blocker App können Sie den DNS-Schutz verwalten und Apps über Ihren AdGuard VPN-Proxy leiten.

:::

*Post-quantum cryptography* refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### Support

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
