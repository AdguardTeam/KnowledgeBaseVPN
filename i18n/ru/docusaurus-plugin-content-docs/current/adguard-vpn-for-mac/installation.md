---
title: Установка и удаление AdGuard VPN для Mac
sidebar_position: 2
---

## Системные требования

**Версия операционной системы**: macOS 11 Big Sur или более поздняя

**Объём оперативной памяти**: от 2 Гб

**Свободное пространство на диске**: 120 МБ

## Как установить AdGuard VPN для Mac

1. Чтобы установить AdGuard VPN для Mac, просто перейдите [по этой ссылке](https://agrd.io/mac_vpn) или откройте браузер, введите в адресной строке *adguard-vpn.com* и на открывшейся странице нажмите *«Скачать»*. ![Скачать AdGuard VPN с официального сайта](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-en.png)
2. Дождитесь окончания загрузки файла *AdGuardVPN.dmg* и откройте его в папке *Загрузки*.
3. Дождитесь, пока откроется окно программы установки. В нём дважды нажмите на иконку. ![Окно установки программы *mobile_border](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-ru-1.png)
4. При первом запуске AdGuard VPN операционная система покажет на экране предупреждение о том, что это приложение загружено из интернета. Нажмите *Открыть*.
5. Далее нажмите *Продолжить* и *Установить*.

![Нажмите «Продолжить»](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/.mac-install-2-en~imageoptim.png)

![Нажмите «Установить»](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-install-3-en.png)
6. Подождите, пока установщик загрузит необходимые файлы.

AdGuard VPN для Mac установлен!

### Установка на старые версии macOS

Since version 2.6, AdGuard VPN for Mac no longer supports macOS versions older than Big Sur. However, if you’re using macOS 10.15 Catalina, you can still [download and install an older, compatible version](https://agrd.io/adguard_vpn_for_macoscatalina) of the app.

## Как удалить AdGuard VPN для Mac

### Стандартное удаление

To uninstall AdGuard VPN for Mac, follow two simple steps:

1. Откройте Finder и в нём перейдите в раздел «Программы».

2. Выберите в списке *AdGuard VPN*, кликните по нему правой кнопкой мыши и нажмите *Переместить в корзину*.

![Standard uninstallation](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-uninstall-1-en.png)

### Продвинутое удаление

Sometimes, as a result of incorrect removal or in other rare cases, the standard uninstallation may not be enough. In that case, our support may ask you to perform an advanced uninstall to completely remove AdGuard VPN from your Mac. To do this, do the following:

1. Выполните действия, описаннные в разделе [Стандартное удаление](#how-to-uninstall-adguard-vpn-for-mac).
2. Откройте Finder и в поиске введите `Связка ключей`. ![Продвинутое удаление Введите «Связка ключей»](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-key-chain-en.png)
3. Нажмите на значок найденной программы и в её внутреннем поиске введите `com.adguard.mac.vpn`. Если в результатах поиска есть такая запись, удалите её.
4. Вернитесь в Finder и в поиске введите `Терминал`. ![Продвинутое удаление Введите Терминал](https://cdn.adguardvpn.com/public/Adguard/kb/vpn-install/mac-terminal-en.png)
5. Откройте найденную программу и введите команду — `defaults delete com.adguard.mac.vpn`.
6. Нажмите *Пробел* и введите ещё одну команду — `rm -f ~/Library/Group\ Containers/TC3Q7MAJXF.com.adguard.mac/Library/Preferences/TC3Q7MAJXF.com.adguard.mac.plist`.

AdGuard VPN has been completely removed from your Mac.

You can learn more about AdGuard VPN for Mac in [this article](/adguard-vpn-for-mac/overview).
