---
title: Běžné chyby instalačního programu
sidebar_position: 2
---

Tento článek obsahuje některé z nejčastějších chyb, se kterými se můžete setkat během instalace AdGuard VPN pro Windows, a možné způsoby jejich řešení.

### Chyba 5: Přístup odepřen {#error-5}

K této chybě dochází, pokud je něco v nepořádku s oprávněními. Může existovat několik různých důvodů, proč instalační program AdGuard VPN nemá oprávnění potřebná k řádnému dokončení procesu instalace. Můžete vyzkoušet následující kroky:

- Dočasně vypněte antivirové programy. Některé z nich mohou v závislosti na závažnosti svého nastavení instalaci narušovat.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Restartujte počítač. Někdy jsou problémy s oprávněním dočasné a lze je vyřešit restartováním počítače.

### Chyba 112: Disk je plný, Chyba 1632: Dočasná složka je plná nebo nedostupná {#error-112}

Jedná se o dvě různé chyby s velmi podobným řešením. Jak napovídá jejich název, instalační program AdGuard VPN nenašel dostatek místa na disku pro dokončení instalace. Problém můžete vyřešit několika způsoby:

- Odinstalujte některé programy nebo odstraňte nepotřebné soubory z jednotky, na kterou jste chtěli nainstalovat AdGuard VPN.

- Stáhněte, nainstalujte a spusťte [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), bezplatný software od společnosti Malwarebytes. Mimo jiné vyčistí váš systém od nejrůznějších pozůstatků souborů, které zůstaly po nesprávně odinstalovaných programech a podobně. Pomůže vyčistit místo na disku.

- Restartujte počítač. Dočasné soubory mohou někdy zabírat značné množství místa na disku a nejspolehlivějším způsobem, jak se jich zbavit, je restartování počítače.

### Chyba 1601: Instalační program pro Windows není přístupný {#error-1601}

Dalo by se říci, že se jedná o zvláštní podtyp chyby 1603. Možná řešení jsou podobná:

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Restartujte počítač a spusťte instalaci znovu. Někdy to k odstranění problému stačí.

### Chyba 1602: Zrušeno uživatelem {#error-1602}

Pokud se vám zobrazil tento chybový kód, je pravděpodobné, že jste tak či onak ručně přerušili proces instalace. Můžete udělat následující:

- Okno instalačního programu nezavírejte. Po dokončení instalace se zavře automaticky.

- Pokud se během instalace zobrazí dialogové okno, stiskněte tlačítko "Ano" a udělte instalačnímu programu požadovaná oprávnění. Kliknutím na tlačítko "Ne" instalaci zrušíte.

- Během instalace nespouštějte jiné procesy.

### Chyba 1603: Závažná chyba během instalace {#error-1603}

Chyba zní děsivěji, než ve skutečnosti je. Ve skutečnosti se jedná o poměrně obecnou chybu, která může mít mnoho různých příčin a některé z nich lze snadno odstranit. Vyzkoušejte následující řešení:

- Stiskněte klávesu *Win*, vyhledejte *Příkazový řádek* a spusťte jej. Zde napište `sfc /scannow` a stiskněte *enter*.

- Zvolte jinou složku pro instalaci. Je možné, že aktuální složka pro instalaci má nějaká omezení přístupu. Také se ujistěte, že jste nevybrali externí jednotku, virtuální jednotku atd.

- Odinstalujte AdGuard VPN pomocí našeho speciálního [nástroje pro odinstalaci](../../installation#advanced) a poté instalaci zopakujte.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter ***services.msc***.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter ***msiexec /unregister*** and hit *Enter*.
    1. Press *Win + R* again, type and enter ***msiexec /regserver*** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Chyba 1618: Již probíhá jiná instalace {#error-1618}

K této chybě dochází při současném spuštění několika instancí instalačního programu AdGuard VPN. Co dělat, když se tato chyba zobrazí:

- Restartujte počítač a spusťte instalaci znovu. Po restartování počítače se zastaví všechny probíhající procesy, včetně všech kopií instalačního programu.

- Na instalační program neklikejte vícekrát, i když se nespustí hned. Zobrazení uživatelského rozhraní instalátoru může někdy trvat několik sekund.

### Chyba 1638: Další verze tohoto produktu je již nainstalována {#error-1638}

Je velmi pravděpodobné, že jste si AdGuard VPN již dříve nainstalovali.

- Zkontrolujte, zda je v počítači již nainstalována AdGuard VPN. Můžete to udělat stisknutím klávesy *Win* a zadáním názvu ***AdGuard VPN***.

- Možná tam jsou nějaké zbytky souborů z předchozí instalace AdGuard VPN. Odinstalujte AdGuard pomocí našeho speciálního [nástroje pro odinstalaci](../../installation#advanced) a poté instalaci zopakujte.

### Další chyby {#other}

Pokud jste narazili na chybu, která není uvedena výše, je možné, že ji dokážeme vyřešit sami. K tomu však od vás potřebujeme soubory záznamů. Proveďte následující kroky:

- Vyhledejte a archivujte **instalační protokoly AdGuard VPN** stejným způsobem, jaký je popsán v [tomto článku](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Vyhledejte a uložte na disk **záznamy prohlížeče událostí**. [Tento článek](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) vysvětluje, jak na to.

Všechny tyto soubory z předchozích dvou kroků zašlete e-mailem na adresu **support@adguard.com** a v těle zprávy popište problém. Náš tým podpory vám odpoví co nejdříve.
