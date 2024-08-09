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

## SOCKS settings

To set the SOCKS listen host, type:

```
adguardvpn-cli config set-socks-host <host>
```

Replace `<host>` with the host you want to use. Using a host other than 127.0.0.1 requires setting a username and password. To set the SOCKS username and password, type:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Replace `<username>` and `<password>` with your desired username and password. To clear the SOCKS username and password, type:

```
adguardvpn-cli config clear-socks-auth
```

## DNS upstream-адрес

Для установки DNS upstream введите:

```
adguardvpn-cli config set-dns <server_address>
```

Замените `<server_address>` на адрес вашего DNS-сервера. Чтобы использовать этот DNS-сервер на системном уровне, введите:

```
adguardvpn-cli config set-system-dns on
```

## VPN tunnel routing mode: NONE, AUTO, or SCRIPT

You can choose how AdGuard VPN routes traffic through the VPN tunnel. To set the tunnel routing mode to NONE (no routing), type:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

To set the tunnel routing mode to AUTO (automatic routing), type:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

To set the tunnel routing mode to SCRIPT (custom routing script), type:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

To create a routes script with proper permissions, type:

```
adguardvpn-cli config create-routes-script
```

## Use QUIC

To enable the use of AdGuard VPN protocol based on QUIC (HTTP/3), type:

```
adguardvpn-cli config set-use-quic on
```

Чтобы отключить её, поменяйте значение на `off`.

## Отчёты об ошибках

Если вы включите автоматические отчёты о сбоях, AdGuard VPN уведомит разработчиков, если что-то пойдёт не так. Чтобы включить настройку, введите:

```
adguardvpn-cli config send-reports on
```

To disable it, set it to `off`.

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
