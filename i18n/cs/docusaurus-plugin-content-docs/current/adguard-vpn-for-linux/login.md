---
title: Přihlášení, připojení a aktualizace
sidebar_position: 3
---

## Přihlášení a odhlášení

Chcete-li se přihlásit nebo si vytvořit účet, zadejte:

```
adguardvpn-cli login
```

Zadejte e-mailovou adresu a heslo k AdGuard účtu. Pokud ještě nemáte účet, bude vám nabídnuto jeho vytvoření.

:::note
AdGuard účet si můžete vytvořit také na našich [webových stránkách](https://auth.adguard.com/login.html) a poté se přihlásit do AdGuard VPN pro Linux pomocí svých přihlašovacích údajů.
:::

Chcete-li se odhlásit z AdGuard VPN, zadejte:

```
adguardvpn-cli logout
```

## Připojení k VPN

Pro rychlé připojení zadejte:

```
adguardvpn-cli connect
```

AdGuard VPN se připojí k nejrychlejšímu dostupnému nebo naposledy použitému umístění.

Chcete-li zobrazit dostupná umístění, zadejte:

```
adguardvpn-cli list-locations
```

Chcete-li se připojit k určitému umístění, zadejte:

```
adguardvpn-cli connect -l <location>
```

Nahraďte `<location>` kódem města, země nebo ISO kódem umístění, ke kterému se chcete připojit.

V případě potřeby zadejte heslo správce.

## Kontrola aktualizací

Chcete-li zkontrolovat aktualizace, zadejte:

```
adguardvpn-cli check-update
```
