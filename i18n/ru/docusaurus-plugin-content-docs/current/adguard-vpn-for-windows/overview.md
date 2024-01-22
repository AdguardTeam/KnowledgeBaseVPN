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

![AdGuard VPN for Windows homepage *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/home_en.jpg)

The most noticeable item on the **Home screen** is the AdGuard VPN Connect/Disconnect button, below which you can see the selected server. On the right side of the screen you will see a list of available locations. Самая быстрая локация, то есть локация с наименьшим пингом, отображается в верхней части списка. There is also a refresh button that you can click if any locations are offline.

At the top of the screen there is a navigation panel with five tabs: **Home**, **Exclusions**, **Stats**. **Support**, and **Settings**.

## Исключения

By default, AdGuard VPN for WIndows works everywhere. You can add websites and apps you want to exclude from the VPN tunnel to the list of exclusions. Or, you can make AdGuard VPN work only on the websites and apps specified in the list of exclusions. Please note that these two lists are independent of each other.

![Exclusions *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/exclusions_new_en.png)

Вы можете добавить сайты в исключения **вручную**, указав их доменные имена. В приложении также есть возможность выбрать популярные сайты **из списка**.

![Add Exclusions from list *border](https://cdn.adguardvpn.com/content/kb/VPN/windows/new_exclusions_from_list_en.png)

:::note

When adding domains manually, you should take into account some nuances. For example, if you manually exclude the domain `google.com`, all the subdomains `*.google.com` will also be added to the exclusions list. However, domain names with other top-level domains such as `google.es` or `google.it` will not be excluded. Or you can add `youtube.com` to the exclusions, but the domain of the same service `youtu.be` will not be included in the list.

:::

We recommend using the **From the list** option. Websites are grouped into eight categories: Social networks, Messengers, Video and Music streaming services, Games, Shopping, Search engines, and Work communication tools. We have placed the most popular services there, including all domain names and subdomains related to each platform.

### Импорт/экспорт списков исключений

To export the list of exclusions from AdGuard VPN for Windows to your computer, click **Export exclusions**, select the folder where the list will be stored and click **Save**. An archive `exclusions.zip` with two `.txt` files will be downloaded, one for each of the lists. You can edit them by adding new exclusions or deleting old ones.

On the destination device, open AdGuard VPN, click *Exclusions*, and select *Websites* or *Apps*. Click *Import exclusions* and select the received archive.

## Stats

![Statistics screen *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/statistics_en.png)

The Statistics screen shows detailed information about your data usage, categorized by both location and app. It highlights your most frequently used locations and applications. You can access statistics for different time periods: daily, monthly, or for the entire time you have been using AdGuard VPN for Windows.

Crucially, all this information is stored exclusively on your device, ensuring that only you can view it. Access to the statistics feature is available only to AdGuard VPN subscribers.

## Настройки

![Settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/settings_en.png)

The fourth tab contains sections that will help you customize the app.

### Настройки приложения

![App settings *border](https://cdn.adguardvpn.com/content/kb/vpn/windows/app_settings_en.png)

In the **App settings** section, you can set the app language and also enable **Kill Switch**, which will block access to the Internet if your VPN connection drops. This is needed to prevent intruders from getting to your data if you find yourself without VPN protection while connected to a public Wi-Fi or mobile network.

You can also activate the following features with a single click: **Auto-update**, **Launch AdGuard VPN at Windows startup**, **Auto-connect on app launch**, and allow AdGuard to collect anonymous app usage data so that the AdGuard team gets the info on potential usability issues. Here you can also change the theme to **Light**, **System**, or **Dark**.

At the bottom of the page there are two sections: **DNS servers** and **Advanced settings**.

#### DNS-серверы

The **DNS servers** tab allows you to add your own DNS server — manually or from the list. You can set up a DNS server by any provider. We recommend adding [AdGuard DNS](https://adguard-dns.io/kb/general/dns-providers/#adguard-dns), a server that can protect against advertising, tracking, and phishing, in addition to the standard functions.

#### Расширенные настройки

It is entirely possible to use AdGuard VPN for Windows without ever touching the Advanced settings, but they can be useful if you're willing to take time to learn what they do.

##### Режим работы

Despite the fact that there are two operating modes — VPN and SOCKS5 — we advise you to use only the one chosen by default (VPN). When the **VPN mode** is enabled, all the traffic of your device will be directed via AdGuard VPN, while in **SOCKS5 mode** AdGuard VPN uses a local proxy server which can be used by other applications to redirect their traffic.

##### Уровень логирования

Two levels of logging are available to choose from: **Record by default** and **Record everything**. The first option is enabled by default. The **Record everything** option should only be activated if our support team has asked you to do so. Using the app in this mode for an extended period of time result in increased battery consumption.

All logs are stored locally on your device, and you can send them to the support team if needed.

##### Использовать QUIC

This is an experimental feature that enables AdGuard to use the advanced QUIC encryption protocol. It has many advantages, but the most notable one is that it can improve connection quality under non-ideal conditions, for example, when using mobile Internet or when connecting to public Wi-Fi networks.

#### Use WinTun

![Use WinTun *border](https://cdn.adtidy.org/content/release_notes/vpn/windows/v2.2/stats_tab_v2.2_en.png)

WinTun is a traffic routing driver commonly used for VPN implementations on Windows that improves the quality of VPN connections by creating a virtual network adapter. By default AdGuard VPN uses the regular WFP driver (and TDI driver for Windows 7).

#### Subnet exclusions

This feature allows you to add subnets to exclude traffic from specific devices connected to your network. For example, your robot vacuum cleaner.

## Другие настройки

### О программе

The **About** tab provides information about the current version of AdGuard VPN for Windows, an update button, and links to the AdGuard VPN website, EULA, and Privacy policy.

### Личный кабинет

Here you can find information about your license status, as well as a link to your personal AdGuard account, where you can manage your current subscriptions and purchase new ones.

## Поддержка

This tab is aimed to solve users' questions: there you can find a link to the FAQ page, report a bug or leave feedback, and export logs if the support team asks you to.
