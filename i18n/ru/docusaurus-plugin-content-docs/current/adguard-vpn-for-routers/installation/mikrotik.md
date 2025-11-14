---
title: Установка на роутеры MikroTik
sidebar_position: 2
---

Чтобы настроить AdGuard VPN на роутере MikroTik, выполните следующие действия:

1. Откройте терминал MikroTik. Это можно сделать с помощью командной строки или терминала на вашем компьютере, введя: `ssh admin@192.168.88.1`. Кроме того, вы можете получить к нему доступ через браузер, перейдя по адресу `http://192.168.88.1` и нажав на вкладку «Терминал» в правом верхнем углу.

2. После входа выполните следующие команды:

`/ip ipsec mode-config`

`add connection-mark=to_adguard name=adguard responder=no`

`/ip ipsec policy group`

`add name=adguard`

`/ip ipsec profile`

`add name=adguard`

`/ip ipsec peer`

`add address=SERVER_ADDRESS exchange-mode=ike2 name=adguard profile=adguard`

`/ip ipsec proposal`

`add name=adguard pfs-group=none`

`/ip ipsec identity`

`add auth-method=eap certificate="" eap-methods=eap-mschapv2 generate-policy=port-strict mode-config=adguard peer=adguard policy-template-group=adguard username=USERNAME password=PASSWORD`

`/ip ipsec policy`

`add dst-address=0.0.0.0/0 group=adguard src-address=0.0.0.0/0 template=yes`

В приведенных выше командах `SERVER_ADDRESS` обозначает адрес сервера. `USERNAME` — это имя пользователя, которое было присвоено вам при добавлении роутера в аккаунт AdGuard. То же самое относится к `PASSWORD`.

:::note

Обратите внимание, что эти команды должны выполняться именно так, как они есть.

:::
