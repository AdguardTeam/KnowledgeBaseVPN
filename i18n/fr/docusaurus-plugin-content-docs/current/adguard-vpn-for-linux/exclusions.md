---
title: Exclusions
sidebar_position: 7
---

The _Exclusions_ feature lets you decide which domains’ traffic should be excluded from VPN routing. This is handy when you don’t need VPN to work for some websites, because it saves you the hassle of constantly turning VPN on and off.

Just like in AdGuard VPN for other platforms, in AdGuard VPN for Linux you can use Exclusions in two modes: General (VPN is enabled for all domains except for those in the list of exclusions) and Selective (VPN is enabled only for the domains in the list of exclusions).

:::note

Each mode has its own list of exclusions.

:::

![Exclusions](https://cdn.adguard-vpn.com/blog/new/m6pkdVPN-CLI-exclusions.png)

### How to use

To view all exclusion-related commands, type:

```
adguardvpn-cli site-exclusions -h
```

To add a domain to the exclusion list of the current mode, type:

```
adguardvpn-cli site-exclusions add %domain_name%
```

:::tip

Supported input formats: `domain.com`, `sub.domain.com`, `www.domain.com`. To add two or more exclusions at once, list them separated by spaces. Use double quotes for wildcards: `"*.domain.com"`

Command example: `adguardvpn-cli site-exclusions add www.google.com`

:::

To remove a domain from the list of exclusions, type:

```
adguardvpn-cli site-exclusions remove %domain_name%
```

To view the current exclusion list, type:

```
adguardvpn-cli site-exclusions show
```

To remove all exclusions, type:

```
adguardvpn-cli site-exclusions clear
```

To change the Exclusions mode, type:

```
adguardvpn-cli site-exclusions mode %mode_name%
```

(Or you can just check the current mode using `adguardvpn-cli site-exclusions mode`)

where %mode_name% is `general` or `selective`.

:::note

The commands listed above (`add`, `remove`, `show`, `clear`) are applied to the exclusion list of the current mode. To perform a command for a specific mode, add `--for-mode %mode_name% type`, for example:

```
adguardvpn-cli site-exclusions add %domain_name% --for-mode %mode_name%
```

:::
