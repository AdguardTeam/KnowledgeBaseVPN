---
title: OpenWRT yönlendiricide Linux için AdGuard VPN nasıl kurulur
sidebar_position: 3
---

:::info Sistem gereksinimleri

Linux için AdGuard VPN, diğer adıyla AdGuard VPN CLI, gerekli paketleri yükledikten sonra yönlendiricinizin dâhili hafızasında veya harici USB'nizde en az 22 MB boş depolama alanı gerektirir.

:::

## 1. Yönlendiricinizde SSH erişiminin etkinleştirildiğinden emin olun

Bu ayar genellikle yönlendiricinin web arayüzünde bulunur.

OpenWrt için:

1. Web arayüzüne giriş yapın. Tipik olarak, buna [`http://192.168.1.1`](http://192.168.1.1/) adresinden bir web tarayıcısı aracılığıyla erişilebilir.

2. Navigate to _System_ → _Administration_.

3. Make sure that _SSH Access_ is enabled.

By default, OpenWrt allows SSH access to the router.

## 2. Yönlendiricinin IP adresini belirle

Çoğu yönlendirici için varsayılan IP adresi `192.168.1.1` veya `192.168.0.1`dir. IP adresini değiştirdiyseniz veya emin değilseniz, bağlı bir cihazdaki IP yapılandırmasını kontrol ederek bulabilirsiniz.

### On Windows

1. Komut İstemi'ni açın:

   ```text
   ipconfig
   ```

2. Etkin ağ bağlantınızın altında _Varsayılan Ağ Geçidi_ öğesini arayın. Bu, yönlendiricinizin IP adresidir.

### On macOS and Linux

1. Terminal'i açın ve Linux'ta şunu çalıştırın:

   ```text
   ip route | grep default
   ```

   Or this on Mac:

   ```text
   route -n get default
   ```

2. _Varsayılan_ girişi arayın. Yanındaki IP adresi ise yönlendiricinizin IP adresidir.

<!-- comment -->

## 3. Use an SSH client to connect to the router

Çoğu Linux ve macOS sistemi önceden yüklenmiş bir SSH istemcisiyle birlikte gelir. Windows için, Windows 10/11'deki yerleşik SSH istemcisi olan PowerShell'i veya PuTTY gibi üçüncü taraf bir uygulamayı kullanabilirsiniz.

### Yerleşik SSH istemcisi (Linux, macOS ve Windows 10/11)

1. Terminal veya PowerShell'i açın.

2. SSH komutunu çalıştırın:

   ```text
   ssh root@192.168.1.1
   ```

   `192.168.1.1` kısmını yönlendiricinizin IP adresiyle değiştirin.

3. If this is your first time connecting to the router via SSH, you’ll see a message like:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256: ...
   Are you sure you want to continue connecting? (Yes/No/[Fingerprint])
   ```

   `Evet` yazın ve Enter tuşuna basın.

4. İstendiğinde yönlendiricinin parolasını girin. OpenWrt için varsayılan parola genellikle boştur (sadece Enter tuşuna basın), ancak ilk kurulum sırasında bir parola ayarlamış olmalısınız.

<!-- comment -->

### PuTTY (Windows)

1. PuTTY'yi [resmi siteden](https://www.putty.org/) indirin ve kurun.

2. PuTTY'yi açın.

3. Ana Makine Adı (veya IP adresi)\* alanına yönlendiricinizin IP adresini girin (örneğin, `192.168.1.1`).

4. _Bağlantı türü_ öğesinin SSH olarak ayarlandığından emin olun.

5. _Aç_ öğesine tıklayın.

6. Terminal penceresi açıldığında oturum açın. The default username is `root` and the default password is `keenetic`.

<!-- comment -->

## 4. Temel SSH komutları

Once logged in, you can use various commands to interact with your router’s Linux-based operating system.

Paket listelerini güncelleyin (OpenWrt):

```text
opkg update
```

Gerekli paketleri yükleyin:

```text
opkg install curl kmod-tun ca-certificates
```

AdGuard VPN CLI yükleme betiğini çalıştırın:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Set up AdGuard VPN CLI

1. Hesabınıza giriş yapın

   Linux için AdGuard VPN'i kullanmak için bir AdGuard hesabına ihtiyacınız vardır.

   [Sitemizden](https://auth.adguard.com/login.html) veya Terminal'den kaydolabilir veya giriş yapabilirsiniz.

   Kaydolmak veya giriş yapmak için şunu yazın:

   ```jsx
   adguardvpn-cli login
   ```

   Not: İkili dosyayı `/usr/local/bin` dizinine bağlayamadıysanız, tüm komutları çalıştırmak için tam dosya yolunu kullanın. Örneğin, `/opt/adguardvpn_cli/adguardvpn-cli login`

2. VPN'e bağlanın

   İhtiyaçlarınıza en uygun VPN sunucu konumunu seçin.

   Genel olarak, sunucu size ne kadar yakınsa bağlantı o kadar hızlı olur.

   Mevcut konumları görüntülemek için şunu yazın:

   ```jsx
   adguardvpn-cli list-locations
   ```

   Belirli bir konuma bağlanmak için şunu yazın:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   LOCATION_NAME yerine bağlanmak istediğiniz konumun şehri, ülkesi veya ISO koduyla değiştirin.

   Hızlı bağlantı için şunu yazın:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN will choose the fastest location available and remember it for future quick connections.

3. Ayarlarınızı düzenleyin

   Mevcut tüm AdGuard VPN komutlarının bir listesini alın ve VPN istemcisini ihtiyaçlarınıza göre özelleştirin.

   Tüm komutları görüntülemek için şunu yazın:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI, VPN tünellemesi için bir tun0 arayüzü oluşturur.

<!-- comment -->

## 6. Set up firewall rules

Bunu web arayüzünden veya komut satırından yapabilirsiniz. Aşağıdaki adımlar SSH komut satırı üzerinden ayarlamayı açıklamaktadır.

1. Add a new unmanaged interface via SSH

   ```shell
   ssh admin@router_ip
   uci set network.tun0='interface'
   uci set network.tun0.proto='none'
   uci set network.tun0.device='tun0'
   uci commit network
   /etc/init.d/network reload
   ```

2. Add tun0 to WAN zone

   Trafiğin VPN üzerinden geçmesi için WAN bölgesine tun0'ı ekleyin.
   İnternete bağlanan WAN arayüzü tipik olarak `wan` ya da benzer bir adla anılan bir bölgede yer alır. Check your router’s configuration files or firewall settings to find out which zone is associated with the WAN interface.

   Bunu yapmak için mevcut güvenlik duvarı bölgelerini listeleyin:

   ```shell
   uci show firewall
   ```

   Bu, tüm bölgelerin listelendiği bir yapılandırma dosyası gönderir. `firewall.@zone[1]` veya benzeri bir bölümde `option name 'wan'` tanımlı olanı arayın. Yapılandırmanıza bağlı olarak `[1]` sayısı farklı olabilir.

   Run this SSH command, replace `zone[1]` with correct `wan` zone identified before:

   ```shell
   uci show firewall | grep "=zone"
   uci add_list firewall.@zone[1].network='tun0'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   VPN tarafından korunmayan tüm trafiği devre dışı bırakmak istiyorsanız, aşağıdaki komutu çalıştırın. Bu şekilde, VPN bağlantısı kesilirse internet bağlantınız hiç olmaz. Bu adımı yapmamayı seçerseniz, VPN bağlantısı kesilirse gerçek IP'niz açığa çıkacaktır.

   ```shell
   uci del_list firewall.@zone[1].network='wan'
   uci del_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   Fikrinizi değiştirdiyseniz ve doğrudan trafiğe izin vermek istiyorsanız, aşağıdaki komutu çalıştırın:

   ```shell
   uci add_list firewall.@zone[1].network='wan'
   uci add_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

<!-- comment -->

## 7. AdGuard VPN CLI için otomatik başlatmayı ayarlama

Yönlendirici yeniden başlatıldıktan sonra AdGuard VPN CLI'yi otomatik olarak başlatmak için `…/etc/init.d/adguardvpn` adresinde bir dosya oluşturun.

Bunu dosyaya yapıştırın:

```text
#!/bin/sh /etc/rc.common
# Example script
# Copyright (C) 2007 OpenWrt.org
START=99
STOP=99
HOME=/root
start() {
        /opt/adguardvpn_cli/adguardvpn-cli connect
}

stop() {
        /opt/adguardvpn_cli/adguardvpn-cli disconnect

}
```

Otomatik başlatmaya erişim izni vermek ve etkinleştirmek için şunu çalıştırın:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
