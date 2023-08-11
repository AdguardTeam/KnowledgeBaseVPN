---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für Windows?

Ein VPN, Akronym für „Virtuelles Privates Netzwerk“, ist ein Dienst, der Ihre Internetverbindung sicher macht und Ihnen hilft, online anonym zu bleiben. Wie funktioniert VPN? Jedes Mal, wenn Sie eine Website besuchen, ohne ein VPN zu verwenden, kann Ihr ISP dies sehen. Er weiß, wer Sie sind und wonach Sie suchen, und kann diese Daten sammeln und verkaufen. Auch die Website, die Sie besucht haben, kann Ihre Aktivitäten verfolgen. Wenn Sie eine VPN-App aktivieren, leitet sie Ihren Datenverkehr durch einen verschlüsselten Tunnel zu einem Remote-VPN-Server um, wodurch Ihre Privatsphäre geschützt wird — Der ISP weiß nicht, wohin Sie eine Anfrage gesendet haben, und die Website weiß nicht, woher Sie gekommen sind.

## Was AdGuard VPN für Windows leistet

- Schützt vor dem Abfangen des Netzwerkverkehrs (Spoofing). AdGuard VPN erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem Remote-Server. Ihr gesamter Internetverkehr wird durch diesen Tunnel geleitet, sodass Ihre Daten unterwegs geschützt sind. Und dank des [einzigartigen Protokolls von AdGuard](/general/adguard-vpn-protocol.mdx) ist Ihnen eine schnelle und sichere Verbindung garantiert.

- Maskiert Ihre IP-Adresse. Ihre wahre IP-Adresse ist für Cyberkriminelle der Schlüssel zu Ihren persönlichen Daten. Ihr Name, Ihre E-Mail-Adresse, Telefonnummer und Kreditkarteninformationen können Betrügern in die Hände fallen, wenn Sie Ihre IP-Adresse nicht verbergen. Mit AdGuard VPN wird, wie bereits erwähnt, Ihr gesamter Datenverkehr durch einen verschlüsselten Tunnel geleitet und gelangt zum VPN-Server. Daher scheint es von außen, dass Ihr Gerät die IP-Adresse dieses VPN-Servers hat.

- Verbirgt Ihren tatsächlichen Standort. Wenn Sie einen der AdGuard VPN-Server auswählen, werden Sie sofort zu dessen Standort „teleportiert“. Was bedeutet das für Sie? Zum Beispiel die Möglichkeit, ein Hotel zu den Preisen der Einheimischen zu buchen oder sich vor geografisch ausgerichteter Werbung zu verstecken.

AdGuard VPN für Windows hat viele Vorteile, daher haben wir ihnen [separaten Artikel](/general/why-adguard-vpn.md) gewidmet. Hier wollen wir uns jedoch mehr auf die Anwendung selbst und ihre Funktionsweise konzentrieren.

## So verwenden Sie AdGuard VPN für Windows

Um AdGuard VPN für Windows zu nutzen, laden Sie die App von [unserer Website](https://adguard-vpn.com/welcome.html) herunter. Die Installation dauert nicht länger als eine Minute – und Sie sehen ein Dialogfenster, in dem Sie mindestens ein Kästchen ankreuzen müssen, um die Bedingungen der Benutzervereinbarung und der Datenschutzerklärung anzuwenden. Es liegt an Ihnen zu entscheiden, ob AdGuard anonymisierte Daten über Ihre App-Nutzung sammeln wird. Zuletzt fordert Sie das Programm auf, sich anzumelden, entweder über [AdGuard-Konto](https://auth.adguard.com/login.html) oder über soziale Netzwerke (Apple, Google, Facebook). Danach können Sie AdGuard VPN für Windows verwenden.

## Startseite

![AdGuard VPN für Windows • Startseite](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Das auffälligste Element auf dem **Startbildschirm** ist die Schaltfläche Verbinden/Trennen von AdGuard VPN. Oberhalb der Schaltfläche sehen Sie den [Modus](#exclusions), in dem die Anwendung läuft, und darunter sehen Sie den ausgewählten Server. Auf der rechten Seite des Bildschirms finden Sie alle verfügbaren Standorte. Der schnellste Standort, d. h. der mit dem niedrigsten Ping, wird am Anfang der Liste angezeigt.

Oben auf dem Bildschirm befindet sich ein Navigationsbereich mit vier Tabs: **Startseite**, **Ausschlüsse**, **Support**, **Einstellungen**.

## Ausschlüsse

AdGuard VPN für Windows kann in zwei Modi arbeiten: **Allgemein** oder **Selektiv**. Was bedeuten sie? Wenn Sie möchten, dass die App überall mit Ausnahme einiger Websites funktioniert, aktivieren Sie den **Allgemeinen Modus** und listen Sie die Websites auf, die Sie vom Tunnel ausschließen möchten. Der **Selektive Modus** hat den gegenteiligen Effekt: Er aktiviert AdGuard VPN nur auf den in der Ausschlussliste angegebenen Websites. Bitte beachten Sie, dass die Ausschlusslisten dieser beiden Modi unabhängig voneinander sind.

![Ausschlüsse](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Sie können Websites zu Ausschlüssen **manuell** hinzufügen, indem Sie ihre Domains eingeben. Die App bietet Ihnen auch die Möglichkeit, beliebte Websites **aus der Liste** auszuwählen.

![App-Ausschlüsse](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Ausschlüsse aus der Liste hinzufügen](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Beim manuellen Hinzufügen von Domains sollten Sie einige Nuancen berücksichtigen. Wenn Sie beispielsweise die Domain `google.com` manuell ausschließen, werden alle Subdomains `*.google.com` ebenfalls zur Ausschlussliste hinzugefügt. Domainnamen mit anderen Top-Level-Domains wie `google.es` oder `google.it` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen.

Wir empfehlen die Verwendung der Option **Aus der Liste**. Websites werden in acht Kategorien eingeteilt: Soziale Netzwerke, Messenger, Video- und Musik-Streaming-Dienste, Spiele, Shopping, Suchmaschinen und Arbeitskommunikationstools. Wir haben dort alle Domainnamen und Subdomains platziert, die sich auf jede Plattform beziehen.

### Ausschlusslisten importieren/exportieren

Um die Ausschlussliste von AdGuard VPN für Windows auf Ihren Computer zu exportieren, klicken Sie auf **Ausschlüsse exportieren**, wählen Sie den Ordner aus, in dem die Liste gespeichert werden soll, und klicken Sie auf **Speichern**. Ein Archiv `exclusions.zip` mit zwei `.txt` Dateien wird heruntergeladen, eine für jede der Listen – **Allgemein** und **Selektiv**. Sie können sie bearbeiten, indem Sie neue Ausschlüsse hinzufügen oder alte löschen.

Um die Ausschlusslisten auf ein anderes Gerät zu übertragen, senden Sie die Datei `.zip` an ihr Ziel. Öffnen Sie AdGuard VPN auf dem Gerät, auf dem Sie das Archiv mit den vorgefertigten Ausschlusslisten importieren möchten, klicken Sie auf *Ausschlüsse*, dann auf *Ausschlüsse importieren* und wählen Sie das zuvor gesendete Archiv aus.

## Einstellungen

![Einstellungen](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

Die vierte Tab der Tableiste der App enthält Abschnitte, mit denen Sie die App anpassen können. Schauen wir uns zwei von ihnen genauer an: **App-Einstellungen** und **App-Ausschlüsse**.

### App-Einstellungen

![App-Einstellungen](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

Im Abschnitt **App-Einstellungen** können Sie die Sprache der App einstellen und **Kill Switch** (Not‐Trennung) aktivieren, der den Zugriff auf das Internet sperrt, wenn Ihre VPN-Verbindung unterbrochen wird. Dies ist erforderlich, um zu verhindern, dass Eindringlinge auf Ihre Daten zugreifen können, wenn Sie ohne VPN-Schutz mit einem öffentlichen WLAN oder einem mobilen Netzwerk verbunden sind.

Sie können auch die folgenden Funktionen mit einem einzigen Klick aktivieren: **Automatisch aktualisieren**, **AdGuard VPN zusammen mit Windows starten**, **Automatisch beim App-Start verbinden** und auch erlauben, anonymisierte App-Nutzungsdaten zu sammeln, damit das AdGuard-Team Informationen über potenzielle Probleme mit der Benutzerfreundlichkeit erhält. Hier können Sie auch das Thema ändern: **Hell**, **System**, oder **Dunkel**.

Unten auf der Seite befinden sich zwei Bereiche: **DNS-Server** und **Erweiterte Einstellungen**.

#### DNS-Server

Im Tab **DNS-Server** können Sie Ihren eigenen DNS-Server hinzufügen. Sie können einen DNS-Server von einem beliebigen Anbieter einrichten. Wir empfehlen, [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns) hinzuzufügen — zusätzlich zu den Standardfunktionen bietet er Schutz vor Werbung, Tracking und Phishing.

#### Erweiterte Einstellungen

Es ist durchaus möglich, AdGuard VPN für Windows zu verwenden, ohne die erweiterten Einstellungen jemals aufzurufen, aber sie können nützlich sein, wenn Sie bereit sind, sich die Zeit zu nehmen, um zu lernen, was sie tun.

##### Funktionsweise

Trotz der Tatsache, dass es zwei Betriebsmodi gibt – VPN und SOCKS5 – empfehlen wir Ihnen, nur den standardmäßig ausgewählten (VPN) zu verwenden. Wenn der **VPN-Modus** aktiviert ist, wird der gesamte Datenverkehr Ihres Geräts über AdGuard VPN geleitet, während im **SOCKS5-Modus** AdGuard VPN einen lokalen Proxyserver verwendet, der von anderen Apps verwendet werden kann, um ihren Datenverkehr umzuleiten.

##### Protokollierungstiefe

Es stehen zwei Protokollierungsstufen zur Auswahl: **Standard-Aufzeichnung** und **Vollständige Aufzeichnung**. Die erste Option ist standardmäßig aktiviert. Die Option **Vollständige Aufzeichnung** sollte nur aktiviert werden, wenn unser Support-Team Sie darum gebeten hat. Die Verwendung der App in diesem Modus über einen längeren Zeitraum führt zu einem erhöhten Akkuverbrauch.

Alle Protokolle werden lokal auf Ihrem Gerät gespeichert und Sie können sie bei Bedarf an das Support-Team senden.

##### QUIC verwenden

Dies ist eine experimentelle Funktion, die es AdGuard ermöglicht, das erweiterte QUIC-Verschlüsselungsprotokoll zu verwenden. Es hat viele Vorteile, aber der bemerkenswerteste ist, dass es die Verbindungsqualität unter nicht idealen Bedingungen verbessern kann, beispielsweise bei der Nutzung des mobilen Internets oder bei der Verbindung mit öffentlichen WLAN-Netzwerken.

### App-Ausschlüsse

![Hinzufügen einer App zu Ausschlüssen](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

AdGuard VPN verschlüsselt nicht nur den Datenverkehr Ihrer Browser, sondern auch von anderen Apps, die auf Ihrem Gerät installiert sind. Wenn Sie bestimmte Apps aus dem Tunnel ausschließen möchten, setzen Sie sie auf die Liste **App-Ausschlüsse**.

## Andere Tabs

### Über das Programm

Die Registerkarte **Über das Programm** bietet Informationen über die aktuelle Version von AdGuard VPN für Windows, eine Update-Schaltfläche und einige nützliche Links: AdGuard VPN-Website, Forum, EULA und Datenschutzerklärung.

### Konto

Hier finden Sie Informationen zu Ihrem Lizenzstatus sowie einen Link zu Ihrem persönlichen AdGuard-Konto, wo Sie Ihre aktuellen Abonnements verwalten und neue erwerben können.

## Support

Diese Registerkarte soll die Fragen der Benutzer lösen: Dort können Sie einen Link zur FAQ-Seite finden, einen Fehler melden oder Feedback hinterlassen und Protokolle exportieren, wenn das Support-Team Sie darum bittet.
