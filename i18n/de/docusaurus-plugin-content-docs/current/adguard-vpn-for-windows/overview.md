---
title: Funktionsübersicht
sidebar_position: 1
---

## Was AdGuard VPN für Windows leistet

- Schützt vor dem Abfangen des Netzwerkverkehrs (Spoofing). AdGuard VPN erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem Remote-Server. Ihr gesamter Internetverkehr wird durch diesen Tunnel geleitet, sodass Ihre Daten unterwegs geschützt sind. Und dank des [einzigartigen Protokolls von AdGuard](https://trusttunnel.org/) ist Ihnen eine schnelle und sichere Verbindung garantiert.

- Maskiert Ihre IP-Adresse. Ihre wahre IP-Adresse ist für Cyberkriminelle der Schlüssel zu Ihren persönlichen Daten. Ihr Name, Ihre E-Mail-Adresse, Telefonnummer und Kreditkarteninformationen können Betrügern in die Hände fallen, wenn Sie Ihre IP-Adresse nicht verbergen. Mit AdGuard VPN wird Ihr gesamter Datenverkehr durch einen verschlüsselten Tunnel geleitet und gelangt zum VPN-Server. Der Webserver registriert die IP-Adresse des Endpunkts des Tunnels, d. h. des VPN-Servers, und nicht die tatsächliche IP-Adresse des Geräts.

- Verbirgt Ihren tatsächlichen Standort. Was bedeutet das für Sie? Zum Beispiel die Möglichkeit, ein Hotel zu den Preisen der Einheimischen zu buchen oder sich vor geografisch ausgerichteter Werbung zu verstecken.

AdGuard VPN für Windows hat viele Vorteile, daher haben wir ihnen [separaten Artikel](/general/why-adguard-vpn) gewidmet. Unten konzentrieren wir uns mehr auf die App selbst und ihre Funktionsweise.

## So verwenden Sie AdGuard VPN für Windows

Um AdGuard VPN für Windows zu nutzen, laden Sie die App von [unserer Website](https://adguard-vpn.com/welcome.html) herunter. Die Installation dauert nicht länger als eine Minute — und Sie sehen ein Dialogfenster, in dem Sie mindestens ein Kästchen ankreuzen müssen, um die Bedingungen der Benutzervereinbarung und der Datenschutzerklärung anzuwenden. Und Sie entscheiden selbst, ob Sie möchten, dass AdGuard anonymisierte Daten über Ihre App-Nutzung erfasst. Zuletzt fordert Sie das Programm auf, sich anzumelden, entweder über Ihr [AdGuard-Konto](https://auth.adguardaccount.com/login.html) oder über soziale Netzwerke (Apple, Google, Facebook). Danach können Sie AdGuard VPN für Windows verwenden.

## Startseite

![Startseite](https://cdn.adguardvpn.com/content/kb/vpn/windows/saved_locations.png)

Das auffälligste Element auf dem **Startbildschirm** ist die Schaltfläche *Verbinden/Trennen*, unter der Sie den ausgewählten Server sehen können. Auf der rechten Seite des Bildschirms sehen Sie eine Liste der verfügbaren Standorte. Der schnellste Standort, d. h. der mit dem niedrigsten Ping, wird am Anfang der Liste angezeigt. Es gibt auch eine Schaltfläche zum Aktualisieren, auf die Sie klicken können, wenn Standorte offline sind.

Sie können auch Ihre bevorzugten Standorte speichern, um schnell darauf zugreifen zu können. Bewegen Sie einfach den Mauszeiger über einen Standort, klicken Sie auf das angezeigte Lesezeichensymbol, und der Standort wird gespeichert. Die ausgewählten Standorte werden dann im Tab *Gespeicherte* angezeigt.

Am oberen Rand des Bildschirms befindet sich ein Navigationsfeld mit fünf Tabs: **Startseite**, **Ausschlüsse**, **Statistiken**, **Support** und **Einstellungen**.

## Ausschlüsse

Standardmäßig funktioniert AdGuard VPN für Windows überall. Sie können Websites und Apps, die Sie vom VPN-Tunnel ausschließen möchten, zur Liste der Ausschlüsse hinzufügen. Sie können zudem festlegen, dass AdGuard VPN nur auf den in der Liste der Ausschlüsse aufgeführten Websites und Anwendungen funktioniert. Bitte beachten Sie, dass diese beiden Listen unabhängig voneinander sind.

![Ausschlüsse *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_screen.png)

Sie können Websites zu Ausschlüssen **manuell** hinzufügen, indem Sie ihre Domains eingeben. Die App bietet Ihnen auch die Möglichkeit, beliebte Websites **aus der Liste** auszuwählen.

![Ausschlüsse aus der Liste hinzufügen *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Beim manuellen Hinzufügen von Domains sollten Sie einige Details beachten. Wenn Sie beispielsweise die Domain `google.com` manuell ausschließen, werden alle Subdomains `*.google.com` ebenfalls zur Ausschlussliste hinzugefügt. Domainnamen mit anderen Top-Level-Domains wie `google.de` oder `google.nl` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen.

:::

Wir empfehlen die Verwendung der Option **Aus der Liste**. Websites werden in acht Kategorien eingeteilt: Soziale Netzwerke, Messenger, Video- und Musik-Streaming-Dienste, Spiele, Shopping, Suchmaschinen und Arbeitskommunikationstools. Wir haben dort alle Domainnamen und Subdomains platziert, die sich auf jede Plattform beziehen.

:::info Browser zu Ausschlüssen hinzugefügt

Ab der Version 2.4 werden alle Browser automatisch zur Liste der Ausschlüsse hinzugefügt, wenn das VPN nur für ausgewählte Apps und Websites aktiv ist. Diese Änderung bringt mehr Komfort für die Nutzer, die oft verwirrt waren und nicht wussten, ob sie ihre Browser als Anwendungen betrachten sollten oder nicht. Dies gilt unter den folgenden Bedingungen:

- Man hat AdGuard VPN zum ersten Mal installiert
- Man hat die Ausschlusseinstellungen vor v2.4 nicht geändert

:::

### Ausschlusslisten importieren/exportieren

Um die Ausschlussliste von AdGuard VPN für Windows auf Ihren Computer zu exportieren, klicken Sie auf **Ausschlüsse exportieren**, wählen Sie den Ordner aus, in dem die Liste gespeichert werden soll, und klicken Sie auf **Speichern**. Das Archiv `exclusions.zip` mit zwei `.txt`-Dateien wird heruntergeladen, eine für jede der Listen. Sie können sie bearbeiten, indem Sie neue Ausschlüsse hinzufügen oder alte löschen.

Öffnen Sie auf dem Zielgerät AdGuard VPN, klicken Sie auf *Ausschlüsse* und wählen Sie *Websites* oder *Apps*. Klicken Sie auf *Ausschlüsse importieren* und wählen Sie das empfangene Archiv aus.

## Statistiken

![Bildschirm Statistiken *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

Der Statistikenbildschirm zeigt detaillierte Informationen zu Ihrer Datennutzung, kategorisiert nach Standort und App. Es werden am häufigsten genutzten Standorte und Apps hervorgehoben. Sie können Statistiken für verschiedene Zeiträume abrufen: täglich, monatlich oder für die gesamte Zeit, in der Sie AdGuard VPN für Windows genutzt haben.

Entscheidend ist, dass all diese Informationen ausschließlich auf Ihrem Gerät gespeichert werden, so dass nur Sie sie sehen können. Der Zugriff auf die Statistikfunktion ist nur mit einem AdGuard VPN-Abonnement möglich.

## Einstellungen

![Einstellungen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

Der fünfte Tab enthält Abschnitte, mit deren Hilfe Sie die App anpassen können.

### App-Einstellungen

![App-Einstellungen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Im Abschnitt **App-Einstellungen** können Sie die Sprache der App einstellen und **Kill Switch** (Not‐Trennung) aktivieren, der den Zugriff auf das Internet sperrt, wenn Ihre VPN-Verbindung unterbrochen wird. Dies ist erforderlich, um zu verhindern, dass Eindringlinge auf Ihre Daten zugreifen können, wenn Sie ohne VPN-Schutz mit einem öffentlichen WLAN oder einem mobilen Netzwerk verbunden sind.

Sie können auch die folgenden Funktionen mit einem einzigen Klick aktivieren: **Automatisch aktualisieren**, **AdGuard VPN zusammen mit Windows starten**, **Automatisch beim App-Start verbinden** und auch erlauben, anonymisierte App-Nutzungsdaten zu sammeln, damit das AdGuard-Team Informationen über potenzielle Probleme mit der Benutzerfreundlichkeit erhält. Hier können Sie das Design ändern: **Hell**, **System**oder **Dunkel**.

Unten auf der Seite befinden sich zwei Bereiche: **DNS-Server** und **Erweiterte Einstellungen**.

#### DNS-Server

Im Tab **DNS-Server** können Sie Ihren eigenen DNS-Server hinzufügen — manuell oder aus der Liste. Sie können einen DNS-Server von einem beliebigen Anbieter einrichten. Wir empfehlen, [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns) hinzuzufügen — zusätzlich zu den Standardfunktionen bietet er Schutz vor Werbung, Tracking und Phishing.

#### Erweiterte Einstellungen

Es ist durchaus möglich, AdGuard VPN für Windows zu verwenden, ohne die erweiterten Einstellungen jemals aufzurufen. Aber sie können nützlich sein, wenn Sie bereit sind, sich die Zeit zu nehmen, um zu lernen, was sie tun.

##### Betriebsmodus

Trotz der Tatsache, dass es zwei Betriebsmodi gibt – VPN und SOCKS5 – empfehlen wir Ihnen, nur den standardmäßig ausgewählten (VPN) zu verwenden. Wenn der **VPN-Modus** aktiviert ist, wird der gesamte Datenverkehr Ihres Geräts über AdGuard VPN geleitet, während im **SOCKS5-Modus** AdGuard VPN einen lokalen Proxyserver verwendet, der von anderen Apps verwendet werden kann, um ihren Datenverkehr umzuleiten.

##### Protokollierungsstufe

Es stehen zwei Protokollierungsstufen zur Auswahl: **Standard-Aufzeichnung** und **Vollständige Aufzeichnung**. Die erste Option ist standardmäßig aktiviert. Die Option **Vollständige Aufzeichnung** sollte nur aktiviert werden, wenn unser Support-Team Sie darum gebeten hat. Die Verwendung der App in diesem Modus über einen längeren Zeitraum führt zu einem erhöhten Akkuverbrauch.

Alle Protokolle werden lokal auf Ihrem Gerät gespeichert und Sie können sie bei Bedarf an das Support-Team senden.

##### Post-Quanten-Kryptographie

![Post-Quanten-Kryptographie *border](https://cdn.adtidy.org/blog/new/qe7fgimage_3.png)

Diese Funktion verschlüsselt Ihren Datenverkehr so, dass selbst Quantencomputer ihn nicht abfangen können.

##### AdGuard VPN-Protokoll

![VPN-Protokoll auswählen *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.7/auto_en.png)

Standardmäßig verwendet das AdGuard VPN-Protokoll die dynamische VPN-Protokollauswahl (Option *Automatisch auswählen*). Das bedeutet, dass AdGuard VPN automatisch ermittelt, welches Protokoll — HTTP2/TLS oder HTTP3/QUIC — Ihnen die beste Leistung bietet, und sofort darauf umschaltet. Dies verbessert die Geschwindigkeit und Stabilität des VPN, was besonders in Regionen hilfreich ist, in denen die Nutzung von VPN eingeschränkt oder unzuverlässig ist.

Wenn Sie möchten, können Sie AdGuard VPN so einstellen, dass nur das HTTP2/TLS- oder HTTP3/QUIC-Protokoll verwendet wird, anstelle der Option *Automatisch auswählen*. Jedes Protokoll hat seine Vorteile, aber die beste Wahl kann je nach Standort, Netzwerkbedingungen und dem Server, mit dem Sie sich verbinden, unterschiedlich sein.

##### WinTun verwenden

WinTun ist ein Traffic-Routing-Treiber, der häufig für VPN-Implementierungen unter Windows verwendet wird und die Qualität von VPN-Verbindungen durch die Erstellung eines virtuellen Netzwerkadapters verbessert. Standardmäßig verwendet AdGuard VPN den regulären WFP-Treiber (und TDI-Treiber für Windows 7).

#### Subnetz-Ausschlüsse

Mit dieser Funktion können Sie Subnetze hinzufügen, um den Datenverkehr von bestimmten Geräten, die mit Ihrem Netzwerk verbunden sind, auszuschließen. Zum Beispiel Ihr Staubsaugerroboter.

## Andere Tabs

### Über das Programm

Im Tab **Über die App** finden Sie Informationen zur aktuellen Version von AdGuard VPN für Windows, eine Schaltfläche zum Aktualisieren sowie Links zur AdGuard VPN-Website, zum Endbenutzer-Lizenzvertrag und zu der Datenschutzerklärung.

### Konto

Hier finden Sie Informationen zu Ihrem Lizenzstatus sowie einen Link zu Ihrem persönlichen AdGuard-Konto, wo Sie Ihre aktuellen Abonnements verwalten und neue erwerben können.

## Support

Dieser Tab soll die Fragen lösen: Dort können Sie einen Link zur FAQ-Seite finden, einen Bug melden oder Feedback hinterlassen und Protokolle exportieren, wenn das Support-Team Sie darum bittet.
