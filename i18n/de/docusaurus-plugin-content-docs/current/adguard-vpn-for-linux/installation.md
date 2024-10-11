---
title: Installation and removal
sidebar_position: 2
---

## AdGuard VPN für Linux installieren

To install AdGuard VPN, type:

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

Geben Sie bei Bedarf Ihr Admin-Passwort ein.

Agree to link the binary to `usr/local/bin` by pressing `y` and wait until the installation is complete.

:::note
You can verify the signature to prove it’s an official version of AdGuard VPN by using the `gpg` tool. [Read more on GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## AdGuard VPN für Linux deinstallieren

Um AdGuard VPN zu deinstallieren, geben Sie Folgendes ein:

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

If required, enter your admin password.
