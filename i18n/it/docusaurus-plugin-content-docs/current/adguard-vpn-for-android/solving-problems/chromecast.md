---
title: 'Compatibilità di AdGuard VPN con Chromecast'
sidebar_position: 5
---

La tecnologia Chromecast integrata non è compatibile con l'esecuzione di una VPN perché utilzza il [protocollo DLNA](https://en.wikipedia.org/wiki/Digital_Living_Network_Alliance), che non supporta le connessioni VPN. Ciò significa che se un dispositivo Chromecast e uno smartphone o un tablet con una VPN si trovano sulla stessa rete Wi-Fi, in gran parte dei casi Chromecast non sarà riconosciuto dal dispositivo mobile.

Google, inoltre, ha bloccato la possibilità di modificare le impostazioni di rete del Chromecast, limitando l'accesso alle sue impostazioni DNS. Ciò impedisce inoltre al Chromecast di operare con una VPN.

Puoi risolvere il problema configurando una VPN su un router. Ciò consentirà a tutti i dispositivi connessi al router di utilizzare la connessione VPN, incluso il Chromecast. Ma ricorda: configurare una VPN sul tuo router potrebbe richiedere conoscenze aggiuntive, quindi, leggi il manuale del produttore.
