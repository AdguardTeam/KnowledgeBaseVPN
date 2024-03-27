---
title: Sådan indsamles og indsendes logfiler
sidebar position: 1
---

Opleves problemer under brug af AdGuard VPN til Windows, kan vi informeres herom. Vi vil også værdsætte, at applikationslogfiler ligeledes indsendes, da de bidrager til hurtigere problemløsninger.

## Indsamling af logfiler

### Standardlogger

Som standard bruger AdGuard VPN til Windows logningsniveauet Standard, dvs. basisindsamling af data om kørende app-processer. Inden indsendelse af logfilerne, åbn AdGuard VPN til Windows og gentag om muligt handlingerne, som udløste fejlen. Notér det nøjagtige tidspunkt for fejlens opståen.

### Udvidede logfiler

I de fleste tilfælde er logningsniveauet Standard tilstrækkeligt til at spore mulige fejl. Der er dog tilfælde, hvor mere detaljerede tekniske oplysninger om enheden og forbindelser er nødvendig, og så vil vores supportteam bede om at få aktiveret logningsniveauet Udvidet. Følg disse næste trin for at indsende denne type logfiler:

1. Åbn AdGuard VPN til Windows og vælg **Indstillinger** i menuen ovenfor → **App-indstillinger** → **Avancerede indstillinger** → **Logningsniveau**.

1. Vælg i afsnittet **Logningsniveau** **Optag alt**.

    ![Logningsniveau *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Gentag de handlinger, som førte til fejlen, og notér tidspunktet, da den opstod.

1. Skift logningsniveauet tilbage til **Optag som standard**.

### Sporingslogger

Nogle gange kan supporten anmode om indsendelse af sporingslogfiler. Følg disse trin for at gøre dette:

1. Højreklik på AdGuard VPN-ikonet i bakkemenuen, og vælg **Afslut AdGuard VPN**.

    ![Afslut *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    Ses advarselsmeddelelsen, acceptér at stoppe tjenesten.

    ![Bemærk *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Åbn konsollen (skriv `cmd` i startpanelet).

1. Kør applikationen med kommandoen `C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace` på 64-bit Windows, og `C:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace` på 32-bit Windows.

1. Genskab problematikken. Vi anbefaler kraftigt, at man noterer sig det præcise tidspunkt for, hvornår problematikken blev genskabt. Dette hjælper supportteamet med at finde relevante logposter og løse problematikken hurtigere.

1. Eksportér de registrerede logfiler: **Support** → **Eksportér logfiler og systeminfo**.

Bare rolig, selv hvis logfilen er stor. Vi har brug for at kende så mange detaljer som muligt for at løse problematikken.

## Indsendelse af logfiler

Følg de næste trin for at indsende logfiler til vores supportteam:

1. Klik på **Support** i menuen ovenfor → **Anmeld en fejl**.

    ![Anmeld en fejl *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. Angiv din e-mailadresse i formularen, der åbnes, og beskriv den fundne fejl, inkl. tidspunktet, da den opstod. Kan problemet ikke genskabes, angiv da så nøjagtigt som muligt, hvornår det senest opstod.

    ![Anmeld *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Der er et flueben ud for **Indsend detaljeret systeminfo**, hvilket betyder, at når en anmeldelse indsendes, inkluderes logfiler ligeledes.

> Er det af en eller anden grund mere bekvemt at indsende logfiler på anden vis, kan man selv eksportere dem. Dette gøres ved at gå til Indstillinger → **Support** → **Eksportere logfiler og systeminfo**.

![Eksport *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Bemærk**: Opleves problemer under eksporten af logfiler, findes der en alternativ måde. Følg venligst disse trin:

1. Åbn Explorer-appen

1. Indsæt `%programdata%/adguardvpn` i søgefeltet

1. Find mappen kaldet **Logs**

1. Arkivér mappen

1. Indsend den til supportteamet
