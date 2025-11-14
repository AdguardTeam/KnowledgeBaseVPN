---
title: Автозаполнение командной строки
sidebar_position: 5
---

Чтобы упростить поиск по различным, а порой и довольно длинным командам, вы можете использовать функцию автозаполнения командной строки.

Чтобы включить его, воспользуйтесь подсказкой bash-completion, которая отображается после установки или обновления AdGuard VPN для Linux:

![Подсказка по bash-completion](https://cdn.adguard-vpn.com/blog/new/6x3djbash-completion-hint.png)

If you did not enable completions during installation and would like to do so later, edit your shell configuration file, typically located in your home directory such as `~/.bashrc` or `~/.zshrc`, and add the following line. You will need to update the path if you chose a different output directory during installation.

```sh
[ -s "/opt/adguardvpn_cli/bash-completion.sh" ] && \. "/opt/adguardvpn_cli/bash-completion.sh"
```

Чтобы воспользоваться функцией, просто начните вводить нужную команду и нажмите клавишу Tab ↹ — команда автоматически дополнится необходимым словом или покажет выбор вариантов завершения.

![Подсказка по bash-completion](https://cdn.adguard-vpn.com/blog/new/1g4nhVPN-CLI-autocomplete.png)
