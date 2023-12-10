---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para iOS?

Uma VPN permite que você crie uma conexão segura com outra rede na Internet. It connects a user's computer or mobile device to a server and allows one to browse the net using a "cover" IP address. If the VPN server is located in another country, it will appear as if the Internet connection was established from this country. [Learn more](/general/how-vpn-works) about how a VPN works in detail.

AdGuard VPN has several functions:

- esconde seu paradeiro real e ajuda você a permanecer anônimo
- changes your IP address to protect your data from tracking
- criptografa seu tráfego para torná-lo inacessível para golpistas
- permite que você configure onde usar e onde não usar a VPN (recurso de exclusões)

A próxima vantagem do AdGuard VPN para iOS é que temos nosso próprio protocolo VPN. It is extremely difficult to detect compared to other VPN protocols, and it is stable even with a poor Internet connection. You can [read more](/general/adguard-vpn-protocol) about the AdGuard VPN protocol.

## Como usar AdGuard VPN para iOS

Para usar o AdGuard VPN para iOS, primeiro você precisa fazer login na sua [conta do AdGuard](https://my.adguard.com/). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard ou via Google, Apple ID ou Facebook (se sua conta do AdGuard foi registrada usando o mesmo endereço de e-mail).

Se você ainda não tem uma conta AdGuard, você terá que criá-la primeiro.

Usar o AdGuard VPN é muito fácil. Na tela principal você pode ver o botão *Conectar/Desconectar* e a lista de servidores disponíveis. Lá, os servidores têm sua própria localização (um determinado país e uma cidade) e um indicador de ping. The ping describes the the server's response time (in milliseconds). Choosing the server with a ping of 22 ms means that a data packet sent to this server is returned (received again) after 22 ms. No AdGuard VPN, você pode escolher entre mais de 50 locais em dezenas de países.

![Main screen and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusões

You can find Exclusions by tapping the middle button below. There you will see two exclusion lists, for General and Selective modes. In General mode, the VPN works for all websites except the excluded ones. Conversely, in Selective mode, the VPN only works for websites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or directly from the browser by sharing the desired pages with AdGuard VPN.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Outro recurso útil é a importação/exportação de listas de exclusão. Você pode fazer isso seguindo as próximas quatro etapas:

1. Abra o AdGuard VPN no dispositivo/browser a partir do qual você pretende exportar suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `exclusions.zip` será baixado.

2. Existem dois arquivos `.txt` dentro do arquivo, um para cada uma das listas Geral e Seletiva. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.

3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo iOS para o seu Mac, certifique-se de enviar o arquivo `.zip` para o seu Mac antes.

4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo.

![Import/export exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configurações de aplicativo

Para acessar as configurações do aplicativo:

1. Toque no botão Configurações (⚙) no canto inferior direito da tela principal do aplicativo AdGuard VPN
2. Toque *Configurações do aplicativo*

Aqui, você pode configurar o AdGuard VPN para iOS conforme necessário usando diferentes opções: Modo operacional, servidor DNS, proteção automática de Wi-Fi, tema de cores e configurações avançadas.

![App Settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modo operacional

O AdGuard VPN para iOS pode operar em dois modos: **Geral** e **Integrado**.

In **General** mode, the [AdGuard VPN protocol](/general/adguard-vpn-protocol) is employed, which provides the best combination of speed and security. Nesse modo, o AdGuard VPN não poderá trabalhar junto [Bloqueador de anúncios do AdGuard para iOS](https://adguard.com/kb/adguard-for-ios/overview/).

No modo **integrado**, o AdGuard VPN poderá funcionar ao mesmo tempo com o bloqueador de anúncios AdGuard para iOS usando o protocolo IPSec. Este protocolo também é seguro, mas um pouco mais lento e fácil de detectar. Você não precisa realizar nenhuma ação adicional para configurar a integração: basta instalar os dois aplicativos e alternar para este modo.

:::note

In **Integrated** mode, you can't use the Exclusions feature or choose a DNS server.

:::

### Servidor DNS

DNS servers translate a domain name or hostname (e.g., example.com or www.example.com) into something browsers can understand, i.e. IP addresses. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Proteção automática de Wi-Fi

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Tema

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Configurações avançadas

In *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Ações Rápidas (disponível no iOS 13 ou posterior)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Suporte

There is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions in social networks or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Assinatura

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
