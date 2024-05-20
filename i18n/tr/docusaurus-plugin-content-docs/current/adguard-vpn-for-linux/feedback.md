---
title: Geri bildirim gönderme
sidebar_position: 5
---

## Report a problem or suggest a feature

Linux için AdGuard VPN'de bir hata bulduysanız veya yeni bir özellik önermek istiyorsanız bunu şu şekilde yapabilirsiniz:

- [Geri bildirim formunu](https://surveys.adguard.com/en/vpn_linux/form.html) doldurun.
- [GitHub sorunu oluşturun](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Ancak bunu yapmadan önce benzer sorunlar için [depoyu](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) kontrol edin.

:::note
Yeni bir özelliğin veya hata düzeltmesinin uygulanmasını desteklemek istiyorsanız GitHub'da oy verebilirsiniz. Oy vermek için sadece bir emoji ile tepki verin.
:::

## Collect and send logs

1. Şunu yazarak hata ayıklama günlüğünü etkinleştirin:

   `adguardvpn-cli config set-debug-logging on`

2. Sorunu yeniden oluşturun ve tam olarak ne zaman oluştuğunu hatırlamaya çalışın.

3. Wait a while, then archive the logs in the _Downloads_ or _Home_ folder by typing:

   Linux için

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Mac için

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Günlük dosyasını devteam@adguard.com adresine gönderin. Specify the time of the error and attach a link to your GitHub issue or its number (it appears as #number next to the title). Alternatif olarak, günlük dosyasını Google Drive'a yükleyebilir ve devteam@adguard.com ile paylaşabilirsiniz. Dosya bağlantısını GitHub sorununuza ekleyin.

5. Şunu yazarak hata ayıklama günlüğünü devre dışı bırakın:

   `adguardvpn-cli config set-debug-logging off`
