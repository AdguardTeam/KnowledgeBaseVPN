---
title: Resumo de recursos
sidebar_position: 1
---

## Tela principal

A tela principal reflete o status da VPN (Conectado/Desconectado). Há também o botão *Conectar/Desconectar* e uma lista de servidores disponíveis.

Cada servidor conta com sua localização e taxa de ping, que corresponde ao tempo de resposta do servidor. Quanto menor essa taxa, mais rápida será a conexão. Os servidores mais rápidos sempre aparecem no topo da lista, que consiste em mais de 50 locais em dezenas de países. Você pode se conectar ao servidor mais rápido tocando no botão *Conectar* ou escolhendo um local.

## Exclusões

As listas de exclusão permitem gerenciar a conexão VPN para sites e aplicativos específicos. Para acessar *Exclusões*, toque no segundo ícone à esquerda na parte inferior da tela.

![Exclusões *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

Por padrão, o AdGuard VPN funciona para todos os sites e aplicativos, exceto aqueles adicionados às exclusões: se você não especificar um aplicativo ou site, a VPN estará ativa para eles. Você também pode ativá-la **seletivamente** - apenas para aplicativos ou sites especificados. Para mudar para este modo, toque em *Mudar modo*.

![Mudar modo *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Tenha cuidado ao usar sua VPN **seletivamente**.

Se você excluir um navegador do túnel VPN, as exclusões de sites não funcionarão para ele.

Se você mudar para este modo para sites, não se esqueça de adicionar os domínios dos aplicativos que deseja usar - por exemplo, `facebook.com` para Facebook.

:::

### Sites

Você pode adicionar um domínio (por exemplo, `google.com`) ou subdomínio (por exemplo, `*.google.com`) às exclusões de três maneiras:

- Insira-o manualmente no aplicativo
- Adicione-o diretamente do navegador compartilhando o site com o AdGuard VPN
- Adicione-o de uma lista integrada de serviços

![Adicionar manualmente *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Adicionar da lista *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::nota

Existem algumas nuances em adicionar domínios manualmente. Por exemplo, se você excluir manualmente o domínio `yahoo.com`, todos os `*.yahoo.com` subdomínios também serão listados nas exclusões. No entanto, nomes de domínio com outros domínios de nível superior, como `yahoo.jp` ou `yahoo.fr`, não serão excluídos.

Se você adicionar `youtube.com` às exclusões, o domínio do mesmo serviço `youtu.be` não será adicionado. Neste caso, é mais seguro usar as listas integradas de serviços. Eles contêm todos os subdomínios associados a cada plataforma.

:::

Como você pode ativar subdomínios em listas de serviços, adicionamos caixas que refletem o status de cada serviço:

- **Totalmente ativado** é indicado por uma marca de seleção branca sobre fundo verde
- **Parcialmente habilitado** (subdomínios habilitados sem o domínio principal) é marcado com um quadrado verde sobre fundo branco
- **Totalmente desativado** está marcado com uma caixa de seleção em branco

![Exclusões de sites *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

Se você excluiu acidentalmente um domínio ou subdomínio, toque em *Redefinir para o padrão*.

![Redefinir para o padrão *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Aplicativos

Você também pode gerenciar a VPN para aplicativos. Para excluir um aplicativo do túnel VPN, toque em *Adicionar aplicativo*. Para usar a VPN **seletivamente**, toque em *Mudar modo*.

![Exclusões de aplicativos *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

No modo *Integrado*, você só pode gerenciar aplicativos por meio do bloqueador de anúncios AdGuard.

:::

## Configurações

Você pode acessar as *Configurações* pressionando o ícone de engrenagem no canto inferior direito da tela.

![Configurações *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### Geral

![Geral *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

Em *Geral*, você pode gerenciar as configurações básicas do AdGuard VPN:

- Iniciar o AdGuard VPN na inicialização do sistema
- Selecione um servidor DNS para criptografar o tráfego e bloquear anúncios quando conectado à VPN (recomendamos usar o AdGuard DNS)
- Ative o Kill Switch para proteger sua privacidade e desconectar-se da Internet se a conexão VPN cair
- Selecione um tema de cores
- Ative relatórios de erros anônimos para notificar os desenvolvedores sobre problemas do aplicativo

### Avançado

![Avançado *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

A seção *Avançado* é um conjunto de configurações que não são tão comumente usadas.

*O modo de operação* permite especificar como o seu tráfego é roteado. Existem três modos: VPN, SOCKS5 e Integrado. No modo *VPN*, todo o tráfego é roteado através do AdGuard VPN. No modo *SOCKS5*, o AdGuard VPN executa um servidor proxy local que pode ser usado por outros aplicativos para roteamento de tráfego. *O modo integrado* permite que o AdGuard VPN e o bloqueador de anúncios AdGuard trabalhem juntos.

:::note

Alguns recursos do AdGuard VPN são desativados no *modo Integrado*: servidores DNS, Kill Switch e exclusões de aplicativos. Você pode gerenciar a proteção DNS e rotear aplicativos por meio do proxy AdGuard VPN no aplicativo do bloqueador de anúncios AdGuard.

:::

O *Nível de registro* especifica quantos eventos de aplicativo são registrados. Não recomendamos habilitar os níveis de registro *Estendido* ou *Extremo*, a menos que seja solicitado por nossa equipe de suporte.

Nesta seção, você também pode exportar logs e informações do sistema para compartilhá-los com o suporte.

Os *Dados de diagnóstico* exibem as informações técnicas armazenadas localmente sobre o aplicativo, dispositivo e conexões. Você pode copiar e enviar para nossa equipe de suporte, se necessário.

A última seção de *Configurações avançadas* é *Configurações de nível baixo*. Pedimos que você não entre nesta seção, a menos que seja altamente qualificado ou tenha sido solicitado a fazê-lo por nossa equipe de suporte. Aqui é possível habilitar o registro da interface TUN ou protocolo IPv6 na interface VPN, escolher uma porta do servidor proxy ou versão do protocolo Internet que deve ser usada.

:::caution

Na opção **Versão IP preferencial**, antes de escolher entre IPv6 e IPv4, certifique-se de que sua rede suporta esse protocolo. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. E vice versa.

:::

### Suporte

Na seção *Suporte*, você pode consultar nossas Perguntas frequentes para obter respostas rápidas às suas perguntas, relatar bugs e sugerir novos recursos.

![Suporte *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
