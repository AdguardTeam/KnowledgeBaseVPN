---
title: 'AdGuard VPN-kompatibilitet med Chromecast'
sidebar_position: 5
---

Den indbyggede Chromecast-teknologi er inkompatibel med et kørende VPN, da dette bruger [DLNA-protokollen](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance), der ikke understøtter VPN-forbindelser. Dette betyder, at hvis en Chromecast-enhed og en smartphone eller tablet med et aktivt VPN er på det samme Wi-Fi netværk, genkendes Chromecast i de fleste tilfælde ikke af mobilenheden.

Google har også blokeret muligheden for at ændre Chromecasts netværksindstillinger ved at begrænse adgangen til dens DNS-indstillinger. Dette forhindrer også Chromecast i at fungere på et VPN.

Problemet kan løses ved at opsætte et VPN på en router. Dette vil tillade alle enheder tilsluttet routeren at bruge VPN-forbindelsen, inkl. Chromecast. Husk dog, at opsætning af et routerbaseret VPN kan kræve yderligere viden, så tjek producentens manual.
