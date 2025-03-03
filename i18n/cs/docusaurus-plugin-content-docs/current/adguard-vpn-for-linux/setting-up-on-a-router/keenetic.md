---
title: Jak nastavit AdGuard VPN pro Linux na routeru Keenetic
sidebar_position: 2
---

:::info Požadavky na systém

AdGuard VPN pro Linux, známý také jako AdGuard VPN CLI, vyžaduje po instalaci potřebných balíčků alespoň 22 MB volného místa v integrované paměti routeru nebo na externím USB.

:::

## 1. Ujistěte, že je na routeru povoleno SSH

Klient SSH slouží k odesílání příkazů do routeru z počítače.

Pro spuštění serveru SSH musí být v systému Keenetic nainstalována systémová komponenta _SSH server_. To můžete provést na stránce _Obecná nastavení systému_ v části _Možnosti komponenty_ kliknutím na tlačítko _Možnosti komponenty_. Vyhledejte server SSH a nainstalujte jej. Tím se aktualizuje operační systém Keenetic.

Po instalaci komponenty se automaticky zapne server SSH.

Chcete-li zjistit, jak nastavit optimální zabezpečení serveru SSH, navštivte [Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360000387189-SSH-remote-access-to-the-Keenetic-command-line).

## 2. Zjistěte IP adresu vašeho routeru

Výchozí IP adresa pro většinu routerů je `192.168.1.1` nebo `192.168.0.1`. Pokud jste IP adresu změnili nebo si nejste jisti, můžete ji zjistit kontrolou konfigurace IP v připojeném zařízení.

### Ve Windows

1. Otevřete příkazový řádek:

   ```bash
   ipconfig
   ```

2. Pod aktivním síťovým připojením vyhledejte položku _Výchozí brána_. Jedná se o IP adresu vašeho routeru.

### V macOS a Linux

1. V systému Linux otevřete Terminal a spusťte tento příkaz:

   ```bash
   ip route | grep default
   ```

   Nebo tento pro macOS:

   ```text
   route -n get default
   ```

2. Vyhledejte položku _výchozí_. IP adresa vedle ní je IP adresa vašeho routeru.

<!-- comment -->

## 3. Připojte se k routeru pomocí klienta SSH

Budete potřebovat klienta SSH. Většina systémů Linux a macOS je dodávána s předinstalovaným klientem SSH. V systému Windows můžete použít prostředí PowerShell, integrovaného klienta SSH v systému Windows 10/11 nebo aplikaci třetí strany, například PuTTY.

### Vestavěný klient SSH (Linux, macOS a Windows 10/11)

1. Otevřete Terminal nebo PowerShell.

2. Spusťte příkaz SSH:

   ```bash
   ssh admin@192.168.1.1
   ```

   Nahraďte `192.168.1.1` IP adresou vašeho routeru.

3. Pokud se k routeru připojujete přes SSH poprvé, zobrazí se tato zpráva:

   ```text
   The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.
   ECDSA key fingerprint is SHA256:...
   Are you sure you want to continue connecting (yes/no/[fingerprint])?
   ```

   Zadejte `yes` a stiskněte Enter.

4. Na výzvu zadejte heslo routeru. Výchozí uživatelské jméno je `root` a výchozí heslo je `keenetic`.

<!-- comment -->

### PuTTY (Windows 8 a starší)

1. Stáhněte a nainstalujte PuTTY z [oficiální stránky](https://www.putty.org/).

2. Otevřete PuTTY.

3. Do pole _Název hostitele (nebo IP adresa)_ zadejte IP adresu vašeho routeru (např. `192.168.1.1`)

4. Ujistěte se, že _Typ připojení_ je nastaven na SSH.

5. Klikněte na _Otevřít_.

6. Po otevření okna Terminalu se přihlaste. Výchozí uživatelské jméno je `root` a výchozí heslo je `keenetic`.

Po přihlášení můžete pomocí různých příkazů komunikovat s operačním systémem routeru založeným na Linuxu.

## 4. Nainstalujte OPKG Entware

V modelech Keenetic vybavených portem USB (kromě Keenetic 4G) můžete použít správce balíčků OPKG. Umožňuje instalovat softwarové balíčky třetích stran, které rozšiřují možnosti routeru.

Od verze 3.7 je u některých modelů Keenetic možné zapisovat OPKG Entware do oddílu [UBIFS](https://en.wikipedia.org/wiki/UBIFS) paměti NAND flash routeru, tj. do integrované paměti routeru. Podle následujících kroků nainstalujte systém balíčků repozitáře Entware na jednotku USB nebo do interní paměti směrovače.

### Jak nainstalovat OPKG Entware na jednotku USB

Na modely Keenetic s porty USB, které podporují USB flash disky, je možné nainstalovat balíčky OPKG. Jsou to: KN-1010/1011, KN-1410, KN-1710/1711, KN-1810, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710.

Podrobné pokyny najdete na [oficiální stránce Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021214160-Installing-the-Entware-repository-package-system-on-a-USB-drive).

### Jak nainstalovat OPKG Entware do vnitřní paměti routeru

Tato metoda funguje u následujících modelů: KN-1010/1011, KN-1810/1811, KN-1910, KN-2010, KN-2110, KN-2310, KN-2410, KN-2510, KN-2610, KN-2710, KN-3810, KN-3610 s KeeneticOS verze 3.7 a novější.

Podrobné pokyny najdete na [oficiální stránce Keenetic Wiki](https://help.keenetic.com/hc/en-us/articles/360021888880-Installing-OPKG-Entware-in-the-router-s-internal-memory).

Pokud váš router nepodporuje instalaci balíčků do interní paměti, postupujte podle pokynů pro instalaci balíčků na jednotku USB.

## 5. Nainstalujte AdGuard CLI

V klientovi SSH spusťte následující kód pro instalaci balíčků potřebných pro AdGuard VPN CLI:

```bash
opkg install curl sudo ca-certificates
```

Přejděte do složky `/opt` zadáním `cd /opt` a spusťte instalační skript AdGuard VPN CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

Na dotaz “Would you like to link the binary to /usr/local/bin?“ odpovězte `n` a spusťte tento řádek:

```bash
ln -s /opt/adguardvpn_cli/adguardvpn-cli /opt/bin
```

## 6. Nastavte AdGuard VPN CLI

1. Přihlaste se ke svému účtu

   Chcete-li používat AdGuard VPN pro Linux, potřebujete účet AdGuard. Přihlásit nebo zaregistrovat se můžete na našich [webových stránkách](https://auth.adguard.com/login.html) nebo v Terminalu.

   Před přihlášením přejděte do Terminalu a ujistěte se, že jste ve správném rozhraní shellu. Pokud vidíte následující text:

   ```text
   KeeneticOS version 4.01.C.7.0-1, copyright (c) 2010-2024 Keenetic Ltd.

   THIS SOFTWARE IS A SUBJECT OF KEENETIC LIMITED END-USER LICENCE AGREEMENT. BY USING IT YOU AGREE ON TERMS AND CONDITIONS HEREOF. FOR MORE INFORMATION PLEASE CHECK https://keenetic.com/legal
   ```

   Spuštěním tohoto příkazu přejdete do shellu potřebného pro další kroky:

   ```bash
   exec sh
   ```

   Pokud se zobrazí následující text, můžete pokračovat v nastavení:

   ```bash
   BusyBox v1.36.1 (2024-08-08 16:11:23 UTC) built-in shell (ash)

   / #
   ```

   Chcete-li se zaregistrovat nebo přihlásit, zadejte:

   ```bash
   adguardvpn-cli login
   ```

2. Připojte se k VPN

   U routerů Keenetic nezapomeňte před připojením importovat certifikát SSL a vybrat složku pro uživatelský adresář spuštěním tohoto příkazu:

   ```bash
   export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
   export HOME=/opt/home/admin
   ```

   To je třeba provést před každou relací.

   Vyberte si umístění serveru VPN, které nejlépe vyhovuje vašim potřebám.

   Obecně platí, že čím blíže je server, tím rychlejší je připojení.

   Chcete-li zobrazit dostupná umístění, zadejte:

   ```bash
   adguardvpn-cli list-locations
   ```

   Chcete-li se připojit k určitému umístění, zadejte:

   ```bash
   adguardvpn-cli connect -l LOCATION_NAME
   ```

   Nahraďte LOCATION_NAME kódem města, země nebo ISO kódem umístění, ke kterému se chcete připojit.

   Pro rychlé připojení zadejte:

   ```bash
   adguardvpn-cli connect
   ```

   AdGuard VPN vybere umístění s nejnižší odezvou a zapamatuje si ho pro budoucí rychlá připojení.

3. Upravte nastavení

   Získejte seznam všech dostupných příkazů AdGuard VPN a přizpůsobte klienta VPN svým potřebám.

   Chcete-li zobrazit všechny příkazy, zadejte:

   ```bash
   adguardvpn-cli --help-all
   ```

4. Na dotaz "Chcete nastavit výchozí trasy v režimu TUN?" zadejte `yes`

AdGuard VPN CLI vytvoří rozhraní tun0 pro tunel VPN.

## 7. Nastavte pravidla brány firewall pro aplikace

Tento krok slouží ke konfiguraci pravidel brány firewall na routeru Keenetic pro směrování provozu přes AdGuard VPN.

1. **Nainstalujte `iptables` spuštěním tohoto příkazu přes SSH:**

   ```bash
   opkg install iptables
   ```

   Tento řádek nainstaluje balíček `iptables` což je nástroj pro správu pravidel filtrování síťových paketů v systémech Linux.

2. **Nový shell skript vytvoříte spuštěním následujícího příkazu:**

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

   A zajistěte, aby byl spustitelný:

   ```bash
   chmod +x /opt/etc/ndm/netfilter.d/001-adguardvpn.sh
   ```

   Pokud máte více rozhraní brX, nezapomeňte je také zahrnout do skriptu a směrovat jejich přenosy. Případně pro tato rozhraní zadejte jiné pravidlo směrování.

Tím se vytvoří nový shell skript s názvem `001-adguardvpn.sh` v adresáři `/opt/etc/ndm/netfilter.d/` , kde jsou obvykle uloženy skripty související se sítí v routeru Keenetic.

Skript vytvoří vlastní pravidlo brány firewall, které zajistí, aby byl provoz z vaší sítě LAN (`br0`) směrován přes rozhraní AdGuard VPN (`tun0`). Nejprve vyčistí všechna předchozí pravidla související s touto konfigurací a poté nastaví nová pravidla pro vhodné směrování přenosů.

## 8. Nastavte automatické spouštění pro AdGuard VPN CLI

Následující skript je určen k automatickému vytvoření připojení VPN pomocí AdGuard VPN na routeru Keenetic, jakmile je rozhraní WAN k dispozici (např. po restartu nebo opětovném připojení k Internetu).

Spusťte následující příkaz:

```bash
cat << E0F > /opt/etc/ndm/wan.d/001-adguardvpn.sh
#!/opt/bin/sh
export SSL_CERT_FILE=/opt/etc/ssl/certs/ca-certificates.crt
export HOME=/opt/home/admin
/opt/adguardvpn_cli/adguardvpn-cli connect &
exit 0
E0F
```

A zajistěte, aby byl spustitelný:

```bash
chmod +x /opt/etc/ndm/wan.d/001-adguardvpn.sh
```

Skript s názvem `001-adguardvpn.sh` bude uložen do souboru `/opt/etc/ndm/wan.d/`.

Po připojení k Internetu se spustí AdGuard VPN.

Restartujte router a dokončete nastavení.

Gratulujeme! Nyní máte router zabezpečený pomocí AdGuard VPN.
