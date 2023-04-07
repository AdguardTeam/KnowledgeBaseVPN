---
title: Sådan indsamles og indsendes logfiler
sidebar_position: 1
---

Indsamling af logfiler for AdGuard VPN-browserudvidelse kan ske på flere måder, men uanset måde, vil indsamlede data være de samme. I udvidelsen er logger ikke opdelt i hhv. standard- og fejlfindingsfiler. Der er forskellige muligheder for logfilindsamling for de tilfælde, hvor et aktuelt problem forhindrer brugen af en eller anden instruktion.

## Indsamling og indsendelse af logfiler via sektionen *Anmeld en fejl*

1.  Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
2.  Åbn *Indstillinger* ved at klikke på hamburgermenuikonet (☰) → *Support* → *Anmeld en fejl*.
3.  Angiv i den åbnede formular en automatisk indsat e-mailadresse eller angiv en anden og beskriv den fundne fejl, herunder tidspunktet, hvor denne fejl opstod. Kan problemet ikke genskabes, så angiv så nøjagtigt som muligt, hvornår det senest opstod.
4.  Sørg for, at der er sat flueben ved *Inkludér diagnosticeringsrapporten i meddelelsen*, og tryk på *Indsend*. På denne måde indsendes logfiler sammen med fejlrapporten.

## Indsamling og indsendelse af logfiler via knappen *Eksportér logfiler*

1.  Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
2.  Højreklik på AdGuard VPN-browserudvidelsesikonet.
3.  Klik på *Eksportér logfiler* i den viste menu.
4.  Logfilerne gemmes dernæst på enheden i `txt`-format.

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1.  Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

## Indsamling og indsendelse af logfiler via browserudviklerens værktøjer

### Chrome

1.  Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som førte til fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
2.  Gå til `chrome://extensions`
3.  Slå *udviklertilstand* til

    ![Udviklertilstanden *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

4.  Klik på `background.html`

    ![Baggrund *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

5.  Åbn fanen *Konsol*

    ![Konsolfanen *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6.  Åbn kontekstmenuen, og klik på *Gem som…*

    ![Gem som *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1.  Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

### Firefox

1.  Åbn AdGuard VPN-browserudvidelsen, hvis det er muligt, og gentag handlingerne, som udløste fejlen. Notér det nøjagtige tidspunkt, hvor fejlen opstod.
2.  Gå til `about:addons`
3.  Klik på *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4.  Klik på *Inspicér*

    ![Inspicér *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5.  Gå til fanen *Konsol*

    ![Konsol *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6.  Klik på *Gem alle meddelelser til fil*

    ![Gem *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Nu, hvor logfilerne er indsamlet, skal de videregives til vores udviklingsteam. For at gøre dette:

1.  Anmeld en fejl på GitHub. Detaljeret vejledning til problematikoprettelse på GitHub fremgår i denne artikel.
2.  Send an archive with logs and playback time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and playback time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.