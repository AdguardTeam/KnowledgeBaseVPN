---
title: Instalace a odstranění
sidebar_position: 2
---

## Instalace AdGuard VPN pro Linux

Chcete-li nainstalovat AdGuard VPN, zadejte:

Hlavní

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

V případě potřeby zadejte heslo správce.

Stisknutím `y` odsouhlasíte propojení binárního souboru s `usr/local/bin` a počkáte na dokončení instalace.

:::note
Podpis můžete ověřit pomocí nástroje `gpg`, abyste prokázali, že se jedná o oficiální verzi AdGuard VPN. [Více na GitHubu](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## Odinstalace AdGuard VPN pro Linux

Chcete-li odinstalovat AdGuard VPN, zadejte:

Hlavní

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

V případě potřeby zadejte heslo správce.
