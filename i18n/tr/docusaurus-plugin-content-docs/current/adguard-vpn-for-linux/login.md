---
title: Giriş yapma, bağlantı kurma ve güncelleme
sidebar_position: 3
---

## Log in and log out

Giriş yapmak veya hesap oluşturmak için şunu yazın:

```
adguardvpn-cli login
```

AdGuard hesabınızın e-posta adresini ve parolasını girin. Henüz bir hesabınız yoksa bir tane oluşturmanız istenecektir.

:::note
Ayrıca [sitemizde](https://auth.adguard.com/login.html) bir AdGuard hesabı oluşturabilir ve ardından kimlik bilgilerinizi kullanarak Linux için AdGuard VPN'de giriş yapabilirsiniz.
:::

AdGuard VPN'den çıkış yapmak için şunu yazın:

```
adguardvpn-cli logout
```

## Connect to VPN

Hızlı bağlantı için şunu yazın:

```
adguard-vpn cli connect
```

AdGuard VPN, mevcut en hızlı veya en son kullanılan konuma bağlanır.

Mevcut konumları görüntülemek için şunu yazın:

```
adguardvpn-cli list-locations
```

Belirli bir konuma bağlanmak için şunu yazın:

```
adguardvpn-cli connect -l <location>
```

`<location>` kısmını bağlanmak istediğiniz konumun şehri, ülkesi veya ISO koduyla değiştirin.

Gerekirse, yönetici parolanızı girin.

## Check for updates

Güncellemeleri denetlemek için şunu yazın:

```
adguardvpn-cli check-update
```
