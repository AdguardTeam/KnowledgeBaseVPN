---
title: Resumo de recursos
sidebar_position: 1
---

## Tela principal

A tela principal reflete o status da VPN (Conectado/Desconectado). Há também o botão *Conectar/Desconectar* e uma lista de servidores disponíveis.

Cada servidor conta com sua localização e taxa de ping, que corresponde ao tempo de resposta do servidor. Quanto menor essa taxa, mais rápida será a conexão. Os servidores mais rápidos sempre aparecem no topo da lista, que consiste em mais de 50 locais em dezenas de países. Você pode se conectar ao servidor mais rápido tocando no botão *Conectar* ou escolhendo um local.

## Exclusões

As listas de exclusão permitem gerenciar a conexão VPN para sites e aplicativos específicos. Para acessar *Exclusões*, toque no segundo ícone à esquerda na parte inferior da tela.

![Exclusões *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Enter it manually in the app
- Add it directly from the browser by sharing the website with AdGuard VPN
- Add it from a built-in list of services

![Add manually *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::nota

There are some nuances to manually adding domains. Por exemplo, se você excluir manualmente o domínio `yahoo.com`, todos os `*.yahoo.com` subdomínios também serão listados nas exclusões. No entanto, nomes de domínio com outros domínios de nível superior, como `yahoo.jp` ou `yahoo.fr`, não serão excluídos.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Totalmente ativado** é indicado por uma marca de seleção branca sobre fundo verde
- **Parcialmente habilitado** (subdomínios habilitados sem o domínio principal) é marcado com um quadrado verde sobre fundo branco
- **Totalmente desativado** está marcado com uma caixa de seleção em branco

![Website exclusions *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Exclusões de aplicativos *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

No modo *Integrado*, você só pode gerenciar aplicativos por meio do bloqueador de anúncios AdGuard.

:::

## Configurações

Você pode acessar as *Configurações* pressionando o ícone de engrenagem no canto inferior direito da tela.

![Settings *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

*O modo de operação* permite especificar como o seu tráfego é roteado. Existem três modos: VPN, SOCKS5 e Integrado. No modo *VPN*, todo o tráfego é roteado através do AdGuard VPN. No modo *SOCKS5*, o AdGuard VPN executa um servidor proxy local que pode ser usado por outros aplicativos para roteamento de tráfego. *O modo integrado* permite que o AdGuard VPN e o bloqueador de anúncios AdGuard trabalhem juntos.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Você pode gerenciar a proteção DNS e rotear aplicativos por meio do proxy AdGuard VPN no aplicativo do bloqueador de anúncios AdGuard.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

A última seção de *Configurações avançadas* é *Configurações de nível baixo*. Pedimos que você não entre nesta seção, a menos que seja altamente qualificado ou tenha sido solicitado a fazê-lo por nossa equipe de suporte. Aqui é possível habilitar o registro da interface TUN ou protocolo IPv6 na interface VPN, escolher uma porta do servidor proxy ou versão do protocolo Internet que deve ser usada.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### Suporte

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
