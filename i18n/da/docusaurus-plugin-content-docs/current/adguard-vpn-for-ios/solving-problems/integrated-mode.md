---
title: Kompatibilitet med AdGuard Ad Blocker
sidebar_position: 3
---

AdGuard VPN har to driftstilstande — General og Integreret. Generel tilstand er som standard aktiveret og bruger [AdGuard VPN-protokollen](/general/adguard-vpn-protocol). Det giver den bedste kombination af forbindelseshastighed og sikkerhed.

Denne driftstilstand tillader dog ikke AdGuard VPN og AdGuard Ad Blocker at køre samtidigt.

Kompatibilitetstilstanden bruger til gengæld IPsec-protokollen, hvilket gør det muligt for AdGuard-apps at samarbejde. Kører AdGuard Ad Blocker allered, når AdGuard VPN installeres, aktiveres denne tilstand automatisk, så apperne kan køre samtidigt. Har man installeret AdGuard VPN først og så senere besluttet at prøve AdGuard Ad Blocker, skal disse trin følges for at bruge to apps sammen:

1. Åbn AdGuard VPN til iOS, og vælg "Indstillinger" i nederste til højre på skærmen.

2. Gå til "App-indstillinger" og vælg "Driftstilstand".

3. Skift tilstanden fra *Generel* til *Integreret*. Færdig!

> Bemærk, at i tilstanden **Integreret** er funktionerne Undtagelser eller DNS-server utilgngelige.
