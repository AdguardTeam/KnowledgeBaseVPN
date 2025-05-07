---
title: Исключения
sidebar_position: 7
---

Функция _Исключения_ позволяет вам выбирать, какой трафик доменов следует исключить из маршрутизации VPN. Это удобно, когда вам не нужен VPN для работы некоторых сайтов — не нужно постоянно включать и выключать VPN.

Как и в AdGuard VPN для других платформ, в AdGuard VPN для Linux вы можете использовать исключения в двух режимах: Общий (VPN включён для всех доменов, кроме тех, что в списке исключений) и Выборочный (VPN включён только для доменов из списка исключений).

:::note

У каждого режима свой список исключений.

:::

![Исключения](https://cdn.adguard-vpn.com/blog/new/m6pkdVPN-CLI-exclusions.png)

### Как пользоваться

Чтобы просмотреть все команды, связанные с исключениями, введите:

```
adguardvpn-cli site-exclusions -h
```

Чтобы добавить домен в список исключений текущего режима, введите:

```
adguardvpn-cli site-exclusions add %domain_name%
```

:::tip

Поддерживаемые форматы ввода: `domain.com`, `sub.domain.com`, `www.domain.com`. To add two or more exclusions at once, list them separated by spaces. Используйте двойные кавычки для подстановочных знаков: `"*.domain.com"`

Command example: `adguardvpn-cli site-exclusions add www.google.com`

:::

Чтобы удалить домен из списка исключений, введите:

```
adguardvpn-cli site-exclusions remove %domain_name%
```

Чтобы просмотреть текущий список исключений, введите:

```
adguardvpn-cli site-exclusions show
```

Чтобы удалить все исключения, введите:

```
adguardvpn-cli site-exclusions clear
```

Чтобы изменить режим исключений, введите:

```
adguardvpn-cli site-exclusions mode %mode_name%
```

(Или вы можете просто проверить текущий режим, используя `adguardvpn-cli site-exclusions mode`)

где %mode_name% — `general` или `selective`.

:::note

Команды, перечисленные выше (`add`, `remove`, `show`, `clear`), применяются к списку исключений текущего режима. Чтобы выполнить команду для конкретного режима, добавьте `--for-mode %mode_name% type`, например:

```
adguardvpn-cli site-exclusions add %domain_name% --for-mode %mode_name%
```

:::
