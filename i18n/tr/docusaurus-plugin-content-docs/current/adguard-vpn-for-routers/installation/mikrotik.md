---
title: Installation on MikroTik routers
sidebar_position: 2
---

To set up AdGuard VPN on your MikroTik router, follow these steps:

1. Open the MikroTik terminal. You can do this by using the command line or Terminal on your computer and entering: `ssh admin@192.168.88.1`. Alternatively, you can also access it through your browser by visiting `http://192.168.88.1` and clicking on the Terminal tab in the upper right corner.

2. Once you’re in, run the following commands:

`/ip ipsec mode-config`

`add connection-mark=to_adguard name=adguard responder=no`

`/ip ipsec policy group`

`add name=adguard`

`/ip ipsec profile`

`add name=adguard`

`/ip ipsec peer`

`add address=SERVER_ADDRESS exchange-mode=ike2 name=adguard profile=adguard`

`/ip ipsec proposal`

`add name=adguard pfs-group=none`

`/ip ipsec identity`

`add auth-method=eap certificate="" eap-methods=eap-mschapv2 generate-policy=port-strict mode-config=adguard peer=adguard policy-template-group=adguard username=USERNAME password=PASSWORD`

`/ip ipsec policy`

`add dst-address=0.0.0.0/0 group=adguard src-address=0.0.0.0/0 template=yes`

Yukarıdaki komutlarda, `SERVER_ADDRESS` sunucu adresini belirtir. `USERNAME`, yönlendiricinizi AdGuard hesabınıza eklerken size atanan kullanıcı adıdır. Aynı durum `PASSWORD` için de geçerlidir.

:::note

Lütfen bu komutların aynen yazıldığı gibi uygulanması gerektiğini unutmayın.

:::
