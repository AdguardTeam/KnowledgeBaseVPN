---
title: İstisnalar
sidebar_position: 7
---

_İstisnalar_ özelliği, hangi alan adlarının trafiğinin VPN yönlendirmesinden hariç tutulacağına karar vermenizi sağlar. This is handy when you don’t need VPN to work for some websites, because it saves you the hassle of constantly turning VPN on and off.

Diğer platformlardaki AdGuard VPN'de olduğu gibi, Linux için AdGuard VPN'de de İstisnaları iki modda kullanabilirsiniz: Genel (VPN, istisna listesindekiler dışındaki tüm alan adları için etkindir) ve Seçici (VPN, yalnızca istisna listesindeki alan adları için etkindir).

:::note

Her modun kendine ait istisna listesi vardır.

:::

![İstisnalar](https://cdn.adguard-vpn.com/blog/new/m6pkdVPN-CLI-exclusions.png)

### Nasıl kullanılır

Tüm istisnayla ilgili komutları görüntülemek için şunu yazın:

```
adguardvpn-cli site-exclusions -h
```

Mevcut modun istisna listesine bir alan adı eklemek için şunu yazın:

```
adguardvpn-cli site-exclusions add %domain_name%
```

:::tip

Desteklenen girdi biçimleri: `domain.com`, `sub.domain.com`, `www.domain.com`. To add two or more exclusions at once, list them separated by spaces. Joker karakterler için çift tırnak kullanın: `"*.domain.com"`

Komut örneği: `adguardvpn-cli site-exclusions add www.google.com`

:::

Bir alan adını istisna listesinden kaldırmak için şunu yazın:

```
adguardvpn-cli site-exclusions remove %domain_name%
```

Mevcut istisna listesini görüntülemek için şunu yazın:

```
adguardvpn-cli site-exclusions show
```

Tüm istisnaları kaldırmak için şunu yazın:

```
adguardvpn-cli site-exclusions clear
```

İstisnalar modunu değiştirmek için şunu yazın:

```
adguardvpn-cli site-exclusions mode %mode_name%
```

(Veya `adguardvpn-cli site-exclusions mode` komutunu kullanarak mevcut modu kontrol edebilirsiniz)

buradaki %mode_name% `genel` veya `seçici` şeklindedir.

:::note

Yukarıda listelenen komutlar (`add`, `remove`, `show`, `clear`) mevcut modun istisna listesine uygulanır. Belirli bir mod için bir komut gerçekleştirmek için örneğin `--for-mode %mode_name% type` ekleyin:

```
adguardvpn-cli site-exclusions add %domain_name% --for-mode %mode_name%
```

:::
