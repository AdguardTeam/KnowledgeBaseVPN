---
title: Přehled funkcí
sidebar_position: 1
---

## Co je AdGuard VPN pro iOS

VPN umožňuje vytvořit zabezpečené připojení k jiné síti na internetu. Připojuje počítač nebo mobilní zařízení uživatele k serveru a umožňuje procházet internet pomocí IP adresy někoho jiného. Pokud se tedy VPN server nachází v jiné zemi, bude se zdát, že jste se k internetu připojili z této země. Zde jsou [další informace](/general/how-vpn-works.md) o tom, jak VPN funguje.

Pokud jde o AdGuard VPN, má několik funkcí:
* skrývá vaše skutečné místo pobytu a pomáhá vám zůstat v anonymitě
* změní vaši IP adresu a ochrání vaše data před sledováním
* zašifruje váš provoz, aby byl pro podvodníky nedostupný
* umožňuje nastavit, kde se má VPN používat a kde ne (funkce výjimek)

Další výhodou AdGuard VPN pro iOS je náš vlastní VPN protokol. Má dvě hlavní výhody: ve srovnání s ostatními VPN protokoly je velmi obtížné jej odhalit a funguje stabilně i při špatném internetovém připojení. Více informací o protokolu AdGuard VPN najdete v [tomto článku](../general/adguard-vpn-protocol.mdx).

## Jak používat AdGuard VPN pro iOS

Chcete-li používat AdGuard VPN pro iOS, musíte se nejprve přihlásit ke svému [Účtu AdGuard](https://my.adguard.com/). Přihlásit se můžete přímo pomocí přihlašovacích údajů k účtu AdGuard nebo prostřednictvím Google, Apple ID nebo Facebooku (pokud byl váš účet AdGuard zaregistrován pomocí stejné e-mailové adresy).

Pokud ještě nemáte účet AdGuard, musíte si ho nejprve vytvořit.

Používání AdGuard VPN je poměrně snadné. Na hlavní obrazovce se zobrazí tlačítko *Připojit/Odpojit* a seznam dostupných serverů. Tyto servery mají vlastní polohu (určitá země a město) a ukazatel hodnoty ping. Hodnota ping popisuje dobu odezvy serveru (v milisekundách). Například výběr serveru s hodnotou ping 22 ms znamená, že signál dorazí na server a vrátí se zpět za 22 milisekund. Takže čím nižší je tato hodnota, tím rychlejší je připojení. V aplikaci AdGuard VPN si můžete vybrat z více než 50 umístění v desítkách zemí.

![Hlavní obrazovka a umístění](https://cdn.adguard.com/content/kb/vpn/ios/1.png?123)

## Seznamy výjimek

Funkci výjimek najdete klepnutím na prostřední tlačítko níže. Zde uvidíte dva seznamy výjimek — pro Obecný a Selektivní režim. V Obecném režimu VPN funguje na všech webových stránkách kromě těch ze seznamu výjimek. V Selektivním režimu naopak VPN funguje pouze na stránkách ze seznamu. Domény webových stránek (např. `google.com`) nebo subdomény (např. `*.google.com`) můžete přidávat dvěma způsoby: můžete je zadat ručně v aplikaci nebo přímo z prohlížeče kliknutím na tlačítko *Sdílet* a vyhledáním AdGuard VPN v otevřeném seznamu níže.

![Výjimky](https://cdn.adguard.com/content/kb/vpn/ios/2.png?123)

Další užitečnou funkcí je Import/Export seznamů výjimek. Můžete to udělat podle následujících čtyř kroků:

1. Otevřete AdGuard VPN v zařízení/prohlížeči, ze kterého chcete exportovat seznamy výjimek. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `exclusions.zip`.

2. Uvnitř archivu jsou dva soubory `.txt`, jeden pro Obecný a druhý pro Selektivní seznam. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory (ale o tom až později) nebo nechat archiv se soubory tak, jak je.

3. Při přenosu mezi různými zařízeními nezapomeňte odeslat soubor `.zip` do zařízení pro import. Pokud například importujete seznamy výjimek ze zařízení se systémem iOS do systému macOS, nezapomeňte soubor `.zip` předem odeslat do systému macOS.

4. Otevřete AdGuard VPN v zařízení, do kterého chcete importovat archiv s připravenými seznamy výjimek. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv.

![Import/export výjimek](https://cdn.adguard.com/content/kb/vpn/ios/import-export-exclusions.png)

## Nastavení aplikace

Přístup k nastavení aplikace:

1. Klepněte na tlačítko Nastavení (⚙) v pravém dolním rohu hlavní obrazovky aplikace AdGuard VPN
2. Klepněte na *Nastavení aplikace*

Zde můžete AdGuard VPN pro iOS nakonfigurovat podle svých potřeb pomocí různých možností: Pracovní režim, DNS server, automatická ochrana Wi-Fi, barevný motiv a pokročilá nastavení.

![Nastavení aplikace](https://cdn.adguard.com/content/kb/vpn/ios/app-settings.png)

### Pracovní režim

AdGuard VPN pro iOS může fungovat ve dvou režimech: **Obecném** a **Integrovaném**.

V **Obecném režimu** je použit [protokol AdGuard VPN](../general/adguard-vpn-protocol.mdx), který poskytuje nejlepší kombinaci rychlosti a zabezpečení. V tomto režimu nebude moci AdGuard VPN fungovat spolu s [blokátorem reklam AdGuard pro iOS](https://kb.adguard.com/en/ios).

V **Integrovaném** režimu bude AdGuard VPN schopna pracovat současně s blokátorem reklam AdGuard pro iOS pomocí protokolu IPSec. Tento protokol je také bezpečný, ale o něco pomalejší a snáze zjistitelný. K nastavení integrace není třeba provádět žádné další akce: stačí nainstalovat obě aplikace a přepnout do tohoto režimu.
> Všimněte si, že v **Integrovaném** režimu nelze použít funkci Výjimky nebo vybrat DNS server.

### DNS server

Účelem decentralizovaného systému doménových názvů (DNS) je překládat názvy webových stránek do podoby srozumitelné prohlížečům, tj. do podoby IP adres. Tuto úlohu vykonávají DNS servery. AdGuard VPN pro iOS nabízí výběr z několika DNS serverů, z nichž každý má specifické vlastnosti. Například AdGuard DNS odstraňuje reklamy a chrání vaše zařízení před sledováním, zatímco AdGuard DNS Family Protection kombinuje funkce AdGuard DNS s funkcí bezpečného vyhledávání a blokování obsahu pro dospělé. DNS servery různých poskytovatelů DNS mohou také fungovat rychleji nebo pomaleji v závislosti na vaší poloze, poskytovateli internetových služeb a dalších faktorech. Vyberte si ten, který vám nejlépe vyhovuje. Více informací o DNS a jeho vlastnostech se dozvíte v [ tomto článku](https://kb.adguard.com/en/general/dns-filtering#what-is-dns).

![Obrazovka DNS serveru](https://cdn.adguard.com/content/kb/vpn/ios/dns-server.png)

### Automatická ochrana Wi-Fi

Když se zařízení připojí k síti Wi-Fi, VPN se automaticky zapne.

### Motiv

Můžete si vybrat výchozí systémový, tmavý nebo světlý motiv aplikace (k dispozici v iOS 13 a novějších verzích).

### Pokročilá nastavení

V *Pokročilých nastavení* najdete dvě části — Úroveň záznamu a Diagnostické informace. Pokud jde o první možnost, nedoporučujeme zapínat rozšířenou úroveň záznamu, pokud o to nepožádá náš tým podpory. Diagnostické informace, lokálně uložené technické informace o zařízení a připojeních (IP adresa, ID, ping atd.), nám mohou být zaslány v případě technických problémů.

## Rychlé akce (k dispozici v iOS 13 nebo novějších verzích)

Chcete-li k této funkci přistoupit, dotkněte se ikony aplikace, podržte ji a poté zvedněte prst. Zobrazí se seznam Rychlých akcí: Připojit/odpojit k aktuálně vybranému serveru, zvolit umístění pro výběr nového serveru. Můžete také samozřejmě přistupovat ke všem výchozím akcím, jako je odebrání aplikace nebo přesun ikony aplikace.

![Rychlé akce](https://cdn.adguard.com/content/kb/vpn/ios/quick-actions.png)


## Podpora

Úspěch uživatelů je pro nás prioritou. V aplikaci proto najdete řadu pomocných funkcí (stiskněte tlačítko *Nastavení* vpravo dole a poté *Podpora*): můžete si prohlédnout sekci FAQ, nahlásit chybu, zanechat zpětnou vazbu, diskutovat o svých problémech a návrzích na našem fóru, na sociálních sítích nebo na GitHubu, hodnotit AdGuard VPN pro iOS v App Store a exportovat protokoly.

![Podpora](https://cdn.adguard.com/content/kb/vpn/ios/support.png)

## Předplatné

Pokud používáte bezplatnou verzi AdGuard VPN, bude na spodní liště karet čtvrtá karta s ikonou šipky. V této části najdete stručné informace o hlavních výhodách placené verze aplikace a budete si moci zakoupit předplatné.

![Předplatné](https://cdn.adguard.com/content/kb/vpn/ios/subscription_en.png?123)