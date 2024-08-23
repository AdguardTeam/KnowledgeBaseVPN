---
title: Enviando feedback
sidebar_position: 6
---

## Relatar um problema ou sugerir um recurso

Se você encontrou um bug no AdGuard VPN para Linux ou deseja sugerir um novo recurso, veja como fazer isso:

- Preencha o [formulário de feedback](https://surveys.adguard.com/en/vpn_linux/form.html).
- [Crie um problema no GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Mas antes de fazer isso, verifique o [repositório](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) para problemas semelhantes.

:::note
Se você deseja apoiar a implementação de um novo recurso ou correção de bug, você pode votar nele no GitHub. Para votar, basta reagir com algum emoji.
:::

## Coletar e enviar logs

1. Ative o registro de depuração digitando:

   `adguardvpn-cli config set-debug-logging on`

2. Reproduza o problema e tente se lembrar da hora exata em que ocorreu.

3. Aguarde um pouco e armazene os logs na pasta _Downloads_ ou _Início_ digitando:

   Para Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Para Mac

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Envie o arquivo de log para devteam@adguard.com. Especifique a hora do erro e anexe um link ao seu problema do GitHub ou seu número (ele aparece como #número ao lado do título). Como alternativa, você pode fazer upload do arquivo de log para o Google Drive e compartilhá-lo com devteam@adguard.com. Anexe o link do arquivo ao seu problema do GitHub.

5. Desative o registro de depuração digitando:

   `adguardvpn-cli config set-debug-logging off`
