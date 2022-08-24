---
title: Обзор функций
sidebar_position: 1
---

## Что такое AdGuard VPN для iOS

VPN создает защищенное соединение с другой сетью в интернете. Он подключает компьютер или мобильное устройство пользователя к серверу и позволяет выходить в сеть, используя другой IP-адрес. То есть, если VPN-сервер находится в другой стране, будет казаться, что вы подключились к интернету из этой страны. [Узнайте больше](/general/how-vpn-works.md) о том, как работает VPN.

AdGuard VPN выполняет следующие функции:
* скрывает ваше реальное местоположение и помогает вам оставаться анонимным
* меняет ваш IP-адрес, чтобы защитить ваши данные от трекинга
* шифрует ваш трафик, делая его недоступным для мошенников
* позволяет настроить, где использовать VPN, а где нет (списки исключений)

Ещё одна характерная черта AdGuard VPN для iOS — это собственный VPN-протокол. У него есть два основных преимущества: по сравнению с другими протоколами VPN его очень трудно обнаружить, и он стабильно работает даже при плохом интернет-соединении. Подробнее о протоколе AdGuard VPN вы можете узнать [в этой статье](../general/adguard-vpn-protocol.mdx).

## Как использовать AdGuard VPN для iOS

Для того, чтобы использовать AdGuard VPN для iOS, необходимо войти в [аккаунт AdGuard](https://my.adguard.com/). Вы можете войти в систему непосредственно с помощью ваших учётных данных AdGuard или с помощью Google, Apple ID или Facebook (если ваш аккаунт был зарегистрирован с использованием того же адреса электронной почты).

Если у вас нет аккаунта AdGuard, создайте его.

Использовать AdGuard VPN довольно просто. На главном экране вы увидите кнопку *Подключить/Отключить*, а также список доступных серверов. Серверы имеют свои локации (определенная страна и город) и показатель пинга. Пинг описывает время ответа сервера (в миллисекундах). Например, выбор сервера с пингом 22 мс означает, что сигнал пройдет путь до сервера и обратно за 22 миллисекунды. Чем ниже показатель пинга, тем выше скорость соединения. В AdGuard VPN вы можете выбирать из более чем 50 локаций в десятках стран.

![Main screen and locations](https://cdn.adguard.com/content/kb/vpn/ios/1.png?123)

## Список исключений

You can find the exclusion feature by tapping the middle button below. There you will see two exclusion lists — for Regular and Selective Modes. In the Regular mode the VPN works on all websites except for the ones from the exclusion list. In the Selective mode, conversely, the VPN operates only on the sites from the list. You can add domains (e.g. `google.com`) or subdomains (e.g. `*.google.com`) of websites in two ways: you can enter them manually in the app or right from the browser by clicking the *Share* button and finding AdGuard VPN in the opened list below.

![Exclusions](https://cdn.adguard.com/content/kb/vpn/ios/2.png?123)

Another useful feature is the import/export of exclusion lists. You can do it by following the next four steps:

1. Откройте AdGuard VPN на устройстве или в браузере, откуда вы хотите экспортировать ваши списки исключений. Найдите соответствующий раздел настроек и нажмите *Экспортировать*. После этого загрузится архив `exclusions.zip`.

2. Внутри находятся два `.txt` файла, которые относятся к Обычному и Выборочному режимам. Добавляйте к ним дополнительные исключения, удаляйте существующие, переименовывайте файлы или просто оставьте архив как есть.

3. При переносе списков между различными устройствами отправьте файл `.zip` на устройство для импорта. Например, если вы импортируете списки с iOS-устройства на Mac, убедитесь, что вы предварительно отправили файл `.zip` на ваш Mac.

4. Откройте AdGuard VPN на вашем устройстве, на которое вы хотите импортировать архив с готовыми списками исключений. Найдите соответствующий раздел, нажмите кнопку *Импортировать* и выберите архив.

![Import/export exclusions](https://cdn.adguard.com/content/kb/vpn/ios/import-export-exclusions.png)

## Настройки приложения

To reach App settings:

1. Нажмите на кнопку Настройки (⚙) в правом нижнем углу главного экрана приложения AdGuard VPN
2. Откройте *Настройки приложения*

Here, you can configure AdGuard VPN for iOS as you need using different options: Operating Mode, DNS server, Wi-Fi auto-protection, Color Theme and Advanced Settings.

![App Settings](https://cdn.adguard.com/content/kb/vpn/ios/app-settings.png)

### Режим работы

AdGuard VPN for iOS can operate in two modes: **General** and **Integrated**.

In **General** mode, the [AdGuard VPN protocol](../general/adguard-vpn-protocol.mdx) is employed, which provides the best combination of speed and security. In this mode, AdGuard VPN will not be able to work alongside [AdGuard Ad Blocker for iOS](https://kb.adguard.com/en/ios).

In **Integrated** mode, AdGuard VPN will be able to work at the same time with AdGuard for iOS ad blocker by using the IPSec protocol instead. This protocol is also secure, but a little slower and easier to detect. You don't need to perform any additional actions to set up the integration: just install both apps and switch to this mode.
> Обратите внимание, что вы не можете воспользоваться списками исключений, а также выбрать DNS-сервер в Интегрированном режиме.

### DNS-сервер

The purpose of Domain name system (DNS) is to translate websites' names into something browsers can understand, i.e. IP addresses. This job is performed by DNS servers. AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with SafeSearch and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can find out more about DNS and its characteristics [in this article](https://kb.adguard.com/en/general/dns-filtering#what-is-dns).

![DNS server screen](https://cdn.adguard.com/content/kb/vpn/ios/dns-server.png)

### Автоматическая защита Wi-Fi

VPN will automatically turn on when the device connects to a Wi-Fi network.

### Тема

You can choose system default, dark or light theme of the app (available in iOS 13 and later versions).

### Расширенные настройки

In the *Advanced settings* you can find two sections — Logging level and Diagnostic info. Concerning the first option it is not recommended to enable the Extended logging level unless requested by our support team. Diagnostic info, locally stored technical information about the device and connections (IP address, ID, ping, etc.), can be sent to us in case of any technical problems.

## Быстрые действия (доступно в iOS 13 и более поздних версиях)

To access this feature, touch and hold the app icon, then lift your finger. You'll see a list of Quick Actions: Connect/Disconnect to the currently selected server, Choose location to select a new server location. You can also, of course, access all default actions like removing the app or moving the app icon around.

![Quick actions](https://cdn.adguard.com/content/kb/vpn/ios/quick-actions.png)


## Поддержка

The users' accomplishment is the high priority for us. So there is a variety of helping features in the app (press the *Settings* button at the bottom right and then *Support*): you can see the FAQ section, report a bug, leave feedback, discuss your problems and suggestions on our forum, in social networks, or on GitHub, rate AdGuard VPN for iOS in the App Store and export logs.

![Support](https://cdn.adguard.com/content/kb/vpn/ios/support.png)

## Подписка

If you are using the free version of AdGuard VPN, there will be the fourth tab with an arrow icon on the bottom tab bar. In this section you will find brief information about the main advantages of the paid version of the app and will be able to buy a subscription.

![Subscription](https://cdn.adguard.com/content/kb/vpn/ios/subscription_en.png?123)