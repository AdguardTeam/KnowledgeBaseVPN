---
title: Geri bildirim gönderme
sidebar_position: 6
---

## Bir sorun bildirme veya özellik önerme

Linux için AdGuard VPN'de bir hata bulduysanız veya yeni bir özellik önermek istiyorsanız bunu şu şekilde yapabilirsiniz:

- [Geri bildirim formunu](https://surveys.adguard.com/en/vpn_linux/form.html) doldurun.
- [GitHub sorunu oluşturun](https://github.com/AdguardTeam/AdGuardVPNCLI/issues/new/choose). Ancak bunu yapmadan önce benzer sorunlar için [depoyu](https://github.com/AdguardTeam/AdGuardVPNCLI/issues?q=is%3Aissue) kontrol edin.

:::note
Yeni bir özelliğin veya hata düzeltmesinin uygulanmasını desteklemek istiyorsanız GitHub'da oy verebilirsiniz. Oy vermek için sadece bir emoji ile tepki verin.
:::

## Günlükleri toplama ve gönderme

1. Şunu yazarak hata ayıklama günlüğünü etkinleştirin:

   `adguardvpn-cli config set-debug-logging on`

2. Sorunu yeniden oluşturun ve tam olarak ne zaman oluştuğunu hatırlamaya çalışın.

3. Bir süre bekleyin, ardından günlükleri _Downloads_ veya _Home_ klasörüne yazarak arşivleyin:

   Linux için

   `zip -rj logs.zip ${XDG_DATA_HOME:-~/.local/share}/adguardvpn-cli/*.log`

   Mac için

   `zip -rj ~/Downloads/logs.zip ~/Library/"Application Support"/adguardvpn-cli/*.log`

4. Günlük dosyasını devteam@adguard.com adresine gönderin. Hatanın zamanını belirtin ve GitHub sorununuza veya numarasına bir bağlantı ekleyin (başlığın yanında #sayı olarak görünür). Alternatif olarak, günlük dosyasını Google Drive'a yükleyebilir ve devteam@adguard.com ile paylaşabilirsiniz. Dosya bağlantısını GitHub sorununuza ekleyin.

5. Şunu yazarak hata ayıklama günlüğünü devre dışı bırakın:

   `adguardvpn-cli config set-debug-logging off`
