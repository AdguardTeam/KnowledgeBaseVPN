---
title: Обзор функций
sidebar_position: 1
---

Браузерное расширение AdGuard VPN доступно для Chrome, Firefox, Opera и Edge. Пользовательский интерфейс и функциональность не отличаются в разных браузерах, поэтому приведённый ниже обзор будет актуален для расширений AdGuard VPN для всех браузеров.

:::note

Вы можете использовать Браузерное расширение AdGuard VPN только после авторизации. Войдите в аккаунт AdGuard с помощью Google, Facebook или Apple. В последнем случае убедитесь, что ваш аккаунт привязан к тому же адресу, что и аккаунт AdGuard. If you have an [AdGuard VPN subscription](/general/subscription), it will be activated automatically in AdGuard VPN Browser Extension. У вас нет аккаунта AdGuard? [Создайте его здесь](https://auth.adguardaccount.com/registration.html).

:::

## Сохранённые

Вы можете сохранить избранные локации для быстрого доступа. Для этого пнаведите курсор на локацию и нажмите на появившийся значок закладки:

![Сохранить локацию *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Отмеченные вами локации появятся во вкладке *Сохранённые*.

![Сохранённая вкладка *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## Статистика

В разделе меню *Статистика* можно легко отслеживать, сколько данных проходит через ваше VPN-подключение.

![Статистика *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

Когда статистика может пригодиться:

- **Чтобы проверить, действительно ли работает VPN**. Быстрый взгляд на статистику подтвердит, что ваше подключение активно, и трафик идёт через VPN.

- **Для обнаружения неожиданной активности**. Если трафик растёт, пока вы бездействуете, что-то в фоновом режиме — вкладка или расширение — может отправлять данные.

- **Для устранения проблем с медленным соединением**. Если ваше соединение кажется медленным, всплеск трафика может указывать на то, что что-то работает или происходит скачивание в фоновом режиме.

:::note

Вся статистика хранится локально на вашем устройстве. Мы только подсчитываем объём использованных данных — мы не видим, какие сайты вы посещаете. Вы также можете отключить статистику, если она вам не нужна.

:::

Раздел *Статистика* доступен пользователям платной версии.

## Settings (for the active profile)

Чтобы управлять настройками Браузерного расширения AdGuard VPN:

- Кликните по его иконке на панели браузера, затем по гамбургер-меню и выберите *Настройки*
- Или перейдите на страницу *Управлять расширениями* в вашем браузере, нажмите *Подробнее* под *AdGuard VPN* и меняйте его настройки там.

После этого вы увидите несколько вкладок слева:

### Settings

The *Settings* menu is divided into two distinct sections:

- **Settings**: Options here apply exclusively to the currently active profile: *Exclusions*, *DNS server*, *Quick connect*, and *Block WebRTC*.
- **General settings**: These parameters apply to the entire extension, regardless of which profile is selected: *Theme*, *Language*, *Display AdGuard VPN in the browser context menu*, and *Help improve AdGuard VPN*.

![Settings](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/settings.png)

#### Exclusions

The *Exclusions* option allows you to configure website routing. You can choose between two options, each maintaining a separate list:

- **VPN is on everywhere except for the websites below**: AdGuard VPN works on all websites by default, with the exception of the domains added to this list.
- **VPN is on selectively: only for the websites below**: AdGuard VPN works only on the websites added to this list and remains inactive for all others.

When adding a website to an exclusions list, you can enter the domain manually or select the *From the list* option. It provides predefined categories (such as *Shopping* or *Messengers*) with popular services, allowing you to add all relevant domains for a service in one click.

Managing exclusions via the *Settings* tab applies the lists to the active profile. You can also configure exclusions for any profile under *Manage profiles*.

##### Import and export

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. Open AdGuard VPN Browser Extension from where you want to export your exclusions lists. Найдите соответствующий раздел и нажмите кнопку *Экспортировать*. Будет загружен архив исключений `exclusions.zip`.
1. There are two `.txt` files inside the archive, one for each of the two exclusions lists. Добавляйте к ним дополнительные исключения, удаляйте существующие, переименовывайте файлы или просто оставьте архив как есть.
1. При переносе списков между различными устройствами отправьте файл `.zip` на устройство для импорта.
1. Откройте на этом устройстве AdGuard VPN. Найдите соответствующий раздел, нажмите кнопку *Импортировать* и выберите архив.

Done!

#### DNS server

By default, the *AdGuard DNS Non-filtering* server is selected to ensure privacy without interfering with website content. If you want additional protection, you can choose a DNS server that blocks ads, trackers, or malicious domains, or enables parental control. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

Configuring *DNS server* directly in the *Settings* tab applies the selected server to the active profile. You can also assign a preferred DNS server to any profile under *Manage profiles*.

#### Quick connect

The *Quick connect* section defines which location the extension connects to when clicking the main *Connect* button:

- Fastest location
- Last used location
- Specific countries and servers

Configuring *Quick connect* directly in the *Settings* tab applies these parameters to the active profile. You can also set a preferred connection location for any profile under *Manage profiles*.

![Quick connect](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/quick-connect.png)

#### Block WebRTC

This feature blocks WebRTC, which can leak your real IP address even when using a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly with this option enabled.

Toggling *Block WebRTC* directly in the *Settings* tab applies this setting to the active profile. You can also enable or disable WebRTC blocking for any profile under *Manage profiles*.

### General settings

The options in this section apply globally to the entire extension, regardless of which profile is selected:

- **Theme**: Select a preferred interface appearance: Light, Dark, or Browser default.
- **Language**: Change the display language of the extension.
- **Display AdGuard VPN in the browser context menu**: Toggle quick access to AdGuard VPN actions from the browser’s right-click menu.
- **Help improve AdGuard VPN**: Enable sending crash reports and technical data to help improve extension performance and stability. All data is collected anonymously, is never shared with third parties, and you can withdraw your consent at any time.

### Manage profiles

To create, edit, or delete profiles, open the profile switcher in the bottom-left corner of the sidebar and select *Manage profiles*.

You can have up to 10 profiles, including the *Default* profile.

![Manage profiles](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/manage-profiles-new.png)

In this view, you can rename profiles, delete setups you no longer need, and configure the following parameters for each profile individually:

- **Quick connect**: Set the default connection behavior (Fastest location, Last used location, or a specific country and server).
- **DNS server**: Select a dedicated DNS provider or keep the default server (AdGuard DNS Non-filtering).
- **Block WebRTC**: Enable or disable WebRTC blocking to prevent IP leaks.
- **Exclusions**: Set up a custom exclusions list and select a routing mode for that profile.

The *Default* profile is protected and cannot be renamed or deleted.

### Аккаунт

The third tab of AdGuard VPN Browser Extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

### Поддержка

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

### О программе

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
