---
title: Výjimky
sidebar_position: 7
---

Funkce _Výjimky_ umožňuje rozhodnout, které přenosy domén mají být vyloučeny ze směrování VPN. To se hodí v případě, že pro některé webové stránky VPN nepotřebujete, protože vám to ušetří práci s neustálým zapínáním a vypínáním VPN.

Stejně jako v AdGuard VPN pro jiné platformy můžete i v AdGuard VPN pro Linux používat výjimky ve dvou režimech: Obecný (VPN je povolena pro všechny domény kromě těch, které jsou v seznamu výjimek) a selektivní (VPN je povolena pouze pro domény v seznamu výjimek).

:::note

Každý režim má svůj vlastní seznam výjimek.

:::

![Exclusions](https://cdn.adguard-vpn.com/blog/new/m6pkdVPN-CLI-exclusions.png)

### Jak používat

Chcete-li zobrazit všechny příkazy související s výjimkami, zadejte:

```
adguardvpn-cli site-exclusions -h
```

Chcete-li přidat doménu do seznamu výjimek aktuálního režimu, zadejte:

```
adguardvpn-cli site-exclusions add %domain_name%
```

:::tip

Podporované vstupní formáty: `domain.com`, `sub.domain.com`, `www.domain.com`. Chcete-li přidat dvě nebo více výjimek najednou, uveďte je odděleně mezerami. Pro zástupné znaky použijte dvojité uvozovky: `"*.domain.com"`

Příklad příkazu: `adguardvpn-cli site-exclusions add www.google.com`

:::

Chcete-li odebrat doménu ze seznamu výjimek, zadejte:

```
adguardvpn-cli site-exclusions remove %domain_name%
```

Chcete-li zobrazit aktuální seznam výjimek, zadejte:

```
adguardvpn-cli site-exclusions show
```

Chcete-li odstranit všechny výjimky, zadejte:

```
adguardvpn-cli site-exclusions clear
```

Chcete-li změnit režim výjimek, zadejte:

```
adguardvpn-cli site-exclusions mode %mode_name%
```

(Nebo můžete zkontrolovat aktuální režim pomocí `adguardvpn-cli site-exclusions mode`)

kde %mode_name% je `obecný` nebo `selektivní` režim.

:::note

Výše uvedené příkazy (`add`, `remove`, `show`, `clear`) se použijí v seznamu výjimek aktuálního režimu. Chcete-li provést příkaz pro konkrétní režim, přidejte např. `--for-mode %mode_name% type`:

```
adguardvpn-cli site-exclusions add %domain_name% --for-mode %mode_name%
```

:::
