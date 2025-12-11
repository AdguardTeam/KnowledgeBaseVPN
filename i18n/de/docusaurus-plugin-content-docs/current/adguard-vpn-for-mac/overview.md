---
title: Funktionsübersicht
sidebar_position: 1
---

AdGuard VPN für Mac ist ein Desktop-VPN-Dienst. AdGuard VPN ist vollständig kompatibel mit AdGuard Werbeblocker, sie können zusammen verwendet werden und funktionieren nahtlos. Erfahren Sie, welche Funktionen die App zu bieten hat.

Beachten Sie, dass **Sie AdGuard VPN für Mac nur verwenden können, wenn Sie sich bei Ihrem AdGuard-Konto angemeldet haben**. Sie können sich entweder mit Ihrem AdGuard-Konto anmelden oder mit einem externen Konto, nämlich über Apple, Google oder Facebook. Stellen Sie sicher, dass Ihr externes Konto an dieselbe E-Mail-Adresse wie Ihr AdGuard-Konto gebunden ist. Wenn in Ihrem AdGuard-Konto ein passendes Abonnement vorhanden ist, wird es automatisch in der Desktop-App aktiviert. Sie haben noch kein AdGuard-Konto? Erstellen Sie es [hier](https://auth.adguard.com/registration.html).

:::note Kompatibilität

AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Big Sur (version 11).

:::

## Startbildschirm

![Startseite](https://cdn.adguardvpn.com/content/kb/vpn/mac/saved_locations.png)

Die erste Registerkarte ist der Bildschirm *Home*. Hier sehen Sie den aktuellen Status von AdGuard VPN, den ausgewählten Standort (falls aktiviert) und dessen Ping. Ping ist die Reaktionszeit eines VPN-Servers. Je niedriger die Zahl, desto schneller die Verbindung. Wenn VPN deaktiviert ist, wird der letzte Standort, mit dem Sie verbunden waren, am unteren Rand angezeigt.

Die schnellsten Standorte mit den niedrigsten Pings werden in der oberen rechten Ecke des Bildschirms angezeigt. Es gibt auch eine Schaltfläche zum Aktualisieren, auf die Sie klicken können, wenn Standorte offline sind. Unten sehen Sie die vollständige Liste der Standorte. Das Suchfeld erleichtert die Suche nach dem gewünschten Ort.

:::note

Kostenlose Benutzer können sich nur mit bestimmten Standorten verbinden, während andere gesperrt sind. Außerdem gibt es in der kostenlosen Version ein monatliches Traffic-Limit von 3 GB.

:::

### Gespeicherte Standorte

Im selben Tab können Sie Ihre bevorzugten Standorte speichern, um schnell auf sie zugreifen zu können.

Bewegen Sie einfach den Mauszeiger über einen Standort, klicken Sie auf das angezeigte Lesezeichensymbol, und der Standort wird gespeichert. Die ausgewählten Standorte werden dann im Tab *Gespeicherte* angezeigt.

![Gespeicherte Standorte](https://cdn.adguard-vpn.com/content/release_notes/vpn/mac/v2.5/Saved_locs_EN_2.png)

## Ausschlüsse

![Ausschlüsse](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

AdGuard VPN hat mehrere Funktionen, die es einzigartig machen, und eine davon sind definitiv die *Ausschlüsse*. Standardmäßig wird AdGuard VPN auf allen Websites und in allen Anwendungen ausgeführt, mit Ausnahme derjenigen, die in der Ausschlussliste aufgeführt sind. Sie können jedoch in den anderen Modus wechseln, so dass AdGuard VPN nur auf Websites und in Anwendungen aus der Ausschlussliste ausgeführt wird.

![Abschnitt: Ausschlüsse](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Außerdem können Sie nicht nur Websites zu Ausschlüssen hinzufügen, sondern auch aus den Listen beliebter Dienste auswählen. Die Listen sind in acht Kategorien unterteilt: Soziale Netzwerke, Messenger, Video- und Musik-Streaming-Dienste, Spiele, Shopping, Suchmaschinen und Tools für die Arbeitskommunikation. Jeder dieser Dienste kann mit einem Klick zu Ausschlüssen hinzugefügt werden. Dies ist besonders praktisch, wenn Sie den Selektiven Modus verwenden.

Ausschlussliste kann einfach konfiguriert werden. Wenn Sie eine Domain und einige ihrer Subdomains hinzugefügt haben, werden diese innerhalb der Root-Domain gruppiert. Beim Hinzufügen einer Root-Domain (`example.com`) wird auch ihre Maske hinzugefügt (`*.example.com`).

:::info Browser zu Ausschlüssen hinzugefügt

Ab der Version 2.4 werden alle Browser automatisch zur Liste der Ausschlüsse hinzugefügt, wenn das VPN nur für ausgewählte Apps und Websites aktiv ist. Diese Änderung bringt mehr Komfort für die Nutzer, die oft verwirrt waren und nicht wussten, ob sie ihre Browser als Anwendungen betrachten sollten oder nicht. Dies gilt unter den folgenden Bedingungen:

- Man hat AdGuard VPN zum ersten Mal installiert
- Man hat die Ausschlusseinstellungen vor v2.4 nicht geändert

:::

Wenn Sie einen Dienst hinzugefügt, etwas geändert oder entfernt haben und nun die ursprünglichen Einstellungen wiederherstellen möchten, drücken Sie einfach *Auf Standard zurücksetzen* neben der Domain — diese Aktion stellt alle fehlenden Domains wieder her und aktiviert alle Kontrollkästchen.

Außerdem können fertige Ausschlusslisten auf andere Geräte mit installiertem AdGuard VPN übertragen werden. Um Ausschlüsse zu exportieren, befolgen Sie die nachstehende Anleitung:

1. Öffnen Sie AdGuard VPN auf dem Gerät, von dem Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.
2. Im Archiv befinden sich zwei `.txt` Dateien, jeweils für Allgemeine und Selektive Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.
3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem Mac-Gerät auf Ihr iPhone importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr iPhone senden.
4. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, wo Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus. Fertig!

:::note

Archiv-Dateien von anderen Geräten können auf ähnliche Weise in Ihr AdGuard VPN für Mac importiert werden.

:::

## Statistiken

![Statistikbildschirm](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

Der Statistikbildschirm bietet detaillierte Informationen zum Datenverkehr nach Standort und App sowie zu den am häufigsten verwendeten Standorten und Apps. Lassen Sie sich die Daten für den Tag, den Monat oder den gesamten Zeitraum der Nutzung von AdGuard VPN für Mac anzeigen.

Wichtig zu erwähnen ist, dass alle Daten lokal auf Ihrem Gerät gespeichert werden, so dass niemand außer Ihnen Zugriff darauf hat. Die Statistikenfunktion ist mit einem AdGuard VPN-Abonnement verfügbar.

## Support

![Support-Bildschirm](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

Der vierte Tab ist *Support*. Antworten auf alle Fragen finden Sie in den [FAQ](https://adguard-vpn.com/welcome.html#faq) oder in der [Wissensdatenbank](/). Melden Sie einen Fehler, wenn Sie auf einen stoßen, oder [diskutieren Sie AdGuard auf einer der Plattformen](https://adguard.com/discuss.html). Und zögern Sie nicht, [Feedback zu unserem Produkt zu hinterlassen](https://surveys.adguard.com/vpn_mac/form.html).

## Einstellungen

![Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Schließlich kommen wir zum Einstellungen-Tab. Im Abschnitt *Über das Programm* können Sie die aktuelle Version von AdGuard VPN sehen, nach Updates suchen, unsere offizielle Website besuchen und sich mit der EULA und Datenschutzerklärung von AdGuard vertraut machen. Im Abschnitt *Lizenz* können Sie von kostenlos auf unbegrenzt upgraden, Ihr Abonnement verwalten oder sich abmelden. Und vor allem können Sie von hier aus auf *Allgemeine Einstellungen* zugreifen.

### App-Einstellungen

![App-Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Die ersten vier Grundfunktionen machen die App bequemer und benutzerfreundlicher, d.h. *Kill Switch*, *Automatisch aktualisieren*, *AdGuard VPN bei der Anmeldung starten* und *Automatisch beim App-Start verbinden*. Darüber hinaus können Sie zwischen hellen, dunklen und Systemdesigns wählen — letzteres entspricht dem Design auf Ihrem Mac.

Sie können AdGuard VPN auch erlauben, anonymisierte Absturzberichte, technische Daten und Interaktionsdaten zu sammeln und zu senden, um uns bei der Verbesserung der App zu unterstützen. Zu guter Letzt können Sie Protokolle von Ihrem Mac exportieren. Dies kann nützlich sein, wenn Sie Protokolle an Ihre Nachricht an den Support anhängen möchten.

### DNS-Server

![DNS-Server](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Hier können ein oder mehrere DNS-Server eingerichtet werden. Dies ist nützlich, wenn Sie sich nicht auf den Standard-DNS-Server Ihres Internetanbieters verlassen möchten. Wählen Sie einen aus der Liste der gängigen DNS-Dienste aus oder fügen Sie manuell einen eigenen Server hinzu. Wir empfehlen, AdGuard DNS hinzuzufügen, das nicht nur Ihren DNS-Verkehr verschlüsselt, sondern auch Anfragen an bösartige Websites identifiziert und an ein „schwarzes Loch“ umleitet.

### Erweiterte Einstellungen

![Erweiterte Einstellungen](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Protokollierungsebene

Es gibt nur zwei Protokollierungsebenen, aber wir empfehlen dringend, dass Sie die erste Standardebene verwenden. Die zweite Option (erweiterte Protokollierung) sollte nur nach Rücksprache mit unserem technischen Support eingestellt werden, um ein ungewöhnliches Programmverhalten aufzuzeichnen. Wenn Sie die erweiterte Protokollierungsstufe aktiviert haben, stellen Sie sicher, dass Sie nach der Aufzeichnung der Protokolle auf die Standardstufe umschalten.

#### Menüleistensymbol ausblenden

Diese Option befindet sich zwar in *Erweiterten Einstellungen*, kann aber bedenkenlos aktiviert werden. Sie können das AdGuard VPN-Symbol aus der Menüleiste ausblenden, es wird unsere App nicht daran hindern, im Hintergrund zu laufen.

##### AdGuard VPN-Protokoll

![VPN-Protokoll wählen](https://cdn.adtidy.org/content/release_notes/vpn/mac/v2.7/protocol_en.png)

Standardmäßig verwendet das AdGuard VPN-Protokoll die dynamische VPN-Protokollauswahl (Option *Automatisch auswählen*). Das bedeutet, dass AdGuard VPN automatisch ermittelt, welches Protokoll — HTTP2/TLS oder HTTP3/QUIC — Ihnen die beste Leistung bietet, und sofort darauf umschaltet. Dies verbessert die Geschwindigkeit und Stabilität des VPN, was besonders in Regionen hilfreich ist, in denen die Nutzung von VPN eingeschränkt oder unzuverlässig ist.

Wenn Sie möchten, können Sie AdGuard VPN so einstellen, dass nur das HTTP2/TLS- oder HTTP3/QUIC-Protokoll verwendet wird, anstelle der Option *Automatisch auswählen*. Jedes Protokoll hat seine Vorteile, aber die beste Wahl kann je nach Standort, Netzwerkbedingungen und dem Server, mit dem Sie sich verbinden, unterschiedlich sein.
