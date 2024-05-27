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

## Adresa odchozího DNS

Chcete-li nastavit odchozí DNS, zadejte:

```
adguardvpn-cli config set-dns <server_address>
```

Nahraďte `<server_address>` adresou svého serveru DNS. Chcete-li tento DNS server používat na úrovni systému, zadejte:

```
adguardvpn-cli config set-system-dns on
```

## Režim bez směrování

Tato funkce směruje skrze tunel VPN pouze zadané adresy. Chcete-li povolit režim bez směrování, zadejte:

```
adguardvpn-cli config set-no-routes on
```

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

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

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
