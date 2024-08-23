---
title: Odeslání zpětné vazby
sidebar_position: 6
---

## Nahlášení problému nebo navržení funkce

Pokud jste v AdGuard VPN pro Linux našli chybu nebo chcete navrhnout novou funkci, zde je návod, jak to udělat:

- Vyplňte [formulář zpětné vazby](https://surveys.adguard.com/en/vpn_linux/form.html).
- [Vytvořte problém na GitHubu](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Ještě předtím se ale podívejte do [repozitáře](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue), kde najdete podobné problémy.

:::note
Pokud chcete podpořit zavedení nové funkce nebo opravu chyby, můžete pro to hlasovat na GitHubu. Chcete-li hlasovat, stačí reagovat pomocí emoji.
:::

## Shromažďování a odesílání záznamů

1. Zapněte protokolování ladění zadáním:

   `adguardvpn-cli config set-debug-logging on`

2. Reprodukujte problém a pokuste se zapamatovat si přesný čas, kdy k němu došlo.

3. Chvíli počkejte a poté zadáním příkazu archivujte záznamy ve složce _Downloads_ nebo _Home_:

   Pro Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Pro macOS

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Odešlete soubor se záznamem na devteam@adguard.com. Uveďte čas chyby a připojte odkaz na problém nebo jeho číslo na GitHubu (zobrazuje se jako #číslo vedle názvu). Soubor se záznamem můžete také nahrát na Disk Google a odeslat jej na devteam@adguard.com. Přiložte odkaz na soubor do svého problému na GitHubu.

5. Vypněte protokolování ladění zadáním:

   `adguardvpn-cli config set-debug-logging off`
