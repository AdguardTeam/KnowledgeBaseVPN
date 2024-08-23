---
title: So richten Sie ein AdGuard VPN auf Ihrem Router ein
sidebar_position: 8
---

Wenn Sie AdGuard VPN auf Ihrem Router einrichten, können Sie Ihre Daten auf Geräten schützen, auf denen Sie keine VPN-Apps installieren können, wie z. B. Smart-TVs, Smart-Media-Geräte und Spielkonsolen.

:::note

Diese Option ist nur verfügbar, wenn Sie ein AdGuard VPN-Abonnement besitzen und Ihr Router IPsec in seinen _VPN-Client_ (**nicht** _VPN-Server_) Einstellungen unterstützt.

:::

## So richten Sie ein AdGuard VPN auf Ihrem Router ein

1. Wählen Sie in Ihrem [AdGuard-Konto] (https://auth.adguard.com/login.html) AdGuard VPN.

2. Klicken Sie unter _Geräte_ auf _Router hinzufügen_.

   ![Router hinzufügen \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Wählen Sie den gewünschten Standort des VPN-Servers aus und generieren Sie die Zugangsdaten.

   ![Anmeldeinformationen generieren \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Die nächsten Schritte können je nach Router variieren. Wir haben als Beispiel den Keenetic-Router verwendet.

   :::

4. Öffnen Sie auf Ihrer Verwaltungsseite die Router-Einstellungen.

5. Aktivieren Sie _VPN-Client_ und klicken Sie auf _VPN-Server hinzufügen_.

6. Wählen Sie IPsec-Client (bei einigen Routermodellen kann es sich um IKEv2 handeln, nicht um L2TP/IPsec).

7. Geben Sie die Zugangsdaten ein, die Sie in Schritt 3 erstellt haben.

   ![Eingabe der Anmeldedaten \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Verbinden Sie Geräte mit Ihrem Router.

:::note

Wenn Sie den Standort des VPN-Servers ändern möchten, müssen Sie die Einstellungen Ihres Routers aktualisieren.

:::

## Gründe, warum die Einrichtung von AdGuard VPN auf Ihrem Router nützlich sein kann

- Mit AdGuard VPN auf Ihrem Router haben weder Ihr VPN-Anbieter noch andere Personen Zugriff auf Ihre Internetaktivitäten
- Die Installation von AdGuard VPN auf Ihrem Router sichert Ihr gesamtes Netzwerk, d. h. alle daran angeschlossenen Geräte sind geschützt
- Sie können die Sicherheit erhöhen und Ihre Daten auf Geräten schützen, auf denen es nicht möglich ist, AdGuard VPN-Apps zu installieren — Smart TVs, Smart Media-Geräte und Spielkonsolen

## Geräte, die mit einem Router mit AdGuard VPN verbunden werden können

- **PlayStation, Xbox und Nintendo Switch**: Um nahtloses Online-Gaming und verbesserte Sicherheit auf PS4, PS5, Xbox One, Xbox Series und Nintendo Switch zu genießen, [richten Sie AdGuard VPN auf Ihrem Router ein](#how-to-set-up-adguard-vpn-on-your-router) und verbinden Sie Ihre Konsole mit ihm

- **Apple TV**: Folgen Sie den Anweisungen zum [Einrichten von AdGuard VPN auf Ihrem Router](#how-to-set-up-adguard-vpn-on-your-router), und schließen Sie dann Ihr Apple TV an

- **Chromecast**:

  **Für Gen 4:** Einfach herunterladen und installieren [AdGuard VPN von Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Für Gen 3:** Folgen Sie unserer Anleitung zur [Einrichtung von AdGuard VPN auf Ihrem Router](#how-to-set-up-adguard-vpn-on-your-router). Stellen Sie sicher, dass Ihr Fernseher und Ihr Smartphone, Tablet oder Computer mit demselben Netzwerk verbunden sind.

  Für **Android TV** müssen Sie AdGuard VPN nicht auf einem Router einrichten. Es gibt eine spezielle Version für Android TV. Befolgen Sie einfach diese Schritte:

  1. Installieren Sie [AdGuard VPN von Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) auf Ihrem Android TV
  2. Wenn Sie bereits über ein AdGuard-Konto verfügen, melden Sie sich mit Ihren Zugangsdaten an. Wenn Sie neu bei AdGuard sind, geben Sie Ihre E-Mail-Adresse ein und folgen Sie den Anweisungen auf dem Bildschirm
  3. Öffnen Sie die App, wählen Sie den gewünschten Standort und stellen Sie eine Verbindung her

## Router, die bekanntermaßen nicht mit AdGuard VPN kompatibel sind

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
