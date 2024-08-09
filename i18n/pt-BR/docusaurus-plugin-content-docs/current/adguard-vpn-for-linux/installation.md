---
title: Instalação e remoção
sidebar_position: 2
---

## Instalar o AdGuard VPN para Linux

Para instalar o AdGuard VPN, digite:

Versão

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Beta

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v
```

Noturna

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v
```

Se necessário, digite sua senha de administrador.

Concorde em vincular o binário a `usr/local/bin` pressionando `y` e aguarde até que a instalação seja concluída.

:::note
Você pode verificar a assinatura para provar que é uma versão oficial do AdGuard VPN usando a ferramenta `gpg`. [Leia mais no GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## Desinstalar o AdGuard VPN para Linux

Para desinstalar o AdGuard VPN, digite:

Versão

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u
```

Beta

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u
```

Noturna

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u
```

Se necessário, digite sua senha de administrador.
