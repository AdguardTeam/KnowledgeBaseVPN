---
title: Přihlášení, připojení a aktualizace
sidebar_position: 3
---

## Přihlášení a odhlášení

Chcete-li se přihlásit nebo si vytvořit účet, zadejte:

```
adguardvpn-cli login
```

When prompted with the menu:

```
b - Open link in browser
s - Speed up check
x - Cancel
```

select `b` to open the authentication page in your default browser. Enter your email address. Once you are logged in, you will see the message _Successfully logged in_ in the Terminal.

You can set up your preferred login method (password or one-time code) and two-factor authentication in your [AdGuard account](https://adguardaccount.com/account/settings).

:::note
AdGuard účet si můžete vytvořit také na našich [webových stránkách](https://auth.adguardaccount.com/login.html) a poté se přihlásit do AdGuard VPN pro Linux pomocí svých přihlašovacích údajů.
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

## Kontrola informací o předplatném

Chcete-li zkontrolovat aktuální informace a stav předplatného, zadejte:

```
adguardvpn-cli license
```

Zobrazí se váš e-mail a typ předplatného. Platícím uživatelům se také zobrazí datum vypršení jejich předplatného.
