---
title: Problemas com o perfil do Modo Restrito
sidebar_position: 4
---

Os proprietários de telefones e tablets que executam o sistema operacional Android 7+ podem enfrentar o problema causado pelo uso de **um perfil com Modo Restrito**. Se você tiver esse perfil, **AdGuard VPN**, como outros aplicativos que usam VPN, obtém restrições no tratamento seletivo do tráfego VPN. Além disso, uma das razões para este problema pode ser o uso do **perfil Dual App/Dual Messenger** em seu dispositivo. Abaixo estão descritas as recomendações que você pode aplicar quando esse problema ocorrer.

## Soluções

Há duas maneiras de resolver o problema:

### Opção 1: conceder permissões ao AdGuard VPN usando o ADB

1. Ative o **modo de desenvolvedor** e habilite **depuração USB**:

    - Abra o aplicativo **Configurações** em seu telefone;
    - Vá para a seção **Sistema** (último item no menu de configurações). Nesta seção, encontre o subitem **Sobre o telefone**;
    - Clique na linha **Número de build** 7 vezes. Depois disso, você receberá uma notificação de que **Você agora é um desenvolvedor** (Se necessário, insira um código de desbloqueio para o dispositivo);
    - Abra **Configurações do sistema** → **Opções do desenvolvedor** → Role para baixo e habilite **Depuração USB** → Confirme se a depuração está habilitada na janela **Permitir depuração USB** depois de ler o aviso com atenção.

    :::note

    Se você tiver alguma dificuldade ou dúvida adicional, instruções completas podem ser encontradas [aqui](https://developer.android.com/studio/debug/dev-options).

    :::

1. [Instale e configure](https://www.xda-developers.com/install-adb-windows-macos-linux/) o adb;

    :::note

    Na plataforma Windows, os donos de dispositivos **Samsung** podem precisar instalar [este utilitário](https://developer.samsung.com/mobile/android-usb-driver.html).

    :::

1. Conecte seu dispositivo usando um cabo **USB** ao computador ou laptop no qual você instalou **ADB**;

1. Abra **o prompt de comando** no seu PC:

    - **Cmd.exe** se estiver usando **Windows**;
    - **Terminal** se estiver usando **macOS**;

1. Digite o comando `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` e pressione **Enter**.

### Opção 2: remover *conta de usuário Restrita*

Você pode [encontrar aqui](https://support.google.com/a/answer/6223444?hl=en) como gerenciar contas de usuário de um dispositivo Android.

:::note

Em alguns casos, contas de usuários restritas são criadas implicitamente e não podem ser removidas. Por exemplo, quando você usa os recursos Dual Messenger ou Dual App em **dispositivos Samsung** ou **LG**. Leia abaixo como corrigir o problema nesses casos.

:::

### Dispositivos LG e Samsung

Os proprietários de telefones **LG** ou **Samsung** também podem encontrar um problema semelhante. Pode ser causado pelo uso da função **Dual App/Dual Messenger** (que cria automaticamente um perfil restrito). Para resolver esse problema, você precisa desativar esse recurso.

#### Samsung

- Abra **Configurações**;
- Pressione **Avançado**;
- Role para baixo e pressione **Dual Messenger**;
- Desative o **Dual Messenger** para todos os aplicativos;
- Bloqueie o dispositivo por 5 minutos;
- Desbloqueie a tela e tente novamente criar o perfil VPN.

#### LG

- Abra **Configurações**;
- Escolha a guia **Geral**;
- Role para baixo e pressione **Dual App**;
- Remova todos os aplicativos da lista;
- Reinicie seu dispositivo.
