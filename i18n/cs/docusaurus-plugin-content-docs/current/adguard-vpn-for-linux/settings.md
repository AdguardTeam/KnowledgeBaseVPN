---
title: Nastavení
sidebar_position: 4
---

Nastavení AdGuard VPN pro Linux můžete spravovat z příkazového řádku. Chcete-li zobrazit aktuální konfiguraci, zadejte:

```
adguardvpn-cli config show
```

## Režim VPN: TUN nebo SOCKS5

Můžete si vybrat, jakým způsobem bude AdGuard VPN směrovat provoz.

### TUN mode

:::note

Requires administrator rights.

:::

When TUN mode is enabled, AdGuard VPN:

- Creates a virtual Layer-3 interface (tunX or utunX, depending on the operating system).
- Updates the system routing table so that the default route (or only selected subnets if you use exclusions) is sent through this interface.
- Captures IP packets transparently for all apps that match the routing rules — no per-app configuration is required.
- Routes DNS queries through the tunnel to prevent leaks (unless a domain/app is excluded).

Chcete-li nastavit výchozí režim tunelu, zadejte:

```
adguardvpn-cli config set-mode TUN
```

### SOCKS5 mode

When SOCKS5 mode is enabled, AdGuard VPN:

- Starts a local SOCKS5 proxy that by default listens on 127.0.0.1:1080 (configurable via the `set-socks-host` and `set-socks-port` commands).
- Only applications explicitly configured to use this proxy will send their traffic through AdGuard VPN.
- Does not change system routes or DNS by itself. Traffic is not redirected automatically.

:::note

To prevent DNS leaks, use a client that resolves hostnames via the proxy (often denoted as `socks5h` in tools like `curl`). If an app resolves hostnames locally, system DNS may bypass the proxy.

```
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

Chcete-li nastavit režim SOCKS5, zadejte:

```
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI provides both TCP and UDP proxying in SOCKS5 mode. However, some apps don’t support UDP via a SOCKS5 proxy. For instance, if you select SOCKS5 in your browser, it will use TCP-based protocols (HTTP/1.1 and HTTP/2) by default.

:::

## Nastavení SOCKS5

Chcete-li nastavit port SOCKS5, zadejte:

```
adguardvpn-cli config set-socks-host <host>
```

Nahraďte `<host>` hostitelem, kterého chcete použít. Použití jiného hostitele než 127.0.0.1 vyžaduje nastavení uživatelského jména a hesla. Chcete-li nastavit uživatelské jméno a heslo SOCKS, zadejte:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Nahraďte `<username>` a `<password>` požadovaným uživatelským jménem a heslem. Chcete-li vymazat uživatelské jméno a heslo SOCKS, zadejte:

```
adguardvpn-cli config clear-socks-auth
```

Chcete-li nastavit port SOCKS5, zadejte:

```
adguardvpn-cli config set-socks-port <port_number>
```

Nahraďte `<port_number>` portem, ke kterému se chcete připojit.

## Adresa odchozího DNS

Chcete-li nastavit odchozí DNS, zadejte:

```
adguardvpn-cli config set-dns <server_address>
```

Nahraďte `<server_address>` adresou svého serveru DNS. Chcete-li tento DNS server používat na úrovni systému, zadejte:

```
adguardvpn-cli config set-change-system-dns on
```

If you set the parameter to `off`, the system DNS settings remain unchanged and DNS queries may bypass the VPN tunnel.

:::note

In SOCKS5 mode, the `set-dns` and `set-change-system-dns` commands are inactive. The DNS behavior is determined solely by the settings of each app.

:::

## Režim směrování tunelu VPN: NONE, AUTO nebo SCRIPT

With AdGuard VPN CLI, you can choose how traffic is routed through the VPN tunnel. The routing mode controls system routing when the TUN interface is active. It does not automatically redirect traffic in SOCKS5/proxy mode; apps must be configured to use the local SOCKS5 proxy in that case.

### NONE — no routing changes

AdGuard VPN CLI brings up the TUN interface but does not modify the system routing table. No default route to the tunnel is installed, so traffic continues to use the existing OS routes.

Use this option if you want to manage routes yourself manually or with third-party tools.

Chcete-li nastavit režim směrování tunelu na hodnotu NONE (žádné směrování), zadejte:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

### AUTO — automatic routing

AdGuard VPN CLI creates and maintains the minimal set of routes required for the tunnel to work system-wide. Typical behavior includes:

- Installing and adjusting routes so eligible traffic (according to your allow, deny, and exclusion settings) flows through the TUN interface.
- Preserving access to local networks (commonly RFC1918 subnets) and other exclusions, so that your LAN, printers, and routers remain reachable.
- Reacting to reconnects and endpoint changes by reapplying routes as needed.

Use AUTO if you want a “just works” configuration with system-wide protection and no per-app setup.

Chcete-li nastavit režim směrování tunelu na AUTO (automatické směrování), zadejte:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

### SCRIPT — user-defined routing

AdGuard VPN CLI executes a user-supplied script that adds or removes routes when the tunnel state changes. You have full control over what goes through the tunnel and what stays direct.

Chcete-li nastavit režim směrování tunelu na SCRIPT (vlastní směrovací skript), zadejte:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Chcete-li vytvořit skript tras se správnými oprávněními, zadejte:

```
adguardvpn-cli config create-routes-script
```

Use SCRIPT if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what AUTO provides.

#### Examples

**Linux custom script:**

```
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

```
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

## Použití QUIC

Chcete-li povolit používání protokolu AdGuard VPN založeného na protokolu QUIC (HTTP/3), zadejte:

```
adguardvpn-cli config set-use-quic on
```

Chcete-li to zakázat, nastavte na `off`.

## Hlášení o chybě

Pokud povolíte automatické hlášení chyb, AdGuard VPN upozorní vývojáře, pokud se něco pokazí. Chcete-li nastavení povolit, zadejte:

```
adguardvpn-cli config send-reports on
```

Chcete-li to zakázat, nastavte na `off`.

## Kanál aktualizací

Chcete-li změnit kanál aktualizace, zadejte:

```
adguardvpn-cli config set-update-channel <channel>
```

Nahraďte `<channel>` za `release`, `beta` nebo `nightly` v závislosti na vašich preferencích.

## Nápovědy

AdGuard VPN vám může po provedení příkazů zobrazit nápovědy — například co dělat dál nebo jak opravit chybu. Toto nastavení je ve výchozím nastavení povoleno, ale můžete jej zakázat zadáním:

```
adguardvpn-cli config set-show-hints off
```

Chcete-li to znovu povolit, nahraďte `off` za `on`.

## Záznamy úrovně ladění

Chcete-li nahlásit chybu, budete možná muset sdílet protokoly ladění s vývojáři nebo týmem podpory. Chcete-li to povolit, zadejte:

```
adguardvpn-cli config set-debug-logging on
```

Po exportu protokolů toto nastavení zakažte.

## Zobrazení oznámení

Toto nastavení je zodpovědné za zobrazení systémových oznámení například při zapnutí/vypnutí AdGuard VPN nebo při čekání na opětovné připojení:

- Uživatel zapne VPN — objeví se oznámení _VPN připojena_.
- Uživatel vypne VPN — objeví se oznámení _VPN odpojena_.
- Uživatel čeká na obnovení připojení VPN — objeví se oznámení _Čekání na připojení_.

  adguardvpn-cli config set-show-notifications on

## Výjimky

Existují dva režimy. V _Obecném_ režimu nejsou webové stránky ze seznamu výjimek směrovány skrze VPN. V _Selektivním_ režimu jsou skrze VPN směrovány pouze webové stránky ze seznamu výjimek. Pro každý režim existuje samostatný seznam výjimek.

Chcete-li si přečíst, co všechno můžete dělat s výjimkami, napište to do rozhraní příkazového řádku: `adguardvpn-cli site-exclusions -h`.

Zde jsou hlavní možnosti:

1. **add** přidá zadané výjimky

   Příklad: `adguardvpn-cli site-exclusions add`, kde `%DOMAIN_NAME%` je webová stránka, kterou chcete přidat do výjimek.

   :::note

   Chcete-li přidat mnoho výjimek, musíte je zadat oddělené mezerami.

   :::

2. **clear** vymaže seznam výjimek v aktuálním režimu

   Příklad: `adguardvpn-cli site-exclusions clear`

3. **mode** zobrazuje aktuální režim a umožňuje mezi nimi přepínat

   Příklad: `adguardvpn-cli site-exclusions mode selective` (tímto příkazem je zvolen selektivní režim)

4. **remove** odstraní jednu nebo více výjimek (pokud jsou odděleny čárkami)

   Příklad: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%`, kde `%DOMAIN_NAME%` je webová stránka, kterou chcete odstranit z výjimek.

5. **show** zobrazí aktuální seznam výjimek

   Příklad: `adguardvpn-cli site-exclusions show`
