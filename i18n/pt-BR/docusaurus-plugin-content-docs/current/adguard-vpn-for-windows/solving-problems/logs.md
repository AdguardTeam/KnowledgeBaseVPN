---
title: Como coletar e enviar logs
sidebar position: 1
---

Se você encontrar algum problema ao usar o AdGuard VPN para Windows, você pode nos informar sobre isso. Agradeceríamos se você também enviasse os registros do aplicativo, pois eles nos ajudam a resolver problemas muito mais rapidamente.

## Coleta de registros

### Registros padrão

Por padrão, o AdGuard VPN para Windows usa o nível de registro padrão, que é a coleta básica de dados sobre os processos em execução do aplicativo. Antes de enviar os registros, por favor abra o AdGuard VPN para Windows e, se possível, repita as ações que levaram ao erro. Anote a hora exata em que esse erro ocorreu.

### Registros estendidos

Na maioria dos casos, o nível de log padrão é suficiente para rastrear possíveis bugs. Mas há casos em que são necessárias informações técnicas mais detalhadas sobre o dispositivo e as conexões e, assim, nossa equipe de suporte solicitará que você ative o nível de registro estendido. Para enviar este tipo de log, siga estes passos:

1. Abra o AdGuard VPN para Windows e selecione **Configurações** no menu acima → **Configurações do aplicativo** → **Configurações avançadas** → **Nível de registro**.

1. Na seção **Nível de registro**, selecione **Gravar tudo**.

    ![Nível de registro *borda](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Repita as ações que levaram ao erro, e anote a hora em que ocorreu.

1. Mude o nível de registro de volta para **Gravar por padrão**.

### Registros de rastreamento

Às vezes, nossa equipe de suporte pode solicitar que você envie registros de rastreamento. Para fazer isso, você precisa seguir estas etapas:

1. Clique com o botão direito do mouse no ícone do AdGuard VPN no menu da bandeja e escolha **Sair do AdGuard VPN**.

    ![Sair *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    Se você vir a mensagem de aviso, concorde em parar o serviço.

    ![Atenção *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Abra o console (digite cmd no painel de início).

1. Execute o aplicativo com o comando C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpnSvc.exe /trace se você estiver usando Windows de 64 bits, e C:\"Program Files"\AdGuardVpn\AdGuardVpnSvc.exe /trace se você estiver usando 32 bits.

1. Reproduza o problema. Recomendamos fortemente que você anote a hora exata em que reproduziu o problema: isso ajudará nossa equipe de suporte a encontrar as entradas de registro relevantes e resolver o problema mais rapidamente.

1. Exporte os registros gravados: **Suporte** → **Exportar registros e informações do sistema**.

Não se preocupe se o seu arquivo de registro for grande. Precisamos saber o máximo de detalhes possível para resolver seu problema.

## Envio de registros

Para enviar registros à nossa equipe de suporte, siga as etapas abaixo:

1. Clique em **Suporte** no menu acima → **Relatar um erro**.

    ![Relatar um erro *borda](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. No formulário que se abre, insira seu endereço de e-mail e descreva o erro encontrado, incluindo a hora em que ocorreu. Se você não conseguir reproduzir o problema, seja o mais específico possível sobre quando ele ocorreu pela última vez.

    ![Relatório *borda](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Há uma marca de seleção ao lado de **Enviar informações detalhadas do sistema**, o que significa que, ao enviar um relatório, você também envia logs.

> Se por algum motivo for mais conveniente para você nos enviar os logs de outra maneira, você mesmo poderá exportá-los. Para fazer isso, vá para **Suporte** → **Exportar logs e informações do sistema**.

![Exportar *borda](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Nota**: se você encontrar algum problema ao tentar exportar os registros, há uma maneira alternativa. Por favor, siga estas etapas:

1. Abra o aplicativo Explorer

1. Cole `%programdata%/adguardvpn` na caixa de pesquisa

1. Encontre a pasta chamada **Logs**

1. Compacte a pasta

1. Envie-a para nossa equipe de suporte
