---
title: Login, connection, and update
sidebar_position: 3
---

## An- und Abmelden

Um sich anzumelden oder ein Konto zu erstellen, geben Sie Folgendes ein:

```
adguardvpn-cli login
```

Geben Sie die E-Mail-Adresse und das Passwort für Ihr AdGuard-Konto ein. If you don’t have an account yet, you’ll be prompted to create one.

:::note
You can also create an AdGuard account on our [website](https://auth.adguardaccount.com/login.html) and then log in to AdGuard VPN for Linux using your credentials.
:::

Um sich von AdGuard VPN abzumelden, geben Sie Folgendes ein:

```
adguardvpn-cli logout
```

## Mit VPN verbinden

For quick connection, type:

```
adguardvpn-cli connect
```

AdGuard VPN verbindet sich mit dem schnellsten verfügbaren oder dem zuletzt genutzten Standort.

Um die verfügbaren Standorte anzuzeigen, geben Sie Folgendes ein:

```
adguardvpn-cli list-locations
```

Um eine Verbindung zu einem bestimmten Standort herzustellen, geben Sie Folgendes ein:

```
adguardvpn-cli connect -l <location>
```

Replace `<location>` with the city, country, or ISO code of the location you want to connect to.

Geben Sie bei Bedarf Ihr Admin-Passwort ein.

## Auf Aktualisierungen prüfen

To check for updates, type:

```
adguardvpn-cli check-update
```

## Check your subscription info

To check your current subscription information and status, type:

```
adguardvpn-cli license
```

You will see your email and subscription type. Paid users will also see the expiration date of their subscription.
