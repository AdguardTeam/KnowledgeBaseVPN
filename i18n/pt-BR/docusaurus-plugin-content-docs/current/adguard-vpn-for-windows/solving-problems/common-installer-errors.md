---
title: Erros comuns do instalador
sidebar_position: 2
---

Este artigo descreve alguns dos erros mais comuns que você pode encontrar ao instalar o AdGuard VPN para Windows e as possíveis maneiras de resolvê-los.

### Erro 5: Acesso negado {#error-5}

Esta mensagem de erro aparece se as permissões necessárias não forem concedidas. Pode haver vários motivos diferentes pelos quais o instalador do AdGuard VPN não possui as permissões necessárias para concluir corretamente o processo de instalação. Você pode tentar os seguintes passos:

- Desative temporariamente seus antivírus. Alguns deles podem interferir na instalação, dependendo da restrição de suas configurações.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, um drive virtual, etc.

- Reinicie o computador. Às vezes, os problemas de permissão são temporários e podem ser resolvidos reiniciando o PC.

### Erro 112: O disco está cheio, Erro 1632: Pasta temporária cheia ou inacessível {#error-112}

Estes são dois erros diferentes com soluções muito semelhantes. Como seus nomes sugerem, o instalador AdGuard VPN não encontrou espaço em disco suficiente para concluir a instalação. Há várias coisas que você pode fazer para tentar corrigir o problema:

- Desinstale alguns programas ou exclua arquivos desnecessários da unidade em que você estava tentando instalar o AdGuard VPN.

- Baixe, instale e execute [AdwCleaner](http://www.bleepingcomputer.com/download/adwcleaner/), um software gratuito da Malwarebytes. Entre outras coisas, ele irá limpar seu sistema de todos os "restos" de arquivos que permanecem após a desinstalação incorreta de programas e similares. Isso ajudará a limpar algum espaço em disco.

- Reinicie o computador. Às vezes, os arquivos temporários podem ocupar uma quantidade considerável de espaço em disco e reiniciar o PC é a maneira mais simples de se livrar deles.

### Erro 1601: o instalador do Windows não está acessível {#error-1601}

Pode-se dizer que este é um subtipo específico do Erro 1603. As soluções possíveis são semelhantes:

- Inicie e registre novamente o serviço Instalador Microsoft. Requer algum trabalho.

    1. Pressione *Win + R* e digite **services.msc**.
    1. Encontre na lista e clique duas vezes em *Windows Installer*.
    1. Clique no botão *Iniciar* em *Status do serviço* e clique em *OK*. Se o status do serviço for **em execução**, você deve clicar em *Parar* primeiro e depois em *Iniciar*.
    1. Pressione *Win + R*, digite **msiexec /unregister** e pressione *Enter*.
    1. Pressione *Win + R* novamente, digite **msiexec /regserver** e pressione *Enter*

- Reinicie o PC e inicie a instalação novamente. Às vezes, isso é suficiente para resolver o problema.

### Erro 1602: Cancelado pelo usuário {#error-1602}

Se você recebeu esse código de erro, é provável que tenha interrompido o processo de instalação manualmente de uma forma ou de outra. O que você pode fazer:

- Não feche a janela do instalador. Quando a instalação estiver concluída, ela será fechada automaticamente.

- Se uma janela de diálogo aparecer durante a instalação, clique em "Sim" para conceder ao instalador as permissões necessárias. Clicar em "Não" cancelará a instalação.

- Não inicie outros processos enquanto a instalação estiver em andamento.

### Erro 1603: Erro fatal durante a instalação {#error-1603}

Este erro parece mais preocupante do que realmente é. Na realidade, esse é um erro bastante genérico que pode ter muitas causas diferentes e algumas delas são facilmente corrigidas. Tente as seguintes soluções:

- Pressione a tecla *Win*, procure por *Prompt de comando*e execute-o. Lá, digite `sfc /scannow` e pressione *Enter*.

- Escolha uma pasta de instalação diferente. É possível que a pasta de instalação atual tenha algumas restrições de acesso. Certifique-se também de não selecionar uma unidade externa, um drive virtual, etc.

- Desinstale o AdGuard VPN usando nossa [ferramenta de desinstalação](/adguard-vpn-for-windows/installation#advanced) especial e repita a instalação.

- Inicie e registre novamente o serviço Microsoft Installer. Requer algum trabalho.

    1. Pressione *Win + R* e insira **services.msc**.
    1. Encontre na lista e clique duas vezes em *Windows Installer*.
    1. Clique no botão *Iniciar* em *Status do serviço* e clique em *OK*. Se o status do serviço for **em execução**, você deve clicar em *Parar* primeiro e depois em *Iniciar*.
    1. Pressione *Win + R*, digite **msiexec /unregister** e pressione *Enter*.
    1. Pressione *Win + R* novamente, digite **msiexec /regserver** e pressione *Enter*

- Adquira permissões completas na unidade para instalação. É possível que o erro 1603 ocorra porque você não tem permissões completas no local do arquivo. Também não é tão fácil quanto algumas das outras soluções:

    1. Abra o *Explorador de Arquivos*, clique com o botão direito do mouse na unidade que contém o local da instalação e selecione *Propriedades*.
    1. Vá para a guia *Segurança* e clique em *Editar*.
    1. Clique em *SISTEMA* e certifique-se de que a caixa *Permitir* de cada item em *Permissões para SISTEMA* esteja marcada (se for possível marcá-la). Faça a mesma verificação para *Administradores*.
    1. Clique em *OK* para voltar à caixa de diálogo *Propriedades*. Em seguida, clique em *Avançado*.
    1. Clique em *Alterar permissões*.
    1. Na guia *Permissões*, clique duas vezes em *Administradores*.
    1. Selecione *Esta pasta, subpastas e arquivos* para o campo *Aplica-se a* e marque todas as *Permissões básicas* disponíveis. Depois disso, clique em *OK*.
    1. Faça a mesma operação acima (do item 7) para *SISTEMA*.
    1. Clique em *OK* até sair. Tente instalar o AdGuard novamente.

### Erro 1618: Outra instalação já está em andamento {#error-1618}

Este erro aparece ao tentar executar várias instâncias do instalador do AdGuard VPN simultaneamente. O que fazer se você receber esta mensagem de erro:

- Reinicie o seu PC e inicie o instalador novamente. Quando você reiniciar o computador, todos os processos em andamento serão interrompidos, incluindo todas as cópias do instalador.

- Não clique no instalador várias vezes, mesmo que pareça não iniciar imediatamente. Pode ser que a exibição da IU do instalador leve alguns segundos.

### Erro 1638: outra versão deste produto já está instalada {#error-1638}

É muito provável que você já tenha instalado o AdGuard VPN antes.

- Verifique se o AdGuard VPN já está instalado no seu computador. Para fazer isso, pressione a tecla *Win* e comece a digitar *adguard vpn*.

- Pode ser que haja alguns arquivos restantes de uma instalação anterior do AdGuard VPN. Desinstale o AdGuard usando nossa [ferramenta de desinstalação](/adguard-vpn-for-windows/installation#advanced) especial e repita a instalação.

### Outros erros {#other}

Se você encontrou um erro que não está listado acima, é possível que possamos resolvê-lo sozinhos. Mas, para isso, precisamos de seus arquivos de log. Por favor, execute as seguintes etapas:

- Localize e arquive os **registros de instalação do AdGuard VPN** conforme descrito [neste artigo](https://adguard.com/kb/adguard-for-windows/solving-problems/installation-logs/).

- Encontre e salve no disco os logs do **Visualizador de Eventos**. [Este artigo](https://adguard.com/kb/adguard-for-windows/solving-problems/system-logs/) explica como fazer isso.

Envie por e-mail todos esses arquivos das duas etapas anteriores para **support@adguard.com** e descreva o problema no corpo da mensagem. Nossa equipe de suporte responderá o mais rápido possível.
