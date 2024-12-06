---
title: Asuswrt-Merlin yönlendiricide Linux için AdGuard VPN nasıl kurulur
sidebar_position: 4
---

:::info Sistem gereksinimleri

1. AdGuard VPN CLI requires at least 22 MB of free storage space on your router’s disk or external USB after installing necessary packages.
2. **Asuswrt-Merlin donanım yazılımı**: Yönlendiricinizin Asuswrt-Merlin donanım yazılımını çalıştırdığından emin olun.
3. **USB belleği**: Yerel bir Linux dosya sisteminde (ext2, ext3 veya ext4) biçimlendirilmiş bir USB belleği. Bu kılavuzda biçimlendirme sürecini ele alacağız.

:::

## 1. Yönlendiricinin IP adresini belirleme

Çoğu yönlendirici için varsayılan IP adresi `192.168.1.1` veya `192.168.0.1`dir. IP adresini değiştirdiyseniz veya emin değilseniz, bağlı bir cihazdaki IP yapılandırmasını kontrol ederek bulabilirsiniz.

### On Windows

1. Komut İstemi'ni açın:

   ```bash
   ipconfig
   ```

2. Etkin ağ bağlantınızın altında _Varsayılan Ağ Geçidi_ öğesini arayın. Bu, yönlendiricinizin IP adresidir.

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

<!-- comment -->

## 2. Make sure SSH and JFFS custom scripts are enabled on the router

First, make sure that SSH access is enabled on your router. This setting is usually found in the router’s web interface. Yönlendirme kurallarını belirlemek için JFFS özel betikler kullanılacaktır.

1. Log in to the web interface. Buna genellikle [`http://192.168.1.1`](http://192.168.1.1/) adresinden bir web tarayıcısı aracılığıyla erişilebilir. Aksi takdirde, [`192.168.1.1`](http://192.168.1.1/) adresini yönlendiricinizin IP adresiyle değiştirin.

2. Aşağı kaydırarak _Gelişmiş ayarlar_, _Yönetim_ → _Sistem_ öğesine gidin.

3. Scroll to _Service_, click _Enable SSH_ → _LAN_.

4. Select _22_ in _Port_ and _Yes_ in _Allow Password Login_.

5. Go up to _Persistent JFFS2 partition_ and enable _JFFS custom scripts and configs_.

6. Click _Apply_ at the bottom of the page.

<!-- comment -->

## 3. Use an SSH client to connect to the router

You’ll need an SSH client. Çoğu Linux ve macOS sistemi önceden yüklenmiş bir SSH istemcisiyle birlikte gelir. Windows için, Windows 10/11'deki yerleşik SSH istemcisi olan PowerShell'i veya PuTTY gibi üçüncü taraf bir uygulamayı kullanabilirsiniz.

### Yerleşik SSH istemcisi (Linux, macOS ve Windows 10/11)

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

4. İstendiğinde yönlendiricinin parolasını girin. The SSH login username and password are the same as the admin credentials.

<!-- comment -->

### PuTTY (Windows 10'dan öncesi)

1. PuTTY'yi [resmi siteden](https://www.putty.org/) indirin ve kurun.
2. PuTTY'yi açın.
3. Ana Makine Adı (veya IP adresi)\* alanına yönlendiricinizin IP adresini girin (örneğin, `192.168.1.1`).
4. Make sure the _Connection type_ is set to SSH.
5. _Aç_ öğesine tıklayın.
6. Terminal penceresi açıldığında, yönlendiricinin kimlik bilgilerini girin. The SSH login username and password are the same as the admin credentials.

<!-- comment -->

## 4. Install Entware using SSH

Once logged into your SSH client, you can use various commands to interact with your router’s Linux-based operating system. Devam etmek için Entware OPKG Manager'ı yüklemeniz gerekir. Yönlendirici yeteneklerini genişletmek için üçüncü taraf yazılım paketleri yüklemenize olanak tanır. Eğer zaten yüklüyse, bir sonraki adıma geçin.

Hem Optware (eski alternatif) hem de Entware'i aynı anda kullanamayacağınızı unutmayın.

Asus DownloadMaster, Optware tabanlıdır ve bu nedenle Entware ile uyumlu değildir. DownloadMaster'ı kaldırmanız ve Entware tarafından sağlanan alternatiflere bakmanız gerekir.

Kaldırdıktan sonra, bağlı disk bölümündeki "asusware.arm" veya "asusware.\*" dizininin silindiğinden emin olun. Aksi takdirde, Entware düzgün çalışmaz. DownloadMaster'ı kaldırdıktan sonra yönlendiricinin yeniden başlatıldığından emin olun.

You will need to plug a USB disk that's formatted in a native Linux file system (ext2, ext3 or ext4). Bir diski biçimlendirmek için amtm kullanın. Plug a USB disk into your router, then start amtm with:

```bash
amtm
```

Bir diski biçimlendirmek ve yönlendiriciye bağlamak için bu seçeneği kullanın:

```bash
fd
```

Go through the formatting process and select the recommended options. USB diskten tüm dosyalar kaldırılacaktır. For this setup to work, USB disk should always stay connected.

USB'nizi taktıktan sonra yönlendirici yeniden başlatılır. Yükleme işlemini başlatmak için önce SSH üzerinden yönlendiricinize yeniden bağlanın.

Ardından amtm uygulamasını çalıştırmak için şu komutu çalıştırın:

```bash
amtm
```

Menü size Entware yüklemesini başlatmak için `ep` seçeneğini sunar.

If you are running a firmware version older than 384.15 (or 384.13_4 for the RT-AC87U and RT-AC3200), then you start the installation by running the following command instead.

```bash
entware-setup.sh
```

entware-setup.sh betiği bulunamazsa, Entware'i yüklemek için aşağıdaki betiği indirin ve çalıştırın:

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

SSL sertifikasını ve tun modülünü içe aktarın ve kullanıcı dizini için alternatif bir klasör ayarlayın. Varsayılan olarak, /tmp dizininde saklanır ve yeniden başlatma sonrasında ayarlarınızı kaybedersiniz. Run this before each new session.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. Set up AdGuard VPN CLI

1. Log in to your account

   To use AdGuard VPN for Linux, you need an AdGuard account.

   You can sign up on our [website](https://auth.adguard.com/login.html) or in the Terminal.

   To sign up or log in, type:

   ```jsx
   adguardvpn-cli login
   ```

2. Connect to VPN

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

   AdGuard VPN CLI, VPN tünellemesi için bir tun0 arayüzü oluşturur.

3. Adjust your settings

   Mevcut tüm AdGuard VPN komutlarının bir listesini alın ve VPN istemcisini ihtiyaçlarınıza göre özelleştirin.

   Tüm komutları görüntülemek için şunu yazın:

   ```jsx
   adguardvpn-cli --help-all
   ```

<!-- comment -->

## 7. Set up your firewall rules and auto-launch for AdGuard VPN

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
