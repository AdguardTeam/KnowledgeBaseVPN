---
title: WhatsApp and Discord traffic filtering specifics
sidebar_position: 12
---

When AdGuard VPN is active *selectively*, it only filters the traffic of websites and apps from the exclusions lists. All other traffic bypasses the VPN tunnel. For this mechanism to work reliably, the system must be able to clearly identify which network connections belong to a specific application.

Due to the network architecture of **WhatsApp** and **Discord**, combined with IP routing limitations, AdGuard VPN cannot always capture and route all of their traffic through the tunnel correctly.

## Why WhatsApp and Discord traffic is not fully filtered

Some **WhatsApp** traffic may bypass the VPN tunnel because the app:

1. Uses dynamic IP addresses
1. Operates through large CDN and Meta infrastructure
1. Does not provide public, up-to-date lists of IP addresses used by the app

As a result, AdGuard VPN cannot guarantee that all WhatsApp traffic will be routed through the tunnel when operating *selectively*.

The situation with **Discord** is similar:

1. The app uses multiple domains and IP addresses for chats, media, and voice connections
1. Some connections may be established directly without a clear association with the app

As a result, Discord may partially or completely fail to function when AdGuard VPN is active *selectively*.

## Recommended solution

For stable operation of WhatsApp and Discord, we recommend:

1. Using a mode where AdGuard VPN is active for all apps. In this mode, all traffic is routed through the VPN tunnel.
1. Avoiding selective AdGuard VPN operation for messengers with dynamic network architectures
