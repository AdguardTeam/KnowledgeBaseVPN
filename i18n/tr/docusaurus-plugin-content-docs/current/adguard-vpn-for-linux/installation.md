---
title: Kurulum ve kaldırma
sidebar_position: 2
---

## Linux için AdGuard VPN kurma

AdGuard VPN'i kurmak için şunu yazın:

Release

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

Gerekirse, yönetici parolanızı girin.

Agree to link the binary to `usr/local/bin` by pressing `y` and wait until the installation is complete.

:::note
AdGuard VPN'in resmi bir sürümü olduğunu kanıtlamak için `gpg` aracını kullanarak imzayı doğrulayabilirsiniz. [GitHub'da daha fazlasını okuyun](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## Linux için AdGuard VPN'i kaldırma

AdGuard VPN'i kaldırmak için şunu yazın:

Release

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

Gerekirse, yönetici parolanızı girin.
