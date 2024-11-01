---
title: Asuswrt-Merlin yönlendiricide Linux için AdGuard VPN nasıl kurulur
sidebar_position: 4
---

:::info Sistem gereksinimleri

1. AdGuard VPN CLI requires at least 22 MB of free storage space on your router’s disk or external USB after installing necessary packages.
2. **Asuswrt-Merlin donanım yazılımı**: Yönlendiricinizin Asuswrt-Merlin donanım yazılımını çalıştırdığından emin olun.
3. **USB drive**: A USB drive formatted in a native Linux file system (ext2, ext3, or ext4). We will go through the formatting process in this guide.

:::

## 1. Determine your router’s IP address

Çoğu yönlendirici için varsayılan IP adresi `192.168.1.1` veya `192.168.0.1`dir. If you’ve changed the IP address or if you’re unsure, you can find it by checking the IP configuration on a connected device.

### On Windows

1. Komut İstemi'ni açın:

   ```bash
   ipconfig
   ```

2. Look for the _Default Gateway_ under your active network connection. Bu, yönlendiricinizin IP adresidir.

### On Mac/Linux

1. Terminal'i açın ve Linux için şu komutu çalıştırın:

   ```bash
   ip route | grep default
   ```

   Or this one for Mac:

   ```bash
   route -n get default
   ```

2. Look for the _default_ entry. Yanındaki IP adresi ise yönlendiricinizin IP adresidir.

## 2) Make sure SSH and JFFS custom scripts are enabled on the router

Öncelikle, yönlendiricinizde SSH erişiminin etkinleştirildiğinden emin olun. Bu ayar genellikle yönlendiricinin web arayüzünde bulunur. Yönlendirme kurallarını belirlemek için JFFS özel betikler kullanılacaktır.

1. Log in to the web interface. Buna genellikle [`http://192.168.1.1`](http://192.168.1.1/) adresinden bir web tarayıcısı aracılığıyla erişilebilir. Aksi takdirde, [`192.168.1.1`](http://192.168.1.1/) adresini yönlendiricinizin IP adresiyle değiştirin.

2. Scroll down to _Advanced settings_, _Administration_ → _System_.

3. Scroll to _Service_, click _Enable SSH_ → _LAN_.

4. Select _22_ in _Port_ and _Yes_ in _Allow Password Login_.

5. Go up to _Persistent JFFS2 partition_ and enable _JFFS custom scripts and configs_.

6. Click _Apply_ at the bottom of the page.

## 3) Use an SSH client to connect to the router

You’ll need an SSH client. Most Linux and macOS systems come with an SSH client pre-installed. For Windows, you can use PowerShell, the built-in SSH client in Windows 10/11, or a third-party application like PuTTY.

### Built-in SSH client (Linux, macOS, and Windows 10/11)

1. Terminal veya PowerShell'i açın.

2. SSH komutunu çalıştırın:

   ```bash
   ssh admin@192.168.1.1
   ```

   Replace `192.168.1.1` with your router’s IP address and `admin` with your admin username.

3. If this is your first time connecting to the router via SSH, you’ll see a message like this:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   `Evet` yazın ve Enter tuşuna basın.

4. Enter the router’s password when prompted. The SSH login username and password are the same as the admin credentials.

### PuTTY (Windows 10'dan öncesi)

1. PuTTY'yi [resmi siteden](https://www.putty.org/) indirin ve kurun.
2. PuTTY'yi açın.
3. In the _Host Name (or IP address)_ field, enter your router’s IP address (e.g., `192.168.1.1`).
4. Make sure the _Connection type_ is set to SSH.
5. _Aç_ öğesine tıklayın.
6. Terminal penceresi açıldığında, yönlendiricinin kimlik bilgilerini girin. The SSH login username and password are the same as the admin credentials.

## 4) Install Entware using SSH

Once logged into your SSH client, you can use various commands to interact with your router’s Linux-based operating system. To proceed, you will need to install Entware OPKG Manager. Yönlendirici yeteneklerini genişletmek için üçüncü taraf yazılım paketleri yüklemenize olanak tanır. Skip to the next step if you already have it installed.

Note that you cannot use both Optware (outdated alternative) and Entware at the same time.

Asus DownloadMaster, Optware tabanlıdır ve bu nedenle Entware ile uyumlu değildir. DownloadMaster'ı kaldırmanız ve Entware tarafından sağlanan alternatiflere bakmanız gerekecektir.

After uninstalling, make sure that "asusware.arm" or "asusware.\*" dir on the mounted disk partition is deleted. Aksi takdirde, Entware düzgün çalışmaz. DownloadMaster'ı kaldırdıktan sonra yönlendiricinin yeniden başlatıldığından emin olun.

You will need to plug a USB disk that's formatted in a native Linux file system (ext2, ext3 or ext4). Bir diski biçimlendirmek için amtm kullanın. Plug a USB disk into your router, then start amtm with:

```bash
amtm
```

Bir diski biçimlendirmek ve yönlendiriciye bağlamak için bu seçeneği kullanın:

```bash
fd
```

Go through the formatting process and select the recommended options. All files from the USB disk will be deleted. For this setup to work, USB disk should always stay connected.

USB'nizi taktıktan sonra yönlendirici yeniden başlatılır. To start the installation process, first reconnect to your router over SSH.

Ardından amtm uygulamasını çalıştırmak için şu komutu çalıştırın:

```bash
amtm
```

The menu will offer you the option `ep` to initiate the Entware installation.

If you are running a firmware version older than 384.15 (or 384.13_4 for the RT-AC87U and RT-AC3200), then you start the installation by running the following command instead.

```bash
entware-setup.sh
```

If the entware-setup.sh script is not found, download and run the following script to install Entware:

```bash
wget -O - http://bin.entware.net/armv7sf-k3.2/installer/generic.sh | sh
```

`e` tuşuna basarak amtm'den çıkın.

## 5. Install AdGuard VPN CLI

Paket listelerini güncelleyin:

```bash
opkg update
```

Gerekli paketleri yükleyin:

```bash
opkg install curl ca-certificates
```

`cd /opt` komutunu çalıştırarak /opt klasörüne gidin ve AdGuardVPN CLI kurulum betiğini çalıştırın:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

When asked “Would you like to link the binary to /usr/local/bin?“, reply `y`. If failed to link the binary, run this line:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

Import the SSL certificate and the tun module and set an alternative folder for the user directory. Varsayılan olarak, /tmp dizininde saklanır ve yeniden başlatma sonrasında ayarlarınızı kaybedersiniz. Run this before each new session.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. Set up AdGuard VPN CLI

1. Hesabınıza giriş yapın

   To use AdGuard VPN for Linux, you need an AdGuard account.

   You can sign up on our [website](https://auth.adguard.com/login.html) or in the Terminal.

   Kaydolmak veya giriş yapmak için şunu yazın:

   ```jsx
   adguardvpn-cli login
   ```

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

   "TUN modunda varsayılan yönlendirmeleri ayarlamak ister misiniz?" diye sorulduğunda `evet` girin

   AdGuard VPN CLI will create a tun0 interface for VPN tunneling.

3. Adjust your settings

   Get a list of all available AdGuard VPN commands and customize the VPN client to your needs.

   Tüm komutları görüntülemek için şunu yazın:

   ```jsx
   adguardvpn-cli --help-all
   ```

## 7) Set up your firewall rules and auto-launch for AdGuard VPN

Bu adım, trafiği AdGuard VPN üzerinden yönlendirmek için Asuswrt-Merlin yönlendiricideki güvenlik duvarı kurallarını yapılandırır.

1. Aşağıdaki komutu çalıştırarak yeni bir betik oluşturun:

   ```bash
   cat << 'EOF' > /jffs/scripts/wan-event
   #!/bin/sh

   if [ "$2" = "connected" ]; then
       export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
       export HOME=/opt/home/admin
       modprobe tun
       /opt/adguardvpn_cli/adguardvpn-cli connect &
       for ipt in iptables ip6tables; do
           $ipt -D FORWARD -j ADGUARD_FORWARD || true
           $ipt -F ADGUARD_FORWARD || true
           $ipt -X ADGUARD_FORWARD || true
           $ipt -N ADGUARD_FORWARD
           $ipt -I FORWARD -j ADGUARD_FORWARD
           $ipt -A ADGUARD_FORWARD -i br0 -o tun0 -j ACCEPT
       done
       exit 0
   fi
   EOF
   ```

   Ve çalıştırılabilir hâle getirin:

   ```bash
   chmod a+rx /jffs/scripts/wan-event
   ```

   Eğer daha fazla brX arayüzünüz varsa, trafiği yönlendirmek için onları da betiğe dâhil ettiğinizden emin olun. Alternatif olarak, bu arayüzler için farklı bir yönlendirme kuralı belirttiğinizden emin olun.

   Bu betik, tüm trafiğin VPN tünelinden geçmesini sağlar. Yeniden başlattıktan veya internete yeniden bağlandıktan sonra, AdGuard VPN otomatik olarak son kullandığınız konuma bağlanır.

2. Kurulumu tamamlamak için yönlendiricinizi yeniden başlatın.

   Tebrikler! Artık AdGuard VPN ile güvence altına alınmış bir yönlendiriciniz var.

   If you want to SSH into your router again to send any commands to AdGuard VPN, make sure to run this first:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   modprobe tun
   ```
