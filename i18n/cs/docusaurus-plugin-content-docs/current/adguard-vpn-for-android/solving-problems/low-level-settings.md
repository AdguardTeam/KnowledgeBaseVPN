---
title: Průvodce nízkoúrovňových nastavení
sidebar_position: 6
---

## Jak dosáhnout nízkoúrovňových nastavení

:::caution

Změna _Nízkoúrovňových nastavení_ může způsobit problémy s výkonem AdGuard VPN, může přerušit internetové připojení nebo ohrozit vaši bezpečnost a soukromí. Tuto sekci byste měli otevřít pouze v případě, že víte, co děláte, nebo vás o to požádal náš tým podpory.

:::

Chcete-li přejít na _Nízkoúrovňová nastavení_, otevřete aplikaci AdGuard VPN a klepněte na ikonu ozubeného kola v pravém dolním rohu obrazovky. Poté zvolte _Obecné_ → _Pokročilé_ → _Nízkoůrovňová nastavení_.

## Nízkoúrovňová nastavení

Níže uvádíme všechna nízkoúrovňová nastavení dostupná v AdGuard VPN pro Android a vysvětlujeme, k čemu slouží. Ještě jednou vás vyzýváme, abyste si s těmito nastaveními nezahrávali naslepo, i když jste si přečetli tuto příručku. Považujte ji za tahák pro případy, kdy víte, co děláte, ale chcete si doplnit konkrétní informace.

### AdGuard VPN protokol

Ve výchozím nastavení používá protokol AdGuard VPN transportní protokol HTTP/2, aby nedošlo k detekci a byla zachována vysoká rychlost. Více informací o jeho implementaci si můžete přečíst ve [specializovaném článku](/general/adguard-vpn-protocol.md).

AdGuard VPN můžete přepnout tak, aby místo toho používala transportní protokol QUIC. [QUIC](https://adguard-vpn.com/kb/general/why-adguard-vpn/#6-quic-support) je relativně nový protokol a proto může být méně stabilní. Pokud je však vaše internetové připojení nestabilní (např. při připojení k veřejné Wi-Fi), poskytuje lepší zabezpečení a zvyšuje rychlost připojení díky technologii [Head-Of-Line Blocking](https://adguard-dns.io/en/blog/dns-over-quic.html#headoflineblocking).

### Zahrnout bránu Wi-Fi v trasách VPN

Pokud je toto nastavení povoleno, budou IP adresy brány přidány do tras VPN při připojení k Wi-Fi.
Pokud ho zakážete, změní se konfigurace tras (filtrované rozsahy IP). Brána Wi-Fi sítě, ke které je uživatel připojen, bude vyloučena, a proto nebude podléhat filtrování.

Toto nastavení je ve výchozím nastavení povoleno.

### Zachytávání paketů (PCAP)

If this setting is enabled, AdGuard VPN will create a `.pcap` file with a timestamp for its name (for instance, `1682599851461.pcap`) in the app cache directory. This file lists all network packets transferred through the VPN and can be analyzed with the [Wireshark program](https://www.wireshark.org/).

### Watchdog

Watchdog monitors the VPN process state to check if there are any problems with it. When enabled, AdGuard VPN will protect itself against aggressive battery saver apps that could otherwise kill it.

### Preferred IP version

Here you can set up the endpoint addresses. There are three options: IPv4, IPv6 or IPv4 and IPv6 (if your device supports both).

### IPv4 ranges excluded from VPN

VPN tunneling for the IPv4 ranges listed in this section will be disabled.

### IPv6 interface

After enabling this option you will have an IPv6 address while routing traffic through the VPN connection. You can set up the exclusions in the _IPv6 ranges excluded from VPN_.

### IPv6 ranges excluded from VPN

VPN tunneling for the IPv6 ranges listed in this section will be disabled.

:::note

You need to enable _IPv6 interface_ setting in _Low-level settings_ first, otherwise this setting will not be applied.

:::

### MTU (maximum transmission unit)

Here you can set the maximum size (in bytes) of the data packet used in local VPN. The recommended range is 1500-9000 bytes.

### Excluded apps

You can list here UIDs (unique identifiers) or package names of the apps that you want to exclude from VPN routing.
Unlike with apps added to regular _Exclusions_, the traffic of apps added to _Excluded apps_ doesn’t go to the local VPN service on your device at all. Instead, it goes directly to the destination.

### Proxy server port

Here you can set up the internal SOCKS5 proxy server port. The default option is 1080.
