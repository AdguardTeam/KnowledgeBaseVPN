---
title: Настройки
sidebar_position: 4
---

Вы можете управлять настройками AdGuard VPN для Linux из командной строки. Чтобы просмотреть текущую конфигурацию, введите:

```shell
adguardvpn-cli config show
```

## Режим VPN: TUN или SOCKS5

Вы можете выбрать, как AdGuard VPN маршрутизирует трафик.

### Режим TUN

:::note

Требуются права администратора.

:::

Когда включён режим TUN, AdGuard VPN:

- Создаёт виртуальный интерфейс третьего уровня (tunX или utunX, в зависимости от операционной системы).
- Обновляет системную таблицу маршрутизации таким образом, чтобы маршрут по умолчанию (или только для выбранных подсетей, если используются исключения) отправлялся через этот интерфейс.
- Прозрачно захватывает IP-пакеты для всех приложений, соответствующих правилам маршрутизации — конфигурация для каждого приложения не требуется.
- Маршрутизирует DNS-запросы через туннель, чтобы предотвратить утечки (если домен/приложение не исключены).

Чтобы установить туннельный режим по умолчанию, введите:

```shell
adguardvpn-cli config set-mode TUN
```

### Режим SOCKS5

Когда включён режим SOCKS5, AdGuard VPN:

- Запускает локальный SOCKS5-прокси, который по умолчанию прослушивает порт 127.0.0.1:1080 (это можно настроить с помощью команд `set-socks-host` и `set-socks-port`).
- Только приложения, явно настроенные на использование этого прокси, будут отправлять свой трафик через AdGuard VPN.
- Самостоятельно не изменяет системные маршруты или DNS. Трафик не перенаправляется автоматически.

:::note

Чтобы предотвратить DNS-утечки, используйте клиент, который обрабатывает имена хостов через прокси (часто обозначается как `socks5h` в таких инструментах, как `curl`). Если приложение обрабатывает имена хостов локально, системный DNS может обходить прокси.

```shell
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

Чтобы установить режим SOCKS5, введите:

```shell
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI проксирует TCP и UDP в режиме SOCKS5. Однако некоторые приложения не поддерживают UDP через прокси SOCKS. Например, если вы выберете в браузере SOCKS5, по умолчанию будут использоваться протоколы на основе TCP (HTTP/1.1 и HTTP/2).

:::

## Настройки SOCKS

Чтобы установить порт SOCKS, введите:

```shell
adguardvpn-cli config set-socks-host <host>
```

Замените `<host>` на порт, который хотите использовать. Для использования хоста, отличного от 127.0.0.1, необходимо задать имя пользователя и пароль. Чтобы установить имя пользователя и пароль SOCKS, введите:

```shell
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Замените `<username>` и `<password>` на желаемые имя пользователя и пароль. Чтобы очистить имя пользователя и пароль SOCKS, введите:

```shell
adguardvpn-cli config clear-socks-auth
```

Чтобы установить порт SOCKS5, введите:

```shell
adguardvpn-cli config set-socks-port <port_number>
```

Замените `<port_number>` на порт, к которому вы хотите подключиться.

## DNS-адрес

Для установки DNS-сервера введите:

```shell
adguardvpn-cli config set-dns <server_address>
```

Замените `<server_address>` на адрес вашего DNS-сервера. Чтобы использовать этот DNS-сервер на системном уровне, введите:

```shell
adguardvpn-cli config set-change-system-dns on
```

Если установить параметр в значение `off`, системные DNS-настройки останутся без изменений, и DNS-запросы могут обходить VPN-туннель.

:::note

В режиме SOCKS5 команды `set-dns` и `set-change-system-dns` неактивны. Поведение DNS определяется исключительно настройками каждого приложения.

:::

## Режим маршрутизации VPN-туннеля: NONE, AUTO или SCRIPT

С помощью AdGuard VPN CLI вы можете выбирать, как трафик будет маршрутизироваться через VPN-туннель. Режим маршрутизации управляет системной маршрутизацией, когда интерфейс TUN активен. В режиме SOCKS5/прокси трафик не перенаправляется автоматически; в этом случае приложения должны быть настроены на использование локального SOCKS5-прокси.

### NONE — без изменений маршрутизации

AdGuard VPN CLI открывает интерфейс TUN, но не изменяет системную таблицу маршрутизации. Маршрут к туннелю не установлен по умолчанию, поэтому трафик продолжает использовать существующие маршруты операционной системы.

Используйте эту опцию, если хотите управлять маршрутами вручную или с помощью сторонних инструментов.

To set the tunnel routing mode to `NONE` (no routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode NONE
```

### AUTO — автоматическая маршрутизация

AdGuard VPN CLI создаёт и поддерживает минимальный набор маршрутов, необходимый для работы туннеля на уровне системы. Типичное поведение включает:

- Установка и настройка маршрутов таким образом, чтобы допустимый трафик (в соответствии с вашими настройками разрешения, запрета и исключения) проходил через интерфейс TUN.
- Сохранение доступа к локальным сетям (обычно подсетям RFC1918) и другим исключениям, чтобы ваша локальная сеть, принтеры и роутеры оставались доступными.
- Реагирование на переподключения и изменения конечных точек путём повторного применения маршрутов по мере необходимости.

Use `AUTO` if you want a “just works” configuration with system-wide protection and no per-app setup.

To set the tunnel routing mode to `AUTO` (automatic routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode AUTO
```

### SCRIPT — маршрутизация, определяемая пользователем

AdGuard VPN CLI выполняет пользовательский скрипт, который добавляет или удаляет маршруты при изменении состояния туннеля. Вы полностью контролируете, что проходит через туннель, а что нет.

To set the tunnel routing mode to `SCRIPT` (custom routing script), type:

```shell
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Чтобы создать скрипт для маршрутизации с соответствующими разрешениями, введите:

```shell
adguardvpn-cli config create-route-script
```

Use `SCRIPT` if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what `AUTO` provides.

#### Примеры

**Пользовательский скрипт для Linux:**

```shell
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

**Пользовательский скрипт для macOS:**

```shell
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

Чтобы установить протокол, используемый AdGuard VPN (HTTP2, QUIC или автоматический выбор между ними), введите одну из команд:

```shell
adguardvpn-cli config set-use-quic on
```

## Отчёты о сбоях

Если вы включите автоматические отчёты о сбоях, AdGuard VPN уведомит разработчиков, если что-то пойдёт не так. Чтобы включить настройку, введите:

```shell
adguardvpn-cli config send-reports on
```

Чтобы отключить её, поменяйте значение на `off`.

## Канал обновления

Чтобы изменить канал обновления, введите:

```shell
adguardvpn-cli config set-update-channel <channel>
```

Замените `<channel>` на `release`, `beta` или `nightly`, в зависимости от ваших предпочтений.

## Подсказки

AdGuard VPN может показывать вам подсказки после выполнения команд — например, что делать дальше или как исправить ошибку. Этот параметр включён по умолчанию, но вы можете отключить его, введя:

```shell
adguardvpn-cli config set-show-hints off
```

Чтобы снова включить его, замените `off` на `on`.

## Подробное логирование

Чтобы сообщить об ошибке, вам может потребоваться поделиться отладочными логами с разработчиками или командой поддержки. Чтобы включить отладочные логи, введите:

```shell
adguardvpn-cli config set-debug-logging on
```

Отключите эту настройку после экспорта логов.

## Show notificatoins

Настройка отвечает за появление системных уведомлений при включении/выключении AdGuard VPN или ожидании переподключения, например:

- Пользователь включает VPN — появляется уведомление _VPN подключён_.
- Пользователь отключает VPN — появляется уведомление _VPN отключён_.
- Пользователь ждёт, когда VPN-соединение будет восстановлено — появляется уведомление _Ожидание соединения_.

```shell
adguardvpn-cli config set-show-notifications on
```

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
