---
title: Ayarlar
sidebar_position: 4
---

Linux için AdGuard VPN ayarlarını komut satırından yönetebilirsiniz. Geçerli yapılandırmayı görüntülemek için şunu yazın:

```
adguardvpn-cli config show
```

## VPN modu: TUN veya SOCKS5

AdGuard VPN'in trafiği nasıl yönlendireceğini seçebilirsiniz.

Varsayılan tünel modunu ayarlamak için şunu yazın:

```
adguardvpn-cli config set-mode TUN
```

SOCKS5 modunu ayarlamak için şunu yazın:

```
adguardvpn-cli config set-mode SOCKS
```

SOCKS5 bağlantı noktasını ayarlamak için şunu yazın:

```
adguardvpn-cli config set-socks-port <port_number>
```

`<port_number>` kısmını bağlanmak istediğiniz bağlantı noktasıyla değiştirin.

## DNS üst kaynak adresi

DNS üst kaynağını ayarlamak için şunu yazın:

```
adguardvpn-cli config set-dns <server_address>
```

`<server_address>` kısmını DNS sunucunuzun adresiyle değiştirin. Bu DNS sunucusunu sistem düzeyinde kullanmak için şunu yazın:

```
adguardvpn-cli config set-system-dns on
```

## No-route mode

Bu özellik yalnızca belirttiğiniz adresleri VPN tüneli üzerinden yönlendirir. To enable the no-route mode, type:

```
adguardvpn-cli config set-no-routes on
```

## Çökme raporları

Otomatik çökme raporlarını etkinleştirirseniz AdGuard VPN, bir şeyler ters giderse geliştiricileri bilgilendirir. Ayarı etkinleştirmek için şunu yazın:

```
adguardvpn-cli config send-reports on
```

Devre dışı bırakmak için `off` olarak ayarlayın.

## Güncelleme kanalı

Güncelleme kanalını değiştirmek için şunu yazın:

```
adguardvpn-cli config set-update-channel <channel>
```

Replace `<channel>` with `release`, `beta`, or `nightly`, depending on your preferences.

## İpuçları

AdGuard VPN, komutları yürüttükten sonra size ipuçları gösterebilir — örneğin, bir sonraki adımda ne yapacağınız veya hatayı nasıl düzelteceğiniz gibi. Bu ayar varsayılan olarak etkindir ancak şunu yazarak devre dışı bırakabilirsiniz:

```
adguardvpn-cli config set-show-hints off
```

Yeniden etkinleştirmek için `off` yerine `on` yazın.

## Hata ayıklama günlük kaydı

Bir hatayı bildirmek için hata ayıklama günlüklerini geliştiriciler veya destek ekibiyle paylaşmanız gerekebilir. Hata ayıklama günlüğünü etkinleştirmek için şunu yazın:

```
adguardvpn-cli config set-debug-logging on
```

Günlükleri dışa aktardıktan sonra bu ayarı devre dışı bırakın.
