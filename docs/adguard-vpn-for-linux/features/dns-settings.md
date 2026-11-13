---
title: DNS settings
sidebar_position: 6
---

To set a DNS upstream, type:

```shell
adguardvpn-cli config set-dns <server_address>
```

Replace `<server_address>` with the address of your DNS server. To use this DNS server at the system level, type:

```shell
adguardvpn-cli config set-change-system-dns on
```

If you set the parameter to `off`, the system DNS settings remain unchanged and DNS queries may bypass the VPN tunnel.

:::note

In SOCKS5 mode, the `set-dns` and `set-change-system-dns` commands are inactive. The DNS behavior is determined solely by the settings of each app.

:::
