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

6. Terminal penceresi açıldığında oturum açın. The default username is `root` and the default password is typically empty (just press Enter), but you should have set a password during the initial setup.

<!-- comment -->

## 4. Temel SSH komutları

Once logged in, you can use various commands to interact with your router’s Linux-based operating system.

:::note

OpenWrt 25.12 and later use the `apk` package manager, while OpenWrt 24.10 and earlier use `opkg`. To check your OpenWrt version, run `cat /etc/openwrt_release`.

:::

### OpenWrt 25.12 and later

Update package lists:

```text
apk update
```

Install required packages:

```text
apk add curl kmod-tun ca-certificates
```

### OpenWrt 24.10 and earlier

Update package lists:

```text
opkg update
```

Install required packages:

```text
opkg install curl kmod-tun ca-certificates
```

Run the AdGuard VPN CLI installation script:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Set up AdGuard VPN CLI

1. Log in to your account

   To use AdGuard VPN for Linux, you need an AdGuard account.

   You can sign up or log in on our [website](https://auth.adguardaccount.com/login.html) or in the Terminal.

   To sign up or log in, type:

   ```jsx
   adguardvpn-cli login
   ```

   Note: If failed to link the binary to `/usr/local/bin`, use full file path to run all commands. For example, `/opt/adguardvpn_cli/adguardvpn-cli login`

2. Connect to VPN

   Select a VPN server location that best suits your needs.

   In general, the closer the server is to you, the faster the connection.

   To view available locations, type:

   ```jsx
   adguardvpn-cli list-locations
   ```

   To connect to a specific location, type:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Replace LOCATION_NAME with the city, country, or ISO code of the location you want to connect to.

   For quick connect, type:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN will choose the fastest location available and remember it for future quick connections.

3. Adjust your settings

   Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

   To view all commands, type:

   ```jsx
   adguardvpn-cli --help-all
   ```

   AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

<!-- comment -->

## 6. Set up firewall rules

You can do it in the web interface or in the command line. Steps below describe setup via SSH command line.

1. Add a new unmanaged interface via SSH

   ```shell
   ssh root@router_ip
   uci set network.tun0='interface'
   uci set network.tun0.proto='none'
   uci set network.tun0.device='tun0'
   uci commit network
   /etc/init.d/network reload
   ```

2. Add tun0 to WAN zone

   For traffic to go through VPN, add tun0 to WAN zone.
   The WAN interface which connects to the Internet will typically be in a zone named `wan` or something similar. Check your router’s configuration files or firewall settings to find out which zone is associated with the WAN interface.

   To do so, list the existing firewall zones:

   ```shell
   uci show firewall
   ```

   This will show a config file with all zones listed. Look for a section like `firewall.@zone[1]` or similar where `option name 'wan'` is defined. The number `[1]` could be different depending on your configuration.

   Run this SSH command, replace `zone[1]` with correct `wan` zone identified before:

   ```shell
   uci show firewall | grep "=zone"
   uci add_list firewall.@zone[1].network='tun0'
   uci commit firewall
   /etc/init.d/firewall reload
   ```

   If you want to disable all traffic that is not protected by VPN, run the following command. This way you won’t have an Internet connection at all if VPN disconnects. If you choose not to do this step, your real IP will be exposed if the VPN disconnects.

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

<!-- comment -->

## 7.  Set up automatic launch for AdGuard VPN CLI

To automatically launch AdGuard VPN CLI after rebooting the router, create a file at `…/etc/init.d/adguardvpn`.

Paste this into the file:

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

Run this to grant access to and enable auto-launch:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
