---
title: Specifika filtrování provozu WhatsApp a Discord
sidebar_position: 12
---

Když je AdGuard VPN aktivní _selektivně_, filtruje pouze provoz webových stránek a aplikací ze seznamů výjimek. Veškerý ostatní provoz obchází tunel VPN. Tento mechanismus funguje spolehlivě pouze v případě, že systém dokáže jasně identifikovat, která síťová připojení patří ke konkrétní aplikaci.

Vzhledem k síťové architektuře WhatsApp a Discord, jakož i omezením směrování IP, AdGuard VPN nemůže vždy správně zachytit a směrovat veškerý jejich provoz skrze tunel.

## Proč není provoz WhatsApp a Discord plně filtrován

Některý provoz aplikace **WhatsApp** může obcházet tunel VPN, protože aplikace:

1. Používá dynamické IP adresy
2. Funguje prostřednictvím rozsáhlé infrastruktury CDN a Meta
3. Neposkytuje veřejné, aktuální seznamy IP adres používaných aplikací

V důsledku toho AdGuard VPN nemůže zaručit, že veškerý provoz WhatsApp bude směrován skrze tunel, pokud bude fungovat _selektivně_.

Situace s aplikací **Discord** je podobná:

1. Aplikace používá pro chaty, média a hlasová připojení více domén a IP adres
2. Některá připojení mohou být navázána přímo bez jasné souvislosti s aplikací

V důsledku toho může Discord částečně nebo zcela přestat fungovat, když je AdGuard VPN aktivní _selektivně_.

## Doporučené řešení

Pro stabilní fungování aplikací WhatsApp a Discord doporučujeme:

1. Použítí režim, ve kterém je AdGuard VPN aktivní pro všechny aplikace. V tomto režimu je veškerý provoz směrován skrze tunel VPN
2. Vyhnout se selektivnímu provozu AdGuard VPN pro komunikátory s dynamickou architekturou sítě
