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

Chcete-li nastavit výchozí režim tunelu, zadejte:

```
adguardvpn-cli config set-mode TUN
```

Chcete-li nastavit režim SOCKS5, zadejte:

```
adguardvpn-cli config set-mode SOCKS
```

Chcete-li nastavit port SOCKS5, zadejte:

```
adguardvpn-cli config set-socks-port <port_number>
```

Nahraďte `<port_number>` portem, ke kterému se chcete připojit.

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

## Adresa odchozího DNS

Chcete-li nastavit odchozí DNS, zadejte:

```
adguardvpn-cli config set-dns <server_address>
```

Nahraďte `<server_address>` adresou svého serveru DNS. Chcete-li tento DNS server používat na úrovni systému, zadejte:

```
adguardvpn-cli config set-system-dns on
```

## Režim směrování tunelu VPN: NONE, AUTO nebo SCRIPT

Můžete si vybrat, jakým způsobem bude AdGuard VPN směrovat provoz přes tunel VPN. Chcete-li nastavit režim směrování tunelu na hodnotu NONE (žádné směrování), zadejte:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Chcete-li nastavit režim směrování tunelu na AUTO (automatické směrování), zadejte:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

Chcete-li nastavit režim směrování tunelu na SCRIPT (vlastní směrovací skript), zadejte:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Chcete-li vytvořit skript tras se správnými oprávněními, zadejte:

```
adguardvpn-cli config create-routes-script
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
- A user turns VPN off — the _VPN disconnected_ notification appears.
- Uživatel čeká na obnovení připojení VPN — objeví se oznámení _Čekání na připojení_.

  adguardvpn-cli config set-show-notifications on

## Exclusions

There are two modes. In _General_ mode, websites from the list of exclusions are not routed through VPN. In _Selective_ mode, only websites from the list of exclusions are routed through VPN. There is a separate list of exclusions for each mode.

To read about what you can do with exclusions, write this in the command-line interface: `adguardvpn-cli site-exclusions -h`.

Here are the main options:

1. **add** adds specified exclusions

   Example: `adguardvpn-cli site-exclusions add`, where `%DOMAIN_NAME%` is the website that you want to add to exclusions.

   :::note

   o add many exclusions, you need to list them comma-separated.

   :::

2. **clear** clears the list of exclusions in the current mode

   Example: `adguardvpn-cli site-exclusions clear`

3. **mode** shows the current mode and allows to switch between them

   Example: `adguardvpn-cli site-exclusions mode selective` (with this command, Selective mode is chosen)

4. **remove** removes one or more exclusions (if separated by commas)

   Example: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` where `%DOMAIN_NAME%` is the website that you want to remove from exclusions.

5. **show** shows the current list of exclusions

   Example: `adguardvpn-cli site-exclusions show`
