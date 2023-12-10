---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para Android?

Uma VPN é uma ferramenta ideal que fornece segurança e anonimato sempre que você navega na Internet. [How does it work?](/general/how-vpn-works) Without going into technical details, we can say that VPN creates a secure encrypted connection (called a tunnel) between a user's device and a remote VPN server. Desta forma, a confidencialidade dos dados é preservada, bem como o anonimato do usuário, porque um observador terceiro vê o endereço IP do servidor VPN e não o IP real do usuário.

**A VPN é frequentemente usada para:**

- Manter dados pessoais em segurança mesmo durante a utilização de uma rede de Wi-Fi pública
- Impedir o rastreamento de atividades online, ocultando o endereço IP
- Ocultar a localização geográfica real do usuário para que permaneça anônimo

O AdGuard VPN para Android pode fazer tudo isso por você, além de oferecer vantagens únicas. To find out why AdGuard VPN is the better option — read [this article](/general/why-adguard-vpn).

## Como começar a usar o AdGuard VPN para Android

Primeiramente, baixe AdGuard VPN no [Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) e faça login em sua conta AdGuard. Caso você não tenha, basta [criá-la](https://auth.adguard.com/login.html). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard. Ou então via Google ou Facebook, se sua conta AdGuard foi criada usando o mesmo endereço de e-mail.

## Tela principal

The main screen reflects the VPN status (Connected/Disconnected). There are also the *Connect/Disconnect* button and a list of available servers.

Cada servidor conta com sua localização e taxa de ping, que corresponde ao tempo de resposta do servidor. The lower this rate, the faster the connection. The fastest servers always appear at the top of the list that consists of more than 50 locations in dozens of countries. You can connect to the fastest server by tapping the *Connect* button or by picking a location.

## Exclusões

Nós trabalhamos duro para facilitar o gerenciamento de suas listas de exclusão de sites e aplicativos. O AdGuard VPN só funcionará nos domínios que você escolher.

### Listas de exclusões

#### For websites

Exclusion lists allow you to manage the VPN connection for specific websites and apps. To access *Exclusions*, tap the second icon from the left at the bottom of the screen. Para chegar à seção *Exclusões* , toque no segundo ícone à esquerda na parte inferior da tela.

There are two modes: in *General mode*, websites from the list of exclusions are excluded, and in *Selective mode*, they will be the only ones where AdGuard VPN works.

Você pode adicionar domínios (por exemplo `google.com`) ou subdomínios (por exemplo, `*.google.com`) de sites às *Exclusões* de três maneiras: insira-os manualmente no aplicativo ou diretamente no navegador clicando no botão *Share* e selecionando AdGuard VPN na lista aberta abaixo ou nas listas integradas de serviços divididos por categorias.

![Exclusões](https://cdn.adguardvpn.com/public/Adguard/kb/VPN/Screenshots/add_site_android.jpg)

:::note

Há alguns detalhes importantes na adição manual de domínios. Por exemplo, se você excluir manualmente o domínio `yahoo.com`, todos os `*.yahoo.com` subdomínios também serão listados nas exclusões. No entanto, nomes de domínio com outros domínios de nível superior, como `yahoo.jp` ou `yahoo.fr`, não serão excluídos. Ou você pode adicionar `youtube.com` às exclusões, mas o domínio do mesmo serviço `youtu.be` não entrará na lista. Nesse caso, é mais seguro usar listas de serviços integradas, pois nela colocamos todos os subdomínios relacionados a cada plataforma.

:::

As you can enable subdomains in service lists, we added boxes that reflect the status of each service — you can see them on the main screen of *Exclusions* to the left of each service name:

- **Fully enabled** is indicated by a white check mark on a green background
- **Partially enabled** (enabled subdomains without the main domain) is marked with a green square on a white background
- **Fully disabled** is marked with a blank checkbox

 Boas notícias: você sempre pode retornar à exibição padrão das listas de serviços, caso tenha excluído ou desativado algum domínio de lá.

![Exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/statuses.png)

Outro recurso útil é a *Importação/exportação de exclusões*. Existem apenas quatro passos para atingir a meta:

1. Abra o AdGuard VPN no dispositivo/browser a partir do qual você pretende exportar suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `adguard_vpn_exclusions.zip` será baixado.
2. There are two `.txt` files inside the archive, one for each of the lists. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.
3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo Windows para o Android, certifique-se de enviar o arquivo `.zip` para o Android com antecedência.
4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo.

![Import/Export *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/imp-exp.png)

#### For apps

Como mencionamos acima, não apenas os sites podem ser facilmente adicionados às exclusões. Choose for which apps you need AdGuard VPN and for which you don't. By default, AdGuard VPN works for all apps, but you can easily switch to the other mode.

In *Integrated mode*, you can only manage apps through AdGuard Ad Blocker.

![App exclusions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/apps_settings.png)

## Configurações

Você pode acessar as *Configurações* pressionando o ícone de engrenagem no canto inferior direito da tela. A primeira seção contém *Configurações do aplicativo*: configure o AdGuard VPN para Android conforme necessário, selecionando diferentes opções.

![Apps settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/app_settings.png)

### Início automático do AdGuard VPN

O controle deslizante à direita permite uma inicialização automática do AdGuard VPN após a inicialização do dispositivo.

### Servidores DNS

DNS servers translate websites' names into something browsers can understand, i.e. IP addresses. AdGuard VPN for Android offers a wide selection of DNS servers, each with special qualities. For example, [AdGuard DNS](https://adguard-dns.io/kb/) removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. Há também uma opção para adicionar um servidor DNS personalizado.

### Proteção automática

Esse recurso habilita o AdGuard VPN automaticamente quando seu dispositivo se conecta a uma rede de celular ou Wi-Fi.

### Kill switch

Você pode configurar a função Kill Switch em seu dispositivo Android seguindo instruções simples na tela. Por que fazer isso? Se, por algum motivo, sua conexão VPN cair repentinamente enquanto você estiver usando uma rede móvel ou Wi-Fi público, o Kill Switch encerrará automaticamente a conexão com a Internet, impedindo que invasores tenham acesso a suas informações.

Lembre-se de que, se o Kill Switch estiver ativado, as *Configurações de aplicativo* e as *Exclusões* não funcionarão.

### Tema

Você pode escolher o tema padrão do sistema, escuro ou claro para o aplicativo.

![Theme *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/android/theme-light-dark.png)

### Configurações avançadas

In *Advanced settings*, you can find four sections.

*Operating mode* allows you to specify how your traffic is routed. There are three modes: VPN, SOCKS5, and Integrated mode. In the *VPN* mode, all traffic is routed through AdGuard VPN. In the *SOCKS5* mode, AdGuard VPN runs a local proxy server that can be used by other apps for traffic routing. *Integrated mode* allows AdGuard VPN and AdGuard Ad Blocker to work together.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, Auto-protection, and app exclusions. You can manage DNS protection and route apps through your AdGuard VPN proxy in the AdGuard Ad Blocker app.

:::

As próximas duas seções são *Nível de registro* e *Informações de diagnóstico*. Em relação à primeira opção, não é recomendável habilitar o nível de registro Estendido ou Extremo, a menos que solicitado por nossa equipe de suporte. Informações de diagnóstico e informações técnicas armazenadas localmente sobre o dispositivo e conexões (endereço IP, ID, ping etc.) podem ser enviadas para nós em caso de problemas técnicos.

A última seção de *Configurações avançadas* é *Configurações de nível baixo*. Pedimos que você não entre nesta seção, a menos que seja altamente qualificado ou tenha sido solicitado a fazê-lo por nossa equipe de suporte. Aqui é possível habilitar o registro da interface TUN ou protocolo IPv6 na interface VPN, escolher uma porta do servidor proxy ou versão do protocolo Internet que deve ser usada.

:::note Compatibility

The *Enable IPv6* option is only available for networks that support IPv6.

:::

### Suporte

Na seção *Suporte*, você pode deixar comentários, relatar um bug ou exportar logs e informações do sistema para posterior envio ao helpdesk.
