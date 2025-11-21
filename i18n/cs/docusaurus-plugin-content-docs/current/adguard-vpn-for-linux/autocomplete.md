---
title: Doplňování příkazového řádku
sidebar_position: 5
---

Chcete-li si usnadnit orientaci v různých a někdy docela dlouhých příkazech, můžete použít funkci doplňování příkazového řádku.

Chcete-li to povolit, podívejte se na nápovědu bash-completion, která se zobrazí po instalaci nebo aktualizaci AdGuard VPN pro Linux:

![bash-completion hint](https://cdn.adguard-vpn.com/blog/new/6x3djbash-completion-hint.png)

Pokud jste během instalace neaktivovali doplňování a chcete tak učinit později, upravte konfigurační soubor shell, který se obvykle nachází ve vašem domovském adresáři, například `~/.bashrc` nebo `~/.zshrc`, a přidejte následující řádek. Pokud jste během instalace zvolili jiný výstupní adresář, budete muset aktualizovat cestu.

```sh
[ -s "/opt/adguardvpn_cli/bash-completion.sh" ] && \. "/opt/adguardvpn_cli/bash-completion.sh"
```

Chcete-li tuto funkci použít, stačí začít psát požadovaný příkaz a stisknout klávesu Tab ↹ — příkaz se automaticky doplní o potřebné slovo nebo se zobrazí výběr možností doplnění.

![bash-completion locations command](https://cdn.adguard-vpn.com/blog/new/1g4nhVPN-CLI-autocomplete.png)
