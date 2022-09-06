---
title: Přehled funkcí
sidebar position: 1
---

## Co je AdGuard VPN pro Windows

VPN, což je zkratka pro "virtuální privátní síť", je služba, která zajišťuje bezpečné připojení k internetu a pomáhá vám zůstat v anonymitě online. Jak VPN funguje? Pokaždé, když navštívíte webovou stránku bez použití sítě VPN, vidí ji váš poskytovatel internetových služeb (ISP). Ví, kdo jste a co hledáte, a může tato data shromažďovat a prodávat. Webové stránky, které jste navštívili, zase mohou sledovat vaši aktivitu. Když zapnete aplikaci VPN, přesměruje váš datový provoz přes šifrovaný tunel na vzdálený server VPN, čímž zajistí vaše soukromí: ISP neví, kam jste odeslali požadavek, a web neví, odkud jste přišli.

**Co dělá AdGuard VPN pro Windows**

* Chrání před zachycením síťového provozu (spoofing). AdGuard VPN vytvoří šifrovaný tunel mezi vaším zařízením a vzdáleným serverem. Veškerý internetový provoz prochází tímto tunelem, takže vaše data jsou po cestě chráněna. A díky [jedinečnému AdGuard protokolu](/general/adguard-vpn-protocol.mdx) máte zaručeno rychlé a bezpečné připojení.

* Maskuje IP adresu. Vaše skutečná IP adresa je pro kyberzločince klíčem k vašim osobním údajům. Vaše jméno, e-mailová adresa, telefonní číslo a údaje o kreditní kartě se mohou dostat do rukou podvodníků, pokud neskryjete svou IP adresu. Jak jsme již uvedli, s AdGuard VPN prochází veškerý váš datový provoz šifrovaným tunelem a přichází na server VPN. Zvenčí se tedy zdá, že vaše zařízení má IP adresu uvedeného serveru VPN.

* Skrývá vaši skutečnou polohu. Výběrem některého ze serverů AdGuard VPN budete okamžitě "teleportováni" do jeho umístění. Co tím získáte? Například možnost rezervovat si hotel za ceny pro místní obyvatele nebo se skrýt před geograficky cílenou reklamou.

AdGuard VPN pro Windows má mnoho výhod, proto jsme tomu věnovali [samostatný článek](/general/why-adguard-vpn.md). Zde se však chceme zaměřit spíše na samotnou aplikaci a její fungování.

## Jak začít používat AdGuard VPN pro Windows

Chcete-li začít používat AdGuard VPN pro Windows, stáhněte si aplikaci z [našich webových stránek](https://adguard-vpn.com/en/welcome.html). Instalace netrvá déle než minutu — zobrazí se dialogové okno, ve kterém je třeba zaškrtnout alespoň jedno políčko s podmínkami uživatelské smlouvy a zásady ochrany osobních údajů. Je na vás, zda chcete, aby AdGuard shromažďoval anonymizovaná data o používání aplikací. Nakonec vás program požádá o přihlášení, a to buď prostřednictvím účtu [AdGuard](https://auth.adguard.com/login.html), nebo prostřednictvím sociálních sítí (Apple, Google, Facebook). To je vše, nyní můžete používat AdGuard VPN pro Windows.


## Domovská obrazovka

![Domovská stránka AdGuard VPN pro Windows](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

Nejvýraznější položkou na domovské obrazovce **** je tlačítko pro připojení/odpojení AdGuard VPN. Pod ním vidíte [režim](#exclusions), ve kterém je aplikace spuštěna, a vybraný server. Na pravé straně obrazovky najdete všechna dostupná umístění. Nejrychlejší, tj. s nejkratší odezvou ping, bude uvedeno na začátku seznamu.

V horní části obrazovky se nachází navigační panel se čtyřmi kartami: **Domů**, **Výjimky**, **Podpora**, **Nastavení**. Když je první karta hotová, přejděme k dalšímu kroku.


## Výjimky

AdGuard VPN pro Windows může pracovat ve dvou režimech: **Obecném** nebo **Selektivním**. Co to znamená? Pokud chcete, aby aplikace fungovala na všech webech kromě několika, zapněte **Obecný režim** a uveďte zdroje, které chcete z tunelu vyloučit. **Selektivní režim** má opačný účinek: zapne AdGuard VPN pouze na webových stránkách uvedených v seznamu výjimek. Upozorňujeme, že seznamy výjimek těchto dvou režimů jsou na sobě nezávislé.

![Výjimky](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

Existují dvě možnosti vytváření seznamů výjimek: **Ručně** a **Ze seznamu**. Klikněte na řádek **Přidat webovou stránku** a vyberte formát, který preferujete pro přidávání webů do výjimek.

![Přidat výjimky](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Přidat výjimky ze seznamu](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Při ručním přidávání domén byste měli vzít v úvahu některé nuance. Pokud například ručně vyloučíte doménu `google.com`, budou do výjimek přidány také všechny subdomény `*.google.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `google.es` nebo `google.it`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane.

Doporučujeme použít možnost **Ze seznamu**, abyste se vyhnuli zbytečným potížím. Seznamy jsou rozděleny do osmi kategorií: sociální sítě, messengery, služby pro streamování videa a hudby, hry, nakupování, vyhledávače a nástroje pro pracovní komunikaci. Umístili jsme tam nejoblíbenější služby, včetně všech názvů domén a subdomén souvisejících s každou platformou. Tak budete mít jistotu, že jste nezapomněli na žádnou službu nebo doménu, kterou byste chtěli zachovat funkční i při zapnuté VPN, nebo naopak.

### Import/export seznamů výjimek

V kartě **Výjimky** na pravé straně obrazovky se nachází sekce **Akce**. To se může hodit, pokud potřebujete exportovat nebo importovat hotové seznamy výjimek.

Chcete-li exportovat seznam výjimek z AdGuard pro Windows do počítače, klikněte na **Exportovat výjimky**, vyberte složku, do které bude seznam uložen, a klikněte na **Uložit**. Stáhne se archiv `exclusions.zip` se dvěma soubory `.txt`, po jednom pro každý ze seznamů — **Obecný** a **Selektivní**. Můžete je upravit přidáním nových výjimek nebo odstraněním starých.

Chcete-li přenést seznamy výjimekdo jiného zařízení, odešlete tam soubor `.zip`. Otevřete AdGuard VPN na zařízení, do kterého chcete importovat archiv s připravenými seznamy výjimek, klikněte na *Výjimky*, poté na *Importovat výjimky* a vyberte dříve odeslaný archiv.

## Nastavení

![Nastavení](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

Čtvrtá karta v panelu aplikace obsahuje sekce, které vám pomohou přizpůsobit aplikaci. Podívejme se blíže na dvě z nich: **Obecné** a **Dělený tunel**.


### Obecné

Sekce **Obecné** obsahuje mnoho užitečných funkcí. Zde můžete nastavit jazyk aplikace a také povolit funkci **Kill Switch**, která zablokuje přístup k internetu, pokud připojení VPN selže. Tím se zabrání vetřelcům v přístupu k vašim datům, pokud se ocitnete bez ochrany VPN a jste připojeni k veřejné síti Wi-Fi nebo mobilní síti.

Jedním kliknutím můžete také aktivovat následující funkce: **automatické aktualizace**, **spuštění AdGuard VPN při spuštění systému Windows**, **automatické připojení při spuštění aplikace**, a také umožnit společnosti AdGuard shromažďovat anonymizovaná data o používání aplikace. Zde můžete také změnit výchozí **světlý** motiv na **tmavý**.

Ve spodní části stránky jsou dvě sekce: **DNS servery** a **Pokročilá nastavení**.

![Nastavení DNS a pokročilá nastavení](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS servery

Karta **DNS servery** umožňuje přidat vlastní DNS server. Proč byste to měli udělat? Například nespoléhat se na výchozí DNS server, který je často řízen poskytovatelem internetových služeb (ISP).

DNS server můžete nastavit u libovolného poskytovatele. Doporučujeme přidat server [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), který kromě standardních funkcí dokáže chránit před reklamami, sledováním a krádeží identity.

#### Pokročilá nastavení

Je zcela možné používat AdGuard VPN pro Windows, aniž byste se dotkli pokročilých nastavení, ale mohou být užitečná, pokud jste ochotni věnovat čas tomu, abyste se naučili, k čemu slouží.

**Pracovní režim**

Přestože existují dva provozní režimy — VPN a SOCKS5 — doporučujeme používat pouze ten, který je zvolen jako výchozí (VPN). Když je povolen režim **VPN**, veškerý datový provoz vašeho zařízení bude přesměrován přes AdGuard VPN, zatímco v režimu **SOCKS5** AdGuard VPN používá místní proxy server, který mohou používat jiné aplikace k přesměrování svého datového provozu.

**Úroveň záznamu**

Na výběr jsou dvě úrovně záznamu: **Výchozí záznam** a **Záznam všeho**. První možnost je ve výchozím nastavení povolena. Možnost **Záznam vše** by měla být zapnuta pouze v případě, že vás o to požádá náš tým podpory. Při delším používání aplikace v tomto režimu dochází ke zvýšené spotřebě baterie.

Všechny záznamy jsou uloženy lokálně v zařízení a v případě potřeby je můžete odeslat na naši podporu.

**Použití QUIC**

Jedná se o experimentální funkci, která umožňuje AdGuardu používat pokročilý šifrovací protokol QUIC. Má mnoho výhod, ale tou nejvýznamnější je, že dokáže zlepšit kvalitu připojení za neideálních podmínek, například při používání mobilního internetu nebo při připojování k veřejným sítím Wi-Fi.


### Dělený tunel

![Dělený tunel](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN šifruje datový provoz nejen prohlížečů, ale i dalších aplikací nainstalovaných v počítači. Pokud chcete z AdGuardu vyloučit určité aplikace, vložte je do seznamu **Dělený tunel**.

## Další karty

### O programu

Na kartě **O programu** najdete informace o aktuální verzi AdGuard VPN pro Windows, tlačítko pro aktualizaci a několik užitečných odkazů: Webové stránky AdGuardu, fórum, smlouvu EULA a zásady ochrany osobních údajů.

### O licenci

Zde najdete informace o stavu své licence a také odkaz na svůj osobní účet AdGuard, kde můžete spravovat své stávající předplatné a nakupovat nové.

## Podpora

Na této kartě jsme shromáždili mnoho užitečných odkazů: stránku FAQ, formulář pro zpětnou vazbu k aplikaci, stránky sociálních médií a **Databázi znalostí**.