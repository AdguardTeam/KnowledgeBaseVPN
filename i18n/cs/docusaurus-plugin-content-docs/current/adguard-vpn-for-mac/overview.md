---
title: Přehled funkcí
sidebar_position: 1
---

AdGuard VPN pro macOS je služba VPN pro desktopy. AdGuard VPN je plně kompatibilní s blokátorem reklam AdGuard, lze je používat společně a bezproblémově. Podívejme se, jaké funkce nabízí.

Všimněte si, že **nemůžete používat AdGuard VPN pro macOS, pokud jste se nepřihlásili ke svému účtu AdGuard**. Můžete se přihlásit buď pomocí svého účtu AdGuard, nebo pomocí externího účtu, konkrétně přes Apple, Google nebo Facebook. Ujistěte se, že je váš externí účet vázán na stejnou e-mailovou adresu jako účet AdGuard. Pokud máte v účtu AdGuard vhodné předplatné, bude automaticky aktivováno v aplikaci pro počítače. Ještě nemáte účet AdGuard? [Zde si jej vytvořte](https://auth.adguard.com/registration.html).

> AdGuard VPN pro macOS je v současné době podporována ve verzích macOS počínaje macOS Sierra (10.12).

## Domovská obrazovka

![Domovská obrazovka](https://cdn.adguard.com/public/Adguard/Blog/mac-vpn-main.png)

První karta je *Domovská* obrazovka. Zde můžete vidět aktuální stav AdGuard VPN a [pracovní režim](#exclusions), vybrané umístění (pokud je povoleno) a jeho ping. Ping je doba odezvy serveru VPN. Čím nižší je toto číslo, tím rychlejší je připojení. Pokud je VPN vypnuta, zobrazí se níže poslední umístění, ke kterému jste se připojili. Nejrychlejší umístění s nejnižší hodnotou ping jsou zobrazena v pravém horním rohu obrazovky. Níže naleznete úplný seznam umístění. Pomocí funkce vyhledávání lze snadno najít potřebné umístění.

> Uživatelé bezplatné verze se mohou připojit pouze k určitým umístěním, zatímco jiná jsou blokována. Kromě toho je v bezplatné verzi omezen měsíční datový provoz na 3GB.

## Výjimky

![Výjimky](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/exclusions.png)

Následuje obrazovka *Výjimky*. AdGuard VPN má několik funkcí, které ji činí jedinečnou. Jednou z nich je určitě přepínání mezi dvěma provozními režimy. V Obvyklém režimu bude AdGuard VPN spuštěna na všech webových stránkách kromě těch ze seznamu výjimek. Naopak v selektivním režimu bude AdGuard VPN spuštěna pouze na webových stránkách ze seznamu výjimek. Sami se můžete rozhodnout, kde chcete VPN provozovat.

![Záložka Výjimky](https://cdn.adguard.com/public/Adguard/Blog/services.png)

Nemusíte jen přidávat webové stránky do výjimek, ale také můžete vybírat ze seznamů oblíbených služeb. Seznamy jsou rozděleny do osmi kategorií: sociální sítě, messengery, služby pro streamování videa a hudby, hry, nakupování, vyhledávače a nástroje pro pracovní komunikaci. Kteroukoli z těchto služeb lze přidat do Výjimek jedním kliknutím! Je to obzvlášť výhodné, pokud používáte Selektivní režim.

Seznam výjimek lze snadno nakonfigurovat. Pokud jste přidali doménu a některé její subdomény, budou seskupeny uvnitř kořenové domény. Při přidání kořenové domény (`example.com`) je přidána i její maska (`*.example.com`).

Pokud jste přidali službu, něco změnili nebo odebrali a nyní chcete obnovit původní nastavení, stačí vedle domény stisknout *Obnovit výchozí* — tato akce obnoví všechny chybějící domény a zaškrtne všechna políčka.

Připravené seznamy vyloučení lze navíc přenést do jiných zařízení s nainstalovanou službou AdGuard VPN. Chcete-li exportovat výjimky, postupujte podle následujících čtyř kroků:

1. Open AdGuard VPN on the device from where you want to export your lists of exclusions. Find the appropriate section and click on the *Export* button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, each for Regular and Selective lists. Add more exclusions to them, delete the existing ones, rename files (but more on this later), or just leave the archive with files as it is.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Mac to your iPhone, make sure to send the `.zip` file to your phone beforehand.
4. Open AdGuard VPN on the device/in the browser where you want to import the archive with the ready lists of exclusions. Find the appropriate section, click on the *Import* button and select the archive. Done!

> Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

## Support

![Obrazovka podpory](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/support.png)

The third tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/en/welcome.html#faq) or in the [Knowledge base](/intro.md) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/en/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/en/vpn_mac/form.html), we’d appreciate it.

## Settings

![Nastavení](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/settings.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard's EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### General settings

![Obecná nastavení](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/general-settings.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Autoupdate*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

Another option that shouldn't be overlooked is that you can allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, thanks to the button on the right, you can export logs to your Mac. This can be useful if you want to attach logs to your message to support.

### DNS servers

![DNS servery](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/dns.png)

Here you can add a custom DNS server (or servers) in order not to rely on a DNS server provided by your ISP by default. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious sites and redirects them to a “blackhole”.

### Advanced settings

![Pokročilá nastavení](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/advanced-settings.png)

Advanced settings are not recommended to be adjusted. Don't change them unless asked by our technical support or unless you're sure what you're doing.

#### Logging level
There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. Even if you enabled the second logging level, make sure to go back to the default one after recording logs.

#### Hide menu bar icon
Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Use QUIC (experimental)

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.