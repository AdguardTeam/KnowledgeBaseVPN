---
title: Instalace na routerech MikroTik
sidebar_position: 2
---

:::note
Zásobník AdGuard VPN pro Linux Docker můžete nainstalovat a spustit také na routerech MikroTik se systémem RouterOS. Tento postup vyžaduje pokročilé technické znalosti, ale umožňuje přístup ke všem funkcím AdGuard VPN.

Další informace a podrobné pokyny naleznete v [našem specializovaném průvodci](/adguard-vpn-for-linux/setting-up-on-a-router/mikrotik/).
:::

Chcete-li nastavit AdGuard VPN na routeru MikroTik, postupujte podle těchto kroků:

1. Otevřete terminál MikroTik. To můžete provést pomocí příkazového řádku nebo terminálu na svém počítači zadáním: `ssh admin@192.168.88.1`. Alternativně se k němu můžete dostat také prostřednictvím prohlížeče, a to tak, že navštívíte stránku `http://192.168.88.1` a kliknete na záložku Terminál v pravém horním rohu.

2. Jakmile jste přihlášeni, spusťte následující příkazy:

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

Ve výše uvedených příkazech označuje `SERVER_ADDRESS` adresu serveru. `USERNAME` je uživatelské jméno, které vám bylo přiděleno při přidání routeru do vašeho účtu AdGuard. Totéž platí pro `PASSWORD`.

:::note

Upozorňujeme, že tyto příkazy je třeba provést přesně tak, jak jsou uvedeny.

:::
