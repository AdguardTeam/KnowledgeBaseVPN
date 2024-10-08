---
title: Settings
sidebar_position: 4
---

You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:

```
adguardvpn-cli config show
```

## VPN mode: TUN or SOCKS5

You can choose how AdGuard VPN routes traffic.

To set the default tunnel mode, type:

```
adguardvpn-cli config set-mode TUN
```

To set the SOCKS5 mode, type:

```
adguardvpn-cli config set-mode SOCKS
```

To set the SOCKS5 port, type:

```
adguardvpn-cli config set-socks-port <port_number>
```

Replace `<port_number>` with the port you want to connect to.

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

## DNS upstream address

To set a DNS upstream, type:

```
adguardvpn-cli config set-dns <server_address>
```

Replace `<server_address>` with the address of your DNS server. To use this DNS server at the system level, type:

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

To disable it, set it to `off`.

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
