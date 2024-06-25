---
title: Einstellungen
sidebar_position: 4
---

Sie können die Einstellungen von AdGuard VPN für Linux über die Kommandozeile verwalten. Um die aktuelle Konfiguration anzuzeigen, geben Sie Folgendes ein:

```
adguardvpn-cli config show
```

## VPN-Modus: TUN oder SOCKS5

Sie können wählen, wie AdGuard VPN den Datenverkehr weiterleitet.

Um den Standard-Tunnelmodus festzulegen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-mode TUN
```

Um den SOCKS5-Modus einzustellen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-mode SOCKS
```

Um den SOCKS5-Port festzulegen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-socks-port <port_number>
```

Ersetzen Sie `<port_number>` durch den Port, mit dem Sie sich verbinden möchten.

## DNS-Upstream-Adresse

Um einen DNS-Upstream festzulegen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-dns <server_address>
```

Ersetzen Sie `<server_address>` durch die Adresse Ihres DNS-Servers. Um diesen DNS-Server auf der Systemebene zu verwenden, geben Sie Folgendes ein:

```
adguardvpn-cli config set-system-dns on
```

## No-Route-Modus

Diese Funktion leitet nur die von Ihnen angegebenen Adressen durch den VPN-Tunnel. Um den No-Route-Modus zu aktivieren, geben Sie Folgendes ein:

```
adguardvpn-cli config set-no-routes on
```

## Absturzberichte

Wenn Sie das automatische Melden von Abstürzen aktivieren, benachrichtigt AdGuard VPN die Entwickler, wenn ein Problem auftritt. Um die Einstellung zu aktivieren, geben Sie Folgendes ein:

```
adguardvpn-cli config send-reports on
```

Um sie zu deaktivieren, setzen Sie sie auf `off`.

## Aktualisierungskanal

Um den Aktualisierungskanal zu ändern, geben Sie Folgendes ein:

```
adguardvpn-cli config set-update-channel <channel>
```

Ersetzen Sie `<channel>` durch `release`, `beta`, oder `nightly`, je nach Ihren Vorlieben.

## Hinweise

AdGuard VPN kann Ihnen nach der Ausführung von Befehlen Hinweise geben — zum Beispiel, was Sie als nächstes tun sollen oder wie Sie einen Fehler beheben können. Diese Einstellung ist standardmäßig aktiviert, aber Sie können sie deaktivieren, indem Sie Folgendes eingeben:

```
adguardvpn-cli config set-show-hints off
```

Um sie wieder zu aktivieren, ersetzen Sie `off` durch `on`.

## Protokollierung zur Fehlersuche

Um einen Fehler zu melden, müssen Sie möglicherweise Debug-Protokolle mit den Entwicklern oder dem Support-Team teilen. Um die Debug-Protokollierung zu aktivieren, geben Sie Folgendes ein:

```
adguardvpn-cli config set-debug-logging on
```

Deaktivieren Sie diese Einstellung nach dem Export von Protokollen.
