---
title: Instalace a odstranění
sidebar_position: 2
---

## Požadavky na systém

AdGuard VPN lze nainstalovat pouze na zařízení s **Microsoft Windows 11, 10, 8.1, 8 a Vista SP2 (pouze přes web)**.

## Instalace AdGuard VPN pro Windows

Chcete-li nainstalovat AdGuard VPN pro Windows, navštivte [náš web](https://adguard-vpn.com/welcome.html) a klikněte na tlačítko *Stáhnout*. Poté se stáhne soubor `adguardVPNInstaller.exe`. Spusťte instalační program a postupujte podle pokynů. Proces zabere méně než minutu.

Poté je třeba zaškrtnout políčko pro přijetí podmínek smlouvy EULA a zásad ochrany osobních údajů. V posledním kroku instalace budete vyzváni k autorizaci prostřednictvím účtu AdGuard nebo sociálních sítí (Google, Apple, Facebook).

### Instalace ve Windows 7

Uživatelé Windows 7 nenajdou kompatibilní verzi aplikace v sekci ke stažení na webových stránkách AdGuard VPN, protože v nejnovějších verzích již není podporována.

Stále si však můžete [stáhnout starší kompatibilní verzi](https://agrd.io/adguard_vpn_for_win7).

## Odinstalace AdGuard VPN pro Windows

Pokud se rozhodnete AdGuard VPN z počítače odstranit, použijte jednu ze tří níže uvedených možností:

- Klikněte na nabídku *Start* a v otevřeném seznamu vyhledejte AdGuard VPN. Klikněte na něj pravým tlačítkem myši a vyberte možnost *Odinstalovat*.
- Klikněte na nabídku *Start* → *Nastavení* → *Aplikace* → *Aplikace a funkce*. Vyhledejte v seznamu AdGuard VPN, klikněte na něj a vyberte *Odinstalovat*.
- Otevřete *Ovládací panel*, poté klikněte na *Programy* → *Programy a funkce* → *Odinstalovat program*. Vyhledejte v seznamu AdGuard VPN, klikněte na něj pravým tlačítkem myši a vyberte *Odinstalovat*.

### Pokročilá odinstalace {#advanced}

Pokud běžná odinstalace z nějakého důvodu nefunguje, můžete zkusit pokročilou metodu. Nejprve si musíte stáhnout [nástroj pro odinstalaci](https://static.adtidy.org/windows/uninstaller/uninstal_utility.zip) vytvořený našimi vývojáři. Rozbalte archiv do libovolné složky v počítači, spusťte soubor **Adguard.UninstallUtility.exe** a nechte aplikaci provést změny v zařízení. Poté postupujte podle níže uvedených pokynů:

1. Vyberte *AdGuard VPN* a *Standardní* typ odinstalace a poté klikněte na *Odinstalovat*:

    ![Standard uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Po zobrazení varovného okna klikněte na *OK*:

    ![Standard uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Počkejte na dokončení odinstalace — zobrazí se fráze **Odinstalace dokončena** a výzva k restartování počítače:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Další kroky proveďte pouze v případě, že provedení prvních dvou kroků z nějakého důvodu nestačilo. Důrazně doporučujeme kontaktovat náš tým podpory před použitím kroků 3.-4. pokročilého pokynu k odinstalaci.

    :::

1. Vyberte *AdGuard VPN* a *Rozšířený* typ odinstalace a poté klikněte na *Odinstalovat*. Ve okně výzvy klikněte na *Ano, pokračovat*:

    ![Extended uninstall *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Po zobrazení varovného okna klikněte na *OK*:

    ![Extended uninstall warning *border](https://cdn.adguard-vpn.com/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Počkejte na dokončení odinstalace — zobrazí se fráze **Odinstalace dokončena** a výzva k restartování počítače:

    ![Uninstall finished *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN byla úspěšně odinstalována!

#### Spuštění odinstalačního programu v konzolovém režimu

Kromě spuštění pokročilého odinstalátoru v uživatelsky interaktivním režimu můžete k odinstalaci AdGuard VPN pro Windows použít také argumenty příkazového řádku. Postupujte podle následujících pokynů:

1. Otevřete příkazový řádek zadáním příkazu *cmd* v nabídce Start.
2. Chcete-li odinstalátor spustit v konzolovém režimu bez interaktivního uživatelského rozhraní, použijte příkaz `/console`. Všechny níže uvedené parametry příkazového řádku budou ignorovány, pokud není aktivován režim `/console`.
3. Pomocí příkazu `/vpn` odinstalujte AdGuard pro Windows. Mělo by to vypadat takto:

   `Adguard.UninstallUtility.exe /console /vpn`

4. Můžete také použít příkaz `/advanced`, který vynutí spuštění odinstalačního programu v *pokročilém režimu* a ` příkaz /settings`, který vynutí, aby odinstalační program smazal spolu s aplikací i uživatelská nastavení.

:::note

Pro úspěšné odinstalování je nutné použít parametry `/console` a `/vpn`. Parametry `/advanced` a `/settings` jsou volitelné.

:::
