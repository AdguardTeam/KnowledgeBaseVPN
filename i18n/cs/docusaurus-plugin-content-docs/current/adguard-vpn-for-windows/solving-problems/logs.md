---
title: Jak shromažďovat a odesílat protokoly
sidebar position: 1
---

Pokud při používání AdGuard VPN pro Windows narazíte na problém, můžete nás o něm informovat. Uvítali bychom, kdybyste zasílali také protokoly aplikací, protože nám pomáhají řešit problémy mnohem rychleji.

## Shromažďování protokolů

### Standardní protokoly

Ve výchozím nastavení používá AdGuard VPN pro Windows standardní úroveň záznamů, tj. základní sběr dat o spuštěných procesech aplikace. Před odesláním protokolů otevřete AdGuard VPN pro Windows a pokud je to možné, zopakujte činnosti, které vedly k chybě. Zaznamenejte přesný čas, kdy k této chybě došlo.

### Rozšířené protokoly

Ve většině případů je výchozí úroveň záznamů dostatečná pro dohledání případných chyb. V některých případech jsou však vyžadovány podrobnější technické informace o zařízení a připojeních, a pak vás náš tým podpory požádá o povolení rozšířené úrovně záznamů. Chcete-li odeslat tento typ protokolů, postupujte podle následujících kroků:

1. Otevřete AdGuard VPN pro Windows a vyberte **Nastavení** v nabídce výše → **Nastavení aplikace** → **Pokročilá nastavení** → **Úroveň záznamů**.

1. V části **Úroveň záznamu** vyberte možnost **Zaznamenat vše**.

    ![Logging level *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/logging.jpeg)

1. Zopakujte akce, které vedly k chybě a zaznamenejte čas, kdy k ní došlo.

1. Přepněte úroveň záznamů zpět na **Zaznamenat výchozí**.

### Záznamy trasování

Někdy vás náš tým podpory může požádat o zaslání záznamů trasování. K tomu je třeba postupovat podle následujících kroků:

1. Klikněte pravým tlačítkem na ikonu AdGuard VPN v nabídce na hlavním panelu a vyberte **Ukončit AdGuard VPN**.

    ![Exit *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/exit.png)

    Pokud se zobrazí varovná zpráva, odsouhlaste ukončení služby.

    ![Attention *mobile](https://cdn.adtidy.org/content/kb/vpn/windows/logs/attention.png)

1. Otevřete konzoli (na úvodním panelu zadejte `cmd`).

1. Spusťte aplikaci příkazem `C:\"Program Files (x86)"\AdGuardVpn\AdGuardVpn.exe /trace`, pokud používáte 64bitový systém Windows a `C:\"Program Files"\AdGuardVpn\AdGuardVpn.exe /trace`, pokud používáte 32bitový systém.

1. Znovu reprodukujte problém. Důrazně doporučujeme zaznamenat přesný čas, kdy jste problém reprodukovali: pomůže to našemu týmu podpory najít příslušné záznamy v protokolu a rychleji problém vyřešit.

1. Exportujte zaznamenané protokoly: **Podpora** → **Exportovat protokoly a systémové informace**.

Nedělejte si starosti, pokud je soubor záznamu velký. Abychom mohli váš problém vyřešit, potřebujeme znát co nejvíce podrobností.

## Odesílání protokolů

Chcete-li odeslat protokoly našemu týmu podpory, postupujte podle následujících kroků:

1. Klikněte na **Podpora** v nabídce výše → **Nahlásit chybu**.

    ![Report a bug *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/support_report.jpeg)

1. V otevřeném formuláři zadejte svou e-mailovou adresu a popište nalezenou chybu včetně času, kdy k ní došlo. Pokud nemůžete problém reprodukovat, uveďte co nejpřesněji, kdy k němu naposledy došlo.

    ![Report *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/report_bug.png)

1. Vedle položky **Odeslat podrobné systémové informace** je zaškrtávací políčko, což znamená, že při odesílání hlášení se odesílají také protokoly.

> Pokud je pro vás z nějakého důvodu pohodlnější poslat nám protokoly jiným způsobem, můžete je exportovat sami. Chcete-li to provést, přejděte do **Podpora** → **Exportovat protokoly a systémové informace**.

![Export *border](https://cdn.adtidy.org/content/kb/vpn/windows/logs/export.jpeg)

**Poznámka**: pokud při pokusu o export protokolů narazíte na problémy, existuje alternativní způsob. Postupujte podle následujících kroků:

1. Otevřete aplikaci Průzkumník

1. Do vyhledávacího pole vložte `%programdata%/adguardvpn`

1. Vyhledejte složku s názvem **Protokoly**

1. Archivujte složku

1. Odešlete protokol našemu týmu podpory
