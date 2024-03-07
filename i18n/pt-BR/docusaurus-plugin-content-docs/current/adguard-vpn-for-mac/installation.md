---
title: Instalação e remoção
sidebar_position: 2
---

## Requisitos do Sistema

**Sistema operacional versão**: macOS 10.15 (64 bits) ou superior

**RAM**: pelo menos 2 GB

**Espaço livre de disco**: 120 MB

## Como instalar o AdGuard VPN para Mac

1. Para instalar AdGuard VPN no Mac, apenas clique [neste link](https://agrd.io/mac_vpn) ou abra um navegador, digite *adguard-vpn.com* na barra de endereço e na página aberta clique em *Download*. ![Baixe o AdGuard VPN pelo website oficial](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Espere até que o download do arquivo *AdGuardVPN.dmg* esteja completo e abra ele na pasta "Downloads".
3. Espere até que a janela do programa de instalação abra. Clique duas vezes no ícone dela. ![Janela de instalação do programa *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. Quando você iniciar pela primeira vez o AdGuard VPN, o sistema de operação irá mostrar um aviso na tela que essa aplicação foi baixada pela Internet. Clique em *Abrir*.
5. Então, clique *Continuar* e *Instalar*.

![Clique Continuar](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Clique Instalar](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Espere o instalador baixar os arquivos necessários.

O AdGuard VPN para Mac está instalado!

## Como desinstalar AdGuard VPN para o Mac

### Desinstalação padrão

Para desinstalar o AdGuard VPN para o Mac, siga dois passos simples:

1. Abra o "Finder" e vá para a seção "Programas".

2. Selecione o *AdGuard VPN* na lista, clique o botão direito e, em seguida, clique *Mover para a Lixeira*.

![Desinstalação Padrão](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Desinstalação avançada

Às vezes, como resultado de uma remoção incorreta ou em outros raros casos, a desinstalação padrão pode não ser suficiente. Nesse caso, nosso suporte pode pedir para você performar uma desinstalação avançada para completamente remover AdGuard VPN do seu Mac. Para isso, faça o seguinte:

1. Siga os passos descritos na seção ["Desinstalação Padrão"](#how-to-uninstall-adguard-vpn-for-mac).
2. Abra o "Finder" ou o "Spotlight" e digite `Keychain` na barra de pesquisa. ![Desinstalação Avançada. Digite Chaveiro](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Clique no ícone do programa encontrado e entre `com.adguard.mac.vpn` na barra de pesquisa. Se houver tal registro nos resultados de pesquisa, exclua-o.
4. Volte para o "Finder" ou para o "Spotlight" e digite `Terminal`. ![Desinstalação Avançada. Digite Terminal](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Abra o programa e digite o comando — `defaults delete com.adguard.mac.vpn`.
6. Aperte *Barra de Espaço* e digite outro comando — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

O AdGuard VPN foi completamente removido do seu Mac.

Você pode aprender mais sobre o AdGuard VPN para o Mac [nesse artigo](/adguard-vpn-for-mac/overview).
