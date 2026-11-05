---
title: Kurzbefehle
sidebar_position: 1
sidebar_label: Kurzbefehle
---

Mit der in iOS integrierten Funktion „Kurzbefehle“ können Sie Ihre Verbindungen einfach verwalten, ohne AdGuard VPN öffnen zu müssen. Sie können einen Kurzbefehl für _Verbinden_, _Trennen_ oder _VPN ein/aus_ auf Ihrem Home-Bildschirm, im Kontrollzentrum oder in einem Widget platzieren oder einen Siri-Sprachbefehl einrichten, um sich mit Ihrer Stimme zu verbinden.

Kurzbefehle können auch komplexere Automationen beinhalten. Zum Beispiel funktioniert Ihre Banking-App möglicherweise nicht bei aktiviertem VPN, aber Sie möchten es für Instagram immer aktiviert lassen, oder Sie möchten, dass sich Ihr VPN im heimischen WLAN automatisch ausschaltet. Mit Kurzbefehlen können Sie diese Szenarien automatisieren.

## Bevor Sie beginnen

Stellen Sie sicher, dass:

- Sie haben die Kurzbefehle-App auf Ihrem iPhone oder iPad installiert;
- AdGuard VPN ist installiert;
- Sie sind bei AdGuard VPN angemeldet und haben ein VPN-Profil installiert.

## Verbinden oder trennen mit einem Fingertipp

AdGuard VPN bietet drei vorgefertigte Kurzbefehle: _Verbinden_, _Trennen_, _VPN ein/aus_. _Verbinden_ aktiviert das VPN und stellt eine Verbindung zu Ihrem zuletzt verwendeten Standort her. _Trennen_ schaltet das VPN aus. _VPN ein/aus_ wechselt zwischen beiden: Es verbindet, wenn das VPN ausgeschaltet ist, und trennt die Verbindung, wenn es eingeschaltet ist.

Diese Kurzbefehle finden Sie in der App „Kurzbefehle“: Unter iOS 16 finden Sie sie unter _App-Kurzbefehle_. Fügen Sie beliebige davon zu den drei unten aufgelisteten Stellen hinzu.

In iOS 27 finden Sie die AdGuard VPN-Kurzbefehle in der _Mediathek_ der Kurzbefehle-App unter _Apps_ → _AdGuard VPN_. Wenn die Kurzbefehle-App mit _Alle Kurzbefehle_ geöffnet wird, tippen Sie auf den Zurück-Pfeil in der oberen linken Ecke, um zur _Mediathek_ zurückzukehren.

![Kurzbefehle unter iOS 27](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/shortcuts_library_27.png)

### Home-Bildschirm

Um einen Kurzbefehl auf Ihrem Home-Bildschirm einzurichten, folgen Sie der Kurzanleitung in der AdGuard VPN-App. (_Einstellungen_ → _Kurzbefehle_ → _Kurzbefehle zum Home-Bildschirm hinzufügen_).

![In-App-Anleitung \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

Die Anleitungen variieren je nach iOS-Version. Hier sind die Anweisungen für iOS 16:

1. Öffnen Sie die Kurzbefehle-App und tippen Sie auf das Pluszeichen (+).
2. Tippen Sie auf _Aktion hinzufügen_ und wählen Sie _AdGuard VPN_.
3. Wählen Sie den gewünschten Kurzbefehl: _Mit VPN verbinden_, _VPN-Verbindung trennen_, _VPN-Verbindung aktivieren/deaktivieren_ oder _VPN-Status_.

![Kurzbefehl hinzufügen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut_ios_16.png)

So fügen Sie den Kurzbefehl zu Ihrem Home-Bildschirm hinzu.

1. Halten Sie den Kurzbefehl gedrückt und tippen Sie auf _Teilen_ → _Zum Home-Bildschirm_.
2. Passen Sie bei Bedarf den Namen und das Symbol des Kurzbefehls an und tippen Sie dann auf _Hinzufügen_. Der Kurzbefehl wird auf Ihrem Home-Bildschirm als 1x1-Symbol angezeigt.

![Zum Home-Bildschirm hinzufügen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen_ios_16.png)

### Kontrollzentrum

Sie können dem Kontrollzentrum einen AdGuard VPN-Kurzbefehl hinzufügen, um von überall auf dem Gerät schnellen Zugriff zu erhalten.

1. Öffnen Sie das Kontrollzentrum. Streichen Sie auf einem iPhone mit Face ID von oben rechts nach unten. Streichen Sie auf einem iPhone mit Home-Taste vom unteren Bildschirmrand nach oben.
2. Halten Sie einen leeren Bereich gedrückt und tippen Sie auf _Steuerelement hinzufügen_.
3. Suchen Sie _Kurzbefehle_ in der Liste, tippen Sie auf _Kurzbefehl ausführen_, tippen Sie dann auf _Auswählen_ und wählen Sie Ihren AdGuard VPN-Kurzbefehl aus. Der Kurzbefehl wird nun in Ihrem Kontrollzentrum angezeigt.

Hinweis: Die genauen Schritte können je nach iOS-Version variieren.

![Kurzbefehl zum Kontrollzentrum hinzufügen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Halten Sie einen leeren Bereich auf Ihrem Home-Bildschirm gedrückt, bis die Apps wackeln, und tippen Sie dann in der oberen linken Ecke auf _Bearbeiten_ → _Widget hinzufügen_.
2. Suchen Sie _Kurzbefehle_ in der Liste und wählen Sie eine Widget-Größe aus. Wir empfehlen, ein Widget zu wählen, das mindestens zwei Kurzbefehle anzeigen kann.
3. Tippen Sie auf _Widget hinzufügen_.
4. Tippen Sie im Bearbeitungsmodus auf das Widget, um das Konfigurationsmenü zu öffnen, stellen Sie _Ordner_ auf _Eigene_ und weisen Sie einem Platz _Mit VPN verbinden_ und dem anderen _VPN-Verbindung trennen_ zu.

![Kurzbefehl als Widget hinzufügen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## Mit einem Tippen jede App mit aktiviertem VPN öffnen

Wenn Sie das VPN für eine bestimmte App und sonst nichts eingeschaltet benötigen, können Sie einen benutzerdefinierten Kurzbefehl erstellen, der AdGuard VPN einschaltet und die App öffnet, die Sie öffnen möchten – alles mit nur einem Fingertipp. So richten Sie es ein.

1. Öffnen Sie die Kurzbefehle-App, tippen Sie auf das Pluszeichen (+) und suchen Sie nach AdGuard VPN. Fügen Sie die Aktion _VPN-Status_ hinzu.
2. Fügen Sie eine _Wenn_-Aktion hinzu. Kurzbefehle füllt die Bedingung automatisch für Sie aus: Der VPN-Status aus dem vorherigen Schritt wird übernommen und mit _Verbunden_ abgeglichen. Fügen Sie darin _App öffnen_ hinzu und stellen Sie die gewünschte App ein – zum Beispiel YouTube.
3. Fügen Sie unter _Sonst_ der Reihe nach drei Aktionen hinzu: _AdGuard VPN_ → _Mit VPN verbinden_, _Warten_ (auf 2 Sekunden einstellen) und _App öffnen_ (dieselbe App wie oben).
4. Tippen Sie oben auf den Namen, um ein eigenes Symbol und einen eigenen Namen festzulegen, und testen Sie den Kurzbefehl dann mit der Wiedergabetaste.
5. Fügen Sie den Kurzbefehl zum Home-Bildschirm hinzu, indem Sie auf den Namen tippen und _Zum Home-Bildschirm_ auswählen.

![Benutzerdefinierten Kurzbefehl hinzufügen](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Verbinden oder trennen mit Siri

Gehen Sie in der AdGuard VPN-App auf _Einstellungen_ → _Kurzbefehle_ → _Siri-Sprachbefehle einrichten_. Sie haben dann zwei Optionen: _Sprachbefehl zum Verbinden aufnehmen_ oder _Sprachbefehl zum Trennen aufnehmen_.

![Mit Siri verbinden](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Wählen Sie _Sprachbefehl zum Verbinden aufnehmen_ oder _Sprachbefehl zum Trennen aufnehmen_ und sprechen Sie dann den gewünschten Befehl ein, zum Beispiel „Hey Siri, verbinde mit AdGuard VPN“. Sobald der Befehl aufgenommen wurde, können Sie ihn jederzeit zu Siri sagen, um ihn auszuführen.

## AdGuard VPN für bestimmte Apps automatisieren

Einige Apps, wie etwa Banking-Apps, funktionieren nicht mit aktiviertem VPN. Richten Sie zwei Automationen ein, damit sich das VPN ausschaltet, während Sie die App verwenden, und wieder einschaltet, sobald Sie fertig sind. Wenn sie richtig eingerichtet ist, kann die Automation bequemer sein als das manuelle Starten eines Kurzbefehls – Sie müssen nicht auf ein Symbol auf dem Home-Bildschirm tippen, um den Kurzbefehl zu öffnen, das bloße Öffnen der App reicht aus. Außerdem können Sie mehrere Apps in einer Automation kombinieren. Sie können Automationen verwenden, um AdGuard VPN ein- oder auszuschalten, wenn Sie eine App öffnen, wenn Sie eine App schließen und wenn Sie sich mit Ihrem Heim-WLAN verbinden oder die Verbindung trennen.

[So richten Sie Automationen auf Ihrem iPhone oder iPad ein](/adguard-vpn-for-ios/features/automation/)
