---
title: Keenetic yönlendiricide Linux için AdGuard VPN nasıl kurulur
sidebar_position: 2
---

:::info Sistem gereksinimleri

AdGuard VPN CLI olarak da bilinen Linux için AdGuard VPN, diğer gerekli paketler yüklendikten sonra yönlendiricinizin dâhili belleğinde veya harici USB'sinde en az 22 MB boş depolama alanı gerektirir.

:::

## 1. Make sure that SSH is enabled on your router

The SSH client is used to send commands to your router from your computer.

To run the SSH server, the _SSH server_ system component must be installed in the Keenetic. You can do this on the _General system settings_ page in the _Component options_ section by clicking the _Component options_ button. SSH sunucusunu arayın ve yükleyin. Bu, Keenetic işletim sisteminizi günceller.

Once the component is installed, the SSH server will be turned on automatically.

To see how to set up SSH server to have optimal security settings, visit [the Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360000387189-SSH-remote-access-to-the-Keenetic-command-line).

## 2. Yönlendiricinin IP adresini belirle

Çoğu yönlendirici için varsayılan IP adresi `192.168.1.1` veya `192.168.0.1`dir. IP adresini değiştirdiyseniz veya emin değilseniz, bağlı bir cihazdaki IP yapılandırmasını kontrol ederek bulabilirsiniz.

### On Windows

1. Komut İstemi'ni açın:

   ```bash
   ipconfig
   ```

2. Look for the _Default Gateway_ under your active network connection. Bu, yönlendiricinizin IP adresidir.

### On macOS and Linux

1. Linux'ta Terminal'i açın ve şu komutu çalıştırın:

   ```bash
   ip route | grep default
   ```

   Or this on Mac:

   ```text
   route -n get default
   ```

2. _Varsayılan_ girişi arayın. Yanındaki IP adresi ise yönlendiricinizin IP adresidir.

<!-- comment -->

## 3. Yönlendiriciye bağlanmak için bir SSH istemcisi kullanma

You’ll need an SSH client. Çoğu Linux ve macOS sistemi önceden yüklenmiş bir SSH istemcisiyle birlikte gelir. Windows için, Windows 10/11'deki yerleşik SSH istemcisi olan PowerShell'i veya PuTTY gibi üçüncü taraf bir uygulamayı kullanabilirsiniz.

### Yerleşik SSH istemcisi (Linux, macOS ve Windows 10/11)

1. Terminal veya PowerShell'i açın.

2. SSH komutunu çalıştırın:

   ```bash
   ssh admin@192.168.1.1
   ```

   `192.168.1.1` kısmını yönlendiricinizin IP adresiyle değiştirin.

3. If this is your first time connecting to the router via SSH, you’ll see a message like this:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   `Evet` yazın ve Enter tuşuna basın.

4. İstendiğinde yönlendiricinin parolasını girin. The default username is `root` and the default password is `keenetic`.

<!-- comment -->

### PuTTY (Windows 8 ve öncesi)

1. PuTTY'yi [resmi siteden](https://www.putty.org/) indirin ve kurun.

2. PuTTY'yi açın.

3. Ana Makine Adı (veya IP adresi)\* alanına yönlendiricinizin IP adresini girin (örneğin, `192.168.1.1`)

4. _Bağlantı türü_ öğesinin SSH olarak ayarlandığından emin olun.

5. _Aç_ öğesine tıklayın.

6. Terminal penceresi açıldığında oturum açın. The default username is `root` and the default password is `keenetic`.

Once logged in, you can use various commands to interact with your router’s Linux-based operating system.

## 4. Install OPKG Entware

USB portu bulunan Keenetic modellerinde (Keenetic 4G hariç) OPKG paket yöneticisini kullanabilirsiniz. Yönlendiricilerin yeteneklerini genişletmek için üçüncü taraf yazılım paketleri yüklemenize olanak tanır.

Starting with version 3.7, for some Keenetic models, it is possible to write OPKG Entware to the [UBIFS](https://en.wikipedia.org/wiki/UBIFS) partition of the router’s NAND flash memory, i.e. to the built-in memory of the router. Entware depo paket sistemini bir USB belleğine veya yönlendiricinin dâhili belleğine yüklemek için aşağıdaki adımları izleyin.

### USB belleğine OPKG Entware nasıl yüklenir

USB flaş bellekleri destekleyen USB portlarına sahip Keenetic modellerine OPKG paketlerini yüklemek mümkündür. Bunlar: KN-1410, KN-1710/1711, KN-1010/1011, KN-2510, KN-2410, KN-1810, KN-1910, KN-2310, KN-2010, KN-2110, KN-2610, KN-2710’dur.

Ayrıntılı talimatlar için [resmi Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021214160-Installing-the-Entware-repository-package-system-on-a-USB-drive) adresini ziyaret edin.

### Yönlendiricinin dâhili hafızasına OPKG Entware nasıl yüklenir

Bu yöntem şu modellerle çalışır: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 ve KeeneticOS sürüm 3.7 ve üzeri.

Ayrıntılı talimatlar için [resmi Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory) adresini ziyaret edin.

Yönlendiriciniz paketlerin dâhili belleğe yüklenmesini desteklemiyorsa, paketleri bir USB belleğe yüklemek için talimatları izleyin.

## 5. Install AdGuard VPN CLI

SSH istemcinizde, AdGuard VPN CLI için gerekli paketleri yüklemek için aşağıdaki kodu çalıştırın:

```bash
opkg install curl sudo ca-certificates
```

`/cd opt` komutunu çalıştırarak `/opt` klasörüne gidin ve AdGuard VPN CLI yükleme betiğini çalıştırın:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

When asked “Would you like to link the binary to `/usr/local/bin?`“, reply `n` and run this line:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. Set up AdGuard VPN CLI

1. Hesabınıza giriş yapın

   Linux için AdGuard VPN'i kullanmak için bir AdGuard hesabına ihtiyacınız vardır. [Sitemizden](https://auth.adguard.com/login.html) veya Terminal'den kaydolabilir veya giriş yapabilirsiniz.

   Before logging in, go to Terminal and make sure you are in the right shell interface. Eğer aşağıdaki metni görebiliyorsanız:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   THIS SOFTWARE IS A SUBJECT OF KEENETIC LIMITED END-USER LICENCE AGREEMENT. BY USING IT YOU AGREE ON TERMS AND CONDITIONS HEREOF. FOR MORE INFORMATION PLEASE CHECK https://keenetic.com/legal
   ```

   Run this command to exit into the shell needed for the next steps:

   ```bash
   exec sh
   ```

   Aşağıdaki metni görürseniz, kuruluma devam edebilirsiniz:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   Kaydolmak veya giriş yapmak için şunu yazın:

   ```bash
   adguardvpn-cli login
   ```

2. VPN'e bağlanın

   For Keenetic routers, be sure to import the SSL certificate and select a folder for the user directory by running this command before connecting:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   ```

   Bu işlem her oturumdan önce yapılmalıdır.

   İhtiyaçlarınıza en uygun VPN sunucu konumunu seçin.

   Genel olarak, sunucu size ne kadar yakınsa bağlantı o kadar hızlı olur.

   Mevcut konumları görüntülemek için şunu yazın:

   ```bash
   adguardvpn-cli list-locations
   ```

   Belirli bir konuma bağlanmak için şunu yazın:

   ```bash
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   `LOCATION_NAME` yerine bağlanmak istediğiniz konumun şehri, ülkesi veya ISO koduyla değiştirin.

   Hızlı bağlantı için şunu yazın:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN en düşük ping değerine sahip konumu seçer ve gelecekteki hızlı bağlantılar için bunu hatırlar.

3. Ayarlarınızı düzenleyin

   Mevcut tüm AdGuard VPN komutlarının bir listesini alın ve VPN istemcisini ihtiyaçlarınıza göre özelleştirin.

   Tüm komutları görüntülemek için şunu yazın:

   ```bash
   adguardvpn-cli --help-all
   ```

4. "TUN modunda varsayılan yönlendirmeleri ayarlamak ister misiniz?" diye sorulduğunda `evet` girin

AdGuard VPN CLI, VPN tünellemesi için bir tun0 arayüzü oluşturur.

## 7. Set up firewall rules

Bu adım, trafiği AdGuard VPN üzerinden yönlendirmek için Keenetic yönlendiricide güvenlik duvarı kurallarını yapılandırmak için tasarlanmıştır.

1. **Install `iptables` by running this command via SSH:**

   ```bash
   opkg install iptables
   ```

   Bu satır, Linux sistemlerinde ağ paket filtreleme kurallarını yönetmek için bir araç olan `iptables` paketini yükler.

2. **Create a new shell script by running the following command:**

   ```bash

   cat << 'EOF' > /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   #!/opt/bin/sh
   for ipt in iptables ip6tables; do
       $ipt -D FORWARD -j ADGUARD_FORWARD || true
       $ipt -F ADGUARD_FORWARD || true
       $ipt -X ADGUARD_FORWARD || true
       $ipt -N ADGUARD_FORWARD
       $ipt -I FORWARD -j ADGUARD_FORWARD
       $ipt -A ADGUARD_FORWARD -i br0 -o tun0 -j ACCEPT
   done
   EOF
   ```

   Ve çalıştırılabilir hâle getirin:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

   Eğer daha fazla brX arayüzünüz varsa, trafiği yönlendirmek için onları da betiğe dâhil ettiğinizden emin olun. Alternatif olarak, bu arayüzler için farklı bir yönlendirme kuralı belirttiğinizden emin olun.

This will create a new shell script named `001-adguardvpn.sh` in the `/opt/etc/ndm/netfilter.d/` directory, which is where network-related scripts are typically stored on a Keenetic router.

Betik, LAN'ınızdan (`br0`) gelen trafiğin AdGuard VPN arayüzü (`tun0`) üzerinden yönlendirilmesini sağlamak için özel bir güvenlik duvarı kuralı oluşturur. Öncelikle bu yapılandırmayla ilgili önceki kuralları temizler, ardından trafiği uygun şekilde yönlendirecek yeni kurallar oluşturur.

## 8. AdGuard VPN CLI için otomatik başlatmayı ayarlama

Aşağıdaki betik, WAN arayüzü kullanılabilir olduğunda (örneğin, bir yeniden başlatma veya internete yeniden bağlanma sonrası) Keenetic yönlendiricinizde AdGuard VPN kullanarak otomatik olarak bir VPN bağlantısı kurmak için tasarlanmıştır.

Aşağıdaki komutu çalıştırın:

```bash
cat << E0F > /opt/etc/ndm/wan.d/001-adguardvpn.sh
#!/opt/bin/sh
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
/opt/adguardvpn_cli/adguardvpn-cli connect &
exit 0
E0F
```

Ve çalıştırılabilir hâle getirin:

```bash
chmod +x /opt/etc/ndm/wan.d/001-adguardvpn.sh
```

`001-adguardvpn.sh` adlı betik `/opt/etc/ndm/wan.d/` dosyasına kaydedilecektir.

İnternete bağlanıldığında AdGuard VPN'i başlatır.

Kurulumu tamamlamak için yönlendiricinizi yeniden başlatın.

Tebrikler! Artık AdGuard VPN ile güvence altına alınmış bir yönlendiriciniz var.
