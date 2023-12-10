---
title: Funktionsübersicht
sidebar_position: 1
---

## Was ist AdGuard VPN für Android?

Ein VPN ist ein ideales Tool, das bei jedem Surfen im Internet Sicherheit und Anonymität bietet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. Auf diese Weise bleibt das Datengeheimnis gewahrt, ebenso wie die Anonymität des Nutzers, da ein fremder Beobachter die IP-Adresse des VPN-Servers sieht und nicht die IP des eigentlichen Nutzers.

**AdGuard VPN wird häufig für folgende Zwecke eingesetzt:**

- Schutz personenbezogener Daten auch bei Nutzung öffentlicher WLANs
- Verhindern der Verfolgung von Online-Aktivitäten durch Maskieren der IP-Adresse
- Ausblenden der tatsächlichen Geolokalisierung

AdGuard VPN für Android kann das alles für Sie tun — aber das ist noch nicht alles. Um herauszufinden, warum AdGuard VPN die bessere Option ist, lesen Sie [diesen Artikel](/general/why-adguard-vpn).

## Wie man AdGuard VPN für Android installiert

Laden Sie zunächst AdGuard VPN von [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) herunter und melden Sie sich bei Ihrem AdGuard-Konto an. Falls Sie es nicht haben, sollten Sie es [erstellen](https://auth.adguard.com/login.html). Sie können sich direkt mit Ihren AdGuard-Kontodaten anmelden. Oder tun Sie es über Google oder Facebook, wenn Ihr AdGuard-Konto mit der gleichen E-Mail-Adresse registriert wurde.

## Hauptseite

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Jeder Server hat seinen Standort und seine Ping-Rate, die die Antwortzeit des Servers beschreibt. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Ausschlüsse

Wir haben alles getan, um Ihnen die Verwaltung Ihrer Website- und App-Ausschlusslisten zu erleichtern. AdGuard VPN funktioniert nur dort, wo Sie es wünschen.

### Ausschlusslisten

#### For websites

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Um zum Abschnitt *Ausschlüsse* zu gelangen, tippen Sie unten auf dem Bildschirm auf das zweite Symbol von links.

There are two modes: in *General mode*, websites from the list of exclusions are excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.

Sie können Domains (z. B. `google.com`) oder Subdomains (z. B. `*.google.com`) von Websites zu den *Ausschlüssen* auf drei Arten hinzufügen: Geben Sie sie manuell in der App oder direkt im Browser ein, indem Sie auf die Schaltfläche *Teilen* klicken, und wählen Sie AdGuard VPN in der geöffneten Liste unten aus oder aus integrierten Listen von Diensten, die nach Kategorien unterteilt sind.

![Ausschlüsse](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Beim manuellen Hinzufügen von Domains gibt es einige Nuancen. Wenn Sie beispielsweise die Domains `yahoo.com` manuell ausschließen, werden alle `*.yahoo.com` Subdomains ebenfalls in den Ausschlüssen aufgeführt. Domainnamen mit anderen Top-Level-Domains wie `yahoo.jp` oder `yahoo.fr` werden jedoch nicht ausgeschlossen. Oder Sie können `youtube.com` zu den Ausschlüssen hinzufügen, aber die Domain desselben Dienstes `youtu.be` wird nicht in die Liste aufgenommen. In diesem Fall ist es sicherer, integrierte Dienstlisten zu verwenden, da wir dort alle Subdomains für jede Plattform ablegen.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Gute Nachrichten: Sie können jederzeit zur Standardansicht der Dienstlisten zurückkehren, falls Sie dort Domains gelöscht oder deaktiviert haben.

![Ausschlüsse *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Eine weitere nützliche Funktion ist *Import/Export der Ausschlüsse*. Sie müssen nur vier Schritte machen:

1. Öffnen Sie AdGuard VPN auf dem Gerät/im Browser, von dem aus Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `adguard_vpn_exclusions.zip` wird heruntergeladen.
2. There are two `.txt` files inside the archive, one for each of the lists. Fügen Sie ihnen weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um (mehr dazu — später) oder lassen Sie das Archiv mit den Dateien einfach unverändert.
3. Vergessen Sie beim Übertragen zwischen verschiedenen Geräten nicht, die `.zip`-Datei zum Importieren an das Gerät zu senden. Wenn Sie beispielsweise Ausschlusslisten von Ihrem Windows-Gerät auf Ihr Android-Gerät importieren, stellen Sie sicher, dass Sie die `.zip`-Datei vorher an Ihr Android-Gerät senden.
4. Öffnen Sie AdGuard VPN auf dem Gerät, auf das Sie das Archiv mit den fertigen Ausschlusslisten importieren möchten. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Wie oben erwähnt, können Sie nicht nur Websites einfach zu den Ausschlüssen hinzufügen. Choose for which apps you need AdGuard VPN and for which you don't. By default, AdGuard VPN works for all apps, but you can easily switch to the other mode.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Einstellungen

Sie können *Einstellungen* erreichen, indem Sie auf das Zahnradsymbol unten rechts auf dem Bildschirm drücken. Der erste Abschnitt enthält *App-Einstellungen*: Konfigurieren Sie AdGuard VPN für Android nach Bedarf.

![App-Einstellungen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Autostart von AdGuard VPN

Der nach rechts geschaltete Schieberegler aktiviert einen AdGuard VPN-Autostart nach dem Start des Geräts.

### DNS-Server

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. Es besteht auch die Möglichkeit, einen eigenen DNS-Server hinzuzufügen.

### Auto-Schutz

Diese Funktion aktiviert AdGuard VPN automatisch, wenn Ihr Gerät eine Verbindung zu einem Mobilfunk- oder WLAN-Netzwerk herstellt.

### Kill Switch

Sie können die Kill Switch-Funktion auf Ihrem Android-Gerät einrichten, indem Sie den einfachen Anweisungen auf dem Bildschirm folgen. Warum sollten Sie das tun? Wenn Ihre VPN-Verbindung aus irgendeinem Grund plötzlich unterbrochen wird, während Sie ein Mobilfunknetz oder öffentliches WLAN verwenden, beendet Kill Switch automatisch die Internetverbindung, um Ihre Informationen vor Angreifern zu schützen.

Beachten Sie, dass bei aktiviertem Kill Switch die *Apps-Einstellungen* und *Ausschlüsse* nicht funktionieren.

### Farbschema

Sie können das dunkle oder das helle Farbschema der App wählen.

![Farbschema *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Erweiterte Einstellungen

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and app exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

Die nächsten beiden Abschnitte sind *Protokollierungsebene* und *Diagnosedaten*. In Bezug auf die erste Option wird nicht empfohlen, die erweiterte Protokollierungsebene zu aktivieren, es sei denn, dies wird von unserem Support-Team angefordert. Diagnosedaten, lokal gespeicherte technische Informationen über das Gerät und Verbindungen (IP-Adresse, ID, Ping usw.), können bei technischen Problemen an uns gesendet werden.

Der letzte Abschnitt von *Erweiterten Einstellungen* ist *Low-Level-Einstellungen*. Wir bitten Sie dringend, die Einstellungen in diesem Abschnitt nicht zu ändern, es sei denn, Sie sind hochqualifiziert oder wurden von unserem Support-Team dazu aufgefordert. Hier ist es möglich, die TUN-Schnittstellenprotokollierung oder das IPv6-Protokoll auf der VPN-Schnittstelle zu aktivieren, einen Proxy-Server-Port oder eine zu verwendende Internetprotokollversion auszuwählen.

:::note Kompatibilität

Die Option *IPv6 aktivieren* ist nur für Netzwerke verfügbar, die IPv6 unterstützen.

:::

### Support

Im Abschnitt *Support* können Sie Feedback hinterlassen, einen Fehler melden oder Protokolle und Systeminformationen zur weiteren Übermittlung an den Helpdesk exportieren.
