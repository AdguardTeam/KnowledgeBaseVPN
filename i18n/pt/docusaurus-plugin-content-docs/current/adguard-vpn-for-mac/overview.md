---
title: Features overview
sidebar_position: 1
---

O AdGuard VPN para Mac é um serviço VPN de desktop. O AdGuard VPN é totalmente compatível com o AdGuard Ad Blocker, eles podem ser usados juntos e funcionarão perfeitamente. Vamos ver quais recursos ele tem a oferecer.

Note that **you can't use AdGuard VPN for Mac unless you have logged into your AdGuard account**. Você pode entrar com sua conta AdGuard ou com uma conta externa, ou seja, via Apple, Google ou Facebook. Certifique-se de que sua conta externa esteja vinculada ao mesmo endereço de e-mail da sua conta do AdGuard. Se houver uma assinatura adequada em sua conta do AdGuard, ela será ativada automaticamente no aplicativo de desktop. Ainda não tem uma conta AdGuard? Create it [here](https://auth.adguard.com/registration.html).

> AdGuard VPN for Mac is currently supported on macOS versions starting from macOS Sierra (10.12).

## Tela inicial

![Home screen](https://cdn.adguard.com/public/Adguard/Blog/mac-vpn-main.png)

A primeira guia é a Tela *Inicial*. Here you can see AdGuard VPN current status and [exclusions mode](#exclusions), chosen location (if enabled) and its ping. Ping é o tempo de resposta de um servidor VPN. Consequentemente, quanto mais baixo for esse número, mais rápida será a conexão. Se a VPN estiver desativada, o último local ao qual você se conectou é exibido abaixo. Os locais mais rápidos com os pings mais baixos são exibidos no canto superior direito da tela. Abaixo pode ver a lista completa dos locais. Através da função de pesquisa, o local necessário pode ser facilmente encontrado.

> Usuários gratuitos podem se conectar apenas a determinados locais, enquanto outros são bloqueados. Além disso, há um limite de tráfego mensal de 3 GB na versão gratuita.

## Exclusões

![Exclusions](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/exclusions.png)

Em seguida, vem a tela *Exclusões*. AdGuard VPN has several features that make it unique, and one of them is certainly switching between two exclusions modes. In the General mode, AdGuard VPN will run on all websites but the ones from the exclusions list. No modo Seletivo, por outro lado, o AdGuard VPN será executado somente em sites da lista de exclusões. Você mesmo pode decidir onde deseja que a VPN funcione.

![Exclusions screen](https://cdn.adguard.com/public/Adguard/Blog/services.png)

Além disso, você pode não somente adicionar sites às Exclusões, mas também escolher entre as listas de serviços populares. As listas estão divididas em oito categorias: Redes sociais, Mensageiros, Serviços de streaming de vídeo e música, Jogos, Compras, Mecanismos de Pesquisa e Ferramentas de comunicação no trabalho. Qualquer um desses serviços pode ser adicionado às Exclusões em um clique! É especialmente conveniente se você usar o modo seletivo.

A lista de exclusão pode ser facilmente configurada. Se você adicionou um domínio e alguns de seus subdomínios, eles serão agrupados dentro do domínio raiz. When adding a root domain (`example.com`) its mask is added too (`*.example.com`).

If you've added a service, changed or removed something and now want to recover initial settings, just press *Reset to default* next to the domain — this action will restore any missing domains and tick all checkboxes.

What’s more, ready-made exclusions lists can be transferred to other devices with installed AdGuard VPN. Para exportar exclusões, siga as instruções de quatro etapas abaixo:

1. Abra o AdGuard VPN no dispositivo de onde você deseja exportar as suas listas de exclusões. Find the appropriate section and click on the *Export* button. The `exclusions.zip` archive will be downloaded.
2. There are two `.txt` files inside the archive, each for General and Selective lists. Adicione mais exclusões a eles, exclua os existentes, renomeie os arquivos (mais sobre isso mais tarde) ou simplesmente deixe o arquivo com os arquivos como está.
3. When transferring between different devices, don't forget to send the `.zip` file to the device for import. For example, if you import exclusion lists from your Mac to your iPhone, make sure to send the `.zip` file to your phone beforehand.
4. Abra o AdGuard VPN no dispositivo/navegador onde deseja importar o arquivo com as listas de exclusões prontas. Find the appropriate section, click on the *Import* button and select the archive. Feito!

> Os ficheiros de arquivos de outros dispositivos podem ser semelhantemente importados ao seu AdGuard VPN para Mac.

## Support

![Support screen](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/support.png)

The third tab is the *Support* screen. Find answers to any questions in the [FAQ](https://adguard-vpn.com/en/welcome.html#faq) or in the [Knowledge base](/intro.md) sections, report a bug if you encounter one, or [discuss AdGuard on any of the platforms](https://adguard.com/en/discuss.html). And feel free to [leave feedback about our product](https://surveys.adguard.com/en/vpn_mac/form.html), we’d appreciate it.

## Configurações

![Configurações](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/settings.png)

Finally, we come to the Settings tab. In the *About program* section you can see the current version of AdGuard VPN, check for updates, visit our official website, and get acquainted with AdGuard's EULA and Privacy policy. In the *About license* section you can upgrade from free to unlimited, manage your subscription, or log out. And most importantly, from here you can access *General settings*.

### Configurações gerais

![Configurações gerais](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/general-settings.png)

The first four basic features make the application more convenient and user-friendly, i.e. *Kill Switch*, *Autoupdate*, *Launch AdGuard VPN at login*, and *Auto-connect on app launch*. What’s more, you can choose between light, dark, and system themes — the latter one matches the theme on your Mac.

Another option that shouldn't be overlooked is that you can allow AdGuard VPN to gather and send anonymized crash reports, technical and interaction data in order to help us improve our app. Last but not least, thanks to the button on the right, you can export logs to your Mac. This can be useful if you want to attach logs to your message to support.

### Servidores DNS

![Servidores DNS](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/dns.png)

Here you can add a custom DNS server (or servers) in order not to rely on a DNS server provided by your ISP by default. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic but also identifies requests to malicious sites and redirects them to a “blackhole”.

### Configurações avançadas

![Configurações avançadas](https://cdn.adguard.com/public/Adguard/Blog/vpn/release/VPN_for_Mac/advanced-settings.png)

Advanced settings are not recommended to be adjusted. Don't change them unless asked by our technical support or unless you're sure what you're doing.

#### Nível de registro
There are only two logging levels but we strongly recommend that you use the first, default one. The second option (extended logging) should be set only to record a strange program behavior after consulting our technical support. Even if you enabled the second logging level, make sure to go back to the default one after recording logs.

#### Ocultar ícone da barra de menus
Although this option is located in *Advanced settings*, it can be enabled without hesitation. You can hide the AdGuard VPN icon from the menu bar, it won’t prevent our app from running in the background.

#### Usar QUIC (experimental)

QUIC communication protocol is the latest, cutting-edge version of HTTP. Toggle the switch to get a better connection quality in less-than-ideal conditions, while using mobile data in the subway or elevator, for instance.
