---
title: Přehled funkcí
sidebar_position: 1
---

## Co je AdGuard VPN pro iOS?

VPN umožňuje vytvořit zabezpečené připojení k jiné síti na internetu. Připojuje počítač nebo mobilní zařízení uživatele k serveru a umožňuje procházet síť pomocí “krycí“ IP adresy. Pokud se server VPN nachází v jiné zemi, bude se zdát, že internetové připojení bylo navázáno z této země. Další podrobnosti najdete v [našem článku o tom, jak VPN funguje](/general/how-vpn-works).

AdGuard VPN má několik funkcí:

- Skrývá vaše skutečné místo pobytu a pomáhá vám zůstat v anonymitě
- Změní vaši IP adresu a ochrání vaše data před sledováním
- Zašifruje váš provoz a znemožní podvodníkům přístup k obsahu
- Umožňuje nastavit, kde se má VPN používat a kde ne (funkce výjimek)

Další výhodou AdGuard VPN pro iOS je náš vlastní VPN protokol. V porovnání s jinými protokoly VPN je velmi obtížné jej odhalit a je stabilní i při špatném připojení k internetu. [Další informace o protokolu AdGuard VPN](/general/adguard-vpn-protocol).

## Jak používat AdGuard VPN pro iOS

Chcete-li používat AdGuard VPN pro iOS, musíte se nejprve přihlásit ke svému [Účtu AdGuard](https://adguardaccount.com/). Přihlásit se můžete přímo pomocí přihlašovacích údajů k účtu AdGuard nebo prostřednictvím Google, Apple ID nebo Facebooku (pokud byl váš účet AdGuard zaregistrován pomocí stejné e-mailové adresy).

Pokud ještě nemáte účet AdGuard, musíte si ho nejprve vytvořit.

Používání AdGuard VPN je poměrně snadné. Na hlavní obrazovce vidíte tlačítko *Připojit* (*Odpojit*) a seznam dostupných serverů (říkáme jim *umístění*). Každý server má své vlastní umístění (určitá země a město) a ukazatel ping.

Ping znázorňuje dobu odezvy serveru v milisekundách. Tento údaj udává, jak rychlé bude připojení VPN, když se připojíte k danému umístění. Výběr serveru s pingem 22 ms znamená, že datový paket odeslaný na tento server se vrátí za 22 ms.

S AdGuard VPN si můžete vybrat z více než 50 umístění v desítkách zemí.

![Home and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Výjimky

Kartu Výjimky najdete klepnutím na druhou ikonu ve spodní liště.

Ve výchozím nastavení je AdGuard VPN aktivní pro všechny webové stránky kromě těch, které byly přidány do Výjimek. Můžete ji také zapnout selektivně — VPN bude aktivní pouze pro zadané webové stránky. Chcete-li přepnout do tohoto režimu, klepněte na *Změnit režim*.

:::note

Každý režim má svůj vlastní seznam výjimek.

:::

Domény (např. `google.com`) nebo subdomény (např. `*news.google.com`) webových stránek můžete do seznamů přidávat třemi způsoby:

- Zadáním ručně do aplikace
- [Výběrem ze seznamů domén pro oblíbené služby](#domain-lists-for-popular-services)
- Přidáním přímo z prohlížeče sdílením požadovaných stránek s aplikací AdGuard VPN

![Exclusions *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Při ručním přidání domény se automaticky přidají všechny subdomény (vypadá to jako `*.google.com`). Chcete zachovat pouze google.com nebo vypnout VPN pro určitou doménu? Klepněte na řádek s webovou stránkou — otevře se samostatná obrazovka, kde můžete spravovat subdomény. Stačí zrušit zaškrtnutí políček u těch, které nepotřebujete.

![Subdomains *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Pokud přidáte subdoménu ručně, přidá se i hlavní doména, ale políčko vedle ní nebude zaškrtnuté.

### Seznam domén pro oblíbené služby

Velké služby, jako Google, jsou záludné. Obvykle používají více než jednu doménu — jednu pro mediální soubory, další pro rozhraní API a domény pro různé země. Například v případě Googlu máme v našem seznamu 416 domén — všechny je třeba přidat do výjimek, abychom úplně vypnuli (nebo zapnuli) VPN pro služby.

Zde je návod, jak přidat všechny potřebné domény pro oblíbenou službu na seznam výjimek:

1. Otevřete *výjimky*.
2. Klepněte na *Přidat webovou stránku*.
3. Klepněte na *Ze seznamu*.
4. Najděte požadovanou službu v seznamu a klepněte na *Přidat*.

![List of popular services *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Import/export výjimek

Další užitečnou funkcí je import a export seznamů výjimek. Tímto způsobem můžete sdílet seznamy výjimek z jiných zařízení a do nich.

Můžete to udělat ve čtyřech krocích:

1. Otevřete AdGuard VPN v zařízení, ze kterého chcete exportovat seznamy výjimek. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `exclusions.zip`.

2. Uvnitř archivu jsou dva soubory `.txt`, jeden pro Obecný a druhý pro Selektivní seznam. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory (ale o tom až později) nebo nechat archiv se soubory tak, jak je.

3. Při přenosu mezi různými zařízeními nezapomeňte odeslat soubor `.zip` do zařízení pro import. Pokud například importujete seznamy výjimek ze zařízení se systémem iOS do systému macOS, nezapomeňte soubor `.zip` předem odeslat do systému macOS.

4. Otevřete AdGuard VPN v zařízení, do kterého chcete importovat archiv s připravenými seznamy výjimek. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv.

**V AdGuard VPN pro iOS se k funkcím exportu a importu dostanete klepnutím na ikonu tří teček v pravém horním rohu obrazovky Výjimky.**.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Uložená umístění

Tato funkce umožňuje uložit oblíbená umístění serverů na zvláštní kartu, abyste k nim měli rychlý přístup bez nutnosti vyhledávání nebo procházení celého seznamu.

Chcete-li přidat umístění do *Uložených*, stačí přes něj přejet prstem doleva. Chcete-li jej odstranit z *Uložených*, postupujte stejně:

![Saved locations add remove *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Obecná nastavení

Pro otevření obecných nastavení:

1. Klepněte na ikonu Nastavení (⚙) v pravém dolním rohu hlavní obrazovky.
2. Klepněte na *Obecné*.

Zde můžete AdGuard VPN pro iOS nakonfigurovat podle svých potřeb pomocí různých možností: *DNS server*, *Motiv*, *Pokročilé*, *Odesílání technických a interakčních dat* a *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS server

AdGuard VPN pro iOS nabízí výběr z několika DNS serverů, z nichž každý má specifické vlastnosti. Například AdGuard DNS odstraňuje reklamy a chrání vaše zařízení před sledováním, zatímco AdGuard DNS Family Protection kombinuje funkce AdGuard DNS s funkcí bezpečného vyhledávání a blokování obsahu pro dospělé. DNS servery různých poskytovatelů DNS mohou také fungovat rychleji nebo pomaleji v závislosti na vaší poloze, poskytovateli internetových služeb a dalších faktorech. Vyberte si ten, který vám nejlépe vyhovuje. Můžete se zde [dozvědět více o DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) a jeho vlastnostech.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Motiv

Motiv aplikace můžete nastavit na systémový, tmavý nebo světlý (k dispozici v iOS 13 nebo novějším).

### Pokročilá nastavení

V části *Pokročilá* nastavení najdete 4 sekce - *Pracovní režim*, *Úroveň protokolování*, *Export protokolů a systémových informací* a *Diagnostické informace*.

#### Pracovní režim

AdGuard VPN pro iOS může fungovat ve dvou režimech: **VPN** a **Integrovaném**.

Režim *VPN* používá protokol [AdGuard VPN](/general/adguard-vpn-protocol), který poskytuje nejlepší kombinaci rychlosti a zabezpečení. V tomto režimu nebude AdGuard VPN pracovat s [Blokátorem reklam AdGuard pro iOS](https://adguard.com/adguard-ios/overview.html).

V **Integrovaném režimu** bude moci AdGuard VPN pracovat současně s Blokátorem reklam AdGuard pro iOS pomocí protokolu IPSec. Tento protokol je také bezpečný, ale o něco pomalejší a snáze zjistitelný. Pro nastavení integrace nemusíte dělat nic: stačí nainstalovat obě aplikace a přepnout do tohoto režimu.

:::note

V režimu **Integrace** nelze použít funkci Výjimky nebo vybrat DNS server.

:::

#### Úroveň záznamu

Toto nastavení se používá především pro účely ladění a řešení problémů. Úrovně záznamů Rozšířený a Extrémní zaznamenávají podrobnější informace, které mohou pomoci identifikovat a opravit různé problémy nebo chyby.

:::caution

**Nedoporučujeme zapínat rozšířenou nebo extrémní úroveň záznamu, pokud o to nepožádá náš tým podpory**.

:::

#### Exportovat protokoly a systémové informace

Tuto možnost lze použít k odesílání záznamů aplikace a systémových informací naší podpoře nebo komukoli jinému.

#### Diagnostická data

Tato možnost umožňuje exportovat technické informace, které mohou být užitečné při řešení problémů a které jsou někdy vyžadovány naší podporou a vývojáři.

### Odeslat technická a interakční data

Zapnutím této možnosti nám pomáháte lépe porozumět tomu, jak uživatelé s aplikací pracují. Tyto informace používáme ke zlepšení uživatelského komfortu.

### Kill Switch

Pokud z nějakého důvodu dojde k náhlému přerušení připojení VPN, *Kill Switch* automaticky ukončí připojení k internetu a zajistí, aby vaše data neunikla a vaše identita zůstala skrytá.

## Rychlé akce

Rychlé akce představují pohodlný způsob, jak provádět užitečné nebo specifické akce z domovské obrazovky, aniž byste museli otevírat aplikaci.

Chcete-li přejít do nabídky rychlých akcí, klepněte a podržte ikonu aplikace AdGuard VPN a poté zvedněte prst. V otevřené nabídce se zobrazí rychlé akce AdGuard VPN: *Připojit* (*Odpojit*) a *Vybrat umístění*. Můžete také přistupovat ke všem výchozím akcím, jako je odebrání aplikace nebo její přesunutí či sdílení.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Podpora

Obrazovka podpory *(Nastavení* → *Podpora*) obsahuje řadu užitečných funkcí: *Často kladené dotazy*, *Nahlásit chybu*, *Požádat o funkci* a *Ohodnotit aplikaci*. Ta umožňuje hodnotit AdGuard VPN pro iOS v App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Obrazovka předplatného

Pokud používáte bezplatnou verzi AdGuard VPN, bude na spodní liště karet další karta s ikonou šipky. V této části jsou stručně popsány hlavní výhody placené verze aplikace. Můžete si vybrat roční nebo měsíční předplatné.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
