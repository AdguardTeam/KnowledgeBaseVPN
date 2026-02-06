---
title: Interakce s AdGuardem pro Linux
sidebar_position: 8
---

## Interakce s AdGuardem pro Linux

Using  AdGuard VPN CLI in **tunnel mode** together with AdGuard CLI in **automatic proxy mode** is impossible due to a routing loop: AdGuard VPN CLIs traffic currently can not be excluded from being transparently proxied by AdGuard CLI, and AdGuard CLIʼs traffic must go through the AdGuard VPN CLI tunnel.

Toto jsou dvě možná řešení:

- Přepnout AdGuard CLI na **manuální proxy režim**.
  - In this case, AdGuard VPN CLI can be used in **tunnel mode**, but apps for which ad blocking is desired must be manually configured to use AdGuard CLIʼs proxy.
- Přepnout AdGuard VPN CLI do režimu **SOCKS5** a nakonfigurovat AdGuard CLI s odchozím proxy směřujícím na rozhraní SOCKS5 AdGuard VPN CLI. In this case, itʼs important to keep in mind that:
  - For an appʼs traffic to go through the VPN tunnel it must either have its traffic transparently proxied by AdGuard CLI (which is the case for all apps by default), or manually configured to use AdGuard VPN CLIʼs SOCKS5 interface.
  - In order to avoid a routing loop, the `skip_outbound_proxy` option must be enabled for AdGuard VPN CLI in AdGuard CLIʼs apps configuration section. Ve výchozím nastavení je `skip_outbound_proxy` povoleno pro všechny aplikace s názvem `vpn`, včetně AdGuard VPN CLI.
