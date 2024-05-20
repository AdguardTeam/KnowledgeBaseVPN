---
title: Feedbackindsendelse
sidebar_position: 5
---

## Anmeld et problem eller foreslå en funktion

Er der fundet en fejl i AdGuard VPN til Linux eller ønskes en ny funktion tilføjet, er fremgangsmåden:

- Udfyld [feedbackformularen](https://surveys.adguard.com/en/vpn_linux/form.html).
- [Opret en GitHub-problematik](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Inden det gøres, tjek først [repo'et](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) for lignende problemer.

:::note
Vil man støtte implementeringen af en ny funktion eller fejlrettelse, kan man stemme på den på GitHub. For at stemme, skal man blot reagere med en emoji.
:::

## Indsamling og indsendelse af logfiler

1. Aktivér fejlretningslogning ved at skrive:

   `adguardvpn-cli config set-debug-logging on`

2. Genskab problematikken, og prøv at huske det nøjagtige tidspunkt, da det opstod.

3. Vent et stykke tid, og arkivér derefter logfilerne i mappen _Downloads_ eller _Hjem_ ved at skrive:

   Til Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Til Mac

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Indsend logfilen til devteam@adguard.com. Angiv tidspunktet for fejlen, og vedhæft et link til GitHub-problematikken eller dens nummer (angivet som #nummer ved siden af titlen). Alternativt kan logfilen uploades til Google Drev og deles med devteam@adguard.com. Føj fillinket til GitHub-problematikken.

5. Deaktivér fejlretningslogning ved at skrive:

   `adguardvpn-cli config set-debug-logging off`
