---
title: Resumo de recursos
sidebar_position: 1
---

O AdGuard VPN para Mac é um serviço VPN de desktop. O AdGuard VPN é totalmente compatível com o AdGuard Ad Blocker, eles podem ser usados juntos e funcionarão perfeitamente. Vamos ver quais recursos ele tem a oferecer.

Observe que **você não pode usar o AdGuard VPN para Mac, a menos que tenha feito login na sua conta do AdGuard**. Você pode entrar com sua conta AdGuard ou com uma conta externa, ou seja, via Apple, Google ou Facebook. Certifique-se de que sua conta externa esteja vinculada ao mesmo endereço de e-mail da sua conta do AdGuard. Se houver uma assinatura adequada em sua conta do AdGuard, ela será ativada automaticamente no aplicativo de desktop. Ainda não tem uma conta AdGuard? Crie [aqui](https://auth. adguard. com/registration. html).

:::note Compatibilidade

Atualmente, o AdGuard VPN para Mac é compatível com versões do macOS a partir do macOS Catalina (10.15).

:::

## Tela inicial

![Tela inicial](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

A primeira guia é a Tela *Inicial*. Aqui você pode ver o status atual do AdGuard VPN, o local selecionado (se ativado) e seu ping. Ping é o tempo de resposta de um servidor VPN. Quanto menor o valor, mais rápida é a conexão. Se a VPN estiver desativada, o último local ao qual você se conectou será exibido na parte inferior.

Os locais mais rápidos com os menores pings são exibidos no canto superior direito da tela. Há também um botão de atualização que você pode clicar se algum local estiver offline. Abaixo pode ver a lista completa dos locais. O campo de pesquisa facilita encontrar o local desejado.

:::note

Usuários gratuitos podem se conectar apenas a determinados locais, enquanto outros são bloqueados. Além disso, há um limite de tráfego mensal de 3 GB na versão gratuita.

:::

## Exclusões

![Exclusões](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

O AdGuard VPN tem vários recursos que o tornam único e um deles é definitivamente *Exclusões*. Por padrão, o AdGuard VPN será executado em todos os sites e em todos os aplicativos, exceto aqueles da lista de exclusões. Mas você pode mudar para o outro modo, para que o AdGuard VPN seja executado apenas em sites e aplicativos da lista de exclusões.

![Tela de exclusões](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Além disso, você pode não somente adicionar sites às Exclusões, mas também escolher entre as listas de serviços populares. As listas estão divididas em oito categorias: Redes sociais, Mensageiros, Serviços de streaming de vídeo e música, Jogos, Compras, Mecanismos de Pesquisa e Ferramentas de comunicação no trabalho. Qualquer um desses serviços pode ser adicionado às Exclusões em um clique! É especialmente conveniente se você usar o modo seletivo.

A lista de exclusão pode ser facilmente configurada. Se você adicionou um domínio e alguns de seus subdomínios, eles serão agrupados dentro do domínio raiz. Ao adicionar um domínio raiz (`exemplo.com`) sua máscara também é adicionada (`*.exemplo.com`).

:::info Browsers added to Exclusions

Starting with the version 2.4, all browsers are automatically added to the list of exclusions when the VPN is active only for selected apps and websites. This change brings more convenience for users who were often confused and didn’t know whether to consider their browsers as apps or not. It applies under the following conditions:

- The user has installed AdGuard VPN for the first time
- The user did not modify the Exclusions settings prior to v2.4

:::

Se você adicionou um serviço, alterou ou removeu algo e agora deseja recuperar as configurações iniciais, basta pressionar *Redefinir para o padrão* ao lado do domínio - esta ação restaurará todos os domínios ausentes e marcará todas as caixas de seleção.

Além disso, listas de exclusões prontas podem ser transferidas para outros dispositivos com o AdGuard VPN instalado. Para exportar exclusões, siga as instruções de quatro etapas abaixo:

1. Abra o AdGuard VPN no dispositivo de onde você deseja exportar as suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `exclusions.zip` será baixado.
2. Existem dois arquivos `.txt` dentro do arquivo, cada um para as listas Geral e Seletiva. Adicione mais exclusões a eles, exclua os existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe o arquivo com os arquivos como está.
3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do Mac para o iPhone, certifique-se de enviar o arquivo `.zip` para o telefone com antecedência.
4. Abra o AdGuard VPN no dispositivo/navegador onde deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo. Feito!

:::note

Arquivos de outros dispositivos podem ser importados de forma semelhante para o seu AdGuard VPN para Mac.

:::

## Estatísticas

![Tela de estatísticas](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

A tela Estatísticas fornece informações detalhadas sobre o tráfego consumido por local e aplicativo, os locais e aplicativos mais usados. Visualize os dados do dia, mês ou de todo o tempo em que o AdGuard VPN para Mac está em uso.

É importante ressaltar que todos os dados são armazenados localmente no seu dispositivo, para que ninguém além de você tenha acesso a eles. O recurso Estatísticas está disponível para usuários com uma assinatura do AdGuard VPN.

## Suporte

![Tela de suporte](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

A quarta guia é a tela *Suporte*. Encontre respostas para quaisquer perguntas nas seções [Perguntas frequentes](https://adguard-vpn.com/welcome.html#faq) ou na [Base de conhecimento](/), relate um bug se encontrar um ou [discuta o AdGuard em qualquer uma das plataformas](https://adguard.com/discuss.html). E sinta-se à vontade para [deixar comentários sobre nosso produto](https://surveys.adguard.com/vpn_mac/form.html), ficaremos gratos.

## Configurações

![Configurações](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Por fim, chegamos à guia Configurações. Na seção *Sobre o programa*, você pode ver a versão atual do AdGuard VPN, verificar se há atualizações, visitar nosso site oficial e se familiarizar com o EULA e a política de privacidade do AdGuard. Na seção *Sobre a licença* , você pode atualizar de gratuito para ilimitado, gerenciar sua assinatura ou sair. E o mais importante, a partir daqui você pode acessar *Configurações gerais*.

### Configurações de aplicativo

![Configurações de aplicativo](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Os primeiros quatro recursos básicos tornam o aplicativo mais conveniente e fácil de usar, ou seja, *Kill Switch*, *Autoupdate*, *Iniciar AdGuard VPN no login*, e *Auto conectar no início da aplicação*. Além do mais, você pode escolher entre temas claros, escuros e do sistema - o último corresponde ao tema do seu Mac.

Você também pode permitir que o AdGuard VPN colete e envie relatórios de erros anônimos, dados técnicos e de interação para nos ajudar a melhorar nosso aplicativo. Por último, mas não menos importante, você pode exportar logs do seu Mac. Isso pode ser útil se você quiser anexar logs à sua mensagem para o suporte.

### Servidores DNS

![Servidores DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Um ou mais servidores DNS podem ser configurados aqui. Isso é útil se você não quiser depender do servidor DNS padrão fornecido pelo seu ISP. Selecione um na lista de serviços DNS populares ou adicione um servidor personalizado manualmente. Recomendamos adicionar o AdGuard DNS, que não apenas criptografa seu tráfego DNS, mas também identifica solicitações para sites maliciosos e as redireciona para um "buraco negro".

### Configurações avançadas

![Configurações avançadas](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Nível de registro

Existem apenas dois níveis de registro, mas recomendamos enfaticamente que você use o primeiro, o padrão. A segunda opção (registro estendido) deve ser definida apenas para registrar um comportamento estranho do programa após consultar nosso suporte técnico. Se você ativou o nível de registro estendido, certifique-se de mudar para o padrão após registrar os logs.

#### Ocultar ícone da barra de menus

Embora esta opção esteja localizada em *Configurações avançadas*, ela pode ser ativada sem hesitação. Você pode ocultar o ícone do AdGuard VPN na barra de menus, isso não impedirá que nosso aplicativo seja executado em segundo plano.

#### Usar QUIC

O protocolo de comunicação QUIC é a versão mais recente e avançada do HTTP. Alterne o switch para obter uma melhor qualidade de conexão em condições abaixo do ideal, ao usar dados móveis no metrô ou elevador, por exemplo.
