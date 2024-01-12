---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für Android?

Ein VPN ist ein ideales Tool, das bei jedem Surfen im Internet Sicherheit und Anonymität bietet. [Wie funktioniert das?](/general/how-vpn-works) Ohne in die technischen Details zu gehen, kann gesagt werden, dass VPN eine sichere, verschlüsselte Verbindung (genannt Tunnel) zwischen dem Gerät eines Benutzers und einem externen VPN-Server herstellt. Auf diese Weise bleibt das Datengeheimnis gewahrt, ebenso wie die Anonymität des Nutzers, da ein fremder Beobachter die IP-Adresse des VPN-Servers sieht und nicht die IP des eigentlichen Nutzers.

**AdGuard VPN wird häufig für folgende Zwecke eingesetzt:**

- Schutz personenbezogener Daten auch bei Nutzung öffentlicher WLANs
- Verhindern der Verfolgung von Online-Aktivitäten durch Maskieren der IP-Adresse
- Ausblenden der tatsächlichen Geolokalisierung

AdGuard VPN für Android kann das alles für Sie tun — aber das ist noch nicht alles. Um herauszufinden, warum AdGuard VPN die bessere Option ist, lesen Sie [diesen Artikel](/general/why-adguard-vpn).

## Wie man AdGuard VPN für Android installiert

Laden Sie zunächst AdGuard VPN von [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) herunter und melden Sie sich bei Ihrem AdGuard-Konto an. Falls Sie es nicht haben, sollten Sie es [erstellen](https://auth.adguard.com/login.html). Sie können sich direkt mit Ihren AdGuard-Kontodaten anmelden. Oder tun Sie es über Google oder Facebook, wenn Ihr AdGuard-Konto mit der gleichen E-Mail-Adresse registriert wurde.

## Hauptseite

Der Hauptbildschirm zeigt den VPN-Status an (Verbunden/Getrennt). Außerdem gibt es die Schaltfläche *Verbinden/Trennen* und eine Liste der verfügbaren Server.

Jeder Server hat seinen Standort und seine Ping-Rate, die die Antwortzeit des Servers beschreibt. Je niedriger diese Rate ist, desto schneller ist die Verbindung. Die schnellsten Server stehen immer an der Spitze der Liste, die aus mehr als 50 Standorten in Dutzenden von Ländern besteht. Sie können sich mit dem schnellsten Server verbinden, indem Sie auf die Schaltfläche „*Verbinden*“ tippen oder einen Standort auswählen.

## Ausschlüsse

Wir haben alles getan, um Ihnen die Verwaltung Ihrer Website- und App-Ausschlusslisten zu erleichtern. AdGuard VPN funktioniert nur dort, wo Sie es wünschen.

### Ausschlusslisten

Mit Ausschlusslisten können Sie die VPN-Verbindung für bestimmte Websites und Anwendungen verwalten. Um auf die *Ausschlüsse* zuzugreifen, tippen Sie auf das zweite Symbol von links unten auf dem Bildschirm. Um zum Abschnitt *Ausschlüsse* zu gelangen, tippen Sie unten auf dem Bildschirm auf das zweite Symbol von links.

Standardmäßig funktioniert AdGuard VPN für alle Websites und Apps, mit Ausnahme derer, die zu den Ausnahmen hinzugefügt wurden. Sie können jedoch problemlos in den anderen Modus wechseln.

#### Für Websites

Sie können Domains (z. B. `google.com`) oder Subdomains (z. B. `*.google.com`) von Websites zu den *Ausschlüssen* auf drei Arten hinzufügen: Geben Sie sie manuell in der App oder direkt im Browser ein, indem Sie auf die Schaltfläche *Teilen* klicken, und wählen Sie AdGuard VPN in der geöffneten Liste unten aus oder aus integrierten Listen von Diensten, die nach Kategorien unterteilt sind.

![Ausschlüsse](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Beim manuellen Hinzufügen von Domains gibt es einige Nuancen. Wenn Sie beispielsweise die Domains `yahoo.com` manuell ausschließen, werden alle `*.yahoo.com` Subdomains ebenfalls in den Ausschlüssen aufgeführt. Domainnamen mit anderen Top-Level-Domains wie `yahoo.jp` oder `yahoo.fr` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen. In diesem Fall ist es sicherer, integrierte Dienstlisten zu verwenden, da wir dort alle Subdomains für jede Plattform ablegen.

:::

Da Sie Subdomains in Dienstlisten aktivieren können, wurden Kästchen hinzugefügt, die den Status jedes Dienstes widerspiegeln. Sie können sie auf dem Hauptbildschirm von *Ausschlüsse* links von jedem Dienstnamen sehen:

- **Vollständig aktiviert** wird durch ein weißes Häkchen auf grünem Hintergrund angezeigt
- **Teilweise aktiviert** (aktivierte Subdomains ohne die Hauptdomain) sind mit einem grünen Quadrat auf weißem Hintergrund gekennzeichnet
- **Vollständig deaktiviert** ist mit einem leeren Kästchen gekennzeichnet

 Gute Nachrichten: Sie können jederzeit zur Standardansicht der Dienstlisten zurückkehren, falls Sie dort Domains gelöscht oder deaktiviert haben.

![Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Eine weitere nützliche Funktion ist *Import/Export der Ausschlüsse*. Sie müssen nur vier Schritte machen:

1. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, von dem aus Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `adguard_vpn_exclusions.zip` wird heruntergeladen.
2. Das Archiv enthält zwei `.txt`-Dateien, eine für jede der Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.
3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem Windows-Gerät auf Ihr Android-Gerät importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Android-Gerät senden.
4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### Für Apps

Wie oben erwähnt, können Sie nicht nur Websites einfach zu den Ausschlüssen hinzufügen. Wählen Sie, für welche Anwendungen Sie AdGuard VPN benötigen und für welche nicht.

Im *Integrierten Modus* können Sie Apps nur über den AdGuard Ad Blocker verwalten.

![App-Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Einstellungen

Sie können *Einstellungen* erreichen, indem Sie auf das Zahnradsymbol unten rechts auf dem Bildschirm drücken. Der erste Abschnitt enthält *App-Einstellungen*: Konfigurieren Sie AdGuard VPN für Android nach Bedarf.

![App-Einstellungen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Autostart von AdGuard VPN

Der nach rechts geschaltete Schieberegler aktiviert einen AdGuard VPN-Autostart nach dem Start des Geräts.

### DNS-Server

DNS-Server übersetzen die Namen von Websites in etwas, das Browser verstehen können, nämlich in IP-Adressen. AdGuard VPN für Android bietet eine große Auswahl an DNS-Servern, jeder mit besonderen Eigenschaften. Zum Beispiel entfernt [AdGuard DNS](https://adguard-dns.io/kb/) Werbung und schützt Ihr Gerät vor Tracking, während AdGuard DNS Family Protection die Funktionen von AdGuard DNS mit Safe Search und dem Sperren von Inhalten für Erwachsene kombiniert. Es besteht auch die Möglichkeit, einen eigenen DNS-Server hinzuzufügen.

### Auto-Schutz

Diese Funktion aktiviert AdGuard VPN automatisch, wenn Ihr Gerät eine Verbindung zu einem Mobilfunk- oder WLAN-Netzwerk herstellt.

### Kill Switch

Sie können die Kill Switch-Funktion auf Ihrem Android-Gerät einrichten, indem Sie den einfachen Anweisungen auf dem Bildschirm folgen. Warum sollten Sie das tun? Wenn Ihre VPN-Verbindung aus irgendeinem Grund plötzlich unterbrochen wird, während Sie ein Mobilfunknetz oder öffentliches WLAN verwenden, beendet Kill Switch automatisch die Internetverbindung, um Ihre Informationen vor Angreifern zu schützen.

Beachten Sie, dass bei aktiviertem Kill Switch die *Apps-Einstellungen* und *Ausschlüsse* nicht funktionieren.

### Farbschema

Sie können das dunkle oder das helle Farbschema der App wählen.

![Farbschema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Erweiterte Einstellungen

Unter *Erweiterte Einstellungen* finden Sie vier Abschnitte.

Der *Betriebsmodus* ermöglicht es Ihnen, festzulegen, wie Ihr Datenverkehr weitergeleitet werden soll. Es gibt drei Modi: VPN, SOCKS5 und Integrierter Modus. Im Modus *VPN* wird der gesamte Datenverkehr über AdGuard VPN geleitet. Im *SOCKS5*-Modus betreibt AdGuard VPN einen lokalen Proxy-Server, der von anderen Anwendungen für das Traffic-Routing genutzt werden kann. Der *Integrierte Modus* ermöglicht das Zusammenwirken von AdGuard VPN und AdGuard Ad Blocker.

:::note

Einige AdGuard VPN-Funktionen sind im *Integrierten Modus* deaktiviert: DNS-Server, Kill Switch (Not-Trennung), automatischer Schutz und App-Ausschlüsse. In der AdGuard Ad Blocker App können Sie den DNS-Schutz verwalten und Apps über Ihren AdGuard VPN-Proxy leiten.

:::

Die nächsten beiden Abschnitte sind *Protokollierungsebene* und *Diagnosedaten*. In Bezug auf die erste Option wird nicht empfohlen, die erweiterte Protokollierungsebene zu aktivieren, es sei denn, dies wird von unserem Support-Team angefordert. Diagnosedaten, lokal gespeicherte technische Informationen über das Gerät und Verbindungen (IP-Adresse, ID, Ping usw.), können bei technischen Problemen an uns gesendet werden.

Der letzte Abschnitt von *Erweiterten Einstellungen* ist *Low-Level-Einstellungen*. Wir bitten Sie dringend, die Einstellungen in diesem Abschnitt nicht zu ändern, es sei denn, Sie sind hochqualifiziert oder wurden von unserem Support-Team dazu aufgefordert. Hier ist es möglich, die TUN-Schnittstellenprotokollierung oder das IPv6-Protokoll auf der VPN-Schnittstelle zu aktivieren, einen Proxy-Server-Port oder eine zu verwendende Internetprotokollversion auszuwählen.

:::note Kompatibilität

Die Option *IPv6 aktivieren* ist nur für Netzwerke verfügbar, die IPv6 unterstützen.

:::

### Support

Im Abschnitt *Support* können Sie Feedback hinterlassen, einen Fehler melden oder Protokolle und Systeminformationen zur weiteren Übermittlung an den Helpdesk exportieren.
