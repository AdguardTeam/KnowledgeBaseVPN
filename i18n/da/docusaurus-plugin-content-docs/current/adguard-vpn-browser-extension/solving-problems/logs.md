---
title: Sådan indsamles og indsendes logfiler
sidebar_position: 1
---

Indsamling af logfiler for AdGuard VPN-browserudvidelse kan ske på flere måder, men uanset måde, vil indsamlede data være de samme. I udvidelsen er logger ikke opdelt i hhv. standard- og fejlfindingsfiler. Der er forskellige muligheder for logfilindsamling for de tilfælde, hvor et aktuelt problem forhindrer brugen af en eller anden instruktion.

## Indsamling og indsendelse af logfiler via sektionen *Anmeld en fejl*

1. Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
1. Åbn *Indstillinger* ved at klikke på hamburgermenuikonet (☰) → *Support* → *Anmeld en fejl*.
1. Angiv i den åbnede formular en automatisk indsat e-mailadresse eller angiv en anden og beskriv den fundne fejl, herunder tidspunktet, hvor denne fejl opstod. Kan problemet ikke genskabes, så angiv så nøjagtigt som muligt, hvornår det senest opstod.
1. Sørg for, at der er sat flueben ved *Inkludér diagnosticeringsrapporten i meddelelsen*, og tryk på *Indsend*. På denne måde indsendes logfiler sammen med fejlrapporten.

## Indsamling og indsendelse af logfiler via knappen *Eksportér logfiler*

1. Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
1. Højreklik på AdGuard VPN-browserudvidelsesikonet.
1. Klik på *Eksportér logfiler* i den viste menu.
1. Logfilerne gemmes dernæst på enheden i `txt`-format.

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1. Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
1. Indsend et arkiv vedhæftet logfiler og linket til GitHub-problematikken samt med genskabelsestidspunkt til `devteam@adguard.com`. Et arkiv med logfiler og genskabelsestidspunkt kan også tilføjes Google Drev og deles med `devteam@adguard.com` ved at vedhæfte Google Drev-linket til problematikken på GitHub.

## Indsamling og indsendelse af logfiler via browserudviklerens værktøjer

### Chrome

1. Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, da fejlen opstod.
1. Gå til `chrome://extensions`
1. Slå *udviklertilstand* til

    ![Udviklertilstanden *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Klik på `background.html`

    ![Baggrund *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Åbn fanen *Konsol*

    ![Konsolfanen *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Åbn kontekstmenuen, og klik på *Gem som…*

    ![Gem som *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1. Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
1. Indsend et arkiv vedhæftet logfiler, afspilningstidspunkt og linket til GitHub-problematikken til `devteam@adguard.com`. Et arkiv med logfiler og afspilningstidspunkt kan også tilføjes Google Drev og deles med `devteam@adguard.com` ved at vedhæfte Google Drev-linket til problematikken på GitHub.

### Firefox

1. Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som udløste fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
1. Gå til `about:addons`
1. Klik på *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Klik på *Inspicér*

    ![Inspicér *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Gå til fanen *Konsol*

    ![Konsol *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Klik på *Gem alle meddelelser til fil*

    ![Gem *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1. Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
1. Indsend et arkiv vedhæftet logfiler, linket til GitHub-problematikken og med angivelse af afspilningstidspunktet til `devteam@adguard.com`. Et arkiv vedhæftet logfiler, og med angivelse af afspilningstidspunktet, kan også tilføjes Google Drev og deles med `devteam@adguard.com` ved at vedhæfte Google Drev-linket til problematikken på GitHub.
