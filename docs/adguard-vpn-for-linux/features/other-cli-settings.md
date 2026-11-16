---
title: Other CLI settings
sidebar_position: 7
---

## Set protocol

To set the protocol used by AdGuard VPN (HTTP2, QUIC, or automatic choice between them), type one of the commands, depending on your choice:

```shell
adguardvpn-cli config set-protocol http2
adguardvpn-cli config set-protocol quic
adguardvpn-cli config set-protocol auto
```

## Debug logging

To report a bug, you may need to share debug logs with the developers or support team. To enable debug logging, type:

```shell
adguardvpn-cli config set-debug-logging on
```

Disable this setting after exporting logs.

## Related articles

- [Settings](/adguard-vpn-for-linux/features/settings/)
- [VPN modes: TUN and SOCKS5](/adguard-vpn-for-linux/features/vpn-modes/)
- [Sending feedback](/adguard-vpn-for-linux/solving-problems/feedback/)
