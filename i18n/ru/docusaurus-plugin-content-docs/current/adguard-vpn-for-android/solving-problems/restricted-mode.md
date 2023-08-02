---
title: 'Проблемы с профилем «Ограниченный режим»'
sidebar_position: 4
---

Владельцы телефонов и планшетов под управлением операционной системы Android 7+ могут столкнуться с проблемой, вызванной использованием **профиля с ограниченным режимом**. При наличии такого профиля **AdGuard VPN**, как и другие приложения, использующие VPN, получает ограничения на выборочную обработку VPN-трафика. Кроме того, одной из причин этой проблемы может быть использование профиля **Dual App/Dual Messenger** на вашем устройстве. Ниже описаны рекомендации, которыми вы можете воспользоваться, если столкнётесь с этой проблемой.

## Решения

Есть два способа решить проблему:

### Вариант 1: Предоставьте права доступа AdGuard VPN с помощью ADB

1. Активируйте **режим разработчика** и включите **отладку по USB**:

    - Откройте приложение **Настройки** на своем телефоне;
    - Перейдите в раздел **О системе** (последний пункт в меню настроек). В этом разделе найдите подпункт **О телефоне**;
    - Нажмите на строку **Номер сборки** 7 раз. После этого вы получите уведомление о том, что **Теперь вы разработчик** (при необходимости введите код разблокировки устройства);
    - Open **System Settings** → **Developer Options** → Scroll down and enable **USB debugging** → Confirm debugging is enabled in the window **Allow USB debugging** after reading the warning carefully.

    > If you have any difficulties or additional questions, full instructions can be found [here](https://developer.android.com/studio/debug/dev-options).

1. [Установите и настройте](https://www.xda-developers.com/install-adb-windows-macos-linux/) ADB;

    > На платформе Windows владельцам **Samsung** может потребоваться установить [эту утилиту](https://developer.samsung.com/mobile/android-usb-driver.html).

1. Подключите устройство с помощью кабеля USB **** к компьютеру или ноутбуку, на котором вы установили **ADB**;

1. Open **the command line** on your PC:

    - **Cmd.exe** если вы используете **Windows**;
    - **Terminal**, если вы используете **macOS**;

1. Введите команду `adb shell pm grant com.adguard.vpn android.permission.INTERACT_ACROSS_USERS` и нажмите **Enter**.

### Вариант 2. Удаление *учётной записи пользователя с ограниченным доступом*

[Здесь](https://support.google.com/a/answer/6223444?hl=en) вы можете найти, как управлять учётными записями пользователей с Android-устройства.

> Please note that in some cases restricted user accounts are created implicitly and cannot be removed. For instance, when you use Dual Messenger or Dual App features on **Samsung** or **LG** devices. Read below how to fix the issue in these cases.

### Устройства LG и Samsung

Владельцы телефонов **LG** или **Samsung** также могут столкнуться с подобной проблемой. Она может быть вызвана использованием функции **Dual App/Dual Messenger** (которая автоматически создает ограниченный профиль). Чтобы решить эту проблему, необходимо отключить эту функцию.

#### Samsung

- Откройте **Настройки**;
- Нажмите **Дополнительно**;
- Прокрутите вниз, а затем нажмите **Dual Messenger**;
- Отключите **Dual Messenger** для всех приложений;
- Заблокируйте устройство на 5 минут;
- Разблокируйте экран и повторите попытку создания VPN-профиля.

#### LG

- Откройте **Настройки**;
- Выберите вкладку **Основные**;
- Прокрутите вниз, а затем нажмите **Dual App**;
- Удалите все приложения из списка;
- Перезагрузите устройство.
