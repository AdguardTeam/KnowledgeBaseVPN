---
title: "VPN modes: TUN and SOCKS5"
sidebar_position: 3
---

You can choose how AdGuard VPN routes traffic.

## TUN mode

:::note

Requires administrator rights.

:::

When TUN mode is enabled, AdGuard VPN:

- Creates a virtual Layer-3 interface (tunX or utunX, depending on the operating system).
- Updates the system routing table so that the default route (or only selected subnets if you use exclusions) is sent through this interface.
- Captures IP packets transparently for all apps that match the routing rules — no per-app configuration is required.
- Routes DNS queries through the tunnel to prevent leaks (unless a domain/app is excluded).

To set the default tunnel mode, type:

```shell
adguardvpn-cli config set-mode TUN
```

## SOCKS5 mode

When SOCKS5 mode is enabled, AdGuard VPN:

- Starts a local SOCKS5 proxy that by default listens on 127.0.0.1:1080 (configurable via the `set-socks-host` and `set-socks-port` commands).
- Only applications explicitly configured to use this proxy will send their traffic through AdGuard VPN.
- Does not change system routes or DNS by itself. Traffic is not redirected automatically.

:::note

To prevent DNS leaks, use a client that resolves hostnames via the proxy (often denoted as `socks5h` in tools like `curl`). If an app resolves hostnames locally, system DNS may bypass the proxy.

```shell
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

To set the SOCKS5 mode, type:

```shell
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI provides both TCP and UDP proxying in SOCKS5 mode. However, some apps don’t support UDP via a SOCKS5 proxy. For instance, if you select SOCKS5 in your browser, it will use TCP-based protocols (HTTP/1.1 and HTTP/2) by default.

:::

## SOCKS settings

To set the SOCKS listen host, type:

```shell
adguardvpn-cli config set-socks-host <host>
```

Replace `<host>` with the host you want to use. Using a host other than 127.0.0.1 requires setting a username and password. To set the SOCKS username and password, type:

```shell
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Replace `<username>` and `<password>` with your desired username and password. To clear the SOCKS username and password, type:

```shell
adguardvpn-cli config clear-socks-auth
```

To set the SOCKS5 port, type:

```shell
adguardvpn-cli config set-socks-port <port_number>
```

Replace `<port_number>` with the port you want to connect to.
