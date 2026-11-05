---
title: Как настроить AdGuard VPN для Linux на роутере OpenWRT
sidebar_position: 3
---

:::info Системные требования

Для работы AdGuard VPN для Linux, также известного как AdGuard VPN CLI, требуется не менее 22 МБ свободного места на встроенной памяти роутера или на внешнем USB-накопителе после установки необходимых пакетов.

:::

## 1. Убедитесь, что на вашем роутере включён SSH

Эта настройка обычно находится в веб-интерфейсе роутера.

Для OpenWrt:

1. Войдите в веб-интерфейс. Как правило, он доступен через веб-браузер по адресу [`http://192.168.1.1`](http://192.168.1.1/).

2. Перейдите в \*\*_Система_ → _Администрирование_.

3. Убедитесь, что \*_SSH-доступ_ включён.

По умолчанию OpenWrt разрешает доступ по SSH к роутеру.

## 2. Определите IP-адрес вашего роутера

IP-адрес по умолчанию для большинства роутеров — `192.168.1.1` или `192.168.0.1`. Если вы изменили IP-адрес или не уверены, какой он, его можно найти, проверив конфигурацию IP-адреса на подключённом устройстве.

### На Windows

1. Откройте командную строку:

   ```text
   ipconfig
   ```

2. Найдите _Шлюз по умолчанию_ в активном сетевом подключении. Это IP-адрес вашего роутера.

### На macOS и Linux

1. Откройте Терминал и выполните эту команду на Linux:

   ```text
   ip route | grep default
   ```

   Или эту на Mac:

   ```text
   route -n get default
   ```

2. Найдите запись _default_. Рядом с ней находится IP-адрес вашего роутера.

<!-- comment -->

## 3. Используйте SSH-клиент для подключения к роутеру

Большинство систем на Linux и macOS поставляются с предустановленным SSH-клиентом. Для Windows вы можете использовать PowerShell, встроенный SSH-клиент в Windows 10/11 или стороннее приложение, например PuTTY.

### Встроенный SSH-клиент (для Linux, macOS и Windows 10/11)

1. Откройте Терминал или PowerShell.

2. Выполните команду SSH:

   ```text
   ssh root@192.168.1.1
   ```

   Замените `192.168.1.1` на IP-адрес вашего роутера.

3. Если вы впервые подключаетесь к роутеру через SSH, вы увидите такое сообщение:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256: ...
   Are you sure you want to continue connecting? (Yes/No/[Fingerprint])
   ```

   Введите `Yes` и нажмите Enter.

4. Введите пароль от роутера, когда появится соответствующий запрос. По умолчанию пароль для OpenWrt обычно пустой (просто нажмите Enter), но вы могли установить пароль во время начальной настройки.

<!-- comment -->

### PuTTY (Windows)

1. Скачайте и установите PuTTY [с официального сайта](https://www.putty.org/).

2. Откройте PuTTY.

3. В поле _Имя хоста (или IP-адрес)_ введите IP вашего роутера (например, `192.168.1.1`).

4. Убедитесь, что _Тип подключения_ установлен на SSH.

5. Нажмите _Открыть_.

6. Когда откроется окно Терминала, войдите в систему. The default username is `root` and the default password is typically empty (just press Enter), but you should have set a password during the initial setup.

<!-- comment -->

## 4. Базовые команды SSH

После входа в систему вы можете использовать различные команды для взаимодействия с операционной системой роутера на базе Linux.

:::note

OpenWrt 25.12 and later use the `apk` package manager, while OpenWrt 24.10 and earlier use `opkg`. To check your OpenWrt version, run `cat /etc/openwrt_release`.

:::

### OpenWrt 25.12 and later

Update package lists:

```text
apk update
```

Install required packages:

```text
apk add curl kmod-tun ca-certificates
```

### OpenWrt 24.10 and earlier

Update package lists:

```text
opkg update
```

Install required packages:

```text
opkg install curl kmod-tun ca-certificates
```

Run the AdGuard VPN CLI installation script:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Set up AdGuard VPN CLI

1. Log in to your account

   To use AdGuard VPN for Linux, you need an AdGuard account.

   You can sign up or log in on our [website](https://auth.adguardaccount.com/login.html) or in the Terminal.

   To sign up or log in, type:

   ```jsx
   adguardvpn-cli login
   ```

   Note: If failed to link the binary to `/usr/local/bin`, use full file path to run all commands. For example, `/opt/adguardvpn_cli/adguardvpn-cli login`

2. Connect to VPN

   Select a VPN server location that best suits your needs.

   In general, the closer the server is to you, the faster the connection.

   To view available locations, type:

   ```jsx
   adguardvpn-cli list-locations
   ```

   To connect to a specific location, type:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Replace LOCATION_NAME with the city, country, or ISO code of the location you want to connect to.

   For quick connect, type:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN will choose the fastest location available and remember it for future quick connections.

3. Adjust your settings

   Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

   To view all commands, type:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

<!-- comment -->

## 6. Set up firewall rules

You can do it in the web interface or in the command line. Steps below describe setup via SSH command line.

1. Add a new unmanaged interface via SSH

   ```shell
   ssh root@router_ip
   uci set network.tun0='interface'
   uci set network.tun0.proto='none'
   uci set network.tun0.device='tun0'
   uci commit network
   /etc/init.d/network reload
   ```

2. Add tun0 to WAN zone

   For traffic to go through VPN, add tun0 to WAN zone.
   The WAN interface which connects to the Internet will typically be in a zone named `wan` or something similar. Check your router’s configuration files or firewall settings to find out which zone is associated with the WAN interface.

   To do so, list the existing firewall zones:

   ```shell
   uci show firewall
   ```

   This will show a config file with all zones listed. Look for a section like `firewall.@zone[1]` or similar where `option name 'wan'` is defined. The number `[1]` could be different depending on your configuration.

   Run this SSH command, replace `zone[1]` with correct `wan` zone identified before:

   ```shell
   uci show firewall | grep "=zone"
   uci add_list firewall.@zone[1].network='tun0'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   If you want to disable all traffic that is not protected by VPN, run the following command. This way you won’t have an Internet connection at all if VPN disconnects. If you choose not to do this step, your real IP will be exposed if the VPN disconnects.

   ```shell
   uci del_list firewall.@zone[1].network='wan'
   uci del_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   If you’ve changed your mind and want to allow direct traffic, run the following command:

   ```shell
   uci add_list firewall.@zone[1].network='wan'
   uci add_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

<!-- comment -->

## 7.  Set up automatic launch for AdGuard VPN CLI

To automatically launch AdGuard VPN CLI after rebooting the router, create a file at `…/etc/init.d/adguardvpn`.

Paste this into the file:

```text
#!/bin/sh /etc/rc.common
# Example script
# Copyright (C) 2007 OpenWrt.org
START=99
STOP=99
HOME=/root
start() {
        /opt/adguardvpn_cli/adguardvpn-cli connect
}

stop() {
        /opt/adguardvpn_cli/adguardvpn-cli disconnect

}
```

Run this to grant access to and enable auto-launch:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
