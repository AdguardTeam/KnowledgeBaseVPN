---
title: Login, tilslutning og opdatering
sidebar_position: 3
---

## Log ind og log ud

For at logge ind eller oprette en konto, skriv:

```
adguardvpn-cli login
```

Angiv e-mailadressen og adgangskoden til AdGuard-kontoen. Har man endnu ingen konto, tilbydes man at oprette én.

:::note
Man kan også oprette en AdGuard-konto på vores [websted](https://auth.adguard.com/login.html) og derefter logge ind på AdGuard VPN til Linux vha. sine legitimationsoplysninger.
:::

For at logge ud AdGuard VPN, skriv:

```
adguardvpn-cli logout
```

## Opret forbindelse til VPN

For hurtig forbindelsesoprettelse, skriv:

```
adguardvpn-cli connect
```

AdGuard VPN vil oprette forbindelse til den hurtigste tilgængelige eller seneste brugte lokation.

For at se tilgængelige lokationer, skriv:

```
adguardvpn-cli list-locations
```

For at oprette forbindelse til en bestemt lokation, skriv:

```
adguardvpn-cli connect -l <location>
```

Erstat `<location>` med byen, landet eller ISO-koden for den lokation, der skal oprettes forbindelse til.

Angiv om nødvendigt admin-adgangskoden.

## Søg efter opdateringer

For at søge efter opdateringer, skriv:

```
adguardvpn-cli check-update
```
