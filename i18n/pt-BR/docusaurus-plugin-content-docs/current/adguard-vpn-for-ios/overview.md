---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para iOS?

Uma VPN permite que você crie uma conexão segura com outra rede na Internet. Ele conecta o computador ou o dispositivo móvel de um usuário a um servidor e permite navegar na Internet usando um endereço IP "secreto". Se o servidor VPN estiver localizado em outro país, parecerá que a conexão com a Internet foi estabelecida a partir desse país. [Saiba mais](/general/how-vpn-works) sobre como funciona uma VPN em detalhes.

O AdGuard VPN tem várias funções:

- esconde seu paradeiro real e ajuda você a permanecer anônimo
- ele altera seu endereço IP para proteger seus dados contra rastreamento
- criptografa seu tráfego e torna o conteúdo inacessível para golpistas
- permite que você configure onde usar e onde não usar a VPN (recurso de exclusões)

A próxima vantagem do AdGuard VPN para iOS é que temos nosso próprio protocolo VPN. É extremamente difícil de detectar em comparação com outros protocolos VPN e é estável mesmo com uma conexão de Internet ruim. Você pode [saber mais](/general/adguard-vpn-protocol) sobre o protocolo AdGuard VPN.

## Como usar AdGuard VPN para iOS

Para usar o AdGuard VPN para iOS, primeiro você precisa fazer login na sua [conta do AdGuard](https://my.adguard.com/). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard ou via Google, Apple ID ou Facebook (se sua conta do AdGuard foi registrada usando o mesmo endereço de e-mail).

Se você ainda não tem uma conta AdGuard, você terá que criá-la primeiro.

Usar o AdGuard VPN é muito fácil. Na tela principal você pode ver o botão *Conectar/Desconectar* e a lista de servidores disponíveis. Lá, os servidores têm sua própria localização (um determinado país e uma cidade) e um indicador de ping. O ping mostra o tempo de resposta do servidor (em milissegundos). Escolher o servidor com ping de 22 ms significa que um pacote de dados enviado para este servidor retorna (ou seja, é recebido novamente) após 22 ms. No AdGuard VPN, você pode escolher entre mais de 50 locais em dezenas de países.

![Tela principal e locais *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/1.png?123)

## Listas de exclusões

Você pode encontrar as Exclusões tocando no botão do meio abaixo. Lá você verá duas listas de exclusão, uma para o modo Geral e outra para o Seletivo. No modo Geral, a VPN funciona para todos os sites, exceto os excluídos. Por outro lado, no modo Seletivo, a VPN funciona apenas para sites da lista. Você pode adicionar domínios (por exemplo, `google.com`) ou subdomínios (por exemplo `*.google.com`) de sites de duas maneiras: você pode inseri-los manualmente no aplicativo ou diretamente do navegador, compartilhando as páginas desejadas com o AdGuard VPN.

![Exclusões *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.png?123)

Outro recurso útil é a importação/exportação de listas de exclusão. Você pode fazer isso seguindo as próximas quatro etapas:

1. Abra o AdGuard VPN no dispositivo/browser a partir do qual você pretende exportar suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `exclusions.zip` será baixado.

2. Existem dois arquivos `.txt` dentro do arquivo, um para cada uma das listas Geral e Seletiva. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.

3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo iOS para o seu Mac, certifique-se de enviar o arquivo `.zip` para o seu Mac antes.

4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo.

![Importar/exportar exclusões *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/import-export-exclusions.png)

## Configurações de aplicativo

Para acessar as configurações do aplicativo:

1. Toque no botão Configurações (⚙) no canto inferior direito da tela principal do aplicativo AdGuard VPN
2. Toque *Configurações do aplicativo*

Aqui, você pode configurar o AdGuard VPN para iOS conforme necessário usando diferentes opções: Modo operacional, servidor DNS, proteção automática de Wi-Fi, tema de cores e configurações avançadas.

![Configurações do aplicativo *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/app-settings.png)

### Modo operacional

O AdGuard VPN para iOS pode operar em dois modos: **Geral** e **Integrado**.

No modo **Geral**, é empregado o protocolo [AdGuard VPN](/general/adguard-vpn-protocol), que fornece a melhor combinação de velocidade e segurança. Nesse modo, o AdGuard VPN não poderá trabalhar junto [Bloqueador de anúncios do AdGuard para iOS](https://adguard.com/kb/adguard-for-ios/overview/).

No modo **Integrado**, o AdGuard VPN poderá funcionar ao mesmo tempo com o bloqueador de anúncios AdGuard para iOS usando o protocolo IPSec. Este protocolo também é seguro, mas um pouco mais lento e fácil de detectar. Você não precisa realizar nenhuma ação adicional para configurar a integração: basta instalar os dois aplicativos e alternar para este modo.

:::note

No modo **Integrado**, você não pode usar o recurso Exclusões ou escolher um servidor DNS.

:::

### Servidor DNS

Os servidores DNS traduzem um nome de domínio ou nome de host (por exemplo, exemplo.com ou www.exemplo.com) em algo que os navegadores possam entender, ou seja, endereços IP. O AdGuard VPN para iOS oferece uma escolha entre vários servidores DNS, cada um com suas próprias qualidades especiais. Por exemplo, o AdGuard DNS remove anúncios e protege seu dispositivo contra rastreamento, enquanto o AdGuard DNS Family Protection combina as funções do AdGuard DNS com pesquisa segura e bloqueio de conteúdo adulto. Os servidores DNS de diferentes provedores de DNS também podem funcionar mais rápido ou mais devagar, dependendo da sua localização, ISP e outros fatores. Escolha o que funciona melhor para você. Você pode [saber mais sobre o DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) e suas características.

![Tela do servidor DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/dns-server.png)

### Proteção automática de Wi-Fi

A VPN será ativada automaticamente quando o dispositivo se conectar a uma rede Wi-Fi.

### Tema

Você pode escolher o tema escuro, claro ou padrão do sistema para o aplicativo (disponível no iOS 13 e versões posteriores).

### Configurações avançadas

Em *Configurações avançadas*, você pode encontrar duas seções: Nível de registro e Informações de diagnóstico. Em relação à primeira opção, não é recomendado ativar o nível de registro estendido, a menos que solicitado pela nossa equipe de suporte. Informações de diagnóstico e informações técnicas sobre o dispositivo e conexões (endereço IP, ID, ping etc.) armazenadas localmente podem ser enviadas para nós em caso de problemas técnicos.

## Ações Rápidas (disponível no iOS 13 ou posterior)

Para acessar esse recurso, toque e pressione o ícone do aplicativo por alguns segundos, tirando o dedo logo em seguida. Você verá ações rápidas: Conectar/Desconectar, Selecionar local, Editar tela inicial e Remover aplicativo.

![Ações rápidas *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/quick-actions.png)

## Suporte

Há uma variedade de recursos de ajuda no aplicativo (pressione o botão *Configurações* no canto inferior direito e depois *Suporte*): você pode ver a seção FAQ, relatar um bug, deixar comentários, discutir seus problemas e sugestões nas redes sociais ou no GitHub, avaliar o AdGuard VPN para iOS na App Store e exportar registros.

![Suporte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/support.png)

## Assinatura

Se você estiver usando a versão gratuita do AdGuard VPN, a quarta aba terá um ícone de seta na barra inferior. Nesta seção, você encontrará informações breves sobre as principais vantagens da versão paga do app e poderá adquirir uma assinatura.

![Assinatura *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/subscription_en.png)
