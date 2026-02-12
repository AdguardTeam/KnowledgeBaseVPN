---
title: Specifics of AdGuard VPN traffic filtering for WhatsApp and Discord in Selective mode
sidebar_position: 12
---

In Selective mode, AdGuard VPN may not always handle WhatsApp and Discord traffic correctly.

When Selective mode is enabled, AdGuard VPN is active only for websites and apps included in the exclusions lists. All other traffic is sent directly, bypassing the VPN tunnel. For this mechanism to work reliably, the system must be able to clearly determine which network connections belong to a specific application. Due to the network architecture of WhatsApp and Discord, combined with IP routing limitations, AdGuard VPN cannot always capture and route all of their traffic through the tunnel.

## WhatsApp

Some WhatsApp traffic may bypass the VPN tunnel because the app:

1. Uses dynamic IP addresses
1. Operates through large CDN and Meta infrastructure
1. Does not provide public, up-to-date lists of IP addresses used by the application

As a result, AdGuard VPN cannot guarantee that all WhatsApp traffic will be routed through the tunnel in Selective mode.

## Discord

The situation with Discord is similar:

1. The app uses multiple domains and IP addresses for chats, media, and voice connections
1. Some connections may be established directly without a clear association with the app

As a result, Discord may partially or completely fail to function in Selective mode.

## Recommended solution

For stable operation of WhatsApp and Discord, we recommend:

1. Using a mode where AdGuard VPN is active for all applications. In this mode, all traffic is routed through the VPN tunnel.
1. Avoiding Selective mode for messengers with dynamic network architectures