---
title: Установка и удаление
sidebar_position: 2
---

## Установите AdGuard VPN для Linux

Чтобы установить AdGuard VPN, введите:

Релиз

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Бета

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v
```

Nightly

```
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v
```

При необходимости введите пароль администратора.

Создайте символическую ссылку на файл в папке `/usr/local/bin`, нажав `y`, и дождитесь завершения установки.

:::note
Вы можете проверить подпись и убедиться, что это официальная версия AdGuard VPN, используя инструмент `gpg`. [Подробнее на GitHub](https://github.com/AdguardTeam/AdGuardVPNCLI?tab=readme-ov-file#verify-releases)
:::

## Удалите AdGuard VPN для Linux

Чтобы удалить AdGuard VPN, введите:

Релиз

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v -u
```

Бета

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/beta/install.sh | sh -s -- -v -u
```

Nightly

```
curl -SsL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/nightly/install.sh | sh -s -- -v -u
```

При необходимости введите пароль администратора.
