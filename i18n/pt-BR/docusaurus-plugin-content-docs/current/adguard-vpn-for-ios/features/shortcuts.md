---
title: Atalhos
sidebar_position: 1
sidebar_label: Atalhos
---

O Atalhos, uma ferramenta integrada ao iOS, facilita gerenciar suas conexões sem abrir o AdGuard VPN. Você pode colocar um atalho de _Conectar_, _Desconectar_ ou _Alternar VPN_ na Tela de Início, na Central de Controle ou em um widget, ou configurar uma frase da Siri para conectar com a sua voz.

Os atalhos também podem incluir automações mais complexas. Por exemplo, seu aplicativo bancário pode não funcionar com uma VPN ativada, mas você sempre quer que ela esteja ativada para o Instagram, ou quer que sua VPN seja desativada automaticamente no Wi-Fi de casa. O Atalhos permite automatizar esses cenários.

## Antes de começar

Certifique-se de que:

- Você tem o aplicativo Atalhos instalado no seu iPhone ou iPad;
- AdGuard VPN está instalado;
- Você iniciou sessão no AdGuard VPN e tem um perfil de VPN instalado.

## Conectar ou desconectar com um toque

O AdGuard VPN oferece três atalhos prontos: _Conectar_, _Desconectar_, _Alternar VPN_. _Conectar_ ativa a VPN e conecta à sua última localização usada. _Desconectar_ desativa a VPN. _Alternar VPN_ alterna entre os dois: conecta quando a VPN está desativada e desconecta quando ela está ativada. Você encontrará esses atalhos em _Atalhos do Aplicativo_ no aplicativo Atalhos. Adicione qualquer um deles aos três locais listados abaixo.

### Tela inicial

Para configurar um atalho na sua Tela de Início, siga as instruções rápidas no aplicativo AdGuard VPN. (_Configurações_ → _Atalhos_ → _Adicionar atalhos à Tela Inicial_).

![Instruções no aplicativo \*mobile_border](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/in_app_instructions.png)

As instruções variam entre as versões do iOS. Aqui estão as instruções para o iOS 26:

1. Acesse o aplicativo Atalhos e toque no botão mais (+).
2. Selecione _AdGuard VPN_.
3. Escolha o atalho que você precisa: _Conectar à VPN_, _Desconectar da VPN_, _Alternar conexão da VPN_ ou _Status da VPN_.

![Adicionar atalho](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_shortcut.png)

Veja como adicionar o atalho à sua Tela de Início.

1. Mantenha o atalho pressionado e toque em _Compartilhar_ → _Adicionar à Tela de Início_.
2. Personalize o nome e o ícone do atalho se precisar e depois toque em _Adicionar_. O atalho aparecerá na sua tela inicial como um ícone 1x1.

![Adicionar à Tela Inicial](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_home_screen.png)

### Central de Controle

Você pode adicionar um atalho do AdGuard VPN à Central de Controle para acesso rápido de qualquer lugar do dispositivo.

1. Abrir a Central de Controle. Em um iPhone com Face ID, deslize para baixo a partir do canto superior direito. Em um iPhone com botão de Início, deslize para cima a partir da parte inferior.
2. Mantenha pressionada uma área vazia e toque em _Adicionar um Controle_.
3. Encontre _Atalhos_ na lista e toque em _Executar Atalho_, depois toque em _Escolher_ e selecione seu atalho do AdGuard VPN. O atalho agora aparecerá na sua Central de Controle.

Nota: As etapas exatas podem variar dependendo da sua versão do iOS.

![Adicionar atalho à Central de Controle](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_to_control_center.png)

### Widget

1. Mantenha pressionada uma área vazia na sua Tela de Início até que os aplicativos comecem a tremer, depois toque em _Editar_ no canto superior esquerdo → _Adicionar Widget_.
2. Encontre _Atalhos_ na lista e escolha um tamanho de widget. Recomendamos que você escolha um que possa exibir pelo menos dois atalhos.
3. Toque em _Adicionar Widget_.
4. No modo de edição, toque no widget para abrir o menu de configuração, defina _Pasta_ como _Personalizado_ e atribua _Conectar à VPN_ a um slot e _Desconectar da VPN_ ao outro.

![Adicionar atalho como widget](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/widget.png)

## Um toque para abrir qualquer aplicativo com a VPN ativada

Se você precisa da VPN ativada para um determinado aplicativo e nada mais, você pode criar um atalho personalizado que ativará o AdGuard VPN e abrirá o aplicativo que você deseja abrir — tudo em um toque. Veja como configurá-lo.

1. Abra o aplicativo Atalhos, toque no botão mais (+) e pesquise por AdGuard VPN. Adicione a ação _Status da VPN_.
2. Adicionar uma ação _Se_. O Atalhos preenche a condição para você: ele obtém o status da VPN da etapa anterior e o compara com _Conectado_. Dentro dele, adicione _Abrir Aplicativo_ e defina-o para o aplicativo que você deseja — por exemplo, o YouTube.
3. Em _Caso contrário_, adicione três ações em ordem: _AdGuard VPN_ → _Conectar à VPN_, _Aguardar_ (definido para 2 segundos) e _Abrir Aplicativo_ (o mesmo aplicativo acima).
4. Toque no nome na parte superior para definir um ícone e nome personalizados e, em seguida, teste o atalho com o botão de reprodução.
5. Adicione o atalho à Tela de Início tocando no nome e selecionando _Adicionar à Tela de Início_.

![Adicionar atalho personalizado](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/add_custom_shortcut.png)

## Conectar ou desconectar com a Siri

No aplicativo AdGuard VPN, vá para _Configurações_ → _Atalhos_ → _Configurar frases da Siri_. Você terá então duas opções: _Gravar uma frase para conectar_ ou _Gravar uma frase para desconectar_.

![Conectar com a Siri](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.17/siri_connect.png)

Escolha _Gravar uma frase para conectar_ ou _Gravar uma frase para desconectar_, depois diga a frase desejada, por exemplo: “E aí Siri, conectar à AdGuard VPN”. Depois de gravar, diga a mesma frase para a Siri a qualquer momento para executá-lo.

## Automatizando o AdGuard VPN para aplicativos específicos

Alguns aplicativos, como aplicativos bancários, não funcionam com uma VPN ativada. Configure duas automações para que a VPN seja desativada enquanto você usa o aplicativo e reativada quando terminar. Quando configurada corretamente, a automação pode ser mais conveniente do que o lançamento manual de um atalho — você não precisa tocar em um ícone da Tela de Início para abrir o atalho, simplesmente abrir o aplicativo é suficiente. Além disso, você pode incluir vários aplicativos em uma automação. Você pode usar automações para ativar ou desativar o AdGuard VPN ao abrir um aplicativo, ao fechar um aplicativo e ao se conectar ou desconectar do seu Wi-Fi doméstico.

[Como configurar automações no seu iPhone ou iPad](/adguard-vpn-for-ios/features/automation/)
