---
title: Resumo de recursos
sidebar_position: 1
---

O AdGuard VPN para Mac é um serviço VPN de desktop. O AdGuard VPN é totalmente compatível com o AdGuard Ad Blocker, eles podem ser usados juntos e funcionarão perfeitamente. Vamos ver quais recursos ele tem a oferecer.

Observe que **você não pode usar o AdGuard VPN para Mac, a menos que tenha feito login na sua conta do AdGuard**. Você pode entrar com sua conta AdGuard ou com uma conta externa, ou seja, via Apple, Google ou Facebook. Certifique-se de que sua conta externa esteja vinculada ao mesmo endereço de e-mail da sua conta do AdGuard. Se houver uma assinatura adequada em sua conta do AdGuard, ela será ativada automaticamente no aplicativo de desktop. Ainda não tem uma conta AdGuard? Crie [aqui](https://auth. adguard. com/registration. html).

:::note Compatibility

Atualmente, o AdGuard VPN para Mac é compatível com versões do macOS a partir do macOS Catalina (10.15).

:::

## Tela inicial

![Home screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/main_en.png)

A primeira guia é a Tela *Inicial*. Aqui você pode ver o status atual do AdGuard VPN e o [modo de exclusões](#exclusions), local escolhido (se ativado) e seu ping. Ping é o tempo de resposta de um servidor VPN. Consequently, the lower this number, the faster the connection. Se a VPN estiver desativada, o último local ao qual você se conectou é exibido abaixo. Os locais mais rápidos com os pings mais baixos são exibidos no canto superior direito da tela. Abaixo pode ver a lista completa dos locais. Através da função de pesquisa, o local necessário pode ser facilmente encontrado.

:::note

Usuários gratuitos podem se conectar apenas a determinados locais, enquanto outros são bloqueados. Além disso, há um limite de tráfego mensal de 3 GB na versão gratuita.

:::

## Exclusões

![Exclusões](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_en.png)

AdGuard VPN has several features that make it unique, and one of them is definitely *Exclusions*. By default, AdGuard VPN will run on all websites and in all apps but the ones from the exclusions list. But you can switch to the other mode, so AdGuard VPN will run only on websites and in apps from the exclusions list.

![Tela de exclusões](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_en.png)

Além disso, você pode não somente adicionar sites às Exclusões, mas também escolher entre as listas de serviços populares. As listas estão divididas em oito categorias: Redes sociais, Mensageiros, Serviços de streaming de vídeo e música, Jogos, Compras, Mecanismos de Pesquisa e Ferramentas de comunicação no trabalho. Qualquer um desses serviços pode ser adicionado às Exclusões em um clique! É especialmente conveniente se você usar o modo seletivo.

A lista de exclusão pode ser facilmente configurada. Se você adicionou um domínio e alguns de seus subdomínios, eles serão agrupados dentro do domínio raiz. Ao adicionar um domínio raiz (`exemplo.com`) sua máscara também é adicionada (`*.exemplo.com`).

Se você adicionou um serviço, alterou ou removeu algo e agora deseja recuperar as configurações iniciais, basta pressionar *Redefinir para o padrão* ao lado do domínio - esta ação restaurará todos os domínios ausentes e marcará todas as caixas de seleção.

Além disso, listas de exclusões prontas podem ser transferidas para outros dispositivos com o AdGuard VPN instalado. Para exportar exclusões, siga as instruções de quatro etapas abaixo:

1. Abra o AdGuard VPN no dispositivo de onde você deseja exportar as suas listas de exclusões. Encontre a seção apropriada e clique no botão *Exportar*. O arquivo `exclusions.zip` será baixado.
2. Existem dois arquivos `.txt` dentro do arquivo, cada um para as listas Geral e Seletiva. Adicione mais exclusões a eles, exclua os existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe o arquivo com os arquivos como está.
3. Ao transferir entre dispositivos diferentes, não se esqueça de enviar o arquivo `.zip` para o dispositivo para importação. Por exemplo, se você importar listas de exclusão do Mac para o iPhone, certifique-se de enviar o arquivo `.zip` para o telefone com antecedência.
4. Abra o AdGuard VPN no dispositivo/navegador onde deseja importar o arquivo com as listas de exclusões prontas. Encontre a seção apropriada, clique no botão *Importar* e selecione o arquivo. Feito!

:::note Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Suporte

![Tela de suporte](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_en.png)

A terceira guia é a tela *Suporte*. Find answers to any questions in the [FAQ](https://adguard-vpn.com/welcome.html#faq) or in the [Knowledge base](/) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/discuss.html). E sinta-se à vontade para [deixar comentários sobre nosso produto](https://surveys.adguard.com/vpn_mac/form.html), ficaremos gratos.

## Configurações

![Configurações](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_en.png)

Por fim, chegamos à guia Configurações. Na seção *Sobre o programa*, você pode ver a versão atual do AdGuard VPN, verificar se há atualizações, visitar nosso site oficial e se familiarizar com o EULA e a política de privacidade do AdGuard. Na seção *Sobre a licença* , você pode atualizar de gratuito para ilimitado, gerenciar sua assinatura ou sair. E o mais importante, a partir daqui você pode acessar *Configurações gerais*.

### Configurações de aplicativo

![Configurações de aplicativo](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_en.png)

Os primeiros quatro recursos básicos tornam o aplicativo mais conveniente e fácil de usar, ou seja, *Kill Switch*, *Autoupdate*, *Iniciar AdGuard VPN no login*, e *Auto conectar no início da aplicação*. Além do mais, você pode escolher entre temas claros, escuros e do sistema - o último corresponde ao tema do seu Mac.

You can also allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, you can export logs from your Mac. Isso pode ser útil se você quiser anexar logs à sua mensagem para o suporte.

### Servidores DNS

![Servidores DNS](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_en.png)

Aqui você pode adicionar um servidor DNS personalizado (ou servidores) para não depender de um servidor DNS fornecido por seu ISP por padrão. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious websites and redirects them to a “blackhole”.

### Configurações avançadas

![Configurações avançadas](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_en.png)

#### Nível de registro

Existem apenas dois níveis de registro, mas recomendamos enfaticamente que você use o primeiro, o padrão. A segunda opção (registro estendido) deve ser definida apenas para registrar um comportamento estranho do programa após consultar nosso suporte técnico. If you have enabled the extended logging level, make sure to switch to the default one after recording logs.

#### Ocultar ícone da barra de menus

Embora esta opção esteja localizada em *Configurações avançadas*, ela pode ser ativada sem hesitação. Você pode ocultar o ícone do AdGuard VPN na barra de menus, isso não impedirá que nosso aplicativo seja executado em segundo plano.

#### Usar QUIC (experimental)

O protocolo de comunicação QUIC é a versão mais recente e avançada do HTTP. Alterne o switch para obter uma melhor qualidade de conexão em condições abaixo do ideal, ao usar dados móveis no metrô ou elevador, por exemplo.
