---
title: Как настроить AdGuard VPN на роутере
sidebar_position: 8
---

Настроив AdGuard VPN на роутере, вы сможете защитить свои данные на устройствах, на которве нельзя установить VPN-приложения, например, на умных телевизорах и игровых приставках.

:::note

Эта опция доступна только в том случае, если у вас есть подписка на AdGuard VPN и ваш роутер поддерживает IPsec.

:::

## Как настроить AdGuard VPN на роутере

1. In your [AdGuard account](https://auth.adguard.com/login.html), select AdGuard VPN.

2. Under _Devices_, click _Add router_.

   ![Add router \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Select the desired VPN server location and generate credentials.

   ![Generate credentials \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

   :::note

   The next steps may vary depending on your router. В качестве примера мы использовали роутер Keenetic.

   :::

4. In your admin page, go to the router settings.

5. Enable _VPN Client_ and click _Add VPN server_.

6. Select IPsec-client (it may be called IKE; not L2TP/IPsec).

7. Enter the credentials you created in step 3.

   ![Введите учётные данные \*mobile\_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Connect devices to your router.

:::note

Если вы хотите изменить локацию VPN-сервера, вам нужно будет обновить настройки роутера.

:::

## Почему стоит настроить AdGuard VPN на роутере

- С AdGuard VPN на роутере ни у вашего VPN-провайдера, ни у кого-либо ещё не будет доступа к вашим действиям в интернете
- AdGuard VPN на роутере защищает всю вашу сеть, а это означает, что все подключённые к ней устройства будут в безопасности
- You can enhance security and protect your data on devices where it's not possible to install AdGuard VPN apps — smart TVs (currently, AdGuard VPN is only available on Android TV) and game consoles
