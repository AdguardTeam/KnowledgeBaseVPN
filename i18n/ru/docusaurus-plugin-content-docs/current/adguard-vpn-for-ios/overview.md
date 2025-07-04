---
title: Обзор функций
sidebar_position: 1
---

## Что такое AdGuard VPN для iOS?

VPN создает защищенное соединение с другой сетью в интернете. Он подключает компьютер или мобильное устройство пользователя к серверу и позволяет выходить в сеть, используя другой IP-адрес. Если VPN-сервер расположен в другой стране, будет выглядеть так, как будто вы подключились к интернету из этой страны. Более подробно о том, как работает VPN, рассказали [в статье](/general/how-vpn-works).

В AdGuard VPN есть несколько функций:

- Скрывает ваше реальное местоположение и помогает оставаться анонимным
- Изменяет ваш IP-адрес, чтобы защитить ваши данные от отслеживания
- Шифрует ваш трафик, делая его содержимое недоступным для мошенников
- Позволяет настроить, где использовать VPN, а где нет (функция исключений)

Ещё одна характерная черта AdGuard VPN для iOS — это собственный VPN-протокол. Его очень сложно обнаружить по сравнению с другими VPN-протоколами, и он стабильно работает даже при плохом интернет-соединении. [Подробнее о протоколе AdGuard VPN](/general/adguard-vpn-protocol).

## Как использовать AdGuard VPN для iOS

Для того, чтобы использовать AdGuard VPN для iOS, необходимо войти в [аккаунт AdGuard](https://adguardaccount.com/). Вы можете войти в систему непосредственно с помощью ваших учётных данных AdGuard или с помощью Google, Apple ID или Facebook (если ваш аккаунт был зарегистрирован с использованием того же адреса электронной почты).

Если у вас нет аккаунта AdGuard, создайте его.

Использовать AdGuard VPN довольно просто. На главном экране вы увидите кнопку *Подключить* (*Отключить*), а также список доступных серверов (*локаций*). У каждого сервера есть своя локация (определённая страна и город) и пинг.

Пинг — это время ответа сервера в миллисекундах. Он указывает, насколько быстрым будет VPN-соединение при подключении к этой локации. Выбор сервера с пингом 22 мс означает, что пакет данных, отправленный на этот сервер, будет возвращён через 22 мс.

С AdGuard VPN вы можете выбирать из более чем 50 локаций в десятках стран.

![Home and locations *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.7/home-locations-vpn-ios.png)

## Исключения

Вы можете найти вкладку «Исключения», нажав на вторую иконку в нижней панели.

По умолчанию, AdGuard VPN активен для всех сайтов, кроме тех, что добавлены в исключения. Вы также можете включить его выборочно — VPN будет активен только для указанных сайтов. Чтобы переключиться на этот режим, нажмите *Изменить режим*.

:::note

У каждого режима свой список исключений.

:::

Вы можете добавить домены (например, `google.com`) или поддомены (например, `news.google.com`) сайтов в списки тремя способами:

- Введите их вручную в приложении
- [Выберите из списков доменов для популярных сервисов](#domain-lists-for-popular-services)
- Добавьте их прямо из браузера, поделившись нужными страницами с помощью AdGuard VPN

![Исключения *mobile_border](https://cdn.adguard-vpn.com/blog/new/lpjs7iexclusions-as-of-v2-4.png)

Когда вы вручную добавляете домен, все поддомены добавляются автоматически (это выглядит как `*.google.com`). Хотите оставить только google.com или отключить VPN для конкретного домена? Нажмите на строку с сайтом — это откроет отдельный экран, где вы можете управлять поддоменами. Просто снимите флажки с тех, которые вам не нужны.

![Поддомены *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/domains_en.png)

Если вы вручную добавляете поддомен, основной домен также будет добавлен — но флажок рядом с ним не будет установлен.

### Списки доменов для популярных сервисов

С крупными сервисами, такими как Google, дело обстоит сложнее. Обычно они используют более одного домена — один для медиафайлов, другой для API, а также домены для разных стран. Например, в случае с Google у нас в списке 416 доменов — все они должны быть добавлены в исключения, чтобы полностью отключить (или включить) VPN для сервиса.

Вот как добавить все необходимые домены для популярного сервиса в список исключений:

1. Откройте *Исключения*.
2. Нажмите *Добавить сайт*.
3. Нажмите *Из списка*.
4. Найдите нужный сервис в списке и нажмите *Добавить*.

![Список популярных сервисов *mobile_border](https://cdn.adguard-vpn.com/content/release_notes/vpn/ios/v2.4/add_website_en.png)

### Импорт/экспорт исключений

Другая полезная функция — это импорт и экспорт списков исключений. Таким образом, вы можете обмениваться списками исключений с другими устройствами.

Вы можете сделать это в четыре шага:

1. Откройте AdGuard VPN на устройстве, откуда хотите экспортировать списки исключений. Найдите соответствующий раздел и нажмите кнопку *Экспортировать*. После этого загрузится архив `exclusions.zip`.

2. Внутри архива находятся два файла `.txt`, по одному для каждого из списков — Основного и Выборочного. Добавляйте к ним дополнительные исключения, удаляйте существующие, переименовывайте файлы или просто оставьте архив как есть.

3. При передаче между различными устройствами не забудьте отправить файл `.zip` на устройство для импорта. Например, если вы импортируете списки с iOS-устройства на Mac, убедитесь, что вы предварительно отправили файл `.zip` на ваш Mac.

4. Откройте AdGuard VPN на вашем устройстве, на которое вы хотите импортировать архив с готовыми списками исключений. Найдите соответствующий раздел, нажмите кнопку *Импортировать* и выберите архив.

**В AdGuard VPN для iOS доступ к функциям экспорта и импорта можно получить, нажав на иконку с тремя точками в правом верхнем углу экрана «Исключения»**.

![Исключения импорта/экспорта *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/exclusions-3dot-menu.png)

## Saved locations

This feature lets you save your favorite server locations to a dedicated tab so that you can quickly access them without the need to search or scroll through the whole list.

To add a location to *Saved*, just swipe left on it. To remove it from *Saved*, do the same:

![Saved locations add remove *mobile](https://cdn.adtidy.org/content/release_notes/vpn/ios/v2.7/iosvpn-saved-locations-add-remove.gif)

## General settings

To open General settings:

1. Нажмите на значок Настроек (⚙) в правом нижнем углу главного экрана приложения.
2. Нажмите *Основные*.

Here, you can configure AdGuard VPN for iOS as you need using different options: *DNS server*, *Theme*, *Advanced*, *Send technical and interaction data* and *Kill Switch*.

![General settings *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/general-settings.png)

### DNS-сервер

AdGuard VPN for iOS offers a choice between several DNS servers, each with their own special qualities. For example, AdGuard DNS removes ads and protects your device from tracking while AdGuard DNS Family Protection combines the functions of AdGuard DNS with Safe search and adult content blocking. DNS servers by different DNS providers may also work faster or slower depending on your location, ISP, and other factors. Choose the one that works best for you. You can [find out more about DNS](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) and its characteristics.

![DNS server screen *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/DNS-server.png)

### Тема

You can set your app theme to System, Dark, or Light (available in iOS 13 or later).

### Расширенные настройки

In *Advanced* settings, you can find 4 sections — *Operating mode*, *Logging level*, *Export logs and system info*, and *Diagnostic info*.

#### Режим работы

AdGuard VPN for iOS can operate in two modes: **VPN** and **Integrated**.

The *VPN* mode uses the [AdGuard VPN protocol](/general/adguard-vpn-protocol), which provides the best combination of speed and security. In this mode, AdGuard VPN will not work with [AdGuard Ad Blocker for iOS](https://adguard.com/adguard-ios/overview.html).

In **Integrated mode**, AdGuard VPN will be able to work simultaneously with AdGuard Ad Blocker for iOS using the IPSec protocol. This protocol is also secure, but a bit slower and easier to detect. You don’t have to do anything to set up the integration: just install both apps and switch to this mode.

:::note

In **Integrated** mode, you can’t use the Exclusions feature or choose a DNS server.

:::

#### Уровень логирования

This setting is primarily used for debugging and troubleshooting purposes. The Extended and Extreme logging levels record more detailed information that can help identify and fix various problems or bugs.

:::caution

**It is not recommended to enable the Extended or Extreme logging level unless requested by our support team**.

:::

#### Экспортировать логи и информацию о системе

This option can be used to send the app’s logs and system info to our support or anyone else.

#### Диагностические данные

This option lets you export technical information that can be useful in solving problems and is sometimes requested by our support and developers.

### Отправлять данные об использовании приложения

By turning this option on, you are helping us understand better how users interact with the app. We use that information to improve user experience.

### Kill Switch

If for some reason your VPN connection suddenly drops, *Kill Switch* will automatically terminate the Internet connection, making sure your data doesn’t leak and your identity stays hidden.

## Quick actions

Quick actions are the convenient way to do useful or any app-specific actions from the Home screen without opening an app.

To access the quick actions menu, tap and hold the AdGuard VPN app icon, then lift your finger. In the opened menu, you will see AdGuard VPN’s quick actions: *Connect* (*Disconnect*) and *Select location*. You can also access all default actions like removing the app or moving or sharing the app.

![Quick actions *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/quick-action-menu.png)

## Support

The Support screen (*Settings* → *Support*) has a number of helpful features: *FAQ*, *Report a bug*, *Request a feature*, and *Rate app*. The latter allows you to rate AdGuard VPN for iOS on the App Store.

![Support *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/support.png)

## Subscription screen

If you are using the free version of AdGuard VPN, there will be another tab with an arrow icon on the bottom tab bar. This section briefly describes the main benefits of the paid version of the app. You can choose a yearly or monthly subscription.

![Subscription *mobile_border](https://cdn.adguardvpn.com/content/kb/vpn/ios/2.2/unlimited.png)
