---
title: AdGuard VPN für iPhone- und iPad-Apps automatisieren
sidebar_position: 1
sidebar_label: AdGuard VPN automatisieren
---

AdGuard VPN hat einen Abschnitt *Ausschlüsse* und zwei Betriebsmodi – *Allgemein* und *Selektiv*. Im *Allgemeinen Modus* funktioniert AdGuard VPN überall, mit Ausnahme von Websites, die zu Ausschlüssen hinzugefügt wurden. Umgekehrt funktioniert VPN im *Selektiven* Modus nirgendwo außer Websites, die in der Ausschlussliste aufgeführt sind. Beachten Sie, dass Sie für jeden Modus eine separate Liste erstellen müssen.

Wie Sie vielleicht bemerkt haben, können Sie zum Abschnitt *Ausschlüsse* nur Websites hinzugefügen. Um AdGuard VPN für Apps anzupassen, müssen Sie eine andere Funktion verwenden. Unsere Desktop-Apps haben das Modul *Split-Tunneling* und die App für Android hat *App-Einstellungen*,  mit denen Sie entscheiden können, in welchen Apps AdGuard VPN laufen soll.

Aber wie so oft, ist es aufgrund einer Reihe technischer Nuancen zumindest im Moment unmöglich, eine so nützliche Funktion für iOS zu implementieren. Deshalb bieten wir Ihnen eine alternative Möglichkeit, AdGuard VPN für Apps auf iPhones und iPads zu automatisieren.

## Automatische Aktivierung von AdGuard VPN einrichten

Wenn Sie ein VPN für eine oder mehrere Apps benötigen, richten Sie AdGuard VPN so ein, dass es beim Öffnen und Schließen automatisch ein- und ausgeschaltet wird. Wechseln Sie zur Registerkarte „Ausschlüsse“, wählen Sie den Modus „Allgemein“ und folgen Sie den Anweisungen. Hier beschreiben wir, wie Sie eine Automatisierung für Twitter erstellen, aber Sie können jede andere App auswählen.

![Anweisung. Teil 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Anweisung. Teil 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Anweisung. Teil 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Anweisung. Teil 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

Jetzt wird AdGuard VPN automatisch aktiviert, wenn Sie die Twitter-App starten. Nun müssen Sie einen weiteren Befehl erstellen, der AdGuard VPN automatisch deaktiviert, wenn Sie die App schließen.

## Automatische Deaktivierung von AdGuard VPN einrichten

![Anweisung. Teil 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Anweisung. Teil 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Anweisung. Teil 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Fertig! AdGuard VPN wird jetzt jedes Mal auf Ihrem Gerät aktiviert, wenn Sie die Twitter-App öffnen, und deaktiviert, wenn Sie sie schließen. Sie können die gleichen Schritte für jede andere App wiederholen. 