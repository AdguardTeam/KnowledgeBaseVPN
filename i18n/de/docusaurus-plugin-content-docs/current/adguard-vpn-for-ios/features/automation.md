---
title: Automation
sidebar_position: 2
sidebar_label: Automation
---

_Automation_ ist eine Funktion in der Kurzbefehle-App, die basierend auf den von Ihnen gewählten Bedingungen automatisch eine Aktion für Sie ausführt. Sie kann AdGuard VPN beispielsweise in dem Moment ausschalten, in dem Sie eine App öffnen, und wieder einschalten, wenn Sie diese App schließen.

Dies ist nützlich, wenn Sie AdGuard VPN für manche Apps deaktiviert haben möchten, für andere jedoch nicht. AdGuard VPN für iOS verfügt nicht über App-Ausschlüsse. Die Automation ist daher die beste Möglichkeit, dasselbe Ergebnis zu erzielen, ohne das VPN jedes Mal selbst ein- und ausschalten zu müssen.

Hier erfahren Sie, wie Sie eine Automation einrichten, die die Verbindung zu AdGuard VPN trennt, wenn Sie eine App öffnen, und sie wieder einschaltet, wenn Sie die App schließen.

## AdGuard VPN ausschalten, wenn Sie eine App öffnen

1. Gehen Sie in der Kurzbefehle-App auf _Automation_ und tippen Sie auf _Neue Automation_ oder auf das Pluszeichen (+) in der oberen rechten Ecke.
2. Wählen Sie _App_, wählen Sie eine oder mehrere Apps aus und aktivieren Sie _Wird geöffnet_.
3. Aktivieren Sie _Sofort ausführen_ und deaktivieren Sie _Bei Ausführung benachrichtigen_.
4. Tippen Sie auf _Weiter_, wählen Sie AdGuard VPN und wählen Sie _Trennen_.

![App-Automation](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

Um AdGuard VPN wieder einzuschalten, wenn Sie dieselbe App schließen, wiederholen Sie die obigen Schritte, wählen Sie jedoch in Schritt 2 _Wird geschlossen_ und legen Sie die Aktion in Schritt 4 auf _Verbinden_ fest.

## AdGuard VPN ausschalten, wenn Sie sich mit dem Heim-WLAN verbinden

Wenn Sie zu Hause kein VPN benötigen, können Sie festlegen, dass es sich ausschaltet, wenn Sie sich mit Ihrem Heim-WLAN verbinden, und wieder einschaltet, wenn Sie es verlassen.

1. Gehen Sie in der Kurzbefehle-App auf _Automation_ und tippen Sie auf _Neue Automation_ oder auf „+“ in der oberen rechten Ecke.
2. Wählen Sie _WLAN_, wählen Sie _Verbindet sich mit_ und wählen Sie Ihr Heimnetzwerk aus.
3. Aktivieren Sie _Sofort ausführen_ und _Nach Verbindungsabbruch ausführen_.
4. Tippen Sie auf _Weiter_, wählen Sie AdGuard VPN und wählen Sie _Trennen_.

![WLAN-Automation \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## AdGuard VPN wieder einschalten, wenn Sie das Heim-WLAN verlassen

Wiederholen Sie die obigen Schritte, wählen Sie jedoch _Trennt Verbindung mit_ statt _Verbindet sich mit_, aktivieren Sie _Sofort ausführen_ und legen Sie die Aktion auf _Verbinden_ fest.
