---
title: Resumo de recursos
sidebar_position: 1
---

## O que é o AdGuard VPN para iOS?

Uma VPN permite que você crie uma conexão segura com outra rede na Internet. Ele conecta o computador ou dispositivo móvel de um usuário a um servidor e permite navegar na Internet usando um endereço IP "cobertura". Se o servidor VPN estiver localizado em outro país, parecerá que sua conexão com a Internet foi estabelecida a partir deste país. Para obter mais detalhes, você pode conferir [nosso artigo sobre como funciona uma VPN](/general/how-vpn-works).

O AdGuard VPN tem várias funções:

- Esconde sua localização real e ajuda você a permanecer anônimo
- Altera seu endereço IP para proteger seus dados contra rastreamento
- Criptografa seu tráfego e torna o conteúdo inacessível para golpistas
- Permite que você configure onde usar e onde não usar a VPN (recurso de exclusões)

A próxima vantagem do AdGuard VPN para iOS é que temos nosso próprio protocolo VPN. É extremamente difícil de detectar em comparação com outros protocolos VPN e é estável mesmo com uma conexão de Internet ruim. [Leia mais sobre o protocolo AdGuard VPN](https://trusttunnel.org/).

## Como usar AdGuard VPN para iOS

Para usar o AdGuard VPN para iOS, primeiro você precisa fazer login na sua [conta do AdGuard](https://my.adguard.com/). Você pode fazer login diretamente com as credenciais da sua conta do AdGuard ou via Google, Apple ID ou Facebook (se sua conta do AdGuard foi registrada usando o mesmo endereço de e-mail).

Se você ainda não tem uma conta do AdGuard, terá que criá-la primeiro.

Usar o AdGuard VPN é muito fácil. Na tela principal, você pode ver o botão *Conectar* (*Desconectar*) e a lista de servidores disponíveis (nós os chamamos de *locais*). Cada servidor tem sua própria localização (um determinado país e uma cidade) e indicador de ping.

O ping mostra o tempo de resposta do servidor em milissegundos. Isso indica a velocidade da conexão VPN quando você se conectar a esse local. Selecionar um servidor com um ping de 22 ms significa que um pacote de dados enviado a este servidor será retornado em 22 ms.

With AdGuard VPN, you can choose from over 85 locations in dozens of countries.

![Tela principal e locais *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Exclusões

Você pode encontrar a guia Exclusões tocando no segundo ícone na barra inferior.

Por padrão, o AdGuard VPN está ativo para todos os sites, exceto aqueles adicionados às Exclusões. Você também pode ativá-la seletivamente - a VPN estará ativa apenas para sites específicos. Para mudar para esse modo, toque em *Alterar modo*.

:::note

Cada modo tem sua própria lista de exclusão.

:::

Você pode adicionar domínios (por exemplo, `google.com`) ou subdomínios (por exemplo, `news.google.com`) de sites às listas de três maneiras:

- Insira-os manualmente no aplicativo
- [Escolha entre as listas de domínios de serviços populares](#domain-lists-for-popular-services)
- Adicione-os diretamente do navegador compartilhando as páginas desejadas com o aplicativo AdGuard VPN

![Exclusões *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Quando você adiciona manualmente um domínio, todos os subdomínios são adicionados automaticamente (aparece como `*.google.com`). Deseja manter apenas o google.com ou desativar a VPN para um domínio específico? Toque na linha com o site — isso abrirá uma tela separada, onde você poderá gerenciar os subdomínios. Basta desmarcar os quais você não precisa.

![Subdomínios *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Se você adicionar um subdomínio manualmente, o domínio principal também será adicionado — mas a caixa de seleção ao lado dele não será marcada.

### Listas de domínios de serviços populares

Lidar com grandes serviços, como o Google, é complicado. Eles geralmente usam mais de um domínio — um para arquivos de mídia, outro para a API, além de domínios para diferentes países. Por exemplo, no caso do Google, temos 416 domínios em nossa lista — todos eles precisam ser adicionados às Exclusões para desativar (ou ativar) completamente a VPN para o serviço.

Veja como adicionar todos os domínios necessários para um serviço popular à lista de exclusão:

1. Abra *Exclusões*.
2. Toque em *Adicionar site*.
3. Toque em *Da lista*.
4. Encontre o serviço desejado na lista e toque em *Adicionar*.

![Lista de serviços populares *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Importar/exportar exclusões

Outro recurso útil é a importação e exportação de listas de exclusão. Dessa forma, você pode compartilhar listas de exclusão de e para outros dispositivos.

Você pode fazer isso em quatro etapas:

1. Abra o AdGuard VPN no dispositivo de onde deseja exportar suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `exclusions.zip` será baixado.

2. Existem dois arquivos `.txt` dentro do arquivo, um para cada uma das listas Geral e Seletiva. Adicione mais exclusões a elas, exclua as existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe-os como estão.

3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do seu dispositivo iOS para o seu Mac, certifique-se de enviar o arquivo `.zip` para o seu Mac antes.

4. Abra o AdGuard VPN no dispositivo para o qual deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo.

**No AdGuard VPN para iOS, os recursos de exportação e importação podem ser acessados tocando no ícone de três pontos no canto superior direito da tela Exclusões**.

![Importar/exportar exclusões *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Locais salvos

Este recurso permite que você salve suas localizações de servidor favoritas em uma aba dedicada para que você possa acessá-las rapidamente sem precisar pesquisar ou rolar por toda a lista.

Para adicionar uma localização a *Salvos*, basta deslizar para a esquerda sobre ela. Para remover dos *Salvos*, faça o mesmo:

![Adicionar e remover locais salvos *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## Configurações gerais

Para abrir as configurações gerais:

1. Toque no ícone Configurações (⚙) no canto inferior direito da tela principal do aplicativo.
2. Toque em *Geral*.

Aqui, você pode configurar o AdGuard VPN para iOS conforme necessário usando diferentes opções: *Servidor DNS*, *Tema*, *Avançado*, *Enviar dados técnicos e de interação* e *Kill Switch*.

![Configurações gerais *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### Servidor DNS

O AdGuard VPN para iOS oferece uma escolha entre vários servidores DNS, cada um com suas próprias qualidades especiais. Por exemplo, o AdGuard DNS remove anúncios e protege seu dispositivo contra rastreamento, enquanto o AdGuard DNS Family Protection combina as funções do AdGuard DNS com pesquisa segura e bloqueio de conteúdo adulto. Os servidores DNS de diferentes provedores de DNS também podem funcionar mais rápido ou mais devagar, dependendo da sua localização, ISP e outros fatores. Escolha o que funciona melhor para você. Você pode [saber mais sobre o DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) e suas características.

![Tela do servidor DNS *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Tema

Você pode definir o tema do seu aplicativo como Sistema, Escuro ou Claro (disponível no iOS 13 ou posterior).

### Configurações avançadas

Em configurações *Avançadas*, você pode encontrar 4 seções — *Modo de operação*, *Nível de registro*, *Exportar registros e informações do sistema* e *Informações de diagnóstico*.

#### Modo operacional

O AdGuard VPN para iOS pode operar em dois modos: **VPN** e **Integrado**.

O modo *VPN* usa o [protocolo AdGuard VPN](https://trusttunnel.org/), que fornece a melhor combinação de velocidade e segurança. Neste modo, o AdGuard VPN não funcionará com o [AdGuard Ad Blocker para iOS](https://adguard.com/adguard-ios/overview.html).

No **modo Integrado**, o AdGuard VPN poderá funcionar simultaneamente com o AdGuard Ad Blocker para iOS usando o protocolo IPSec. Este protocolo também é seguro, mas um pouco mais lento e fácil de detectar. Você não precisa fazer nada para configurar a integração: basta instalar os dois aplicativos e alternar para este modo.

:::observação

No **modo Integrado**, você não pode usar o recurso Exclusões ou escolher um servidor DNS.

:::

#### Nível de registro

Esta configuração é usada principalmente para fins de depuração e solução de problemas. Os níveis de registro Estendido e Extremo registram informações mais detalhadas que podem ajudar a identificar e corrigir vários problemas ou bugs.

:::caution

**Não é recomendável ativar o nível de registro Estendido ou Extremo, a menos que seja solicitado por nossa equipe de suporte**.

:::

#### Exportar registros e informações do sistema

Esta opção pode ser usada para enviar os logs do aplicativo e informações do sistema para nosso suporte ou qualquer outra pessoa.

#### Dados de diagnóstico

Esta opção permite exportar informações técnicas que podem ser úteis na resolução de problemas e que às vezes são solicitadas por nossa equipe de suporte e desenvolvedores.

#### Protocolo do AdGuard VPN

![Selecione o protocolo VPN *mobile_border](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.8/Auto_EN.PNG)

Por padrão, o Protocolo do AdGuard VPN usa a seleção dinâmica de protocolo VPN (opção *Seleção automática*). Isso significa que o AdGuard VPN determina automaticamente qual protocolo — HTTP2/TLS ou HTTP3/QUIC — oferecerá o melhor desempenho e muda para ele instantaneamente. Isso melhora a velocidade e a estabilidade da VPN, o que é especialmente útil em regiões onde o uso de VPN é restrito ou instável.

Se desejar, você pode alternar o AdGuard VPN para usar apenas o protocolo HTTP2/TLS ou HTTP3/QUIC em vez de *Seleção automática*. Cada protocolo tem seus pontos fortes, mas a melhor escolha pode variar dependendo da sua localização, das condições da rede e até mesmo do servidor ao qual você se conecta.

### Enviar dados técnicos e de interação

Ao ativar esta opção, você nos ajuda a entender melhor como os usuários interagem com o app. Usamos essas informações para melhorar a experiência do usuário.

### Kill Switch

Se, por algum motivo, sua conexão VPN cair repentinamente, o *Kill Switch* encerrará automaticamente a conexão com a Internet, garantindo que seus dados não vazem e sua identidade permaneça oculta.

## Ações rápidas

As ações rápidas são a maneira conveniente de realizar ações úteis ou específicas do aplicativo na tela inicial sem abrir um aplicativo.

Para acessar o menu de ações rápidas, toque e segure o ícone do aplicativo AdGuard VPN e, em seguida, levante o dedo. No menu aberto, você verá as ações rápidas do AdGuard VPN: *Conectar* (*Desconectar*) e *Selecionar local*. Você também pode acessar todas as ações padrão, como remover o aplicativo ou mover ou compartilhar o aplicativo.

![Ações rápidas *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Suporte

A tela Suporte (*Configurações* → *Suporte*) tem uma série de recursos úteis: *Perguntas frequentes*, *Relatar um bug*, *Solicitar um recurso* e *Avaliar aplicativo*. O último permite que você avalie o AdGuard VPN para iOS na App Store.

![Suporte *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Tela de assinatura

Se você estiver usando a versão gratuita do AdGuard VPN, haverá outra guia com um ícone de seta na barra de guias inferior. Esta seção descreve brevemente os principais benefícios da versão paga do aplicativo. Você pode escolher uma assinatura anual ou mensal.

![Assinatura *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
