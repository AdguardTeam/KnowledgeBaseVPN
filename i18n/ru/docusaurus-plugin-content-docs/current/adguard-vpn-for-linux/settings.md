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

## Использовать QUIC

Чтобы использовать протокол AdGuard VPN на основе QUIC (HTTP/3), введите:

```
adguardvpn-cli config set-use-quic on
```

Чтобы отключить его, поменяйте значение на `off`.

## Отчёты об ошибках

Если вы включите автоматические отчёты о сбоях, AdGuard VPN уведомит разработчиков, если что-то пойдёт не так. Чтобы включить настройку, введите:

```
adguardvpn-cli config send-reports on
```

Чтобы отключить её, поменяйте значение на `off`.

## Канал обновления

Чтобы изменить канал обновления, введите:

```
adguardvpn-cli config set-update-channel <channel>
```

Замените `<channel>` на `release`, `beta` или `nightly`, в зависимости от ваших предпочтений.

## Подсказки

AdGuard VPN может показывать вам подсказки после выполнения команд — например, что делать дальше или как исправить ошибку. Этот параметр включён по умолчанию, но вы можете отключить его, набрав:

```
adguardvpn-cli config set-show-hints off
```

Чтобы снова включить его, замените `off` на `on`.

## Подробное логирование

Чтобы сообщить об ошибке, вам может потребоваться поделиться отладочными логами с разработчиками или командой поддержки. Чтобы включить отладочные логи, введите:

```
adguardvpn-cli config set-debug-logging on
```

Отключите эту настройку после экспорта логов.

## Показать уведомления

Настройка отвечает за появление системных уведомлений при включении/выключении AdGuard VPN или ожидании переподключения, например:

- Пользователь включает VPN — уведомление _VPN подключён_ появляется.
- Пользователь отключает VPN — появляется уведомление _VPN отключён_.
- Пользователь ждёт, когда VPN-соединение будет восстановлено — появляется уведомление _Ожидание соединения_.

  adguardvpn-cli config set-show-notifications on

## Исключения

Есть два режима. В режиме _Общий_ сайты из списка исключений не маршрутизируются через VPN. В _Выборочном_ режиме только сайты из списка исключений маршрутизируются через VPN. Для каждого режима существует отдельный список исключений.

Чтобы узнать, что можно сделать с исключениями, напишите в интерфейсе командной строки: `adguardvpn-cli site-exclusions -h`.

Вот основные варианты:

1. **add** добавляет указанные исключения

   Пример: `adguardvpn-cli site-exclusions add`, где `%DOMAIN_NAME%` — это сайт, который вы хотите добавить в исключения.

   :::note

   Чтобы добавить много исключений, перечислите их через пробелы.

   :::

2. **clear** очищает список исключений в текущем режиме

   Пример: `adguardvpn-cli site-exclusions clear`

3. **mode** показывает текущий режим и позволяет переключаться между ними

   Пример: `adguardvpn-cli site-exclusions mode selective` (с помощью этой команды включается Выборочный режим)

4. **remove** удаляет одно или несколько исключений (если они разделены запятыми)

   Пример: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%`, где `%DOMAIN_NAME%` — это сайт, который вы хотите добавить в исключения.

5. **show** показывает текущий список исключений

   Пример: `adguardvpn-cli site-exclusions show`
