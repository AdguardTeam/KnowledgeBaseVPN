---
title: Jak shromažďovat a odesílat záznamy
sidebar_position: 1
---

Existuje několik způsobů shromažďování záznamů rozšíření prohlížeče AdGuard VPN, ale bez ohledu na to, který z nich zvolíte, budou shromažďovány stejné údaje. V rozšíření nejsou záznamy rozděleny na standardní a ladicí. Pro případy, kdy se vyskytne problém, který vám brání v použití jednoho nebo druhého pokynu, jsou k dispozici různé možnosti sběru záznamů.

## Shromažďování a odesílání záznamů prostřednictvím sekce *Nahlásit chybu*

1. Otevřete rozšíření prohlížeče AdGuard VPN a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k této chybě došlo.
1. Otevřete *Nastavení* kliknutím na ikonu menu hamburgeru (☰) → *Podpora* → *Nahlásit chybu*.
1. V otevřeném formuláři ponechte automaticky vloženou e-mailovou adresu nebo zadejte jinou a popište nalezenou chybu včetně času, kdy k ní došlo. Pokud nemůžete problém reprodukovat, uveďte co nejpřesněji, kdy k němu naposledy došlo.
1. Ujistěte se, že je zaškrtnuto políčko vedle *Zahrnout diagnostické hlášení do zprávy *a klepněte na* Odeslat*. Tímto způsobem budete odesílat záznamy spolu s hlášením o chybě.

## Shromažďování a odesílání záznamů prostřednictvím tlačítka *Exportovat protokoly*

1. Otevřete rozšíření prohlížeče AdGuard VPN a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k této chybě došlo.
1. Klikněte pravým tlačítkem na ikonu rozšíření prohlížeče AdGuard VPN.
1. V otevřeném menu klikněte na *Exportovat protokoly*.
1. V důsledku toho bude soubor protokolů uložen do vašeho zařízení ve formátu `*. txt`.

Po shromáždění záznamů je třeba je předat našemu vývojovému týmu. K tomu je potřeba:

1. Nahlásit chybu na GitHub. Podrobné pokyny k vytvoření problému na GitHubu najdete v tomto článku.
1. Odešlete archiv s protokoly a časem reprodukce na adresu `devteam@adguard.com` a připojte odkaz na svůj problém na GitHubu. Archiv s protokoly a časem reprodukce můžete také přidat na Disk Google a sdílet jej pomocí `devteam@adguard.com` a připojit odkaz na Disk Google ke svému problému na GitHubu.

## Shromažďování a odesílání protokolů prostřednictvím nástrojů pro vývojáře v prohlížeči

### Chrome

1. Otevřete rozšíření prohlížeče AdGuard VPN a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k této chybě došlo.
1. Přejděte na `chrome://extensions`
1. Zapněte *režim vývojáře*

    ![Režim pro vývojáře *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

1. Klikněte na `background.html`

    ![Pozadí *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

1. Otevřete kartu *Console*

    ![Karta Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

1. Otevřete kontextovou nabídku a klikněte na *Uložit jako…*

    ![Uložit jako *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Po shromáždění záznamů je třeba je předat našemu vývojovému týmu. K tomu je potřeba:

1. Nahlásit chybu na GitHub. Podrobné pokyny k vytvoření problému na GitHubu najdete v tomto článku.
1. Odešlete archiv s protokoly a časem záznamu na adresu `devteam@adguard.com` and attach a link to your GitHub issue. Archiv s protokoly a časem záznamu můžete také přidat na Disk Google a sdílet jej pomocí `devteam@adguard.com` a připojit odkaz na Disk Google ke svému problému na GitHubu.

### Firefox

1. Otevřete rozšíření prohlížeče AdGuard VPN a pokud je to možné, zopakujte akce, které vedly k chybě. Zaznamenejte přesný čas, kdy k této chybě došlo.
1. Přejděte na `about:addons`
1. Klikněte na *Doplňky ladění*

    ![Doplňky ladění *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

1. Klikněte na *Zkontrolovat*

    ![Zkontrolovat *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

1. Přejděte na kartu *Console*

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

1. Click *Save all Messages to File*

    ![Uložit *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Po shromáždění záznamů je třeba je předat našemu vývojovému týmu. K tomu je potřeba:

1. Nahlásit chybu na GitHub. Podrobné pokyny k vytvoření problému na GitHubu najdete v tomto článku.
1. Odešlete archiv s protokoly a časem záznamu na adresu `devteam@adguard.com` and attach a link to your GitHub issue. Archiv s protokoly a časem záznamu můžete také přidat na Disk Google a sdílet jej pomocí `devteam@adguard.com` a připojit odkaz na Disk Google ke svému problému na GitHubu.
