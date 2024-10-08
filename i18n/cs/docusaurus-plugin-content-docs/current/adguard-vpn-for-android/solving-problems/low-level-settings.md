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

Pokud je toto nastavení povoleno, vytvoří AdGuard VPN v adresáři mezipaměti aplikace soubor `.pcap` s časovým razítkem (např. `1682599851461.pcap`). Tento soubor obsahuje seznam všech síťových paketů přenesených skrze VPN a lze jej analyzovat pomocí programu [Wireshark](https://www.wireshark.org/).

### Hlídací pes

Hlídací pes sleduje stav procesu VPN a kontroluje, zda s ním nejsou nějaké problémy. Když je povolen, AdGuard VPN se bude chránit před agresivními aplikacemi pro spořič baterie, které by ji jinak mohly ukončit.

### Preferovaná verze IP

Zde můžete nastavit adresy koncových bodů. Existují tři možnosti: IPv4, IPv6 nebo IPv4 a IPv6 (pokud vaše zařízení podporuje oba protokoly).

### Rozsahy IPv4 vyloučené z VPN

VPN tunel pro rozsahy IPv4 uvedené v této části bude zakázán.

### Rozhraní IPv6

Po povolení této možnosti budete mít při směrování provozu přes připojení VPN k dispozici adresu IPv6. Výjimky můžete nastavit v části _Rozsahy IPv6 vyloučené z VPN_.

### Rozsahy IPv6 vyloučené z VPN

VPN tunel pro rozsahy IPv6 uvedené v této části bude zakázán.

:::note

Nejprve je třeba povolit nastavení _rozhraní IPv6_ v části _Nízkoúrovňová nastavení_, jinak se toto nastavení nepoužije.

:::

### MTU (maximální přenosová jednotka)

Zde můžete nastavit maximální velikost (v bajtech) datového paketu používaného v lokální VPN. Doporučený rozsah je 1500 –9000 bajtů.

### Vyloučené aplikace

Zde můžete uvést UID (jedinečné identifikátory) nebo názvy balíčků aplikací, které chcete vyloučit ze směrování VPN.
Na rozdíl od aplikací přidaných do běžných _Výjimek_ se provoz aplikací přidaných do _Vyloučených aplikací_ vůbec nepřenáší do služby lokální VPN ve vašem zařízení. Místo toho směruje přímo do cíle.

### Port proxy serveru

Zde můžete nastavit interní port proxy serveru SOCKS5. Výchozí možnost je 1080.
