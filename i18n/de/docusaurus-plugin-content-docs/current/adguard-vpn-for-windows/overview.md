---
title: Funktionsübersicht
sidebar position: 1
---

## Was ist AdGuard VPN für Windows

Ein VPN, Akronym für „virtuelles privates Netzwerk“, ist ein Dienst, der Ihre Internetverbindung sicher macht und Ihnen hilft, online anonym zu bleiben. Wie funktioniert VPN? Jedes Mal, wenn Sie eine Website besuchen, ohne ein VPN zu verwenden, kann Ihr ISP dies sehen. Er weiß, wer Sie sind und wonach Sie suchen, und kann diese Daten sammeln und verkaufen. Auch die Website, die Sie besucht haben, kann Ihre Aktivitäten verfolgen. Wenn Sie eine VPN-App aktivieren, leitet sie Ihren Datenverkehr durch einen verschlüsselten Tunnel zu einem Remote-VPN-Server um, wodurch Ihre Privatsphäre geschützt wird — Der ISP weiß nicht, wohin Sie eine Anfrage gesendet haben, und die Website weiß nicht, woher Sie gekommen sind.

**Was macht AdGuard VPN für Windows?**

* Schützt vor dem Abfangen des Netzwerkverkehrs (Spoofing). AdGuard VPN erstellt einen verschlüsselten Tunnel zwischen Ihrem Gerät und einem Remote-Server. Ihr gesamter Internetverkehr wird durch diesen Tunnel geleitet, sodass Ihre Daten unterwegs geschützt sind. Und dank des [einzigartigen Protokolls von AdGuard](/general/adguard-vpn-protocol.mdx) ist Ihnen eine schnelle und sichere Verbindung garantiert.

* Maskiert Ihre IP-Adresse. Ihre wahre IP-Adresse ist für Cyberkriminelle der Schlüssel zu Ihren persönlichen Daten. Ihr Name, Ihre E-Mail-Adresse, Telefonnummer und Kreditkarteninformationen können Betrügern in die Hände fallen, wenn Sie Ihre IP-Adresse nicht verbergen. Mit AdGuard VPN wird, wie bereits erwähnt, Ihr gesamter Datenverkehr durch einen verschlüsselten Tunnel geleitet und gelangt zum VPN-Server. Daher scheint es von außen, dass Ihr Gerät die IP-Adresse dieses VPN-Servers hat.

* Verbirgt Ihren tatsächlichen Standort. Wenn Sie einen der AdGuard VPN-Server auswählen, werden Sie sofort zu dessen Standort „teleportiert“. Was bedeutet das für Sie? Zum Beispiel die Möglichkeit, ein Hotel zu den Preisen der Einheimischen zu buchen oder sich vor geografisch ausgerichteter Werbung zu verstecken.

AdGuard VPN für Windows hat viele Vorteile, daher haben wir ihnen [separaten Artikel](/general/why-adguard-vpn.md) gewidmet. Unten konzentrieren wir uns mehr auf die App selbst und ihre Funktionsweise.

## Wie Sie AdGuard VPN für Windows verwenden können

Um AdGuard VPN für Windows zu nutzen, laden Sie die App von [unserer Website](https://adguard-vpn.com/en/welcome.html) herunter. Die Installation dauert nicht länger als eine Minute – und Sie sehen ein Dialogfenster, in dem Sie mindestens ein Kästchen ankreuzen müssen, um die Bedingungen der Benutzervereinbarung und der Datenschutzerklärung anzuwenden. Es liegt an Ihnen zu entscheiden, ob AdGuard anonymisierte Daten über Ihre App-Nutzung sammeln wird. Zuletzt fordert Sie das Programm auf, sich anzumelden, entweder über [AdGuard-Konto](https://auth.adguard.com/login.html) oder über soziale Netzwerke (Apple, Google, Facebook). Danach können Sie AdGuard VPN für Windows verwenden.


## Startbildschirm

![AdGuard VPN für Windows Startseite](https://cdn.adguard.com/content/kb/VPN/windows/main_en.png)

Das auffälligste Element auf dem **Startbildschirm** ist die Verbindungs-/Trennschaltfläche von AdGuard VPN. Darunter sehen Sie den [Modus](#exclusions), in dem die App ausgeführt wird und den ausgewählten Server. Auf der rechten Seite des Bildschirms finden Sie alle verfügbaren Standorte, und der schnellste (d. h. mit dem kürzesten Ping) wird ganz oben in der Liste aufgeführt.

Oben auf dem Bildschirm befindet sich ein Navigationsbereich mit vier Registerkarten: **Startseite**, **Ausschlüsse**, **Support**, **Einstellungen**. Nun sehen wir uns die einzelnen Registerkarten genauer an.


## Ausschlüsse

AdGuard VPN für Windows kann in zwei Modi arbeiten: **Allgemein** oder **Selektiv**. Was bedeuten sie? Wenn Sie möchten, dass die App auf allen Sites mit Ausnahme einiger weniger funktioniert, aktivieren Sie den **Allgemeinen Modus** und listen Sie die Ressourcen auf, die Sie vom Tunnel ausschließen möchten. Der **Selektive Modus** hat den gegenteiligen Effekt: Er aktiviert AdGuard VPN nur auf den in der Ausschlussliste angegebenen Websites. Bitte beachten Sie, dass die Ausschlusslisten dieser beiden Modi unabhängig voneinander sind.

![Ausschlüsse](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

Es gibt zwei Möglichkeiten, Ausschlusslisten zu erstellen: **Manuell** und **Aus der Liste**. Klicken Sie auf die Zeile **Website hinzufügen** und wählen Sie das bevorzugte Format zum Hinzufügen von Websites zu den Ausschlüssen.

![App-Ausschlüsse](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Ausschlüsse aus der Liste hinzufügen](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> Beim manuellen Hinzufügen von Domains sollten Sie einige Nuancen berücksichtigen. Wenn Sie beispielsweise die Domain `google.com` manuell ausschließen, werden alle Subdomains `*.google.com` ebenfalls zur Ausschlussliste hinzugefügt. Domainnamen mit anderen Top-Level-Domains wie `google.es` oder `google.it` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen.

Wir empfehlen, die Option **Aus der Liste** zu verwenden, um unnötige Schwierigkeiten zu vermeiden. Wir haben bereits acht verschiedene Kategorien beliebter Dienste für Sie gruppiert: Soziale Netzwerke, Messenger, Video- und Musik-Streaming-Dienste, Spiele, Shopping, Suchmaschinen und Arbeitskommunikationstools. Wir haben dort alle Domainnamen und Subdomains platziert, die sich auf jede Plattform beziehen. Auf diese Weise können Sie sicher sein, dass Sie keinen Dienst oder keine Domain vergessen haben, die Sie weiterhin verwenden möchten, während das VPN aktiviert ist, oder umgekehrt.

### Import-/Export der Ausschlüsse

Auf der Registerkarte **Ausschlüsse** auf der rechten Seite des Bildschirms gibt es einen Abschnitt **Aktionen**. Es kann nützlich sein, wenn Sie vorgefertigte Ausschlusslisten exportieren oder importieren müssen.

Um die Ausschlussliste von AdGuard für Windows auf Ihren Computer zu exportieren, klicken Sie auf **Ausschlüsse exportieren**, wählen Sie den Ordner aus, in dem die Liste gespeichert werden soll, und klicken Sie auf **Speichern**. Ein Archiv `Exclusions.zip` mit zwei `.txt` Dateien wird heruntergeladen, eine für jede der Listen – **Allgemein** und **Selectiv**. Sie können sie bearbeiten, indem Sie neue Ausschlüsse hinzufügen oder alte löschen.

Um die Ausschlusslisten auf ein anderes Gerät zu übertragen, senden Sie die Datei `.zip` an ihr Ziel. Öffnen Sie AdGuard VPN auf dem Gerät, auf dem Sie das Archiv mit den vorgefertigten Ausschlusslisten importieren möchten, klicken Sie auf *Ausschlüsse*, dann auf *Ausschlüsse importieren* und wählen Sie das zuvor gesendete Archiv aus.

## Einstellungen

![Einstellungen](https://cdn.adguard.com/content/kb/VPN/windows/settings_en.png)

Die vierte Registerkarte der Registerkartenleiste der App enthält Abschnitte, mit denen Sie die App anpassen können. Schauen wir uns zwei von ihnen näher an: **Allgemein** und **Split-Tunneling**.


### Allgemein

Der Abschnitt **Allgemein** enthält viele nützliche Funktionen. Hier können Sie die App-Sprache einstellen und auch **Kill Switch** aktivieren, der den Zugriff auf das Internet blockiert, wenn Ihre VPN-Verbindung fehlschlägt. Dies ist erforderlich, um zu verhindern, dass Eindringlinge an Ihre Daten gelangen, wenn Sie sich ohne VPN-Schutz befinden, während Sie mit einem öffentlichen WLAN- oder Mobilfunk-Netz verbunden sind.

Sie können auch die folgenden Funktionen mit einem einzigen Klick aktivieren: **Automatisch aktualisieren**, **AdGuard VPN zusammen mit Windows starten**, **Automatisch beim App-Start verbinden** und auch erlauben, anonymisierte App-Nutzungsdaten zu sammeln. Hier können Sie auch das standardmäßige **helle Thema** in ein **dunkles Thema** ändern.

Unten auf der Seite befinden sich zwei Bereiche: **DNS-Server** und **Erweiterte Einstellungen**.

![DNS-Einstellungen und Erweiterte Einstellungen](https://cdn.adguard.com/content/kb/VPN/windows/settings_dns_and_advanced_en.png)

#### DNS-Server

Auf der Registerkarte **DNS-Server** können Sie Ihren eigenen benutzerdefinierten DNS-Server hinzufügen. Warum ist es nützlich? So müssen Sie sich nicht auf den Standard-DNS-Server verlassen, der oft von Ihrem ISP kontrolliert wird.

Sie können einen DNS-Server von jedem Anbieter einrichten. Wir empfehlen, [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns) hinzuzufügen — zusätzlich zu den Standardfunktionen bietet er Schutz vor Werbung, Tracking und Phishing.

#### Erweiterte Einstellungen

Es ist durchaus möglich, AdGuard VPN für Windows zu verwenden, ohne jemals die erweiterten Einstellungen zu berühren, aber manchmal können sie nützlich sein. Dafür sollten Sie aber zuerst lernen, was sie tun.

**Betriebsmodus**

Trotz der Tatsache, dass es zwei Betriebsmodi gibt – VPN und SOCKS5 – empfehlen wir Ihnen, nur den standardmäßig ausgewählten (VPN) zu verwenden. Wenn der **VPN-Modus** aktiviert ist, wird der gesamte Datenverkehr Ihres Geräts über AdGuard VPN geleitet, während im **SOCKS5-Modus** AdGuard VPN einen lokalen Proxyserver verwendet, der von anderen Apps verwendet werden kann, um ihren Datenverkehr umzuleiten.

**Protokollierungsebene**

Es stehen zwei Protokollierungsstufen zur Auswahl: **Standard-Aufzeichnung** und **Vollständige Aufzeichnung**. Die erste Option ist standardmäßig aktiviert. Die Option **Vollständige Aufzeichnung** sollte nur aktiviert werden, wenn unser Support-Team Sie darum gebeten hat. Die Verwendung der App in diesem Modus über einen längeren Zeitraum führt zu einem erhöhten Akkuverbrauch.

Alle Protokolle werden lokal auf Ihrem Gerät gespeichert und Sie können sie bei Bedarf an das Support-Team senden.

**QUIC verwenden**

Dies ist eine experimentelle Funktion, die es AdGuard ermöglicht, das erweiterte QUIC-Verschlüsselungsprotokoll zu verwenden. Es hat viele Vorteile, aber der bemerkenswerteste ist, dass es die Verbindungsqualität unter nicht idealen Bedingungen verbessern kann, beispielsweise bei der Nutzung des mobilen Internets oder bei der Verbindung mit öffentlichen WLAN-Netzwerken.


### Split-Tunneling

![Split-Tunneling](https://cdn.adguard.com/content/kb/VPN/windows/split_tunneling_en.png)

AdGuard VPN verschlüsselt nicht nur den Datenverkehr Ihrer Browser, sondern auch anderer auf Ihrem Computer installierter Apps. Wenn Sie bestimmte Apps von der Arbeit von AdGuard ausschließen möchten, setzen Sie sie auf die **Split-Tunneling** Liste.

## Andere Registerkarten

### Über das Programm

Die Registerkarte **Über das Programm** bietet Informationen über die aktuelle Version von AdGuard VPN für Windows, eine Update-Schaltfläche und einige nützliche Links: AdGuard-Website, Forum, EULA und Datenschutzerklärung.

### Über die Lizenz

Hier finden Sie Informationen zu Ihrem Lizenzstatus sowie einen Link zu Ihrem persönlichen AdGuard-Konto, wo Sie Ihre aktuellen Abonnements verwalten und neue erwerben können.

## Support

Auf dieser Registerkarte haben wir viele nützliche Links zusammengestellt: FAQ-Seite, Bewerbungs-Feedback-Formular, Social-Media-Seiten und **Wissensdatenbank**.