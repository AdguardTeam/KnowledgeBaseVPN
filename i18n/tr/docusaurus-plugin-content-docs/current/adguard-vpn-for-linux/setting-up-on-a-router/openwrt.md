---
title: OpenWRT yönlendiricide Linux için AdGuard VPN nasıl kurulur
sidebar_position: 3
---

:::info Sistem gereksinimleri

AdGuard VPN for Linux, also known as AdGuard VPN CLI, requires at least 22 MB of free storage space on your router’s built-in memory or external USB after installing necessary packages.

:::

## 1. Make sure that SSH is enabled on your router

This setting is usually found in the router’s web interface.

OpenWrt için:

1. Web arayüzüne giriş yapın. Tipik olarak, buna [`http://192.168.1.1`](http://192.168.1.1/) adresinden bir web tarayıcısı aracılığıyla erişilebilir.

2. Navigate to _System_ → _Administration_.

3. Make sure that _SSH Access_ is enabled.

By default, OpenWrt allows SSH access to the router.

## 2. Yönlendiricinin IP adresini belirle

The default IP address for most routers is `192.168.1.1` or `192.168.0.1`. IP adresini değiştirdiyseniz veya emin değilseniz, bağlı bir cihazdaki IP yapılandırmasını kontrol ederek bulabilirsiniz.

### On Windows

1. Open command prompt:

   ```text
   ipconfig
   ```

2. Look for the _Default Gateway_ under your active network connection. Bu, yönlendiricinizin IP adresidir.

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

## 3) Yönlendiriciye bağlanmak için bir SSH istemcisi kullan

Most Linux and macOS systems come with an SSH client pre-installed. For Windows, you can use PowerShell, the built-in SSH client in Windows 10/11, or a third-party application like PuTTY.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Terminal veya PowerShell'i açın.

2. SSH komutunu çalıştırın:

   ```text
   ssh root@192.168.1.1
   ```

   Replace `192.168.1.1` with your router’s IP address.

3. If this is your first time connecting to the router via SSH, you’ll see a message like:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256: ...
   Are you sure you want to continue connecting? (Yes/No/[Fingerprint])
   ```

   `Evet` yazın ve Enter tuşuna basın.

4. Enter the router’s password when prompted. The default password for OpenWrt is typically empty (just press Enter), but you should have set a password during the initial setup.

### PuTTY (Windows)

1. PuTTY'yi [resmi siteden](https://www.putty.org/) indirin ve kurun.

2. PuTTY'yi açın.

3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`).

4. Ensure the _Connection type_ is set to SSH.

5. Aç öğesine tıklayın.

6. When the Terminal window opens, log in. The default username is `root` and the default password is `keenetic`.

## 4) Temel SSH komutları

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

## 5. AdGuard VPN CLI'yi yükle

1. Hesabınıza giriş yapın

   Linux için AdGuard VPN'i kullanmak için bir AdGuard hesabına ihtiyacınız vardır.

   [Sitemizden](https://auth.adguard.com/login.html) veya Terminal'den kaydolabilir veya giriş yapabilirsiniz.

   Kaydolmak veya giriş yapmak için şunu yazın:

   ```jsx
   adguardvpn-cli login
   ```

   Note: If failed to link the binary to '/usr/local/bin’, use full file path to run all commands. Örneğin, `/opt/adguardvpn_cli/adguardvpn-cli login`

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

   AdGuard VPN, mevcut en hızlı konumu seçer ve gelecekteki hızlı bağlantılar için bunu hatırlar.

3. Ayarlarınızı düzenleyin

   Mevcut tüm AdGuard VPN komutlarının bir listesini alın ve VPN istemcisini ihtiyaçlarınıza göre özelleştirin.

   Tüm komutları görüntülemek için şunu yazın:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI, VPN tünellemesi için bir tun0 arayüzü oluşturacaktır.

## 6) Set up firewall rules

Bunu web arayüzünden veya komut satırından yapabilirsiniz. Steps below describe setup via SSH command line.

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
   İnternete bağlanan WAN arayüzü tipik olarak `wan` ya da benzer bir adla anılan bir bölgede yer alır. Check your router's configuration files or firewall settings to find out which zone is associated with the WAN interface.

   Bunu yapmak için mevcut güvenlik duvarı bölgelerini listeleyin:

   ```shell
   uci show firewall
   ```

   Bu, tüm bölgelerin listelendiği bir yapılandırma dosyası gönderir. Look for a section like `firewall.@zone[1]` or similar where `option name 'wan'` is defined. Yapılandırmanıza bağlı olarak `[1]` sayısı farklı olabilir.

   Run this SSH command, replace `zone[1]` with correct  ‘wan’ zone identified before:

   ```shell
   uci show firewall | grep "=zone"
   uci add_list firewall.@zone[1].network='tun0'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   VPN tarafından korunmayan tüm trafiği devre dışı bırakmak istiyorsanız, aşağıdaki komutu çalıştırın. This way you won’t have an Internet connection at all if VPN disconnects. If you choose not to do this step, your real IP will be exposed if the VPN disconnects.

   ```shell
   uci del_list firewall.@zone[1].network='wan'
   uci del_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   If you’ve changed your mind and want to allow direct traffic, run the following command:

   ```shell
   uci add_list firewall.@zone[1].network='wan'
   uci add_list firewall.@zone[1].network='wan6'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

## 7) Set up automatic launch for AdGuard VPN CLI

To automatically launch AdGuard VPN CLI after rebooting the router, create a file at `…/etc/init.d/adguardvpn`.

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
