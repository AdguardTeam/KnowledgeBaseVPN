---
title: So richten Sie ein AdGuard VPN auf Ihrem Router ein
sidebar_position: 8
---

Wenn Sie AdGuard VPN auf Ihrem Router einrichten, können Sie alle mit Ihrem Netzwerk verbundenen Geräte schützen. Dazu gehören Smart-TVs, Media-Player, Spielekonsolen und andere Geräte, die VPN-Apps nicht direkt unterstützen.

:::note

Diese Option ist nur verfügbar, wenn Sie ein AdGuard VPN-Abonnement besitzen und Ihr Router IPsec in seinen _VPN-Client_ (**nicht** _VPN-Server_) Einstellungen unterstützt. Wenn IPsec nicht in den _VPN-Client_-Einstellungen aufgeführt ist, können Sie versuchen, [AdGuard VPN für Linux](/adguard-vpn-for-linux/setting-up-on-a-router) einzurichten. Diese Lösung verwendet das proprietäre Protokoll von AdGuard und ist mit Keenetic-, OpenWRT- und Asuswrt-Merlin-Routern kompatibel.

:::

## So richten Sie ein AdGuard VPN auf Ihrem Router ein

1. Wählen Sie in Ihrem [AdGuard-Konto](https://auth.adguardaccount.com/login.html) AdGuard VPN.

2. Klicken Sie unter _Geräte_ auf _Router hinzufügen_.

   ![Router hinzufügen \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Wählen Sie den gewünschten Standort des VPN-Servers aus und generieren Sie die Zugangsdaten.

   ![Anmeldeinformationen generieren \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   Die nächsten Schritte können je nach Router variieren. Wir haben als Beispiel den Keenetic-Router verwendet.

   :::

4. Öffnen Sie auf Ihrer Verwaltungsseite die Router-Einstellungen.

5. Aktivieren Sie _VPN-Client_ und klicken Sie auf _VPN-Server hinzufügen_.

6. Wählen Sie IPsec-Client (bei einigen Routermodellen kann es sich um IKEv2 handeln, nicht um L2TP/IPsec).

7. Geben Sie die Zugangsdaten ein, die Sie in Schritt 3 erstellt haben.

   ![Eingabe der Anmeldedaten \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Verbinden Sie Geräte mit Ihrem Router.

:::note

Wenn Sie den Standort des VPN-Servers ändern möchten, müssen Sie die Einstellungen Ihres Routers aktualisieren.

:::

## Router, die bekanntermaßen nicht mit AdGuard VPN kompatibel sind

- **ASUS**
  - Hat IPsec nur in den _VPN Server_-Einstellungen und nicht in den korrekten _VPN Fusion_/_VPN Client_-Einstellungen
