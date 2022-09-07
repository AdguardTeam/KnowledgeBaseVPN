---
title: Jak VPN funguje
sidebar_position: 1
---

Abyste pochopili, jak AdGuard VPN funguje, měli byste nejprve porozumět obecným principům služby VPN.

## Funkce VPN

VPN je virtuální privátní síť, která pomáhá skrýt vaši polohu a chránit vaše data na webu. VPN připojuje počítač nebo mobilní zařízení k serveru VPN a používá IP adresu tohoto serveru, aby se vnějšímu pozorovateli zdálo, že jste na jiném místě. Můžete tak bezpečně přistupovat k různým internetovým zdrojům a chránit své osobní údaje.

VPN tak plní dvě důležité funkce:

1. **Zachování anonymity**

Pomocí internetového připojení zanechává uživatel svou digitální stopu, kterou pak mohou analyzovat a využívat třetí strany. Například některý z internetových obchodů, které jste navštívili, si může uložit historii vašeho vyhledávání a na jejím základě vám pak nabízet své produkty prostřednictvím cílené reklamy. Nebo mohou tajné služby po zjištění vaší polohy prostřednictvím IP adresy vašeho zařízení a zjištění vaší totožnosti tajně sledovat vaši aktivitu na webu. Kromě toho mohou webové prohlížeče a samotní poskytovatelé internetových služeb používat historii procházení pro své vlastní účely, prodávat ji inzerentům a poskytovat ji státním institucím. VPN umožňuje skrýt vaši IP adresu a nahradit ji IP adresou serveru VPN, ke kterému jste připojeni. Tímto způsobem budete moci zachovat své soukromí a anonymně vyhledávat informace na webu.

2. **Ochrana dat**

Pokud se připojíte k nespolehlivé nebo veřejné síti, mohou být data ve vašem zařízení zranitelná pro kyberzločince. Údaje o bankovních kartách, uživatelská jména a hesla, údaje o cestovních pasech — všechny tyto údaje mohou zachytit online podvodníci. VPN tunel šifruje informace, které odesíláte a přijímáte z webu, takže se nemohou dostat do nepovolaných rukou.

## Struktura VPN

Po připojení k síti je počítači nebo mobilnímu zařízení přiděleno jedinečné identifikační číslo neboli IP adresa. Obvykle se skládá z čísel od 0 do 255 oddělených tečkami nebo dvojtečkami. Znalost této sekvence umožňuje určit zeměpisnou polohu zařízení. IP adresa je obvykle nastavena poskytovatelem internetových služeb a je viditelná až k požadovanému zdroji. Z tohoto důvodu může webový server navštívené stránky zaregistrovat vaši IP adresu a zaznamenat, co jste požadovali. Tento záznam pak může sloužit především ke sběru dat a analýze provozu.

VPN vytváří tunel mezi vaším zařízením a serverem VPN. Vaše data projdou tímto tunelem, zašifrují se a poté se v zabezpečené podobě dostanou do otevřeného internetu. Proto se webovému serveru bude zdát, že vaše zařízení již nemá vaši skutečnou IP adresu, ale IP adresu koncového bodu tunelu, tedy serveru VPN. Stránky, na které se dostanete po průchodu tunelem VPN, tak budou považovat geolokaci vybraného serveru VPN za vaši skutečnou polohu. A zašifrovaná data se nedostanou do rukou inzerentů, hackerů ani bezpečnostních služeb.

![Struktura VPN](https://cdn.adguard.com/public/Adguard/Website/Images/seo/en/how_vpn_3.jpg)

## Typy VPN protokolů

Bezpečnostní protokoly VPN jsou nástroje, které šifrují data v tunelu VPN a umožňují zachovat soukromí uživatele v otevřeném internetu. V současné době používá naprostá většina moderních služeb VPN jeden ze tří následujících protokolů VPN:

1. [*IPSec*](https://en.wikipedia.org/wiki/IPsec). Jednou z jeho hlavních výhod je, že je k dispozici na většině zařízení a operačních systémech a poskytuje vysokou úroveň zabezpečení. Použití dvojitého [zapouzdření](https://en.wikipedia.org/wiki/Encapsulation_(networking)) v tomto protokolu však může mít za následek nižší rychlost připojení.

2. [*OpenVPN*](https://en.wikipedia.org/wiki/OpenVPN). Tento moderní protokol má otevřený zdrojový kód, takže výrobci třetích stran mohou technologii vylepšovat a aktualizovat.

3. [*WireGuard*](https://en.wikipedia.org/wiki/WireGuard). Jeho hlavními výhodami jsou snadné použití, vysoká účinnost a nízká zranitelnost vůči útokům.

Kromě těchto protokolů VPN existují i další (například TLS, SSTP, IKEv2), které však nejsou oblíbené nebo nesplňují moderní standardy šifrování dat.

![Jak funguje protokol VPN](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/4.svg)

AdGuard VPN má také svůj vlastní [*protokol*](adguard-vpn-protocol.mdx). Jednou z jeho výhod je, že provoz přenášený pomocí protokolu AdGuard VPN je obtížné odlišit od běžného provozu. VPN tunel vypadá jako běžný provoz HTTPS, takže je velmi obtížné jej odhalit a zablokovat. Navíc je založen na mechanismech moderního protokolu HTTP/2, který zajišťuje vysokou rychlost připojení.

![Jak funguje skrytá síť VPN](https://cdn.adguard.com/public/Adguard/Blog/vpn/protocol/5.svg)

## Nevýhody VPN

Navzdory zjevným výhodám není VPN dokonalá a má některé nevýhody:

**Nižší rychlosti**

Protože váš provoz nesměřuje přímo na webový server, ale nejprve prochází serverem VPN, rychlost připojení VPN se tím snižuje. Rychlost při používání VPN ovlivňují i další faktory: zatížení serveru VPN, jeho šířka pásma, kompatibilita protokolu VPN s vaším operačním systémem. Všechny tyto faktory, stejně jako rychlost samotné sítě, mohou snížit kvalitu připojení VPN.

**Blokování přístupu**

Některé online služby vynakládají velké úsilí na detekci provozu VPN a blokují přístup uživatelům VPN. Málokterá síť VPN však dokáže maskovat svůj provoz jako běžný. Proto mnoho pokusů přejít na určitou webovou stránku bez vypnutí VPN skončí bez úspěchu.

**Přerušení VPN připojení**

Slabý signál, přetížení sítě, nekompatibilita VPN s firewallem, antivirem a dalšími programy, zastaralý protokol VPN — to vše může způsobit náhlý výpadek připojení VPN, zejména u nespolehlivých poskytovatelů VPN.

## AdGuard VPN

Naše služba VPN má několik důležitých [výhod](why-adguard-vpn.md):

* [*Vlastní protokol VPN*](adguard-vpn-protocol.mdx), který funguje stabilně i při pomalém připojení k internetu a maskuje se jako běžný provoz, takže je obtížnější jej sledovat a blokovat

* [*"Zásady nulových záznamů aktivit"*](https://adguard-vpn.com/en/privacy.html), což znamená, že AdGuard VPN neshromažďuje vaše osobní údaje a nepředává je třetím stranám

* *Více než 50 VPN serverů v desítkách zemí*

* *Snadné používání a rozsáhlé možnosti přizpůsobení*

V současné době je AdGuard VPN k dispozici jako:

* [Rozšíření prohlížeče](../adguard-vpn-browser-extension/overview.md) pro Chrome, Firefox a Edge

* Mobilní aplikace pro [Android](../adguard-vpn-for-android/overview.md) a [iOS](../adguard-vpn-for-ios/overview.md)

* Desktopová aplikace pro [Windows](../adguard-vpn-for-windows/overview.md) a [Mac](../adguard-vpn-for-mac/overview.md)

Více informací o funkcích AdGuard VPN (včetně neomezené verze) najdete [zde](https://adguard-vpn.com/en/welcome.html).
