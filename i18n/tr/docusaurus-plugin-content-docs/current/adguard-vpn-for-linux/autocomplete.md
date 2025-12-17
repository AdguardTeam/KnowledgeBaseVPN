---
title: Komut satırı tamamlama
sidebar_position: 5
---

Farklı ve bazen oldukça uzun komutlar arasında gezinmeyi kolaylaştırmak için komut satırı tamamlama özelliğini kullanabilirsiniz.

Bunu etkinleştirmek için, Linux için AdGuard VPN'i kurduktan veya güncelledikten sonra gösterilen bash tamamlama ipucuna bakın:

![bash tamamlama ipucu](https://cdn.adtidy.org/blog/new/6x3djbash-completion-hint.png)

If you did not enable completions during installation and would like to do so later, edit your shell configuration file, typically located in your home directory such as `~/.bashrc` or `~/.zshrc`, and add the following line. You will need to update the path if you chose a different output directory during installation.

```sh
[ -s "/opt/adguardvpn_cli/bash-completion.sh" ] && \. "/opt/adguardvpn_cli/bash-completion.sh"
```

Özelliği kullanmak için, istediğiniz komutu yazmaya başlayın ve Tab ↹ tuşuna basın — komut otomatik olarak gerekli bir kelimeyle tamamlanır veya tamamlama seçeneklerini gösterir.

![bash-completion locations command](https://cdn.adguard-vpn.com/blog/new/1g4nhVPN-CLI-autocomplete.png)
