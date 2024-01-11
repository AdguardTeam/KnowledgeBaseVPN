---
title: 'How the AdGuard VPN protocol works'
sidebar_position: 4
---

Vores protokol bruges af [alle AdGuard VPN mobil- og computer-apps](https://adguard-vpn.com/welcome.html). Download ethvert af vores produkter og brug det, vel vidende, at dine data er beskyttet på den mest sikre måde.

## Derfor udviklede vi AdGuard VPN-protokollen

I årevis koncentrerede vi os om at udvikle alle typer varianter af adbloker-apps og browserudvidelser. I 2019 besluttede vi så, uden nogen special anledning, at udvikle vores egen VPN-tjeneste. When, in reality, there were a few reasons that prompted us to do so.

- AdGuard mobil-apps havde kompatibilitetsproblemer med VPN-apps. Normalt kan to VPN-baserede mobil-apps ikke fungere sammen: Dog i sjældne tilfælde på iOS, men aldrig på Android. As AdGuard Ad Blocker apps use local VPN to filter network traffic, using them alongside any VPN app would be out of the question. Vi så derfor udviklingen af et internt VPN som den eneste mulige løsning, der kunne garantere kompatibilitet: Efter at have anvendt noget magi, er de to apps i stand til at arbejde sammen som én VPN-tjeneste.
- For det andet virkede VPN mere end relevant for vores filosofi og prioriteter. Vores primære mål er at beskytte brugernes fortrolighed, og dét er præcis, hvad VPN er beregnet til.
- Endelig er vi gennem årene med udvikling af AdGuard-software blevet eksperter i at filtrere netværkstrafik. Dette muliggjorde det for os at bringe noget nyt ind i stedet for at blive endnu en udvandet VPN.

Fra starten besluttede vi, at AdGuard VPN skulle have én afgørende forskel ift. konkurrenterne — vi ville udvikle og implementere en intern VPN-protokol, der ikke ville tvinge brugerne til at vælge mellem sikkerhed og hastighed.

## Ulemper ved populære VPN-protokoller

Vi udviklede AdGuard VPN-protokollen ved at observere ulemperne i populære VPN-protokoller (OpenVPN, WireGuard, IPSec mv.):

- De kan let detekteres og blokeres på netværksniveau.
- If you try to "conceal" them, the performance will drop.

To "conceal" the use of VPN, the data flow is often "wrapped" in a TCP connection, and sometimes it's additionally encrypted to make the traffic appear like normal website communication. Unfortunately, this approach has a disadvantage — due to the use of TCP, there is a need for additional confirmation of delivery.

Ved bruge af de populære VPN-protokoller er der derfor altid en afvejning: Hurtig, men nem at opdage kontra langsom.

## What's great about the AdGuard VPN protocol

- Den er *næsten umuligt at skelne fra normal HTTPS-trafik*, dvs., at forbindelsen til AdGuard VPN-serveren ligner nøjagtigt forbindelsen til et alm. websted.
- Til kryptering bruges **HTTPS (TLS)**, der klarer denne opgave perfekt. Det er den mest populære krypteringsmetode i verden, og de biblioteker, som implementerer den, bliver konstant revideret for sikkerhed.

Visse eksisterende VPN-protokoller håndterer også krypteringsopgaven, og de (og dermed det faktum, at VPN bruges) er svære at opdage. Omkostningen er dog normalt en reduceret hastighed. This doesn't happen in our case, thanks to several solutions.

- We use the **HTTP/2 transport protocol**, which makes it virtually impossible to detect the AdGuard VPN protocol while maintaining high speed.
- Unlike others, the AdGuard VPN protocol *operates with data and not with packets*. Det betyder, at AdGuard VPN etablerer en separat "tunnel" for hver forbindelse, hver HTTP/2-stream svarer til en forbindelse. AdGuard VPN overfører data igennem denne tunnel. Dette muliggør at accelerere operationen ved at spare bekræftelsespakker, fordi vi kan buffer data fra flere pakker til én før videresendelse til VPN-serveren (eller omvendt). Jo færre pakker, des færre bekræftelser behøves.
