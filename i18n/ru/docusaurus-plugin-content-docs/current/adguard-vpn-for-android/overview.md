---
title: Обзор функций
sidebar_position: 1
---

## Главный экран

На главном экране отображается статус VPN (Подключён/Отключён). Ещё на нём есть кнопка *Подключить/Отключить* и список доступных серверов.

Каждый сервер имеет своё местоположение и показатель пинга, отображающий время отклика сервера. Чем ниже этот показатель, тем быстрее соединение. Самые быстрые серверы всегда находятся в верхней части списка, который состоит более чем из 50 локаций в десятках стран. Вы можете подключиться к самому быстрому серверу, нажав на кнопку *Подключить* или выбрав локацию.

## Исключения

Списки исключений позволяют выбирать, на каких сайтах и в каких приложениях будет работать VPN. Чтобы открыть раздел *Исключения*, нажмите на вторую иконку слева в нижней части экрана.

![Исключения *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/exclusions.jpg)

По умолчанию AdGuard VPN работает для всех сайтов и приложений, кроме добавленных в исключения: если вы не укажете приложение или сайт, VPN для них будет активен. Вы также можете включить VPN **выборочно** — чтобы он работал только для определённых приложений или сайтов. Чтобы переключиться на этот режим, нажмите *Изменить режим*.

![Изменить режим *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/change_mode.jpg)

:::caution

Будьте осторожны при **выборочном** использовании VPN.

Если вы уберете браузер из VPN-туннеля, исключение сайтов для него не будет работать.

Если вы переключитесь в режим для сайтов, не забудьте добавить домены приложений, которые вы хотите использовать — например, `facebook.com` для Facebook.

:::

### Сайты

Вы можете добавить домен (например, `google.com`) или поддомен (например, `*.google.com`) в исключения тремя способами:

- Введите его вручную в приложении
- Добавьте его прямо из браузера, поделившись сайтом с помощью AdGuard VPN
- Добавьте его из встроенного списка сервисов

![Добавить вручную *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/manually.jpg)

![Добавить из списка *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/from_list.jpg)

:::note

При ручном добавлении доменов нужно учитывать некоторые нюансы. Например, если вы вручную исключите домен `google.com`, все поддомены `*.google.com` также будут внесены в список исключений. Однако доменные имена с другими доменами верхнего уровня, такие как `google.ru` или `google.it`, не будут исключены.

Если добавить `youtube.com` в исключения, то домен того же сервиса `youtu.be` не будет добавлен. В этом случае безопаснее использовать встроенные списки сервисов. Они содержат все поддомены, связанные с каждой платформой.

:::

Поскольку в списках сервисов можно включать поддомены, мы добавили поля, отражающие статус каждого сервиса:

- **Полностью включён** — обозначается белой галочкой на зелёном фоне
- **Частично включён** (включённые поддомены без основного домена) — отмечен зелёным квадратом на белом фоне
- **Полностью отключён** — отмечен пустым флажком

![Исключения сайтов *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/websites.png)

Если вы случайно удалили домен или поддомен, просто нажмите *Сбросить настройки*.

![Сброс настроек *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/reset.jpg)

### Приложения

Вы также можете управлять VPN для приложений. Чтобы исключить приложение из VPN-туннеля, нажмите *Добавить приложение*. Чтобы использовать VPN **выборочно**, нажмите *Изменить режим*.

![Исключения приложений *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/apps.jpg)

:::caution

В *Интегрированном режиме* можно управлять приложениями только через Блокировщик рекламы AdGuard.

:::

## Настройки

Чтобы попасть в *Настройки*, нажмите на иконку в виде шестерёнки в правом нижнем углу экрана.

![Настройки *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/settings.jpg)

### Основные

![Основные *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/general.jpg)

В разделе *Основные*вы можете управлять основными настройками AdGuard VPN:

- Запустите AdGuard VPN при включении устройства
- Выберите DNS-сервер для шифрования трафика и блокировки рекламы при подключении к VPN (рекомендуем использовать AdGuard DNS)
- Включите функцию Kill Switch для защиты конфиденциальности и отключения от интернета в случае разрыва VPN-соединения
- Выберите цветовую тему
- Включите анонимные отчёты об ошибках, чтобы уведомить разработчиков о проблемах с приложением

### Расширенные

![Расширенные *mobile_border](https://cdn.adtidy.org/blog/new/mbc4icryptoon.png)

Раздел *Расширенные* представляет собой набор настроек, которые используются не так часто.

*Режим работы* позволяет указать, как будет маршрутизироваться трафик. Есть три режима: VPN, SOCKS5 и Интегрированный режим. В режиме *VPN* весь трафик направляется через AdGuard VPN. В режиме *SOCKS5* AdGuard VPN запускает локальный прокси-сервер, который могут использовать другие приложения для маршрутизации трафика. *Интегрированный режим* позволяет AdGuard VPN и Блокировщику рекламы AdGuard работать вместе.

:::note

Некоторые функции AdGuard VPN отключены *в Интегрированном режиме*: DNS-серверы, Kill Switch и Исключения приложений. Вы можете настроить DNS-защиту и маршрутизировать приложения через прокси AdGuard VPN в приложении Блокировщика AdGuard.

:::

*Post-quantum cryptography* refers to cryptographic algorithms designed to secure data against potential threats posed by quantum computers, which could eventually break current encryption methods. This feature ensures that data remains securely encrypted, even in the face of advancements in quantum computing that might otherwise compromise traditional encryption techniques.

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

The last section of *Advanced settings* is *Low-level settings*. We urge you not to enter this section unless you are highly qualified or have been asked to do so by our support team. Here it is possible to enable TUN interface logging or IPv6 protocol on the VPN interface, choose a proxy server port or Internet protocol version that should be used.

:::caution

In the **Preferred IP version** option, before you choose between IPv6 and IPv4, make sure that your network supports that protocol. For example, if you select IPv6 and your network only supports IPv4, you will have problems connecting to the Internet. And vice versa.

:::

### Поддержка

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adguard-vpn.com/content/kb/vpn/android/support.jpg)
