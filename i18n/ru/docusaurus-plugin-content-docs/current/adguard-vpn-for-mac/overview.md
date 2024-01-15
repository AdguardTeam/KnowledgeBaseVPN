---
title: Обзор функций
sidebar_position: 1
---

AdGuard VPN для Mac – это VPN-сервис для компьютеров и ноутбуков macOS. AdGuard VPN полностью совместим с Блокировщиком рекламы AdGuard, и они прекрасно работают одновременно. Давайте посмотрим, какие функции есть в AdGuard VPN.

Обратите внимание, что **вы не можете пользоваться AdGuard VPN для Mac, пока не авторизуетесь**. Вы можете войти с помощью аккаунта AdGuard, либо через Apple, Google или Facebook. Во втором случае убедитесь, что ваша учётная запись привязана к тому же адресу электронной почты, что и аккаунт AdGuard. Если в вашем аккаунте AdGuard есть активная подписка, она будет автоматически добавлена в приложение для Mac. Если у вас ещё нет аккаунта AdGuard,  вы можете создать его [здесь](https://auth.adguard.com/registration.html).

:::note Совместимость

AdGuard VPN для Mac поддерживается на версиях macOS, начиная с 10.15 (macOS Catalina).

:::

## Главная

![Главный экран](https://cdn.adguardvpn.com/content/kb/vpn/mac/vpn_main_new_en.jpeg)

Первая вкладка — это экран *Главная*. Here you can see the current status of AdGuard VPN, the selected location (if enabled) and its ping. Пинг — это время отклика сервера. The lower the number, the faster the connection. If VPN is disabled, the last location you connected to is displayed at the bottom.

The fastest locations with the lowest pings are displayed in the upper right corner of the screen. There is also a refresh button that you can click if any locations are offline. Ниже вы можете увидеть полный список локаций, The search field makes it easy to find the location you need.

:::note

Пользователи бесплатной версии могут подключаться только к определённым локациям, остальные заблокированы. Кроме того, в бесплатной версии есть ограничение на 3 Гб трафика в месяц.

:::

## Исключения

![Исключения](https://cdn.adguardvpn.com/content/kb/vpn/mac/exclusions_new_en.png)

У AdGuard VPN есть несколько функций, которые делают его уникальным, и одна из них — это *Исключения*. По умолчанию AdGuard VPN будет работать на всех сайтах и во всех приложениях, кроме тех, которые находятся в списке исключений. Но вы можете переключиться на другой режим, тогда AdGuard VPN будет работать только на сайтах и в приложениях из списка исключений.

![Экран исключений](https://cdn.adguardvpn.com/content/kb/vpn/mac/services_new_en.png)

Вы также можете добавлять сайты в Исключения вручную или выбирать их из встроенных списков популярных сервисов. Списки разделены на восемь категорий: Сервисы для работы, Сервисы потокового видео, Социальные сети, Шопинг, Поисковые системы, Мессенджеры, Игры. Любой из этих сервисов может быть добавлен в Исключения одним щелчком мыши! Это особенно удобно, если вы используете Выборочный режим.

Список исключений очень просто настроить. Если вы добавили домен и несколько его поддоменов, они будут сгруппированы внутри корневого домена. При добавлении корневого домена (`example.com`) добавляется и его маска (`*.example.com`).

Если вы добавили сервис, изменили или удалили что-то и теперь хотите восстановить исходные настройки, просто нажмите кнопку *Сбросить настройки* внизу страницы — это действие восстановит все отсутствующие домены и установит все галочки.

Помимо этого, готовые списки исключений можно переносить на другие устройства с установленным AdGuard VPN. Чтобы экспортировать исключения, следуйте четырёхшаговой инструкции ниже:

1. Откройте AdGuard VPN на устройстве, откуда хотите экспортировать списки исключений. Найдите соответствующий раздел и нажмите кнопку *Экспортировать*. Скачается архив `exclusions.zip`.
2. Внутри архива — папка exсlusions, а в папке — два файла `.txt`, отдельно для Основного и Выборочного списков. Вы можете добавить в них больше исключений, удалить имеющиеся, переименовать файлы или просто оставить архив как есть.
3. При переносе между разными устройствами не забудьте переслать `zip-файл`. Например, если вы переносите список исключений с Mac на iPhone, заранее перебросьте `zip-файл` на компьютер.
4. Откройте AdGuard VPN на устройстве, куда хотите импортировать готовый архив со списками исключений. Найдите соответствующий раздел, нажмите кнопку *Импортировать* и выберите архив. Готово!

:::note

Archive files from other devices can be similarly imported to your AdGuard VPN for Mac.

:::

## Stats

![Statistics screen](https://cdn.adguardvpn.com/content/kb/vpn/mac/statistics_en.png)

The Stats screen provides detailed information about traffic consumed by location and app, most used locations and apps. View data for the day, month, or the entire time AdGuard VPN for Mac has been in use.

Importantly, all data is stored locally on your device, so no one but you has access to it. The Statistics feature is available to users with an AdGuard VPN subscription.

## Поддержка

![Экран поддержки](https://cdn.adguardvpn.com/content/kb/vpn/mac/support_new_en.png)

The fourth tab is the *Support* screen. Найдите ответы на любые вопросы [FAQ](https://adguard-vpn.com/welcome.html#faq) или [в Базе знаний](/), сообщите об ошибке, если обнаружите её, или [обсудите AdGuard на любой из платформ](https://adguard.com/discuss.html). Здесь же вы можете [оставить отзыв о нашем продукте](https://surveys.adguard.com/vpn_mac/form.html). Будем благодарны, если поделитесь впечатлениями.

## Настройки

![Настройки](https://cdn.adguardvpn.com/content/kb/vpn/mac/settings_new_en.png)

Наконец мы подошли к самой важной вкладке — Настройки. В разделе *О программе* вы можете увидеть текущую версию AdGuard VPN, проверить наличие обновлений, перейти на наш сайт, а также ознакомиться с Лицензионным соглашением и Политикой конфиденциальности AdGuard. В разделе *О лицензии* вы можете перейти с бесплатной версии на безлимитную, управлять подпиской или выйти из приложения. И самое главное, отсюда вы можете перейти в раздел *Общие настройки*.

### Настройки приложения

![Настройки приложения](https://cdn.adguardvpn.com/content/kb/vpn/mac/general-settings_new_en.png)

Первые четыре базовые функции делают приложение более удобным для пользователей — это *Kill Switch*, *Автообновление*, *Запуск при входе в систему* и *Автоподключение при запуске приложения*. Более того, вы можете выбирать между тремя темами — светлой, тёмной и системной. Последняя будет соответствовать теме вашего Mac.

You can also allow AdGuard VPN to gather and send anonymous crash reports, technical and interaction data in order to help us improve our app. И последнее, но не менее важное: вы можете экспортировать логи с вашего Mac. Это может быть полезно, если вы хотите прикрепить логи к сообщению в поддержку.

### DNS-серверы

![DNS-серверы](https://cdn.adguardvpn.com/content/kb/vpn/mac/dns_new_en.png)

Here you can set up a DNS server (or servers). This is useful if you don't want to rely on the default DNS server provided by your ISP. Select one from the list of popular DNS services or add a custom server manually. We recommend adding AdGuard DNS, which not only encrypts your DNS traffic, but also identifies requests to malicious websites and redirects them to a “black hole”.

### Расширенные настройки

![Advanced settings](https://cdn.adguardvpn.com/content/kb/vpn/mac/advanced-settings_new_en.png)

#### Уровень логирования

В программе всего два уровня логирования, но мы настоятельно рекомендуем вам использовать первый, заданный по умолчанию. Вторая опция (расширенное логирование) должна быть установлена только для фиксирования странного поведения программы после консультации с нашей техподдержкой. Если вы включили расширенный уровень логирования, после записи логов обязательно переключите его на стандартный.

#### Скрыть иконку меню

Хотя эта опция находится в *Расширенных настройках*, её можно смело включать. Вы можете скрыть иконку AdGuard VPN из панели меню, это не помешает нашему приложению работать в фоновом режиме.

#### Use QUIC

Коммуникационный протокол QUIC — это новейшая, передовая версия HTTP. Сдвиньте переключатель, чтобы получить лучшее качество соединения в далеко не идеальных условиях, например, при использовании мобильной сети в метро или лифте.
