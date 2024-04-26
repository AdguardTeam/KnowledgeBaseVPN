---
title: Settings
sidebar_position: 4
---

You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:

    `adguardvpn-cli config show`

## VPN mode: TUN or SOCKS5

You can choose how AdGuard VPN routes traffic.

To set the default tunnel mode, type:

    `adguardvpn-cli config set-mode TUN`

To set the SOCKS5 mode, type:

    `adguardvpn-cli config set-mode SOCKS`

To set the SOCKS5 port, type:

    `adguardvpn-cli config set-socks-port`

and enter your port number.

## DNS upstream address

To set a DNS upstream, type:

    `adguardvpn-cli config set-dns`

and enter the address of your DNS server. To use this DNS server at the system level, type:

    `adguardvpn-cli config set-system-dns on`

## No-route mode

This feature routes only your specified addresses through the VPN tunnel. To enable the no-route mode, type:

    `adguardvpn-cli config set-no-routes on`

## Crash reports

If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:

    `adguardvpn-cli config send-reports on`

To disable it, set it to `off`.

## Update channel

To switch to stable, beta, or nightly, type:

    `adguardvpn-cli config set-updates-channel`

and enter the preferred update channel.

## Hints

AdGuard VPN can show you hints after executing commands — for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:

    `adguardvpn-cli config set-show-hints off`

To re-enable it, replace `off` with `on`.

## Debug logging

To report a bug, you may need to share debug logs with the developers or support team. To enable debug logging, type:

    `adguardvpn-cli config set-debug-logging on`

Disable this setting after exporting logs.
