---
title: Běžné chyby instalačního programu
sidebar_position: 2
---

V tomto článku jsou popsány některé z nejčastějších chyb, se kterými se můžete setkat při instalaci AdGuard VPN pro Windows, a možné způsoby jejich řešení.

### Chyba 5: Přístup odepřen {#error-5}

Tato chybová zpráva se zobrazí, pokud nejsou udělena požadovaná oprávnění. Může existovat několik různých důvodů, proč instalační program AdGuard VPN nemá oprávnění potřebná k řádnému dokončení procesu instalace. Můžete vyzkoušet následující kroky:

- Dočasně vypněte antivirové programy. Některé z nich mohou instalaci narušovat v závislosti na omezení jejich nastavení.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Restartujte počítač. Někdy jsou problémy s oprávněním dočasné a lze je vyřešit restartováním počítače.

### Chyba 112: Disk je plný, Chyba 1632: Dočasná složka je plná nebo nedostupná {#error-112}

Jedná se o dvě různé chyby s velmi podobným řešením. Jak napovídá jejich název, instalační program AdGuard VPN nenašel dostatek místa na disku pro dokončení instalace. Problém můžete vyřešit několika způsoby:

- Odinstalujte některé programy nebo odstraňte nepotřebné soubory z jednotky, na kterou jste chtěli nainstalovat AdGuard VPN.

- Stáhněte, nainstalujte a spusťte [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), bezplatný software od společnosti Malwarebytes. Mimo jiné vyčistí váš systém od nejrůznějších “pozůstatků“ souborů, které zůstaly po nesprávně odinstalovaných programech a podobně. Pomůže vyčistit místo na disku.

- Restartujte počítač. Dočasné soubory mohou někdy zabírat značné množství místa na disku a nejspolehlivějším způsobem, jak se jich zbavit, je restartování počítače.

### Chyba 1601: Instalační program pro Windows není přístupný {#error-1601}

Dalo by se říci, že se jedná o zvláštní podtyp chyby 1603. Možná řešení jsou podobná:

- Spusťte a znovu zaregistrujte službu Microsoft Installer. Vyžaduje to určitou práci.

    1. Stiskněte *Win + R* a napište **services.msc**.
    1. Vyhledejte v seznamu *Instalační služba systému Windows* a dvakrát na ni klikněte.
    1. Stiskněte tlačítko *Spustit* pod položkou *Stav služby* a stiskněte *OK*. Pokud stav služby **běží**, měli byste nejprve kliknout na *Ukončit* a poté stisknout *Spustit*.
    1. Stiskněte *Win + R*, napište **msiexec /unregister** a stiskněte *Enter*.
    1. Stiskněte znovu *Win + R*, napište **msiexec /regserver** a stiskněte *Enter*

- Restartujte počítač a spusťte instalaci znovu. Někdy to k odstranění problému stačí.

### Chyba 1602: Zrušeno uživatelem {#error-1602}

Pokud se vám zobrazil tento chybový kód, je pravděpodobné, že jste tak či onak ručně přerušili proces instalace. Můžete udělat následující:

- Okno instalačního programu nezavírejte. Po dokončení instalace se zavře automaticky.

- Pokud se během instalace zobrazí dialogové okno, stiskněte tlačítko *Ano* a udělte instalačnímu programu požadovaná oprávnění. Kliknutím na tlačítko *Ne* instalaci zrušíte.

- Během instalace nespouštějte jiné procesy.

### Chyba 1603: Závažná chyba během instalace {#error-1603}

Tato chyba zní více znepokojivě, než jaká ve skutečnosti je. Ve skutečnosti se jedná o poměrně obecnou chybu, která může mít mnoho různých příčin a některé z nich lze snadno odstranit. Vyzkoušejte následující řešení:

- Stiskněte klávesu *Win*, vyhledejte *Příkazový řádek* a spusťte jej. Zde napište `sfc /scannow` a stiskněte *enter*.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Odinstalujte AdGuard VPN pomocí našeho speciálního [nástroje pro odinstalaci](/adguard-vpn-for-windows/installation#advanced) a poté instalaci zopakujte.

- Spusťte a znovu zaregistrujte službu Microsoft Installer. Vyžaduje to určitou práci.

    1. Stiskněte *Win + R* a napište **services.msc**.
    1. Vyhledejte v seznamu *Instalační služba systému Windows* a dvakrát na ni klikněte.
    1. Stiskněte tlačítko *Spustit* pod položkou *Stav služby* a stiskněte *OK*. Pokud stav služby **běží**, měli byste nejprve kliknout na *Ukončit* a poté stisknout *Spustit*.
    1. Stiskněte *Win + R*, napište **msiexec /unregister** a stiskněte *Enter*.
    1. Stiskněte znovu *Win + R*, napište **msiexec /regserver** a stiskněte *Enter*

- Získejte plná oprávnění na jednotce pro instalaci. Je možné, že k chybě 1603 dochází, protože nemáte úplná oprávnění k umístění souboru. Také to není tak snadné jako některá jiná řešení:

    1. Otevřete *Průzkumník souborů*, klepněte pravým tlačítkem myši na jednotku obsahující umístění instalace a vyberte *Vlastnosti*.
    1. Přejděte na *Zabezpečení* a klikněte na *Upravit*.
    1. Klikněte jednou myší na *SYSTÉM* a ujistěte se, že je *zaškrtnuto* políčko u každé položky v části *Oprávnění pro SYSTÉM* (pokud je možné je zaškrtnout). Stejnou kontrolu proveďte i pro *Správce*.
    1. Kliknutím na *OK* se vrátíte do dialogu *Vlastnosti*. Poté klikněte na *Pokročilé*.
    1. Klikněte na *Změnit oprávnění*.
    1. Na kartě *Oprávnění* dvakrát klikněte na *Správci*.
    1. Vyberte *Tato složka, podsložky a soubory* pro pole *Použít pro* a zaškrtněte všechna dostupná *Základní oprávnění*. Poté stiskněte *OK*.
    1. Proveďte stejnou operaci jako výše (od bodu 7) pro *SYSTÉM*.
    1. Úplně nakonec klikněte na *OK*. Zkuste AdGuard nainstalovat znovu.

### Chyba 1618: Již probíhá jiná instalace {#error-1618}

Tato chyba se objeví při pokusu o spuštění více instancí instalačního programu AdGuard VPN současně. Co dělat, když se tato chyba zobrazí:

- Restartujte počítač a spusťte instalaci znovu. Po restartování počítače se zastaví všechny probíhající procesy, včetně všech kopií instalačního programu.

- Neklikejte na instalační program vícekrát, i když se zdá, že se nespustí hned. Zobrazení uživatelského rozhraní instalátoru může někdy trvat několik sekund.

### Chyba 1638: Další verze tohoto produktu je již nainstalována {#error-1638}

Je velmi pravděpodobné, že jste si AdGuard VPN již dříve nainstalovali.

- Zkontrolujte, zda je v počítači již nainstalována AdGuard VPN. To provedete tak, že stisknete klávesu *Win* a začnete psát *adguard vpn*.

- Možná tam jsou nějaké zbytky souborů z předchozí instalace AdGuard VPN. Odinstalujte AdGuard pomocí našeho speciálního [nástroje pro odinstalaci](/adguard-vpn-for-windows/installation#advanced) a poté instalaci zopakujte.

### Další chyby {#other}

Pokud jste narazili na chybu, která není uvedena výše, je možné, že ji dokážeme vyřešit sami. K tomu však od vás potřebujeme soubory záznamů. Proveďte následující kroky:

- Vyhledejte a archivujte **instalační protokoly AdGuard VPN** stejným způsobem, jaký je popsán v [tomto článku](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Vyhledejte a uložte na disk **záznamy prohlížeče událostí**. [Tento článek](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) vysvětluje, jak na to.

Všechny tyto soubory z předchozích dvou kroků zašlete e-mailem na adresu **support@adguard.com** a v těle zprávy popište problém. Náš tým podpory vám odpoví co nejdříve.
