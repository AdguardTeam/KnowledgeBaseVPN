---
title: Anmeldung, Verbindung und Aktualisierung
sidebar_position: 3
---

## An- und Abmelden

Um sich anzumelden oder ein Konto zu erstellen, geben Sie Folgendes ein:

```
adguardvpn-cli login
```

Geben Sie die E-Mail-Adresse und das Passwort für Ihr AdGuard-Konto ein. Wenn Sie noch kein Konto eingerichtet haben, werden Sie aufgefordert, eines zu erstellen.

:::note
Sie können auch ein AdGuard-Konto auf unserer [Website](https://auth.adguard.com/login.html) erstellen und sich dann mit Ihren Anmeldedaten bei AdGuard VPN für Linux anmelden.
:::

Um sich von AdGuard VPN abzumelden, geben Sie Folgendes ein:

```
adguardvpn-cli logout
```

## Mit VPN verbinden

Für eine Schnellverbindung, geben Sie Folgendes ein:

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

Ersetzen Sie `<location>` durch die Stadt, das Land oder den ISO-Code des Ortes, zu dem Sie eine Verbindung herstellen möchten.

Geben Sie bei Bedarf Ihr Admin-Passwort ein.

## Auf Aktualisierungen prüfen

Um nach Updates zu suchen, geben Sie Folgendes ein:

```
adguardvpn-cli check-update
```
