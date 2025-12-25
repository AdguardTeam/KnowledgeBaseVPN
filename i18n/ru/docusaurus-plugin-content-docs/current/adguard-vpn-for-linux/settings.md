---
title: Настройки
sidebar_position: 4
---

Вы можете управлять настройками AdGuard VPN для Linux из командной строки. Чтобы просмотреть текущую конфигурацию, введите:

```
adguardvpn-cli config show
```

## Режим VPN: TUN или SOCKS5

Вы можете выбрать, как AdGuard VPN маршрутизирует трафик.

### TUN mode

:::note

Requires administrator rights.

:::

When TUN mode is enabled, AdGuard VPN:

- Creates a virtual Layer-3 interface (tunX or utunX, depending on the operating system).
- Updates the system routing table so that the default route (or only selected subnets if you use exclusions) is sent through this interface.
- Captures IP packets transparently for all apps that match the routing rules — no per-app configuration is required.
- Routes DNS queries through the tunnel to prevent leaks (unless a domain/app is excluded).

Чтобы установить туннельный режим по умолчанию, введите:

```
adguardvpn-cli config set-mode TUN
```

### SOCKS5 mode

When SOCKS5 mode is enabled, AdGuard VPN:

- Starts a local SOCKS5 proxy that by default listens on 127.0.0.1:1080 (configurable via the `set-socks-host` and `set-socks-port` commands).
- Only applications explicitly configured to use this proxy will send their traffic through AdGuard VPN.
- Does not change system routes or DNS by itself. Traffic is not redirected automatically.

:::note

To prevent DNS leaks, use a client that resolves hostnames via the proxy (often denoted as `socks5h` in tools like `curl`). If an app resolves hostnames locally, system DNS may bypass the proxy.

```
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

Чтобы установить режим SOCKS5, введите:

```
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI provides both TCP and UDP proxying in SOCKS5 mode. However, some apps don’t support UDP via a SOCKS5 proxy. For instance, if you select SOCKS5 in your browser, it will use TCP-based protocols (HTTP/1.1 and HTTP/2) by default.

:::

## Настройки SOCKS

Чтобы установить порт SOCKS, введите:

```
adguardvpn-cli config set-socks-host <host>
```

Замените `<host>` на порт, который хотите использовать. Для использования хоста, отличного от 127.0.0.1, необходимо задать имя пользователя и пароль. Чтобы установить имя пользователя и пароль SOCKS, введите:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Замените `<username>` и `<password>` на желаемые имя пользователя и пароль. Чтобы очистить имя пользователя и пароль SOCKS, введите:

```
adguardvpn-cli config clear-socks-auth
```

Чтобы установить порт SOCKS5, введите:

```
adguardvpn-cli config set-socks-port <port_number>
```

Замените `<port_number>` на порт, к которому вы хотите подключиться.

## DNS-адрес

Для установки DNS-сервера введите:

```
adguardvpn-cli config set-dns <server_address>
```

Замените `<server_address>` на адрес вашего DNS-сервера. Чтобы использовать этот DNS-сервер на системном уровне, введите:

```
adguardvpn-cli config set-change-system-dns on
```

If you set the parameter to `off`, the system DNS settings remain unchanged and DNS queries may bypass the VPN tunnel.

:::note

In SOCKS5 mode, the `set-dns` and `set-change-system-dns` commands are inactive. The DNS behavior is determined solely by the settings of each app.

:::

## Режим маршрутизации VPN-туннеля: NONE, AUTO или SCRIPT

With AdGuard VPN CLI, you can choose how traffic is routed through the VPN tunnel. The routing mode controls system routing when the TUN interface is active. It does not automatically redirect traffic in SOCKS5/proxy mode; apps must be configured to use the local SOCKS5 proxy in that case.

### NONE — no routing changes

AdGuard VPN CLI brings up the TUN interface but does not modify the system routing table. No default route to the tunnel is installed, so traffic continues to use the existing OS routes.

Use this option if you want to manage routes yourself manually or with third-party tools.

Чтобы установить режим NONE (без маршрутизации), введите:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

### AUTO — automatic routing

AdGuard VPN CLI creates and maintains the minimal set of routes required for the tunnel to work system-wide. Typical behavior includes:

- Installing and adjusting routes so eligible traffic (according to your allow, deny, and exclusion settings) flows through the TUN interface.
- Preserving access to local networks (commonly RFC1918 subnets) and other exclusions, so that your LAN, printers, and routers remain reachable.
- Reacting to reconnects and endpoint changes by reapplying routes as needed.

Use AUTO if you want a “just works” configuration with system-wide protection and no per-app setup.

Чтобы установить режим AUTO (автоматическая маршрутизация), введите:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

### SCRIPT — user-defined routing

AdGuard VPN CLI executes a user-supplied script that adds or removes routes when the tunnel state changes. You have full control over what goes through the tunnel and what stays direct.

Чтобы установить режим SCRIPT (пользовательский скрипт маршрутизации), введите:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Чтобы создать скрипт для маршрутизации с соответствующими разрешениями, введите:

```
adguardvpn-cli config create-routes-script
```

Use SCRIPT if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what AUTO provides.

#### Examples

**Linux custom script:**

```
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
ip route add 192.168.100.0/24 dev "$INTERFACE"  # Corporate network
ip route add 10.0.0.0/8 dev "$INTERFACE"        # Private networks
ip route add 172.16.0.0/12 dev "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# ip route add 0.0.0.0/1 dev "$INTERFACE"
# ip route add 128.0.0.0/1 dev "$INTERFACE"
# ip -6 route add 2000::/3 dev "$INTERFACE" || true
# ip route del 192.168.0.0/16 dev "$INTERFACE" 2>/dev/null || true
# ip route del 10.0.0.0/8 dev "$INTERFACE" 2>/dev/null || true
```

**macOS custom script:**

```
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
route add 192.168.100.0/24 -iface "$INTERFACE"  # Corporate network
route add 10.0.0.0/8 -iface "$INTERFACE"        # Private networks
route add 172.16.0.0/12 -iface "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# route add 1.0.0.0/8 -iface "$INTERFACE"
# route add 2.0.0.0/7 -iface "$INTERFACE"
# route add 4.0.0.0/6 -iface "$INTERFACE"
# route add 8.0.0.0/5 -iface "$INTERFACE"
# route add 16.0.0.0/4 -iface "$INTERFACE"
# route add 32.0.0.0/3 -iface "$INTERFACE"
# route add 64.0.0.0/2 -iface "$INTERFACE"
# route add 128.0.0.0/1 -iface "$INTERFACE"
# route add -inet6 2000::/3 -iface "$INTERFACE" || true
# route delete 192.168.0.0/16 2>/dev/null || true
# route delete 10.0.0.0/8 2>/dev/null || true
```

## Set protocol

To set the protocol used by AdGuard VPN (HTTP2, QUIC, or automatic choice between them), type one of the commands, depending on your choice:

```
adguardvpn-cli config set-protocol http2
adguardvpn-cli config set-protocol quic
adguardvpn-cli config set-protocol auto
```

## Crash reports

If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:

```
adguardvpn-cli config send-reports on
```

To disable it, set it to `off`.

## Update channel

To change the update channel, type:

```
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## Hints

AdGuard VPN can show you hints after executing commands — for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:

```
adguardvpn-cli config set-show-hints off
```

To re-enable it, replace `off` with `on`.

## Debug logging

To report a bug, you may need to share debug logs with the developers or support team. To enable debug logging, type:

```
adguardvpn-cli config set-debug-logging on
```

Disable this setting after exporting logs.

## Show notificatoins

The setting is responsible for the appearance of system notifications when AdGuard VPN is turned on/off or waiting for reconnection, for example:

- A user turns VPN on — the _VPN connected_ notification appears.
- A user turns VPN off — the _VPN disconnected_ notification appears.
- A user is waiting for the VPN connection to be recovered — the _Waiting for connection_ notification appears.

  adguardvpn-cli config set-show-notifications on

## Exclusions

There are two modes. In _General_ mode, websites from the list of exclusions are not routed through VPN. In _Selective_ mode, only websites from the list of exclusions are routed through VPN. There is a separate list of exclusions for each mode.

To read about what you can do with exclusions, write this in the command-line interface: `adguardvpn-cli site-exclusions -h`.

Here are the main options:

1. **add** adds specified exclusions

   Example: `adguardvpn-cli site-exclusions add`, where `%DOMAIN_NAME%` is the website that you want to add to exclusions.

   :::note

   To add many exclusions, you need to list them separated by spaces.

   :::

2. **clear** clears the list of exclusions in the current mode

   Example: `adguardvpn-cli site-exclusions clear`

3. **mode** shows the current mode and allows to switch between them

   Example: `adguardvpn-cli site-exclusions mode selective` (with this command, Selective mode is chosen)

4. **remove** removes one or more exclusions (if separated by commas)

   Example: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` where `%DOMAIN_NAME%` is the website that you want to remove from exclusions.

5. **show** shows the current list of exclusions

   Example: `adguardvpn-cli site-exclusions show`
