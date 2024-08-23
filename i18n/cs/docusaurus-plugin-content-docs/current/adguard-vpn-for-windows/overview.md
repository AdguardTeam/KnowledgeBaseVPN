---
title: Přehled funkcí
sidebar_position: 1
---

## Co dělá AdGuard VPN pro Windows

- Chrání před zachycením síťového provozu (spoofing). AdGuard VPN vytvoří šifrovaný tunel mezi vaším zařízením a vzdáleným serverem. Veškerý internetový provoz prochází tímto tunelem, takže vaše data jsou po cestě chráněna. A díky [jedinečnému AdGuard protokolu](/general/adguard-vpn-protocol) máte zaručeno rychlé a bezpečné připojení.

- Maskuje IP adresu. Vaše skutečná IP adresa je pro kyberzločince klíčem k vašim osobním údajům. Vaše jméno, e-mailová adresa, telefonní číslo a údaje o kreditní kartě se mohou dostat do rukou podvodníků, pokud neskryjete svou IP adresu. S AdGuard VPN prochází veškerý váš datový provoz šifrovaným tunelem a přichází na server VPN. Webový server registruje IP adresu koncového bodu tunelu, tj. serveru VPN, a nikoli skutečnou IP adresu zařízení.

- Skrývá vaši skutečnou polohu. Co tím získáte? Například možnost rezervovat si hotel za ceny pro místní obyvatele nebo se skrýt před geograficky cílenou reklamou.

AdGuard VPN pro Windows má mnoho výhod, proto jsme tomu věnovali [samostatný článek](/general/why-adguard-vpn). Zde se však chceme zaměřit spíše na samotnou aplikaci a její fungování.

## Jak začít používat AdGuard VPN pro Windows

Chcete-li začít používat AdGuard VPN pro Windows, stáhněte si aplikaci z [našich webových stránek](https://adguard-vpn.com/welcome.html). Instalace netrvá déle než minutu — zobrazí se dialogové okno, ve kterém je třeba zaškrtnout alespoň jedno políčko s podmínkami uživatelské smlouvy a zásady ochrany osobních údajů. Je na vás, zda chcete, aby AdGuard shromažďoval anonymizovaná data o používání aplikací. Nakonec vás program požádá o přihlášení, a to buď prostřednictvím účtu [AdGuard](https://auth.adguard.com/login.html), nebo prostřednictvím sociálních sítí (Apple, Google, Facebook). To je vše, nyní můžete používat AdGuard VPN pro Windows.

## Domovská obrazovka

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

Nejvýraznější položkou na **Domovské obrazovce** je tlačítko AdGuard VPN Připojit/Odpojit, pod nímž je zobrazen vybraný server. Na pravé straně obrazovky se zobrazí seznam dostupných umístění. Nejrychlejší umístění, tj. umístění s nejmenší odezvou ping se zobrazí na začátku seznamu. K dispozici je také tlačítko pro obnovení, na které můžete kliknout, pokud jsou některá místa offline.

V horní části obrazovky je navigační panel s pěti kartami: **Domů**, **Výjimky**, **Statistiky**, **Podpora** a **Nastavení**.

## Výjimky

Ve výchozím nastavení funguje AdGuard VPN pro Windows všude. Do seznamu výjimek můžete přidat webové stránky a aplikace, které chcete z tunelu VPN vyloučit. Nebo můžete nastavit, aby AdGuard VPN fungoval pouze na webových stránkách a aplikacích uvedených v seznamu výjimek. Upozorňujeme, že tyto dva seznamy jsou na sobě nezávislé.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Webové stránky můžete do výjimek **přidat ručně** zadáním názvů jejich domén. Aplikace také nabízí možnost vybrat si oblíbené weby **ze seznamu**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Při ručním přidávání domén byste měli vzít v úvahu určité podrobnosti. Pokud například ručně vyloučíte doménu `google.com`, budou do výjimek přidány také všechny subdomény `*.google.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `google.es` nebo `google.it`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane.

:::

Doporučujeme použít možnost **Ze seznamu**. Weby jsou rozděleny do osmi kategorií: sociální sítě, messengery, služby pro streamování videa a hudby, hry, nakupování, vyhledávače a nástroje pro pracovní komunikaci. Umístili jsme tam nejoblíbenější služby, včetně všech názvů domén a subdomén souvisejících s každou platformou.

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

### Import/export seznamů výjimek

Chcete-li exportovat seznam výjimek z AdGuard VPN pro Windows do počítače, klikněte na **Exportovat výjimky**, vyberte složku, do které bude seznam uložen, a klikněte na **Uložit**. Stáhne se archiv `exclusions.zip` se dvěma soubory `.txt`, jeden pro každý ze seznamů. Můžete je upravit přidáním nových výjimek nebo odstraněním starých.

V cílovém zařízení otevřete AdGuard VPN, klikněte na *Výjimky* a vyberte *Webové stránky* nebo *Aplikace*. Klikněte na *Importovat výjimky* a vyberte přijatý archiv.

## Statistiky

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

Obrazovka Statistiky zobrazuje podrobné informace o využití dat rozdělené do kategorií podle umístění a aplikací. Zvýrazňuje nejčastěji používaná umístění a aplikace. Můžete získat přístup ke statistikám za různá časová období: denní, měsíční nebo za celou dobu používání AdGuard VPN pro Windows.

Důležité je, že všechny tyto informace jsou uloženy výhradně ve vašem zařízení, takže je můžete zobrazit pouze vy. Přístup k funkci statistik mají pouze předplatitelé AdGuard VPN.

## Nastavení

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

Čtvrtá karta obsahuje části, které vám pomohou přizpůsobit aplikaci.

### Nastavení aplikace

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

V sekci **Nastavení aplikace** můžete nastavit jazyk aplikace a také povolit funkci **Kill Switch**, která zablokuje přístup k internetu, pokud připojení VPN selže. Tím se zabrání vetřelcům v přístupu k vašim datům, pokud se ocitnete bez ochrany VPN a jste připojeni k veřejné síti Wi-Fi nebo mobilní síti.

Jedním kliknutím můžete také aktivovat následující funkce: **automatické aktualizace**, **spuštění AdGuard VPN při spuštění systému Windows**, **automatické připojení při spuštění aplikace**, a také umožnit společnosti AdGuard shromažďovat anonymizovaná data o používání aplikace. Zde můžete také změnit motiv na **Světlý**, **Systémový**, nebo **Tmavý**.

Ve spodní části stránky jsou dvě sekce: **DNS servery** a **Pokročilá nastavení**.

#### DNS servery

Karta **DNS servery** umožňuje přidat vlastní DNS server — ručně nebo ze seznamu. DNS server můžete nastavit u libovolného poskytovatele. Doporučujeme přidat server [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), který kromě standardních funkcí dokáže chránit před reklamami, sledováním a krádeží identity.

#### Pokročilá nastavení

Je zcela možné používat AdGuard VPN pro Windows, aniž byste se dotkli pokročilých nastavení, ale mohou být užitečná, pokud jste ochotni věnovat čas tomu, abyste se naučili, k čemu slouží.

##### Pracovní režim

Přestože existují dva provozní režimy — VPN a SOCKS5 — doporučujeme používat pouze ten, který je zvolen jako výchozí (VPN). Když je povolen režim **VPN**, veškerý datový provoz vašeho zařízení bude přesměrován přes AdGuard VPN, zatímco v režimu **SOCKS5** AdGuard VPN používá místní proxy server, který mohou používat jiné aplikace k přesměrování svého datového provozu.

##### Úroveň záznamu

Na výběr jsou dvě úrovně záznamu: **Výchozí záznam** a **Záznam všeho**. První možnost je ve výchozím nastavení povolena. Možnost **Zaznamenat vše** by měla být zapnuta pouze v případě, že vás o to požádá náš tým podpory. Při delším používání aplikace v tomto režimu dochází ke zvýšené spotřebě baterie.

Všechny záznamy jsou uloženy lokálně v zařízení a v případě potřeby je můžete odeslat na naši podporu.

##### Použití QUIC

Jedná se o experimentální funkci, která umožňuje AdGuardu používat pokročilý šifrovací protokol QUIC. Má mnoho výhod, ale tou nejvýznamnější je, že dokáže zlepšit kvalitu připojení za neideálních podmínek, například při používání mobilního internetu nebo při připojování k veřejným sítím Wi-Fi.

#### Použít WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun je ovladač směrování provozu, který se běžně používá pro implementace VPN v systému Windows a který zlepšuje kvalitu připojení VPN vytvořením virtuálního síťového adaptéru. Ve výchozím nastavení používá AdGuard VPN běžný ovladač WFP (a ovladač TDI pro Windows 7).

#### Výjimky podsítě

Tato funkce umožňuje přidávat podsítě pro vyloučení provozu z konkrétních zařízení připojených k síti. Např. váš robotický vysavač.

## Další karty

### O programu

Na kartě **O programu** najdete informace o aktuální verzi AdGuard VPN pro Windows, tlačítko pro aktualizaci a odkazy na webové stránky AdGuardu, fórum, smlouvu EULA a zásady ochrany osobních údajů.

### Účet

Zde najdete informace o stavu své licence a také odkaz na svůj osobní účet AdGuard, kde můžete spravovat své stávající předplatné a nakupovat nové.

## Podpora

Tato karta je zaměřena na řešení otázek uživatelů: najdete zde odkaz na stránku s nejčastějšími dotazy, můžete nahlásit chybu nebo zanechat zpětnou vazbu a exportovat protokoly, pokud vás o to tým podpory požádá.
