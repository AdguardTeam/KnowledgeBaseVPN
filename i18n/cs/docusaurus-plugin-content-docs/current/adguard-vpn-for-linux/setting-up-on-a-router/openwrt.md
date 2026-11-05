---
title: Jak nastavit AdGuard VPN pro Linux na routeru OpenWRT
sidebar_position: 3
---

:::info Požadavky na systém

AdGuard VPN pro Linux, známý také jako AdGuard VPN CLI, vyžaduje po instalaci potřebných balíčků alespoň 22 MB volného místa v integrované paměti routeru nebo na externím USB.

:::

## 1. Ujistěte, že je na routeru povoleno SSH

Toto nastavení se obvykle nachází ve webovém rozhraní routeru.

Pro OpenWRT:

1. Přihlaste se do webového rozhraní. Obvykle je přístupné prostřednictvím webového prohlížeče na adrese [`http://192.168.1.1`](http://192.168.1.1/).

2. Přejděte na _Systém_ → _Administrace_.

3. Ujistěte se, že je povolen _přístup SSH_.

Ve výchozím nastavení OpenWrt umožňuje SSH přístup k routeru.

## 2. Zjistěte IP adresu vašeho routeru

Výchozí IP adresa pro většinu routerů je `192.168.1.1` nebo `192.168.0.1`. Pokud jste IP adresu změnili nebo si nejste jisti, můžete ji zjistit kontrolou konfigurace IP v připojeném zařízení.

### Ve Windows

1. Otevřete příkazový řádek:

   ```text
   ipconfig
   ```

2. Pod aktivním síťovým připojením vyhledejte položku _Výchozí brána_. Jedná se o IP adresu vašeho routeru.

### V macOS a Linux

1. Otevřete Terminal a spusťte tento příkaz pro Linux:

   ```text
   ip route | grep default
   ```

   Nebo tento pro macOS:

   ```text
   route -n get default
   ```

2. Vyhledejte položku _výchozí_. IP adresa vedle ní je IP adresa vašeho routeru.

<!-- comment -->

## 3. Připojte se k routeru pomocí klienta SSH

Většina systémů Linux a macOS je dodávána s předinstalovaným klientem SSH. V systému Windows můžete použít prostředí PowerShell, integrovaného klienta SSH v systému Windows 10/11 nebo aplikaci třetí strany, například PuTTY.

### Vestavěný klient SSH (Linux, macOS a Windows 10/11)

1. Otevřete Terminal nebo PowerShell.

2. Spusťte příkaz SSH:

   ```text
   ssh root@192.168.1.1
   ```

   Nahraďte `192.168.1.1` IP adresou vašeho routeru.

3. Pokud se k routeru připojujete přes SSH poprvé, zobrazí se tato zpráva:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256: ...
   Are you sure you want to continue connecting? (Yes/No/[Fingerprint])
   ```

   Zadejte `yes` a stiskněte Enter.

4. Na výzvu zadejte heslo routeru. Výchozí heslo pro OpenWrt je obvykle prázdné (stačí stisknout Enter), ale heslo byste měli nastavit během počátečního nastavení.

<!-- comment -->

### PuTTY (Windows)

1. Stáhněte a nainstalujte PuTTY z [oficiální stránky](https://www.putty.org/).

2. Otevřete PuTTY.

3. Do pole _Název hostitele (nebo IP adresa)_ zadejte IP adresu vašeho routeru (např. `192.168.1.1`).

4. Ujistěte se, že _Typ připojení_ je nastaven na SSH.

5. Klikněte na _Otevřít_.

6. Po otevření okna Terminalu se přihlaste. The default username is `root` and the default password is typically empty (just press Enter), but you should have set a password during the initial setup.

<!-- comment -->

## 4. Základní příkazy SSH

Po přihlášení můžete pomocí různých příkazů komunikovat s operačním systémem routeru založeným na Linuxu.

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
