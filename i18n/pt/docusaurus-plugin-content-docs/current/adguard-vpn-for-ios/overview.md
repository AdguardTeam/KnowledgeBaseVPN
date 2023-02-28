---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para iOS?

Uma VPN permite que você crie uma conexão segura com outra rede na Internet. Isso conectará o computador ou dispositivo móvel de um usuário a um servidor e permitirá que navegue na rede usando o endereço IP de outra pessoa. Portanto, se o servidor VPN estiver localizado em um país diferente, parecerá que você se conectou à Internet a partir deste país. [Saiba mais](/general/how-vpn-works.md) sobre como funciona uma VPN em detalhes.

Falando no AdGuard VPN, ele conta com várias funcionalidades:
* esconde seu paradeiro real e ajuda você a permanecer anônimo
* altera seu endereço IP para proteger seus dados de rastreamento
* criptografa seu tráfego para torná-lo inacessível para golpistas
* permite que você configure onde usar e onde não usar a VPN (recurso de exclusões)

A próxima vantagem do AdGuard VPN para iOS é que temos nosso próprio protocolo VPN. Ele tem dois benefícios principais: em comparação com outros protocolos VPN, é extremamente difícil de detectar e funciona de forma estável mesmo com uma conexão de Internet ruim. Você pode ler mais sobre o protocolo AdGuard VPN [neste artigo](../general/adguard-vpn-protocol.mdx).

## Como usar AdGuard VPN para iOS

Para usar o AdGuard VPN para iOS, primeiro você precisa fazer login na sua [conta do AdGuard](https://my.adguard.com/). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard ou via Google, Apple ID ou Facebook (se sua conta do AdGuard foi registrada usando o mesmo endereço de e-mail).

Se você ainda não tem uma conta AdGuard, você terá que criá-la primeiro.

Usar o AdGuard VPN é muito fácil. Na tela principal você pode ver o botão *Conectar/Desconectar* e a lista de servidores disponíveis. Lá, os servidores têm sua própria localização (um determinado país e uma cidade) e um indicador de ping. O ping descreve o tempo de resposta do servidor (em milissegundos). Por exemplo, escolher o servidor com ping de 22 ms significa que o sinal chegará ao servidor e retornará em 22 milissegundos. Então, quanto menor esta taxa, mais rápida será sua conexão. No AdGuard VPN, você pode escolher entre mais de 50 locais em dezenas de países.

![Tela principal e localizações](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusões

Você pode encontrar o recurso de exclusão tocando no botão do meio abaixo. Lá você verá duas listas de exclusão: para os modos geral e seletivo. No modo Geral, a VPN funciona em todos os sites, exceto os da lista de exclusão. No modo Seletivo, por outro lado, a VPN opera apenas nos sites da lista. Você pode adicionar domínios (por exemplo, `google.com`) ou subdomínios (por exemplo, `*.google.com`) de sites de duas maneiras: você pode inseri-los manualmente no aplicativo ou diretamente no navegador, clicando no botão *Compartilhar* e encontrar AdGuard VPN na lista aberta abaixo.

![Exclusões](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Outro recurso útil é a importação/exportação de listas de exclusão. Você pode fazer isso seguindo as próximas quatro etapas:

1. Abra o AdGuard VPN no dispositivo/browser a partir do qual você pretende exportar suas listas de exclusões. Find the appropriate section and click the *Export* button. O arquivo `exclusions.zip` será baixado.

2. Existem dois arquivos `.txt` dentro do arquivo, um para cada uma das listas Geral e Seletiva. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.

3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo iOS para o seu Mac, certifique-se de enviar o arquivo `.zip` para o seu Mac antes.

4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Find the appropriate section, click the *Import* button and select the archive.

![Importar/exportar exclusões](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configurações de aplicativo

Para acessar as configurações do aplicativo:

1. Toque no botão Configurações (⚙) no canto inferior direito da tela principal do aplicativo AdGuard VPN
2. Toque *Configurações do aplicativo*

Aqui, você pode configurar o AdGuard VPN para iOS conforme necessário usando diferentes opções: Modo operacional, servidor DNS, proteção automática de Wi-Fi, tema de cores e configurações avançadas.

![Configurações do aplicativo](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modo operacional

O AdGuard VPN para iOS pode operar em dois modos: **Geral** e **Integrado**.

No modo **Geral**, é empregado o protocolo [AdGuard VPN](../general/adguard-vpn-protocol.mdx), que oferece a melhor combinação de velocidade e segurança. In this mode, AdGuard VPN will not be able to work alongside [AdGuard Ad Blocker for iOS](https://adguard.com/kb/adguard-for-ios/overview/).

No modo **integrado**, o AdGuard VPN poderá funcionar ao mesmo tempo com o bloqueador de anúncios AdGuard para iOS usando o protocolo IPSec. Este protocolo também é seguro, mas um pouco mais lento e fácil de detectar. Você não precisa realizar nenhuma ação adicional para configurar a integração: basta instalar os dois aplicativos e alternar para este modo.
> Observe que no modo **Integrado** você não pode usar o recurso Exclusões ou o recurso de servidor DNS.

### Servidor DNS

O objetivo do sistema de nome de domínio (DNS) é traduzir os nomes dos sites em algo que os navegadores possam entender, ou seja, endereços IP. Este trabalho é executado por servidores DNS. O AdGuard VPN para iOS oferece uma escolha entre vários servidores DNS, cada um com suas próprias qualidades especiais. Por exemplo, o AdGuard DNS remove anúncios e protege seu dispositivo contra rastreamento, enquanto o AdGuard DNS Family Protection combina as funções do AdGuard DNS com SafeSearch e bloqueio de conteúdo adulto. Os servidores DNS de diferentes provedores de DNS também podem funcionar mais rápido ou mais devagar, dependendo da sua localização, ISP e outros fatores. Escolha o que funciona melhor para você. You can find out more about DNS and its characteristics [in this article](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns).

![Tela do servidor DNS](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Proteção automática de Wi-Fi

A VPN será ativada automaticamente quando o dispositivo se conectar a uma rede Wi-Fi.

### Tema

Você pode escolher o tema padrão do sistema, escuro ou claro do aplicativo (disponível no iOS 13 e versões posteriores).

### Configurações avançadas

Em *Configurações avançadas* você pode encontrar duas seções — Nível de registro e Informações de diagnóstico. Com relação à primeira opção, não é recomendável habilitar o nível de registro Estendido, a menos que solicitado por nossa equipe de suporte. Informações de diagnóstico e informações técnicas armazenadas localmente sobre o dispositivo e conexões (endereço IP, ID, ping etc.) podem ser enviadas para nós em caso de problemas técnicos.

## Ações Rápidas (disponível no iOS 13 ou posterior)

Para acessar esse recurso, toque e segure o ícone do aplicativo e levante o dedo. Você verá uma lista de Ações rápidas: Conectar/Desconectar ao servidor atualmente selecionado, Escolher localização para selecionar um novo local de servidor. Você também pode, é claro, acessar todas as ações padrão, como remover o aplicativo ou mover o ícone do aplicativo.

![Ações Rápidas](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Suporte

A realização dos usuários é a nossa maior prioridade. Portanto, há uma variedade de recursos de ajuda no aplicativo (pressione o botão *Configurações* no canto inferior direito e depois *Suporte*): você pode ver a seção de perguntas frequentes, relatar um bug, deixar comentários, discutir seus problemas e sugestões em nosso fórum, nas redes sociais ou no GitHub, avalie o AdGuard VPN para iOS na App Store e exporte os logs.

![Suporte](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Assinatura

Se você estiver usando a versão gratuita do AdGuard VPN, haverá a quarta guia com um ícone de seta na barra de guias inferior. Nesta seção você encontrará uma breve informação sobre as principais vantagens da versão paga do app e poderá adquirir uma assinatura.

![Assinatura](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
