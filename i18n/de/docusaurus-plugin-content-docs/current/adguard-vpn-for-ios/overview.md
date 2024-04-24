---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für iOS?

Mit einem VPN können Sie eine sichere Verbindung zu einem anderen Netzwerk im Internet herstellen. Es verbindet den Computer oder das mobile Gerät eines Nutzers mit einem Server und ermöglicht es, mit einer „Tarn“-IP-Adresse im Internet zu surfen. Wenn sich der VPN-Server in einem anderen Land befindet, sieht es so aus, als ob Ihre Internetverbindung von diesem Land aus hergestellt wurde. Weitere Details finden Sie in [unserem Artikel über die Funktionsweise eines VPN](/general/how-vpn-works).

AdGuard VPN verfügt über mehrere Funktionen:

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr und macht den Inhalt für Betrüger unzugänglich
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Der nächste Vorteil von AdGuard VPN für iOS ist unser eigenes VPN-Protokoll. Im Vergleich zu anderen VPN-Protokollen ist es extrem schwer zu erkennen und selbst bei einer schlechten Internetverbindung stabil. [Erfahren Sie mehr über das AdGuard VPN-Protokoll](/general/adguard-vpn-protocol).

## Wie man AdGuard VPN für iOS verwendet

Um AdGuard VPN für iOS zu verwenden, müssen Sie sich zunächst bei Ihrem [AdGuard-Konto](https://my.adguard.com/) anmelden. Sie können sich direkt mit Ihren AdGuard-Kontodaten oder über Google, Apple ID oder Facebook anmelden (wenn Ihr AdGuard-Konto mit derselben E-Mail-Adresse registriert wurde).

Wenn Sie noch kein AdGuard-Konto haben, müssen Sie es zuerst erstellen.

AdGuard VPN ist ganz einfach zu verwenden. Auf dem Hauptbildschirm sehen Sie die Schaltfläche *Verbinden* (*Trennen*) und die Liste der verfügbaren Server (wir nennen sie *Standorte*). Jeder Server hat seinen eigenen Standort (ein bestimmtes Land und eine Stadt) und seine eigene Ping-Anzeige.

Der Ping zeigt die Antwortzeit des Servers in Millisekunden an. Dies gibt an, wie schnell die VPN-Verbindung sein wird, wenn Sie sich mit diesem Standort verbinden. Die Auswahl eines Servers mit einem Ping von 22 ms bedeutet, dass ein Datenpaket, das an diesen Server gesendet wird, in 22 ms zurückgegeben wird.

Mit AdGuard VPN können Sie aus über 50 Standorten in Dutzenden von Ländern wählen.

![Hauptbildschirm und Standorte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/main-locations.png)

## Ausschlüsse

Sie finden den Tab „Ausschlüsse“, indem Sie auf das zweite Symbol in der unteren Leiste tippen. Dort sehen Sie zwei Ausschlusslisten, für die Modi *Regulär* und *Selektiv*.

Im Modus *Regulär* funktioniert das VPN für alle Websites mit Ausnahme der ausgeschlossenen Websites. Umgekehrt funktioniert das VPN im Modus *Selektiv* nur für Websites aus der Liste.

Sie können Domains (z. B. `google.com`) oder Subdomains (z. B. `*.google.com`) von Websites auf zwei Arten zu den Listen hinzufügen:

- Geben Sie sie manuell in der App ein
- Fügen Sie sie direkt im Browser hinzu, indem Sie die gewünschten Seiten mit AdGuard VPN teilen

![Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-add.png)

### Ausschlüsse importieren/exportieren

Eine weitere nützliche Funktion ist der Import und Export von Ausschlusslisten. Auf diese Weise können Sie Ausschlusslisten von und zu anderen Geräten freigeben.

Sie können dies in vier Schritten tun:

1. Öffnen Sie AdGuard VPN auf dem Gerät, von dem Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.

2. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.

3. Vergessen Sie bei der Übertragung zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Import an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem iOS-Gerät auf Ihr Mac importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Mac senden.

4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

**In AdGuard VPN für iOS können Sie auf die Export- und Importfunktionen zugreifen, indem Sie auf das Symbol mit den drei Punkten in der oberen rechten Ecke des Ausschlussbildschirms tippen**.

![Import-/Exportausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Allgemeine Einstellungen

So öffnen Sie die allgemeinen Einstellungen:

1. Tippen Sie auf das Symbol „Einstellungen“ (⚙) in der unteren rechten Ecke des Hauptbildschirms der App.
2. Tippen Sie auf *Allgemein*.

Hier können Sie AdGuard VPN für iOS mit verschiedenen Optionen nach Bedarf konfigurieren: *DNS-Server*, *Farbschema*, *Erweitert*, *Technische und Interaktionsdaten senden* und *Kill Switch*.

![Allgemeine Einstellungen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS-Server

AdGuard VPN für iOS bietet die Wahl zwischen mehreren DNS-Servern, die jeweils ihre eigenen besonderen Eigenschaften haben. Zum Beispiel entfernt AdGuard DNS Werbung und schützt Ihr Gerät vor Tracking, während AdGuard DNS Family Protection die Funktionen von AdGuard DNS mit Safe Search und dem Sperren von Inhalten für Erwachsene kombiniert. DNS-Server von verschiedenen DNS-Anbietern können je nach Standort, ISP und anderen Faktoren ebenfalls schneller oder langsamer arbeiten. Wählen Sie einen, der Ihnen am besten passt. Sie können [mehr über DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) und seine Eigenschaften erfahren.

![DNS-Server-Bildschirm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Farbschema

Sie können Ihr App-Farbschema auf „System“, „Dunkel“ oder „Hell“ einstellen (verfügbar in iOS 13 oder höher).

### Erweiterte Einstellungen

In den Einstellungen *Erweitert* finden Sie 4 Abschnitte — *Betriebsmodus*, *Protokollierungsstufe*, *Protokolle und Systeminformationen exportieren* und *Diagnoseinformationen*.

#### Betriebsmodus

AdGuard VPN für iOS kann in zwei Modi betrieben werden: **VPN** und **Integriert**.

Der Modus *VPN* verwendet das [AdGuard VPN-Protokoll](/general/adguard-vpn-protocol), das die beste Kombination aus Geschwindigkeit und Sicherheit bietet. In diesem Modus funktioniert AdGuard VPN nicht mit [AdGuard Werbeblocker für iOS](https://adguard.com/adguard-ios/overview.html).

Im **Integrierten Modus** kann AdGuard VPN gleichzeitig mit AdGuard Ad Blocker für iOS über das IPSec-Protokoll arbeiten. Dieses Protokoll ist ebenfalls sicher, aber etwas langsamer und leichter zu erkennen. Sie müssen nichts tun, um die Integration einzurichten: Installieren Sie einfach beide Anwendungen und wechseln Sie in diesen Modus.

:::note

Im Modus **Integriert** können Sie weder die Funktion „Ausschlüsse“ verwenden noch einen DNS-Server auswählen.

:::

#### Protokollierungsstufe

Diese Einstellung wird in erster Linie für die Fehlersuche und -behebung verwendet. Die Protokollierungsstufen „Erweitert“ und „Extrem“ zeichnen detailliertere Informationen auf, die bei der Identifizierung und Behebung verschiedener Probleme oder Fehler helfen können.

:::caution

**Es wird nicht empfohlen, die Protokollierungsstufe „Erweitert“ oder „Extrem“ zu aktivieren, es sei denn, unser Support-Team bittet darum**.

:::

#### Protokolle und Systeminformationen exportieren

Mit dieser Option können Sie die Protokolle und Systeminformationen der App an unseren Support oder andere Personen senden.

#### Diagnosedaten

Mit dieser Option können Sie technische Informationen exportieren, die bei der Lösung von Problemen nützlich sein können und manchmal von unserem Support und unseren Entwicklern angefordert werden.

### Technische Daten und Interaktionsdaten senden

Wenn Sie diese Option aktivieren, helfen Sie uns, besser zu verstehen, wie Nutzer mit der App interagieren. Wir verwenden diese Informationen, um die Benutzerfreundlichkeit zu verbessern.

### Kill Switch (Not‐Trennung)

Wenn Ihre VPN-Verbindung aus irgendeinem Grund plötzlich abbricht, beendet *Kill Switch* automatisch die Internetverbindung und stellt sicher, dass Ihre Daten nicht nach außen dringen und Ihre Identität verborgen bleibt.

## Schnellaktionen

Schnellaktionen sind eine bequeme Möglichkeit, nützliche oder app-spezifische Aktionen auf dem Startbildschirm auszuführen, ohne eine App zu öffnen.

Tippen Sie auf das AdGuard VPN-App-Symbol, halten Sie es gedrückt und heben Sie den Finger an, um auf das Menü mit den schnellen Aktionen zuzugreifen. Im geöffneten Menü sehen Sie die Schnellaktionen von AdGuard VPN: *Verbinden* (*Trennen*) und *Standort wählen*. Sie können auch auf alle Standardaktionen zugreifen, wie z. B. das Entfernen der App oder das Verschieben oder Freigeben der App.

![Schnellaktionen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

Der Bildschirm „Support“ (*Einstellungen* ➜ *Support*) bietet eine Reihe von hilfreichen Funktionen: *FAQ*, *Fehler melden*, *Funktion anfordern* und *App bewerten*. Letzteres ermöglicht es Ihnen, AdGuard VPN für iOS im App Store zu bewerten.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Bildschirm „Abonnement“

Wenn Sie die kostenlose Version von AdGuard VPN verwenden, gibt es eine weitere Registerkarte mit einem Pfeilsymbol in der unteren Tab-Leiste. Dieser Abschnitt beschreibt kurz die wichtigsten Vorteile der kostenpflichtigen Version der App. Sie können ein Jahres- oder Monatsabonnement wählen.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
