---
title: Jak nastavit AdGuard VPN pro Linux na routeru Asuswrt-Merlin
sidebar_position: 4
---

:::info Požadavky na systém

1. AdGuard VPN CLI vyžaduje na disku routeru nebo na externím USB nejméně 22 MB volného místa po instalaci nezbytných souborů.
2. **Firmware Asuswrt-Merlin**: Zkontrolujte, zda je na vašem routeru nainstalován firmware Asuswrt-Merlin.
3. **USB disk**: USB disk naformátovaný v nativním linuxovém souborovém systému (ext2, ext3 nebo ext4). V této příručce projdeme proces formátování.

:::

## 1. Zjistěte IP adresu vašeho routeru

Výchozí IP adresa pro většinu routerů je `192.168.1.1` nebo `192.168.0.1`. Pokud jste IP adresu změnili nebo si nejste jisti, můžete ji zjistit kontrolou konfigurace IP v připojeném zařízení.

### Ve Windows

1. Otevřete příkazový řádek:

   ```bash
   ipconfig
   ```

2. Pod aktivním síťovým připojením vyhledejte položku _Výchozí brána_. Jedná se o IP adresu vašeho routeru.

### V macOS/Linux

1. Otevřete Terminal a spusťte tento příkaz pro Linux:

   ```bash
   ip route | grep default
   ```

   Nebo tento pro macOS:

   ```bash
   route -n get default
   ```

2. Vyhledejte položku _výchozí_. IP adresa vedle ní je IP adresa vašeho routeru.

<!-- comment -->

## 2. Ujistěte se zda jsou na routeru povoleny vlastní skripty SSH a JFFS

Nejprve se ujistěte, že je na routeru povolen přístup SSH. Toto nastavení se obvykle nachází ve webovém rozhraní routeru. K nastavení pravidel směrování se použijí vlastní skripty JFFS.

1. Přihlaste se do webového rozhraní. Obvykle je přístupné prostřednictvím webového prohlížeče na adrese [`http://192.168.1.1`](http://192.168.1.1/). V opačném případě nahraďte [`192.168.1.1`](http://192.168.1.1/) IP adresou vašeho routeru.

2. Přejděte dolů na _Pokročilá nastavení_, _Správa_ → _Systém_.

3. Přejděte na _Služba_, klikněte na _Povolit SSH_ → _LAN_.

4. Vyberte _22_ v poli _Port_ a _Ano_ v poli _Povolit přihlášení heslem_.

5. Přejděte na _Persistentní oddíl JFFS2_ a povolte _Vlastní skripty a konfigurace JFFS_.

6. Klikněte na _Použít_ v dolní části stránky.

<!-- comment -->

## 3. Připojte se k routeru pomocí klienta SSH

Budete potřebovat klienta SSH. Většina systémů Linux a macOS je dodávána s předinstalovaným klientem SSH. V systému Windows můžete použít prostředí PowerShell, integrovaného klienta SSH v systému Windows 10/11 nebo aplikaci třetí strany, například PuTTY.

### Vestavěný klient SSH (Linux, macOS a Windows 10/11)

1. Otevřete Terminal nebo PowerShell.

2. Spusťte příkaz SSH:

   ```bash
   ssh admin@192.168.1.1
   ```

   Nahraďte `192.168.1.1` IP adresou routeru a `admin` uživatelským jménem správce.

3. Pokud se k routeru připojujete přes SSH poprvé, zobrazí se tato zpráva:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Zadejte `yes` a stiskněte Enter.

4. Na výzvu zadejte heslo routeru. Přihlašovací jméno a heslo SSH jsou stejné jako přihlašovací údaje správce.

<!-- comment -->

### PuTTY (Windows starší než 10)

1. Stáhněte a nainstalujte PuTTY z [oficiální stránky](https://www.putty.org/).
2. Otevřete PuTTY.
3. Do pole _Název hostitele (nebo IP adresa)_ zadejte IP adresu vašeho routeru (např. `192.168.1.1`).
4. Ujistěte se, že _Typ připojení_ je nastaven na SSH.
5. Klikněte na _Otevřít_.
6. Když se otevře okno Terminal, zadejte přihlašovací údaje routeru. Přihlašovací jméno a heslo SSH jsou stejné jako přihlašovací údaje správce.

<!-- comment -->

## 4. Nainstalujte Entware pomocí SSH

Po přihlášení do klienta SSH můžete pomocí různých příkazů komunikovat s operačním systémem routeru založeným na Linuxu. Chcete-li pokračovat, musíte nainstalovat aplikaci Entware OPKG Manager. Umožňuje instalovat softwarové balíčky třetích stran, které rozšiřují možnosti routeru. Pokud jej již máte nainstalovaný, přejděte k dalšímu kroku.

Pamatujte, že nemůžete současně používat Optware (zastaralou alternativu) a Entware.

Asus DownloadMaster je založen na Optware, a proto není kompatibilní s Entware. Budete muset odinstalovat DownloadMaster a podívat se na alternativy poskytované Entware.

Po odinstalování se ujistěte, že je smazán adresář "asusware.arm\*" nebo "asusware.\*" na připojeném diskovém oddílu. Jinak nebude Entware pracovat správně. Po odinstalování aplikace DownloadMaster se ujistěte, že je router restartován.

Je třeba připojit disk USB naformátovaný v nativním souborovém systému Linux (ext2, ext3 nebo ext4). Pro formátování disku použijte příkaz amtm. Připojte disk USB k routeru a spusťte amtm pomocí:

```bash
amtm
```

Tato možnost slouží k formátování disku a jeho připojení k routeru:

```bash
fd
```

Projděte procesem formátování a vyberte doporučené možnosti. Všechny soubory z disku USB budou smazány. Aby toto nastavení fungovalo, měl by být disk USB vždy připojen.

Po připojení USB se router restartuje. Chcete-li zahájit proces instalace, nejprve se znovu připojte k routeru prostřednictvím SSH.

Poté spusťte aplikaci amtm jednoduchým spuštěním:

```bash
amtm
```

Menu vám nabídne možnost `ep` pro zahájení instalace Entware.

Pokud používáte firmware starší než 384.15 (nebo 384.13_4 pro RT-AC87U a RT-AC3200), spusťte místo toho instalaci následujícím příkazem.

```bash
entware-setup.sh
```

Pokud skript entware-setup.sh nenajdete, stáhněte a spusťte následující skript pro instalaci Entware:

```bash
wget -O - http://bin.entware.net/armv7sf-k3.2/installer/generic.sh | sh
```

Ukončete amtm stisknutím `e`.

## 5. Nainstalujte AdGuard CLI

Aktualizujte seznamy balíčků:

```bash
opkg update
```

Nainstalujte požadované balíčky:

```bash
opkg install curl ca-certificates
```

Přejděte do složky /opt příkazem `cd /opt` a spusťte instalační skript AdGuardVPN CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Na dotaz "Would you like to link the binary to /usr/local/bin?" odpovězte `y`. Pokud se binární soubor nepodařilo propojit, spusťte tento řádek:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

Importujte certifikát SSL a modul TUN a nastavte alternativní složku pro adresář uživatele. Ve výchozím nastavení se uloží do /tmp a po restartu počítače o svá nastavení přijdete. Spusťte to před každou novou relací.

```bash
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
modprobe tun
```

## 6. Nastavte AdGuard VPN CLI

1. Přihlaste se ke svému účtu

   Chcete-li používat AdGuard VPN pro Linux, potřebujete účet AdGuard.

   Přihlásit se můžete na našich [webových stránkách](https://auth.adguard.com/login.html) nebo v Terminalu.

   Chcete-li se zaregistrovat nebo přihlásit, zadejte:

   ```jsx
   adguardvpn-cli login
   ```

2. Připojte se k VPN

   Vyberte si umístění serveru VPN, které nejlépe vyhovuje vašim potřebám.

   Obecně platí, že čím blíže je server, tím rychlejší je připojení.

   Chcete-li zobrazit dostupná umístění, zadejte:

   ```jsx
   adguardvpn-cli list-locations
   ```

   Chcete-li se připojit k určitému umístění, zadejte:

   ```jsx
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Nahraďte LOCATION_NAME kódem města, země nebo ISO kódem umístění, ke kterému se chcete připojit.

   Pro rychlé připojení zadejte:

   ```jsx
   adguardvpn-cli connect
   ```

   AdGuard VPN vybere nejrychlejší dostupné umístění a zapamatuje si ho pro budoucí rychlá připojení.

   Na dotaz "Chcete nastavit výchozí trasy v režimu TUN?" zadejte `yes`

   AdGuard VPN CLI vytvoří rozhraní tun0 pro tunel VPN.

3. Upravte nastavení

   Získejte seznam všech dostupných příkazů AdGuard VPN a přizpůsobte klienta VPN svým potřebám.

   Chcete-li zobrazit všechny příkazy, zadejte:

   ```jsx
   adguardvpn-cli --help-all
   ```

<!-- comment -->

## 7. Nastavení pravidel brány firewall a automatického spuštění AdGuard VPN

Tímto krokem nakonfigurujete pravidla brány firewall na routeru Asuswrt-Merlin pro směrování provozu skrze AdGuard VPN.

1. Nový skript vytvoříte spuštěním následujícího příkazu:

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

   A zajistěte, aby byl spustitelný:

   ```bash
   chmod a+rx /jffs/scripts/wan-event
   ```

   Pokud máte více rozhraní brX, nezapomeňte je také zahrnout do skriptu a směrovat jejich přenosy. Případně pro tato rozhraní zadejte jiné pravidlo směrování.

   Tento skript zajistí, aby veškerý provoz procházel tunelem VPN. Po restartování nebo opětovném připojení k internetu se AdGuard VPN automaticky připojí k naposledy používanému umístění.

2. Restartujte router a dokončete nastavení.

   Gratulujeme! Nyní máte router zabezpečený pomocí AdGuard VPN.

   Pokud se chcete znovu připojit k routeru pomocí SSH a odeslat do AdGuard VPN nějaké příkazy, nezapomeňte nejprve spustit tuto funkci:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   modprobe tun
   ```
