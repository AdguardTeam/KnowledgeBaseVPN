---
title: Funktionsübersicht
sidebar_position: 1
---

Die AdGuard VPN-Browsererweiterung ist für Chrome, Firefox, Opera und Edge verfügbar. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

Sie können AdGuard VPN Browsererweiterung nur verwenden, wenn Sie angemeldet sind. Melden Sie sich mit Ihrem AdGuard-Konto oder über Google, Facebook oder Apple an. Im letzteren Fall stellen Sie sicher, dass Ihr Konto an dieselbe E-Mail-Adresse gebunden ist wie Ihr AdGuard-Konto. Wenn Sie ein [AdGuard VPN-Abonnement](/general/subscription) haben, wird es automatisch in der AdGuard VPN-Browsererweiterung aktiviert. Sie haben noch kein AdGuard-Konto? [Create it here](https://auth.adguardaccount.com/registration.html).

:::

## Gespeicherte Standorte

Sie können Ihre bevorzugten Standorte für einen schnellen Zugriff speichern. Bewegen Sie dazu einfach den Mauszeiger über einen Ort und klicken Sie auf das angezeigte Lesezeichensymbol:

![Standort speichern *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Your marked locations will then show up in the *Saved* tab.

![Tab Gespeicherte *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## Statistiken

Der Abschnitt *Statistiken* im Menü ist eine einfache Möglichkeit, den Überblick darüber zu behalten, wie viele Daten über Ihre VPN-Verbindung übertragen werden.

![Statistiken *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

Wann Statistiken nützlich sein können:

- **Check if the VPN is actually working**. A quick look at the stats confirms that your connection is active and data is routed through the VPN.

- **Spot unexpected activity**. If traffic grows while you’re idle, something in the background — a tab or an extension — might be sending data.

- **Troubleshoot slow connection issues**. If your connection feels slow, a spike in traffic might point to something running or downloading in the background.

:::note

All statistics are stored locally on your device. We only calculate how much data is used — we don’t see what websites you visit. You can also disable statistics if you don’t need them.

:::

The *Stats* section is available to users of the paid version.

## Einstellungen

To manage your AdGuard VPN Browser Extension:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Gehen Sie auf die Seite *Erweiterungen verwalten* in Ihrem Browser, klicken Sie auf *Details* unter *AdGuard VPN* und verwalten Sie die Einstellungen von dort aus.

Once done, you’ll see several tabs on the left:

### Auswahl eines DNS-Servers

In diesem Tab sind einige wichtige Einstellungen zusammengefasst. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

#### DNS-Server

By default, the [system DNS server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) provided by your ISP is selected, but it may compromise your privacy. Mit der AdGuard VPN-Browsererweiterung können Sie einen DNS-Server auswählen, der eine bessere Geschwindigkeit und Sicherheit bietet und sogar Werbung oder potenziell gefährliche Domains blockiert. Kurze Beschreibungen unter den Namen von DNS-Servern helfen Ihnen bei der Entscheidungsfindung.

Mehr über [DNS-Server verschiedener Anbieter](https://adguard-dns.io/kb/general/dns-providers/).

### Ausschlüsse

Der nächste Tab enthält eines der Hauptmerkmale von AdGuard VPN — zwei Modi mit separaten Ausschlusslisten.

Im **Allgemeinen Modus** funktioniert AdGuard VPN standardmäßig auf allen Websites, mit Ausnahme der Websites, die Sie der Ausschlussliste hinzugefügt haben. Im **Selektiven Modus** hingegen funktioniert AdGuard VPN standardmäßig nirgendwo. Sie können alle Websites, bei denen Sie dies wünschen, in eine Ausschlussliste aufnehmen, die sich von der im **Allgemeinen Modus** angezeigten Liste unterscheidet.

Wenn Sie eine Website zu einer Ausschlussliste hinzufügen, können Sie die Website manuell eingeben oder die Option **Aus der Liste** wählen. Im letzteren Fall sehen Sie acht Kategorien (zum Beispiel *Shopping* oder *Messenger*), die jeweils mehrere beliebte Dienste vorschlagen. Sie können jeden dieser Dienste mit einem Klick ausschließen. Dadurch werden alle für diesen spezifischen Dienst relevanten Domains zu den Ausschlüssen hinzugefügt.

#### Import und Export

Sie können nicht nur Websites hinzufügen und entfernen, sondern auch fertige Ausschlusslisten auf andere Geräte übertragen, auf denen AdGuard VPN installiert ist. Um Ihre Ausschlussliste zu exportieren, befolgen Sie die nachstehende 4-Schritte-Anleitung:

1. Öffnen Sie AdGuard VPN-Browsererweiterung, von der Sie Ihre Ausschlusslisten exportieren möchten. Suchen Sie den entsprechenden Abschnitt und klicken Sie auf die Schaltfläche *Exportieren*. Das Archiv `exclusions.zip` wird heruntergeladen.
1. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um oder lassen Sie das Archiv einfach so, wie es ist.
1. Senden Sie beim Übertragen zwischen verschiedenen Geräten die Datei `.zip` zum Importieren an das Gerät.
1. Öffnen Sie AdGuard VPN auf diesem Gerät. Finden Sie den entsprechenden Abschnitt, klicken Sie auf die Schaltfläche *Importieren* und wählen Sie das Archiv aus. Fertig!

### Konto

Die dritte Registerkarte der AdGuard VPN-Browsererweiterung ist absolut minimalistisch und enthält nur die E-Mail-Adresse, mit der Sie sich bei Ihrem Konto angemeldet haben, und zwei Schaltflächen, *Verwalten* und *Abmelden*. Durch Klicken auf die Schaltfläche *Verwalten* gelangen Sie zu Ihrem persönlichen AdGuard-Konto, wo Sie alle Ihre aktuellen Lizenzen und Abonnements sowie die damit verbundenen Geräte sehen können.

### Support

Sie können Antworten auf häufig gestellte Fragen im FAQ-Bereich finden oder Feedback hinterlassen: Melden Sie einen Fehler, wenn etwas nicht so funktioniert, wie es sollte, schlagen Sie das Hinzufügen einer neuen Funktion vor oder diskutieren Sie AdGuard auf einer der vielen Social-Media-Plattformen.

### Über die App

Ein weiterer kleiner Tab, auf dem Sie die Version der Erweiterung überprüfen, die offizielle Website besuchen und die EULA oder die Datenschutzrichtlinien einsehen können.
