---
title: Settings
sidebar_position: 2
---

You can manage AdGuard VPN for Linux settings from the command line. To view the current configuration, type:

```shell
adguardvpn-cli config show
```

This article covers general settings. VPN modes, traffic routing, DNS, and other options are described in separate articles.

## Crash reports

If you enable automatic crash reports, AdGuard VPN will notify the developers if something goes wrong. To enable the setting, type:

```shell
adguardvpn-cli config send-reports on
```

To disable it, set it to `off`.

## Update channel

To change the update channel, type:

```shell
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## Hints

AdGuard VPN can show you hints after executing commands — for example, what to do next or how to fix an error. This setting is enabled by default but you can disable it by typing:

```shell
adguardvpn-cli config set-show-hints off
```

To re-enable it, replace `off` with `on`.

## Show notifications

The setting is responsible for the appearance of system notifications when AdGuard VPN is turned on/off or waiting for reconnection, for example:

- A user turns VPN on — the *VPN connected* notification appears.
- A user turns VPN off — the *VPN disconnected* notification appears.
- A user is waiting for the VPN connection to be recovered — the *Waiting for connection* notification appears.

```shell
adguardvpn-cli config set-show-notifications on
```
