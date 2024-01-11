---
title: Erros comuns do instalador
sidebar_position: 2
---

This article outlines some of the most common errors you may encounter while installing AdGuard VPN for Windows and possible ways to resolve them.

### Erro 5: Acesso negado {#error-5}

This error message appears if required permissions are not granted. Pode haver vários motivos diferentes pelos quais o instalador do AdGuard VPN não possui as permissões necessárias para concluir corretamente o processo de instalação. Você pode tentar os seguintes passos:

- Desative temporariamente seus antivírus. Some of them may interfere with the installation, depending on the restrictiveness of their settings.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, um drive virtual, etc.

- Reinicie o computador. Às vezes, os problemas de permissão são temporários e podem ser resolvidos reiniciando o PC.

### Erro 112: O disco está cheio, Erro 1632: Pasta temporária cheia ou inacessível {#error-112}

Estes são dois erros diferentes com soluções muito semelhantes. Como seus nomes sugerem, o instalador AdGuard VPN não encontrou espaço em disco suficiente para concluir a instalação. Há várias coisas que você pode fazer para tentar corrigir o problema:

- Desinstale alguns programas ou exclua arquivos desnecessários da unidade em que você estava tentando instalar o AdGuard VPN.

- Baixe, instale e execute [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), um software gratuito da Malwarebytes. Entre outras coisas, ele irá limpar seu sistema de todos os "restos" de arquivos que permanecem após a desinstalação incorreta de programas e similares. Isso ajudará a limpar algum espaço em disco.

- Reinicie o computador. Às vezes, os arquivos temporários podem ocupar uma quantidade considerável de espaço em disco e reiniciar o PC é a maneira mais simples de se livrar deles.

### Erro 1601: o instalador do Windows não está acessível {#error-1601}

Pode-se dizer que este é um subtipo específico do Erro 1603. As soluções possíveis são semelhantes:

- Inicie e registre novamente o serviço Instalador Microsoft. It requires some work.

    1. Pressione *Win + R* e digite **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Reinicie o PC e inicie a instalação novamente. Às vezes, isso é suficiente para resolver o problema.

### Erro 1602: Cancelado pelo usuário {#error-1602}

Se você recebeu esse código de erro, é provável que tenha interrompido o processo de instalação manualmente de uma forma ou de outra. O que você pode fazer:

- Não feche a janela do instalador. Quando a instalação estiver concluída, ela será fechada automaticamente.

- Se uma janela de diálogo aparecer durante a instalação, clique em "Sim" para conceder ao instalador as permissões necessárias. Clicar em "Não" cancelará a instalação.

- Não inicie outros processos enquanto a instalação estiver em andamento.

### Erro 1603: Erro fatal durante a instalação {#error-1603}

This error sounds more worrying than it actually is. Na realidade, esse é um erro bastante genérico que pode ter muitas causas diferentes e algumas delas são facilmente corrigidas. Tente as seguintes soluções:

- Pressione a tecla *Win*, procure por *Prompt de comando*e execute-o. Lá, digite `sfc /scannow` e pressione *Enter*.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, um drive virtual, etc.

- Uninstall AdGuard VPN using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

- Start and re-register Microsoft Installer service. It requires some work.

    1. Press *Win + R* and enter **services.msc**.
    1. Find in the list and double click *Windows Installer*.
    1. Hit *Start* button under *Service status* and hit *OK*. If the service status is **running**, you should click *Stop* first and then hit *Start*.
    1. Press *Win + R*, type and enter **msiexec /unregister** and hit *Enter*.
    1. Press *Win + R* again, type and enter **msiexec /regserver** and hit *Enter*

- Acquire full permissions on the drive for installation. It is possible that the error 1603 occurs because you don’t have full permissions on the file location. It's also not as easy as some of the other solutions:

    1. Open *File Explorer*, right-click the drive containing the installation location, and select *Properties*.
    1. Go to *Security* tab and click *Edit*.
    1. Single-click *SYSTEM* and ensure that the *Allow* box of every item in *Permissions for SYSTEM* is checked (if it is checkable). Do the same check for *Administrators*.
    1. Click *OK* to go back to *Properties* dialog. Then click *Advanced*.
    1. Click *Change Permissions*.
    1. In *Permissions* tab, double-click *Administrators*.
    1. Select *This folder, subfolders and files* for the *Applies to* field and tick all the available *Basic permissions*. After that hit *OK*.
    1. Do the same operation above (from item 7) for *SYSTEM*.
    1. Click *OK* all the way out. Try installing AdGuard again.

### Erro 1618: Outra instalação já está em andamento {#error-1618}

This error appears when trying to run multiple instances of the AdGuard VPN installer simultaneously. O que fazer se você receber esta mensagem de erro:

- Reinicie o seu PC e inicie o instalador novamente. Quando você reiniciar o computador, todos os processos em andamento serão interrompidos, incluindo todas as cópias do instalador.

- Don't click multiple times on the installer, even if it doesn't start right away. Pode ser que a exibição da IU do instalador leve alguns segundos.

### Erro 1638: outra versão deste produto já está instalada {#error-1638}

É muito provável que você já tenha instalado o AdGuard VPN antes.

- Verifique se o AdGuard VPN já está instalado no seu computador. To do that, press the *Win* key and start typing *adguard vpn*.

- Pode ser que haja alguns arquivos restantes de uma instalação anterior do AdGuard VPN. Uninstall AdGuard using our special [uninstall tool](/adguard-vpn-for-windows/installation#advanced) and then repeat the installation.

### Outros erros {#other}

Se você encontrou um erro que não está listado acima, é possível que possamos resolvê-lo sozinhos. Mas, para isso, precisamos de seus arquivos de log. Por favor, execute as seguintes etapas:

- Localize e arquive os **registros de instalação do AdGuard VPN** conforme descrito [neste artigo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Find and save to disk the **Event Viewer** logs. [Este artigo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explica como fazer isso.

Envie por e-mail todos esses arquivos das duas etapas anteriores para **support@adguard.com** e descreva o problema no corpo da mensagem. Nossa equipe de suporte responderá o mais rápido possível.
