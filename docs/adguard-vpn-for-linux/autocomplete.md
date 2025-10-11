---
title: Command-line completion
sidebar_position: 5
---

To make navigating through different and, sometimes, pretty long commands easier, you can use the command-line completion feature.

To enable it, see the bash-completion hint that is shown after installing or updating AdGuard VPN for Linux:

![bash-completion hint](https://cdn.adguard-vpn.com/blog/new/6x3djbash-completion-hint.png)

If you did not enable completions during install and would like to do so later, edit your shell configuration file, typically located in your home directory such as `~/.bashrc` or `~/.zshrc`, and add the following line, updating the path if you chose a different output directory during installation:

```sh
[ -s "/opt/adguardvpn_cli/bash-completion.sh" ] && \. "/opt/adguardvpn_cli/bash-completion.sh"
```

To use the feature, just start typing the command you want and hit the Tab ↹ key — the command will automatically complete with a necessary word or will show a choice of completion options.

![bash-completion locations command](https://cdn.adguard-vpn.com/blog/new/1g4nhVPN-CLI-autocomplete.png)
