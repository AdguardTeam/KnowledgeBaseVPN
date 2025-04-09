---
title: Přehled funkcí
sidebar_position: 1
---

## Hlavní obrazovka

Na hlavní obrazovce je zobrazen stav VPN (Připojeno/odpojeno). Je zde také tlačítko *Připojit/odpojit* a seznam dostupných serverů.

U každého serveru je uvedeno jeho umístění a hodnota ping, která popisuje dobu odezvy serveru. Čím nižší je tato hodnota, tím rychlejší je připojení. Nejrychlejší servery se vždy objevují v horní části seznamu, který obsahuje více než 50 umístění v desítkách zemí. K nejrychlejšímu serveru se můžete připojit klepnutím na tlačítko *Připojit* nebo výběrem umístění.

## Výjimky

Seznamy výjimek vám umožňují spravovat připojení VPN pro konkrétní webové stránky a aplikace. Do sekce *Výjimky* se dostanete klepnutím na druhou ikonu zleva ve spodní části obrazovky.

![Exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

Ve výchozím nastavení funguje AdGuard VPN pro všechny webové stránky a aplikace kromě těch, které byly přidány do výjimek: pokud nezadáte aplikaci nebo webovou stránku, bude pro ně VPN aktivní. Můžete ji také zapnout **selektivně** — pouze pro určité aplikace nebo webové stránky. Chcete-li přepnout do tohoto režimu, klepněte na *Změnit režim*.

![Change mode *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

Při **selektivním** používání VPN buďte opatrní.

Pokud vyloučíte prohlížeč z tunelu VPN, výjimky webových stránek pro něj nebude fungovat.

Pokud přepnete na tento režim pro webové stránky, nezapomeňte přidat domény aplikací, které chcete používat — například `facebook.com` pro Facebook.

:::

### Webové stránky

Doménu (např. `google.com`) nebo subdoménu (např. `*.google.com`) můžete do výjimek přidat třemi způsoby:

- Zadáním ručně do aplikace
- Přidáním přímo z prohlížeče sdílením požadovaných stránek s AdGuard VPN
- Přidáním z vestavěného seznamu služeb

![Add manually *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

Při ručním přidávání domén existují určité nuance. Pokud například ručně vyloučíte doménu `yahoo.com`, budou ve výjimkách uvedeny také všechny subdomény `*.yahoo.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `yahoo.jp` nebo `yahoo.fr`, však vyloučeny nebudou.

Pokud do výjimek přidáte `youtube.com`, doména stejné služby `youtu.be` nebude přidána. V tomto případě je bezpečnější použít vestavěné seznamy služeb. Obsahují všechny subdomény spojené s každou platformou.

:::

Vzhledem k tomu, že v seznamech služeb můžete povolit subdomény, přidali jsme pole, která odrážejí stav každé služby:

- **Plně povoleno** je označeno bílým zaškrtnutím na zeleném pozadí
- **Částečně povoleno** (povolené subdomény bez hlavní domény) je označeno zeleným čtvercem na bílém pozadí
- **Plně zakázáno** je označeno prázdným zaškrtávacím políčkem

![Website exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

Pokud jste omylem smazali doménu nebo subdoménu, stačí klepnout na *Obnovit výchozí nastavení*.

![Reset to default *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Aplikace

Můžete také spravovat VPN pro aplikace. Chcete-li aplikaci z tunelu VPN vyloučit, klepněte na *Přidat aplikaci*. Chcete-li VPN používat **selektivně**, klepněte na *Změnit režim*.

![App exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

V *Režimu integrace* můžete aplikace spravovat pouze prostřednictvím Blokátoru reklam AdGuard.

:::

## Nastavení

Do *Nastavení* se dostanete stisknutím ikony ozubeného kola v pravém dolním rohu obrazovky.

![Settings *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### Obecné

![General *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

V části *Obecné* můžete spravovat základní nastavení AdGuard VPN:

- Spustit AdGuard VPN při startu systému
- Vybrat server DNS pro šifrování provozu a blokování reklam při připojení k VPN (doporučujeme použít AdGuard DNS)
- Zapnout Kill Switch, abyste chránili své soukromí a v případě výpadku připojení VPN se odpojili od internetu
- Vybrat barevný motiv
- Zapnout anonymní zprávy o selhání, které budou vývojáře informovat o problémech s aplikacemi

### Pokročilé

![Advanced *mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

V části *Pokročilé* se nachází sada nastavení, která se nepoužívají tak často.

*Pracovní režim* vám umožňuje určit, jak je směrován váš provoz. K dispozici jsou tři režimy: VPN, SOCKS5 a Režim integrace. V režimu *VPN* je veškerý provoz směrován skrze AdGuard VPN. V režimu *SOCKS5* provozuje AdGuard VPN místní proxy server, který mohou ostatní aplikace používat pro směrování provozu. *Režim integrace* umožňuje AdGuard VPN a Blokátoru reklam AdGuard spolupracovat.

:::note

Některé funkce AdGuard VPN jsou v *Režimu integrace* deaktivovány: DNS servery, Kill Switch a výjimky aplikací. V aplikaci Blokátor reklam AdGuard můžete spravovat ochranu DNS a směrovat aplikace prostřednictvím proxy serveru AdGuard VPN.

:::

*Post-quantum cryptography* refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### Podpora

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
