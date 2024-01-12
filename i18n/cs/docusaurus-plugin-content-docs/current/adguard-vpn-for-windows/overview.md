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

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Nejvýraznější položkou na domovské obrazovce **** je tlačítko pro připojení/odpojení AdGuard VPN. Nad tlačítkem se zobrazí [režim](#exclusions), ve kterém je aplikace spuštěna a pod ním vybraný server. Na pravé straně obrazovky najdete všechna dostupná umístění. Nejrychlejší umístění, tj. umístění s nejmenší odezvou ping se zobrazí na začátku seznamu.

V horní části obrazovky se nachází navigační panel se čtyřmi kartami: **Domů**, **Výjimky**, **Podpora**, **Nastavení**.

## Výjimky

AdGuard VPN pro Windows může pracovat ve dvou režimech. Ve výchozím nastavení funguje aplikace všude a můžete vypsat weby a aplikace, které chcete z tunelu vyloučit. Můžete však přepnout do opačného režimu: AdGuard VPN se spustí pouze na webových stránkách a v aplikacích uvedených v seznamu výjimek. Upozorňujeme, že tyto dva seznamy jsou na sobě nezávislé.

![Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Webové stránky můžete do výjimek **přidat ručně** zadáním názvů jejich domén. Aplikace také nabízí možnost vybrat si oblíbené weby **ze seznamu**.

![Add Exclusions](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Add Exclusions from list](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

Při ručním přidávání domén byste měli vzít v úvahu některé nuance. Pokud například ručně vyloučíte doménu `google.com`, budou do výjimek přidány také všechny subdomény `*.google.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `google.es` nebo `google.it`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane.

:::

Doporučujeme použít možnost **Ze seznamu**. Weby jsou rozděleny do osmi kategorií: sociální sítě, messengery, služby pro streamování videa a hudby, hry, nakupování, vyhledávače a nástroje pro pracovní komunikaci. Umístili jsme tam nejoblíbenější služby, včetně všech názvů domén a subdomén souvisejících s každou platformou.

### Import/export seznamů výjimek

Chcete-li exportovat seznam výjimek z AdGuard VPN pro Windows do počítače, klikněte na **Exportovat výjimky**, vyberte složku, do které bude seznam uložen, a klikněte na **Uložit**. Stáhne se archiv `exclusions.zip` se dvěma soubory `.txt`, jeden pro každý ze seznamů. Můžete je upravit přidáním nových výjimek nebo odstraněním starých.

V cílovém zařízení otevřete AdGuard VPN, klikněte na *Výjimky* a vyberte *Webové stránky* nebo *Aplikace*. Klikněte na *Importovat výjimky* a vyberte přijatý archiv.

## Nastavení

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

Čtvrtá karta obsahuje části, které vám pomohou přizpůsobit aplikaci.

### Nastavení aplikace

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

V sekci **Nastavení aplikace** můžete nastavit jazyk aplikace a také povolit funkci **Kill Switch**, která zablokuje přístup k internetu, pokud připojení VPN selže. Tím se zabrání vetřelcům v přístupu k vašim datům, pokud se ocitnete bez ochrany VPN a jste připojeni k veřejné síti Wi-Fi nebo mobilní síti.

Jedním kliknutím můžete také aktivovat následující funkce: **automatické aktualizace**, **spuštění AdGuard VPN při spuštění systému Windows**, **automatické připojení při spuštění aplikace**, a také umožnit společnosti AdGuard shromažďovat anonymizovaná data o používání aplikace. Zde můžete také změnit motiv na **Světlý**, **Systémový**, nebo **Tmavý**.

Ve spodní části stránky jsou dvě sekce: **DNS servery** a **Pokročilá nastavení**.

#### DNS servery

Karta **DNS servery** umožňuje přidat vlastní DNS server. DNS server můžete nastavit u libovolného poskytovatele. Doporučujeme přidat server [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), který kromě standardních funkcí dokáže chránit před reklamami, sledováním a krádeží identity.

#### Pokročilá nastavení

Je zcela možné používat AdGuard VPN pro Windows, aniž byste se dotkli pokročilých nastavení, ale mohou být užitečná, pokud jste ochotni věnovat čas tomu, abyste se naučili, k čemu slouží.

##### Pracovní režim

Přestože existují dva provozní režimy — VPN a SOCKS5 — doporučujeme používat pouze ten, který je zvolen jako výchozí (VPN). Když je povolen režim **VPN**, veškerý datový provoz vašeho zařízení bude přesměrován přes AdGuard VPN, zatímco v režimu **SOCKS5** AdGuard VPN používá místní proxy server, který mohou používat jiné aplikace k přesměrování svého datového provozu.

##### Úroveň záznamu

Na výběr jsou dvě úrovně záznamu: **Výchozí záznam** a **Záznam všeho**. První možnost je ve výchozím nastavení povolena. Možnost **Zaznamenat vše** by měla být zapnuta pouze v případě, že vás o to požádá náš tým podpory. Při delším používání aplikace v tomto režimu dochází ke zvýšené spotřebě baterie.

Všechny záznamy jsou uloženy lokálně v zařízení a v případě potřeby je můžete odeslat na naši podporu.

##### Použití QUIC

Jedná se o experimentální funkci, která umožňuje AdGuardu používat pokročilý šifrovací protokol QUIC. Má mnoho výhod, ale tou nejvýznamnější je, že dokáže zlepšit kvalitu připojení za neideálních podmínek, například při používání mobilního internetu nebo při připojování k veřejným sítím Wi-Fi.

### Výjimky aplikací

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN šifruje nejen provoz vašich prohlížečů, ale také ostatních aplikací nainstalovaných ve vašem zařízení. Pokud chcete z tunelování vyloučit určité aplikace, vložte je do seznamu **Výjimky aplikací**.

## Další karty

### O programu

Na kartě **O programu** najdete informace o aktuální verzi AdGuard VPN pro Windows, tlačítko pro aktualizaci a odkazy na webové stránky AdGuardu, fórum, smlouvu EULA a zásady ochrany osobních údajů.

### Účet

Zde najdete informace o stavu své licence a také odkaz na svůj osobní účet AdGuard, kde můžete spravovat své stávající předplatné a nakupovat nové.

## Podpora

Tato karta je zaměřena na řešení otázek uživatelů: najdete zde odkaz na stránku s nejčastějšími dotazy, můžete nahlásit chybu nebo zanechat zpětnou vazbu a exportovat protokoly, pokud vás o to tým podpory požádá.
