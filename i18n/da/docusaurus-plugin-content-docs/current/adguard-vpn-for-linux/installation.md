---
title: Installation og fjernelse
sidebar_position: 2
---

## Installér AdGuard VPN til Linux

For at installere AdGuard VPN, skriv:

Udgivelse

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v
```

Angiv om nødvendigt admin-adgangskoden.

Acceptér at linke binærfilen til `usr/local/bin` ved at trykke `y`, og vent indtil installationen er færdig.

:::note
Man kan vha. `gpg`-værktøjet bekræfte signaturen for at bevise, at det er en officiel version af AdGuard VPN. [Læs mere på GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## Afinstallér AdGuard VPN til Linux

For at afinstallere AdGuard VPN, skriv:

Udgivelse

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u
```

Angiv om nødvendigt admin-adgangskoden.
