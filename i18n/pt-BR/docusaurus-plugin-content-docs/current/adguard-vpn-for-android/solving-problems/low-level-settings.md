---
title: Guia de configurações de baixo nível
sidebar_position: 6
---

## Como acessar as Configurações de baixo nível

:::caution

Alterar as _Configurações de baixo nível_ pode causar problemas no desempenho do AdGuard VPN, interromper a conexão com a Internet ou comprometer sua segurança e privacidade. Você só deve abrir essa seção se souber o que está fazendo ou se tiver sido solicitado a fazê-lo por nossa equipe de suporte.

:::

Para acessar as _Configurações de baixo nível_, abra o aplicativo AdGuard VPN e toque no ícone de engrenagem no canto inferior direito da tela. Em seguida, escolha _Geral_ → _Avançado_ → _Configurações de baixo nível_.

## Configurações de baixo nível

Abaixo, listamos todas as configurações de baixo nível disponíveis no AdGuard VPN para Android e explicamos o que elas fazem. Novamente, alertamos para que não altere essas configurações sem saber o que está fazendo, mesmo que tenha lido este guia. Use isso como um guia rápido para quando você já souber o que está fazendo, mas precisar relembrar alguns detalhes específicos.

### Protocolo AdGuard VPN

AdGuard VPN usa o TrustTunnel — um protocolo VPN moderno e de código aberto desenvolvido por nós, disponível para qualquer pessoa usar, auditar e implementar. [Visite o site](https://trusttunnel.org/) para saber como funciona e por que é diferente dos protocolos VPN tradicionais.

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

### Porta do servidor proxy

Aqui você pode configurar a porta do servidor proxy SOCKS5 interno. Por padrão, é usada a porta 1080.
