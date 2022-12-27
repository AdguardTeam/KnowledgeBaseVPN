---
title: Обзор функций
sidebar position: 1
---

## Что такое AdGuard VPN для Windows

A VPN, acronym for "virtual private network", is a service that makes your Internet connection safe and helps you stay anonymous online. Как это работает? Каждый раз, когда вы открываете вебсайт без использования VPN, ваш интернет-провайдер видит это. Он знает, кто вы и что ищете, может собирать эти данные и продавать их. В свою очередь, сайт, на который вы пришли, также может отслеживать вашу онлайн-активность. Когда вы активируете VPN-приложение, оно перенаправляет ваш трафик через зашифрованный туннель на удалённый VPN-сервер, обеспечивая вашу конфиденциальность: интернет-провайдер не знает, куда вы отправили запрос, а сайт не в курсе, откуда вы пришли.

**Что делает AdGuard VPN для Windows**

* Защищает от перехвата сетевого трафика (спуфинга). VPN создаёт зашифрованный туннель между вашим устройством и удалённым сервером. Через этот туннель проходит весь ваш интернет-трафик, так что на этом пути ваши данные защищены. А благодаря [уникальному протоколу AdGuard](/general/adguard-vpn-protocol.mdx), вы получаете гарантированно быстрое и безопасное соединение.

* Маскирует ваш IP-адрес.  Ваш настоящий IP-адрес — ключ к вашим персональным данным для киберпреступников. Ваше имя, адрес элетронной почты, номер телефона, данные банковской карты могут попасть в руки мошенников, если вы не спрячете свой IP. С AdGuard VPN, как мы говорили ранее, весь ваш трафик через зашифрованный туннель приходит на VPN-сервер. Таким образом, со стороны кажется, что ваше устройство имеет IP-адрес указанного VPN-сервера.

* Скрывает ваше местоположение. Как только вы выбираете любой из серверов AdGuard VPN, вы мгновенно «телепортируетесь» туда, где он расположен. Для чего это нужно? Например, чтобы забронировать отель по ценам «для своих» или спрятаться от геотаргетированной рекламы.

У AdGuard VPN для Windows есть большое количество преимуществ, так что этой теме мы посвятили [отдельную статью](/general/why-adguard-vpn.md). А здесь мы хотим больше сосредоточиться на самом приложении и на том, как оно работает.

## Как начать пользоваться AdGuard VPN для Windows

To start using AdGuard VPN for Windows, download the app from [our website](https://adguard-vpn.com/welcome.html). Установка займёт не больше минуты — и вы увидите диалоговое окно, в котором потребуется поставить как минимум одну галочку, чтобы принять условия Пользовательского соглашения и Политики конфиденциальности. А вот, давать ли AdGuard право собирать анонимные данные об использовании приложения на вашем устройстве или нет, решать вам. В завершении процесса установки программа попросит вас войти в систему, либо через [учётную запись AdGuard](https://auth.adguard.com/login.html), либо через социальные сети (Apple, Google, Facebook). Вот и всё, теперь вы можете начать пользоваться AdGuard VPN для Windows.


## Главный экран

![Главный экран AdGuard VPN для Windows](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Наиболее заметный элемент на **Главном экране** — это кнопка включения/выключения AdGuard VPN. Underneath, you can see the [mode](#exclusions) in which the application is running and the selected server below. On the right side of the screen you will find all available locations. The fastest location, i.e. the one with the shortest ping, is shown at the top of the list.

At the top of the screen there is a navigation panel with four tabs: **Home**, **Exclusions**, **Support**, **Settings**.


## Исключения

AdGuard VPN for Windows can operate in two modes: **General** or **Selective**. Что это значит? If you want the application to work everywhere except for some websites, activate the **General mode** and list the websites you want to exclude from the tunnel. У **Выборочного режима** обратный принцип действия: он активирует работу AdGuard VPN только на сайтах, указанных в списке исключений. Обратите внимание, что списки исключений в этих двух режимах не зависят друг от друга.

![Исключения](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_en.png)

You can add websites to exclusions **manually** by entering their domain names. The app also offers you an option to choose popular websites **from the list**.

![Добавить исключения](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_add_en.png)

![Добавить исключения из списка](https://cdn.adguard.com/content/kb/VPN/windows/exclusions_from_list_en.png)

> При ручном добавлении доменов нужно учитывать некоторые нюансы. Например, если вы вручную исключите домен `google.com`, все поддомены `*.google.com` также будут внесены в список исключений. Однако доменные имена с другими доменами верхнего уровня, такие как `google.es` или `google.it`, не будут исключены. Или вы можете добавить `youtube.com` в исключения, но домен того же сервиса `youtu.be` не попадёт в список.

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. В каждую группу мы поместили все доменные имена и поддомены, относящиеся к каждому сервису.

### Import/export exclusion lists

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists — **General** and **Selective**. You can edit them by adding new exclusions or deleting old ones.

To transfer the exclusion lists to another device, send the `.zip` file to its destination. Open AdGuard VPN on the device where you want to import the archive with the exclusion lists, click *Exclusions*, then *Import exclusions*, and select the previously sent archive.

## Настройки

![Settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab of app's tab bar contains sections that will help you customize the application. Let's look closer at two of them: **App settings** and **App exclusions**.


### App settings

![App settings](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Autoupdate**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymized app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

Внизу страницы расположены два важных раздела — **DNS-серверы** и **Расширенные настройки**.

#### DNS-серверы

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://kb.adguard.com/en/general/dns-providers#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Advanced settings

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

**Operating mode**

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

**Logging level**

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device and you can send them to the support team if needed.

**Use QUIC**

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.


### App exclusions

![Adding an app to exclusions](https://cdn.adguard.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of your browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Другие настройки

### О программе

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, forum, EULA, and Privacy Policy.

### Account

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Поддержка

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.