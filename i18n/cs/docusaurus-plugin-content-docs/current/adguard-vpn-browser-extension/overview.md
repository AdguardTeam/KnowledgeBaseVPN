---
title: Přehled funkcí
sidebar_position: 1
---

Rozšíření prohlížeče AdGuard VPN je k dispozici pro Chrome, Firefox, Operu a Edge. Uživatelské rozhraní a funkce se v jednotlivých prohlížečích neliší, takže níže uvedený přehled se bude týkat rozšíření AdGuard VPN pro všechny prohlížeče.

:::note

Rozšíření prohlížeče AdGuard VPN můžete používat pouze po přihlášení. Přihlaste se pomocí účtu AdGuard, přes Google, Facebook nebo Apple. Ve druhém případě se ujistěte, že je váš účet vázán na stejnou e-mailovou adresu jako účet AdGuard. If you have an [AdGuard VPN subscription](/general/subscription), it will be activated automatically in AdGuard VPN Browser Extension. Nemáte ještě účet AdGuard? [Zde si jej vytvořte](https://auth.adguardaccount.com/registration.html).

:::

## Uložená umístění

Oblíbená umístění si můžete uložit pro rychlý přístup. Stačí najet na umístění a kliknout na ikonu záložky, která se zobrazí:

![Save a location *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-locations-en.png)

Označená umístění se pak zobrazí na kartě *Uložené*.

![Saved tab *mobile](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/saved-tab-en.png)

## Statistiky

Sekce *Statistiky* v nabídce představuje jednoduchý způsob, jak sledovat, kolik dat prochází skrze vaše připojení VPN.

![Statistics *mobile](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/Statistics.png)

Kdy se statistiky mohou hodit:

- **Zkontrolujete, zda VPN skutečně funguje**. Rychlý pohled na statistiky potvrzuje, že vaše připojení je aktivní a data jsou směrována skrze VPN.

- **Sledujte neočekávanou aktivitu**. Pokud se provoz zvyšuje, když zařízení nepoužíváte, je možné, že něco na pozadí — záložka nebo rozšíření — odesílá data.

- **Řešení problémů s pomalým připojením**. Pokud se vám připojení zdá pomalé, může to znamenat, že na pozadí běží nebo se stahuje nějaká aplikace.

:::note

Všechny statistiky jsou uloženy lokálně ve vašem zařízení. Počítáme pouze množství použitých dat — nevidíme, které webové stránky navštěvujete. Pokud statistiky nepotřebujete, můžete je také deaktivovat.

:::

Sekce *Statistiky* je k dispozici uživatelům placené verze.

## Settings (for the active profile)

Chcete-li spravovat rozšíření prohlížeče AdGuard VPN:

- Klikněte na jeho ikonu na panelu prohlížeče, klikněte na tři čáry a vyberte *Nastavení*,
- Nebo přejděte ve svém prohlížeči na stránku *Správa rozšíření*, klikněte na *Podrobnosti* pod *AdGuard VPN* a spravujte nastavení odtud.

Po dokončení se vlevo zobrazí několik karet:

### Settings

The *Settings* menu is divided into two distinct sections:

- **Settings**: Options here apply exclusively to the currently active profile: *Exclusions*, *DNS server*, *Quick connect*, and *Block WebRTC*.
- **General settings**: These parameters apply to the entire extension, regardless of which profile is selected: *Theme*, *Language*, *Display AdGuard VPN in the browser context menu*, and *Help improve AdGuard VPN*.

![Settings](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/settings.png)

#### Exclusions

The *Exclusions* option allows you to configure website routing. You can choose between two options, each maintaining a separate list:

- **VPN is on everywhere except for the websites below**: AdGuard VPN works on all websites by default, with the exception of the domains added to this list.
- **VPN is on selectively: only for the websites below**: AdGuard VPN works only on the websites added to this list and remains inactive for all others.

When adding a website to an exclusions list, you can enter the domain manually or select the *From the list* option. It provides predefined categories (such as *Shopping* or *Messengers*) with popular services, allowing you to add all relevant domains for a service in one click.

Managing exclusions via the *Settings* tab applies the lists to the active profile. You can also configure exclusions for any profile under *Manage profiles*.

##### Import and export

Not only can you add and remove websites, you can also transfer ready exclusions lists to other devices where AdGuard VPN is installed. To export your exclusions list, follow the 4-step instruction below:

1. Open AdGuard VPN Browser Extension from where you want to export your exclusions lists. Vyhledejte příslušný oddíl a klikněte na tlačítko *Exportovat*. Stáhne se archiv `exclusions.zip`.
1. There are two `.txt` files inside the archive, one for each of the two exclusions lists. Můžete k nim přidat další výjimky, odstranit stávající, přejmenovat soubory nebo nechat archiv tak, jak je.
1. Při přenosu mezi různými zařízeními odešlete soubor `.zip` do zařízení pro import.
1. V tomto zařízení otevřete AdGuard VPN. Vyhledejte příslušnou sekci, klikněte na tlačítko *Importovat* a vyberte archiv.

Done!

#### DNS server

By default, the *AdGuard DNS Non-filtering* server is selected to ensure privacy without interfering with website content. If you want additional protection, you can choose a DNS server that blocks ads, trackers, or malicious domains, or enables parental control. Brief descriptions under the names of DNS servers will help you navigate and make your decision.

Learn more about [DNS servers from various providers](https://adguard-dns.io/kb/general/dns-providers/).

Configuring *DNS server* directly in the *Settings* tab applies the selected server to the active profile. You can also assign a preferred DNS server to any profile under *Manage profiles*.

#### Quick connect

The *Quick connect* section defines which location the extension connects to when clicking the main *Connect* button:

- Fastest location
- Last used location
- Specific countries and servers

Configuring *Quick connect* directly in the *Settings* tab applies these parameters to the active profile. You can also set a preferred connection location for any profile under *Manage profiles*.

![Quick connect](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/quick-connect.png)

#### Block WebRTC

This feature blocks WebRTC, which can leak your real IP address even when using a proxy or VPN. Some messengers, streaming platforms, or games may stop working properly with this option enabled.

Toggling *Block WebRTC* directly in the *Settings* tab applies this setting to the active profile. You can also enable or disable WebRTC blocking for any profile under *Manage profiles*.

### General settings

The options in this section apply globally to the entire extension, regardless of which profile is selected:

- **Theme**: Select a preferred interface appearance: Light, Dark, or Browser default.
- **Language**: Change the display language of the extension.
- **Display AdGuard VPN in the browser context menu**: Toggle quick access to AdGuard VPN actions from the browser’s right-click menu.
- **Help improve AdGuard VPN**: Enable sending crash reports and technical data to help improve extension performance and stability. All data is collected anonymously, is never shared with third parties, and you can withdraw your consent at any time.

### Manage profiles

To create, edit, or delete profiles, open the profile switcher in the bottom-left corner of the sidebar and select *Manage profiles*.

You can have up to 10 profiles, including the *Default* profile.

![Manage profiles](https://cdn.adtidy.org/content/release_notes/vpn/browser_extension/2.12/manage-profiles-new.png)

In this view, you can rename profiles, delete setups you no longer need, and configure the following parameters for each profile individually:

- **Quick connect**: Set the default connection behavior (Fastest location, Last used location, or a specific country and server).
- **DNS server**: Select a dedicated DNS provider or keep the default server (AdGuard DNS Non-filtering).
- **Block WebRTC**: Enable or disable WebRTC blocking to prevent IP leaks.
- **Exclusions**: Set up a custom exclusions list and select a routing mode for that profile.

The *Default* profile is protected and cannot be renamed or deleted.

### Účet

The third tab of AdGuard VPN Browser Extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

### Podpora

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn’t working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

### O produktu

Another minor tab, where you can check the extension’s version, visit the official website, and view the EULA or Privacy policy.
