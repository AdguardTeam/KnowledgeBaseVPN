---
title: Como configurar o AdGuard VPN em seu roteador
sidebar_position: 8
---

By setting up AdGuard VPN on your router, you can protect your data on devices where you cannot install VPN apps, such as smart TVs, smart media devices, and game consoles.

:::note

This option is only available if you have an AdGuard VPN subscription and your router supports IPsec in its _VPN Client_ (**Not** _VPN Server_) settings.

:::

## Como configurar o AdGuard VPN em seu roteador

1. Na sua [conta do AdGuard](https://auth.adguard.com/login.html), selecione AdGuard VPN.

2. Em _Dispositivos_, clique em _Adicionar roteador_.

   ![Adicionar roteador \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Selecione o local desejado do servidor VPN e gere as credenciais.

   ![Gerar credenciais \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   As próximas etapas podem variar dependendo do seu roteador. Usamos o roteador Keenetic como exemplo.

   :::

4. Na sua página de administrador, acesse as configurações do roteador.

5. Ative _Cliente VPN_ e clique em _Adicionar servidor VPN_.

6. Select IPsec-client (it may for some router brands be called IKEv2; not L2TP/IPsec).

7. Insira as credenciais que você criou na etapa 3.

   ![Insira as credenciais \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Conecte dispositivos ao seu roteador.

:::note

Você precisará atualizar as configurações do roteador se quiser alterar o local do servidor VPN.

:::

## Por que configurar o AdGuard VPN em seu roteador pode ser útil

- Com o AdGuard VPN em seu roteador, nem seu provedor de VPN nem qualquer outra pessoa tem acesso à sua atividade na Internet
- Instalar o AdGuard VPN em seu roteador protege toda a sua rede, o que significa que todos os dispositivos conectados a ele estão protegidos
- You can enhance security and protect your data on devices where it’s not possible to install AdGuard VPN apps — smart TVs, smart media devices, and game consoles

## Dispositivos que podem ser conectados a um roteador com AdGuard VPN

- **PlayStation, Xbox, and Nintendo Switch**: To enjoy seamless online gaming and enhanced security on PS4, PS5, Xbox One, Xbox Series, and Nintendo Switch, [set up AdGuard VPN on your router](#how-to-set-up-adguard-vpn-on-your-router) and connect your console to it

- **Apple TV**: Siga as instruções para [configurar o AdGuard VPN em seu roteador](#como-configurar-o-adguard-vpn-em-seu-roteador) e, em seguida, conecte sua Apple TV

- **Chromecast**:

  **Para Gen 4:** Basta baixar e instalar o [AdGuard VPN do Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Para Gen 3:** Siga nosso guia para [configurar o AdGuard VPN em seu roteador](#como-configurar-o-adguard-vpn-em-seu-roteador). Certifique-se de que sua TV e smartphone, tablet ou computador estejam conectados à mesma rede

  Para **Android TV**, você não precisa configurar o AdGuard VPN em um roteador - temos uma versão especial para Android TV. Basta seguir estas etapas:

  1. Instale o [AdGuard VPN do Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) na sua Android TV
  2. Se você já possui uma conta do AdGuard, faça login com suas credenciais. Se você é novo no AdGuard, insira seu endereço de e-mail e siga as instruções na tela
  3. Abra o aplicativo, selecione o local desejado e conecte-se

## Routers known to be incompatible with AdGuard VPN

- **ASUS**
  - Only has IPsec in the _VPN Server_ settings, and not in the correct _VPN Fusion_/_VPN Client_ settings
- **FRITZ!Box**
