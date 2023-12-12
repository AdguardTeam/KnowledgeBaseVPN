---
title: Обзор функций
sidebar_position: 1
---

## Что делает AdGuard VPN для Windows

- Защищает от перехвата сетевого трафика (спуфинга). VPN создаёт зашифрованный туннель между вашим устройством и удалённым сервером. Через этот туннель проходит весь ваш интернет-трафик, так что на этом пути ваши данные защищены. А благодаря [уникальному протоколу AdGuard](/general/adguard-vpn-protocol), вы получаете гарантированно быстрое и безопасное соединение.

- Маскирует ваш IP-адрес.  Ваш настоящий IP-адрес — ключ к вашим персональным данным для киберпреступников. Ваше имя, адрес элетронной почты, номер телефона, данные банковской карты могут попасть в руки мошенников, если вы не спрячете свой IP. С AdGuard VPN весь ваш трафик проходит через зашифрованный туннель и поступает на VPN-сервер. Веб-сервер регистрирует IP-адрес конечной точки туннеля, то есть VPN-сервера, а не реальный IP-адрес устройства.

- Скрывает ваше местоположение. Для чего это нужно? Например, чтобы забронировать отель по ценам «для своих» или спрятаться от геотаргетированной рекламы.

У AdGuard VPN для Windows есть большое количество преимуществ, так что этой теме мы посвятили [отдельную статью](/general/why-adguard-vpn). А здесь мы хотим больше сосредоточиться на самом приложении и на том, как оно работает.

## Как начать пользоваться AdGuard VPN для Windows

Чтобы начать пользоваться AdGuard VPN для Windows, скачайте приложение с [нашего сайта](https://adguard-vpn.com/welcome.html). Установка займёт не больше минуты — и вы увидите диалоговое окно, в котором потребуется поставить как минимум одну галочку, чтобы принять условия Пользовательского соглашения и Политики конфиденциальности. And it's up to you to decide whether you want AdGuard to collect anonymous data about your app usage. В завершении процесса установки программа попросит вас войти в систему, либо через [учётную запись AdGuard](https://auth.adguard.com/login.html), либо через социальные сети (Apple, Google, Facebook). Вот и всё, теперь вы можете начать пользоваться AdGuard VPN для Windows.

## Главный экран

![AdGuard VPN for Windows homepage](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/new_main_window_en.png)

Наиболее заметный элемент на **Главном экране** — это кнопка включения/выключения AdGuard VPN. Над кнопкой указан [режим](#exclusions), в котором работает приложение, а под ней — выбранный сервер. В правой части экрана вы найдёте все доступные локации. Самая быстрая локация, то есть локация с наименьшим пингом, отображается в верхней части списка.

В верхней части экрана расположена навигационная панель с четырьмя вкладками: **Главная**, **Исключения**, **Поддержка**, **Настройки**.

## Исключения

AdGuard VPN для Windows может работать в двух режимах. По умолчанию приложение работает везде, и вы можете перечислить сайты и приложения, которые хотите исключить. Но можно переключиться в противоположный режим: AdGuard VPN будет работать только на тех сайтах и в тех приложениях, которые указаны в списке исключений. Обратите внимание, что эти два списка исключений не зависят друг от друга.

![Исключения](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_en.png)

Вы можете добавить сайты в исключения **вручную**, указав их доменные имена. В приложении также есть возможность выбрать популярные сайты **из списка**.

![Добавить исключения](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_add_en.png)

![Добавить исключения из списка](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Импорт/экспорт списков исключений

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Настройки

![Settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/settings_en.png)

The fourth tab contains sections that will help you customize the application.

### Настройки приложения

![App settings](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS-серверы

The **DNS servers** tab allows you to add your own DNS server. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Расширенные настройки

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Режим работы

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Уровень логирования

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Использовать QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

### Исключения приложений

![Adding an app to exclusions](https://cdn.adguardvpn.com/content/release_notes/vpn/windows/v2.0/add_app_en.png)

Not only does AdGuard VPN encrypt the traffic of browsers, but also of other apps installed on your device. If you want to exclude certain applications from the tunnel, put them to the **App exclusions** list.

## Другие настройки

### О программе

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Личный кабинет

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Поддержка

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
