---
title: Как автоматизировать работу AdGuard VPN для приложений на iPhone и iPad
sidebar_position: 1
sidebar_label: Как автоматизировать работу AdGuard VPN
---

В AdGuard VPN есть раздел *Исключения*, который может работать в двух режимах – *Обычном* и *Выборочном*. В *Обычном режиме*AdGuard VPN работает везде, кроме сайтов, добавленных в исключения. И наоборот, в *Выборочном режиме* VPN не работает нигде, кроме сайтов, перечисленных в списке исключений. Для каждого режима необходимо создать отдельный список исключений.

Как вы заметили, в раздел *Исключения* можно добавить только сайты. Чтобы настроить работу AdGuard VPN для приложений, необходимо воспользоваться другой функцией. В наших VPN-приложениях для Windows и Mac есть модуль *Раздельное туннелирование*, а в Android-версии – *Управление приложениями*, благодаря которым можно добавлять или исключать любые приложения из работы AdGuard VPN.

Но, как это часто бывает, из-за ряда технических нюансов реализовать столь полезную функцию для iOS невозможно, по крайней мере, пока. Поэтому, мы предлагаем вам альтернативный способ автоматизировать работу AdGuard VPN для приложений на iPhone и iPad.

## Настройка автоматического включения AdGuard VPN

Если вам нужен VPN для одного или нескольких приложений, настройте автоматическое включение и выключение AdGuard VPN при их открытии и закрытии. Откройте вкладку Исключения, выберите Основной режим и следуйте инструкциям. Здесь мы описываем, как создать автоматизацию для Twitter, но вы можете выбрать любое другое приложение.

![Инструкция. Часть 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on1_ru.jpg)
1. Download [the *Shortcuts* app](https://apps.apple.com/us/app/shortcuts/id915249334) from the App Store and go to the *Automation* section by tapping the clock icon at the bottom of the screen.
2. Tap the *Create Personal Automation* button, then find *App* in the list that opens and tap it.
3. In the next window, make sure that the *Is Opened* option is selected, and then tap *Choose* to choose the app.

![Инструкция. Часть 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on2_ru.jpg)
4. Start entering the name of the application, in our case it's Twitter, and select it. Then tap *Done* in the upper right corner of the screen. After it tap *Next* in the upper right corner of the screen. And in the opened window tap *Add Action*.

![Инструкция. Часть 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on3_ru.jpg)

5. Start entering “AdGuard VPN” and select the AdGuard VPN app. In the new window tap *Set a VPN connection*.

![Инструкция. Часть 4](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_on4_ru.jpg)
6. Make sure the variables say *Turn* VPN connection *On* and tap *Next*.
7. In the next window, move the slider next to the *Ask before running* option to the inactive position. Confirm your choice, the tap *Done*.

У вас появился новый сценарий: AdGuard VPN будет автоматически включаться при запуске приложения Twitter. Теперь необходимо создать ещё одну команду, благодаря которой AdGuard VPN будет автоматически выключаться при закрытии приложения.

## Настройка автоматического выключения AdGuard VPN

![Инструкция. Часть 1](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off1_ru.jpg)
1. In the same *Shortcuts* app start creating a new automation: click *+* in the upper right corner of the screen and then on the *Create Personal Automation* button. In the opened window choose *App*.
2. Make sure that the *Is Closed* option is selected and uncheck the box under the adjacent option. Then tap *Choose*.

![Инструкция. Часть 2](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off2_ru.jpg)
3. Start entering *Twitter* and select the app. Then tap *Done* in the upper right corner of the screen. Tap *Add Action* and select AdGuard VPN.

![Инструкция. Часть 3](https://cdn.adguard.com/public/Adguard/Blog/VPNauto/vpn_off3_ru.jpg)

4. In the new window tap *Set VPN connection*.
5. Then tap the word *On* so that it changes to the word *Off*, then tap *Next* in the upper right corner of the screen.
6. Disable the *Ask before running* option and confirm your selection. Then tap *Done* at the top right corner of the screen to complete the process.

Готово! Теперь AdGuard VPN будет включаться на вашем устройстве каждый раз, когда вы будете открывать приложение Twitter, и отключаться при его закрытии. Все те же шаги вы можете повторить для любого другого приложения. 