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

## SOCKS-indstillinger

For at angive SOCKS5 lytte-vært, skriv:

```
adguardvpn-cli config set-socks-host <host>
```

Erstat `<host>` med den vært, der ønskes anvendt. Brug af en anden vært end 127.0.0.1 kræver indstilling af et brugernavn og en adgangskode. For at indstille SOCKS brugernavn og adgangskode, skriv:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Erstat `<username>` og `<password>` med ønsket brugernavn og adgangskode. For at rydde SOCKS brugernavn og adgangskode, skriv:

```
adguardvpn-cli config clear-socks-auth
```

## DNS upstream-adresse

For at indstille en DNS-upstream, skriv:

```
adguardvpn-cli config set-dns <server_address>
```

Erstat `<server_address>` med adressen på DNS-serveren. For at bruge denne DNS-server på systemniveau, skriv:

```
adguardvpn-cli config set-system-dns on
```

## VPN-tunnel rutningstilstand: NONE, AUTO eller SCRIPT

Der kan vælges, hvordan AdGuard VPN ruter trafik igennem VPN-tunnelen. For at indstille tunnelrutningstilstanden til INGEN (ingen routing), skriv:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

For at indstille tunnelrutningstilstanden til AUTO (automatisk routing), skriv:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

For at indstille tunnelrutningstilstanden til SCRIPT (tilpasset routing), skriv:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

For at oprette et rutningsscript med de korrekte tilladelser, skriv:

```
adguardvpn-cli config create-routes-script
```

## Brug af QUIC

For at aktivere brugen af AdGuard VPN-protokollen baseret på QUIC (HTTP/3), skriv:

```
adguardvpn-cli config set-use-quic on
```

For at deaktivere den, indstil den til "off".

## Nedbrudsrapporter

Aktiveres automatiske nedbrudsrapporter, underretter AdGuard VPN udviklerne, hvis noget går galt. For at aktivere indstillingen, skriv:

```
adguardvpn-cli config send-reports on
```

For at deaktivere den, sæt den til "off".

## Opdateringskanal

For at ændre opdateringskanalen, skriv:

```
adguardvpn-cli config set-update-channel <channel>
```

Erstat `<channel>` med `release`, `beta` eller `nightly` afhængigt af præferencerne.

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
