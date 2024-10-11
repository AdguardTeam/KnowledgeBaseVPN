---
title: Einstellungen
sidebar_position: 4
---

You can manage AdGuard VPN for Linux settings from the command line. Um die aktuelle Konfiguration anzuzeigen, geben Sie Folgendes ein:

```
adguardvpn-cli config show
```

## VPN-Modus: TUN oder SOCKS5

Sie können wählen, wie AdGuard VPN den Datenverkehr weiterleitet.

To set the default tunnel mode, type:

```
adguardvpn-cli config set-mode TUN
```

Um den SOCKS5-Modus einzustellen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-mode SOCKS
```

To set the SOCKS5 port, type:

```
adguardvpn-cli config set-socks-port <port_number>
```

Replace `<port_number>` with the port you want to connect to.

## SOCKS-Einstellungen

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

## DNS-Upstream-Adresse

To set a DNS upstream, type:

```
adguardvpn-cli config set-dns <server_address>
```

Replace `<server_address>` with the address of your DNS server. To use this DNS server at the system level, type:

```
adguardvpn-cli config set-system-dns on
```

## VPN-Tunnel-Routing-Modus: NONE, AUTO oder SCRIPT

Sie können wählen, wie AdGuard VPN den Datenverkehr durch den VPN-Tunnel leitet. Um den Tunnel-Routing-Modus auf NONE (kein Routing) zu setzen, geben Sie ein:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Um den Tunnel-Routing-Modus auf AUTO (automatisches Routing) zu setzen, geben Sie ein:

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

## QUIC verwenden

To enable the use of AdGuard VPN protocol based on QUIC (HTTP/3), type:

```
adguardvpn-cli config set-use-quic on
```

To disable it, set it to `off`.

## Absturzberichte

If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. Um die Einstellung zu aktivieren, geben Sie Folgendes ein:

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

## Hinweise

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
