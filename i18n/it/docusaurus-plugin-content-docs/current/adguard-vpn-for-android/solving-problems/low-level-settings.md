---
title: Guida alle impostazioni di basso livello
sidebar_position: 6
---

## Come trovare le impostazioni di basso livello

:::caution

Modificare le _Impostazioni di basso livello_ può causare problemi con le prestazioni di AdGuard VPN, interrompere la connessione alla rete globale o compromettere sicurezza e riservatezza. Questa sezione dovrebbe essere aperta soltanto se sai cosa stai facendo, o se ti è stato richiesto di farlo dal nostro gruppo di assistenza.

:::

Per accedere alle _Impostazioni di Basso Livello_, apri l'app di AdGuard VPN e tocca sull'icona dell'ingranaggio nell'angolo inferiore destro dello schermo. Quindi, scegli _Generale_ → _Avanzate_ → _Impostazioni di Basso Livello_.

## Impostazioni di basso livello

Di seguito elenchiamo tutte le impostazioni di basso livello disponibili in AdGuard VPN per Android e spieghiamo cosa fanno. Ti esortiamo ancora una volta a non manomettere queste impostazioni alla cieca, anche se hai letto questa guida. Trattala come un promemoria per quando sai cosa stai facendo ma vuoi ripassare le specifiche.

### Protocollo AdGuard VPN

AdGuard VPN utilizza TrustTunnel — un protocollo VPN attuale e open-source sviluppato da noi e disponibile per chiunque da usare, controllare e implementare. [Visita il sito web](https://trusttunnel.org/) per scoprire come funziona e perché è diverso dai protocolli VPN tradizionali.

### Include Wi-Fi gateway in VPN routes

If this setting is enabled, the gateway IP addresses will be added to VPN routes when on Wi-Fi.

If you disable it, then the route configuration (IP ranges that are filtered) will be changed. The Wi-Fi gateway of the network to which the user is connected will be excluded, and therefore, it will not be subject to filtering.

This setting is enabled by default.

### Packet capture (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6, or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.

Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Porta del Server Proxy

Qui puoi impostare la porta del server proxy SOCKS5 interno. L'opzione predefinita è 1080.
