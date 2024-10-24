---
title: Установка и удаление
sidebar_position: 2
---

## Системные требования

AdGuard VPN может быть установлен только на устройствах с **Microsoft Windows 11/10/8.1/8/7/Vista SP2 (только веб-версия)**.

## Установка AdGuard VPN для Windows

Чтобы установить AdGuard VPN для Windows, зайдите на [наш сайт](https://adguard-vpn.net/welcome.html) и нажмите кнопку *Скачать*. После этого будет загружен файл `adguardVPNInstaller.exe`. Запустите программу установки и следуйте её инструкциям. Процесс займёт меньше минуты.

Поставьте галочку, чтобы принять Лицензионное соглашение и Политику конфиденциальности. и авторизуйтесь через аккаунт AdGuard или через социальные сети (Google, Apple, Facebook).

## Удаление AdGuard VPN для Windows

Удалить AdGuard VPN с компьютера можно тремя способами:

- Нажмите *Пуск* и найдите AdGuard VPN в открывшемся списке. Щёлкните по нему правой кнопкой мыши и выберите *Удалить*.
- Нажмите *Пуск* → *Параметры* → *Приложения* → *Приложения и возможности*. Найдите AdGuard VPN в открывшемся списке, нажмите на него и выберите *Удалить*.
- Откройте *Панель управления*, затем нажмите *Программы* → *Программы и компоненты* → *Удаление и изменение программы*. Найдите AdGuard VPN в списке, щёлкните по нему правой кнопкой мыши и выберите *Удалить*.

### Продвинутое удаление {#advanced}

Если по какой-либо причине обычное удаление не работает, вы можете попробовать продвинутый способ. Прежде всего, вам нужно [загрузить инструмент удаления](https://cdn.adtidy.org/distr/windows/Uninstall_Utility.zip), созданный нашими разработчиками. Распакуйте скачанный архив в любую папку на компьютере, запустите файл **AdGuard_Uninstall_Utility.exe** и разрешите приложению вносить изменения на вашем устройстве. Затем следуйте инструкции ниже:

1. Выберите *AdGuard VPN* и *Стандартный* тип удаления, затем нажмите *Удалить*:

    ![Стандартное удаление *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard.jpg)

1. Нажмите *OK*, как только появится окно с предупреждением:

    ![Предупреждение о стандартном удалении *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Подождите, пока завершится удаление — появится фраза **Удаление завершено** и предложение перезагрузить компьютер:

    ![Удаление завершено *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_standard_complete.jpg)

    :::note

    Следующие шаги выполняйте только в том случае, если первых двух шагов по каким-то причинам оказалось недостаточно. Мы настоятельно рекомендуем связаться с нашей командой поддержки, прежде чем использовать шаги 3–4 расширенной инструкции по удалению.

    :::

1. Выберите *AdGuard VPN* и *Расширенный* тип удаления, затем нажмите *Удалить*. В появившемся окне нажмите *Да, продолжить*:

    ![Расширенное удаление *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended.jpg)

1. Нажмите *OK*, как только появится окно с предупреждением:

    ![Предупреждение о расширенном удалении *border](https://cdn.adtidy.org/content/kb/vpn/windows/vpn_standard_warning.jpg)

1. Подождите, пока завершится удаление — появится фраза **Удаление завершено** и предложение перезагрузить компьютер:

    ![Удаление завершено *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/vpn_extended_complete.jpg)

AdGuard VPN успешно удалён

#### Running the uninstaller in console mode

Besides running the advanced uninstaller in its user-interactive mode, you can also use command-line arguments to uninstall AdGuard VPN for Windows. To do this, follow the instructions below:

1. Open Command Prompt by typing *cmd* from the Start menu.
2. Use `/console` to run the uninstaller in console mode, without the interactive UI. All the command-line parameters below will be ignored if the `/console` mode is not activated.
3. Use `/vpn` to uninstall AdGuard for Windows. It should look like this:

   `Adguard.UninstallUtility.exe /console /vpn`

4. You can also use `/advanced` to force the uninstaller to run in *Advanced mode* and `/settings` to force the uninstaller to remove user settings along with the application.

:::note

The use of the parameters `/console` and `/vpn` is necessary for a successful uninstall. The parameters `/advanced` and `/settings` are optional.

:::
