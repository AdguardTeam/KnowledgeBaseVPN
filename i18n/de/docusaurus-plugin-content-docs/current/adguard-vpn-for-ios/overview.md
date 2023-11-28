---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für iOS?

Mit einem VPN können Sie eine sichere Verbindung zu einem anderen Netzwerk im Internet herstellen. Es verbindet den Computer oder das mobile Gerät eines Benutzers mit einem Server und ermöglicht es Ihnen, mit einer anderen IP-Adresse im Internet zu surfen. Wenn sich der VPN-Server also in einem anderen Land befindet, scheint es, als hätten Sie sich von diesem Land aus mit dem Internet verbunden. [Erfahren Sie mehr](/general/how-vpn-works) darüber, wie ein VPN funktioniert.

Apropos AdGuard VPN, es hat mehrere Funktionen:

- verbirgt Ihren tatsächlichen Aufenthaltsort und hilft Ihnen, anonym zu bleiben
- ändert Ihre IP-Adresse, um Ihre Daten vor Verfolgung zu schützen
- verschlüsselt Ihren Datenverkehr, um ihn für Betrüger unerreichbar zu machen
- lässt Sie konfigurieren, wo VPN verwendet werden soll und wo nicht (Ausschlussfunktion)

Der nächste Vorteil von AdGuard VPN für iOS ist unser eigenes VPN-Protokoll. Es hat zwei Hauptvorteile: Im Vergleich zu anderen VPN-Protokollen ist es extrem schwer zu erkennen und es funktioniert auch bei einer schlechten Internetverbindung stabil. Weitere Informationen zum AdGuard VPN-Protokoll finden Sie [in diesem Artikel](/general/adguard-vpn-protocol).

## Wie man AdGuard VPN für iOS verwendet

Um AdGuard VPN für iOS zu verwenden, müssen Sie sich zunächst bei Ihrem [AdGuard-Konto](https://my.adguard.com/) anmelden. Sie können sich direkt mit Ihren AdGuard-Kontodaten oder über Google, Apple ID oder Facebook anmelden (wenn Ihr AdGuard-Konto mit derselben E-Mail-Adresse registriert wurde).

Wenn Sie noch kein AdGuard-Konto haben, müssen Sie es zuerst erstellen.

AdGuard VPN ist ganz einfach zu verwenden. Auf dem Hauptbildschirm sehen Sie die Schaltfläche *Verbinden/Trennen* und die Liste der verfügbaren Server. Die Server haben ihren eigenen Standort (ein bestimmtes Land und eine Stadt) und eine Ping-Rate. Der Ping beschreibt die Antwortzeit des Servers (in Millisekunden). Wenn Sie beispielsweise den Server mit dem Ping von 22 ms auswählen, bedeutet dies, dass das Signal den Server erreicht und in 22 Millisekunden zurückkehrt. Je niedriger diese Rate ist, desto schneller ist Ihre Verbindung. In AdGuard VPN können Sie aus über 50 Standorten in Dutzenden von Ländern wählen.

![Hauptbildschirm und Standorte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Ausschlusslisten

Sie finden die Ausschlussfunktion, indem Sie auf die mittlere Schaltfläche unten tippen. Dort sehen Sie zwei Ausschlusslisten – für den Allgemeinen und den Selektiven Modus. Im Allgemeinen Modus funktioniert das VPN auf allen Websites mit Ausnahme derjenigen, die in der Ausschlussliste aufgeführt sind. Im Selektiven Modus hingegen arbeitet das VPN nur auf den Sites aus der Liste. Sie können Domains (z. B. `google.com`) oder Subdomains (z. B. `*.google.com`) von Websites auf zwei Arten hinzufügen: Sie können sie manuell in der App oder direkt im Browser eingeben, indem Sie auf die Schaltfläche *Teilen* klicken und AdGuard VPN in der geöffneten Liste unten finden.

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

Im **Integrierten** Modus kann AdGuard VPN gleichzeitig mit dem AdGuard Werbeblocker für iOS arbeiten, indem das IPSec-Protokoll verwendet wird. Dieses Protokoll ist ebenfalls sicher, aber etwas langsamer und leichter zu erkennen. Sie müssen keine zusätzlichen Aktionen ausführen, um die Integration einzurichten: Installieren Sie einfach beide Apps und wechseln Sie in diesen Modus.
> Beachten Sie, dass Sie im **Integrierten** Modus die Ausschlussfunktion nicht verwenden und einen DNS-Server nicht auswählen können.

### DNS-Server

Der Zweck des Domain Name Systems (DNS) besteht darin, die Namen von Websites in etwas zu übersetzen, das Browser verstehen können, d. h. IP-Adressen. Diese Aufgabe wird von DNS-Servern ausgeführt. AdGuard VPN für iOS bietet eine Auswahl aus mehreren DNS-Servern mit jeweils besonderen Eigenschaften. Zum Beispiel entfernt AdGuard DNS Werbung und schützt Ihr Gerät vor Tracking, während AdGuard DNS Family Protection die Funktionen von AdGuard DNS mit SafeSearch und dem Sperren von Inhalten für Erwachsene kombiniert. DNS-Server von verschiedenen DNS-Anbietern können je nach Standort, ISP und anderen Faktoren ebenfalls schneller oder langsamer arbeiten. Wählen Sie einen, der Ihnen am besten passt. Mehr über DNS und seine Eigenschaften [erfahren Sie in diesem Artikel](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![DNS-Server-Bildschirm *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### WLAN-Auto-Schutz

VPN wird automatisch aktiviert, sobald das Gerät eine Verbindung zu einem WLAN-Netzwerk herstellt.

### Thema

Sie können das Systemstandard-, dunkle oder helle Thema der App auswählen (verfügbar in iOS 13 und späteren Versionen).

### Erweiterte Einstellungen

In den *Erweiterten Einstellungen* finden Sie zwei Abschnitte – Protokollierungsebene und Diagnoseinformationen. In Bezug auf die erste Option wird nicht empfohlen, die erweiterte Protokollierungsebene zu aktivieren, es sei denn, dies wird von unserem Support-Team angefordert. Diagnosedaten, lokal gespeicherte technische Informationen über das Gerät und Verbindungen (IP-Adresse, ID, Ping usw.), können bei technischen Problemen an uns gesendet werden.

## Quick Actions (verfügbar in iOS 13 oder höher)

Um auf diese Funktion zuzugreifen, berühren und halten Sie das App-Symbol und heben Sie dann den Finger. Sie sehen eine Liste mit Quick Actions: Verbinden/Trennen mit dem aktuell ausgewählten Server, Standort auswählen, um einen neuen Serverstandort auszuwählen. Sie können natürlich auch auf alle Standardaktionen wie das Entfernen der App oder das Verschieben des App-Symbols zugreifen.

![Schnellaktionen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Support

Es gibt eine Vielzahl von Hilfsfunktionen in der App (drücken Sie die Schaltfläche *Einstellungen* unten rechts und dann *Support*): Sie können den FAQ-Bereich einsehen, einen Fehler melden, Feedback hinterlassen, Ihre Probleme und Vorschläge in sozialen Netzwerken oder auf GitHub diskutieren, AdGuard VPN für iOS im App Store bewerten und Protokolle exportieren.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Abonnement

Wenn Sie die kostenlose Version von AdGuard VPN verwenden, befindet sich die vierte Registerkarte mit einem Pfeilsymbol in der unteren Registerkartenleiste. In diesem Abschnitt finden Sie kurze Informationen über die Hauptvorteile der kostenpflichtigen Version der App und können ein Abonnement kaufen.

![Abonnement *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
