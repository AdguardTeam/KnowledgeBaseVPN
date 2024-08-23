---
title: Отправка отзыва
sidebar_position: 6
---

## Сообщите о проблеме или предложите функцию

Если вы нашли ошибку в AdGuard VPN для Linux или хотите предложить новую функцию, вот как это сделать:

- Заполните [форму обратной связи](https://surveys.adguard.com/en/vpn_linux/form.html).
- [Создайте задачу на GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Но прежде чем это сделать, проверьте [репозиторий](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3AIssue) на предмет подобных проблем.

:::note
Если вы хотите поддержать реализацию новой функции или исправление ошибки, вы можете проголосовать за это на GitHub. Чтобы проголосовать, просто поставьте эмодзи.
:::

## Как собирать и отправлять логи

1. Включите ведение журнала отладки, набрав:

   `adguardvpn-cli config set-debug-logging on`

2. Воспроизведите проблему и постарайтесь вспомнить точное время её возникновения.

3. Подождите некоторое время, затем заархивируйте журналы в папке _Загрузки_ или _Домашняя_, набрав:

   Для Linux

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Для macOS

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Отправьте файлс c логами на devteam@adguard.com. Укажите время ошибки и прикрепите ссылку на вашу задачу GitHub или её номер (она отображается как #число рядом с заголовком). Кроме того, вы можете загрузить файл с логами на Google Диск и отправить его на devteam@adguard.com. Добавьте ссылку на файл к задаче на GitHub.

5. Отключите ведение журнала отладки, набрав:

   `adguardvpn-cli config set-debug-logging off`
