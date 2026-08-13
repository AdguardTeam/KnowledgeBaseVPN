---
title: Nastavení
sidebar_position: 4
---

Nastavení AdGuard VPN pro Linux můžete spravovat z příkazového řádku. Chcete-li zobrazit aktuální konfiguraci, zadejte:

```shell
adguardvpn-cli config show
```

## Režim VPN: TUN nebo SOCKS5

Můžete si vybrat, jakým způsobem bude AdGuard VPN směrovat provoz.

### Režim TUN

:::note

Vyžaduje práva správce.

:::

Když je režim TUN povolen, AdGuard VPN:

- Vytvoří virtuální rozhraní 3. vrstvy (tunX nebo utunX, v závislosti na operačním systému).
- Aktualizuje systémovou směrovací tabulku tak, aby výchozí trasa (nebo pouze vybrané podsítě, pokud používáte výjimky) byla odeslána přes toto rozhraní.
- Transparentně zachycuje IP pakety pro všechny aplikace, které odpovídají pravidlům směrování — není nutná žádná konfigurace pro jednotlivé aplikace.
- Směruje DNS dotazy skrze tunel k zabránění úniků (pokud není doména/aplikace vyloučena).

Chcete-li nastavit výchozí režim tunelu, zadejte:

```shell
adguardvpn-cli config set-mode TUN
```

### Režim SOCKS5

Když je režim SOCKS5 povolen, AdGuard VPN:

- Spustí lokální SOCKS5 proxy, který ve výchozím nastavení naslouchá na adrese 127.0.0.1:1080 (konfigurovatelné pomocí příkazů `set-socks-host` a `set-socks-port`).
- Pouze aplikace, které jsou výslovně nakonfigurovány pro použití tohoto proxy serveru, budou odesílat svůj datový provoz skrze AdGuard VPN.
- Samostatně nemění systémové trasy ani DNS. Datový provoz není automaticky přesměrován.

:::note

Abyste zabránili únikům DNS, použijte klienta, který překládá názvy hostitelů skrze proxy (v nástrojích jako `curl` často označované jako `socks5h`). Pokud aplikace řeší názvy hostitelů lokálně, systém DNS může obejít proxy server.

```shell
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

Chcete-li nastavit režim SOCKS5, zadejte:

```shell
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI poskytuje proxy TCP i UDP v režimu SOCKS5. Některé aplikace však nepodporují protokol UDP skrze proxy SOCKS5. Pokud například v prohlížeči vyberete SOCKS5, bude ve výchozím nastavení používat protokoly založené na TCP (HTTP/1.1 a HTTP/2).

:::

## Nastavení SOCKS5

Chcete-li nastavit port SOCKS5, zadejte:

```shell
adguardvpn-cli config set-socks-host <host>
```

Nahraďte `<host>` hostitelem, kterého chcete použít. Použití jiného hostitele než 127.0.0.1 vyžaduje nastavení uživatelského jména a hesla. Chcete-li nastavit uživatelské jméno a heslo SOCKS, zadejte:

```shell
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Nahraďte `<username>` a `<password>` požadovaným uživatelským jménem a heslem. Chcete-li vymazat uživatelské jméno a heslo SOCKS, zadejte:

```shell
adguardvpn-cli config clear-socks-auth
```

Chcete-li nastavit port SOCKS5, zadejte:

```shell
adguardvpn-cli config set-socks-port <port_number>
```

Nahraďte `<port_number>` portem, ke kterému se chcete připojit.

## Adresa odchozího DNS

Chcete-li nastavit odchozí DNS, zadejte:

```shell
adguardvpn-cli config set-dns <server_address>
```

Nahraďte `<server_address>` adresou svého serveru DNS. Chcete-li tento DNS server používat na úrovni systému, zadejte:

```shell
adguardvpn-cli config set-change-system-dns on
```

Pokud nastavíte parametr na hodnotu `vypnuto`, nastavení systému DNS zůstane beze změny a dotazy DNS mohou obcházet tunel VPN.

:::note

V režimu SOCKS5 jsou příkazy `set-dns` a `set-change-system-dns` neaktivní. Chování DNS je určeno výhradně nastavením jednotlivých aplikací.

:::

## Režim směrování tunelu VPN: NONE, AUTO nebo SCRIPT

S AdGuard VPN CLI si můžete vybrat, jakým způsobem bude provoz směrován skrze VPN tunel. Režim směrování řídí směrování systému, když je aktivní rozhraní TUN. V režimu SOCKS5/proxy nedochází k automatickému přesměrování provozu; v takovém případě musí být aplikace nakonfigurovány tak, aby používaly lokální proxy SOCKS5.

### NONE — žádné změny směrování

AdGuard VPN CLI spustí rozhraní TUN, ale nemění systémovou směrovací tabulku. Není nainstalována žádná výchozí trasa k tunelu, takže provoz nadále využívá stávající trasy operačního systému.

Tuto možnost použijte, pokud chcete trasy spravovat ručně nebo pomocí nástrojů třetích stran.

To set the tunnel routing mode to `NONE` (no routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode NONE
```

### AUTO — automatické směrování

AdGuard VPN CLI vytváří a udržuje minimální sadu tras potřebných pro fungování tunelu v celém systému. Typické chování zahrnuje:

- Instalaci a nastavení tras tak, aby oprávněný provoz (podle vašich nastavení povolení, odmítnutí a vyloučení) procházel rozhraním TUN.
- Zachování přístupu k místním sítím (běžně podsítě RFC1918) a dalším výjimkám, aby byla vaše LAN, tiskárny a routery nadále dostupné.
- Reakci na opětovné připojení a změny koncových bodů opětovným použitím tras podle potřeby.

Use `AUTO` if you want a “just works” configuration with system-wide protection and no per-app setup.

To set the tunnel routing mode to `AUTO` (automatic routing), type:

```shell
adguardvpn-cli config set-tun-routing-mode AUTO
```

### SCRIPT — uživatelem definované směrování

AdGuard VPN CLI spouští skript zadaný uživatelem, který přidává nebo odebírá trasy při změně stavu tunelu. Máte plnou kontrolu nad tím, co prochází tunelem a co zůstává přímé.

To set the tunnel routing mode to `SCRIPT` (custom routing script), type:

```shell
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Chcete-li vytvořit skript tras se správnými oprávněními, zadejte:

```shell
adguardvpn-cli config create-route-script
```

Use `SCRIPT` if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what `AUTO` provides.

#### Příklady

**Vlastní skript pro Linux:**

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

**Vlastní skript pro macOS:**

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

## Nastavení protokolu

Chcete-li nastavit protokol používaný AdGuard VPN (HTTP2, QUIC nebo automatický výběr mezi nimi), zadejte jeden z příkazů podle svého výběru:

```shell
adguardvpn-cli config set-protocol http2
adguardvpn-cli config set-protocol quic
adguardvpn-cli config set-protocol auto
```

## Hlášení o chybě

Pokud povolíte automatické hlášení chyb, AdGuard VPN upozorní vývojáře, pokud se něco pokazí. Chcete-li nastavení povolit, zadejte:

```shell
adguardvpn-cli config send-reports on
```

Chcete-li to zakázat, nastavte na `off`.

## Kanál aktualizací

Chcete-li změnit kanál aktualizace, zadejte:

```shell
adguardvpn-cli config set-update-channel <channel>
```

Nahraďte `<channel>` za `release`, `beta` nebo `nightly` v závislosti na vašich preferencích.

## Nápovědy

AdGuard VPN vám může po provedení příkazů zobrazit nápovědy — například co dělat dál nebo jak opravit chybu. Toto nastavení je ve výchozím nastavení povoleno, ale můžete jej zakázat zadáním:

```shell
adguardvpn-cli config set-show-hints off
```

Chcete-li to znovu povolit, nahraďte `off` za `on`.

## Záznamy úrovně ladění

Chcete-li nahlásit chybu, budete možná muset sdílet protokoly ladění s vývojáři nebo týmem podpory. Chcete-li to povolit, zadejte:

```shell
adguardvpn-cli config set-debug-logging on
```

Po exportu protokolů toto nastavení zakažte.

## Zobrazení oznámení

Toto nastavení je zodpovědné za zobrazení systémových oznámení například při zapnutí/vypnutí AdGuard VPN nebo při čekání na opětovné připojení:

- Uživatel zapne VPN — objeví se oznámení _VPN připojena_.
- Uživatel vypne VPN — objeví se oznámení _VPN odpojena_.
- Uživatel čeká na obnovení připojení VPN — objeví se oznámení _Čekání na připojení_.

```shell
adguardvpn-cli config set-show-notifications on
```

## Exclusions

There are two modes. In _General_ mode, websites from the list of exclusions are not routed through VPN. In _Selective_ mode, only websites from the list of exclusions are routed through VPN. There is a separate list of exclusions for each mode.

To read about what you can do with exclusions, write this in the command-line interface: `adguardvpn-cli site-exclusions -h`.

Here are the main options:

1. **add** adds specified exclusions

   Example: `adguardvpn-cli site-exclusions add`, where `%DOMAIN_NAME%` is the website that you want to add to exclusions.

   :::note

   To add many exclusions, you need to list them separated by spaces.

   :::

2. **clear** clears the list of exclusions in the current mode

   Example: `adguardvpn-cli site-exclusions clear`

3. **mode** shows the current mode and allows to switch between them

   Example: `adguardvpn-cli site-exclusions mode selective` (with this command, Selective mode is chosen)

4. **remove** removes one or more exclusions (if separated by commas)

   Example: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` where `%DOMAIN_NAME%` is the website that you want to remove from exclusions.

5. **show** shows the current list of exclusions

   Example: `adguardvpn-cli site-exclusions show`
