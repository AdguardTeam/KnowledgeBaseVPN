---
title: Installation and removal
sidebar_position: 2
---

## Install AdGuard VPN for Linux

To install AdGuard VPN, type:

Release

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v

Beta

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v

Nightly

    curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v

If required, enter your admin password.

Agree to link the binary to `/usr/local/bin` by pressing `y` and wait until the installation is complete.

:::note
You can verify the signature to prove it’s an official version of AdGuard VPN by using the `gpg` tool. [Read more on GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

:::note
You can also install and run the AdGuard VPN CLI Docker container on MikroTik routers with RouterOS. For more information and detailed instructions, refer to [our dedicated guide](/adguard-vpn-for-linux/setting-up-on-a-router/mikrotik/).
:::

## Uninstall AdGuard VPN for Linux

To uninstall AdGuard VPN, type:

Release

    curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u

Beta

    curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u

Nightly

    curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u

If required, enter your admin password.
