---
title: Funktionsübersicht
sidebar_position: 1
---

Die AdGuard VPN-Browsererweiterung ist für Chrome, Firefox, Opera und Edge verfügbar. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

Sie können AdGuard VPN Browsererweiterung nur verwenden, wenn Sie angemeldet sind. Melden Sie sich mit Ihrem AdGuard-Konto oder über Google, Facebook oder Apple an. Im letzteren Fall stellen Sie sicher, dass Ihr Konto an dieselbe E-Mail-Adresse gebunden ist wie Ihr AdGuard-Konto. Wenn Sie ein [AdGuard VPN-Abonnement](/general/subscription) haben, wird es automatisch in der AdGuard VPN-Browsererweiterung aktiviert. Sie haben noch kein AdGuard-Konto? [Create it here](https://auth.adguardaccount.com/registration.html).

:::

Um Ihre AdGuard VPN Browsererweiterung zu verwalten, entweder:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Gehen Sie auf die Seite *Erweiterungen verwalten* in Ihrem Browser, klicken Sie auf *Details* unter *AdGuard VPN* und verwalten Sie die Einstellungen von dort aus.

Once done, you’ll see several tabs on the left:

## Einstellungen

In diesem Tab sind einige wichtige Einstellungen zusammengefasst. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

### Auswahl eines DNS-Servers

Standardmäßig ist der von Ihrem ISP bereitgestellte [System-DNS-Server](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) ausgewählt, aber dies kann Ihre Privatsphäre gefährden. Mit der AdGuard VPN-Browsererweiterung können Sie einen DNS-Server auswählen, der eine bessere Geschwindigkeit und Sicherheit bietet und sogar Werbung oder potenziell gefährliche Domains sperrt. Kurze Beschreibungen unter den Namen von DNS-Servern helfen Ihnen bei der Entscheidungsfindung.

Erfahren Sie mehr über [DNS-Server verschiedener Anbieter](https://adguard-dns.io/kb/general/dns-providers/).

## Ausschlüsse

Der nächste Tab enthält eine der Hauptunterscheidungsmerkmale von AdGuard VPN — zwei Modi mit separaten Ausschlusslisten.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

Wenn Sie eine Website zu einer Ausschlussliste hinzufügen, können Sie die Website manuell eingeben oder die Option **Aus der Liste** wählen. Im letzteren Fall sehen Sie acht Kategorien (zum Beispiel *Shopping* oder *Messenger*), die jeweils mehrere beliebte Dienste vorschlagen. Sie können jeden dieser Dienste mit einem Klick ausschließen. Dadurch werden alle für diesen spezifischen Dienst relevanten Domains zu den Ausschlüssen hinzugefügt.

### Import und Export

Sie können nicht nur Websites hinzufügen und entfernen, sondern auch fertige Ausschlusslisten auf andere Geräte übertragen, auf denen AdGuard VPN installiert ist. Um Ihre Ausschlussliste zu exportieren, befolgen Sie die nachstehende 4-Schritte-Anleitung:

1. Öffnen Sie AdGuard VPN-Browsererweiterung, von der Sie Ihre Ausschlusslisten exportieren möchten. Find the appropriate section and click the *Export* button. Das Archiv `exclusions.zip` wird heruntergeladen.
1. Es gibt zwei `.txt`-Dateien im Archiv, eine für jede der Allgemeinen und Selektiven Listen. Fügen Sie weitere Ausschlüsse hinzu, löschen Sie die vorhandenen, benennen Sie Dateien um oder lassen Sie das Archiv einfach so, wie es ist.
1. Senden Sie beim Übertragen zwischen verschiedenen Geräten die Datei `.zip` zum Importieren an das Gerät.
1. Öffnen Sie AdGuard VPN auf diesem Gerät. Find the appropriate section, click the *Import* button and select the archive. Fertig!

## Konto

Der dritte Tab der AdGuard VPN Browser-Erweiterung ist äußerst minimalistisch und enthält nur die E-Mail-Adresse, mit der Sie sich bei Ihrem Konto angemeldet haben, sowie zwei Schaltflächen: *Verwalten* und *Abmelden*. Durch Klicken auf die Schaltfläche *Verwalten* gelangen Sie zu Ihrem persönlichen AdGuard-Konto, wo Sie alle Ihre aktuellen Lizenzen und Abonnements sowie die damit verbundenen Geräte sehen können.

## Support

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## Über uns

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
