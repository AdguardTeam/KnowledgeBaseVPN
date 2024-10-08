---
title: Como coletar e enviar logs
sidebar_position: 1
---

Existem várias maneiras de coletar logs de extensão do navegador AdGuard VPN. Não importa o método que você escolher, os mesmos dados serão coletados. Na extensão, os logs não são divididos em padrão e debug. E diferentes opções para coletar logs são fornecidas para os casos em que um problema encontrado o impede de usar uma ou outra instrução.

## Coleta e envio de logs através de *Relatar um bug* secção

1. Abra a extensão AdGuard VPN Browser, se possível, repita as ações que levaram ao erro. Observe a hora exata em que esse erro ocorreu.
1. Abra *Configurações* clicando no ícone do menu hambúrguer (☰) → *Suporte* → *Relate um bug*.
1. No formulário aberto, deixe um endereço de e-mail inserido automaticamente ou insira outro e descreva o erro encontrado, incluindo o horário em que ocorreu esse erro. Se você não conseguir reproduzir o problema, especifique com a maior precisão possível quando ocorreu pela última vez.
1. Make sure that there is a check mark next to *Include the diagnostic report in the message* and tap *Submit*. Dessa forma, você enviará os logs junto com o relatório do bug.

## Coleta e envio de logs por meio do botão *Exportar logs*

1. Abra a extensão AdGuard VPN Browser, se possível, repita as ações que levaram ao erro. Observe a hora exata em que esse erro ocorreu.
1. Clique com o botão direito do mouse no ícone da extensão AdGuard VPN Browser.
1. No menu aberto, clique em *Exportar logs*.
1. Como resultado, o arquivo de logs será salvo em seu dispositivo no formato `txt`.

Agora que você coletou os logs, você precisa entregá-los à nossa equipe de desenvolvimento. Para isso:

1. Reporte um bug no GitHub. Instruções detalhadas sobre como criar um problema no GitHub podem ser encontradas neste artigo.
1. Send an archive with logs and reproduce time to `devteam@adguard.com` and attach a link to your GitHub issue. Also you can add an archive with logs and reproduce time to Google Drive and share it with `devteam@adguard.com` attaching the Google Drive link to your issue on GitHub.

## Coletando e enviando logs por meio das ferramentas de desenvolvedor do navegador

### Chrome

1. Abra a extensão de navegador AdGuard VPN e, se possível, repita as ações que levaram ao erro. Observe a hora exata em que esse erro ocorreu.
1. Vá para `chrome://extensions`
1. Ativar o *modo de desenvolvedor*

    ![O modo de desenvolvedor *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Clique em `background.html`

    ![Plano de fundo * borda](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Abra a aba *Console*

    ![A aba Console *borda](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Abra o menu de contexto e clique em *Salvar como…*

    ![Salvar como *borda](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Agora que você coletou os logs, você precisa entregá-los à nossa equipe de desenvolvimento. Para isso:

1. Reportar um problema no GitHub. Instruções detalhadas sobre como criar um problema no GitHub podem ser encontradas neste artigo.
1. Envie um arquivo com logs e tempo de reprodução para `devteam@adguard.com` e anexe um link para seu problema no GitHub. Além disso, você pode adicionar um arquivo com logs e tempo de reprodução ao Google Drive e compartilhá-lo com `devteam@adguard.com` anexando o link do Google Drive ao seu problema no GitHub.

### Firefox

1. Abra a extensão AdGuard VPN Browser, se possível, repita as ações que levaram ao erro. Observe a hora exata em que esse erro ocorreu.
1. Ir para `sobre: addons`
1. Clique *Debug Add-ons*

    ![Debug Add-ons *borda](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Clique em *Inspecionar*

    ![Inspecionar *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Vá para a aba *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to File*

    ![Salvar *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Agora que você coletou os logs, você precisa entregá-los à nossa equipe de desenvolvimento. Para isso:

1. Reportar um problema no GitHub. Instruções detalhadas sobre como criar um problema no GitHub podem ser encontradas neste artigo.
1. Envie um arquivo com logs e tempo de reprodução para `devteam@adguard.com` e anexe um link para seu problema no GitHub. Além disso, você pode adicionar um arquivo com logs e tempo de reprodução ao Google Drive e compartilhá-lo com `devteam@adguard.com` anexando o link do Google Drive ao seu problema no GitHub.
