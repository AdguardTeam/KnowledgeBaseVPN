---
title: Automação
sidebar_position: 2
sidebar_label: Automação
---

A _automação_ é um recurso no aplicativo Atalhos que executa uma ação para você automaticamente com base nas condições que você escolher. Por exemplo, ele pode desativar o AdGuard VPN no momento em que você abre um aplicativo e ativá-lo novamente quando você fecha esse aplicativo.

Isso é útil se você quiser o AdGuard VPN desativado para alguns aplicativos, mas não para outros. O AdGuard VPN para iOS não possui exclusões de aplicativos, portanto a automação é a maneira mais próxima de obter o mesmo resultado sem precisar ativar e desativar a VPN você mesmo toda vez.

Veja como configurar uma automação que desconecta do AdGuard VPN quando você abre um aplicativo e o ativa novamente quando você o fecha.

## Desativar o AdGuard VPN ao abrir um aplicativo

1. No aplicativo Atalhos, vá para _Automação_ e toque em _Nova Automação_ ou no botão de adição (+) no canto superior direito.
2. Escolha _Aplicativo_, selecione um ou vários aplicativos e marque _É aberto_.
3. Ative _Executar Imediatamente_ e desative _Notificar ao Executar_.
4. Toque em _Seguinte_, selecione o AdGuard VPN e escolha _Desconectar_.

![Automação de aplicativo](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation1-combined.png)

Para ativar o AdGuard VPN novamente quando você fechar o mesmo aplicativo, repita as etapas acima, mas selecione _For Fechado_ na etapa 2 e defina a ação na etapa 4 como _Conectar_.

## Desative o AdGuard VPN ao se conectar ao Wi-Fi doméstico

Se você não precisa usar VPN em casa, configure-a para desativar quando você se conectar à sua rede Wi-Fi doméstica e reativar quando sair.

1. No aplicativo Atalhos, vá para _Automação_ e toque em _Nova Automação_ ou ‘+’ no canto superior direito.
2. Escolha _Wi-Fi_, selecione _Ao Conectar_ e escolha sua rede doméstica.
3. Ative _Executar Imediatamente_ e _Executar Após Interrupção de Conexão_.
4. Toque em _Seguinte_, selecione o AdGuard VPN e escolha _Desconectar_.

![Automação de Wi-Fi \*mobile](https://cdn.adtidy.org/content/kb/vpn/ios/shortcuts/automation-2-combined.png)

## Ative o AdGuard VPN novamente ao sair

Repita as etapas acima, mas escolha _Ao Desconectar-se_ em vez de _Ao Conectar-se_, ative _Executar Imediatamente_ e defina a ação como _Conectar_.
