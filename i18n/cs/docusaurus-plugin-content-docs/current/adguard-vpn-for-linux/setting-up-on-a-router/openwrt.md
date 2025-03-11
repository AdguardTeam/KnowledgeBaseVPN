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

6. Po otevření okna Terminalu se přihlaste. Výchozí uživatelské jméno je `root` a výchozí heslo je `keenetic`.

<!-- comment -->

## 4. Základní příkazy SSH

Po přihlášení můžete pomocí různých příkazů komunikovat s operačním systémem routeru založeným na Linuxu.

Aktualizace seznamu balíčků (OpenWrt):

```text
opkg update
```

Nainstalujte požadované balíčky:

```text
opkg install curl kmod-tun ca-certificates
```

Spusťte instalační skript AdGuard VPN CLI:

```text
curl -fsSL https://raw.githubusercontent.com/AdguardTeam/AdGuardVPNCLI/master/scripts/release/install.sh | sh -s -- -v
```

## 5. Nastavte AdGuard VPN CLI

1. Přihlaste se ke svému účtu

 Chcete-li používat AdGuard VPN pro Linux, potřebujete účet AdGuard.

 Přihlásit nebo zaregistrovat se můžete na našich [webových stránkách](https://auth.adguard.com/login.html) nebo v Terminalu.

 Chcete-li se zaregistrovat nebo přihlásit, zadejte:

 ```jsx
 adguardvpn-cli login
 ```

 Poznámka: Pokud se nepodařilo propojit binární soubor s `/usr/local/bin`, použijte pro spuštění všech příkazů úplnou cestu k souboru. Např. `/opt/adguardvpn_cli/adguardvpn-cli login`

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

3. Upravte nastavení

 Získejte seznam všech dostupných příkazů AdGuard VPN a přizpůsobte klienta VPN svým potřebám.

 Chcete-li zobrazit všechny příkazy, zadejte:

 ```jsx
 adguardvpn-cli --help-all
 ```

 AdGuard VPN CLI vytvoří rozhraní tun0 pro tunel VPN.

<!-- comment -->

## 6. Nastavte pravidla brány firewall pro aplikace

Můžete to provést ve webovém rozhraní nebo v příkazovém řádku. Níže uvedené kroky popisují nastavení pomocí příkazového řádku SSH.

1. Přidání nového nespravovaného rozhraní přes SSH

 ```shell
 ssh admin@router_ip
 uci set network.tun0='interface'
 uci set network.tun0.proto='none'
 uci set network.tun0.device='tun0'
 uci commit network
 /etc/init.d/network reload
 ```

2. Přidání tun0 do zóny WAN

 Pro přenosy přes VPN přidejte tun0 do zóny WAN.
 Rozhraní WAN, které se připojuje k Internetu, se obvykle nachází v zóně s názvem `wan` nebo podobně. Zkontrolujte konfigurační soubory routeru nebo nastavení brány firewall a zjistěte, která zóna je přiřazena k rozhraní WAN.

 Za tímto účelem vytvořte seznam stávajících zón brány firewall:

 ```shell
 uci show firewall
 ```

 Zobrazí se konfigurační soubor se seznamem všech zón. Hledejte sekci jako `firewall.@zone[1]` nebo podobnou, kde je definován `název volby 'wan'`. Číslo `[1]` se může lišit v závislosti na konfiguraci.

 Spusťte tento příkaz SSH a nahraďte `zone[1]` správnou zónou `wan`, která byla identifikována dříve:

 ```shell
 uci show firewall | grep "=zone"
 uci add_list firewall.@zone[1].network='tun0'
 uci commit firewall
 /etc/init.d/firewall reload
 ```

 Pokud chcete zakázat veškerý provoz, který není chráněn VPN, spusťte následující příkaz. Tímto způsobem nebudete mít v případě odpojení VPN vůbec žádné připojení k internetu. Pokud tento krok neprovedete, bude vaše skutečná IP adresa odhalena, pokud se VPN odpojí.

 ```shell
 uci del_list firewall.@zone[1].network='wan'
 uci del_list firewall.@zone[1].network='wan6'
 uci commit firewall
 /etc/init.d/firewall reload
 ```

 Pokud jste změnili názor a chcete povolit přímý přenos, spusťte následující příkaz:

 ```shell
 uci add_list firewall.@zone[1].network='wan'
 uci add_list firewall.@zone[1].network='wan6'
 uci commit firewall
 /etc/init.d/firewall reload
 ```

<!-- comment -->

## 7. Nastavte automatické spouštění pro AdGuard VPN CLI

Chcete-li po restartu routeru automaticky spustit AdGuard VPN CLI, vytvořte soubor v `…/etc/init.d/adguardvpn`.

Toto vložte do souboru:

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

Spuštěním tohoto příkazu udělíte přístup k automatickému spouštění a povolíte jej:

```jsc
 chmod +x /etc/init.d/adguardvpn
 /etc/init.d/adguardvpn enable
```
