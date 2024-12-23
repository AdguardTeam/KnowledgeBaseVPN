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

Чтобы установить туннельный режим по умолчанию, введите:

```
adguardvpn-cli config set-mode TUN
```

Чтобы установить режим SOCKS5, введите:

```
adguardvpn-cli config set-mode SOCKS
```

Чтобы установить порт SOCKS5, введите:

```
adguardvpn-cli config set-socks-port <port_number>
```

Замените `<port_number>` на порт, к которому вы хотите подключиться.

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

## DNS-адрес

Для установки DNS-сервера введите:

```
adguardvpn-cli config set-dns <server_address>
```

Замените `<server_address>` на адрес вашего DNS-сервера. Чтобы использовать этот DNS-сервер на системном уровне, введите:

```
adguardvpn-cli config set-system-dns on
```

## Режим маршрутизации VPN-туннеля: NONE, AUTO или SCRIPT

Вы можете выбрать, как AdGuard VPN будет направлять трафик через VPN-туннель. Чтобы установить режим NONE (без маршрутизации), введите:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Чтобы установить режим AUTO (автоматическая маршрутизация), введите:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

Чтобы установить режим SCRIPT (пользовательский скрипт маршрутизации), введите:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Чтобы создать скрипт для маршрутизации с соответствующими разрешениями, введите:

```
adguardvpn-cli config create-routes-script
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

   o add many exclusions, you need to list them comma-separated.

   :::

2. **clear** clears the list of exclusions in the current mode

   Example: `adguardvpn-cli site-exclusions clear`

3. **mode** shows the current mode and allows to switch between them

   Example: `adguardvpn-cli site-exclusions mode selective` (with this command, Selective mode is chosen)

4. **remove** removes one or more exclusions (if separated by commas)

   Example: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` where `%DOMAIN_NAME%` is the website that you want to remove from exclusions.

5. **show** shows the current list of exclusions

   Example: `adguardvpn-cli site-exclusions show`
