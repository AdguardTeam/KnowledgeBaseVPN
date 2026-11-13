---
title: Traffic routing modes
sidebar_position: 4
---

With AdGuard VPN CLI, you can choose how traffic is routed through the VPN tunnel. The routing mode controls system routing when the TUN interface is active. It does not automatically redirect traffic in SOCKS5/proxy mode; apps must be configured to use the local SOCKS5 proxy in that case.

## NONE — no routing changes

AdGuard VPN CLI brings up the TUN interface but does not modify the system routing table. No default route to the tunnel is installed, so traffic continues to use the existing OS routes.

Use this option if you want to manage routes yourself manually or with third-party tools.

To set the tunnel routing mode to `NONE` (no routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode NONE
```

## AUTO — automatic routing

AdGuard VPN CLI creates and maintains the minimal set of routes required for the tunnel to work system-wide. Typical behavior includes:

- Installing and adjusting routes so eligible traffic (according to your allow, deny, and exclusion settings) flows through the TUN interface.
- Preserving access to local networks (commonly RFC1918 subnets) and other exclusions, so that your LAN, printers, and routers remain reachable.
- Reacting to reconnects and endpoint changes by reapplying routes as needed.

Use `AUTO` if you want a “just works” configuration with system-wide protection and no per-app setup.

To set the tunnel routing mode to `AUTO` (automatic routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode AUTO
```

## SCRIPT — user-defined routing

AdGuard VPN CLI executes a user-supplied script that adds or removes routes when the tunnel state changes. You have full control over what goes through the tunnel and what stays direct.

To set the tunnel routing mode to `SCRIPT` (custom routing script), type:

```shell
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

To create a routes script with proper permissions, type:

```shell
adguardvpn-cli config create-route-script
```

Use `SCRIPT` if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what `AUTO` provides.

### Examples

**Linux custom script:**

```shell
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
ip route add 192.168.100.0/24 dev "$INTERFACE"  # Corporate network
ip route add 10.0.0.0/8 dev "$INTERFACE"        # Private networks
ip route add 172.16.0.0/12 dev "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# ip route add 0.0.0.0/1 dev "$INTERFACE"
# ip route add 128.0.0.0/1 dev "$INTERFACE"
# ip -6 route add 2000::/3 dev "$INTERFACE" || true
# ip route del 192.168.0.0/16 dev "$INTERFACE" 2>/dev/null || true
# ip route del 10.0.0.0/8 dev "$INTERFACE" 2>/dev/null || true
```

**macOS custom script:**

```shell
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
route add 192.168.100.0/24 -iface "$INTERFACE"  # Corporate network
route add 10.0.0.0/8 -iface "$INTERFACE"        # Private networks
route add 172.16.0.0/12 -iface "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# route add 1.0.0.0/8 -iface "$INTERFACE"
# route add 2.0.0.0/7 -iface "$INTERFACE"
# route add 4.0.0.0/6 -iface "$INTERFACE"
# route add 8.0.0.0/5 -iface "$INTERFACE"
# route add 16.0.0.0/4 -iface "$INTERFACE"
# route add 32.0.0.0/3 -iface "$INTERFACE"
# route add 64.0.0.0/2 -iface "$INTERFACE"
# route add 128.0.0.0/1 -iface "$INTERFACE"
# route add -inet6 2000::/3 -iface "$INTERFACE" || true
# route delete 192.168.0.0/16 2>/dev/null || true
# route delete 10.0.0.0/8 2>/dev/null || true
```
