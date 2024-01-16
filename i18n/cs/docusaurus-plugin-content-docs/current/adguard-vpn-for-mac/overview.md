---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard VPN pro macOS je služba VPN pro desktopy. AdGuard VPN je plně kompatibilní s blokátorem reklam AdGuard, lze je používat společně a bezproblémově. Podívejme se, jaké funkce nabízí.

Všimněte si, že **nemůžete používat AdGuard VPN pro macOS, pokud jste se nepřihlásili ke svému účtu AdGuard**. Můžete se přihlásit buď pomocí svého účtu AdGuard, nebo pomocí externího účtu, konkrétně přes Apple, Google nebo Facebook. Ujistěte se, že je váš externí účet vázán na stejnou e-mailovou adresu jako účet AdGuard. Pokud máte v účtu AdGuard vhodné předplatné, bude automaticky aktivováno v aplikaci pro počítače. Ještě nemáte účet AdGuard? [Zde si jej vytvořte](https://auth.adguard.com/registration.html).

:::note Kompatibilita

AdGuard VPN pro macOS je v současné době podporována ve verzích macOS počínaje macOS Catalina (10.15).

:::

## Domovská obrazovka

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

První karta je *Domovská* obrazovka. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Ping je doba odezvy serveru VPN. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Níže naleznete úplný seznam umístění. The search field makes it easy to find the location you need.

:::note

Uživatelé bezplatné verze se mohou připojit pouze k určitým umístěním, zatímco jiná jsou blokována. Kromě toho je v bezplatné verzi omezen měsíční datový provoz na 3 GB.

:::

## Výjimky

![Výjimky](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN má několik funkcí, které ji činí jedinečnou, a jednou z nich jsou určitě *Výjimky*. Ve výchozím nastavení bude AdGuard VPN spuštěna na všech webových stránkách a ve všech aplikacích kromě těch ze seznamu výjimek. Můžete však přepnout do jiného režimu, takže AdGuard VPN bude spuštěna pouze na webových stránkách a v aplikacích ze seznamu výjimek.

![Záložka Výjimky](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Nemusíte jen přidávat webové stránky do výjimek, ale také můžete vybírat ze seznamů oblíbených služeb. Seznamy jsou rozděleny do osmi kategorií: sociální sítě, messengery, služby pro streamování videa a hudby, hry, nakupování, vyhledávače a nástroje pro pracovní komunikaci. Kteroukoli z těchto služeb lze přidat do Výjimek jedním kliknutím! Je to obzvlášť výhodné, pokud používáte Selektivní režim.

Seznam výjimek lze snadno nakonfigurovat. Pokud jste přidali doménu a některé její subdomény, budou seskupeny uvnitř kořenové domény. Při přidání kořenové domény (`example.com`) je přidána i její maska (`*.example.com`).

Pokud jste přidali službu, něco změnili nebo odebrali a nyní chcete obnovit původní nastavení, stačí vedle domény stisknout *Obnovit výchozí* — tato akce obnoví všechny chybějící domény a zaškrtne všechna políčka.

Připravené seznamy vyloučení lze navíc přenést do jiných zařízení s nainstalovanou službou AdGuard VPN. Chcete-li exportovat výjimky, postupujte podle následujících čtyř kroků:

1. Otevřete AdGuard VPN v zařízení, ze kterého chcete exportovat seznamy výjimek. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `exclusions.zip`.
2. Uvnitř archivu jsou dva soubory `.txt`, jeden pro Obecný a druhý pro Selektivní seznam. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory (ale o tom až později) nebo nechat archiv se soubory tak, jak je.
3. Při přenosu mezi různými zařízeními nezapomeňte odeslat soubor `.zip` do zařízení pro import. Pokud například importujete seznamy výjimek ze zařízení Mac do iPhone, nezapomeňte soubor `.zip` předem odeslat do telefonu.
4. Otevřete AdGuard VPN v zařízení/prohlížeči, do kterého chcete importovat archiv s připravenými seznamy výjimek. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv. Hotovo!

:::note

Archivní soubory z jiných zařízení lze podobně importovat do AdGuard VPN pro macOS.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Podpora

![Obrazovka podpory](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Odpovědi na všechny otázky najdete v sekcích [FAQ](https://adguard-vpn.com/welcome.html#faq) nebo [Databáze znalostí](/), můžete nahlásit chybu, pokud na ni narazíte, nebo [diskutovat o AdGuardu na některé z platforem](https://adguard.com/discuss.html). A neváhejte [zanechat zpětnou vazbu o našem produktu](https://surveys.adguard.com/vpn_mac/form.html), budeme vám vděčni.

## Nastavení

![Nastavení](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Nakonec se dostáváme ke kartě Nastavení. V sekci *O programu* si můžete prohlédnout aktuální verzi AdGuard VPN, zkontrolovat aktualizace, navštívit naše oficiální webové stránky a seznámit se s licenční smlouvou EULA a zásadami ochrany osobních údajů AdGuardu. V sekci *O licenci* můžete provést upgrade z bezplatné verze na neomezenou, spravovat své předplatné nebo se odhlásit. A co je nejdůležitější, odtud máte přístup k *Obecným nastavením*.

### Nastavení aplikace

![Nastavení aplikace](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

První čtyři základní funkce činí aplikaci pohodlnější a uživatelsky přívětivější, tj. *Kill Switch*, *automatické aktualizace*, *spuštění AdGuard VPN při přihlášení *a *automatické připojení při spuštění aplikace*. Navíc si můžete vybrat mezi světlým, tmavým a systémovým motivem — poslední jmenovaný motiv odpovídá motivu vašeho počítače Mac.

Můžete také povolit AdGuard VPN shromažďovat a odesílat anonymizovaná hlášení o pádech aplikace, technické údaje a údaje o interakci, aby nám pomohla zlepšit naši aplikaci. V neposlední řadě můžete exportovat protokoly z vašeho Macu. To může být užitečné, pokud chcete ke zprávě na podporu připojit protokoly.

### DNS servery

![DNS servery](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Here you can set up a DNS server (or servers). This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Pokročilá nastavení

![Pokročilá nastavení](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Úroveň záznamu

Existují pouze dvě úrovně záznamu, ale důrazně doporučujeme používat první, výchozí úroveň. Druhá možnost (rozšířený záznam) by měla být nastavena pouze pro záznam podivného chování programu po konzultaci s naší technickou podporou. I když jste povolili pokročilou úroveň záznamu, nezapomeňte se po záznamu protokolů vrátit na výchozí úroveň.

#### Skrýt panel nabídky

Přestože se tato možnost nachází v *Rozšířených nastavení*, lze ji bez váhání povolit. Ikonu AdGuard VPN můžete z panelu nabídek skrýt, nezabrání to běhu naší aplikace na pozadí.

#### Use QUIC

Komunikační protokol QUIC je nejnovější a nejmodernější verzí HTTP protokolu. Přepnutím přepínače získáte lepší kvalitu připojení v ne zcela ideálních podmínkách, například při používání mobilních dat v metru nebo ve výtahu.
