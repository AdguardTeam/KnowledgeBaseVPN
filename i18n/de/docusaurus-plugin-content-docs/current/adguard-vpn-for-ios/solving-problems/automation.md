---
title: AdGuard VPN für iPhone- und iPad-Apps automatisieren
sidebar_position: 1
sidebar_label: AdGuard VPN automatisieren
---

In AdGuard VPN für iOS gibt es keine App-Ausschlüsse. Es gibt jedoch eine Möglichkeit, AdGuard VPN für Apps auf iPhones und iPads zu automatisieren.

## Automatische Aktivierung von AdGuard VPN einrichten

Wenn Sie ein VPN für eine oder mehrere Apps benötigen, richten Sie AdGuard VPN so ein, dass es beim Öffnen und Schließen automatisch ein- und ausgeschaltet wird. Wechseln Sie zur Registerkarte „Ausschlüsse“, wählen Sie den Modus „Allgemein“ und folgen Sie den Anweisungen. Hier beschreiben wir, wie Sie eine Automatisierung für Twitter erstellen, aber Sie können jede andere App auswählen.

![Anweisung. Teil 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Laden Sie [die *Kurzbefehle*-App](https://apps.apple.com/us/app/shortcuts/id915249334) aus dem App Store herunter und gehen Sie zum Abschnitt *Automation*, indem Sie auf das Uhrensymbol unten auf dem Bildschirm tippen.
2. Tippen Sie auf die Schaltfläche *Persönliche Automation erstellen*, suchen Sie dann in der sich öffnenden Liste *App* und tippen Sie darauf.
3. Im nächsten Fenster überprüfen Sie, ob die Option *geöffnet wird* ausgewählt ist, und tippen Sie dann auf *Auswählen*, um die App auszuwählen.

![Anweisung. Teil 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Beginnen Sie mit der Eingabe des Namens der App (in unserem Fall ist es 𝕏 ( vormals Twitter) und wählen Sie sie aus. Tippen Sie auf *Fertig* und dann auf *Weiter* in der oberen rechten Ecke des Bildschirms. Tippen Sie im geöffneten Fenster auf *Aktion hinzufügen*.

![Anweisung. Teil 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Beginnen Sie mit der Eingabe von „AdGuard VPN“ und wählen Sie die AdGuard VPN-App aus. Tippen Sie im neuen Fenster auf *VPN-Verbindung einstellen*.

![Anweisung. Teil 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Stellen Sie sicher, dass die Variablen *Einschalten* lauten. Schalten Sie VPN-Verbindung *Ein* und tippen Sie auf *Weiter*.
7. Schieben Sie im nächsten Fenster den Schieberegler neben der Option *Vor Ausführen bestätigen* auf die inaktive Position. Bestätigen Sie Ihre Wahl und tippen Sie dann auf *Fertig*.

Jetzt wird AdGuard VPN automatisch aktiviert, wenn Sie die Twitter-App starten. Nun müssen Sie einen weiteren Befehl erstellen, der AdGuard VPN automatisch deaktiviert, wenn Sie die App schließen.

## Automatische Deaktivierung von AdGuard VPN einrichten

![Anweisung. Teil 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. Beginnen Sie in derselben App *Kurzbefehle* mit der Erstellung einer neuen Automatisierung: Tippen Sie auf *Automation* ➜ *Neue Automation* ➜ *Persönliche Automation* ➜ <0>App</0>.
2. Stellen Sie sicher, dass die Option „*geschlossen wird*“ ausgewählt ist, und deaktivieren Sie das Kontrollkästchen unter der benachbarten Option. Tippen Sie dann auf *Auswählen*.

![Anweisung. Teil 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Beginnen Sie mit der Eingabe von *Twitter* und wählen Sie die App aus. Tippen Sie dann auf *Fertig* in der oberen rechten Ecke des Bildschirms. Dann auf *Aktion hinzufügen* und wählen Sie AdGuard VPN.

![Anweisung. Teil 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. Tippen Sie im neuen Fenster auf *VPN-Verbindung einstellen*.
5. Dann auf das Wort *Ein*, sodass es sich in das Wort *Aus* ändert, und tippen Sie dann auf *Weiter* in der oberen rechten Ecke des Bildschirms.
6. Deaktivieren Sie die Option *Vor Ausführen bestätigen* und bestätigen Sie Ihre Auswahl. Tippen Sie dann auf *Fertig* in der oberen rechten Ecke des Bildschirms, um den Vorgang abzuschließen.

Fertig! AdGuard VPN wird jetzt jedes Mal auf Ihrem Gerät aktiviert, wenn Sie die Twitter-App öffnen, und deaktiviert, wenn Sie sie schließen. Sie können die gleichen Schritte für jede andere App wiederholen.
