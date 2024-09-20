---
title: Como configurar o AdGuard VPN em seu roteador
sidebar_position: 8
---

Ao configurar o AdGuard VPN em seu roteador, você pode proteger seus dados em dispositivos onde não é possível instalar aplicativos VPN, como Smart TVs e consoles.

:::note

Esta opção só estará disponível se você tiver uma assinatura VPN do AdGuard e seu roteador suportar IPsec nas configurações de _Cliente VPN_ (**Não** _Servidor VPN_).

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

6. Selecione IPsec-client (pode ser chamado de IKEv2; e não L2TP/IPsec).

7. Insira as credenciais que você criou na etapa 3.

   ![Insira as credenciais \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Conecte dispositivos ao seu roteador.

:::note

Você precisará atualizar as configurações do roteador se quiser alterar o local do servidor VPN.

:::

## Por que configurar o AdGuard VPN em seu roteador pode ser útil

- Com o AdGuard VPN em seu roteador, nem seu provedor de VPN nem qualquer outra pessoa tem acesso à sua atividade na Internet
- Instalar o AdGuard VPN em seu roteador protege toda a sua rede, o que significa que todos os dispositivos conectados a ele estão protegidos
- Você pode aumentar a segurança e proteger seus dados em dispositivos onde não é possível instalar aplicativos AdGuard VPN - Smart TVs e consoles

## Dispositivos que podem ser conectados a um roteador com AdGuard VPN

- **PlayStation, Xbox e Nitendo Switch**: Para desfrutar de jogos online perfeitos e segurança aprimorada no PS4, PS5, Xbox Series e Nitendo Switch, [configure o AdGuard VPN em seu roteador](#como-configurar-o-adguard-vpn-em-seu-roteador) e conecte seu console a ele

- **Apple TV**: Siga as instruções para [configurar o AdGuard VPN em seu roteador](#como-configurar-o-adguard-vpn-em-seu-roteador) e, em seguida, conecte sua Apple TV

- **Chromecast**:

  **Para Gen 4:** Basta baixar e instalar o [AdGuard VPN do Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn)

  **Para Gen 3:** Siga nosso guia para [configurar o AdGuard VPN em seu roteador](#como-configurar-o-adguard-vpn-em-seu-roteador). Certifique-se de que sua TV e smartphone, tablet ou computador estejam conectados à mesma rede

  Para **Android TV**, você não precisa configurar o AdGuard VPN em um roteador - temos uma versão especial para Android TV. Basta seguir estas etapas:

  1. Instale o [AdGuard VPN do Google Play](https://play.google.com/store/apps/details?id=com.adguard.vpn) na sua Android TV
  2. Se você já possui uma conta do AdGuard, faça login com suas credenciais. Se você é novo no AdGuard, insira seu endereço de e-mail e siga as instruções na tela
  3. Abra o aplicativo, selecione o local desejado e conecte-se

## Roteadores conhecidos por serem incompatíveis com o AdGuard VPN

- **ASUS**
  - Possui apenas IPsec nas configurações do _Servidor VPN_ e não nas configurações do _VPN Fusion_/_Cliente VPN_
- **FRITZ!Box**
