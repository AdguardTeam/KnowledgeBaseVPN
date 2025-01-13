---
title: Обзор функций
sidebar_position: 1
---

Браузерное расширение AdGuard VPN доступно для Chrome, Firefox, Opera и Edge. The UI and functionality doesn’t differ between browsers so the overview below will be relevant for AdGuard VPN extensions for all browsers.

:::note

Вы можете использовать Браузерное расширение AdGuard VPN только после авторизации. Войдите в аккаунт AdGuard с помощью Google, Facebook или Apple. В последнем случае убедитесь, что ваш аккаунт привязан к тому же адресу, что и аккаунт AdGuard. Если у вас есть [подписка AdGuard VPN](/general/subscription), она будет автоматически активирована в браузерном расширении. У вас нет аккаунта AdGuard? [Создайте его здесь](https://auth.adguard.com/registration.html).

:::

Чтобы управлять настройками Браузерного расширения AdGuard VPN, сделайте следующее:

- Either click its icon on the browser’s panel, click the hamburger menu icon, and select *Settings*,
- Или перейдите на страницу *Управлять расширениями* в вашем браузере, нажмите *Подробнее* под *AdGuard VPN* и меняйте его настройки там.

Once done, you’ll see several tabs on the left:

## Настройки

Здесь собрано несколько важных настроек. Here you can choose a DNS server to use, add or remove the AdGuard VPN icon from the browser’s context menu, block WebRTC, change the extension’s theme, and allow AdGuard to gather anonymous crash reports and technical data.

### Выбор DNS-сервера

По умолчанию используется [системный DNS-сервер](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns), предоставляемый вашим интернет-провайдером. Однако это может поставить под угрозу вашу конфиденциальность. С помощью расширения AdGuard VPN вы можете выбирать DNS-сервер с более высокой скоростью и безопасностью, который сможет блокировать рекламу и потенциально опасные домены. Короткие описания DNS-серверов помогут вам сделать правильный выбор.

Узнайте больше о [DNS-серверах от различных провайдеров](https://adguard-dns.io/kb/general/dns-providers/).

## Исключения

Следующая вкладка содержит одну из главных отличительных особенностей AdGuard VPN — два режима с отдельными списками исключений.

In **General mode**, AdGuard VPN by default works on all websites, with the exception of the websites you’ve added to the exclusions list. In **Selective mode**, vice versa, AdGuard VPN by default doesn’t work anywhere. You can add any websites where you’d like it to work to an exclusions list, separate from the one you saw in the **General mode**.

При добавлении сайта в список исключений вы можете ввести сайт вручную или выбрать опцию **Из списка**. В последнем случае вы увидите восемь категорий (например, *Шопинг* или *Мессенджеры* и т. д.), каждая из которых предлагает несколько популярных сервисов. Вы можете исключить любой из этих сервисов в один клик. Это добавит в исключения все домены, относящиеся к этому конкретному сервису.

### Импорт и экспорт списков исключений

Вы можете не только добавлять и удалять сайты, но и переносить готовые списки исключений на другие устройства, на которых установлен AdGuard VPN. Чтобы экспортировать списки исключений, следуйте инструкции:

1. Откройте расширение AdGuard VPN, из которого вы хотите экспортировать списки исключений. Find the appropriate section and click the *Export* button. Будет загружен архив исключений `exclusions.zip`.
1. Внутри архива находятся два файла `.txt`, по одному для каждого из списков — Основного и Выборочного. Добавляйте к ним дополнительные исключения, удаляйте существующие, переименовывайте файлы или просто оставьте архив как есть.
1. При переносе списков между различными устройствами отправьте файл `.zip` на устройство для импорта.
1. Откройте на этом устройстве AdGuard VPN. Find the appropriate section, click the *Import* button and select the archive. Готово!

## Аккаунт

В третьей вкладке расширения AdGuard VPN есть только адрес электронной почты, который вы использовали для входа в аккаунт, и две кнопки: *Управлять* и *Выйти*. Нажав на кнопку *Управлять*, вы перейдёте в личный кабинет AdGuard, где сможете увидеть все текущие лицензии и подписки, а также подключённые к ним устройства.

## Поддержка

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## О программе

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
