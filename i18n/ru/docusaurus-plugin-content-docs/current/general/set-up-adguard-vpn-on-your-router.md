---
title: Как настроить AdGuard VPN на роутере
sidebar_position: 8
---

Setting up AdGuard VPN on your router allows you to protect all devices connected to your network. This includes smart TVs, media players, gaming consoles, and other gadgets that do not support VPN apps directly.

:::note

Эта опция доступна только в том случае, если у вас есть подписка на AdGuard VPN и ваш роутер поддерживает IPsec в настройках _VPN-клиента_ (**не** _VPN-сервера_). If IPsec is not listed in the _VPN CLient_ settings, you can try setting up [AdGuard VPN for Linux](/adguard-vpn-for-linux/setting-up-on-a-router). This solution uses AdGuard's proprietary protocol and is compatible with Keenetic, OpenWRT, and Asuswrt-Merlin routers.

:::

## Как настроить AdGuard VPN на роутере

1. In your [AdGuard account](https://auth.adguardaccount.com/login.html), select AdGuard VPN.

2. В разделе _Устройства_ нажмите _Добавить роутер_.

    ![Добавить роутер \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Выберите локацию VPN-сервера и сгенерируйте учётные данные.

    ![Сгенерировать учётные данные \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

    :::note

    Следующие шаги могут отличаться в зависимости от вашего роутера. В качестве примера мы использовали роутер Keenetic.

    :::

4. На странице администратора перейдите в настройки роутера.

5. Включите _VPN-клиент_ и нажмите _Добавить VPN-сервер_.

6. Выберите IPsec-клиент (для некоторых марок роутеров он может называться IKEv2, но не L2TP/IPsec).

7. Введите учётные данные, созданные в шаге 3.

    ![Введите учётные данные \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

8. Подключите устройства к роутеру.

:::note

Если вы хотите изменить локацию VPN-сервера, вам нужно будет обновить настройки роутера.

:::

## Роутеры, несовместимые с AdGuard VPN

- **ASUS**
    - Есть IPsec только в настройках _VPN-сервера_, а не в настройках _VPN Fusion_/_VPN-клиента_, где он должен быть
- **FRITZ!Box**
