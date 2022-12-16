---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für Android

Ein VPN ist ein ideales Tool, das bei jedem Surfen im Internet Sicherheit und Anonymität bietet. [Wie funktioniert es?](/general/how-vpn-works.md) Ohne auf technische Details einzugehen, können wir sagen, dass VPN einen sicheren verschlüsselten Tunnel zwischen dem Computer oder Mobilgerät des Benutzers und einem Remote-VPN-Server erstellt. Auf diese Weise bleibt das Datengeheimnis gewahrt, ebenso wie die Anonymität des Nutzers, da ein fremder Beobachter die IP-Adresse des VPN-Servers sieht und nicht die IP des eigentlichen Nutzers.

**AdGuard VPN wird häufig für folgende Zwecke eingesetzt:**

* Schutz personenbezogener Daten auch bei Nutzung öffentlicher WLANs
* Verhindern der Verfolgung von Online-Aktivitäten durch Maskieren der IP-Adresse
* Ausblenden der tatsächlichen Geolokalisierung

AdGuard VPN für Android kann das alles für Sie tun — aber das ist noch nicht alles. Um herauszufinden, warum AdGuard VPN die bessere Option ist, lesen Sie [diesen Artikel](/general/why-adguard-vpn.md).

## Wie man AdGuard VPN für Android installiert

Laden Sie zunächst AdGuard VPN von [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) herunter und melden Sie sich bei Ihrem AdGuard-Konto an. Falls Sie es nicht haben, sollten Sie es [erstellen](https://auth.adguard.com/login.html). Sie können sich direkt mit Ihren AdGuard-Kontodaten anmelden. Oder tun Sie es über Google oder Facebook, wenn Ihr AdGuard-Konto mit der gleichen E-Mail-Adresse registriert wurde.


## Hauptbildschirm

Auf dem Hauptbildschirm gibt es zwei Punkte, die den Status der App (Verbunden/Getrennt) und den ausgewählten Ausschlussmodus ([Allgemein/Selektiv](#lists-of-exclusions)) widerspiegeln. Auf demselben Bildschirm gibt es auch eine Schaltfläche *Verbinden/Trennen* und eine Liste verfügbarer Server.

Jeder Server hat seinen Standort und seine Ping-Rate, die die Antwortzeit des Servers beschreibt. Je niedriger diese Rate ist, desto schneller ist Ihre Verbindung. Die schnellsten Optionen werden immer ganz oben auf der Liste angezeigt, die aus mehr als 50 Standorten in Dutzenden von Ländern besteht. Sie können sich mit dem schnellsten Server verbinden, indem Sie auf die Schaltfläche *Verbinden/Trennen* klicken oder einen Standort auswählen.


## Ausschlüsse

Wir haben alles getan, um Ihnen die Verwaltung Ihrer Website- und App-Ausschlusslisten zu erleichtern. AdGuard VPN funktioniert nur dort, wo Sie es wünschen.


### Ausschlusslisten

In den Ausschlusslisten können Sie Websites auswählen, für die das VPN aktiviert und für welche deaktiviert werden soll. Um zum Abschnitt *Ausschlüsse* zu gelangen, tippen Sie unten auf dem Bildschirm auf das zweite Symbol von links.

Es gibt zwei Modi: Im *Allgemeinen Modus* werden Sites von der Ausschlussliste ausgeschlossen, und im *Selektiven Modus* werden die Sites aufgeführt, auf denen AdGuard VPN funktioniert.

You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites to the *Exclusions* in three ways: enter them manually in the app, or right from the browser by clicking the *Share* button and selecting AdGuard VPN in the opened list below, or from built-in lists of services divided by categories.

![Ausschlüsse](https://cdn.adguard.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)
> Beim manuellen Hinzufügen von Domains gibt es einige Nuancen. Wenn Sie beispielsweise die Domains `yahoo.com` manuell ausschließen, werden alle `*.yahoo.com` Subdomains ebenfalls in den Ausschlüssen aufgeführt. Domainnamen mit anderen Top-Level-Domains wie `yahoo.jp` oder `yahoo.fr` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen. In diesem Fall ist es sicherer, integrierte Dienstlisten zu verwenden, da wir dort alle Subdomains für jede Plattform ablegen.

Da Sie Subdomains in Dienstlisten aktivieren können, haben wir Kästchen hinzugefügt, die den Status jedes Dienstes widerspiegeln – Sie können sie auf dem Hauptbildschirm von *Ausschlüssen* links neben jedem Dienstnamen sehen. Der Status **vollständig aktiviert** ist mit einem weißen Häkchen auf grünem Hintergrund gekennzeichnet, **vollständig deaktiviert** – mit einem grauen Kästchen und **teilweise aktiviert**, was bedeutet, dass ein oder mehrere Parameter geändert wurden – mit einem grünen Quadrat auf weißem Hintergrund. Gute Nachrichten: Sie können jederzeit zur Standardansicht der Dienstlisten zurückkehren, falls Sie dort Domains gelöscht oder deaktiviert haben.

![Ausschlüsse](https://cdn.adguard.com/content/kb/vpn/android/statuses.png)

Eine weitere nützliche Funktion ist *Import/Export der Ausschlüsse*. Sie müssen nur vier Schritte machen:

1. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, von dem aus Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `adguard_vpn_exclusions.zip` wird heruntergeladen.
2. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der *Allgemeinen* und *Selektiven* Listen. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.
3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem Windows-Gerät auf Ihr Android-Gerät importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Android-Gerät senden.
4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

![Import/Export](https://cdn.adguard.com/content/kb/vpn/android/imp-exp.png)

### Apps-Einstellungen

Wie oben erwähnt, können Sie nicht nur Websites einfach zu den Ausschlüssen hinzufügen. Wählen Sie, für welche Apps Sie AdGuard VPN benötigen und für welche nicht. Tippen Sie auf das Symbol neben dem Symbol *Ausschlusslisten* unten auf dem Bildschirm, um die App-Einstellungen zu öffnen. Standardmäßig funktioniert AdGuard VPN mit allen Apps, aber Sie können den Schieberegler neben jeder App in der Liste umschalten – und AdGuard VPN dafür deaktivieren.

Wenn der *Kompatibilitätsmodus* mit AdGuard aktiviert ist, können Sie Apps nur über den AdGuard-Werbeblocker verwalten. Wenn Sie also auf die Schaltfläche tippen, wird die AdGuard-App geöffnet.

![Apps-Einstellungen](https://cdn.adguard.com/content/kb/vpn/android/apps_settings.png)


## Einstellungen

Sie können *Einstellungen* erreichen, indem Sie auf das Zahnradsymbol unten rechts auf dem Bildschirm drücken. Der erste Abschnitt enthält *App-Einstellungen*: Konfigurieren Sie AdGuard VPN für Android nach Bedarf.

![Apps-Einstellungen](https://cdn.adguard.com/content/kb/vpn/android/app_settings.png)

### Autostart von AdGuard VPN

Der nach rechts geschaltete Schieberegler aktiviert einen AdGuard VPN-Autostart nach dem Start des Geräts.


### DNS-Server

Der Zweck des [Domain-Name-Systems](https://kb.adguard.com/en/general/dns-filtering#what-is-dns) (DNS) besteht darin, die Namen von Websites in etwas zu übersetzen, das Browser verstehen können — IP-Adressen. Diese Aufgabe wird von DNS-Servern ausgeführt. AdGuard VPN für Android bietet eine Auswahl aus mehreren DNS-Servern mit jeweils besonderen Eigenschaften. Zum Beispiel entfernt [AdGuard DNS](https://kb.adguard.com/en/dns/overview) Werbung und schützt Ihr Gerät vor Tracking, während AdGuard DNS Family Protection die Funktionen von AdGuard DNS mit SafeSearch und dem Blockieren von Inhalten für Erwachsene kombiniert. Es besteht auch die Möglichkeit, einen eigenen DNS-Server hinzuzufügen.

### Auto-Schutz

Diese Funktion aktiviert AdGuard VPN automatisch, wenn Ihr Gerät eine Verbindung zu einem Mobilfunk- oder WLAN-Netzwerk herstellt.

### Kill Switch

Sie können die Kill Switch-Funktion auf Ihrem Android-Gerät einrichten, indem Sie den einfachen Anweisungen auf dem Bildschirm folgen. Warum sollten Sie das tun? Wenn Ihre VPN-Verbindung aus irgendeinem Grund plötzlich unterbrochen wird, während Sie ein Mobilfunknetz oder öffentliches WLAN verwenden, beendet Kill Switch automatisch die Internetverbindung, um Ihre Informationen vor Angreifern zu schützen.

Beachten Sie, dass bei aktiviertem Kill Switch die *Apps-Einstellungen* und *Ausschlüsse* nicht funktionieren.

### Thema

Sie können das dunkle oder das helle Thema der App wählen.

![Thema](https://cdn.adguard.com/content/kb/vpn/android/theme-light-dark.png)

### Erweiterte Einstellungen

In den *Erweiterten Einstellungen* finden Sie fünf Abschnitte. Sie können *AdGuard helfen, besser zu werden*, indem Sie den Schalter im oberen Block umlegen. Dies ermöglicht es AdGuard VPN, Absturzberichte, technische Daten und Interaktionsdaten zu sammeln. Diese Informationen werden anonym eingehen.

*Betriebsmodus* ermöglicht Ihnen die Auswahl einer von drei Optionen: VPN-, Proxy- und Kompatibilitätsmodus. Im *VPN-Modus* wird der gesamte Datenverkehr automatisch durch AdGuard VPN geleitet. Wenn der *Proxy-Modus* (SOCKS5) aktiviert ist, führt AdGuard VPN einen lokalen Proxy-Server aus, der von anderen Apps verwendet werden kann, um ihren Datenverkehr darüber zu leiten. Wählen Sie diese Option nur, wenn Sie wissen, was Sie tun. Aktivierter *Kompatibilitätsmodus* ermöglicht die Zusammenarbeit von AdGuard VPN und AdGuard Werbeblocker.

> Bitte beachten Sie, dass einige AdGuard VPN-Funktionen im *Kompatibilitätsmodus* deaktiviert sind: DNS-Server-Auswahl, Kill Switch und Auto-Schutz. Um das Anwendungstunneling zu verwalten, sollten Sie außerdem AdGuard Werbeblocker öffnen.

Die nächsten beiden Abschnitte sind *Protokollierungsebene* und *Diagnosedaten*. Concerning the first option, it is not recommended to enable the Extended or Extreme logging level unless requested by our support team. Diagnosedaten, lokal gespeicherte technische Informationen über das Gerät und Verbindungen (IP-Adresse, ID, Ping usw.), können bei technischen Problemen an uns gesendet werden.

Der letzte Abschnitt von *Erweiterten Einstellungen* ist *Low-Level-Einstellungen*. Wir bitten Sie dringend, die Einstellungen in diesem Abschnitt nicht zu ändern, es sei denn, Sie sind hochqualifiziert oder wurden von unserem Support-Team dazu aufgefordert. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

### Support

Im Abschnitt *Support* können Sie Feedback hinterlassen, einen Fehler melden oder Protokolle und Systeminformationen zur weiteren Übermittlung an den Helpdesk exportieren.
 
 

