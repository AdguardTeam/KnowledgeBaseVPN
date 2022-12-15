---
title: Установка и удаление AdGuard VPN для Mac
sidebar_position: 2
---

## Системные требования

**Версия операционной системы**: macOS 10.12 (64 bit) или более поздняя

**Объём оперативной памяти**: от 2 Гб

**Свободное пространство на диске**: 120 Мбайт


## Как установить AdGuard VPN для Mac

1. To install AdGuard VPN for Mac, just follow [this link](https://agrd.io/mac_vpn) or open a browser, type *adguard-vpn.com* in the address bar and on the opened page click *Download*.

![Загрузить AdGuard VPN с официального сайта](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru.png)

2. Дождитесь окончания загрузки файла *AdGuardVPN.dmg* и откройте его в папке «Загрузки».

3. Дождитесь, пока откроется окно программы установки. В нём дважды нажмите на иконку.

![Окно установки программы](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)

4. При первом запуске AdGuard VPN операционная система покажет на экране предупреждение о том, что это приложение загружено из интернета. Нажмите *Открыть*.

5. Далее нажмите *Продолжить* и *Установить*.

![Нажмите «Продолжить»](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-2-ru.png)

![Нажмите «Установить»](https://cdn.adguard.com/public/Adguard/kb/vpn-install/mac-install-3-ru.png)

6. Подождите, пока установщик загрузит необходимые файлы.

AdGuard VPN для Mac установлен!


## Как удалить AdGuard VPN для Mac

### Стандартное удаление

Чтобы удалить AdGuard VPN для Mac, выполните два простых шага:

1. Откройте «Finder» и в нём перейдите в раздел «Программы».

2. Выберите в списке *AdGuard VPN*, кликните по нему правой кнопкой мыши и нажмите *Переместить в корзину*.

![Стандартное удаление](https://cdn.adguard.com/content/kb/vpn/mac/uninstall-1-ru.png)


### Продвинутое удаление

Иногда в результате неправильного удаления или в других редких случаях стандартного удаления может оказаться недостаточно. Тогда служба поддержки может попросить вас произвести продвинутое удаление, чтобы полностью удалить AdGuard VPN с вашего Mac. Для этого выполните следующие шаги:

1. Выполните действия, описаннные в разделе [«Стандартное удаление»](#how-to-uninstall-adguard-vpn-for-mac).

2. Откройте Finder и в поиске введите `Связка ключей`.

![Продвинутое удаление Введите «Связка ключей»](https://cdn.adguard.com/content/kb/vpn/mac/key-chain-ru.png)

3. Нажмите на значок найденной программы и в её внутреннем поиске введите `com.adguard.mac.vpn`. Если в результатах поиска есть такая запись, удалите её.

4. Вернитесь в Finder и в поиске введите `Терминал`.

![Продвинутое удаление Напиште «Терминал»](https://cdn.adguard.com/content/kb/vpn/mac/terminal-ru.png)

5. Откройте найденную программу и введите команду — `defaults delete com.adguard.mac.vpn`.

6. Нажмите *Пробел* и введите ещё одну команду — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN полностью удалён с вашего Mac.

Подробнее об AdGuard VPN для Mac вы можете узнать в [этой статье](/adguard-vpn-for-mac/overview.md).