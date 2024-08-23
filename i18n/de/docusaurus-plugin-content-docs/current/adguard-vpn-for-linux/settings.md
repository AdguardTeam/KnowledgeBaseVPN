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

## SOCKS-Einstellungen

Um den lauschenden SOCKS-Host festzulegen, geben Sie ein:

```
adguardvpn-cli config set-socks-host <host>
```

Ersetzen Sie `<host>` durch den gewünschten Host. Wenn Sie einen anderen Host als 127.0.0.1 verwenden, müssen Sie einen Benutzernamen und ein Passwort festlegen. Um den SOCKS-Benutzernamen und das Passwort festzulegen, geben Sie ein:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

Ersetzen Sie `<username>` und `<password>` durch Ihren gewünschten Benutzernamen und Ihr Passwort. Um den SOCKS-Benutzernamen und das Passwort zu löschen, geben Sie ein:

```
adguardvpn-cli config clear-socks-auth
```

## DNS-Upstream-Adresse

Um einen DNS-Upstream festzulegen, geben Sie Folgendes ein:

```
adguardvpn-cli config set-dns <server_address>
```

Ersetzen Sie `<server_address>` durch die Adresse Ihres DNS-Servers. Um diesen DNS-Server auf der Systemebene zu verwenden, geben Sie Folgendes ein:

```
adguardvpn-cli config set-system-dns on
```

## VPN-Tunnel-Routing-Modus: NONE, AUTO, oder SCRIPT

Sie können wählen, wie AdGuard VPN den Datenverkehr durch den VPN-Tunnel leitet. Um den Tunnel-Routing-Modus auf NONE (kein Routing) zu setzen, geben Sie ein:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Um den Tunnel-Routing-Modus auf AUTO (automatisches Routing) zu setzen, geben Sie ein:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

Um den Tunnel-Routing-Modus auf SCRIPT (benutzerdefiniertes Routing-Skript) zu setzen, geben Sie ein:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Um ein Routenskript mit den erforderlichen Zugriffsrechten zu erstellen, geben Sie ein:

```
adguardvpn-cli config create-routes-script
```

## QUIC verwenden

Um die Verwendung des auf QUIC (HTTP/3) basierenden AdGuard VPN-Protokolls zu aktivieren, geben Sie ein:

```
adguardvpn-cli config set-use-quic on
```

Um sie zu deaktivieren, setzen Sie sie auf `off`.

## Absturzberichte

Wenn Sie das automatische Melden von Abstürzen aktivieren, benachrichtigt AdGuard VPN die Entwickler, wenn ein Problem auftritt. Um die Einstellung zu aktivieren, geben Sie Folgendes ein:

```
adguardvpn-cli config send-reports on
```

Um sie zu deaktivieren, setzen Sie sie auf „`off`.

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
