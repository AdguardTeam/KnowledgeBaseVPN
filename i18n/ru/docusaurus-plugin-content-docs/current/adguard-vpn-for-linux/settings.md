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
