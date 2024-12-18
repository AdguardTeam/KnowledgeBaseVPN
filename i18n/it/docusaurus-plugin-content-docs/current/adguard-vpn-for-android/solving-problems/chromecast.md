---
title: Compatibilità di AdGuard VPN con Chromecast
sidebar_position: 5
---

La tecnologia Chromecast integrata non è compatibile con l'esecuzione di una VPN perché utilizza il [protocollo DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance), che non supporta le connessioni VPN. This means that if a Chromecast device and a smartphone or tablet running a VPN are on the same Wi-Fi network, in most cases Chromecast won’t be recognized by the mobile device.

Google has also blocked the ability to change the Chromecast’s network settings by restricting access to its DNS settings. Ciò impedisce inoltre al Chromecast di operare con una VPN.

Puoi risolvere il problema configurando una VPN su un router. Ciò consentirà a tutti i dispositivi connessi al router di utilizzare la connessione VPN, incluso il Chromecast. But remember: setting up a VPN on your router may require additional knowledge, so read the manufacturer’s manual.
