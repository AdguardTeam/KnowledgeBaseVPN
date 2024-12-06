---
title: İstisnalar
sidebar_position: 7
---

_İstisnalar_ özelliği, hangi alan adlarının trafiğinin VPN yönlendirmesinden hariç tutulacağına karar vermenizi sağlar. This is handy when you don’t need VPN to work for some websites, because it saves you the hassle of constantly turning VPN on and off.

Just like in AdGuard VPN for other platforms, in AdGuard VPN for Linux you can use Exclusions in two modes: General (VPN is enabled for all domains except for those in the list of exclusions) and Selective (VPN is enabled only for the domains in the list of exclusions).

:::note

Each mode has its own list of exclusions.

:::

![İstisnalar](https://cdn.adtidy.org/blog/new/m6pkdVPN-CLI-exclusions.png)

### Nasıl kullanılır

To view all exclusion-related commands, type:

```
adguardvpn-cli site-exclusions -h
```

To add a domain to the exclusion list of the current mode, type:

```
adguardvpn-cli site-exclusions add %domain_name%
```

:::tip

Desteklenen girdi biçimleri: `domain.com`, `sub.domain.com`, `www.domain.com`. Bir veya birden fazla istisnayı aynı anda eklemek için, bunları virgülle ayırarak listeleyin. Joker karakterler için çift tırnak kullanın: `"*.domain.com"`

Komut örneği: `adguardvpn-cli site-exclusions add https://www.google.com/`

:::

Bir alan adını istisna listesinden kaldırmak için şunu yazın:

```
adguardvpn-cli site-exclusions remove %domain_name%
```

To view the current exclusion list, type:

```
adguardvpn-cli site-exclusions show
```

Tüm istisnaları kaldırmak için şunu yazın:

```
adguardvpn-cli site-exclusions clear
```

İstisnalar modunu değiştirmek için şunu yazın:

```
adguardvpn-cli site-exclusions mode %mode_name%
```

(Or you can just check the current mode using `adguardvpn-cli site-exclusions mode`)

buradaki %mode_name% `genel` veya `seçici` şeklindedir.

:::note

The commands listed above (`add`, `remove`, `show`, `clear`) are applied to the exclusion list of the current mode. To perform a command for a specific mode, add `--for-mode %mode_name% type`, for example:

```
adguardvpn-cli site-exclusions add %domain_name% --for-mode %mode_name%
```

:::
