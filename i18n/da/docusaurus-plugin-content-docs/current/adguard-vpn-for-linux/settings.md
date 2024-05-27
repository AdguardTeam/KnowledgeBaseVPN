---
title: Indstillinger
sidebar_position: 4
---

AdGuard VPN til Linux-indstillingerne kan håndteres via kommandolinjen. For at se den aktuelle opsætning, skriv:

```
adguardvpn-cli config show
```

## VPN-tilstand: TUN eller SOCKS5

Det kan vælges, hvordan AdGuard VPN ruter trafik.

For at angive standard tunneltilstand, skriv:

```
adguardvpn-cli config set-mode TUN
```

For at angive SOCKS5-tilstanden, skriv:

```
adguardvpn-cli config set-mode SOCKS
```

For at angive SOCKS5-porttypen, skriv:

```
adguardvpn-cli config set-socks-port <port_number>
```

Erstat `<port_number>` med den port, der skal oprettes forbindelse til.

## DNS upstream-adresse

For at indstille en DNS-upstream, skriv:

```
adguardvpn-cli config set-dns <server_address>
```

Erstat `<server_address>` med adressen på DNS-serveren. For at bruge denne DNS-server på systemniveau, skriv:

```
adguardvpn-cli config set-system-dns on
```

## No-route tilstand

Denne funktion ruter kun de angivne adresser igennem VPN-tunnelen. For at aktivere no-route tilstanden, skriv:

```
adguardvpn-cli config set-no-routes on
```

## Nedbrudsrapporter

Aktiveres automatiske nedbrudsrapporter, underretter AdGuard VPN udviklerne, hvis noget går galt. For at aktivere indstillingen, skriv:

```
adguardvpn-cli config send-reports on
```

For at deaktivere den, indstil den til "off".

## Opdateringskanal

For at ændre opdateringskanalen, skriv:

```
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## Tips

AdGuard VPN kan vise tips efter eksevering af kommandoer — f.eks. hvad næste trin er, eller hvordan en fejl løses. Denne indstilling er som standard aktiveret, men den kan deaktiveres ved at skrive:

```
adguardvpn-cli config set-show-hints off
```

For at genaktivere den, erstatte "off" med "on".

## Fejlretningslogning

For at anmelde en fejl, skal fejlretningslogfiler muligvis deles med udviklerne eller supportteamet. For at aktivere fejlretningslogning, skriv:

```
adguardvpn-cli config set-debug-logging on
```

Deaktivér denne indstilling efter eksport af logfiler.
