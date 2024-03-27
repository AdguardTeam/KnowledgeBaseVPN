---
title: Přehled funkcí
sidebar_position: 1
---

## Co je AdGuard VPN pro Android?

VPN je ideální nástroj, který zajišťuje bezpečnost a anonymitu při každém procházení internetu. [Jak funguje?](/general/how-vpn-works) Aniž bychom zacházeli do technických podrobností, můžeme říci, že VPN vytváří bezpečné šifrované spojení (tzv. tunel) mezi zařízením uživatele a vzdáleným serverem VPN. Tímto způsobem je zachována důvěrnost dat i anonymita uživatele, protože pozorovatel třetí strany vidí IP adresu serveru VPN, a nikoli skutečnou IP adresu uživatele.

**VPN se často používá pro:**

- Zabezpečení osobních údajů i při používání veřejné sítě Wi-Fi
- Zabránění sledování online aktivit maskováním IP adresy
- Skrytí skutečné zeměpisné polohy pro zachování anonymity

AdGuard VPN pro Android to všechno zvládne za vás — a dokonce nabízí něco jedinečného. Chcete-li zjistit, proč je AdGuard VPN nejlepší volbou — přečtěte si [tento článek](/general/why-adguard-vpn).

## Jak začít používat AdGuard VPN pro Android

Nejprve stáhněte AdGuard VPN z [Obchodu Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) a přihlaste se ke svému účtu AdGuard. V případě, že jej nemáte — měli byste si jej [vytvořit](https://auth.adguard.com/login.html). Můžete se přihlásit přímo pomocí přihlašovacích údajů k účtu AdGuard. Nebo to můžete udělat přes Google nebo Facebook, pokud byl váš účet AdGuard zaregistrován pod stejnou e-mailovou adresou.

## Hlavní obrazovka

Na hlavní obrazovce je zobrazen stav VPN (Připojeno/odpojeno). Je zde také tlačítko *Připojit/odpojit* a seznam dostupných serverů.

U každého serveru je uvedeno jeho umístění a hodnota ping, která popisuje dobu odezvy serveru. Čím nižší je tato hodnota, tím rychlejší je připojení. Nejrychlejší servery se vždy objevují v horní části seznamu, který obsahuje více než 50 umístění v desítkách zemí. K nejrychlejšímu serveru se můžete připojit klepnutím na tlačítko *Připojit* nebo výběrem umístění.

## Výjimky

Udělali jsme vše pro to, abychom vám usnadnili správu seznamů výjimek webů a aplikací. AdGuard VPN bude fungovat pouze tam, kde si zvolíte.

### Seznamy výjimek

Seznamy výjimek vám umožňují spravovat připojení VPN pro konkrétní webové stránky a aplikace. Do sekce *Výjimky* se dostanete klepnutím na druhou ikonu zleva ve spodní části obrazovky. Do sekce *Výjimky* se dostanete klepnutím na druhou ikonu zleva ve spodní části obrazovky.

Ve výchozím nastavení funguje AdGuard VPN pro všechny webové stránky a aplikace kromě těch, které byly přidány do výjimek, ale můžete snadno přepnout do jiného režimu.

#### Pro webové stránky

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to *Exclusions* in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Exclusions](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Při ručním přidávání domén existují určité nuance. Pokud například ručně vyloučíte doménu `yahoo.com`, budou ve výjimkách uvedeny také všechny subdomény `*.yahoo.com`. Doménové názvy s ostatními doménami nejvyšší úrovně, jako je `yahoo.jp` nebo `yahoo.fr`, však vyloučeny nebudou. Nebo můžete do výjimek přidat `youtube.com`, ale doména stejné služby `youtu.be` se do seznamu nedostane. V tomto případě je bezpečnější použít vestavěné seznamy služeb, protože do nich vložíme všechny subdomény související s jednotlivými platformami.

:::

Vzhledem k tomu, že v seznamech služeb můžete povolit subdomény, přidali jsme pole, která odrážejí stav každé služby — můžete je vidět na hlavní obrazovce *Výjimky* vlevo od názvu každé služby:

- **Plně povoleno** je označeno bílým zaškrtnutím na zeleném pozadí
- **Částečně povoleno** (povolené subdomény bez hlavní domény) je označeno zeleným čtvercem na bílém pozadí
- **Plně zakázáno** je označeno prázdným zaškrtávacím políčkem

 Dobrá zpráva: vždy se můžete vrátit k výchozímu zobrazení seznamů služeb, pokud jste z nich odstranili nebo zakázali některé domény.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Další užitečnou funkcí je *Import/Export výjimek*. K dosažení cíle vedou pouhé čtyři kroky:

1. Otevřete AdGuard VPN v zařízení/prohlížeči, ze kterého chcete exportovat seznamy výjimek. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `adguard_vpn_exclusions.zip`.
2. Uvnitř archivu jsou dva soubory `.txt`, jeden pro každý ze seznamů. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory (ale o tom až později) nebo nechat archiv se soubory tak, jak je.
3. Při přenosu mezi různými zařízeními nezapomeňte odeslat soubor `.zip` do zařízení pro import. Pokud například importujete seznamy výjimek ze zařízení se systémem Windows do systému Android, nezapomeňte soubor `.zip` předem odeslat do systému Android.
4. Otevřete AdGuard VPN v zařízení, do kterého chcete importovat archiv s připravenými seznamy výjimek. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Pro aplikace

Jak jsme uvedli výše, do výjimek lze snadno přidat nejen webové stránky. Vyberte, pro které aplikace potřebujete AdGuard VPN a pro které ne.

V *Režimu integrace* můžete aplikace spravovat pouze prostřednictvím Blokátoru reklam AdGuard.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Nastavení

Do *Nastavení* se dostanete stisknutím ikony ozubeného kola v pravém dolním rohu obrazovky. První sekcí je *Nastavení aplikace*: nakonfigurujte AdGuard VPN pro Android podle svých potřeb výběrem různých možností.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Automatické spuštění AdGuard VPN

Posuvník přepnutý doprava umožňuje automatické spuštění AdGuard VPN po spuštění zařízení.

### DNS servery

Servery DNS překládají názvy webových stránek do podoby srozumitelné prohlížečům, tj. do podoby IP adres. AdGuard VPN pro Android nabízí výběr z několika DNS serverů, z nichž každý má specifické vlastnosti. Například [AdGuard DNS](https://adguard-dns.io/kb/) odstraňuje reklamy a chrání vaše zařízení před sledováním, zatímco AdGuard DNS Family Protection kombinuje funkce AdGuard DNS s funkcí bezpečného vyhledávání a blokování obsahu pro dospělé. K dispozici je také možnost přidat vlastní DNS server.

### Automatická ochrana

Tato funkce automaticky zapne AdGuard VPN, když se vaše zařízení připojí k mobilní síti nebo síti Wi-Fi.

### Kill Switch

Funkci Kill Switch můžete v zařízení se systémem Android nastavit podle jednoduchých pokynů na obrazovce. Proč byste to měli udělat? Pokud z nějakého důvodu dojde k náhlému přerušení připojení k síti VPN při používání mobilní sítě nebo veřejné Wi-Fi, funkce Kill Switch automaticky ukončí internetové připojení a zabrání útočníkům zmocnit se vašich informací.

Všimněte si, že pokud je funkce Kill Switch zapnutá, *Nastavení aplikací* a *Výjimky* nebudou fungovat.

### Motiv

Můžete si vybrat systémový, dynamický, tmavý nebo světlý motiv aplikace.

![System dynamic theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/systemtheme.png)

![Light theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/lighttheme.png)

![Dark theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/darktheme.png)

### Pokročilá nastavení

V části *Pokročilá nastavení* najdete čtyři sekce.

*Pracovní režim* vám umožňuje určit, jak je směrován váš provoz. K dispozici jsou tři režimy: VPN, SOCKS5 a Režim integrace. V režimu *VPN* je veškerý provoz směrován skrze AdGuard VPN. V režimu *SOCKS5* provozuje AdGuard VPN místní proxy server, který mohou ostatní aplikace používat pro směrování provozu. *Režim integrace* umožňuje AdGuard VPN a Blokátoru reklam AdGuard spolupracovat.

:::note

Některé funkce AdGuard VPN jsou v *Režimu integrace* deaktivovány: DNS servery, Kill Switch, Automatická ochrana a výjimky aplikací. V aplikaci Blokátor reklam AdGuard můžete spravovat ochranu DNS a směrovat aplikace prostřednictvím proxy serveru AdGuard VPN.

:::

Další dvě sekce jsou *Úroveň záznamu* a *Diagnostické informace*. Pokud jde o první možnost, nedoporučujeme zapínat rozšířenou nebo extrémní úroveň záznamu, pokud o to nepožádá náš tým podpory. Diagnostické informace, lokálně uložené technické informace o zařízení a připojeních (IP adresa, ID, ping atd.), nám mohou být zaslány v případě technických problémů.

Poslední částí v *Pokročilých nastaveních* jsou *Nízkoúrovňová nastavení*. Doporučujeme vám, abyste do této sekce nevstupovali, pokud nejste vysoce kvalifikovaní nebo pokud vás o to nepožádal náš tým podpory. Zde je možné povolit protokolování rozhraní TUN nebo protokolu IPv6 na rozhraní VPN, vybrat port proxy serveru nebo verzi Internetového protokolu, která se má používat.

:::note Kompatibilita

Možnost *Povolit IPv6* je k dispozici pouze pro sítě, které podporují IPv6.

:::

### Podpora

V sekci *Podpora* můžete zanechat zpětnou vazbu, nahlásit chybu nebo exportovat protokoly a systémové informace pro další odeslání na linku pomoci.
