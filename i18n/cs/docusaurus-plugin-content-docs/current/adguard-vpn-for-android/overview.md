---
title: Přehled funkcí
sidebar_position: 1
---

## Co je AdGuard VPN pro Android

VPN je ideální nástroj, který zajišťuje bezpečnost a anonymitu při každém procházení internetu. [Jak funguje?](/general/how-vpn-works.md) Aniž bychom zacházeli do technických podrobností, můžeme říci, že VPN vytváří bezpečný šifrovaný tunel mezi počítačem nebo mobilním zařízením uživatele a vzdáleným serverem VPN. Tímto způsobem je zachována důvěrnost dat i anonymita uživatele, protože pozorovatel třetí strany vidí IP adresu serveru VPN, a nikoli skutečnou IP adresu uživatele.

**VPN se často používá pro:**

* Zabezpečení osobních údajů i při používání veřejné sítě Wi-Fi
* Zabránění sledování online aktivit maskováním IP adresy
* Skrytí skutečné zeměpisné polohy pro zachování anonymity

AdGuard VPN pro Android to všechno zvládne za vás — a dokonce nabízí něco jedinečného. Chcete-li zjistit, proč je AdGuard VPN nejlepší volbou — přečtěte si [tento článek](/general/why-adguard-vpn.md).

## Jak začít používat AdGuard VPN pro Android

Nejprve stáhněte AdGuard VPN z [Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) a přihlaste se ke svému účtu AdGuard. V případě, že jej nemáte — měli byste si jej [vytvořit](https://auth.adguard.com/login.html). Můžete se přihlásit přímo pomocí přihlašovacích údajů k účtu AdGuard. Nebo to můžete udělat přes Google nebo Facebook, pokud byl váš účet AdGuard zaregistrován pod stejnou e-mailovou adresou.


## Hlavní obrazovka

Na hlavní obrazovce jsou dva panely, které odrážejí stav aplikace (Připojeno/Odpojeno) a zvolený režim výjimek ([Obecný/Selektivní](#lists-of-exclusions)). Na stejné obrazovce je také tlačítko *Připojit/Odpojit* a seznam dostupných serverů.

U každého serveru je uvedeno jeho umístění a hodnota ping, která popisuje dobu odezvy serveru. Čím nižší je tato hodnota, tím rychlejší je připojení. Nejrychlejší možnosti se vždy zobrazují v horní části seznamu, který obsahuje více než 50 umístění v desítkách zemí. K nejrychlejšímu serveru se můžete připojit klepnutím na tlačítko *Připojit/Odpojit* nebo výběrem umístění.


## Výjimky

Udělali jsme vše pro to, abychom vám usnadnili správu seznamů výjimek webů a aplikací. AdGuard VPN bude fungovat pouze tam, kde si zvolíte.


### Seznamy výjimek

Seznamy výjimek umožňují vybrat weby, pro které má být VPN zapnuta a pro které vypnuta. Do sekce *Výjimky* se dostanete klepnutím na druhou ikonu zleva ve spodní části obrazovky.

Existují dva režimy: v *Obecném režimu* jsou vyloučeny weby ze seznamu výjimek a v *Selektivním režimu* jsou to jen ty weby, kde AdGuard VPN funguje.

Domény (např. `google.com`) nebo subdomény (např. `*.google.com`) webových stránek můžete do *Výjimek* přidat třemi způsoby: zadejte je ručně v aplikaci nebo přímo z prohlížeče kliknutím na tlačítko *Sdílet* a výběrem AdGuard VPN v otevřeném seznamu níže. Můžete je také přidávat z vestavěných seznamů služeb rozdělených podle kategorií.

![Výjimky](https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Při ručním přidávání domén existují určité nuance. Pokud například ručně vyloučíte doménu `yahoo.com`, budou ve výjimkách uvedeny také všechny subdomény `*.yahoo.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `yahoo.jp` nebo `yahoo.fr`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane. V tomto případě je bezpečnější použít vestavěné seznamy služeb, protože do nich vložíme všechny subdomény související s jednotlivými platformami.

Vzhledem k tomu, že v seznamech služeb můžete povolit subdomény, přidali jsme pole, která odrážejí stav každé služby — můžete je vidět na hlavní obrazovce v sekci *Výjimky* vlevo od názvu každé služby: **zcela povoleno** stav je označen bílým zaškrtnutím na zeleném pozadí., **zcela zakázáno** — s šedým rámečkem a **částečně povoleno**, což znamená, že byl změněn jeden nebo více parametrů — se zeleným čtverečkem na bílém pozadí. Dobrá zpráva: vždy se můžete vrátit k výchozímu zobrazení seznamů služeb, pokud jste z nich odstranili nebo zakázali některé domény.

![Výjimky](https://cdn.adguard.com/content/kb/vpn/android/statuses.png)

Další užitečnou funkcí je *Import/Export výjimek*. K dosažení cíle vedou pouhé čtyři kroky:

1. Otevřete AdGuard VPN v zařízení/prohlížeči, ze kterého chcete exportovat seznamy výjimek. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `adguard_vpn_exclusions.zip`.
2. Uvnitř archivu jsou dva soubory `.txt`, jeden pro *Obecný* a druhý pro *Selektivní* seznam. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory (ale o tom až později) nebo nechat archiv se soubory tak, jak je.
3. Při přenosu mezi různými zařízeními nezapomeňte odeslat soubor `.zip` do zařízení pro import. Pokud například importujete seznamy výjimek ze zařízení se systémem Windows do systému Android, nezapomeňte soubor `.zip` předem odeslat do systému Android.
4. Otevřete AdGuard VPN v zařízení, do kterého chcete importovat archiv s připravenými seznamy výjimek. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv.

![Importovat/exportovat](https://cdn.adguard.com/content/kb/vpn/android/imp-exp.png)

### Nastavení aplikací

Jak jsme uvedli výše, do výjimek lze snadno přidat nejen webové stránky. Vyberte, pro které aplikace potřebujete AdGuard VPN a pro které ne. Klepnutím na ikonu vedle ikony *Seznam výjimek* v dolní části obrazovky otevřete nastavení aplikací. Ve výchozím nastavení funguje AdGuard VPN se všemi aplikacemi, ale můžete přepnout posuvník vedle libovolné aplikace v seznamu — a AdGuard VPN pro ni zakázat.

Pokud je povolen *režim kompatibility* s AdGuardem, můžete spravovat aplikace pouze prostřednictvím blokátoru reklam AdGuard. Proto se po klepnutí na tlačítko otevře aplikace AdGuard.

![Nastavení aplikací](https://cdn.adguard.com/content/kb/vpn/android/apps_settings.png)


## Nastavení

Do *Nastavení* se dostanete stisknutím ikony ozubeného kola v pravém dolním rohu obrazovky. První sekcí je *Nastavení aplikace*: nakonfigurujte AdGuard VPN pro Android podle svých potřeb výběrem různých možností.

![Nastavení aplikací](https://cdn.adguard.com/content/kb/vpn/android/app_settings.png)

### Automatické spuštění AdGuard VPN

Posuvník přepnutý doprava umožňuje automatické spuštění AdGuard VPN po spuštění zařízení.


### DNS server

Účelem [decentralizovaného systému doménových názvů](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) je převádět názvy webových stránek na něco, čemu prohlížeče rozumí, tj. na IP adresy. Tuto úlohu vykonávají DNS servery. AdGuard VPN pro Android nabízí výběr z několika DNS serverů, z nichž každý má specifické vlastnosti. Například [AdGuard DNS](https://kb.adguard.com/en/dns/overview) odstraňuje reklamy a chrání vaše zařízení před sledováním, zatímco AdGuard DNS Family Protection kombinuje funkce AdGuard DNS s funkcí bezpečného vyhledávání a blokování obsahu pro dospělé. K dispozici je také možnost přidat vlastní DNS server.

### Automatická ochrana

Tato funkce automaticky zapne AdGuard VPN, když se vaše zařízení připojí k mobilní síti nebo síti Wi-Fi.

### Kill Switch

Funkci Kill Switch můžete v zařízení se systémem Android nastavit podle jednoduchých pokynů na obrazovce. Proč byste to měli udělat? Pokud z nějakého důvodu dojde k náhlému přerušení připojení k síti VPN při používání mobilní sítě nebo veřejné Wi-Fi, funkce Kill Switch automaticky ukončí internetové připojení a zabrání útočníkům zmocnit se vašich informací.

Všimněte si, že pokud je funkce Kill Switch zapnutá, *Nastavení aplikací* a *Výjimky* nebudou fungovat.

### Motiv

Můžete si vybrat systémový, tmavý nebo světlý motiv aplikace.

![Motiv](https://cdn.adguard.com/content/kb/vpn/android/theme-light-dark.png)

### Pokročilá nastavení

V části *Pokročilá nastavení* najdete pět sekcí. Přepnutím tlačítka *Pomozte nám vylepšit AdGuard* v horní části nám můžete pomoci. Tato akce umožní AdGuard VPN shromažďovat hlášení o pádech aplikace, technické údaje a údaje o interakci. Tyto informace budou získávány anonymně.

Sekce *Provozní režim* umožňuje vybrat jednu ze tří možností: Režim VPN, Proxy a Režim kompatibility. V *Režimu VPN* je veškerý provoz automaticky směrován přes AdGuard VPN. Pokud je zapnutý *Režim Proxy* (SOCKS5), AdGuard VPN spustí místní proxy server, který mohou využívat jiné aplikace ke směrování svého provozu přes něj. Tuto možnost vyberte pouze v případě, že víte, co děláte. Zapnutí *Režimu kompatibility* umožňuje spolupráci AdGuard VPN s blokátorem reklam AdGuard.

> Upozorňujeme, že některé funkce AdGuard VPN jsou v *Režimu kompatibility* zakázány: výběr DNS serveru, Kill Switch a automatická ochrana. Chcete-li spravovat tunelování aplikací, měli byste také otevřít blokátor reklam AdGuard.

Další dvě sekce jsou *Úroveň záznamu* a *Diagnostické informace*. Pokud jde o první možnost, nedoporučujeme zapínat rozšířenou úroveň záznamu, pokud o to nepožádá náš tým podpory. Diagnostické informace, lokálně uložené technické informace o zařízení a připojeních (IP adresa, ID, ping atd.), nám mohou být zaslány v případě technických problémů.

Poslední částí v *Pokročilých nastaveních* jsou *Nízkoúrovňová nastavení*. Doporučujeme vám, abyste do této sekce nevstupovali, pokud nejste vysoce kvalifikovaní nebo pokud vás o to nepožádal náš tým podpory. Zde najdete několik možností, jak si AdGuard VPN ještě více přizpůsobit svým potřebám. Povolte ladění rozhraní TUN nebo protokolu IPv6 na rozhraní VPN, vyberte port proxy serveru nebo verzi internetového protokolu, který se má používat. — ale pouze pokud máte potřebné znalosti.

### Podpora

V sekci *Podpora* můžete zanechat zpětnou vazbu, nahlásit chybu nebo exportovat protokoly a systémové informace pro další odeslání na linku pomoci.
 
 

