---
title: Ayarlar
sidebar_position: 4
---

Linux için AdGuard VPN ayarlarını komut satırından yönetebilirsiniz. Mevcut yapılandırmayı görüntülemek için şunu yazın:

```
adguardvpn-cli config show
```

## VPN modu: TUN veya SOCKS5

AdGuard VPN'in trafiği nasıl yönlendireceğini seçebilirsiniz.

### TUN modu

:::note

Requires administrator rights.

:::

TUN modu etkinleştirildiğinde, AdGuard VPN:

- Creates a virtual Layer-3 interface (tunX or utunX, depending on the operating system).
- Updates the system routing table so that the default route (or only selected subnets if you use exclusions) is sent through this interface.
- Captures IP packets transparently for all apps that match the routing rules — no per-app configuration is required.
- Routes DNS queries through the tunnel to prevent leaks (unless a domain/app is excluded).

Varsayılan tünel modunu ayarlamak için şunu yazın:

```
adguardvpn-cli config set-mode TUN
```

### SOCKS5 modu

SOCKS5 modu etkinleştirildiğinde, AdGuard VPN:

- Starts a local SOCKS5 proxy that by default listens on 127.0.0.1:1080 (configurable via the `set-socks-host` and `set-socks-port` commands).
- Only applications explicitly configured to use this proxy will send their traffic through AdGuard VPN.
- Does not change system routes or DNS by itself. Traffic is not redirected automatically.

:::note

DNS sızıntılarını önlemek için, ana makine adlarını proxy aracılığıyla çözümleyen bir istemci kullanın (`curl` gibi araçlarda genellikle `socks5h` olarak belirtilir). Bir uygulama ana makine adlarını yerel olarak çözüyorsa, sistem DNS'i proxy'yi atlayabilir.

```
curl -x socks5://127.0.0.1:1080 https://example.com
curl -x socks5h://127.0.0.1:1080 https://example.com
```

:::

SOCKS5 modunu ayarlamak için şunu yazın:

```
adguardvpn-cli config set-mode SOCKS
```

:::note

AdGuard VPN CLI provides both TCP and UDP proxying in SOCKS5 mode. However, some apps don’t support UDP via a SOCKS5 proxy. For instance, if you select SOCKS5 in your browser, it will use TCP-based protocols (HTTP/1.1 and HTTP/2) by default.

:::

## SOCKS ayarları

SOCKS dinleme ana makinesini ayarlamak için şunu yazın:

```
adguardvpn-cli config set-socks-host <host>
```

`<host>` yerine kullanmak istediğiniz ana makineyi yazın. 127.0.0.1 dışındaki bir ana makineyi kullanmak için kullanıcı adı ve parola ayarlanması gerekir. SOCKS kullanıcı adı ve parolasını ayarlamak için şunu yazın:

```
adguardvpn-cli config set-socks-username <username>
adguardvpn-cli config set-socks-password <password>
```

`<username>` ve `<password>` ifadelerini istediğiniz kullanıcı adı ve parolayla değiştirin. SOCKS kullanıcı adı ve parolasını temizlemek için şunu yazın:

```
adguardvpn-cli config clear-socks-auth
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
adguardvpn-cli config set-change-system-dns on
```

Parametreyi `off` olarak ayarlarsanız, sistem DNS ayarları değişmeden kalır ve DNS sorguları VPN tünelini atlayabilir.

:::note

SOCKS5 modundaü `set-dns` ve `set-change-system-dns` komutları etkin değildir. DNS davranışı yalnızca her uygulamanın ayarları tarafından belirlenir.

:::

## VPN tünel yönlendirme modu: NONE, AUTO veya SCRIPT

AdGuard VPN CLI ile trafiğin VPN tüneli üzerinden nasıl yönlendirileceğini seçebilirsiniz. Yönlendirme modu, TUN arayüzü etkin olduğunda sistem yönlendirmesini kontrol eder. SOCKS5/proxy modunda trafiği otomatik olarak yönlendirmez; bu durumda uygulamaların yerel SOCKS5 proxy'sini kullanacak şekilde yapılandırılması gerekir.

### NONE — no routing changes

AdGuard VPN CLI brings up the TUN interface but does not modify the system routing table. No default route to the tunnel is installed, so traffic continues to use the existing OS routes.

Use this option if you want to manage routes yourself manually or with third-party tools.

Tünel yönlendirme modunu NONE (yönlendirme yok) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode NONE
```

### AUTO — automatic routing

AdGuard VPN CLI creates and maintains the minimal set of routes required for the tunnel to work system-wide. Typical behavior includes:

- Installing and adjusting routes so eligible traffic (according to your allow, deny, and exclusion settings) flows through the TUN interface.
- Preserving access to local networks (commonly RFC1918 subnets) and other exclusions, so that your LAN, printers, and routers remain reachable.
- Reacting to reconnects and endpoint changes by reapplying routes as needed.

Use AUTO if you want a “just works” configuration with system-wide protection and no per-app setup.

Tünel yönlendirme modunu AUTO (otomatik yönlendirme) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode AUTO
```

### SCRIPT — user-defined routing

AdGuard VPN CLI executes a user-supplied script that adds or removes routes when the tunnel state changes. You have full control over what goes through the tunnel and what stays direct.

Tünel yönlendirme modunu SCRIPT (özel yönlendirme betiği) olarak ayarlamak için şunu yazın:

```
adguardvpn-cli config set-tun-routing-mode SCRIPT
```

Uygun izinlere sahip bir yönlendirme betiği oluşturmak için şunu yazın:

```
adguardvpn-cli config create-routes-script
```

Use SCRIPT if you need fine-grained split tunneling, enterprise routing policies, or custom exceptions beyond what AUTO provides.

#### Examples

**Linux custom script:**

```
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
ip route add 192.168.100.0/24 dev "$INTERFACE"  # Corporate network
ip route add 10.0.0.0/8 dev "$INTERFACE"        # Private networks
ip route add 172.16.0.0/12 dev "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# ip route add 0.0.0.0/1 dev "$INTERFACE"
# ip route add 128.0.0.0/1 dev "$INTERFACE"
# ip -6 route add 2000::/3 dev "$INTERFACE" || true
# ip route del 192.168.0.0/16 dev "$INTERFACE" 2>/dev/null || true
# ip route del 10.0.0.0/8 dev "$INTERFACE" 2>/dev/null || true
```

**macOS custom script:**

```
#!/bin/sh
INTERFACE="$1"

# Example 1: Route only specific corporate networks through VPN
route add 192.168.100.0/24 -iface "$INTERFACE"  # Corporate network
route add 10.0.0.0/8 -iface "$INTERFACE"        # Private networks
route add 172.16.0.0/12 -iface "$INTERFACE"     # Another private range

# Example 2: Route everything except local networks
# route add 1.0.0.0/8 -iface "$INTERFACE"
# route add 2.0.0.0/7 -iface "$INTERFACE"
# route add 4.0.0.0/6 -iface "$INTERFACE"
# route add 8.0.0.0/5 -iface "$INTERFACE"
# route add 16.0.0.0/4 -iface "$INTERFACE"
# route add 32.0.0.0/3 -iface "$INTERFACE"
# route add 64.0.0.0/2 -iface "$INTERFACE"
# route add 128.0.0.0/1 -iface "$INTERFACE"
# route add -inet6 2000::/3 -iface "$INTERFACE" || true
# route delete 192.168.0.0/16 2>/dev/null || true
# route delete 10.0.0.0/8 2>/dev/null || true
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
- Kullanıcı VPN'i kapatır — _VPN bağlantısı kesildi_ bildirimi görünür.
- Kullanıcı VPN bağlantısının geri gelmesini bekliyor — _Bağlantı için bekleniyor_ bildirimi görünür.

  adguardvpn-cli config set-show-notifications on

## İstisnalar

İki mod vardır. _Genel_ modda, istisnalar listesindeki siteler VPN üzerinden yönlendirilmez. _Seçici modda_, yalnızca istisnalar listesindeki siteler VPN üzerinden yönlendirilir. Her mod için ayrı bir istisna listesi bulunmaktadır.

İstisnalarla neler yapabileceğinizi okumak için komut satırına şunu yazın: `adguardvpn-cli site-exclusions -h`.

İşte ana seçenekler:

1. **add**, belirtilen istisnaları ekler

   Örnek: `adguardvpn-cli site-exclusions add` buradaki `%DOMAIN_NAME%` istisnalara eklemek istediğiniz sitedir.

   :::note

   To add many exclusions, you need to list them separated by spaces.

   :::

2. **clear**, mevcut moddaki istisna listesini temizler

   Örnek: `adguardvpn-cli site-exclusions clear`

3. **mode**, mevcut modu gösterir ve bunlar arasında geçiş yapmanızı sağlar

   Örnek: `adguardvpn-cli site-exclusions mode selective` (bu komutla, Seçici mod seçilir)

4. **remove**, bir veya daha fazla istisnayı kaldırır (virgülle ayrılmışsa)

   Örnek: `adguardvpn-cli site-exclusions remove %DOMAIN_NAME%` buradaki `%DOMAIN_NAME%` istisnalardan kaldırmak istediğiniz sitedir.

5. **show**, mevcut istisnalar listesini gösterir

   Örnek: `adguardvpn-cli site-exclusions show`
