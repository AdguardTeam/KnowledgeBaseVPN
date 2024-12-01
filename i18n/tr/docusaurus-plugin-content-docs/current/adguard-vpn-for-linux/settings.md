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

## SOCKS ayarları

SOCKS dinleme ana makinesini ayarlamak için şunu yazın:

```
adguardvpn-cli config set-socks-host <host>
```

`<host>` yerine kullanmak istediğiniz ana makineyi yazın. Using a host other than 127.0.0.1 requires setting a username and password. To set the SOCKS username and password, type:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

`<username>` ve `<password>` ifadelerini istediğiniz kullanıcı adı ve parolayla değiştirin. To clear the SOCKS username and password, type:

```
adguardvpn-cli config clear-socks-auth
```

## DNS üst kaynak adresi

DNS üst kaynağını ayarlamak için şunu yazın:

```
adguardvpn-cli config set-dns <server_address>
```

`<server_address>` kısmını DNS sunucunuzun adresiyle değiştirin. Bu DNS sunucusunu sistem düzeyinde kullanmak için şunu yazın:

```
adguardvpn-cli config set-system-dns on
```

## VPN tünel yönlendirme modu: NONE, AUTO veya SCRIPT

AdGuard VPN'in trafiği VPN tüneli üzerinden nasıl yönlendireceğini seçebilirsiniz. Tünel yönlendirme modunu NONE (yönlendirme yok) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

Tünel yönlendirme modunu AUTO (otomatik yönlendirme) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

Tünel yönlendirme modunu SCRIPT (özel yönlendirme betiği) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Uygun izinlere sahip bir yönlendirme betiği oluşturmak için şunu yazın:

```
adguardvpn-cli config create-routes-script
```

## QUIC'i kullan

QUIC (HTTP/3) tabanlı AdGuard VPN protokolünün kullanımını etkinleştirmek için şunu yazın:

```
adguardvpn-cli config set-use-quic on
```

Devre dışı bırakmak için `off` olarak ayarlayın.

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

Tercihlerinize bağlı olarak `<channel>` yerine `release`, `beta` veya `nightly` yazın.

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

## Bildirimleri göster

Ayar, AdGuard VPN açıldığında/kapatıldığında veya yeniden bağlanmayı beklerken sistem bildirimlerinin görünümünden sorumludur, örneğin:

- Kullanıcı VPN'i açar — _VPN bağlandı_ bildirimi görünür.
- A user turns VPN off — the _VPN disconnected_ notification appears.
- Kullanıcı VPN bağlantısının geri gelmesini bekliyor — _Bağlantı için bekleniyor_ bildirimi görünür.

  adguardvpn-cli config set-show-notifications on

## Exclusions

There are two modes. In _General_ mode, websites from the list of exclusions are not routed through VPN. In _Selective_ mode, only websites from the list of exclusions are routed through VPN. There is a separate list of exclusions for each mode.

To read about what you can do with exclusions, write this in the command-line interface: `adguardvpn-cli site-exclusions -h`.

Here are the main options:

1. **add** adds specified exclusions

   Example: `adguardvpn-cli site-exclusions add`, where `%DOMAIN_NAME%` is the website that you want to add to exclusions.

   :::note

   o add many exclusions, you need to list them comma-separated.

   :::

2. **clear** clears the list of exclusions in the current mode

   Example: `adguardvpn-cli site-exclusions clear`

3. **mode** shows the current mode and allows to switch between them

   Example: `adguardvpn-cli site-exclusions mode selective` (with this command, Selective mode is chosen)

4. **remove** removes one or more exclusions (if separated by commas)

   Example: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` where `%DOMAIN_NAME%` is the website that you want to remove from exclusions.

5. **show** shows the current list of exclusions

   Example: `adguardvpn-cli site-exclusions show`
