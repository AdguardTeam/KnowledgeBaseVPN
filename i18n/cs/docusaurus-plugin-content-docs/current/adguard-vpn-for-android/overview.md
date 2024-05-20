---
title: Přehled funkcí
sidebar_position: 1
---

## Hlavní obrazovka

Na hlavní obrazovce je zobrazen stav VPN (Připojeno/odpojeno). Je zde také tlačítko *Připojit/odpojit* a seznam dostupných serverů.

U každého serveru je uvedeno jeho umístění a hodnota ping, která popisuje dobu odezvy serveru. Čím nižší je tato hodnota, tím rychlejší je připojení. Nejrychlejší servery se vždy objevují v horní části seznamu, který obsahuje více než 50 umístění v desítkách zemí. K nejrychlejšímu serveru se můžete připojit klepnutím na tlačítko *Připojit* nebo výběrem umístění.

## Výjimky

Seznamy výjimek vám umožňují spravovat připojení VPN pro konkrétní webové stránky a aplikace. Do sekce *Výjimky* se dostanete klepnutím na druhou ikonu zleva ve spodní části obrazovky.

![Exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Zadáním ručně do aplikace
- Přidáním přímo z prohlížeče sdílením požadovaných stránek s AdGuard VPN
- Přidáním z vestavěného seznamu služeb

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Pokud například ručně vyloučíte doménu `yahoo.com`, budou ve výjimkách uvedeny také všechny subdomény `*.yahoo.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `yahoo.jp` nebo `yahoo.fr`, však vyloučeny nebudou.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Plně povoleno** je označeno bílým zaškrtnutím na zeleném pozadí
- **Částečně povoleno** (povolené subdomény bez hlavní domény) je označeno zeleným čtvercem na bílém pozadí
- **Plně zakázáno** je označeno prázdným zaškrtávacím políčkem

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![App exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

V *Režimu integrace* můžete aplikace spravovat pouze prostřednictvím Blokátoru reklam AdGuard.

:::

## Nastavení

Do *Nastavení* se dostanete stisknutím ikony ozubeného kola v pravém dolním rohu obrazovky.

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

*Pracovní režim* vám umožňuje určit, jak je směrován váš provoz. K dispozici jsou tři režimy: VPN, SOCKS5 a Režim integrace. V režimu *VPN* je veškerý provoz směrován skrze AdGuard VPN. V režimu *SOCKS5* provozuje AdGuard VPN místní proxy server, který mohou ostatní aplikace používat pro směrování provozu. *Režim integrace* umožňuje AdGuard VPN a Blokátoru reklam AdGuard spolupracovat.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. V aplikaci Blokátor reklam AdGuard můžete spravovat ochranu DNS a směrovat aplikace prostřednictvím proxy serveru AdGuard VPN.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

Poslední částí v *Pokročilých nastaveních* jsou *Nízkoúrovňová nastavení*. Doporučujeme vám, abyste do této sekce nevstupovali, pokud nejste vysoce kvalifikovaní nebo pokud vás o to nepožádal náš tým podpory. Zde je možné povolit protokolování rozhraní TUN nebo protokolu IPv6 na rozhraní VPN, vybrat port proxy serveru nebo verzi Internetového protokolu, která se má používat.

:::note Kompatibilita

Možnost *Povolit IPv6* je k dispozici pouze pro sítě, které podporují IPv6.

:::

### Podpora

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
