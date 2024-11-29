---
title: Como configurar a automação do AdGuard VPN para apps no iPhone e iPad
sidebar_position: 2
sidebar_label: Como configurar a automação do AdGuard VPN
---

Não há exclusões de aplicativos no AdGuard VPN para iOS. No entanto, existe uma maneira de automatizar o AdGuard VPN para aplicativos em iPhones e iPads.

## Configuring automatic connection to VPN

Se você precisar de uma VPN para um ou mais aplicativos, configure o AdGuard VPN para ativar e desativar automaticamente ao abri-los e fechá-los. Vá para a guia Exclusões, selecione o modo Geral e siga as instruções. Aqui descrevemos como criar automação para o Twitter, mas você pode escolher qualquer outro aplicativo.

![Instruções. Parte 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on1_en.jpg)

1. Baixe o aplicativo [the *Shortcuts*](https://apps.apple.com/us/app/shortcuts/id915249334) da App Store e vá para a seção *Automação* tocando no ícone do relógio na parte inferior da tela.
1. Toque no botão *Criar automação personalizada* , encontre *App* na lista que se abre e toque nesta opção.
1. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on2_en.jpg)

1. Start entering the name of the app (in our case it’s Twitter) and select it. Tap *Done*, then tap *Next* in the upper right corner of the screen. In the opened window, tap *Add Action*.

![Instruções. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on3_en.jpg)

1. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

    ![Instruction. Part 4](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_on4_en.jpg)

1. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
1. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, then tap *Done*.

Now you have a new scenario: AdGuard VPN will be automatically enabled when you start the Twitter app. Now you need to create another command that will make AdGuard VPN automatically turn off when you close the app.

## Configuring automatic disconnection from VPN

![Instruções. Part 1](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off1_en.jpg)

1. In the same *Shortcuts* app start creating a new automation: tap *Automation* → *Create Personal Automation* → *App*.
1. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

    ![Instruction. Part 2](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off2_en.jpg)

1. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

    ![Instruction. Part 3](https://cdn.adguardvpn.com/public/Adguard/Blog/VPNauto/vpn_off3_en.jpg)

1. In the new window tap *Set VPN connection*.
1. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
1. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Done! AdGuard VPN will now be enabled on your device every time you open the Twitter app, and disabled when you close it. You can repeat the same steps for any other app.
