---
title: Kompatibilitet med AdGuard Ad Blocker
sidebar_position: 3
---

AdGuard VPN har to driftstilstande: *VPN* og *Integreret*.

*VPN-tilstanden* er som standard aktiveret og bruger [AdGuard VPN-protokollen](/general/adguard-vpn-protocol). Den giver den bedste kombination af forbindelseshastighed og sikkerhed. Denne driftstilstand tillader dog ikke AdGuard VPN og AdGuard Ad Blocker at fungere samtidigt.

I *Integreret tilstand* bruger til gengæld IPsec-protokollen, hvilket gør det muligt for AdGuard-apps at samarbejde.

Er AdGuard Ad Blocker allered installeret, når AdGuard VPN installeres, aktiveres denne tilstand automatisk, så apperne kan bruges sideløbende.

Har man installeret AdGuard VPN først og så senere besluttet at prøve AdGuard Ad Blocker, så følg disse trin for brug af to apps sammen:

1. Åbn AdGuard VPN til iOS, og vælg indstillings ⚙-ikonet nederst til højre på skærmen.

2. Tryk på *Generelt* → *Driftstilstand*.

3. Skift tilstanden fra *VPN* til *Integreret*. Færdig!

:::note

I *Integreret tilstand* er *Undtagelser* og *DNS-server* ikke tilgængelige.

:::
