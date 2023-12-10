---
title: 'Jak funguje protokol AdGuard VPN'
sidebar_position: 4
---

Náš protokol používají všechny [mobilní a desktopové aplikace AdGuard VPN](https://adguard-vpn.com/welcome.html). Stáhněte si některý z našich produktů a používejte jej s vědomím, že vaše data jsou chráněna tím nejbezpečnějším způsobem.

## Proč jsme vytvořili protokol AdGuard VPN

Dlouhá léta jsme se soustředili na vývoj nejrůznějších aplikací a rozšíření prohlížeče pro blokování reklam. A v roce 2019 jsme se zdánlivě z ničeho nic rozhodli vyvinout vlastní službu VPN. Ve skutečnosti nás k tomu vedlo několik důvodů.

- Mobilní aplikace AdGuard měly problémy s kompatibilitou s aplikacemi VPN. Obvykle dvě mobilní aplikace založené na VPN nemohou fungovat společně: ve výjimečných případech v systému iOS a nikdy v systému Android. Vzhledem k tomu, že aplikace blokátor reklam AdGuard používá k filtrování síťového provozu místní síť VPN, nepřichází její použití spolu s jakoukoli aplikací VPN v úvahu. Proto jsme považovali vývoj vlastní sítě VPN za jediné schůdné řešení, které by mohlo zaručit kompatibilitu: po použití určité magie jsou obě aplikace schopny spolupracovat jako jedna služba VPN.
- Za druhé, VPN se zdála být více než relevantní pro naši filozofii a priority. Naším hlavním cílem je chránit soukromí uživatelů, a právě k tomu slouží sítě VPN.
- Za léta vývoje softwaru AdGuard jsme se stali odborníky na filtrování síťového provozu. To nám umožnilo přinést něco nového namísto toho, abychom se stali další nešťastnou VPN.

Od začátku jsme se rozhodli, že AdGuard VPN se bude od svých konkurentů lišit jednou zásadní věcí — vytvoříme a nasadíme vlastní protokol VPN, který nebude nutit uživatele volit mezi bezpečností a rychlostí.

## Nevýhody oblíbených protokolů VPN

Protokol AdGuard VPN jsme vytvořili s ohledem na nevýhody populárních protokolů VPN (OpenVPN, WireGuard, IPSec atd.):

- Lze je snadno odhalit a zablokovat na úrovni sítě.
- Pokud se je pokusíte "skrýt", výkon se sníží.

Pro "utajení" použití VPN je datový tok často "zabalen" do spojení TCP a někdy je navíc šifrován, aby provoz vypadal jako běžné připojení k webové stránce. Tento přístup má bohužel jednu nevýhodu — vzhledem k použití protokolu TCP je nutné dodatečné potvrzení doručení.

Při použití jakéhokoli oblíbeného protokolu VPN se vždy setkáváme s kompromisem: rychlý, ale snadno zjistitelný vs. pomalý.

## Co je na protokolu AdGuard VPN skvělé

- Je *téměř nemožné ho odlišit od běžného provozu HTTPS*, to znamená, že připojení k serveru AdGuard VPN vypadá úplně stejně jako připojení k normální webové stránce.
- Pro šifrování používáme **HTTPS (TLS)**, který tento úkol zvládá dokonale. Jedná se o nejoblíbenější šifrovací metodu na světě a knihovny, které ji implementují, jsou neustále kontrolovány z hlediska bezpečnosti.

Některé existující protokoly VPN zvládnou i úlohu šifrování a je obtížné je (a tedy i skutečnost, že používáte VPN) odhalit. Obvykle je to však za cenu snížení rychlosti. To se v našem případě nestane díky několika řešením.

- Používáme **přenosový protokol HTTP/2**, který prakticky znemožňuje detekci protokolu AdGuard VPN při zachování vysoké rychlosti.
- Na rozdíl od ostatních, protokol AdGuard VPN *pracuje s daty, nikoli s pakety*. To znamená, že AdGuard VPN vytváří pro každé připojení samostatný "tunel", přičemž každý stream HTTP/2 odpovídá jednomu připojení. AdGuard VPN přenáší data prostřednictvím tohoto tunelu. To nám umožňuje urychlit operaci úsporou potvrzovacích paketů, protože data několika paketů můžeme před odesláním na server VPN (nebo ze serveru ke klientovi) vložit do jedné vyrovnávací paměti. A čím méně paketů, tím méně potvrzení je potřeba.
