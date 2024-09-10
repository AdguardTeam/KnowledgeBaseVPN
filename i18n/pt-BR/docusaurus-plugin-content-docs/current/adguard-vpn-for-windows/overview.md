---
title: Resumo de recursos
sidebar_position: 1
---

## O que o AdGuard VPN para Windows faz

- Protege contra a interceptação de tráfego de rede (spoofing). O AdGuard VPN cria um túnel criptografado entre seu dispositivo e um servidor remoto. Todo o tráfego da Internet passa por esse túnel, portanto, seus dados são protegidos ao longo do caminho. E graças ao [protocolo exclusivo do AdGuard](/general/adguard-vpn-protocol), você tem a garantia de uma conexão rápida e segura.

- Mascara seu endereço IP. Seu endereço IP real é a chave de acesso para seus dados pessoais por parte dos cibercriminosos. Seu nome, endereço de e-mail, número de telefone e informações de cartão de crédito podem cair nas mãos de golpistas se você não ocultar seu IP. Com o AdGuard VPN, todo o seu tráfego passa por um túnel criptografado e chega ao servidor VPN. O servidor web registra o endereço IP do ponto final do túnel, ou seja, o servidor VPN, e não o endereço IP real do dispositivo.

- Oculta sua localização real. O que isso te proporciona? Por exemplo, a capacidade de reservar um hotel com tarifas locais ou ocultar a publicidade baseada na localização geográfica.

O AdGuard VPN para Windows tem muitas vantagens, por isso dedicamos [um artigo separado](/general/why-adguard-vpn) a elas. Aqui, no entanto, queremos focar mais no próprio aplicativo e como ele funciona.

## Como começar a usar o AdGuard VPN para Windows

Para começar a usar o AdGuard VPN para Windows, baixe o aplicativo em [nosso site](https://adguard-vpn.com/welcome.html). A instalação não leva mais de um minuto — e você verá uma janela de diálogo onde precisará marcar pelo menos uma caixa aplicando os termos do Contrato do Usuário e a Política de Privacidade. And it's up to you to decide whether you want AdGuard to collect anonymized data about your app usage. Por fim, o programa solicitará que você faça login, seja por meio da [conta do AdGuard](https://auth.adguard.com/login.html) ou por meio de redes sociais (Apple, Google, Facebook). Isso é tudo, agora você pode usar o AdGuard VPN para Windows.

## Tela inicial

![Página inicial do AdGuard VPN para Windows *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

O item mais notável na **Tela inicial** é o botão Conectar/Desconectar do AdGuard VPN, abaixo do qual você pode ver o servidor selecionado. No lado direito da tela, você verá uma lista de locais disponíveis. O local mais rápido, ou seja, aquele com o ping mais baixo, é mostrado no topo da lista. Há também um botão de atualização no qual você pode clicar se algum local estiver offline.

Na parte superior da tela, há um painel de navegação com cinco guias: **Início**, **Exclusões**, **Estatísticas**, **Suporte** e **Configurações**.

## Exclusões

Por padrão, o AdGuard VPN para Windows funciona em todos os lugares. Você pode adicionar sites e aplicativos que deseja excluir do túnel VPN à lista de exclusões. Ou você pode fazer o AdGuard VPN funcionar apenas nos sites e aplicativos especificados na lista de exclusões. Observe que essas duas listas são independentes uma da outra.

![Exclusões *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Você pode adicionar sites às exclusões **manualmente** inserindo seus nomes de domínio. O aplicativo também oferece a opção de escolher sites populares **da lista**.

![Adicionar exclusões da lista *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

Ao adicionar domínios manualmente, você deve levar em consideração certos detalhes. Por exemplo, se você excluir manualmente o domínio `google.com`, todos os subdomínios `*.google.com` também serão adicionados à lista de exclusões. No entanto, nomes de domínio com outros domínios de nível superior, como `google.es` ou `google.it`, não serão excluídos. Ou você pode adicionar `youtube.com` às exclusões, mas o domínio do mesmo serviço `youtu.be` não será incluído na lista.

:::

Recomendamos usar a opção **Da lista**. Os sites são agrupados em oito categorias: Redes sociais, Mensageiros, Serviços de streaming de vídeo e música, Jogos, Compras, Mecanismos de pesquisa e Ferramentas de comunicação de trabalho. Colocamos os serviços mais populares lá, incluindo todos os nomes de domínio e subdomínios relacionados a cada plataforma.

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

### Importar/exportar listas de exclusões

Para exportar a lista de exclusões do AdGuard VPN para Windows para o seu computador, clique em **Exportar exclusões**, selecione a pasta onde a lista será armazenada e clique em **Salvar**. The archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. Você pode editá-los adicionando novas exclusões ou excluindo antigas.

No dispositivo de destino, abra o AdGuard VPN, clique em *Exclusões* e selecione *Sites* ou *Aplicativos*. Clique em *Importar exclusões* e selecione o arquivo recebido.

## Estatísticas

![Tela de estatísticas *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

A tela Estatísticas mostra informações detalhadas sobre o uso de dados, categorizadas por local e aplicativo. Ele destaca seus locais e aplicativos usados com mais frequência. Você pode acessar estatísticas de diferentes períodos: diários, mensais ou de todo o tempo que usou o AdGuard VPN para Windows.

Crucialmente, todas essas informações são armazenadas exclusivamente em seu dispositivo, garantindo que somente você possa vê-las. O acesso ao recurso de estatísticas está disponível apenas para assinantes do AdGuard VPN.

## Configurações

![Configurações *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

A quarta guia contém seções que ajudarão você a personalizar o aplicativo.

### Configurações de aplicativo

![Configurações de aplicativos *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

Na seção **Configurações do aplicativo**, você pode definir o idioma do aplicativo e também ativar o **Kill Switch**, que bloqueará o acesso à Internet se sua conexão VPN cair. Isso é necessário para evitar que invasores acessem seus dados se você não tiver proteção VPN enquanto estiver conectado a um Wi-Fi público ou rede móvel.

Você também pode ativar os seguintes recursos com um único clique: **Atualização automática**, **Iniciar o AdGuard VPN na inicialização do Windows**, **Conexão automática ao iniciar o aplicativo** e permitir que o AdGuard colete dados anônimos de uso do aplicativo para que a equipe do AdGuard receba as informações sobre potenciais problemas de usabilidade. Aqui você também pode mudar o tema para **Claro**, **Sistema** ou **Escuro**.

Na parte inferior da página, há duas seções: **Servidores DNS** e **Configurações avançadas**.

#### Servidores DNS

A guia **Servidores DNS** permite adicionar seu próprio servidor DNS — manualmente ou da lista. Você pode configurar um servidor DNS por qualquer provedor. Recomendamos adicionar o [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), um servidor que pode proteger contra publicidade, rastreamento e phishing, além das funções padrão.

#### Configurações avançadas

É perfeitamente possível usar o AdGuard VPN para Windows sem nunca tocar nas configurações avançadas, mas elas podem ser úteis se você estiver disposto a dedicar um tempo para aprender o que elas fazem.

##### Modo de operação

Apesar de existirem dois modos de operação — VPN e SOCKS5 — aconselhamos que você use apenas aquele escolhido por padrão (VPN). Quando o **modo VPN** está ativado, todo o tráfego do seu dispositivo será direcionado por meio do AdGuard VPN, enquanto no **modo SOCKS5** o AdGuard VPN usa um servidor proxy local que pode ser usado por outros aplicativos para redirecionar seu tráfego.

##### Nível de registro

Dois níveis de registro estão disponíveis para escolher: **Registrar por padrão** e **Registrar tudo**. A primeira opção está ativada por padrão. A opção **Registrar tudo** só deve ser ativada se nossa equipe de suporte tiver solicitado que você faça isso. Usar o aplicativo neste modo por um longo período de tempo resulta em maior consumo de bateria.

Todos os logs são armazenados localmente no seu dispositivo e você pode enviá-los para a equipe de suporte, se necessário.

##### Usar QUIC

Este é um recurso experimental que permite ao AdGuard usar o protocolo de criptografia QUIC avançado. Ele tem muitas vantagens, mas a mais notável é que pode melhorar a qualidade da conexão em condições não ideais, por exemplo, ao usar Internet móvel ou ao conectar-se a redes Wi-Fi públicas.

#### Usar WinTun

![Usar WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

O WinTun é um driver de roteamento de tráfego comumente usado para implementações de VPN no Windows que melhora a qualidade das conexões VPN criando um adaptador de rede virtual. Por padrão, o AdGuard VPN usa o driver WFP regular (e o driver TDI para Windows 7).

#### Exclusões de sub-rede

Este recurso permite adicionar sub-redes para excluir tráfego de dispositivos específicos conectados à sua rede. Por exemplo, seu aspirador de pó robô.

## Outras guias

### Sobre

A guia **Sobre** fornece informações sobre a versão atual do AdGuard VPN para Windows, um botão de atualização e links para o site do AdGuard VPN, EULA e Política de Privacidade.

### Conta

Aqui você encontra informações sobre o status da sua licença, bem como um link para sua conta pessoal do AdGuard, onde você pode gerenciar suas assinaturas atuais e adquirir novas.

## Suporte

Esta guia visa solucionar as dúvidas dos usuários: lá você encontra um link para a página de perguntas frequentes, relata um bug ou deixa um feedback e exporta logs se a equipe de suporte solicitar.
