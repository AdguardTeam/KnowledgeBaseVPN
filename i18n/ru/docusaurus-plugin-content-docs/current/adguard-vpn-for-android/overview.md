---
title: Обзор функций
sidebar_position: 1
---

## Главный экран

На главном экране отображается статус VPN (Подключён/Отключён). Ещё на нём есть кнопка *Подключить/Отключить* и список доступных серверов.

Каждый сервер имеет своё местоположение и показатель пинга, отображающий время отклика сервера. Чем ниже этот показатель, тем быстрее соединение. Самые быстрые серверы всегда находятся в верхней части списка, который состоит более чем из 50 локаций в десятках стран. Вы можете подключиться к самому быстрому серверу, нажав на кнопку *Подключить* или выбрав локацию.

## Исключения

Списки исключений позволяют выбирать, на каких сайтах и в каких приложениях будет работать VPN. Чтобы открыть раздел *Исключения*, нажмите на вторую иконку слева в нижней части экрана.

![Исключения *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/exclusions.jpg)

By default, AdGuard VPN works for all websites and apps except those added to exclusions: if you don’t specify an app or website, VPN will be active for them. You can also turn it on **selectively** — only for specified apps or websites. To switch to this mode, tap *Change mode*.

![Change mode *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/change_mode.jpg)

:::caution

Be careful when using your VPN **selectively**.

If you exclude a browser from the VPN tunnel, website exclusions won’t work for it.

If you switch to this mode for websites, don’t forget to add the domains of the apps you want to use — for example, `facebook.com` for Facebook.

:::

### Websites

You can add a domain (e.g., `google.com`) or subdomain (e.g., `*.google.com`) to exclusions in three ways:

- Введите его вручную в приложении
- Добавьте его прямо из браузера, поделившись сайтом с помощью AdGuard VPN
- Добавьте его из встроенного списка сервисов

![Add manually *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/manually.jpg)

![Add from the list *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/from_list.jpg)

:::note

There are some nuances to manually adding domains. Например, если вы вручную исключите домен `google.com`, все поддомены `*.google.com` также будут внесены в список исключений. Однако доменные имена с другими доменами верхнего уровня, такие как `google.ru` или `google.it`, не будут исключены.

If you add `youtube.com` to exclusions, the domain of the same service `youtu.be` won’t be added. In this case, it’s safer to use the built-in lists of services. They contain all the subdomains associated with each platform.

:::

Since you can enable subdomains in service lists, we added boxes that reflect the status of each service:

- **Полностью включён** — обозначается белой галочкой на зелёном фоне
- **Частично включён** (включённые поддомены без основного домена) — отмечен зелёным квадратом на белом фоне
- **Полностью отключён** — отмечен пустым флажком

![Website exclusions *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/websites.png)

If you’ve accidentally deleted a domain or subdomain, just tap *Reset to default*.

![Reset to default *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/reset.jpg)

### Apps

You can also manage VPN for apps. To exclude an app from the VPN tunnel, tap *Add app*. To use VPN **selectively**, tap *Change mode*.

![Исключения приложений *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/apps.jpg)

:::caution

В *Интегрированном режиме* можно управлять приложениями только через Блокировщик рекламы AdGuard.

:::

## Настройки

Чтобы попасть в *Настройки*, нажмите на иконку в виде шестерёнки в правом нижнем углу экрана.

![Settings *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/settings.jpg)

### General

![General *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/general.jpg)

In *General*, you can manage basic AdGuard VPN settings:

- Launch AdGuard VPN at system startup
- Select a DNS server to encrypt traffic and block ads when connected to VPN (we recommend using AdGuard DNS)
- Enable Kill Switch to protect your privacy and disconnect from the Internet if the VPN connection drops
- Select a color theme
- Enable anonymous crash reports to notify developers about app issues

### Advanced

![Advanced *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/advanced.png)

The *Advanced* section is a set of settings that are not as commonly used.

*Режим работы* позволяет указать, как будет маршрутизироваться трафик. Есть три режима: VPN, SOCKS5 и Интегрированный режим. В режиме *VPN* весь трафик направляется через AdGuard VPN. В режиме *SOCKS5* AdGuard VPN запускает локальный прокси-сервер, который могут использовать другие приложения для маршрутизации трафика. *Интегрированный режим* позволяет AdGuard VPN и Блокировщику рекламы AdGuard работать вместе.

:::note

Some AdGuard VPN features are disabled in *Integrated mode*: DNS servers, Kill Switch, and App exclusions. Вы можете настроить DNS-защиту и маршрутизировать приложения через прокси AdGuard VPN в приложении Блокировщика AdGuard.

:::

*Logging level* specifies how many app events are recorded. We don’t recommend enabling the *Extended* or *Extreme* logging levels unless requested by our support team.

In this section, you can also export logs and system info to share them with support.

*Diagnostic data* displays the locally stored technical information about the app, device, and connections. You can copy and send it to our support team if necessary.

Последний раздел *Расширенных настроек* — это *Низкоуровневые настройки*. Мы настоятельно рекомендуем не заходить в этот раздел, если вы не обладаете достаточными техническими знаниями или вас не попросила об этом наша служба поддержки. Здесь можно включить «Запись сетевых пакетов» или протокол IPv6 на VPN-интерфейсе, выбрать порт, на котором будет работать прокси-сервер, или версию HTTP-протокола, которую следует использовать.

:::note Совместимость

Вы можете воспользоваться опцией *Включить IPv6*, только если ваша сеть поддерживает IPv6.

:::

### Поддержка

In the *Support* section, you can check out our FAQ to get quick answers to your questions, report bugs, and suggest new features.

![Support *mobile_border](https://cdn.adtidy.org/content/kb/vpn/android/support.jpg)
