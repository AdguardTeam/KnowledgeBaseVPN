---
title: 'Sådan fungerer AdGuard VPN-protokollen'
sidebar_position: 4
---

Vores protokol bruges af [alle AdGuard VPN mobil- og computer-apps](https://adguard-vpn.com/welcome.html). Download ethvert af vores produkter og brug det, vel vidende, at dine data er beskyttet på den mest sikre måde.

## Derfor udviklede vi AdGuard VPN-protokollen

I årevis koncentrerede vi os om at udvikle alle typer varianter af adbloker-apps og browserudvidelser. I 2019 besluttede vi så, uden nogen special anledning, at udvikle vores egen VPN-tjeneste. I virkeligheden var der et par grunde til, at vi gjorde det.

- AdGuard mobil-apps havde kompatibilitetsproblemer med VPN-apps. Normalt kan to VPN-baserede mobil-apps ikke fungere sammen: Dog i sjældne tilfælde på iOS, men aldrig på Android. Da AdGuard adblocker-apps bruger et lokalt VPN til at filtrere netværkstrafik, ville de ikke kunne bruges sammen med nogen anden VPN-app. Vi så derfor udviklingen af et internt VPN som den eneste mulige løsning, der kunne garantere kompatibilitet: Efter at have anvendt noget magi, er de to apps i stand til at arbejde sammen som én VPN-tjeneste.
- For det andet virkede VPN mere end relevant for vores filosofi og prioriteter. Vores primære mål er at beskytte brugernes fortrolighed, og dét er præcis, hvad VPN er beregnet til.
- Endelig er vi gennem årene med udvikling af AdGuard-software blevet eksperter i at filtrere netværkstrafik. Dette muliggjorde det for os at bringe noget nyt ind i stedet for at blive endnu en udvandet VPN.

Fra starten besluttede vi, at AdGuard VPN skulle have én afgørende forskel ift. konkurrenterne — vi ville udvikle og implementere en intern VPN-protokol, der ikke ville tvinge brugerne til at vælge mellem sikkerhed og hastighed.

## Ulemper ved populære VPN-protokoller

Vi udviklede AdGuard VPN-protokollen ved at observere ulemperne i populære VPN-protokoller (OpenVPN, WireGuard, IPSec mv.):

- De kan let detekteres og blokeres på netværksniveau.
- Hvis man forsøger at "skjule" dem, falder deres ydeevne.

For at "skjule" brugen af VPN er datastrømmen ofte "indpakket" i en TCP-forbindelse, og nogle gange er den yderligere krypteret for at få trafikken til at ligne normal webstedskommunikation. Desværre har denne fremgangsmåde en ulempe – grundet brugen af TCP, er der behov for yderligere bekræftelse af levering.

Ved bruge af de populære VPN-protokoller er der derfor altid en afvejning: Hurtig, men nem at opdage kontra langsom.

## Hvad er godt ved AdGuard VPN-protokollen

- Den er *næsten umuligt at skelne fra normal HTTPS-trafik*, dvs., at forbindelsen til AdGuard VPN-serveren ligner nøjagtigt forbindelsen til et alm. websted.
- Til kryptering bruges **HTTPS (TLS)**, der klarer denne opgave perfekt. Det er den mest populære krypteringsmetode i verden, og de biblioteker, som implementerer den, bliver konstant revideret for sikkerhed.

Visse eksisterende VPN-protokoller håndterer også krypteringsopgaven, og de (og dermed det faktum, at VPN bruges) er svære at opdage. Omkostningen er dog normalt en reduceret hastighed. Dette sker ikke vores tilfælde, takket være flere løsninger.

- Vi bruger **HTTP/2-transportprotokollen**, hvilket gør det praktisk talt umuligt at detektere AdGuard VPN-protokollen, samtidig med at høj hastighed opretholdes.
- Ulig andre, opererer AdGuard VPN-protokollen *med data og ikke med pakker*. Det betyder, at AdGuard VPN etablerer en separat "tunnel" for hver forbindelse, hver HTTP/2-stream svarer til en forbindelse. AdGuard VPN overfører data igennem denne tunnel. Dette muliggør at accelerere operationen ved at spare bekræftelsespakker, fordi vi kan buffer data fra flere pakker til én før videresendelse til VPN-serveren (eller omvendt). Jo færre pakker, des færre bekræftelser behøves.
