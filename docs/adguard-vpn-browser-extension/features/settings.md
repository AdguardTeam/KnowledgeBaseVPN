---
title: Settings
sidebar_position: 5
---

To manage your AdGuard VPN Browser Extension:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Or go to the *Manage extensions* page in your browser, click *Details* below *AdGuard VPN* and manage its settings from there.

Once done, you’ll see several tabs on the left. The *Settings* menu is divided into two distinct sections:

- **Settings**: Options here apply exclusively to the currently active profile: *Exclusions*, *DNS server*, *Quick connect*, and *Block WebRTC*.
- **General settings**: These parameters apply to the entire extension, regardless of which profile is selected: *Theme*, *Language*, *Display AdGuard VPN in the browser context menu*, and *Help improve AdGuard VPN*.

![Settings](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/settings.png)

## DNS server

By default, the *AdGuard DNS Non-filtering* server is selected to ensure privacy without interfering with website content. If you want additional protection, you can choose a DNS server that blocks ads, trackers, or malicious domains, or enables parental control. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

Configuring *DNS server* directly in the *Settings* tab applies the selected server to the active profile. You can also assign a preferred DNS server to any profile under [*Manage profiles*](/adguard-vpn-browser-extension/features/profiles/).

## Quick connect

The *Quick connect* section defines which location the extension connects to when clicking the main *Connect* button:

- Fastest location
- Last used location
- Specific countries and servers

Configuring *Quick connect* directly in the *Settings* tab applies these parameters to the active profile. You can also set a preferred connection location for any profile under [*Manage profiles*](/adguard-vpn-browser-extension/features/profiles/).

![Quick connect](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/quick-connect.png)

## Block WebRTC

This feature blocks WebRTC, which can leak your real IP address even when using a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly with this option enabled.

Toggling *Block WebRTC* directly in the *Settings* tab applies this setting to the active profile. You can also enable or disable WebRTC blocking for any profile under [*Manage profiles*](/adguard-vpn-browser-extension/features/profiles/).
