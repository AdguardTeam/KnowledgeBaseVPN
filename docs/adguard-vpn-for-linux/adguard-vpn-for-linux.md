---
title: AdGuard VPN for Linux
sidebar_position: 1
---

:::info

This article covers AdGuard VPN CLI for Linux and macOS, and for MIPS or MIPSel routers.

:::

AdGuard VPN for Linux, also known as AdGuard VPN CLI, is a command-line VPN client. You can use it on Linux or macOS devices as well as on MIPS or MIPSel routers.

Open the Terminal to view all available commands. On Linux, press Ctrl+Alt+T. On macOS, search for it in Spotlight. Then, type:

    adguardvpn-cli --help-all

## Starting with the app

To start using AdGuard VPN for Linux, install it, log in to your AdGuard account, and connect to a server. By default, AdGuard VPN connects to the fastest available or the last used location.

- [Installation and removal](/adguard-vpn-for-linux/installation-and-setup/installation/)
- [Login, connection, and update](/adguard-vpn-for-linux/installation-and-setup/login/)

## Using VPN for selected websites and apps

The *Exclusions* feature lets you decide which domains’ traffic should be excluded from VPN routing. You can use Exclusions in two modes: General and Selective.

- [Exclusions](/adguard-vpn-for-linux/features/exclusions/)

## Settings

You can manage AdGuard VPN for Linux settings from the command line: choose between TUN and SOCKS5 modes, configure traffic routing and DNS, and more.

- [Settings](/adguard-vpn-for-linux/features/settings/)
- [VPN modes: TUN and SOCKS5](/adguard-vpn-for-linux/features/vpn-modes/)
- [Traffic routing modes](/adguard-vpn-for-linux/features/traffic-routing-modes/)
- [DNS settings](/adguard-vpn-for-linux/features/dns-settings/)
- [Other CLI settings](/adguard-vpn-for-linux/features/other-cli-settings/)

## Command-line completion

Command-line completion makes navigating through long commands easier: start typing a command and press Tab ↹ to complete it or see the available options.

- [Command-line completion](/adguard-vpn-for-linux/features/autocomplete/)

## Setting up on a router

AdGuard VPN CLI can be installed on Keenetic, OpenWRT, Asuswrt-Merlin, and MikroTik routers.

- [Setting up on a router](/adguard-vpn-for-linux/installation-and-setup/setting-up-on-a-router/)

## Solving problems

If you’ve found a bug or want to suggest a new feature, fill out the feedback form or create a GitHub issue. If the support team asks you to send logs, use the `export-logs` command.

- [Solving problems](/adguard-vpn-for-linux/solving-problems/)
