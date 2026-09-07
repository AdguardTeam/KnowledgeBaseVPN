---
title: Linux için AdGuard etkileşimi
sidebar_position: 8
---

## Linux için AdGuard etkileşimi

Using  AdGuard VPN CLI in **tunnel mode** together with AdGuard CLI in **automatic proxy mode** is impossible due to a routing loop: AdGuard VPN CLIs traffic currently can not be excluded from being transparently proxied by AdGuard CLI, and AdGuard CLIʼs traffic must go through the AdGuard VPN CLI tunnel.

İki olası senaryo vardır:

- Switch AdGuard CLI to **manual proxy mode**.
  - In this case, AdGuard VPN CLI can be used in **tunnel mode**, but apps for which ad blocking is desired must be manually configured to use AdGuard CLIʼs proxy.
- Switch AdGuard VPN CLI to **SOCKS5 mode**, and configure AdGuard CLI with an outbound proxy pointing to the SOCKS5 interface of AdGuard VPN CLI. In this case, itʼs important to keep in mind that:
  - For an appʼs traffic to go through the VPN tunnel it must either have its traffic transparently proxied by AdGuard CLI (which is the case for all apps by default), or manually configured to use AdGuard VPN CLIʼs SOCKS5 interface.
  - In order to avoid a routing loop, the `skip_outbound_proxy` option must be enabled for AdGuard VPN CLI in AdGuard CLIʼs apps configuration section. Varsayılan olarak, `skip_outbound_proxy`, AdGuard VPN CLI dâhil olmak üzere adında `vpn` bulunan tüm uygulamalar için etkindir.
