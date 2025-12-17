---
title: Основные настройки на большинстве роутеров
sidebar_position: 1
---

Установка AdGuard VPN непосредственно на ваш роутер обеспечивает каждому устройству в сети конфиденциальный и безопасный доступ в Интернет — без отдельного приложения. Следуйте этому руководству, чтобы добавить ваш роутер в AdGuard VPN, сгенерировать учётные данные и подключить ваши устройства всего за несколько простых шагов.

:::note

Если вы используете роутер MikroTik или Keenetic, пожалуйста, ознакомьтесь с соответствующими инструкциями по настройке:

- [How to set up AdGuard VPN on MikroTik routers](/adguard-vpn-for-routers/installation/mikrotik.md)

- [How to set up AdGuard VPN on Keenetic routers](/adguard-vpn-for-routers/installation/keenetic.md)

:::

## Параметры установки

Есть два основных способа запустить AdGuard VPN на роутере:

1. Профиль IPSec

   - Прост в настройке, поддерживается многими роутерами
   - Ограничения: недоступен в России, только ограниченное количество VPN-локаций (США, Германия, Великобритания, Нидерланды, Финляндия) и нет поддержки исключений

2. [AdGuard VPN CLI](/adguard-vpn-for-linux/setting-up-on-a-router)

   - Расширенные возможности настройки, открывающие доступ ко всем функциям AdGuard VPN, включая все локации и исключения сайтов (исключения приложений недоступны)
   - Требует дополнительных технических знаний
   - На роутерах с маломощными процессорами скорость подключения может быть ограничена до 30–100 Мбит/c

## Получение учётных данных AdGuard VPN

Прежде чем подключить роутер к AdGuard VPN, необходимо сгенерировать уникальные учётные данные в вашем аккаунте AdGuard. Они включают адрес сервера, логин пользователя и пароль. Вы будете использовать их позже при настройке роутера.

1. [В личном кабинете AdGuard](https://auth.adguardaccount.com/login.html) выберите AdGuard VPN.

2. В разделе _Устройства_ нажмите _Добавить роутер_.

   ![Добавить роутер \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/2_year.jpg)

3. Выберите нужную локацию VPN-сервера и сгенерируйте учётные данные.

   ![Сгенерировать учётные данные \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/configure_router.png)

## Основные настройки на большинстве роутеров

Большинство современных роутеров, поддерживающих IKEv2/IPSec, можно настроить для работы с AdGuard VPN всего за несколько шагов. Подготовив учётные данные, следуйте этой общей инструкции по созданию VPN-подключения на роутере.

:::note

Следующие шаги могут отличаться в зависимости от вашего роутера. В качестве примера мы использовали роутер Keenetic.

:::

1. Откройте панель управления роутера

2. Перейдите в настройки роутера

3. Включите _VPN-клиент_ и нажмите _Добавить VPN-сервер_

4. Выберите IPsec-клиент (для некоторых марок роутеров он может называться IKEv2, но не L2TP/IPsec)

5. Введите созданные учётные данные.

   ![Введите учётные данные \*mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/general/vpn_connection.jpg)

   :::note

   В поле _Адрес сервера_ введите _IP-адрес_ из вашего аккаунта AdGuard.

   :::

6. Подключите устройства к роутеру.

:::note

Если вы хотите изменить локацию VPN-сервера, вам нужно будет обновить настройки роутера.

:::

## Роутеры, несовместимые с AdGuard VPN

Below are the routers that are currently known to have compatibility issues:

### ASUS

ASUS routers do not support IKEv2/IPsec, so you cannot set them up using the general method mentioned above. However, routers running the Asuswrt-Merlin custom firmware can install **AdGuard VPN CLI**, which makes the CLI installation method fully supported.

### FRITZ!Box

FRITZ!Box routers do not support IKEv2/IPsec, and due to their closed firmware, it is not possible to install or run AdGuard VPN CLI on them.
