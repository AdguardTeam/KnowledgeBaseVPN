---
title: Installation und Entfernen
sidebar_position: 2
---

## AdGuard VPN für Linux installieren

Um AdGuard VPN zu installieren, geben Sie Folgendes ein:

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

Stimmen Sie zu, die Binärdatei mit `usr/local/bin` zu verknüpfen, indem Sie `y` drücken und warten Sie, bis die Installation abgeschlossen ist.

:::note
Sie können die Signatur überprüfen, um sicherzustellen, dass es sich um eine offizielle Version von AdGuard VPN handelt, indem Sie das Tool `gpg` verwenden. [Erfahren Sie mehr auf GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
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

Geben Sie bei Bedarf Ihr Admin-Passwort ein.
