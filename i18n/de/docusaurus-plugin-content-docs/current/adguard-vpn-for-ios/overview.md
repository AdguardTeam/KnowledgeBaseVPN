---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für iOS?

Mit einem VPN können Sie eine sichere Verbindung zu einem anderen Netzwerk im Internet herstellen. Es verbindet den Computer oder das Mobilgerät eines Nutzers mit einem Server und ermöglicht das Surfen im Netz unter einer „Tarn“-IP-Adresse. Befindet sich der VPN-Server in einem anderen Land, sieht es so aus, als ob die Internetverbindung von diesem Land aus aufgebaut wurde. [Erfahren Sie mehr](/general/how-vpn-works) darüber, wie ein VPN funktioniert.

AdGuard VPN verfügt über mehrere Funktionen:

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr und macht den Inhalt für Betrüger unzugänglich
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Der nächste Vorteil von AdGuard VPN für iOS ist unser eigenes VPN-Protokoll. Im Vergleich zu anderen VPN-Protokollen ist es extrem schwer zu erkennen und selbst bei einer schlechten Internetverbindung stabil. Sie können [mehr](/general/adguard-vpn-protocol) über das AdGuard VPN-Protokoll erfahren.

## Wie man AdGuard VPN für iOS verwendet

Um AdGuard VPN für iOS zu verwenden, müssen Sie sich zunächst bei Ihrem [AdGuard-Konto](https://my.adguard.com/) anmelden. Sie können sich direkt mit Ihren AdGuard-Kontodaten oder über Google, Apple ID oder Facebook anmelden (wenn Ihr AdGuard-Konto mit derselben E-Mail-Adresse registriert wurde).

Wenn Sie noch kein AdGuard-Konto haben, müssen Sie es zuerst erstellen.

AdGuard VPN ist ganz einfach zu verwenden. Auf dem Hauptbildschirm sehen Sie die Schaltfläche *Verbinden/Trennen* und die Liste der verfügbaren Server. Die Server haben ihren eigenen Standort (ein bestimmtes Land und eine Stadt) und eine Ping-Rate. Der Ping zeigt die Antwortzeit des Servers (in Millisekunden) an. Die Wahl des Servers mit einem Ping von 22 ms bedeutet, dass ein an diesen Server gesendetes Datenpaket nach 22 ms zurückkommt (wieder empfangen wird). In AdGuard VPN können Sie aus über 50 Standorten in Dutzenden von Ländern wählen.

![Hauptbildschirm und Standorte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Ausschlusslisten

Sie können Ausschlüsse finden, indem Sie unten auf die mittlere Schaltfläche tippen. Dort sehen Sie zwei Ausschlusslisten, für den Allgemeinen und den Selektiven Modus. Im Allgemeinen Modus funktioniert das VPN für alle Websites, mit Ausnahme der ausgeschlossenen. Umgekehrt funktioniert das VPN im selektiven Modus nur für Websites aus der Liste. Sie können Domains (z.B. `google.com`) oder Subdomains (z.B. `*.google.com`) von Websites auf zwei Arten hinzufügen: Sie können diese manuell in der App eingeben oder direkt im Browser, indem Sie die gewünschten Seiten mit AdGuard VPN teilen.

![Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Eine weitere nützliche Funktion ist der Import/Export von Ausschlusslisten. Sie können dies tun, indem Sie die folgenden vier Schritte ausführen:

1. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, von dem aus Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.

2. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.

3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem iOS-Gerät auf Ihr Mac importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Mac senden.

4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

![Import-/Exportausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## App-Einstellungen

Um zu den App-Einstellungen zu gelangen:

1. Tippen Sie auf die Schaltfläche Einstellungen (⚙) in der unteren rechten Ecke des Hauptbildschirms der AdGuard VPN-App
2. Tippen Sie auf *App-Einstellungen*

Hier können Sie AdGuard VPN für iOS mit verschiedenen Optionen nach Bedarf konfigurieren: Betriebsmodus, DNS-Server, automatischer WLAN-Schutz, Thema und Erweiterte Einstellungen.

![App-Einstellungen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Betriebsmodus

AdGuard VPN für iOS kann in zwei Modi betrieben werden: **Allgemein** und **Integriert**.

Im **Allgemeinen** Modus wird das [AdGuard VPN-Protokoll](/general/adguard-vpn-protocol) verwendet, das die beste Kombination aus Geschwindigkeit und Sicherheit bietet. In diesem Modus kann AdGuard VPN nicht mit [AdGuard Werbeblocker für iOS](https://adguard.com/kb/adguard-for-ios/overview/) arbeiten.

Im Modus **Integriert** kann AdGuard VPN gleichzeitig mit AdGuard Ad Blocker für iOS arbeiten, indem stattdessen das IPSec-Protokoll verwendet wird. Dieses Protokoll ist ebenfalls sicher, aber etwas langsamer und leichter zu erkennen. Sie müssen keine zusätzlichen Aktionen ausführen, um die Integration einzurichten: Installieren Sie einfach beide Apps und wechseln Sie in diesen Modus.

:::note

Im Modus **Integriert** können Sie weder die Funktion „Ausschlüsse“ verwenden noch einen DNS-Server auswählen.

:::

### DNS-Server

DNS-Server übersetzen einen Domain- oder Hostnamen (z. B. example.com oder www.example.com) in etwas, das Browser verstehen können, nämlich in IP-Adressen. AdGuard VPN für iOS bietet die Wahl zwischen mehreren DNS-Servern, die jeweils ihre eigenen besonderen Eigenschaften haben. Zum Beispiel entfernt AdGuard DNS Werbung und schützt Ihr Gerät vor Tracking, während AdGuard DNS Family Protection die Funktionen von AdGuard DNS mit Safe Search und dem Sperren von Inhalten für Erwachsene kombiniert. DNS-Server von verschiedenen DNS-Anbietern können je nach Standort, ISP und anderen Faktoren ebenfalls schneller oder langsamer arbeiten. Wählen Sie einen, der Ihnen am besten passt. Sie können [mehr über DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) und seine Eigenschaften erfahren.

![DNS-Server-Bildschirm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### WLAN-Auto-Schutz

VPN wird automatisch aktiviert, wenn das Gerät eine Verbindung zu einem WLAN-Netzwerk aufbaut.

### Farbschema

Sie können das Standard-, das dunkle oder das helle Farbschema der App wählen (verfügbar in iOS 13 und späteren Versionen).

### Erweiterte Einstellungen

In den *Erweiterten Einstellungen* finden Sie zwei Abschnitte — Protokollierungsstufe und Diagnoseinformationen. Was die erste Option betrifft, so wird nicht empfohlen, die Erweiterte Protokollierungsstufe zu aktivieren, es sei denn, unser Support-Team bittet darum. Diagnoseinformationen, lokal gespeicherte technische Informationen über das Gerät und die Verbindungen (IP-Adresse, ID, Ping usw.), können bei technischen Problemen an uns gesendet werden.

## Quick Actions (verfügbar in iOS 13 oder höher)

Um auf diese Funktion zuzugreifen, berühren und halten Sie das App-Symbol und heben Sie dann den Finger. Es werden Schnellaktionen angezeigt: Verbinden/Trennen, Standort wählen, Startbildschirm bearbeiten und App entfernen.

![Schnellaktionen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

Es gibt eine Vielzahl von Hilfsfunktionen in der App (drücken Sie die Schaltfläche *Einstellungen* unten rechts und dann *Support*): Sie können den FAQ-Bereich einsehen, einen Fehler melden, Feedback hinterlassen, Ihre Probleme und Vorschläge in sozialen Netzwerken oder auf GitHub diskutieren, AdGuard VPN für iOS im App Store bewerten und Protokolle exportieren.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Wenn Sie die kostenlose Version von AdGuard VPN verwenden, befindet sich die vierte Registerkarte mit einem Pfeilsymbol in der unteren Symbolleiste. In diesem Abschnitt finden Sie kurze Informationen über die wichtigsten Vorteile der kostenpflichtigen Version der App und können ein Abonnement erwerben.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
