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

Ve výchozím nastavení funguje AdGuard VPN pro všechny webové stránky a aplikace kromě těch, které byly přidány do výjimek: pokud nezadáte aplikaci nebo webovou stránku, bude pro ně VPN aktivní. Můžete ji také zapnout **selektivně** — pouze pro určité aplikace nebo webové stránky. Chcete-li přepnout do tohoto režimu, klepněte na *Změnit režim*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

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

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

Při ručním přidávání domén existují určité nuance. Pokud například ručně vyloučíte doménu `yahoo.com`, budou ve výjimkách uvedeny také všechny subdomény `*.yahoo.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `yahoo.jp` nebo `yahoo.fr`, však vyloučeny nebudou.

Pokud do výjimek přidáte `youtube.com`, doména stejné služby `youtu.be` nebude přidána. V tomto případě je bezpečnější použít vestavěné seznamy služeb. Obsahují všechny subdomény spojené s každou platformou.

:::

Vzhledem k tomu, že v seznamech služeb můžete povolit subdomény, přidali jsme pole, která odrážejí stav každé služby:

- **Plně povoleno** je označeno bílým zaškrtnutím na zeleném pozadí
- **Částečně povoleno** (povolené subdomény bez hlavní domény) je označeno zeleným čtvercem na bílém pozadí
- **Plně zakázáno** je označeno prázdným zaškrtávacím políčkem

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

Pokud jste omylem smazali doménu nebo subdoménu, stačí klepnout na *Obnovit výchozí nastavení*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Aplikace

Můžete také spravovat VPN pro aplikace. Chcete-li aplikaci z tunelu VPN vyloučit, klepněte na *Přidat aplikaci*. Chcete-li VPN používat **selektivně**, klepněte na *Změnit režim*.

![App exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

V *Režimu integrace* můžete aplikace spravovat pouze prostřednictvím Blokátoru reklam AdGuard.

:::

## Nastavení

Do *Nastavení* se dostanete stisknutím ikony ozubeného kola v pravém dolním rohu obrazovky.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### Obecné

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

V části *Obecné* můžete spravovat základní nastavení AdGuard VPN:

- Spustit AdGuard VPN při startu systému
- Vybrat server DNS pro šifrování provozu a blokování reklam při připojení k VPN (doporučujeme použít AdGuard DNS)
- Zapnout Kill Switch, abyste chránili své soukromí a v případě výpadku připojení VPN se odpojili od internetu
- Vybrat barevný motiv
- Zapnout anonymní zprávy o selhání, které budou vývojáře informovat o problémech s aplikacemi

### Pokročilé

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

V části *Pokročilé* se nachází sada nastavení, která se nepoužívají tak často.

*Pracovní režim* vám umožňuje určit, jak je směrován váš provoz. K dispozici jsou tři režimy: VPN, SOCKS5 a Režim integrace. V režimu *VPN* je veškerý provoz směrován skrze AdGuard VPN. V režimu *SOCKS5* provozuje AdGuard VPN místní proxy server, který mohou ostatní aplikace používat pro směrování provozu. *Režim integrace* umožňuje AdGuard VPN a Blokátoru reklam AdGuard spolupracovat.

:::note

Některé funkce AdGuard VPN jsou v *Režimu integrace* deaktivovány: DNS servery, Kill Switch a výjimky aplikací. V aplikaci Blokátor reklam AdGuard můžete spravovat ochranu DNS a směrovat aplikace prostřednictvím proxy serveru AdGuard VPN.

:::

*Úroveň záznamů* určuje, kolik událostí aplikace se zaznamenává. Nedoporučujeme povolovat úrovně záznamů *Pokročilý* nebo *Extrémní*, pokud to nevyžaduje náš tým podpory.

V této části můžete také exportovat záznamy a systémové informace a sdílet je s podporou.

*Diagnostická data* zobrazují místně uložené technické informace o aplikaci, zařízení a připojení. V případě potřeby je můžete zkopírovat a odeslat našemu týmu podpory.

Poslední částí v *Pokročilých nastaveních* jsou *Nízkoúrovňová nastavení*. Doporučujeme vám, abyste do této sekce nevstupovali, pokud nejste vysoce kvalifikovaní nebo pokud vás o to nepožádal náš tým podpory. Zde je možné povolit protokolování rozhraní TUN nebo protokolu IPv6 na rozhraní VPN, vybrat port proxy serveru nebo verzi Internetového protokolu, která se má používat.

:::caution

V možnosti **Preferovaná verze IP** se před výběrem mezi IPv6 a IPv4 ujistěte, že vaše síť tento protokol podporuje. Pokud například zvolíte IPv6 a vaše síť podporuje pouze IPv4, budete mít problémy s připojením k Internetu. A naopak.

:::

### Podpora

V části *Podpora* se můžete podívat na naše FAQ, kde získáte rychlé odpovědi na své otázky, nahlásit chyby a navrhnout nové funkce.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
