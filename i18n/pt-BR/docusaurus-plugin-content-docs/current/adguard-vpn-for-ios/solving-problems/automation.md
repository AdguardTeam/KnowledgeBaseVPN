---
title: Como configurar a automação do AdGuard VPN para apps no iPhone e iPad
sidebar_position: 1
sidebar_label: Como configurar a automação do AdGuard VPN
---

There are no app exclusions in AdGuard VPN for iOS. Yet, there is a way to automate AdGuard VPN for apps on iPhones and iPads.

## Configurando a ativação automática do AdGuard VPN

Se você precisar de uma VPN para um ou mais aplicativos, configure o AdGuard VPN para ativar e desativar automaticamente ao abri-los e fechá-los. Vá para a guia Exclusões, selecione o modo Geral e siga as instruções. Aqui descrevemos como criar automação para o Twitter, mas você pode escolher qualquer outro aplicativo.

![Instruções. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Baixe o aplicativo [the *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) da App Store e vá para a seção *Automação* tocando no ícone do relógio na parte inferior da tela.
2. Toque no botão *Criar automação personalizada* , encontre *App* na lista que se abre e toque nesta opção.
3. Na próxima janela, verifique se a opção *Está aberto* está selecionada e toque em *Escolher* para selecionar o aplicativo.

![Instruções. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)
4. Start entering the name of the app (in our case it's Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![Instruções. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)
5. Comece a inserir “AdGuard VPN” e selecione o aplicativo AdGuard VPN. Na nova janela, toque em *Definir conexão VPN*.

![Instruções. Parte 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)
6. Certifique-se de que as variáveis digam *Turn* VPN connection *On* e toque *Next*.
7. Na próxima janela, mova o controle deslizante ao lado da opção *Perguntar antes de executar* para a posição inativa. Confirm your choice, then tap *Done*.

Agora você tem um novo cenário: o AdGuard VPN será ativado automaticamente quando você iniciar o aplicativo do Twitter. Agora você precisa criar outro comando que fará o AdGuard VPN desligar automaticamente quando você fechar o aplicativo.

## Configurando o desligamento automático do AdGuard VPN

![Instruções. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
2. Certifique-se de que a opção *Está Fechado* esteja selecionada e desmarque a caixa abaixo da opção adjacente. Em seguida, toque em *Escolher*.

![Instruções. Parte 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)
3. Comece digitando *Twitter* e selecione o aplicativo. Em seguida, toque em *Concluído* no canto superior direito da tela. Toque em *Adicionar Ação* e selecione AdGuard VPN.

![Instrução. Parte 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)
4. Na nova janela, toque em *Definir conexão VPN*.
5. Em seguida, toque na palavra *On* para que ela mude para a palavra *Off*, depois toque em *Próximo* no canto superior direito da tela.
6. Desative a opção *Pergunte antes de executar* e confirme sua seleção. Em seguida, toque em *Concluído* no canto superior direito da tela para concluir o processo.

Pronto! O AdGuard VPN agora será ativado em seu dispositivo toda vez que você abrir o aplicativo do Twitter e desativado ao fechá-lo. Você pode repetir as mesmas etapas para qualquer outro aplicativo.
