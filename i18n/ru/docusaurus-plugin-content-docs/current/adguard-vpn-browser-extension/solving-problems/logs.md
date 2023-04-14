---
title: Как собирать и отправлять логи
sidebar_position: 1
---

Существует несколько способов сбора логов Браузерного расширения AdGuard VPN, но какой бы вы ни выбрали, будут собираться одни и те же данные. В расширении логи не разделены на стандартные и отладочные. А разные варианты сбора логов предусмотрены для тех случаев, когда возникшая проблема не позволяет воспользоваться той или иной инструкцией.

## Сбор и отправка логов через раздел *Сообщить об ошибке*

1.  Откройте Браузерное расширение AdGuard VPN и воспроизведите действия, которые привели к ошибке. Запомните точное время, когда эта ошибка произошла.
2.  Откройте *Настройки*, нажав на бургер-меню (☰) → *Поддержка* → *Сообщить об ошибке*.
3.  В открывшейся форме оставьте автоматически подставленный адрес электронной почты или введите другой и опишите найденную ошибку, указав время, когда она произошла. Если воспроизвести проблему невозможно, укажите как можно точнее, когда она произошла в последний раз.
4.  Убедитесь, что рядом с *Включить диагностический отчёт в сообщение* стоит галочка, и нажмите *Отправить*. Таким образом, вы отправите логи вместе с сообщением об ошибке.

## Сбор и отправка логов через раздел *Экспортировать логи*

1.  Откройте Браузерное расширение AdGuard VPN и воспроизведите действия, которые привели к ошибке. Запомните точное время, когда эта ошибка произошла.
2.  Щёлкните правой кнопкой мыши иконку Браузерного расширения AdGuard VPN.
3.  В открывшемся меню нажмите *Экспортировать логи*.
4.  В результате файл с логами будет сохранён на вашем устройстве в формате `txt`.

Теперь, когда вы собрали логи, вам нужно передать их нашей команде разработчиков. Для этого:

1.  Сообщите об ошибке на GitHub. Подробные инструкции по созданию задачи на GitHub можно найти в этой статье.
2.  Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Также вы можете добавить архив с логами и временем воспроизведения на Google Drive и поделиться им с `devteam@adguard.com`, прикрепив ссылку на Google Drive к задаче на GitHub.

## Сбор и отправка логов через инструменты разработчика в браузере

### Chrome

1.  Откройте Браузерное расширение AdGuard VPN и воспроизведите действия, которые привели к ошибке. Запомните точное время, когда эта ошибка произошла.
2.  Перейдите по адресу `chrome://extensions`
3.  Включите *режим разработчика*

    ![Режим разработчика *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

4.  Нажмите `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

5.  Откройте вкладку *Консоль*

    ![Вкладка Консоль *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6.  Откройте контекстное меню и нажмите *Сохранить как…*

    ![Сохранить как *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Теперь, когда вы собрали логи, вам нужно передать их нашей команде разработчиков. Для этого:

1.  Сообщите об ошибке на GitHub. Подробные инструкции по созданию задачи на GitHub можно найти в этой статье.
2.  Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Также вы можете добавить архив с логами и временем воспроизведения на Google Drive и поделиться им с `devteam@adguard.com`, прикрепив ссылку на Google Drive к задаче на GitHub.

### Firefox

1.  Откройте Браузерное расширение AdGuard VPN и воспроизведите действия, которые привели к ошибке. Запомните точное время, когда эта ошибка произошла.
2.  Перейдите по адресу `about:addons`
3.  Нажмите *Отладка дополнений*

    ![Отладка дополнений *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4.  Кликните *Исследовать*

    ![Исследовать *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5.  Перейдите на вкладку *Console*

    ![Консоль *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6.  Нажмите *Сохранить все сообщения в файл*

    ![Сохранить *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Теперь, когда вы собрали логи, вам нужно передать их нашей команде разработчиков. Для этого:

1.  Сообщить об ошибке на GitHub. Подробные инструкции по созданию задачи на GitHub можно найти в этой статье.
2.  Отправьте архив с логами и временем воспроизведения на адрес `devteam@adguard.com` и прикрепите ссылку на свою задачу на GitHub. Также вы можете добавить архив с логами и временем воспроизведения на Google Drive и поделиться им с `devteam@adguard.com`, прикрепив ссылку на Google Drive к задаче на GitHub.