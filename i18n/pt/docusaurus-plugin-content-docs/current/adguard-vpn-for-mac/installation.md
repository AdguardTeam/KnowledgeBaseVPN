---
title: Instalação e remoção
sidebar_position: 2
---

## Requisitos do Sistema

**Versão do sistema operacional**: macOS 10.12 (64 bits) ou superior

**RAM**: pelo menos 2 GB

**Espaço livre em disco**: 120 Mb


## Como instalar o AdGuard VPN para Mac?

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*.

![Baixe AdGuard VPN do site oficial](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-en.png)

2. Aguarde até que o download do arquivo *AdGuardVPN.dmg* seja concluído e abra-o na pasta "Downloads".

3. Aguarde até que a janela do programa de instalação seja aberta. Clique duas vezes no ícone nela.

![Janela de instalação do programa](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. Ao iniciar o AdGuard VPN pela primeira vez, o sistema operacional exibirá um aviso na tela informando que este aplicativo foi baixado da Internet. Clique em *Abrir*.

5. Em seguida, clique em *Continuar* e *Instalar*.

![Clique em Continuar](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-en.png)

![clique em Instalar](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)

6. Aguarde o instalador baixar os arquivos necessários.

AdGuard VPN para Mac está instalado!


## Como desinstalar o AdGuard VPN para Mac?

### Desinstalação padrão

Para desinstalar o AdGuard VPN para Mac, siga duas etapas simples:

1. Abra o "Finder" e vá para a seção "Programas".

2. Selecione *AdGuard VPN* na lista, clique com o botão direito do mouse e clique em *Move to Trash*.

![Desinstalação padrão](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)


### Desinstalação avançada

Às vezes, como resultado de remoção incorreta ou em outros casos raros, a desinstalação padrão pode não ser suficiente. Então, o serviço de suporte pode solicitar que você faça uma desinstalação avançada para remover completamente o AdGuard VPN do seu Mac. Para fazer isso, faça o seguinte:

1. Siga as etapas descritas na seção ["Desinstalação padrão"](#how-to-uninstall-adguard-vpn-for-mac).

2. Abra "Finder" ou "Spotlight" e digite `Keychain` na pesquisa.

![Desinstalação avançada. Digite Keychain](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)

3. Clique no ícone do programa encontrado e digite `com.adguard.mac.vpn` na pesquisa. Se houver tal registro nos resultados da pesquisa, exclua-o.

4. Volte para "Finder" ou "Spotlight" e digite `Terminal`.

![Desinstalação avançada. Digite Terminal](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)

5. Abra o programa e digite o comando — `defaults delete com.adguard.mac.vpn`.

6. Pressione *Barra de espaço* e digite outro comando — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

O AdGuard VPN foi completamente removido do seu Mac.

Você pode aprender mais sobre o AdGuard VPN para Mac [neste artigo](/adguard-vpn-for-mac/overview.md).