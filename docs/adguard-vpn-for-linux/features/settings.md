---
title: Settings
sidebar_position: 3
---

You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:

```shell
adguardvpn-cli config show
```

## VPN mode: TUN or SOCKS5

You can choose how AdGuard VPN routes traffic.

### TUN mode

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

### SOCKS5 mode

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

## DNS upstream address

To set a DNS upstream, type:

```shell
adguardvpn-cli config set-dns <server_address>
```

Replace `<server_address>` with the address of your DNS server. To use this DNS server at the system level, type:

```shell
adguardvpn-cli config set-change-system-dns on
```

If you set the parameter to `off`, the system DNS settings remain unchanged and DNS queries may bypass the VPN tunnel.

:::note

In SOCKS5 mode, the `set-dns` and `set-change-system-dns` commands are inactive. The DNS behavior is determined solely by the settings of each app.

:::

## Crash reports

If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:

```shell
adguardvpn-cli config send-reports on
```

To disable it, set it to `off`.

## Update channel

To change the update channel, type:

```shell
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## Hints

AdGuard VPN can show you hints after executing commands — for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:

```shell
adguardvpn-cli config set-show-hints off
```

To re-enable it, replace `off` with `on`.

## Show notifications

The setting is responsible for the appearance of system notifications when AdGuard VPN is turned on/off or waiting for reconnection, for example:

- A user turns VPN on — the *VPN connected* notification appears.
- A user turns VPN off — the *VPN disconnected* notification appears.
- A user is waiting for the VPN connection to be recovered — the *Waiting for connection* notification appears.

```shell
adguardvpn-cli config set-show-notifications on
```
